---

layout: hebi-post
title: Vim
location: 合肥
time: 16:28:11
categories: 系统
---

## 未分类

录制功能

正常模式下,按`qq...q`进行录制.意思是将`...`录制到`q`里.

使用方法:
`@q` `5@q`

单词统计

g Ctrl-g

拼写模式下,按`z=`显示提示

选中模式下,按`=`缩进文本

<!--more-->



## 跳转

* `Ctrl-]` 进入函数
* `Ctrl-t` 返回
* `g[` 直接出所有ref的列表
* `Ctrl-]` 后: `:tn` 下一个匹配的tag `:tp` 上一个 `:ts` 列表

* `Ctrl-d` 下移半屏
* `Ctrl-u` 上移半屏
* `Ctrl-f` 下移一屏
* `Ctrl-b` 上移一屏

* `zz` 当前行放到中央
* `zt` 当前行放到顶部
* `zb` 当前行放到底部

* `H` 光标置于当前屏幕顶部
* `L` 光标置于当前屏幕底部

* `%` 跳至匹配的括号
* `gd` 跳至局部变量或函数名

### mark

正常模式下,`ma`添加mark`a`

`a 可以跳转到 mark a

`:marks` 显示所有mark

特殊mark: ` 跳转前光标位置

## 自动补全

* `Ctrl-p` 上一个
* `Ctrl-n` 下一个

## 替换

```
:0,$s/xxx/xxx/g # [range]s/from/to/[flags]
```

## 多文件

```
vim -p aaa bbb # 在两个标签中打开
vim -o aaa bbb # 两个文件上下split
```

## 文件操作

* `:f <file>` 当前文件改名为file
* `:w <file>` 当前文件内容写入file
* `r <file>` file的内容写到当前光标
* `r !<cmd>` cmd的运行结果写到当前光标
