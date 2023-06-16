<template><div><h2 id="什么是javascrip" tabindex="-1"><a class="header-anchor" href="#什么是javascrip" aria-hidden="true">#</a> 什么是JavaScrip</h2>
<p>Javascript是一种由Netscape(网景)的LiveScript发展而来的. 原型化继承的面向对象的动态类型的区分大小写的客户端脚本语言，主要目的是为了解决服务器端语言.比如Perl遗留的速度问题，为客户提供更流畅的浏览效果。</p>
<p>当时服务端需要对数据进行验证，由于网络速度相当缓慢,只有28.8kbps，验证步骤浪费的时间太多。于是Netscape的浏览器Navigator加入了Javascript，提供了数据验证的基本功能。</p>
<p>JavaScript 的正式名称是 &quot;ECMAScript&quot;。这个标准由 ECMA 组织发展和维护。ECMA-262 是正式的 JavaScript 标准。这个标准基于 JavaScript (Netscape) 和 JScript (Microsoft)。Netscape (Navigator 2.0) 的 Brendan Eich 发明了这门语言，从 1996 年开始，已经出现在所有的 Netscape 和 Microsoft 浏览器中。ECMA-262 的开发始于 1996 年，在 1997 年 7 月，ECMA 会员大会采纳了它的首个版本。JavaScript的组成包含ECMAScript、DOM、BOM。JS是一种运行于浏览器端上的小脚本语句,可以实现网页如文本内容动,数据动态变化和动画特效等 .</p>
<ul>
<li>ECMAScript<br>
是一种由欧洲计算机制造商协会（ECMA）通过ECMA-262标准化的脚本程序语言,简单点说，ECMAScript描述了语法、类型、语句、关键字、保留字、运算符和对象。它就是定义了脚本语言的所有属性、方法和对象。</li>
<li>DOM<br>
把整个页面规划成由节点层构成的文档，它不与浏览器、平台、语言相关，为web开发者提供一个标准可以访问站点中的数据、脚本和表现层对象.DOM编程可以实现网页内容校验和动态变化的效果 </li>
<li>BOM<br>
是浏览器的一种特性，它可以对浏览器窗口进行访问和操作，例如移动、关闭窗口，调整窗口的大小，支持cookie等。BOM编程可以实现动态控制浏览器本身行为的效果 </li>
</ul>
<p>通俗来讲:<strong>ECMAScript可以理解为JS的基础语法部分, DOM可以简单理解为,使用document对象操作文档内容的编程,BOM可以理解为,使用window对象操作浏览器行为的编程</strong></p>
<h2 id="javascript-的特点" tabindex="-1"><a class="header-anchor" href="#javascript-的特点" aria-hidden="true">#</a> JavaScript 的特点</h2>
<h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3>
<ol>
<li><strong>脚本语言</strong><br>
脚本语言是一种<strong>简单的程序，规模小,不需要编译,运行快,</strong> 是由一些ASCII字符构成，可以使用任何一种文本编辑器编写。脚本语言是指在web浏览器内有解释器解释执行的编程语言，每次运行程序的时候，解释器会把程序代码翻译成可执行的格式。一些程序语言（如C、C++、Java等）都必须经过编译，将源代码编译成二进制的可执行文件之后才能运行，而脚本语言不需要事先编译，只要有一个与其相适应的解释器就可以执行。</li>
<li><strong>基于对象的语言</strong><br>
脚本语言是一种<strong>简单的程序，规模小,不需要编译,运行快,</strong> 是由一些ASCII字符构成，可以使用任何一种文本编辑器编写。脚本语言是指在web浏览器内有解释器解释执行的编程语言，每次运行程序的时候，解释器会把程序代码翻译成可执行的格式。一些程序语言（如C、C++、Java等）都必须经过编译，将源代码编译成二进制的可执行文件之后才能运行，而脚本语言不需要事先编译，只要有一个与其相适应的解释器就可以执行。</li>
<li><strong>事件驱动</strong><br>
在网页中执行了某种操作的动作，被称为&quot;事件&quot;(Event)，比如按下鼠标、移动窗口、选择菜单等都可以视为事件。当事件发生后，可能会引起相应的事件响应。</li>
<li><strong>简单性</strong><br>
变量类型是采用弱类型，并未使用严格的数据类型。var a,b,c;  a=123;  b=&quot;abc&quot;; a=b;</li>
<li><strong>安全性</strong><br>
JavaScript不能访问本地的硬盘，不能将数据存入到服务器上，不能对网络文档进行修改和删除，只能通过浏览器实现信息浏览或动态交互</li>
<li><strong>跨平台性</strong><br>
JavaScript依赖于浏览器本身，与操作平台无关， 只要计算机安装了支持JavaScript的浏览器（装有JavaScript解释器），JavaScript程序就可以正确执行。</li>
</ol>
<h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3>
<blockquote>
<p>📌缺点<br>
各种浏览器支持JavaScript的程度是不一样的，支持和不完全支持JavaScript的 浏览器在浏览同一个带有JavaScript脚本的网页时，效果会有一定的差距，有时甚至会显示不出来。</p>
</blockquote>
<h2 id="javascript-与-java的区别" tabindex="-1"><a class="header-anchor" href="#javascript-与-java的区别" aria-hidden="true">#</a> JavaScript 与 Java的区别</h2>
<ul>
<li><strong>区别1：公司不同，前身不同</strong><br>
<strong>JavaScript是Netscape公司的产品</strong>，是为了扩展Netscape Navigator功能而开发的一种可以嵌入Web页面中的基于对象和事件驱动的解释性语言，它的前身是Live Script；<strong>Java是SUN公司推出的新一代面向对象的程序设计语言</strong>，特别适合于Internet应用程序开发； Java的前身是Oak语言。</li>
<li><strong>区别2：基于对象和面向对象</strong><br>
<strong>JavaScript是脚本语言，是一种基于对象的语言</strong>。本身提供了非常丰富的内部对象供设计人员使用，但不支持继承和多态。<strong>Java是面向对象的</strong>，是一种真正的面向对象的语言，支持封装、继承和多态。</li>
<li><strong>区别3: 变量类型强弱不同</strong><br>
<strong>Java采用强类型变量检查，</strong> 即所有变量在编译之前必须声明为某一指定类型。如: int  x=1234;<strong>JavaScript中是弱类型变量</strong>。统一采用var声明，可赋各种数据类型值。</li>
<li><strong>区别4: 变运行的位置不同</strong><br>
<strong>Java运行与服务器端的</strong>,大型编程语言, <strong>JS运行于客户端(浏览器)</strong> 一种小规模脚本语言</li>
</ul>
<h2 id="javascript-与-css的关系" tabindex="-1"><a class="header-anchor" href="#javascript-与-css的关系" aria-hidden="true">#</a> JavaScript 与 CSS的关系</h2>
<p>HTML和CSS和JS都是前端的主要技术,三者各有分工.</p>
<ul>
<li>HTML : 可以用于制作网页的主体结构</li>
<li>CSS : 用于给网页做美化</li>
<li>JS : 用于在网页上添加动态效果</li>
</ul>
<h2 id="javascript-的引入方式" tabindex="-1"><a class="header-anchor" href="#javascript-的引入方式" aria-hidden="true">#</a> JavaScript 的引入方式</h2>
<h3 id="内嵌式" tabindex="-1"><a class="header-anchor" href="#内嵌式" aria-hidden="true">#</a> 内嵌式</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--内嵌式引入方式
        1在head标签中,用一对script标签,嵌入JS代码
        2type属性可以省略不写
    --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">/*定义一个函数(方法)*/</span>
      <span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*弹窗提示一点信息 */</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"你好"</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>点我呀<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📌缺点</p>
<ol>
<li>我们定义的JS代码只能在当前一个网页中使用,代码复用度低,可维护性低</li>
<li>JS代码和HTML代码混合在一个文件中,可阅读性差</li>
</ol>
</blockquote>
<h3 id="链接式" tabindex="-1"><a class="header-anchor" href="#链接式" aria-hidden="true">#</a> 链接式</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/03_前端技术/03_JavaScript/01_初识JavaScript/image/image_KT_NPQEkX8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"总能见到你"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"总能见到你"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--链接式 引入外部JS文件
      提高的代码复用度  
      降低了代码维护的难度
      1 一个页面可以同时引入多个不同的JS文件
        2 script标签一点用于引入外部JS文件,就不能在中间定义内嵌式代码
        3 一个页面上可以用多个script标签  位置也不是非得放到head标签中不可
        4src属性可以指向一个网络路径,就是第三种引入方式
    --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>js/myjs.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--&lt;script type="text/javascript" src="URL网络路径">&lt;/script>--></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>点我呀<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>点我呀2<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>点我呀3<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
                          <span class="token keyword">function</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                                  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"总能见到你"</span><span class="token punctuation">)</span>
                          <span class="token punctuation">}</span>
                  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📌优点 : 代码复用度高,更易于维护代码</p>
</blockquote>
<p>注意事项:</p>
<ol>
<li>在一个页面上可以同时引入多个JS文件</li>
<li>每个JS文件的引入都要使用一个独立的script标签</li>
<li>内嵌式和链接式的引入不能使用同一标签</li>
</ol>
</div></template>


