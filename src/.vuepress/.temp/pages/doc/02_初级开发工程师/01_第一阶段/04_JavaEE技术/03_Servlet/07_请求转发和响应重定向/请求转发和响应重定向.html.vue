<template><div><h2 id="请求转发" tabindex="-1"><a class="header-anchor" href="#请求转发" aria-hidden="true">#</a> 请求转发</h2>
<h3 id="forword转发" tabindex="-1"><a class="header-anchor" href="#forword转发" aria-hidden="true">#</a> forword转发</h3>
<h4 id="处理流程" tabindex="-1"><a class="header-anchor" href="#处理流程" aria-hidden="true">#</a> 处理流程</h4>
<ol>
<li>清空Response存放响应正文数据的缓冲区</li>
<li>如果目标资源为Servlet或JSP，就调用它们的service()方法，把该方法产生的响应结果发送到客户端; 如果目标资源文件系统中的静态HTML文档，就读取文档中的数据把它发送到客户端</li>
</ol>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/04_JavaEE技术/03_Servlet/07_请求转发和响应重定向/image/image_VtLJeQj0bk.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="处理特点" tabindex="-1"><a class="header-anchor" href="#处理特点" aria-hidden="true">#</a> 处理特点</h4>
<ol>
<li>由于forword()方法先清空用于存放响应正文的缓冲区，因此源Servlet生成的响应结果不会被发送到客户端，只有目标资源生成的响应结果才会被发送到客户端</li>
<li>如果源Servlet在进行请求转发之前，已经提交了响应结（flushBuffer(),close()方法），那么forward()方法抛出IllegalStateException。为了避免该异常，不应该在源Servlet中提交响应结果。</li>
</ol>
<h4 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h4>
<p>servlet1 请求转发至servlet2</p>
<p>servlet1</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">"/servlet1.do"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet1</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"servlet1 service invoked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> money <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"money"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"money:"</span><span class="token operator">+</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置响应类型和编码(include模式下)</span>
        <span class="token comment">/*  resp.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html;charset=UTF-8");*/</span>
        <span class="token comment">// 增加响应内容</span>
        <span class="token comment">//resp.getWriter().println("servlet1在转发之前增加的响应内容");</span>
        <span class="token comment">// 请求转发给另一个组件</span>
        <span class="token comment">// 获得一个请求转发器</span>
        <span class="token comment">//RequestDispatcher requestDispatcher = req.getRequestDispatcher("servlet2.do");</span>
        <span class="token comment">//RequestDispatcher requestDispatcher = req.getRequestDispatcher("aaa.html");</span>
        <span class="token comment">//RequestDispatcher requestDispatcher = req.getRequestDispatcher("index.jsp");</span>
        <span class="token comment">//RequestDispatcher requestDispatcher = req.getRequestDispatcher("WEB-INF/bbb.html");</span>
        <span class="token class-name">RequestDispatcher</span> requestDispatcher <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">"https://www.baidu.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 由请求转发器作出转发动作</span>
        requestDispatcher<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 托管给目标资源(forward多一些)</span>
        <span class="token comment">// 在forward转发模式下,请求应该完全交给目标资源去处理,我们在源组件中,不要作出任何的响应处理</span>
        <span class="token comment">// 在forward方法调用之后,也不要在使用req和resp对象做其他操作了</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>servlet2</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">"/servlet2.do"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet2</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"servlet2 service invoked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 接收参数</span>
        <span class="token class-name">String</span> money <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"money"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"money:"</span><span class="token operator">+</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 作出响应 (在forWord模式下)</span>
        resp<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">"text/html;charset=UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PrintWriter</span> writer <span class="token operator">=</span> resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"支付宝到账:"</span><span class="token operator">+</span>money<span class="token operator">+</span><span class="token string">"元"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="include转发" tabindex="-1"><a class="header-anchor" href="#include转发" aria-hidden="true">#</a> include转发</h3>
<h4 id="处理流程-1" tabindex="-1"><a class="header-anchor" href="#处理流程-1" aria-hidden="true">#</a> 处理流程</h4>
<ol>
<li>如果目标资源为Servlet或JSP，就调用他们的相应的service()方法，把该方法产生的响应正文添加到源Servlet的响应结果中；如果目标组件为HTML文档，就直接把文档的内容添加到源Servlet的响应结果中</li>
<li>返回到源Servlet的服务方法中，继续执行后续代码块</li>
</ol>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/04_JavaEE技术/03_Servlet/07_请求转发和响应重定向/image/image_tVzCXdP9Xk.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="处理特点-1" tabindex="-1"><a class="header-anchor" href="#处理特点-1" aria-hidden="true">#</a> 处理特点</h4>
<p>include与forward转发相比，包含有以下特点</p>
<ol>
<li>源Servlet与被包含的目标资源的输出数据都会被添加到响应结果中</li>
<li>在目标资源中对响应状态码或者响应头所做的修改都会被忽略</li>
</ol>
<h4 id="测试代码-1" tabindex="-1"><a class="header-anchor" href="#测试代码-1" aria-hidden="true">#</a> 测试代码</h4>
<p>servlet1 请求转发至servlet2</p>
<p>servlet1</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">"/servlet1.do"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet1</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"servlet1 service invoked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> money <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"money"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"money:"</span><span class="token operator">+</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置响应类型和编码(include模式下)</span>
        <span class="token comment">/*  resp.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html;charset=UTF-8");*/</span>
        <span class="token comment">// 增加响应内容</span>
        <span class="token comment">//resp.getWriter().println("servlet1在转发之前增加的响应内容");</span>
        <span class="token comment">// 请求转发给另一个组件</span>
        <span class="token comment">// 获得一个请求转发器</span>
        <span class="token comment">//RequestDispatcher requestDispatcher = req.getRequestDispatcher("servlet2.do");</span>
        <span class="token comment">//RequestDispatcher requestDispatcher = req.getRequestDispatcher("aaa.html");</span>
        <span class="token comment">//RequestDispatcher requestDispatcher = req.getRequestDispatcher("index.jsp");</span>
        <span class="token comment">//RequestDispatcher requestDispatcher = req.getRequestDispatcher("WEB-INF/bbb.html");</span>
        <span class="token class-name">RequestDispatcher</span> requestDispatcher <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">"https://www.baidu.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 由请求转发器作出转发动作</span>
        requestDispatcher<span class="token punctuation">.</span><span class="token function">include</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 让目标资源完成部分工作</span>
        <span class="token comment">// 继续增加响应信息 (include模式)</span>
        resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"servlet1在转发之后增加的响应内容"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 在include转发模式下,设置响应可以在转发之前,也可以在转发之后</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>servlet2</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">"/servlet2.do"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet2</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"servlet2 service invoked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 接收参数</span>
        <span class="token class-name">String</span> money <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"money"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"money:"</span><span class="token operator">+</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 作出响应 (在forWord模式下)</span>
        resp<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">"text/html;charset=UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PrintWriter</span> writer <span class="token operator">=</span> resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"支付宝到账:"</span><span class="token operator">+</span>money<span class="token operator">+</span><span class="token string">"元"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3>
<ol>
<li>请求转发是一种服务器的行为,是对浏览器屏蔽</li>
<li>浏览器的地址栏不会发生变化</li>
<li>请求的参数是可以从源组件传递到目标组件的</li>
<li>请求对象和响应对象没有重新创建,而是传递给了目标组件</li>
<li>请求转发可以帮助我们完成页面的跳转</li>
<li>请求转发可以转发至WEB-INF里</li>
<li>请求转发只能转发给当前项目的内部资源,不能转发至外部资源</li>
<li>常用forward</li>
</ol>
<h2 id="响应重定向" tabindex="-1"><a class="header-anchor" href="#响应重定向" aria-hidden="true">#</a> 响应重定向</h2>
<p>响应重定向是通过<code v-pre>HttpServletResponse对象.sendRedirect(“路径”)</code>的方式实现,是服务器通知浏览器,让浏览器去自主请求其他资源的一种方式</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/04_JavaEE技术/03_Servlet/07_请求转发和响应重定向/image/image_WpdGog0NUJ.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="处理流程-2" tabindex="-1"><a class="header-anchor" href="#处理流程-2" aria-hidden="true">#</a> 处理流程</h3>
<ol>
<li>用户在浏览器端输入特定URL，请求访问服务器端的某个Servlet</li>
<li>服务器端的Servlet返回一个状态码为302的响应结果，该响应结果的含义为：让浏览器端再请求访问另一个Web资源，在响应结果中提供了另一个Web资源的URL. 另一个Web资源有可能在同一个Web服务器上，也有可能不再同一个Web服务器上</li>
<li>当浏览器端接收到这种响应结果后，再立即自动请求访问另一个Web资源</li>
<li>浏览器端接收到另一个Web资源的响应结果</li>
</ol>
<h3 id="测试代码-2" tabindex="-1"><a class="header-anchor" href="#测试代码-2" aria-hidden="true">#</a> 测试代码</h3>
<p>servlet1 请求转发至servlet2</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">"/servlet3.do"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet3</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"servlet3 service invoked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> money <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"money"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"money:"</span><span class="token operator">+</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 响应重定向</span>
        resp<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span><span class="token string">"servlet4.do?money="</span><span class="token operator">+</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//resp.sendRedirect("WEB-INF/bbb.html");</span>
        <span class="token comment">//resp.sendRedirect("https://www.baidu.com");</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">"/servlet4.do"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet4</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"servlet4 service invoked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> money <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"money"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"money:"</span><span class="token operator">+</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项-1" tabindex="-1"><a class="header-anchor" href="#注意事项-1" aria-hidden="true">#</a> 注意事项</h3>
<ol>
<li>重定向是服务器给浏览器重新指定请求方向 是一种浏览器行为 地址栏会发生变化</li>
<li>重定向时,请求对象和响应对象都会再次产生,请求中的参数是不会携带</li>
<li>重定向也可以帮助我们完成页面跳转</li>
<li><strong>重定向不能帮助我们访问WEB-INF中的资</strong>源</li>
<li>重定向可以定向到外部资源</li>
</ol>
</div></template>


