<template><div><p>@RequestMapping注解在前面的学习中,我们通常将他使用在方法或者类上,用来表明当前Controller控制单元的请求路径</p>
<p>接下来我们将简单学习一下@RequestMapping注解在SpringMVC项目中的应用:</p>
<h2 id="requestmapping注解的使用" tabindex="-1"><a class="header-anchor" href="#requestmapping注解的使用" aria-hidden="true">#</a> @RequestMapping注解的使用</h2>
<p>在注解中,如果是单一默认属性,在使用时可以不用<code v-pre>属性名=值</code>的形式,直接使用值就行.</p>
<h3 id="value-url路径" tabindex="-1"><a class="header-anchor" href="#value-url路径" aria-hidden="true">#</a> value:Url路径</h3>
<p>@RequestMapping注解中的<strong>value属性是默认属性</strong>,用来标识当前类或者方法的<strong>Controller控制单元</strong>的请求路径</p>
<h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4>
<p>Controller控制单元</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Controller
@RequestMapping(&quot;/meturing&quot;)
public class FirstController {
    @RequestMapping(&quot;/firstController&quot;)
    public String getFirstView() {
        System.out.println(&quot;firstController&quot;);
        //相当于请求转发
        return &quot;first&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4>
<p>当我们访问指定URL时,就会执行到具体的<strong>Controller控制单元</strong></p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601101612060.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>具体的执行流程详见: <RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/03_%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E4%B8%8E%E4%B8%89%E5%A4%A7%E7%BB%84%E4%BB%B6/%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E4%B8%8E%E4%B8%89%E5%A4%A7%E7%BB%84%E4%BB%B6.html">执行流程与三大组件</RouterLink></p>
<h3 id="method控制请求方式" tabindex="-1"><a class="header-anchor" href="#method控制请求方式" aria-hidden="true">#</a> method控制请求方式</h3>
<p>method属性 可以控制请求的方式, 值为RequestMethod的枚举值</p>
<h4 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h4>
<p>Controller控制单元</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Controller
public class TestRequestMapping {
    @RequestMapping(value = &quot;/testPostRequest&quot;, method= RequestMethod.POST)
    public String testPostRequest() {
        System.out.println(&quot;testPostRequest&quot;);
        return &quot;first&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>testRequestMapping.jsp代码</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form method=&quot;post&quot; action=&quot;testPostRequest&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;post&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试-1" tabindex="-1"><a class="header-anchor" href="#测试-1" aria-hidden="true">#</a> 测试</h4>
<p>当我们使用正确的请求方法时,即可请求到具体的控制单元</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601103145632.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>当我们前端使用错误的请求方法时:</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601103254663.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>此时前端会出现405错误,服务器抛出异常</p>
<h3 id="params-控制请求参数" tabindex="-1"><a class="header-anchor" href="#params-控制请求参数" aria-hidden="true">#</a> params : 控制请求参数</h3>
<p>params 属性可以对请求中的参数进行限定:</p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>params = {"参数1","参数2"}   表示请求中必须有参数1和参数2
params = {"!参数1","!参数2"}   表示请求中不能有参数1和参数2
params = {"参数1=值1","参数2=值2"}   表示请求中必须有参数1和参数2,且值必须对应值1和值2
params = {"参数1!=值1","参数2!=值2"}   表示请求中必须有参数1和参数2,且值不能对应值1和值2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数可以是一个或者多个,多个参数使用逗号分隔</p>
<h4 id="代码-2" tabindex="-1"><a class="header-anchor" href="#代码-2" aria-hidden="true">#</a> 代码</h4>
<p>Controller控制单元</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Controller
public class TestRequestMapping {
//参数里面userName不能是root 必须有password参数 不能有sex参数
    @RequestMapping(value = &quot;/testRequestParams&quot;, params={&quot;userName!=root&quot;,&quot;password&quot;,&quot;!sex&quot;})
    public String testRequestParams() {
        System.out.println(&quot;testPostRequest&quot;);
        return &quot;first&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>testRequestMapping.jsp代码</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form method=&quot;get&quot; action=&quot;testRequestParams&quot;&gt;
    &lt;input name=&quot;userName&quot; type=&quot;text&quot;&gt;
    &lt;input name=&quot;password&quot; type=&quot;password&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;Params&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试-2" tabindex="-1"><a class="header-anchor" href="#测试-2" aria-hidden="true">#</a> 测试</h4>
<p>当userName为11111时正常访问</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601105303280.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>当userName为root时,前端页面400且控制台出现异常</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601105343937.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="headers-控制请求头" tabindex="-1"><a class="header-anchor" href="#headers-控制请求头" aria-hidden="true">#</a> headers:控制请求头</h3>
<h4 id="代码-3" tabindex="-1"><a class="header-anchor" href="#代码-3" aria-hidden="true">#</a> 代码</h4>
<p>Controller控制单元</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Controller
public class TestRequestMapping {
    @RequestMapping(value = &quot;/testRequestHeaders&quot;, headers={&quot;Referer=http://localhost:8080/SpringMVC_01/testRequestMapping.jsp&quot;})
    public String testRequestHeaders() {
        System.out.println(&quot;testRequestParams&quot;);
        return &quot;first&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>testRequestMapping.jsp代码</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form method=&quot;get&quot; action=&quot;testRequestHeaders&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;Headers&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试-3" tabindex="-1"><a class="header-anchor" href="#测试-3" aria-hidden="true">#</a> 测试</h4>
<p>正常访问</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601142430934.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>修改headers中的设置</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601142137213.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601142058282.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="pathvariable注解和restful风格" tabindex="-1"><a class="header-anchor" href="#pathvariable注解和restful风格" aria-hidden="true">#</a> @PathVariable注解和RESTful风格</h2>
<h3 id="什么是restful风格" tabindex="-1"><a class="header-anchor" href="#什么是restful风格" aria-hidden="true">#</a> 什么是RESTful风格</h3>
<p>REST即表述性状态传递(英文: Representational State Transfer，简称REST)是Roy Fielding博士在2000年他的博士论中提出来的一种软件架构风格。它是一种针对网络应用的设计和开发方式，可以降低开发的复杂性，提高系统的可伸缩性。</p>
<p>在三种主流的Web服务实现方案中，因为REST模式的Web服务与复杂的SOAP和XML-RPC对比来讲明显的更加简洁，越来我多的web服条开始采用REST风格设计和实现。例如，Amazon.com提供接近REST风格的Web服条进行图书查找:雅虎提供的Web服务也是REST风格的。</p>
<p>表述性状态转移是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是RESTful。需要注意的是，REST是设计风格而不是标准。REST通常基于使用HTTP，UR1，和XML (标准通用标记语言下的一个子集)以及HTML(标准通用标记语言下的一个应用) 这些现有的广泛流行的协议和标准。</p>
<p>REST 定义了一组体系架构原则，您可以根据这些原则设计以系统资源为中心的 Web 服务，包括使用不同语言编写的客户端如何通过 HTTP 处理和传输资源状态。如何考虑使用它的 Web 服务的数量，REST 近年来已经成为最主要的 Web 服务设计模式。事实上，REST 对 Web 的影响非常大，由于其使用相当方便，已经普遍地取代了基于 SOAP 和 WSDL 的接口设计。</p>
<h3 id="restful与普通url" tabindex="-1"><a class="header-anchor" href="#restful与普通url" aria-hidden="true">#</a> RESTful与普通Url</h3>
<p>普通的Url形式</p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>*****/contextPath/aaa.do
*****/contextPath/aaa.jsp
*****/contextPath/aaa.html
*****/contextPath/css/aaa.css
*****/contextPath/js/aaa.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RESTful风格Url</p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>*****/contextPath/aaa/10/root
*****/contextPath/aaa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单实现restful" tabindex="-1"><a class="header-anchor" href="#简单实现restful" aria-hidden="true">#</a> 简单实现RESTful</h3>
<p>实现步骤:</p>
<ol>
<li>在<code v-pre>@RequestMapping</code>注解的路径中,对于需要传递的参数使用<code v-pre>{}</code>标注</li>
<li>在方法的参数中,对于需要映射的参数使用<code v-pre>@PathVariable</code>注解</li>
</ol>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@RestController
public class TestRestful {
    @RequestMapping(&quot;/getRestful/{pageName}&quot;)
    public String getRestful(@PathVariable String pageName){
        return pageName;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601144527520.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="多参数的问题" tabindex="-1"><a class="header-anchor" href="#多参数的问题" aria-hidden="true">#</a> 多参数的问题</h3>
<p>一般情况下,如果参数名与url中的名字保持一致,会自动映射字段进行取值</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601144955705.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果不一致,则会出错</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601145133350.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>此时我们需要修改<code v-pre>@PathVariable</code>注解指定映射字段</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601145304205.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601145320065.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="综合案例" tabindex="-1"><a class="header-anchor" href="#综合案例" aria-hidden="true">#</a> 综合案例</h2>
<p>我们尝试通过同一个url使用不同的请求方式,来访问到不同的controller处理单元</p>
<p>例如:<br>
/controller/1  HTTP GET : 得到id为1 的资源<br>
/controller/1  HTTP DELETE : 删除id为1的资源<br>
/controller/1  HTTP PUT : 更新id为1 的资源<br>
/controller/1  HTTP POST : 增加id为1 的资源</p>
<h3 id="回顾请求方式" tabindex="-1"><a class="header-anchor" href="#回顾请求方式" aria-hidden="true">#</a> 回顾请求方式</h3>
<p><RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/02_HTTP%E5%8D%8F%E8%AE%AE/HTTP%E5%8D%8F%E8%AE%AE.html#HTTP%E8%AF%B7%E6%B1%82%E6%96%B9%E5%BC%8F">HTTP请求方式</RouterLink></p>
<h3 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路" aria-hidden="true">#</a> 实现思路</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601145758374.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>前端 : 在使用DELETE和PUT请求时,本质上也是使用的POST请求方式,<strong>需要传输_method字段指定</strong></p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601151624123.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>后端需要在web.xml中配置<code v-pre>hiddenHttpMethodFilter</code>过滤器将POST请求转换为PUT或者DELETE请求</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code> <span class="token comment">&lt;!--配置hiddenHttpMethodFilter ,将POST请求转换为PUT或者DELETE请求--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">></span></span>hiddenHttpMethodFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-class</span><span class="token punctuation">></span></span>org.springframework.web.filter.HiddenHttpMethodFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-class</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-mapping</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">></span></span>hiddenHttpMethodFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">></span></span>/*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-mapping</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相关代码" tabindex="-1"><a class="header-anchor" href="#相关代码" aria-hidden="true">#</a> 相关代码</h3>
<p>修改web.xml,新增过滤器转换PUT和DELETE请求</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--配置hiddenHttpMethodFilter ,将POST请求转换为PUT或者DELETE请求--&gt;
&lt;filter&gt;
 &lt;filter-name&gt;hiddenHttpMethodFilter&lt;/filter-name&gt;
 &lt;filter-class&gt;org.springframework.web.filter.HiddenHttpMethodFilter&lt;/filter-class&gt;
&lt;/filter&gt;
&lt;filter-mapping&gt;
 &lt;filter-name&gt;hiddenHttpMethodFilter&lt;/filter-name&gt;
 &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
&lt;/filter-mapping&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端代码:</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form method=&quot;post&quot; action=&quot;testRestful/10&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;POST&quot;&gt;
&lt;/form&gt;
&lt;form method=&quot;get&quot; action=&quot;testRestful/10&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;GET&quot;&gt;
&lt;/form&gt;
&lt;form method=&quot;post&quot; action=&quot;testRestful/10&quot;&gt;
    &lt;input type=&quot;text&quot; name=&quot;_method&quot; value=&quot;PUT&quot; hidden=&quot;hidden&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;PUT&quot;&gt;
&lt;/form&gt;
&lt;form method=&quot;post&quot; action=&quot;testRestful/10&quot;&gt;
    &lt;input type=&quot;text&quot; name=&quot;_method&quot; value=&quot;DELETE&quot; hidden=&quot;hidden&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;DELETE&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Controller层TestRestful.java</p>
<div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre v-pre class="language-JAVA"><code>@RestController
public class TestRestful {
    @RequestMapping(value = &quot;/testRestful/{userId}&quot;,method = RequestMethod.GET)
    public String getRestful(@PathVariable String userId){
        return &quot;GET :&quot;+userId;
    }
    @RequestMapping(value = &quot;/testRestful/{userId}&quot;,method = RequestMethod.POST)
    public String postRestful(@PathVariable String userId){
        return &quot;POST :&quot;+userId;
    }
    @RequestMapping(value = &quot;/testRestful/{userId}&quot;,method = RequestMethod.PUT)
    public String putRestful(@PathVariable String userId){
        return &quot;PUT :&quot;+userId;
    }
    @RequestMapping(value = &quot;/testRestful/{userId}&quot;,method = RequestMethod.DELETE)
    public String deleteRestful(@PathVariable String userId){
        return &quot;DELETE :&quot;+userId;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现效果:</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/05_路径映射与RESTful风格/assets/image-20230601151528157.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


