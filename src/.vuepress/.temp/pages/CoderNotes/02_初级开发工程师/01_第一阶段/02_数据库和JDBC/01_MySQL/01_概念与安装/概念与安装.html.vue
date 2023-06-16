<template><div><h2 id="数据库基本概念" tabindex="-1"><a class="header-anchor" href="#数据库基本概念" aria-hidden="true">#</a> 数据库基本概念</h2>
<h3 id="数据" tabindex="-1"><a class="header-anchor" href="#数据" aria-hidden="true">#</a> 数据</h3>
<p>所谓数据（Data）是指对客观事物进行描述并可以鉴别的符号，这些符号是可识别的、抽象的。它不仅仅指狭义上的数字，而是有多种表现形式：字母、文字、文本、图形、音频、视频等。现在计算机存储和处理的数据范围十分广泛，而描述这些数据的符号也变得越来越复杂了。</p>
<h3 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h3>
<p>数据库（Database，DB）指的是以一定格式存放、能够实现多个用户共享、与应用程序彼此独立的数据集合。</p>
<h3 id="数据库管理系统" tabindex="-1"><a class="header-anchor" href="#数据库管理系统" aria-hidden="true">#</a> 数据库管理系统</h3>
<p>数据库管理系统（Database Management System，DBMS）是用来定义和管理数据的软件。如何科学的组织和存储数据，如何高效的获取和维护数据，如何保证数据的安全性和完整性，这些都需要靠数据库管理系统完成。目前，比较流行的数据库管理系统有：Oracle、MySQL、SQL Server、DB2等。</p>
<h3 id="数据库应用程序" tabindex="-1"><a class="header-anchor" href="#数据库应用程序" aria-hidden="true">#</a> 数据库应用程序</h3>
<p>数据库应用程序（Database Application System，DBAS）是在数据库管理系统基础上，使用数据库管理系统的语法，开发的直接面对最终用户的应用程序，如学生管理系统、人事管理系统、图书管理系统等。</p>
<h3 id="数据库管理员" tabindex="-1"><a class="header-anchor" href="#数据库管理员" aria-hidden="true">#</a> 数据库管理员</h3>
<p>数据库管理员（Database Administrator，DBA）是指对数据库管理系统进行操作的人员，其主要负责数据库的运营和维护。</p>
<h3 id="最终用户" tabindex="-1"><a class="header-anchor" href="#最终用户" aria-hidden="true">#</a> 最终用户</h3>
<p>最终用户（User）指的是数据库应用程序的使用者。用户面向的是数据库应用程序（通过应用程序操作数据），并不会直接与数据库打交道。</p>
<h3 id="数据库系统" tabindex="-1"><a class="header-anchor" href="#数据库系统" aria-hidden="true">#</a> 数据库系统</h3>
<p>数据库系统（Database System，DBS）一般是由数据库、数据库管理系统、数据库应用程序、数据库管理员和最终用户构成。其中DBMS是数据库系统的基础和核心。</p>
<h2 id="数据库类型" tabindex="-1"><a class="header-anchor" href="#数据库类型" aria-hidden="true">#</a> 数据库类型</h2>
<h3 id="常见的数据库类型" tabindex="-1"><a class="header-anchor" href="#常见的数据库类型" aria-hidden="true">#</a> 常见的数据库类型</h3>
<p>数据库经过几十年的发展，出现了多种类型。根据数据的组织结构不同，主要分为网状数据库、层次数据库、关系型数据库和非关系型数据库四种。目前最常见的数据库模型主要是：关系型数据库和非关系型数据库。</p>
<h4 id="关系型数据库" tabindex="-1"><a class="header-anchor" href="#关系型数据库" aria-hidden="true">#</a> 关系型数据库</h4>
<p>关系型数据库模型是将复杂的数据结构用较为简单的二元关系（二维表）来表示，如图1-4所示。在该类型数据库中，对数据的操作基本上都建立在一个或多个表格上，我们可以采用结构化查询语言（SQL）对数据库进行操作。关系型数据库是目前主流的数据库技术，其中具有代表性的数据库管理系统有：Oracle、DB2、SQL Server、MySQL等。</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_4iuMskKljR.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="非关系型数据库nosql" tabindex="-1"><a class="header-anchor" href="#非关系型数据库nosql" aria-hidden="true">#</a> 非关系型数据库NOSQL</h4>
<p>NOSQL（Not Only SQL）泛指非关系型数据库。关系型数据库在超大规模和高并发的web2.0纯动态网站已经显得力不从心，暴露了很多难以克服的问题。NOSQL数据库的产生就是为了解决大规模数据集合多重数据种类带来的挑战，尤其是大数据应用难题。常见的非关系型数据库管理系统有Memcached、MongoDB，redis，HBase等。 </p>
<h3 id="关系型数据库和非关系数据库" tabindex="-1"><a class="header-anchor" href="#关系型数据库和非关系数据库" aria-hidden="true">#</a> 关系型数据库和非关系数据库</h3>
<p>虽然非关系型数据库的优点很多，但是由于其并不提供SQL支持、学习和使用成本较高并且无事务处理，所以本书的重点是关系型数据库。下面我们将介绍一下常用的关系型数据库管理系统。</p>
<ol>
<li><strong>Oracle</strong><br>
Oracle数据库是由美国的甲骨文（Oracle）公司开发的世界上第一款支持SQL语言的关系型数据库。经过多年的完善与发展，Oracle数据库已经成为世界上最流行的数据库，也是甲骨文公司的核心产品。<br>
Oracle数据库具有很好的开放性，能在所有的主流平台上运行，并且性能高、安全性高、风险低；但是其对硬件的要求很高、管理维护和操作比较复杂而且价格昂贵，所以一般用在满足对银行、金融、保险等行业大型数据库的需求上。</li>
<li><strong>DB2</strong><br>
DB2是IBM公司著名的关系型数据库产品。DB2无论稳定性，安全性，恢复性等等都无可挑剔，而且从小规模到大规模的应用都可以使用，但是用起来非常繁琐，比较适合大型的分布式应用系统。</li>
<li><strong>SQL Server</strong><br>
SQL Server是由Microsoft开发和推广的关系型数据库，SQL Server的功能比较全面、效率高，可以作为中型企业或单位的数据库平台。SQL Server可以与Windows操作系统紧密继承，无论是应用程序开发速度还是系统事务处理运行速度，都能得到大幅度提升。但是，SQL Server只能在Windows系统下运行，毫无开放性可言。</li>
<li><strong>MySQL</strong><br>
MySQL是一种开放源代码的轻量级关系型数据库，MySQL数据库使用最常用的结构化查询语言（SQL）对数据库进行管理。由于MySQL是开放源代码的，因此任何人都可以在General Public License的许可下下载并根据个人需要对其缺陷进行修改。<br>
由于MySQL数据库体积小、速度快、成本低、开放源码等优点，现已被广泛应用于互联网上的中小型网站中，并且大型网站也开始使用MySQL数据库，如网易、新浪等。  </li>
</ol>
<h2 id="mysql介绍" tabindex="-1"><a class="header-anchor" href="#mysql介绍" aria-hidden="true">#</a> MySQL介绍</h2>
<p>MySQL数据库最初是由瑞典MySQL AB公司开发，2008年1月16号被Sun公司收购。2009年，SUN又被Oracle收购。MySQL是目前IT行业最流行的开放源代码的数据库管理系统，同时它也是一个支持多线程高并发多用户的关系型数据库管理系统。MySQL之所以受到业界人士的青睐，主要是因为其具有以下几方面优点：</p>
<ol>
<li><strong>开放源代码</strong><br>
MySQL最强大的优势之一在于它是一个开放源代码的数据库管理系统。开源的特点是给予了用户根据自己需要修改DBMS的自由。MySQL采用了General Public License，这意味着授予用户阅读、修改和优化源代码的权利，这样即使是免费版的MySQL的功能也足够强大，这也是为什么MySQL越来越受欢迎的主要原因。</li>
<li><strong>跨平台</strong><br>
MySQL可以在不同的操作系统下运行，简单地说，MySQL可以支持Windows系统、UNIX系统、Linux系统等多种操作系统平台。这意味着在一个操作系统中实现的应用程序可以很方便地移植到其他的操作系统下。</li>
<li><strong>轻量级</strong><br>
MySQL的核心程序完全采用多线程编程，这些线程都是轻量级的进程，它在灵活地为用户提供服务的同时，又不会占用过多的系统资源。因此MySQL能够更快速、高效的处理数据。</li>
<li><strong>成本低</strong><br>
MySQL分为社区版和企业版，社区版是完全免费的，而企业版是收费的。即使在开发中需要用到一些付费的附加功能，价格相对于昂贵的Oracle、DB2等也是有很大优势的。其实免费的社区版也支持多种数据类型和正规的SQL查询语言，能够对数据进行各种查询、增加、删除、修改等操作，所以一般情况下社区版就可以满足开发需求了，而对数据库可靠性要求比较高的企业可以选择企业版。</li>
</ol>
<p><strong>另外，PHP中提供了一整套的MySQL函数，对MySQL进行了全方位的强力支持。</strong></p>
<p>总体来说，MySQL是一款开源的、免费的、轻量级的关系型数据库，其具有体积小、速度快、成本低、开放源码等优点，其发展前景是无可限量的。</p>
<p>社区版与企业版主要的区别是：</p>
<ol>
<li>社区版包含所有MySQL的最新功能，而企业版只包含稳定之后的功能。换句话说，社区版可以理解为是企业版的测试版</li>
<li>MySQL官方的支持服务只是针对企业版，如果用户在使用社区版时出现了问题，MySQL官方是不负责任的</li>
</ol>
<h2 id="mysql安装" tabindex="-1"><a class="header-anchor" href="#mysql安装" aria-hidden="true">#</a> MySQL安装</h2>
<p>官方下载地址：<a href="https://dev.mysql.com/downloads/windows/installer/8.0.html" title="https://dev.mysql.com/downloads/windows/installer/8.0.html" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/downloads/windows/installer/8.0.html<ExternalLinkIcon/></a></p>
<h3 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤" aria-hidden="true">#</a> 安装步骤</h3>
<ol>
<li>双击MySQL安装文件mysql-installer-community-8.0.18.0.msi，出现安装类型选项:<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_LGSeA_1Zva.png" alt="" loading="lazy"><br>
Developer Default：开发者默认<br>
Server only：只安装服务器端 <br>
Client only：只安装客户端<br>
Full：安装全部选项<br>
Custom：自定义安装</li>
<li>选择，然后继续：<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_BUlhLbPNg2.png" alt="" loading="lazy"></li>
<li>进入产品配置向导，配置多个安装细节，点击Next按钮即可:<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_xbJcIA3DzG.png" alt="" loading="lazy"></li>
<li>高可靠性High Availability，采用默认选项即可:<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_YIAOPkTPgS.png" alt="" loading="lazy"><br>
InnoDB Cluster:InnoDB集群<br>
Standalone MySQL Server/Classic MySQL Replication:独立MySQL服务器/经典MySQL复制</li>
<li>类型和网络 Type and Networking，采用默认选项即可。记住MySQL的监听端口默认是3306<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_wj3ji-fHK5.png" alt="" loading="lazy"></li>
<li>身份验证方法Authentication Method，采用默认选项即可:<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_QX2_CdcNJJ.png" alt="" loading="lazy"></li>
<li>账户和角色 Accounts and Roles。MySQL管理员账户名称是root，在此处指定root用户的密码。还可以在此处通过Add User按钮添加其他新账户，此处省略该操作。<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_aFFBJxo3gl.png" alt="" loading="lazy"></li>
<li>Windows服务：Windows Service<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_TCsVXXLvFU.png" alt="" loading="lazy"><br>
Configure MySQL Server as a Windows Service:给MySQL服务器配置一个服务项<br>
Windows Service Name:服务名称，采用默认名称MySQL80即可<br>
Start the MySQL at System Startup：系统启动时开启MySQL服务</li>
<li>Apply Configuration：点击Execute按钮执行开始应用这些配置项<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_jcsvIK6HX2.png" alt="" loading="lazy"><br>
Writing configuration file: 写配置文件。<br>
Updating Windows Firewall rules：更新Windows防火墙规则<br>
Adjusting Windows services：调整Windows服务<br>
Initializing database：初始化数据库<br>
Starting the server： 启动服务器<br>
Applying security setting：应用安全设置<br>
Updating the Start menu link：更新开始菜单快捷方式链接<br>
如果配置出错，查看右侧的log，查看对应错误信息:<br>
执行完成后，如下图所示。单击Finish完成安装，进入产品配置环节。<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_mYaiQ_aZjE.png" alt="" loading="lazy"></li>
<li>产品配置Product Configuration到此结束：点击Next按钮<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_Oqd2KK7OdN.png" alt="" loading="lazy"></li>
<li>安装完成 Installation Complete。点击Finish按钮完成安装<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_oBzcxm7esY.png" alt="" loading="lazy"></li>
</ol>
<h3 id="检测安装是否成功" tabindex="-1"><a class="header-anchor" href="#检测安装是否成功" aria-hidden="true">#</a> 检测安装是否成功</h3>
<ol>
<li>安装了Windows Service：MySQL80，并且已经启动<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_86U-11KO1B.png" alt="" loading="lazy"></li>
<li>安装了MySQL软件。安装位置为：C:\Program Files\MySQL<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_rQzrkMBs_q.png" alt="" loading="lazy"><br>
（MySQL文件下放的是软件的内容）</li>
<li>安装了MySQL数据文件夹，用来存放MySQL基础数据和以后新增的数据。安装位置为C:\ProgramData\MySQL\MySQL Server 8.0<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_tp7sGi2RZy.png" alt="" loading="lazy"><br>
（ProgramData文件夹可能是隐藏的，显示出来即可）<br>
（MySQL文件下的内容才是真正的MySQL中数据）</li>
<li>在MySQL数据文件夹中有MySQL的配置文件：my.ini。它是MySQL数据库中使用的配置文件，修改这个文件可以达到更新配置的目的。以下几个配置项需要大家特别理解</li>
</ol>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>port=3306：//监听端口是3306
basedir="C:/Program Files/MySQL/MySQL Server 8.0/"：//软件安装位置
datadir=C:/ProgramData/MySQL/MySQL Server 8.0/Data：//数据文件夹位置
default_authentication_plugin=caching_sha2_password：//默认验证插件
default-storage-engine=INNODB：//默认存储引擎
（这些内容在Linux下可能会手动更改）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql访问" tabindex="-1"><a class="header-anchor" href="#mysql访问" aria-hidden="true">#</a> MySQL访问</h2>
<h3 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_pmpacgNWam.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>访问MySQL服务器对应的命令：mysql.exe ,位置：C:\Program Files\MySQL\MySQL Server 8.0\bin<br>
（mysql.exe需要带参数执行，所以直接在图形界面下执行该命令会自动结束）</p>
<p>打开控制命令台：<code v-pre>win+r</code>:</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_HZ82cUH90G.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>执行mysql.exe命令的时候出现错误：</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_vbHe8CsfT2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>需要配置环境变量path:</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_b-iazqRsqx.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>注意：控制命令台必须重启才会生效：</p>
<p>登录的命令：<strong><code v-pre>mysql  -hlocalhost -uroot –p</code></strong></p>
<p>mysql：bin目录下的文件mysql.exe。mysql是MySQL的命令行工具，是一个客户端软件，可以对任何主机的mysql服务（即后台运行的mysqld）发起连接。</p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>-h：host主机名。后面跟要访问的数据库服务器的地址；如果是登录本机，可以省略
-u：user 用户名。后面跟登录数据的用户名，第一次安装后以root用户来登录，是MySQL的管理员用户
-p: password 密码。一般不直接输入，而是回车后以保密方式输入。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_NwbYPsOeTm.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="访问数据库" tabindex="-1"><a class="header-anchor" href="#访问数据库" aria-hidden="true">#</a> 访问数据库</h3>
<p>显示MySQL中的数据库列表：<code v-pre>show databases; </code>  默认有四个自带的数据库，每个数据库中可以有多个数据库表、视图等对象。</p>
<p>切换当前数据库的命令：<code v-pre>use mysql;</code><br>
MySQL下可以有多个数据库，如果要访问哪个数据库，需要将其置为当前数据库。</p>
<p>该命令的作用就是将数据库mysql（默认提供的四个数据库之一的名字）置为当前数据库<br>
显示当前数据库的所有数据库表：<code v-pre>show tables;</code></p>
<p>MySQL 层次：不同项目对应不同的数据库组成 - 每个数据库中有很多表  - 每个表中有很多数据</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_jZXGzqcsZa.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="退出数据库" tabindex="-1"><a class="header-anchor" href="#退出数据库" aria-hidden="true">#</a> 退出数据库</h3>
<p>退出数据库可以使用quit或者exit命令完成，也可以用\q;  完成退出操作</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_FkZt1ZIX3L.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="mysql卸载" tabindex="-1"><a class="header-anchor" href="#mysql卸载" aria-hidden="true">#</a> MySQL卸载</h2>
<ol>
<li>停止MySQL服务：在命令行模式下执行<code v-pre>net stop mysql</code>或者在Windows服务窗口下停止服务<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_pZortlgEN6.png" alt="" loading="lazy"></li>
<li>在控制面板中删除MySQL软件<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_pn9lkbiMDQ.png" alt="" loading="lazy"></li>
<li>删除软件文件夹：直接删除安装文件夹<code v-pre>C:\Program Files\MySQL</code>，其实此时该文件夹已经被删除或者剩下一个空文件夹。</li>
<li>删除数据文件夹：直接删除文件夹<code v-pre>C:\ProgramData\MySQL</code>。此步不要忘记，否则会影响MySQL的再次安装。<br>
（ProgramData文件夹可能是隐藏的，显示出来即可）<br>
（MySQL文件下的内容才是真正的MySQL中数据）</li>
<li>删除path环境变量中关于MySQL安装路径的配置</li>
</ol>
<h1 id="虚拟机网络配置-windows" tabindex="-1"><a class="header-anchor" href="#虚拟机网络配置-windows" aria-hidden="true">#</a> 虚拟机网络配置(Windows)</h1>
<p>我们将Mysql安装到虚拟机环境中,此时我们需要执行以下配置</p>
<ol>
<li>配置VMware的网络<br>
配置NAT模式 以及子网:<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_o_6jxwR4pC.png" alt="" loading="lazy"><br>
配置网关:<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_DYqVs9EAR0.png" alt="" loading="lazy"><br>
将虚拟机镜像设置为NAT<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_RblTtkdZA5.png" alt="" loading="lazy"></li>
<li>配置虚拟机的网络<br>
虚拟机内部IPV4<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_WiFXWC0hnY.png" alt="" loading="lazy"></li>
<li>配置Mysql的远程访问<br>
在cmd命令行连接数据库：<code v-pre>mysql -uroot -p</code><br>
切换mysql数据库：<code v-pre>use mysql;</code><br>
查看user表中的host信息：<code v-pre>select host,user from user;</code><br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_0MucsWCnfO.png" alt="" loading="lazy"><br>
可以看到root对应的host是localhost，我们将它改成%即可：<code v-pre>update user set host = '%' where user = 'root';</code><br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_cSy7yp-CF2.png" alt="" loading="lazy"><br>
刷新权限：<code v-pre>flush privileges;</code></li>
<li>测试远程访问<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/01_概念与安装/image/image_SkqrhQ1N6V.png" alt="" loading="lazy"></li>
</ol>
</div></template>


