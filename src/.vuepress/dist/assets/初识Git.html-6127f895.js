import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as e,f as r}from"./app-54a62cbe.js";const o="/coder-notes/assets/image_2_tJZm-CyTsP-5ea4b8f2.png",s="/coder-notes/assets/image_3_5VSmbHfbXT-59220ea9.png",a="/coder-notes/assets/image_4_6KnHDLQiZ6-2d32f0ea.png",l="/coder-notes/assets/image_5_G_Gn1UT-9T-bd181338.png",n="/coder-notes/assets/image_UQap2aI62v-efb8a245.jpeg",g="/coder-notes/assets/image_1_djjpFqvPhZ-4a65ac16.jpeg",c="/coder-notes/assets/image_2_0WIvAgJr-_-11243959.jpeg",d="/coder-notes/assets/image_3_WWqv1kG9JU-5469a81b.jpeg",_="/coder-notes/assets/image_4_pMG5tNNPQU-d74d0d6b.jpeg",m="/coder-notes/assets/image_5_EUJcDckyuy-3a90c2ab.jpeg",h="/coder-notes/assets/image_6_L0MyOgu1Y0-e11eaf7d.jpeg",u="/coder-notes/assets/image_7_BNx0DkaYvg-bac726fe.jpeg",b="/coder-notes/assets/image_8_LKy5De5Hcs-65086df8.jpeg",p="/coder-notes/assets/image_9_-_uiglSQcZ-399d5e7a.jpeg",f="/coder-notes/assets/image_10_uMh655rBME-67e2c61e.jpeg",y="/coder-notes/assets/image_11_icDOt_YPBu-8d4380c1.jpeg",G="/coder-notes/assets/image_12__2dIFWgfOs-178041aa.jpeg",x="/coder-notes/assets/image_9_9umTWGAT-6-28928020.png",z="/coder-notes/assets/image_10_cH4Ark8B0W-3d7f613d.png",j={},S=r('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>Git是目前世界上最先进的分布式版本控制系统（Distributed Version Control System，简称 DVCS）</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="git工作机制" tabindex="-1"><a class="header-anchor" href="#git工作机制" aria-hidden="true">#</a> Git工作机制</h3><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="版本控制工具" tabindex="-1"><a class="header-anchor" href="#版本控制工具" aria-hidden="true">#</a> 版本控制工具</h3><ul><li>集中式版本控制工具<br><img src="'+a+'" alt="" loading="lazy"><ul><li>CVS、SVN(Subversion)、VSS……</li><li>SVN是集中式版本控制系统，版本库是集中放在中央服务器的，而干活的时候，用的都是自己的电脑，所以首先要从中央服务器下载最新的版本，然后开发代码，写完代码后需要把自己的代码推送到中央服务器。</li><li>缺点： <ul><li>服务器单点故障</li><li>容错性差</li></ul></li></ul></li><li>分布式版本控制工具<br><img src="'+l+'" alt="" loading="lazy"><ul><li>Git、Mercurial、Bazaar、Darcs……</li><li><strong>仓库：</strong><ul><li>本地仓库：是在开发人员自己电脑上的Git仓库 </li><li>远程仓库：是在远程服务器上的Git仓库 <ul><li><strong>团队内协作</strong></li><li><strong>跨团队协作</strong></li></ul></li></ul></li><li><strong>操作：</strong><ul><li><strong><code>clone</code></strong>：克隆，就是将远程仓库复制到本地</li><li><strong><code>push</code></strong>：推送，就是将本地仓库代码上传到远程仓库</li><li><strong><code>pull</code></strong>：拉取，就是将远程仓库代码下载到本地仓库</li><li><strong><code>Commit</code></strong>：提交，就是将本地工作区代码上传到本地仓库中</li></ul></li><li><strong>优点：</strong><ul><li>容灾能力强</li><li>本地版本管理</li><li>异地协作</li><li>灵活分支</li></ul></li></ul></li></ul><h2 id="安装、环境搭建" tabindex="-1"><a class="header-anchor" href="#安装、环境搭建" aria-hidden="true">#</a> 安装、环境搭建</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><ul><li><strong>安装步骤</strong><br> 出现安全警告，点击运行<br><img src="'+n+'" alt="" loading="lazy"><br> 浏览协议，下一步<br><img src="'+g+'" alt="" loading="lazy"><br> 安装目录，所需要磁盘空间大小，下一步<br><img src="'+c+'" alt="" loading="lazy"><br> Git Bash需要安装的，其他默认即可，下一步<br><img src="'+d+'" alt="" loading="lazy"><br> 开始菜单，下一步<br><img src="'+_+'" alt="" loading="lazy"><br> 默认编辑器，下一步<br><img src="'+m+'" alt="" loading="lazy"><br> 选择Git命令的执行环境 <ul><li>这里推荐选择第一个，就是单独用户Git自己的命令行窗口。</li><li>不推荐和windows的命令行窗口混用。<br><img src="'+h+'" alt="" loading="lazy"><br> HTTPS传输：使用SSL传输协议<br><img src="'+u+'" alt="" loading="lazy"><br> 在“Configuring the line ending conversions”选项中，<br> 第一个选项：如果是跨平台项目，在windows系统安装<br> 第二个选项：如果是跨平台项目，在Unix系统安装<br> 第三个选项：非跨平台项目<br><img src="'+b+'" alt="" loading="lazy"><br> 在“terminal emulator”选项中，<br> 第一个选项：使用专用的Git窗口（<strong>推荐</strong>）<br> 第二个选项：使用windows的cmd命令行窗口。<br><img src="'+p+'" alt="" loading="lazy"><br> 在“Configuring extra”选项中，默认开启文件缓存即可（推荐）<br><img src="'+f+'" alt="" loading="lazy"><br> 新功能，还不稳定，不勾选，开始安装<br><img src="'+y+'" alt="" loading="lazy"><br> 安装完成<br><img src="'+G+'" alt="" loading="lazy"></li></ul></li></ul><h3 id="设置全局用户签名" tabindex="-1"><a class="header-anchor" href="#设置全局用户签名" aria-hidden="true">#</a> 设置全局用户签名</h3><ol><li>安装完成后，在任意的文件目录下，右键都可以开打Git的命令行窗口——Git Bash Here<br><img src="'+x+'" alt="" loading="lazy"></li><li>Git是分布式版本控制系统，所以需要填写用户名和邮箱作为一个标识——即：用户签名 <ul><li>说明 <ul><li>签名的作用是区分不同操作者身份。用户的签名信息在每一个版本的提交信息中能够看到，以此确认本次提交是谁做的。</li><li>注意：这里设置用户签名和将来登录GitHub（或其他代码托管中心）的账号没有任何关系。</li></ul></li><li>命令：<br><strong><code>git config --global user.name &quot;用户名&quot;</code></strong><br><strong><code>git config --global user.email &quot;用户邮箱&quot;</code></strong><ul><li>--global 表示全局属性，所有的git项目都会共用属性</li><li>查看配置信息：git config --list</li><li>在当前登录的系统用户路径下，生成~/.gitconfig隐含文件，里面可以看到刚刚设置的信息。如果不用命令设置，也可以直接打开文件进行设置。</li></ul></li></ul></li></ol><h2 id="相关概念" tabindex="-1"><a class="header-anchor" href="#相关概念" aria-hidden="true">#</a> 相关概念</h2><h3 id="理解工作区、版本库、暂存区概念" tabindex="-1"><a class="header-anchor" href="#理解工作区、版本库、暂存区概念" aria-hidden="true">#</a> 理解工作区、版本库、暂存区概念</h3><ul><li><strong>工作区(Working Directory)</strong>：就是你电脑本地硬盘目录，一般是项目当前目录</li><li><strong>版本库(Repository)</strong>：工作区有个隐藏目录.git，它就是Git的本地版本库</li><li><strong>暂存区(stage)</strong>：一般存放在&quot;git目录&quot;下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）</li><li><strong>分支（Branch）</strong>：Git为我们自动创建的第一个分支master，以及指向master的一个指针叫HEAD</li></ul><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="提交git版本库分两步执行" tabindex="-1"><a class="header-anchor" href="#提交git版本库分两步执行" aria-hidden="true">#</a> 提交Git版本库分两步执行</h3><p><strong>第一步</strong> 用“<strong><code>git add</code></strong>”把文件纳入Git管理，实际是把本地文件修改添加到暂存区</p><p><strong>第二步</strong> 用“<strong><code>git commit</code></strong>”提交更改，实际上就是把暂存区的所有内容提交到当前分支 </p><p>因为我们创建Git版本库时，Git自动为我们创建了唯一一个master分支，所以commit就是往master分支上提交更改。</p><p>可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。一旦提交完后，如果你又没有对工作区做任何修改，那么工作区就是“干净”的。<br> 即：nothing to commit (working directory clean)。</p><p><strong>其他操作</strong><br> ①用“<strong><code>git diff HEAD -- filename</code></strong>”命令可以查看工作区和暂存区里面最新版本的区别。<br> ②新建过撤销未add： <strong><code>git checkout -- 文件名</code></strong><br> ③撤销已add未commit：先<code>git reset HEAD 文件名</code>，再 git checkout -- 文件名<br> ④撤销已add已commit：<strong><code>git reset --hard HEAD^</code></strong></p>',23),D=[S];function H(k,B){return t(),e("div",null,D)}const T=i(j,[["render",H],["__file","初识Git.html.vue"]]);export{T as default};
