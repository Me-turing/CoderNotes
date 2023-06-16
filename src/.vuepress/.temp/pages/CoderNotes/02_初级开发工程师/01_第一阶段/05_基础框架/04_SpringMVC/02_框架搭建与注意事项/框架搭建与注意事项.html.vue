<template><div><h2 id="搭建框架" tabindex="-1"><a class="header-anchor" href="#搭建框架" aria-hidden="true">#</a> 搭建框架</h2>
<h3 id="导入依赖" tabindex="-1"><a class="header-anchor" href="#导入依赖" aria-hidden="true">#</a> 导入依赖</h3>
<p>在pom.xml中导入Spring依赖大礼包:</p>
<ol>
<li>Spring核心包 : <code v-pre>spring-context</code></li>
<li>spring切面 : <code v-pre>spring-aspects</code> <code v-pre>aopalliance</code></li>
<li>数据库连接 : <code v-pre>druid</code>  <code v-pre>mysql-connector-java</code> <code v-pre>spring-jdbc</code> <code v-pre>spring-tx</code> <code v-pre>spring-orm</code></li>
<li>工具包 : <code v-pre>log4j-slf4j-impl</code> <code v-pre>lombok</code> <code v-pre>spring-test</code> <code v-pre>junit-jupiter-api</code></li>
<li><strong>SpringMVC</strong> : <code v-pre>spring-web</code> <code v-pre>spring-webmvc</code></li>
</ol>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>  &lt;dependencies&gt;
    &lt;!--Spring核心包--&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework&lt;/groupId&gt;
      &lt;artifactId&gt;spring-context&lt;/artifactId&gt;
      &lt;version&gt;5.2.12.RELEASE&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;!--spring切面包--&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework&lt;/groupId&gt;
      &lt;artifactId&gt;spring-aspects&lt;/artifactId&gt;
      &lt;version&gt;5.2.12.RELEASE&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;!--Aop联盟--&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;aopalliance&lt;/groupId&gt;
      &lt;artifactId&gt;aopalliance&lt;/artifactId&gt;
      &lt;version&gt;1.0&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;!--德鲁伊连接池--&gt;
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
    &lt;!--SpringJDBC包--&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework&lt;/groupId&gt;
      &lt;artifactId&gt;spring-jdbc&lt;/artifactId&gt;
      &lt;version&gt;5.2.12.RELEASE&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;!--Spring事务管理--&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework&lt;/groupId&gt;
      &lt;artifactId&gt;spring-tx&lt;/artifactId&gt;
      &lt;version&gt;5.2.12.RELEASE&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;!--Spring ORM 映射--&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework&lt;/groupId&gt;
      &lt;artifactId&gt;spring-orm&lt;/artifactId&gt;
      &lt;version&gt;5.2.12.RELEASE&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;!--log4j2 日志--&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.apache.logging.log4j&lt;/groupId&gt;
      &lt;artifactId&gt;log4j-slf4j-impl&lt;/artifactId&gt;
      &lt;version&gt;2.14.0&lt;/version&gt;
      &lt;scope&gt;test&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;!--lombok --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
      &lt;artifactId&gt;lombok&lt;/artifactId&gt;
      &lt;version&gt;1.18.26&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;!--spring test测试支持包--&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework&lt;/groupId&gt;
      &lt;artifactId&gt;spring-test&lt;/artifactId&gt;
      &lt;version&gt;5.2.12.RELEASE&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;!--junit5单元测试--&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.junit.jupiter&lt;/groupId&gt;
      &lt;artifactId&gt;junit-jupiter-api&lt;/artifactId&gt;
      &lt;version&gt;5.7.0&lt;/version&gt;
      &lt;scope&gt;test&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;!--springMVC支持包--&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework&lt;/groupId&gt;
      &lt;artifactId&gt;spring-web&lt;/artifactId&gt;
      &lt;version&gt;5.2.12.RELEASE&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework&lt;/groupId&gt;
      &lt;artifactId&gt;spring-web&lt;/artifactId&gt;
      &lt;version&gt;5.2.12.RELEASE&lt;/version&gt;
    &lt;/dependency&gt;
  &lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依赖关系</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/02_框架搭建与注意事项/assets/image-20230530161835727.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="创建log4j配置文件" tabindex="-1"><a class="header-anchor" href="#创建log4j配置文件" aria-hidden="true">#</a> 创建log4j配置文件</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/02_框架搭建与注意事项/assets/image-20230530163511866.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Configuration</span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DEBUG<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Appenders</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Console</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Console<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SYSTEM_OUT<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PatternLayout</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>%d{YYYY-MM-dd HH:mm:ss} [%t] %-5p %c{1}:%L - %msg%n<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Console</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Appenders</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loggers</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Root</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>debug<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppenderRef</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Console<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Root</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Loggers</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建springmvc配置文件" tabindex="-1"><a class="header-anchor" href="#创建springmvc配置文件" aria-hidden="true">#</a> 创建SpringMVC配置文件</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/02_框架搭建与注意事项/assets/image-20230530163437233.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xmlns:p=&quot;http://www.springframework.org/schema/p&quot;
       xmlns:c=&quot;http://www.springframework.org/schema/c&quot;
       xmlns:util=&quot;http://www.springframework.org/schema/util&quot;
       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
       xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot;
       xmlns:tx=&quot;http://www.springframework.org/schema/tx&quot;
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
    &quot;&gt;
    &lt;!-- 包扫描 --&gt;
    &lt;context:component-scan base-package=&quot;com.meturing&quot; /&gt;


&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在web-xml中配置前端控制器" tabindex="-1"><a class="header-anchor" href="#在web-xml中配置前端控制器" aria-hidden="true">#</a> 在web.xml中配置前端控制器</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/02_框架搭建与注意事项/assets/image-20230530163628804.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://xmlns.jcp.org/xml/ns/javaee<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd<span class="token punctuation">"</span></span>
         <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 注册DispatcherServlet的servlet --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>dispatcherServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">></span></span>org.springframework.web.servlet.DispatcherServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--配置初始化参数,读取springMVC的核心配置文件的位置和名称--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">></span></span>contextConfigLocation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">></span></span>classpath:springmvc.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--配置dispatcherServlet的映射路径为 / 包含全部的servlet,  JSP除外--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>dispatcherServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">></span></span>/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编写controller" tabindex="-1"><a class="header-anchor" href="#编写controller" aria-hidden="true">#</a> 编写controller</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FirstController</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/firstController"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getFirstView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"firstController"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//相当于请求转发</span>
        <span class="token keyword">return</span> <span class="token string">"first.jsp"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意 :</p>
<ol>
<li>在类上使用<code v-pre>@Controller</code>注解让当前类被Spring扫描到</li>
<li>我们可以在方法上使用<code v-pre>@RequestMapping</code>注解来标识当前方法执行的请求路径</li>
<li><code v-pre>return &quot;first.jsp&quot;</code> 相当于请求转发<code v-pre>req.getRequestDispatcher(&quot;first.jsp&quot;).forward(req,resp);</code></li>
</ol>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<ol>
<li>wbe.xml中配置DispatcherServlet的Servlet,并设置初始化的SpringMVC路径</li>
<li>在SpringMVC配置文件中,使用包扫描指定路径</li>
<li>创建Controller层,使用<code v-pre>@Controller</code>注解提交给Spring管理,使用<code v-pre>@RequestMapping</code>注解标注请求路径,return String直接转发到指定页面</li>
</ol>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/02_框架搭建与注意事项/assets/image-20230530164550965.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2>
<h3 id="init-param初始化可以省略" tabindex="-1"><a class="header-anchor" href="#init-param初始化可以省略" aria-hidden="true">#</a> init-param初始化可以省略</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/02_框架搭建与注意事项/assets/image-20230530172148591.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在web.xml中,我们也可以不使用<code v-pre>&lt;init-param&gt;</code>指定SpringMVC的配置文件路径使用默认配置,但需要遵循下列规则</p>
<ol>
<li>默认的读取路径为<code v-pre>/WEB-INF/</code> ,我们需要将配置文件移至该目录下</li>
<li>默认情况下配置文件名需要遵循<code v-pre>&lt;servlet-name&gt;-servlet.xml</code>的规则,如上图应该是<code v-pre>dispatcherServlet-servlet.xml</code></li>
</ol>
<blockquote>
<p>我们不推荐使用该方式省略配置</p>
</blockquote>
<h3 id="controller层路径问题" tabindex="-1"><a class="header-anchor" href="#controller层路径问题" aria-hidden="true">#</a> Controller层路径问题</h3>
<p><code v-pre>@RequestMapping</code> 注解也可以用在类上,当类上使用该注解时访问的路径应该是: <code v-pre>类上的注解+方法上的注解</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Controller
@RequestMapping(&quot;/meturing&quot;)
public class FirstController {
    @RequestMapping(&quot;/firstController&quot;)
    public String getFirstView() {
        System.out.println(&quot;firstController&quot;);
        //相当于请求转发
        return &quot;first.jsp&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上述代码,访问的路径应该为 : <code v-pre>http://localhost:8080/SpringMVC_01/meturing/firstController</code></p>
<p>但是此时我们访问时会发现出现错误</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/02_框架搭建与注意事项/assets/image-20230530173053362.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>原因与srvlet中 <RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/03_Servlet/08_%E8%B7%AF%E5%BE%84%E9%97%AE%E9%A2%98/%E8%B7%AF%E5%BE%84%E9%97%AE%E9%A2%98.html#%E8%AF%B7%E6%B1%82%E8%BD%AC%E5%8F%91%E8%B7%AF%E5%BE%84">请求转发路径</RouterLink> 问题一致 ,转发路径中<code v-pre>\</code>开头表示结对路径,否则是相对路径 .<br>
当前代码是<code v-pre>return &quot;first.jsp&quot;;</code> 当在类上添加<code v-pre>/meturing</code>路径后,他会在<code v-pre>meturing</code>目录下查找页面</p>
<p>所以我们可以修改路径为绝对路径<code v-pre>return &quot;/first.jsp&quot;;</code></p>
<h3 id="视图解析器" tabindex="-1"><a class="header-anchor" href="#视图解析器" aria-hidden="true">#</a> 视图解析器</h3>
<p>对于复杂的路径,我们不必在Controller中完全描述,这样的话太臃肿了.<br>
我们可以借助在MVC配置文件中添加视图解析器来配置通用的一些路径</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/02_框架搭建与注意事项/assets/image-20230530173922521.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>    &lt;!--配置视图解析器--&gt;
    &lt;bean class=&quot;org.springframework.web.servlet.view.InternalResourceViewResolver&quot;&gt;
        &lt;!--前缀--&gt;
        &lt;property name=&quot;prefix&quot; value=&quot;/view/&quot;  &gt;&lt;/property&gt;
		&lt;!--后缀--&gt;
        &lt;property name=&quot;suffix&quot; value=&quot;.jsp&quot;  &gt;&lt;/property&gt;
    &lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以我们可以在Controller中跳转的路径就可以直接写文件名</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/02_框架搭建与注意事项/assets/image-20230530174302829.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>当我们访问后,会自动给我们拼接: <code v-pre>前缀 + 字符串 + 后缀</code> ,也就是: <code v-pre>/view/first.jsp</code></p>
</div></template>


