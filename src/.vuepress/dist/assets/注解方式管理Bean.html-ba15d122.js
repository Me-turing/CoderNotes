import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,f as s}from"./app-c47b8d81.js";const i="/CoderNotes/assets/image-20230430184014535-aec073e8.png",t="/CoderNotes/assets/image-20230430181405759-bfcf65d2.png",l="/CoderNotes/assets/image-20230430183924561-6c50a1be.png",o="/CoderNotes/assets/image-20230430184403759-4b3ff9f7.png",c={},r=s(`<h2 id="基于注解的ioc" tabindex="-1"><a class="header-anchor" href="#基于注解的ioc" aria-hidden="true">#</a> 基于注解的IOC</h2><h3 id="相关注解" tabindex="-1"><a class="header-anchor" href="#相关注解" aria-hidden="true">#</a> 相关注解</h3><p><code>@Component</code> 放在类上,用于标记,告诉spring当前类需要由容器实例化bean并放入容器中<br> 该注解有三个子注解:</p><ul><li><code>Controller</code> 用于实例化controller层bean</li><li><code>Service</code> 用于实例化service层bean</li><li><code>Repository</code> 用于实例化持久层bean</li></ul><p>当不确定是哪一层,就用Component,这几个注解互相混用其实也可以,但是不推荐</p><p>默认情况下,注册到容器的ID是当前类名的首字母小写.如:<code>User</code> -&gt; <code>user</code><br> 当然我们可以直接指定注册的ID: <code>@Component(value = &quot;userName1&quot;)</code> -&gt; <code>@Component(&quot;userName1&quot;)</code></p><h3 id="包扫描" tabindex="-1"><a class="header-anchor" href="#包扫描" aria-hidden="true">#</a> 包扫描</h3><p>在之前的XML写法中我们手动直接指定对应的实体类:</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;  
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;  
xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;  
xmlns:context=&quot;http://www.springframework.org/schema/context&quot;  
xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans  
http://www.springframework.org/schema/beans/spring-beans.xsd  
http://www.springframework.org/schema/context  
http://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;
	&lt;bean id=&quot;user&quot; class=&quot;com.meturing.pojo.User&quot;&gt;&lt;/bean&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的话可能会造成手动注册管理及其麻烦,所以我们可以使用包扫秒直接批量注册使用注解的实体类</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;  
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;  
xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;  
xmlns:context=&quot;http://www.springframework.org/schema/context&quot;  
xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans  
http://www.springframework.org/schema/beans/spring-beans.xsd  
http://www.springframework.org/schema/context  
http://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;
	&lt;context:component-scan base-package=&quot;com.meturing.pojo&quot; /&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>base-package 后面放要扫描的包</code><br> 如果有多个包需要扫描,可以使用逗号隔开 com.meturing.bean,com.meturing.service 或者 可以写上一层包路径 com.meturing</p><p>默认情况下,使用包扫描会注入所有的实体类(<code>Component</code> / <code>Controller</code> / <code>Service</code> / <code>Repository</code>),我们可以使用标签来选择和排除指定的标签:</p><ul><li><code>context:include-filter</code> : 只扫描指定的标签注解</li></ul><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;  
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;  
xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;  
xmlns:context=&quot;http://www.springframework.org/schema/context&quot;  
xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans  
http://www.springframework.org/schema/beans/spring-beans.xsd  
http://www.springframework.org/schema/context  
http://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;
	&lt;!--   只扫描Component     --&gt;
	&lt;context:component-scan base-package=&quot;com.meturing.pojo&quot; use-default-filters=&quot;false&quot;&gt;
		&lt;context:include-filter type=&quot;annotation&quot; expression=&quot;org.springframework.stereotype.Component&quot;/&gt;
	&lt;/context:component-scan&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>context:exclude-filter</code> : 排除指点的标签注解</li></ul><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;  
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;  
xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;  
xmlns:context=&quot;http://www.springframework.org/schema/context&quot;  
xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans  
http://www.springframework.org/schema/beans/spring-beans.xsd  
http://www.springframework.org/schema/context  
http://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;
	&lt;!--   排除Service     --&gt;
	&lt;context:component-scan base-package=&quot;com.meturing.pojo&quot; use-default-filters=&quot;true&quot;&gt;
		&lt;context:exclude-filter type=&quot;annotation&quot; expression=&quot;org.springframework.stereotype.Service&quot;/&gt;
	&lt;/context:component-scan&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相关代码" tabindex="-1"><a class="header-anchor" href="#相关代码" aria-hidden="true">#</a> 相关代码</h3><h4 id="测试基本注册" tabindex="-1"><a class="header-anchor" href="#测试基本注册" aria-hidden="true">#</a> 测试基本注册</h4><p>实体类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Component  
  
@Data  
@ToString  
@NoArgsConstructor  
public class User {  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>applicationContext.xml</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;  
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;  
xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;  
xmlns:context=&quot;http://www.springframework.org/schema/context&quot;  
xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans  
http://www.springframework.org/schema/beans/spring-beans.xsd  
http://www.springframework.org/schema/context  
http://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;
	&lt;!-- 扫描指定包下面的所有实体类 --&gt;  
	&lt;context:component-scan base-package=&quot;com.meturing.pojo&quot; /&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test
public void test01(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext1_1.xml&quot;);
	User user = applicationContext.getBean(&quot;user&quot;, User.class);
	System.out.println(user);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试指定名称" tabindex="-1"><a class="header-anchor" href="#测试指定名称" aria-hidden="true">#</a> 测试指定名称</h4><p>实体类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Data  
@ToString  
@NoArgsConstructor  
//@Component(value = &quot;user1&quot;)  
@Component(&quot;user1&quot;)  
public class User1 {  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>applicationContext.xml</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;  
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;  
xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;  
xmlns:context=&quot;http://www.springframework.org/schema/context&quot;  
xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans  
http://www.springframework.org/schema/beans/spring-beans.xsd  
http://www.springframework.org/schema/context  
http://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;
	&lt;!-- 扫描指定包下面的所有实体类 --&gt;  
	&lt;context:component-scan base-package=&quot;com.meturing.pojo&quot; /&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void test02(){  
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext1_1.xml&quot;);  
	User1 user1 = applicationContext.getBean(&quot;user1&quot;, User1.class);  
	System.out.println(user1);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试指定注解" tabindex="-1"><a class="header-anchor" href="#测试指定注解" aria-hidden="true">#</a> 测试指定注解</h4><p>实体类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Data  
@ToString  
@NoArgsConstructor  
//@Component(value = &quot;user1&quot;)  
@Component(&quot;user1&quot;)  
public class User1 {  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>applicationContext.xml</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;  
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;  
xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;  
xmlns:context=&quot;http://www.springframework.org/schema/context&quot;  
xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans  
http://www.springframework.org/schema/beans/spring-beans.xsd  
http://www.springframework.org/schema/context  
http://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;
	&lt;!-- 只扫描Component --&gt;  
	&lt;context:component-scan base-package=&quot;com.meturing.pojo&quot; use-default-filters=&quot;false&quot;&gt;  
		&lt;context:include-filter type=&quot;annotation&quot; expression=&quot;org.springframework.stereotype.Component&quot;/&gt;  
	&lt;/context:component-scan&gt;  
	&lt;!-- 排除Service --&gt;  
	&lt;context:component-scan base-package=&quot;com.meturing.pojo&quot; use-default-filters=&quot;true&quot;&gt;  
		&lt;context:exclude-filter type=&quot;annotation&quot; expression=&quot;org.springframework.stereotype.Service&quot;/&gt;  
	&lt;/context:component-scan&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void test03(){  
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext1_2.xml&quot;);  
	User1 user1 = applicationContext.getBean(&quot;user1&quot;, User1.class);  
	System.out.println(user1);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于注解的di" tabindex="-1"><a class="header-anchor" href="#基于注解的di" aria-hidden="true">#</a> 基于注解的DI</h2><p><code>@Autowired</code> 根据属性数据类型自动装配<br><code>@Qualifier</code> 搭配@Autowired使用,根据属性名称注入依赖,多用于一个接口多个实现类的情况<br><code>@Resources</code> 是Java的原生注解, 可以根据类型,也可以根据名称注入<br><code>@Value</code> 注入普通数据类型(8+String)</p><h3 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h3><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>applicationContext.xml</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;  
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;  
xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;  
xmlns:context=&quot;http://www.springframework.org/schema/context&quot;  
xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans  
http://www.springframework.org/schema/beans/spring-beans.xsd  
http://www.springframework.org/schema/context  
http://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;  
	&lt;context:component-scan base-package=&quot;com.meturing&quot; /&gt;  
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建Dao层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface UserDao {  
	void sayHello();  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Repository(&quot;userDaoImplA&quot;)  
public class UserDaoImplA implements UserDao {  
	@Override  
	public void sayHello() {  
		System.out.println(&quot;UserDaoImplA say :hello&quot;);  
	}  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Repository(&quot;userDaoImplB&quot;)  
public class UserDaoImplB implements UserDao {  
	@Override  
	public void sayHello() {  
		System.out.println(&quot;UserDaoImplB say :hello&quot;);  
	}  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建Service层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface UserService {  
	void sayHello();  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void test04(){  
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext2.xml&quot;);  
	UserServiceImpl userServiceImpl = applicationContext.getBean(&quot;userServiceImpl&quot;, UserServiceImpl.class);  
	userServiceImpl.sayHello();  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="autowired的使用" tabindex="-1"><a class="header-anchor" href="#autowired的使用" aria-hidden="true">#</a> Autowired的使用</h3><p>默认情况下,<code>@Autowired</code> 注解会根据变量名字查找具体的实例对象,例如:</p><p>userDaoImplB 会找到 UserDaoImplB 注入</p><p>UserServiceImpl实现类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Service  
public class UserServiceImpl implements UserService {    
	@Autowired  
	private UserDao userDaoImplB;   
	@Override  
	public void sayHello() {  
		userDao.sayHello();  
	}  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>UserDaoImplB say :hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="qualifier的使用" tabindex="-1"><a class="header-anchor" href="#qualifier的使用" aria-hidden="true">#</a> Qualifier的使用</h3><p>如果变量名字直接为接口,且有多个实现类需要注入的话,则需要使用Qualifier搭配,否则会报错</p><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>搭配Qualifier指定注入的实例ID</p><p>UserServiceImpl实现类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Autowired  
@Qualifier(&quot;userDaoImplB&quot;)  
private UserDao UserDao;  
@Override  
public void sayHello() {  
	UserDao.sayHello();  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>UserDaoImplB say :hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="resources的使用" tabindex="-1"><a class="header-anchor" href="#resources的使用" aria-hidden="true">#</a> Resources的使用</h3><p>我们可以使用Java的原生注解<code>@Resources</code>来指定注入的ID或者注入的类型:</p><p>UserServiceImpl实现类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//@Resource(name = &quot;userDaoImplB&quot;)  </span>
<span class="token annotation punctuation">@Resource</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">UserDaoImplB</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">UserDao</span> <span class="token class-name">UserDao</span><span class="token punctuation">;</span>  
<span class="token annotation punctuation">@Override</span>  
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
	<span class="token class-name">UserDao</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>UserDaoImplB say :hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="value的使用" tabindex="-1"><a class="header-anchor" href="#value的使用" aria-hidden="true">#</a> Value的使用</h3><p>我们可以用@Value注解为注入的Bean的属性赋初始值</p><p>UserServiceImpl实现类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>  
<span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;userDaoImplB&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">private</span> <span class="token class-name">UserDao</span> <span class="token class-name">UserDao</span><span class="token punctuation">;</span>  
<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">private</span> <span class="token class-name">String</span> sname<span class="token punctuation">;</span>  
<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;boy&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">private</span> <span class="token class-name">String</span> sgender<span class="token punctuation">;</span>  
<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;16&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">private</span> <span class="token class-name">Integer</span> sage<span class="token punctuation">;</span>  
<span class="token annotation punctuation">@Override</span>  
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
	<span class="token class-name">UserDao</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sname<span class="token punctuation">)</span><span class="token punctuation">;</span>  
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sgender<span class="token punctuation">)</span><span class="token punctuation">;</span>  
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sage<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>UserDaoImplB say :hello
zhangsan
boy
16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入外部资源注入" tabindex="-1"><a class="header-anchor" href="#引入外部资源注入" aria-hidden="true">#</a> 引入外部资源注入</h3><p>添加user.properties外部资源文件<br><img src="`+l+`" alt="" loading="lazy"></p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">sname</span><span class="token punctuation">=</span><span class="token value attr-value">root  </span>
<span class="token key attr-name">sgender</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改applicationContext.xml,导入配置文件</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;  
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;  
xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;  
xmlns:context=&quot;http://www.springframework.org/schema/context&quot;  
xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans  
http://www.springframework.org/schema/beans/spring-beans.xsd  
http://www.springframework.org/schema/context  
http://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;  
	&lt;context:component-scan base-package=&quot;com.meturing&quot; /&gt;  
	&lt;!-- 引入外部资源注入 --&gt;
	&lt;context:property-placeholder location=&quot;classpath:user.properties&quot; /&gt;  
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>  
<span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;userDaoImplB&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">private</span> <span class="token class-name">UserDao</span> <span class="token class-name">UserDao</span><span class="token punctuation">;</span>  
<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${sname}&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">private</span> <span class="token class-name">String</span> sname<span class="token punctuation">;</span>  
<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;boy&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">private</span> <span class="token class-name">String</span> sgender<span class="token punctuation">;</span>  
<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;16&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">private</span> <span class="token class-name">Integer</span> sage<span class="token punctuation">;</span>  
<span class="token annotation punctuation">@Override</span>  
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
	<span class="token class-name">UserDao</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sname<span class="token punctuation">)</span><span class="token punctuation">;</span>  
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sgender<span class="token punctuation">)</span><span class="token punctuation">;</span>  
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sage<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>UserDaoImplB say :hello
root
boy
16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完全使用注解-使用配置类" tabindex="-1"><a class="header-anchor" href="#完全使用注解-使用配置类" aria-hidden="true">#</a> 完全使用注解(使用配置类)</h3><h4 id="创建config类" tabindex="-1"><a class="header-anchor" href="#创建config类" aria-hidden="true">#</a> 创建Config类</h4><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@ComponentScan(basePackages = &quot;com.meturing&quot;)//包扫描  
@PropertySource(&quot;classpath:user.properties&quot;)//配置类  
public class SpringConfig {  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@ComponentScan</code> 表示包扫描,用于注册到容器<br><code>@PropertySource</code> 表示外部引用资源</p><h4 id="使用配置类获取容器中的bean" tabindex="-1"><a class="header-anchor" href="#使用配置类获取容器中的bean" aria-hidden="true">#</a> 使用配置类获取容器中的Bean</h4><p><code>AnnotationConfigApplicationContext</code></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void test05(){  
	ApplicationContext applicationContext = new AnnotationConfigApplicationContext(SpringConfig.class);  
	UserServiceImpl userServiceImpl = applicationContext.getBean(&quot;userServiceImpl&quot;, UserServiceImpl.class);  
	userServiceImpl.sayHello();  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,96),d=[r];function u(p,v){return e(),a("div",null,d)}const g=n(c,[["render",u],["__file","注解方式管理Bean.html.vue"]]);export{g as default};
