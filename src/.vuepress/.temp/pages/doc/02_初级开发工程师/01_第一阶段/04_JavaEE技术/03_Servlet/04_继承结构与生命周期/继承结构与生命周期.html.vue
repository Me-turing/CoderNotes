<template><div><h2 id="servlet的继承结构" tabindex="-1"><a class="header-anchor" href="#servlet的继承结构" aria-hidden="true">#</a> Servlet的继承结构</h2>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/04_JavaEE技术/03_Servlet/04_继承结构与生命周期/image/image_h7STZmy4zZ.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="servlet接口" tabindex="-1"><a class="header-anchor" href="#servlet接口" aria-hidden="true">#</a> Servlet接口</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>init()</td>
<td>创建Servlet对象后立即调用该方法完成其他初始化工作</td>
</tr>
<tr>
<td>service()</td>
<td>处理客户端请求，执行业务操作，利用响应对象响应客户端请求</td>
</tr>
<tr>
<td>destroy()</td>
<td>在销毁Servlet对象之前调用该方法，释放资源</td>
</tr>
<tr>
<td>getServletConfig()</td>
<td>ServletConfig是容器向servlet传递参数的载体</td>
</tr>
<tr>
<td>getServletInfo()</td>
<td>获取servlet相关信息</td>
</tr>
</tbody>
</table>
<h3 id="servletconfig接口" tabindex="-1"><a class="header-anchor" href="#servletconfig接口" aria-hidden="true">#</a> ServletConfig接口</h3>
<p>Servlet运行期间，需要一些辅助信息，这些信息可以在web.xml文件中，使用一个或多个元素，进行配置。</p>
<p>当Tomcat初始化一个Servlet时，会将该Servlet的配置信息，封装到一个ServletConfig对象中，通过调用init(ServletConfig config)方法，将ServletConfig对称传递给Servlet</p>
<h3 id="genericservlet抽象类" tabindex="-1"><a class="header-anchor" href="#genericservlet抽象类" aria-hidden="true">#</a> GenericServlet抽象类</h3>
<p>GenericServlet是实现了Servlet接口的抽象类。</p>
<p>在GenericServlet中进一步的定义了Servlet接口的具体实现，其设计的目的是为了和应用层协议解耦，在GenericServlet中包含一个Service抽象方法。</p>
<p>我们也可以通过继承GenericServlet并实现Service方法实现请求的处理，但是需要将ServletReuqest 和 ServletResponse 转为 HttpServletRequest 和 HttpServletResponse。</p>
<h3 id="httpservlet" tabindex="-1"><a class="header-anchor" href="#httpservlet" aria-hidden="true">#</a> HttpServlet</h3>
<p>继承自GenericServlet. 针对于处理 HTTP 协议的请求所定制。</p>
<p>在 HttpServlet的service() 方法中已经把 ServletReuqest 和 ServletResponse 转为 HttpServletRequest 和 HttpServletResponse。 </p>
<p>直接使用 HttpServletRequest 和HttpServletResponse, 不再需要强转。实际开发中, 直接继承 HttpServlet, 并根据请求方式复写 doXxx() 方法即可。</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/04_JavaEE技术/03_Servlet/04_继承结构与生命周期/image/image_yWl_T7KKcD.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在我们自定义的Servlet中,如果想区分请求方式,不同的请求方式使用不同的代码处理,那么我么重写 doGet  doPost 即可</p>
<p>如果我们没有必要区分请求方式的差异,那么我们直接重写service方法即可</p>
<p>要么重写doGet  doPost 要么重写 service,必须二选一,而且必须进行重写</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/04_JavaEE技术/03_Servlet/04_继承结构与生命周期/image/image__BcGq3foMP.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="servlet的生命周期" tabindex="-1"><a class="header-anchor" href="#servlet的生命周期" aria-hidden="true">#</a> Servlet的生命周期</h2>
<h3 id="容器管理阶段" tabindex="-1"><a class="header-anchor" href="#容器管理阶段" aria-hidden="true">#</a> 容器管理阶段</h3>
<p>Servlet的生命周期是由容器管理的，分别经历四个阶段</p>
<table>
<thead>
<tr>
<th>阶段</th>
<th>次数</th>
<th>时机</th>
</tr>
</thead>
<tbody>
<tr>
<td>创建 new</td>
<td>1次</td>
<td>第一次请求</td>
</tr>
<tr>
<td>初始化 init()</td>
<td>1次</td>
<td>实例化之后</td>
</tr>
<tr>
<td>执行服务 service()</td>
<td>多次</td>
<td>每次请求</td>
</tr>
<tr>
<td>销毁 destroy()</td>
<td>1次</td>
<td>停止服务</td>
</tr>
</tbody>
</table>
<h3 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程" aria-hidden="true">#</a> 执行流程</h3>
<ol>
<li>当客户端浏览器第一次请求Servlet时，容器会<strong>实例化这个Servlet</strong>，然后<strong>调用一次init方法</strong>，并在新的线程中执行service方法处理请求。</li>
<li><strong>service方法执行完毕后容器不会销毁这个Servlet而是做缓存处理</strong>，当客户端浏览器再次请求这个Servlet时，容器会从缓存中直接找到这个Servlet对象，并再一次在新的线程中执行Service方法。</li>
<li>当容器在<strong>销毁Servlet之前会调用一次destory方法</strong></li>
</ol>
<h3 id="线程的安全性问题" tabindex="-1"><a class="header-anchor" href="#线程的安全性问题" aria-hidden="true">#</a> 线程的安全性问题</h3>
<p><strong>在Servlet中我们一般不要轻易使用成员变量!!!! 可能会造成线程安全问题</strong></p>
<p>如果要使用的话,应该尽量避免对成员变量产生修改,如果要产生修改我们应该<strong>注意线程安全问题</strong>,但是要知道,<strong>添加线程安全编码处理,会严重影响效率</strong>.</p>
<p>综上所述:  <strong>原则,能不用成员变量就不用!!!</strong></p>
<h3 id="简单的应用实例" tabindex="-1"><a class="header-anchor" href="#简单的应用实例" aria-hidden="true">#</a> 简单的应用实例</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyServlet4</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token comment">// 成员变量</span>
    <span class="token keyword">public</span> <span class="token class-name">MyServlet4</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token punctuation">{</span><span class="token comment">// 构造一个Servlet对象的方法</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"MyServlet4 Constructor invoked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span><span class="token comment">// 初始化</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"MyServlet4 init invoked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 执行服务</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"MyServlet4 service invoked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 销毁</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"MyServlet4 destory invoked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多次请求servlet并查看控制台输出即可印证上述结论,值得注意的是:</p>
<p>如果需要Servlet在服务启动时就实例化并初始化,我们可以在servlet的配置中<code v-pre>添加load-on-startup配置启动顺序</code>,配置的数字为启动顺序,应避免冲突且应&gt;6</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/04_JavaEE技术/03_Servlet/04_继承结构与生命周期/image/image_KPUZ9dz9rh.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="servlet处理请求的过程" tabindex="-1"><a class="header-anchor" href="#servlet处理请求的过程" aria-hidden="true">#</a> Servlet处理请求的过程</h3>
<ol>
<li>当浏览器基于get方式请求我们创建Servlet时，我们自定义的Servlet中的doGet方法会被执行。<br>
doGet方法能够被执行并处理get请求的原因是，容器在启动时会解析web工程中WEB-INF目录中的web.xml文件，在该文件中我们配置了Servlet与URI的绑定，容器通过对请求的解析可以获取请求资源的URI，然后找到与该URI绑定的Servlet并做实例化处理<br>
注意：只实例化一次，如果在缓存中能够找到这个Servlet就不会再做次实例化处理</li>
<li>在实例化时会使用Servlet接口类型作为引用类型的定义，并调用一次init方法，由于HttpServlet中重写了该方法所以最终执行的是HttpServlet中init方法<br>
HttpServlet中的Init方法是一个空的方法体</li>
<li>然后在新的线程中调用service方法<br>
由于在HttpServlet中重写了Service方法所以最终执行的是HttpServlet中的service方法</li>
<li>在service方法中通过request.getMethod()获取到请求方式进行判断如果是Get方式请求就执行doGet方法，如果是POST请求就执行doPost方法</li>
<li>如果是基于GET方式提交的，并且在我们自定义的Servlet中又重写了HttpServlet中的doGet方法，那么最终会根据Java的多态特性转而执行我们自定义的Servlet中的doGet方法</li>
</ol>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/04_JavaEE技术/03_Servlet/04_继承结构与生命周期/image/image_ALmJ1E6OcQ.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


