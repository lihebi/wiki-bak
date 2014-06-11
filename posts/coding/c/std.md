
## strings.h

strcasecmp

```
// 忽略大小写。比较所有字节。
// 返回：s1>s2: >0
//      s1=s2: =0
//      s1<s2: <0
int strcasecmp(const char *s1, const char *s2);
```

strncasecmp

```
// 比较前n个字节
int strncasecmp(const char *s1, const char *s2, size_t n);
```

strlen

```
// ssize_t: signed int(POSIX)
// size_t: unsigned int
size_t strlen(const char *str);
```

## <signal.h>

signal

```
/**
 * sig
 * SIGABRT Signal Abort 中止
 * SIGFPE Floating-Point-Exception 浮点数异常
 * SIGILL Illegal Instruction 不合法指令
 * SIGINT Interrupt 中断
 * SIGSEGV Segmentation Violation 段错误
 * SIGTERM Terminate 中止
 * SIGPIPE Broken pipe 管道错误
 */

/**
 * `SIGPIPE`: one process open a pipe or FIFO for reading before another wrote to it.
 If the reading process never starts, or terminates unexpectly, writing to it raises SIGPIPE.
 Or output to a socket that isn't connected.
 */

/**
 * func
 * SIG_DFL default
 * SIG_IGN Ignore
 * customize: void handler_function(int parameter)
 */
void (*signal(int sig, void (*func)(int))) (int);
```
