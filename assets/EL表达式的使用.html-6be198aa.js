import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as t,f as l}from"./app-71f45f98.js";const n={},d=l(`<h2 id="什么是el表达式" tabindex="-1"><a class="header-anchor" href="#什么是el表达式" aria-hidden="true">#</a> 什么是EL表达式</h2><p>EL表达式中定义了一些可以帮助我们快捷从域对象中取出数据的写法,基本语法为</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>\${域标志.数据名.属性名(可选)}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>四个域标志关键字分别为</p><ul><li><code>requestScope</code> - request域</li><li><code>sessionScope</code> - session域</li><li><code>applicationScope</code> - application域</li><li><code>pageScope</code> - page域</li></ul><h2 id="el表达式取出域中的数据" tabindex="-1"><a class="header-anchor" href="#el表达式取出域中的数据" aria-hidden="true">#</a> EL表达式取出域中的数据</h2><h3 id="指定域中取出数据" tabindex="-1"><a class="header-anchor" href="#指定域中取出数据" aria-hidden="true">#</a> 指定域中取出数据</h3><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page import=&quot;com.meturing.pojo.User&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
   &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;%--向pageContext域中放数据--%&gt;
	&lt;%
	    pageContext.setAttribute(&quot;msg&quot;, &quot;pageContextMessage&quot;);
	    pageContext.setAttribute(&quot;userx&quot;, new User(1,&quot;大黄&quot;,&quot;abcdefg&quot;));
    %&gt;
     &lt;%--
	    从域中取出数据
	    El表达式在获取对象属性值得时候,是通过对象的属性的get方法获取的
	    保证对象的要获取的属性必须有对应get方法才可以
	    EL表达式在使用时是不需要import其他类的
	    El如果获取的是NULL值,是不展示任何信息的
    --%&gt;
    pageContext域中的数据:&lt;br/&gt;
    msg:\${pageScope.msg}&lt;br/&gt;
    username:\${pageScope.userx.name}&lt;br/&gt;
    &lt;hr/&gt;
	request域中的数据:&lt;br/&gt;
	msg:\${requestScope.msg}&lt;br/&gt;
	username:\${requestScope.user.name}&lt;br/&gt;
	&lt;hr/&gt;
	session域中的数据:&lt;br/&gt;
	msg:\${sessionScope.msg}&lt;br/&gt;
	username:\${sessionScope.users[1].name}&lt;br/&gt;
    &lt;hr/&gt;
    application域中的数据:&lt;br/&gt;
    msg:\${applicationScope.msg}&lt;br/&gt;
    username:\${applicationScope.userMap.a.name}&lt;br/&gt;
    &lt;hr/&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="省略域取数据" tabindex="-1"><a class="header-anchor" href="#省略域取数据" aria-hidden="true">#</a> 省略域取数据</h3><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page import=&quot;com.meturing.pojo.User&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
   &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;%--向pageContext域中放数据--%&gt;
	&lt;%
	    pageContext.setAttribute(&quot;msg&quot;, &quot;pageContextMessage&quot;);
	    pageContext.setAttribute(&quot;userx&quot;, new User(1,&quot;大黄&quot;,&quot;abcdefg&quot;));
    %&gt;
	 &lt;%--
		EL表达式在取出数据的时候是可以省略域标志的
		EL表达式会自动依次到四个域中去找数据
    --%&gt;
    PageContext username:\${userx.name}&lt;br/&gt;
	Request username:\${user.name}&lt;br/&gt;
	Session username:\${users[1].name}&lt;br/&gt;
	Application username:\${userMap.a.name}&lt;br/&gt;
    &lt;hr/&gt;
    &lt;%--
	    \${数据的名字}如果省略域标志,取数据的顺序如下
	    pageContext -&gt; pagecontextMsg:\${pageScope.msg}
	    request -&gt; requestMsg:\${requestScope.msg}
	    session -&gt; sessionMsg:\${sessionScope.msg}
	    application -&gt; applicationMsg:\${applicationScope.msg}
    --%&gt;
    \${msg}
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="取请求中的参数" tabindex="-1"><a class="header-anchor" href="#取请求中的参数" aria-hidden="true">#</a> 取请求中的参数</h3><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page import=&quot;com.meturing.pojo.User&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
   &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;%--
	    EL表达式获取请求中的参数
    --%&gt;
    username:\${param.username}&lt;br/&gt;
    hobby:\${paramValues.hobby[0]}
    hobby:\${paramValues.hobby[1]}
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><ol><li>EL表达式定义在JSP页面上,在转译之后的java文件中,会被转化成java代码</li><li>EL表达式是一种后台技术,服务器上运行,不是在浏览器上运行,不能用于HTML页面</li><li>EL表达式底层是通过<strong>反射</strong>实现的,在获取对象属性值时是通过对象的get方法实现的</li></ol><h2 id="el表达式对运算符的支持" tabindex="-1"><a class="header-anchor" href="#el表达式对运算符的支持" aria-hidden="true">#</a> EL表达式对运算符的支持</h2><p>在EL表达式中, 支持运算符的使用</p><h3 id="运算符的分类" tabindex="-1"><a class="header-anchor" href="#运算符的分类" aria-hidden="true">#</a> 运算符的分类</h3><ul><li>算数运算符 <ul><li><code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>%</code></li></ul></li><li>比较运算符 <ul><li>== <code>eq</code> <code>equals</code></li><li><code>&gt;</code> <code>gt</code> <code>greater</code> <code>then</code></li><li><code>&lt;</code> <code>lt</code> <code>lower</code> <code>then</code></li><li><code>&gt;=</code> <code>ge</code> <code>greater</code> <code>then or equals</code></li><li><code>&lt;=</code> <code>le</code> <code>lower then or equals</code></li><li><code>!=</code> <code>ne</code> <code>not equals</code></li></ul></li><li>逻辑运算符 <ul><li><code>||</code> <code>or</code></li><li><code>&amp;&amp; </code> <code>and</code></li></ul></li><li>三目运算符 <ul><li><code>\${条件 ?表达式1 : 表达式2}</code></li></ul></li><li>判空运算符 <ul><li><code>empty</code></li></ul></li></ul><h3 id="el表达式运算符的使用" tabindex="-1"><a class="header-anchor" href="#el表达式运算符的使用" aria-hidden="true">#</a> EL表达式运算符的使用</h3><h4 id="算数运算符" tabindex="-1"><a class="header-anchor" href="#算数运算符" aria-hidden="true">#</a> 算数运算符</h4><p><code>+</code> 在EL表达式中的‘+’只有数学运算的功能，没有连接符的功能，它会试着把运算符两边的操作数转换为数值类型，进而进行数学加法运算，最后把结果输出。<strong>若出现 \${&#39;a&#39;+&#39;b&#39;}则会出现异常。</strong><br><code>/</code> <strong>如果除以0 结果为Infinity 而不是出现异常</strong><br><code>%</code> 如果和0取余数,那么会出现异常</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page import=&quot;java.util.List&quot; %&gt;
&lt;%@ page import=&quot;java.util.ArrayList&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
算数运算符：
&lt;hr/&gt;
\${10 + 10}&lt;br/&gt;&lt;%-- 20 --%&gt;
\${&quot;10&quot; + 10}&lt;br/&gt;&lt;%-- 20 --%&gt;
\${&quot;10&quot; + &quot;10&quot;}&lt;br/&gt;&lt;%-- 20 --%&gt;
&lt;%--\${&quot;10a&quot; + 10}&lt;br/&gt;--%&gt;&lt;%-- 异常 --%&gt;
\${10/0}&lt;br/&gt;&lt;%-- Infinity --%&gt;
&lt;%-- \${10%0}&lt;br/&gt;--%&gt;&lt;%-- 异常 --%&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关系运算符-比较运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符-比较运算符" aria-hidden="true">#</a> 关系运算符/比较运算符</h4><p>比较运算符推荐写成字母形式,不推荐使用 == &gt;= &lt;=</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page import=&quot;java.util.List&quot; %&gt;
&lt;%@ page import=&quot;java.util.ArrayList&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
关系运算符/比较运算符
&lt;hr/&gt;
\${10 == 10}&lt;br/&gt;
\${10 eq 10}&lt;br/&gt;
\${10 gt 8}&lt;br/&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h4><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page import=&quot;java.util.List&quot; %&gt;
&lt;%@ page import=&quot;java.util.ArrayList&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
逻辑运算符
&lt;hr/&gt;
\${ true || false}&lt;br/&gt;
\${ true or false}&lt;br/&gt;
\${ true &amp;&amp; false}&lt;br/&gt;
\${ true and false}&lt;br/&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="条件运算符-三目运算符" tabindex="-1"><a class="header-anchor" href="#条件运算符-三目运算符" aria-hidden="true">#</a> 条件运算符/三目运算符</h4><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page import=&quot;java.util.List&quot; %&gt;
&lt;%@ page import=&quot;java.util.ArrayList&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
条件运算符/三目运算符
&lt;hr/&gt;
\${(100-1)%3==0?10+1:10-1}&lt;br/&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="判断空运算符" tabindex="-1"><a class="header-anchor" href="#判断空运算符" aria-hidden="true">#</a> 判断空运算符</h4><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page import=&quot;java.util.List&quot; %&gt;
&lt;%@ page import=&quot;java.util.ArrayList&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
判断空运算符
&lt;%--empty 为null 则为true--%&gt;
&lt;%  //向域中放入数据
	pageContext.setAttribute(&quot;a&quot;,null);
	pageContext.setAttribute(&quot;b&quot;,&quot;&quot;);
	int[] arr ={};
	pageContext.setAttribute(&quot;arr&quot;,arr);
	List list =new ArrayList();
	pageContext.setAttribute(&quot;list&quot;,list);
%&gt;
&lt;hr/&gt;
\${empty a}&lt;br/&gt;
\${empty b}&lt;br/&gt;&lt;%--字符串长度为0 则认为是空--%&gt;
\${empty arr}&lt;br/&gt;&lt;%--数组长度为0 认为不是空--%&gt;
\${empty list}&lt;br/&gt;&lt;%--集合长度为0 认为是空--%&gt;
\${list.size() eq 0}&lt;br/&gt;&lt;%--集合长度为0 认为是空--%&gt;
&lt;/body&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),a=[d];function s(r,u){return i(),t("div",null,a)}const o=e(n,[["render",s],["__file","EL表达式的使用.html.vue"]]);export{o as default};
