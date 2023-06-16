<template><div><h2 id="方式一-在webapps目录中" tabindex="-1"><a class="header-anchor" href="#方式一-在webapps目录中" aria-hidden="true">#</a> 方式一 : 在webapps目录中</h2>
<ol>
<li>在Tomcat的webapps中创建一个我们自己的项目目录<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/04_JavaEE技术/01_Tomcat/03_Tomcat部署项目/image/image_UGsx_bPFSV.png" alt="" loading="lazy"></li>
<li>在自己的myProject中放入一下静态资源<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/04_JavaEE技术/01_Tomcat/03_Tomcat部署项目/image/image_7h9HkeQhfY.png" alt="" loading="lazy"></li>
<li>启动Tomcat,访问对应的资源<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/04_JavaEE技术/01_Tomcat/03_Tomcat部署项目/image/image_xSz5lOF5D_.png" alt="" loading="lazy"></li>
</ol>
<p>运行原理</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/04_JavaEE技术/01_Tomcat/03_Tomcat部署项目/image/image_2wRn-VgR4h.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="方式二-在其他目录中" tabindex="-1"><a class="header-anchor" href="#方式二-在其他目录中" aria-hidden="true">#</a> 方式二 : 在其他目录中</h2>
<p>在localhost中添加配置文件</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Context</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/myProject<span class="token punctuation">"</span></span> <span class="token attr-name">docBase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d:/myProject<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>建议配置文件名和项目名相同</p>
<p>运行原理</p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/04_JavaEE技术/01_Tomcat/03_Tomcat部署项目/image/image_w0kPAllbOc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


