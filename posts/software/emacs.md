---

layout: hebi-post
title: Emacs
location: 合肥
time: 00:07:06
categories: 软件
---

## 快捷键

C => Ctrl
M => Alt
M-x == Esc x

#### General
```
C-g # 取消
C-<SPC> # 开启选中模式
C-w # 删除选中
```

<!--more-->

#### C-x

```
C-x C-c # exit
```

#### Move

Ctrl

```
C-a
C-e
C-n # next
C-p # previous
C-f # forward
C-b # backward
C-v # next screen
Esc v # == C-v
C-l # place cursor in center, top, bottom

ctrl-shift-a 从光标到行首，选中
ctrl-shift-e 从光标到行尾，选中
```

Alt

```
M-f # to the end of the word
M-b # to the beginning of the word
M-a # to the beginning of a sentence
M-e # to the end of a sentence

M-< # beginning of the doc
M-> # end of the doc
```

#### 重复

```
C-u 8 <xx> # <xx>执行8次
C-u 8 * # 插入8个*
C-u 0 C-l top # == C-l C-l
```

例外：

```
C-u 8 C-v 滚动8行
```

#### delete & kill & yank

```
C-d # delete
C-h # backspace
M-d # delete a word
C-k # kill to the end of line
C-k C-k # kill the line breaker, J
M-k # kill to the end of sentence
```
kill 可以被yank C-y
delete 不可以

```
C-y # yank
```
连续C-k几次，然后C-y会粘贴所有
C-y粘贴最近的一次kill，使用C-y后再立即使用M-y会将刚才粘贴的东西变成上一次kill的东西，
再按一次会再往前，直到循环，然后继续重复。

#### undo

```
C-/ undo
C-_
C-x u
```

#### file

```
C-x C-f find a file, and open it
C-x C-s save

C-x C-b list buffers
C-x b, than buffer name switch to that buffer

C-x C-c end emacs session. will ask to save
```

#### suspend

`C-z` suspend emacs
* UI: minimize
* terminal: to bg. type bg to list some.

```
jobs # list too.
fg # to bring it out.
fg %emacs
```

#### Mode

```
M-x fundamental-mode switch to fundamental mode
M-x text-mode
auto-fill-mode: 单词自动换行.默认margin是70.可以换：C-u 20 C-x f
or: C-x f, than 20
auto-fill-mode可以toggle
改变了默认margin后，emacs不会re-fill for you.自己refill current cursor：M-q

C-h m open doc for modes
```

#### Search

```
C-s
C-r： 反方向
C-s再按一次会选中下一个，回车结束。
```

#### 窗口

```
C-x 1 # kill all other window
C-x 2
C-M-v # scroll the bottom window
C-x o # move cursor to other window

C-x 3 # 水平分割
C-x 4 # C-f find file in new window

M-x make-frame # 产生新的窗口
M-x delete-frame
```

关闭最后一个frame时，session退出

#### Help

```
C-h ? # really help
C-h c C-p # very brief one line description of the command
C-h k C-p # more help
C-h f # previous-line describe a function
C-h v xxx # display doc of variables
C-h a file # display M-x command that has ‘file’
C-h i # read info pages
```
