<template><div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<p>在Java中对文件或目录的操作，通常是将他转换为File对象，该对象内置了很多处理的方法，以便我们使用。</p>
<p>例如：<strong>File file1 = new File(&quot;D:/新建文件.txt&quot;);</strong>  但是这种写法并不好，因为路径中很容易出现\t之类的转义符</p>
<p>所以推荐使用：<strong>File file2 = new File(&quot;D:&quot;+File.separatorChar+&quot;newTest.txt&quot;);</strong>  其中<code v-pre>File.separatorChar</code>在此自动替换了路径中的特殊符号</p>
<p>盘符上的文件 → 封装为对象 → 对象属于File类的对象 → 有了这个对象，我们程序就可以直接操纵这个对象，通过这个对象获取文件的各种信息，还可以对文件进行创建 ，删除。</p>
<h3 id="文件的操作" tabindex="-1"><a class="header-anchor" href="#文件的操作" aria-hidden="true">#</a> 文件的操作</h3>
<p><strong>File file2 = new File(&quot;D:&quot;+File.separatorChar+&quot;newTest.txt&quot;);</strong>   //将指定文件封装为File对象</p>
<h4 id="常见api" tabindex="-1"><a class="header-anchor" href="#常见api" aria-hidden="true">#</a> 常见API</h4>
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
<td>boolean canRead()</td>
<td>是否可读</td>
<td>System.out.println(&quot;是否可读：&quot;+file2.canRead());</td>
</tr>
<tr>
<td>boolean canWrite()</td>
<td>是否可写</td>
<td>System.out.println(&quot;是否可写：&quot;+file2.canWrite())</td>
</tr>
<tr>
<td>String getName()</td>
<td>文件名字</td>
<td>System.out.println(&quot;文件名字：&quot;+file2.getName());</td>
</tr>
<tr>
<td>String getParent()</td>
<td>上级目录</td>
<td>System.out.println(&quot;上级目录：&quot;+file2.getParent());</td>
</tr>
<tr>
<td>boolean isDirectory()</td>
<td>是否是一个目录</td>
<td>System.out.println(&quot;是否是一个目录：&quot;+file2.isDirectory());</td>
</tr>
<tr>
<td>boolean isFile()</td>
<td>是否是一个文件</td>
<td>System.out.println(&quot;是否是一个文件：&quot;+file2.isFile());</td>
</tr>
<tr>
<td>boolean isHidden()</td>
<td>是否隐藏</td>
<td>System.out.println(&quot;是否隐藏：&quot;+file2.isHidden());</td>
</tr>
<tr>
<td>long length()</td>
<td>文件大小</td>
<td>System.out.println(&quot;文件大小：&quot;+file2.length());</td>
</tr>
<tr>
<td>boolean exists()</td>
<td>文件是否存在</td>
<td>System.out.println(&quot;文件是否存在：&quot;+file2.exists());</td>
</tr>
<tr>
<td>boolean delete()</td>
<td>删除文件</td>
<td>file2.delete();</td>
</tr>
<tr>
<td>file1==file2</td>
<td>比较两个对象的地址</td>
<td>System.out.println(file1==file2);</td>
</tr>
<tr>
<td>file1.equals(file2)</td>
<td>比较两个文件的路径（即是否是同一个文件）</td>
<td>System.out.println(file1.equals(file2));</td>
</tr>
<tr>
<td>String getAbsolutePath()</td>
<td>绝对路径：文件真实的、精准的、完整的路径</td>
<td>System.out.println(&quot;绝对路径：&quot;+file.getAbsolutePath());//E:\AllPerject\IDEAProject\MCA_Demo\JavaSE_Demo\demo.txt</td>
</tr>
<tr>
<td>String getPath()</td>
<td>相对路径：在Main方法中是以当前项目为参照物，在JUNIT中是以当前模块为参照物的相对路径位置</td>
<td>System.out.println(&quot;相对路径：&quot;+file.getPath());<a href="//demo.txt" target="_blank" rel="noopener noreferrer">//demo.txt<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>String toString()</td>
<td>toString，通常就是相对路径</td>
<td>System.out.println(&quot;toString:&quot;+file.toString());<a href="//demo.txt" target="_blank" rel="noopener noreferrer">//demo.txt<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>boolean createNewFile() throws IOException</td>
<td>创建文件</td>
<td>file2.createNewFile();</td>
</tr>
</tbody>
</table>
<h4 id="代码案例" tabindex="-1"><a class="header-anchor" href="#代码案例" aria-hidden="true">#</a> 代码案例</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestFile01</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
            <span class="token doc-comment comment">/**
             * 文件相关的操作
             */</span>
    <span class="token comment">//        File file = new File("D:\\新建文件夹.txt");</span>
            <span class="token class-name">File</span> file1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:/新建文件.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">File</span> file2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span><span class="token operator">+</span><span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar<span class="token operator">+</span><span class="token string">"newTest.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//推荐这种写法</span>
            
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否可读："</span><span class="token operator">+</span>file2<span class="token punctuation">.</span><span class="token function">canRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否可写："</span><span class="token operator">+</span>file2<span class="token punctuation">.</span><span class="token function">canWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件名字："</span><span class="token operator">+</span>file2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"上级目录："</span><span class="token operator">+</span>file2<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否是一个目录："</span><span class="token operator">+</span>file2<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否是一个文件："</span><span class="token operator">+</span>file2<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否隐藏："</span><span class="token operator">+</span>file2<span class="token punctuation">.</span><span class="token function">isHidden</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件大小："</span><span class="token operator">+</span>file2<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件是否存在："</span><span class="token operator">+</span>file2<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token comment">//如果文件存在则删除</span>
    <span class="token comment">//        if (file2.exists()){</span>
    <span class="token comment">//            file2.delete();</span>
    <span class="token comment">//        }else {</span>
    <span class="token comment">//            //不存在则创建</span>
    <span class="token comment">//            file2.createNewFile();</span>
    <span class="token comment">//        }</span>
            <span class="token doc-comment comment">/**
             * 地址相关的操作
             */</span>
            <span class="token comment">//比较两个对象的地址</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file1<span class="token operator">==</span>file2<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//比较两个文件的路径（即是否是同一个文件）</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>file2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"绝对路径："</span><span class="token operator">+</span>file2<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//D:\newTest.txt</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相对路径："</span><span class="token operator">+</span>file2<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//D:\newTest.txt</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"toString:"</span><span class="token operator">+</span>file2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//D:\newTest.txt</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-----------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"demo.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> file<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">////绝对路径指的就是：真实的一个精准的，完整的路径</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"绝对路径："</span><span class="token operator">+</span>file<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//E:\AllPerject\IDEAProject\MCA_Demo\JavaSE_Demo\demo.txt</span>
            <span class="token comment">//相对路径：有一个参照物，相对这个参照物的路径。</span>
            <span class="token comment">//在main方法中，相对位置指的就是：E:\AllPerject\IDEAProject\MCA_Demo\JavaSE_Demo</span>
            <span class="token comment">//在junit的测试方法中，相对路径指的就是模块位置</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相对路径："</span><span class="token operator">+</span>file<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//demo.txt</span>
            <span class="token comment">//toString的效果永远是  相对路径</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"toString:"</span><span class="token operator">+</span>file<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//demo.txt</span>
            
            <span class="token class-name">File</span> file3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"a/b/c/demo.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>file3<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> file3<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"绝对路径："</span><span class="token operator">+</span>file3<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//E:\AllPerject\IDEAProject\MCA_Demo\JavaSE_Demo\a\b\c\demo.txt</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相对路径："</span><span class="token operator">+</span>file3<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//a\b\c\demo.txt</span>
            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录的操作" tabindex="-1"><a class="header-anchor" href="#目录的操作" aria-hidden="true">#</a> 目录的操作</h3>
<p><code v-pre>File file2 = new File(&quot;D:&quot;+File.separatorChar+&quot;IDEA_workspace&quot;);</code>  //将指定目录封装为File对象</p>
<h4 id="常见api-1" tabindex="-1"><a class="header-anchor" href="#常见api-1" aria-hidden="true">#</a> 常见API</h4>
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
<td>boolean canRead()</td>
<td>是否可读</td>
<td>System.out.println(&quot;是否可读：&quot;+file2.canRead());</td>
</tr>
<tr>
<td>boolean canWrite()</td>
<td>是否可写</td>
<td>System.out.println(&quot;是否可写：&quot;+file2.canWrite())</td>
</tr>
<tr>
<td>String getName()</td>
<td>文件名字</td>
<td>System.out.println(&quot;文件名字：&quot;+file2.getName());</td>
</tr>
<tr>
<td>String getParent()</td>
<td>上级目录</td>
<td>System.out.println(&quot;上级目录：&quot;+file2.getParent());</td>
</tr>
<tr>
<td>boolean isDirectory()</td>
<td>是否是一个目录</td>
<td>System.out.println(&quot;是否是一个目录：&quot;+file2.isDirectory());</td>
</tr>
<tr>
<td>boolean isFile()</td>
<td>是否是一个文件</td>
<td>System.out.println(&quot;是否是一个文件：&quot;+file2.isFile());</td>
</tr>
<tr>
<td>boolean isHidden()</td>
<td>是否隐藏</td>
<td>System.out.println(&quot;是否隐藏：&quot;+file2.isHidden());</td>
</tr>
<tr>
<td>long length()</td>
<td>文件大小</td>
<td>System.out.println(&quot;文件大小：&quot;+file2.length());</td>
</tr>
<tr>
<td>boolean exists()</td>
<td>文件是否存在</td>
<td>System.out.println(&quot;文件是否存在：&quot;+file2.exists());</td>
</tr>
<tr>
<td>file1==file2</td>
<td>比较两个对象的地址</td>
<td>System.out.println(file1==file2);</td>
</tr>
<tr>
<td>file1.equals(file2)</td>
<td>比较两个文件的路径（即是否是同一个文件）</td>
<td>System.out.println(file1.equals(file2));</td>
</tr>
<tr>
<td>String getAbsolutePath()</td>
<td>绝对路径：文件真实的、精准的、完整的路径</td>
<td>System.out.println(&quot;绝对路径：&quot;+file2.getAbsolutePath());//E:\AllPerject\IDEAProject\MCA_Demo\JavaSE_Demo\demo.txt</td>
</tr>
<tr>
<td>String getPath()</td>
<td>相对路径：在Main方法中是以当前项目为参照物，在JUNIT中是以当前模块为参照物的相对路径位置</td>
<td>System.out.println(&quot;相对路径：&quot;+file2.getPath());<a href="//demo.txt" target="_blank" rel="noopener noreferrer">//demo.txt<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>String toString()</td>
<td>toString，通常就是相对路径</td>
<td>System.out.println(&quot;toString:&quot;+file2.toString());<a href="//demo.txt" target="_blank" rel="noopener noreferrer">//demo.txt<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>boolean mkdir()</td>
<td>创建单层目录</td>
<td>file2.mkdir();</td>
</tr>
<tr>
<td>boolean mkdirs()</td>
<td>创建多层目录</td>
<td>file2.mkdirs();</td>
</tr>
<tr>
<td>boolean delete()</td>
<td>删除目录：  只会删除一层目录，并且必须为空目录</td>
<td>file2.delete();</td>
</tr>
<tr>
<td>String[] list()</td>
<td>获取指定目录内存在的所有目录或者文件的名字的数组</td>
<td>String[] list = file2.list();</td>
</tr>
<tr>
<td>File[] listFiles()</td>
<td>获取指定目录内存在的所有目录或者文件的File对象数组</td>
<td>File[] files = file2.listFiles();</td>
</tr>
</tbody>
</table>
<h4 id="代码案例-1" tabindex="-1"><a class="header-anchor" href="#代码案例-1" aria-hidden="true">#</a> 代码案例</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> <span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>meturing<span class="token punctuation">.</span>file</span><span class="token punctuation">;</span>
    
    <span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 对目录开始操作
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestFile02</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//将目录封装为File类的对象：</span>
            <span class="token class-name">File</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:\\IDEA_workspace"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件是否可读："</span><span class="token operator">+</span>f<span class="token punctuation">.</span><span class="token function">canRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件是否可写："</span><span class="token operator">+</span>f<span class="token punctuation">.</span><span class="token function">canWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件的名字："</span><span class="token operator">+</span>f<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"上级目录："</span><span class="token operator">+</span>f<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否是一个目录："</span><span class="token operator">+</span>f<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否是一个文件："</span><span class="token operator">+</span>f<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否隐藏："</span><span class="token operator">+</span>f<span class="token punctuation">.</span><span class="token function">isHidden</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件的大小："</span><span class="token operator">+</span>f<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否存在："</span><span class="token operator">+</span>f<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"绝对路径："</span><span class="token operator">+</span>f<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相对路径："</span><span class="token operator">+</span>f<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"toString:"</span><span class="token operator">+</span>f<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token comment">//目录特有的属性</span>
            <span class="token class-name">File</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span><span class="token operator">+</span><span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar<span class="token operator">+</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            a<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建单层目录</span>
            <span class="token class-name">File</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:"</span><span class="token operator">+</span><span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar<span class="token operator">+</span><span class="token string">"a"</span><span class="token operator">+</span><span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar<span class="token operator">+</span><span class="token string">"b"</span><span class="token operator">+</span><span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar<span class="token operator">+</span><span class="token string">"c"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            b<span class="token punctuation">.</span><span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建多层目录</span>
            
            b<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//删除  如果删除目录的话，只会删除一层目录，并且必须为空目录</span>
            
            <span class="token comment">//获取指定目录内存在的所有目录或者文件的名字的数组</span>
            <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> list <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
            <span class="token comment">//获取指定目录内存在的所有目录或者文件的File对象数组</span>
            <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> files <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> file <span class="token operator">:</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"当前的名字："</span><span class="token operator">+</span>file<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"\t当前的绝对路径"</span><span class="token operator">+</span>file<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


