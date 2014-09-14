# Angular

# Architecture

`index.html`
`app.js`
`controller1.js`
`controller2.js`

in index.html

```html
<body ng-app="myApp">
</body>
```

in app.js

```js
var app = angular.module('myApp', []);
```

只要这个body用`ng-app`包装了，那么在html里面就可以使用`expression`: `{{3+5}}`.

在任何tag上，如果加入`ng-controller`，那么这个controller的object就实现了`two-way binding`.
在html中改变，js中的变量值就会变化。js中变化了，html中也会显示。加入controller的方法如下：

html:

```html
<div ng-controller="StoreController as store">
<h1>{{store.product.name}}</h1>
</div>
```

app.js

```js
app.controller('StoreController', function() {
  this.product = ..;
  store = this;
});
```

# Service

* $http
fetch data from server

```js
$http({method: 'GET', url: '/products.json'});
```

or

```js
$http.get('/products.json', {apiKey: 'myApiKey'});
```

they return a promise, with `.success()` and `.error()`

If we tell `$http` to fetch JSON, the result will be decoded into javascript objects and arrays automatically

other http:

```js
$http.post('/x.json', {param: 'value'});
$http.delete('/x.json');
```

* $log
log data to javascript console

* $filter
filter an array

## usage

app.js

```js
(function() {
  var app = angular.module(...);
  app.controller('StoreController', ['$http', '$log', function($http, $log) {
    var store = this;
    store.products = [];
    $http.get('/products.json').success(function(data) {
      store.products = data;
    });
  }]);
})();
```

# Best Practice & code organize

app.js: top level module attached via `ng-app`
products.js: functionality for products

app.js

```js
(function() {
  var app = angular.module('store', ['store-products']);
  app.controller('StoreController', function() { ... });
})();
```

products.js

```js
(function() {
  var app = angular.module('store-products', []);
  app.directive(...);
  app.directive(...);
})();
```

index.html

```html
<script src='angular.js'></script>
<script src='app.js'></script>
<script src='products.js'></script>
```


# Directives汇总

* ng-app
* ng-controller
* ng-repeat

```html
<div ng-repeat="product in store.products">
{{product.xx}}
</div>
```

* ng-show

```html
<div ng-show="product.boolVar"></div>
<!-- or -->
<div ng-show="!product.boolVar"></div>
```

* ng-hide
* ng-src

```html
<img ng-src="{{product.image}}"/>
```

* ng-init
设定初始值

```
<div ng-init="tab=1">
{{tab}}
</div>
```

* ng-class
满足一定条件时设定tag的class

```html
<li ng-class="active:tab===1">
```

* ng-click
当单击时，执行的字符串。

```html
<a href ng-click="tab=3">Tab3</a>
```

* ng-model
binds the form element value to the property of the object

```html
<select ng-model="star">
  <option value="1">1 star</option>
  <option value="2">2 stars</option>
</select>
```

```html
<textarea ng-model="store.product.desc"></textarea>
```

```html
<input ng-model="email" type="email"/>
```

```html
<input ng-model="color" type="radio" value="red"/> Red
<input ng-model="color" type="radio" value="blue"/> Blue
<input ng-model="color" type="radio" value="green"/> Green
```

* ng-submit
处理form时，比使用ng-model更系统。

```html
<form ng-controller="ViewController as vctrl" ng-submit="vctrl.addView(product)"></form>
```

```js
app.controller("ViewController", function() {
  this.review = {};
  this.addView = function(product) {
    product.reviews.push(this.review);
    this.review = {};
  };
});
```

* ng-include

index.html

```html
<h3 ng-include="'product-title.html'"></h3>
```

product-title.html

```html
{{product.name}}
<em>{{product.price}}
```


# Custom Directives

## Element

```html
<product-title></product-title>
```

app.js

```js
app.directive('productTitle', function() {
  return {
    restrict: 'E', // Element
    templateUrl: 'product-title.html'
  };
});
```

## Attribute

index.html

```html
<h3 product-title></h3>
```

app.js

```js
app.directive('productTitle', function() {
  return {
    restrict: 'A', // Attribute
    templateUrl: 'product-title.html'
  };
});
```

## Custom Directive with Controller

app.js

```js
app.directive('productPanels', function() {
  return {
    restrict: 'E',
    templateUrl: 'product-panel.html',
    controller: function() {
      ...
    },
    controllerAs: 'panels'
  };
});
```

# Filters

Syntax: `{{data | filter:options }}`

* currency
`{{ product.price | currency }}`
* date
`{{ '1388123412323' | date:'MM/dd/yyyy @ h:mma' }} //=> 12/27/2013`
* uppercase
`{{ 'abcde' | uppercase }}`
* limitTo
`{{ 'limit char number' | limitTo:8 }}`
`<li ng-repeat="product in store.products | limitsTo:3"></li>`
* orderBy
`<li ng-repeat="product in store.products | orderBy:'-price'"></li>`
