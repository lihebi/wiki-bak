
# 基本语法

## 直接插入值

```
<h1> <%= title %> </h1>
```

## 插入链接

```
<%= link_to(links[i], 'links/'+links[i]) %>
```

## 插入图片

```
<%= img_tag('images/maid.png') %>
```

## for循环

```
<% for(var i=0; i<supplies.length; i++) { %>
	<li><%= supplies[i] %></li>
<% } %>
```

# 辅助类

## `date_tag(name, value, html_options)`

创建日期标签

```
date_tag('Installation[date]', new Date(1982, 10,20) )
```

## `form_tag(action, html_options)`

创建表格开头

```
form_tag('/myaction',{multipart: true})
```

## `end_form_tag()`

创建表格结尾

```
form_tag_end()
```

## `hidden_field_tag( name, value, html_options)`

创建隐藏域

```
hidden_field_tag('something[interesting]', 5) =>

              "<input id=\'something[interesting]\'
                      value=\'5\'
                      type=\'hidden\'
                      name=\'something[interesting]\'/>"
```
