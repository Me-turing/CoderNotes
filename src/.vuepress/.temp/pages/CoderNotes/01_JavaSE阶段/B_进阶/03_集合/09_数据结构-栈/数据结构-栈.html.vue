<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>在之前的学习中，我们知道了数据结构分为：逻辑结构和物理结构</p>
<ul>
<li>逻辑结构：
<ul>
<li>思想上的结构--》卧室，厨房，卫生间 ---》线性表（数组，链表），图，树，栈，队列</li>
</ul>
</li>
<li>物理结构：
<ul>
<li>真实结构--》钢筋混凝土+牛顿力学------》紧密结构（顺序结构），跳转结构（链式结构）</li>
</ul>
</li>
</ul>
<p>接下来我们了解一下栈<br>
所属：<strong>逻辑结构</strong><br>
特点：<strong>后进先出（LIFO - last in first out）</strong></p>
<p>生活中的案例<br>
<img src="@source/CoderNotes/01_JavaSE阶段/B_进阶/03_集合/09_数据结构-栈/assets/Pasted_image_20230326113455.png" alt="" loading="lazy"></p>
<p>在开发中的应用</p>
<ol>
<li>内存分析：形参，局部变量放入栈中。放入的那个区域的数据结构就是按照栈来做的。</li>
<li>网络浏览器多会将用户最近访问过的网址组织为一个栈。这样，用户每访问一个新页面，其地址就会被存放至栈顶；而用户每按下一次“后退”按钮，即可沿相反的次序访问此前刚访问过的页面。</li>
<li>主流的文本编辑器也大都支持编辑操作的历史记录功能（ctrl + z：撤销，ctrl + y：恢复），用户的编辑操作被依次记录在一个栈中。一旦出现误操作，用户只需按下“撤销”按钮，即可取消最近一次操作并回到此前的编辑状态。</li>
</ol>
<h2 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> Stack</h2>
<p>Stack是Vector的子类，Vector里面两个重要的属性：</p>
<ol>
<li><code v-pre>Object[] elementData;</code>底层依然是一个数组</li>
<li><code v-pre>int elementCount;</code>数组中的容量</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
        Stack是Vector的子类，Vector里面两个重要的属性：
        Object[] elementData;底层依然是一个数组
        int elementCount;数组中的容量
         */</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> stackStr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stackStr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回添加结果</span>
        stackStr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"D"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stackStr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stackStr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[A, D, B]</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否为空？ "</span><span class="token operator">+</span>stackStr<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"查看栈顶的数据不移除："</span><span class="token operator">+</span>stackStr<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//B</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stackStr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[A, D, B]</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"查看栈顶的数据并移除："</span><span class="token operator">+</span>stackStr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//B</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stackStr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[A, D]</span>
        
        stackStr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//和ADD方法执行的底层一样，只是返回了添加的数据</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stackStr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[A, D, B]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


