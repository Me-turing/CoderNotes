<template><div><h2 id="引入过滤器" tabindex="-1"><a class="header-anchor" href="#引入过滤器" aria-hidden="true">#</a> 引入过滤器</h2>
<h3 id="什么是过滤器" tabindex="-1"><a class="header-anchor" href="#什么是过滤器" aria-hidden="true">#</a> 什么是过滤器</h3>
<p>Filter也称之为过滤器，它是Servlet技术中最实用的技术.</p>
<p>Web开发人员通过Filter技术，对web服务器管理的所有web资源：例如Jsp, Servlet, 静态图片文件或静态 html 文件等进行拦截，从而实现一些特殊的功能。</p>
<p>例如实现URL级别的权限访问控制、过滤敏感词汇、压缩响应信息等一些高级功能 处理编码。</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/04_JavaEE技术/05_过滤器和监听器/01_初识过滤器/assets/Pasted_image_20230405124141.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>它主要用于对用户请求进行预处理，也可以对HttpServletResponse进行后处理。</strong></p>
<ul>
<li>使用Filter的完整流程：
<ul>
<li>Filter对用户请求进行预处理</li>
<li>接着将请求交给Servlet进行处理并生成响应</li>
<li>最后Filter再对服务器响应进行后处理。</li>
</ul>
</li>
</ul>
<h3 id="过滤器如何实现功能" tabindex="-1"><a class="header-anchor" href="#过滤器如何实现功能" aria-hidden="true">#</a> 过滤器如何实现功能</h3>
<ol>
<li>在<code v-pre>HttpServletRequest</code>到达 <code v-pre>Servlet</code> 之前，拦截客户的<code v-pre>HttpServletRequest</code> 。<br>
根据需要检查<code v-pre>HttpServletRequest</code>，也可以修改<code v-pre>HttpServletRequest</code> 头和数据。</li>
<li>在<code v-pre>HttpServletResponse</code>到达客户端之前，拦截<code v-pre>HttpServletResponse</code> 。<br>
根据需要检查<code v-pre>HttpServletResponse</code>，也可以修改<code v-pre>HttpServletResponse</code>头和数据。</li>
<li>Filter接口中有一个<code v-pre>doFilter</code>方法，当开发人员编写好Filter，并配置对哪个web资源进行拦截后，Web服务器每次在调用web资源的service方法之前，都会先调用一下filter的<code v-pre>doFilter</code>方法.<br>
<code v-pre>doFilter</code>方法中有一个<code v-pre>filterChain</code>对象,用于继续传递给下一个filter,在传递之前我们可以定义过滤请求的功能,在传递之后,我们可以定义过滤响应的功能</li>
</ol>
<h2 id="过滤器的定义与配置" tabindex="-1"><a class="header-anchor" href="#过滤器的定义与配置" aria-hidden="true">#</a> 过滤器的定义与配置</h2>
<p>采用三步走策略使用filter</p>
<ol>
<li>开发后台资源 静态资源<code v-pre>(html,css … …)</code>或者动态资源(<code v-pre>Servlet</code>,<code v-pre>Jsp</code>)</li>
<li>开发Filter</li>
<li>在<code v-pre>web.xml</code>中配置Filter拦截哪些资源</li>
</ol>
<h3 id="开发servlet" tabindex="-1"><a class="header-anchor" href="#开发servlet" aria-hidden="true">#</a> 开发Servlet</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class MyServlet1 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println(&quot;myServlet1 执行了sevice方法&quot;);
        resp.setContentType(&quot;text/html;charset=UTF-8&quot;);
        resp.setCharacterEncoding(&quot;UTF-8&quot;);
        resp.getWriter().print(&quot;myServlet1响应的数据&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class MyServlet2 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println(&quot;myServlet2 执行了sevice方法&quot;);
        resp.setContentType(&quot;text/html;charset=UTF-8&quot;);
        resp.setCharacterEncoding(&quot;UTF-8&quot;);
        resp.getWriter().print(&quot;myServlet2响应的数据&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开发filter" tabindex="-1"><a class="header-anchor" href="#开发filter" aria-hidden="true">#</a> 开发Filter</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class MyFilter implements Filter {
    // 初始化方法
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }
    // 作出过滤的方法
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println(&quot;Filter doFilter 对请求作出过滤&quot;);
        // 通过一行代码 放行请求
        // 放行请求,交给过滤器链继续进行过滤 最后到达资源
        filterChain.doFilter(servletRequest, servletResponse);
        
        System.out.println(&quot;Filter doFilter 对响应作出过滤&quot;);
        
        servletResponse.getWriter().print(&quot;filter 追加一些数据&quot;);
    }
    // 销毁方法
    @Override
    public void destroy() {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置filter" tabindex="-1"><a class="header-anchor" href="#配置filter" aria-hidden="true">#</a> 配置Filter</h3>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;web-app xmlns=&quot;http://xmlns.jcp.org/xml/ns/javaee&quot;
         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd&quot;
         version=&quot;4.0&quot;&gt;
    &lt;servlet&gt;
        &lt;servlet-name&gt;myServlet1&lt;/servlet-name&gt;
        &lt;servlet-class&gt;com.meturing.servlet.MyServlet1&lt;/servlet-class&gt;
    &lt;/servlet&gt;
    &lt;servlet-mapping&gt;
        &lt;servlet-name&gt;myServlet1&lt;/servlet-name&gt;
        &lt;url-pattern&gt;/myServlet1.do&lt;/url-pattern&gt;
    &lt;/servlet-mapping&gt;
    &lt;servlet&gt;
        &lt;servlet-name&gt;myServlet2&lt;/servlet-name&gt;
        &lt;servlet-class&gt;com.meturing.servlet.MyServlet2&lt;/servlet-class&gt;
    &lt;/servlet&gt;
    &lt;servlet-mapping&gt;
        &lt;servlet-name&gt;myServlet2&lt;/servlet-name&gt;
        &lt;url-pattern&gt;/myServlet2.do&lt;/url-pattern&gt;
    &lt;/servlet-mapping&gt;
    
    &lt;filter&gt;
        &lt;filter-name&gt;filter1&lt;/filter-name&gt;
        &lt;filter-class&gt;com.meturing.filter.MyFilter&lt;/filter-class&gt;
    &lt;/filter&gt;
    
    &lt;filter-mapping&gt;
        &lt;filter-name&gt;filter1&lt;/filter-name&gt;
        &lt;!--对那个/些资源的请求和响应进行过滤--&gt;
        &lt;!--&lt;url-pattern&gt;/myServlet1.do&lt;/url-pattern&gt;--&gt;
        &lt;servlet-name&gt;myServlet1&lt;/servlet-name&gt;
        &lt;servlet-name&gt;myServlet2&lt;/servlet-name&gt;
        &lt;!--&lt;url-pattern&gt;/&lt;/url-pattern&gt;
        &lt;url-pattern&gt;/*&lt;/url-pattern&gt;--&gt;
    &lt;/filter-mapping&gt;
    
&lt;/web-app&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="过滤器的生命周期" tabindex="-1"><a class="header-anchor" href="#过滤器的生命周期" aria-hidden="true">#</a> 过滤器的生命周期</h2>
<p>同<code v-pre>servlet</code>对象一样,Filter对象的创建也是交给web服务器完成的,在web服务器创建和使用及最后销毁filter时,会调用filter对应的方法</p>
<h3 id="过滤器的结构" tabindex="-1"><a class="header-anchor" href="#过滤器的结构" aria-hidden="true">#</a> 过滤器的结构</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class MyFilter implements Filter {
	//构造方法
    public MyFilter(){
        System.out.println(&quot;MyFilter constructor invoked&quot;);
    }
    // 初始化方法
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println(&quot;MyFilter init invoked&quot;);
    }
    // 作出过滤的方法
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println(&quot;Filter doFilter 对请求作出过滤&quot;);
        // 通过一行代码 放行请求
        // 放行请求,交给过滤器链继续进行过滤 最后到达资源
        filterChain.doFilter(servletRequest, servletResponse);
        System.out.println(&quot;Filter doFilter 对响应作出过滤&quot;);
        servletResponse.getWriter().print(&quot;filter 追加一些数据&quot;);
    }
    // 销毁方法
    @Override
    public void destroy() {
        System.out.println(&quot;MyFilter destory invoked&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h4>
<p>实例化一个Filter对象的方法</p>
<h4 id="初始化方法" tabindex="-1"><a class="header-anchor" href="#初始化方法" aria-hidden="true">#</a> 初始化方法</h4>
<p><code v-pre>public void init(FilterConfig filterConfig);</code></p>
<p>和我们编写的Servlet程序一样，Filter的创建和销毁由WEB服务器负责。 <strong>web 应用程序启动时，web 服务器将创建Filter 的实例对象，并调用其init方法，读取web.xml配置，完成对象的初始化功能，从而为后续的用户请求作好拦截的准备工作（filter对象只会创建一次，init方法也只会执行一次）</strong>。</p>
<p>开发人员通过init方法的参数，可获得代表当前filter配置信息的FilterConfig对象。</p>
<h4 id="拦截请求方法" tabindex="-1"><a class="header-anchor" href="#拦截请求方法" aria-hidden="true">#</a> 拦截请求方法</h4>
<p><code v-pre>public void doFilter</code></p>
<p>这个方法完成实际的过滤操作。当客户请求访问与过滤器关联的URL的时候，<strong>Servlet过滤器将先执行doFilter方法</strong>。FilterChain参数用于访问后续过滤器。</p>
<h4 id="销毁方法" tabindex="-1"><a class="header-anchor" href="#销毁方法" aria-hidden="true">#</a> 销毁方法</h4>
<p><code v-pre>public void destroy();</code></p>
<p>Filter对象创建后会驻留在内存，<strong>当web应用移除或服务器停止时才销毁</strong>。在Web容器卸载 Filter 对象之前被调用。该方法在Filter的生命周期中仅执行一次。在这个方法中，可以释放过滤器使用的资源。</p>
<h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3>
<p>WEB 容器启动时,会对Filter进行构造并初始化 一次</p>
<p>每次请求目标资源时,都会执行doFilter的方法</p>
<p>WEB容器关闭是,会销毁Filter对象</p>
</div></template>


