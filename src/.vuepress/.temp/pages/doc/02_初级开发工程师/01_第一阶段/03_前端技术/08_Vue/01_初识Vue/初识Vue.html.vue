<template><div><h2 id="了解vue" tabindex="-1"><a class="header-anchor" href="#了解vue" aria-hidden="true">#</a> 了解Vue</h2>
<p>Vue (读音<code v-pre> /vjuː/</code>，类似于 view) <strong>是一套用于构建用户界面的渐进式框架</strong>。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。<strong>Vue 的核心库只关注视图层</strong>，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，<strong>Vue 也完全能够为复杂的单页应用提供驱动</strong></p>
<p>相关网站<br>
<a href="https://cn.vuejs.org/" title="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/<ExternalLinkIcon/></a> 官方网站<br>
<a href="https://github.com/vuejs" title="https://github.com/vuejs" target="_blank" rel="noopener noreferrer">https://github.com/vuejs<ExternalLinkIcon/></a>  Github网站</p>
<h2 id="vue的好处" tabindex="-1"><a class="header-anchor" href="#vue的好处" aria-hidden="true">#</a> Vue的好处</h2>
<p>实际上vue框架就是一个MVVM框架，它是渐进式框架，它是初创公司的首选框架，它是轻量级的，有很多根据Vue拓展的独立的功能或库</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/03_前端技术/08_Vue/01_初识Vue/image/image_v8gN7AyDP4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>通过下面的例子我们来了解Vue的好处</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/03_前端技术/08_Vue/01_初识Vue/image/image_LjGzgjFcJH.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="传统方式操作元素" tabindex="-1"><a class="header-anchor" href="#传统方式操作元素" aria-hidden="true">#</a> 传统方式操作元素</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>点击操作的元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>add<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击加1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reduce<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击减1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> elNubmer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'h1'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//获取到H1中的元素</span>
    <span class="token keyword">var</span> nubler <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    elNubmer<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> nubler<span class="token punctuation">;</span><span class="token comment">//初始化值</span>
    
    <span class="token keyword">var</span> elAdd  <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'add'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取到加1的按钮</span>
    elAdd<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//注册点击事件</span>
      nubler<span class="token operator">++</span><span class="token punctuation">;</span>
      elNubmer<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> nubler<span class="token punctuation">;</span><span class="token comment">//重新绘制视图</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">var</span> elReduce  <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'reduce'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取到减1的按钮</span>
    elReduce<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//注册点击事件</span>
      nubler<span class="token operator">--</span><span class="token punctuation">;</span>
      elNubmer<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> nubler<span class="token punctuation">;</span><span class="token comment">//重新绘制视图</span>
    <span class="token punctuation">}</span>  
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在传统方式操作数据中,我们每次改变数据的值,都需要冲洗向视图中绘制</p>
<h3 id="使用vue操作元素" tabindex="-1"><a class="header-anchor" href="#使用vue操作元素" aria-hidden="true">#</a> 使用Vue操作元素</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>js/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>{{number}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>add<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>add<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击加1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reduce<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reduce<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击减1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">//挂载点</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#app'</span><span class="token punctuation">,</span>
      <span class="token comment">//数据</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">number</span><span class="token operator">:</span><span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">//方法</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>number<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>number<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用Vue操作时,我们无需关注视图模型,仅仅需要修该数据,视图的渲染都交给Vue来执行</p>
<h2 id="vue的使用" tabindex="-1"><a class="header-anchor" href="#vue的使用" aria-hidden="true">#</a> Vue的使用</h2>
<h3 id="引入vue" tabindex="-1"><a class="header-anchor" href="#引入vue" aria-hidden="true">#</a> 引入Vue</h3>
<ol>
<li>Vue2文件<br>
在Vue的起步中，区分开发环境和生产环境，两者的不同，开发环境可以清晰的看清源码，生产环境就是将源码进行压缩，占比大小更小，我们学习过程中使用生产环境<br>
开发环境版本，包含了有帮助的命令行警告<br>
<a href="file/vue_dev_BFFNRkiMkA.js">vue_dev.js</a><br>
生产环境版本，优化了尺寸和速度<br>
<a href="file/vue_uat_BFAXhXjjx2.js">vue_uat.js</a></li>
<li>文件中引入<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/03_前端技术/08_Vue/01_初识Vue/image/image_BGuwDNlhqn.png" alt="" loading="lazy"></li>
<li>简单的语法格式<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        {{a}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>js/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> vue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// 挂载点，所有的Vue的方法和属性都必须在对应的挂载根标签内部使用</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
            <span class="token comment">// 数据管理中心，所有的Vue的数据都在data对象中</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">100</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 方法，对应的Vue事件方法清单</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="插值语法" tabindex="-1"><a class="header-anchor" href="#插值语法" aria-hidden="true">#</a> 插值语法</h3>
<p>插值语法是通过一对<code v-pre>{{}}</code>进行书写，内部是对data数据管理中心的属性进行渲染，也可以是表达式moustache（胡子）是双大括号学名，也叫（胡子语法）</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/03_前端技术/08_Vue/01_初识Vue/image/image_cWK0Bdndnh.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>内部也可以存放表达式: <code v-pre>{{a &gt;= 100 ? 20 : 10}}</code>  ,  注意，<strong>表达式支持简单，比如简单判断</strong>，比如三元表达式，<strong>不可以使用if等等复杂判断</strong> <code v-pre>{{if(a&gt;200){a=100}else{a=300}}}</code></p>
<p>我们需要注意的是，所有的对象中的清单内容，都是Vue规定，内置的，不可以自由发挥</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        {{b}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>js/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> vue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// 挂载点，所有的Vue的方法和属性都必须在对应的挂载根标签内部使用</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
            <span class="token comment">// 数据管理中心，所有的Vue的数据都在data对象中</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">100</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 方法，对应的Vue事件方法清单</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">content</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">200</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中content对象是我们自己随意创建的，所以是不支持在Vue中使用的</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/03_前端技术/08_Vue/01_初识Vue/image/image_DjZi8JjwCV.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


