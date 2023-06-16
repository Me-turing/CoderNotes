<template><div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<p>在java中，类的对象是有限个，确定的。这个类我们可以定义为枚举类。</p>
<h3 id="枚举的使用" tabindex="-1"><a class="header-anchor" href="#枚举的使用" aria-hidden="true">#</a> 枚举的使用</h3>
<h4 id="jdk1-5之前" tabindex="-1"><a class="header-anchor" href="#jdk1-5之前" aria-hidden="true">#</a> JDK1.5之前</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Season</span> <span class="token punctuation">{</span>
    <span class="token comment">//属性：</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonName <span class="token punctuation">;</span><span class="token comment">//季节名字</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonDesc <span class="token punctuation">;</span><span class="token comment">//季节描述</span>
    <span class="token comment">//利用构造器对属性进行赋值操作：</span>
    <span class="token comment">//构造器私有化，外界不能调用这个构造器，只能Season内部自己调用</span>
    <span class="token keyword">private</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token class-name">String</span> seasonName<span class="token punctuation">,</span><span class="token class-name">String</span> seasonDesc<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seasonName <span class="token operator">=</span> seasonName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seasonDesc <span class="token operator">=</span> seasonDesc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//提供枚举类的有限的  确定的对象：</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">SPRING</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">"春天"</span><span class="token punctuation">,</span><span class="token string">"春暖花开"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">SUMMER</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">"夏天"</span><span class="token punctuation">,</span><span class="token string">"烈日炎炎"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">AUTUMN</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">"秋天"</span><span class="token punctuation">,</span><span class="token string">"硕果累累"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">WINTER</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">"冬天"</span><span class="token punctuation">,</span><span class="token string">"冰天雪地"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//额外因素：</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> seasonName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> seasonDesc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//toString();</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Season{"</span> <span class="token operator">+</span>
                <span class="token string">"seasonName='"</span> <span class="token operator">+</span> seasonName <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", seasonDesc='"</span> <span class="token operator">+</span> seasonDesc <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token char">'}'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestSeason</span> <span class="token punctuation">{</span>
    <span class="token comment">//这是一个main方法，是程序的入口：</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Season</span> summer <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">SUMMER</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>summer<span class="token comment">/*.toString()*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>summer<span class="token punctuation">.</span><span class="token function">getSeasonName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jdk1-5之后" tabindex="-1"><a class="header-anchor" href="#jdk1-5之后" aria-hidden="true">#</a> JDK1.5之后</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Season</span> <span class="token punctuation">{</span>
    <span class="token comment">//提供枚举类的有限的  确定的对象：--->enum枚举类要求对象（常量）必须放在最开始位置</span>
    <span class="token comment">//多个对象之间用，进行连接，最后一个对象后面用;结束</span>
    <span class="token function">SPRING</span><span class="token punctuation">(</span><span class="token string">"春天"</span><span class="token punctuation">,</span><span class="token string">"春暖花开"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">SUMMER</span><span class="token punctuation">(</span><span class="token string">"夏天"</span><span class="token punctuation">,</span><span class="token string">"烈日炎炎"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">AUTUMN</span><span class="token punctuation">(</span><span class="token string">"秋天"</span><span class="token punctuation">,</span><span class="token string">"硕果累累"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">WINTER</span><span class="token punctuation">(</span><span class="token string">"冬天"</span><span class="token punctuation">,</span><span class="token string">"冰天雪地"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//属性：</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonName <span class="token punctuation">;</span><span class="token comment">//季节名字</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonDesc <span class="token punctuation">;</span><span class="token comment">//季节描述</span>
    <span class="token comment">//利用构造器对属性进行赋值操作：</span>
    <span class="token comment">//构造器私有化，外界不能调用这个构造器，只能Season内部自己调用</span>
    <span class="token keyword">private</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token class-name">String</span> seasonName<span class="token punctuation">,</span> <span class="token class-name">String</span> seasonDesc<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seasonName <span class="token operator">=</span> seasonName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seasonDesc <span class="token operator">=</span> seasonDesc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//额外因素：</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> seasonName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> seasonDesc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//toString();</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Season{"</span> <span class="token operator">+</span>
                <span class="token string">"seasonName='"</span> <span class="token operator">+</span> seasonName <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", seasonDesc='"</span> <span class="token operator">+</span> seasonDesc <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token char">'}'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestSeason</span> <span class="token punctuation">{</span>
    <span class="token comment">//这是一个main方法，是程序的入口：</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Season</span> winter <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">WINTER</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>winter<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//enum关键字对应的枚举类的上层父类是 ：java.lang.Enum</span>
        <span class="token comment">//但是我们自定义的枚举类的上层父类：Object</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getSuperclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//java.lang.Enum</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在源码中经常看到别人定义的枚举类形态：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Season</span> <span class="token punctuation">{</span>
    <span class="token constant">SPRING</span><span class="token punctuation">,</span>
    <span class="token constant">SUMMER</span><span class="token punctuation">,</span>
    <span class="token constant">AUTUMN</span><span class="token punctuation">,</span>
    <span class="token constant">WINTER</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么这么简单：因为这个枚举类底层没有属性，属性，构造器，toString，get方法都删掉不写了，然后案例来说应该<br>
写为：SPRING()   现在连（）可以省略 就变成  SPRING<br>
看到的形态就剩：常量名（对象名）</p>
<h3 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestSeason</span> <span class="token punctuation">{</span>
    <span class="token comment">//这是一个main方法，是程序的入口：</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//用enum关键字创建的Season枚举类上面的父类是：java.lang.Enum,常用方法子类Season可以直接拿过来使用：</span>
        <span class="token comment">//toString();--->获取对象的名字</span>
        <span class="token class-name">Season</span> autumn <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">AUTUMN</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>autumn<span class="token comment">/*.toString()*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//AUTUMN</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"--------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//values:返回枚举类对象的数组</span>
        <span class="token class-name">Season</span><span class="token punctuation">[</span><span class="token punctuation">]</span> values <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Season</span> s<span class="token operator">:</span>values<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token comment">/*.toString()*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"--------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//valueOf：通过对象名字获取这个枚举对象</span>
        <span class="token comment">//注意：对象的名字必须传正确，否则抛出异常</span>
        <span class="token class-name">Season</span> autumn1 <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">"AUTUMN"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>autumn1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举类实现接口" tabindex="-1"><a class="header-anchor" href="#枚举类实现接口" aria-hidden="true">#</a> 枚举类实现接口</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TestInterface</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Season</span> <span class="token keyword">implements</span> <span class="token class-name">TestInterface</span> <span class="token punctuation">{</span>
    <span class="token constant">SPRING</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"这是春天。。。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token constant">SUMMER</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"这是夏天。。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token constant">AUTUMN</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"这是秋天"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token constant">WINTER</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"这是冬天"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">/*@Override
    public void show() {
        System.out.println("这是Season....");
    }*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token comment">//这是一个main方法，是程序的入口：</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Season</span> autumn <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">AUTUMN</span><span class="token punctuation">;</span>
        autumn<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Season</span> summer <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">SUMMER</span><span class="token punctuation">;</span>
        summer<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/01_JavaSE阶段/B_进阶/07_JUnit_注解_枚举/03_枚举/image/image_mll_xjt7Gx.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="实际应用" tabindex="-1"><a class="header-anchor" href="#实际应用" aria-hidden="true">#</a> 实际应用</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test02</span> <span class="token punctuation">{</span>
    <span class="token comment">//这是一个main方法，是程序的入口：</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Gender</span> sex <span class="token operator">=</span> <span class="token class-name">Gender</span><span class="token punctuation">.</span>男<span class="token punctuation">;</span>
        <span class="token comment">//switch后面的（）中可以传入枚举类型</span>
        <span class="token comment">//switch后面的（）:int,short,byte,char,String ,枚举</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>sex<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">case</span> 女<span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是个女孩"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> 男<span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是个男孩"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


