
# Hello Wrold

不需要import额外的包，用于input，output和处理字符串。
全局范围的代码就是代码的entry，所以不用main函数。
不用冒号。

```
println("Hello World")
```
# 常量

`nil`, `true`, `false`

# 变量

```
var variable = 50
let constant = 40
```

Swift是强类型的语言，值和类型必须一致。
但是，不必显示写出类型。
swift会从后面的值猜测类型，所以可以不写类型。如果值无法提供类型的准确猜测，可以指定：

```
let constant:Double = 70.0
```

变量不会隐式转换类型，必须显示强制转换。

```
let str1 = "ss "
let num1 = 34
let num2 = 12
let combine = str1+String(num1)
```
在字符串中加入值的更简便的方式：

```
let combine2 = "hello \(num1) world \(num1+num2)"
```

# 数组

```
var list = ["hello", "world"]
list[1] = "world2"
```

建立空数组

```
let emptyArray = String[]()
// 如果类型可以猜测
let emptyArray = []
```

# 字典

```
var dict = [
  "1":"hello",
  "2":"world",
]
dict["3"] = "hebi"
```

建立空字典

```
let emptyDict = Dictionary<String, Float>()
// 如果类型可以猜测
let emptyDict = [:]
```

# 控制流

## if & else

条件表达式的括号是可选的。但是大括号是必须的。

```
if a > 50 {
  // xxx
} else {
  // xxx
}
```
条件表达式必须是条件，这意味着`if a`是错的。

### 可选值

可以使用`if`和`let`一起，来应对一些值缺失的情况。这些值就是可选值。
可选值要么包括一个值，要么包括`nil`。
在值的类型后面加上`?`来标记一个可选值。

```
var optionalName:String? = "John"
var greeting = "Hello"
if let name = optionalName {
  greeting = "Hello \(name)"
}
```

## switch

没有`default`语句会报错。
不需要`break`。
switch支持所有类型的数据而不限于`int`。
switch支持很大范围的比较操作，而不限于比较是否相等。

```
let a = "Hello"
switch a {
  case "Hello":
    xxx
    xxx
  case "World","Man":
    xxx
    xxx
  case let x where x.hasSuffix("eoll"):
    xxx
  default:
    xxx
}
```

## for in

```
let dict = [
  "prime":[2,3,4,6,8,12],
  "fibo":[1,1,2,3,5,8],
]
for (kind, numbers) in dict {
  for number in numbers {
    // xxx
  }
}
```

## while

```
var n=2
while n<100 {
  n = n*2
}
```

```
var n=2
do {
  n = n*2
} while n<100
```

## index in loop

`0..3`: 0,1,2
`0...3`: 0,1,2,3

```
for i in 0..3 {
  // i
}
```
和下面等价

```
for var i=0;i<3;i++ {
  // i
}
```

# 函数

```
func greet(name:String, day:String) -> String {
  return "Hello \(name), today is \(day)"
}
greet("Bob", "Tuesday")
```
使用一个tuple来return多个值

```
func returnTuple() -> (Int, Int, Int) {
  return (3,4,5)
}
```
参数不定长

```
func variableArg(numbers:Int...) -> Int {
  for number in numbers {
    // number
  }
}
```
函数可以嵌套

```
func outer() {
  var y=10
  func add() {
    y += 5
  }
  add()
}
```
## 函数使用和返回函数
函数是`first-class`类型，这意味着函数可以返回函数：

```
func makeFunc() -> (Int -> Int) {
  func inner(num:Int) -> Int {
    return num+1
  }
  return inner
}
```
函数的参数也可以是函数

```
func funcWithFuncArg(list:int[], argFunc:Int -> Bool) -> Bool {
  for item in list {
    if argFunc(item) {
      return true
    }
  }
  return false
}
```
## 函数闭包
函数是一个闭包。
闭包有一个简单的写法：不写名字，将代码写在`{}`之间。
使用`in`来隔离开`参数和返回值`以及`函数体`

```
numbers.map({
  (number:Int) -> Int in
    let result = 3*number
    return result
})
```
甚至可以写得更精简。
如果一个闭包得类型已经知道了，例如`callback function for a delegate`。
这时，可以省去参数类型，返回值类型，或者都省去。
一个单一语句得闭包隐式地返回这个唯一语句的值。

```
numbers.map({number in 3*number})
```

可以使用index来找到函数的参数

```
sort([1,5,3,8]) {$0>$1}
```
