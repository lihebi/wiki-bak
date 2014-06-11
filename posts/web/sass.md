
你还在用CSS?
呵呵,你在写几百行的snippet吗?

This is where `Sass` comes in!

# 安装 & 运行

```sh
gem install sass
sass input.sass output.css
sass --watch input.scss:output.css
# watch 整个目录
sass --watch app/sass:public/stylesheets
```

# 基础

## 变量

Sass

`$`定义变量

```sass
$font-stack:    Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```

Css

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

## 嵌套

```sass
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none
```

## import

片段一般使用下划线开头,这告诉sass不要编译这个文件为CSS.

_reset.sass

```sass
html,
body,
ul,
ol
  margin:  0
  padding: 0
```

包含用@import关键字,不需要写文件后缀名.

base.sass

```sass
@import reset

body
  font-size: 100% Helvetica, sans-serif
  background-color: #efefef
```

## Mixin 混入类

Sass

```sass
=border-radius($radius)
  -webkit-border-radius: $radius
  -moz-border-radius:    $radius
  -ms-border-radius:     $radius
  border-radius:         $radius

.box
  +border-radius(10px)
```

## 继承

Sass

```sass
.message
  border: 1px solid #ccc
  padding: 10px
  color: #333

.success
  @extend .message
  border-color: green

.error
  @extend .message
  border-color: red

.warning
  @extend .message
  border-color: yellow
```

## 运算

Sass

```sass
.container
  width: 100%

article[role="main"]
  float: left
  width: 600px / 960px * 100%

aside[role="complimentary"]
  float: right
  width: 300px / 960px * 100%
```

# 其他

## Sass & Scss

Sass

```sass
$font-stack:    Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```

Scss

```scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
