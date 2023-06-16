import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as a,c as d,d as i,e,b as s,f as r}from"./app-c47b8d81.js";const v={},u=r(`<h2 id="记录请求日志" tabindex="-1"><a class="header-anchor" href="#记录请求日志" aria-hidden="true">#</a> 记录请求日志</h2><p>记录每次请求中如下的信息并存储进入日志文件</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@WebListener
public class RequestLogListener implements ServletRequestListener {
    private SimpleDateFormat simpleDateFormat=new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;);
    @Override
    public void requestDestroyed(ServletRequestEvent sre) {
    }
    @Override
    public void requestInitialized(ServletRequestEvent sre) {
        // 获得请求发出的IP
        // 获得请求的URL
        // 获得请求产生的时间
        HttpServletRequest request = (HttpServletRequest)sre.getServletRequest();
        String remoteHost = request.getRemoteHost();
        String requestURL = request.getRequestURL().toString();
        String reqquestDate = simpleDateFormat.format(new Date());
        // 准备输出流
        try {
            PrintWriter pw =new PrintWriter(new FileOutputStream(new File(&quot;d:/meturing.txt&quot;),true));
            pw.println(remoteHost+&quot; &quot;+requestURL+&quot; &quot;+reqquestDate );
            pw.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="统计实时在线人数" tabindex="-1"><a class="header-anchor" href="#统计实时在线人数" aria-hidden="true">#</a> 统计实时在线人数</h2><p>当任何一个账户处于登录状态时,在线统计总数+1,离线时-1<br> 通过session监听器实现计数,但是在线人数要保存在Application域中</p><p>监听器代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@WebListener
public class OnLineNumberListener implements HttpSessionListener  {
    @Override
    public void sessionCreated(HttpSessionEvent se) {
        // 向application域中 增加一个数字
        HttpSession session = se.getSession();
        ServletContext application = session.getServletContext();
        Object attribute = application.getAttribute(&quot;count&quot;);
        if(null == attribute){// 第一次放数据
            application.setAttribute(&quot;count&quot;, 1);
        }else{
            int count =(int)attribute;
            application.setAttribute(&quot;count&quot;, ++count);
        }
    }
    @Override
    public void sessionDestroyed(HttpSessionEvent se) {
        // 向application域中 减少一个数字
        HttpSession session = se.getSession();
        ServletContext application = session.getServletContext();
        int count =(int)application.getAttribute(&quot;count&quot;);
        application.setAttribute(&quot;count&quot;, --count);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Servlet代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//登出销毁Session
@WebServlet(urlPatterns = &quot;/logout.do&quot;)
public class Logout extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        session.invalidate();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.jsp</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;$Title%sSourceCode%lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  当前在线人数为:\${applicationScope.count}
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目重启免登录" tabindex="-1"><a class="header-anchor" href="#项目重启免登录" aria-hidden="true">#</a> 项目重启免登录</h2><p>实现重启免登录的关键要素是对于Session的序列化</p><h3 id="相关概念" tabindex="-1"><a class="header-anchor" href="#相关概念" aria-hidden="true">#</a> 相关概念</h3><p>首先明白这几个概念:</p><ul><li>序列化与反序列 <ul><li>把对象转化为字节序列的过程称为序列化（保存到硬盘，持久化）</li><li>把字节序列转化为对象的过程称为反序列化（存放于内存）</li></ul></li><li>序列化的用途 <ul><li>把对象的字节序列永久保存到硬盘上，通常放到一个文件中。</li><li>把网络传输的对象通过字节序列化，方便传输本节作业</li></ul></li></ul><h3 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h3><h4 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h4><p>在META-INF下创建<code>Context.xml</code></p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
  &lt;Context&gt;
       &lt;Manager className=&quot;org.apache.catalina.session.PersistentManager&quot;&gt;
         &lt;Store className=&quot;org.apache.catalina.session.FileStore&quot; directory=&quot;d:/session&quot;/&gt;
      &lt;/Manager&gt;
  &lt;/Context&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="准备实体类" tabindex="-1"><a class="header-anchor" href="#准备实体类" aria-hidden="true">#</a> 准备实体类</h4><p>对于实体类中<strong>必须实现serializable 接口</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class User  implements Serializable {
    private String username;
    private String pwd;
    ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="登陆页面" tabindex="-1"><a class="header-anchor" href="#登陆页面" aria-hidden="true">#</a> 登陆页面</h4><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;$Title%sSourceCode%lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;form action=&quot;loginController.do&quot; method=&quot;post&quot;&gt;
    用户名:&lt;input type=&quot;text&quot; name=&quot;user&quot;&gt; &lt;br/&gt;
    密码:&lt;input type=&quot;password&quot; name=&quot;pwd&quot;&gt;&lt;br/&gt;
    &lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt;
  &lt;/form&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验证登录信息" tabindex="-1"><a class="header-anchor" href="#验证登录信息" aria-hidden="true">#</a> 验证登录信息</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@WebServlet(&quot;/loginController.do&quot;)
public class LoginController extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter(&quot;user&quot;);
        String pwd = req.getParameter(&quot;pwd&quot;);
        // user
        User user =new User(username,pwd);
        // session
        HttpSession session = req.getSession();
        session.setAttribute(&quot;user&quot;, user);
	    // 绑定监听器
        session.setAttribute(&quot;listener&quot;, new MySessionActivationListener());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="校验登录信息" tabindex="-1"><a class="header-anchor" href="#校验登录信息" aria-hidden="true">#</a> 校验登录信息</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@WebServlet(urlPatterns = &quot;/loginCheckController.do&quot;)
public class LoginCheckController extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 判断是否登录
        HttpSession session = req.getSession();
        Object user = session.getAttribute(&quot;user&quot;);
        Object listener = session.getAttribute(&quot;listener&quot;);// 获得对应的监听器
        String message =&quot;&quot;;
        if(null != user){
            message=&quot;您已经登录过&quot;;
        }else{
            message=&quot;您还未登录&quot;;
        }
        resp.setCharacterEncoding(&quot;UTF-8&quot;);
        resp.setContentType(&quot;text/html;charset=UTF-8&quot;);
        resp.getWriter().println(message);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="监听钝化和活化" tabindex="-1"><a class="header-anchor" href="#监听钝化和活化" aria-hidden="true">#</a> 监听钝化和活化</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class MySessionActivationListener implements HttpSessionActivationListener, Serializable {
    @Override
    public void sessionWillPassivate(HttpSessionEvent se) {
        System.out.println(se.getSession().hashCode()+&quot;即将钝化&quot;);
    }
    @Override
    public void sessionDidActivate(HttpSessionEvent se) {
        System.out.println(se.getSession().hashCode()+&quot;已经活化&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4>`,32),o={href:"http://xn--loginCheckController-9x08aw463ah2xark6l.do",target:"_blank",rel:"noopener noreferrer"},c={href:"http://xn--loginCheckController-oy96at320b9nugksh.do",target:"_blank",rel:"noopener noreferrer"};function m(b,p){const n=l("ExternalLinkIcon");return a(),d("div",null,[u,i("ol",null,[i("li",null,[e("先登录,"),i("a",o,[e("然后请求loginCheckController.do"),s(n)]),e(" 校验是否登录过")]),i("li",null,[e("然后重启项目,"),i("a",c,[e("再起请求loginCheckController.do"),s(n)]),e(" 校验是否登录过,发现重启后,仍然是登录过的")])])])}const q=t(v,[["render",m],["__file","监听器开发案例.html.vue"]]);export{q as default};
