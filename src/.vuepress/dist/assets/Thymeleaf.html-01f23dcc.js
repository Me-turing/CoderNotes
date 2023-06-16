import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,f as t}from"./app-c47b8d81.js";const e="/CoderNotes/assets/image_5lPb_H-afR-75421ef1.png",p="/CoderNotes/assets/image_pHFg0pNqBH-f3f67ec9.png",o="/CoderNotes/assets/image_yeyatvWmxH-a675e97f.png",l="/CoderNotes/assets/image_O_OeRosvNd-cb19c6c7.png",r="/CoderNotes/assets/image_wLgALIXOVO-6785e724.png",c="/CoderNotes/assets/image_c0tjkVb5CZ-2b441ae5.png",i="/CoderNotes/assets/image_5KASsuWjeu-4287e896.png",u={},d=t('<p>相关资料<br><a href="file/Thymeleaf-3.0.11_B0zIAhCTc5.pdf">Thymeleaf-3.0.11.pdf</a><br><a href="file/Thymeleaf%E7%B1%BB%E5%BA%93_DL_WdBqpig.zip">Thymeleaf类库.zip</a></p><h2 id="mvc" tabindex="-1"><a class="header-anchor" href="#mvc" aria-hidden="true">#</a> MVC</h2><ul><li>M：Model模型</li><li>V：View视图</li><li>C：Controller控制器</li></ul><h3 id="为什么要使用mvc" tabindex="-1"><a class="header-anchor" href="#为什么要使用mvc" aria-hidden="true">#</a> 为什么要使用MVC</h3><p>我们如果只使用HTML作为视图的话，它是无法展示动态数据的，所以我们对HTML的新的期待：<strong>既能够正常显示页面，又能在页面中包含动态数据部分</strong>。而动态数据单靠HTML本身是无法做到的，所以此时我们需要引入服务器端动态视图模板技术。</p><h3 id="mvc和三层架构的关系" tabindex="-1"><a class="header-anchor" href="#mvc和三层架构的关系" aria-hidden="true">#</a> MVC和三层架构的关系</h3><p>MVC是在表述层开发中运用的一种设计理念。主张把<strong>封装数据的『模型』</strong>、<strong>显示用户界面的『视图』</strong>、协调调度的『控制器』分开。</p><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们在原有的表述层中，将servlet中对HTML的操作抽离出来，<strong>将Servlet只作为Controller控制器</strong>负责页面和数据之间的调度，<strong>将HTML页面只作为View视图</strong>负责数据渲染和提交响应，<strong>数据封装到Bean中作为Model模型</strong>贯穿三层架构</p><h2 id="thymeleaf概念" tabindex="-1"><a class="header-anchor" href="#thymeleaf概念" aria-hidden="true">#</a> Thymeleaf概念</h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p><strong>Thymeleaf是一款用于渲染XML/XHTML/HTML5内容的模板引擎。类似JSP，Velocity，FreeMaker等， 它也可以轻易的与Spring MVC等Web框架进行集成作为Web应用的模板引擎。它的主要作用是在静态页面上渲染显示动态数据</strong></p><h3 id="优势" tabindex="-1"><a class="header-anchor" href="#优势" aria-hidden="true">#</a> 优势</h3><ul><li>SpringBoot官方推荐使用的视图模板技术，和SpringBoot完美整合。</li><li>不经过服务器运算仍然可以直接查看原始值，对前端工程师更友好。</li></ul><h3 id="开发步骤" tabindex="-1"><a class="header-anchor" href="#开发步骤" aria-hidden="true">#</a> 开发步骤</h3><ul><li>将视图层文件归并到web-inf下的view文件</li><li>在web.xml文件中配置逻辑视图路径</li><li>在Servlet中新建一个基类</li><li>新的Servlet继承基类，通过processTemplate方法跳转视图</li></ul><h2 id="thymeleaf的基本语法" tabindex="-1"><a class="header-anchor" href="#thymeleaf的基本语法" aria-hidden="true">#</a> Thymeleaf的基本语法</h2><h3 id="th名称空间" tabindex="-1"><a class="header-anchor" href="#th名称空间" aria-hidden="true">#</a> th名称空间</h3><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="表达式语法" tabindex="-1"><a class="header-anchor" href="#表达式语法" aria-hidden="true">#</a> 表达式语法</h3><p>任何HTML标签原有的属性，前面加上『th:』就都可以通过Thymeleaf来设定新值。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&lt;</span>标签 th:属性名<span class="token operator">=</span><span class="token string">&quot;\${参数key}&quot;</span><span class="token operator">&gt;</span>文本<span class="token operator">&lt;</span><span class="token operator">/</span>标签<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改文本" tabindex="-1"><a class="header-anchor" href="#修改文本" aria-hidden="true">#</a> 修改文本</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&lt;</span>p th:<span class="token keyword">text</span><span class="token operator">=</span><span class="token string">&quot;标签体新值&quot;</span><span class="token operator">&gt;</span>标签体原始值<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="修改属性" tabindex="-1"><a class="header-anchor" href="#修改属性" aria-hidden="true">#</a> 修改属性</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&lt;</span>input <span class="token keyword">type</span><span class="token operator">=</span><span class="token string">&quot;text&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;username&quot;</span> th:<span class="token keyword">value</span><span class="token operator">=</span><span class="token string">&quot;文本框新值&quot;</span> <span class="token keyword">value</span><span class="token operator">=</span><span class="token string">&quot;文本框旧值&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="解析url" tabindex="-1"><a class="header-anchor" href="#解析url" aria-hidden="true">#</a> 解析URL</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token comment">--</span>
使用Thymeleaf解析url地址
@{}的作用是动态获取上下文路径（当前项目路径）
<span class="token comment">--&gt;</span>
<span class="token operator">&lt;</span>a th:href<span class="token operator">=</span><span class="token string">&quot;@{/index.html}&quot;</span><span class="token operator">&gt;</span>访问<span class="token keyword">index</span><span class="token punctuation">.</span>html<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意 : 不经过服务器解析，直接用浏览器打开HTML文件，看到的是『标签体原始值』, 经过服务器解析，Thymeleaf引擎根据<code>th:text</code>属性指定的『标签体新值』去替换『标签体原始值』</p></blockquote><h3 id="域对象的使用" tabindex="-1"><a class="header-anchor" href="#域对象的使用" aria-hidden="true">#</a> 域对象的使用</h3><h4 id="全局域-servletcontext" tabindex="-1"><a class="header-anchor" href="#全局域-servletcontext" aria-hidden="true">#</a> 全局域 ServletContext</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token comment">//Servlet代码 全局域 服务器关闭才关闭</span>
 <span class="token class-name">ServletContext</span> servletContext <span class="token operator">=</span> <span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 servletContext<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;servletContextkey&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;servletContextvalue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 <span class="token comment">//HTML代码</span>
 <span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${application.servletContextkey}&quot;</span><span class="token operator">&gt;</span>源文本<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>   <span class="token comment">//输出  servletContextvalue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="请求域-request-setattribute" tabindex="-1"><a class="header-anchor" href="#请求域-request-setattribute" aria-hidden="true">#</a> 请求域 request.setAttribute</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token comment">//请求域 仅限于当前请求</span>
 request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;奥巴马&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//request域</span>
 
 <span class="token comment">//HTML代码</span>
 <span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${username}&quot;</span><span class="token operator">&gt;</span><span class="token class-name">Original</span> <span class="token class-name">Value</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>   <span class="token comment">//输出  奥巴马</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="会话-session" tabindex="-1"><a class="header-anchor" href="#会话-session" aria-hidden="true">#</a> 会话 session</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//session域  仅限于当前用户会话</span>
<span class="token class-name">HttpSession</span> session <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//session 会话域</span>
session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;sessionkey&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;sessionvalue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//HTML代码</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${session.sessionkey}&quot;</span><span class="token operator">&gt;</span>源文本<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>   <span class="token comment">//输出  sessionvalue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数的使用" tabindex="-1"><a class="header-anchor" href="#请求参数的使用" aria-hidden="true">#</a> 请求参数的使用</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>webday07<span class="token operator">/</span><span class="token class-name">ServletDemo01</span><span class="token operator">?</span>name<span class="token operator">=</span><span class="token number">123</span><span class="token operator">&amp;</span>pwd<span class="token operator">=</span><span class="token number">123</span><span class="token operator">&amp;</span>hobby<span class="token operator">=</span>篮球<span class="token operator">&amp;</span>hobby<span class="token operator">=</span>羽毛球
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="获取一个请求参数" tabindex="-1"><a class="header-anchor" href="#获取一个请求参数" aria-hidden="true">#</a> 获取一个请求参数</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>p<span class="token punctuation">&gt;</span></span>请求参数获取：根据参数名获取一个<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${param.name}&quot;</span><span class="token operator">&gt;</span>源文本<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${param.pwd}&quot;</span><span class="token operator">&gt;</span>源文本<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取多个请求参数" tabindex="-1"><a class="header-anchor" href="#获取多个请求参数" aria-hidden="true">#</a> 获取多个请求参数</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>p<span class="token punctuation">&gt;</span></span>请求参数获取：根据参数名获取多个<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${param.hobby}&quot;</span><span class="token operator">&gt;</span>源文本<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${param.hobby[0]}&quot;</span><span class="token operator">&gt;</span>源文本<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${param.hobby[1]}&quot;</span><span class="token operator">&gt;</span>源文本<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="访问servlet并附带请求参数" tabindex="-1"><a class="header-anchor" href="#访问servlet并附带请求参数" aria-hidden="true">#</a> 访问Servlet并附带请求参数</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@{user(method=&#39;toRegisterPage&#39;)}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>register<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>注册<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>@{user(method=&#39;toRegisterPage&#39;)</code> 表示访问：<code>http://localhost:8080/webday09/user?method=toRegisterPage</code></p><h2 id="thymeleaf的内置对象" tabindex="-1"><a class="header-anchor" href="#thymeleaf的内置对象" aria-hidden="true">#</a> Thymeleaf的内置对象</h2><p>所谓内置对象其实就是<strong>在Thymeleaf的表达式中可以直接使用的对象</strong></p><h3 id="基本内置对象" tabindex="-1"><a class="header-anchor" href="#基本内置对象" aria-hidden="true">#</a> 基本内置对象</h3><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>使用request对象<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${#request.getClass().getName()}&quot;</span><span class="token operator">&gt;</span>使用request对象所属类的全限定名<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${#request.getContextPath()}&quot;</span><span class="token operator">&gt;</span>使用request对象项目部署名<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${#request.getAttribute(&#39;username&#39;)}&quot;</span><span class="token operator">&gt;</span>使用request域对象项目部署名<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>如果不清楚这个对象有哪些方法可以使用，那么就通过getClass().getName()获取全类名，再回到Java环境查看这个对象有哪些方法</strong></li><li>内置对象的方法可以直接调用</li><li>调用方法时需要传参的也可以直接传入参数</li></ul><h3 id="公共内置对象" tabindex="-1"><a class="header-anchor" href="#公共内置对象" aria-hidden="true">#</a> 公共内置对象</h3><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>lists内置对象<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${#lists.isEmpty(aNotEmptyList)}&quot;</span><span class="token operator">&gt;</span>判断aNotEmptyList这个key是否为空<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${#lists.isEmpty(anEmptyList)}&quot;</span><span class="token operator">&gt;</span>判断anEmptyList这个key是否为空<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>公共内置对象的源码位置</p><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="ognl语法" tabindex="-1"><a class="header-anchor" href="#ognl语法" aria-hidden="true">#</a> OGNL语法</h2><p>OGNL：Object-Graph Navigation Language对象-图 导航语言</p><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>从根对象触发</strong>，通过特定的语法，逐层访问对象的各种属性。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${student.studentName}&quot;</span><span class="token operator">&gt;</span>获取student的名字<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${student.subject.subjectName}&quot;</span><span class="token operator">&gt;</span>获取student的学科名字<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${student.schoolList[1].schoolName}&quot;</span><span class="token operator">&gt;</span>获取student的第二个学校的名字<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">&quot;\${student.teacherMap.tKey.teacherName}&quot;</span><span class="token operator">&gt;</span>获取student的老师的名字<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Thymeleaf环境下，<code>\${}</code>中的表达式可以从下列元素开始：</p><ul><li>访问属性域的起点 <ul><li>请求域属性名</li><li>session</li><li>application</li></ul></li><li>param</li><li>内置对象 <ul><li>request</li><li>session</li><li>lists</li><li>strings</li></ul></li></ul><p><strong>属性访问语法</strong></p><ul><li>访问对象属性：使用getXxx()、setXxx()方法定义的属性 <ul><li>对象.属性名</li></ul></li><li>访问List集合或数组 <ul><li>集合或数组[下标]</li></ul></li><li>访问Map集合 <ul><li>Map集合.key</li><li>Map集合[&#39;key&#39;]</li></ul></li></ul><h3 id="分支与迭代" tabindex="-1"><a class="header-anchor" href="#分支与迭代" aria-hidden="true">#</a> 分支与迭代</h3><h4 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h4><h5 id="if和unles" tabindex="-1"><a class="header-anchor" href="#if和unles" aria-hidden="true">#</a> if和unles</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>
    th<span class="token operator">:</span><span class="token keyword">if</span> 如果它值为<span class="token boolean">true</span> 则显示标签
    th<span class="token operator">:</span>unless 如果它值为<span class="token boolean">true</span> 则不显示标签
<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;\${#lists.isEmpty(teacherList)}&quot;</span><span class="token operator">&gt;</span>没有数据<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;\${not #lists.isEmpty(teacherList)}&quot;</span><span class="token operator">&gt;</span>有数据<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p th<span class="token operator">:</span>unless<span class="token operator">=</span><span class="token string">&quot;\${#lists.isEmpty((teacherList))}&quot;</span><span class="token operator">&gt;</span>有数据<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> switch</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>
  <span class="token keyword">switch</span>
<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div th<span class="token operator">:</span><span class="token keyword">switch</span><span class="token operator">=</span><span class="token string">&quot;\${user.memberLevel}&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p th<span class="token operator">:</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;level-1&quot;</span><span class="token operator">&gt;</span>白银<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p th<span class="token operator">:</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;level-2&quot;</span><span class="token operator">&gt;</span>钻石<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p th<span class="token operator">:</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;level-3&quot;</span><span class="token operator">&gt;</span>王者<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h3><p>类似于<code>vue中的v-for</code>对集合进行迭代遍历，每次遍历出来一条数据就添加一个标签<br> 语法 :<code> th:each=&quot;遍历出来的数据，数据的状态 ：要遍历的数据&quot;</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Servlet代码 --&gt;</span>
//往请求域中存储一个teacher对象
request.setAttribute(&quot;teacherList&quot;, Arrays.asList(new Teacher(&quot;老师1&quot;),new Teacher(&quot;老师2&quot;),new Teacher(&quot;老师3&quot;)));

<span class="token comment">&lt;!-- html代码 --&gt;</span>
<span class="token comment">&lt;!--
    迭代：th:each
    用法：
        1.th:each写在什么标签上？每次遍历出来一条数据就添加一个标签，那么th:each久写在这个标签上
        2.th:each的语法 th:each=&quot;遍历出来的数据，数据的状态 ：要遍历的数据&quot;
        3.status 表示遍历的状态 包含以下属性
            index 遍历出来每一个元素的下标
            count 遍历出来每一个元素的计数
            size  遍历集合的长度
            current 遍历出来的当前元素
            even/odd  表示遍历出来的元素是否是奇数或者是否是偶数
            first 表示遍历出来的元素是否是第一个
            last 表示遍历出来的元素是否是最后一个
--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>teacher,status : \${teacherList}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${status.id}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这里显示编号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${teacher.teacherName}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这里显示老师的名字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次遍历出来一条数据就添加一个标签</p><h2 id="包含其他页面模板" tabindex="-1"><a class="header-anchor" href="#包含其他页面模板" aria-hidden="true">#</a> 包含其他页面模板</h2><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="创建模板" tabindex="-1"><a class="header-anchor" href="#创建模板" aria-hidden="true">#</a> 创建模板</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>fragment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>模板名称<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>被抽取出来的头部内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用模板" tabindex="-1"><a class="header-anchor" href="#使用模板" aria-hidden="true">#</a> 使用模板</h3><table><thead><tr><th>语法</th><th>效果</th><th>特点</th></tr></thead><tbody><tr><td>th:insert</td><td>把目标的代码片段整个插入到当前标签内部</td><td>它会保留页面自身的标签</td></tr><tr><td>th:replace</td><td>用目标的代码替换当前标签</td><td>它不会保留页面自身的标签</td></tr><tr><td>th:include</td><td>把目标的代码片段去除最外层标签，然后再插入到当前标签内部</td><td>它会去掉片段外层标记，同时保留页面自身标记</td></tr></tbody></table><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 代码片段所在页面的逻辑视图 :: 代码片段的名称 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>badBoy<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>insert</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>segment :: header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    div标签的原始内容
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>worseBoy<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>segment :: header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    div标签的原始内容
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>worstBoy<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>segment :: header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    div标签的原始内容
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,82),k=[d];function v(h,g){return s(),n("div",null,k)}const q=a(u,[["render",v],["__file","Thymeleaf.html.vue"]]);export{q as default};
