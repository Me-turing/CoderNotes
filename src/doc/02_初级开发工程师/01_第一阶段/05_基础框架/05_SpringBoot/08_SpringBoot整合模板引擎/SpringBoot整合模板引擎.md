---
title: SpringBoot整合模板引擎
icon: file
order: 1
author: 十七
date: 2023-07-10 周一
category:
	- 初级开发工程师
tag:
	- P5
sticky: true
index: true
---

## JSP

### 优点

1、功能强大，可以写java代码
2、支持jsp标签（jsp tag）
3、支持表达式语言（el）
4、官方标准，用户群广，丰富的第三方jsp标签库

### 缺点

性能问题。不支持前后端分离

### 使用教程

[SpringBoot整合JSP](01_SpringBoot整合JSP/SpringBoot整合JSP.md)

## FreeMarker

FreeMarker是一个用Java语言编写的模板引擎，它基于模板来生成文本输出。FreeMarker与Web容器无关，即在Web运行时，它并不知道Servlet或HTTP。它不仅可以用作表现层的实现技术，而且还可以用于生成XML，JSP或Java 等。

目前企业中:主要用Freemarker做静态页面或是页面展示

### 优点

1、不用编写java代码，可以实现严格的mvc分离
2、性能非常不错
3、对jsp标签支持良好
4、内置大量常用功能，使用非常方便
5、宏定义（类似jsp标签）非常方便
6、使用表达式语言

### 缺点

1、不是官方标准
2、用户群体和第三方标签库没有jsp多

### 使用教程

[使用FreeMarker模板引擎](02_使用FreeMarker模板引擎/使用FreeMarker模板引擎.md)

## Thymeleaf

Thymeleaf是个XML/XHTML/HTML5模板引擎，可以用于Web与非Web应用。

Thymeleaf的主要目标在于提供一种可被浏览器正确显示的、格式良好的模板创建方式，因此也可以用作静态建模。你可以使用它创建经过验证的XML与HTML模板。相对于编写逻辑或代码，开发者只需将标签属性添加到模板中即可。接下来，这些标签属性就会在DOM（文档对象模型）上执行预先制定好的逻辑。Thymeleaf的可扩展性也非常棒。你可以使用它定义自己的模板属性集合，这样就可以计算自定义表达式并使用自定义逻辑。这意味着Thymeleaf还可以作为模板引擎框架。

### 优点

静态html嵌入标签属性，浏览器可以直接打开模板文件，便于前后端联调。springboot官方推荐方案。

### 缺点

模板必须符合xml规范

### 使用教程

[使用Thymeleaf模板引擎](03_使用Thymeleaf模板引擎/使用Thymeleaf模板引擎.md)

