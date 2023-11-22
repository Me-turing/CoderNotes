import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as e}from"./app-71f45f98.js";const i="/CoderNotes/assets/image-20231009141714149-493e6fd4.png",t="/CoderNotes/assets/image-20231009142718360-665e3c9b.png",l="/CoderNotes/assets/image-20231009142731265-609c767a.png",d="/CoderNotes/assets/image-20231010132954009-08a687e7.png",c="/CoderNotes/assets/image-20231010133204291-1d302005.png",r="/CoderNotes/assets/image-20231010133258978-235ac0b3.png",p={},o=e('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>适配器模式(adapter pattern )的原始定义是：将类的接口转换为客户期望的另一个接口，适配器可以让不兼容的两个类一起协同工作。</p><blockquote><p>如果去欧洲国家去旅游的话，他们的插座如下图最左边，是欧洲标准。而我们使用的插头如下图最右边的。因此我们的笔记本电脑，手机在当地不能直接充电。所以就需要一个插座转换器，转换器第1面插入当地的插座，第2面供我们充电，这样使得我们的插头在当地能使用。生活中这样的例子很多，手机充电器（将220v转换为5v的电压），读卡器等，其实就是使用到了适配器模式。</p></blockquote><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>适配器模式是用来做适配，它将不兼容的接口转换为可兼容的接口，让原本由于接口不兼容而不能一起工作的类可以一起工作。适配器模式有两种实现方式：类适配器和对象适配器。其中，类适配器使用继承关系来实现，对象适配器使用组合关系来实现。</p><p>类适配器模式的耦合度比后者高，且要求程序员了解现有组件库中的相关组件的内部结构，所以应用相对较少些。</p><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>适配器模式（Adapter）包含以下主要角色：</p><ul><li>目标（Target）接口：当前系统业务所期待的接口，它可以是抽象类或接口。</li><li>适配者（Adaptee）类：适配者即被适配的角色,它是被访问和适配的现存组件库中的组件接口。</li><li>适配器（Adapter）类：它是一个转换器，通过继承或引用适配者的对象，把适配者接口转换成目标接口，让客户按目标接口的格式访问适配者。</li></ul><h3 id="类适配器" tabindex="-1"><a class="header-anchor" href="#类适配器" aria-hidden="true">#</a> 类适配器</h3><p>简单来说就是 <strong>实现目标（Target）接口,继承适配者（Adaptee）类</strong></p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="方法适配器" tabindex="-1"><a class="header-anchor" href="#方法适配器" aria-hidden="true">#</a> 方法适配器</h3><p>简单来说就是 <strong>实现目标（Target）接口,聚合适配者（Adaptee）类</strong></p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="实际应用" tabindex="-1"><a class="header-anchor" href="#实际应用" aria-hidden="true">#</a> 实际应用</h2><p>我们模拟读取SD卡读取接口读取TF卡信息</p><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>电脑类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Computer {
    pubic String read(SDCard sdCard){
	   return sdCard.readSD();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SD类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">SDCard</span> <span class="token punctuation">{</span>
    <span class="token comment">//读取SD卡方法</span>
    <span class="token class-name">String</span> <span class="token function">readSD</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//写入SD卡功能</span>
    <span class="token keyword">void</span> <span class="token function">writeSD</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SDCardImpl</span> <span class="token keyword">implements</span> <span class="token class-name">SDCard</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">readSD</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;sd card reading data&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> msg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">writeSD</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sd card write data : &quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SD类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TFCard</span> <span class="token punctuation">{</span>
    <span class="token comment">//读取TF卡方法</span>
    <span class="token class-name">String</span> <span class="token function">readTF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//写入TF卡功能</span>
    <span class="token keyword">void</span> <span class="token function">writeTF</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TFCardImpl</span> <span class="token keyword">implements</span> <span class="token class-name">TFCard</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">readTF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;TF card reading data&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> msg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">writeTF</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;TF card write data : &quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用类适配器" tabindex="-1"><a class="header-anchor" href="#使用类适配器" aria-hidden="true">#</a> 使用类适配器</h3><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使适配器类 <strong>继承适配者 并实现目标接口</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class SDAdapterTF extends TFCardImpl implements SDCard{
    @Override
    public String readSD() {
        System.out.println(&quot;adapter read tf card &quot;);
        return readTF();
    }
    @Override
    public void writeSD(String msg) {
        System.out.println(&quot;adapter write tf card&quot;);
        writeTF(msg);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Client {
    public static void main(String[] args) {
        Computer computer = new Computer();
        SDCard sdCard = new SDCardImpl();
        System.out.println(computer.read(sdCard));
        System.out.println(&quot;========================&quot;);
        SDAdapterTF adapterTF = new SDAdapterTF();
        System.out.println(computer.read(adapterTF));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用对象适配器" tabindex="-1"><a class="header-anchor" href="#使用对象适配器" aria-hidden="true">#</a> 使用对象适配器</h3><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使适配器类 <strong>实现目标接口,并在初始化时传入适配器接口</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class SDAdapterTF implements SDCard{
    private TFCard tfCard;
    public SDAdapterTF(TFCard tfCard) {
        this.tfCard = tfCard;
    }
    @Override
    public String readSD() {
        System.out.println(&quot;adapter read tf card &quot;);
        return tfCard.readTF();
    }
    @Override
    public void writeSD(String msg) {
        System.out.println(&quot;adapter write tf card&quot;);
        tfCard.writeTF(msg);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Client {
    public static void main(String[] args) {
        Computer computer = new Computer();
        SDCard sdCard = new SDCardImpl();
        System.out.println(computer.read(sdCard));
        System.out.println(&quot;========================&quot;);
        TFCard tfCard = new TFCardImpl();
        SDAdapterTF adapterTF = new SDAdapterTF(tfCard);
        System.out.println(computer.read(adapterTF));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ol><li><strong>将目标类和适配者类解耦</strong>,通过引入一个适配器类来重用现有的适配者类,无序修改原有结构</li><li><strong>增加了类的透明性和复用性</strong>,将具体业务实现过程封装在适配者类中,对于客户端类而言是透明的,而且提高了适配者的复用性,同一个适配者类可以在多个不同的系统中复用.</li><li><strong>灵活性和扩展性都非常好</strong>,通过使用配置文件可以很方便的更换适配器,也可以在不修改原有代码的基础上增加新的适配器类,符合开闭原则.</li></ol><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>类适配器的缺点: <ul><li>对于Java等不支持多重继承的语言,一次最多只能适配一个适配者类,不能同时适配多个适配者</li><li>适配者类不能为最终类</li></ul></li><li>对象适配器的缺点 <ul><li>与类适配器模式相比较,在该模式下要在适配器中置换适配者类的某些方法比较麻烦.</li></ul></li></ul><h3 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h3><ul><li>统一多个类的接口设计时</li></ul><blockquote><p>某个功能的实现依赖多个外部系统（或者说类）。通过适配器模式，将它们的接口适配为统一的接口定义</p></blockquote><ul><li>需要依赖外部系统时</li></ul><blockquote><p>当我们把项目中依赖的一个外部系统替换为另一个外部系统的时候，利用适配器模式，可以减少对代码的改动</p></blockquote><ul><li>原有接口无法修改时或者原有接口功能太老旧但又需要兼容</li></ul><blockquote><p>JDK1.0 Enumeration 到 Iterator 的替换,适用适配器模式保留 Enumeration 类，并将其实现替换为直接调用 Itertor.</p></blockquote><ul><li>适配不同数据格式时</li></ul><blockquote><p>Slf4j 日志框架,定义打印日志的统一接口,提供针对不同日志框架的适配器</p></blockquote>`,50),u=[o];function v(m,b){return a(),s("div",null,u)}const h=n(p,[["render",v],["__file","08_适配器模式.html.vue"]]);export{h as default};
