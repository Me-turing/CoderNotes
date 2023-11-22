import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-71f45f98.js";const p={},o=e(`<h2 id="什么是存储过程-stored-procedure" tabindex="-1"><a class="header-anchor" href="#什么是存储过程-stored-procedure" aria-hidden="true">#</a> 什么是存储过程(Stored Procedure)</h2><p>通过前面章节的学习，我们已经知道SQL是一种非常便利的语言。从数据库抽取数据，或者对特定的数据集中更新时，都能通过简洁直观的代码实现。</p><p>但是这个所谓的“简洁”也是有限制，SQL基本是一个命令实现一个处理，是所谓的非程序语言。</p><p>在不能编写流程的情况下，所有的处理只能通过一个个命令来实现。当然，通过使用连接及子查询，即使使用SQL的单一命令也能实现一些高级的处理，但是，其局限性是显而易见的。例如，在SQL中就很难实现针对不同条件进行不同的处理以及循环等功能。</p><p>这个时候就出现了存储过程这个概念，简单地说，存储过程就是数据库中保存(Stored)的一系列SQL命令（Procedure）的集合。也可以将其看作相互之间有关系的SQL命令组织在一起形成的一个小程序。</p><h2 id="存储过程的优点" tabindex="-1"><a class="header-anchor" href="#存储过程的优点" aria-hidden="true">#</a> 存储过程的优点</h2><ol><li>提高执行性能。存储过程执行效率之所高，在于普通的SQL语句，每次都会对语法分析，编译，执行，而存储过程只是在第一次执行语法分析，编译，执行，以后都是对结果进行调用。</li><li>可减轻网络负担。使用存储过程，复杂的数据库操作也可以在数据库服务器中完成。只需要从客户端(或应用程序)传递给数据库必要的参数就行，比起需要多次传递SQL命令本身，这大大减轻了网络负担。</li><li>可将数据库的处理黑匣子化。应用程序中完全不用考虑存储过程的内部详细处理，只需要知道调用哪个存储过程就可以了</li></ol><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 定义一个没有返回值 存储过程</span>
<span class="token comment">-- 实现：模糊查询操作：</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> ename <span class="token operator">like</span> <span class="token string">&#39;%A%&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">procedure</span> mypro01<span class="token punctuation">(</span>name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">begin</span>
        <span class="token keyword">if</span> name <span class="token operator">is</span> <span class="token boolean">null</span> <span class="token operator">or</span> name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token keyword">then</span>
                <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
        <span class="token keyword">else</span>
    <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> ename <span class="token operator">like</span> concat<span class="token punctuation">(</span><span class="token string">&#39;%&#39;</span><span class="token punctuation">,</span>name<span class="token punctuation">,</span><span class="token string">&#39;%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>  
<span class="token keyword">end</span><span class="token punctuation">;</span>
<span class="token comment">-- 删除存储过程：</span>
<span class="token keyword">drop</span> <span class="token keyword">procedure</span> mypro01<span class="token punctuation">;</span>
<span class="token comment">-- 调用存储过程：</span>
<span class="token keyword">call</span> mypro01<span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">call</span> mypro01<span class="token punctuation">(</span><span class="token string">&#39;R&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 定义一个  有返回值的存储过程：</span>
<span class="token comment">-- 实现：模糊查询操作：</span>
<span class="token comment">-- in 参数前面的in可以省略不写</span>
<span class="token comment">-- found_rows()mysql中定义的一个函数，作用返回查询结果的条数</span>
<span class="token keyword">create</span> <span class="token keyword">procedure</span> mypro02<span class="token punctuation">(</span><span class="token operator">in</span> name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">out</span> num <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">begin</span>
        <span class="token keyword">if</span> name <span class="token operator">is</span> <span class="token boolean">null</span> <span class="token operator">or</span> name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token keyword">then</span>
                <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
        <span class="token keyword">else</span>
    <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> ename <span class="token operator">like</span> concat<span class="token punctuation">(</span><span class="token string">&#39;%&#39;</span><span class="token punctuation">,</span>name<span class="token punctuation">,</span><span class="token string">&#39;%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>  
        <span class="token keyword">select</span> found_rows<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">into</span> num<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
<span class="token comment">-- -- 调用存储过程：</span>
<span class="token keyword">call</span> mypro02<span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token variable">@num</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token variable">@num</span><span class="token punctuation">;</span>
<span class="token keyword">call</span> mypro02<span class="token punctuation">(</span><span class="token string">&#39;R&#39;</span><span class="token punctuation">,</span><span class="token variable">@aaa</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token variable">@aaa</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),t=[o];function c(l,i){return s(),a("div",null,t)}const u=n(p,[["render",c],["__file","存储过程.html.vue"]]);export{u as default};
