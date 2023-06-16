<template><div><h2 id="jsp-简介" tabindex="-1"><a class="header-anchor" href="#jsp-简介" aria-hidden="true">#</a> JSP 简介</h2>
<p>JSP（全称<strong>J</strong>ava <strong>S</strong>erver <strong>P</strong>ages）是由Sun公司主导创建的一种动态网页技术标准。<br>
JSP部署于网络服务器上，可以响应客户端发送的请求，并根据请求内容动态地生成HTML、XML或其他格式文档的WEB网页，然后返回给请求者。</p>
<p>简单来说: <strong>JSP(JavaServer Pages)是一种动态页面技术，它的主要目的是将表示逻辑从Servlet中分离出来</strong><br>
它实现了Html语法中可以嵌入java编码的扩展（以 &lt;%, %&gt;形式）。JSP与Servlet一样，是在服务器端执行的。通常返回给客户端的就是一个HTML文本，因此客户端只要有浏览器就能浏览。</p>
<p>Java Servlet是JSP的技术基础，而且大型的Web应用程序的开发需要Java Servlet和JSP配合才能完成。JSP具备了Java技术的简单易用，完全的面向对象，具有平台无关性且安全可靠.</p>
<p>例如: 使用Servlet向页面动态响应HTML页面资源</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/servlet1.do"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet1</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> h <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"h"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"l"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StringBuilder</span> sbd<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;html lang='en'>&lt;head>&lt;meta charset='UTF-8'>&lt;title>Title&lt;/title>&lt;style>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"table{border: 1px solid green;width: 50%;margin: 0px auto;}"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"table td{border: 1px solid blue;}&lt;/style>&lt;/head>&lt;body>&lt;table>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span>h <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;tr>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span>l <span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;td>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;/td>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;/tr>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;/table>&lt;/body>&lt;/html>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置响应内容和编码</span>
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">"text/html;charset=UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resp<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 响应内容给浏览器</span>
        <span class="token class-name">PrintWriter</span> writer <span class="token operator">=</span> resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>sbd<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/04_JavaEE技术/04_JSP/01_JSP入门/assets/Pasted_image_20230401183503.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>总结:  Servlet作为动态资源,在JAVA代码中通过字符串形式响应数据,通过字符串拼接HTML文档特别繁琐,不利于后期的维护,容易出现问题,如果用于向浏览器响应页面资源操作非常繁琐,且非常不利于页面的更新和维护,所以Servlet不可以作为页面资源,一般专门用接收用户端数据,向用户端响应数据,控制前后端页面跳转,交互逻辑等.<strong>在MVC模式下,作为控制层使用</strong></p>
<h2 id="jsp做动态显示demo" tabindex="-1"><a class="header-anchor" href="#jsp做动态显示demo" aria-hidden="true">#</a> JSP做动态显示Demo</h2>
<p>Servlet同样也可以向浏览器动态响应HTML,但是需要大量的字符串拼接处理,在JAVA代码上大量拼接HTML字符串是非常繁琐耗时的一件事,它涉及到HTML本身的字符串处理,还涉及到css样式代码和文件,以及js脚本代码和文件,HTML中的各种外部引入路径等等,处理起来相当的麻烦</p>
<p>直接在JSP中使用Java代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">%</span>@ page <span class="token keyword">import</span><span class="token operator">=</span><span class="token string">"java.io.PrintWriter"</span> <span class="token operator">%</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">--</span>
  <span class="token class-name">Created</span> by <span class="token class-name">IntelliJ</span> <span class="token class-name">IDEA<span class="token punctuation">.</span>
  User</span><span class="token operator">:</span> <span class="token class-name">Mark70</span>
  <span class="token class-name">Date</span><span class="token operator">:</span> <span class="token number">2021</span><span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">11</span>
  <span class="token class-name">Time</span><span class="token operator">:</span> <span class="token number">13</span><span class="token operator">:</span><span class="token number">16</span>
  <span class="token class-name">To</span> change <span class="token keyword">this</span> template use <span class="token class-name">File</span> <span class="token operator">|</span> <span class="token class-name">Settings</span> <span class="token operator">|</span> <span class="token class-name">File</span> <span class="token class-name">Templates</span><span class="token punctuation">.</span>
<span class="token operator">--</span><span class="token operator">%</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">%</span>@ page contentType<span class="token operator">=</span><span class="token string">"text/html;charset=UTF-8"</span> language<span class="token operator">=</span><span class="token string">"java"</span> <span class="token operator">%</span><span class="token operator">></span>
<span class="token generics"><span class="token punctuation">&lt;</span>html<span class="token punctuation">></span></span>
<span class="token generics"><span class="token punctuation">&lt;</span>head<span class="token punctuation">></span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>title<span class="token punctuation">></span></span><span class="token class-name">Title</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>style<span class="token punctuation">></span></span>
        table<span class="token punctuation">{</span>border<span class="token operator">:</span> <span class="token number">1</span>px solid green<span class="token punctuation">;</span>width<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>margin<span class="token operator">:</span> <span class="token number">0</span>px auto<span class="token punctuation">;</span><span class="token punctuation">}</span>
        table td<span class="token punctuation">{</span>border<span class="token operator">:</span> <span class="token number">1</span>px solid blue<span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token generics"><span class="token punctuation">&lt;</span>body<span class="token punctuation">></span></span>
    <span class="token operator">&lt;</span><span class="token operator">%</span>
        <span class="token keyword">int</span> h <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"h"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"l"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StringBuilder</span> sbd<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;table>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span>h <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;tr>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span>l <span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;td>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;/td>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;/tr>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        sbd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;/table>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>sbd<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">%</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/04_JavaEE技术/04_JSP/01_JSP入门/assets/Pasted_image_20230401190913.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="jsp运行原理" tabindex="-1"><a class="header-anchor" href="#jsp运行原理" aria-hidden="true">#</a> JSP运行原理</h2>
<p>JSP看似是HTML代码,看似是页面,但是事实上是一种后台技术,当我们第一发送请求一个JSP资源时,JSP加载引擎会帮助我们将一个.JSP文件转换成一个.java文件,相当于自动的给我们生成了一个Servlet并将页面上HTML代码编入到这个Servlet中,然后运行这个Servlet,将数据响应给浏览器.</p>
<p><strong>.JSP的本质其实就是一个Servlet</strong>, .JSP中的HTML代码相当于是我们向浏览器响应的HTML内容的模板</p>
<h3 id="jsp执行过程" tabindex="-1"><a class="header-anchor" href="#jsp执行过程" aria-hidden="true">#</a> JSP执行过程</h3>
<p>JSP的执行过程大致可以分为两个时期:<strong>转译时期</strong>和<strong>请求时期</strong></p>
<ul>
<li>
<p><strong>转译时期（Translation Time）</strong><br>
JSP网页转译成Servlet,生成<code v-pre>.java</code>文件,然后进行编译生成<code v-pre>.class</code>字节码文件</p>
</li>
<li>
<p><strong>请求时期（Request Time）</strong><br>
运行<code v-pre>.class</code>字节码文件,处理请求。</p>
</li>
</ul>
<h3 id="具体过程" tabindex="-1"><a class="header-anchor" href="#具体过程" aria-hidden="true">#</a> 具体过程</h3>
<ol>
<li>客户端发出Request请求</li>
<li>JSP Container 将JSP转译成Servlet的源代码.java文件</li>
<li>将产生的Servlet源代码经过编译后.生成字节码.class文件</li>
<li>将.class字节码文件加载进入内存并执行,其实就是在运行一个Servlet</li>
<li>通过Response对象将数据响应给浏览器</li>
</ol>
<h2 id="继承结构" tabindex="-1"><a class="header-anchor" href="#继承结构" aria-hidden="true">#</a> 继承结构</h2>
<p>JSP文件转换成JAVA代码之后,它默认<code v-pre>继承了HttpJSPBase</code>,<strong>实现了JSPSourceDependent,和JSPSourceImports两个接口</strong></p>
<p>其中HttpJSPBase又继承了HttpServlet ,也就是说,JSP本质上就是一个Servlet</p>
<h3 id="httpjspbase" tabindex="-1"><a class="header-anchor" href="#httpjspbase" aria-hidden="true">#</a> HttpJSPBase</h3>
<p><code v-pre>HttpJSPBase</code>重写了<code v-pre>init</code>,<code v-pre>service</code>和<code v-pre>destory</code>方法,并且自定义了<code v-pre> _jspInit</code>,<code v-pre>_ jspService</code>,<code v-pre>_ jspDestory</code>. 然后在重写的<code v-pre>init</code>方法中调用了<code v-pre>_JSPInit</code>,在重写的<code v-pre>service</code>方法中调用了<code v-pre>_jspService</code>,在重写的<code v-pre>destory</code>方法中调用了<code v-pre>_jspDestory</code>.</p>
<p>那么我们<code v-pre>JSP</code>文件编译成JAVA代码后,继承<code v-pre>HttpJspBase</code>重写的方法是<code v-pre>_jspInit</code>,<code v-pre>_ jspService</code>,<code v-pre>_ jspService</code></p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/04_JavaEE技术/04_JSP/01_JSP入门/assets/Pasted_image_20230402223710.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/04_JavaEE技术/04_JSP/01_JSP入门/assets/Pasted_image_20230402224015.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>通过查看代码我们发现,我们页面上所有HTML相关的代码全部被转化成了字符串,并在<code v-pre>_JSPService</code>方法中,通过输出流的形式响应给了浏览器,<code v-pre>&lt;%%&gt;</code>中的代码也在该方法中穿插执行.</p>
<p>当JSP网页在执行时，JSP Container 会做检查工作，<strong>如果发现JSP网页有更新修改时，JSP Container 才会再次编译JSP成 Servlet;</strong> 如果JSP没有更新时，就直接执行前面所产生的Servlet. 也就是说,当我们在JSP上修改了代码时,<strong>不需要频繁的更新和重启项目,直接访问就可以完成更新</strong></p>
<h2 id="jsp加载引擎" tabindex="-1"><a class="header-anchor" href="#jsp加载引擎" aria-hidden="true">#</a> JSP加载引擎</h2>
<p>查看tomcat web.xml 我们发现,这里默认配置了一个JSP的加载引擎 — <code v-pre>JSPServlet</code></p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/04_JavaEE技术/04_JSP/01_JSP入门/assets/Pasted_image_20230402224258.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>JSP加载引擎的匹配路径规则如下</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/04_JavaEE技术/04_JSP/01_JSP入门/assets/Pasted_image_20230402224431.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>通过上述代码查看我们发现, 请求JSP是都会被JSP加载引擎所匹配,</p>
<h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3>
<ul>
<li>转译JSP页面<br>
将JSP页面翻译成一个Servlet，这个Servlet是一个java文件，同时也是一个完整的java程序</li>
<li>编译JSP对应java文件<br>
JSP引擎调用java编译器对这个Servlet进行编译，得到可执行文件class</li>
<li>请求处理阶段<br>
JSP引擎调用java虚拟机来解释执行class文件，生成向客户端发送的应答，然后发送给客户端</li>
</ul>
<h2 id="jsp的性能问题" tabindex="-1"><a class="header-anchor" href="#jsp的性能问题" aria-hidden="true">#</a> JSP的性能问题</h2>
<p>有人都会认为JSP的执行性能会和Servlet相差很多，其实执行<strong>性能上的差别只在第一次的执行</strong>。因为JSP在执行第一次后，会被编译成Servlet的类文件，即.class，当再重复调用执行时，就直接执行第一次所产生的Servlet,而不再重新把JSP编译成Servelt。除了第一次的编译会花较久的时间之外，之后JSP和同等功能的Servlet的执行速度就几乎相同了。</p>
<p>JSP慢的原因不仅仅是第一次请求需要进行转译和编译,而是因为JSP作为一种动态资源,本质上就是Servlet,它是需要运行代码才会生成资源,和HTML本身资源已经存在,直接返回,着本质上的差异,另外,<strong>JSP转译之后,内部通过大量IO流形式发送页面内容</strong>,IO流本身是一种重量级操作,是比较消耗资源的</p>
</div></template>


