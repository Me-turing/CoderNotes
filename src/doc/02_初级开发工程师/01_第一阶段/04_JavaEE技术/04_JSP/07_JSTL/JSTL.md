---
title: JSTL
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


## JSTL核心标签库

### 认识JSTL

#### 为什么要学习JSTL

通过之前的案例我们发现,就算在JSP中可以使用EL表达式取出域对象中的数据,但是仍然避免不了还是要在页面中书写一些java代码.这种嵌入JAVA代码的处理比较繁琐,容易出错,且代码不容易维护.

#### 什么是JSTL

`JSTL（Java server pages standarded tag library，即JSP标准标签库）`是由JCP（Java community Proces）所制定的标准规范，它主要提供给Java Web开发人员一个标准通用的标签库，并由Apache的Jakarta小组来维护。

#### 使用JSTL的好处

开发人员可以利用JSTL和EL来开发Web程序，取代传统直接在页面上嵌入Java程序的做法，以提高程序的阅读性、维护性和方便性。在jstl中, 提供了多套标签库, 用于方便在jsp中完成或简化相关操作.

### JSTL标签库的组成部分

- 核心标签库: `core`, 简称c
- 格式化标签库: `format`, 简称fmt
- 函数标签库: `function`, 简称fn

### JSTL的使用前提

1. 需要在项目中导入`jstl-1.2.jar` ,`jstl`在后台由java代码编写, `jsp`页面中通过标签进行使用, 使用标签时, 会自动调用后台的java方法,
2. 标签和方法之间的映射关系在对应的`tld`文件中描述. 需要在页面中通过`taglib`指令引入对应的标签库, `uri`可以在对应的`tld`文件中找到

```JSP
<%@  taglib uri="标签库的定位" prefix="前缀(简称)" %>
```

### JSTL的使用

#### 导入核心标签库

```JSP
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
```

#### 操作域对象的标签

| &lt;c:set&gt;    | 向域对象中放入数据 | setAttribute    |
|:-----------------|:----------|:----------------|
| &lt;c:out&gt;    | 从域对象中取出数据 | getAttribute    |
| &lt;c:remove&gt; | 从域对象中移除数据 | removeAttribute |  

##### 向域对象放入值

```JSP
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
 <%--分别向四个域中放入数据--%>
 <%--
	 历史写法
	 <% request.setAttribute("msg", "requestMessage"); %>
 --%>
<%--
    c:set
        scope 指定放数据的域 可选值 page request session application
        var   数据的名称
        value 数据
--%>
<c:set scope="page" var="msg" value="pageMessage"></c:set>
<c:set scope="request" var="msg" value="requestMessage"></c:set>
<c:set scope="session" var="msg" value="sessionMessage"></c:set>
<c:set scope="application" var="msg" value="applicationMessage"></c:set>
</body>
</html>
```

##### 移除对象中的值

```JSP
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<%--移除指定域中的值--%>
<c:remove var="msg" scope="page"></c:remove>
<c:remove var="msg" scope="request"></c:remove>
<c:remove var="msg" scope="session"></c:remove>
<c:remove var="msg" scope="application"></c:remove>
</body>
</html>
```

##### 获取域对象中的值

```JSP
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<%--通过EL表达式取出域中的值--%>
<hr/>
${pageScope.msg}<br/>
${requestScope.msg}<br/>
${sessionScope.msg}<br/>
${applicationScope.msg }<br/>
<hr/>
<%--通过c:out标签获取域中的值--%>
<c:out value="${pageScope.msg}" default="page msg not found"/>
<c:out value="${requestScope.msg}" default="request msg not found"/>
<c:out value="${sessionScope.msg}" default="session msg not found"/>
<c:out value="${applicationScope.msg}" default="application msg not found"/>
</body>
</html>
```

#### 多条件分支标签

##### c:if 标签

```JSP
<%@ page import="java.util.Random" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <%--
    随机生成一个分数  
    0-100
    >=90 A
    >=80 B
    >=70 C
    >=60 D
    <60  E
    --%>
    <%
        int score =new Random().nextInt(101);
        pageContext.setAttribute("score", score);
    %>
    <%--
    test  判断条件
    c:if可以将test的结果放入指定的域中
    scope 指定存放的域
    var   数据名
    --%>
    分数:${score}<br/> 等级:
    <c:if test="${score ge 90}" scope="page" var="f1">A</c:if>
    <c:if test="${score ge 80 and score lt 90}" scope="page" var="f2">B</c:if>
    <c:if test="${score ge 70 and score lt 80}" scope="page" var="f3">C</c:if>
    <c:if test="${score ge 60 and score lt 70}" scope="page" var="f4">D</c:if>
    <c:if test="${score lt 60}" scope="page" var="f5">E</c:if>
    <hr/>
    ${f1}
    ${f2}
    ${f3}
    ${f4}
    ${f5}
    <hr/>
    <%--输出分数是否及格--%>
    <c:if test="${score ge 60}" scope="page" var="flag">及格</c:if>
    <c:if test="${!pageScope.flag}">不及格</c:if>
    <hr/>
</body>
</html>
```

##### c:choose标签

```JSP
<%@ page import="java.util.Random" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <%--
    随机生成一个分数  0-100
    >=90 A
    >=80 B
    >=70 C
    >=60 D
    <60  E
    --%>
    <%
        int score =new Random().nextInt(101);
        pageContext.setAttribute("score", score);
    %>
    <c:choose>
        <c:when test="${score ge 90}">A</c:when>
        <c:when test="${score ge 80}">B</c:when>
        <c:when test="${score ge 70}">C</c:when>
        <c:when test="${score ge 60}">D</c:when>
        <c:otherwise>E</c:otherwise>
    </c:choose>
</body>
</html>
```

#### 迭代标签

##### c:foreach标签

遍历指定次数: 打印九九乘法表

```JSP
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <%--
    for ( int i =1;i<=9 ;i+=2){
        pageContext.setAttribute("i",i)
    }
    c:foreach 每次执时都会向page域中放入一个名为 i 值为当前值这样的一个操作
    
	c:forEach中的属性
		var: 迭代变量, 存放在pageContext作用域
		begin: 迭代起始值
		end: 迭代结束值
		step: 迭代变量变化的步长
    --%>
    <c:forEach var="i" begin="1" end="9" step="1">
        <c:forEach var="j" begin="1" end="${i}" step="1">
            ${j} * ${i} = ${i*j} &nbsp;
        </c:forEach>
        <br/>
    </c:forEach>
</body>
</html>
```

便利对象数组/List

```JSP
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
    <style>
        table{
            border: 3px solid blue;
            width: 90%;
            margin: 0px auto;
        }
        td,th{
            border: 2px solid green;
        }
    </style>
</head>
<body>
    <table cellspacing="0px" cellpadding="0px">
        <tr>
            <th>序号</th>
            <th>索引</th>
            <th>isFirst</th>
            <th>isLast</th>
            <th>工号</th>
            <th>姓名</th>
            <th>姓名</th>
            <th>上级编号</th>
            <th>职务</th>
            <th>入职日期</th>
            <th>薪资</th>
            <th>补助</th>
            <th>部门号</th>
            <th>薪资等级</th>
        </tr>
        <%--<%
        List<Emp> emps = (List<Emp>) request.getAttribute("emps");
        for (Emp emp : emps) {
            pageContext.setAttribute("emp", emp);//将员工对象放入PageContext 域
        %>
        c:foreach
            items 要遍历的数组/List  可以通过EL表达式取出集合之后给改属性赋值
            var   中间变量的名称
            varStatus 记录每一个对象状态的设置
                   count 个数
                   index 索引
                   first 如果当前元素是迭代的第一个元素 true 否则为false
                   last  如果当前元素是迭代的最后一个元素 true 否则为false
                   current 当前迭代的元素本身
        --%>
        <c:forEach items="${emps}" var="emp" varStatus="empStatus">
            <tr>
                <td>${empStatus.count}</td>
                <td>${empStatus.index}</td>
                <td>${empStatus.first}</td>
                <td>${empStatus.last}</td>
                <td>${emp.empno}</td>
                <td>${emp.ename}</td>
                <td>${empStatus.current.ename}</td>
                <td>${emp.mgr}</td>
                <td>${emp.job}</td>
                <td>${emp.hiredate}</td>
                <td>${emp.sal}</td>
                <td>${emp.comm}</td>
                <td>${emp.deptno}</td>
                <td>
                   <c:choose>
                       <c:when test="${emp.sal le 500}">A</c:when>
                       <c:when test="${emp.sal le 1000}">B</c:when>
                       <c:when test="${emp.sal le 1500}">C</c:when>
                       <c:when test="${emp.sal le 2000}">D</c:when>
                       <c:when test="${emp.sal le 3000}">E</c:when>
                       <c:when test="${emp.sal le 4000}">F</c:when>
                       <c:when test="${emp.sal gt 4000}">G</c:when>
                   </c:choose>
                </td>
            </tr>
        </c:forEach>
    </table>
</body>
</html>
```


## JSTL格式化标签

### 格式化标签库

格式化标签库,也叫作**fmt标签**,是**JTSL中的第二大组成部分**,主要解决数据显示格式问题,**让JSP页面的数据格式更加规范**

### 导入语句

```JSP
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
```

### fmt标签属性

| 属性                | 描述                            | 是否必要 | 默认值           |
|:------------------|:------------------------------|:-----|:--------------|
| value             | 要显示的数字                        | 是    | 无             |
| type              | NUMBER，CURRENCY，或 PERCENT类型   | 否    | Number        |
| pattern           | 指定一个自定义的格式化模式用与输出&nbsp;&nbsp; | 否    | 无             |
| currencyCode      | 货币码（当type="currency"时）        | 否    | 取决于默认区域       |
| currencySymbol    | 货币符号 (当 type="currency"时)     | 否    | 取决于默认区域       |
| groupingUsed      | 是否对数字分组 (TRUE 或 FALSE)        | 否    | true          |
| groupingUsed      | <div>整型数最大的位数</div>           | 否    | 无             |
| maxIntegerDigits  | 整型数最大的位数                      | 否    | 无             |
| minIntegerDigits  | 整型数最小的位数                      | 否    | 无             |
| maxFractionDigits | 小数点后最大的位数                     | 否    | 无             |
| minFractionDigits | 小数点后最小的位数                     | 否    | 无             |
| var               | 存储格式化数字的变量                    | 否    | Print to page |
| scope             | var属性的作用域                     | 否    | page          |  

如果type属性为`percent`或`number`，那么您就可以使用其它几个格式化数字属性。
`maxIntegerDigits`属性和`minIntegerDigits`属性允许您指定整数的长度。若实际数字超过了**maxIntegerDigits所指定的最大值，则数字将会被截断**

有一些属性允许您指定小数点后的位数。`minFractionalDigits`属性和`maxFractionalDigits`属性允许您指定小数点后的位数。**若实际的数字超出了所指定的范围，则这个数字会被截断。**

数字分组可以用来在每三个数字中插入一个逗号。`groupingIsUsed`属性用来指定是否使用数字分组。当与`minIntegerDigits`属性一同使用时，**就必须要很小心地来获取预期的结果了。**

您或许会使用`pattern`属性。**这个属性可以让您在对数字编码时包含指定的字符**。接下来的表格中列出了这些字符。

| 符号                                                                                                                                                                                                                          | 描述                             |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|
|                                                                                                                                                                                                                           0 | 代表一位数字                         |
| E                                                                                                                                                                                                                           | <div>使用指数格式</div>              |
| #                                                                                                                                                                                                                           | 代表一位数字，若没有则显示 0，前导 0 和追尾 0 不显示 |
| .                                                                                                                                                                                                                           | 小数点                            |
| ,                                                                                                                                                                                                                           | 数字分组分隔符                        |
| ;                                                                                                                                                                                                                           | 分隔格式                           |
| ;                                                                                                                                                                                                                           | 使用默认负数前缀                       |
| %                                                                                                                                                                                                                           | 百分数                            |
| ?                                                                                                                                                                                                                           | 千分数                            |
| <span style="background-color: var(--background-primary); color: var(--text-normal); font-family: var(--font-interface); font-size: var(--default-font-size, 16px); font-weight: var(--body-font-weight, normal);">¤</span> | 货币符号，使用实际的货币符号代替               |
| X                                                                                                                                                                                                                           | 指定可以作为前缀或后缀的字符                 |
| \&apos;                                                                                                                                                                                                                 | 在前缀或后缀中引用特殊字符                  | 

### 日期格式化

日期格式化标签是fmt标签中专门用于处理日期格式的标签

`<fmt:formatDate>`标签有如下属性：

| 属性        | 描述                                   | 是否必要 | 默认值     |
|:----------|:-------------------------------------|:-----|:--------|
| value     | 要显示的日期                               | 是    | 无       |
| type      | DATE, TIME, 或 BOTH                   | 否    | date    |
| dateStyle | FULL, LONG, MEDIUM, SHORT, 或 DEFAULT | 否    | default |
| timeStyle | FULL, LONG, MEDIUM, SHORT, 或 DEFAULT | 否    | default |
| pattern   | 自定义格式模式                              | 否    | 无       |
| timeZone  | 显示日期的时区                              | 否    | 默认时区    |
| var       | 存储格式化日期的变量名                          | 否    | 显示在页面   |
| scope     | 存储格式化日志变量的范围                         | 否    | 页面      | 

`<fmt:formatDate>`标签格式模式

| 代码                   | 描述                                     | 实例              |
|:---------------------|:---------------------------------------|:----------------|
| G                    | 时代标志                                   | AD              |
| y                    | 不包含纪元的年份。如果不包含纪元的年份小于 10，则显示不具有前导零的年份。 |            2023 |
| M                    | 月份数字。一位数的月份没有前导零。                      | April &amp; 04  |
| d                    | 月中的某一天。一位数的日期没有前导零。                    |              20 |
| h                    |                12 小时制的小时。一位数的小时数没有前导零。 |              12 |
| H                    |                24 小时制的小时。一位数的小时数没有前导零。 |               0 |
| m                    | 分钟。一位数的分钟数没有前导零。                       |              45 |
| s                    | 秒。一位数的秒数没有前导零。                         |              52 |
| S                    | 毫秒                                     |             970 |
| E                    | 周几                                     | Tuesday         |
| D                    | 一年中的第几天                                |             180 |
| F                    | <div>一个月中的第几个周几</div>                  | 2 (一个月中的第二个星期三) |
| w                    | 一年中的第几周r                               |              27 |
| W                    | 一个月中的第几周                               |               2 |
| a                    | a.m./p.m. 指示符                          | PM              |
| k                    | 小时(12 小时制的小时)                          |              24 |
| K                    | 小时(24 小时制的小时)                          |               0 |
| z                    | 时区                                     | 中部标准时间          |
| &amp;apos;           |                                        | 转义文本            |
| &amp;apos;&amp;apos; |                                        | 单引号             |  

### 格式化标签案例开发

```JSP
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <title>Title</title>
    <style>
        table{
            border: 3px solid blue;
            width: 90%;
            margin: 0px auto;
        }
        td,th{
            border: 2px solid green;
        }
    </style>
</head>
<body>
    <table cellspacing="0px" cellpadding="0px">
        <tr>
            <th>序号</th>
            <th>索引</th>
            <th>isFirst</th>
            <th>isLast</th>
            <th>工号</th>
            <th>姓名</th>
            <th>姓名</th>
            <th>上级编号</th>
            <th>职务</th>
            <th>入职日期</th>
            <th>薪资</th>
            <th>补助</th>
            <th>部门号</th>
            <th>薪资等级</th>
        </tr>
        <%--<%
        List<Emp> emps = (List<Emp>) request.getAttribute("emps");
        for (Emp emp : emps) {
            pageContext.setAttribute("emp", emp);//将员工对象放入PageContext 域
        %>
        c:foreach
            items 要遍历的数组/List  可以通过EL表达式取出集合之后给改属性赋值
            var   中间变量的名称
            varStatus 记录每一个对象状态的设置
                   count 个数
                   index 索引
                   first 如果当前元素是迭代的第一个元素 true 否则为false
                   last  如果当前元素是迭代的最后一个元素 true 否则为false
                   current 当前迭代的元素本身
        --%>
        <c:forEach items="${emps}" var="emp" varStatus="empStatus">
            <tr>
                <td>${empStatus.count}</td>
                <td>${empStatus.index}</td>
                <td>${empStatus.first}</td>
                <td>${empStatus.last}</td>
                <td>${emp.empno}</td>
                <td>${emp.ename}</td>
                <td>${empStatus.current.ename}</td>
                <td>${emp.mgr}</td>
                <td>${emp.job}</td>
                <td>
                    <fmt:formatDate value="${emp.hiredate}" pattern="yyyy年MM月dd日 HH:mm:ss"/>
                </td>
                <td>
                    <%--
                    0 代表必须有一位数字,如果对应的位置没有值怎么办?自动补充0
                    # 代表有一位数字,开头和结尾的所有的0不保留
                    --%>
                        &yen;<fmt:formatNumber value="${emp.sal}" pattern="###,##0.00"/>
                </td>
                <td>${emp.comm}</td>
                <td>${emp.deptno}</td>
                <td>
                   <c:choose>
                       <c:when test="${emp.sal le 500}">A</c:when>
                       <c:when test="${emp.sal le 1000}">B</c:when>
                       <c:when test="${emp.sal le 1500}">C</c:when>
                       <c:when test="${emp.sal le 2000}">D</c:when>
                       <c:when test="${emp.sal le 3000}">E</c:when>
                       <c:when test="${emp.sal le 4000}">F</c:when>
                       <c:when test="${emp.sal gt 4000}">G</c:when>
                   </c:choose>
                </td>
            </tr>
        </c:forEach>
    </table>
</body>
</html>
```