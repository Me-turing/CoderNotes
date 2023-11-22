import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as t}from"./app-71f45f98.js";const e={},p=t(`<h2 id="控制台乱码" tabindex="-1"><a class="header-anchor" href="#控制台乱码" aria-hidden="true">#</a> 控制台乱码</h2><p>设置Tomcat中 conf下logging.properties中所有的UTF-8编码为GBK即可</p><p>详见: 解决控制台乱码</p><h2 id="post请求乱码" tabindex="-1"><a class="header-anchor" href="#post请求乱码" aria-hidden="true">#</a> post请求乱码</h2><p>通过HttpServletRequest设置请求编码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token comment">/*处理post请求乱码*/</span>
req<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get请求乱码" tabindex="-1"><a class="header-anchor" href="#get请求乱码" aria-hidden="true">#</a> get请求乱码</h2><p>需要手动进行编码解码,或者设置tomcat中的server.xml中的URI编码. <strong>tomcat9已经解决了该问题</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span>   <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8080<span class="token punctuation">&quot;</span></span> <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HTTP/1.1<span class="token punctuation">&quot;</span></span>
			 <span class="token attr-name">connectionTimeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20000<span class="token punctuation">&quot;</span></span>
			 <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8443<span class="token punctuation">&quot;</span></span> <span class="token attr-name">URIEncoding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span>  <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应乱码" tabindex="-1"><a class="header-anchor" href="#响应乱码" aria-hidden="true">#</a> 响应乱码</h2><p>通过HttpServletResponse设置响应编码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//以UTF-8编码处理数据</span>
resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置响应头,以便浏览器知道以何种编码解析数据</span>
resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/html;charset=UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载文件名乱码" tabindex="-1"><a class="header-anchor" href="#下载文件名乱码" aria-hidden="true">#</a> 下载文件名乱码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>resp<span class="token punctuation">.</span><span class="token function">addHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Disposition&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;attachment;filename=&quot;</span><span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">String</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;gbk&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;iso-8859-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),o=[p];function c(u,i){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","乱码的处理.html.vue"]]);export{d as default};
