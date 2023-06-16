import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-c47b8d81.js";const e="/CoderNotes/assets/Pasted_image_20230403222859-a6ae5bdf.png",p="/CoderNotes/assets/Pasted_image_20230403223854-446985cf.png",o="/CoderNotes/assets/Pasted_image_20230403223935-80011d44.png",l={},i=t('<h2 id="什么是内置对象" tabindex="-1"><a class="header-anchor" href="#什么是内置对象" aria-hidden="true">#</a> 什么是内置对象</h2><p>因为JSP的本质是Servlet,在JSP文件经过转译之后,生成JAVA代码,在运行时,JSP给我们准备好了九个可以直接使用而不用我们自己去new的对象,这九个对象我们称之为内置对象.<strong>内置对象完全有JSP自行去维护,我们直接使用即可</strong></p><h2 id="jsp的九大内置对象" tabindex="-1"><a class="header-anchor" href="#jsp的九大内置对象" aria-hidden="true">#</a> JSP的九大内置对象</h2><figure><img src="'+e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="四个域对象" tabindex="-1"><a class="header-anchor" href="#四个域对象" aria-hidden="true">#</a> 四个域对象</h3><table><thead><tr><th style="text-align:left;">内置对象</th><th style="text-align:left;">说明</th><th style="text-align:left;">范围</th></tr></thead><tbody><tr><td style="text-align:left;">pageContext</td><td style="text-align:left;">page域</td><td style="text-align:left;">当前页面内可用</td></tr><tr><td style="text-align:left;">request</td><td style="text-align:left;">request域</td><td style="text-align:left;">单次请求</td></tr><tr><td style="text-align:left;">session</td><td style="text-align:left;">session域</td><td style="text-align:left;">单次会话</td></tr><tr><td style="text-align:left;">application</td><td style="text-align:left;">application域</td><td style="text-align:left;">项目运行</td></tr></tbody></table><h3 id="响应对象" tabindex="-1"><a class="header-anchor" href="#响应对象" aria-hidden="true">#</a> 响应对象</h3><table><thead><tr><th style="text-align:left;">内置对象</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">response</td><td style="text-align:left;">响应对象</td></tr></tbody></table><h3 id="输出流对象" tabindex="-1"><a class="header-anchor" href="#输出流对象" aria-hidden="true">#</a> 输出流对象</h3><table><thead><tr><th style="text-align:left;">内置对象</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">out</td><td style="text-align:left;">打印对象</td></tr></tbody></table><h3 id="其他三个对象" tabindex="-1"><a class="header-anchor" href="#其他三个对象" aria-hidden="true">#</a> 其他三个对象</h3><table><thead><tr><th style="text-align:left;">内置对象</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">servletConfig</td><td style="text-align:left;">由于JSP本身也是一个Servlet,所以容器也会给我们准备一个ServletConfig</td></tr><tr><td style="text-align:left;">page</td><td style="text-align:left;">就是他this对象 当前JSP对象本身</td></tr><tr><td style="text-align:left;">exception</td><td style="text-align:left;">异常对象,在错误提示页上使用,当isErrorpage=true 才具有该对象</td></tr></tbody></table><h2 id="九大内置对象的使用" tabindex="-1"><a class="header-anchor" href="#九大内置对象的使用" aria-hidden="true">#</a> 九大内置对象的使用</h2><p>实体类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> uid<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Servlet代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@WebServlet(&quot;/servlet1.do&quot;)
public class Servlet1 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 向三个域中放入数据
        
        /*向请求域中放入数据*/
        User user=new User(1,&quot;李雷&quot;,&quot;123456&quot;);
        req.setAttribute(&quot;user&quot;,user);
        req.setAttribute(&quot;msg&quot;,&quot;requestMessage&quot;);
        
        /*向session域中放入数据*/
        List&lt;User&gt; users =new ArrayList&lt;&gt;();
        User user1=new User(1,&quot;韩梅梅&quot;,&quot;123456&quot;);
        User user2=new User(1,&quot;小明&quot;,&quot;123456&quot;);
        User user3=new User(1,&quot;小红&quot;,&quot;123456&quot;);
        Collections.addAll(users,user1,user2,user3);
        HttpSession session =   req.getSession();
        session.setAttribute(&quot;users&quot;,users);
        session.setAttribute(&quot;msg&quot;,&quot;sessionMessage&quot;);
        
        /*向application域中放入数据*/
        ServletContext application = getServletContext();
        Map&lt;String,User&gt; map =new HashMap&lt;&gt;();
        map.put(&quot;a&quot;,user1);
        map.put(&quot;b&quot;,user2);
        map.put(&quot;c&quot;,user3);
        application.setAttribute(&quot;userMap&quot;,map);
        application.setAttribute(&quot;msg&quot;,&quot;applicationMessage&quot;);
        
        // 跳转至jsp
        req.getRequestDispatcher(&quot;showInfo.jsp&quot;).forward(req,resp);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSP代码</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page import=&quot;com.meturing.pojo.User&quot; %&gt;
&lt;%@ page import=&quot;java.util.List&quot; %&gt;
&lt;%@ page import=&quot;java.util.Map&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%--向pageContext域中放数据--%&gt;
    &lt;%
    pageContext.setAttribute(&quot;msg&quot;, &quot;pageContextMessage&quot;);
    pageContext.setAttribute(&quot;user&quot;, new User(1,&quot;大黄&quot;,&quot;abcdefg&quot;));
    %&gt;
    &lt;%--从域中取出数据--%&gt;
    
    pageContext:&lt;br/&gt;
    msg:&lt;%=pageContext.getAttribute(&quot;msg&quot;)%&gt;&lt;br/&gt;
    username:&lt;%=((User)pageContext.getAttribute(&quot;user&quot;)).getName()%&gt;&lt;br/&gt;
    
    request域中的数据:&lt;br/&gt;
    msg:&lt;%=request.getAttribute(&quot;msg&quot;)%&gt;&lt;br/&gt;
    username:&lt;%=((User)request.getAttribute(&quot;user&quot;)).getName()%&gt;&lt;br/&gt;
    
    session域中的数据:&lt;br/&gt;
    msg:&lt;%=session.getAttribute(&quot;msg&quot;)%&gt;&lt;br/&gt;
    username:&lt;%=((List&lt;User&gt;)session.getAttribute(&quot;users&quot;)).get(0).getName()%&gt;&lt;br/&gt;
    
    application域中的数据:&lt;br/&gt;
    msg:&lt;%=application.getAttribute(&quot;msg&quot;)%&gt;&lt;br/&gt;
    username:&lt;%=((Map&lt;String,User&gt;)application.getAttribute(&quot;userMap&quot;)).get(&quot;a&quot;).getName()%&gt;&lt;br/&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="综合案例开发" tabindex="-1"><a class="header-anchor" href="#综合案例开发" aria-hidden="true">#</a> 综合案例开发</h2><p>链接数据库显示所有员工信息到JSP页面,表格如下</p><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="构建项目结构" tabindex="-1"><a class="header-anchor" href="#构建项目结构" aria-hidden="true">#</a> 构建项目结构</h3><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="匹配规则" tabindex="-1"><a class="header-anchor" href="#匹配规则" aria-hidden="true">#</a> 匹配规则</h3><p>0-500 A<br> 501-1000 B<br> 1001-1500 C<br> 1501-2000 D<br> 2001-3000 E<br> 3001-4000 F<br> 4000+ G</p><h3 id="相关代码" tabindex="-1"><a class="header-anchor" href="#相关代码" aria-hidden="true">#</a> 相关代码</h3><p>实体类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Emp implements Serializable {
    private Integer empno;
    private String ename;
    private String job;
    private Integer mgr;
    private Date hiredate;
    private Double sal;
    private Double comm;
    private Integer deptno;
    ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dao层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class EmpDaoImpl implements EmpDao {
    private String url=&quot;jdbc:mysql://127.0.0.1:3306/mydb?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=Asia/Shanghai&quot;;
    private String username=&quot;root&quot;;
    private String password=&quot;root&quot;;
    @Override
    public List&lt;Emp&gt; findAll() {
        List&lt;Emp&gt; list =new ArrayList&lt;&gt;();
        Connection connection =null;
        PreparedStatement pstat=null;
        ResultSet resultSet=null;
        try {
            Class.forName(&quot;com.mysql.cj.jdbc.Driver&quot;);
            connection = DriverManager.getConnection(url, username, password);
            pstat = connection.prepareStatement(&quot;select * from emp&quot;);
            resultSet = pstat.executeQuery();
            while(resultSet.next()){
                Integer empno=resultSet.getInt(&quot;empno&quot;);
                Integer deptno=resultSet.getInt(&quot;deptno&quot;);
                Integer mgr=resultSet.getInt(&quot;mgr&quot;);
                String ename=resultSet.getString(&quot;ename&quot;);
                String job=resultSet.getString(&quot;job&quot;);
                Double sal=resultSet.getDouble(&quot;sal&quot;);
                Double comm=resultSet.getDouble(&quot;comm&quot;);
                Date hiredate=resultSet.getDate(&quot;hiredate&quot;);
                Emp emp =new Emp( empno,  ename,  job,  mgr,  hiredate,  sal,  comm,  deptno);
                list.add(emp);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            if(null!=resultSet){
                try {
                    resultSet.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(null!=pstat){
                try {
                    pstat.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(null!=connection){
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return list;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>servlet代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/empServlet.do&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmpServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token comment">// dao对象</span>
    <span class="token class-name">EmpDao</span> empDao<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">EmpDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取数据</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Emp</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> empDao<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 将数据放入请求域</span>
        req<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;emps&quot;</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 请求转发给JSP</span>
        req<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;showEmp.jsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSP代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">%</span>@ page <span class="token keyword">import</span><span class="token operator">=</span><span class="token string">&quot;java.util.List&quot;</span> <span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">%</span>@ page <span class="token keyword">import</span><span class="token operator">=</span><span class="token string">&quot;com.meturing.pojo.Emp&quot;</span> <span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">%</span>@ page contentType<span class="token operator">=</span><span class="token string">&quot;text/html;charset=UTF-8&quot;</span> language<span class="token operator">=</span><span class="token string">&quot;java&quot;</span> <span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>html<span class="token punctuation">&gt;</span></span>
<span class="token generics"><span class="token punctuation">&lt;</span>head<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>title<span class="token punctuation">&gt;</span></span><span class="token class-name">Title</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>style<span class="token punctuation">&gt;</span></span>
        table<span class="token punctuation">{</span>
            border<span class="token operator">:</span> <span class="token number">3</span>px solid blue<span class="token punctuation">;</span>
            width<span class="token operator">:</span> <span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">;</span>
            margin<span class="token operator">:</span> <span class="token number">0</span>px auto<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        td<span class="token punctuation">,</span>th<span class="token punctuation">{</span>
            border<span class="token operator">:</span> <span class="token number">2</span>px solid green<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>body<span class="token punctuation">&gt;</span></span>
    <span class="token operator">&lt;</span>table cellspacing<span class="token operator">=</span><span class="token string">&quot;0px&quot;</span> cellpadding<span class="token operator">=</span><span class="token string">&quot;0px&quot;</span><span class="token operator">&gt;</span>
        <span class="token generics"><span class="token punctuation">&lt;</span>tr<span class="token punctuation">&gt;</span></span>
            <span class="token generics"><span class="token punctuation">&lt;</span>th<span class="token punctuation">&gt;</span></span>编号<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">&gt;</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>th<span class="token punctuation">&gt;</span></span>姓名<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">&gt;</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>th<span class="token punctuation">&gt;</span></span>上级编号<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">&gt;</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>th<span class="token punctuation">&gt;</span></span>职务<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">&gt;</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>th<span class="token punctuation">&gt;</span></span>入职日期<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">&gt;</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>th<span class="token punctuation">&gt;</span></span>薪资<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">&gt;</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>th<span class="token punctuation">&gt;</span></span>补助<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">&gt;</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>th<span class="token punctuation">&gt;</span></span>部门号<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">&gt;</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>th<span class="token punctuation">&gt;</span></span>薪资等级<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">%</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Emp</span><span class="token punctuation">&gt;</span></span> emps <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Emp</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> request<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;emps&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Emp</span> emp <span class="token operator">:</span> emps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">%</span><span class="token operator">&gt;</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>tr<span class="token punctuation">&gt;</span></span>
                <span class="token generics"><span class="token punctuation">&lt;</span>td<span class="token punctuation">&gt;</span></span><span class="token operator">&lt;</span><span class="token operator">%=</span>emp<span class="token punctuation">.</span><span class="token function">getEmpno</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
                <span class="token generics"><span class="token punctuation">&lt;</span>td<span class="token punctuation">&gt;</span></span><span class="token operator">&lt;</span><span class="token operator">%=</span>emp<span class="token punctuation">.</span><span class="token function">getEname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
                <span class="token generics"><span class="token punctuation">&lt;</span>td<span class="token punctuation">&gt;</span></span><span class="token operator">&lt;</span><span class="token operator">%=</span>emp<span class="token punctuation">.</span><span class="token function">getMgr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
                <span class="token generics"><span class="token punctuation">&lt;</span>td<span class="token punctuation">&gt;</span></span><span class="token operator">&lt;</span><span class="token operator">%=</span>emp<span class="token punctuation">.</span><span class="token function">getJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
                <span class="token generics"><span class="token punctuation">&lt;</span>td<span class="token punctuation">&gt;</span></span><span class="token operator">&lt;</span><span class="token operator">%=</span>emp<span class="token punctuation">.</span><span class="token function">getHiredate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
                <span class="token generics"><span class="token punctuation">&lt;</span>td<span class="token punctuation">&gt;</span></span><span class="token operator">&lt;</span><span class="token operator">%=</span>emp<span class="token punctuation">.</span><span class="token function">getSal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
                <span class="token generics"><span class="token punctuation">&lt;</span>td<span class="token punctuation">&gt;</span></span><span class="token operator">&lt;</span><span class="token operator">%=</span>emp<span class="token punctuation">.</span><span class="token function">getComm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
                <span class="token generics"><span class="token punctuation">&lt;</span>td<span class="token punctuation">&gt;</span></span><span class="token operator">&lt;</span><span class="token operator">%=</span>emp<span class="token punctuation">.</span><span class="token function">getDeptno</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
                <span class="token generics"><span class="token punctuation">&lt;</span>td<span class="token punctuation">&gt;</span></span><span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">--</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;td&gt;&quot;</span><span class="token punctuation">)</span><span class="token operator">--</span><span class="token operator">%</span><span class="token operator">&gt;</span>
         <span class="token operator">&lt;</span><span class="token operator">%</span>
             <span class="token class-name">Double</span> sal <span class="token operator">=</span> emp<span class="token punctuation">.</span><span class="token function">getSal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">if</span><span class="token punctuation">(</span>sal<span class="token operator">&lt;=</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                 out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> sal <span class="token operator">&lt;=</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                 out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> sal <span class="token operator">&lt;=</span><span class="token number">1500</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                 out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> sal <span class="token operator">&lt;=</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                 out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> sal <span class="token operator">&lt;=</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                 out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;E&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> sal <span class="token operator">&lt;=</span><span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                 out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                 out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;G&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token operator">%</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">%</span>
            <span class="token punctuation">}</span>
        <span class="token operator">%</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>table<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),c=[i];function r(u,d){return s(),a("div",null,c)}const m=n(l,[["render",r],["__file","JSP的内置对象.html.vue"]]);export{m as default};
