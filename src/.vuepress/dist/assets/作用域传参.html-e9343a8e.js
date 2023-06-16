import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o,c,d as e,e as s,b as t,w as l,f as a}from"./app-a48529f7.js";const u="/CoderNotes/assets/image-20230613164150016-a16c2d44.png",v="/CoderNotes/assets/image-20230613172640687-6a1a211b.png",p="/CoderNotes/assets/image-20230613172703542-a22682fd.png",m="/CoderNotes/assets/image-20230613172730365-3ad5588c.png",g="/CoderNotes/assets/image-20230613173936216-800342e0.png",b="/CoderNotes/assets/image-20230613173730067-58c2ce37.png",h="/CoderNotes/assets/image-20230613174607528-e3676fe3.png",q="/CoderNotes/assets/image-20230613174735262-6f42cd71.png",S={},_=e("h2",{id:"回顾作用域",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#回顾作用域","aria-hidden":"true"},"#"),s(" 回顾作用域")],-1),A=a('<figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="pagecontext对象" tabindex="-1"><a class="header-anchor" href="#pagecontext对象" aria-hidden="true">#</a> PageContext对象</h3><p>作用域范围: 当前jsp页面内有效</p><h3 id="request对象" tabindex="-1"><a class="header-anchor" href="#request对象" aria-hidden="true">#</a> Request对象</h3><p>作用域范围: 一次请求内。<br> 作用: 解决了一次请求内的资源的数据共享问题</p><h3 id="session对象" tabindex="-1"><a class="header-anchor" href="#session对象" aria-hidden="true">#</a> Session对象</h3><p>作用域范围: 一次会话内有效。<br> 说明: 浏览器不关闭,并且后台的session不失效，在任意请求中都可以获取到同一个session对象。<br> 作用: 解决了一个用户不同请求的数据共享问题。</p><h3 id="application-servletcontext-对象" tabindex="-1"><a class="header-anchor" href="#application-servletcontext-对象" aria-hidden="true">#</a> Application(ServletContext)对象</h3><p>作用域范围: 一次会话内有效。<br> 说明: 浏览器不关闭,并且后台的session不失效，在任意请求中都可以获取到同一个session对象。<br> 作用: 解决了一个用户不同请求的数据共享问题。</p><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>',10),E=a(`<p>新增showDataPage.jsp</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;table border=&quot;1&quot; cellspacing=&quot;0&quot;&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;td&gt;Scope&lt;/td&gt;
            &lt;td&gt;message&lt;/td&gt;
            &lt;td&gt;uname&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;requestScope&lt;/td&gt;
            &lt;td&gt;\${requestScope.message}&lt;/td&gt;
            &lt;td&gt;\${requestScope.users[0]}&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;sessionScope&lt;/td&gt;
            &lt;td&gt;\${sessionScope.message}&lt;/td&gt;
            &lt;td&gt;\${sessionScope.users[0]}&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;applicationScope&lt;/td&gt;
            &lt;td&gt;\${applicationScope.message}&lt;/td&gt;
            &lt;td&gt;\${applicationScope.users[0]}&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;requestParam&lt;/td&gt;
            &lt;td&gt;\${param.message}&lt;/td&gt;
            &lt;td&gt;\${applicationScope.users[0]}&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="传统方式传递参数" tabindex="-1"><a class="header-anchor" href="#传统方式传递参数" aria-hidden="true">#</a> 传统方式传递参数</h2><blockquote><p>注意 : 在SpringMVC中,request,session 这两个域直接放在参数列表上即可,SpringMVC就可以给我们注入,ServletContext对象(application域) 不能直接放在参数列表上的</p></blockquote><p>构建ScopeController.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class ScopeController {
    @Autowired
    UserService userService;
    @RequestMapping(&quot;/setScopeByServlet&quot;)
    public String setScopeByServlet(HttpServletRequest request, HttpSession session){
        List&lt;User&gt; allUser = userService.getAllUser();
        //存储到request域中:本次请求期间有效
        request.setAttribute(&quot;message&quot;, &quot;reqMessage&quot;);
        request.setAttribute(&quot;users&quot;, allUser);
        //存储到session域中:本次会话期间有效
        session.setAttribute(&quot;message&quot;, &quot;sessionMessage&quot;);
        session.setAttribute(&quot;users&quot;, allUser);
        //存储到application域中:本次服务运行期间都有效
        ServletContext application = request.getServletContext();
        application.setAttribute(&quot;message&quot;, &quot;applicationMessage&quot;);
        application.setAttribute(&quot;users&quot;, allUser);
        return &quot;/showDataPage&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试直接访问: <code>http://localhost:8080/SpringMVC_02/setScopeByServlet</code><br><img src="`+v+'" alt="" loading="lazy"><br><strong>我们可以看到requestScope/sessionScope/applicationScope 都正常获取数据</strong></p><p>测试直接访问: <code>http://localhost:8080/SpringMVC_02/showDataPage.jsp</code><br><img src="'+p+'" alt="" loading="lazy"><br><strong>我们可以看到sessionScope/applicationScope 都正常获取数据,说明requestScope仅限于单次请求</strong></p><p>测试关掉浏览器后,再直接访问: <code>http://localhost:8080/SpringMVC_02/showDataPage.jsp</code><br><img src="'+m+`" alt="" loading="lazy"><br><strong>我们可以看到applicationScope 都正常获取数据,说明sessionScope仅限于单次会话</strong></p><h2 id="使用model传递参数" tabindex="-1"><a class="header-anchor" href="#使用model传递参数" aria-hidden="true">#</a> 使用Model传递参数</h2><h3 id="请求转发" tabindex="-1"><a class="header-anchor" href="#请求转发" aria-hidden="true">#</a> 请求转发</h3><blockquote><p>model对象<strong>使用addAttribute存储数据</strong>,主要是对请求域传递数据进行了API上的封装降低controller和Servlet之间的耦合度.</p></blockquote><p>构建ScopeController.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class ScopeController {
    @Autowired
    UserService userService;
    @RequestMapping(&quot;/setScopeByModel&quot;)
    public String setScopeByModel(Model model){
        List&lt;User&gt; allUser = userService.getAllUser();
        //存储到model中:本次请求期间有效
        model.addAttribute(&quot;message&quot;, &quot;reqMessage&quot;);
        model.addAttribute(&quot;users&quot;, allUser);
        return &quot;/showDataPage&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试直接访问: <code>http://localhost:8080/SpringMVC_02/setScopeByModel</code><br><img src="`+g+`" alt="" loading="lazy"><br> 我们看到: <strong>只有requestScope 正常获取数据</strong></p><h3 id="重定向的特殊问题" tabindex="-1"><a class="header-anchor" href="#重定向的特殊问题" aria-hidden="true">#</a> 重定向的特殊问题</h3><p>尝试修改ScopeController.java为重定向</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class ScopeController {
    @Autowired
    UserService userService;
    @RequestMapping(&quot;/setScopeByModel&quot;)
    public String setScopeByModel(Model model){
        List&lt;User&gt; allUser = userService.getAllUser();
        //存储到model中:本次请求期间有效
        model.addAttribute(&quot;message&quot;, &quot;reqMessage&quot;);
        model.addAttribute(&quot;users&quot;, allUser);
        return &quot;redirect:/showDataPage.jsp&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试直接访问: <code>http://localhost:8080/SpringMVC_02/setScopeByModel</code><br><img src="`+b+`" alt="" loading="lazy"><br> 我们发现: <strong>当前requestScope/sessionScope/applicationScope 都无法获取数据,但由于Url中存在参数,requestParam获取到了值</strong></p><blockquote><p>注意 : <strong>重定向下,没法使用model传递域中的数据</strong>, model中的字符串类型的键值对信息会转换为请求参数,转发给目标组件</p></blockquote><h2 id="使用modelandview传递参数" tabindex="-1"><a class="header-anchor" href="#使用modelandview传递参数" aria-hidden="true">#</a> 使用ModelAndView传递参数</h2><h3 id="请求转发-1" tabindex="-1"><a class="header-anchor" href="#请求转发-1" aria-hidden="true">#</a> 请求转发</h3><p>ScopeController.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class ScopeController {
    @Autowired
    UserService userService;
    @RequestMapping(&quot;/setScopeByModelAndView&quot;)
    public ModelAndView setScopeByModelAndView() {
        List&lt;User&gt; allUser = userService.getAllUser();
        ModelAndView modelAndView = new ModelAndView();
        //设置Model
        Map&lt;String, Object&gt; model = modelAndView.getModel();
        model.put(&quot;message&quot;, &quot;reqMessage&quot;);
        model.put(&quot;users&quot;, allUser);
        //设置视图
        modelAndView.setViewName(&quot;/showDataPage&quot;);
        return modelAndView;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),C={href:"http://localhost:8080/SpringMVC_02/setScopeByModelAndView",target:"_blank",rel:"noopener noreferrer"},M=e("br",null,null,-1),B=e("img",{src:h,alt:"",loading:"lazy"},null,-1),x=e("h3",{id:"重定向问题的特殊问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#重定向问题的特殊问题","aria-hidden":"true"},"#"),s(" 重定向问题的特殊问题")],-1),f=e("p",null,[s("同 "),e("a",{href:"#%E9%87%8D%E5%AE%9A%E5%90%91%E7%9A%84%E7%89%B9%E6%AE%8A%E9%97%AE%E9%A2%98"},"上述Moel传递时的重定向问题")],-1),V=e("figure",null,[e("img",{src:q,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function w(y,U){const i=n("RouterLink"),d=n("ExternalLinkIcon");return o(),c("div",null,[_,e("p",null,[s("在之前的学习中,我们了解了作用域的使用,可以回顾一下: "),t(i,{to:"/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/03_Servlet/10_%E5%9F%9F%E5%AF%B9%E8%B1%A1/%E5%9F%9F%E5%AF%B9%E8%B1%A1.html"},{default:l(()=>[s("域对象")]),_:1})]),A,e("p",null,[s("当前项目运行在上一个案例: "),t(i,{to:"/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/09_%E6%95%B4%E5%90%88SpringMVC/%E6%95%B4%E5%90%88SpringMVC.html"},{default:l(()=>[s("整合SpringMVC")]),_:1}),s(" 的环境上")]),E,e("p",null,[s("测试直接访问: `"),e("a",C,[s("http://localhost:8080/SpringMVC_02/setScopeByModelAndView"),t(d)]),M,B]),x,f,V])}const P=r(S,[["render",w],["__file","作用域传参.html.vue"]]);export{P as default};
