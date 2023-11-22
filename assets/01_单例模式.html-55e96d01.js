import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as t,d as c,e as n,b as d,w as o,f as s}from"./app-71f45f98.js";const r="/CoderNotes/assets/image-20230811152959781-89369d07.png",p="/CoderNotes/assets/image-20230811162133093-5ac5b175.png",u="/CoderNotes/assets/image-20230811165115571-cd02fbe5.png",v="/CoderNotes/assets/image-20230811165125514-3468c6a6.png",m="/CoderNotes/assets/image-20230811163646501-4bbedbd0.png",b={},g=s('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><strong>定义</strong> : 单例模式（Singleton Pattern）是 Java 中最简单的设计模式之一，此模式保证某个类在运行期间，只有一个实例对外提供服务，而这个类被称为单例类。</p><p><strong>使用单例模式要做的两件事</strong>:</p><ol><li>保证一个类只有一个实例</li><li>为该实例提供一个全局访问节点</li></ol><p><strong>单例模式的结构</strong>:<br><img src="'+r+`" alt="" loading="lazy"></p><h2 id="实现单例模型的方式" tabindex="-1"><a class="header-anchor" href="#实现单例模型的方式" aria-hidden="true">#</a> 实现单例模型的方式</h2><h3 id="饿汉式" tabindex="-1"><a class="header-anchor" href="#饿汉式" aria-hidden="true">#</a> 饿汉式</h3><p><strong>在类加载期间初始化静态实例</strong> ,保证 instance 实例的创建是线程安全的 ( 实例在类加载时实例化，有JVM保证线程安全).</p><p>特点: 不支持延迟加载实例(懒加载) , 此中方式类加载比较慢，但是获取实例对象比较快<br> 问题: 该对象足够大的话，而一直没有使用就会造成内存的浪费。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Singleton_01 {
    //1. 私有构造方法
    private Singleton_01(){}
    //2. 在本类中创建私有静态的全局对象
    private static Singleton_01 instance = new Singleton_01();
    //3. 提供一个全局访问点,供外部获取单例对象
    public static  Singleton_01 getInstance(){
        return instance;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="懒汉式" tabindex="-1"><a class="header-anchor" href="#懒汉式" aria-hidden="true">#</a> 懒汉式</h3><h4 id="方式一-线程不安全" tabindex="-1"><a class="header-anchor" href="#方式一-线程不安全" aria-hidden="true">#</a> 方式一: 线程不安全</h4><p><strong>在使用时初始化实列</strong> , 最大程度不去浪费内存空间.</p><p>特点: 时间换空间,启动快,按需使用节省空间<br> 缺点: 但是如果是多线程情况,会出现线程安全问题.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton_02</span> <span class="token punctuation">{</span>
    <span class="token comment">//1. 私有构造方法</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton_02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">//2. 在本类中创建私有静态的全局对象</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton_02</span> instance<span class="token punctuation">;</span>
    <span class="token comment">//3. 通过判断对象是否被初始化,来选择是否创建对象</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span>  <span class="token class-name">Singleton_02</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton_02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设在单例类被实例化之前，有两个线程同时在获取单例对象:</p><ul><li>线程A在执行完if (instance == null) 后，线程调度机制将 CPU 资源分配给线程B</li><li>此时线程B在执行 if (instance == null)时也发现单例类还没有被实例化</li></ul><p>这样就会导致单例类被实例化两次。为了防止这种情况发生，需要对 getInstance() 方法同步处理</p><h4 id="方式二-线程安全" tabindex="-1"><a class="header-anchor" href="#方式二-线程安全" aria-hidden="true">#</a> 方式二: 线程安全</h4><p>原理: 在 方式一 的基础上使用同步锁 <code>synchronized</code>锁住 创建单例的方法 ，防止多个线程同时调用，从而避免造成单例被多次创建</p><ol><li>即，<code>getInstance（）</code>方法块只能运行在1个线程中</li><li>若该段代码已在1个线程中运行，另外1个线程试图运行该块代码，则 <strong>会被阻塞而一直等待</strong></li><li>而在这个线程安全的方法里我们实现了单例的创建，保证了多线程模式下 单例对象的唯一性</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton_03</span> <span class="token punctuation">{</span>
    <span class="token comment">//1. 私有构造方法</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton_03</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">//2. 在本类中创建私有静态的全局对象</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton_03</span> instance<span class="token punctuation">;</span>
    <span class="token comment">//3. 通过判断对象是否被初始化,来选择是否创建对象</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token class-name">Singleton_03</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton_03</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们使用了方法锁,让该方法只能在一个线程中进行执行,所以并发度是1。如果这个单例类偶尔会被用到，那这种实现方式还可以接受。但是，如果频繁地用到，那频繁加锁、释放锁及并发度低等问题，<strong>会导致性能瓶颈</strong>，这种实现方式就不可取了。</p><h4 id="方式三-双重校验" tabindex="-1"><a class="header-anchor" href="#方式三-双重校验" aria-hidden="true">#</a> 方式三: 双重校验</h4><p>在方式二的基础上,我们继续优化锁的粒度.使用<strong>代码块锁</strong>只针对对象的创建进行限制</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Singleton_04 {
    //使用 volatile保证变量的可见性
    private volatile static Singleton_04 instance = null;
    private Singleton_04(){}
    //对外提供静态方法获取对象
    public static Singleton_04 getInstance(){
        //第一次判断,如果instance不为null,不进入抢锁阶段,直接返回实例
        if(instance == null){
            synchronized (Singleton_04.class){
                //抢到锁之后再次进行判断是否为null
                if(instance == null){
                    instance = new Singleton_04();
                }
            }
        }
        return instance;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="为什么要使用volatile关键字和双重校验" tabindex="-1"><a class="header-anchor" href="#为什么要使用volatile关键字和双重校验" aria-hidden="true">#</a> 为什么要使用volatile关键字和双重校验</h5>`,27),k=s('<p>如果发生了指令重排 : 例如 1-3-2，那么在第 3 步执行完以后，singleton 就不是 null 了，可是这时第 2 步并没有执行，singleton 对象未完成初始化，它的属性的值可能不是我们所预期的值。假设此时线程 2 进入 getInstance 方法，由于 singleton 已经不是 null 了，所以会通过第一重检查并直接返回，但其实这时的 singleton 并没有完成初始化，所以使用这个实例的时候会报错.</p><p>详细流程如下图所示：<br><img src="'+p+`" alt="" loading="lazy"></p><p>线程 1 首先执行新建实例的第一步，也就是分配单例对象的内存空间，由于线程 1 被重排序，所以执行了新建实例的第三步，也就是把 singleton 指向之前分配出来的内存地址，在这第三步执行之后，singleton 对象便不再是 null。</p><p>这时线程 2 进入 getInstance 方法，判断 singleton 对象不是 null，紧接着线程 2 就返回 singleton 对象并使用，由于没有初始化，所以报错了。最后，线程 1 “姗姗来迟”，才开始执行新建实例的第二步——初始化对象，可是这时的初始化已经晚了，因为前面已经报错了。</p><p>使用了 volatile 之后，相当于是表明了该字段的更新可能是在其他线程中发生的，因此应确保在读取另一个线程写入的值时，可以顺利执行接下来所需的操作。在 JDK 5 以及后续版本所使用的 JMM 中，在使用了 volatile 后，会一定程度禁止相关语句的重排序，从而避免了上述由于重排序所导致的读取到不完整对象的问题的发生。</p><h3 id="静态内部类" tabindex="-1"><a class="header-anchor" href="#静态内部类" aria-hidden="true">#</a> 静态内部类</h3><p>原理 : 根据 <strong>静态内部类</strong> 的特性(外部类的加载不影响内部类)，同时解决了按需加载、线程安全的问题，同时实现简洁</p><ol><li>在静态内部类里创建单例，在装载该内部类时才会去创建单例</li><li>线程安全：类是由 <code>JVM</code>加载，而<code>JVM</code>只会加载1遍，保证只有1个单例</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Singleton_05 {
    private static class SingletonHandler{
        private static Singleton_05 instance = new Singleton_05();
    }
    private Singleton_05(){}
    public static Singleton_05 getInstance(){
        return SingletonHandler.instance;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h3><p>枚举单例方式是<code>&lt;&lt;Effective Java&gt;&gt;</code>作者推荐的使用方式,这种方式</p><p>在使用枚举时，构造方法会被自动调用，利用这一特性也可以实现单例；<strong>默认枚举实例的创建是线程安全的，即使反序列化也不会生成新的实例，任何情况下都是一个单例(暴力反射对枚举方式无效)。</strong></p><p>特点: 满足单例模式所需的 <strong>创建单例、线程安全、实现简洁的需求</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public enum Singleton_06{
    INSTANCE;
    public static Singleton_06 getInstance(){
        return INSTANCE;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="为什么枚举可以阻止反射的破坏" tabindex="-1"><a class="header-anchor" href="#为什么枚举可以阻止反射的破坏" aria-hidden="true">#</a> 为什么枚举可以阻止反射的破坏?</h4><ul><li><p>首先枚举类中是没有空参构造方法的,只有一个带两个参数的构造方法.<br><img src="`+u+'" alt="" loading="lazy"></p></li><li><p>真正原因是: 反射方法中不予许使用反射创建枚举对象<br><img src="'+v+`" alt="" loading="lazy"></p></li></ul><h4 id="为什么枚举类可以阻止序列化的破坏" tabindex="-1"><a class="header-anchor" href="#为什么枚举类可以阻止序列化的破坏" aria-hidden="true">#</a> 为什么枚举类可以阻止序列化的破坏</h4><p>Java规范字规定，<strong>每个枚举类型及其定义的枚举变量在JVM中都是唯一的</strong>，因此在枚举类型的序列化和反序列化上，Java做了特殊的规定。</p><p>在序列化的时候Java仅仅是将枚举对象的name属性输到结果中，反序列化的时候则是通过java.lang.Enum的valueOf()方法来根据名字查找枚举对象。</p><p>比如说，序列化的时候只将<code>INSTANCE</code>这个名称输出，反序列化的时候再通过这个名称，查找对应的枚举类型，因此反序列化后的实例也会和之前被序列化的对象实例相同。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public enum Singleton_06{
    INSTANCE;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反射和序列化的影响" tabindex="-1"><a class="header-anchor" href="#反射和序列化的影响" aria-hidden="true">#</a> 反射和序列化的影响</h2><h4 id="反射对单例的影响" tabindex="-1"><a class="header-anchor" href="#反射对单例的影响" aria-hidden="true">#</a> 反射对单例的影响</h4><p>反射的概念: JAVA反射机制是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意方法和属性；这种动态获取信息以及动态调用对象方法的功能称为java语言的反射机制。</p><p>反射技术过于强大，它可以通过<code>setAccessible()</code>来修改构造器，字段，方法的可见性。单例模式的构造方法是私有的，如果将其可见性设为<code>public</code>，那么将无法控制对象的创建。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Test_Reflect {
    public static void main(String[] args) {
        try {
            //反射中，欲获取一个类或者调用某个类的方法，首先要获取到该类的Class 对象。
            Class&lt;Singleton_05&gt; clazz = Singleton_05.class;
            //getDeclaredXxx: 不受权限控制的获取类的成员.
            Constructor c = clazz.getDeclaredConstructor(null);
            //设置为true,就可以对类中的私有成员进行操作了
            c.setAccessible(true);
            Object instance1 = c.newInstance();
            Object instance2 = c.newInstance();
            System.out.println(instance1 == instance2);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如图所示,反射仍然可以对于非枚举实现单例的方式进行干扰,所以我们可以在<strong>私有构造器中添加检查异常</strong>:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Singleton_05 {
    private static class SingletonHandler{
        private static Singleton_05 instance = new Singleton_05();
    }
    private Singleton_05(){
        if(SingletonHandler.instance != null){
            throw new RuntimeException(&quot;不允许非法访问!&quot;);
        }
    }
    public static Singleton_05 getInstance(){
        return SingletonHandler.instance;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果通过反射调用当前类的私有构造器,则会抛出异常阻止操作.但是着这种方式使代码简洁性遭到破坏,设计不够优雅.</p><h4 id="序列化对单例的影响" tabindex="-1"><a class="header-anchor" href="#序列化对单例的影响" aria-hidden="true">#</a> 序列化对单例的影响</h4><p>在下列的代码中中,我们尝试对单例对象进行序列化和反序列化的操作:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Singleton implements Serializable {
    private volatile static Singleton singleton;
    private Singleton() {  }
    public static Singleton getInstance() {
        if (singleton == null) {
            synchronized (Singleton.class) {
                if (singleton == null) {
                    singleton = new Singleton();
                }
            }
        }
        return singleton;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Test_Serializable {
    @Test
    public void test() throws Exception{
        //序列化对象输出流
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(&quot;tempFile.obj&quot;));
        oos.writeObject(Singleton.getInstance());
        //序列化对象输入流
        File file = new File(&quot;tempFile.obj&quot;);
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream(file));
        Singleton Singleton = (Singleton) ois.readObject();
        System.out.println(Singleton);
        System.out.println(Singleton.getInstance());
        //判断是否是同一个对象
        System.out.println(Singleton.getInstance() == Singleton);//false
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结构为false, 说明：通过对Singleton的序列化与反序列化得到的对象是一个新的对象，这就<code>破坏了Singleton的单例性</code>。</p><blockquote><p>解决方案: <strong>Singleton中定义readResolve方法，并在该方法中指定要返回的对象的生成策略，就可以防止单例被破坏。</strong></p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Singleton implements Serializable {
    private volatile static Singleton singleton;
    private Singleton() {  }
    public static Singleton getInstance() {
        if (singleton == null) {
            synchronized (Singleton.class) {
                if (singleton == null) {
                    singleton = new Singleton();
                }
            }
        }
        return singleton;
    }
    /**
	* 解决方案:只要在Singleton类中定义readResolve就可以解决该问题
	* 程序会判断是否有readResolve方法,如果存在就在执行该方法,如果不存在--就创建一个对象
	*/
    private Object readResolve() {
		return singleton;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>为什么要使用readResolve返回当前对象?</strong></p><p>问题是出在ObjectInputputStream 的readObject 方法上, 我们来看一下ObjectInputStream的readObject的调用栈:</p><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>ObjectInputStream中readObject方法的代码片段:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>try {
    Object obj = readObject0(false); //最终会返回一个object对象,其实就是序列化对象
    return obj;
} finally {
    passHandle = outerHandle;
    if (closed &amp;&amp; depth == 0) {
        clear();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ObjectInputStream中readObject0方法的代码片段:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">Object</span> <span class="token function">readObject0</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> unshared<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
 <span class="token keyword">case</span> <span class="token constant">TC_OBJECT</span><span class="token operator">:</span> <span class="token comment">//匹配如果是对象</span>
        <span class="token keyword">return</span> <span class="token function">checkResolve</span><span class="token punctuation">(</span><span class="token function">readOrdinaryObject</span><span class="token punctuation">(</span>unshared<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>readOrdinaryObject方法的代码片段:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">Object</span> <span class="token function">readOrdinaryObject</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> unshared<span class="token punctuation">)</span>
        <span class="token keyword">throws</span> <span class="token class-name">IOException</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//此处省略部分代码</span>
        <span class="token class-name">Object</span> obj<span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//通过反射创建的这个obj对象，就是本方法要返回的对象，也可以暂时理解为是ObjectInputStream的readObject返回的对象。</span>
            <span class="token comment">//isInstantiable：如果一个serializable的类可以在运行时被实例化，那么该方法就返回true</span>
            <span class="token comment">//desc.newInstance：该方法通过反射的方式调用无参构造方法新建一个对象。</span>
            obj <span class="token operator">=</span> desc<span class="token punctuation">.</span><span class="token function">isInstantiable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> desc<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span><span class="token punctuation">)</span> <span class="token keyword">new</span> <span class="token class-name">InvalidClassException</span><span class="token punctuation">(</span>
                desc<span class="token punctuation">.</span><span class="token function">forClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token string">&quot;unable to create instance&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">initCause</span><span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现 : 序列化会通过反射调用无参数的构造方法创建一个新的对象,所以会对当前的单例模式进行破坏</p><p>但是在: java.io.ObjectStreamClass#invokeReadResolve 中我们看到:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>if (obj != null &amp;&amp;
            handles.lookupException(passHandle) == null &amp;&amp;
            desc.hasReadResolveMethod())
        {
            Object rep = desc.invokeReadResolve(obj);
            if (unshared &amp;&amp; rep.getClass().isArray()) {
                rep = cloneArray(rep);
            }
            if (rep != obj) {
                handles.setObject(passHandle, obj = rep);
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>hasReadResolveMethod</code>:如果实现了serializable 接口的类中包含readResolve则返回true<br><code>invokeReadResolve</code>:通过反射的方式调用要被反序列化的类的readResolve方法。</p><p>所以我们只需要在<strong>Singleton中定义readResolve方法，并在该方法中指定要返回的对象的生成策略，就可以防止单例被破坏。</strong></p><h2 id="单例模式总结" tabindex="-1"><a class="header-anchor" href="#单例模式总结" aria-hidden="true">#</a> 单例模式总结</h2><p><strong>1 ) 单例的定义</strong><br> 单例设计模式保证某个类在运行期间，只有一个实例对外提供服务，而这个类被称为单例类。</p><p><strong>2 ) 单例的实现</strong></p><p><strong>饿汉式</strong></p><ul><li>饿汉式的实现方式，在类加载的期间，就已经将 instance 静态实例初始化好了，所以，instance 实例的创建是线程安全的。不过，这样的实现方式不支持延迟加载实例。</li></ul><p><strong>懒汉式</strong></p><ul><li>相对于饿汉式的优势是支持延迟加载。这种实现方式会导致频繁加锁、释放锁，以及并发度低等问题，频繁的调用会产生性能瓶颈。</li></ul><p><strong>双重检测</strong></p><ul><li>双重检测实现方式既支持延迟加载、又支持高并发的单例实现方式。只要 instance 被创建之后，再调用 getInstance() 函数都不会进入到加锁逻辑中。所以，这种实现方式解决了懒汉式并发度低的问题。</li></ul><p><strong>静态内部类</strong></p><ul><li>利用 Java 的静态内部类来实现单例。这种实现方式，既支持延迟加载，也支持高并发，实现起来也比双重检测简单。</li></ul><p><strong>枚举方式</strong></p><ul><li>最简单的实现方式，基于枚举类型的单例实现。这种实现方式通过 Java 枚举类型本身的特性，保证了实例创建的线程安全性和实例的唯一性(同时阻止了反射和序列化对单例的破坏)。</li></ul><h2 id="小知识" tabindex="-1"><a class="header-anchor" href="#小知识" aria-hidden="true">#</a> 小知识</h2><h3 id="初始化对象的步骤" tabindex="-1"><a class="header-anchor" href="#初始化对象的步骤" aria-hidden="true">#</a> 初始化对象的步骤</h3><ol><li>第一步是给对象分配内存空间；</li><li>第二步开始调用构造函数等，来初始化对象；</li><li>第三步，将对象指向分配的内存空间（执行完这步声明的对象就不是null 了）</li></ol><p>这里需要留意一下 1-2-3 的顺序，因为存在指令重排序的优化，也就是说第 2 步和第 3 步的顺序是不能保证的，最终的执行顺序，可能是 1-2-3，也有可能是 1-3-2。</p>`,67);function h(S,_){const a=i("RouterLink");return l(),t("div",null,[g,c("p",null,[n("在java内存模型中，volatile 关键字作用可以是保证可见性或者禁止指令重排。这里是因为 singleton = new Singleton() ，它并非是一个原子操作. 详见: "),d(a,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/06_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/02_%E4%BA%8C%E5%8D%81%E4%B8%89%E7%A7%8D%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/01_%E5%88%9B%E5%BB%BA%E5%9E%8B%E6%A8%A1%E5%BC%8F/01_%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html#%E5%88%9D%E5%A7%8B%E5%8C%96%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%AD%A5%E9%AA%A4"},{default:o(()=>[n("初始化对象的步骤")]),_:1})]),k])}const w=e(b,[["render",h],["__file","01_单例模式.html.vue"]]);export{w as default};
