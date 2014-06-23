# C++

# Tips
* `main`函数的返回类型必须是`int`
* 发出警告:`-Wall`
* `cin>>a`遇到`EOF`为假。遇到`<C-D>`为假。
* `./a.out <infile >outfile`

# 变量和基本类型
## 类型
* 是用`char`时，需要明确指明`unsigned char`还是`signed char`，否则根据系统的不同而不同。
* `long long`>=`long`>=`int`>=`short`
### 如何选择类型
1. 若不为负，选unsigned
2. 用`int`和`long long`，而不用`long`,因为`long`一般和`int`一样。
3. 明确指定`char`的类型
4. 一般用`double`而不用`float`

## 转义

| 代码 | 含义 |
| --- | --- |
| \n | 换行 |
| \r | 回车 |
| \v | 纵向制表 |
| \b | 退格 |
| \x加一个或多个16进制的数 | |
| \加1，2，3个8进制的数 | |

## 字面值类型

前缀

| 符号 | 含义 | 类型 |
| --- | --- | --- |
| u | Unicode16字符 | char16_t |
| U | Unicode32 | char32_t |
| L | 宽字符 | wchar_t L'a' |
| u8 | utf8字符串 | char u8"hi" |

后缀

| 符号 | 类型 | 适用于 |
| --- | --- | --- |
| U | Unsigned | 整型 |
| L | long | 整型 |
| LL | long long | 整型 |
| F | float | 浮点型 |
| L | long double | 浮点型 |

对象是指一块能存储数据并具有某种类型的内存空间。

## 初始化

```c
int a=0;
int a={0};
int a{0}; //C++11
int a(0);
```

定义于任何函数体之 _外_ 的 _内置类型变量_ 被初始化为0.
定义于任何函数体之 _内_ 的 _内置类型变量_ 不初始化。

string默认为空串。

```c
extern int i; // 声明
extern int i=1; // 定义，不可在函数体内部
```

# 函数
## auto
```
auto g = bind(f, a, b, _2, c, _1);
```
此后，调用`g(-1,-2)`等价于调用f，并把`_1`换成`-1`,`_2`换成`-2`。

## at
适用于`string`,`vector`,`deque`,`array`

`c.at(n)` 返回下表为`n`的元素的引用。如果下标越界，可以抛出`out_of_range`异常。
