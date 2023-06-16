---
title: JQuery与Ajax实现
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


每次书写AJAX代码比较繁琐 步骤都是一样的,数据回显使用原生js代码也比较繁琐,可以使用jQuery对上述问题进行优化,jQuery不仅仅对dom操作进行了封装 同时也对AJAX提交和回显已经进行了封装,可大大简化AJAX的操作步骤

## JQuery.ajax()的简单使用

### 经典使用方法

前端代码
```JSP
<html>
<head>
    <title>$Title%sSourceCode%lt;/title>
    <meta charset="UTF-8"/>
    <script src="js/jquery.min.js"></script>
    <script>
        function checkUname(){
            // 获取输入框中的内容
            if(null == $("#unameI").val() || '' == $("#unameI").val()){
                $("#unameInfo").text("用户名不能为空");
                return;
            }
            $("#unameInfo").text("");
            // 通过jQuery.ajax() 发送异步请求
            $.ajax(
                    {
                        type:"GET",// 请求的方式 GET  POST
                        url:"unameCheckServlet.do?", // 请求的后台服务的路径
                        data:"uname="+$("#unameI").val(),// 提交的参数
                        success:function(info){ // 响应成功执行的函数
                            $("#unameInfo").text(info)
                        }
                    }
            )
        }
    </script>
</head>
<body>
<form action="myServlet1.do" >
    用户名:<input id="unameI" type="text" name="uname" onblur="checkUname()">
    <span id="unameInfo" style="color: red"></span><br/>
    密码:<input type="password" name="pwd"><br/>
    <input type="submit" value="提交按钮">
</form>
</body>
</html>
```

后端代码
```Java
@WebServlet("/unameCheckServlet.do")
public class UnameCheckServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String uname = req.getParameter("uname");
        String info="";
        if("meturing".equals(uname)){
            info="用户名已经占用";
        }else{
            info="用户名可用";
        }
        // 向浏览器响应数据
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html;charset=UTF-8");
        resp.getWriter().print(info);
    }
}
```

### 获取JSON格式

前端代码
```JSP
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="js/jquery.min.js"></script>
    <script>
        function testAjax(){
            // 向后台发送一个ajax异步请求
            // 接收响应的数据
            $.ajax(
                {
                    type:"GET",
                    url:"servlet1.do",
                    data:{"username":"zhangsan","password":"123456"},// key=value&key=value  {"属性名":"属性值"}
                    dataType:"json",//以什么格式接收后端响应给我们的信息
                    success:function(list){
                        $.each(list,function(i,e){
                            console.log(e)
                        })
                    }
                }
            )
        }
    </script>
</head>
<body>
<input type="button" value="测试" onclick="testAjax()">
</body>
</html>
```

后端代码
```Java
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="js/jquery.min.js"></script>
    <script>
        function testAjax(){
            // 向后台发送一个ajax异步请求
            // 接收响应的数据
            $.ajax(
                {
                    type:"GET",
                    url:"servlet1.do",
                    data:{"username":"zhangsan","password":"123456"},// key=value&key=value  {"属性名":"属性值"}
                    dataType:"json",//以什么格式接收后端响应给我们的信息
                    success:function(list){
                        $.each(list,function(i,e){
                            console.log(e)
                        })
                    }
                }
            )
        }
    </script>
</head>
<body>
<input type="button" value="测试" onclick="testAjax()">
</body>
</html>
```

## JQuery.Ajax()属性说明

### 说明

#### url

要求为String类型的参数，（默认为当前页地址）发送请求的地址

#### type

要求为String类型的参数，请求方式（post或get）默认为get。注意其他http请求方法，例如put和delete也可以使用，但仅部分浏览器支持。

#### timeout

要求为Number类型的参数，设置请求超时时间（毫秒）。此设置将覆盖$.ajaxSetup()方法的全局设置。

#### async

要求为Boolean类型的参数，默认设置为true，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为false。注意，同步请求将锁住浏览器，用户其他操作必须等待请求完成才可以执行。

#### cache

要求为Boolean类型的参数，默认为true（当dataType为script时，默认为false），设置为false将不会从浏览器缓存中加载请求信息。

#### data

要求为Object或String类型的参数，发送到服务器的数据。如果已经不是字符串，将自动转换为字符串格式。get请求中将附加在url后。

防止这种自动转换，可以查看`processData`选项。对象必须为key/value格式，例如`{foo1:"bar1",foo2:"bar2"}`转换为`&foo1=bar1&foo2=bar2`。如果是数组，JQuery将自动为不同值对应同一个名称。例如`{foo:["bar1","bar2"]}`转换为`&foo=bar1&foo=bar2`。

#### dataType

要求为String类型的参数，预期服务器返回的数据类型。如果不指定，JQuery将自动根据http包mime信息返回responseXML或responseText，并作为回调函数参数传递。可用的类型如下：

`XML`:  返回XML文档，可用JQuery处理。
`html`:  返回纯文本HTML信息；包含的script标签会在插入DOM时执行。
`script`:  返回纯文本JavaScript代码。不会自动缓存结果。除非设置了cache参数。注意在远程请求时（不在同一个域下），所有post请求都将转为get请求。
`json`:  返回JSON数据。
`jsonp`:  JSONP格式。使用JSONP形式调用函数时，例如`myurl?callback=?`，JQuery将自动替换后一个“?”为正确的函数名，以执行回调函数。
`text`：返回纯文本字符串。

#### beforeSend

要求为Function类型的参数，发送请求前可以修改`XMLHttpRequest`对象的函数，例如添加自定义HTTP头。在`beforeSend`中如果返回false可以取消本次ajax请求。

```JS
/* XMLHttpRequest对象是惟一的参数。*/
  function(XMLHttpRequest){
       this; //调用本次ajax请求时传递的options参数
  }
```

#### complete

要求为Function类型的参数，请求完成后调用的回调函数（请求成功或失败时均调用）。参数：`XMLHttpRequest`对象和一个描述成功请求类型的字符串。

```JS
function(XMLHttpRequest, textStatus){
  this; //调用本次ajax请求时传递的options参数
}
```

#### success

要求为Function类型的参数，请求成功后调用的回调函数，有两个参数:

- 由服务器返回，并根据dataType参数进行处理后的数据
- 描述状态的字符串

```JS
function(data, textStatus){
	//data可能是xmlDoc、jsonObj、html、text等等
	 this; //调用本次ajax请求时传递的options参数
}
```

#### error

要求为Function类型的参数，请求失败时被调用的函数。该函数有3个参数，即XMLHttpRequest对象、错误信息、捕获的错误对象(可选)。ajax事件函数如下：

```JS
function(XMLHttpRequest, textStatus, errorThrown){
  //通常情况下textStatus和errorThrown只有其中一个包含信息
  this; //调用本次ajax请求时传递的options参数
}
```

#### contentType

要求为String类型的参数，当发送信息至服务器时，内容编码类型默认为`"application/x-www-form-urlencoded"`。该默认值适合大多数应用场合。

#### dataFilter

要求为Function类型的参数，给Ajax返回的原始数据进行预处理的函数。提供data和type两个参数。**data是Ajax返回的原始数据，type是调用jQuery.ajax时提供的dataType参数**。函数返回的值将由jQuery进一步处理。

```JS
function(data, type){
  //返回处理后的数据
   return data;
}
```

#### global

要求为Boolean类型的参数，默认为true。表示是否触发全局ajax事件。设置为false将不会触发全局ajax事件，ajaxStart或ajaxStop可用于控制各种ajax事件。

#### ifModified

要求为Boolean类型的参数，默认为false。仅在服务器数据改变时获取新数据。服务器数据改变判断的依据是Last-Modified头信息。默认值是false，即忽略头信息。

#### jsonp

要求为String类型的参数，在一个jsonp请求中重写回调函数的名字。该值用来替代在"callback=?"这种GET或POST请求中URL参数里的"callback"部分，例如{jsonp:'onJsonPLoad'}会导致将"onJsonPLoad=?"传给服务器。

#### username

要求为String类型的参数，用于响应HTTP访问认证请求的用户名。

#### password

要求为String类型的参数，用于响应HTTP访问认证请求的密码

#### processData

要求为Boolean类型的参数，默认为true。默认情况下，发送的数据将被转换为对象（从技术角度来讲并非字符串）以配合默认内容类型`"application/x-www-form-urlencoded"`。如果要发送DOM树信息或者其他不希望转换的信息，请设置为false。

#### scriptCharset

要求为String类型的参数，只有当请求时dataType为"jsonp"或者"script"，并且type是GET时才会用于强制修改字符集(charset)。通常在本地和远程的内容编码不同时使用。

### 具体代码说明

```JS
<script>
  
  
      function testAjax(){
         $.ajax({
             url:"servlet1",
             /*post get  部分浏览器可使用put delete*/
             type:"get",
             /*请求超时的时间设置*/
             timeout:2000,
             /*是否发送异步请求,默认值为true,如需同步请求,改为false*/
             async:true,
             /*是否从浏览器的缓存中加载信息,默认为true,false则不读取浏览器缓存*/
             cache:true,
             /*向服务器发送的数据,可以是key/value格式,也可以是对象格式
             * get方式下,会将信息附加在url后,如果数据不是字符串,会转换成字符串格式
             * */
             data:{username:"bjmeturing",password:"bjmeturing"},
             /*
             * 默认值为true 默认情况下,发送的数据将被转换为对象以配合
             *   content-type:application/x-www-form-urlencoded
             * 如果发送信息不希望被转换,设置为false即可
             * */
             proccessData:true,
             /*发送到服务器的数据为String类型时,默认值为
             *   application/x-www-form-urlencoded
             * 该值适合大多数应用场景
             * */
             contentType:"application/x-www-form-urlencoded",
              /*
              * 预期服务器返回值类型,
              * 如果不指定 jQuery根据http响应mime信息返回xml或者text
              * 并作为返回值传递,可选类型如下
              * xml 返回xml数据(基本淘汰)
              * html:返回纯文本HTML信息
              * script:返回JS脚本,
              * json:返回json数据
              * jsonp:jsonp格式
              * text:返回纯文本,也是默认格式
              * */
             dataType:"json",
             /*
             * 指定跨域回调函数名
             * */
             //jsonp:"fun1",
  
             /*只有当请求参数为dataType为jsonp或者script,并且是get方式请求时
             * 才能强制修改字符集,通常在跨域编码不同时使用
             * */
            //  scriptCharset:"utf-8",
  
             beforeSend:function(XMLHttpRequest){
               /*
                * 请求发送前可以通过该方法修改XMLHttpRequest对象函数
                * 如听见请求头
                * 如果该方法返回false,则会取消ajax请求
                * */
             },
             success:function(data,textStatus){
                 /*
                 *一般请求成功后会调用的函数,有两个可选参数
                 * data,数据 根据dataType的配置处理之后的数据 可能是xml text json 等
                 * testStatus ,描述响应状态的字符串
                 *  */
             },
             error:function(XMLHttpRequest,textStatus,errorThrown){
                 /*
                 * 请求失败时调用的函数,可选参数有
                 * XMLHttpRequest对象
                 * 错误信息
                 * 捕获的异常对象
                 * */
             },
             complete:function(XMLHttpRequest,textStatus){
                 /*
                 * 无论请求是否成功都睡调用的回调函数
                 * 可选参数有
                 * XMLHttpRequest对象
                 * textStatus 描述成功请求的类型的字符串
                 * */
             },
             dataFilter:function(data,type){
                 /*
                 * 数据过滤方法
                 * 给Ajax返回的原始数据进行预处理的函数。
                 * 提供data和type两个参数。
                 * data是Ajax返回的原始数据，
                 * type是调用jQuery.ajax时提供的dataType参数。
                 * 函数返回的值将由jQuery进一步处理
                 * */
             }
  
         })
      }
  
  
  </script>
```

ajax异步提交的可选属性和方法较多,实际研发我们没必要写这么多,一般可以使用默认值的属性就可以省略不写,一些业务逻辑或者功能上不需要的方法也可以省略不写,由于属性太多,针对于一些特殊情况,jQuery也给我们提供了一些专用的方法,这样可以简化`$.ajax`的写法,每一种简化写法都相当于已经指定了`$.ajax`一些属性的值.

## jQuery实现AJAX的其他写法

### $.load()

`jQuery load() `方法是简单但强大的 AJAX 方法，`load() `方法从服务器加载数据，并把返回的数据放入被选元素中。**默认使用 GET 方式** - 传递**附加参数时自动转换为 POST 方式**,

#### 语法

```JS
$(selector).load(URL,data,callback);
//url: URL地址
//data:待发送参数
//callback:载入成功时回调函数。
```

#### 测试代码

第一个页面
```JSP
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="js/jquery.min.js"></script>
    <script>
        function testLoad(){
            //$("#d1").load("servlet2.do","username=aaa&password=bbb",function(){alert("响应结束")})
            $("#d1").load("loadPage.html #a")
        }
    </script>
</head>
<body>
<div id="d1" style="width: 100px;height: 100px;border: 1px solid black">
</div>
<input type="button" value="测试" onclick="testLoad()">
</body>
</html>
```

第二个页面
```JSP
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="a">
    <li>JAVA</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>Mysql</li>
    <li>python</li>
</div>
</body>
</html>
```

后端代码
```JAVA
@WebServlet("/servlet2.do")
public class Servlet2 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        System.out.println(username);
        System.out.println(password);
        resp.setContentType("text/html;charset=UTF-8");
        resp.setCharacterEncoding("UTF-8");
        resp.getWriter().print("<h1>hello</h1>");
    }
}
```

### $.get()

这是一个简单的 GET 请求功能以取代复杂` $.ajax` 。请求成功时可调用回调函数。如果需要在出错时执行函数，请使用`$.ajax`。

#### 语法

```JS
$.get(url,[data],[callback],[type])
//url: URL地址
//data:待发送参数
//callback:载入成功时回调函数
//type:返回内容格式，xml, html, script, json, text, _default
```

该函数是简写的 Ajax 函数，等价于
```JS
$.ajax({
 type:   'GET',
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
```

### $.getJSON()

JSON是一种较为理想的数据传输格式，它能够很好的融合与JavaScript或其他宿主语言，并且可以被JS直接使用。使用JSON相比传统的通过 GET、POST直接发送“裸体”数据，在结构上更为合理，也更为安全。至于jQuery的`getJSON()`函数，只是设置了JSON参数的ajax()函数的一个简化版本。

#### 语法

```JS
$.getJSON(
      url,             //请求URL
      [data],          //传参，可选参数
      [callback]       //回调函数，可选参数
   　);
```

该函数是简写的 Ajax 函数，等价于
```JS
$.ajax({
  url: url,
  data: data,
  success: callback,
  dataType: json
});
```

仅仅是等效于上述函数,但是除此之外这个函数也是可以跨域使用的，相比get()、post()有一定优势。另外这个函数可以通过把请求url写 成"`myurl?callback=X`"这种格式，让程序执行回调函数X。

注意:`$.getJSON`**是以GET方式提交数据**，如果需要提交很大的数据量，可选`$.post`

### $.post()

这是一个简单的 POST 请求功能以取代复杂 `$.ajax` 。请求成功时可调用回调函数。如果需要在出错时执行函数，请使用`$.ajax`。

#### 语法

```JS
$.post(url,[data],[callback],[type])
//url: URL地址
//data:待发送参数
//callback:载入成功时回调函数
//type:返回内容格式，xml, html, script, json, text, _default
```

该函数是简写的 Ajax 函数，等价于
```JS
$.ajax({
  type:'POST',
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
```

#### 测试代码

前端代码

```JSP
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="js/jquery.min.js"></script>
    <script>
        function testAjax(){
            $.get(
                "servlet1.do",
                {"username":"zhangsan","password":"123456"},
                function(list){
                    $.each(list,function(i,e){
                        console.log(e)
                    })
                 },
                "json")
            console.log("------------------------------")
            $.getJSON(
                "servlet1.do",
                {"username":"zhangsan","password":"123456"},
                function(list){
                    $.each(list,function(i,e){
                        console.log(e)
                    })
                })
            console.log("------------------------------")
            $.post(
                "servlet1.do",
                {"username":"zhangsan","password":"123456"},
                function(list){
                    $.each(list,function(i,e){
                        console.log(e)
                    })
                },
                "json")
        }
    </script>
</head>
<body>
<input type="button" value="测试" onclick="testAjax()">
</body>
</html>
```

后端代码

```Java
@WebServlet("/servlet1.do")
public class Servlet1 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        System.out.println(username);
        System.out.println(password);
        Student stu1=new Student("小黑","男",10,new Date());
        Student stu2=new Student("小白","男",10,new Date());
        Student stu3=new Student("小黄","男",10,new Date());
        Student stu4=new Student("小花","男",10,new Date());
        ArrayList<Student> list =new ArrayList<>();
        Collections.addAll(list,stu1,stu2,stu3,stu4);
        GsonBuilder gb =new GsonBuilder();
        gb.setDateFormat("yyyy-MM-dd");
        Gson gson = gb.create();
        String json = gson.toJson(list);
        resp.setContentType("text/html;charset=UTF-8");
        resp.setCharacterEncoding("UTF-8");
        resp.getWriter().print(json);
    }
}
```