

> “Get your truth out of the DOM”
>
> Jeremy Ashkenas

# Model

## 基本用法

* 继承自空的对象
* 用JSON数据初始化一个实体

```js
var TodoItem = Backbone.Model.extend({});
var todoItem = new TodoItem(
  { description: 'Pick up milk', status: 'incomplete', id: 1 }
);
```

* 得到模型的属性值
* 设置属性
* 保存到服务器(需要设置)

```js
todoItem.get('description');
todoItem.set({status: 'complete'});
todoItem.save();
```


可以指定默认值

```js
var TodoItem = Backbone.Model.extend({
  defaults: {
    description: 'Empty todo...',
    status: 'incomplete'
  }
});
￼￼￼￼￼￼￼var todoItem = new TodoItem();
todoItem.get('description');
```

## 与服务端同步

* 设置url
* 拉回数据并填充

```js
var todoItem = new TodoItem();
todoItem.url = '/todo';
todoItem.fetch();
// => { id: 1, description: 'Pick up milk', status: 'incomplete' }
todoItem.get('description');
```

更好的方式: RESTful API

使用urlRoot创建一个新的Model


```js
var TodoItem = Backbone.Model.extend({urlRoot: '/todos'});
```

* 使用`id`初始化一个实体,fetch时就会往`/todos/:id`上发GET
* save会触发`PUT /todos/:id`+参数

```js
var todoItem = new TodoItem({id: 1});
todoItem.fetch(); // => GET /todos/1
todoItem.set({description: 'Pick up cookies.'});
todoItem.save() // PUT /todos/1 with params
```

* 初始化实体时没有指定`id`,则在`save`的时候会自动加上.
* 没有`fetch`的情况下直接`save`会触发`POST`请求

```js
var todoItem = new TodoItem();
todoItem.set({description: 'Fill prescription.'});
todoItem.save(); // => POST /todos with params
todoItem.get("id"); // => 2. update id automaticly
```

其他模型上的函数

```js
todoItem.destroy(); // => DELETE /todos/2
todoItem.toJSON(); // get JSON from model
// => { id: 2, description: 'Fill prescription', status: 'incomplete' }
```


## 事件监听

自定义事件

```js
￼todoItem.on('event-name', function(){
  alert('event-name happened!');
});
todoItem.trigger('event-name');
```

内置事件

```js
todoItem.on('change', doThing); // function doThing(){}
todoItem.set({description: 'Fill prescription.'});
￼todoItem.set({description: 'Fill prescription.'}, {silent: true});
todoItem.off('change', doThing);
```

| 事件名称 | 触发条件 |
| :------------- | :------------- |
| change | 模型中的任何属性改变 |
| destroy | 模型被销毁 |
| sync | 成功同步 |
| error | 模型`save`或者验证失败 |
| all | 所有被`trigger`的事件 |

# View

## 简单用法

View类和View实体

```js
var TodoView = Backbone.View.extend({});
var todoView = new TodoView({ model: todoItem });
```
## html渲染

View类中包含render函数

```js
var TodoView = Backbone.View.extend({
  render: function(){
    var html = '<h3>' + this.model.get('description') + '</h3>';
    $(this.el).html(html);
  }
});

var todoView = new TodoView({ model: todoItem });
todoView.render();
console.log(todoView.el);
```

will output:

```html
<div>
  <h3>Pick up milk</h3>
</div>
```

每一个view都有一个最高层元素,默认是div.改变:

```js
var SimpleView = Backbone.View.extend({tagName: 'li'});
```

还可以加上`id`和`class`

```js
var TodoView = Backbone.View.extend({
  tagName: 'article',
  id: 'todo-view',
  className: 'todo'
});
```

`todoView.el`是`DOM Element`,使用`jQuery`访问

```js
$('#todo-view').html();
$(todoView.el).html();
todoView.$el.html(); // 最好
```

## 配合underscore使用

View模型

```js
var TodoView = Backbone.View.extend({
  template: _.template(‘<h3><%= description %></h3>’),
  render: function(){
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
  }
});
```

使用

```js
￼var todoView = new TodoView({ model: todoItem });
todoView.render();
console.log(todoView.el);
```

输出

```html
<article id="todo-view" class="todo">
  <h3>Pick up milk</h3>
</article>
```

## View上的事件监听

语法: `"<event> <selector>": "<method>"`

```js
var TodoView = Backbone.View.extend({
  events: {
    "click h3": "alertStatus",
    "dblclick" : "funcX" // EL中的任何地方
  },
  alertStatus: function(e){
    alert('Hey you clicked the h3!');
} })
```

等价于

```js
this.$el.delegate('h3', 'click', alertStatus);
```
