import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-a48529f7.js";const p={},e=t(`<h2 id="创建数组方式" tabindex="-1"><a class="header-anchor" href="#创建数组方式" aria-hidden="true">#</a> 创建数组方式</h2><h3 id="直接创建空数组" tabindex="-1"><a class="header-anchor" href="#直接创建空数组" aria-hidden="true">#</a> 直接创建空数组</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*第一种
 *创建了一个空数组 new Array();
 * */</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="直接创建指定长度" tabindex="-1"><a class="header-anchor" href="#直接创建指定长度" aria-hidden="true">#</a> 直接创建指定长度</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 *第二种
 * 创建定长数组 new Array(5);
 * */</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;x&quot;</span><span class="token punctuation">;</span>
arr2<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="直接创建指定元素" tabindex="-1"><a class="header-anchor" href="#直接创建指定元素" aria-hidden="true">#</a> 直接创建指定元素</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * 第三种创建语法
 * 创建时,直接指定元素值
 * */</span>

<span class="token keyword">var</span> arr3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token string">&quot;asdf&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20.3</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span>

<span class="token keyword">var</span> arr4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;asdf&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20.3</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr4<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组元素和长度" tabindex="-1"><a class="header-anchor" href="#数组元素和长度" aria-hidden="true">#</a> 数组元素和长度</h2><p>JS中数组元素和长度使用时的特征:</p><p>当我们修改数组长度属性时,也会直接更改数组的长度<br> 当我们直接资指定索引插入值时,也会动态修改数组的长度</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token comment">//[11, 22, 33]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//11</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token comment">//3</span>

<span class="token comment">/*
 * JS中的数组是可以通过修改length属性来改变数组长度的
 * */</span>
arr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token comment">//[11, 22, 33, empty × 2]</span>

<span class="token comment">/*
 * JS的数组可以通过索引改变数组的长度
 * */</span>
arr<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[11, 22, 33, empty × 6, 99]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组遍历" tabindex="-1"><a class="header-anchor" href="#数组遍历" aria-hidden="true">#</a> 数组遍历</h2><h3 id="普通for循环" tabindex="-1"><a class="header-anchor" href="#普通for循环" aria-hidden="true">#</a> 普通For循环</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">/*
 * 普通for循环遍历数组
 * */</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增强for循环" tabindex="-1"><a class="header-anchor" href="#增强for循环" aria-hidden="true">#</a> 增强For循环</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">/*
 *foreach循环遍历数组
 * JS 中foreach写法为  for( var i in 数组)
 * i 不是元素  是索引
 * */</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组的常用方法" tabindex="-1"><a class="header-anchor" href="#数组的常用方法" aria-hidden="true">#</a> 数组的常用方法</h2><h3 id="查询指定索引元素-indexof" tabindex="-1"><a class="header-anchor" href="#查询指定索引元素-indexof" aria-hidden="true">#</a> 查询指定索引元素:indexOf</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> index <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//查询元素索引的方法</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token comment">//6</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并数组元素-concat" tabindex="-1"><a class="header-anchor" href="#合并数组元素-concat" aria-hidden="true">#</a> 合并数组元素:concat</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 合并两个数组</span>
<span class="token keyword">var</span> hege <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Cecilie&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lone&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> stale <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Emil&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tobias&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Linus&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> children <span class="token operator">=</span> hege<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>stale<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token comment">//[&quot;Cecilie&quot;, &quot;Lone&quot;, &quot;Emil&quot;, &quot;Tobias&quot;, &quot;Linus&quot;]</span>

<span class="token comment">// 合并三个数组</span>
<span class="token keyword">var</span> parents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Jani&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tove&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> brothers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Stale&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Kai Jim&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Borge&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Cecilie&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lone&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> family <span class="token operator">=</span> parents<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>brothers<span class="token punctuation">,</span> children<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>family<span class="token punctuation">)</span><span class="token comment">//[&quot;Jani&quot;, &quot;Tove&quot;, &quot;Stale&quot;, &quot;Kai Jim&quot;, &quot;Borge&quot;, &quot;Cecilie&quot;, &quot;Lone&quot;]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并字符串-concat" tabindex="-1"><a class="header-anchor" href="#合并字符串-concat" aria-hidden="true">#</a> 合并字符串:concat</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 合并字符串</span>
<span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Orange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Mango&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> fs <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fs<span class="token punctuation">)</span><span class="token comment">//Banana,Orange,Apple,Mango</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移除最后一个元素-pop" tabindex="-1"><a class="header-anchor" href="#移除最后一个元素-pop" aria-hidden="true">#</a> 移除最后一个元素:pop</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Orange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Mango&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 移除最后一个元素</span>
<span class="token keyword">var</span> fruit <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruit<span class="token punctuation">)</span><span class="token comment">//[&quot;Banana&quot;, &quot;Orange&quot;, &quot;Apple&quot;]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结尾添加元素-push" tabindex="-1"><a class="header-anchor" href="#结尾添加元素-push" aria-hidden="true">#</a> 结尾添加元素:push</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Orange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Mango&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 想结尾增加元素</span>
fruits<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;Grape&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span><span class="token comment">//[&quot;Banana&quot;, &quot;Orange&quot;, &quot;Apple&quot;,&quot;Mango&quot;,&quot;Grape&quot;]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结尾添加元素-reverse" tabindex="-1"><a class="header-anchor" href="#结尾添加元素-reverse" aria-hidden="true">#</a> 结尾添加元素:reverse</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Orange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Grape&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//反转数组</span>
fruits<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span><span class="token comment">//[&quot;Grape&quot;, &quot;Apple&quot;, &quot;Orange&quot;, &quot;Banana&quot;]</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除第一个元素-shift" tabindex="-1"><a class="header-anchor" href="#删除第一个元素-shift" aria-hidden="true">#</a> 删除第一个元素:shift</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Orange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Grape&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//删除数组第一个元素</span>
<span class="token keyword">var</span> ss <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[&quot;Apple&quot;, &quot;Orange&quot;, &quot;Banana&quot;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ss<span class="token punctuation">)</span><span class="token comment">//Grape</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="向第一个位置添加元素-unshift" tabindex="-1"><a class="header-anchor" href="#向第一个位置添加元素-unshift" aria-hidden="true">#</a> 向第一个位置添加元素:unshift</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Orange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Banana&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//向第一个位置添加元素</span>
fruits<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">&quot;火龙果&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[&quot;火龙果&quot;, &quot;Apple&quot;, &quot;Orange&quot;, &quot;Banana&quot;]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="截取数组-slice" tabindex="-1"><a class="header-anchor" href="#截取数组-slice" aria-hidden="true">#</a> 截取数组:slice</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;火龙果&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Orange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Banana&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 截取子数组  从哪个索引开始,到哪个索引结束 包头不包尾</span>
<span class="token keyword">var</span> citrus <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>citrus<span class="token punctuation">)</span><span class="token comment">//[&quot;Apple&quot;, &quot;Orange&quot;]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除数组中的元素-splice" tabindex="-1"><a class="header-anchor" href="#删除数组中的元素-splice" aria-hidden="true">#</a> 删除数组中的元素:splice</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>
<span class="token comment">/*
 * 删除数组中的某些元素
 * 2 从哪个索引开始删除
 * 3 删除多个少个元素
 * */</span>
numbers<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token comment">//[1, 2, 6, 7, 8, 9]</span>
<span class="token comment">/*
 * 如果第二个参数是0 那么就变成了在指定索引位置增加元素
 * */</span>
numbers<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token comment">//[1, 2, 100, 3, 4, 5, 6, 7, 8, 9]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组排序-sort" tabindex="-1"><a class="header-anchor" href="#数组排序-sort" aria-hidden="true">#</a> 数组排序:sort</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Orange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Mango&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
fruits<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span><span class="token comment">//[&quot;Apple&quot;, &quot;Banana&quot;, &quot;Mango&quot;, &quot;Orange&quot;]</span>

<span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//自定义排序规则:类似比较器</span>
numbers<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> b <span class="token operator">-</span> a
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token comment">//[9, 8, 7, 6, 5, 4, 3, 2, 1]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),o=[e];function c(u,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","数组的使用.html.vue"]]);export{k as default};
