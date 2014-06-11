
## getopt

```
/*
 * optstring:
 *   单个字符 => 选项
 *   单字符: => 选项后须跟参数,且可隔空格可不隔
 *   单字符:: => 选项后须跟参数,必须紧跟,无空格
 *
 * 全局变量
 *   char *optarg => 指向选项参数的指针
 *   int optind => 再次调用时,从此处开始分析
 *   int optopt => 最后一个已知选项
 */
int getopt(int argc, char* const argv[], const char *optstring);
```

example

```
#include <unistd.h>
     int bflag, ch, fd;

     bflag = 0;
     while ((ch = getopt(argc, argv, "bf:")) != -1) {
             switch (ch) {
             case 'b':
                     bflag = 1;
                     break;
             case 'f':
                     if ((fd = open(optarg, O_RDONLY, 0)) < 0) {
                             (void)fprintf(stderr,
                                 "myname: %s: %s\n", optarg, strerror(errno));
                             exit(1);
                     }
                     break;
             case '?':
             default:
                     usage();
             }
     }
     // updates argc and argv to point to the rest of the arguments (- options skipped).
     argc -= optind;
     argv += optind;
```
