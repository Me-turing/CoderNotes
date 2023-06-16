<template><div><h3 id="axios的概念" tabindex="-1"><a class="header-anchor" href="#axios的概念" aria-hidden="true">#</a> Axios的概念</h3>
<p>Ajax 即Asynchronous Javascript And XML( 异步的 )  ，不是一种新的编程语言，而是多种技术的综合应用。是<strong>客户端</strong>的技术，它可以实现<strong>局部刷新</strong>网页(一种在无需重新加载整个网页的情况下，能够更新部分网页的技术)。<strong>Vue中封装了ajax并增强</strong>了它，在异步并发处理优于原生ajax。<strong>称为：axios</strong>（ajax input output system）</p>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<ul>
<li>一、引入JS文件 : <a href="file/axios.min_yHYNXUXqMB.js">axios.min.js</a><br>
<strong>一定要注意引入顺序</strong>：Vue路由是基于vue.js的扩展，所以要先引用vue.js 再引用vue-router.js 文件</li>
<li>二、使用语法<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>vur提供的对象，<span class="token keyword">get</span>函数是指即将发起一个<span class="token keyword">get</span>请求
参数是一段java程序的访问方式
当程序访问成功时，then函数是vue自动调用的函数
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"url地址信息"</span><span class="token punctuation">,</span><span class="token string">"参数信息"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
<span class="token comment">//res记录程序返回值return => 箭头函数后处理返回结果res</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

then：访问成功再运行
res：表示返回的数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/03_前端技术/08_Vue/09_Vue中的Ajax/image/image_3bnyUJV33R.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>then()</code>  ：表示执行成功<br>
<code v-pre>catch() </code>:  请求失败执行<br>
<code v-pre>finally() </code>: 总会执行</p>
<h3 id="参数的拼接" tabindex="-1"><a class="header-anchor" href="#参数的拼接" aria-hidden="true">#</a> 参数的拼接</h3>
<h4 id="普通参数" tabindex="-1"><a class="header-anchor" href="#普通参数" aria-hidden="true">#</a> 普通参数</h4>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/03_前端技术/08_Vue/09_Vue中的Ajax/image/image__FEqIc4tJn.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="使用params" tabindex="-1"><a class="header-anchor" href="#使用params" aria-hidden="true">#</a> 使用params</h4>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/03_前端技术/08_Vue/09_Vue中的Ajax/image/image_s3gUomJ0MG.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="发送json" tabindex="-1"><a class="header-anchor" href="#发送json" aria-hidden="true">#</a> 发送Json</h4>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/03_前端技术/08_Vue/09_Vue中的Ajax/image/image_UeM9sxbnxw.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>对JSON的处理</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/03_前端技术/08_Vue/09_Vue中的Ajax/image/image_pPmy6UX_pz.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


