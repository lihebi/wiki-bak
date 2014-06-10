---

layout: hebi-post
title: python
location: 淮北
time: 08:34:29
tags: 编程语言 python
categories: 语言
---

## 遍历文件夹
```
import os
for root, dirs, files in os.walk(‘.’):
for f in files:
print f
```

<!--more-->

## range
```
l = range(4, 10)
```

## 数字转换成字母
```
for c in range(65, 91):
print chr(c)

for c in arange(65+32, 91+32):
print chr(c)
```

## 字符串可以直接相加
```
'xxf'+'xxf'
```

## os.rename
```
os.rename(‘a.jpg’, ‘out/b.jpg’)
```
