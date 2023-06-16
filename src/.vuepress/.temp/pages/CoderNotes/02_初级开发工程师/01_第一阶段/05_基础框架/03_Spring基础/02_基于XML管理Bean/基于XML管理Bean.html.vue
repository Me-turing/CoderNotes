<template><div><h2 id="ioc-控制反转" tabindex="-1"><a class="header-anchor" href="#ioc-控制反转" aria-hidden="true">#</a> IOC:控制反转</h2>
<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd&quot;&gt;
    &lt;!-- 将DeptDaoImpl注册到Spring容器中 --&gt;
    &lt;bean id=&quot;deptDao&quot; class=&quot;com.meturing.dao.impl.DeptDaoImpl&quot;&gt;&lt;/bean&gt;
 &lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>    @Test
    public void test02(){
        //通过ClassPathXmlApplicationContext获取Spring.xml注册文件中的内容(底层Spring会自动根据我们的标签,为我们创建指定的对象)
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;spring.xml&quot;);
        //通过ApplicationContext对象获取容器中已经注册的Bean对象,并指定他的类型
        DeptDao deptDao = applicationContext.getBean(&quot;deptDao&quot;, DeptDao.class);
        //调用获取到的对象中的方法
        deptDao.sayHello();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ioc底层原理浅析" tabindex="-1"><a class="header-anchor" href="#ioc底层原理浅析" aria-hidden="true">#</a> IOC底层原理浅析</h3>
<p>简单来讲分为三步走策略</p>
<h4 id="_1-解析xml配置文件" tabindex="-1"><a class="header-anchor" href="#_1-解析xml配置文件" aria-hidden="true">#</a> 1. 解析XML配置文件</h4>
<p>底层运用到了Dom4J的技术对于XML进行解析</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;bean id=&quot;deptDao&quot; class=&quot;com.meturing.dao.impl.DeptDaoImpl&quot;&gt;&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>ID</code> 为 解析后对应的名字<br>
<code v-pre>Class</code> 为需要注册成为Bean的类所在的全类路径</p>
<h4 id="_2-反射技术实例化对象-放到容器中" tabindex="-1"><a class="header-anchor" href="#_2-反射技术实例化对象-放到容器中" aria-hidden="true">#</a> 2. 反射技术实例化对象,放到容器中</h4>
<p>通过反射获取指定路径的字节码文件<br>
<code v-pre>Class clazz =Class.forName(&quot;com.meturing.dao.impl.DeptDaoImpl&quot;)</code></p>
<p>初始化这个对象<br>
<code v-pre>Object obj  = clazz.newInstance();</code></p>
<p>底层有个Map,将ID作为Key,对象作为Value存储起来<br>
<code v-pre>map.put(&quot;deptDao&quot;,obj)</code></p>
<h4 id="_3-工厂模式返回bean对象-getbean方法" tabindex="-1"><a class="header-anchor" href="#_3-工厂模式返回bean对象-getbean方法" aria-hidden="true">#</a> 3.工厂模式返回Bean对象:  getBean方法</h4>
<p>注意: IOC中存在两个Bean工厂接口(<code v-pre>BeanFactory</code> /  <code v-pre>ApplicationContext</code>)<br>
<code v-pre>BeanFactory接口</code> :  IOC容器基本功能接口,是spring内部使用的接口,我们在处理业务时一般不直接使用该接口<br>
<code v-pre>ApplicationContext 接口</code> :  BeanFactory的子接口,提供更多更强大的功能,研发人员一般使用的接口</p>
<p>我们可以通过以下实现类来构建Bean工厂对象<br>
<code v-pre>FileSystemXmlApplicationContext</code> : 需要通过文件的结对路径或者相对于项目的路径来初始化XML<br>
<code v-pre>ClassPathXmlApplicationContext</code> : 相对于Resource的路径</p>
<ol>
<li>
<p>获得Bean工厂对象<br>
<code v-pre>ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;spring.xml&quot;);</code></p>
</li>
<li>
<p>调用ApplicationContext接口下的getBean方法来从Map中获取对象<br>
<code v-pre>DeptDao deptDao = applicationContext.getBean(&quot;deptDao&quot;, DeptDao.class);</code></p>
</li>
</ol>
<p>其实底层相当于执行了:</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public Object getBean(String name){
	Object obj =map.get(name);
	return obj;
}  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="di-依赖注入" tabindex="-1"><a class="header-anchor" href="#di-依赖注入" aria-hidden="true">#</a> DI : 依赖注入</h2>
<p><code v-pre>DI ( Dependency Injection )</code>，即“依赖注入” 就是创建属性时给对象属性赋值, 对象功能的实现往往要依赖属性的值,那么<strong>给对象属性赋值就可以说成是依赖注入</strong></p>
<p>由于对象属性不仅仅是基本数据类型,还可能是其他类,或者引用类型, 那么依赖注入将会把更多的对象之间的关系整理到一起,可以形成一个庞大的依赖关系. <strong>DI处理的是对象的属性赋值和互相依赖的关系</strong></p>
<h2 id="获取bean对象" tabindex="-1"><a class="header-anchor" href="#获取bean对象" aria-hidden="true">#</a> 获取Bean对象</h2>
<p>Bean标签常用的属性:<br>
<code v-pre>id</code> -&gt; 对象的id<br>
<code v-pre>class</code> -&gt; 类的全路径名<br>
<code v-pre>name </code>-&gt; 和id类似,一般不用<br>
<code v-pre>scope</code> -&gt; 控制对象单例多例和使用范围<br>
-  singleton作用域(scope 默认值) -&gt; Spring IOC容器中只会存在一个共享的bean实例<br>
-  prototype作用域 -&gt; 部署的bean，每一次获取都会产生一个新的bean实例，相当与一个new的操作<br>
-  request作用域 -&gt; 表示该针对每一次HTTP请求都会产生一个新的bean，同时该bean仅在当前HTTP request内有效<br>
-  session作用域 -&gt; 表示该针对每一次HTTP请求都会产生一个新的bean，同时该bean仅在当前HTTP session内有效<br>
-  global session作用域 -&gt; 类似于标准的HTTP Session作用域，不过它仅仅在基于portlet的web应用中才有意义<br>
<code v-pre>lazy-init</code> -&gt; 懒加载 调用getBean的时候再去实例化对象,默认是关闭的容器加载时初始化对象到容器中</p>
<p>准备实体类:</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Data
@ToString
public class User {
    private Integer userid;
    private String username;
    private String password;
    public User(Integer userid, String username, String password) {
        System.out.println(&quot;全参构造&quot;);
        this.userid = userid;
        this.username = username;
        this.password = password;
    }
    public User() {
        System.out.println(&quot;无参构造&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常规使用" tabindex="-1"><a class="header-anchor" href="#常规使用" aria-hidden="true">#</a> 常规使用</h3>
<p>applictaionContext.xml</p>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd&quot;&gt;
    &lt;!-- 常规注册实体类 --&gt;
    &lt;bean id=&quot;user&quot; class=&quot;com.meturing.pojo.test01.User&quot;&gt;&lt;/bean&gt;
    &lt;bean id=&quot;user01&quot; class=&quot;com.meturing.pojo.test01.User&quot; name=&quot;userName1&quot;&gt;&lt;/bean&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//常规使用
@Test
public void test01(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext1.xml&quot;);
	User user = applicationContext.getBean(&quot;user&quot;, User.class);
	System.out.println(user);
}

//测试name
@Test
public void test02(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext1.xml&quot;);
	User user = applicationContext.getBean(&quot;user01&quot;, User.class);
	System.out.println(user);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单例与多例模式" tabindex="-1"><a class="header-anchor" href="#单例与多例模式" aria-hidden="true">#</a> 单例与多例模式</h3>
<p>applictaionContext.xml</p>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd&quot;&gt;
    &lt;bean id=&quot;user02&quot; class=&quot;com.meturing.pojo.test01.User&quot; scope=&quot;prototype&quot;&gt;&lt;/bean&gt;  
	&lt;bean id=&quot;user03&quot; class=&quot;com.meturing.pojo.test01.User&quot; scope=&quot;singleton&quot;&gt;&lt;/bean&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//测试scope
@Test
public void test03(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext1.xml&quot;);
	User user01 = applicationContext.getBean(&quot;user02&quot;, User.class);
	User user02 = applicationContext.getBean(&quot;user02&quot;, User.class);
	System.out.println(user01==user02);//false
	User user03 = applicationContext.getBean(&quot;user03&quot;, User.class);
	User user04 = applicationContext.getBean(&quot;user03&quot;, User.class);
	System.out.println(user03==user04);//true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="懒加载" tabindex="-1"><a class="header-anchor" href="#懒加载" aria-hidden="true">#</a> 懒加载</h3>
<p><strong>不推荐开启懒加载,因为我们可以启动的时候多花点时间部署,简化用户第一次使用的体验时间</strong></p>
<p>applictaionContext.xml</p>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd&quot;&gt;
    &lt;bean id=&quot;user04&quot; class=&quot;com.meturing.pojo.test01.User&quot; lazy-init=&quot;true&quot;&gt;&lt;/bean&gt;
    &lt;bean id=&quot;user05&quot; class=&quot;com.meturing.pojo.test01.User&quot; lazy-init=&quot;false&quot;&gt;&lt;/bean&gt;
    &lt;bean id=&quot;user06&quot; class=&quot;com.meturing.pojo.test01.User&quot; lazy-init=&quot;default&quot;&gt;&lt;/bean&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//测试lazy-init
@Test
public void test04(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext1.xml&quot;);
	//User user01 = applicationContext.getBean(&quot;user04&quot;, User.class);
	//User user02 = applicationContext.getBean(&quot;user05&quot;, User.class);
	//User user03 = applicationContext.getBean(&quot;user06&quot;, User.class);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="给bean对象赋值" tabindex="-1"><a class="header-anchor" href="#给bean对象赋值" aria-hidden="true">#</a> 给Bean对象赋值</h2>
<ul>
<li><code v-pre>property</code> -&gt; 通过Set赋值</li>
<li><code v-pre>constructor-arg</code>  -&gt; 通过全参构造赋值. <strong>个数必须和某个构造方法的参数个数向对应.</strong> name 指的是参数名 / index指的是参数的索引 / value指的是参数值</li>
<li>P标签相当于property</li>
<li>C标签相当于constructor-arg</li>
<li>特殊符号的处理需要遵循HTML特殊符号转义</li>
</ul>
<h3 id="property-通过set赋值" tabindex="-1"><a class="header-anchor" href="#property-通过set赋值" aria-hidden="true">#</a> property : 通过Set赋值</h3>
<p>applictaionContext.xml</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!-- 通过无参构造方法初始化,Set方法注入 --&gt;
&lt;bean id=&quot;user01&quot; class=&quot;com.meturing.pojo.test01.User&quot;&gt;
	&lt;property name=&quot;userid&quot; value=&quot;1&quot;&gt;&lt;/property&gt;
	&lt;property name=&quot;username&quot; value=&quot;admin&quot;&gt;&lt;/property&gt;
	&lt;property name=&quot;password&quot; value=&quot;admin&quot;&gt;&lt;/property&gt;
&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void test01(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext2_1.xml&quot;);
	User user = applicationContext.getBean(&quot;user01&quot;, User.class);
	System.out.println(user);//User(userid=1, username=admin, password=admin)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="constructor-arg-通过全参构造赋值" tabindex="-1"><a class="header-anchor" href="#constructor-arg-通过全参构造赋值" aria-hidden="true">#</a> constructor-arg : 通过全参构造赋值</h3>
<p>applictaionContext.xml</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!-- 通过全参构造方法注入--&gt;
&lt;!-- 方式一:直接用通过参数名注入 --&gt;
&lt;bean id=&quot;user02&quot; class=&quot;com.meturing.pojo.test01.User&quot; &gt;
	&lt;constructor-arg name=&quot;userid&quot; value=&quot;2&quot;&gt;&lt;/constructor-arg&gt;
	&lt;constructor-arg name=&quot;username&quot; value=&quot;张三&quot;&gt;&lt;/constructor-arg&gt;
	&lt;constructor-arg name=&quot;password&quot; value=&quot;zhangSan&quot;&gt;&lt;/constructor-arg&gt;
&lt;/bean&gt;
&lt;!-- 方式二:直接用通过参数位置注入 --&gt;
&lt;bean id=&quot;user03&quot; class=&quot;com.meturing.pojo.test01.User&quot; &gt;
	&lt;constructor-arg index=&quot;0&quot; value=&quot;3&quot;&gt;&lt;/constructor-arg&gt;
	&lt;constructor-arg index=&quot;1&quot; value=&quot;李四&quot;&gt;&lt;/constructor-arg&gt;
	&lt;constructor-arg index=&quot;2&quot; value=&quot;liSi&quot;&gt;&lt;/constructor-arg&gt;
&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//全参构造初始化,带参注入
@Test
public void test02(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext2_1.xml&quot;);
	User user = applicationContext.getBean(&quot;user02&quot;, User.class);
	System.out.println(user);//User(userid=2, username=张三, password=zhangSan)
}

//全参构造初始化,带参注入
@Test
public void test03(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext2_1.xml&quot;);
	User user = applicationContext.getBean(&quot;user03&quot;, User.class);
	System.out.println(user);//User(userid=3, username=李四, password=liSi)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="p标签-与-c标签" tabindex="-1"><a class="header-anchor" href="#p标签-与-c标签" aria-hidden="true">#</a> P标签 与 C标签</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/02_基于XML管理Bean/assets/image-20230424133416437.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>applictaionContext.xml</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xmlns:p=&quot;http://www.springframework.org/schema/p&quot;
       xmlns:c=&quot;http://www.springframework.org/schema/c&quot;
       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd&quot;&gt;

    &lt;!-- 通过P标签注入 : 相当于使用 property --&gt;
    &lt;bean id=&quot;user04&quot; class=&quot;com.meturing.pojo.test01.User&quot; p:userid=&quot;4&quot; p:username=&quot;王五&quot; p:password=&quot;wangWu&quot;&gt;&lt;/bean&gt;

    &lt;!-- 通过C标签注入 : 相当于使用 constructor-arg --&gt;
    &lt;bean id=&quot;user05&quot; class=&quot;com.meturing.pojo.test01.User&quot; c:userid=&quot;5&quot; c:username=&quot;赵六&quot; c:password=&quot;zhaoLiu&quot;&gt;&lt;/bean&gt;
    &lt;bean id=&quot;user06&quot; class=&quot;com.meturing.pojo.test01.User&quot; c:_0=&quot;6&quot; c:_1=&quot;高七&quot; c:_2=&quot;gaoQi&quot;&gt;&lt;/bean&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//p标签注入,相当于: property 无参构造初始化,使用set注入
@Test
public void test04(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext2_2.xml&quot;);
	User user = applicationContext.getBean(&quot;user04&quot;, User.class);
	System.out.println(user);//User(userid=4, username=王五, password=wangWu)
}

//c标签注入,相当于: constructor-arg 全参构造初始化注入
@Test
public void test05(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext2_2.xml&quot;);
	User user = applicationContext.getBean(&quot;user05&quot;, User.class);
	System.out.println(user);//User(userid=5, username=赵六, password=zhaoLiu)
}

//c标签注入,相当于: constructor-arg 全参构造初始化注入
@Test
public void test06(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext2_2.xml&quot;);
	User user = applicationContext.getBean(&quot;user06&quot;, User.class);
	System.out.println(user);//User(userid=6, username=高七, password=gaoQi)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特殊符号的处理" tabindex="-1"><a class="header-anchor" href="#特殊符号的处理" aria-hidden="true">#</a> 特殊符号的处理</h3>
<p><code v-pre>&lt;null&gt;&lt;/null&gt;</code> 可以直接赋值为NULL<br>
<code v-pre>&lt;</code> <code v-pre>&amp;lt;</code>  <code v-pre>&gt;</code> <code v-pre>&amp;gt;</code>  <code v-pre>&amp;</code> <code v-pre>&amp;amp;</code>   遵循HTML转义<br>
<code v-pre>&lt;![CDATA[内容]]&gt;</code> 可以强调以文本方式显示</p>
<p>applictaionContext.xml</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!-- 注入空值或特殊符号 --&gt;
&lt;bean id=&quot;user01&quot; class=&quot;com.meturing.pojo.test01.User&quot;&gt;
	&lt;!--null值--&gt;
	&lt;property name=&quot;userid&quot;&gt;&lt;null&gt;&lt;/null&gt;&lt;/property&gt;
	&lt;!--特殊符号 转译字符 &lt; &amp;lt;  &gt; &amp;gt;  &amp; &amp;amp;   遵循HTML转义  --&gt;
	&lt;property name=&quot;username&quot; value=&quot;&amp;lt;张三&amp;gt;&quot;&gt;&lt;/property&gt;
	&lt;!-- 特殊符号  &lt;![CDATA[内容]]&gt;  --&gt;
	&lt;property name=&quot;password&quot;&gt;
		&lt;value&gt;&lt;![CDATA[!@#%^^&amp;&amp;^%$$#&amp;**]]&gt;&lt;/value&gt;
	&lt;/property&gt;
&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//特殊值注入
@Test
public void test07(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext2_3.xml&quot;);
	User user = applicationContext.getBean(&quot;user01&quot;, User.class);
	System.out.println(user);//User(userid=null, username=&lt;张三&gt;, password=!@#%^^&amp;&amp;^%$$#&amp;**)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bean对象的引用" tabindex="-1"><a class="header-anchor" href="#bean对象的引用" aria-hidden="true">#</a> Bean对象的引用</h2>
<h4 id="引入外部的bean" tabindex="-1"><a class="header-anchor" href="#引入外部的bean" aria-hidden="true">#</a> 引入外部的Bean</h4>
<p>applictaionContext.xml</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;bean id=&quot;date1&quot; class=&quot;java.util.Date&quot;&gt;&lt;/bean&gt;
&lt;bean id=&quot;mouse01&quot; class=&quot;com.meturing.pojo.test02.Mouse&quot;&gt;
	&lt;property name=&quot;name&quot; value=&quot;Jerry&quot;&gt;&lt;/property&gt;
	&lt;property name=&quot;birthdate&quot; ref=&quot;date1&quot;&gt;&lt;/property&gt;
&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//外部Bean
@Test
public void test01(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext3.xml&quot;);
	Mouse mouse = applicationContext.getBean(&quot;mouse01&quot;, Mouse.class);
	System.out.println(mouse);//Mouse(name=Jerry, birthdate=Mon Apr 24 10:57:20 CST 2023)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入内部的bean" tabindex="-1"><a class="header-anchor" href="#引入内部的bean" aria-hidden="true">#</a> 引入内部的Bean</h3>
<p>applictaionContext.xml</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!-- 引入内部的Bean , 内部的Bean无需设置id--&gt;
&lt;bean id=&quot;cat01&quot; class=&quot;com.meturing.pojo.test02.Cat&quot;&gt;
	&lt;property name=&quot;name&quot; value=&quot;Tom&quot;&gt;&lt;/property&gt;
	&lt;property name=&quot;mouse1&quot;&gt;
		&lt;bean id=&quot;mouse02&quot; class=&quot;com.meturing.pojo.test02.Mouse&quot;&gt;
			&lt;property name=&quot;name&quot; value=&quot;Jerry2&quot;&gt;&lt;/property&gt;
			&lt;property name=&quot;birthdate&quot;&gt;
				&lt;bean class=&quot;java.util.Date&quot;&gt;&lt;/bean&gt;
			&lt;/property&gt;
		&lt;/bean&gt;
	&lt;/property&gt;
&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//内部Bean
@Test
public void test02(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext3.xml&quot;);
	Cat cat = applicationContext.getBean(&quot;cat01&quot;, Cat.class);
	System.out.println(cat);//Cat(name=Tom, mouse1=Mouse(name=Jerry2, birthdate=Mon Apr 24 10:59:29 CST 2023))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="级联的bean" tabindex="-1"><a class="header-anchor" href="#级联的bean" aria-hidden="true">#</a> 级联的Bean</h3>
<p>applictaionContext.xml</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;bean id=&quot;mouse03&quot; class=&quot;com.meturing.pojo.test02.Mouse&quot;&gt;&lt;/bean&gt;
&lt;bean id=&quot;cat02&quot; class=&quot;com.meturing.pojo.test02.Cat&quot;&gt;
	&lt;property name=&quot;name&quot; value=&quot;Tom01&quot;&gt;&lt;/property&gt;
	&lt;property name=&quot;mouse1&quot; ref=&quot;mouse03&quot;&gt;&lt;/property&gt;
	&lt;property name=&quot;mouse1.name&quot; value=&quot;Jarry3&quot;&gt;&lt;/property&gt;
	&lt;property name=&quot;mouse1.birthdate&quot;&gt;
		&lt;bean class=&quot;java.util.Date&quot;&gt;&lt;/bean&gt;
	&lt;/property&gt;
&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//级联Bean
@Test
public void test03(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext3.xml&quot;);
	Cat cat = applicationContext.getBean(&quot;cat02&quot;, Cat.class);
	System.out.println(cat);//Cat(name=Tom01, mouse1=Mouse(name=Jarry3, birthdate=Mon Apr 24 11:00:01 CST 2023))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集合的赋值" tabindex="-1"><a class="header-anchor" href="#集合的赋值" aria-hidden="true">#</a> 集合的赋值</h2>
<p>准备环境</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Data  
@ToString  
@AllArgsConstructor  
@NoArgsConstructor  
public class Book {  
	private String bname;  
	private String author;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Data  
@ToString  
@AllArgsConstructor  
@NoArgsConstructor  
public class Student {  
	private String[] books;  
	private Set&lt;String&gt; bookSet;  
	private List&lt;String&gt; bookList;  
	private Map&lt;String,String&gt; bookMap;  
	private List&lt;Book&gt; bookList2;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常规对list的操作" tabindex="-1"><a class="header-anchor" href="#常规对list的操作" aria-hidden="true">#</a> 常规对List的操作</h3>
<p>applictaionContext.xml</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xmlns:p=&quot;http://www.springframework.org/schema/p&quot;
       xmlns:c=&quot;http://www.springframework.org/schema/c&quot;
       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd&quot;&gt;

    &lt;!-- 基本集合注入 --&gt;
    &lt;bean id=&quot;student1&quot; class=&quot;com.meturing.pojo.test03.Student&quot;&gt;
        &lt;property name=&quot;books&quot;&gt;
            &lt;!-- 数组注入 --&gt;
            &lt;array&gt;
                &lt;value&gt;Java&lt;/value&gt;
                &lt;value&gt;MySql&lt;/value&gt;
                &lt;value&gt;PHP&lt;/value&gt;
            &lt;/array&gt;
        &lt;/property&gt;

        &lt;!-- set集合注入 --&gt;
        &lt;property name=&quot;bookSet&quot;&gt;
            &lt;set&gt;
                &lt;value&gt;Java&lt;/value&gt;
                &lt;value&gt;MySql&lt;/value&gt;
                &lt;value&gt;PHP&lt;/value&gt;
            &lt;/set&gt;
        &lt;/property&gt;
        
        &lt;!-- list集合注入 --&gt;
        &lt;property name=&quot;bookList&quot;&gt;
            &lt;list&gt;
                &lt;value&gt;Java&lt;/value&gt;
                &lt;value&gt;MySql&lt;/value&gt;
                &lt;value&gt;PHP&lt;/value&gt;
            &lt;/list&gt;
        &lt;/property&gt;
        
        &lt;!-- Map集合注入 --&gt;
        &lt;property name=&quot;bookMap&quot;&gt;
            &lt;map&gt;
                &lt;entry key=&quot;Java&quot; value=&quot;Java&quot;&gt;&lt;/entry&gt;
                &lt;entry key=&quot;MySql&quot; value=&quot;MySql&quot;&gt;&lt;/entry&gt;
                &lt;entry key=&quot;PHP&quot; value=&quot;PHP&quot;&gt;&lt;/entry&gt;
            &lt;/map&gt;
        &lt;/property&gt;
        
        &lt;property name=&quot;bookList2&quot;&gt;
            &lt;list&gt;
                &lt;bean id=&quot;b1&quot; class=&quot;com.meturing.pojo.test03.Book&quot; p:bname=&quot;Java&quot; p:author=&quot;Java&quot;&gt;&lt;/bean&gt;
                &lt;bean id=&quot;b2&quot; class=&quot;com.meturing.pojo.test03.Book&quot; p:bname=&quot;MySql&quot; p:author=&quot;MySql&quot;&gt;&lt;/bean&gt;
                &lt;bean id=&quot;b3&quot; class=&quot;com.meturing.pojo.test03.Book&quot; p:bname=&quot;PHP&quot; p:author=&quot;PHP&quot;&gt;&lt;/bean&gt;
            &lt;/list&gt;
        &lt;/property&gt;
    &lt;/bean&gt;
    &lt;bean id=&quot;b1&quot; class=&quot;com.meturing.pojo.test03.Book&quot; p:bname=&quot;Java&quot; p:author=&quot;Java&quot;&gt;&lt;/bean&gt;
    &lt;bean id=&quot;b2&quot; class=&quot;com.meturing.pojo.test03.Book&quot; p:bname=&quot;MySql&quot; p:author=&quot;MySql&quot;&gt;&lt;/bean&gt;
    &lt;bean id=&quot;b3&quot; class=&quot;com.meturing.pojo.test03.Book&quot; p:bname=&quot;PHP&quot; p:author=&quot;PHP&quot;&gt;&lt;/bean&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//基本集合使用
@Test
public void test01(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext4_1.xml&quot;);
	Student student = applicationContext.getBean(&quot;student1&quot;, Student.class);
	System.out.println(Arrays.toString(student.getBooks()));//[Java, MySql, PHP]
	System.out.println(student.getBookList());//[Java, MySql, PHP]
	System.out.println(student.getBookSet());//[Java, MySql, PHP]
	System.out.println(student.getBookMap());//{Java=Java, MySql=MySql, PHP=PHP}
	System.out.println(student.getBookList2());//[Book(bname=Java, author=Java), Book(bname=MySql, author=MySql), Book(bname=PHP, author=PHP)]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入util声明集合" tabindex="-1"><a class="header-anchor" href="#引入util声明集合" aria-hidden="true">#</a> 引入util声明集合</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/02_基于XML管理Bean/assets/image-20230424134524437.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>applictaionContext.xml</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xmlns:p=&quot;http://www.springframework.org/schema/p&quot;
       xmlns:c=&quot;http://www.springframework.org/schema/c&quot;
       xmlns:util=&quot;http://www.springframework.org/schema/util&quot;
       xsi:schemaLocation=&quot;
       http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/util
       http://www.springframework.org/schema/util/spring-util.xsd
&quot;&gt;
    &lt;!-- util引入 --&gt;
    &lt;bean id=&quot;student1&quot; class=&quot;com.meturing.pojo.test03.Student&quot;&gt;
        &lt;property name=&quot;bookList2&quot; ref=&quot;bookList&quot;&gt;&lt;/property&gt;
    &lt;/bean&gt;
    &lt;util:list id=&quot;bookList&quot;&gt;
        &lt;bean id=&quot;b1&quot; class=&quot;com.meturing.pojo.test03.Book&quot; p:bname=&quot;Java&quot; p:author=&quot;Java&quot;&gt;&lt;/bean&gt;
        &lt;bean id=&quot;b2&quot; class=&quot;com.meturing.pojo.test03.Book&quot; p:bname=&quot;MySql&quot; p:author=&quot;MySql&quot;&gt;&lt;/bean&gt;
        &lt;bean id=&quot;b3&quot; class=&quot;com.meturing.pojo.test03.Book&quot; p:bname=&quot;PHP&quot; p:author=&quot;PHP&quot;&gt;&lt;/bean&gt;
    &lt;/util:list&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//util标签使用
@Test
public void test02(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext4_2.xml&quot;);
	Student student = applicationContext.getBean(&quot;student1&quot;, Student.class);
	System.out.println(student.getBookList2());//[Book(bname=Java, author=Java), Book(bname=MySql, author=MySql), Book(bname=PHP, author=PHP)]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


