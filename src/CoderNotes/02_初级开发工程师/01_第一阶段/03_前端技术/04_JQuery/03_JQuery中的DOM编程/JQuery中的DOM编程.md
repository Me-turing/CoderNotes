---
title: JQuery中的DOM编程
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


## 操作属性和样式

### 操作属性

原生js 中的通过`元素.属性名`或者`元素.setAttribute()`方式操作元素属性,jQuery给我们封装了`attr() `和`removeAttr()`,更加便捷的操作属性

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
    <style>
      .a {
        background-color: aqua;
      }
    </style>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script>
      /*
       *attr() 
       * 
       * */
      function fun1() {
        console.log($("#f1").attr("color"))
        console.log($("#f1").attr("id"))
        console.log($("#f1").attr("size"))
      }

      function fun2() {
        $("#f1").attr("color", "green")
        $("#f1").attr("size", "5")
      }

      function fun3() {
        $("#f1").removeAttr("color")
      }

      function fun4() {
        $("#f1").attr("class", "a")
      }
    </script>
  </head>
  <body>
    <font id='f1' color="red" size="7">牛气冲天</font>
    <hr />
    <input type="button" value="获得属性" onclick="fun1()" />
    <input type="button" value="修改属性" onclick="fun2()" />
    <input type="button" value="删除属性" onclick="fun3()" />
    <input type="button" value="添加属性" onclick="fun4()" />
  </body>
</html>

```

### 操作样式

原生js 中的通过`元素.style.样式名=’样式值’`的方式操作元素样式,jQuery给我们封装了`css()`方法,便于我们操作样式,多数情况样式选择器使用类选择器,所以jQuery针对于这一情况,给我们封装了`addClass` `removeClass` `toggleClass` 三个方法

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
    <style>
      .a {
        width: 100px;
        height: 100px;
        background-color: pink;
      }

      .b {
        border: 10px solid green;
        border-radius: 20px;
      }
    </style>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <!--
             元素.style.样式名=
             css()
           -->
    <script>
      function fun1() {
        //获得d1的css样式
        console.log($("#d1").css("width"));
        console.log($("#d1").css("height"));
        console.log($("#d1").css("background-color"));
        //修改d1的css样式
        $("#d1").css("width", "200px")
        $("#d1").css("height", "300px")
        $("#d1").css("background-color", "yellow");
      }
      /*
       * CSS 样式在实际的研发中,往往通过类选择器作用到元素上
       * jQuery就专门的封装了操作class属性值的方法
       * */
      function fun2() {
        $("#d2").addClass("b")
      }

      function fun3() {
        $("#d2").removeClass("b")
      }

      function fun4() {
        $("#d2").toggleClass("b") // 原来有b 则删除,如果没有,则增加b
      }
    </script>
  </head>
  <body>
    <div id="d1" class="a">
    </div>
    <input type="button" value="修改样式" onclick="fun1()" />
    <div id="d2" class="a">
      d2
    </div>
    <input type="button" value="添加class值" onclick="fun2()" />
    <input type="button" value="删除class值" onclick="fun3()" />
    <input type="button" value="切换class值" onclick="fun4()" />
  </body>
</html>

```

## 操作文本和增删元素

### 操作文本

原生js 中的通过`元素.innerText`和`innerHTML`和`.value`属性操作标签内部文本和内容,jQuery给我们封装了`text()`,`html()`和`val()`三个方法

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style>
      #d1 {
        width: 200px;
        height: 200px;
        border: 1px solid green;
      }
    </style>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script>
      function fun1() {
        /*
         * innerText >>>> text();
         * innerHTML >>>> html();
         * value     >>>> val();
         * 
         * */
        console.log($("#d1").text())
        console.log($("#d1").html())
        console.log($("#i1").val())
      }

      function fun2() {
        //$("#d1").text("<h1>牛气冲天</h1>");
        $("#d1").html("<h1>牛气冲天</h1>");
        $("#i1").val("你好");
      }

      function fun3() {
        //$("#d1").html("");
        $("#d1").empty(); // 清空内容
        $("#i1").val("");
      }
    </script>
  </head>
  <body>
    <input type="text" value="这里是文字" id='i1' />
    <div id='d1'>
      a
      <span>xxx</span>
      b
    </div>
    <input type="button" value="获得标签内容" onclick="fun1()" />
    <input type="button" value="修改标签内容" onclick="fun2()" />
    <input type="button" value="删除标签中的内容" onclick="fun3()" />
  </body>
</html>


```

### 增删元素

创建元素: `$(&apos;<span>text<span>&apos;)`

- 追加元素: 
	- `append()` `appendTo()` 添加内部标签 
	- `before()` `insertBefore()`  向前增加标签 
	- `after()` `insertAfter()` 向后增加标签
- 删除元素: 
	- `empty()`  清空字标签 
	 `remove()` 移除当前标签

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style>
      #d1 {
        width: 200px;
        height: 200px;
        border: 1px solid red;
      }
    </style>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script>
      function fun1() {
        // 创建元素
        var span1 = $("<span></span>");
        // 设置样式
        span1.css("color", "green");
        span1.css("border", "1px solid blue");
        span1.css("background-color", "lightgray")
        // 设置文字
        span1.text("今天天气很好");
        $('#d1').append(span1)
      }

      function fun2() {
        var h = $("<h3>测试文字</h3>").css("color", "red").css("border", "1px solid green")
        h.appendTo($('#d1'))
      }

      function fun3() {
        var span1 = $('<span style="color: red; border: 1px solid orangered;">测试文字</span>')
        $("#d1").before(span1);
      }

      function fun4() {
        var span1 = $('<span style="color: red; border: 1px solid orangered;">测试文字</span>')
        span1.insertBefore($("#d1"));
      }

      function fun5() {
        var span1 = $('<span style="color: red; border: 1px solid orangered;">测试文字</span>')
        $("#d1").after(span1);
      }

      function fun6() {
        var span1 = $('<span style="color: red; border: 1px solid orangered;">测试文字</span>')
        span1.insertAfter($("#d1"));
      }

      function fun7() {
        $("#d1").empty()
      }

      function fun8() {
        $("#d1").remove(); // 移除当前元素本身
      }
    </script>
  </head>
  <body>
    <div id='d1'>
    </div>
    <input type="button" value="testAppend" onclick="fun1()" />
    <input type="button" value="testAppendTo" onclick="fun2()" />
    <input type="button" value="testbefore" onclick="fun3()" />
    <input type="button" value="testinsertBefore" onclick="fun4()" />
    <input type="button" value="testafter" onclick="fun5()" />
    <input type="button" value="testInsertAfter" onclick="fun6()" />
    <input type="button" value="empty" onclick="fun7()" />
    <input type="button" value="remove" onclick="fun8()" />
  </body>
</html>


```

## 操作事件

无非就是绑定事件,触发事件,解绑定事件.原生js中的通过DOM编程和在标签上的事件属性绑定事件, jQuery中,我们可以使用 事件的绑定:`bind()`,`live()`(1.8及之前可用),`on()`(1.9之后推荐使用),`one()` . 事件解绑定:`unbind()` . 事件的触发:行为触发,jQuery方法触发

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
    <style>
      #d1 {
        width: 200px;
        height: 200px;
        border: 1px solid red;
      }
    </style>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script>
      function fun1() {
        //给元素绑定事件
        //原生JS
        /*var div1=document.getElementById("d1")
        div1.onmouseover=function (){
          alert("悬停")
        }*/
        
        /* bind 方法绑定事件
         * 在jQuery中,事件的名称= 原始名称去掉 on
         * onclick       click
         * onmouseover   mouseover
         * 
         * */
        $("#d1").bind('mouseover', function() {
          $('#d1').css("background-color", 'yellow')
        });

        /*事件名作为方法*/
        $("#d1").mouseleave(function() {
          $('#d1').css("background-color", 'lightgreen')
        });

        /*
         * one 绑定事件一次 
         * 
         * */
        /*$("#d1").one('mouseover',function(){
          $('#d1').css("background-color",'yellow')
        });
        
         $("#d1").one('mouseleave',function(){
          $('#d1').css("background-color",'lightgreen')
        });*/
      }

      function fun2() {
        //$("#d1").unbind();  接触绑定的所有事件
        $("#d1").unbind("mouseover") // 接触绑定的指定事件

      }

      function fun3() {
        // 相当于发生了获得焦点事件
        $("#i1").focus()
      }

      function fun4() {
        console.log("获得焦点了")
      }
    </script>
  </head>
  <body>
    <div id='d1'>
    </div>
    <input type="button" value="添加事件" onclick="fun1()" />
    <input type="button" value="解除绑定" onclick="fun2()" />
    <br />
    <input type="text" id='i1' onfocus="fun4()" />
    <input type="button" value="触发事件" onclick="fun3()" />
  </body>
</html>

```

## DOM对象和jQuery对象转换

使用原生JS方式获得的页面结点对象我们可以简称为`DOM对象`,使用jQuery核心函数获得的对象我们可以简称为`jQuery对象`,这两种方式获得的对象即是是页面上同一个元素,那么也是不一样的,二者之间的API是不通用的.而在某些情况下,我们往往无法选择接收的对象,只能被动使用,那么这个时候我们可以让二者实现转换,以达到**可以调用API实现功能的目的

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script>
      $(function() {
        //1 原生JS获取页面元素  原生DOM对象
        var div1 = document.getElementById("d1");

        //2 jQuery方式获取页面元素 jQuery对象
        var div2 = $("#d1");
        /*
         * DOM对象和jQuery对象之间的方法和属性是不通用
         *  
         * */
        console.log(div1.innerText);
        console.log(div2.text());

        console.log(div1)
        console.log(div2)

        // DOM对象如何调用jQuery函数  DOM对象转换为jQuery    $(DOM)
        console.log($(div1).text());
        
        // jQuery对象如何调用DOM对象的属性和方法   jQuery转换为DOM对象  get(0)  [0]
        console.log(div2.get(0).innerText)
        console.log(div2[0].innerText)

      })
    </script>
  </head>
  <body>
    <div id="d1">测试文字</div>
  </body>
</html>


```

使用原生JSDOM对象转换成jQuery对象方式是`$(dom对象)`,jQuery对象转换成DOM对象的方式是`jQuery对象[0]`/`jQuery对象.get(0) `

## 迭代遍历方式

jQuery给我们封装了一个快捷遍历元素的方法,接下来我们就使用一下jQuery中新的遍历方式&#x20;

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script>
      $(function() {
        var $lis = $('li')
        console.info($lis)
        for (var i = 0; i < $lis.length; i++) {
          /*遍历出的每个元素是DOM对象*/
          console.info($lis[i].innerText)
        }
        
        for (var i in $lis) {
          console.info($lis[i].innerText)
        }
        
        /*遍历所有元素的方法*/
        /*
         each每拿出一个元素 都会执行一次内部的function
         i 当前元素的所有
         e 当前元素 DOM对象
         *
         * */
        $lis.each(function(i, e) {
          console.info(i + '>>>' + $(e).text())
        })
        
        $.each($lis, function(i, e) {
          console.info(i + '>>>' + $(e).text())
        })
      })
    </script>
  </head>
  <body>
    <ul>
      <li>AI</li>
      <li>Python</li>
      <li>大数据</li>
      <li>JAVA</li>
      <li>前端</li>
    </ul>
  </body>
</html>


```
