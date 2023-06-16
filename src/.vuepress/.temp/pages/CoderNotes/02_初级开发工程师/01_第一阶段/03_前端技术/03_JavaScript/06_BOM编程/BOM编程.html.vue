<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<h3 id="认识bom和dom" tabindex="-1"><a class="header-anchor" href="#认识bom和dom" aria-hidden="true">#</a> 认识BOM和DOM</h3>
<h4 id="什么是bom" tabindex="-1"><a class="header-anchor" href="#什么是bom" aria-hidden="true">#</a> 什么是BOM</h4>
<p>BOM是<strong>B</strong>rowser<strong>O</strong>bject <strong>M</strong>odel的简写，即浏览器对象模型。</p>
<p>BOM有一系列对象组成，是访问、控制、修改浏览器的属性的方法<br>
BOM没有统一的标准(每种客户端都可以自定标准)。<br>
BOM的顶层是window对象</p>
<h4 id="什么是dom" tabindex="-1"><a class="header-anchor" href="#什么是dom" aria-hidden="true">#</a> 什么是DOM</h4>
<p>DOM是<strong>D</strong>ocument<strong>O</strong>bject <strong>M</strong>odel的简写，即文档对象模型。</p>
<p>DOM用于XHTML、XML文档的应用程序接口(API)。<br>
DOM提供一种结构化的文档描述方式，从而使HTML内容使用结构化的方式显示。<br>
DOM由一系列对象组成，是访问、检索、修改XHTML文档内容与结构的标准方法。<br>
DOM标准是由w3c制定与维护。DOM是跨平台与跨语言的。<br>
DOM的顶层是document对象<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/03_前端技术/03_JavaScript/06_BOM编程/image/image_7V7HSeUzUl.png" alt="" loading="lazy"></p>
<p>在上图中 , <strong>红色框内是归DOM</strong>，<strong>绿色框内归BOM</strong>；也可以说<strong>DOM也是归BOM管的</strong></p>
<h3 id="bom与dom的关系" tabindex="-1"><a class="header-anchor" href="#bom与dom的关系" aria-hidden="true">#</a> BOM与DOM的关系</h3>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/03_前端技术/03_JavaScript/06_BOM编程/image/image_QzGEZPyGVP.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>BOM编程</strong>  就是把整个浏览器抽象成一个对象(window),这个对象中有很多的属性和方法,访问这些属性或者调用这些方法就可以控制浏览器作出指定的行为 ;  <strong>BOM 是为了操作浏览器出现的 API，window 是其根对象</strong></p>
<p><strong>DOM编程`</strong>  就是把浏览器当前页面对应的文档抽象成一个对象(document),这个对象中有很多关于操作文档的一些属性和方法,访问这些属性和方法的时候,我们就可以通过代码动态控制页面上显示的内容;   <strong>DOM 是为了操作文档出现的 API，document 是其根对象</strong></p>
<h2 id="window对象及常用方法" tabindex="-1"><a class="header-anchor" href="#window对象及常用方法" aria-hidden="true">#</a> Window对象及常用方法</h2>
<h3 id="什么是window对象" tabindex="-1"><a class="header-anchor" href="#什么是window对象" aria-hidden="true">#</a> 什么是Window对象</h3>
<p>Window 对象简单理解就是把浏览器抽象成一个对象,它表示一个浏览器窗口或一个框架。</p>
<p>在客户端 JavaScript中 ，<strong>Window 对象是全局对象，所有的表达式都在当前的环境中计算</strong>。也就是说，要引用当前窗口根本不需要特殊的语法，可以把那个窗口的属性作为全局变量来使用。例如，可以只写<code v-pre>document</code>，而不必写 <code v-pre>window.document</code>。同样，可以把当前窗口对象的方法当作函数来使用，如只写<code v-pre>alert()</code>，而不必写 <code v-pre>Window.alert()</code></p>
<p>除了上面列出的属性和方法，<strong>Window 对象还实现了核心 JavaScript 所定义的所有全局属性和方法</strong>。Window 对象的 <code v-pre>window </code>属性和 <code v-pre>self </code>属性引用的都是它自己。当你想明确地引用当前窗口，而不仅仅是隐式地引用它时，可以使用这两个属性。除了这两个属性之外，<code v-pre>parent </code>属性、<code v-pre>top </code>属性以及<code v-pre>frame[]</code>数组都引用了与当前<code v-pre> Window 对象</code>相关的其他 <code v-pre>Window对象</code>。</p>
<h3 id="window对象属性" tabindex="-1"><a class="header-anchor" href="#window对象属性" aria-hidden="true">#</a> Window对象属性</h3>
<table>
<thead>
<tr>
<th><strong>属性</strong></th>
<th><strong>描述</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-closed.html" title="closed" target="_blank" rel="noopener noreferrer">closed<ExternalLinkIcon/></a></td>
<td>返回窗口是否已被关闭。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-defaultstatus.html" title="defaultStatus" target="_blank" rel="noopener noreferrer">defaultStatus<ExternalLinkIcon/></a></td>
<td>设置或返回窗口状态栏中的默认文本。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/dom-obj-document.html" title="document" target="_blank" rel="noopener noreferrer">document<ExternalLinkIcon/></a></td>
<td>对 Document 对象的只读引用。(请参阅<a href="https://www.runoob.com/jsref/dom-obj-document.html" title="对象" target="_blank" rel="noopener noreferrer">对象<ExternalLinkIcon/></a>)</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-frames.html" title="frames" target="_blank" rel="noopener noreferrer">frames<ExternalLinkIcon/></a></td>
<td>返回窗口中所有命名的框架。该集合是 Window 对象的数组，每个 Window 对象在窗口中含有一个框架。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/obj-history.html" title="history" target="_blank" rel="noopener noreferrer">history<ExternalLinkIcon/></a></td>
<td>对 History 对象的只读引用。请参数 <a href="https://www.runoob.com/jsref/obj-history.html" title="History 对象" target="_blank" rel="noopener noreferrer">History 对象<ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-innerheight.html" title="innerHeight" target="_blank" rel="noopener noreferrer">innerHeight<ExternalLinkIcon/></a></td>
<td>返回窗口的文档显示区的高度。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-innerheight.html" title="innerWidth" target="_blank" rel="noopener noreferrer">innerWidth<ExternalLinkIcon/></a></td>
<td>返回窗口的文档显示区的宽度。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-localstorage.html" title="localStorage" target="_blank" rel="noopener noreferrer">localStorage<ExternalLinkIcon/></a></td>
<td>在浏览器中存储 key/value 对。没有过期时间。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-length.html" title="length" target="_blank" rel="noopener noreferrer">length<ExternalLinkIcon/></a></td>
<td>设置或返回窗口中的框架数量。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/obj-location.html" title="location" target="_blank" rel="noopener noreferrer">location<ExternalLinkIcon/></a></td>
<td>用于窗口或框架的 Location 对象。请参阅 <a href="https://www.runoob.com/jsref/obj-location.html" title="Location 对象" target="_blank" rel="noopener noreferrer">Location 对象<ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-name.html" title="name" target="_blank" rel="noopener noreferrer">name<ExternalLinkIcon/></a></td>
<td>设置或返回窗口的名称。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/obj-navigator.html" title="navigator" target="_blank" rel="noopener noreferrer">navigator<ExternalLinkIcon/></a></td>
<td>对 Navigator 对象的只读引用。请参数 <a href="https://www.runoob.com/jsref/obj-navigator.html" title="Navigator 对象" target="_blank" rel="noopener noreferrer">Navigator 对象<ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-opener.html" title="opener" target="_blank" rel="noopener noreferrer">opener<ExternalLinkIcon/></a></td>
<td>返回对创建此窗口的窗口的引用。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-outerheight.html" title="outerHeight" target="_blank" rel="noopener noreferrer">outerHeight<ExternalLinkIcon/></a></td>
<td>返回窗口的外部高度，包含工具条与滚动条。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-outerheight.html" title="outerWidth" target="_blank" rel="noopener noreferrer">outerWidth<ExternalLinkIcon/></a></td>
<td>返回窗口的外部宽度，包含工具条与滚动条。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-pagexoffset.html" title="pageXOffset" target="_blank" rel="noopener noreferrer">pageXOffset<ExternalLinkIcon/></a></td>
<td>设置或返回当前页面相对于窗口显示区左上角的 X 位置。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-pagexoffset.html" title="pageYOffset" target="_blank" rel="noopener noreferrer">pageYOffset<ExternalLinkIcon/></a></td>
<td>设置或返回当前页面相对于窗口显示区左上角的 Y 位置。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-parent.html" title="parent" target="_blank" rel="noopener noreferrer">parent<ExternalLinkIcon/></a></td>
<td>返回父窗口。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/obj-screen.html" title="screen" target="_blank" rel="noopener noreferrer">screen<ExternalLinkIcon/></a></td>
<td>对 Screen 对象的只读引用。请参数 <a href="https://www.runoob.com/jsref/obj-screen.html" title="Screen 对象" target="_blank" rel="noopener noreferrer">Screen 对象<ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-screenleft.html" title="screenLeft" target="_blank" rel="noopener noreferrer">screenLeft<ExternalLinkIcon/></a></td>
<td>返回相对于屏幕窗口的x坐标</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-screenleft.html" title="screenTop" target="_blank" rel="noopener noreferrer">screenTop<ExternalLinkIcon/></a></td>
<td>返回相对于屏幕窗口的y坐标</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-screenx.html" title="screenX" target="_blank" rel="noopener noreferrer">screenX<ExternalLinkIcon/></a></td>
<td>返回相对于屏幕窗口的x坐标</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-sessionstorage.html" title="sessionStorage" target="_blank" rel="noopener noreferrer">sessionStorage<ExternalLinkIcon/></a></td>
<td>在浏览器中存储 key/value 对。 在关闭窗口或标签页之后将会删除这些数据。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-screenx.html" title="screenY" target="_blank" rel="noopener noreferrer">screenY<ExternalLinkIcon/></a></td>
<td>返回相对于屏幕窗口的y坐标</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-self.html" title="self" target="_blank" rel="noopener noreferrer">self<ExternalLinkIcon/></a></td>
<td>返回对当前窗口的引用。等价于 Window 属性。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-status.html" title="status" target="_blank" rel="noopener noreferrer">status<ExternalLinkIcon/></a></td>
<td>设置窗口状态栏的文本。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/prop-win-top.html" title="top" target="_blank" rel="noopener noreferrer">top<ExternalLinkIcon/></a></td>
<td>返回最顶层的父窗口。</td>
</tr>
</tbody>
</table>
<h3 id="window对象方法" tabindex="-1"><a class="header-anchor" href="#window对象方法" aria-hidden="true">#</a> Window对象方法</h3>
<table>
<thead>
<tr>
<th><strong>方法</strong></th>
<th><strong>描述</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-alert.html" title="alert()" target="_blank" rel="noopener noreferrer">alert()<ExternalLinkIcon/></a></td>
<td>显示带有一段消息和一个确认按钮的警告框。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-atob.html" title="atob()" target="_blank" rel="noopener noreferrer">atob()<ExternalLinkIcon/></a></td>
<td>解码一个 base-64 编码的字符串。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-btoa.html" title="btoa()" target="_blank" rel="noopener noreferrer">btoa()<ExternalLinkIcon/></a></td>
<td>创建一个 base-64 编码的字符串。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-blur.html" title="blur()" target="_blank" rel="noopener noreferrer">blur()<ExternalLinkIcon/></a></td>
<td>把键盘焦点从顶层窗口移开。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-clearinterval.html" title="clearInterval()" target="_blank" rel="noopener noreferrer">clearInterval()<ExternalLinkIcon/></a></td>
<td>取消由 setInterval() 设置的 timeout。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-cleartimeout.html" title="clearTimeout()" target="_blank" rel="noopener noreferrer">clearTimeout()<ExternalLinkIcon/></a></td>
<td>取消由 setTimeout() 方法设置的 timeout。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-close.html" title="close()" target="_blank" rel="noopener noreferrer">close()<ExternalLinkIcon/></a></td>
<td>关闭浏览器窗口。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-confirm.html" title="confirm()" target="_blank" rel="noopener noreferrer">confirm()<ExternalLinkIcon/></a></td>
<td>显示带有一段消息以及确认按钮和取消按钮的对话框。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-createpopup.html" title="createPopup()" target="_blank" rel="noopener noreferrer">createPopup()<ExternalLinkIcon/></a></td>
<td>创建一个 pop-up 窗口。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-focus.html" title="focus()" target="_blank" rel="noopener noreferrer">focus()<ExternalLinkIcon/></a></td>
<td>把键盘焦点给予一个窗口。</td>
</tr>
<tr>
<td>getSelection()</td>
<td>返回一个 Selection 对象，表示用户选择的文本范围或光标的当前位置。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/jsref-getcomputedstyle.html" title="getComputedStyle()" target="_blank" rel="noopener noreferrer">getComputedStyle()<ExternalLinkIcon/></a></td>
<td>获取指定元素的 CSS 样式。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-matchmedia.html" title="matchMedia()" target="_blank" rel="noopener noreferrer">matchMedia()<ExternalLinkIcon/></a></td>
<td>该方法用来检查 media query 语句，它返回一个 MediaQueryList对象。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-moveby.html" title="moveBy()" target="_blank" rel="noopener noreferrer">moveBy()<ExternalLinkIcon/></a></td>
<td>可相对窗口的当前坐标把它移动指定的像素。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-moveto.html" title="moveTo()" target="_blank" rel="noopener noreferrer">moveTo()<ExternalLinkIcon/></a></td>
<td>把窗口的左上角移动到一个指定的坐标。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-open.html" title="open()" target="_blank" rel="noopener noreferrer">open()<ExternalLinkIcon/></a></td>
<td>打开一个新的浏览器窗口或查找一个已命名的窗口。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-print.html" title="print()" target="_blank" rel="noopener noreferrer">print()<ExternalLinkIcon/></a></td>
<td>打印当前窗口的内容。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-prompt.html" title="prompt()" target="_blank" rel="noopener noreferrer">prompt()<ExternalLinkIcon/></a></td>
<td>显示可提示用户输入的对话框。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-resizeby.html" title="resizeBy()" target="_blank" rel="noopener noreferrer">resizeBy()<ExternalLinkIcon/></a></td>
<td>按照指定的像素调整窗口的大小。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-resizeto.html" title="resizeTo()" target="_blank" rel="noopener noreferrer">resizeTo()<ExternalLinkIcon/></a></td>
<td>把窗口的大小调整到指定的宽度和高度。</td>
</tr>
<tr>
<td>scroll()</td>
<td>已废弃。 该方法已经使用了 <a href="https://www.runoob.com/jsref/met-win-scrollto.html" title="scrollTo()" target="_blank" rel="noopener noreferrer">scrollTo()<ExternalLinkIcon/></a> 方法来替代。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-scrollby.html" title="scrollBy()" target="_blank" rel="noopener noreferrer">scrollBy()<ExternalLinkIcon/></a></td>
<td>按照指定的像素值来滚动内容。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-scrollto.html" title="scrollTo()" target="_blank" rel="noopener noreferrer">scrollTo()<ExternalLinkIcon/></a></td>
<td>把内容滚动到指定的坐标。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-setinterval.html" title="setInterval()" target="_blank" rel="noopener noreferrer">setInterval()<ExternalLinkIcon/></a></td>
<td>按照指定的周期（以毫秒计）来调用函数或计算表达式。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-settimeout.html" title="setTimeout()" target="_blank" rel="noopener noreferrer">setTimeout()<ExternalLinkIcon/></a></td>
<td>在指定的毫秒数后调用函数或计算表达式。</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/jsref/met-win-stop.html" title="stop()" target="_blank" rel="noopener noreferrer">stop()<ExternalLinkIcon/></a></td>
<td>停止页面载入。</td>
</tr>
</tbody>
</table>
<h3 id="window弹窗" tabindex="-1"><a class="header-anchor" href="#window弹窗" aria-hidden="true">#</a> Window弹窗</h3>
<h4 id="普通弹窗" tabindex="-1"><a class="header-anchor" href="#普通弹窗" aria-hidden="true">#</a> 普通弹窗</h4>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/03_前端技术/03_JavaScript/06_BOM编程/image/image_MFl_nPqZcq.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
         * 如果是使用window对象调用的方法和访问的属性 那么window对象都可以省略不写
         * 
         * */</span>
        window<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"你好呀"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//普通信息提示框</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>测试按钮<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="确认弹窗" tabindex="-1"><a class="header-anchor" href="#确认弹窗" aria-hidden="true">#</a> 确认弹窗</h4>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/03_前端技术/03_JavaScript/06_BOM编程/image/image_bcipxZqgK-.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
         * 如果是使用window对象调用的方法和访问的属性 那么window对象都可以省略不写
         * 
         * */</span>
        <span class="token keyword">var</span> con <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">"确定要删除***女友吗?"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 确认框</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>测试按钮<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="消息输入弹窗" tabindex="-1"><a class="header-anchor" href="#消息输入弹窗" aria-hidden="true">#</a> 消息输入弹窗</h4>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/03_前端技术/03_JavaScript/06_BOM编程/image/image_LsJzfNlifc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
         * 如果是使用window对象调用的方法和访问的属性 那么window对象都可以省略不写
         * 
         * */</span>
        <span class="token keyword">var</span> message <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">"请输入3号女友的名字"</span><span class="token punctuation">,</span> <span class="token string">"例如:小刚"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 信息输入框</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>测试按钮<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定时器" tabindex="-1"><a class="header-anchor" href="#定时器" aria-hidden="true">#</a> 定时器</h3>
<h4 id="循环执行任务" tabindex="-1"><a class="header-anchor" href="#循环执行任务" aria-hidden="true">#</a> 循环执行任务</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">var</span> intervalIDS <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1,2,3 ]</span>
      <span class="token comment">// 循环执行的定时器任务</span>
      <span class="token keyword">function</span> <span class="token function">startInterval</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 2</span>
        <span class="token keyword">var</span> intervalID <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">setInterval</span><span class="token punctuation">(</span>
          <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> today <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> hours <span class="token operator">=</span> today<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> minutes <span class="token operator">=</span> today<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> seconds <span class="token operator">=</span> today<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> str <span class="token operator">=</span> hours <span class="token operator">+</span> <span class="token string">"点"</span> <span class="token operator">+</span> minutes <span class="token operator">+</span> <span class="token string">"分"</span> <span class="token operator">+</span> seconds <span class="token operator">+</span> <span class="token string">"秒"</span><span class="token punctuation">;</span>

            <span class="token keyword">var</span> ta <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"timeArea"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ta<span class="token punctuation">.</span>value <span class="token operator">=</span> str<span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token number">1000</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        intervalIDS<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>intervalID<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">stopInterval</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>intervalIDS<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          window<span class="token punctuation">.</span><span class="token function">clearInterval</span><span class="token punctuation">(</span>intervalIDS<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>timeArea<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>开始Interval<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">startInterval</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>结束Interval<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">stopInterval</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="执行一次任务" tabindex="-1"><a class="header-anchor" href="#执行一次任务" aria-hidden="true">#</a> 执行一次任务</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">var</span> timeoutIDS <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 执行一次的定时器任务</span>
      <span class="token keyword">function</span> <span class="token function">startTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> timeoutID <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span>
          <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> today <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> hours <span class="token operator">=</span> today<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> minutes <span class="token operator">=</span> today<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> seconds <span class="token operator">=</span> today<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> str <span class="token operator">=</span> hours <span class="token operator">+</span> <span class="token string">"点"</span> <span class="token operator">+</span> minutes <span class="token operator">+</span> <span class="token string">"分"</span> <span class="token operator">+</span> seconds <span class="token operator">+</span> <span class="token string">"秒"</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>

          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token number">5000</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        timeoutIDS<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>timeoutID<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">stopTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>timeoutIDS<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          window<span class="token punctuation">.</span><span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeoutIDS<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>timeArea<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>开始timeout<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">startTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>结束timeout<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">stopTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="open与close方法" tabindex="-1"><a class="header-anchor" href="#open与close方法" aria-hidden="true">#</a> open与<strong>close</strong>方法</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"https://www.baidu.com"</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>打开百度<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>关闭页面<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bom中其他对象" tabindex="-1"><a class="header-anchor" href="#bom中其他对象" aria-hidden="true">#</a> BOM中其他对象</h2>
<h3 id="location对象" tabindex="-1"><a class="header-anchor" href="#location对象" aria-hidden="true">#</a> location对象</h3>
<p>location对象,是window对象的一个属性,<strong>代表浏览器上URL地址栏</strong>,使用location对象可以操作地址栏 </p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当前地址栏中的:服务器的IP+端口号</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>hostname<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当前地址栏中的:IP </span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当前地址栏中的:端口号</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当前地址栏中的:地址栏中具体的文字</span>

        location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">"https://www.baidu.com"</span> <span class="token comment">//跳转到指定地址</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>测试location<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="history对象" tabindex="-1"><a class="header-anchor" href="#history对象" aria-hidden="true">#</a> history对象</h3>
<p>history对象是window对象的一个属性,<strong>代表浏览器访问历史记录</strong>,通过history的操作我们可以实现翻阅浏览器历史网页 </p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">//上一页</span>
      <span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      
      <span class="token comment">//下一页</span>
      <span class="token keyword">function</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">//跳转</span>
      <span class="token keyword">function</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正整数 向前跳转 * 页  负整数 向后跳转*页</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a.html<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_self<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>pageA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>向前<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>向后<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>go<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="screen对象和navigator对象" tabindex="-1"><a class="header-anchor" href="#screen对象和navigator对象" aria-hidden="true">#</a> screen对象和navigator对象</h3>
<p><strong>screen代表屏幕</strong> , <strong>navigator代表浏览器软件本身</strong>,通过这两个对象可以获得屏幕和浏览器软件的一些信息</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token comment">//当前屏幕宽度</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token comment">//当前屏幕高度</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token comment">//浏览器信息</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>appName<span class="token punctuation">)</span><span class="token comment">//浏览器名称</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token special-attr"><span class="token attr-name">onload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


