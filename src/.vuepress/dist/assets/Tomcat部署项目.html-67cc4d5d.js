import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as t,f as n}from"./app-c47b8d81.js";const e="/CoderNotes/assets/image_UGsx_bPFSV-317d86be.png",o="/CoderNotes/assets/image_7h9HkeQhfY-7300dab7.png",i="/CoderNotes/assets/image_xSz5lOF5D_-0b569622.png",c="/CoderNotes/assets/image_2wRn-VgR4h-afa2400b.png",p="/CoderNotes/assets/image_w0kPAllbOc-ce6f59a3.png",l={},r=n('<h2 id="方式一-在webapps目录中" tabindex="-1"><a class="header-anchor" href="#方式一-在webapps目录中" aria-hidden="true">#</a> 方式一 : 在webapps目录中</h2><ol><li>在Tomcat的webapps中创建一个我们自己的项目目录<br><img src="'+e+'" alt="" loading="lazy"></li><li>在自己的myProject中放入一下静态资源<br><img src="'+o+'" alt="" loading="lazy"></li><li>启动Tomcat,访问对应的资源<br><img src="'+i+'" alt="" loading="lazy"></li></ol><p>运行原理</p><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="方式二-在其他目录中" tabindex="-1"><a class="header-anchor" href="#方式二-在其他目录中" aria-hidden="true">#</a> 方式二 : 在其他目录中</h2><p>在localhost中添加配置文件</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Context</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/myProject<span class="token punctuation">&quot;</span></span> <span class="token attr-name">docBase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d:/myProject<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>建议配置文件名和项目名相同</p><p>运行原理</p><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',10),d=[r];function u(m,_){return s(),t("div",null,d)}const f=a(l,[["render",u],["__file","Tomcat部署项目.html.vue"]]);export{f as default};
