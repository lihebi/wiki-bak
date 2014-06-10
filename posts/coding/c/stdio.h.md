---

layout: hebi-post
title: Stdio.h
location: 合肥
time: 17:23:45
categories: 库
---

## stdio.h

perror

```
void perror(const char *str);
```

fflush

```
int fflush(FILE *stream);
```
<!--more-->

fopen

```
FILE *fopen(const char *filename, const char *mode);
```

fclose

```
int fclose(FILE *stream);
```

freopen

```
FILE *freopen(const char *filename, const char *mode, FILE *stream);
```

fprintf

```
int fprintf(FILE *stream, const char *format, ...);
```

fscanf

```
int fscanf(FILE *stream, const char *format, ...);
```


## examples

```
#include <stdio.h>

int main() {
  FILE* p = fopen("a.txt", "w");
  fprintf(p, "hello");
  fclose(p);
}
```
