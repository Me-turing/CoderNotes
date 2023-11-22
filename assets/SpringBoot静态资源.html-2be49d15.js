import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as d,c as r,d as e,e as n,b as s,w as c,f as i}from"./app-71f45f98.js";const u="/CoderNotes/assets/image-20230725111341308-ad194e36.png",p="/CoderNotes/assets/image-20230725111322957-ff9ec996.png",v="/CoderNotes/assets/image-20230725111954520-bebdb5b7.png",g="/CoderNotes/assets/image-20230725112052808-3412d981.png",m="/CoderNotes/assets/image-20230725112618693-d132d9ef.png",b="/CoderNotes/assets/image-20230725113733275-e24516cd.png",h="/CoderNotes/assets/image-20230725113814293-3d437716.png",k="/CoderNotes/assets/image-20230725114057741-150cdc25.png",q="/CoderNotes/assets/image-20230725114223344-956f3a4f.png",f="/CoderNotes/assets/image-20230725114311371-ac24555c.png",x="/CoderNotes/assets/image-20230725134949452-ca6a0ca8.png",_="/CoderNotes/assets/image-20230725140103832-ed1c00d8.png",E="/CoderNotes/assets/image-20230725140925960-215733c1.png",y="/CoderNotes/assets/image-20230725165722274-a103f6f1.png",B="/CoderNotes/assets/image-20230725171531303-9d53af65.png",C={},N=e("h2",{id:"一般静态资源的存放",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一般静态资源的存放","aria-hidden":"true"},"#"),n(" 一般静态资源的存放")],-1),w=i('<p>我们知道，public目录与static目录,在访问时,无需再次说明目录名(可以省略)</p><p>所以我们在存放静态资源时，可以将资源存放至这两个目录。</p><p>例如:<br><img src="'+u+'" alt="" loading="lazy"></p><p>直接访问 : <code>http://localhost:18090/springboot08/img/logo.png</code> 即可展示资源</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="静态资源路径与controller冲突" tabindex="-1"><a class="header-anchor" href="#静态资源路径与controller冲突" aria-hidden="true">#</a> 静态资源路径与Controller冲突</h2><blockquote><p>在SpringBoot中: 请求进来,先去看Controller中有没有对应的资源,如果有则,执行controller资源,如果没有,就交给静态资源处理器,静态资源处理器也没有找到,则返回404</p></blockquote><p>例如: 直接logo.png存在以下位置</p><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>此时也存在一个映射单元: TestController01.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class TestController01 {
    @RequestMapping(&quot;/img/logo.png&quot;)
    @ResponseBody
    public String getLogo(){
        return &quot;logo&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接访问 : <code>http://localhost:18090/springboot08/img/logo.png</code> 将展示Controller的结果并不会跳转至图片</p><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="设置访问前缀" tabindex="-1"><a class="header-anchor" href="#设置访问前缀" aria-hidden="true">#</a> 设置访问前缀</h2><blockquote><p>默认无前缀,如果想指定静态资源前缀,可以 通过<code>spring.mvc.static-path-pattern</code>配置</p></blockquote><p>例如我们直接配置前缀为res</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring</span><span class="token punctuation">:</span>
<span class="token key attr-name">  mvc</span><span class="token punctuation">:</span>
<span class="token key attr-name">    static-path-pattern</span><span class="token punctuation">:</span> <span class="token value attr-value">/res/**</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们再次访问图片的时候需要加上<code>res</code>前缀<br><img src="`+m+`" alt="" loading="lazy"></p><h2 id="指定存放位置" tabindex="-1"><a class="header-anchor" href="#指定存放位置" aria-hidden="true">#</a> 指定存放位置</h2><blockquote><p>spring.resources.static-locations 可以指定静态目录的位置,但是如果使用了该属性,则原有的static将失效</p></blockquote><div class="language-Perpoeties line-numbers-mode" data-ext="Perpoeties"><pre class="language-Perpoeties"><code>spring:
  resources:
    static-locations: [classpath:/myres/]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如:</p><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>此时访问<code>http://localhost:18090/springboot08/res/logo.png</code> 即可查看图片</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="webjars" tabindex="-1"><a class="header-anchor" href="#webjars" aria-hidden="true">#</a> webjars</h2><blockquote><p>springboot还支持静态资源webjars 的处理方式,就是将静态资源打成jar导入</p></blockquote>',27),S={href:"https://www.webjars.org/",target:"_blank",rel:"noopener noreferrer"},j=i('<p>我们可以在官网找到指定的Jar,使用Maven进行引入</p><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>引入后,我们可以看到对应的Jar依赖:<br><img src="'+q+'" alt="" loading="lazy"></p><p>访问时,需要按照目录层级 <code>项目地址/webjars/jquery/3.7.0/xxxx.js</code></p><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当然,如果配置了前缀,也可以添加前缀访问 : <code>http://localhost:18090/springboot08/res/webjars/jquery/3.7.0/jquery.js</code></p><h2 id="欢迎页与favicon" tabindex="-1"><a class="header-anchor" href="#欢迎页与favicon" aria-hidden="true">#</a> 欢迎页与Favicon</h2><h3 id="默认欢迎页" tabindex="-1"><a class="header-anchor" href="#默认欢迎页" aria-hidden="true">#</a> 默认欢迎页</h3><p>默认情况下: SpringBoot支持默认欢迎页为index.html</p><blockquote><p>注意不能设置静态资源前缀,否则会出现失效的情况</p></blockquote><figure><img src="'+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="手动指定欢迎页" tabindex="-1"><a class="header-anchor" href="#手动指定欢迎页" aria-hidden="true">#</a> 手动指定欢迎页</h3><blockquote><p>如果不能使用默认的方式跳转欢迎页,可以直接使用Controller中对<code>/</code>和<code>/index</code>路径手动跳转</p></blockquote><p>配置根路径直接跳转到指定的Index页面</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController01</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;/index&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="favicon" tabindex="-1"><a class="header-anchor" href="#favicon" aria-hidden="true">#</a> favicon</h3><p>浏览器默认访问favicon.ico的路径为  <code>协议://ip:端口号/favicon.ico</code>,所以这里不要设置项目的上下文路径</p><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="拦截器静态资源放行" tabindex="-1"><a class="header-anchor" href="#拦截器静态资源放行" aria-hidden="true">#</a> 拦截器静态资源放行</h2><h3 id="实现demo" tabindex="-1"><a class="header-anchor" href="#实现demo" aria-hidden="true">#</a> 实现Demo</h3><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>执行逻辑 :</p><figure><img src="'+B+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>如果没有登录,范围其他也页面都重定向登陆页面</li><li>如果登录成功,则可以访问所有页面</li><li>如果登陆失败则重定向登录</li></ol><h3 id="实现拦截器功能" tabindex="-1"><a class="header-anchor" href="#实现拦截器功能" aria-hidden="true">#</a> 实现拦截器功能</h3><h4 id="前端代码" tabindex="-1"><a class="header-anchor" href="#前端代码" aria-hidden="true">#</a> 前端代码</h4><p>index.html</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;style&gt;
        h1,table{
            text-align: center;
            margin: auto;
        }
        img {
            float: left;
        }
        #submitBtn{
            height: 40px;
        }
        div&gt;img{
            transform: translateY(10%);
            position: absolute;
        }
        div&gt;input{
           padding-left: 20px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;welcomes index page&lt;/h1&gt;
&lt;form action=&quot;login&quot; method=&quot;post&quot; &gt;
    &lt;table&gt;
        &lt;tr&gt;
            &lt;td&gt;
                &lt;div&gt;
                    &lt;img src=&quot;../img/usr.png&quot; height=&quot;20px&quot;&gt;&lt;input name=&quot;userName&quot; type=&quot;text&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;img src=&quot;../img/pwd.png&quot; height=&quot;20px&quot;&gt;&lt;input name=&quot;password&quot; type=&quot;password&quot;&gt;
                &lt;/div&gt;
            &lt;/td&gt;
            &lt;td&gt;
                &lt;input id=&quot;submitBtn&quot; type=&quot;submit&quot; value=&quot;登录&quot;&gt;
            &lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mian.html</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
 This is mainPage
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>success.html</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
Welcome to our System
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="后端代码" tabindex="-1"><a class="header-anchor" href="#后端代码" aria-hidden="true">#</a> 后端代码</h4><p>Controller层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class TestController01 {

    @RequestMapping(&quot;/login&quot;)
    public String login(String userName, String password, HttpServletRequest request){
        if (userName.equals(&quot;root&quot;)&amp;&amp;password.equals(&quot;123456&quot;)) {
            request.getSession().setAttribute(&quot;userName&quot;, userName);
            return &quot;success&quot;;
        }
        return &quot;redirect:index.html&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义拦截器: LoginInterceptor</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Component
public class LoginInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Object userName = request.getSession().getAttribute(&quot;userName&quot;);
        Optional&lt;Object&gt; userNameStr = Optional.ofNullable(userName);
        if (userNameStr.isPresent()) {
            return true;
        }
        response.sendRedirect(&quot;index.html&quot;);
        return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册拦截器:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
public class MyInterceptorRegist implements WebMvcConfigurer {
    @Autowired
    private LoginInterceptor loginInterceptor;
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loginInterceptor)
                .addPathPatterns(&quot;/**&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="放行静态资源" tabindex="-1"><a class="header-anchor" href="#放行静态资源" aria-hidden="true">#</a> 放行静态资源</h3><p>我们发现,在上面的拦截器中,我们对于所有的请求都进行了拦截,当页面加载静态资源时,由于拦截器的作用,会不断的重定向至index页面,所以我们需要对于静态资源的目录进行放行</p><p>修改配置类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
public class MyInterceptorRegist implements WebMvcConfigurer {
    @Autowired
    private LoginInterceptor loginInterceptor;
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loginInterceptor)
                .addPathPatterns(&quot;/**&quot;)
                .excludePathPatterns(&quot;/login&quot;,&quot;/index.html&quot;,&quot;/css/**&quot;,&quot;/js/**&quot;,&quot;/img/**&quot;,&quot;/font/**&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44);function A(I,J){const t=a("RouterLink"),l=a("ExternalLinkIcon");return d(),r("div",null,[N,e("p",null,[n("在前面的学习中我们简单了解了SpringBoot的项目结构 ："),s(t,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/05_SpringBoot/04_SpringBoot%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE%E4%B8%8E%E7%BB%93%E6%9E%84/SpringBoot%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE%E4%B8%8E%E7%BB%93%E6%9E%84.html#SpringBoot%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84"},{default:c(()=>[n("SpringBoot项目结构")]),_:1})]),w,e("p",null,[n("官网 : "),e("a",S,[n("https://www.webjars.org/"),s(l)])]),j])}const P=o(C,[["render",A],["__file","SpringBoot静态资源.html.vue"]]);export{P as default};
