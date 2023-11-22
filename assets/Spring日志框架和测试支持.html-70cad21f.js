import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,f as t}from"./app-71f45f98.js";const l={},s=t(`<h2 id="日志支持" tabindex="-1"><a class="header-anchor" href="#日志支持" aria-hidden="true">#</a> 日志支持</h2><p>spring5框架自带了通用的日志封装,也可以整合自己的日志</p><ol><li>spring移除了 LOG4jConfigListener,官方建议使用log4j2</li><li>spring5整合log4j2</li></ol><p>导入相关依赖</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;!--log4j2 依赖--&gt;
&lt;dependency&gt;
	&lt;groupId&gt;org.apache.logging.log4j&lt;/groupId&gt;
	&lt;artifactId&gt;log4j-core&lt;/artifactId&gt;
	&lt;version&gt;2.14.0&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--log4j-slf4j-impl 包含了log4j2 依赖--&gt;
&lt;dependency&gt;
	&lt;groupId&gt;org.apache.logging.log4j&lt;/groupId&gt;
	&lt;artifactId&gt;log4j-slf4j-impl&lt;/artifactId&gt;
	&lt;version&gt;2.14.0&lt;/version&gt;
	&lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加XML配置文件</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;Configuration status=&quot;DEBUG&quot;&gt;
	&lt;Appenders&gt;
		&lt;Console name=&quot;Console&quot; target=&quot;SYSTEM_OUT&quot;&gt;
			&lt;PatternLayout pattern=&quot;%d{YYYY-MM-dd HH:mm:ss} [%t] %-5p %c{1}:%L - %msg%n&quot; /&gt;
		&lt;/Console&gt;
	&lt;/Appenders&gt;
	&lt;Loggers&gt;
		&lt;Root level=&quot;debug&quot;&gt;
		&lt;AppenderRef ref=&quot;Console&quot; /&gt;
		&lt;/Root&gt;
	&lt;/Loggers&gt;
&lt;/Configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试支持" tabindex="-1"><a class="header-anchor" href="#测试支持" aria-hidden="true">#</a> 测试支持</h2><h3 id="整合junit4" tabindex="-1"><a class="header-anchor" href="#整合junit4" aria-hidden="true">#</a> 整合Junit4</h3><p>修改pom.xml</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;!--Junit4单元测试--&gt;
&lt;dependency&gt;
	&lt;groupId&gt;junit&lt;/groupId&gt;
	&lt;artifactId&gt;junit&lt;/artifactId&gt;
	&lt;version&gt;4.13.1&lt;/version&gt;
	&lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
&lt;!--spring test测试支持包--&gt;
&lt;dependency&gt;
	&lt;groupId&gt;org.springframework&lt;/groupId&gt;
	&lt;artifactId&gt;spring-test&lt;/artifactId&gt;
	&lt;version&gt;5.3.5&lt;/version&gt;
	&lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建测试类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)// 指定测试支持类
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)// 指定核心配置文件位置
public class Test2 {
	@Autowired // 注入要获取的bean
	private  AccountService accountService;
	@Test()
	public void testTransaction(){
		int rows = accountService.transMoney(1, 2, 100);
		System.out.println(rows);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整合junit5" tabindex="-1"><a class="header-anchor" href="#整合junit5" aria-hidden="true">#</a> 整合Junit5</h3><p>修改Pom.xml</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;dependency&gt;
	&lt;groupId&gt;org.junit.jupiter&lt;/groupId&gt;
	&lt;artifactId&gt;junit-jupiter-api&lt;/artifactId&gt;
	&lt;version&gt;5.7.0&lt;/version&gt;
	&lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式一 : 使用复合注解</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 使用复合注解
@SpringJUnitConfig(locations = &quot;classpath:applicationContext.xml&quot;)
public class Test3 {
	@Autowired // 注入要获取的bean
	private  AccountService accountService;
	@Test
	public void testTransaction(){
		int rows = accountService.transMoney(1, 2, 100);
		System.out.println(rows);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二 : 使用ExtentWith和ContextConfiguration注解</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@ExtendWith(SpringExtension.class)
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)
public class Test3 {
	@Autowired // 注入要获取的bean
	private  AccountService accountService;
	@Test
	public void testTransaction(){
		int rows = accountService.transMoney(1, 2, 100);
		System.out.println(rows);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),d=[s];function a(r,v){return e(),i("div",null,d)}const o=n(l,[["render",a],["__file","Spring日志框架和测试支持.html.vue"]]);export{o as default};
