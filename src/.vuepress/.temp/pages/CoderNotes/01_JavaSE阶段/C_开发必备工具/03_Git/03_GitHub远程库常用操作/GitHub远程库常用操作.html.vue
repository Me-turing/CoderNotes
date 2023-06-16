<template><div><h2 id="团队协作的常用流程" tabindex="-1"><a class="header-anchor" href="#团队协作的常用流程" aria-hidden="true">#</a> 团队协作的常用流程</h2>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_18_Bk8GGBOqhT.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="fork-跨团队协作" tabindex="-1"><a class="header-anchor" href="#fork-跨团队协作" aria-hidden="true">#</a> Fork 跨团队协作</h2>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<p>现在的情景是，用叉子把别人的东西（copy no cut）叉到你的碗里～</p>
<p>就是把别人的项目clone一份，但是owner变成自己，这样你就可以在遵守Open source license的前提下任意修改这个项目了。</p>
<p>相当于你在原项目的主分支上又建立了一个分支，你可以在该分支上任意修改，如果想将你的修改合并到原项目中时，可以pull request，</p>
<p>这样原项目的作者就可以将你修改的东西合并到原项目的主分支上去，这样你就为开源项目贡献了代码，开源项目就会在大家共同的努力下不断壮大和完善。</p>
<h3 id="演示fork" tabindex="-1"><a class="header-anchor" href="#演示fork" aria-hidden="true">#</a> 演示Fork</h3>
<h4 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h4>
<p>zhangsan和lisi是一个团队的人，wangwu是另一个团队的人</p>
<p>第三方账号登录（wangwu），搜索某账号找到某项目(zhangsan)，然后点击Fork按钮，这样就将该项目克隆一份到当前账号(wangwu)内，然后进行修改，提交pull request，告诉对方(zhangsan)已经修改了，请求合并；</p>
<p>当前用户登录(zhangsan)后，可以看到小铃铛中的消息提醒，查看到pull request，然后，选择合并或拒绝。</p>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_43_5ZHqtVOZzF.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h4>
<p>①[wangwuatguigu]获取[zhangsanatguigu]的项目URL(可以进行搜索,也可以通过email发送url地址告知)</p>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_44_wvynKPJ9uX.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>②[wangwuatguigu]点击[Fork]，产生分支</p>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_45_KPw9QSzUjz.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>③[wangwuatguigu]修改项目文件.(可以pull本地后修改,也可以在github上直接进行修改.)</p>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_46_C0f2ixeQcv.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>④[wangwuatguigu]-&gt; [New pull request]</p>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_47_MgSxSxdbR8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>⑤[wangwuatguigu]-&gt;[Create pull request]-&gt;[填写pull request信息]</p>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_48_VRQU782QFC.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>⑥分支已提交到主分支</p>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_49_ipDnt-lJk_.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>⑦[zhangsanatguigu]和[lisiatguigu]都可以看到[wangwuatguigu]提交的项目内容.</p>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_50_kVA7VF6jxx.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>⑧[zhangsanatguigu]合并项目,点击[Merge pull request]-&gt;点击[Confirm merge]</p>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_51_K_9OYmQ8QY.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>⑨[zhangsanatguigu]查看项目代码，合并完成，OK</p>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_52_Hh_GNrAw6Q.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_53_aQ1tPB9pMo.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="解决重复输入密码问题" tabindex="-1"><a class="header-anchor" href="#解决重复输入密码问题" aria-hidden="true">#</a> 解决重复输入密码问题</h2>
<h3 id="两种模式-https-vs-ssh" tabindex="-1"><a class="header-anchor" href="#两种模式-https-vs-ssh" aria-hidden="true">#</a> 两种模式：https  VS  ssh</h3>
<p>ssh模式比https模式的一个重要好处就是，每次push，pull，fetch等操作时不用重复填写用户名密码。</p>
<p>前提是你必须是这个项目的拥有者或合作者，且配好了ssh key</p>
<h3 id="如何配置ssh-key" tabindex="-1"><a class="header-anchor" href="#如何配置ssh-key" aria-hidden="true">#</a> 如何配置ssh key</h3>
<p>①步骤1：检查电脑家目录下是否已经生成了SSH key，如果有.ssh目录删除即可</p>
<p>②步骤2：创建SSH Key : <code v-pre>ssh-keygen -t rsa -C lisiatguigu</code></p>
<p>成功的话(执行命令不需要输入任何内容)，会在~/下生成.ssh文件夹，查看生成两个文件:<code v-pre>id_rsa</code> 和 <code v-pre>id_rsa.pub</code><br>
打开id_rsa.pub，复制里面的内容，到github上</p>
<p>③步骤3：登录[lisiatguigu]账户<br>
打开用户设置<br>
点击[SSH and GPG keys] 填写Title和Key，点击[Add SSH key]<br>
<img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_54_ajFsTl8195.png" alt="" loading="lazy"></p>
<p>④重新建立github连接,如果之前配置过则删除，重新配置<br>
命令：<br>
<code v-pre>git remote add originssh sshpath</code><br>
<code v-pre>git push originssh master</code></p>
<p>修改文件，重新提交,不需要再输入用户名和密码了</p>
<h3 id="注意问题" tabindex="-1"><a class="header-anchor" href="#注意问题" aria-hidden="true">#</a> 注意问题</h3>
<p>一个账户只能设置一个默认密码.<br>
如果有多个账号存在的话，只能选择设置其中某一个</p>
<h2 id="配置git忽略文件" tabindex="-1"><a class="header-anchor" href="#配置git忽略文件" aria-hidden="true">#</a> 配置Git忽略文件</h2>
<h3 id="哪些文件要忽略" tabindex="-1"><a class="header-anchor" href="#哪些文件要忽略" aria-hidden="true">#</a> 哪些文件要忽略</h3>
<h4 id="eclipse特定文件" tabindex="-1"><a class="header-anchor" href="#eclipse特定文件" aria-hidden="true">#</a> Eclipse特定文件</h4>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_zJThTb797R.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="idea特定文件" tabindex="-1"><a class="header-anchor" href="#idea特定文件" aria-hidden="true">#</a> IDEA特定文件</h4>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_20_dyARosOoiL.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="maven工程的target目录" tabindex="-1"><a class="header-anchor" href="#maven工程的target目录" aria-hidden="true">#</a> Maven工程的target目录</h4>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/03_Git/03_GitHub远程库常用操作/image/image_21_kde9DtX8Av.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="为什么要忽略它们" tabindex="-1"><a class="header-anchor" href="#为什么要忽略它们" aria-hidden="true">#</a> 为什么要忽略它们</h3>
<p>与项目的实际功能无关，不参与服务器上部署运行。把它们忽略掉能够屏蔽IDE工具之间的差异。</p>
<h3 id="怎么忽略" tabindex="-1"><a class="header-anchor" href="#怎么忽略" aria-hidden="true">#</a> 怎么忽略</h3>
<h4 id="创建忽略规则文件-git-ignore" tabindex="-1"><a class="header-anchor" href="#创建忽略规则文件-git-ignore" aria-hidden="true">#</a> 创建忽略规则文件（git.ignore）</h4>
<p>这个文件的存放位置原则上在哪里都可以，为了便于让<code v-pre>~/.gitconfig</code>文件引用，建议也放在用户家目录下</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># Compiled class file
*.class
 
# Log file
*.log
 
# BlueJ files
*.ctxt
 
# Mobile Tools for Java (J2ME)
.mtj.tmp/
 
# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar
 
# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*
 
.classpath
.project
.settings
target
.idea
*.iml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在-gitconfig文件中引用忽略规则文件" tabindex="-1"><a class="header-anchor" href="#在-gitconfig文件中引用忽略规则文件" aria-hidden="true">#</a> 在.gitconfig文件中引用忽略规则文件</h4>
<div class="language-纯文本 line-numbers-mode" data-ext="纯文本"><pre v-pre class="language-纯文本"><code>[user]
name = peter
email = peter@atguigu.com
[core]
excludesfile = C:/Users/xxxxx/git.ignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：这里要使用“正斜线（/）”，不要使用“反斜线（\）”</p>
</div></template>


