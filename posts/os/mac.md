---

layout: hebi-post
title: Mac
location: 淮北
time: 07:45:28
tags: mac
categories: 系统

---
# 终端

```
alias google-chrome='open -a Google\ Chrome'
```

让spotlight重新建立索引：

```
sudo mdutil -e / # 建立整个硬盘
sudo mdutil -e /Volumn/MyVolumn ＃ 针对单个volumn，应该可以对任意一个文件夹
```

<!--more-->

# 软件

## font-book
有很多字体可以预览，通过它还可以装字体。

## DigitalColor Meter
屏幕取色。如果CSS要使用rgba，则选择sRGB的值。

## iterm

快捷键

`cmd+enter` full screen

`cmd+/` cursor

`option+cmd+b`: 回放

`shift+cmd+d`横向分割

`md+d` 纵向

## zsh

虽然不是mac的专利，但是我认识它是在这。使用它的原因是有oh-my-zsh。一定要结合autojump使用。
确实一个人必须经历过足够的麻烦才会意识到简洁的珍贵。
这和使用一门语言，最好先自己去实现所要的功能，才能体会到别人维护很多年的库的来之不易。
且行且珍惜。

```
cat /etc/shells
chsh -s /bin/zsh
```

### Install oh-my-zsh
```
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

### Autojump

Install

```
brew install autojump
```

in `.zshrc`

```
plugins = (..., autojump)
```

autojump支持的功能：

```
j xxx # 进入目录。会自动学习你进过的目录，并且只要输个大概就可以了。

.. & ... & / & ~ & - # 不用cd了

ls -l **/*.sh
```

## homebrew

在github上大概前十的。装软件不用sudo。

```
brew install xxx
brew uninstall xxx
brew search xxx
brew --prefix
```

homebrew install in `/usr/local/Celler/…`
it create symbol links in `/usr/local/bin/…`

## KeyRemap4MacBook && PCKeyboardHack
System Preference ==> Keyboard ==> modifier ==> Caps Lock无操作。
再用PCKeyboardHack改掉

## Alfred

Workflow -> script filter -> bash

```
cat<<EOF
<items>

<item>
<title>Chrome书签</title>
<icon>icon.png</icon>
</item>

<item>
xxx
</item>

</items>
EOF
```

## Tunnel Blick

软件有`Installer`和`Uninstaller`。

使用`3.4 beta`而不是`3.3.2`。

在10.10中，连上就会断开。解决方法：

* 域名服务器设置为`3.1`
* 或，高级，去掉勾选“连接或断开后，清空DNS缓存”
