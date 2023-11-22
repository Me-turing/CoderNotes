import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as l,d as o,e as n,b as d,w as r,f as e}from"./app-71f45f98.js";const p="/CoderNotes/assets/image-20230629134117354-db9442ae.png",c="/CoderNotes/assets/image-20230629134519295-ca94ce58.png",u="/CoderNotes/assets/image-20230629134519255-3ade67bb.gif",v="/CoderNotes/assets/image-20230629154556862-28a0028d.png",m="/CoderNotes/assets/image-20230629155209472-43532ee3.png",g="/CoderNotes/assets/image-20230629163525153-57204d3a.png",b="/CoderNotes/assets/image-20230629163525188-18cfd196.gif",h="/CoderNotes/assets/image-202306291635251881-e5f7ec9e.gif",k="/CoderNotes/assets/image-20230629174148209-833825d6.png",q="/CoderNotes/assets/image-20230629175715847-366a7999.png",f="/CoderNotes/assets/image-20230629175929349-b52ba14d.png",x="/CoderNotes/assets/image-20230629181136970-98631f93.png",S={},M=e('<h2 id="初始化环境" tabindex="-1"><a class="header-anchor" href="#初始化环境" aria-hidden="true">#</a> 初始化环境</h2><p>为了接下来的学习,我们简单创建一个登录的实例<br><img src="'+p+'" alt="" loading="lazy"></p><h3 id="项目配置" tabindex="-1"><a class="header-anchor" href="#项目配置" aria-hidden="true">#</a> 项目配置</h3>',3),I=e('<p>需要注意的是,SpringMVC.xml中试图解析器对于页面请求转发与重定向的路径影响<br><img src="'+c+`" alt="" loading="lazy"></p><p>其他不在赘述配置方案</p><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><h4 id="前端页面" tabindex="-1"><a class="header-anchor" href="#前端页面" aria-hidden="true">#</a> 前端页面</h4><p>index.jsp</p><div class="language-Jsp line-numbers-mode" data-ext="Jsp"><pre class="language-Jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;login&quot; method=&quot;post&quot;&gt;
   userName :  &lt;input type=&quot;text&quot; name=&quot;userName&quot;&gt;&lt;br/&gt;
    passWord :  &lt;input type=&quot;text&quot; name=&quot;passWord&quot;&gt;&lt;br/&gt;
    &lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>success.jsp</p><div class="language-Jsp line-numbers-mode" data-ext="Jsp"><pre class="language-Jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Welcome to login ~&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fail.jsp</p><div class="language-Jsp line-numbers-mode" data-ext="Jsp"><pre class="language-Jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Login failed!!!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="后端代码" tabindex="-1"><a class="header-anchor" href="#后端代码" aria-hidden="true">#</a> 后端代码</h4><p>UserInfo.java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@ToString</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserInfo</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LoginController.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class LoginController {
    @Autowired
    private LoginService loginServiceImpl;
    @RequestMapping(&quot;/login&quot;)
    public String login(String userName, String passWord){
        UserInfo userInfo = loginServiceImpl.login(userName, passWord);
        Optional&lt;UserInfo&gt; optionalUserInfo = Optional.ofNullable(userInfo);
        if (optionalUserInfo.isPresent()){
            return &quot;success&quot;;
        }
        return &quot;fail&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LoginService.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface LoginService {
    UserInfo login(String userName, String passWord);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LoginServiceImpl.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Service
public class LoginServiceImpl implements LoginService {
    @Autowired
    private LoginMapper loginMapper;
    @Override
    public UserInfo login(String userName, String passWord) {
        return loginMapper.login(userName,passWord);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LoginMapper.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Mapper
public interface LoginMapper {
    UserInfo login(String userName, String passWord);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LoginMapper.xml</p><div class="language-Xml line-numbers-mode" data-ext="Xml"><pre class="language-Xml"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
&lt;!DOCTYPE mapper
        PUBLIC &quot;-//mybatis.org//DTDMapper3.0//EN&quot;
        &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;
&lt;mapper namespace=&quot;com.meturing.mapper.LoginMapper&quot;&gt;
    &lt;select id=&quot;login&quot; resultType=&quot;com.meturing.pojo.UserInfo&quot;&gt;
        select * from userInfo where name = #{param1} and password = #{param2}
    &lt;/select&gt;
&lt;/mapper&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试效果" tabindex="-1"><a class="header-anchor" href="#测试效果" aria-hidden="true">#</a> 测试效果</h3><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h2><h3 id="拦截器与过滤器" tabindex="-1"><a class="header-anchor" href="#拦截器与过滤器" aria-hidden="true">#</a> 拦截器与过滤器</h3><h4 id="为什么使用拦截器" tabindex="-1"><a class="header-anchor" href="#为什么使用拦截器" aria-hidden="true">#</a> 为什么使用拦截器</h4><p>在之前学习JAVAWEB 的时候，我们学习了过滤器的知识。过滤器的作用是保护请求的服务器资源，在请求资源被执行之前，如果请求地址符合拦截范围，则会先执行过滤器。</p><p><strong>过滤器的执行时机，是在Servlet之前执行的</strong>。但是在使用了SpringMVC后，Servlet只有一个了，也就是DisptcherServlet。那么，如果我们仍然使用过滤器来完成请求的拦截，因为过滤器是在Servlet之前执行的，就会造成，过滤器会拦截DispatcherServlet所有的请求。</p><p>所以, 过滤器通常用来对请求资源的管控/编码继续处理,是全局性的. 如果需要细致到请求中精细的处理则需要使用拦截器.</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>因为 <strong>拦截器位于SpringMVC前端控制器DispatcherServlet之后进行处理操作:</strong></p><ol><li>请求执行Handler之前</li><li>获取ModelAndView之前</li><li>返回渲染视图之前</li></ol><h4 id="拦截器与过滤器的区别" tabindex="-1"><a class="header-anchor" href="#拦截器与过滤器的区别" aria-hidden="true">#</a> 拦截器与过滤器的区别</h4><ol><li>拦截器SpringMVC的，而过滤器是servlet的。</li><li>拦截器不依赖与servlet容器,由spring容器初始化，过滤器依赖与servlet容器,由servlet容器初始化。</li><li>拦截器只能对action请求起作用，而过滤器则可以对几乎所有的请求起作用。</li><li>拦截器可以访问action上下文、值栈里的对象，而过滤器不能访问。</li><li>在action的生命周期中，拦截器可以多次被调用，而过滤器只能在容器初始化时被调用一次。</li><li>拦截器可以获取IOC容器中的各个bean，而过滤器就不太方便，这点很重要，在拦截器里注入一个service，可以调用业务逻辑。</li></ol><blockquote><p>action请求是指,实际业务中需要逻辑性处理的请求,而非静态资源请求</p></blockquote><h3 id="拦截器的使用" tabindex="-1"><a class="header-anchor" href="#拦截器的使用" aria-hidden="true">#</a> 拦截器的使用</h3><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Spring MVC中的拦截器（Interceptor）类似于Servlet中的过滤器（Filter），它主要用于拦截用户请求并作相应的处理。例如通过拦截器可以进行权限验证、记录请求信息的日志、判断用户是否登录等。</p><h4 id="定义方式" tabindex="-1"><a class="header-anchor" href="#定义方式" aria-hidden="true">#</a> 定义方式</h4><p>要使用Spring MVC中的拦截器，就需要对拦截器类进行定义和配置。通常拦截器类可以通过两种方式来定义:</p><ol><li>通过<strong>实现HandlerInterceptor接口</strong>，或继承HandlerInterceptor接口的实现类（如HandlerInterceptorAdapter）来定义。</li><li>通过<strong>实现WebRequestInterceptor接口</strong>，或继承WebRequestInterceptor接口的实现类来定义。</li></ol><h4 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码" aria-hidden="true">#</a> 实现代码</h4><p>新增<code>com.meturing.interceptor.LoginInterceptor.java</code>实现<code>HandlerInterceptor接口</code>,重写<code>preHandle</code> / <code> postHandle</code> / <code>afterCompletion</code> 方法</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class LoginInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        /*在请求到达我们定义的handler之前工作的*/
        System.out.println(&quot;preHandle run~&quot;);
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        /*handler 处理单元返回ModelAndView 时候进行 拦截*/
        System.out.println(&quot;postHandle run~&quot;);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
         /*页面渲染完毕,但是还没有给浏览器响应数据的时候*/
        System.out.println(&quot;afterCompletion run~&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改SpringMVC.xml,添加注册拦截器</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>    &lt;!--注册拦截器--&gt;
    &lt;mvc:interceptors&gt;
        &lt;mvc:interceptor&gt;
            &lt;mvc:mapping path=&quot;/success&quot;/&gt;
            &lt;bean id=&quot;loginInterceptor&quot; class=&quot;com.meturing.interceptor.LoginInterceptor&quot;&gt;&lt;/bean&gt;
        &lt;/mvc:interceptor&gt;
    &lt;/mvc:interceptors&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LoginController.java 新增转发</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RequestMapping(&quot;/success&quot;)
public String success(){
	return &quot;success&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改success.jsp,新增Java代码打开时输出</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Welcome to login ~&lt;/h1&gt;
&lt;% System.out.println(&quot;Welcome to login ~&quot;); %&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><p>访问 <code>http://localhost:8080/SpringMVC_04/success</code></p><figure><img src="`+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当我们正常登录后,发现拦截器中的语句正常输出了.</p><h3 id="方法详解" tabindex="-1"><a class="header-anchor" href="#方法详解" aria-hidden="true">#</a> 方法详解</h3><h4 id="prehandle" tabindex="-1"><a class="header-anchor" href="#prehandle" aria-hidden="true">#</a> preHandle</h4><p>执行时间 : 进入控制单元方法之前执行</p><p>如何调用 : 按拦截器定义顺序调用</p><p>实际应用: 如果程序员决定该拦截器对请求进行拦截处理后还要调用其他的拦截器，或者是业务处理器去 进行处理，则返回 true。 如果程序员决定不需要再调用其他的组件去处理请求，则返回 false。</p><p>参数详解 :</p><ul><li><code>HttpServletRequest arg0</code> 拦截的请求的request对象</li><li><code>HttpServletResponse arg1</code> 拦截的请求的response对象</li><li><code>Object arg2</code> 封存了单元方法对象的HandleMethod对象</li></ul><h5 id="使用案例" tabindex="-1"><a class="header-anchor" href="#使用案例" aria-hidden="true">#</a> 使用案例</h5><p>我们可以通过上述案例来使用preHandle方法对登录校验,实现如下功能:</p><ol><li>如果用户访问index.jsp页面,成功登录,则本次会话可以直接访问success页面</li><li>如果用户未登录直接访问success页面则直接跳转至index页面等待登录</li></ol><p>如下所示:<br><img src="'+b+`" alt="" loading="lazy"></p><p>实现步骤:</p><ul><li>修改登录代码,登录成功将用户信息存放至session域中</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RequestMapping(&quot;/login&quot;)
public String login(String userName, String passWord, HttpSession session){
	UserInfo userInfo = loginServiceImpl.login(userName, passWord);
	Optional&lt;UserInfo&gt; optionalUserInfo = Optional.ofNullable(userInfo);
	if (optionalUserInfo.isPresent()){
		session.setAttribute(&quot;userInfo&quot;,userInfo);
		return &quot;success&quot;;
	}
	return &quot;fail&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改拦截器,访问success时,判断session域中是否存在用户信息,否则拦截并重定向登录页</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override
public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
	/*在请求到达我们定义的handler之前工作的*/
	System.out.println(&quot;preHandle run~&quot;);
	UserInfo userInfo = (UserInfo) request.getSession().getAttribute(&quot;userInfo&quot;);
	Optional&lt;UserInfo&gt; optionalUserInfo = Optional.ofNullable(userInfo);
	if (optionalUserInfo.isPresent()){
		return true;
	}else{
		response.sendRedirect(request.getContextPath());
		return false;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>我们也可以在拦截器中对请求和响应中的参数进行编码限制</p></blockquote><h4 id="prehandle-1" tabindex="-1"><a class="header-anchor" href="#prehandle-1" aria-hidden="true">#</a> preHandle</h4><p>执行时间 : 在进行数据处理和做出响应之间进行这个方法的调用</p><p>如何调用 : 在拦截器链内所有拦截器返成功调用</p><p>实际应用: 在业务处理器处理完请求后，但是 DispatcherServlet 向客户端返回响应前被调用，在该方法中对用户请求 request域数据进行处理。</p><p>参数详解 :</p><ul><li><code>HttpServletRequest arg0</code> 拦截的请求的request对象</li><li><code>HttpServletResponse arg1</code> 拦截的请求的response对象</li><li><code>Object arg2</code> 封存了单元方法对象的HandleMethod对象</li><li><code>ModelAndView arg3</code> 封存了单元方法的返回值资源路径和请求转到的Map数据</li></ul><h5 id="使用案例-1" tabindex="-1"><a class="header-anchor" href="#使用案例-1" aria-hidden="true">#</a> 使用案例</h5><p>接下来我们简单通过preHandle方法对ModelAndView中进行处理,实现对于关键词的屏蔽:</p><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>修改success.jsp</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Welcome to login ~&lt;/h1&gt;
\${message}
&lt;% System.out.println(&quot;Welcome to login ~&quot;); %&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改LoginController.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RequestMapping(&quot;/success&quot;)
public ModelAndView success(){
	ModelAndView modelAndView = new ModelAndView();
	modelAndView.setViewName(&quot;success&quot;);
	ModelMap modelMap = modelAndView.getModelMap();
	modelMap.put(&quot;message&quot;,&quot;你是智障!&quot;);
	return modelAndView;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改LoginInterceptor.java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token class-name">ModelAndView</span> modelAndView<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
	<span class="token comment">/*handler 处理单元返回ModelAndView 时候进行 拦截*/</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;postHandle run~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ModelAndView</span><span class="token punctuation">&gt;</span></span> optionalModelAndView <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span>modelAndView<span class="token punctuation">)</span><span class="token punctuation">;</span>
	optionalModelAndView<span class="token punctuation">.</span><span class="token function">ifPresent</span><span class="token punctuation">(</span>andView <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
		<span class="token class-name">ModelMap</span> modelMap <span class="token operator">=</span> andView<span class="token punctuation">.</span><span class="token function">getModelMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> message <span class="token operator">=</span> modelMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&quot;智障&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		modelMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="aftercompletion" tabindex="-1"><a class="header-anchor" href="#aftercompletion" aria-hidden="true">#</a> afterCompletion</h4><p>执行时间 : 在进行页面渲染的时候执行</p><p>如何调用 : 按拦截器定义逆序调用</p><p>实际应用: 在DispatcherServlet 完全处理完请求后被调用,可以在该方法中进行一些资源清理的操作。</p><p>参数详解 :</p><ul><li><code>HttpServletRequest arg0</code> 拦截的请求的request对象</li><li><code>HttpServletResponse arg1</code> 拦截的请求的response对象</li><li><code>Object arg2</code> 封存了单元方法对象的HandleMethod对象</li><li><code>Exception arg3</code> 存储了责任链的异常信息</li></ul><h5 id="使用案例-2" tabindex="-1"><a class="header-anchor" href="#使用案例-2" aria-hidden="true">#</a> 使用案例</h5><p>我们可以简单模拟当请求出现错误时,通过afterCompletion方法后台记录当前用户错误信息</p><p>实现效果:<br><img src="`+k+'" alt="" loading="lazy"><br> 后台记录:<br><img src="'+q+`" alt="" loading="lazy"></p><p>修改LoginController.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RequestMapping(&quot;/success&quot;)
public ModelAndView success(){
	ModelAndView modelAndView = new ModelAndView();
	modelAndView.setViewName(&quot;success&quot;);
	ModelMap modelMap = modelAndView.getModelMap();
	int i = 1/0;//手动制造异常
	modelMap.put(&quot;message&quot;,&quot;你是智障!&quot;);
	return modelAndView;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改LoginInterceptor.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override
public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
	 /*页面渲染完毕,但是还没有给浏览器响应数据的时候*/
	System.out.println(&quot;afterCompletion run~&quot;);
	Optional&lt;Exception&gt; optionalException = Optional.ofNullable(ex);
	UserInfo userInfo = (UserInfo) request.getSession().getAttribute(&quot;userInfo&quot;);
	if (optionalException.isPresent()){
		//输出日志
		System.out.println(userInfo.getName()+&quot;用户操作发生异常:&quot;+ex);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个拦截器的执行顺序" tabindex="-1"><a class="header-anchor" href="#多个拦截器的执行顺序" aria-hidden="true">#</a> 多个拦截器的执行顺序</h3><p>多个拦截器同时存在时,执行的顺序由配置顺序决定. 先配置谁, 谁就先执行.多个拦截器可以理解为拦截器栈, 先进后出(后进先出), 如图所示:</p><figure><img src="`+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--注册拦截器--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>interceptors</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>interceptor</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>mapping</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/success<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myInterceptor1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.meturing.interceptor.LoginInterceptor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>interceptor</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>interceptor</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>mapping</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/success<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myInterceptor2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.meturing.interceptor.LoginInterceptor2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>interceptor</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>interceptors</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行顺序如下:</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>preHandle run~
preHandle2 run~
Controller run~
postHandle2 run~
postHandle run~
Welcome to login ~
afterCompletion2 run~
afterCompletion run~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',108);function w(y,C){const s=t("RouterLink");return i(),l("div",null,[M,o("p",null,[n("按照前面的学习中构建SpringMVC的项目结构，可以参考 "),d(s,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/09_%E6%95%B4%E5%90%88SpringMVC/%E6%95%B4%E5%90%88SpringMVC.html"},{default:r(()=>[n("整合SpringMVC")]),_:1})]),I])}const V=a(S,[["render",w],["__file","拦截器.html.vue"]]);export{V as default};
