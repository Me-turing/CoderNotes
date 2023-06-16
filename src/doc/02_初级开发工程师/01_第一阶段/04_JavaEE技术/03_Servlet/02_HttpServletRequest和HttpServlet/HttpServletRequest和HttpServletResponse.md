---
title: HttpServletRequest和HttpServletResponse
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


## HttpServletRequest

HttpServletRequest对象代表客户端浏览器的请求，当客户端浏览器通过HTTP协议访问服务器时，HTTP请求中的所有信息都会被Tomcat所解析并封装在这个对象中，通过这个对象提供的方法，可以获得客户端请求的所有信息。

### 了解请求结构

请求的主要组成部分

### 获取请求行

| API             | 说明                         |
| --------------- | -------------------------- |
| getRequestURL() | 返回客户端浏览器发出请求时的完整URL        |
| getRequestURI() | 返回请求行中指定资源部分               |
| getRemoteAddr() | 返回发出请求的客户机的IP地址            |
| getLocalAddr()  | 返回WEB服务器的IP地址              |
| getLocalPort()  | 返回WEB服务器处理Http协议的连接器所监听的端口 |

```java
public class Servlet3 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println(req.getRequestURL());//返回客户端浏览器发出请求时的完整URL。
        System.out.println(req.getRequestURI());//返回请求行中指定资源部分。
        System.out.println(req.getRemoteAddr());//返回发出请求的客户机的IP地址。
        System.out.println(req.getLocalAddr());//返回WEB服务器的IP地址。
        System.out.println(req.getLocalPort());//返回WEB服务器处理Http协议的连接器所监听的端口。
        System.out.println("主机名: " + req.getLocalName());
        System.out.println("客户端PORT: " + req.getRemotePort());
        System.out.println("当前项目部署名: " + req.getContextPath());
        System.out.println("协议名:"+req.getScheme());
        System.out.println("请求方式:"+req.getMethod());
    }
}
```

### 获取请求头信息

| API                    | 说明                     |
| ---------------------- | ---------------------- |
| getHeader("headerKey") | 根据请求头中的key获取对应的value   |
| getHeaderNames()       | 获取请求头中所有的key，该方法返回枚举类型 |

```java
public class Servlet3 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 根据请求头名或者请求头对应的值
        System.out.println(req.getHeader("Accept"));
        // 获得全部的请求头名
        Enumeration<String> headerNames = req.getHeaderNames();
        while (headerNames.hasMoreElements()){
            String headername = headerNames.nextElement();
            System.out.println(headername+":"+req.getHeader(headername));
        }
    }
}
```

### 获取请求体信息

| API                               | 说明                                                                |
| --------------------------------- | ----------------------------------------------------------------- |
| getParameter("key")               | 根据key获取指定value                                                    |
| getParameterValues("checkboxkey") | 获取复选框(checkbox组件)中的值，返回一个String\[]                                |
| getParameterNames()               | 获取请求中所有数据的key，该方法返回一个枚举类型                                         |
| getParameterMap()                 | 获取请求中所有的数据并存放到一个Map结构中，该方法返回一个Map，其中key为String类型value为String\[]类型 |
| setCharacterEncoding("utf-8")     | 设置请求编码                                                            |

请求的数据包基于字节在网络上传输，Tomcat接收到请求的数据包后会将数据包中的字节转换为字符。

在Tomcat中使用的是ISO-8859-1的单字节编码完成字节与字符的转换，所以数据中含有中文就会出现乱码，可以**通过req.setCharacterEncoding("utf-8")方法来对提交的数据根据指定的编码方式重新做编码处理**。

```java
public class Servlet3 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 根据请求头名或者请求头对应的值
        System.out.println(req.getHeader("Accept"));
        // 获得全部的请求头名
        Enumeration<String> headerNames = req.getHeaderNames();
        while (headerNames.hasMoreElements()){
            String headername = headerNames.nextElement();
            System.out.println(headername+":"+req.getHeader(headername));
        }
        System.out.println("________________________________");
        Map<String, String[]> pmap = req.getParameterMap();
        Set<Map.Entry<String, String[]>> entries = pmap.entrySet();
        for (Map.Entry<String, String[]> entry : entries) {
            System.out.println(entry.getKey()+":"+Arrays.toString(entry.getValue()));
        }
    }
}
```

## HttpServletResponse

HttpServletResponse对象代表服务器的响应。这个对象中封装了响应客户端浏览器的流对象，以及向客户端浏览器响应的响应头、响应数据、响应状态码等信息。

### 了解响应

HTTP响应

### 响应状态

| API            | 说明    |
| -------------- | ----- |
| setStatus(状态码) | 设置响应码 |

设置响应状态

更多类型详见: HTTP状态码分类

### 响应类型设置

| API                    | 说明                |
| ---------------------- | ----------------- |
| setContentType("Type") | 通过MIME-Type设置响应类型 |

MIME的全称是Multipurpose Internet Mail Extensions，即多用途互联网邮件扩展类型。这是HTTP协议中用来定义文档性质及格式的标准。对HTTP传输内容类型进行了全面定义。服务器通过MIME告知响应内容类型，而浏览器则通过MIME类型来确定如何处理文档。

更多类型详见: Content-Type

### 设置字符型响应

| API                                       | 说明                                                                |
| ----------------------------------------- | ----------------------------------------------------------------- |
| setContentType("image/jpeg")              | 设置响应类型为图片类型，图片类型为jpeg或jpg格式                                       |
| setContentType("image/gif")               | 设置响应类型为图片类型，图片类型为gif格式                                            |
| setCharacterEncoding("utf-8")             | 设置服务端为浏览器产生响应的响应编码，服务端会根据此编码将响应内容的字符转换为字节                         |
| setContentType("text/html;charset=utf-8") | 设置服务端为浏览器产生响应的响应编码，服务端会根据此编码将响应内容的字符转换为字节。同时客户端浏览器会根据此编码方式显示响应内容。 |

### 设置文件下载

| API                                                             | 说明                                       |
| --------------------------------------------------------------- | ---------------------------------------- |
| setHeader("Content-Disposition",   "attachment; filename="+文件名) | 该附加信息表示作为对下载文件的一个标识字段。不会在浏览器中显示而是直接做下载处理 |

`Content-Disposition:attachment`  : 该附加信息表示作为对下载文件的一个标识字段。不会在浏览器中显示而是直接做下载处理

`filename=文件名` : 表示指定下载文件的文件名

### Demo

```java
public class MyServlet2 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 设置响应码
        //resp.setStatus(500);
        //resp.setStatus(405, "request method not supported");
        // 设置响应头
        //resp.setHeader("Date","2022-11-11");
        // 自定义头
        // resp.setHeader("aaa", "bbb");
        // 高速浏览器响应的数据是什么? 浏览器根据此头决定 数据如何应用
        // 设置MIME类型 json  xml 文件下载  ... ...
        // resp.setHeader("content-type", "text/css");
        resp.setContentType("text/html");// 专门用于设置Content-Type 响应头
        resp.getWriter().write("<h1>this is tag h1</h1>");
    }
}
```
