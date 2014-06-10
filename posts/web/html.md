---

layout: hebi-post
title: Html
location: 合肥
time: 11:33:54
categories: 语言

---

# 文档结构

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf8">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
    </header>
    <nav>
      <ul>
        <li></li>
      </ul>
    </nav>
    <section>
      <header>
      </header>
    </section>
    <script src=“xxx”></script>
  </body>
</html>
```

<!--more-->

# 技巧

链接在新窗口中打开

```
`target='_blank'`
```

用户可以选择多个文件

```
<input type="file" id="file-select" name="photos[]" multiple/>
```


# html5标签

## header

介绍

```html
<header></header>
```

## nav

是一个section. 包含指向其他页面,或者本页面其他section的链接.

```html
<nav>
  <ul>
    <li></li>
  </ul>
</nav>
```

## section
关于一个主题的一组内容

```html
<section>
  <header>xxx</header>
  <p>xxx</p>
</section>
```

## article

独立的文章

判断是否要用article的方法: 看它的内容自己本身是不是make sense.
例如,当他被单独订阅时,读者能否看的懂.

```html
￼<section>
  <header>
    <h1>ACC Basketball News</h1>
  </header>
  <article>
    <header>
      <h1>UNC Beats Duke In Championship Game!</h1>
    </header>
    <p>The Blue Devils are routed by the Tarheels at Cameron Indoor Stadium.</p>
  </article>
</section>
```

## aside

与article相关但是对于它的理解又不是必须的.

```html
<article>
  <header>
    <h1>UNC Beats Duke In Championship Game</h1>
  </header>
    <p>The Blue Devils are routed by the Tarheels at
    Cameron Indoor Stadium.</p>
    <aside>
      <p>Former Duke Players Cry at Game’s End</p>
    </aside>
</article>
```

## footer

结束一个section的信息

```html
<footer>
  <h3>Talk to Me Goose</h3>
  <p>&copy; 2011 Maverick & Goose Ventures.</p>
</footer>
```

header 和 footer 可以用在section的开始或结束
