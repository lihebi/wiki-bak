#basic syntax
```sh
a=5
b=hello
c=”hello world”
```

# 变量

""中的变量$xxx会解析,''不会.

```
`xxx` <=> $(xxx)
```

## 变量替换

**返回结果，但不改变原变量的值。**

```
# 若var未被声明，则以DEFAULT为其值
${var-DEFAULT}
${var=DEFAULT}
# 若
# 1. var 未被声明 或
# 2. 其值为空
# 则以DEFAULT为其值
${var:-DEFAULT}
${var:=DEFAULT}
```


## 特殊变量

```
$0 # 脚本名称
$<n> # 第n个参数
$# # 参数数量
$* # 所有参数，作为一个字符串
$@ # 所有参数，作为字符串数组
```

```
# example

./a.sh hello world
"$0" => ./a.sh
"$1" => hello
"$2" => world
"$#" => 2
"$*" => "./a.sh hello world"
"$@" => [ "./a.sh" "hello" "world" ]
```

```
$$ # 当前进程的PID
$? # 上一个命令的返回值
$! # 运行在后台的最后一个进程的PID。done了也算。
$_ # 上个命令的最后一个字段
```

# 字符串

substring使用的是bash中的正则。

* `${#string}` $string的长度
* `${string:5}` $string 从5位置开始的子串
* `${string:5:3}` 5位置开始，提取3个。
* `${string#substring}` 从*开头*删除substring的*最短*匹配
* `${string##substring}` 从*开头*删除substring的*最长*匹配
* `${string%substring}` 从*结尾*删除substring的*最短*匹配
* `${string%%substring}` 从*结尾*删除substring的*最长*匹配

* `${string/substring/replace}` 第一个匹配的substring替换为replace
* `${string/#substring/replace}` 开头是substring,则换为replace
* `${string/%substring/replace}` 结尾时substring,则换为replace

substring若不加引号,则为正常字符串,加引号则可用$转义.

# 用户交互

```
read -p "please input: " a b c
```

# 条件测试

```
test <exp>
[ <exp> ]
[[ <exp> ]]
```

## 文件测试

* `-e <file>` 存在
* `-a <file>` 更好的存在.(有时候-e会出错)
* `-f <file>` 普通文件?
* `-d <file>` 目录?
* `-L <file>` 符号链接?
* `-s <file>` 非空?(size!=0)
* `-r <file>` 可读?
* `-w <file>` 可写?
* `-x <file>` 可执行?
* `<file1> -nt <file2>` newer than?
* `<file1> -ot <file2>` older than?

## 字符串测试

* `-z <string>` 空?
* `-n <string>` 非空?
* `string1` == `string2` 相等? 也可直接用=
* `string1` != `string2`

## 整数

[]

* `-eq`
* `-ne`
* `-gt`
* `-ge`
* `-lt`
* `-le`

(())

* ==
* !=
* >
* >=
* <
* <=

## 逻辑

[]

* -a
* -o
* !

[[]]

* &&
* ||
* !

# 数值计算

```
(( a=2+3 ))
a = $(( 2+3 ))

a = ((12))
echo $((a++)) # => 12
echo $((++a)) # => 14

echo ((5>3)) # => 1
```

# 语法结构


## If

```
if condition1; then
  # ...
elif condition2
then
  # ...
else
  # ...
fi
```


其中condition有三种形式：

`[]`: TODO

`[[]]`: TODO

`(())`: TODO

关于`;`:
如果语句后面是行结束符，不需要。
如果有`then`等在一行上，需要。

## About [] [[]]
`[` is a synonym for test, and a builtin for efficiency. It is a command.
`[[` is a keyword, perform comparisons in a manner more familiar to programmers.

examples:
```sh
if test -z “$1”
then
    xxx
fi
# an equalvalent statement
if /usr/bin/test -z “$1”
# another equalvalent
if [ -z “$1” ]
```

## Case

```
case $a in
1|en) echo 'en';;
2|zh) echo 'zh';;
esac
```

## 循环

```
# while
while condition; do xxx; done
# until
until condition; do xxx; done
# for
for condition; do xxx; done
# conditions
for fname in *
for fname in `/etc/*` # do not need the 2 `
for x in aa bb cc
for x in $@
for x; do xx
for (( i=1; i<5; i++ ))
```

可以使用`break`, `continue`.

## 函数

```
# 形式1
function func {
  return 1;
  exit 1;
}
# 形式2
func() {
  return 1;
}
```

# 一些脚本

## ffmpeg 连接文件

Create a file mylist.txt with all the files you want to have concatenated in the following form (lines starting with a # are ignored):

```
# this is a comment
file '/path/to/file1'
file '/path/to/file2'
file '/path/to/file3'
```

then

```
ffmpeg -f concat -i mylist.txt -c copy output
```

generate mylist.txt

```
for f in ./*.wav; do echo "file '$f'" >> mylist.txt; done
```

官方文档：[concat][ffmpeg]

[ffmpeg]: https://trac.ffmpeg.org/wiki/How%20to%20concatenate%20(join,%20merge)%20media%20files)

```sh
#!/bin/bash

mkdir out
echo -n "concat:" > out/list.txt
for f in *.mp4
do
    ffmpeg -i $f -c copy -bsf:v h264_mp4toannexb -f mpegts 'out/'$f'.ts'
    echo -n $f'.ts|' >> out/list.txt
done

cd out
ffmpeg -i `cat list.txt` -c copy -bsf:a aac_adtstoasc output.mp4
```
