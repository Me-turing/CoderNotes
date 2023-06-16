<template><div><h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h2>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<p>在本章节我们将学习Java中的IO流的操作，在此之前我们先熟悉两个基本的概念：</p>
<ol>
<li><strong>File类</strong> 封装文件/目录的各种信息，对目录/文件进行操作，但是我们不可以获取到文件/目录中的内容。</li>
<li><strong>IO流</strong> Input/Output的缩写，用于处理设备之间的数据的传输。</li>
</ol>
<p>我们可以理解为，将文件实体读取为FIle类对象，然后使用IO流类似通道一样读取文件中的内容。反之将内容通过IO流写道File类对象中，然后保存到硬盘。</p>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/04_IO/02_IO流/assets/Pasted_image_20230326130237.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="io流的体系结构" tabindex="-1"><a class="header-anchor" href="#io流的体系结构" aria-hidden="true">#</a> IO流的体系结构</h3>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/04_IO/02_IO流/assets/Pasted_image_20230326130326.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>文本文件：.txt .java .c .cpp ---》建议使用字符流操作<br>
非文本文件：.jpg, .mp3 , .mp4 , .doc , .ppt ---》建议使用字节流操作</p>
<h2 id="字符流" tabindex="-1"><a class="header-anchor" href="#字符流" aria-hidden="true">#</a> 字符流</h2>
<h3 id="filereader" tabindex="-1"><a class="header-anchor" href="#filereader" aria-hidden="true">#</a> FileReader</h3>
<h4 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
<th>举例</th>
</tr>
</thead>
<tbody>
<tr>
<td>FileReader(File file);</td>
<td>构造函数，导入指定的File类</td>
<td></td>
</tr>
<tr>
<td>int read()</td>
<td>读取一个字符，返回读取的字符，如果已到达流的末尾则为-1</td>
<td></td>
</tr>
<tr>
<td>int read(char cbuf[])</td>
<td>读取指定长度的字符，返回读取的字符数，如果已到达流的末尾则为-1</td>
<td></td>
</tr>
<tr>
<td>String(char value[], int offset, int count)</td>
<td>分配一个新字符串，该字符串包含字符数组参数的子数组中的字符。offset参数是子数组第一个字符的索引，count参数指定子数组的长度。复制子数组的内容;字符数组的后续修改不会影响新创建的字符串。</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>meturing<span class="token punctuation">.</span>io</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestIO01</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 读取指定char长度的字符，通过String函数转换成str
     * <span class="token keyword">@param</span> <span class="token parameter">args</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"newFile.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileReader</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//缓冲数组</span>
        <span class="token comment">// 按字符读取 如果读取不到则返回-1</span>
        <span class="token keyword">int</span> read <span class="token operator">=</span> fileReader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//一次性读取指定char长度,并返回当前读取的数量</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>read<span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>chars<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> read<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//直接使用String读取char数组</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
            read <span class="token operator">=</span> fileReader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        fileReader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//关闭流</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 读取指定char长度的字符
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"newFile.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileReader</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//缓冲数组</span>
        <span class="token comment">// 按字符读取 如果读取不到则返回-1</span>
        <span class="token keyword">int</span> read <span class="token operator">=</span> fileReader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//一次性读取指定char长度,并返回当前读取的数量</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>read<span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> read<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            read <span class="token operator">=</span> fileReader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        fileReader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//关闭流</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 一个字符一个字符读取
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"newFile.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileReader</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 按字符读取 如果读取不到则返回-1</span>
        <span class="token keyword">int</span> read <span class="token operator">=</span> fileReader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//读取一个字符</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>read<span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>read<span class="token punctuation">)</span><span class="token punctuation">;</span>
            read <span class="token operator">=</span> fileReader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        fileReader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//关闭流</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filewriter" tabindex="-1"><a class="header-anchor" href="#filewriter" aria-hidden="true">#</a> FileWriter</h3>
<h4 id="api-1" tabindex="-1"><a class="header-anchor" href="#api-1" aria-hidden="true">#</a> API</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
<th>举例</th>
</tr>
</thead>
<tbody>
<tr>
<td>FileReader(File file);</td>
<td>构造函数，导入指定的File类</td>
<td></td>
</tr>
<tr>
<td>FileWriter(File file, boolean append)</td>
<td>给定File对象，构造一个FileWriter对象。如果第二个参数为true，则字节将被写入文件的末尾而不是开头</td>
<td></td>
</tr>
<tr>
<td>void write(char cbuf[])</td>
<td>写入字符数组</td>
<td></td>
</tr>
<tr>
<td>void write(String str)</td>
<td>写一个字符串。</td>
<td></td>
</tr>
<tr>
<td>void write(String str, int off, int len)</td>
<td>写入字符串的一部分。 参数: str -一个字符串off -开始写入字符的偏移量len -要写入的字符的数量</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestIO02</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
            <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"Demo.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">FileWriter</span> fileWriter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//默认为false 不执行追加</span>
            
            <span class="token comment">//输出96 -> 、</span>
    <span class="token comment">//        fileWriter.write(96);</span>
    <span class="token comment">//        char[] chars = new char[5];</span>
    <span class="token comment">//        chars[0] = 'a';</span>
    <span class="token comment">//        chars[1] = 'b';</span>
    <span class="token comment">//        chars[2] = 'c';</span>
    <span class="token comment">//        chars[3] = 'd';</span>
    <span class="token comment">//        chars[4] = 'e';</span>
    <span class="token comment">//        fileWriter.write(chars);</span>
            <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">"你好Java"</span><span class="token punctuation">;</span>
            fileWriter<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            fileWriter<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="复制文件" tabindex="-1"><a class="header-anchor" href="#复制文件" aria-hidden="true">#</a> 复制文件</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>meturing<span class="token punctuation">.</span>io</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestIO03</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Stirng</span><span class="token punctuation">></span></span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建复制文件对象</span>
        <span class="token class-name">File</span> fileIn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"Demo.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建输出对象</span>
        <span class="token class-name">File</span> fileOut <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"DemoCopy.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建文件输入流</span>
        <span class="token class-name">FileReader</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span>fileIn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建文件输出流</span>
        <span class="token class-name">FileWriter</span> fileWriter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span>fileOut<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//方式一  一个一个读和写</span>
<span class="token comment">//        int read = fileReader.read();</span>
<span class="token comment">//        while(read!=-1){</span>
<span class="token comment">//            fileWriter.write(read);</span>
<span class="token comment">//            read = fileReader.read();</span>
<span class="token comment">//        }</span>
        <span class="token comment">//方式二 使用数组缓冲</span>
<span class="token comment">//        char[] chars = new char[5];</span>
<span class="token comment">//        int read = fileReader.read(chars);</span>
<span class="token comment">//        while (read!=-1){</span>
<span class="token comment">//            fileWriter.write(chars,0,read);</span>
<span class="token comment">//            read = fileReader.read(chars);</span>
<span class="token comment">//        }</span>
        <span class="token comment">//方式三 直接使用Str输出</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> read <span class="token operator">=</span> fileReader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>read<span class="token operator">!=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>chars<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>read<span class="token punctuation">)</span><span class="token punctuation">;</span>
            fileWriter<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
            read <span class="token operator">=</span> fileReader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//关闭流：从下往上关闭</span>
        fileWriter<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fileReader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字节流" tabindex="-1"><a class="header-anchor" href="#字节流" aria-hidden="true">#</a> 字节流</h3>
<h4 id="fileinputstream" tabindex="-1"><a class="header-anchor" href="#fileinputstream" aria-hidden="true">#</a> FileInputStream</h4>
<h4 id="fileoutputstream" tabindex="-1"><a class="header-anchor" href="#fileoutputstream" aria-hidden="true">#</a> FileOutputStream</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>meturing<span class="token punctuation">.</span>io</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 使用字符流复制
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestIO05</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> fileIn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"Demo.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> fileOut <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"DemoCopy.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileInputStream</span> fileInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>fileIn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileOutputStream</span> fileOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>fileOut<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> read <span class="token operator">=</span> fileInputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>read<span class="token operator">!=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            fileOutputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>read<span class="token punctuation">)</span><span class="token punctuation">;</span>
            read <span class="token operator">=</span> fileInputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        fileOutputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fileInputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 普通一个字节一个字节读取
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Demo01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> fileIn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"Demo.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> fileOut <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"DemoCopy.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileInputStream</span> fileInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>fileIn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileOutputStream</span> fileOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>fileOut<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> read <span class="token operator">=</span> fileInputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>read<span class="token operator">!=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            fileOutputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>read<span class="token punctuation">)</span><span class="token punctuation">;</span>
            read <span class="token operator">=</span> fileInputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        fileOutputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fileInputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符缓冲流" tabindex="-1"><a class="header-anchor" href="#字符缓冲流" aria-hidden="true">#</a> 字符缓冲流</h3>
<h4 id="bufferedreader" tabindex="-1"><a class="header-anchor" href="#bufferedreader" aria-hidden="true">#</a> BufferedReader</h4>
<h4 id="bufferedwriter" tabindex="-1"><a class="header-anchor" href="#bufferedwriter" aria-hidden="true">#</a> BufferedWriter</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 字节缓冲流
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestIO07</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建File对象</span>
        <span class="token class-name">File</span> fileIn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"Demo.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> fileOut <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"DemoCopy.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//构建字节流</span>
        <span class="token class-name">FileReader</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span>fileIn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileWriter</span> fileWriter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span>fileOut<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//字节缓冲流</span>
        <span class="token class-name">BufferedReader</span> bufferedReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>fileReader<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BufferedWriter</span> bufferedWriter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span>fileWriter<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>str<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            bufferedWriter<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
            bufferedWriter<span class="token punctuation">.</span><span class="token function">newLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            str <span class="token operator">=</span> bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字节缓冲流" tabindex="-1"><a class="header-anchor" href="#字节缓冲流" aria-hidden="true">#</a> 字节缓冲流</h3>
<h4 id="bufferedinputstream" tabindex="-1"><a class="header-anchor" href="#bufferedinputstream" aria-hidden="true">#</a> BufferedInputStream</h4>
<h4 id="bufferedoutputstream" tabindex="-1"><a class="header-anchor" href="#bufferedoutputstream" aria-hidden="true">#</a> BufferedOutputStream</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 字节缓冲流
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestIO06</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//构建File</span>
        <span class="token class-name">File</span> fileIn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"Demo.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> fileOut <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"DemoCopy.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建字节流</span>
        <span class="token class-name">FileInputStream</span> fileInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>fileIn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileOutputStream</span> fileOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>fileOut<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//字节缓冲流</span>
        <span class="token class-name">BufferedInputStream</span> bufferedInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span>fileInputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BufferedOutputStream</span> bufferedOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span>fileOutputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> read <span class="token operator">=</span> bufferedInputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>read<span class="token operator">!=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            bufferedOutputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>read<span class="token punctuation">)</span><span class="token punctuation">;</span>
            read <span class="token operator">=</span> bufferedInputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//如果处理流包裹着节点流的话，那么其实只要关闭高级流（处理流），那么里面的字节流也会随之被关闭。</span>
        bufferedOutputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bufferedInputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符转换流" tabindex="-1"><a class="header-anchor" href="#字符转换流" aria-hidden="true">#</a> 字符转换流</h3>
<h4 id="inputstreamreader" tabindex="-1"><a class="header-anchor" href="#inputstreamreader" aria-hidden="true">#</a> InputStreamReader</h4>
<h4 id="outputstreamwriter" tabindex="-1"><a class="header-anchor" href="#outputstreamwriter" aria-hidden="true">#</a> OutputStreamWriter</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>meturing<span class="token punctuation">.</span>io</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 使用字符转换流达到文件复制
 * 、
 * 注意：转换流在使用的时候可以指定编码格式，如果不指定则为当前的程序编码格式一致
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestIO08</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建File对象</span>
        <span class="token class-name">File</span> fileIn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"Demo.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> fileOut <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"DemoCopy.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">FileInputStream</span> fileInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>fileIn<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//字节流</span>
        <span class="token class-name">InputStreamReader</span> inputStreamReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>fileInputStream<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//FileInputStream-> InputStreamReader 字符流</span>
        
        <span class="token class-name">FileOutputStream</span> fileOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>fileOut<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//字节流</span>
        <span class="token class-name">OutputStreamWriter</span> outputStreamWriter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span>fileOutputStream<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//FileOutputStream-> OutputStreamWriter 字符流</span>
        
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> read <span class="token operator">=</span> inputStreamReader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>read<span class="token operator">!=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            outputStreamWriter<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>chars<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>read<span class="token punctuation">)</span><span class="token punctuation">;</span>
            read <span class="token operator">=</span> inputStreamReader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        outputStreamWriter<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        inputStreamReader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scanner扫描器" tabindex="-1"><a class="header-anchor" href="#scanner扫描器" aria-hidden="true">#</a> Scanner扫描器</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * Scanner扫描器
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestIO09</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//简单的额IO输入</span>
<span class="token comment">//        InputStream in = System.in;</span>
<span class="token comment">//        int read = in.read();</span>
<span class="token comment">//        System.out.println(read);</span>
        <span class="token comment">//使用Scanner扫描器</span>
<span class="token comment">//        Scanner scanner = new Scanner(System.in);</span>
<span class="token comment">//        int i = scanner.nextInt();</span>
<span class="token comment">//        System.out.println(i);</span>
        <span class="token comment">//使用扫描器输出流中的数据</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"Demo.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 使用控制台向文件录入信息
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestIO10</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"SystemIn.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileWriter</span> fileWriter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//字符流</span>
        <span class="token class-name">BufferedWriter</span> bufferedWriter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span>fileWriter<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//增强流</span>
        
        <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">;</span><span class="token comment">//字节流</span>
        <span class="token class-name">InputStreamReader</span> inputStreamReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">,</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//字符流</span>
        <span class="token class-name">BufferedReader</span> bufferedReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>inputStreamReader<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//增强流</span>
        
        <span class="token class-name">String</span> str <span class="token operator">=</span> bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>str<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"exit"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            bufferedWriter<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
            bufferedWriter<span class="token punctuation">.</span><span class="token function">newLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            str <span class="token operator">=</span> bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        bufferedReader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bufferedWriter<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字节对象流" tabindex="-1"><a class="header-anchor" href="#字节对象流" aria-hidden="true">#</a> 字节对象流</h3>
<h4 id="objectinputstream" tabindex="-1"><a class="header-anchor" href="#objectinputstream" aria-hidden="true">#</a> ObjectInputStream</h4>
<h4 id="objectoutputstream" tabindex="-1"><a class="header-anchor" href="#objectoutputstream" aria-hidden="true">#</a> ObjectOutputStream</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>meturing<span class="token punctuation">.</span>io</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 对象流
 * 写出的类型跟读入的类型 必须 要匹配！
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestIO11</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> <span class="token string">"DataDemo.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DataOutputStream</span> dataOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataOutputStream<span class="token punctuation">.</span><span class="token function">writeUTF</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataOutputStream<span class="token punctuation">.</span><span class="token function">writeInt</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataOutputStream<span class="token punctuation">.</span><span class="token function">writeBoolean</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataOutputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">DataInputStream</span> dataInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dataInputStream<span class="token punctuation">.</span><span class="token function">readUTF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dataInputStream<span class="token punctuation">.</span><span class="token function">readInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dataInputStream<span class="token punctuation">.</span><span class="token function">readBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataInputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


