<template><div><h2 id="了解监听器" tabindex="-1"><a class="header-anchor" href="#了解监听器" aria-hidden="true">#</a> 了解监听器</h2>
<h3 id="什么是监听器" tabindex="-1"><a class="header-anchor" href="#什么是监听器" aria-hidden="true">#</a> 什么是监听器</h3>
<p>类似于前端的事件绑定,java中的监听器用于监听web应用中某些对象、信息的创建、销毁、增加，修改，删除等动作的发生，然后作出相应的响应处理。</p>
<p>当范围对象的状态发生变化的时候，服务器自动调用监听器对象中的方法。常用于统计在线人数和在线用户，系统加载时进行信息初始化，统计网站的访问量等等。</p>
<h2 id="监听器的分类" tabindex="-1"><a class="header-anchor" href="#监听器的分类" aria-hidden="true">#</a> 监听器的分类</h2>
<h3 id="按监听的对象划分" tabindex="-1"><a class="header-anchor" href="#按监听的对象划分" aria-hidden="true">#</a> 按监听的对象划分</h3>
<ol>
<li>ServletContext对象监听器</li>
<li>HttpSession对象监听器</li>
<li>ServletRequest对象监听器</li>
</ol>
<h3 id="按监听的事件划分" tabindex="-1"><a class="header-anchor" href="#按监听的事件划分" aria-hidden="true">#</a> 按监听的事件划分</h3>
<ol>
<li>对象自身的创建和销毁的监听器</li>
<li>对象中属性的创建和消除的监听器</li>
<li>session中的某个对象的状态变化的监听器</li>
</ol>
<h2 id="监听器有哪些" tabindex="-1"><a class="header-anchor" href="#监听器有哪些" aria-hidden="true">#</a> 监听器有哪些</h2>
<p>java中一共给我们提供了八个监听器接口,分别用于监听三个域对象,每个监听器都有专门监听的事件</p>
<h3 id="reqest域监听器" tabindex="-1"><a class="header-anchor" href="#reqest域监听器" aria-hidden="true">#</a> Reqest域监听器</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">ServletRequestListener</span>           <span class="token punctuation">(</span>处理request对象创建和销毁<span class="token punctuation">)</span>
<span class="token class-name">ServleRequestAttributeListener</span>   <span class="token punctuation">(</span>处理域对象中的数据添加 替换 删除<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="session域监听器" tabindex="-1"><a class="header-anchor" href="#session域监听器" aria-hidden="true">#</a> Session域监听器</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>HttpSessionListener              (处理session对象创建和销毁)
HttpSessionAttributeListener      (处理session域对象中的数据添加 修改 删除)
HttpSessionBindingListener       (处理session对象监听器绑定和解绑定接口)
HttpSessionActivationListener     (处理session对象钝化和活化状态接口)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-域监听器" tabindex="-1"><a class="header-anchor" href="#application-域监听器" aria-hidden="true">#</a> Application 域监听器</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>ServletContextListener            (处理application对象创建和销毁)
ServletContextAttributeListener   (处理application域对象中的数据添加 修改 删除)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监听器的使用" tabindex="-1"><a class="header-anchor" href="#监听器的使用" aria-hidden="true">#</a> 监听器的使用</h2>
<ol>
<li>定义监听器,根据需求实现对应接口</li>
<li>在web.xml中配置监听器,让监听器工作</li>
</ol>
<h3 id="requet域监听器" tabindex="-1"><a class="header-anchor" href="#requet域监听器" aria-hidden="true">#</a> Requet域监听器</h3>
<p>Requet域共有两个监听器接口,分别是 : <code v-pre>ServletRequestListener</code>  <code v-pre>ServleRequestAttributeListener</code></p>
<p>配置监听器,使用web.xml 或者通过@WebListener注解都可以</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;web-app xmlns=&quot;http://xmlns.jcp.org/xml/ns/javaee&quot;
         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd&quot;
         version=&quot;4.0&quot;&gt;
    
    &lt;listener&gt;
        &lt;listener-class&gt;com.meturing.listener.MyRequestListener&lt;/listener-class&gt;
    &lt;/listener&gt;
&lt;/web-app&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>准备Servlet</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@WebServlet(urlPatterns = &quot;/myServlet3.do&quot;)
public class MyServlet3 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setAttribute(&quot;name&quot;, &quot;zhangsan&quot;);
        req.setAttribute(&quot;name&quot;, &quot;lisi&quot;);
        req.removeAttribute(&quot;name&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="servletrequestlistener" tabindex="-1"><a class="header-anchor" href="#servletrequestlistener" aria-hidden="true">#</a> ServletRequestListener</h4>
<p><strong>requestDestroyed</strong>: 监听HttpServletRequest对象的销毁  项目中任何一个Request对象的销毁都会触发该方法的执行<br>
<strong>requestInitialized</strong>:监听HttpServletRequest对象的创建并初始化 项目中任何一个Request对象的创建并初始化都会触发该方法的执行</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class MyRequestListener implements ServletRequestListener{
    @Override
    public void requestDestroyed(ServletRequestEvent sre) {
        // 监听HttpServletRequest对象的销毁  项目中任何一个Request对象的销毁都会触发该方法的执行
        ServletRequest servletRequest = sre.getServletRequest();
        System.out.println(&quot;request&quot;+servletRequest.hashCode()+&quot;对象销毁了&quot;);
    }
    
    @Override
    public void requestInitialized(ServletRequestEvent sre) {
        // 监听HttpServletRequest对象的创建并初始化 项目中任何一个Request对象的创建并初始化都会触发该方法的执行
        ServletRequest servletRequest = sre.getServletRequest();
        System.out.println(&quot;request&quot;+servletRequest.hashCode()+&quot;对象初始化&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="servlerequestattributelistener" tabindex="-1"><a class="header-anchor" href="#servlerequestattributelistener" aria-hidden="true">#</a> ServleRequestAttributeListener</h4>
<p><strong>attributeAdded</strong>:任何一个Request对象中调用 setAttribute方法增加了数据都会触发该方法<br>
<strong>attributeRemoved</strong>:任何一个Request对象中调用 removeAttribute方法移除了数据都会触发该方法<br>
<strong>attributeReplaced</strong>:任何一个Request对象中调用 setAttribute方法修改了数据都会触发该方法</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class MyRequestListener implements ServletRequestAttributeListener {
    @Override
    public void attributeAdded(ServletRequestAttributeEvent srae) {
        // 任何一个Request对象中调用 setAttribute方法增加了数据都会触发该方法
        ServletRequest servletRequest = srae.getServletRequest();
        String name = srae.getName();
        Object value = srae.getValue();
        System.out.println(&quot;request&quot;+servletRequest.hashCode()+&quot;对象增加了数据:&quot;+name+&quot;=&quot;+value);
    }
    
    @Override
    public void attributeRemoved(ServletRequestAttributeEvent srae) {
       // 任何一个Request对象中调用 removeAttribute方法移除了数据都会触发该方法
        ServletRequest servletRequest = srae.getServletRequest();
        String name = srae.getName();
        Object value = srae.getValue();
        System.out.println(&quot;request&quot;+servletRequest.hashCode()+&quot;对象删除了数据:&quot;+name+&quot;=&quot;+value);
    }
    
    @Override
    public void attributeReplaced(ServletRequestAttributeEvent srae) {
        // 任何一个Request对象中调用 setAttribute方法修改了数据都会触发该方法
        ServletRequest servletRequest = srae.getServletRequest();
        String name = srae.getName();
        Object value = srae.getValue();
        Object newValue=servletRequest.getAttribute(name);
        System.out.println(&quot;request&quot;+servletRequest.hashCode()+&quot;对象增修改了数据:&quot;+name+&quot;=&quot;+value+&quot;设置为:&quot;+newValue);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="session域监听器-1" tabindex="-1"><a class="header-anchor" href="#session域监听器-1" aria-hidden="true">#</a> Session域监听器</h3>
<p>Session域共有四个监听器接口,分别是: <code v-pre>HttpSessionListener</code> <code v-pre>HttpSessionAttributeListener</code>  <code v-pre>HttpSessionBindingListener</code> <code v-pre>HttpSessionActivationListener</code></p>
<h4 id="httpsessionlistener" tabindex="-1"><a class="header-anchor" href="#httpsessionlistener" aria-hidden="true">#</a> HttpSessionListener</h4>
<p>处理session对象创建和销毁</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@WebListener
public class MySessionListener implements HttpSessionListener{
    @Override
    public void sessionCreated(HttpSessionEvent se) {
        System.out.println(&quot;任何一个Session对象创建&quot;);
    }
    @Override
    public void sessionDestroyed(HttpSessionEvent se) {
        System.out.println(&quot;任何一个Session对象的销毁&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="httpsessionattributelistener" tabindex="-1"><a class="header-anchor" href="#httpsessionattributelistener" aria-hidden="true">#</a> HttpSessionAttributeListener</h4>
<p>处理session域对象中的数据添加 修改 删除</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@WebListener
public class MySessionListener implements HttpSessionAttributeListener {
    @Override
    public void attributeAdded(HttpSessionBindingEvent se) {
        System.out.println(&quot;任何一个Session对象中添加了数据&quot;);
    }
    @Override
    public void attributeRemoved(HttpSessionBindingEvent se) {
        System.out.println(&quot;任何一个Session对象中移除了数据&quot;);
    }
    @Override
    public void attributeReplaced(HttpSessionBindingEvent se) {
        System.out.println(&quot;任何一个Session对象中修改了数据&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="httpsessionbindinglistener" tabindex="-1"><a class="header-anchor" href="#httpsessionbindinglistener" aria-hidden="true">#</a> HttpSessionBindingListener</h4>
<p>处理session对象监听器绑定和解绑定接口</p>
<p>HttpSessionListener 只要在web.xml中配置或者通过@WebListener注解就可以注册监听所有的Session对象. <strong>HttpSessionBindingListener 必须要通过setAttribute方法和某个session对象绑定之后,监听单独的某个Session对象</strong></p>
<p>绑定方法</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>session.setAttribute(&quot;mySessionBindingListener&quot;,new MySessionBindingListener())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>手动解绑</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>session.removeAttribute(&quot;mySessionBindingListener&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>监听器代码</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class MySessionBindingListener implements HttpSessionBindingListener {
	//绑定后监听
    @Override
    public void valueBound(HttpSessionBindingEvent event) {
        System.out.println(&quot;监听器和某个session对象绑定了&quot;);
    }
    // 解除绑定时触发
    @Override
    public void valueUnbound(HttpSessionBindingEvent event) {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font color="#ff0000">注意</font>: 如果发生如下情况,会触发<code v-pre>valueUnbound()</code>解绑方法的运行:<ol>
<li><code v-pre>session.invalidate();</code> 让session不可用</li>
<li>session到达最大不活动时间,session对象回收 ;</li>
<li><code v-pre>session.removeAttribute(&quot;mySessionBindingListener&quot;);</code>手动解除绑定</li>
</ol>
<h4 id="httpsessionactivationlistener" tabindex="-1"><a class="header-anchor" href="#httpsessionactivationlistener" aria-hidden="true">#</a> HttpSessionActivationListener</h4>
<p>处理session对象钝化和活化状态接口</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class MySessionActivationListener implements HttpSessionActivationListener {
    @Override
    public void sessionWillPassivate(HttpSessionEvent se) {
        System.out.println(&quot;session即将钝化&quot;);
    }
    @Override
    public void sessionDidActivate(HttpSessionEvent se) {
        System.out.println(&quot;session活化完毕&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application域监听器" tabindex="-1"><a class="header-anchor" href="#application域监听器" aria-hidden="true">#</a> Application域监听器</h3>
<p>Application域共有两个监听器接口,分别是: <code v-pre>ServletContextListener</code>  <code v-pre>ServletContextAttributeListener</code></p>
<h4 id="servletcontextlistener" tabindex="-1"><a class="header-anchor" href="#servletcontextlistener" aria-hidden="true">#</a> ServletContextListener</h4>
<p>处理application对象创建和销毁</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class MyApplicationListener implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        System.out.println(&quot;ServletContext创建并初始化了&quot;);
    }
    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        System.out.println(&quot;ServletContext销毁了&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="servletcontextattributelistener" tabindex="-1"><a class="header-anchor" href="#servletcontextattributelistener" aria-hidden="true">#</a> ServletContextAttributeListener</h4>
<p>处理application域对象中的数据添加 修改 删除</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class MyApplicationListener implements ServletContextAttributeListener {
    @Override
    public void attributeAdded(ServletContextAttributeEvent scae) {
        System.out.println(&quot;ServletContext增加了数据&quot;);
    }
    @Override
    public void attributeRemoved(ServletContextAttributeEvent scae) {
        System.out.println(&quot;ServletContext删除了数据&quot;);
    }
    @Override
    public void attributeReplaced(ServletContextAttributeEvent scae) {
        System.out.println(&quot;ServletContext修改了数据&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


