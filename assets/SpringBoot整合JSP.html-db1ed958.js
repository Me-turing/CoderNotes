import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c as t,d,e,b as l,w as r,f as c}from"./app-71f45f98.js";const o="/CoderNotes/assets/image-20230707111912694-11034864.png",p="/CoderNotes/assets/image-20230707111931688-5cd277f0.png",u="/CoderNotes/assets/image-20230707102056800-97d44dbf.png",g="/CoderNotes/assets/image-20230707102205472-d3f627ad.png",m="/CoderNotes/assets/image-20230707112321235-d4025bde.png",v={},h=c(`<p>在SpringBoot中默认是舍弃JSP的支持的,所以我们如果需要重新对JSP进行支持,需要执行以下操作</p><h2 id="导入依赖" tabindex="-1"><a class="header-anchor" href="#导入依赖" aria-hidden="true">#</a> 导入依赖</h2><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;!--JSP支持--&gt;
&lt;dependency&gt;
	&lt;groupId&gt;org.apache.tomcat.embed&lt;/groupId&gt;
	&lt;artifactId&gt;tomcat-embed-jasper&lt;/artifactId&gt;
	&lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置工程目录" tabindex="-1"><a class="header-anchor" href="#设置工程目录" aria-hidden="true">#</a> 设置工程目录</h2><h3 id="设置webapp目录" tabindex="-1"><a class="header-anchor" href="#设置webapp目录" aria-hidden="true">#</a> 设置Webapp目录</h3><p>默认情况下快速初始化的SpringBoot工程是没有webapp目录的,所以第一步我们需要在resources目录下手动创建webapp目录并按照以下步骤设置为资源目录</p><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>设置成功后我们看到该目录被蓝色圆点进行标记<br><img src="'+p+'" alt="" loading="lazy"></p><h3 id="设置工作目录" tabindex="-1"><a class="header-anchor" href="#设置工作目录" aria-hidden="true">#</a> 设置工作目录</h3><p>设置工作目录，如果在IDEA中项目结构为聚合工程。那么在运行jsp是需要指定路径。如果项目结构为独立项目则不需要。</p><p>新版本IDEA需要手动点击修改选项将工作目录调出,否则是看不到该选项的</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>老版本的IDEA可以直接设置</p><figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一些其他配置-可选" tabindex="-1"><a class="header-anchor" href="#一些其他配置-可选" aria-hidden="true">#</a> 一些其他配置(可选)</h2><h3 id="配置视图解析器" tabindex="-1"><a class="header-anchor" href="#配置视图解析器" aria-hidden="true">#</a> 配置视图解析器</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">mvc</span><span class="token punctuation">:</span>  
    <span class="token key atrule">view</span><span class="token punctuation">:</span>  
      <span class="token key atrule">suffix</span><span class="token punctuation">:</span> .jsp  
      <span class="token key atrule">prefix</span><span class="token punctuation">:</span> /WEB<span class="token punctuation">-</span>INF/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h2><p>com.meturing.controller.PageController.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class PageController {
    @RequestMapping(&quot;/page/{pageName}&quot;)
    public String getPage(@PathVariable(&quot;pageName&quot;) String pageName){
        return pageName;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main/webapp/WEB-INF/success.jsp</p><div class="language-Jsp line-numbers-mode" data-ext="Jsp"><pre class="language-Jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
this is successPage
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 : <code>http://localhost:8081/springboot03/page/success</code></p><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2>',25);function b(f,_){const a=i("RouterLink");return s(),t("div",null,[h,d("p",null,[e("关于JSP的相关语法可见 : "),l(a,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/04_JSP/JSP.html"},{default:r(()=>[e("JSP")]),_:1})])])}const k=n(v,[["render",b],["__file","SpringBoot整合JSP.html.vue"]]);export{k as default};
