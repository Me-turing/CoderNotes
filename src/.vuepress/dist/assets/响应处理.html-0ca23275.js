import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as u,d as i,e,b as l,w as d,f as n}from"./app-a48529f7.js";const v="/CoderNotes/assets/image-20230611205626076-98826464.png",o="/CoderNotes/assets/image-20230611205616676-5ab51c79.png",c="/CoderNotes/assets/image-20230611205848612-90a0444d.png",m="/CoderNotes/assets/image-20230611205939251-c49e6dce.png",b={},p=n(`<h2 id="返回viod" tabindex="-1"><a class="header-anchor" href="#返回viod" aria-hidden="true">#</a> 返回Viod</h2><p>如果我们将Controller层中返回Viod方法</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class TestResponse {
    @RequestMapping(&quot;/testReturnVoid&quot;)
    public void testReturnVoid() throws Exception{
        System.out.println(&quot;AccountController 的 testForward 方法执行了。。。。&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并使用前端页面进行访问</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;testReturnVoid&quot;&gt;
   &lt;input type=&quot;submit&quot; value=&quot;testReturnVoid&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端访问后发现,浏览器出现500的错误,控制台可以直接输入方法中的代码<br><img src="`+v+'" alt="" loading="lazy"><br><img src="'+o+'" alt="" loading="lazy"></p><blockquote><p>由此可见 : 在SpringMVC中如果对于当前的控制单元，没有写对应的返回值，这个时候SpringMVC就会找和自己控制单元名称一致的页面展示,控制单元中的代码是可以正常访问的.</p></blockquote><p>如果在SpringMVC.xml中怕配置了视图解析器:<br><img src="'+c+'" alt="" loading="lazy"><br> 则前端展示的是404的页面<br><img src="'+m+`" alt="" loading="lazy"></p><h2 id="转发和重定向" tabindex="-1"><a class="header-anchor" href="#转发和重定向" aria-hidden="true">#</a> 转发和重定向</h2><h3 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h3><p>redirect.JSP</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;This is Redirect Page&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>forward.JSP</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;This is Forward Page&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="servletapi实现" tabindex="-1"><a class="header-anchor" href="#servletapi实现" aria-hidden="true">#</a> ServletAPI实现</h3><p>单元方法的返回值类型设置void。因为使用response对象在单元方法中直接对此次请求进行了响应，不再通过DispatcherServlet了，既然已经响应了，就不需要再给DispatcherServlet返回值了。</p><p>在单元方法上声明HttpServletResponse形参，来接收此次请求的response对象。</p><h4 id="请求转发" tabindex="-1"><a class="header-anchor" href="#请求转发" aria-hidden="true">#</a> 请求转发</h4><blockquote><p><code>request.getRequestDispatcher(&quot;目标页面地址&quot;).forward(request,response);</code></p></blockquote><p>Controller层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class TestResponse {
    @RequestMapping(&quot;/testForwardByServletAPI&quot;)
    public void testForwardByServletAPI(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher(&quot;/forward.jsp&quot;).forward(request,response);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestResponse.JSP</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;testForwardByServletAPI&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;testForwardByServletAPI&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向" aria-hidden="true">#</a> 重定向</h4><blockquote><p><code>request.getRequestDispatcher(&quot;目标页面地址&quot;).forward(request,response);</code></p></blockquote><p>Controller层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class TestResponse {
    @RequestMapping(&quot;/testRedirectByServletAPI&quot;)
    public void testRedirectByServletAPI(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.sendRedirect(request.getContextPath()+&quot;/redirect.jsp&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestResponse.JSP</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;testRedirectByServletAPI&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;testRedirectByServletAPI&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用关键字" tabindex="-1"><a class="header-anchor" href="#使用关键字" aria-hidden="true">#</a> 使用关键字</h3><h4 id="请求转发-forward关键字" tabindex="-1"><a class="header-anchor" href="#请求转发-forward关键字" aria-hidden="true">#</a> 请求转发 : forward关键字</h4><p>使用通过单元方法的返回值来告诉DispatcherServlet请求转发指定的资源,如果是请求转发，<strong>forward关键字可以省略不写的</strong></p><p>Controller层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class TestResponse {
    /*
     * 返回字符串告诉DispatcherServlet跳转的路径
     * 在路径之前放上一个forward: 关键字,就是请求转发
     * 如果路径前的关键字是forward,那么可以省略不写
     * */
    @RequestMapping(&quot;/testKeywordsByForward&quot;)
    public String testKeywordsByForward()  {
        return &quot;/forward.jsp&quot;;
        //return &quot;forward:/forward.jsp&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestResponse.JSP</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;testKeywordsByForward&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;testKeywordsByForward&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意 : 当前请求是,没有在视图解析器中配置前后缀的,需要注意搭配</p></blockquote><h4 id="请求转发-redirect关键字" tabindex="-1"><a class="header-anchor" href="#请求转发-redirect关键字" aria-hidden="true">#</a> 请求转发 : redirect关键字</h4><p>使用通过单元方法的返回值来告诉DispatcherServlet重定向指定的资源，<strong>注意这个redirect关键字不可以省去</strong></p><p>Controller层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class TestResponse {
    @RequestMapping(&quot;/testKeywordsByRedirect&quot;)
    public String testKeywordsByRedirect()  {
        return &quot;redirect:/redirect.jsp&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestResponse.JSP</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;testKeywordsByRedirect&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;testKeywordsByRedirect&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意 : 当前请求是,没有在视图解析器中配置前后缀的,需要注意搭配</p></blockquote><h3 id="使用view视图" tabindex="-1"><a class="header-anchor" href="#使用view视图" aria-hidden="true">#</a> 使用View视图</h3><blockquote><p>RedirectView中所做的操作，最终的实现是在renderMergedOutputModel中完成实现的，简单来说RedirectView实现了链接的重定向，并且将数据保存到FlashMap中，这样在跳转后的链接中可以获取一些数据.</p></blockquote><h4 id="请求转发-1" tabindex="-1"><a class="header-anchor" href="#请求转发-1" aria-hidden="true">#</a> 请求转发</h4><p>Controller层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class TestResponse {
    @RequestMapping(&quot;/testViewByForward&quot;)
    public View testViewByForward()  {
        return new InternalResourceView(&quot;/forward.jsp&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestResponse.JSP</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;testViewByForward&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;testViewByForward&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重定向-1" tabindex="-1"><a class="header-anchor" href="#重定向-1" aria-hidden="true">#</a> 重定向</h4><p>Controller层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class TestResponse {
    @RequestMapping(&quot;/testViewByRedirect&quot;)
    public View testViewByRedirect(HttpServletRequest request)  {
        return new RedirectView(request.getContextPath()+&quot;/redirect.jsp&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestResponse.JSP</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;testViewByRedirect&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;testViewByRedirect&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用modelandview" tabindex="-1"><a class="header-anchor" href="#使用modelandview" aria-hidden="true">#</a> 使用ModelAndView</h3><blockquote><p>ModelAndView中的Model代表模型，View代表视图，这个名字就很好地解释了该类的作用。业务处理器调用模型层处理完用户请求后，把结果数据存储在该类的model属性中，把要返回的视图信息存储在该类的view属性中，然后让该ModelAndView返回该Spring MVC框架。</p></blockquote><p>注意 : <code>.setViewName()</code>可以使用关键字进行处理 , <code> .setView()</code> 可以直接使用View视图进行处理</p><h4 id="请求转发-2" tabindex="-1"><a class="header-anchor" href="#请求转发-2" aria-hidden="true">#</a> 请求转发</h4><p>Controller层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class TestResponse {
    @RequestMapping(&quot;/testModelAndViewByForward&quot;)
    public ModelAndView testModelAndViewByForward()  {
        ModelAndView modelAndView = new ModelAndView();
        //modelAndView.setViewName(&quot;forward:/forward.jsp&quot;);
        modelAndView.setView(new InternalResourceView(&quot;/forward.jsp&quot;));
        return modelAndView;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestResponse.JSP</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;testModelAndViewByForward&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;testModelAndViewByForward&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重定向-2" tabindex="-1"><a class="header-anchor" href="#重定向-2" aria-hidden="true">#</a> 重定向</h4><p>Controller层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class TestResponse {
    @RequestMapping(&quot;/testModelAndViewByRedirect&quot;)
    public ModelAndView testModelAndViewByRedirect(HttpServletRequest request)  {
        ModelAndView modelAndView = new ModelAndView();
        //modelAndView.setViewName(&quot;redirect:/redirect.jsp&quot;);
        modelAndView.setView(new RedirectView(request.getContextPath()+&quot;/redirect.jsp&quot;));
        return modelAndView;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestResponse.JSP</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;testModelAndViewByRedirect&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;testModelAndViewByRedirect&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应json数据" tabindex="-1"><a class="header-anchor" href="#响应json数据" aria-hidden="true">#</a> 响应JSON数据</h2><p>当浏览器发起一个ajax请求给服务器，服务器调用对应的单元方法处理ajax请求。而ajax的请求在被处理完成后，其处理结果需要直接响应。而目前我们在单元方法中响应ajax请求，使用的是response对象，需要我们自己将要响应的数据转换为json字符串响应，比较麻烦，而我们一直希望在单元方法中无论是否是ajax请求，都使用return语句来完成资源的响应，怎么办？</p><p>既然我们希望使用单元方法的返回值来响应ajax请求的处理结果，而目前DispatcherServlet的底层会将单元方法的返回值按照请求转发或者重定向来处理，所以就需要我们告诉DispatcherServlet，<strong>单元方法的返回值不要按照请求转发或者重定向处理，而是按照直接响应处理，将单元方法的返回值直接响应给浏览器</strong>。</p><h3 id="导入包" tabindex="-1"><a class="header-anchor" href="#导入包" aria-hidden="true">#</a> 导入包</h3>`,73),g=n(`<p>接下来我们将使用jackson包来处理</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;dependency&gt;
	&lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;
	&lt;artifactId&gt;jackson-databind&lt;/artifactId&gt;
	&lt;version&gt;2.12.1&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-responsebody返回json" tabindex="-1"><a class="header-anchor" href="#使用-responsebody返回json" aria-hidden="true">#</a> 使用@ResponseBody返回JSON</h3><blockquote><p>把我们要响应的数据直接return即可，返回值类型为要return的数据类型。</p></blockquote><p>Controller层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class TestResponse {
    /*
     * @ResponseBody
     * 1方法的返回值不在作为界面跳转依据,而已直接作为返回的数据
     * 2将方法的返回的数据自动使用ObjectMapper转换为JSON
     */
    @ResponseBody
    @RequestMapping(&quot;/testAjax&quot;)
    public Pets testAjax(Person p) {
        System.out.println(p);
        Pets pet =new Pets(&quot;Tom&quot;,&quot;cat&quot;);
        return pet;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端使用ajax请求" tabindex="-1"><a class="header-anchor" href="#前端使用ajax请求" aria-hidden="true">#</a> 前端使用Ajax请求</h3>`,7),h=i("br",null,null,-1),q=n(`<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;script src=&quot;static/js/jquery-3.5.1.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        $(function (){
            $(&quot;#testAjaxBtn&quot;).click(function (){
                $.get(&quot;testAjax&quot;,{pname:&quot;Tome&quot;,page:&quot;18&quot;},function (result){
                    console.log(result)
                });
            })
        })
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;input type=&quot;button&quot; value=&quot;testAjax&quot; id=&quot;testAjaxBtn&quot;&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="restcontroller注解" tabindex="-1"><a class="header-anchor" href="#restcontroller注解" aria-hidden="true">#</a> @RestController注解</h2><blockquote><p>相当于@Controller+@ResponseBody两个注解的结合，返回json数据不需要在方法前面加@ResponseBody注解了，但使用@RestController这个注解，就不能返回jsp,html页面，视图解析器无法解析jsp,html页面</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RestController
public class TestResponse {
    /*
     * @ResponseBody
     * 1方法的返回值不在作为界面跳转依据,而已直接作为返回的数据
     * 2将方法的返回的数据自动使用ObjectMapper转换为JSON
     */
    @RequestMapping(&quot;/testAjax&quot;)
    public Pets testAjax(Person p) {
        System.out.println(p);
        Pets pet =new Pets(&quot;Tom&quot;,&quot;cat&quot;);
        return pet;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function w(y,S){const t=a("RouterLink");return r(),u("div",null,[p,i("p",null,[e("在之前JavaEE的学习中我们使用了GSON包来处理,详见: "),l(t,{to:"/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/06_Ajax/02_%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F/%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F.html#GSON%E5%B7%A5%E5%85%B7%E7%B1%BB%E7%9A%84%E4%BD%BF%E7%94%A8"},{default:d(()=>[e("GSON工具类的使用")]),_:1})]),g,i("p",null,[e("更多Ajax的学习可以回顾: "),l(t,{to:"/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/06_Ajax/Ajax.html"},{default:d(()=>[e("Ajax")]),_:1}),h,e(" 注意:别忘了导入JQuery文件!!!")]),q])}const R=s(b,[["render",w],["__file","响应处理.html.vue"]]);export{R as default};
