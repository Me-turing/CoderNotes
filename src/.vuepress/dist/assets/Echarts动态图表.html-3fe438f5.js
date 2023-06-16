import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,d as n,e as s,b as t,f as l}from"./app-c47b8d81.js";const u="/CoderNotes/assets/image_1dsGyUjPCs-05733e8e.png",i={},r=n("h2",{id:"概述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#概述","aria-hidden":"true"},"#"),s(" 概述")],-1),k=n("h3",{id:"什么是echarts动态图表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#什么是echarts动态图表","aria-hidden":"true"},"#"),s(" 什么是Echarts动态图表")],-1),d={href:"https://echarts.apache.org/zh/index.html",title:"https://echarts.apache.org/zh/index.html",target:"_blank",rel:"noopener noreferrer"},v=l('<p>2018年3月份，全球著名开源社区 Apache 基金会宣布“百度开源的 ECharts 项目全票通过进入 Apache 孵化器”。这是百度第一个进入国际顶级开源社区的项目，也标志着百度开源正式进入开源发展的快车道。</p><p>ECharts 成为Apache 孵化器项目之前，已经是国内可视化生态领域的领军者，近年内连续被开源中国评选为“年度最受欢迎的中国开源软件”，并广泛被各行业企业以及事业单位、科研院所应用。涉及行业包含金融、教育、医疗、物流、气候监测等众多领域，其中甚至包括阿里巴巴、腾讯、华为、联想、小米、国家电网、中国石化等。</p><p>ECharts 负责人祖明介绍到：“ ECharts 作为拥有丰富的可视化图表类型和深度交互能力的开源可视化库，配置便捷容易上手，同时上千的配置项和不同层面的扩展机制带来了灵活的定制能力。ECharts 底层依托了开源渲染引擎 ZRender ，支持 Canvas 和 SVG 等多种方式的渲染，支持 PC 、移动端、数据大屏、服务端渲染等多种设备场景。</p><p>ECharts（Enterprise Charts），一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。</p><h3 id="echcarts的组件" tabindex="-1"><a class="header-anchor" href="#echcarts的组件" aria-hidden="true">#</a> Echcarts的组件</h3><p>Eecharts中各种内容，被抽象为“组件”。<br> 例如，echarts 中至少有这些组件：</p><ul><li>series（系列，一组数值以及他们映射成的图）</li><li>xAxis（直角坐标系 X 轴）</li><li>yAxis（直角坐标系 Y 轴）</li><li>tooltip（提示框组件）</li><li>toolbox（工具栏组件）</li><li>title（标题）</li><li>legend（图例）</li></ul><h3 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h3><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="引入js" tabindex="-1"><a class="header-anchor" href="#引入js" aria-hidden="true">#</a> 引入JS</h4><h4 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js/echarts.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">function</span> <span class="token function">showData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        option <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        option <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataset</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">[</span><span class="token string">&#39;product&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;第一季度&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;第二季度&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;第三季度&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;第四季度&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">&#39;茉莉&#39;</span><span class="token punctuation">,</span> <span class="token number">43.3</span><span class="token punctuation">,</span> <span class="token number">85.8</span><span class="token punctuation">,</span> <span class="token number">93.7</span><span class="token punctuation">,</span> <span class="token number">99.9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">&#39;奶茶&#39;</span><span class="token punctuation">,</span> <span class="token number">83.1</span><span class="token punctuation">,</span> <span class="token number">73.4</span><span class="token punctuation">,</span> <span class="token number">55.1</span><span class="token punctuation">,</span> <span class="token number">66.6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">&#39;绿茶&#39;</span><span class="token punctuation">,</span> <span class="token number">86.4</span><span class="token punctuation">,</span> <span class="token number">65.2</span><span class="token punctuation">,</span> <span class="token number">82.5</span><span class="token punctuation">,</span> <span class="token number">88.8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">&#39;咖啡&#39;</span><span class="token punctuation">,</span> <span class="token number">72.4</span><span class="token punctuation">,</span> <span class="token number">53.9</span><span class="token punctuation">,</span> <span class="token number">39.1</span><span class="token punctuation">,</span> <span class="token number">77.1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">&#39;红茶&#39;</span><span class="token punctuation">,</span> <span class="token number">11.4</span><span class="token punctuation">,</span> <span class="token number">22.9</span><span class="token punctuation">,</span> <span class="token number">33.1</span><span class="token punctuation">,</span> <span class="token number">44.1</span><span class="token punctuation">]</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// Declare several bar series, each will be mapped</span>
          <span class="token comment">// to a column of dataset.source by default.</span>
          <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>option <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> option <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0px auto<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>显示数据<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">showData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),m={href:"https://echarts.apache.org/handbook/zh/get-started/",title:"https://echarts.apache.org/handbook/zh/get-started/",target:"_blank",rel:"noopener noreferrer"};function h(b,g){const a=e("ExternalLinkIcon");return o(),c("div",null,[r,k,n("p",null,[s("Apache ECharts 是一个正在由 Apache 孵化器赞助的 Apache 开源基金会孵化的项目。官方网址："),n("a",d,[s("https://echarts.apache.org/zh/index.html"),t(a)])]),v,n("p",null,[s("更多教程看官网: "),n("a",m,[s("https://echarts.apache.org/handbook/zh/get-started/"),t(a)])])])}const f=p(i,[["render",h],["__file","Echarts动态图表.html.vue"]]);export{f as default};
