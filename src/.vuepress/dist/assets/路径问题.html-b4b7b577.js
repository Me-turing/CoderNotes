import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as t}from"./app-c47b8d81.js";const e={},p=t(`<h2 id="前端路径问题" tabindex="-1"><a class="header-anchor" href="#前端路径问题" aria-hidden="true">#</a> 前端路径问题</h2><h3 id="相对路径与绝对路径" tabindex="-1"><a class="header-anchor" href="#相对路径与绝对路径" aria-hidden="true">#</a> 相对路径与绝对路径</h3><p><strong>相对路径</strong> : 不以/开头,就是相对路径 ,<code>..</code>代表向上一层</p><p><strong>绝对路径</strong> : 以/开头,在页面上 /代表从项目的部署目录开始找(从webapps中开始找),页面的绝对路径要有项目名,除非我们的项目没有设置项目名</p><h3 id="base基准路径" tabindex="-1"><a class="header-anchor" href="#base基准路径" aria-hidden="true">#</a> Base基准路径</h3><p>base标签可以简化相对路径,当使用相对路径时,默认会在相对路径之前补充 base中的内容,如果base标签不写,那么默认就是当前文件所在的路径</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://127.0.0.1:8080/testServlet4_war_exploded/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>相对(基准)路径</strong> : 以当前文件本身的位置去定位其他文件,相对自己的路径,以当前文件所在的位置为基准位置<br><strong>绝对(基准)路径</strong> : 以一个固定的位置去定位其他文文件,以一个固定的路径作为定位文件的基准位置,和文件本身位置无关</p><h3 id="演示案例" tabindex="-1"><a class="header-anchor" href="#演示案例" aria-hidden="true">#</a> 演示案例</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
      base标签的作用是在相对路径之前自动补充base[href]中的值
      如果base标签不写,那么默认就是当前文件所在的路径
    --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://127.0.0.1:8080/testServlet4_war_exploded/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
this is page a1
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a2.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name">TARGET</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_self<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>相对路径跳转至A2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../../b/b2/b1.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name">TARGET</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_self<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>相对路径跳转至b1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a/a2/a2.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name">TARGET</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_self<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>base相对路径跳转至A2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b/b2/b1.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name">TARGET</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_self<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>base相对路径跳转至b1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/testServlet4_war_exploded/a/a2/a2.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name">TARGET</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_self<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>绝对路径跳转至A2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/testServlet4_war_exploded/b/b2/b1.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name">TARGET</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_self<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>绝对路径跳转至b1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="请求转发路径" tabindex="-1"><a class="header-anchor" href="#请求转发路径" aria-hidden="true">#</a> 请求转发路径</h2><h3 id="相对路径与绝对路径-1" tabindex="-1"><a class="header-anchor" href="#相对路径与绝对路径-1" aria-hidden="true">#</a> 相对路径与绝对路径</h3><p><strong>对基准路径</strong> : 相对于当前Servlet本身的位置,<strong>urlPattern决定了位置</strong><br><strong>绝对基准路径</strong> : 永远是以项目为基准路径(不允许跨服务,所以绝对路径只能是本服务内的资源)</p><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><ol><li>以<code>/</code>开头的路径是绝对路径,不以<code>/</code>开头是相对路径</li><li>绝对路径以当前项目名部署名为根路径,<strong>绝对路径后不需要写当前项目部署名</strong></li><li><code>../</code>代表向上一层的路径</li><li>servlet的相对路径是相对于<code>url-pattern</code>中的路径,是虚拟的路径</li></ol><h3 id="演示代码" tabindex="-1"><a class="header-anchor" href="#演示代码" aria-hidden="true">#</a> 演示代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">&quot;/c/c2/servlet1.do&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet1</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">/*相对路径访问a1.html*/</span>
        <span class="token comment">//RequestDispatcher requestDispatcher = req.getRequestDispatcher(&quot;a/a2/a1.html&quot;);</span>
        <span class="token comment">/*urlpatterns影响相对路径*/</span>
        <span class="token comment">//RequestDispatcher requestDispatcher = req.getRequestDispatcher(&quot;../../a/a2/a1.html&quot;);</span>
        <span class="token comment">/*绝对路径访问a1*/</span>
        <span class="token class-name">RequestDispatcher</span> requestDispatcher <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/a/a2/a1.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        requestDispatcher<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应重定向路径" tabindex="-1"><a class="header-anchor" href="#响应重定向路径" aria-hidden="true">#</a> 响应重定向路径</h2><p>响应重定向和请求转发中的路径略有不同</p><h3 id="相对路径与绝对路径-2" tabindex="-1"><a class="header-anchor" href="#相对路径与绝对路径-2" aria-hidden="true">#</a> 相对路径与绝对路径</h3><p><strong>相对路径</strong> : 相对于urlPatterns定义的路径<br><strong>绝对路径</strong> : 以项目部署路径为基准路径 (webapps), 响应重定向的绝对路径中,要加项目部署名,除非当前项目没有给定部署名</p><h3 id="注意事项-1" tabindex="-1"><a class="header-anchor" href="#注意事项-1" aria-hidden="true">#</a> 注意事项</h3><ol><li>以<code>/</code>开头的路径是绝对路径,不以<code>/</code>开头是相对路径</li><li>绝对路径以当前项目所在目录为跟路径,<strong>绝对路径后需要写当前项目部署名</strong></li><li><code>../</code>代表向上一层的路径</li><li>servlet的相对路径是相对于url-pattern中的路径,是虚拟的路径</li></ol><h3 id="演示代码-1" tabindex="-1"><a class="header-anchor" href="#演示代码-1" aria-hidden="true">#</a> 演示代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">&quot;/servlet2.do&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet2</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 响应重定向到a1.html</span>
       <span class="token comment">// resp.sendRedirect(&quot;../../a/a2/a1.html&quot;);</span>
        <span class="token comment">//resp.sendRedirect(&quot;a/a2/a1.html&quot;);</span>
        <span class="token class-name">ServletContext</span> servletContext <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> contextPath <span class="token operator">=</span> servletContext<span class="token punctuation">.</span><span class="token function">getContextPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//  /testServlet4_war_exploded</span>
        resp<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span>contextPath<span class="token operator">+</span><span class="token string">&quot;/a/a2/a1.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路径的使用和记忆建议" tabindex="-1"><a class="header-anchor" href="#路径的使用和记忆建议" aria-hidden="true">#</a> 路径的使用和记忆建议</h2><ol><li>建议在url-pattern中,不要书写没有必要的多层次路径<code> /c/c2</code>,因为这会影响请求转发和响应重定向的相对路径写法</li><li>绝对路径在书写时,只有请求转发不需要写项目部署名,页面上和响应重定向的绝对路径都需要些项目的部署名​</li><li>相对路径在使用时,无论是页面还是请求转发还是响应重定向都不需要项目名</li></ol>`,27),o=[p];function c(l,u){return n(),s("div",null,o)}const k=a(e,[["render",c],["__file","路径问题.html.vue"]]);export{k as default};
