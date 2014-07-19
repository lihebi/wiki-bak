# python

# 基础
* not True # => False
* i+=1

# string
## startswidth & endswith
```python
s.startswidth('VID'); # => bool
```

## 字符串相加
```python
'xxf'+'xxf'
```

和int型相加要转换
```python
i = 1
'this is '+str(i)
```

## 分片
```python
s[4]
s[4:]
```

# os
## 遍历文件夹
```python
import os
for root, dirs, files in os.walk(‘.’):
  for f in files:
    print f
```

## 执行shell命令
```python
os.system('mv a.c b.c')
```

## 文件是否存在
```python
os.path.exists('/aaa/bbb/ccc') # => bool
```

# 杂
## range
```python
l = range(4, 10)
```

## 数字转换成字母
```python
for c in range(65, 91):
  print chr(c)

for c in arange(65+32, 91+32):
  print chr(c)
```



## os.rename
```python
os.rename(‘a.jpg’, ‘out/b.jpg’)
```
