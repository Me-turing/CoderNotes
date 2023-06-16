---
title: 初识CSS
icon: file
order: 1
author: 十七
date: 2023-06-15 周四
category:
	- 初级开发工程师
tag:
	- P5
sticky: true
index: true
---


## 引入

CSS：**c**ascading **s**tyle **s**heets (层叠样式表)&#x20;
层叠：样式的叠加
样式表：各种各样样式的集合

### 为什么要学CSS

CSS的作用：修饰HTML页面
用了CSS之后，样式和元素本身做到了分离的效果。

### **HTML和CSS的关系**

先有HTML，先有页面，修饰页面

## CSS的语法格式

### 内联样式

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
  </head>
  <body>
    <!--
      书写方式：内联样式（行内样式）
        在标签中加入一个style属性，CSS的样式作为属性值
        多个属性值之间用;进行拼接
    -->
    <h1 style="color: deeppink;font-family: '宋体';">这是一个h1标题</h1>
  </body>
</html>
```

### 内部样式

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
    <!--
        书写方式：内部样式：
        head标签中加入一个style标签，在里面定位到你需要修饰的元素，然后在{}中加入你要修饰的样式。
    -->
    <style type="text/css">
      h1 {
        color: royalblue;
        font-family: 宋体;
      }
    </style>
  </head>
  <body>
    <h1>这是一个标题</h1>
  </body>
</html>
```

### 外部样式

```css
h1 {
    color: red;
    font-family: 宋体;
  }
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
    <!--引入外部CSS资源：link-->
    <link rel="stylesheet" type="text/css" href="css/mystyle.css" />
  </head>
  <body>
    <h1>这是一个标题</h1>
  </body>
</html>
```

### 优先级

CSS样式遵循就近原则: 即离元素越近的样式优先级越高

所以:**` 内联样式 > 内部样式 > 外部样式`**

在实际开发中我们常常使用的是外部样式,因为从莫种意义上来讲这种方式真正做到了 元素页面和样式 分离&#x20;
