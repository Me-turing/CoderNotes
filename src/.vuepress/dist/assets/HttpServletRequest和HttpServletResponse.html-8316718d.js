import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-54a62cbe.js";const e={},p=t(`<h2 id="httpservletrequest" tabindex="-1"><a class="header-anchor" href="#httpservletrequest" aria-hidden="true">#</a> HttpServletRequest</h2><p>HttpServletRequest对象代表客户端浏览器的请求，当客户端浏览器通过HTTP协议访问服务器时，HTTP请求中的所有信息都会被Tomcat所解析并封装在这个对象中，通过这个对象提供的方法，可以获得客户端请求的所有信息。</p><h3 id="了解请求结构" tabindex="-1"><a class="header-anchor" href="#了解请求结构" aria-hidden="true">#</a> 了解请求结构</h3><p>请求的主要组成部分</p><h3 id="获取请求行" tabindex="-1"><a class="header-anchor" href="#获取请求行" aria-hidden="true">#</a> 获取请求行</h3><table><thead><tr><th>API</th><th>说明</th></tr></thead><tbody><tr><td>getRequestURL()</td><td>返回客户端浏览器发出请求时的完整URL</td></tr><tr><td>getRequestURI()</td><td>返回请求行中指定资源部分</td></tr><tr><td>getRemoteAddr()</td><td>返回发出请求的客户机的IP地址</td></tr><tr><td>getLocalAddr()</td><td>返回WEB服务器的IP地址</td></tr><tr><td>getLocalPort()</td><td>返回WEB服务器处理Http协议的连接器所监听的端口</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet3</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getRequestURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回客户端浏览器发出请求时的完整URL。</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回请求行中指定资源部分。</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getRemoteAddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回发出请求的客户机的IP地址。</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getLocalAddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回WEB服务器的IP地址。</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getLocalPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回WEB服务器处理Http协议的连接器所监听的端口。</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;主机名: &quot;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span><span class="token function">getLocalName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;客户端PORT: &quot;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span><span class="token function">getRemotePort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前项目部署名: &quot;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span><span class="token function">getContextPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;协议名:&quot;</span><span class="token operator">+</span>req<span class="token punctuation">.</span><span class="token function">getScheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请求方式:&quot;</span><span class="token operator">+</span>req<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取请求头信息" tabindex="-1"><a class="header-anchor" href="#获取请求头信息" aria-hidden="true">#</a> 获取请求头信息</h3><table><thead><tr><th>API</th><th>说明</th></tr></thead><tbody><tr><td>getHeader(&quot;headerKey&quot;)</td><td>根据请求头中的key获取对应的value</td></tr><tr><td>getHeaderNames()</td><td>获取请求头中所有的key，该方法返回枚举类型</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet3</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 根据请求头名或者请求头对应的值</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Accept&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获得全部的请求头名</span>
        <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> headerNames <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getHeaderNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>headerNames<span class="token punctuation">.</span><span class="token function">hasMoreElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">String</span> headername <span class="token operator">=</span> headerNames<span class="token punctuation">.</span><span class="token function">nextElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>headername<span class="token operator">+</span><span class="token string">&quot;:&quot;</span><span class="token operator">+</span>req<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span>headername<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取请求体信息" tabindex="-1"><a class="header-anchor" href="#获取请求体信息" aria-hidden="true">#</a> 获取请求体信息</h3><table><thead><tr><th>API</th><th>说明</th></tr></thead><tbody><tr><td>getParameter(&quot;key&quot;)</td><td>根据key获取指定value</td></tr><tr><td>getParameterValues(&quot;checkboxkey&quot;)</td><td>获取复选框(checkbox组件)中的值，返回一个String[]</td></tr><tr><td>getParameterNames()</td><td>获取请求中所有数据的key，该方法返回一个枚举类型</td></tr><tr><td>getParameterMap()</td><td>获取请求中所有的数据并存放到一个Map结构中，该方法返回一个Map，其中key为String类型value为String[]类型</td></tr><tr><td>setCharacterEncoding(&quot;utf-8&quot;)</td><td>设置请求编码</td></tr></tbody></table><p>请求的数据包基于字节在网络上传输，Tomcat接收到请求的数据包后会将数据包中的字节转换为字符。</p><p>在Tomcat中使用的是ISO-8859-1的单字节编码完成字节与字符的转换，所以数据中含有中文就会出现乱码，可以<strong>通过req.setCharacterEncoding(&quot;utf-8&quot;)方法来对提交的数据根据指定的编码方式重新做编码处理</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet3</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 根据请求头名或者请求头对应的值</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Accept&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获得全部的请求头名</span>
        <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> headerNames <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getHeaderNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>headerNames<span class="token punctuation">.</span><span class="token function">hasMoreElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">String</span> headername <span class="token operator">=</span> headerNames<span class="token punctuation">.</span><span class="token function">nextElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>headername<span class="token operator">+</span><span class="token string">&quot;:&quot;</span><span class="token operator">+</span>req<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span>headername<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;________________________________&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> pmap <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameterMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;&gt;</span> entries <span class="token operator">=</span> pmap<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> entry <span class="token operator">:</span> entries<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;:&quot;</span><span class="token operator">+</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="httpservletresponse" tabindex="-1"><a class="header-anchor" href="#httpservletresponse" aria-hidden="true">#</a> HttpServletResponse</h2><p>HttpServletResponse对象代表服务器的响应。这个对象中封装了响应客户端浏览器的流对象，以及向客户端浏览器响应的响应头、响应数据、响应状态码等信息。</p><h3 id="了解响应" tabindex="-1"><a class="header-anchor" href="#了解响应" aria-hidden="true">#</a> 了解响应</h3><p>HTTP响应</p><h3 id="响应状态" tabindex="-1"><a class="header-anchor" href="#响应状态" aria-hidden="true">#</a> 响应状态</h3><table><thead><tr><th>API</th><th>说明</th></tr></thead><tbody><tr><td>setStatus(状态码)</td><td>设置响应码</td></tr></tbody></table><p>设置响应状态</p><p>更多类型详见: HTTP状态码分类</p><h3 id="响应类型设置" tabindex="-1"><a class="header-anchor" href="#响应类型设置" aria-hidden="true">#</a> 响应类型设置</h3><table><thead><tr><th>API</th><th>说明</th></tr></thead><tbody><tr><td>setContentType(&quot;Type&quot;)</td><td>通过MIME-Type设置响应类型</td></tr></tbody></table><p>MIME的全称是Multipurpose Internet Mail Extensions，即多用途互联网邮件扩展类型。这是HTTP协议中用来定义文档性质及格式的标准。对HTTP传输内容类型进行了全面定义。服务器通过MIME告知响应内容类型，而浏览器则通过MIME类型来确定如何处理文档。</p><p>更多类型详见: Content-Type</p><h3 id="设置字符型响应" tabindex="-1"><a class="header-anchor" href="#设置字符型响应" aria-hidden="true">#</a> 设置字符型响应</h3><table><thead><tr><th>API</th><th>说明</th></tr></thead><tbody><tr><td>setContentType(&quot;image/jpeg&quot;)</td><td>设置响应类型为图片类型，图片类型为jpeg或jpg格式</td></tr><tr><td>setContentType(&quot;image/gif&quot;)</td><td>设置响应类型为图片类型，图片类型为gif格式</td></tr><tr><td>setCharacterEncoding(&quot;utf-8&quot;)</td><td>设置服务端为浏览器产生响应的响应编码，服务端会根据此编码将响应内容的字符转换为字节</td></tr><tr><td>setContentType(&quot;text/html;charset=utf-8&quot;)</td><td>设置服务端为浏览器产生响应的响应编码，服务端会根据此编码将响应内容的字符转换为字节。同时客户端浏览器会根据此编码方式显示响应内容。</td></tr></tbody></table><h3 id="设置文件下载" tabindex="-1"><a class="header-anchor" href="#设置文件下载" aria-hidden="true">#</a> 设置文件下载</h3><table><thead><tr><th>API</th><th>说明</th></tr></thead><tbody><tr><td>setHeader(&quot;Content-Disposition&quot;, &quot;attachment; filename=&quot;+文件名)</td><td>该附加信息表示作为对下载文件的一个标识字段。不会在浏览器中显示而是直接做下载处理</td></tr></tbody></table><p><code>Content-Disposition:attachment</code> : 该附加信息表示作为对下载文件的一个标识字段。不会在浏览器中显示而是直接做下载处理</p><p><code>filename=文件名</code> : 表示指定下载文件的文件名</p><h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyServlet2</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 设置响应码</span>
        <span class="token comment">//resp.setStatus(500);</span>
        <span class="token comment">//resp.setStatus(405, &quot;request method not supported&quot;);</span>
        <span class="token comment">// 设置响应头</span>
        <span class="token comment">//resp.setHeader(&quot;Date&quot;,&quot;2022-11-11&quot;);</span>
        <span class="token comment">// 自定义头</span>
        <span class="token comment">// resp.setHeader(&quot;aaa&quot;, &quot;bbb&quot;);</span>
        <span class="token comment">// 高速浏览器响应的数据是什么? 浏览器根据此头决定 数据如何应用</span>
        <span class="token comment">// 设置MIME类型 json  xml 文件下载  ... ...</span>
        <span class="token comment">// resp.setHeader(&quot;content-type&quot;, &quot;text/css&quot;);</span>
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 专门用于设置Content-Type 响应头</span>
        resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h1&gt;this is tag h1&lt;/h1&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),o=[p];function c(l,u){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","HttpServletRequest和HttpServletResponse.html.vue"]]);export{k as default};
