import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c as o,d as n,e,b as a,w as s,f as l}from"./app-71f45f98.js";const u="/CoderNotes/assets/image-20230630162134996-c2384014.png",v="/CoderNotes/assets/image-20230630164246694-2ae26bb9.png",c="/CoderNotes/assets/image-20230630163720512-61d6123a.png",p="/CoderNotes/assets/image-20230630174644136-2c3ef587.png",m="/CoderNotes/assets/image-20230630172904263-037185de.png",b={},g=n("h2",{id:"请求方式控制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#请求方式控制","aria-hidden":"true"},"#"),e(" 请求方式控制")],-1),E=l(`<p>在SpringMVC中我们也可以使用以下方式进行Mapping简写代码:</p><ul><li><code>@GetMapping(&#39;/error&#39;)</code> -&gt; <code>@RequestMapping(value=&#39;/error&#39;,method = RequestMethod.GET)</code></li><li><code>@PostMapping(&#39;/error&#39;)</code> -&gt; <code>@RequestMapping(value=&#39;/error&#39;,method = RequestMethod.POST)</code></li><li><code>@PutMapping(&#39;/error&#39;)</code> -&gt; <code>@RequestMapping(value=&#39;/error&#39;,method = RequestMethod.PUT)</code><br> ....</li></ul><p>对于每一种请求方法,都可以由<code>@RequestMapping(value=&#39;/aabbcc&#39;,method = RequestMethod.XXX)</code> 转换为 <code>@XxxMapping(&#39;/aabbcc&#39;)</code> 其他参数与@RequestMapping 中一致</p><p>属性 : 和@RequestMapping中属性一致</p><p>例如:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class AnnotationController {
    @PostMapping(&quot;/error&quot;)
    public String testMappingType(){
        return &quot;success&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等于</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class AnnotationController {
    @RequestMapping(value = &quot;/error&quot;,method = RequestMethod.POST)
    public String testMappingType(){
        return &quot;success&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应控制" tabindex="-1"><a class="header-anchor" href="#响应控制" aria-hidden="true">#</a> 响应控制</h2><h3 id="responsebody-返回json数据" tabindex="-1"><a class="header-anchor" href="#responsebody-返回json数据" aria-hidden="true">#</a> @ResponseBody 返回JSON数据</h3>`,10),q=l(`<p>我们也可以将 <strong>@ResponseBody注解与@Controller注解结合,直接使用@RestController 注解</strong></p><p>其中的属性和@Controller中一样</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class AnnotationController {
    @PostMapping(&quot;/getUserInfo&quot;)
    @ResponseBody
    public UserInfo getUserInfo(){
        return new UserInfo(1,&quot;aaa&quot;,&quot;aaa&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同等</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RestController
public class AnnotationController {
    @PostMapping(&quot;/getUserInfo&quot;)
    public UserInfo getUserInfo(){
        return new UserInfo(1,&quot;aaa&quot;,&quot;aaa&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下:<br><img src="`+u+`" alt="" loading="lazy"></p><blockquote><p>但是需要注意,如果在类上使用@ResponseBody注解,则该类中所有的Controller控制单元都直接返回JSON格式,并不会跳转资源</p></blockquote><h3 id="jsonformat-日期格式化请求" tabindex="-1"><a class="header-anchor" href="#jsonformat-日期格式化请求" aria-hidden="true">#</a> @JsonFormat 日期格式化请求</h3><p>在SpringMVC返回前端数据时,对于Date类型的数据通常是直接执行了Date.toString()方法直接输出的:</p><p>修改UserInfo.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class UserInfo implements Serializable {
    private Integer id;
    private String name;
    private String password;
    private Date dateTime;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制单元直接返回含有Date的数据</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@GetMapping(&quot;/getDateTime&quot;)
public UserInfo getDateTime(){
	UserInfo userInfo = new UserInfo(1, &quot;aaa&quot;, &quot;aaa&quot;, new Date());
	System.out.println(userInfo);
	return userInfo;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端展示如下:</p><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对此,我们可以使用@JsonFormat注解对返回的JSON数据中日期参数进行格式化:</p><p>属性：<br> pattern ：指定响应时间日期的格式<br> Timezone：指定响应的时区，否则会有8个小时的时间差</p><p>修改UserInfo.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class UserInfo implements Serializable {
    private Integer id;
    private String name;
    private String password;
    @DateTimeFormat(pattern = &quot;yyyy-MM-dd&quot;)
    @JsonFormat(pattern = &quot;yyyy-MM-dd hh:MM:ss&quot;,timezone = &quot;GMT+8&quot;)
    private Date dateTime;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中: @DateTimeFormat 注解用于存储参数时对于Date数据的格式化</p><p>效果如下:<br><img src="`+c+`" alt="" loading="lazy"></p><h2 id="requestbody-解析json字符串" tabindex="-1"><a class="header-anchor" href="#requestbody-解析json字符串" aria-hidden="true">#</a> @RequestBody 解析JSON字符串</h2><p>我们在使用SpringMVC时,对于前端发送来的有时候会是JSON格式的字符串(通常是其他接口直接获取并发送给后端接口),对于JSON格式的字符串如果直接使用对象存储是无法直接解析的,手动处理又过于麻烦.比如下面的案例:</p><p>jsonSend.JSP</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;script src=&quot;static/js/jquery-3.5.1.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;input type=&quot;submit&quot;  onclick=&quot;send()&quot;&gt;
&lt;/body&gt;
&lt;script&gt;
    function send(){
        var userInfo = {name:&quot;root&quot;,password:123456};
        var str =JSON.stringify(userInfo);/*将JSON数据格式化为字符串*/
        $.ajax({
            type:&quot;post&quot;,
            url:&quot;jsonSend&quot;,
            data:str,
            contentType:&quot;application/json&quot;,
        });
    }
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AnnotationController.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@PostMapping(&quot;/jsonSend&quot;)
public UserInfo jsonSend(UserInfo userInfo){
	System.out.println(userInfo);
	return userInfo;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们请求到后端后,后端的HandlerMapping 处理器映射器无法处理返回NULL<br><img src="`+p+`" alt="" loading="lazy"></p><p>此时我们可以使用@RequestBody注解来解析收到的JSON格式字符串.</p><ul><li>@RequestBody注解用于获取请求体json格式的字符串内容。直接使用得到是 key=value&amp;key=value...结构的数据，get 请求方式不适用。</li><li>属性: required：是否必须有请求体。默认值是:true。当取值为 true 时,get 请求方式会报错。如果取值 为 false，get 请求得到是null。</li></ul><p>修改 : AnnotationController.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@PostMapping(&quot;/jsonSend&quot;)
public UserInfo jsonSend(UserInfo userInfo){
	System.out.println(userInfo);
	return userInfo;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果:<br><img src="`+m+'" alt="" loading="lazy"></p><h2 id="crossorigin-跨域" tabindex="-1"><a class="header-anchor" href="#crossorigin-跨域" aria-hidden="true">#</a> @CrossOrigin 跨域</h2>',34),h=l(`<p>我们已经系统学习了三种跨域的方式:</p><ol><li>jsonp实现跨域请求</li><li>通过getJson方实现跨域请求</li><li>通过过滤器跨域</li></ol><p>在SpringMVC中,我们也可以使用@CrossOrigin注解进行跨域处理</p><p>属性:<br> origins ： 允许可访问的域列表IP<br> maxAge：准备响应前的缓存持续的最大时间（以秒为单位）。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@CrossOrigin(origins = &quot;http://domain2.com&quot;, maxAge = 3600)
@RestController
@RequestMapping(&quot;/account&quot;)
public class AccountController {
    @GetMapping(&quot;/{id}&quot;)
    public Account receive(@PathVariable Long id) { }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function A(B,f){const i=r("RouterLink");return t(),o("div",null,[g,n("p",null,[e("在之前的学习中,我们知道使用@RequestMapping可以将当前对应的控制单元与请求的URL进行Mapping响应.详见"),a(i,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/05_%E8%B7%AF%E5%BE%84%E6%98%A0%E5%B0%84%E4%B8%8ERESTful%E9%A3%8E%E6%A0%BC/%E8%B7%AF%E5%BE%84%E6%98%A0%E5%B0%84%E4%B8%8ERESTful%E9%A3%8E%E6%A0%BC.html#@RequestMapping%E6%B3%A8%E8%A7%A3%E7%9A%84%E4%BD%BF%E7%94%A8"},{default:s(()=>[e("@RequestMapping注解的使用")]),_:1})]),E,n("p",null,[e("在前面的学习中,我们了解到了使用@ResponseBody返回JSON,详见:"),a(i,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/08_%E5%93%8D%E5%BA%94%E5%A4%84%E7%90%86/%E5%93%8D%E5%BA%94%E5%A4%84%E7%90%86.html#%E4%BD%BF%E7%94%A8@ResponseBody%E8%BF%94%E5%9B%9EJSON"},{default:s(()=>[e("使用@ResponseBody返回JSON")]),_:1})]),q,n("p",null,[e("在之前的学习中,我们已经了解到了前端使用Ajax请求时会出现跨域问题,详见 : "),a(i,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/06_Ajax/04_%E8%B7%A8%E5%9F%9F%E5%A4%84%E7%90%86/%E8%B7%A8%E5%9F%9F%E5%A4%84%E7%90%86.html"},{default:s(()=>[e("跨域处理")]),_:1})]),h])}const C=d(b,[["render",A],["__file","其他注解.html.vue"]]);export{C as default};
