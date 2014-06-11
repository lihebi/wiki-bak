
## API

socket

```
// domain: AF_INET(IPv4), AF_INET6(IPv6)
// type: SOCK_STREAM, SOCK_DGRAM
// protocol: end-to-end protocol. IPPROTO_TCP, IPPROTO_UDP
int socket(int domain, int type, int protocol);
```

inet_pton

```
// src: "192.168.1.1"
// dst: *数字
inet_pton(int addressFamily, const char *src, void *dst);
```

inet_ntop

```
// 数字 => "192.168.1.1"
// socklen_t: INET_ADDRSTRLEN IPv4可能最长的结果字符串（字节）
const char *inet_ntop(int addressFamily, const void *src, char *dst, socklen_t dstBytes);
```

htons

```
// convert hostshort from host byte order to network byte order.
uint16_t htons(unit16_t hostshort);
```

connect

```
// foreignAddr: (struct sockaddr *)&[sockaddr_in]
// addressLength: sizeof(struct sockaddr_in);
int connect(int socket, const struct sockaddr *foreignAddress, socklen_t addressLength);
```

#### Server

bind

```
int bind(int socket, struct sockaddr *localAddress, socklen_t addressSize);
```

listen

```
// 告诉TCP实现允许来自客户的连接
// 调用之前，任何连接请求被无声拒绝
int listen(int socket, int queueLimit);
```

accept

```
// 使套接字队列中的下一条连接出队。若队列空，则阻塞。
int accept(int socket, struct sockaddr *clientAddress, socklen_t *addressLength);
// 正确的使用方式：
struct sockaddr_storage address;
socklen_t addrLength = sizeof(address);
int clntSock = accept(sock, &address, &addressLength);
// 其中结构体定义如下
struct sockaddr_storage {
  sa_familiy_t
  ... // Padding and fields to get correct length and allignment
}; // 通用地址存储器
```

send

```
// 默认阻塞到发送了所有的数据为止。
// 返回：发送的字节数
// flags：改变默认行为。默认为0.
ssize_t send(int socket, const void *msg, size_t msgLength, int flags);
```

recv

```
// 默认阻塞到至少传输了一些字节为止。
// 返回：接受的字节数
ssize_t recv(int socket, void *rcvBuffer, size_t bufferLength, int flags);
```

## Code Snippets

#### TCP client

```
#include <stdlib.h>
#include <stdio.h>
#include <string.h> // for memset
#include <sys/socket.h>
#include <sys/types.h>
#include <netinet/in.h> // for IPPROTO_TCP
#include <unistd.h> // for close. use `man close`
#include <arpa/inet.h>

#define BUFFER_SIZE 30

int main() {

  // 创建socket
  int sock = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);

  // 构造servAddr
  char *servIP = "127.0.0.1";
  in_port_t servPort = 8080;
  struct sockaddr_in servAddr;
  memset(&servAddr, 0, sizeof(servAddr));
  servAddr.sin_family = AF_INET;
  // IP地址格式转换
  inet_pton(AF_INET, servIP, &servAddr.sin_addr.s_addr);
  servAddr.sin_port = htons(servPort);

  // 建立连接
  connect(sock, (struct sockaddr *)&servAddr, sizeof(servAddr));

  char str[] = "Hello";
  size_t size = strlen(str);
  // 发送数据
  send(sock, str, size, 0);

  char buffer[BUFFER_SIZE];
  // 接收返回的数据，放到buffer里
  recv(sock, buffer, BUFFER_SIZE-1, 0);

  // 关闭socket
  close(sock);

}

```

#### TCP server

```
#include <stdlib.h>
#include <stdio.h>
#include <string.h> // for memset
#include <sys/socket.h>
#include <sys/types.h>
#include <netinet/in.h> // for IPPROTO_TCP
#include <unistd.h> // for close. use `man close`

#define BUFSIZE 30

void handle(int clntSock) {
  char buffer[BUFSIZE];
  // 从client端socket接收数据，存入buffer，返回接受长度。一次只收BUFSIZE个字节。
  ssize_t numBytesRcvd = recv(clntSock, buffer, BUFSIZE, 0);
  // 循环接收直到收完为止。
  while(numBytesRcvd>0) {
    // 将接收到的buffer，send到client端buffer
    send(clntSock, buffer, numBytesRcvd, 0);
    // 接着接收没收完的。
    numBytesRcvd = recv(clntSock, buffer, BUFSIZE, 0);
  }
  // 关闭socket
  close(clntSock);
}

int main(){
  // 创建socket
  int servSock = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);

  // 构造servAddr
  in_port_t servPort = 8080;
  struct sockaddr_in servAddr;
  memset(&servAddr, 0, sizeof(servAddr));
  servAddr.sin_family = AF_INET;
  servAddr.sin_addr.s_addr = htonl(INADDR_ANY); // any incoming interface
  servAddr.sin_port = htons(servPort);

  // socket绑定到servAddr
  bind(servSock, (struct sockaddr *)&servAddr, sizeof(servAddr));

  // 监听socket
  listen(servSock, 5);

  for(;;) {
    struct sockaddr_in clntAddr;
    socklen_t clntAddrLen = sizeof(clntAddr);
    // 接受socket来的请求，把来的socket存入clntSock
    int clntSock = accept(servSock, (struct sockaddr *)&clntAddr, &clntAddrLen);
    // 处理之
    handle(clntSock);
  }
}
```
