<template><div><h2 id="静态代理" tabindex="-1"><a class="header-anchor" href="#静态代理" aria-hidden="true">#</a> 静态代理</h2>
<p>代理类与被代理类实现共同接口,在代理类中对被代理类进行代码增强</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/07_静态代理与动态代理/assets/image-20230506171310583.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="代码demo" tabindex="-1"><a class="header-anchor" href="#代码demo" aria-hidden="true">#</a> 代码Demo</h3>
<p>简单的一个Demo来模拟以下情景:</p>
<p>用户张三需要打官司,请律师在他讲话之前进行辩护和总结</p>
<p>Court 接口</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public interface Court {
    void doCourt();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Person 实体类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class Person  implements Court {
    private String name;
    public Person(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void doCourt() {
        System.out.println(name + &quot;说:我没有杀人!&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正常情况下,我们直接使用<code v-pre>Person类</code>会出现以下情况</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class TestDemo {
    public static void main(String[] args) {
        Person person = new Person(&quot;张三&quot;);
        person.doCourt();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/07_静态代理与动态代理/assets/image-20230506170453937.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>接下来我们使用静态代理的方式创建一个代理类,来<strong>增强Person类</strong></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class Lawyer implements Court {
    private Person person;//被代理的类
    public Lawyer(Person person) {
        this.person = person;
    }
    public void doCourt() {
        //增强代码
        System.out.println(&quot;开始取证~&quot;);
        System.out.println(&quot;为&quot;+person.getName()+&quot;辩解&quot;);
        //执行代码
        person.doCourt();
        //增强代码
        System.out.println(&quot;陈诉总结&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增强后的效果</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Lawyer</span> lawyer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Lawyer</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
        lawyer<span class="token punctuation">.</span><span class="token function">doCourt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/07_静态代理与动态代理/assets/image-20230506170653287.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p><strong>静态代理中代理类与被代理类都需要实现同一个接口</strong>，这就说明我们的一个静态代理类只能代理一个类，并且还要事先知道我们要代理哪个类才能写代理类，如果我们有其他类还想使用代理那就必须再写一个代理类。</p>
<p>然而在实际开发中我们是可能是有非常多的类是需要被代理的，并且事先我们可能并不知道我们要代理哪个类。<strong>所以如果继续使用静态代理反而会增加许多的工作量，并且效率低下，代码复用率也不好。</strong></p>
<h2 id="动态代理" tabindex="-1"><a class="header-anchor" href="#动态代理" aria-hidden="true">#</a> 动态代理</h2>
<p>动态代理可以针对于一些不特定的类或者一些不特定的方法进行代理,我们可以在程序运行时动态的变化代理的规则，代理类在程序运行时才创建的代理模式成为动态代理。这种情况下，代理类并不是在Java代码中定义好的，而是在程序运行时根据我们的在Java代码中的“指示”动态生成的</p>
<table>
<thead>
<tr>
<th style="text-align:left">类型</th>
<th style="text-align:left">归属</th>
<th style="text-align:left">特征</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Proxy  动态代理</td>
<td style="text-align:left">JDK动态代理</td>
<td style="text-align:left">面向接口</td>
</tr>
<tr>
<td style="text-align:left">CGlib  动态代理</td>
<td style="text-align:left">第三方动态代理</td>
<td style="text-align:left">面向父类</td>
</tr>
</tbody>
</table>
<h3 id="proxy动态代理" tabindex="-1"><a class="header-anchor" href="#proxy动态代理" aria-hidden="true">#</a> Proxy动态代理</h3>
<p>通过Porxy动态代理获得一个代理对象,在代理对象中,对某个方法进行增强</p>
<p><code v-pre>Proxy.newProxyInstance</code> 方法需要三个参数:</p>
<ul>
<li><code v-pre>ClassLoader loader</code>  -&gt; 被代理类的类加载器,可通过反射获取</li>
<li><code v-pre>Class&lt;?&gt;[] interfaces</code>  -&gt; 被代理类的接口Class对象,可通过反射获取</li>
<li><code v-pre>InvocationHandler h</code>  -&gt; 方法调度接口,可以直接New接口对象或者新建类实现改接口</li>
</ul>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/07_静态代理与动态代理/assets/image-20230506171513386.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="代码demo-1" tabindex="-1"><a class="header-anchor" href="#代码demo-1" aria-hidden="true">#</a> 代码Demo</h4>
<p>接口</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public interface Dinner {
    void eat(String foodName);
    void drink();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>被代理类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class Man implements Dinner {
    private String name;
    public Man(String name) {
        this.name = name;
    }
    @Override
    public void eat(String foodName) {
        System.out.println(name+&quot;正在吃&quot;+foodName);
    }
    @Override
    public void drink() {
        System.out.println(name+&quot;正在喝茶&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class Student implements Dinner {
    private String name;
    public Student(String name) {
        this.name = name;
    }
    @Override
    public void eat(String foodName) {
        System.out.println(name+&quot;正在食堂吃&quot;+foodName);
    }
    @Override
    public void drink() {
        System.out.println(name+&quot;正在喝可乐&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用Proxy动态代理</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class Test1 {
    public static void main(String[] args) {
        Dinner dinner = new Man(&quot;张三&quot;);
        //ClassLoader loader,
        ClassLoader classLoader = dinner.getClass().getClassLoader();
        //Class&lt;?&gt;[] interfaces,
        Class&lt;?&gt;[] interfaces = dinner.getClass().getInterfaces();
        //InvocationHandler h
        InvocationHandler invocationHandler = new InvocationHandler() {
            @Override
            public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                Object results = null;
                if (method.getName().equals(&quot;eat&quot;)) {
                    System.out.println(&quot;餐前洗手~&quot;);
                    //Object obj, Object... args   obj被代理的对象  args表示参数
                    results = method.invoke(dinner,args);
                    System.out.println(&quot;餐后洗碗~&quot;);
                }else {
                    results = method.invoke(dinner,args);
                }
                return results;
            }
        };
        Dinner dinnerProxy = (Dinner) Proxy.newProxyInstance(classLoader, interfaces, invocationHandler);
        dinnerProxy.eat(&quot;三明治&quot;);
        dinnerProxy.drink();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h4>
<p>在不修改原有代码的 或者没有办法修改原有代码的情况下增强对象功能 ,使用代理对象代替原来的对象去完成功能进而达到拓展功能的目的</p>
<p>JDK Proxy 动态代理面向接口的动态代理,<strong>一定要有接口和实现类的存在.代理对象增强的是实现类</strong><br>
生成的代理对象<strong>只能转换成接口的对象</strong> 不能转换成被代理类的对象<br>
代理对象<strong>只能增强接口中定义的方法</strong>  实现类中其他和接口无关的方法是无法增强的<br>
代理对象<strong>只能读取到接口中方法上的注解</strong> 不能读取到实现类方法上的注解</p>
<h3 id="cglib动态代理" tabindex="-1"><a class="header-anchor" href="#cglib动态代理" aria-hidden="true">#</a> CGlib动态代理</h3>
<p>CGlib动态代理是面向父类的,利用的子类继承父类的特新实现代码增强</p>
<h4 id="底层原理" tabindex="-1"><a class="header-anchor" href="#底层原理" aria-hidden="true">#</a> 底层原理</h4>
<p>使用继承实现增强</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/07_静态代理与动态代理/assets/image-20230506180909146.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>实体类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class Person  {
    private String name;
    public Person(String name) {
        this.name = name;
    }
    public Person() {
    }
    public void eat(String foodName) {
        System.out.println(name+&quot;正在食堂吃&quot;+foodName);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增强子类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class ZhangSan extends Person {
    public ZhangSan(String name) {
        super(name);
    }
    @Override
    public void eat(String foodName) {
        System.out.println(&quot;餐前洗手&quot;);
        super.eat(foodName);
        System.out.println(&quot;餐后洗碗&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试效果</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class Test01 {
    public static void main(String[] args) {
        System.out.println(&quot;--- 使用子类继承父类增强 ---&quot;);
        ZhangSan zhangSan = new ZhangSan(&quot;张三&quot;);
        zhangSan.eat(&quot;三明治&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/07_静态代理与动态代理/assets/image-20230506181030975.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="使用cglib动态代理" tabindex="-1"><a class="header-anchor" href="#使用cglib动态代理" aria-hidden="true">#</a> 使用CGlib动态代理</h4>
<h5 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h5>
<p>CGlib动态代理需要依赖<code v-pre>org.springframework.cglib</code>包,所以在使用前需要导包.<br>
我们可以直接导入<code v-pre>spring-context</code> 将会自动关联依赖</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;dependencies&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;org.springframework&lt;/groupId&gt;
		&lt;artifactId&gt;spring-context&lt;/artifactId&gt;
		&lt;version&gt;5.2.12.RELEASE&lt;/version&gt;
	&lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h5>
<ol>
<li>创建一个Enhancer对象</li>
<li>为Enhancer对象设置父类字节码</li>
<li>获取MethodInterceptor对象 用于定义增强规则</li>
<li>为Enhancer对象设置methodInterceptor</li>
<li>通过Enhancer对象获得代理对象</li>
</ol>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class Test01 {
    public static void main(String[] args) {
        System.out.println(&quot;--- 尝试使用CGlib动态代理增强 ---&quot;);
        // 1 获得一个Enhancer对象
        Enhancer enhancer = new Enhancer();
        // 2 设置父类字节码
        enhancer.setSuperclass(Person.class);
        // 3 获取MethodInterceptor对象 用于定义增强规则
        MethodInterceptor interceptor = new MethodInterceptor() {
            /**
             * 拦截
             *
             * @param o           生成之后的代理对象 personProxy
             * @param method      父类中原本要执行的方法  Person&gt;&gt;&gt; eat()
             * @param objects     方法在调用时传入的实参数组
             * @param methodProxy 子类中重写父类的方法 personProxy &gt;&gt;&gt; eat()
             * @return {@link Object }
             * @author sqTan
             * @date 2023/05/05
             */
            @Override
            public Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
                Object result = null;
                if (method.getName().equals(&quot;eat&quot;)) {
                    System.out.println(&quot;饭前洗手&quot;);
                    methodProxy.invokeSuper(o,objects);
                    System.out.println(&quot;饭后洗碗&quot;);
                }else {
                    methodProxy.invokeSuper(o, objects);
                }
                return result;
            }
        };
        // 4 设置methodInterceptor
        enhancer.setCallback(interceptor);
        // 5 获得代理对象 Class[] argumentTypes, Object[] arguments
        //Person person = (Person) enhancer.create(); //使用无参构造
        Person person = (Person) enhancer.create(new Class[]{String.class},new Object[]{&quot;张三&quot;});//使用带参构造
        // 6 使用代理对象完成功能
        person.eat(&quot;三明治&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/07_静态代理与动态代理/assets/image-20230506181515510.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2" aria-hidden="true">#</a> 总结</h4>
<ol>
<li>面向父类和接口没有关系</li>
<li>不仅仅可以增强接口中定义的方法还可以增强一个类的其他方法</li>
<li>可以读取父类中方法上的所有注解</li>
</ol>
</div></template>


