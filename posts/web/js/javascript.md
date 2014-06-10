---

layout: hebi-post
title: Javascript
location: 淮北
time: 08:12:01
tags: javascript 编程语言
categories: 语言
---

# 函数

## 函数定义


```
function xxx() {}
```

在程序load的时候，就将这个名称加载到内存，所以在其上面可以直接使用了。

```
var func = function xxx() {}
```

只有执行到这句的时候才会存在，所以在上面不能执行func或xxx。


## 函数调用

每个函数接受两个附加参数: this和arguments.
this的值取决于调用模式.

### 方法调用模式

函数被保存为对象的属性,我们称之为方法.
当方法被调用时,this被绑定到该对象.

### 函数调用模式

如果一个函数并非一个对象的属性,那么它就是被当做一个函数来调用.
此时this被绑定到全局对象.
这是语言设计的错误.
典型的结果是内部函数的this没有绑定到外部函数的this.

```js
myObject.double = function(){
  var helper = function() {
    this.value = 3;
  };
}
```

此时内部函数helper无法访问myObject的属性.

解决方法:

```js
myObject.double = function(){
  var that = this;
  var helper = function() {
    that.value = 3;
  };
}
```

### 构造器调用模式

如果在一个函数前面加上`new`来调用,
那么背地里会创建一个连接到该函数的`prototype`成员的新对象,
同时this会被绑定到新对象上.

一个函数,如果创建的目的是希望结合new前缀来调用,那么它就被称为构造器函数.
按照约定,它们保存在以大写格式命名的变量里.

```js
var Quo = function(string) {
  this.status = string;
};
Quo.prototype.get_status = function() {
  return this.status;
};
var myQuo = new Quo("confused");
```

### apply调用模式

函数可以有方法.apply就是函数的方法.

apply接受两个参数,第一个是要绑定给this的值,第二个是参数数组.

## Number

```
Number.parseInt(string, radix)
```

## String

#### slice
```
str.slice(begin, end)
‘hello world’.slice(0, -2) ==> ‘hello wor’
```
