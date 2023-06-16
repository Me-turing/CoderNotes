<template><div><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<h3 id="什么是aop切面编程" tabindex="-1"><a class="header-anchor" href="#什么是aop切面编程" aria-hidden="true">#</a> 什么是AOP切面编程</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230509094717535.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>AOP切面编程一般可以帮助我们在不修改现有代码的情况下,对程序的功能进行拓展,往往用于实现 <code v-pre>日志处理</code>,<code v-pre>权限控制</code>,<code v-pre>性能检测</code>,<code v-pre>事务控制</code>等</p>
<p>在之前的学习中,我们学习了动态代理 : <RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/03_Spring%E5%9F%BA%E7%A1%80/07_%E9%9D%99%E6%80%81%E4%BB%A3%E7%90%86%E4%B8%8E%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86/%E9%9D%99%E6%80%81%E4%BB%A3%E7%90%86%E4%B8%8E%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86.html">静态代理与动态代理</RouterLink></p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230509113426436.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>AOP实现的原理就是动态代理: <strong>在有接口的情况下,使用JDK动态代理,在没有接口的情况下使用cglib动态代理</strong></p>
<h3 id="aop切面编程的相关术语" tabindex="-1"><a class="header-anchor" href="#aop切面编程的相关术语" aria-hidden="true">#</a> AOP切面编程的相关术语</h3>
<h4 id="连接点-joint-point" tabindex="-1"><a class="header-anchor" href="#连接点-joint-point" aria-hidden="true">#</a> 连接点 Joint point</h4>
<p>类里面那些<strong>可以被增强的方法</strong>,这些方法称之为连接点</p>
<p>表示在程序中明确定义的点，典型的包括方法调用，对类成员的访问以及异常处理程序块的执行等等，它自身还可以嵌套其它 joint point</p>
<h4 id="切入点-pointcut" tabindex="-1"><a class="header-anchor" href="#切入点-pointcut" aria-hidden="true">#</a> 切入点 Pointcut</h4>
<p><strong>实际被增强的方法</strong>,称之为切入点</p>
<p>表示一组 joint point，这些 joint point 或是通过逻辑关系组合起来，或是通过通配、正则表达式等方式集中起来，它定义了相应的 Advice 将要发生的地方</p>
<h4 id="通知-advice" tabindex="-1"><a class="header-anchor" href="#通知-advice" aria-hidden="true">#</a> 通知 Advice</h4>
<p>实际增强的逻辑部分称为通知 (<strong>增加的功能</strong>)</p>
<p>Advice 定义了在 Pointcut 里面定义的程序点具体要做的操作，它通过 before、after 和 around 来区别是在每个 joint point 之前、之后还是代替执行的代码。</p>
<p>通知类型:</p>
<ol>
<li>前置通知 : 在被代理的目标方法前执行</li>
<li>返回通知 : 在被代理的目标方法成功结束后执行（寿终正寝）</li>
<li>异常通知 : 在被代理的目标方法异常结束后执行（死于非命）</li>
<li>后置通知 : 在被代理的目标方法最终结束后执行（盖棺定论）</li>
<li>环绕通知 : 使用try...catch...finally结构围绕整个被代理的目标方法，包括上面四种通知对应的所有位置<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230509101135916.png" alt="" loading="lazy"></li>
</ol>
<h4 id="目标对象-target" tabindex="-1"><a class="header-anchor" href="#目标对象-target" aria-hidden="true">#</a> 目标对象 Target</h4>
<p><strong>被增强功能的对象(被代理的对象)</strong></p>
<p>织入 Advice 的目标对象</p>
<h4 id="切面-aspect" tabindex="-1"><a class="header-anchor" href="#切面-aspect" aria-hidden="true">#</a> 切面 Aspect</h4>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230509101406250.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>表现为功能相关的一些advice方法放在一起声明成的一个Java类</strong></p>
<p>Aspect 声明类似于 Java 中的类声明，在 Aspect 中会包含着一些 Pointcut 以及相应的 Advice。</p>
<h4 id="织入-weaving" tabindex="-1"><a class="header-anchor" href="#织入-weaving" aria-hidden="true">#</a> 织入 Weaving</h4>
<p><strong>创建代理对象并实现功能增强的声明并运行过程</strong></p>
<p>将 Aspect 和其他对象连接起来, 并创建 Adviced object 的过程</p>
<h4 id="aspectj" tabindex="-1"><a class="header-anchor" href="#aspectj" aria-hidden="true">#</a> AspectJ</h4>
<p>AspectJ本身并不是spring框架中的组成部分, 是一个独立的AOP框架,一般把AspectJ和Spring框架的AOP依赖一起使用,所以要导入一个独立的依赖</p>
<p>本质上是静态代理，将代理逻辑“织入”被代理的目标类编译得到的字节码文件，所以最终效果是动态的。weaver就是织入器。Spring只是借用了AspectJ中的注解。</p>
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<h3 id="所需依赖" tabindex="-1"><a class="header-anchor" href="#所需依赖" aria-hidden="true">#</a> 所需依赖</h3>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;packaging&gt;jar&lt;/packaging&gt;
&lt;properties&gt;
	&lt;maven.compiler.source&gt;8&lt;/maven.compiler.source&gt;
	&lt;maven.compiler.target&gt;8&lt;/maven.compiler.target&gt;
	&lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
&lt;/properties&gt;
&lt;dependencies&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;org.springframework&lt;/groupId&gt;
		&lt;artifactId&gt;spring-context&lt;/artifactId&gt;
		&lt;version&gt;5.2.12.RELEASE&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!--spring切面包--&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;org.springframework&lt;/groupId&gt;
		&lt;artifactId&gt;spring-aspects&lt;/artifactId&gt;
		&lt;version&gt;5.3.5&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!--织入包  spring-aspects 已经导入该包,这里可以不导入--&gt;
	&lt;!--&lt;dependency&gt;--&gt;
	&lt;!--&lt;groupId&gt;org.aspectj&lt;/groupId&gt;--&gt;
	&lt;!--&lt;artifactId&gt;aspectjweaver&lt;/artifactId&gt;--&gt;
	&lt;!--&lt;version&gt;1.9.6&lt;/version&gt;--&gt;
	&lt;!--&lt;/dependency&gt;--&gt;
	&lt;!--aop联盟包--&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;aopalliance&lt;/groupId&gt;
		&lt;artifactId&gt;aopalliance&lt;/artifactId&gt;
		&lt;version&gt;1.0&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!--Apache Commons日志包--&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;commons-logging&lt;/groupId&gt;
		&lt;artifactId&gt;commons-logging&lt;/artifactId&gt;
		&lt;version&gt;1.2&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!--lombok --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
		&lt;artifactId&gt;lombok&lt;/artifactId&gt;
		&lt;version&gt;1.18.26&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!--junit --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;junit&lt;/groupId&gt;
		&lt;artifactId&gt;junit&lt;/artifactId&gt;
		&lt;version&gt;4.13.1&lt;/version&gt;
		&lt;scope&gt;test&lt;/scope&gt;
	&lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>核心包:<br>
<code v-pre>spring-context</code> 包会自动依赖  <code v-pre>spring-aop</code> / <code v-pre>spring-beans</code> / <code v-pre>spring-core</code> / <code v-pre>spring-expression</code><br>
<code v-pre>spring-aspects</code>  包会自动依赖 <code v-pre>spectjweaver</code></p>
<h3 id="spring配置文件" tabindex="-1"><a class="header-anchor" href="#spring配置文件" aria-hidden="true">#</a> Spring配置文件</h3>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot;
       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/aop
       https://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/context
       https://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;
    &lt;!--spring 包扫描  --&gt;
    &lt;context:component-scan base-package=&quot;com.meturing&quot; /&gt;
    &lt;!--aop autoProxy 自动生成代理对象 --&gt;
    &lt;aop:aspectj-autoproxy /&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意: 由于需要使用aop与context,我们需要导入声明空间才可使用</p>
<h3 id="接口环境" tabindex="-1"><a class="header-anchor" href="#接口环境" aria-hidden="true">#</a> 接口环境</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514090540903.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>UserDao.Java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public interface UserDao {  
	int addUser(Integer userid,String username);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserDaoImpl.Java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Repository
public class UserDaoImpl implements UserDao {
    @Override
    public int addUser(Integer userid, String username) {
        System.out.println(&quot;userdao add ... ...&quot;);
        //int i =1/0;
        return 1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>EmpDao.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public interface EmpDao {
    int addEmp(Integer empno,String ename,String job);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>EmpDaoImpl.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Repository
public class EmpDaoImpl implements EmpDao {
    @Override
    public int addEmp(Integer empno, String ename, String job) {
        System.out.println(&quot;empDao add ... ...&quot;);
        //int i = 1/0;
        return 1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意,我们需要将实现类交给IOC容器进行管理,常见的注解如下: <RouterLink to="/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/03_Spring%E5%9F%BA%E7%A1%80/06_%E6%B3%A8%E8%A7%A3%E6%96%B9%E5%BC%8F%E7%AE%A1%E7%90%86Bean/%E6%B3%A8%E8%A7%A3%E6%96%B9%E5%BC%8F%E7%AE%A1%E7%90%86Bean.html#%E7%9B%B8%E5%85%B3%E6%B3%A8%E8%A7%A3">相关注解</RouterLink></p>
<h2 id="切入点表达式" tabindex="-1"><a class="header-anchor" href="#切入点表达式" aria-hidden="true">#</a> 切入点表达式</h2>
<p>通过一个表达式来确定AOP要增强的是哪个或者那些方法</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514091244264.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3>
<p><code v-pre>execution([权限修饰符][返回值类型][类的全路径名][方法名](参数 列表) )</code></p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514091122561.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>可用的表达式:</strong></p>
<ol>
<li><code v-pre>execution() || execution()</code>表示满足两个execution()中的任何一个即可</li>
<li><code v-pre>execution() &amp;&amp; execution()</code>表示两个execution()表达式必须都满足</li>
<li><code v-pre>!execution()</code>表示不满足表达式的其他方法</li>
</ol>
<h3 id="使用案例" tabindex="-1"><a class="header-anchor" href="#使用案例" aria-hidden="true">#</a> 使用案例</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//指定切点为UserDaoImpl.add方法 
execution(* com.meturing.dao.UserDaoImpl.add(..))

//指定切点为UserDaoImpl.所有的方法 
execution(* com.meturing.dao.UserDaoImpl.*(..))

//指定切点为dao包下所有的类中的所有的方法 
execution(* com.meturing.dao.*.*(..))

// 指定切点为dao包下所有的类中的add的方法
execution(* com.meturing.dao.*.add(..))

// 指定切点为dao包下所有的类中的add开头的方法
execution(* com.meturing.dao.*.add*(..))                    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重用切入点表达式" tabindex="-1"><a class="header-anchor" href="#重用切入点表达式" aria-hidden="true">#</a> 重用切入点表达式</h3>
<p>在一处声明切入点表达式之后，其他有需要的地方引用这个切入点表达式。易于维护，一处修改，处处生效。声明方式如下：<br>
我们可以在一个专门的方法上<code v-pre>@Pointcut</code>注解声明的切入点表达式，可以在其他任何地方通过方法名进行引入</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 切入点表达式重用</span>
<span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">"execution(* *..*.add(..))"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">declarPointCut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同一个类中</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"declarPointCut()"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printLogBeforeCoreOperation</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在不同的类中</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Around(value = &quot;com.atguigu.spring.aop.aspect.LogAspect.declarPointCut()&quot;)
public Object roundAdvice(ProceedingJoinPoint joinPoint) {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>而作为存放切入点表达式的类，<strong>可以把整个项目中所有切入点表达式全部集中过来</strong>，便于统一管理：</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Component
public class AtguiguPointCut {
    @Pointcut(value = &quot;execution(public int *..Calculator.sub(int,int))&quot;)
    public void atguiguGlobalPointCut(){}
    @Pointcut(value = &quot;execution(public int *..Calculator.add(int,int))&quot;)
    public void atguiguSecondPointCut(){}
    @Pointcut(value = &quot;execution(* *..*Service.*(..))&quot;)
    public void transactionPointCut(){}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="joinpoint对象和proceedingjoinpoint对象" tabindex="-1"><a class="header-anchor" href="#joinpoint对象和proceedingjoinpoint对象" aria-hidden="true">#</a> JoinPoint对象和ProceedingJoinPoint对象</h2>
<h3 id="joinpoint对象" tabindex="-1"><a class="header-anchor" href="#joinpoint对象" aria-hidden="true">#</a> JoinPoint对象</h3>
<p>JoinPoint对象<strong>封装SpringAop中切面方法的信息</strong>,在切面方法中添加<strong>JoinPoint参数</strong>,就可以获取到了封装了该方法信息的JoinPoint对象.</p>
<p>常用API:<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514141130760.png" alt="" loading="lazy"></p>
<h3 id="proceedingjoinpoint对象" tabindex="-1"><a class="header-anchor" href="#proceedingjoinpoint对象" aria-hidden="true">#</a> ProceedingJoinPoint对象</h3>
<p><strong>ProceedingJoinPoint对象是JoinPoint的子接口,该对象值用在@Around的切面方法中</strong></p>
<p><code v-pre>Object proceed() throws Throwable</code>  //执行目标方法</p>
<p><code v-pre>Object proceed(Object[] varl) throws Thowable</code> //传入的新的参数去执行目标方法</p>
<h2 id="通知" tabindex="-1"><a class="header-anchor" href="#通知" aria-hidden="true">#</a> 通知</h2>
<p>我们一般会对一个类作为切面类,使用<code v-pre>@Aspect</code>注解标识,并使用<code v-pre>@Component</code>注解交给容器管理</p>
<h3 id="before-前置通知" tabindex="-1"><a class="header-anchor" href="#before-前置通知" aria-hidden="true">#</a> @Before 前置通知</h3>
<p>切点方法执行之前先执行的功能<br>
参数列表可以用JoinPoint接收切点对象,可以获取方法执行的参数</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Component
@Aspect
public class DaoAspect {
    @Before(&quot;execution(* com.meturing.dao.*.add*(..))&quot;)
    public void methodBefore(JoinPoint joinPoint){
        System.out.println(&quot;Before invoked&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="afterreturning-返回通知" tabindex="-1"><a class="header-anchor" href="#afterreturning-返回通知" aria-hidden="true">#</a> @AfterReturning 返回通知</h3>
<p>切点方法正常运行结束后增强的功能<br>
如果方法运行过程中出现异常,则该功能不运行<br>
参数列表可以用 JoinPoint joinPoint接收切点对象,可以用Object res接收方法返回值,需要用returning指定返回值名称</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Component
@Aspect
public class DaoAspect {
    @AfterReturning(value = &quot;execution(* com.meturing.dao.*.add*(..))&quot;,returning = &quot;res&quot;)
    public void methodAfterReturning(JoinPoint joinPoint,Object res){
        System.out.println(&quot;AfterReturning invoked&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="afterthrowing-异常通知" tabindex="-1"><a class="header-anchor" href="#afterthrowing-异常通知" aria-hidden="true">#</a> @AfterThrowing 异常通知</h3>
<p>切点方法出现异常时运行的增强功能<br>
如果方法运行没有出现异常,则该功能不运行<br>
参数列表可以用Exception ex接收异常对象 需要通过throwing指定异常名称</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Component
@Aspect
public class DaoAspect {
     @AfterThrowing(value = &quot;execution(* com.meturing.dao.*.add*(..))&quot;,throwing = &quot;ex&quot;)
     public void methodAfterThrowing(Exception ex){
         System.out.println(&quot;AfterThrowing invoked&quot;);
         System.out.println(ex.getMessage());
     }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="after-后置通知" tabindex="-1"><a class="header-anchor" href="#after-后置通知" aria-hidden="true">#</a> @After 后置通知</h3>
<p>方法执行之后要增强的功能<br>
无论切点方法是否出现异常都会执行的方法<br>
参数列表可以用JoinPoint接收切点对象</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Component
@Aspect
public class DaoAspect {
	@After(&quot;execution(* com.meturing.dao.*.add*(..))&quot;)  
	public void methodAfter(JoinPoint joinPoint){  
		System.out.println(&quot;After invoked&quot;);  
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="around-环绕通知" tabindex="-1"><a class="header-anchor" href="#around-环绕通知" aria-hidden="true">#</a> @Around 环绕通知</h3>
<p>在切点方法之前和之后都进行功能的增强,类似CGLib动态代理<br>
需要在通知中定义方法执行的位置,并在执行位置之前和之后自定义增强的功能<br>
方法列表可以通过<code v-pre>ProceedingJoinPoint</code>获取执行的切点,通过<code v-pre>proceedingJoinPoint.proceed()</code>方法控制切点方法的执行位置<br>
<code v-pre>proceedingJoinPoint.proceed()</code>方法会将切点方法的返回值获取到,并交给我们,可以做后续处理<br>
<strong>我们在环绕通知的最后需要将切点方法的返回值继续向上返回,否则切点方法在执行时接收不到返回值</strong></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Component
@Aspect
public class DaoAspect {
    @Around(value = &quot;execution(* com.meturing.dao.*.add*(..))&quot;)
    public Object methodAround(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        System.out.println(&quot;Before invoked&quot;);
        Object proceed = proceedingJoinPoint.proceed();//执行切点方法
        System.out.println(&quot;After invoked&quot;);
        if (proceed instanceof Integer){
            System.out.println((Integer)proceed);
        }
        return  proceed;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通知优先级" tabindex="-1"><a class="header-anchor" href="#通知优先级" aria-hidden="true">#</a> 通知优先级</h2>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514211256641.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>相同目标方法上同时存在多个切面时，切面的优先级控制切面的内外嵌套顺序。</p>
<ul>
<li>优先级高的切面：外面</li>
<li>优先级低的切面：里面</li>
</ul>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514213758750.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="order-注解" tabindex="-1"><a class="header-anchor" href="#order-注解" aria-hidden="true">#</a> @Order 注解</h3>
<p>使用<code v-pre>@Order</code>注解可以控制切面的优先级：</p>
<ul>
<li>@Order(较小的数)：优先级高</li>
<li>@Order(较大的数)：优先级低</li>
</ul>
<h3 id="实际意义" tabindex="-1"><a class="header-anchor" href="#实际意义" aria-hidden="true">#</a> 实际意义</h3>
<p>实际开发时，如果有多个切面嵌套的情况，要慎重考虑。</p>
<p>例如：如果事务切面优先级高，那么在缓存中命中数据的情况下，事务切面的操作都浪费了。</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514213958057.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>此时应该将缓存切面的优先级提高，在事务操作之前先检查缓存中是否存在目标数据。</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514214009588.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="aop的完全xml开发" tabindex="-1"><a class="header-anchor" href="#aop的完全xml开发" aria-hidden="true">#</a> AOP的完全XML开发</h2>
<p>我们可以直击在XML中配置AOP的切面属性</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot;
       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/aop
       https://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/context
       https://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;
    &lt;!--spring 包扫描  --&gt;
    &lt;context:component-scan base-package=&quot;com.meturing&quot; /&gt;
    &lt;!--aop autoProxy 自动生成代理对象 --&gt;
    &lt;aop:aspectj-autoproxy /&gt;
    &lt;!-- Aop的配置 --&gt;
    &lt;aop:config&gt;
        &lt;!-- 配置公共切入点表达式 --&gt;
        &lt;aop:pointcut id=&quot;addPointCut&quot; expression=&quot;execution(* com.meturing.dao.*.add*(..))&quot;/&gt;
        &lt;!-- 配置切面类 --&gt;
        &lt;aop:aspect id=&quot;daoAspectByXML&quot; ref=&quot;daoAspectByXml&quot;&gt;
            &lt;!-- 前置通知: method方法名  pointcut-ref:公共切入点表达式ID --&gt;
            &lt;aop:before method=&quot;methodBefore&quot; pointcut-ref=&quot;addPointCut&quot; /&gt;
            &lt;!-- 返回通知: method方法名  pointcut-ref:公共切入点表达式ID returning:指定返回的值 --&gt;
            &lt;aop:after-returning method=&quot;methodAfterReturning&quot; pointcut-ref=&quot;addPointCut&quot; returning=&quot;res&quot; /&gt;
            &lt;!-- 异常通知: method方法名  pointcut-ref:公共切入点表达式ID throwing:异常的值 --&gt;
            &lt;aop:after-throwing method=&quot;methodAfterThrowing&quot; pointcut-ref=&quot;addPointCut&quot; throwing=&quot;ex&quot; /&gt;
            &lt;!-- 后置通知: method方法名  pointcut-ref:公共切入点表达式ID --&gt;
            &lt;aop:after method=&quot;methodAfter&quot; pointcut-ref=&quot;addPointCut&quot; /&gt;
            &lt;!-- 环绕通知: method方法名  pointcut-ref:公共切入点表达式ID --&gt;
            &lt;aop:around method=&quot;methodAround&quot; pointcut-ref=&quot;addPointCut&quot; /&gt;
        &lt;/aop:aspect&gt;
    &lt;/aop:config&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>aop:config</code>标签中配置:</p>
<ul>
<li><code v-pre>aop:pointcut</code>标签配置切入点表达式</li>
<li><code v-pre>aop:aspect</code>标签配置切面类 使用ref属性关联到切面的bean
<ul>
<li><code v-pre>aop:before</code>标签配置前置通知 使用pointcut-ref关联到切入点表达式</li>
<li><code v-pre>aop:after-returning</code>标签配置返回通知 使用pointcut-ref关联到切入点表达式，returning指定方法中用来接受目标方法返回值的参数名</li>
<li><code v-pre>aop:after-throwing</code>标签配置异常通知 使用pointcut-ref关联到切入点表达式，throwing指定目标方法异常时的参数名</li>
<li><code v-pre>aop:after</code>标签配置后置通知 使用pointcut-ref关联到切入点表达式</li>
</ul>
</li>
</ul>
<h2 id="aop的完全注解开发" tabindex="-1"><a class="header-anchor" href="#aop的完全注解开发" aria-hidden="true">#</a> AOP的完全注解开发</h2>
<p>添加配置类SpringConfig.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Configuration
@ComponentScan(basePackages = &quot;com.meturing&quot;)
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class SpringConfig {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void test2(){
	ApplicationContext context=new AnnotationConfigApplicationContext(SpringConfig.class);
	UserDao userDao = context.getBean( UserDao.class);
	int add = userDao.addUser(10,&quot;晓明&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aop的通知获取细节" tabindex="-1"><a class="header-anchor" href="#aop的通知获取细节" aria-hidden="true">#</a> AOP的通知获取细节</h2>
<h3 id="joinpoint接口" tabindex="-1"><a class="header-anchor" href="#joinpoint接口" aria-hidden="true">#</a> JoinPoint接口</h3>
<p><strong>JoinPoint接口</strong> : <code v-pre>org.aspectj.lang.JoinPoint</code></p>
<ol>
<li>要点1：JoinPoint接口通过getSignature()方法获取目标方法的签名</li>
<li>要点2：通过目标方法签名对象获取方法名</li>
<li>要点3：通过JoinPoint对象获取外界调用目标方法时传入的实参列表组成的数组</li>
</ol>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>/**获取目标方法名称，实际参数列表
     * 在前置通知方法形参位置声明一个JoinPoint类型的参数，Spring就会将这个对象传入
     * 然后根据这个对象就可以获取目标方法的名称、实际参数列表*/
    @Before(value = &quot;execution(public int com.meturing.aop.impl.CalculatorPureImpl.div(int,int))&quot;)
    public void printLogBeforeCore(JoinPoint joinPoint){
        //1. 通过JoinPoint对象获取目标方法签名对象
        //一个方法的全部声明信息就是一个方法的签名
        Signature signature = joinPoint.getSignature();
        String name = signature.getName();
        System.out.println(&quot;方法名：name() =&quot; + name);
        int modifiers = signature.getModifiers();
        //二进制的形式返回
        System.out.println(&quot;修饰符：modifiers() =&quot; + modifiers);
        String declaringTypeName = signature.getDeclaringTypeName();
        System.out.println(&quot;声明类型的全限定名：declaringTypeName() =&quot; + declaringTypeName);
        //参数列表
        Object[] args = joinPoint.getArgs();
        List&lt;Object&gt; objects = Arrays.asList(args);
        System.out.println(&quot;参数列表是：&quot;+objects);
        System.out.println(&quot;[前置通知] 前置通知...&quot;);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要获取方法签名、传入的实参等信息时，可以在通知方法声明JoinPoint类型的形参。<br>
获取方法名：<code v-pre>joinPoint.getSignature();</code><br>
获取修饰符：<code v-pre>signature.getModifiers(); </code>（返回是以二进制的形式）<br>
获取类型的全限定名：<code v-pre>signature.getDeclaringTypeName();</code><br>
获取参数：<code v-pre>Object[] args = joinPoint.getArgs(); List objects = Arrays.asList(args);</code></p>
<h3 id="方法返回值" tabindex="-1"><a class="header-anchor" href="#方法返回值" aria-hidden="true">#</a> 方法返回值</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514220450881.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//获取目标方法返回值分两步
//第一步：在AfterReturning注解中，配置returning属性的值设置形参的名称
//第二步：使用returning属性设置的名称在通知方法中声明一个形参Object
@AfterReturning(value = &quot;execution(public int com.meturing.aop.impl.CalculatorPureImpl.div(int,int))&quot;,
                returning = &quot;targetMethodReturn&quot;)
public void printLogAfterCoreSuccess(JoinPoint joinPoint,Object targetMethodReturn){
    String name = joinPoint.getSignature().getName();
    System.out.println(&quot;[返回通知] &quot;+name+&quot;方法执行成功返回...&quot;+targetMethodReturn);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抛出的异常捕捉" tabindex="-1"><a class="header-anchor" href="#抛出的异常捕捉" aria-hidden="true">#</a> 抛出的异常捕捉</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514220537992.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在异常通知中，通过@AfterThrowing注解的throwing属性获取目标方法抛出的异常对象</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//获取异常值分两步
//第一步：AfterThrowing，配置throwing属性的值设置形参的名称
//第二步：使用throwing属性设置的名称在通知方法中声明一个形参，Spring会将目标方法抛出的异常从这传入
@AfterThrowing(value = &quot;execution(public int com.meturing.aop.impl.CalculatorPureImpl.div(int,int))&quot;,
               throwing = &quot;targetMethodException&quot;)
public void printLogAfterCoreException(JoinPoint joinPoint,Throwable targetMethodException){
    System.out.println(&quot;[异常通知] 方法异常...&quot;+targetMethodException.getMessage());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aop对获取bean的影响" tabindex="-1"><a class="header-anchor" href="#aop对获取bean的影响" aria-hidden="true">#</a> AOP对获取bean的影响</h2>
<h3 id="情景一-只有一个bean类" tabindex="-1"><a class="header-anchor" href="#情景一-只有一个bean类" aria-hidden="true">#</a> 情景一：只有一个bean类</h3>
<p>IOC中只有一个同类型的bean : 根据类型获取bean <font color="#00b050">可以正常获取bean对象</font></p>
<p>IOC中有多个同类型的bean : 根据类型获取bean <font color="#ff0000">抛出NoUniqueBeanDefinitionException异常，表示IOC容器中这个类型的bean有多个</font></p>
<h3 id="情景二-一个接口和一个实现类bean" tabindex="-1"><a class="header-anchor" href="#情景二-一个接口和一个实现类bean" aria-hidden="true">#</a> 情景二：一个接口和一个实现类bean</h3>
<p>根据接口类型获取bean : <font color="#00b050">能够正常获取到bean</font></p>
<p>根据类型获取bean : <font color="#00b050">能够正常获取到bean</font></p>
<h3 id="情景三-一个接口和多个实现类bean" tabindex="-1"><a class="header-anchor" href="#情景三-一个接口和多个实现类bean" aria-hidden="true">#</a> 情景三：一个接口和多个实现类bean</h3>
<p>根据接口类型获取bean : <font color="#ff0000">抛出NoUniqueBeanDefinitionException异常，表示IOC容器中这个类型的bean有多个</font></p>
<p>根据类型获取bean : <font color="#00b050">能够正常获取到bean</font></p>
<h3 id="情景四-一个接口和一个实现类bean-并对接口切面【重要】" tabindex="-1"><a class="header-anchor" href="#情景四-一个接口和一个实现类bean-并对接口切面【重要】" aria-hidden="true">#</a> 情景四：一个接口和一个实现类bean，并对接口切面【重要】</h3>
<p>根据接口类型获取bean : <font color="#00b050">能够正常获取到bean</font></p>
<p>根据类型获取bean : <font color="#ff0000">此时获取不到对应的bean，所以无法装配，抛出异常</font></p>
<ul>
<li>原因分析：<strong>动态代理</strong>
<ul>
<li>应用了切面后，真正放在IOC容器中的是代理类的对象</li>
<li>目标类并没有被放到IOC容器中，所以根据目标类的类型从IOC容器中是找不到的<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514221555339.png" alt="" loading="lazy"><br>
从内存分析的角度来说，IOC容器中引用的是代理对象，代理对象引用的是目标对象。IOC容器并没有直接引用目标对象，所以根据目标类本身在IOC容器范围内查找不到。<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514221606754.png" alt="" loading="lazy"></li>
</ul>
</li>
</ul>
<h3 id="情景五-一个bean类-并对其切面【重要】" tabindex="-1"><a class="header-anchor" href="#情景五-一个bean类-并对其切面【重要】" aria-hidden="true">#</a> 情景五：一个bean类，并对其切面【重要】</h3>
<p>根据接口类型获取bean : <font color="#00b050">能够正常获取到bean</font></p>
<ul>
<li>原因分析 ： <strong>cglib代理</strong><br>
由于没有使用接口，我们是直接对实现类进行切面编程，所以Spring使用的是CGlib代理<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514221742302.png" alt="" loading="lazy"><br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514221749135.png" alt="" loading="lazy"></li>
</ul>
<p>根据类型获取bean : <font color="#00b050">能够正常获取到bean</font></p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>对实现了接口的类应用切面</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514221947873.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>对没实现接口的类应用切面</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/assets/image-20230514222002033.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


