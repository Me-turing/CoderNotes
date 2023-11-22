import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-71f45f98.js";const e={},p=t(`<h2 id="什么是包装类" tabindex="-1"><a class="header-anchor" href="#什么是包装类" aria-hidden="true">#</a> 什么是包装类</h2><p>在之前的学习中，我们使用的时基本数据类型来存储变量。而包装类是在基本数据类型的基础上，加上属性、特有方法、构造器进行封装。</p><p>它拥有更加灵活的操作方式以及API，在后面集合的学习中，我们需要操作的都是引用类型的数据。</p><p>同时，Java语言是面向对象的语言。与生俱来就更加擅长操作各种类。</p><h2 id="有哪些包装类" tabindex="-1"><a class="header-anchor" href="#有哪些包装类" aria-hidden="true">#</a> 有哪些包装类</h2><table><thead><tr><th>基本数据类型</th><th>对应包装类</th><th>继承关系</th></tr></thead><tbody><tr><td>byte</td><td>Byte</td><td>Byte → Number → Object</td></tr><tr><td>short</td><td>Short</td><td>Short → Number → Object</td></tr><tr><td>int</td><td>Integer</td><td>Integer → Number → Object</td></tr><tr><td>long</td><td>Long</td><td>Long → Number → Object</td></tr><tr><td>float</td><td>Float</td><td>Float → Number → Object</td></tr><tr><td>double</td><td>Double</td><td>Double → Number → Object</td></tr><tr><td>char</td><td>Character</td><td>Character → Object</td></tr><tr><td>boolean</td><td>Boolean</td><td>Boolean → Object</td></tr></tbody></table><h2 id="装箱与拆箱" tabindex="-1"><a class="header-anchor" href="#装箱与拆箱" aria-hidden="true">#</a> 装箱与拆箱</h2><p>自动装箱 自动拆箱 是从<code>JDK1.5</code>以后新出的特性<br> 自动装箱就是将基本数据类型自动转换为封装类型，自动拆箱是将封装类型自动转换为基本数据类型</p><h3 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//自动装箱：int---&gt;Integer</span>
<span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//自动拆箱：Integer---&gt;int</span>
<span class="token class-name">Integer</span> i2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num <span class="token operator">=</span> i2<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="底层原理" tabindex="-1"><a class="header-anchor" href="#底层原理" aria-hidden="true">#</a> 底层原理</h3><p>我们将上面的代码编译后，查看它的Class文件反编译代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//自动装箱：int---&gt;Integer</span>
<span class="token comment">//Integer i = 12;</span>
<span class="token comment">//System.out.println(i);</span>
<span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueof</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//自动拆箱：Integer---&gt;int</span>
<span class="token comment">//Integer i2 = new Integer(12);</span>
<span class="token comment">//int num = i2;</span>
<span class="token comment">//System.out.println(num);</span>
<span class="token class-name">Integer</span> i2 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueof</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num <span class="token operator">=</span> i2<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num <span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>我们看到他调用了<code>Integer</code>内置函数<code>valueof() </code>与 <code>intValue()</code><ul><li>自动装箱，相当于Java编译器替我们执行了 <code>Integer.valueOf(XXX);</code></li><li>自动拆箱，相当于Java编译器替我们执行了<code>Integer.intValue(XXX);</code></li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 返回一个表示指定int值的Integer实例。如果不需要新的Integer实例，则通常应优先使用此方法而不是构造函数Integer(int) ，
     * 因为此方法可能会通过缓存频繁请求的值来显着提高空间和时间性能。此方法将始终缓存 -128 到 127（含）范围内的值，
     * 并且可能缓存此范围之外的其他值。
     *
     * 参数：i - 一个int值。
     * 返回：表示i的Integer实例。
     * 版本：1.5
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>high<span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 将此Integer的值作为int返回
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="详解integer" tabindex="-1"><a class="header-anchor" href="#详解integer" aria-hidden="true">#</a> 详解Integer</h2><p>所属的包：<code>java.lang.Integer</code><br> 继承关系：<code>java.lang.Object → java.lang.Nubmer → java.lang.Integer</code><br> 实现接口：<code>Serializable Comparable&lt;Integer&gt;</code><br> 继承？ <code>被final修饰，不可以有子类</code><br> 出现版本：<code>JDK1.0</code><br> 属性： <code>Integer.MAX_VALUE → 最大取值</code> <code>Integer.MIN_VALUE → 最小取值</code> <br> 特殊情况：<code>Integer.MAX_VALUE+1 = Integer.MIN_VALUE</code> <code>Integer.MIN_VALUE-1 = Integer.MAX_VALUE</code> 详细原理见数据结构TODO<br> 构造器：<code>Integer没有空构造器</code> <strong>可使用有参构造传入int或String</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Integer i1 = new Integer(12);</span>

<span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**   String s   传入字符串
   *    throws NumberFormatException  当字符串无法转换成Int时，抛出异常
   *    parseInt(s,10)   调用当前类中的parseInt方法，转换为10进制int
   */</span>
<span class="token keyword">public</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NumberFormatException</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特殊缓存：<code>-128~127</code> <code> IntegerCache</code></p><p>在Integer中存在一个<code>IntegerCache</code>缓存数组，如果取值在 -128 \\ ~127 则直接从缓存中取值，如果在缓存外，则会重新创建对应的对象初始化</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 如果传入的数字≥IntegerCache.low【-128】 且 ≤ IntegerCache.high【127】
     * 则返回 IntegerCache.cache中指定的值
     * 否则 创建一个Integer对象并返回
     **/</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>high<span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 缓存以支持 JLS 要求的 -128 和 127（含）之间的值的自动装箱的对象标识语义。
     * 缓存在第一次使用时被初始化。缓存的大小可以由-XX:AutoBoxCacheMax=<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>size</span><span class="token punctuation">&gt;</span></span>选项控制。
     * 在VM初始化时，可以设置java.lang.Integer.IntegerCache.high属性并保存在sun.misc.VM类的私有系统属性中。
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">IntegerCache</span> <span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">;</span>
        <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> high<span class="token punctuation">;</span>
        <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Integer</span> cache<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">static</span> <span class="token punctuation">{</span>
            <span class="token comment">// high value may be configured by property</span>
            <span class="token keyword">int</span> h <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> integerCacheHighPropValue <span class="token operator">=</span>
                sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span><span class="token constant">VM</span><span class="token punctuation">.</span><span class="token function">getSavedProperty</span><span class="token punctuation">(</span><span class="token string">&quot;java.lang.Integer.IntegerCache.high&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>integerCacheHighPropValue <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>integerCacheHighPropValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    i <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">127</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">// Maximum array size is Integer.MAX_VALUE</span>
                    h <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token operator">-</span>low<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span> <span class="token class-name">NumberFormatException</span> nfe<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// If the property cannot be parsed into an int, ignore it.</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            high <span class="token operator">=</span> h<span class="token punctuation">;</span>
            cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">(</span>high <span class="token operator">-</span> low<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> j <span class="token operator">=</span> low<span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> cache<span class="token punctuation">.</span>length<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span>
                cache<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// range [-128, 127] must be interned (JLS7 5.1.7)</span>
            <span class="token keyword">assert</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>high <span class="token operator">&gt;=</span> <span class="token number">127</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">private</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用方法：</p><table><thead><tr><th>API</th><th>说明</th><th>返回结果</th></tr></thead><tbody><tr><td><code>Integer1.compareTo(Integer2)</code></td><td>对于两个Integer类型数值进行比较</td><td>小于：<code>return -1</code> 等于：<code>return 0</code> 大于：<code>return 1</code></td></tr><tr><td><code>Integer1.equals(Integer2)</code></td><td>比较两个Integer的值</td><td>等于：<code>true</code> 不等于：<code>false</code></td></tr><tr><td><code>Integer1.intValue()</code></td><td>Integer转int</td><td><code>int</code></td></tr><tr><td><code>Integer1.parseInt(String)</code></td><td>String转int</td><td><code>int</code></td></tr><tr><td><code>Integer1.toString()</code></td><td>Integer转String</td><td><code>String</code></td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test04</span> <span class="token punctuation">{</span>
    <span class="token comment">//这是一个main方法，是程序的入口：</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//compareTo：只返回三个值：要么是0,-1,1</span>
        <span class="token class-name">Integer</span> i1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> i2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i1<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>i2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// return (x &lt; y) ? -1 : ((x == y) ? 0 : 1);</span>
        
        <span class="token comment">//equals:Integer对Object中的equals方法进行了重写，比较的是底层封装的那个value的值。</span>
        <span class="token comment">//Integer对象是通过new关键字创建的对象：</span>
        <span class="token class-name">Integer</span> i3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> i4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i3 <span class="token operator">==</span> i4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false 因为==比较的是两个对象的地址</span>
        <span class="token keyword">boolean</span> flag <span class="token operator">=</span> i3<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>i4<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//Integer对象通过自动装箱来完成：</span>
        <span class="token class-name">Integer</span> i5 <span class="token operator">=</span> <span class="token number">130</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> i6 <span class="token operator">=</span> <span class="token number">130</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i5<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>i6<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i5 <span class="token operator">==</span> i6<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">/*
        如果自动装箱值在-128~127之间，那么比较的就是具体的数值
        否在，比较的就是对象的地址
         */</span>
        <span class="token comment">//intValue() :作用将Integer---&gt;int</span>
        <span class="token class-name">Integer</span> i7 <span class="token operator">=</span> <span class="token number">130</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> i7<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//parseInt(String s) :String---&gt;int:</span>
        <span class="token keyword">int</span> i8 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i8<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//toString:Integer---&gt;String</span>
        <span class="token class-name">Integer</span> i10 <span class="token operator">=</span> <span class="token number">130</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i10<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","包装类.html.vue"]]);export{d as default};
