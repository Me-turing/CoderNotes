import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as r,f as i}from"./app-54a62cbe.js";const a="/coder-notes/assets/image-20230531095231972-a527b926.png",t="/coder-notes/assets/image-20230531095740723-529ce2ce.png",s="/coder-notes/assets/image-20230531101153377-d1275a89.png",o={},l=i('<h2 id="执行时序图" tabindex="-1"><a class="header-anchor" href="#执行时序图" aria-hidden="true">#</a> 执行时序图</h2><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="springmvc的执行流程" tabindex="-1"><a class="header-anchor" href="#springmvc的执行流程" aria-hidden="true">#</a> SpringMVC的执行流程</h2><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>用法发出请求,并被<strong>DispatcherServlet</strong>拦截</li><li><strong>DispatcherServlet</strong>查询<strong>HandlerMapping处理器映射器</strong>中当前请求的位置</li><li><strong>DispatcherServlet</strong>根据<strong>HandlerMapping处理器映射器</strong>反馈的位置,请求<strong>HandlerAdapter处理器适配器</strong>执行对应的Controller处理单元</li><li><strong>HandlerAdapter处理器适配器</strong>执行<strong>Handler处理器</strong>,并接收到<strong>ModelAndView对象</strong>返回给<strong>DispatcherServlet</strong></li><li><strong>DispatcherServlet</strong>再次携带ModelAndView对象请求<strong>ViewResolver视图解析器</strong>解析</li><li><strong>ViewResolver视图解析器</strong>返回解析后的View对象</li><li><strong>DispatcherServlet</strong>将View对象渲染View对象为视图层,并响应给前端用户</li></ol><h2 id="springmvc的组件" tabindex="-1"><a class="header-anchor" href="#springmvc的组件" aria-hidden="true">#</a> SpringMVC的组件</h2><h3 id="dispatcherservlet-前端控制器" tabindex="-1"><a class="header-anchor" href="#dispatcherservlet-前端控制器" aria-hidden="true">#</a> DispatcherServlet 前端控制器</h3><p>用户请求到达前端控制器，它就相当于 mvc 模式中的 c，<br><strong>dispatcherServlet 是整个流程控制的中心</strong>，由它调用其它组件处理用户的请求，</p><p>dispatcherServlet 的存在降低了组件之间的耦合性。</p><h3 id="handlermapping-处理器映射器" tabindex="-1"><a class="header-anchor" href="#handlermapping-处理器映射器" aria-hidden="true">#</a> HandlerMapping 处理器映射器</h3><p><strong>HandlerMapping 负责根据用户请求找到 Handler 即处理器</strong></p><p>SpringMVC 提供了不同的映射器实现不同的 映射方式，例如：配置文件方式，实现接口方式，注解方式等。</p><h3 id="handladapter-处理器适配器" tabindex="-1"><a class="header-anchor" href="#handladapter-处理器适配器" aria-hidden="true">#</a> HandlAdapter 处理器适配器</h3><p>通过 HandlerAdapter 对处理器进行执行，这是适配器模式的应用，通过扩展适配器可以对更多类型的处理器进行执行</p><figure><img src="'+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>因为请求中的参数以及Controller处理单元返回的参数有多种格式,所以需要处理器适配器对此进行适配处理</p><h3 id="handler-处理器" tabindex="-1"><a class="header-anchor" href="#handler-处理器" aria-hidden="true">#</a> Handler 处理器</h3><p><strong>自己定义的Controller处理单元</strong></p><p>它就是我们开发中要编写的具体业务控制器。由 <strong>HandlAdapter 处理器适配器</strong> 把用户请求转发到 Handler。由 Handler 对具体的用户请求进行处理。</p><h3 id="view-resolver-视图解析器" tabindex="-1"><a class="header-anchor" href="#view-resolver-视图解析器" aria-hidden="true">#</a> View Resolver 视图解析器</h3><p><strong>View Resolver 负责将处理结果生成 View 视图</strong></p><ol><li>View Resolver 首先根据逻辑视图名解析成物理视图名 即具体的页面地址</li><li>再生成 View 视图对象</li><li>最后对 View 进行渲染将处理结果通过页面展示给用户</li></ol><h3 id="view-视图" tabindex="-1"><a class="header-anchor" href="#view-视图" aria-hidden="true">#</a> View 视图</h3><p>SpringMVC 框架提供了很多的 View 视图类型的支持，包括：jstlView、freemarkerView、pdfView等。</p><p>我们最常用的视图就是 jsp。</p><p>一般情况下需要通过页面标签或页面模版技术将模型数据通过页面展示给用户，需要由程序员根据业务需求开 发具体的页面。</p><h2 id="handlermapping与handladapter" tabindex="-1"><a class="header-anchor" href="#handlermapping与handladapter" aria-hidden="true">#</a> HandlerMapping与HandlAdapter</h2><h3 id="为什么建议配置" tabindex="-1"><a class="header-anchor" href="#为什么建议配置" aria-hidden="true">#</a> 为什么建议配置</h3><p>在之前的springmvc.xml的配置中,我们并没有配置HandlerMapping与HandlAdapter,但是也是在正常使用的.但是这样子我们并不推荐,会导致性能的降低:</p><blockquote><p>如果没有在springMvc.xml中配置处理器映射器和处理器适配器, 默认<strong>每次请求都会去找DispatcherServlet.properties 配置文件</strong>, 去里面的处理器映射器列表和处理器适配器列表中, 逐个匹配, 找到对应类型的执行</p></blockquote><blockquote><p>如果在springMvc.xml 中显示的配置了处理器映射器和处理器适配器就<strong>会直接执行</strong>不会去找DispatcherServlet.properties配置文件, 就会增强系统的运行速度.</p></blockquote><h3 id="配置方式" tabindex="-1"><a class="header-anchor" href="#配置方式" aria-hidden="true">#</a> 配置方式</h3><h4 id="手动配置" tabindex="-1"><a class="header-anchor" href="#手动配置" aria-hidden="true">#</a> 手动配置</h4><p>在springmvc.xml文件中新增RequestMappingHandlerMapping与RequestMappingHandlerAdapter的bean注入</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;!--配置处理器映射器--&gt;
&lt;bean class=&quot;org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping&quot; /&gt;
&lt;!--配置处理器适配器--&gt;
&lt;bean class=&quot;org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下:</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
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

    &lt;!--配置视图解析器--&gt;
    &lt;bean class=&quot;org.springframework.web.servlet.view.InternalResourceViewResolver&quot;&gt;
        &lt;property name=&quot;prefix&quot; value=&quot;/view/&quot;  &gt;&lt;/property&gt;
        &lt;property name=&quot;suffix&quot; value=&quot;.jsp&quot;  &gt;&lt;/property&gt;
    &lt;/bean&gt;
    &lt;!--配置处理器映射器--&gt;
    &lt;bean class=&quot;org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping&quot; /&gt;
    &lt;!--配置处理器适配器--&gt;
    &lt;bean class=&quot;org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter&quot; /&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自动配置" tabindex="-1"><a class="header-anchor" href="#自动配置" aria-hidden="true">#</a> 自动配置</h4><p>使 用 <code>&lt;mvc:annotation-driven&gt; </code>自动加载 <strong>RequestMappingHandlerMapping</strong> （处理映射器） 和 <strong>RequestMappingHandlerAdapter</strong> （ 处 理 适 配 器 ） ， 可 用 在 SpringMVC.xml 配 置 文 件 中 使 用 <code>&lt;mvc:annotation-driven&gt;</code>替代注解处理器和适配器的配置。</p><blockquote><p>注意 : 需要先 新增mvc的声明空间</p></blockquote><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
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
    &lt;!-- 包扫描 --&gt;
    &lt;context:component-scan base-package=&quot;com.meturing&quot; /&gt;
    &lt;!--配置视图解析器--&gt;
    &lt;bean class=&quot;org.springframework.web.servlet.view.InternalResourceViewResolver&quot;&gt;
        &lt;property name=&quot;prefix&quot; value=&quot;/view/&quot;  &gt;&lt;/property&gt;
        &lt;property name=&quot;suffix&quot; value=&quot;.jsp&quot;  &gt;&lt;/property&gt;
    &lt;/bean&gt;
    &lt;!--自动加载处理映射器和处理器适配器--&gt;
    &lt;mvc:annotation-driven /&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当配置了<code>&lt;mvc:annotation-driven&gt; </code> 后，Spring就知道了我们启用注解驱动。然后Spring通过<code>&lt;mvc:annotation-driven&gt; </code> 标签的配置，会自动为我们将扫描到的<code>@Component</code>，<code>@Controller</code>，<code>@Service</code>，<code>@Repository</code>等注解标记的组件注册到工厂中，来处理我们的请求,这个时候接收返回json数据、参数验证、统一异常等功能。</p><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><blockquote><p>HandlerMapping的实现类的作用 :<br> 实现类RequestMappingHandlerMapping，它会处理@RequestMapping 注解，并将其注册到请求映射表中。</p></blockquote><blockquote><p>HandlerAdapter的实现类的作用 :<br> 实现类RequestMappingHandlerAdapter，则是处理请求的适配器，确定调用哪个类的哪个方法，并且构造方法参数，返回值。</p></blockquote>`,45),d=[l];function p(c,g){return n(),r("div",null,d)}const u=e(o,[["render",p],["__file","执行流程与三大组件.html.vue"]]);export{u as default};
