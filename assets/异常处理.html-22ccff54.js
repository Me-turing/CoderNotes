import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as s,d as e,e as i,b as t,w as o,f as c}from"./app-71f45f98.js";const v="/CoderNotes/assets/image-20230629181634061-ffba0672.png",p="/CoderNotes/assets/动画-0297a84e.gif",n="/CoderNotes/assets/image-20230630154310702-b13cb6e6.png",u={},m=e("h2",{id:"springmvc异常简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#springmvc异常简介","aria-hidden":"true"},"#"),i(" SpringMVC异常简介")],-1),b=c('<p>在SpringMVC中我们可以将系统的异常信息从 dao、service、controller中逐层向上抛出,最后由 springmvc 前端控制器交由异常处理器进行异常处理,如下:</p><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="异常处理的实现" tabindex="-1"><a class="header-anchor" href="#异常处理的实现" aria-hidden="true">#</a> 异常处理的实现</h2><h3 id="处理局部异常" tabindex="-1"><a class="header-anchor" href="#处理局部异常" aria-hidden="true">#</a> 处理局部异常</h3><p>使用<code>@ExceptionHandler注解</code>可以对当前Controller中异常进行捕捉<br> 语法: <code>@ExceptionHandler(value ={异常类型1字节,异常类型2字节,....} )</code></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class LoginController {
    @RequestMapping(&quot;/testException&quot;)
    public ModelAndView testException(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(&quot;index&quot;);
        int i = 1/0;//模拟异常
        return modelAndView;
    }
    @ExceptionHandler(value = {ArithmeticException.class,NullPointerException.class})
    public ModelAndView handelException(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(&quot;fail&quot;);
        return modelAndView;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现效果:<br><img src="`+p+`" alt="" loading="lazy"></p><h3 id="全局异常捕捉" tabindex="-1"><a class="header-anchor" href="#全局异常捕捉" aria-hidden="true">#</a> 全局异常捕捉</h3><p>在SpringMVC中我们也可以对于全局的异常进行捕捉,通常可以采用以下方式:</p><ol><li>使用@ControllerAdvice+@ExceptionHandler注解</li><li>继承HandlerExceptionResolver接口</li><li>定义SimpleMappingExceptionResolver转换器</li></ol><p>对于全局异常的捕捉,通常权限低于局部异常的处理.遵循就近原则</p><h4 id="继承handlerexceptionresolver接口" tabindex="-1"><a class="header-anchor" href="#继承handlerexceptionresolver接口" aria-hidden="true">#</a> 继承HandlerExceptionResolver接口</h4><p>创建com.meturing.GloableException.GloableException1.java类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Bean
public class GloableException1 implements HandlerExceptionResolver {
    @Override
    public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        ModelAndView modelAndView = new ModelAndView();
        if (ex instanceof NullPointerException||ex instanceof ArithmeticException){
            modelAndView.setViewName(&quot;404&quot;);
        }
        return modelAndView;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意: 新增的包一定要注意包扫描是否可以被扫描到<br><img src="`+n+`" alt="" loading="lazy"></p><h4 id="使用-controlleradvice-exceptionhandler注解" tabindex="-1"><a class="header-anchor" href="#使用-controlleradvice-exceptionhandler注解" aria-hidden="true">#</a> 使用@ControllerAdvice+@ExceptionHandler注解</h4><p>创建com.meturing.GloableException.GloableException2.java类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@ControllerAdvice
public class GloableException2{
    @ExceptionHandler(value ={ArithmeticException.class,NullPointerException.class} )
    public ModelAndView handelException(){
        ModelAndView mv =new ModelAndView();
        mv.setViewName(&quot;404&quot;);
        return mv;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意: 新增的包一定要注意包扫描是否可以被扫描到<br><img src="`+n+`" alt="" loading="lazy"></p><h4 id="定义simplemappingexceptionresolver转换器" tabindex="-1"><a class="header-anchor" href="#定义simplemappingexceptionresolver转换器" aria-hidden="true">#</a> 定义SimpleMappingExceptionResolver转换器</h4><p>SpringMVC已经定义好了该类型转换器，这个类继承了HandlerExceptionResolver接口，我们只需要在springmvc配置文件配置即可使用，在使用时可以根据项目情况进行相应异常与视图的映射配置</p><h5 id="方式一-使用xml配置" tabindex="-1"><a class="header-anchor" href="#方式一-使用xml配置" aria-hidden="true">#</a> 方式一 : 使用XML配置</h5><p>修改SpringMVC.xml中的代码,手动注册SimpleMappingExceptionResolver类</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;!--定义全局异常处理器--&gt;
&lt;bean class=&quot;org.springframework.web.servlet.handler.SimpleMappingExceptionResolver&quot;&gt;
	&lt;!--默认跳转至404页面--&gt;
	&lt;property name=&quot;defaultErrorView&quot; value=&quot;404&quot;/&gt;
	&lt;property name=&quot;exceptionMappings&quot;&gt;
		&lt;map&gt;
			&lt;!--如果出现NullPointerException和ArithmeticException异常跳转至404页面--&gt;
			&lt;entry key=&quot;java.lang.NullPointerException&quot; value=&quot;404&quot; /&gt;
			&lt;entry key=&quot;java.lang.ArithmeticException&quot; value=&quot;404&quot; /&gt;
		&lt;/map&gt;
	&lt;/property&gt;
&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="方式二-使用配置类配置" tabindex="-1"><a class="header-anchor" href="#方式二-使用配置类配置" aria-hidden="true">#</a> 方式二 : 使用配置类配置</h5><p>我们也可以直接配置配置类进行注册Bean</p><p>com.meturing.Configuration.GloableExceptionConfiguration.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
public class GloableExceptionConfiguration {
    @Bean
    public SimpleMappingExceptionResolver SimpleMappingExceptionResolver(){
        SimpleMappingExceptionResolver simpleMappingExceptionResolver = new SimpleMappingExceptionResolver();
        simpleMappingExceptionResolver.setDefaultErrorView(&quot;404&quot;);//设置默认的视图
        Properties properties = new Properties();
        properties.put(&quot;java.lang.NullPointerException&quot;,&quot;404.jsp&quot;);
        properties.put(&quot;java.lang.ArithmeticException&quot;,&quot;404.jsp&quot;);
        simpleMappingExceptionResolver.setExceptionMappings(properties);
        return simpleMappingExceptionResolver;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function g(x,h){const l=d("RouterLink");return r(),s("div",null,[m,e("p",null,[i("系统中异常包括两类：预期异常(检查型异常) 和 运行时异常 RuntimeException，前者通过捕获异常从而获取异常信息， 后者主要通过规范代码开发、测试通过手段减少运行时异常的发生。详见:"),t(l,{to:"/doc/01_JavaSE%E9%98%B6%E6%AE%B5/B_%E8%BF%9B%E9%98%B6/01_%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:o(()=>[i("异常处理")]),_:1})]),b])}const f=a(u,[["render",g],["__file","异常处理.html.vue"]]);export{f as default};
