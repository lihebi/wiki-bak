
## 未分类

echo

```
echo -e "\n\thello\tworld\n" # 可以使用\n等控制字符
```

pv

```
echo 'xxx' | pv -ql 20
```

column

```
mount | column -t # 格式化显示挂载信息
```

mount

```
# TODO
```

xargs

```
# 相当于``，并把输出放结尾
find /etc -name '*.conf' | xargs ls -l
# 等价于
ls -l `find ...`
```

export & source

```
# source 只在本shell可用
# export 声明为全局变量。只有全局变量可以被子shell继承
```

重定向

```
foo > outfile 2>&1 # stderr输出到stdout，stdout输出到outfile
foo 2> err.txt # stderr输出到err.txt
```



grep

```
# -i: 忽略大小写
# -n: 显示行号
# -v: 输出不匹配的行
# -H: 同时输出此行所在的文件名
grep <pattern> <file>
```

whereis & which

```
whereis <command> # 找到一条命令的二进制、源、手册所在路径
which <command> # 在PATH中找
```

dd

```
dd if=xxx.iso of=/dev/sdb bs=4m; sync
```

man

1. 普通用户可执行的命令
2. 系统调用手册，内核函数说明
3. 子程序手册，库函数说明
4. 系统设备手册，`/dev`目录中设备文件的参考说明
5. 配置文件格式手册
6. 游戏说明手册
7. 协议转换手册
8. 系统管理工具手册
9. linux系统例程手册

```
man 2 write
```

convert

```
convert xxx.jpg -resize 800 xxx.out.jpg # 800x<height>
```


## 文件

stat

```
stat <filename> # 显示文件详细信息
```

file

```
file <filename> # 显示文件类型信息
```

nl

```
nl <filename> # 添加行号。输出到stdout
```

ln

```
ln -s <target> <linkname> # 记忆：新的东西总要最后才发布。
```

ls

* `-r` 倒序
* `-s` 文件大小排序
* `-X` 扩展名排序
* `-t` 修改时间排序

tree

* `-d` 只显示目录
* `-f` 显示路径
* `-F` 条目后有 [*/=@|]
* `-r` 倒序
* `-t` 修改时间排序
* `-L(\d)` 显示n层

cat

* `-n` 输出带编号

head

* `-n <file>` 显示文件前n行。默认10。

tail

* `-<n>` 显示后n行
* `+<n>` 显示第n行到结尾
* `-F` 跟踪显示不断增长的文件结尾

cut (TODO)

* `-c<list>`
* `-f<list> -d<delimeter>`

其中list为

* `N` 用`,`分隔
* `N-`
* `N-M`
* `-M`

## 用户管理

id

```
id # 显示用户和组的信息
```

## 系统管理

pstree

```
# TODO
```

dmesg

```
dmesg # 查看内核日志
```

uname

* `-v` 内核版本 => `Darwin Kernel Version 13.1.0: Wed Apr ... EASE_X86_64`
* `-r` 内核发行信息 => `13.1.0`
* `-m` 机器硬件名称 => `x86_64`
* `-n` 网络节点。等价于`hostname` => `HebideMacBook-Pro.local`
* `-s` 操作系统名称。 => `Darwin`
* 如果不加参数，默认使用 -s。 => `Darwin`

du

```
# -n --numeric-sort
# -r --reverse
du -s * | sort -nr
```

strace

```
strace ./a.out # details about system calls when a program runs
```

screen

```
screen ./a.sh
Ctrl-a d # 断开
screen -ls # 显示所有任务.包含 screen ID
screen -r 4980.xxxx.localhost # 重新连接
```


## 网络

tcpdump

```
tcpdump -tt -r -nn xx.pcap
```

curl

```
curl ifconfig.me
```

scp

```
scp <local> [ -p port ] root@hostname:<path>
scp [-p port ] root@hostname:<path> <local>
```

## 操作

* 命令前加一个空格，不会出现在history中
* `Alt-.` 或 `Esc-.` 以倒序方式传递所输入的命令参数。
* `!!` 上一次命令
* `Ctrl-s` 停止显示
* `Ctrl-q` 恢复显示
* `Shift-pageup/down` pageup down
* `shift-Insert` 粘贴。鼠标中键。

## coding

ldd

```
ldd a.out # 打印程序需要的shared lib
```

ctags

* `-c++-kinds=+p` 生成函数原型
* `-fields=+iaS` 类的继承(inheritiance)、累成员的访问权限(access)、routine签名(Signature)
* `-extra=+q` 为类成员生成的tag加上其所属的类信息

```
ctags -R --c++kinds=+p --fields=+iaS --extra=+q
```

## 熟练的备份

* `Ctrl-l` 清屏
* `mkdir -p` 同时建立父目录
