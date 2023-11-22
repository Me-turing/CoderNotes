import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as e}from"./app-71f45f98.js";const i="/CoderNotes/assets/image-20230820145728829-d40a8f44.png",l="/CoderNotes/assets/image-20230820150040257-683244e5.png",t="/CoderNotes/assets/image-20230820153103292-7b9fdeb3.png",c="/CoderNotes/assets/image-20230820153230588-814d48a9.png",o="/CoderNotes/assets/image-20230820153339166-8542f38e.png",d="/CoderNotes/assets/image-20230820153527069-5be5a965.png",r="/CoderNotes/assets/image-20230820153856447-690d6836.png",p={},u=e('<h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>在软件开发中,由于一些原因,客户端不想或不能直接访问一个对象,此时可以通过一个称为&quot;代理&quot;的第三者来实现间接访问.该方案对应的设计模式被称为代理模式.</p><p><code>代理模式(Proxy Design Pattern ) </code>原始定义是：让你能够提供对象的替代品或其占位符。代理控制着对于原对象的访问，并允许将请求提交给对象前后进行一些处理。</p><ul><li><p>现实生活中的代理: <strong>海外代购</strong><br><img src="'+i+'" alt="" loading="lazy"></p></li><li><p>软件开发中的代理<br> 代理模式中引入了一个新的代理对象,代理对象在客户端对象和目标对象之间起到了中介的作用,它去掉客户不能看到的内容和服务或者增加客户需要的额外的新服务.</p></li></ul><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h3><p><code>代理（Proxy）</code>模式分为三种角色：</p><ul><li><code>抽象主题（Subject）类</code>： 声明了真实主题和代理主题的共同接口,这样就可以保证任何使用真实主题的地方都可以使用代理主题,客户端一般针对抽象主题类进行编程。</li><li><code>代理（Proxy）类 </code>： 提供了与真实主题相同的接口，其内部含有对真实主题的引用，它可以在任何时候访问、控制或扩展真实主题的功能。</li><li><code>真实主题（Real Subject）类</code>： 实现了抽象主题中的具体业务，是代理对象所代表的真实对象，是最终要引用的对象。</li></ul><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="静态代理" tabindex="-1"><a class="header-anchor" href="#静态代理" aria-hidden="true">#</a> 静态代理</h2><p>这种代理方式需要代理对象和目标对象实现一样的接口。</p><ul><li>优点：可以在不修改目标对象的前提下扩展目标对象的功能。</li><li>缺点： <ul><li>冗余。由于代理对象要实现与目标对象一致的接口，会产生过多的代理类。</li><li>不易维护。一旦接口增加方法，目标对象与代理对象都要进行修改。</li></ul></li></ul><p>IUserDao.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface IUserDao {
    void save();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IUserDao.java 实现类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IUserDaoImpl</span> <span class="token keyword">implements</span> <span class="token class-name">IUserDao</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;保存用户的数据&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserDaoProxy.java 代理类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class UserDaoProxy implements IUserDao {
    private IUserDao iUserDao;
    public UserDaoProxy(IUserDaoImpl iUserDao) {
        this.iUserDao = iUserDao;
    }
    @Override
    public void save() {
        System.out.println(&quot;开启事务....&quot;);
        iUserDao.save();
        System.out.println(&quot;关闭事务....&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class StaticProxy {
    public static void main(String[] args) {
        UserDaoProxy userDaoProxy = new UserDaoProxy(new IUserDaoImpl());
        userDaoProxy.save();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jdk动态代理" tabindex="-1"><a class="header-anchor" href="#jdk动态代理" aria-hidden="true">#</a> JDK动态代理</h2><p>动态代理利用了JDK API,动态地在内存中构建代理对象,从而实现对目标对象的代理功能.动态代理又被称为JDK代理或接口代理.</p><p>静态代理与动态代理的区别:</p><ol><li>静态代理在编译时就已经实现了,编译完成后代理类是一个实际的class文件</li><li>动态代理是在运行时动态生成的,即编译完成后没有实际的class文件,而是在运行时动态生成类字节码,并加载到JVM中.</li></ol><p>JDK中生成代理对象主要涉及的类有:<br><code>java.lang.reflect Proxy</code> 主要方法为:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>static Object newProxyInstance(
    ClassLoader loader,  		//指定当前目标对象使用类加载器
    Class&lt;?&gt;[] interfaces,    //目标对象实现的接口的类型
    InvocationHandler h      //事件处理器
) 
//返回一个指定接口的代理类实例，该接口可以将方法调用指派到指定的调用处理程序。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>java.lang.reflect InvocationHandler</code> 主要方法为</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Object invoke(Object proxy, Method method, Object[] args) 
// 在代理实例上处理方法调用并返回结果。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现jdk动态代理" tabindex="-1"><a class="header-anchor" href="#实现jdk动态代理" aria-hidden="true">#</a> 实现JDK动态代理</h3><p>IUserDao.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface IUserDao {
    void save();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IUserDao.java 实现类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IUserDaoImpl</span> <span class="token keyword">implements</span> <span class="token class-name">IUserDao</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;保存用户的数据&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JDKDynamicAgent.java 代理类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class JDKDynamicAgent {
    private Object obj;
	
    public JDKDynamicAgent(Object obj) {
        this.obj = obj;
    }
	
    public Object getProxyInstance(){
        return Proxy.newProxyInstance(
                obj.getClass().getClassLoader(),//目标类加载器
                obj.getClass().getInterfaces(),//目标类接口
                new InvocationHandler() {//事件处理器
                    /**
                     * invoke方法参数说明
                     * @param proxy 代理对象
                     * @param method 对应于在代理对象上调用的接口方法Method实例
                     * @param args 代理对象调用接口方法时传递的实际参数
                     * @return: java.lang.Object 返回目标对象方法的返回值,没有返回值就返回null
                     */
                    @Override
                    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                        System.out.println(&quot;开启事务..&quot;);
                        method.invoke(obj,args);
                        System.out.println(&quot;关闭事务..&quot;);
                        return null;
                    }
                }
        );
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class JDKDynamicAgentTest {
    public static void main(String[] args) {
        IUserDao proxyInstance = (IUserDao)new JDKDynamicAgent(new IUserDaoImpl()).getProxyInstance();
        proxyInstance.save();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类是如何动态生成的" tabindex="-1"><a class="header-anchor" href="#类是如何动态生成的" aria-hidden="true">#</a> 类是如何动态生成的</h3><p>Java虚拟机类加载过程主要分为五个阶段：加载、验证、准备、解析、初始化。其中加载阶段需要完成以下3件事情：</p><ol><li>通过一个类的全限定名来获取定义此类的二进制字节流</li><li>将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构</li><li>在内存中生成一个代表这个类的 <code>java.lang.Class</code> 对象，作为方法区这个类的各种数据访问入口</li></ol><p>由于虚拟机规范对这3点要求并不具体，所以实际的实现是非常灵活的，关于第1点，<strong>获取类的二进制字节流</strong>（class字节码）就有很多途径：<br><img src="`+t+'" alt="" loading="lazy"></p><ul><li>从本地获取</li><li>从网络中获取</li><li><strong>运行时计算生成</strong>，这种场景使用最多的是动态代理技术，在 java.lang.reflect.Proxy 类中，就是用了 ProxyGenerator.generateProxyClass 来为特定接口生成形式为 <code>*$Proxy</code> 的代理类的二进制字节流<br><img src="'+c+'" alt="" loading="lazy"></li></ul><p>所以，动态代理就是想办法，根据接口或目标对象，计算出代理类的字节码，然后再加载到JVM中使用</p><h3 id="代理类的调用过程" tabindex="-1"><a class="header-anchor" href="#代理类的调用过程" aria-hidden="true">#</a> 代理类的调用过程</h3><p>我们通过借用阿里巴巴的一款线上监控诊断产品 Arthas(阿尔萨斯) ,对动态生成的代理类代码进行查看</p><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>代理类代码如下:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.sun.proxy;

import com.mashibing.proxy.example01.IUserDao;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.lang.reflect.UndeclaredThrowableException;

public final class $Proxy0
extends Proxy
implements IUserDao {
    private static Method m1;
    private static Method m3;
    private static Method m2;
    private static Method m0;
	
    public $Proxy0(InvocationHandler invocationHandler) {
        super(invocationHandler);
    }
	
    static {
        try {
            m1 = Class.forName(&quot;java.lang.Object&quot;).getMethod(&quot;equals&quot;, Class.forName(&quot;java.lang.Object&quot;));
            m3 = Class.forName(&quot;com.mashibing.proxy.example01.IUserDao&quot;).getMethod(&quot;save&quot;, new Class[0]);
            m2 = Class.forName(&quot;java.lang.Object&quot;).getMethod(&quot;toString&quot;, new Class[0]);
            m0 = Class.forName(&quot;java.lang.Object&quot;).getMethod(&quot;hashCode&quot;, new Class[0]);
            return;
        }
        catch (NoSuchMethodException noSuchMethodException) {
            throw new NoSuchMethodError(noSuchMethodException.getMessage());
        }
        catch (ClassNotFoundException classNotFoundException) {
            throw new NoClassDefFoundError(classNotFoundException.getMessage());
        }
    }
	
    public final boolean equals(Object object) {
        try {
            return (Boolean)this.h.invoke(this, m1, new Object[]{object});
        }
        catch (Error | RuntimeException throwable) {
            throw throwable;
        }
        catch (Throwable throwable) {
            throw new UndeclaredThrowableException(throwable);
        }
    }
	
    public final String toString() {
        try {
            return (String)this.h.invoke(this, m2, null);
        }
        catch (Error | RuntimeException throwable) {
            throw throwable;
        }
        catch (Throwable throwable) {
            throw new UndeclaredThrowableException(throwable);
        }
    }
	
    public final int hashCode() {
        try {
            return (Integer)this.h.invoke(this, m0, null);
        }
        catch (Error | RuntimeException throwable) {
            throw throwable;
        }
        catch (Throwable throwable) {
            throw new UndeclaredThrowableException(throwable);
        }
    }
	
    public final void save() {
        try {
            this.h.invoke(this, m3, null);
            return;
        }
        catch (Error | RuntimeException throwable) {
            throw throwable;
        }
        catch (Throwable throwable) {
            throw new UndeclaredThrowableException(throwable);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简化后的代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.sun.proxy;

import com.mashibing.proxy.example01.IUserDao;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.lang.reflect.UndeclaredThrowableException;

public final class $Proxy0
extends Proxy
implements IUserDao {
    private static Method m3;
	
    public $Proxy0(InvocationHandler invocationHandler) {
        super(invocationHandler);
    }
	
    static {
        try {
         m3 = Class.forName(&quot;com.mashibing.proxy.example01.IUserDao&quot;).getMethod(&quot;save&quot;, new Class[0]);
          return;
        }
    }
	
    public final void save() {
        try {
            this.h.invoke(this, m3, null);
            return;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>动态代理类对象 继承了 Proxy 类，并且实现了被代理的所有接口，以及equals、hashCode、toString等方法</li><li>代理类的构造函数，参数是<code>InvocationHandler</code>实例，<code>Proxy.newInstance</code>方法就是通过这个构造函数来创建代理实例的</li><li>类和所有方法都被 <code>public final</code> 修饰，所以代理类只可被使用，不可以再被继承</li><li>每个方法都有一个 Method 对象来描述，Method 对象在static静态代码块中创建，以 <code>m + 数字</code> 的格式命名</li><li>调用方法的时候通过 <code>this.h.invoke(this, m3, null));</code> <strong>实际上 h.invoke就是在调用ProxyFactory中我们重写的invoke方法</strong></li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override
public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
    System.out.println(&quot;开启事务&quot;);
	
    //执行目标对象方法
    method.invoke(target, args);
    System.out.println(&quot;提交事务&quot;);
    return null;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cglib动态代理" tabindex="-1"><a class="header-anchor" href="#cglib动态代理" aria-hidden="true">#</a> CGLIB动态代理</h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p><code>cglib (Code Generation Library ) </code>是一个第三方代码生成类库，运行时在内存中动态生成一个子类对象从而实现对目标对象功能的扩展。cglib 为没有实现接口的类提供代理，为JDK的动态代理提供了很好的补充。</p><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>最底层是字节码</li><li>ASM是操作字节码的工具</li><li>cglib基于ASM字节码工具操作字节码（即动态生成代理，对方法进行增强）</li><li>SpringAOP基于cglib进行封装，实现cglib方式的动态代理</li></ul><h3 id="实现cglib动态代理" tabindex="-1"><a class="header-anchor" href="#实现cglib动态代理" aria-hidden="true">#</a> 实现CGLIB动态代理</h3><p>使用cglib 需要引入cglib 的jar包，如果你已经有spring-core的jar包，则无需引入，因为spring中包含了cglib 。</p><ul><li>cglib 的Maven坐标</li></ul><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;dependency&gt;
    &lt;groupId&gt;cglib&lt;/groupId&gt;
    &lt;artifactId&gt;cglib&lt;/artifactId&gt;
    &lt;version&gt;3.2.5&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IUserDao.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface IUserDao {
    void save();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IUserDao.java 实现类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IUserDaoImpl</span> <span class="token keyword">implements</span> <span class="token class-name">IUserDao</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;保存用户的数据&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cglibDynamicAgent.java 代理类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> cglibDynamicAgent <span class="token keyword">implements</span> <span class="token class-name">MethodInterceptor</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> target<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token function">cglibDynamicAgent</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getLogProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//增强器类,用来创建动态代理类</span>
        <span class="token class-name">Enhancer</span> en <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Enhancer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置代理类的父类字节码对象</span>
        en<span class="token punctuation">.</span><span class="token function">setSuperclass</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置回调: 对于代理类上所有的方法的调用,都会调用CallBack,而Callback则需要实现intercept()方法进行拦截</span>
        en<span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建动态代理对象并返回</span>
        <span class="token keyword">return</span> en<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 实现回调方法
     * <span class="token keyword">@param</span> <span class="token parameter">o</span>     代理对象
     * <span class="token keyword">@param</span> <span class="token parameter">method</span>  目标对象中的方法的Method实例
     * <span class="token keyword">@param</span> <span class="token parameter">objects</span>      实际参数
     * <span class="token keyword">@param</span> <span class="token parameter">methodProxy</span>  代理对象中的方法的method实例
     * <span class="token keyword">@return</span>: java.lang.Object
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> objects<span class="token punctuation">,</span> <span class="token class-name">MethodProxy</span> methodProxy<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token class-name">Calendar</span> calendar <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SimpleDateFormat</span> formatter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>formatter<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>calendar<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; [&quot;</span> <span class="token operator">+</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;] 开始执行方法...]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> methodProxy<span class="token punctuation">.</span><span class="token function">invokeSuper</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> objects<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>formatter<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>calendar<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; [&quot;</span> <span class="token operator">+</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;] 开始执行成功...]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cglibDynamicAgentTest.java 测试类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class cglibDynamicAgentTest {
    public static void main(String[] args) {
        IUserDaoImpl iUserDaoImpl = (IUserDaoImpl)new cglibDynamicAgent(new IUserDaoImpl()).getLogProxy();
        iUserDaoImpl.save();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cglib代理流程" tabindex="-1"><a class="header-anchor" href="#cglib代理流程" aria-hidden="true">#</a> cglib代理流程</h3><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="三种代理模式实现方式的对比" tabindex="-1"><a class="header-anchor" href="#三种代理模式实现方式的对比" aria-hidden="true">#</a> 三种代理模式实现方式的对比</h3><ul><li>jdk代理和CGLIB代理<br> 使用CGLib实现动态代理，CGLib底层采用ASM字节码生成框架，使用字节码技术生成代理类，在JDK1.6之前比使用Java反射效率要高。唯一需要注意的是，CGLib不能对声明为final的类或者方法进行代理，因为CGLib原理是动态生成被代理类的子类。<br> 在JDK1.6、JDK1.7、JDK1.8逐步对JDK动态代理优化之后，在调用次数较少的情况下，JDK代理效率高于CGLib代理效率，只有当进行大量调用的时候，JDK1.6和JDK1.7比CGLib代理效率低一点，但是到JDK1.8的时候，JDK代理效率高于CGLib代理。所以如果有接口使用JDK动态代理，如果没有接口使用CGLIB代理。</li><li>动态代理和静态代理<br> 动态代理与静态代理相比较，最大的好处是接口中声明的所有方法都被转移到调用处理器一个集中的方法中处理（InvocationHandler.invoke）。这样，在接口方法数量比较多的时候，我们可以进行灵活处理，而不需要像静态代理那样每一个方法进行中转。<br> 如果接口增加一个方法，静态代理模式除了所有实现类需要实现这个方法外，所有代理类也需要实现此方法。增加了代码维护的复杂度。而动态代理不会出现该问题</li></ul><h4 id="代理模式优缺点" tabindex="-1"><a class="header-anchor" href="#代理模式优缺点" aria-hidden="true">#</a> 代理模式优缺点</h4><p><strong>优点：</strong></p><ul><li>代理模式在客户端与目标对象之间起到一个中介作用和保护目标对象的作用；</li><li>代理对象可以扩展目标对象的功能；</li><li>代理模式能将客户端与目标对象分离，在一定程度上降低了系统的耦合度；</li></ul><p><strong>缺点：</strong></p><ul><li>增加了系统的复杂度；</li></ul><h4 id="代理模式使用场景" tabindex="-1"><a class="header-anchor" href="#代理模式使用场景" aria-hidden="true">#</a> 代理模式使用场景</h4><ul><li>功能增强<br> 当需要对一个对象的访问提供一些额外操作时,可以使用代理模式</li><li>远程（Remote）代理<br> 实际上，RPC 框架也可以看作一种代理模式，GoF 的《设计模式》一书中把它称作远程代理。通过远程代理，将网络通信、数据编解码等细节隐藏起来。客户端在使用 RPC 服务的时候，就像使用本地函数一样，无需了解跟服务器交互的细节。除此之外，RPC 服务的开发者也只需要开发业务逻辑，就像开发本地使用的函数一样，不需要关注跟客户端的交互细节。</li><li>防火墙（Firewall）代理<br> 当你将浏览器配置成使用代理功能时，防火墙就将你的浏览器的请求转给互联网；当互联网返回响应时，代理服务器再把它转给你的浏览器。</li><li>保护（Protect or Access）代理<br> 控制对一个对象的访问，如果需要，可以给不同的用户提供不同级别的使用权限。</li></ul>',81),v=[u];function m(b,k){return a(),s("div",null,v)}const y=n(p,[["render",m],["__file","05_代理模式.html.vue"]]);export{y as default};
