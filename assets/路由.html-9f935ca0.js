import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as t}from"./app-71f45f98.js";const r="/CoderNotes/assets/image_mzLVC7vjdT-4b319aa4.png",l={},s=t(`<h3 id="路由的概念" tabindex="-1"><a class="header-anchor" href="#路由的概念" aria-hidden="true">#</a> 路由的概念</h3><p>用户发起一个请求,在互联网中经过多个站点的跳转.最终获取服务器端的数据，我们把互联网中网络的链路称之为路由。 (网络用语)<br><strong>VUE中的路由: 根据用户的请求URL地址,展现特定的组件(页面)信息. (控制用户程序跳转过程)</strong></p><h3 id="路由的使用" tabindex="-1"><a class="header-anchor" href="#路由的使用" aria-hidden="true">#</a> 路由的使用</h3><ul><li>一、引入JS文件 : <a href="file/vue-router__6qjFJSZ1m.js">vue-router.js</a><br><strong>一定要注意引入顺序</strong>：Vue路由是基于vue.js的扩展，所以要先引用vue.js 再引用vue-router.js 文件</li><li>二、定义组件 : <code>var 组件名 = {template:&quot;组件HTML代码&quot;}</code></li><li>三、创建路由的实例VueRouter,routes指定每个路由path映射的一个组件<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>var 路由名 = new VueRouter({
routes:[
      {path:&quot;/路径1&quot;,component:组件名1},
      {path:&quot;/路径2&quot;,component:组件名2},
      ............
]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>四、在Vue对象代码中，通过 路由名 注入路由,从而让整个应用都有路由功能<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code> new Vue({
  el:&quot;作用域&quot;,
  ........
  **router：路由名      //此处如果路由器也是router，可以简写  router即可**
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>五、在HTML的渲染域中使用路由<div class="language-Vue line-numbers-mode" data-ext="Vue"><pre class="language-Vue"><code>&lt;div id=&quot;作用域&quot;&gt;
	&lt;!-- 将被解析成a标签,还有href属性 --&gt; 
	&lt;router-link to=&quot;/路径1&quot;&gt;文字1&lt;/router-link&gt;
	&lt;router-link to=&quot;/路径2&quot;&gt;文字2&lt;/router-link&gt;
	&lt;!-- 路由出口,匹配成功后,在下面区域展示 --&gt;
	&lt;router-view&gt;&lt;/router-view&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong>演示代码</strong><br><img src="`+r+'" alt="" loading="lazy"></p>',5),a=[s];function d(u,o){return i(),n("div",null,a)}const m=e(l,[["render",d],["__file","路由.html.vue"]]);export{m as default};
