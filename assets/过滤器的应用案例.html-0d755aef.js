import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as l}from"./app-71f45f98.js";const s={},t=l(`<h2 id="post乱码处理" tabindex="-1"><a class="header-anchor" href="#post乱码处理" aria-hidden="true">#</a> POST乱码处理</h2><p>我们使用过滤器的特性,对所有的请求进行过滤,统一设置他的编码格式</p><h3 id="前端资源-login-jsp" tabindex="-1"><a class="header-anchor" href="#前端资源-login-jsp" aria-hidden="true">#</a> 前端资源 - login.jsp</h3><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;$Title%sSourceCode%lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  please login ... ... &lt;br/&gt;
  &lt;form action=&quot;loginController.do&quot; method=&quot;post&quot;&gt;
    用户名:&lt;input type=&quot;text&quot; name=&quot;user&quot;&gt; &lt;br/&gt;
    密码:&lt;input type=&quot;password&quot; name=&quot;pwd&quot;&gt;&lt;br/&gt;
    &lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt;
  &lt;/form&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="准备servlet-logincontroller" tabindex="-1"><a class="header-anchor" href="#准备servlet-logincontroller" aria-hidden="true">#</a> 准备servlet - LoginController</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@WebServlet(urlPatterns = &quot;/loginController.do&quot;)
public class LoginController extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 获取用户名和密码
        String user = req.getParameter(&quot;user&quot;);
        String pwd = req.getParameter(&quot;pwd&quot;);
        System.out.println(user);
        System.out.println(pwd);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="准备过滤器" tabindex="-1"><a class="header-anchor" href="#准备过滤器" aria-hidden="true">#</a> 准备过滤器</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Filter0_EncodingFilter implements Filter {
    private String charset;
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        servletRequest.setCharacterEncoding(charset);
        // 放行
        filterChain.doFilter(servletRequest, servletResponse);
    }
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        charset = filterConfig.getInitParameter(&quot;charset&quot;);
    }
    @Override
    public void destroy() {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置过滤器" tabindex="-1"><a class="header-anchor" href="#配置过滤器" aria-hidden="true">#</a> 配置过滤器</h3><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;web-app xmlns=&quot;http://xmlns.jcp.org/xml/ns/javaee&quot;
         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd&quot;
         version=&quot;4.0&quot;&gt;
    &lt;filter&gt;
        &lt;filter-name&gt;encodingFilter&lt;/filter-name&gt;
        &lt;filter-class&gt;com.meturing.filter.Filter0_EncodingFilter&lt;/filter-class&gt;
        &lt;init-param&gt;
            &lt;param-name&gt;charset&lt;/param-name&gt;
            &lt;param-value&gt;UTF-8&lt;/param-value&gt;
        &lt;/init-param&gt;
    &lt;/filter&gt;
    &lt;filter-mapping&gt;
        &lt;filter-name&gt;encodingFilter&lt;/filter-name&gt;
        &lt;url-pattern&gt;*.do&lt;/url-pattern&gt;
    &lt;/filter-mapping&gt;
&lt;/web-app&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="登录验证" tabindex="-1"><a class="header-anchor" href="#登录验证" aria-hidden="true">#</a> 登录验证</h2><p>通过过滤器控制,只有登录过之后可以反复进入<code>welcome.jsp</code>欢迎页,如果没有登录,提示用户进入登录页进行登录操作</p><h3 id="准备静态资源" tabindex="-1"><a class="header-anchor" href="#准备静态资源" aria-hidden="true">#</a> 准备静态资源</h3><p>login.jsp</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;$Title%sSourceCode%lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;img src=&quot;static/img/logo.png&quot;&gt;
  please login ... ... &lt;br/&gt;
  &lt;form action=&quot;loginController.do&quot; method=&quot;post&quot;&gt;
    用户名:&lt;input type=&quot;text&quot; name=&quot;user&quot;&gt; &lt;br/&gt;
    密码:&lt;input type=&quot;password&quot; name=&quot;pwd&quot;&gt;&lt;br/&gt;
    &lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt;
  &lt;/form&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>welcome.jsp</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;img src=&quot;static/img/logo.png&quot;&gt;
欢迎\${user.username}登陆!!!
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>aaa.jsp</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
this is page aaa
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="准备实体类" tabindex="-1"><a class="header-anchor" href="#准备实体类" aria-hidden="true">#</a> 准备实体类</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class User implements Serializable {
    private String username;
    private String password;
    @Override
    public String toString() {
        return &quot;User{&quot; +
                &quot;username=&#39;&quot; + username + &#39;\\&#39;&#39; +
                &quot;, password=&#39;&quot; + password + &#39;\\&#39;&#39; +
                &#39;}&#39;;
    }
    public User() {
    }
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="准备servlet" tabindex="-1"><a class="header-anchor" href="#准备servlet" aria-hidden="true">#</a> 准备Servlet</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@WebServlet(urlPatterns = &quot;/loginController.do&quot;)
public class LoginController extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 获取用户名和密码
        String username = req.getParameter(&quot;user&quot;);
        String password = req.getParameter(&quot;pwd&quot;);
        System.out.println(username);
        System.out.println(password);
        // 链接数据库校验登录
        // 登录成功,将用户信息放入Session域
        User user =new User(username,password);
        req.getSession().setAttribute(&quot;user&quot;, user);
        // 跳转到欢迎页
        resp.sendRedirect(&quot;welcome.jsp&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="准备过滤器-1" tabindex="-1"><a class="header-anchor" href="#准备过滤器-1" aria-hidden="true">#</a> 准备过滤器</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@WebFilter(urlPatterns = &quot;/*&quot;)// 任何资源都要进行过滤,
public class Filter1_LoginFilter  implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest req=(HttpServletRequest)servletRequest;
        HttpServletResponse resp=(HttpServletResponse) servletResponse;
        //无论是否登录过,都要放行的资源   登录页  登录校验Controller 和一些静态资源
        String requestURI = req.getRequestURI();
        System.out.println(requestURI);
        if(requestURI.contains(&quot;login.jsp&quot;)|| requestURI.contains(&quot;loginController.do&quot;)|| requestURI.contains(&quot;/static/&quot;)){
            // 直接放行
            filterChain.doFilter(req,resp);
            // 后续代码不再执行
            return;
        }
        // 需要登录之后才能访问的资源,如果没登录,重定向到login.jsp上,提示用户进行登录
        HttpSession session = req.getSession();
        Object user = session.getAttribute(&quot;user&quot;);
        if(null != user){// 如果登录过 放行
            filterChain.doFilter(req,resp);
        }else{// 没有登录过,跳转至登录页
            resp.sendRedirect(&quot;login.jsp&quot;);
        }
    }
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }
    @Override
    public void destroy() {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),r=[t];function d(a,v){return i(),n("div",null,r)}const o=e(s,[["render",d],["__file","过滤器的应用案例.html.vue"]]);export{o as default};
