import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as t}from"./app-a48529f7.js";const e="/CoderNotes/assets/image-20230530105731114-6d5af616.png",p="/CoderNotes/assets/image-20230530110530172-7c0acb5c.png",i="/CoderNotes/assets/image-20230530110626332-7dab2fb1.png",l="/CoderNotes/assets/image-20230530111621915-bc02717b.png",o="/CoderNotes/assets/image-20230530111628091-774ce620.png",c="/CoderNotes/assets/image-20230530111932145-fab51c6f.png",r="/CoderNotes/assets/image-20230530112009434-d262189e.png",d="/CoderNotes/assets/image-20230530112104221-045f026e.png",u="/CoderNotes/assets/image-20230530113305922-acf80fda.png",g="/CoderNotes/assets/image-20230530113248836-c076128b.png",m="/CoderNotes/assets/image-20230530113429175-f5bcede6.png",v="/CoderNotes/assets/image-20230530113515497-ff948d15.png",k="/CoderNotes/assets/image-20230530113535583-4b8b8957.png",h="/CoderNotes/assets/image-20230530113604055-3bc9d284.png",b="/CoderNotes/assets/image-20230530113713353-a4113da1.png",f="/CoderNotes/assets/image-20230530113734128-d0d4775e.png",_="/CoderNotes/assets/image-20230530113805709-d00e0c0a.png",x={},S=t('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><h3 id="mvc的概念" tabindex="-1"><a class="header-anchor" href="#mvc的概念" aria-hidden="true">#</a> MVC的概念</h3><figure><img src="'+e+'" alt="image-20230530105731114" tabindex="0" loading="lazy"><figcaption>image-20230530105731114</figcaption></figure><p>Spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web Flow里面。Spring 框架提供了构建 Web 应用程序的全功能 MVC 模块。使用 Spring 可插入的 MVC 架构，从而在使用Spring进行WEB开发时，可以选择使用Spring的SpringMVC框架或集成其他MVC开发框架，如Struts1(现在一般不用)，Struts 2(一般老项目使用)等等。</p><ul><li>M (model) -&gt; 模型层 -&gt; DAO封装 -&gt; Mybatis</li><li>V (view) -&gt; 视图层 -&gt; html css js jsp</li><li>C(controller) -&gt; 控制层 -&gt; Servlet封装 -&gt; springMVC</li></ul><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ol><li>SpringMVC是spring为展现层提供的基于MVC设计理念的优秀WEB框架,是目前最主流的MVC框架之一</li><li>SpringMVC通过一套注解,可以让普通的JAVA类成为contrllor控制器,无需继承Servlet,实现了控制层和Servlet之间的解耦</li><li>SpringMVC支持Rest风格的URL写法</li><li>SpringMVC采用了松耦合,可热插的主键结构,比其他的框架更具扩展性和灵活性</li></ol><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><h3 id="检查项目配置" tabindex="-1"><a class="header-anchor" href="#检查项目配置" aria-hidden="true">#</a> 检查项目配置</h3><p>检查Maven的相关配置与仓库地址 :<br><img src="'+p+'" alt="" loading="lazy"></p><p>检查是启动注解处理<br><img src="'+i+'" alt="" loading="lazy"></p><h3 id="创建mavenweb模块" tabindex="-1"><a class="header-anchor" href="#创建mavenweb模块" aria-hidden="true">#</a> 创建MavenWeb模块</h3><p>创建Maven骨架 : 注意选择骨架为 <code>maven-archetype-webapp</code><br><img src="'+l+'" alt="" loading="lazy"></p><p>此时我们的项目中初始化了一些配置<br><img src="'+o+'" alt="" loading="lazy"></p><h3 id="检查目录标记" tabindex="-1"><a class="header-anchor" href="#检查目录标记" aria-hidden="true">#</a> 检查目录标记</h3><p>创建目录:</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>检查目录是否正常标记<br><img src="'+r+'" alt="" loading="lazy"></p><h3 id="修改web-xml" tabindex="-1"><a class="header-anchor" href="#修改web-xml" aria-hidden="true">#</a> 修改Web.xml</h3><p>可以创建一个javaEE项目,然后复制web.xml文件中的内容即可</p><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;web-app xmlns=&quot;http://xmlns.jcp.org/xml/ns/javaee&quot;
         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd&quot;
         version=&quot;4.0&quot;&gt;
&lt;/web-app&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试demo" tabindex="-1"><a class="header-anchor" href="#测试demo" aria-hidden="true">#</a> 测试Demo</h3><h4 id="调整pom依赖" tabindex="-1"><a class="header-anchor" href="#调整pom依赖" aria-hidden="true">#</a> 调整POM依赖</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.meturing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>SpringMVC_01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packaging</span><span class="token punctuation">&gt;</span></span>war<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packaging</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--servlet jsp 依赖--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>javax.servlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>javax.servlet-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.0.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>javax.servlet.jsp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>javax.servlet.jsp-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.3.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意:这两个依赖仅限于编译的时候使用,在打包到TomCat中时,lib目录下已经有这两依赖了.</p><h4 id="创建servlet" tabindex="-1"><a class="header-anchor" href="#创建servlet" aria-hidden="true">#</a> 创建servlet</h4><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.meturing.controller;
@WebServlet(&quot;/myServlet.do&quot;)
public class MyServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	    //请求转发
        req.getRequestDispatcher(&quot;first.jsp&quot;).forward(req,resp);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建jsp" tabindex="-1"><a class="header-anchor" href="#创建jsp" aria-hidden="true">#</a> 创建JSP</h4><p>first.jsp</p><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Hello World&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;My first JSP&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查并运行项目" tabindex="-1"><a class="header-anchor" href="#检查并运行项目" aria-hidden="true">#</a> 检查并运行项目</h3><h4 id="检查项目" tabindex="-1"><a class="header-anchor" href="#检查项目" aria-hidden="true">#</a> 检查项目</h4><p>创建TomCat配置</p><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>导入模块</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>修改路径</p><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>检查配置<br> ]<br><img src="'+h+'" alt="" loading="lazy"></p><p>应用</p><h4 id="运行项目" tabindex="-1"><a class="header-anchor" href="#运行项目" aria-hidden="true">#</a> 运行项目</h4><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>默认打开的是: index.jsp<br><img src="'+f+'" alt="" loading="lazy"></p><p>输入地址: <code>http://localhost:8080/SpringMVC_01/myServlet.do</code> 打开我们的first.jsp<br><img src="'+_+'" alt="" loading="lazy"></p>',47),C=[S];function q(y,M){return n(),s("div",null,C)}const V=a(x,[["render",q],["__file","概念引入与环境准备.html.vue"]]);export{V as default};
