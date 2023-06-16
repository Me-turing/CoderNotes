<template><div><p>我们项目中不单单存在JSP文件,也存在许多静态文件.如:多媒体文件 / CSS样式 / JS脚本,在SpringMVC中对于这些静态文件的管理也是需要我们注意的地方.</p>
<h2 id="为什么需要放行静态文件" tabindex="-1"><a class="header-anchor" href="#为什么需要放行静态文件" aria-hidden="true">#</a> 为什么需要放行静态文件?</h2>
<h3 id="修改demo" tabindex="-1"><a class="header-anchor" href="#修改demo" aria-hidden="true">#</a> 修改Demo</h3>
<h4 id="创建静态资源" tabindex="-1"><a class="header-anchor" href="#创建静态资源" aria-hidden="true">#</a> 创建静态资源</h4>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/04_静态资源的放行管理/assets/image-20230531140414624.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>style.css</p>
<div class="language-CSS line-numbers-mode" data-ext="CSS"><pre v-pre class="language-CSS"><code>h2 {
    color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>say.js</p>
<div class="language-Js line-numbers-mode" data-ext="Js"><pre v-pre class="language-Js"><code>function say() {
    alert(&quot;123&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改index-jsp" tabindex="-1"><a class="header-anchor" href="#修改index-jsp" aria-hidden="true">#</a> 修改index.jsp</h4>
<div class="language-jsp line-numbers-mode" data-ext="jsp"><pre v-pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;css/style.css&quot; /&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;js/say.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h2&gt;Hello World!&lt;/h2&gt;
  &lt;p&gt;this is index.jsp&lt;/p&gt;
  &lt;img src=&quot;img/img01.png&quot;/&gt;
  &lt;button onclick=&quot;say()&quot; &gt;btn&lt;/button&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/04_静态资源的放行管理/assets/image-20230531140557938.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>此时我们发现页面资源无法正常访问</p>
<p>打开网络监控,显示资源请求404</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/04_静态资源的放行管理/assets/image-20230531140630463.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因" aria-hidden="true">#</a> 问题原因</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/04_静态资源的放行管理/assets/image-20230531135844844.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>由于我们之前在web.xml中注册DispatcherServlet时,对于所有的请求都进行捕捉,JSP文件除外</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/04_静态资源的放行管理/assets/image-20230531135952634.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>所以上面的Demo执行流程如下:</p>
<ol>
<li>PC发出请求打开JSP页面</li>
<li>DispatcherServlet发现是JSP文件,直接返回给前端</li>
<li>前端在打开渲染JSP时发现有外部资源,再次发送请求</li>
<li>DispatcherServlet此时捕捉到资源请求,于是请求HandlerMapping处理器映射器查询</li>
<li>HandlerMapping处理器映射器未能发现对应的Controller处理单元,返回结果</li>
<li>DispatcherServlet未能收到正确的Controller处理单元位置,返回404</li>
</ol>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/04_静态资源的放行管理/assets/image-20230531140350774.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="放行静态文件" tabindex="-1"><a class="header-anchor" href="#放行静态文件" aria-hidden="true">#</a> 放行静态文件</h2>
<p>修改springmvc.xml配置文件,添加<code v-pre>&lt;mvc:resources&gt;</code>标签放行指定目录</p>
<p>如下:</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--静态资源放行--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>resources</span> <span class="token attr-name">mapping</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/js/**<span class="token punctuation">"</span></span> <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/js/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>resources</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>resources</span> <span class="token attr-name">mapping</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/img/**<span class="token punctuation">"</span></span> <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/img/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>resources</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>resources</span> <span class="token attr-name">mapping</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/css/**<span class="token punctuation">"</span></span> <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/css/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>resources</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>其中 :</p>
<blockquote>
<ul>
<li>mapping表示请求的url</li>
<li>location表示本地资源目录</li>
</ul>
</blockquote>
</blockquote>
<p>完整代码:</p>
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
    <span class="token comment">&lt;!-- 包扫描 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.meturing<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

    <span class="token comment">&lt;!--配置视图解析器--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.springframework.web.servlet.view.InternalResourceViewResolver<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prefix<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/view/<span class="token punctuation">"</span></span>  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>suffix<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.jsp<span class="token punctuation">"</span></span>  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--自动加载处理映射器和处理器适配器--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>annotation-driven</span> <span class="token punctuation">/></span></span>

    <span class="token comment">&lt;!--静态资源放行--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>resources</span> <span class="token attr-name">mapping</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/js/**<span class="token punctuation">"</span></span> <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/js/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>resources</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>resources</span> <span class="token attr-name">mapping</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/img/**<span class="token punctuation">"</span></span> <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/img/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>resources</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>resources</span> <span class="token attr-name">mapping</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/css/**<span class="token punctuation">"</span></span> <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/css/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>resources</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次测试:<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/04_静态资源的放行管理/assets/image-20230531141107610.png" alt="" loading="lazy"></p>
<h2 id="优化项目结构" tabindex="-1"><a class="header-anchor" href="#优化项目结构" aria-hidden="true">#</a> 优化项目结构</h2>
<p>我们刚刚虽然解决了当前的问题,但是当前的目录看起来还是很混乱.<br>
静态文件有很多,文件件存储与代码文件混在一起不方便管理.<br>
同时,需要放开的资源目录也会无限制增多</p>
<p>所以我们推荐将所有的静态资源都存放在<code v-pre>/static/</code>目录中,这样我们只需要放行静态资源目录就行.</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/04_静态资源的放行管理/assets/image-20230531141430253.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>修改springmvc.xml放行规则</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--静态资源放行--></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>resources</span> <span class="token attr-name">mapping</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/static/**<span class="token punctuation">"</span></span> <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/static/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>resources</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>测试正常<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/04_静态资源的放行管理/assets/image-20230531141556564.png" alt="" loading="lazy"></p>
</div></template>


