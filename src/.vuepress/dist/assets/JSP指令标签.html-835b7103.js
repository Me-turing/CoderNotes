import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as n,c as r,d as t,e,b as s,w as o,f as a}from"./app-c47b8d81.js";const g="/CoderNotes/assets/Pasted_image_20230403221931-3b85fef8.png",c="/CoderNotes/assets/Pasted_image_20230403222152-77cc5ddb.png",u={},v=a(`<h2 id="page指令标签" tabindex="-1"><a class="header-anchor" href="#page指令标签" aria-hidden="true">#</a> Page指令标签</h2><h3 id="什么是指令标签" tabindex="-1"><a class="header-anchor" href="#什么是指令标签" aria-hidden="true">#</a> 什么是指令标签</h3><p>指令标签是JSP页面上的一种特殊标签,JSP指令可以用来设置整个JSP页面相关的属性，如网页的编码方式,脚本语言,导包等等。</p><h3 id="指令标签的语法" tabindex="-1"><a class="header-anchor" href="#指令标签的语法" aria-hidden="true">#</a> 指令标签的语法</h3><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ directive   attribute=&quot;value&quot; %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="jsp中的三种指令标签" tabindex="-1"><a class="header-anchor" href="#jsp中的三种指令标签" aria-hidden="true">#</a> JSP中的三种指令标签</h3><table><thead><tr><th style="text-align:left;">指令</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">&lt;%@ page  %&gt;</td><td style="text-align:left;"><div><br></div><div>定义网页依赖属性，如脚本语言、error页面、缓存需求等等</div><div><br></div></td></tr><tr><td style="text-align:left;">&lt;%@ include %&gt;</td><td style="text-align:left;">包含其他文件</td></tr><tr><td style="text-align:left;">&lt;%@ taglib  %&gt;</td><td style="text-align:left;">引入标签库的定义</td></tr></tbody></table><h3 id="page指令标签-1" tabindex="-1"><a class="header-anchor" href="#page指令标签-1" aria-hidden="true">#</a> Page指令标签</h3><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">buffer</td><td style="text-align:left;">指定out对象使用缓冲区的大小</td></tr><tr><td style="text-align:left;">autoFlush</td><td style="text-align:left;">控制out对象的缓冲区</td></tr><tr><td style="text-align:left;">contentType</td><td style="text-align:left;">指定当前JSP页面的MIME类型和字符编码</td></tr><tr><td style="text-align:left;">errorPage</td><td style="text-align:left;">指定当JSP页面发生异常时需要转向的错误处理页面</td></tr><tr><td style="text-align:left;">isErrorPage</td><td style="text-align:left;">指定当前页面是否可以作为另一个JSP页面的错误处理页</td></tr><tr><td style="text-align:left;">extends</td><td style="text-align:left;">指定servlet从哪一个类继承</td></tr><tr><td style="text-align:left;">import</td><td style="text-align:left;">导入要使用的Java类</td></tr><tr><td style="text-align:left;">info</td><td style="text-align:left;">定义JSP页面的描述信息</td></tr><tr><td style="text-align:left;">isThreadSafe</td><td style="text-align:left;">isThreadSafe</td></tr><tr><td style="text-align:left;">language</td><td style="text-align:left;">定义JSP页面所用的脚本语言，默认是Java</td></tr><tr><td style="text-align:left;">session</td><td style="text-align:left;">指定JSP页面是否使用session</td></tr><tr><td style="text-align:left;">isELIgnored</td><td style="text-align:left;">指定是否执行EL表达式</td></tr><tr><td style="text-align:left;">isScriptingEnabled</td><td style="text-align:left;">确定脚本元素能否被使用</td></tr></tbody></table><h3 id="page指令的使用" tabindex="-1"><a class="header-anchor" href="#page指令的使用" aria-hidden="true">#</a> Page指令的使用</h3><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%--告知浏览器以什么格式和编码解析 响应的数据--%&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot;  %&gt;

&lt;%--设置JSP页面转换的语言--%&gt;
&lt;%@ page language=&quot;java&quot;%&gt;

&lt;%--导包--%&gt;
&lt;%@ page import=&quot;com.meturing.entity.User&quot; %&gt;

&lt;%--在转换成java代码时使用的编码 一般不用设置--%&gt;
&lt;%@ page pageEncoding=&quot;UTF-8&quot; %&gt;

&lt;%--指定错误页 当页面发生错误时 指定跳转的页面--%&gt;
&lt;%@ page errorPage=&quot;error500.JSP&quot; %&gt;

&lt;%--指定当前页为异常提示页 当前页面可以接收异常对象 --%&gt;
&lt;%@page isErrorPage=&quot;true&quot; %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>errorPage </code>是一种处理错误提示页的功能除了JSP有的错误提示页功能 javaEE中自带其他错误提示页处理功能,具体配置如下</p><p>在web.xml 配置各种错误的提示页</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;error-page&gt;
&lt;error-code&gt;500&lt;/error-code&gt;
&lt;location&gt;/error500.JSP&lt;/location&gt;
&lt;/error-page&gt;

&lt;error-page&gt;
&lt;error-code&gt;404&lt;/error-code&gt;
&lt;location&gt;/error404.JSP&lt;/location&gt;
&lt;/error-page&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当JSP中发生了异常时,如果JSP中配置的错误页和web.xml 中配置的错误页冲突了,JSP page指令的 <strong>errorPage优先级更高</strong></p><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="include指令标签" tabindex="-1"><a class="header-anchor" href="#include指令标签" aria-hidden="true">#</a> Include指令标签</h2><p>JSP可以通过include指令来包含其他文件.<br> 被包含的文件可以是JSP文件、HTML文件或文本文件.<br> 包含的文件就好像是该JSP文件的一部分，会被<strong>同时编译执行</strong>。</p><p>除了include指令标签可以实现引入以外,使用 <code>jsp:include</code> 也可以实现引入</p><h3 id="静态引入和动态引入" tabindex="-1"><a class="header-anchor" href="#静态引入和动态引入" aria-hidden="true">#</a> 静态引入和动态引入</h3><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%--静态引入使用的是 include 指令标签
被引入的JSP页面不会生成java代码 被引入的网页和当前页生成代码后形成了一个java文件--%&gt;
&lt;%@include file=&quot;head.JSP&quot;%&gt;

&lt;%--动态引入 JSP标签中的 include选项
被引入的JSP页面会生成独立的java代码 
在生成的java代码中 使用JSPRuntimeLibrary.include(request, response, &quot;head.JSP&quot;, out, false);引入其他页面
--%&gt;
&lt;jsp:include page=&quot;head.JSP&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看转译之后的java源代码文件中的区别</p><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',23),h=t("li",null,[e("静态引入: "),t("code",null,"@include"),e(" 被引入的网页和当前页生成代码后形成了一个java文件")],-1),b=t("code",null," jsp:include",-1),f=a(`<h2 id="taglib指令标签" tabindex="-1"><a class="header-anchor" href="#taglib指令标签" aria-hidden="true">#</a> Taglib指令标签</h2><p>JSP API允许用户自定义标签，一个自定义标签库就是自定义标签的集合。</p><p>Taglib指令引入一个自定义标签集合的定义，包括库路径、自定义标签。</p><h3 id="taglib指令的语法" tabindex="-1"><a class="header-anchor" href="#taglib指令的语法" aria-hidden="true">#</a> Taglib指令的语法</h3><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ taglib  uri=&quot;uri&quot; prefix=&quot;prefixOfTag&quot; %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function m(p,x){const l=d("font");return n(),r("div",null,[v,t("ul",null,[h,t("li",null,[e("动态引入:"),b,e(" 被引入的JSP页面会生成"),s(l,{color:"#ff0000"},{default:o(()=>[e("独立的java代码")]),_:1})])]),f])}const y=i(u,[["render",m],["__file","JSP指令标签.html.vue"]]);export{y as default};
