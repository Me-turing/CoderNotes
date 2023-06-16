<template><div><h2 id="常用命令预览" tabindex="-1"><a class="header-anchor" href="#常用命令预览" aria-hidden="true">#</a> 常用命令预览</h2>
<table>
<thead>
<tr>
<th>命令名称
</th>
<th>命令作用
</th>
</tr>
</thead>
<tbody>
<tr>
<td>git init
</td>
<td>初始化本地库
</td>
</tr>
<tr>
<td>git config --global <a href="http://user.name" target="_blank" rel="noopener noreferrer">user.name<ExternalLinkIcon/></a> 用户名
</td>
<td>设置用户签名的用户名部分
</td>
</tr>
<tr>
<td>git config --global user.email 邮箱
</td>
<td>设置用户签名的邮箱部分
</td>
</tr>
<tr>
<td>git status
</td>
<td>查看本地库状态
</td>
</tr>
<tr>
<td>git add 文件名
</td>
<td>添加到暂存区
</td>
</tr>
<tr>
<td>git commit -m &quot;日志信息&quot; 文件名
</td>
<td>提交到本地库
</td>
</tr>
<tr>
<td>git reflog
</td>
<td>查看历史记录
</td>
</tr>
<tr>
<td>git reset --hard 版本号
</td>
<td>版本穿梭
</td>
</tr>
</tbody>
</table>
<h3 id="初始化版本库" tabindex="-1"><a class="header-anchor" href="#初始化版本库" aria-hidden="true">#</a> 初始化版本库</h3>
<p>初始化: <code v-pre>git init</code></p>
<ul>
<li>查看当前目录产生.git隐藏文件夹</li>
<li>注意：当前的 .git 是一个隐藏文件夹，需要在电脑上面设置隐藏文件夹显示设置，否则，看不到这个.git目录</li>
</ul>
<h3 id="新建提交状态" tabindex="-1"><a class="header-anchor" href="#新建提交状态" aria-hidden="true">#</a> 新建提交状态</h3>
<h4 id="状态" tabindex="-1"><a class="header-anchor" href="#状态" aria-hidden="true">#</a> 状态</h4>
<p>语法 : <code v-pre>git status</code><br>
<strong>On branch master</strong> ：表示主分支<br>
<strong>Untracked files</strong> ：表示未跟踪状态</p>
<p>Git工作目录下的文件状态信息：</p>
<ol>
<li>Untracked 未跟踪（未被纳入版本控制）</li>
<li>Tracked 已跟踪（被纳入版本控制）</li>
<li>Unmodified 未修改状态</li>
<li>Modified 已修改状态</li>
<li>Staged 已暂存状态</li>
</ol>
<p>这些文件的状态会随着我们执行Git的命令发生变化,这些文件的状态会随着我们执行Git的命令发生变化</p>
<ul>
<li>红色表示新建文件或者新修改的文件,都在工作区.</li>
<li>绿色表示文件在暂存区</li>
<li>新建的文件在工作区，需要添加到暂存区并提交到仓库区</li>
</ul>
<p>也可以使用<code v-pre>git status –s</code> 使输出信息更加简洁,?? : 表示未跟踪状态</p>
<h4 id="暂存区" tabindex="-1"><a class="header-anchor" href="#暂存区" aria-hidden="true">#</a> 暂存区</h4>
<h5 id="添加到暂存区" tabindex="-1"><a class="header-anchor" href="#添加到暂存区" aria-hidden="true">#</a> 添加到暂存区</h5>
<p>提交指定文件 : <code v-pre>git add &lt;文件名称&gt;</code><br>
只是增加到栈空间（index文件）中，还没有添加到本地库中。初始化时没有这个index文件。这还是一个新文件，需要将栈空间文件提交到本地仓库。</p>
<p><code v-pre>git add .</code>  -&gt; 添加项目中所有文件</p>
<blockquote>
<p>添加未存在文件会出错：<strong>fatal: pathspec 'xxxx' did not match any files</strong></p>
</blockquote>
<h5 id="撤销暂存区文件" tabindex="-1"><a class="header-anchor" href="#撤销暂存区文件" aria-hidden="true">#</a> 撤销暂存区文件</h5>
<p>撤销暂存区的文件 : <code v-pre>git reset &lt;文件名称&gt;</code></p>
<blockquote>
<p>撤销后，查看文件状态（git status）文件由绿色变为红色</p>
</blockquote>
<h4 id="本地库" tabindex="-1"><a class="header-anchor" href="#本地库" aria-hidden="true">#</a> 本地库</h4>
<p>将暂存区文件提交到本地库 : <code v-pre>git commit</code><br>
执行命令时需要填写提交日志，进入编辑模式</p>
<p><code v-pre>git  commit –m &quot;注释内容&quot;</code>  -&gt; 直接用-m参数指定日志内容，推荐</p>
<p>commit 会生成一条版本记录，add只是添加暂存区，不会生成版本记录</p>
<blockquote>
<p>建议多次add后，一次性commit，避免每次add都commit产生版本信息爆炸。</p>
</blockquote>
<p><code v-pre>git commit -am &quot;注释内容&quot;</code> -&gt; 添加和提交合并命令,代码编辑完成后即可进行 add 和 commit 操作.</p>
<h3 id="查看日志" tabindex="-1"><a class="header-anchor" href="#查看日志" aria-hidden="true">#</a> 查看日志</h3>
<p>查看日志指令 : <code v-pre>git log</code><br>
<code v-pre>git log filename</code> -&gt; 查看文件日志(查看所有日志或某个文件日志),q退出<br>
<code v-pre>git log --pretty=oneline</code> -&gt; 如果日志很多,可以在一行显示<br>
<code v-pre>git reflog</code> -&gt; 查看历史操作</p>
<h3 id="回退-穿梭-撤销" tabindex="-1"><a class="header-anchor" href="#回退-穿梭-撤销" aria-hidden="true">#</a> 回退/穿梭/撤销</h3>
<h4 id="回退" tabindex="-1"><a class="header-anchor" href="#回退" aria-hidden="true">#</a> 回退</h4>
<p>回退到历史版本 : <code v-pre>git reset --hard HEAD^</code><br>
一次回退一个版本，一个^代表一个版本数量</p>
<p><code v-pre>git  reset  --hard HEAD~n</code> -&gt; 回退n次操作</p>
<h4 id="穿梭" tabindex="-1"><a class="header-anchor" href="#穿梭" aria-hidden="true">#</a> 穿梭</h4>
<p><code v-pre>git reflog filename</code> -&gt; 查看历史操作<br>
<code v-pre>git reset --hard 版本号</code> -&gt; 回到最新的版本</p>
<h4 id="撤销" tabindex="-1"><a class="header-anchor" href="#撤销" aria-hidden="true">#</a> 撤销</h4>
<p>撤销修改(还原原来的文件)</p>
<p>未add，未commit  :  <code v-pre>git checkout -- filename</code><br>
已add，未commit :  <code v-pre>git reset</code></p>
<h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h3>
<p>几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。</p>
<p>Git 的master分支并不是一个特殊分支。 它跟其它分支没有区别。 之所以几乎每一个仓库都有 master 分支，是因为git init 命令默认创建它，并且大多数人都懒得去改动它。</p>
<h4 id="实际开发流程" tabindex="-1"><a class="header-anchor" href="#实际开发流程" aria-hidden="true">#</a> 实际开发流程</h4>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/02_Git本地库实战/image/image_12_vJgOs6vb71.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="分支概念" tabindex="-1"><a class="header-anchor" href="#分支概念" aria-hidden="true">#</a> 分支概念</h4>
<p>在使用版本控制工具开发的过程中，同时推进多个任务</p>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/02_Git本地库实战/image/image_13_1vVmZQ4HC3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="分支的好处" tabindex="-1"><a class="header-anchor" href="#分支的好处" aria-hidden="true">#</a> 分支的好处</h4>
<p>同时并行推进多个功能开发，提高开发效率</p>
<p>各个分支在开发过程中，如果某一个分支开发失败，不会对其他分支有任何影响。失败的分支删除重新开始即可。</p>
<h4 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h4>
<table>
<thead>
<tr>
<th>命令名称
</th>
<th>作用
</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>git branch 分支名</code></td>
<td>创建分支
</td>
</tr>
<tr>
<td><code v-pre>git branch -v</code></td>
<td>查看分支
</td>
</tr>
<tr>
<td><code v-pre>git checkout 分支名</code></td>
<td>切换分支
</td>
</tr>
<tr>
<td><code v-pre>git merge 分支名</code></td>
<td>把指定的分支合并到当前分支上
</td>
</tr>
</tbody>
</table>
<p>切换分支的<strong>本质就是移动HEAD指针</strong>。</p>
<h3 id="实战-版本冲突" tabindex="-1"><a class="header-anchor" href="#实战-版本冲突" aria-hidden="true">#</a> 实战(版本冲突)</h3>
<h4 id="冲突产生的表现" tabindex="-1"><a class="header-anchor" href="#冲突产生的表现" aria-hidden="true">#</a> 冲突产生的表现</h4>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/02_Git本地库实战/image/image_16_QoGcjOD6Nw.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Git使用 <code v-pre>&lt;&lt;&lt;&lt;&lt;&lt;&lt; ========= &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> 符号帮我们标记出来，现在产生冲突的内容。</p>
<div class="language-Txt line-numbers-mode" data-ext="Txt"><pre v-pre class="language-Txt"><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
Hello Git!I am very happy! &amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;
Hello Git!I am very happy!
======= 
Hello Git!I am very happy!
Hello Git!I am very happy! ************
&gt;&gt;&gt;&gt;&gt;&gt;&gt; hotfix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示HEAD指针指向的位置在冲突中的内容</p>
<h4 id="冲突产生的原因" tabindex="-1"><a class="header-anchor" href="#冲突产生的原因" aria-hidden="true">#</a> 冲突产生的原因</h4>
<p>合并分支时，两个分支在同一个文件的同一个位置有两套完全不同的修改。Git无法替我们决定使用哪一个。必须人为决定新代码内容。</p>
<h4 id="冲突的解决" tabindex="-1"><a class="header-anchor" href="#冲突的解决" aria-hidden="true">#</a> 冲突的解决</h4>
<p>①编辑有冲突的文件，删除特殊符号，决定要使用的内容</p>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/02_Git本地库实战/image/image_17_gxIsJNdNOM.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>②添加到暂存区</p>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/02_Git本地库实战/image/image_18_GRV1sIUSju.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>③执行提交（注意：使用git commit命令时不能带文件名）</p>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/02_Git本地库实战/image/image_19_RVvivraQfI.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="避免冲突" tabindex="-1"><a class="header-anchor" href="#避免冲突" aria-hidden="true">#</a> 避免冲突</h4>
<ul>
<li>容易冲突的操作方式
<ul>
<li>多个人同时操作了同一个文件</li>
<li>一个人一直写不提交</li>
<li>修改之前不更新最新代码</li>
<li>提交之前不更新最新代码</li>
<li>擅自修改同事代码</li>
</ul>
</li>
<li>减少冲突的操作方式
<ul>
<li>养成良好的操作习惯 <strong>，先<code v-pre>pull</code>在修改,修改完立即<code v-pre>commit</code>和<code v-pre>push</code></strong></li>
<li>一定要确保自己正在修改的文件是最新版本的</li>
<li>各自开发各自的模块</li>
<li>如果要修改公共文件，一定要先确认有没有人正在修改</li>
<li>下班前一定要提交代码,上班第一件事拉取最新代码</li>
<li>一定不要擅自修改同事的代码</li>
</ul>
</li>
</ul>
</div></template>


