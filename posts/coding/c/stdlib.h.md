
## stdlib.h

malloc

```
// Allocates a block of size bytes of memory. Not initialized.
void *malloc(size_t size);
```

free

```
void free(void *ptr);
```

calloc

```
// 为一个num个元素的数组分配内存。每一个有size字节，初始化为0。
void *calloc(size_t num, size_t size)
```

realloc

```
// 将ptr指向的block的大小改为size。
// 可能会将这个block移动到一个新的地址。
// block的内容会保留新的大小和旧的大小中较小者。
// 如果新的大小更大，那么多出来的是未定义的。
// 如果ptr==NULL，等价于malloc
void *realloc(void *ptr, size_t size);
```

atoi

```
int atoi(const char *str);
```

atof

```
double atof(const char *str);
```

atol

```
long int atol(const char *str);
```

strtol

```
// base是进制
long int strtol(const char *str, char **endptr, int base)
```

Example:

```
char str[] = "2001 60cf2d -1100110010 0x6fff";
long int a,b,c,d;
char *sp;
a = strtol(str, &sp, 10);
b = strtol(sp, &sp, 16);
c = strtol(sp, &sp, 2);
d = strtol(sp, NULL, 0);
```

strtoul

```
unsigned long int strtoul(const char *str, char **endptr, int base);
```

strtod

```
double strtod(const char *str, char **endptr);
```

printf


```
// Format: %[flags][width][.precision][length]specifier

/**
 * specifier
 * d/i 有符号十进制整数
 * u 无符号十进制整数
 * o 无符号八进制
 * x 无符号十六进制整数
 * X 同上，但是X大写
 * f/F 浮点数 小写/大写
 * e/E 科学计数法 小写/大写
 * g/G use the shortest representation: (%e or %f / %E or %F)
 * p pointer address
 */

/**
 * Flags
 * - 左对齐
 * + 强制显示+-号
 * (space) 如果没有符号位可写，加空格
 * # (oxX)会打出(0,0x,0X), (aef)会打出小数点
 */

/**
 * width
 * (number) number较大将显示的位数补空格。number小则无影响
 * * 在...中给出
 */

/**
 * .precision
 * (number) (ef)保留位数。s打印个数
 * (.*) ...中给出
 */

/**
 * length
 * l long
 * h short
 * U long long
 * z size_t
 */

int printf(const char *format, ...);
```

## sys/time.h

gettimeofday

```
// tzp = NULL
// 返回从1970.1.1 00:00 UTC 到现在的秒数
int gettimeofday(struct timeval *tp, void *tzp);
struct timeval {
  __time_t tv_sec;
  __suseconds_t tv_usec;
}
```
