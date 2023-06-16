<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>我们都知道，<strong>数据库管理人员（DBA）通过数据库管理系统（DBMS）可以对数据库（DB）中的数据进行操作</strong>，但具体是如何操作的呢？这就涉及到我们本节要讲的SQL语言。</p>
<p>SQL（Structured Query Language）是结构化查询语言的简称，它是一种数据库查询和程序设计语言，同时也是目前使用最广泛的关系型数据库操作语言。在数据库管理系统中，使用SQL语言来实现数据的存取、查询、更新等功能。SQL是一种非过程化语言，<strong>只需提出“做什么”，而不需要指明“怎么做”。</strong></p>
<p>SQL是由IBM公司在1974~1979年之间根据E.J.Codd发表的关系数据库理论为基础开发的，其前身是“SEQUEL”，后更名为SQL。由于SQL语言具有集数据查询、数据操纵、数据定义和数据控制功能于一体，类似自然语言、简单易用以及非过程化等特点，得到了快速的发展，并于1986年10月，被美国国家标准协会（American National Standards Institute，ANSI）采用为关系数据库管理系统的标准语言，后为国际标准化组织（International Organization for Standardization，ISO）采纳为国际标准。</p>
<p>官方说明文档: ![[./assets/mysql.chm]]</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/02_数据库+JDBC/01_MySQL/02_MySQL入门/image/image_c7OUUwHslN.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="sql语言分类" tabindex="-1"><a class="header-anchor" href="#sql语言分类" aria-hidden="true">#</a> SQL语言分类</h2>
<h3 id="数据查询语言-data-query-language-dql" tabindex="-1"><a class="header-anchor" href="#数据查询语言-data-query-language-dql" aria-hidden="true">#</a> 数据查询语言（Data Query Language，DQL）</h3>
<p>DQL主要用于数据的查询，其基本结构是使用SELECT子句，FROM子句和WHERE子句的组合来查询一条或多条数据。</p>
<h3 id="数据操作语言-data-manipulation-language-dml" tabindex="-1"><a class="header-anchor" href="#数据操作语言-data-manipulation-language-dml" aria-hidden="true">#</a> 数据操作语言（Data Manipulation Language，DML）</h3>
<p>DML主要用于对数据库中的数据进行增加、修改和删除的操作，其主要包括：</p>
<ol>
<li><code v-pre>INSERT</code>：增加数据</li>
<li><code v-pre>UPDATE</code>：修改数据</li>
<li><code v-pre>DELETE</code>：删除数据</li>
</ol>
<h3 id="数据定义语言-data-definition-language-ddl" tabindex="-1"><a class="header-anchor" href="#数据定义语言-data-definition-language-ddl" aria-hidden="true">#</a> 数据定义语言（Data Definition Language，DDL）</h3>
<p>DDL主要用针对是数据库对象（数据库、表、索引、视图、触发器、存储过程、函数）进行创建、修改和删除操作。其主要包括：</p>
<ol>
<li><code v-pre>CREATE</code>：创建数据库对象</li>
<li><code v-pre>ALTER</code>：修改数据库对象</li>
<li><code v-pre>DROP</code>：删除数据库对象</li>
</ol>
<h3 id="数据控制语言-data-control-language-dcl" tabindex="-1"><a class="header-anchor" href="#数据控制语言-data-control-language-dcl" aria-hidden="true">#</a> 数据控制语言（Data Control Language，DCL）</h3>
<p>DCL用来授予或回收访问 数据库的权限，其主要包括：</p>
<ol>
<li><code v-pre>GRANT</code>：授予用户某种权限</li>
<li><code v-pre>REVOKE</code>：回收授予的某种权限</li>
</ol>
<h3 id="事务控制语言-transaction-control-language-tcl" tabindex="-1"><a class="header-anchor" href="#事务控制语言-transaction-control-language-tcl" aria-hidden="true">#</a> 事务控制语言（Transaction Control Language，TCL）</h3>
<p>TCL用于数据库的事务管理。其主要包括：</p>
<ol>
<li><code v-pre>START TRANSACTION</code>：开启事务</li>
<li><code v-pre>COMMIT</code>：提交事务</li>
<li><code v-pre>ROLLBACK</code>：回滚事务</li>
<li><code v-pre>SET TRANSACTION</code>：设置事务的属性 </li>
</ol>
<h2 id="初始化表案例" tabindex="-1"><a class="header-anchor" href="#初始化表案例" aria-hidden="true">#</a> 初始化表案例</h2>
<ol>
<li>建立一张用来存储学生信息的表</li>
<li>字段包含学号、姓名、性别，年龄、入学日期、班级，email等信息</li>
<li>学号是主键 = 不能为空 +  唯一</li>
<li>姓名不能为空</li>
<li>性别默认值是男</li>
<li>Email唯一</li>
</ol>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">##这是一个单行注释</span>

<span class="token comment">/*
多行注释
多行注释
多行注释
*/</span>

<span class="token comment">/*
建立一张用来存储学生信息的表
字段包含学号、姓名、性别，年龄、入学日期、班级，email等信息
*/</span>
<span class="token comment">-- 创建数据库表：</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> t_student<span class="token punctuation">(</span>
        sno <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">-- 6显示长度 </span>
        sname <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">-- 5个字符</span>
        sex <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        age <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        enterdate <span class="token keyword">date</span><span class="token punctuation">,</span>
        classname <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        email <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查看表的结构：展示表的字段详细信息</span>
<span class="token keyword">desc</span> t_student<span class="token punctuation">;</span>

<span class="token comment">-- 查看表中数据：</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t_student<span class="token punctuation">;</span>

<span class="token comment">-- 查看建表语句：</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">table</span> t_student<span class="token punctuation">;</span>

<span class="token comment">/*
CREATE TABLE `t_student` (
  `sno` int DEFAULT NULL,
  `sname` varchar(5) DEFAULT NULL,
  `sex` char(1) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `enterdate` date DEFAULT NULL,
  `classname` varchar(10) DEFAULT NULL,
  `email` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库表列类型" tabindex="-1"><a class="header-anchor" href="#数据库表列类型" aria-hidden="true">#</a> 数据库表列类型</h2>
<h3 id="整数类型" tabindex="-1"><a class="header-anchor" href="#整数类型" aria-hidden="true">#</a> 整数类型</h3>
<table>
<thead>
<tr>
<th>整数类型</th>
<th>大小</th>
<th>表数范围(有符号)</th>
<th>表数范围(无符号)</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>TINYINT</td>
<td>1字节</td>
<td>(-128,127)</td>
<td>(0,255)</td>
<td>小整数值</td>
</tr>
<tr>
<td>SMALLINT</td>
<td>2字节</td>
<td>(-32768,32767)</td>
<td>(0,65526)</td>
<td>大整数值</td>
</tr>
<tr>
<td>MEDIUMINT</td>
<td>3字节</td>
<td>(-8388608,8388607)</td>
<td>(0,16777215)</td>
<td>大整数值</td>
</tr>
<tr>
<td>INT/INTEGER</td>
<td>4字节</td>
<td>(-2147483648,2147483647)</td>
<td>(0,4294967295)</td>
<td>大整数值</td>
</tr>
<tr>
<td>BIGINT</td>
<td>8字节</td>
<td>(-9233372036854775808,9233372036854775807)</td>
<td>(0,18446744073709551615)</td>
<td>极大整数值</td>
</tr>
</tbody>
</table>
<p>MySQL支持选择在该类型关键字后面的括号内指定整数值的显示宽度(例如，INT(4))。显示宽度并不限制可以在列内保存的值的范围，也不限制超过列的指定宽度的值的显示</p>
<p>主键自增：不使用序列，通过<code v-pre>auto_increment</code>，要求是整数类型</p>
<h3 id="浮点数类型" tabindex="-1"><a class="header-anchor" href="#浮点数类型" aria-hidden="true">#</a> 浮点数类型</h3>
<table>
<thead>
<tr>
<th>浮点数类型</th>
<th>大小</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>FLOAT</td>
<td>4字节</td>
<td>单精度浮点数值</td>
</tr>
<tr>
<td>DOUBLE</td>
<td>8字节</td>
<td>双精度浮点数值</td>
</tr>
</tbody>
</table>
<p>需要注意的是与整数类型不一样的是，浮点数类型的宽度不会自动扩充。 <code v-pre>score double(4,1)</code></p>
<p><code v-pre>score double(4,1)</code> --小数部分为1位，总宽度4位，并且不会自动扩充。</p>
<h3 id="字符串类型" tabindex="-1"><a class="header-anchor" href="#字符串类型" aria-hidden="true">#</a> 字符串类型</h3>
<table>
<thead>
<tr>
<th>字符串类型</th>
<th>大小</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>CHAR(M)</td>
<td>0~255字符</td>
<td>允许长度0~M个字符长度的定长字符串</td>
</tr>
<tr>
<td>VARCHAR(M)</td>
<td>0~65535字符</td>
<td>允许长度0~M个字符长度的定长字符串</td>
</tr>
<tr>
<td>BINARY(M)</td>
<td>0~255字节</td>
<td>允许长度0~M个字符长度的定长二进制字符串</td>
</tr>
<tr>
<td>VARBINARY(M)</td>
<td>0~65535字节</td>
<td>允许长度0~M个字符长度的定长二进制字符串</td>
</tr>
<tr>
<td>TINYBLOB</td>
<td>0~255字节</td>
<td>二进制形式的短文本数据(长度为不超过255个字符)</td>
</tr>
<tr>
<td>TINYTEXT</td>
<td>0~255字节</td>
<td>短文本数据</td>
</tr>
<tr>
<td>BLOB</td>
<td>binary largeObject</td>
<td>二进制形式的长文本数据</td>
</tr>
<tr>
<td>TEXT</td>
<td></td>
<td>长文本数据</td>
</tr>
<tr>
<td>MEDIUMBLOB</td>
<td>0~16777215字节</td>
<td>二进制形式的中等长度文本数据</td>
</tr>
<tr>
<td>MEDUYMTEXT</td>
<td>0~16777215字节</td>
<td>中等长度文本数据</td>
</tr>
<tr>
<td>LOGNGBLOB</td>
<td>0~4294967295字节</td>
<td>二进制形式的极大文本数据</td>
</tr>
<tr>
<td>LONGTEXT</td>
<td>0~4294967295字节</td>
<td>极大文本数据</td>
</tr>
</tbody>
</table>
<p>CHAR和VARCHAR类型相似，均用于存于较短的字符串，主要的不同之处在于存储方式。CHAR类型长度固定，VARCHAR类型的长度可变。</p>
<p>因为VARCHAR类型能够根据字符串的实际长度来动态改变所占字节的大小，所以在不能明确该字段具体需要多少字符时<code v-pre>推荐使用VARCHAR类型</code>，这样可以大大地节约磁盘空间、提高存储效率。</p>
<p>CHAR和VARCHAR表示的是字符的个数，而不是字节的个数</p>
<h3 id="日期和时间类型" tabindex="-1"><a class="header-anchor" href="#日期和时间类型" aria-hidden="true">#</a> 日期和时间类型</h3>
<table>
<thead>
<tr>
<th>类型</th>
<th>格式</th>
<th>取值范围</th>
<th>0值</th>
</tr>
</thead>
<tbody>
<tr>
<td>TIME</td>
<td>'HH:MM:SS'</td>
<td>(-838:59:59,838:59:59)</td>
<td>00:00:00</td>
</tr>
<tr>
<td>DATE</td>
<td>YYYY-MM-DD</td>
<td>(1000-01-01,9999-12-31)</td>
<td>0000-00-00</td>
</tr>
<tr>
<td>YEAR</td>
<td>YYYY</td>
<td>(1901,2155)</td>
<td>0000</td>
</tr>
<tr>
<td>DATETIME</td>
<td>YYYY-MM-DD HH:MM:SS</td>
<td>1000-01-01 00:00:00,9999-12-31 23:59:59</td>
<td>0000-00-00 00:00:00</td>
</tr>
<tr>
<td>TIMESTAMP</td>
<td>YYYY-MM-DD HH:MM:SS</td>
<td>1970-01-01 00:00:01 UTC,2038-01-19 03:14:07 UTC</td>
<td>0000-00-00 00:00:00</td>
</tr>
</tbody>
</table>
<p>TIMESTEMP类型的数据指定方式与DATETIME基本相同，两者的不同之处在于以下几点：</p>
<ol>
<li>数据的取值范围不同，TIMESTEMP类型的取值范围更小。</li>
<li>如果我们对TIMESTAMP类型的字段没有明确赋值，或是被赋与了NULL值，MySQL会自动将该字段赋值为系统当前的日期与时间。</li>
<li>TIMESTEMP类型还可以使用CURRENT_TIMESTAMP来获取系统当前时间。</li>
<li>TIMESTEMP类型有一个很大的特点，那就是时间是根据时区来显示的。<br>
例如，在东八区插入的TIMESTEMP数据为2017-07-11 16:43:25，在东七区显示时，时间部分就变成了15:43:25，在东九区显示时，时间部分就变成了17:43:25。</li>
</ol>
</div></template>


