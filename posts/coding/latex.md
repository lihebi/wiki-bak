---

layout: hebi-post
title: Latex
location: 合肥
time: 14:02:01
categories: 语言
---

```
\begin{enumerate}{\IEEEsetlabelwidth{12}}
\item xxx
\item xxx
\item xxx
\end{enumerate}
```

<!--more-->

## 在latex中写中文

`fc-list` 可以查看当前安装的字体。

```
\documentclass{article}
\usepackage{fontspec}
\setromanfont{LiHei Pro} % 俪黑Pro
\setmonofont{Courier New} % 等宽字型
\XeTeXlinebreaklocale "zh"
\XeTeXlinebreakskip = 0pt plus 1pt

\begin{document}

在Mac下的XeTeX里写中文~

\end{document}
```

其中有两行line break的设定是为了解决XeTeX中文的断行问题，
其余的部份就是用fontspec package来设定字型。
romanfont是默认使用的字型，
monofont是默认的等宽字，不指定的话只要用到等宽字就会看到乱码

要用xelatex编译
