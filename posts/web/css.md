---

layout: hebi-post
title: CSS
location: 合肥
time: 12:20:46
categories: 语言

---

# 基础

margin可以是负的

padding不可以

## 选择器

nth-child

```
element:nth-child(an + b) /* n start from 0, but 元素 from 1. 即第一个元素id是1 */
```


examples:

```
tr:nth-child(2n+1)
tr:nth-child(odd)
tr:nth-child(even)
span:nth-child(1) /* span的父节点的第一个孩子 */
span:nth-child(-n+3) /* 前三个 */
```

<!--more-->

# 效果

## box-shadow

```
box-shadow: <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>?
```

```
-moz-
-webkit-
box-shadow:
```

examples:

```
box-shadow: 5px 5px 7px rgba(33,33,33,.7);
```

## transform

```
transform: none
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0)
transform: translate(12px, 50%)
transform: translateX(2em)
transform: translateY(3in)
transform: scale(2, 0.5)
transform: scaleX(2)
transform: scaleY(0.5)
transform: rotate(0.5turn)
transform: skewX(30deg)
transform: skewY(1.07rad)
transform: matrix3d(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0)
transform: translate3d(12px, 50%, 3em)
transform: translateZ(2px)
transform: scale3d(2.5, 1.2, 0.3)
transform: scaleZ(0.3)
transform: rotate3d(1, 2.0, 3.0, 10deg)
transform: rotateX(10deg)
transform: rotateY(10deg)
transform: rotateZ(10deg)
transform: perspective(17px)

transform: translateX(10px) rotate(10deg) translateY(5px)
```

#### transition

examples:

```
transition:  all 1s;
```

```
transition-property: background-color, color;
transition-duration: 1s;
transition-timing-function: ease-out;
```

```
transition-property: font-size;
transition-duration: 4s;
transition-delay: 2s;
```

# 片段

## file input button

```
<span class="btn btn-success fileinput-button">
<i class="glyphicon glyphicon-plus"></i>
<span>Add files...</span>
<input type="file" name="files[]" multiple>
</span>
```

```
.fileinput-button {
  position: relative;
  overflow: hidden;
}
.fileinput-button input {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  opacity: 0;
  -ms-filter: 'alpha(opacity=0)';
  font-size: 200px;
  direction: ltr;
  cursor: pointer;
}
```

## CSS Div中居中：

horizontal:

```
<div style=‘text-align: center’>
     <div style=‘margin: auto’>
     </div>
</div>
```

a text-aligned parent can align all the text of its children.
inline-block is treated as text; so use inline-block, don’t need margin:auto

vertical:

```
<div style=‘display: table’>
     <div style=‘display: inline-block; vertical-align: middle’>
     </div>
</div>
```
