import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-a48529f7.js";const e={},p=t(`<h2 id="变量的声明" tabindex="-1"><a class="header-anchor" href="#变量的声明" aria-hidden="true">#</a> 变量的声明</h2><ol><li>JS是弱类型的脚本语言,所有的变量 对象 的数据类型的声明统统是<code>var </code></li><li>变量声明时没有确定具体的数据类型,<strong>在变量赋值时确定变量具体的数据类型</strong></li><li>JS中的变量可以反复声明,<strong>后声明的会覆盖之前声明的同名变量</strong></li><li>JS中的得代码可以不用以<code>;</code>作为结尾 每一行代码都是一个独立的语句(<strong>建议写</strong>)</li><li>JS中字符串一般不区分 <code>&quot;&quot;</code> <code>&#39;&#39;</code>只要不混用即可</li><li>可以用不同的类型的数据给变量赋值,<strong>变量会自动改变自身的数据类型</strong></li><li>当给一个变量赋值为**null时,变量的类型为 object **</li><li>变量只声明不赋值的情况下,<strong>数据和数据类型都显示 undefined</strong></li><li>对象 数组其他类型可以叫做<strong>复合数据类型</strong> object</li><li>JS中的标识符命名规则和JAVA中的保持一致即可 <strong>尽量避免 使用$ 会和jQuery冲突</strong></li></ol><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><h3 id="数值型" tabindex="-1"><a class="header-anchor" href="#数值型" aria-hidden="true">#</a> 数值型</h3><p><code>number</code>整数和浮点数统称为数值。例如85或3.1415926等。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span>  i <span class="token operator">=</span><span class="token number">3.14</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串型" tabindex="-1"><a class="header-anchor" href="#字符串型" aria-hidden="true">#</a> 字符串型</h3><p><code>String</code>由0个,1个或多个字符组成的序列。在JavaScript中，用双引号或单引号括起来表示，如&quot;您好&quot;、<code>&amp;apos;</code> 学习<code>JavaScript&amp;apos; </code> 等。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> j<span class="token operator">=</span><span class="token string">&quot;你好&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> z <span class="token operator">=</span><span class="token string">&#39;hello js&#39;</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
<span class="token function">alert</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> j<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑-布尔-型" tabindex="-1"><a class="header-anchor" href="#逻辑-布尔-型" aria-hidden="true">#</a> 逻辑（布尔）型</h3><p><code>boolean</code> 用true或false来表示。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> b<span class="token operator">=</span><span class="token number">2</span><span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="空-null-值" tabindex="-1"><a class="header-anchor" href="#空-null-值" aria-hidden="true">#</a> 空（null）值</h3><p><strong><code>表示没有值</code></strong>，用于定义空的或不存在的引用。要注意，空值不等同于空字符串<code>&quot;&quot;</code>或<code>0</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> i<span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> 
<span class="token function">alert</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="未定义-undefined-值" tabindex="-1"><a class="header-anchor" href="#未定义-undefined-值" aria-hidden="true">#</a> 未定义（undefined）值</h3><p><code>undefined</code>它也是一个保留字。表示变量虽然已经声明，但却没有赋值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> i<span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复合数据类型object" tabindex="-1"><a class="header-anchor" href="#复合数据类型object" aria-hidden="true">#</a> 复合数据类型Object</h3><p>复合数据类型包括<code>对象</code>和<code>数组</code>两种。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> i<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><p>JS中运算符号大部分和java中的运算符一样,我们在这里分析一下特殊的运算符号</p><table><thead><tr><th>类型</th><th>运算符</th></tr></thead><tbody><tr><td>算术运算符</td><td>+ - * / % ++ --</td></tr><tr><td>赋值运算符</td><td>=</td></tr><tr><td>比较运算符</td><td>&gt; &lt; &gt;= &lt;= == === !=</td></tr><tr><td>逻辑运算符</td><td>&amp;&amp; || !</td></tr></tbody></table><h3 id="关于-和" tabindex="-1"><a class="header-anchor" href="#关于-和" aria-hidden="true">#</a> 关于 / 和 %</h3><p>JS中,数字类型都是<code>number</code>,除法的结果中如果没有小数位,直接就是一个整数,如有小数位,才是浮点数</p><p><strong>JS中如果出现除零,那么结果是 infinity,而不是报错</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token comment">/* 
   * 能除尽,则默认结果就是一个整数,不能除尽,结果默认就是浮点数
   * 除零不会出现异常,而是出现 Infinity
   * 和0取余数,出现NaN   not a number 不是一个数字
   * */</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">%</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JS取余数运算对于浮点数仍然有效,如果和0取余数,结果是<code>NaN(not a number)</code></p><h3 id="关于" tabindex="-1"><a class="header-anchor" href="#关于" aria-hidden="true">#</a> 关于 +</h3><p><code>+ </code>同时也是连接运算符,看两端的变量类型 :</p><ol><li>如果都是number那么就是算数中的加法</li><li>如果有字符串,那么就是连接符号,</li><li>如果是布尔类型和number相加,那么会将true转化为1 将false 转化为0</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token comment">/*
   * +号中 如果一段是字符串,就变成了文字拼接
   * 数字和 boolean类型相加  true会转变成1  false会转变成0  再做数学运算
   * */</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关于-1" tabindex="-1"><a class="header-anchor" href="#关于-1" aria-hidden="true">#</a> 关于 ==</h3><p>先比较类型,如果类型一致,再比较内容,如果类型不一致,会强制转换为number再比较内容</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token comment">/*
   * == 等值符
   * 先比较类型,如果类型一致,则比较值是否相同
   * 如果类型不一致,会将数据尝试转换number 再比较内容
   * */</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span> <span class="token comment">// t</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>a <span class="token operator">==</span> c<span class="token punctuation">)</span> <span class="token comment">// t</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>a <span class="token operator">==</span> d<span class="token punctuation">)</span> <span class="token comment">// f</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>b <span class="token operator">==</span> c<span class="token punctuation">)</span> <span class="token comment">// t</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>b <span class="token operator">==</span> d<span class="token punctuation">)</span> <span class="token comment">// f</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>c <span class="token operator">==</span> d<span class="token punctuation">)</span> <span class="token comment">// f</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关于-2" tabindex="-1"><a class="header-anchor" href="#关于-2" aria-hidden="true">#</a> 关于 ===</h3><p>数据类型不同 直接返回false如果类型相同 才会比较内容</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token comment">/*
   * === 等同符
   * 如果数据类型不同,直接返回false  如果类型相同,才会继续比较内容
   * 
   * */</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token comment">//f</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>a <span class="token operator">===</span> c<span class="token punctuation">)</span> <span class="token comment">//f</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>a <span class="token operator">===</span> d<span class="token punctuation">)</span> <span class="token comment">//f</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>b <span class="token operator">===</span> c<span class="token punctuation">)</span> <span class="token comment">//f</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>b <span class="token operator">===</span> d<span class="token punctuation">)</span> <span class="token comment">//f</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>c <span class="token operator">===</span> d<span class="token punctuation">)</span> <span class="token comment">//f</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;asdf&quot;</span> <span class="token operator">===</span> <span class="token string">&quot;asdf&quot;</span><span class="token punctuation">)</span> <span class="token comment">//t</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h2><p>基本和JAVA中的一致</p><h3 id="分支结构-if-switch" tabindex="-1"><a class="header-anchor" href="#分支结构-if-switch" aria-hidden="true">#</a> 分支结构 if switch</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
      <span class="token comment">/*
       * 定义变量表示月份
       * 根据月份输出该月的季节和应季活动
       * */</span>
      <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">12</span> <span class="token operator">||</span> i <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> i <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;大约在冬季: 冬天吃火锅&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;春天来了: 春天吃青菜&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">6</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;夏天到了: 吃烧烤喝啤酒&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">9</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span> <span class="token number">11</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;秋天到了: 贴秋膘&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;月份有误&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>


      <span class="token keyword">switch</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;春眠不觉晓&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">8</span><span class="token operator">:</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;夏天蚊子咬&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">9</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">10</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">11</span><span class="token operator">:</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;秋天一身包&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">12</span><span class="token operator">:</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;冬天蚊子死翘翘&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;月份有误&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环结构-while-do-while-for" tabindex="-1"><a class="header-anchor" href="#循环结构-while-do-while-for" aria-hidden="true">#</a> 循环结构 while do_while for</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
      <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">/*
       * 考试,直到分数过线为止
       * 求1-10整数和 1+10*(10/2) */</span>
      <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">do</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> j<span class="token punctuation">;</span>
        j<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>

      <span class="token keyword">var</span> sum2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> z <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> z<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum2 <span class="token operator">+=</span> z<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>sum2<span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数的使用" tabindex="-1"><a class="header-anchor" href="#函数的使用" aria-hidden="true">#</a> 函数的使用</h2><p>类似于java中的方法,JS中也可以定义一些函数,</p><p>java中的方法签名包含访问: 修饰符,返回值类型,方法名,参数列表,异常列表,但是JS中定义函数的语法相对简单很多,主要以<code>function</code>作为函数关键字,具备<code>函数名</code>和<code>参数列表</code>,但是没有访问修饰符也没有返回值类型关键字和异常列表</p><h3 id="函数定义的三种方式" tabindex="-1"><a class="header-anchor" href="#函数定义的三种方式" aria-hidden="true">#</a> 函数定义的三种方式</h3><p>方式一： 常见</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	  <span class="token comment">/*
	   * 第一种语法格式 常见
	   * function 函数名(参数列表){js代码}
	   * */</span>
	  <span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;你好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token punctuation">}</span>
	  <span class="token comment">// 调用方法</span>
	  <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二： 常见</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	  <span class="token comment">/*
	   * 第二种语法
	   * var 函数名=function(参数列表){JS代码}
	   * 
	   * */</span>
	  <span class="token keyword">var</span> <span class="token function-variable function">fun2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;你很好&quot;</span><span class="token punctuation">)</span>
	  <span class="token punctuation">}</span>
	  <span class="token comment">// 调用方法</span>
	  <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式三： 不常用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	  <span class="token comment">/*
	   * 第三种语法 不常用 了解
	   * var 函数名=new Function(&#39;js代码&#39;)
	   * 
	   * */</span>
	  <span class="token keyword">var</span> fun3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">&#39;alert(&quot;你非常好&quot;);&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token comment">// 调用方法</span>
	  <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数参数和返回值" tabindex="-1"><a class="header-anchor" href="#函数参数和返回值" aria-hidden="true">#</a> 函数参数和返回值</h3><p>传入的实参可以和形参个数不一致</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	  <span class="token comment">/*
	   *
	   * 传入的实参可以和形参个数不一致 
	   * */</span>
	  <span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;a:&quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;b:&quot;</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;c:&quot;</span> <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token punctuation">}</span>

	  <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">&quot;hello js&quot;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token comment">// 少传参数 OK</span>
	  <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token comment">// 多传参数 OK 多出来的参数相当于没传</span>
	  <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">&quot;hello js&quot;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果函数中有返回值,那么直接用return关键字返回即可</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	  <span class="token keyword">function</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> c <span class="token operator">=</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
		<span class="token keyword">return</span> c<span class="token punctuation">;</span>
	  <span class="token punctuation">}</span>

	  <span class="token keyword">var</span> x <span class="token operator">=</span><span class="token function">fun2</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token function">alert</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法本身作为参数(了解)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	  <span class="token comment">// 方法本身作为参数(了解)</span>
	  <span class="token keyword">function</span> <span class="token function">funa</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
	  <span class="token punctuation">}</span>
	  <span class="token keyword">function</span> <span class="token function">funb</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token punctuation">}</span>
	  <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token function">funb</span><span class="token punctuation">(</span>funa<span class="token punctuation">)</span>
	  <span class="token function">alert</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,62),o=[p];function l(c,i){return s(),a("div",null,o)}const d=n(e,[["render",l],["__file","数据类型和运算符.html.vue"]]);export{d as default};
