<template><div><h2 id="过滤器链的使用" tabindex="-1"><a class="header-anchor" href="#过滤器链的使用" aria-hidden="true">#</a> 过滤器链的使用</h2>
<h3 id="什么是过滤链" tabindex="-1"><a class="header-anchor" href="#什么是过滤链" aria-hidden="true">#</a> 什么是过滤链</h3>
<p>在一个web应用中，可以开发编写<strong>多个Filter，这些Filter组合起来称之为一个Filter链</strong>。</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/04_JavaEE技术/05_过滤器和监听器/02_过滤器的使用/assets/Pasted_image_20230405154535.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>web服务器根据Filter在<code v-pre>web.xml文件</code>中的注册顺序，决定先调用哪个Filter.</p>
<p>当第一个Filter的<code v-pre>doFilter方法</code>被调用时，web服务器会创建一个代表Filter链的<code v-pre>FilterChain对象</code>传递给该方法。在<code v-pre>doFilter方法</code>中，开发人员如果调用了<code v-pre>FilterChain对象</code>的<code v-pre>doFilter方法</code>，则web服务器会检查<code v-pre>FilterChain对象</code>中是否还有filter，如果有，则调用第2个filter，如果没有，则调用目标资源。</p>
<p>使用过滤器链的好处是我们可以将不同的过滤功能分散到多个过滤器中,分工明确,避免一个过滤器做太多的业务处理,<strong>降低了代码的耦合度,这体现了单一职责的设计原则,应用了责任链的代码设计模式.</strong></p>
<h3 id="代码案例" tabindex="-1"><a class="header-anchor" href="#代码案例" aria-hidden="true">#</a> 代码案例</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class MyFilter1 implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        
    }
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println(&quot;MyFilter1   在过滤请求 &quot;);
        filterChain.doFilter(servletRequest,servletResponse);
        System.out.println(&quot;MyFilter1   在过滤响应&quot;);
    }
    @Override
    public void destroy() {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class MyFilter2 implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println(&quot;MyFilter2   在过滤请求 &quot;);
        filterChain.doFilter(servletRequest,servletResponse);
        System.out.println(&quot;MyFilter2   在过滤响应&quot;);
    }
    @Override
    public void destroy() {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置过滤链</p>
<p><strong>决定过滤器的执行顺序是由filter-mapping标签的顺序决定</strong></p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;web-app xmlns=&quot;http://xmlns.jcp.org/xml/ns/javaee&quot;
         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd&quot;
         version=&quot;4.0&quot;&gt;
    &lt;filter&gt;
        &lt;filter-name&gt;filter1&lt;/filter-name&gt;
        &lt;filter-class&gt;com.meturing.filter.MyFilter1&lt;/filter-class&gt;
    &lt;/filter&gt;
    &lt;filter&gt;
        &lt;filter-name&gt;filter2&lt;/filter-name&gt;
        &lt;filter-class&gt;com.meturing.filter.MyFilter2&lt;/filter-class&gt;
    &lt;/filter&gt;
    
    &lt;!--这里的顺序决定了过滤器的顺序--&gt;
    &lt;filter-mapping&gt;
        &lt;filter-name&gt;filter2&lt;/filter-name&gt;
        &lt;url-pattern&gt;/myServlet1.do&lt;/url-pattern&gt;
    &lt;/filter-mapping&gt;
    &lt;filter-mapping&gt;
        &lt;filter-name&gt;filter1&lt;/filter-name&gt;
        &lt;url-pattern&gt;/myServlet1.do&lt;/url-pattern&gt;
    &lt;/filter-mapping&gt;
&lt;/web-app&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="过滤器初始化参数" tabindex="-1"><a class="header-anchor" href="#过滤器初始化参数" aria-hidden="true">#</a> 过滤器初始化参数</h2>
<p>同<code v-pre>servlet</code>一样,filter也可以通过<code v-pre>web.xml</code>进行初始化配置,在初始化时,将参数封装进入<code v-pre>FilterConfig</code>并在调用init方法时作为实参传入,我们可以在init方法中获取参数.<code v-pre>FilterConfig接口</code>为我们提供了如下功能</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>String getFilterName();//得到filter的名称。

String getInitParameter(String   name);//返回定名称的初始化参数的值。如果不存在返回null.

Enumeration   getInitParameterNames();//返回过滤器的所有初始化参数的名字的枚举集合。

public ServletContext   getServletContext();//返回Servlet上下文对象的引用。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用案例" tabindex="-1"><a class="header-anchor" href="#使用案例" aria-hidden="true">#</a> 使用案例</h3>
<p>配置Filter初始化参数</p>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;filter&gt;
	&lt;filter-name&gt;filter1&lt;/filter-name&gt;
	&lt;filter-class&gt;com.meturing.filter.MyFilter1&lt;/filter-class&gt;
	&lt;init-param&gt;
		&lt;param-name&gt;realname&lt;/param-name&gt;
		&lt;param-value&gt;xiaoming&lt;/param-value&gt;
	&lt;/init-param&gt;
	&lt;init-param&gt;
		&lt;param-name&gt;gender&lt;/param-name&gt;
		&lt;param-value&gt;boy&lt;/param-value&gt;
	&lt;/init-param&gt;
	&lt;init-param&gt;
		&lt;param-name&gt;age&lt;/param-name&gt;
		&lt;param-value&gt;10&lt;/param-value&gt;
	&lt;/init-param&gt;
	&lt;init-param&gt;
		&lt;param-name&gt;charset&lt;/param-name&gt;
		&lt;param-value&gt;UTF-8&lt;/param-value&gt;
	&lt;/init-param&gt;
&lt;/filter&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读取初始化参数</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class MyFilter1 implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // 获取初始化的一些参数
        String realname = filterConfig.getInitParameter(&quot;realname&quot;);
        System.out.println(&quot;realname:&quot;+realname);
        Enumeration&lt;String&gt; pNames = filterConfig.getInitParameterNames();
        while(pNames.hasMoreElements()){
            String pName = pNames.nextElement();
            System.out.println(pName+&quot;:&quot;+filterConfig.getInitParameter(pName));
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="过滤器注解的应用" tabindex="-1"><a class="header-anchor" href="#过滤器注解的应用" aria-hidden="true">#</a> 过滤器注解的应用</h2>
<p>过滤器注解可以使用 <code v-pre>@WebFilter</code></p>
<h3 id="注解的属性" tabindex="-1"><a class="header-anchor" href="#注解的属性" aria-hidden="true">#</a> 注解的属性</h3>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/04_JavaEE技术/05_过滤器和监听器/02_过滤器的使用/assets/Pasted_image_20230405155539.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="注解的使用" tabindex="-1"><a class="header-anchor" href="#注解的使用" aria-hidden="true">#</a> 注解的使用</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@WebFilter(urlPatterns = &quot;/myServlet1.do&quot;)
public class Filter0_MyFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println(&quot;MyFilter0   在过滤请求 &quot;);
        filterChain.doFilter(servletRequest,servletResponse);
        System.out.println(&quot;MyFilter0   在过滤响应&quot;);
    }
    @Override
    public void destroy() {
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@WebFilter(urlPatterns = &quot;/myServlet1.do&quot;,initParams = {@WebInitParam(name=&quot;realname&quot;,value =&quot;zhangsan&quot;),@WebInitParam(name=&quot;charset&quot;,value =&quot;utf-8&quot;)})
public class Filter1_MyFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // 获取初始化的一些参数
        String realname = filterConfig.getInitParameter(&quot;realname&quot;);
        System.out.println(&quot;realname:&quot;+realname);
        Enumeration&lt;String&gt; pNames = filterConfig.getInitParameterNames();
        while(pNames.hasMoreElements()){
            String pName = pNames.nextElement();
            System.out.println(pName+&quot;:&quot;+filterConfig.getInitParameter(pName));
        }
    }
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println(&quot;MyFilter1   在过滤请求 &quot;);
        filterChain.doFilter(servletRequest,servletResponse);
        System.out.println(&quot;MyFilter1   在过滤响应&quot;);
    }
    @Override
    public void destroy() {
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


