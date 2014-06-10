---

layout: hebi-post
title: 正则表达式
location: 淮北
time: 18:01:41
tags: 正则表达式
categories: 语言

---

# 符号表
| 符号  | 含义 |
| ---   | --- |
|  .      | 除了换行符以外的任何字符 |
|  \b     | 单词的开始或结束 |
|  \d     | 一位数字 |
|  \s     | 任意空白字符(' ', \t, \n 等) |
|  \w     | 字母,数字,下划线,汉字 等 |
|  x{8}   | x 要重复8次 |
|  x{5,8} | x 的重复次数>=5,<=12 |
|  x{5,}  | 重复5+ |
|  *      | 重复0 或1 次 |
|  +      | 重复1+次 |
|  ?      | 重复0或1次 |
|  ^      | 字符串开始 |
|  $      | 字符串结束 |
|  [aeiou?,0-9]  | 匹配这个里面的任何一个 |
|  [^aeiou]      | 除了aeiou 以外的任何字符 |
|  \B,\D,\S,\W   | 与小写字母相反 |
| [a-zA-Z0-9]    |   |

<!--more-->

# python 语法

```
import re

pattern = re.compile('\d+.*$')
type(pattern) # _sre.SRE_Pattern
s = 'this is a test string'
pattern.match(s)    //return True or False
pattern.findall(s)

m = re.match("[pattern]", "string")
#match 需要全匹配。 若不匹配，返回None
type(m) # _sre.SRE_Match
type(m.re) # _sre.SRE_Match
m.group() # 匹配的字符串

m = re.search("[pattern]", "string")
# search只要有就行
type(m) # _sre.SRE_Match
m.group()

m = re.findall("[pattern]", "string")
type(m) # list, a list of string that match
```

# javascript

```
// (xxx) 捕获型分组
// (?:xxx) 非捕获型分组
var pattern = /(xxx)(?:xxx)/;
var result = pattern.exec('string here');
// => result = ['match', '分组1', '分组2', ...]
var result = pattern.test('string here');
// => result = true or false
```

---

`p = /xxx/[gim]`

|  标识 |  含义 |
|  ---  |  ---    |
| g | 全局的（匹配多次）|
| i | 大小写不敏感 |
| m | 多行，`^` `$`可以匹配行结束符 |
