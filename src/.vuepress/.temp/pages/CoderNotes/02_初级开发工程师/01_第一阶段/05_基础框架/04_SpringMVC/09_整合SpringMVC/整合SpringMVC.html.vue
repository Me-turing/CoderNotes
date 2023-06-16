<template><div><p>接下来将使用一个登录案例来整合前面学的SpringMVC和Mybatis等技术</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/09_整合SpringMVC/assets/image-20230613142627503.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<h3 id="数据源" tabindex="-1"><a class="header-anchor" href="#数据源" aria-hidden="true">#</a> 数据源</h3>
<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre v-pre class="language-SQL"><code>CREATE TABLE `userinfo` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `uname` varchar(32) NOT NULL,
  `upwd` varchar(32) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-SQl line-numbers-mode" data-ext="SQl"><pre v-pre class="language-SQl"><code>INSERT INTO userinfo (uid, uname, upwd) VALUES(1, 'root', 'root');
INSERT INTO userinfo (uid, uname, upwd) VALUES(2, 'zhangsan', '123123');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境准备-1" tabindex="-1"><a class="header-anchor" href="#环境准备-1" aria-hidden="true">#</a> 环境准备</h3>
<h4 id="检查项目配置" tabindex="-1"><a class="header-anchor" href="#检查项目配置" aria-hidden="true">#</a> 检查项目配置</h4>
<p><RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/01_%E6%A6%82%E5%BF%B5%E5%BC%95%E5%85%A5%E4%B8%8E%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87/%E6%A6%82%E5%BF%B5%E5%BC%95%E5%85%A5%E4%B8%8E%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87.html#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87#%E6%A3%80%E6%9F%A5%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE">检查项目配置</RouterLink></p>
<h4 id="创建maven-web-模块" tabindex="-1"><a class="header-anchor" href="#创建maven-web-模块" aria-hidden="true">#</a> 创建Maven web 模块</h4>
<p><RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/01_%E6%A6%82%E5%BF%B5%E5%BC%95%E5%85%A5%E4%B8%8E%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87/%E6%A6%82%E5%BF%B5%E5%BC%95%E5%85%A5%E4%B8%8E%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87.html#%E5%88%9B%E5%BB%BAMavenWeb%E6%A8%A1%E5%9D%97">创建MavenWeb模块</RouterLink></p>
<h4 id="删除多余的依赖配置" tabindex="-1"><a class="header-anchor" href="#删除多余的依赖配置" aria-hidden="true">#</a> 删除多余的依赖配置</h4>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
  xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd&quot;&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  &lt;groupId&gt;com.meturing&lt;/groupId&gt;
  &lt;artifactId&gt;SpringMVC_02&lt;/artifactId&gt;
  &lt;packaging&gt;war&lt;/packaging&gt;
  &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;

&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="检查目录标记" tabindex="-1"><a class="header-anchor" href="#检查目录标记" aria-hidden="true">#</a> 检查目录标记</h4>
<p><RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/01_%E6%A6%82%E5%BF%B5%E5%BC%95%E5%85%A5%E4%B8%8E%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87/%E6%A6%82%E5%BF%B5%E5%BC%95%E5%85%A5%E4%B8%8E%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87.html#%E6%A3%80%E6%9F%A5%E7%9B%AE%E5%BD%95%E6%A0%87%E8%AE%B0">检查目录标记</RouterLink></p>
<h4 id="修改web-xml" tabindex="-1"><a class="header-anchor" href="#修改web-xml" aria-hidden="true">#</a> 修改Web.xml</h4>
<p><RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/01_%E6%A6%82%E5%BF%B5%E5%BC%95%E5%85%A5%E4%B8%8E%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87/%E6%A6%82%E5%BF%B5%E5%BC%95%E5%85%A5%E4%B8%8E%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87.html#%E4%BF%AE%E6%94%B9Web.xml">修改Web.xml</RouterLink></p>
<h3 id="导入依赖" tabindex="-1"><a class="header-anchor" href="#导入依赖" aria-hidden="true">#</a> 导入依赖</h3>
<p>导入工程的依赖文件:</p>
<h4 id="spring相关依赖" tabindex="-1"><a class="header-anchor" href="#spring相关依赖" aria-hidden="true">#</a> Spring相关依赖</h4>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--Spring核心包--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework&lt;/groupId&gt;
  &lt;artifactId&gt;spring-context&lt;/artifactId&gt;
  &lt;version&gt;5.3.5&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--SpringAop切面--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework&lt;/groupId&gt;
  &lt;artifactId&gt;spring-aspects&lt;/artifactId&gt;
  &lt;version&gt;5.3.5&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--Aop联盟包--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;aopalliance&lt;/groupId&gt;
  &lt;artifactId&gt;aopalliance&lt;/artifactId&gt;
  &lt;version&gt;1.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数据库相关依赖" tabindex="-1"><a class="header-anchor" href="#数据库相关依赖" aria-hidden="true">#</a> 数据库相关依赖</h4>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--德鲁特连接池--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;com.alibaba&lt;/groupId&gt;
  &lt;artifactId&gt;druid&lt;/artifactId&gt;
  &lt;version&gt;1.1.14&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--mysql连接驱动--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;mysql&lt;/groupId&gt;
  &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
  &lt;version&gt;8.0.28&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--SpringJDBC--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework&lt;/groupId&gt;
  &lt;artifactId&gt;spring-jdbc&lt;/artifactId&gt;
  &lt;version&gt;5.3.18&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--ORM--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework&lt;/groupId&gt;
  &lt;artifactId&gt;spring-orm&lt;/artifactId&gt;
  &lt;version&gt;5.3.5&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--Spring事务控制--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework&lt;/groupId&gt;
  &lt;artifactId&gt;spring-tx&lt;/artifactId&gt;
  &lt;version&gt;5.3.18&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="日志-工具-测试" tabindex="-1"><a class="header-anchor" href="#日志-工具-测试" aria-hidden="true">#</a> 日志/工具/测试</h4>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--Apache Commons日志包--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;commons-logging&lt;/groupId&gt;
  &lt;artifactId&gt;commons-logging&lt;/artifactId&gt;
  &lt;version&gt;1.2&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--log4j2 日志--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.apache.logging.log4j&lt;/groupId&gt;
  &lt;artifactId&gt;log4j-core&lt;/artifactId&gt;
  &lt;version&gt;2.14.0&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--lombok--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
  &lt;artifactId&gt;lombok&lt;/artifactId&gt;
  &lt;version&gt;1.18.26&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--JackSon--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;
  &lt;artifactId&gt;jackson-databind&lt;/artifactId&gt;
  &lt;version&gt;2.14.2&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--Spring测试包--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework&lt;/groupId&gt;
  &lt;artifactId&gt;spring-test&lt;/artifactId&gt;
  &lt;version&gt;5.3.18&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--Junit5--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.junit.jupiter&lt;/groupId&gt;
  &lt;artifactId&gt;junit-jupiter-api&lt;/artifactId&gt;
  &lt;version&gt;5.9.3&lt;/version&gt;
  &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="springmvc" tabindex="-1"><a class="header-anchor" href="#springmvc" aria-hidden="true">#</a> SpringMVC</h4>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--SpringMVC包--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework&lt;/groupId&gt;
  &lt;artifactId&gt;spring-webmvc&lt;/artifactId&gt;
  &lt;version&gt;5.3.18&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework&lt;/groupId&gt;
  &lt;artifactId&gt;spring-web&lt;/artifactId&gt;
  &lt;version&gt;5.3.18&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="servlet和jsp" tabindex="-1"><a class="header-anchor" href="#servlet和jsp" aria-hidden="true">#</a> SERVLET和JSP</h4>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--jsp--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;javax.servlet.jsp&lt;/groupId&gt;
  &lt;artifactId&gt;javax.servlet.jsp-api&lt;/artifactId&gt;
  &lt;version&gt;2.3.3&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--servlet--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;javax.servlet&lt;/groupId&gt;
  &lt;artifactId&gt;javax.servlet-api&lt;/artifactId&gt;
  &lt;version&gt;4.0.1&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mybatis" tabindex="-1"><a class="header-anchor" href="#mybatis" aria-hidden="true">#</a> Mybatis</h4>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--mybatis--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.mybatis&lt;/groupId&gt;
  &lt;artifactId&gt;mybatis&lt;/artifactId&gt;
  &lt;version&gt;3.5.9&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--Mybatis与Spring的整合包--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.mybatis&lt;/groupId&gt;
  &lt;artifactId&gt;mybatis-spring&lt;/artifactId&gt;
  &lt;version&gt;2.0.6&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加配置文件" tabindex="-1"><a class="header-anchor" href="#添加配置文件" aria-hidden="true">#</a> 添加配置文件</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/09_整合SpringMVC/assets/image-20230613102026386.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="创建log4j配置文件" tabindex="-1"><a class="header-anchor" href="#创建log4j配置文件" aria-hidden="true">#</a> 创建log4j配置文件</h4>
<p>推荐快速极简配置 :</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;Configuration status=&quot;INFO&quot;&gt;
    &lt;Appenders&gt;
        &lt;Console name=&quot;Console&quot; target=&quot;SYSTEM_ERR&quot;&gt;
            &lt;PatternLayout pattern=&quot;%d{YYYY-MM-dd HH:mm:ss} [%t] %-5p %c{1}:%L - %msg%n&quot; /&gt;
        &lt;/Console&gt;
    &lt;/Appenders&gt;
    &lt;Loggers&gt;
        &lt;Root level=&quot;INFO&quot;&gt;
            &lt;AppenderRef ref=&quot;Console&quot; /&gt;
        &lt;/Root&gt;
    &lt;/Loggers&gt;
&lt;/Configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多详情可以了解 : <RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/02_%E6%95%B0%E6%8D%AE%E5%BA%93%E5%92%8CJDBC/02_JDBC/08_Log4j%E6%97%A5%E5%BF%97%E6%A1%86%E6%9E%B6/Log4j%E6%97%A5%E5%BF%97%E6%A1%86%E6%9E%B6.html">Log4j日志框架</RouterLink></p>
<h4 id="创建数据源配置文件" tabindex="-1"><a class="header-anchor" href="#创建数据源配置文件" aria-hidden="true">#</a> 创建数据源配置文件</h4>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">jdbc_driver</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token key attr-name">jdbc_url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://192.168.1.188:3306/test?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=Asia/Shanghai</span>
<span class="token key attr-name">jdbc_username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">jdbc_password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建springmvc配置文件" tabindex="-1"><a class="header-anchor" href="#创建springmvc配置文件" aria-hidden="true">#</a> 创建SpringMVC配置文件</h4>
<p>整体配置效果如下:</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xmlns:p=&quot;http://www.springframework.org/schema/p&quot;
       xmlns:c=&quot;http://www.springframework.org/schema/c&quot;
       xmlns:util=&quot;http://www.springframework.org/schema/util&quot;
       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
       xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot;
       xmlns:tx=&quot;http://www.springframework.org/schema/tx&quot;
       xmlns:mvc=&quot;http://www.springframework.org/schema/mvc&quot;
       xsi:schemaLocation=&quot;
       http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/p
       http://www.springframework.org/schema/p/spring-p.xsd
       http://www.springframework.org/schema/c
       http://www.springframework.org/schema/c/spring-c.xsd
       http://www.springframework.org/schema/util
       http://www.springframework.org/schema/util/spring-util.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/aop
       http://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/tx
       http://www.springframework.org/schema/tx/spring-tx.xsd
       http://www.springframework.org/schema/mvc
       http://www.springframework.org/schema/mvc/spring-mvc.xsd
&quot;&gt;
    &lt;!--扫描controller--&gt;
    &lt;context:component-scan base-package=&quot;com.meturing.controller&quot;&gt;&lt;/context:component-scan&gt;

    &lt;!--这里配置三大组件--&gt;
    &lt;mvc:annotation-driven&gt;&lt;/mvc:annotation-driven&gt;

    &lt;!--视图解析器--&gt;
    &lt;bean class=&quot;org.springframework.web.servlet.view.InternalResourceViewResolver&quot;&gt;&lt;/bean&gt;

    &lt;!--配置静态资源放行--&gt;
    &lt;mvc:resources mapping=&quot;/static/**&quot; location=&quot;/static/&quot;&gt;&lt;/mvc:resources&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="新增声明空间" tabindex="-1"><a class="header-anchor" href="#新增声明空间" aria-hidden="true">#</a> 新增声明空间</h5>
<p>注意我们需要新增: <code v-pre>p</code> / <code v-pre>c</code>  / <code v-pre>util</code> / <code v-pre>context</code> /  <code v-pre>aop</code> / <code v-pre>tx</code>  /  <code v-pre>mvc</code>  的声明空间,可以不用但是不能没有!</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/beans<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/p<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>c</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/c<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>util</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/util<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/context<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>aop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/aop<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>tx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/tx<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>mvc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/mvc<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
       http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/p
       http://www.springframework.org/schema/p/spring-p.xsd
       http://www.springframework.org/schema/c
       http://www.springframework.org/schema/c/spring-c.xsd
       http://www.springframework.org/schema/util
       http://www.springframework.org/schema/util/spring-util.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/aop
       http://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/tx
       http://www.springframework.org/schema/tx/spring-tx.xsd
       http://www.springframework.org/schema/mvc
       http://www.springframework.org/schema/mvc/spring-mvc.xsd
<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="扫描controller" tabindex="-1"><a class="header-anchor" href="#扫描controller" aria-hidden="true">#</a> 扫描controller</h5>
<p>添加Controller层的扫描器,SpringMVC主要处理的就是Controller层</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--扫描controller--&gt;
&lt;context:component-scan base-package=&quot;com.meturing.controller&quot;&gt;&lt;/context:component-scan&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>关于包扫描,你可能需要回顾 : <RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/03_Spring%E5%9F%BA%E7%A1%80/06_%E6%B3%A8%E8%A7%A3%E6%96%B9%E5%BC%8F%E7%AE%A1%E7%90%86Bean/%E6%B3%A8%E8%A7%A3%E6%96%B9%E5%BC%8F%E7%AE%A1%E7%90%86Bean.html">注解方式管理Bean</RouterLink></p>
<h5 id="配置三大组件" tabindex="-1"><a class="header-anchor" href="#配置三大组件" aria-hidden="true">#</a> 配置三大组件</h5>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--自动配置:处理器映射器/处理器适配器--&gt;
&lt;mvc:annotation-driven&gt;&lt;/mvc:annotation-driven&gt;
&lt;!--视图解析器--&gt;
&lt;bean class=&quot;org.springframework.web.servlet.view.InternalResourceViewResolver&quot;&gt;  
	&lt;property name=&quot;suffix&quot; value=&quot;.jsp&quot; &gt;&lt;/property&gt;  
&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于三大组件与执行原理,需要回顾: <RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/03_%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E4%B8%8E%E4%B8%89%E5%A4%A7%E7%BB%84%E4%BB%B6/%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E4%B8%8E%E4%B8%89%E5%A4%A7%E7%BB%84%E4%BB%B6.html">执行流程与三大组件</RouterLink></p>
<h5 id="静态资源放行" tabindex="-1"><a class="header-anchor" href="#静态资源放行" aria-hidden="true">#</a> 静态资源放行</h5>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--配置静态资源放行--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>resources</span> <span class="token attr-name">mapping</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/static/**<span class="token punctuation">"</span></span> <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/static/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>resources</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么配置放行静态资源? 详见: <RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/04_%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E7%9A%84%E6%94%BE%E8%A1%8C%E7%AE%A1%E7%90%86/%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E7%9A%84%E6%94%BE%E8%A1%8C%E7%AE%A1%E7%90%86.html">静态资源的放行管理</RouterLink></p>
<h4 id="创建spring配置文件" tabindex="-1"><a class="header-anchor" href="#创建spring配置文件" aria-hidden="true">#</a> 创建Spring配置文件</h4>
<p>整体配置文件如下:</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xmlns:p=&quot;http://www.springframework.org/schema/p&quot;
       xmlns:c=&quot;http://www.springframework.org/schema/c&quot;
       xmlns:util=&quot;http://www.springframework.org/schema/util&quot;
       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
       xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot;
       xmlns:tx=&quot;http://www.springframework.org/schema/tx&quot;
       xmlns:mvc=&quot;http://www.springframework.org/schema/mvc&quot;
       xsi:schemaLocation=&quot;
       http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/p
       http://www.springframework.org/schema/p/spring-p.xsd
       http://www.springframework.org/schema/c
       http://www.springframework.org/schema/c/spring-c.xsd
       http://www.springframework.org/schema/util
       http://www.springframework.org/schema/util/spring-util.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/aop
       http://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/tx
       http://www.springframework.org/schema/tx/spring-tx.xsd
       http://www.springframework.org/schema/mvc
       http://www.springframework.org/schema/mvc/spring-mvc.xsd
&quot;&gt;
    &lt;!--扫描service层--&gt;
    &lt;context:component-scan base-package=&quot;com.meturing.service&quot;&gt;&lt;/context:component-scan&gt;

    &lt;!--加载外部属性文件--&gt;
    &lt;context:property-placeholder location=&quot;classpath:jdbc.properties&quot;&gt;&lt;/context:property-placeholder&gt;
    &lt;!--配置德鲁伊数据源--&gt;
    &lt;bean id=&quot;dataSource&quot; class=&quot;com.alibaba.druid.pool.DruidDataSource&quot;&gt;
        &lt;property name=&quot;username&quot; value=&quot;${jdbc_username}&quot;&gt;&lt;/property&gt;
        &lt;property name=&quot;password&quot; value=&quot;${jdbc_password}&quot;&gt;&lt;/property&gt;
        &lt;property name=&quot;url&quot; value=&quot;${jdbc_url}&quot;&gt;&lt;/property&gt;
        &lt;property name=&quot;driverClassName&quot; value=&quot;${jdbc_driver}&quot;&gt;&lt;/property&gt;
    &lt;/bean&gt;

    &lt;!--配置sqlSessionFactory--&gt;
    &lt;bean id=&quot;sessionFactory&quot; class=&quot;org.mybatis.spring.SqlSessionFactoryBean&quot;&gt;
        &lt;!--配置数据源--&gt;
        &lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot;&gt;&lt;/property&gt;
        &lt;!--POJO类的包扫描--&gt;
        &lt;property name=&quot;typeAliasesPackage&quot; value=&quot;com.meturing.pojo&quot;&gt;&lt;/property&gt;
    &lt;/bean&gt;
    &lt;!--配置MapperScanner 扫描mapper.xml 和接口 将生成的Mapper对象放到容器中--&gt;
    &lt;bean id=&quot;mapperScannerConfigurer&quot; class=&quot;org.mybatis.spring.mapper.MapperScannerConfigurer&quot;&gt;
        &lt;!--配置SQLSessionFactory--&gt;
        &lt;property name=&quot;sqlSessionFactoryBeanName&quot; value=&quot;sessionFactory&quot;&gt;&lt;/property&gt;
        &lt;!--扫描mapper接口和映射文件--&gt;
        &lt;property name=&quot;basePackage&quot; value=&quot;com.meturing.mapper&quot;&gt;&lt;/property&gt;
    &lt;/bean&gt;

    &lt;!--事务管理--&gt;
    &lt;!--配置事务管理器--&gt;
    &lt;bean id=&quot;transactionManager&quot; class=&quot;org.springframework.jdbc.datasource.DataSourceTransactionManager&quot;&gt;
        &lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot;&gt;&lt;/property&gt;
    &lt;/bean&gt;
    &lt;!--开启事务注解--&gt;
    &lt;tx:annotation-driven transaction-manager=&quot;transactionManager&quot;&gt;&lt;/tx:annotation-driven&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="新增声明空间-1" tabindex="-1"><a class="header-anchor" href="#新增声明空间-1" aria-hidden="true">#</a> 新增声明空间</h5>
<p>与SpringMVC一样我们需要新增: <code v-pre>p</code> / <code v-pre>c</code>  / <code v-pre>util</code> / <code v-pre>context</code> /  <code v-pre>aop</code> / <code v-pre>tx</code>  /  <code v-pre>mvc</code>  的声明空间,可以不用但是不能没有!</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/beans<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/p<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>c</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/c<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>util</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/util<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/context<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>aop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/aop<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>tx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/tx<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>mvc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/mvc<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
       http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/p
       http://www.springframework.org/schema/p/spring-p.xsd
       http://www.springframework.org/schema/c
       http://www.springframework.org/schema/c/spring-c.xsd
       http://www.springframework.org/schema/util
       http://www.springframework.org/schema/util/spring-util.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/aop
       http://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/tx
       http://www.springframework.org/schema/tx/spring-tx.xsd
       http://www.springframework.org/schema/mvc
       http://www.springframework.org/schema/mvc/spring-mvc.xsd
<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="扫描service层" tabindex="-1"><a class="header-anchor" href="#扫描service层" aria-hidden="true">#</a> 扫描Service层</h5>
<p>Spring主要是面向Service层进行管理</p>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;!--扫描service层--&gt;
&lt;context:component-scan base-package=&quot;com.meturing.service&quot;&gt;&lt;/context:component-scan&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="加载外部配置文件配置数据源" tabindex="-1"><a class="header-anchor" href="#加载外部配置文件配置数据源" aria-hidden="true">#</a> 加载外部配置文件配置数据源</h5>
<p>开始扫描外部文件,配置数据源</p>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;!--加载外部属性文件--&gt;
&lt;context:property-placeholder location=&quot;classpath:jdbc.properties&quot;&gt;&lt;/context:property-placeholder&gt;
&lt;!--配置德鲁伊数据源--&gt;
&lt;bean id=&quot;dataSource&quot; class=&quot;com.alibaba.druid.pool.DruidDataSource&quot;&gt;
	&lt;property name=&quot;username&quot; value=&quot;${jdbc_username}&quot;&gt;&lt;/property&gt;
	&lt;property name=&quot;password&quot; value=&quot;${jdbc_password}&quot;&gt;&lt;/property&gt;
	&lt;property name=&quot;url&quot; value=&quot;${jdbc_url}&quot;&gt;&lt;/property&gt;
	&lt;property name=&quot;driverClassName&quot; value=&quot;${jdbc_driver}&quot;&gt;&lt;/property&gt;
&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能需要了解 : <RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/03_Spring%E5%9F%BA%E7%A1%80/05_%E5%BC%95%E5%85%A5%E5%A4%96%E9%83%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6/%E5%BC%95%E5%85%A5%E5%A4%96%E9%83%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.html">引入外部配置文件</RouterLink></p>
<h5 id="整合mybatis" tabindex="-1"><a class="header-anchor" href="#整合mybatis" aria-hidden="true">#</a> 整合Mybatis</h5>
<p>在此之前我们回顾一下Mybatis的相关使用知识 :</p>
<p><RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/01_Mybatis%E5%9F%BA%E7%A1%80/02_%E6%90%AD%E5%BB%BAMybatis%E9%A1%B9%E7%9B%AE%E7%8E%AF%E5%A2%83/%E6%90%AD%E5%BB%BAMybatis%E9%A1%B9%E7%9B%AE%E7%8E%AF%E5%A2%83.html#%E5%9F%BA%E7%A1%80%E5%86%99%E6%B3%95%E6%80%9D%E8%B7%AF">基础写法思路</RouterLink></p>
<p>Spring整合Mybatis的整体思路如下:对于<code v-pre>SqlSessionFactory对象</code> / <code v-pre>SqlSession对象</code> / <code v-pre>Mapper对象</code>全部交给Spring去创建 .然后将创建的对象交给Service层即可.</p>
<p>所以我们只需要关注SqlSessionFactory的创建和Mapper的扫描即可.</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--配置sqlSessionFactory--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sessionFactory<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.mybatis.spring.SqlSessionFactoryBean<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--配置数据源--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataSource<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataSource<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--POJO类的包扫描--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>typeAliasesPackage<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.meturing.pojo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--配置MapperScanner 扫描mapper.xml 和接口 将生成的Mapper对象放到容器中--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mapperScannerConfigurer<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.mybatis.spring.mapper.MapperScannerConfigurer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--配置SQLSessionFactory--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sqlSessionFactoryBeanName<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sessionFactory<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--扫描mapper接口和映射文件--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>basePackage<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.meturing.mapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="配置spring事务" tabindex="-1"><a class="header-anchor" href="#配置spring事务" aria-hidden="true">#</a> 配置Spring事务</h5>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;!--事务管理--&gt;
&lt;!--配置事务管理器--&gt;
&lt;bean id=&quot;transactionManager&quot; class=&quot;org.springframework.jdbc.datasource.DataSourceTransactionManager&quot;&gt;
	&lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot;&gt;&lt;/property&gt;
&lt;/bean&gt;
&lt;!--开启事务注解--&gt;
&lt;tx:annotation-driven transaction-manager=&quot;transactionManager&quot;&gt;&lt;/tx:annotation-driven&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能需要回顾 : <RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/03_Spring%E5%9F%BA%E7%A1%80/10_Spring%E7%9A%84%E4%BA%8B%E5%8A%A1%E7%AE%A1%E7%90%86/Sping%E7%9A%84%E4%BA%8B%E5%8A%A1%E7%AE%A1%E7%90%86.html#XML%E6%96%B9%E5%BC%8F%E7%AE%A1%E7%90%86%E4%BA%8B%E5%8A%A1">XML方式管理事务</RouterLink></p>
<h4 id="配置web-xml文件" tabindex="-1"><a class="header-anchor" href="#配置web-xml文件" aria-hidden="true">#</a> 配置Web.XML文件</h4>
<h5 id="整合springmvc" tabindex="-1"><a class="header-anchor" href="#整合springmvc" aria-hidden="true">#</a> 整合SpringMVC</h5>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--配置SpringMVC--&gt;
&lt;servlet&gt;
	&lt;servlet-name&gt;dispatcherServlet&lt;/servlet-name&gt;
	&lt;servlet-class&gt;org.springframework.web.servlet.DispatcherServlet&lt;/servlet-class&gt;
	&lt;init-param&gt;
		&lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
		&lt;param-value&gt;classpath:springMVC.xml&lt;/param-value&gt;
	&lt;/init-param&gt;
	&lt;load-on-startup&gt;1&lt;/load-on-startup&gt;
&lt;/servlet&gt;
&lt;servlet-mapping&gt;
	&lt;servlet-name&gt;dispatcherServlet&lt;/servlet-name&gt;
	&lt;url-pattern&gt;/&lt;/url-pattern&gt;
&lt;/servlet-mapping&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你需要知道的知识点 : <RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/02_%E6%A1%86%E6%9E%B6%E6%90%AD%E5%BB%BA%E4%B8%8E%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9/%E6%A1%86%E6%9E%B6%E6%90%AD%E5%BB%BA%E4%B8%8E%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9.html#%E5%9C%A8web.xml%E4%B8%AD%E9%85%8D%E7%BD%AE%E5%89%8D%E7%AB%AF%E6%8E%A7%E5%88%B6%E5%99%A8">在web.xml中配置前端控制器</RouterLink></p>
<h5 id="整合spring" tabindex="-1"><a class="header-anchor" href="#整合spring" aria-hidden="true">#</a> 整合Spring</h5>
<p>Spring的核心容器需要放置到Application域中,通过监听器监听Javaweb项目中ServletContext创建的时候,就创建一个Spring容器,并放置到ServletContext对象中</p>
<p>关于域对象,你需要知道 : <RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/03_Servlet/10_%E5%9F%9F%E5%AF%B9%E8%B1%A1/%E5%9F%9F%E5%AF%B9%E8%B1%A1.html">域对象</RouterLink></p>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;!--配置Spring--&gt;
&lt;context-param&gt;
	&lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
	&lt;param-value&gt;classpath:applicationContext.xml&lt;/param-value&gt;
&lt;/context-param&gt;
&lt;listener&gt;
	&lt;listener-class&gt;org.springframework.web.context.ContextLoaderListener&lt;/listener-class&gt;
&lt;/listener&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以手写监听器,Spring帮我们提供了ContextLoaderListener监听器</p>
<p>关于监听器,你需要知道的: <RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/05_%E8%BF%87%E6%BB%A4%E5%99%A8%E5%92%8C%E7%9B%91%E5%90%AC%E5%99%A8/04_%E5%88%9D%E8%AF%86%E7%9B%91%E5%90%AC%E5%99%A8/%E5%88%9D%E8%AF%86%E7%9B%91%E5%90%AC%E5%99%A8.html#Application%E5%9F%9F%E7%9B%91%E5%90%AC%E5%99%A8">Application域监听器</RouterLink></p>
<h5 id="配置编码过滤器" tabindex="-1"><a class="header-anchor" href="#配置编码过滤器" aria-hidden="true">#</a> 配置编码过滤器</h5>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;!--配置编码过滤器--&gt;
&lt;filter&gt;
	&lt;filter-name&gt;characterEncodingFilter&lt;/filter-name&gt;
	&lt;filter-class&gt;org.springframework.web.filter.CharacterEncodingFilter&lt;/filter-class&gt;
	&lt;init-param&gt;
		&lt;param-name&gt;encoding&lt;/param-name&gt;
		&lt;param-value&gt;UTF-8&lt;/param-value&gt;
	&lt;/init-param&gt;
&lt;/filter&gt;
&lt;filter-mapping&gt;
	&lt;filter-name&gt;characterEncodingFilter&lt;/filter-name&gt;
	&lt;url-pattern&gt;/*&lt;/url-pattern&gt;
&lt;/filter-mapping&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于过滤器,你可能需要知道 : <RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/05_%E8%BF%87%E6%BB%A4%E5%99%A8%E5%92%8C%E7%9B%91%E5%90%AC%E5%99%A8/%E8%BF%87%E6%BB%A4%E5%99%A8%E5%92%8C%E7%9B%91%E5%90%AC%E5%99%A8.html">过滤器和监听器</RouterLink></p>
<h2 id="实现业务代码" tabindex="-1"><a class="header-anchor" href="#实现业务代码" aria-hidden="true">#</a> 实现业务代码</h2>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/09_整合SpringMVC/assets/image-20230613100529422.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="创建前端页面" tabindex="-1"><a class="header-anchor" href="#创建前端页面" aria-hidden="true">#</a> 创建前端页面</h3>
<p>index.jsp</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;login&quot; method=&quot;post&quot;&gt;
    &lt;input type=&quot;text&quot; name=&quot;username&quot;&gt;
    &lt;input type=&quot;password&quot; name=&quot;password&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;登录&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>success.jsp</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
登录成功
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fail.jsp</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
登录失败
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建pojo层" tabindex="-1"><a class="header-anchor" href="#创建pojo层" aria-hidden="true">#</a> 创建Pojo层</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class User implements Serializable {
    private String uId;
    private String uName;
    private String uPwd;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建conteoller层" tabindex="-1"><a class="header-anchor" href="#创建conteoller层" aria-hidden="true">#</a> 创建Conteoller层</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Controller
public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping(&quot;/login&quot;)
    public String getLogin(String username,String password) {
        User user = userService.getLogin(username,password);
        if (user==null){
            return &quot;/fail&quot;;
        }else {
            return &quot;/success&quot;;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建service层" tabindex="-1"><a class="header-anchor" href="#创建service层" aria-hidden="true">#</a> 创建Service层</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public interface UserService {
    User getLogin(String username, String password);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;
    public User getLogin(String username, String password) {
        return userMapper.getLogin(username,password);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建mapper层" tabindex="-1"><a class="header-anchor" href="#创建mapper层" aria-hidden="true">#</a> 创建Mapper层</h3>
<p>UserMapper.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public interface UserMapper{
    User getLogin(String username, String password);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserMapper.xml</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
&lt;!DOCTYPE mapper
        PUBLIC &quot;-//mybatis.org//DTDMapper3.0//EN&quot;
        &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;
&lt;mapper namespace=&quot;com.meturing.mapper.UserMapper&quot;&gt;
    &lt;select id=&quot;getLogin&quot; resultType=&quot;user&quot;&gt;
        select * from userinfo where uname=#{param1} and upwd=#{param2}
    &lt;/select&gt;
&lt;/mapper&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于Mybatis的Mapper使用,您可能需要回顾: <RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/01_Mybatis%E5%9F%BA%E7%A1%80/05_Mybatis%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%BC%80%E5%8F%91/Mybatis%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%BC%80%E5%8F%91.html">Mybatis代理模式的开发</RouterLink></p>
</div></template>


