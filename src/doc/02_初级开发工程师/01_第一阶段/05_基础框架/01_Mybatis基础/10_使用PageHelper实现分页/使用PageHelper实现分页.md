---
title: 使用PageHelper实现分页
icon: file
order: 1
author: 十七
date: 2023-07-06 周四
category:
	- 初级开发工程师
tag:
	- P5
sticky: true
index: true
---

## 为什么要使用PageHelper

在前面的学习中,我们使用JDBC+JSP+Servlet技术简单实现了一个带分页的用户学习展示功能,详见[分页](../../../04_JavaEE技术/07_分页/分页.md)

但是我们发现这样的**操作过于臃肿**,我们需要不断的计算DB中的数量以及当前页面的位置去拼接SQL查询

在Mybatis中帮我们提供了一个PageHelper的插件,可以让我们用极少的代码实现分页功能

## 了解PageHelper

### 内部原理

PageHelper方法使用了静态的ThreadLocal参数，分页参数和线程是绑定的。

内部流程是ThreadLocal中设置了分页参数（pageIndex，pageSize），之后在查询执行的时候，获取当线程中的分页参数，执行查询的时候通过拦截器在sql语句中添加分页参数，之后实现分页查询，查询结束后在 finally 语句中清除ThreadLocal中的查询参数

### 使用方法

1. 调用PageHelper方法：PageHelper.startPage(pageNum, pageSize)
2. MyBatis 查询方法 : 注意：只要你可以保证在PageHelper方法调用后紧跟 MyBatis 查询方法，这就是安全的。因为PageHelper在finally代码段中自动清除了ThreadLocal存储的对象。
3. 使用结果对PageInfo对象进行初始化
4. 返回PageInfo对象中的结果

## 使用PageHelper



## PageInfo对象和Page对象的区别

### 类别

### 使用

### 内置属性

