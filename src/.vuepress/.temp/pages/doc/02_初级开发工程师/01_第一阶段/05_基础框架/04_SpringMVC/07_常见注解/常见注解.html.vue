<template><div><h2 id="requestmapping" tabindex="-1"><a class="header-anchor" href="#requestmapping" aria-hidden="true">#</a> @RequestMapping</h2>
<h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3>
<p>用于建立请求 URL 和处理请求方法之间的对应关系</p>
<h3 id="出现位置" tabindex="-1"><a class="header-anchor" href="#出现位置" aria-hidden="true">#</a> 出现位置</h3>
<ul>
<li>类上：请求 URL 的第一级访问目录。此处不写的话，就相当于应用的根目录。写的话需要以/开头</li>
<li>方法上:  请求 URL 的第二级访问目录</li>
</ul>
<h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3>
<ul>
<li>value : 用于指定请求的 URL。它和 path 属性的作用是一样的。</li>
<li>method：用于指定请求的方式。</li>
<li>params(了解)：用于指定限制请求参数的条件。它支持简单的表达式。要求请求参数的 key 和 value 必须和 配置的一模一样。</li>
<li>headers(了解)：用于指定限制请求消息头的条件。</li>
</ul>
<h3 id="使用案例" tabindex="-1"><a class="header-anchor" href="#使用案例" aria-hidden="true">#</a> 使用案例</h3>
<p>@RequestMapping注解的使用 见下列演示:</p>
<p><RouterLink to="/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/05_%E8%B7%AF%E5%BE%84%E6%98%A0%E5%B0%84%E4%B8%8ERESTful%E9%A3%8E%E6%A0%BC/%E8%B7%AF%E5%BE%84%E6%98%A0%E5%B0%84%E4%B8%8ERESTful%E9%A3%8E%E6%A0%BC.html#@RequestMapping%E6%B3%A8%E8%A7%A3%E7%9A%84%E4%BD%BF%E7%94%A8">@RequestMapping注解的使用</RouterLink></p>
<h2 id="requestparam" tabindex="-1"><a class="header-anchor" href="#requestparam" aria-hidden="true">#</a> @RequestParam</h2>
<h3 id="作用-1" tabindex="-1"><a class="header-anchor" href="#作用-1" aria-hidden="true">#</a> 作用</h3>
<p>把请求中指定名称的参数给控制器中的形参赋值。</p>
<h3 id="出现位置-1" tabindex="-1"><a class="header-anchor" href="#出现位置-1" aria-hidden="true">#</a> 出现位置</h3>
<ul>
<li>方法形参</li>
</ul>
<h3 id="属性-1" tabindex="-1"><a class="header-anchor" href="#属性-1" aria-hidden="true">#</a> 属性</h3>
<ul>
<li><code v-pre>value</code>：请求参数中的名称。</li>
<li><code v-pre>required</code>：请求参数中是否必须提供此参数。<strong>默认值：true</strong>。表示必须提供，如果不提供将报错。</li>
</ul>
<h3 id="使用案例-1" tabindex="-1"><a class="header-anchor" href="#使用案例-1" aria-hidden="true">#</a> 使用案例</h3>
<p><RouterLink to="/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/06_%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E7%9A%84%E5%A4%84%E7%90%86/%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E7%9A%84%E5%A4%84%E7%90%86.html#%E8%A7%A3%E8%80%A6%E5%90%88%E6%96%B9%E5%BC%8F%E3%80%90%E7%86%9F%E7%BB%83%E3%80%91">解耦合方式【熟练】</RouterLink></p>
<h2 id="pathvariable" tabindex="-1"><a class="header-anchor" href="#pathvariable" aria-hidden="true">#</a> @PathVariable</h2>
<h3 id="作用-2" tabindex="-1"><a class="header-anchor" href="#作用-2" aria-hidden="true">#</a> 作用</h3>
<p>用于绑定 url 中的占位符。例如：请求 url 中<code v-pre> /delete/{id}</code>，这个<code v-pre>{id}</code>就是 url 占位符。 url 支持占位符是 spring3.0 之后加入的。是 springmvc 支持 rest 风格 URL 的一个重要标志。</p>
<h3 id="出现位置-2" tabindex="-1"><a class="header-anchor" href="#出现位置-2" aria-hidden="true">#</a> 出现位置</h3>
<ul>
<li>方法形参</li>
</ul>
<h3 id="属性-2" tabindex="-1"><a class="header-anchor" href="#属性-2" aria-hidden="true">#</a> 属性</h3>
<p><code v-pre>value</code>：用于指定 url 中占位符名称。<br>
<code v-pre>required</code>：是否必须提供占位符。</p>
<h3 id="使用案例-2" tabindex="-1"><a class="header-anchor" href="#使用案例-2" aria-hidden="true">#</a> 使用案例</h3>
<p><RouterLink to="/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/05_%E8%B7%AF%E5%BE%84%E6%98%A0%E5%B0%84%E4%B8%8ERESTful%E9%A3%8E%E6%A0%BC/%E8%B7%AF%E5%BE%84%E6%98%A0%E5%B0%84%E4%B8%8ERESTful%E9%A3%8E%E6%A0%BC.html#@PathVariable%E6%B3%A8%E8%A7%A3%E5%92%8CRESTful%E9%A3%8E%E6%A0%BC">@PathVariable注解和RESTful风格</RouterLink></p>
<h2 id="requestheader-了解" tabindex="-1"><a class="header-anchor" href="#requestheader-了解" aria-hidden="true">#</a> @RequestHeader (了解)</h2>
<h3 id="作用-3" tabindex="-1"><a class="header-anchor" href="#作用-3" aria-hidden="true">#</a> 作用</h3>
<p>用于获取请求消息头。</p>
<h3 id="出现位置-3" tabindex="-1"><a class="header-anchor" href="#出现位置-3" aria-hidden="true">#</a> 出现位置</h3>
<ul>
<li>方法形参</li>
</ul>
<h3 id="属性-3" tabindex="-1"><a class="header-anchor" href="#属性-3" aria-hidden="true">#</a> 属性</h3>
<p><code v-pre>value</code>：提供消息头名称<br>
<code v-pre>required</code>：是否必须有此消息头</p>
<h3 id="使用案例-3" tabindex="-1"><a class="header-anchor" href="#使用案例-3" aria-hidden="true">#</a> 使用案例</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@RequestMapping(&quot;/getRequestHeader&quot;) 
public String getRequestHeader(@RequestHeader(value=&quot;Accept&quot;, required=false)String requestHeader){ 
    System.out.println(requestHeader); 
    return &quot;success&quot;; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cookievalue-了解" tabindex="-1"><a class="header-anchor" href="#cookievalue-了解" aria-hidden="true">#</a> @CookieValue (了解)</h2>
<h3 id="作用-4" tabindex="-1"><a class="header-anchor" href="#作用-4" aria-hidden="true">#</a> 作用</h3>
<p>用于把指定 cookie 名称的值传入控制器方法参数。</p>
<h3 id="出现位置-4" tabindex="-1"><a class="header-anchor" href="#出现位置-4" aria-hidden="true">#</a> 出现位置</h3>
<ul>
<li>方法形参</li>
</ul>
<h3 id="属性-4" tabindex="-1"><a class="header-anchor" href="#属性-4" aria-hidden="true">#</a> 属性</h3>
<p><code v-pre>value</code>：指定 cookie 的名称。<br>
<code v-pre>required</code>：是否必须有此 cookie</p>
<h3 id="使用案例-4" tabindex="-1"><a class="header-anchor" href="#使用案例-4" aria-hidden="true">#</a> 使用案例</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@RequestMapping(&quot;/getCookie&quot;) 
public String getCookie(@CookieValue(value=&quot;JSESSIONID&quot;,required=false) String cookieValue){ 
    System.out.println(cookieValue); 
    return &quot;success&quot;; 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="综合案例" tabindex="-1"><a class="header-anchor" href="#综合案例" aria-hidden="true">#</a> 综合案例</h2>
<p>TestAnnotation.jsp</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;TestAnnotation/testRequestMapping&quot; method=&quot;post&quot;&gt;
   姓名 : &lt;input type=&quot;text&quot; name=&quot;name&quot;&gt;
  &lt;input type=&quot;submit&quot; value=&quot;TestRequestMapping&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Controller层 : TestAnnotation.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@RestController()
@RequestMapping(value = &quot;/TestAnnotation&quot;)
public class TestAnnotation {
    @RequestMapping(value = &quot;/{testRequestMapping}&quot;,method = RequestMethod.POST,params={&quot;name!=root&quot;},headers = {&quot;Host=localhost:8080&quot;})
    public String testRequestMapping(@RequestParam(value = &quot;name&quot;,required = false) String uname,
                                     @PathVariable(value = &quot;testRequestMapping&quot;,required = false) String path,
                                     @RequestHeader(value = &quot;Accept-Language&quot;,required = false) String sLanguage,
                                     @CookieValue(value = &quot;JSESSIONID&quot;,required = false) String sCookie){
        System.out.println(uname+&quot;/&quot;+path+&quot;/&quot;+sLanguage+&quot;/&quot;+sCookie);
        return &quot;success&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


