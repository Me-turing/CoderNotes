<template><div><h2 id="es6-入门" tabindex="-1"><a class="header-anchor" href="#es6-入门" aria-hidden="true">#</a> ES6 入门</h2>
<p>自学参考：<a href="http://es6.ruanyifeng.com/" title="http://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">http://es6.ruanyifeng.com/<ExternalLinkIcon/></a></p>
<p><strong>ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准</strong>，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。</p>
<h3 id="es6简介" tabindex="-1"><a class="header-anchor" href="#es6简介" aria-hidden="true">#</a> ES6简介</h3>
<h4 id="es6与javascript的关系" tabindex="-1"><a class="header-anchor" href="#es6与javascript的关系" aria-hidden="true">#</a> ES6与JavaScript的关系</h4>
<p>要讲清楚这个问题，需要回顾历史。1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。</p>
<p>因此，<strong>ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现</strong>（另外的 ECMAScript 方言还有 Jscript 和 ActionScript）</p>
<h4 id="es6与es5的关系" tabindex="-1"><a class="header-anchor" href="#es6与es5的关系" aria-hidden="true">#</a> ES6与ES5的关系</h4>
<p>2011 年，ECMAScript 5.1 版发布后，就开始制定 6.0 版了。因此，ES6 这个词的原意，就是指 JavaScript 语言的下一个版本。</p>
<p>ES6 的第一个版本，在 2015 年 6 月发布，正式名称是《ECMAScript 2015 标准》（简称 ES2015）。</p>
<p>2016 年 6 月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016）如期发布，这个版本可以看作是 ES6.1 版，因为两者的差异非常小，基本上是同一个标准。根据计划，2017 年 6 月发布 ES2017 标准。  </p>
<p>因此，<strong>ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等</strong>，而<strong>ES2015 则是正式名称</strong>，<strong>特指该年发布的正式版本的语言标准</strong>。 本书中提到 ES6 的地方，一般是指 ES2015 标准，但有时也是泛指“下一代 JavaScript 语言”。</p>
<h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h3>
<p>ES标准中不包含 DOM 和 BOM的定义，只涵盖基本数据类型、关键字、语句、运算符、内建对象、内建函数等通用语法。</p>
<h4 id="let声明变量" tabindex="-1"><a class="header-anchor" href="#let声明变量" aria-hidden="true">#</a> let声明变量</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// var 声明的变量没有局部作用域</span>
<span class="token comment">// let 声明的变量  有局部作用域</span>
<span class="token punctuation">{</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment">// 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>  <span class="token comment">// ReferenceError: b is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// var 可以声明多次</span>
<span class="token comment">// let 只能声明一次</span>
<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>  <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>  <span class="token comment">// Identifier 'n' has already been declared</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📌 let 与 var的区别</p>
<ol>
<li>var声明的变量时全局成员变量，let声明的变量时局部变量</li>
<li>var可以多次声明一个变量，let只能声明一次</li>
<li>var在编译的过程中，会将声明语句提到最前面执行，let则不会提前，只是在使用位置声明</li>
</ol>
</blockquote>
<h4 id="const声明常量" tabindex="-1"><a class="header-anchor" href="#const声明常量" aria-hidden="true">#</a> const声明常量</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
	<span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
	<span class="token comment">// 常量在初始化完成赋值后不可以再次更改</span>
	<span class="token comment">//PI = 3;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📌cons常量</p>
<ol>
<li>声明后不允许改变</li>
<li>一旦声明必须初始化，否则报错</li>
</ol>
</blockquote>
<h4 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a> 解构赋值</h4>
<p>解构赋值是<strong>对赋值运算符的扩展。</strong><br>
他是一种针对数组或者对象进行模式匹配，然后对其中的变量进行赋值。<br>
在代码书<strong>写上简洁且易读，语义更加清晰明了</strong>；也方便了复杂对象中数据字段获取。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//传统的赋值</span>
<span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>c<span class="token operator">=</span><span class="token number">3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span>

<span class="token comment">//解构数组赋值</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'zhang3'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">33</span><span class="token punctuation">}</span>

<span class="token comment">//传统</span>
<span class="token keyword">var</span> userName <span class="token operator">=</span> user<span class="token punctuation">.</span>name
<span class="token keyword">var</span> userAge <span class="token operator">=</span> user<span class="token punctuation">.</span>age
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>userName<span class="token punctuation">,</span>userAge<span class="token punctuation">)</span>

<span class="token comment">//解构 注意let中的属性命名要和对象中的一致</span>
<span class="token keyword">let</span><span class="token punctuation">{</span>name<span class="token punctuation">,</span>age<span class="token punctuation">}</span> <span class="token operator">=</span>user
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📌解构赋值</p>
<ol>
<li>赋值与被赋值的类型一致</li>
<li>使用对象赋值时，赋值的对象的属性和被赋值的属性一致</li>
</ol>
</blockquote>
<h4 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h4>
<p>模板字符串相当于加强版的字符串，<strong>用反引号 `,除了作为普通字符串</strong>，还可以用来定义多行字符串，还可以在字符串中加入变量和表达式。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'hello'</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'java201021'</span>

 <span class="token comment">//拼接字符串 这种写法不好</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token operator">+</span><span class="token string">' '</span><span class="token operator">+</span>name<span class="token operator">+</span><span class="token string">'!'</span><span class="token punctuation">)</span>
<span class="token comment">//模板字符串的拼接方法</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> !</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//定义长字符串</span>
<span class="token keyword">let</span> head <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;head>
&lt;meta charset="UTF-8">
&lt;meta http-equiv="X-UA-Compatible" content="IE=edge">
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
&lt;title>Document&lt;/title>
&lt;/head></span><span class="token template-punctuation string">`</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//调用函数</span>
<span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'aaaaaa'</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="声明对象简写" tabindex="-1"><a class="header-anchor" href="#声明对象简写" aria-hidden="true">#</a> 声明对象简写</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'zahngsan3'</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">33</span>

<span class="token comment">//原本的对象声明方式</span>
<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span>name<span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span>age<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>

<span class="token comment">//对象简写  （对象中的属性和属性名一致就可以简写）</span>
<span class="token keyword">let</span> user2 <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>age<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="定义方法简写" tabindex="-1"><a class="header-anchor" href="#定义方法简写" aria-hidden="true">#</a> 定义方法简写</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
  <span class="token comment">//这些是定义函数 不是定义方法</span>
  <span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">'f1'</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> <span class="token function-variable function">f2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">'f2'</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//定义方法 没有简写</span>
  <span class="token keyword">let</span> user1 <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'zhang3'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">33</span><span class="token punctuation">,</span>
      <span class="token function-variable function">gethello1</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  user1<span class="token punctuation">.</span><span class="token function">gethello1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">//定义方法 简写</span>
  <span class="token keyword">let</span> user2 <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'zhang3'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">33</span><span class="token punctuation">,</span>
      <span class="token function">gethello2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  user2<span class="token punctuation">.</span><span class="token function">gethello2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对象拓展运算符" tabindex="-1"><a class="header-anchor" href="#对象拓展运算符" aria-hidden="true">#</a> 对象拓展运算符</h4>
<p>拓展运算符（...）用于取出参数对象所有可遍历属性然后拷贝到当前对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//拷贝对象</span>
<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'zhang3'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">33</span>
<span class="token punctuation">}</span>

<span class="token comment">//这个和Java是一样的，只是将user1指向User的空间地址</span>
<span class="token keyword">let</span> user1 <span class="token operator">=</span> user
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span>

<span class="token comment">//使用对象拓展运算符</span>
<span class="token comment">//这个是将原有的user空间复制一份，然后再让user2指向这个新空间</span>
<span class="token keyword">let</span> user2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">test</span><span class="token operator">:</span><span class="token string">'aaaaa'</span><span class="token punctuation">,</span><span class="token operator">...</span>user<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//2  合并对象</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'li4'</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">44</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> user3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>name<span class="token punctuation">,</span><span class="token operator">...</span>age<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user3<span class="token punctuation">)</span>

<span class="token comment">//注意：合并对象时属性名不能一样，否则会出现后面的覆盖前面的内容</span>
<span class="token keyword">let</span> user4 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>user1<span class="token punctuation">,</span><span class="token operator">...</span>user3<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user4<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h4>
<p>箭头函数提供了一种更加简洁的函数书写方式。基本语法是：</p>
<p><strong>参数 =&gt; 函数体</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">f1</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">f1</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//完整写法</span>
<span class="token keyword">let</span> <span class="token function-variable function">f2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">f2</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//如果只有一个参数 可以省略小括号，多个参数不可以省略</span>
<span class="token keyword">let</span> <span class="token function-variable function">f3</span> <span class="token operator">=</span> <span class="token parameter">a</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">f3</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//如果内部直接时返回值，且只有一行 可以省略大括号和return，多行不可以省略</span>
<span class="token keyword">let</span> <span class="token function-variable function">f4</span> <span class="token operator">=</span> <span class="token parameter">a</span> <span class="token operator">=></span> a
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">f4</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>箭头函数多用于匿名函数的定义</p>
<h2 id="node-入门" tabindex="-1"><a class="header-anchor" href="#node-入门" aria-hidden="true">#</a> Node 入门</h2>
<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3>
<h4 id="什么是node-js" tabindex="-1"><a class="header-anchor" href="#什么是node-js" aria-hidden="true">#</a> 什么是Node.js</h4>
<p>简单的说 Node.js 就是运行在服务端的 JavaScript。</p>
<p>Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。</p>
<h4 id="node-js的作用" tabindex="-1"><a class="header-anchor" href="#node-js的作用" aria-hidden="true">#</a> Node.js的作用</h4>
<p>如果你是一个前端程序员，你不懂得像PHP、Python或Ruby等动态编程语言，然后你想创建自己的服务，那么Node.js是一个非常好的选择。</p>
<p>Node.js 是运行在服务端的 JavaScript，如果你熟悉Javascript，那么你将会很容易的学会Node.js。</p>
<p>当然，如果你是后端程序员，想部署一些高性能的服务，那么学习Node.js也是一个非常好的选择。</p>
<h3 id="部署node-js" tabindex="-1"><a class="header-anchor" href="#部署node-js" aria-hidden="true">#</a> 部署Node.js</h3>
<ul>
<li>下载<br>
官网：<a href="https://nodejs.org/en/" title="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">https://nodejs.org/en/<ExternalLinkIcon/></a><br>
中文网：<a href="http://nodejs.cn/" title="http://nodejs.cn/" target="_blank" rel="noopener noreferrer">http://nodejs.cn/<ExternalLinkIcon/></a><br>
LTS：长期支持版本<br>
Current：最新版</li>
<li>安装 : 不要安装到中文目录其他默认即可</li>
<li>查看版本 : <code v-pre>node -v</code></li>
</ul>
<h3 id="node-js快速入门" tabindex="-1"><a class="header-anchor" href="#node-js快速入门" aria-hidden="true">#</a> Node.js快速入门</h3>
<p>快速发开一个简单的Node.js小程序</p>
<h4 id="控制台程序" tabindex="-1"><a class="header-anchor" href="#控制台程序" aria-hidden="true">#</a> 控制台程序</h4>
<ul>
<li>创建 01-控制台程序.js : <code v-pre>console.log('Hello Node.js')</code></li>
<li>打开命令行终端：<code v-pre>Ctrl + Shift + y</code></li>
<li>进入到程序所在的目录，输入 : <code v-pre>node 01-控制台程序.js</code></li>
</ul>
<p>浏览器的内核包括两部分核心：</p>
<ul>
<li>DOM渲染引擎；</li>
<li>js解析器（js引擎）</li>
<li>js运行在浏览器中的内核中的js引擎内部</li>
</ul>
<p>Node.js是脱离浏览器环境运行的JavaScript程序，基于V8 引擎（Chrome 的 JavaScript的引擎）</p>
<h4 id="服务端程序" tabindex="-1"><a class="header-anchor" href="#服务端程序" aria-hidden="true">#</a> 服务端程序</h4>
<p>创建 02-server-app.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 发送 HTTP 头部 </span>
	<span class="token comment">// HTTP 状态值: 200 : OK</span>
	<span class="token comment">// 内容类型: text/plain</span>
	response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/plain'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 发送响应数据 "Hello World"</span>
	response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'Hello Server'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 终端打印如下信息</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Server running at http://127.0.0.1:8888/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行服务器程序</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>node <span class="token number">02</span><span class="token operator">-</span>server<span class="token operator">-</span>app<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>服务器启动成功后，在浏览器中输入：<a href="http://localhost:8888/" title="http://localhost:8888/" target="_blank" rel="noopener noreferrer">http://localhost:8888/<ExternalLinkIcon/></a> 查看webserver成功运行，并输出html页面</p>
<p>停止服务：<code v-pre>ctrl + c</code></p>
<h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> NPM</h3>
<h4 id="什么是npm" tabindex="-1"><a class="header-anchor" href="#什么是npm" aria-hidden="true">#</a> 什么是NPM</h4>
<p>NPM全称Node Package Manager，是Node.js包管理工具，是全球最大的模块生态系统，里面所有的模块都是开源免费的；也是Node.js的包管理工具，相当于前端的Maven 。</p>
<p>我们通过npm 可以很方便地下载js库，管理前端工程。</p>
<p>Node.js默认安装的npm包和工具的位置：<code v-pre>Node.js目录\node_modules</code></p>
<p>在这个目录下你可以看见 npm目录，npm本身就是被NPM包管理器管理的一个工具，说明 Node.js已经集成了npm工具</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#在命令提示符输入 npm -v 可查看当前npm版本</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用npm管理项目" tabindex="-1"><a class="header-anchor" href="#使用npm管理项目" aria-hidden="true">#</a> 使用NPM管理项目</h4>
<h5 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化" aria-hidden="true">#</a> 项目初始化</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#建立一个空文件夹，在命令提示符进入该文件夹  执行命令初始化</span>
<span class="token function">npm</span> init
<span class="token comment">#按照提示输入相关信息，如果是用默认值则直接回车即可。</span>
<span class="token comment">#name: 项目名称</span>
<span class="token comment">#version: 项目版本号</span>
<span class="token comment">#description: 项目描述</span>
<span class="token comment">#keywords: {Array}关键词，便于用户搜索到我们的项目</span>
<span class="token comment">#最后会生成package.json文件，这个是包的配置文件，相当于maven的pom.xml</span>
<span class="token comment">#我们之后也可以根据需要进行修改。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#如果想直接生成 package.json 文件，那么可以使用命令</span>
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="修改npm镜像" tabindex="-1"><a class="header-anchor" href="#修改npm镜像" aria-hidden="true">#</a> 修改npm镜像</h5>
<p>NPM官方的管理的包都是从 <a href="http://npmjs.com" title="http://npmjs.com" target="_blank" rel="noopener noreferrer">http://npmjs.com<ExternalLinkIcon/></a>下载的，但是这个网站在国内速度很慢。</p>
<p>这里推荐使用淘宝 NPM 镜像 <a href="http://npm.taobao.org/" title="http://npm.taobao.org/" target="_blank" rel="noopener noreferrer">http://npm.taobao.org/<ExternalLinkIcon/></a> ，淘宝 NPM 镜像是一个完整 <a href="http://npmjs.com" title="npmjs.com" target="_blank" rel="noopener noreferrer">npmjs.com<ExternalLinkIcon/></a> 镜像，同步频率目前为 10分钟一次，以保证尽量与官方服务同步。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#经过下面的配置，以后所有的 npm install 都会经过淘宝的镜像地址下载</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org 

<span class="token comment">#查看npm配置信息</span>
<span class="token function">npm</span> config list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="npm-install命令的使用" tabindex="-1"><a class="header-anchor" href="#npm-install命令的使用" aria-hidden="true">#</a> npm install命令的使用</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#使用 npm install 安装依赖包的最新版，</span>
<span class="token comment">#模块安装的位置：项目目录\node_modules</span>
<span class="token comment">#安装会自动在项目目录下添加 package-lock.json文件，这个文件帮助锁定安装包的版本</span>
<span class="token comment">#同时package.json 文件中，依赖包会被添加到dependencies节点下，类似maven中的 &lt;dependencies></span>
<span class="token function">npm</span> <span class="token function">install</span> jquery


<span class="token comment">#npm管理的项目在备份和传输的时候一般不携带node_modules文件夹</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token comment">#根据package.json中的配置下载依赖，初始化项目</span>


<span class="token comment">#如果安装时想指定特定的版本</span>
<span class="token function">npm</span> <span class="token function">install</span> jquery@2.1.x


<span class="token comment">#devDependencies节点：开发时的依赖包，项目打包到生产环境的时候不包含的依赖</span>
<span class="token comment">#使用 -D参数将依赖添加到devDependencies节点</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint
<span class="token comment">#或</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> eslint


<span class="token comment">#全局安装</span>
<span class="token comment">#Node.js全局安装的npm包和工具的位置：用户目录\AppData\Roaming\npm\node_modules</span>
<span class="token comment">#一些命令行工具常使用全局安装的方式</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> webpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令" aria-hidden="true">#</a> 其他命令</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#更新包（更新到最新版本）</span>
<span class="token function">npm</span> update 包名
<span class="token comment">#全局更新</span>
<span class="token function">npm</span> update <span class="token parameter variable">-g</span> 包名

<span class="token comment">#卸载包</span>
<span class="token function">npm</span> uninstall 包名
<span class="token comment">#全局卸载</span>
<span class="token function">npm</span> uninstall <span class="token parameter variable">-g</span> 包名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> Babel</h3>
<p>Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行执行。</p>
<p>这意味着，你可以现在就用 ES6 编写程序，而不用担心现有环境是否支持。</p>
<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--global</span> babel-cli

<span class="token comment">#查看是否安装成功</span>
babel <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h4>
<p>初始化项目</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建配置文件<code v-pre>.babelrc</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span>
    <span class="token string">"presets"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
    <span class="token string">"plugins"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装转码器</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-preset-es2015
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>转码</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 转码结果写入一个文件</span>
<span class="token function">mkdir</span> dist1

<span class="token comment"># --out-file 或 -o 参数指定输出文件</span>
babel src/example.js --out-file dist1/compiled.js
<span class="token comment"># 或者</span>
babel src/example.js <span class="token parameter variable">-o</span> dist1/compiled.js

<span class="token comment"># 整个目录转码</span>
<span class="token function">mkdir</span> dist2
<span class="token comment"># --out-dir 或 -d 参数指定输出目录</span>
babel src --out-dir dist2
<span class="token comment"># 或者</span>
babel src <span class="token parameter variable">-d</span> dist2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h3>
<h4 id="简介-1" tabindex="-1"><a class="header-anchor" href="#简介-1" aria-hidden="true">#</a> 简介</h4>
<p>随着网站逐渐变成&quot;互联网应用程序&quot;，嵌入网页的Javascript代码越来越庞大，越来越复杂。</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/03_前端技术/07_ES6与Node/image/image_9mvOptX5Xj.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Javascript模块化编程，已经成为一个迫切的需求。理想情况下，开发者只需要实现核心的业务逻辑，其他都可以加载别人已经写好的模块。</p>
<p>但是，Javascript不是一种模块化编程语言，它不支持&quot;类&quot;（class），包（package）等概念，更遑论&quot;模块&quot;（module）了。</p>
<h4 id="commonjs模块规范" tabindex="-1"><a class="header-anchor" href="#commonjs模块规范" aria-hidden="true">#</a> CommonJS模块规范</h4>
<p>每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。</p>
<p><strong>CommonJS使用 exports 和require 来导出、导入模块。</strong></p>
<h5 id="导出模块" tabindex="-1"><a class="header-anchor" href="#导出模块" aria-hidden="true">#</a> 导出模块</h5>
<p>定义文件 1.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义成员：</span>
<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">subtract</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">multiply</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">divide</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 导出成员</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    sum<span class="token punctuation">,</span>
    subtract<span class="token punctuation">,</span>
    multiply<span class="token punctuation">,</span>
    divide
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="导入模块" tabindex="-1"><a class="header-anchor" href="#导入模块" aria-hidden="true">#</a> 导入模块</h5>
<p>定义文件2.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//引入模块  注意当前路径必须写./</span>
<span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./1.js'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> result1 <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> result2 <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result1<span class="token punctuation">,</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="运行程序" tabindex="-1"><a class="header-anchor" href="#运行程序" aria-hidden="true">#</a> 运行程序</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>node common<span class="token operator">-</span>js模块化<span class="token operator">/</span>引入模块<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="es6模块规范" tabindex="-1"><a class="header-anchor" href="#es6模块规范" aria-hidden="true">#</a> ES6模块规范</h4>
<p><strong>ES6使用 export 和 import 来导出、导入模块。</strong></p>
<blockquote>
<p>注意：这时的程序无法运行的，因为ES6的模块化无法在Node.js中执行，需要用Babel编辑成ES5后再执行。</p>
</blockquote>
<h5 id="导出模块-1" tabindex="-1"><a class="header-anchor" href="#导出模块-1" aria-hidden="true">#</a> 导出模块</h5>
<p>定义文件 1.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取数据列表'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'保存数据'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="导入模块-1" tabindex="-1"><a class="header-anchor" href="#导入模块-1" aria-hidden="true">#</a> 导入模块</h5>
<p>定义文件2.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//只取需要的方法即可，多个方法用逗号分隔</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getList<span class="token punctuation">,</span> save <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./1.js"</span>
<span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="es6模块规范另一种写法" tabindex="-1"><a class="header-anchor" href="#es6模块规范另一种写法" aria-hidden="true">#</a> ES6模块规范另一种写法</h4>
<p><strong>ES6使用 export 和 import 来导出、导入模块。</strong></p>
<blockquote>
<p>注意：这时的程序无法运行的，因为ES6的模块化无法在Node.js中执行，需要用Babel编辑成ES5后再执行</p>
</blockquote>
<h5 id="导出模块-2" tabindex="-1"><a class="header-anchor" href="#导出模块-2" aria-hidden="true">#</a> 导出模块</h5>
<p>定义文件 1.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取数据列表2'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'保存数据2'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="导入模块-2" tabindex="-1"><a class="header-anchor" href="#导入模块-2" aria-hidden="true">#</a> 导入模块</h5>
<p>定义文件2.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//只取需要的方法即可，多个方法用逗号分隔</span>
<span class="token keyword">import</span> user <span class="token keyword">from</span> <span class="token string">"./1.js"</span>
user<span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
user<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h3>
<p>Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。</p>
<p>从图中我们可以看出，Webpack 可以将多种静态资源 js、css、less 转换成一个静态文件，减少了页面的请求。</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/03_前端技术/07_ES6与Node/image/image_ZePfDPi5mi.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h4>
<p>全局安装  ： <code v-pre> npm install -g webpack webpack-cli</code><br>
安装后查看版本号  ：  <code v-pre>webpack -v</code></p>
<h4 id="demo演示" tabindex="-1"><a class="header-anchor" href="#demo演示" aria-hidden="true">#</a> Demo演示</h4>
<h5 id="打包js" tabindex="-1"><a class="header-anchor" href="#打包js" aria-hidden="true">#</a> 打包JS</h5>
<ul>
<li>
<p>创建一个文件夹webpack，并进入文件夹</p>
</li>
<li>
<p>初始化项目  ： <code v-pre>npm init -y</code></p>
</li>
<li>
<p>在文件夹中创建src目录，并在src中创建以下文件<br>
创建common.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>exports<span class="token punctuation">.</span><span class="token function-variable function">info</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建utils.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>exports<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建main.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> common <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./common'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> utils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./utils'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
common<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Hello world!'</span> <span class="token operator">+</span> utils<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在webpack目录下创建配置文件 <code v-pre>webpack.config.js</code></p>
<p>以下配置的意思是：读取当前项目目录下src文件夹中的main.js（入口文件）内容，分析资源依赖，把相关的js文件打包，打包后的文件放入当前目录的dist文件夹下，打包后的js文件名为bundle.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Node.js内置模块</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/main.js'</span><span class="token punctuation">,</span> <span class="token comment">//配置入口文件</span>
	<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//输出路径，__dirname：当前文件所在路径</span>
		<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'bundle.js'</span> <span class="token comment">//输出文件</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>执行编译命令<br>
以下配置的意思是：读取当前项目目录下src文件夹中的main.js（入口文件）内容，分析资源依赖，把相关的js文件打包，打包后的文件放入当前目录的dist文件夹下，打包后的js文件名为bundle.js</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>webpack <span class="token comment">#有黄色警告</span>
webpack <span class="token parameter variable">--mode</span><span class="token operator">=</span>development <span class="token comment">#没有警告</span>
<span class="token comment">#执行后查看bundle.js 里面包含了上面两个js文件的内容并惊醒了代码压缩</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以配置项目的npm运行命令，修改package.json文件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//...,</span>
    <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack --mode=development"</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用npm打包：<code v-pre>npm run dev</code></p>
</li>
</ul>
<h5 id="打包css" tabindex="-1"><a class="header-anchor" href="#打包css" aria-hidden="true">#</a> 打包CSS</h5>
<ul>
<li>安装<code v-pre>style-loader</code>和 <code v-pre>css-loader</code><br>
Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。<br>
Loader 可以理解为是模块和资源的转换器。<br>
首先我们需要安装相关Loader插件，css-loader 是将 css 装载到 javascript；style-loader 是让 javascript 认识css<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev style-loader css-loader 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>修改<code v-pre>webpack.config.js</code><br>
注意，这个demo是在上面的基础上继续完成的，需要在 <code v-pre>output:{},</code>下增加 <code v-pre>module:</code> 标签并配置其中的属性<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Node.js内置模块</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//...,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>  
            <span class="token punctuation">{</span>  
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>    <span class="token comment">//打包规则应用到以css结尾的文件上</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>  
        <span class="token punctuation">]</span>  
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>在src中配置style.css文件<br>
注意，这个demo是在上面的基础上继续完成的，需要在 <code v-pre>output:{},</code>下增加 <code v-pre>module:</code> 标签并配置其中的属性<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>body<span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span>pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>修改main.js<br>
在第一行引入style.css<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./style.css'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>重新执行打包程序</li>
</ul>
</div></template>


