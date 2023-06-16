<template><div><h2 id="_1-认识markdown" tabindex="-1"><a class="header-anchor" href="#_1-认识markdown" aria-hidden="true">#</a> 1. 认识Markdown</h2>
<p>简单易用的<strong>写作语法</strong>,目标:<strong>易读易写</strong><br>
用简单的<strong>符号</strong>,定义常用的<strong>排版样式</strong></p>
<hr>
<h2 id="_2-使用markdown" tabindex="-1"><a class="header-anchor" href="#_2-使用markdown" aria-hidden="true">#</a> 2. 使用Markdown</h2>
<p>^1d499b</p>
<h3 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h3>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code># 标题一
## 标题二
### 标题三
#### 标题四
##### 标题五
###### 标题六
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加粗-斜体-删除" tabindex="-1"><a class="header-anchor" href="#加粗-斜体-删除" aria-hidden="true">#</a> 加粗/斜体/删除</h3>
<p><strong>加粗</strong><br>
<em>斜体</em><br>
<s>删除</s></p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>**加粗**
*斜体*
~~删除~~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h3>
<ol>
<li>aa
<ol>
<li>aaa
<ol>
<li>aaaa</li>
</ol>
</li>
</ol>
</li>
<li>bb
<ol>
<li>bb</li>
</ol>
</li>
<li>cc</li>
</ol>
<ul>
<li>11
<ul>
<li>111
<ul>
<li>1111</li>
</ul>
</li>
</ul>
</li>
<li>22</li>
<li>33</li>
</ul>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code> 有序列表: 数字+.+空格
 无序列表: *+空格 或者 -+空格

table 键可以控制缩进
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h3>
<p>使用 <code v-pre>&gt;</code> 表示，可以有多个 <code v-pre>&gt;</code>，表示层级更深</p>
<blockquote>
<p>引用的内容</p>
<blockquote>
<p>啊啊啊</p>
</blockquote>
</blockquote>
<p>^c83780</p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code> > + 内容
 >> + 内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h3>
<h4 id="内联超链接" tabindex="-1"><a class="header-anchor" href="#内联超链接" aria-hidden="true">#</a> 内联超链接</h4>
<p><a href="https://www.baidu.com" title="百度" target="_blank" rel="noopener noreferrer">这里是链接<ExternalLinkIcon/></a></p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>[显示的文字](链接的地址)
[链接文字](链接地址+空格+"文字说明")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自动超链接" tabindex="-1"><a class="header-anchor" href="#自动超链接" aria-hidden="true">#</a> 自动超链接</h4>
<p><a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">https://www.baidu.com<ExternalLinkIcon/></a></p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>&lt;超链接地址>
&lt;https://www.baiud.com>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h3>
<figure><img src="https://www.baidu.com/img/flexible/logo/pc/result.png" alt="百度" tabindex="0" loading="lazy"><figcaption>百度Logo</figcaption></figure>
<figure><a href="https://www.baidu.com/" target="_blank" rel="noopener noreferrer"><img src="https://www.baidu.com/img/flexible/logo/pc/result.png" alt="百度" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>百度Logo</figcaption></figure>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>一般图片的使用:
![图片文字](图片地址+空格+"文字说明")

带链接的图片使用:
[![图片文字](图片地址+空格+"文字说明")](链接地址)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<h4 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>` ` ` 语言格式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="行内代码块" tabindex="-1"><a class="header-anchor" href="#行内代码块" aria-hidden="true">#</a> 行内代码块</h4>
<p>这个是<code v-pre>行内代码</code><br>
<code v-pre> There is a literal backtick (`) here.</code></p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>	这个是``行内代码``
	`` There is a literal backtick (`) here.``
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代办" tabindex="-1"><a class="header-anchor" href="#代办" aria-hidden="true">#</a> 代办</h3>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 待办事项</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 已完成</label></li>
</ul>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>- [ ] 待办事项
- [x] 已完成事项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h3>
<ul>
<li>第一个部分是表格的标题，使用<code v-pre>|</code>来作为列的分割</li>
<li>第二个部分是表示列的对齐方式，有左对齐、居中对齐和居右对齐三种类型，直接看例子吧， <code v-pre>---</code> 表示了默认的<strong>左对齐</strong>，
<ul>
<li><code v-pre>:---</code> 表示 <strong>左对齐</strong></li>
<li><code v-pre>---:</code> 表示 <strong>右对齐</strong></li>
<li><code v-pre>:---:</code> 表示<strong>居中对齐</strong></li>
</ul>
</li>
<li>第三个部分就是内容了，表示方式跟标题一样，可以有多行</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">左对齐</th>
<th style="text-align:center">居中</th>
<th style="text-align:right">右对齐</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">居左</td>
<td style="text-align:center">居中</td>
<td style="text-align:right">局右</td>
</tr>
</tbody>
</table>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>|左对齐|居中|右对齐|
|:---|:---:|---:|
|居左|居中|局右|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h3>
<p>在文档末尾写上<code v-pre>[</code>+<code v-pre>^+数字</code>+<code v-pre>]:</code>+文字内容 声明一个脚注 ^jiaozhu</p>
<p>该方法根据实验证明有效<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
<h3 id="输出公式" tabindex="-1"><a class="header-anchor" href="#输出公式" aria-hidden="true">#</a> 输出公式</h3>
<p>使用 <code v-pre>$</code> 表示，其中一个 <code v-pre>$</code> 表示在行内，两个 <code v-pre>$</code> 表示独占一行。<br>
<a href="https://1024th.github.io/MathJax_Tutorial_CN" target="_blank" rel="noopener noreferrer">参考教程<ExternalLinkIcon/></a><br>
<a href="https://www.latexlive.com" target="_blank" rel="noopener noreferrer">数学公式在线编译<ExternalLinkIcon/></a></p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>e</mi><mi>g</mi><mo>:</mo><mo>∑</mo><mi>i</mi><mo>=</mo><mn>1</mn><mi>n</mi><mi>a</mi><mi>i</mi><mo>=</mo><mn>0</mn><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mo>∑</mo><mi>i</mi><mo>=</mo><mn>1</mn><mi>n</mi><mi>a</mi><mi>i</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">
eg : ∑ i = 1 n a i = 0 \sum_{i=1}^n a_i=0∑i=1nai=0
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">e</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.6em;vertical-align:-0.55em;"></span><span class="mop op-symbol large-op" style="position:relative;top:0em;">∑</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord">1</span><span class="mord mathnormal">nai</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.9291em;vertical-align:-1.2777em;"></span><span class="mord">0</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.6em;vertical-align:-0.55em;"></span><span class="mord">0</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop op-symbol large-op" style="position:relative;top:0em;">∑</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord">1</span><span class="mord mathnormal">nai</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span></span></p>
<h3 id="输出流程图" tabindex="-1"><a class="header-anchor" href="#输出流程图" aria-hidden="true">#</a> 输出流程图</h3>
<p><a href="https://mermaid-js.github.io/mermaid/#/README" target="_blank" rel="noopener noreferrer">mermaid文档<ExternalLinkIcon/></a></p>
<p><a href="https://mermaid-js.github.io/mermaid-live-editor" target="_blank" rel="noopener noreferrer">mermaid在线编辑器<ExternalLinkIcon/></a></p>
<figure><img src="@source/doc/01_JavaSE阶段/C_开发必备工具/04_Obsidian/02_MarkDown/assets/image-20230615204946929.png" alt="流程图" tabindex="0" loading="lazy"><figcaption>流程图</figcaption></figure>
<p>相关代码：mermaid语言</p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>sequenceDiagram
  Alice->>John: Hello John, how are you?
  loop Healthcheck
  John->>John: Fight against hypochondria
  end
  Note right of John: Rational thoughts!
  John-->>Alice: Great!
  John->>Bob: How about you?
  Bob-->>John: Jolly good!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html样式" tabindex="-1"><a class="header-anchor" href="#html样式" aria-hidden="true">#</a> Html样式</h2>
<h3 id="文字样式" tabindex="-1"><a class="header-anchor" href="#文字样式" aria-hidden="true">#</a> 文字样式</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>加粗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>加粗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">></span></span>倾斜<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">></span></span>倾斜<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u</span><span class="token punctuation">></span></span>下划线<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>u</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ins</span><span class="token punctuation">></span></span>下划线<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ins</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s</span><span class="token punctuation">></span></span>删除线<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>del</span><span class="token punctuation">></span></span>删除线<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>del</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sub</span><span class="token punctuation">></span></span>下标<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sub</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sup</span><span class="token punctuation">></span></span>上标<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="style样式" tabindex="-1"><a class="header-anchor" href="#style样式" aria-hidden="true">#</a> style样式</h2>
<p><b style='font-size:80px; color:red'>加粗</b></p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>&lt;b style='font-size:80px; color:red'>加粗&lt;/b>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="超链接" tabindex="-1"><a class="header-anchor" href="#超链接" aria-hidden="true">#</a> 超链接</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.baidu.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>百度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>文章链接 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


