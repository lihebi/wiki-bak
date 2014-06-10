---

layout: hebi-post
title: php
location: 淮北
time: 21:48:53
categories: 后端 语言

---

## 基础语法

#### 代码形式
```
<?php phpinfo() ?>
<?php echo '<p>Hello World</p>'; ?>

```

<!--more-->

```
echo $_SERVER['HTTP_USER_AGENT'];
```

#### if

```
<?php
if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) {
    echo 'You are using Internet Explorer.<br />';
}
?>
```

#### mix

```
<?php
if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) {
?>
<h3>strpos() must have returned non-false</h3>
<p>You are using Internet Explorer</p>
<?php
} else {
?>
<h3>strpos() must have returned false</h3>
<p>You are not using Internet Explorer</p>
<?php
}
?>
```

#### post

htmlspecialchars() makes sure any characters that are special in html
are properly encoded
so people can't inject HTML tags or Javascript into your page.

```
<?php echo htmlspecialchars($_POST['name']); ?>
```

## Trouble Shooting

> php出现deprecated警告。如何disable？
在出问题的php文件前面加上
```
error_reporting E_ALL E_DEPRECATED
```
