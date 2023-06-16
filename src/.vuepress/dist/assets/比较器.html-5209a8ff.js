import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as p}from"./app-54a62cbe.js";const t={},e=p(`<p>内部比较器：实现<code>Comparable接口</code>，重写<code>compareTo方法</code><br> 外部比较器【推荐】：实现<code>Comparator接口</code>,并重写<code>compare方法</code></p><h2 id="基本类型的比较" tabindex="-1"><a class="header-anchor" href="#基本类型的比较" aria-hidden="true">#</a> 基本类型的比较</h2><p>我们在常见的开发中，对于基本类型的比较</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>  
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =0  &gt;0  &lt;0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>String类型中有一个<code>compareTo</code>方法，在String中重新了这个方法。所以我们可以直接使用compareTo来比较Stirng</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> a <span class="token operator">=</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">;</span>  
<span class="token class-name">String</span> b <span class="token operator">=</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">;</span>  
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，包装类型中都重写了这个方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">9.6</span><span class="token punctuation">;</span>  
<span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token number">9.3</span><span class="token punctuation">;</span>  
<span class="token comment">/* System.out.println((int)(a-b));*/</span>  
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">)</span> a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">)</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义引用类型的比较【核心】" tabindex="-1"><a class="header-anchor" href="#自定义引用类型的比较【核心】" aria-hidden="true">#</a> 自定义引用类型的比较【核心】</h2><h3 id="内部比较器" tabindex="-1"><a class="header-anchor" href="#内部比较器" aria-hidden="true">#</a> 内部比较器</h3><p>我们直接在自定义的引用类型的实体类中实现Comparable接口，重写compareTo方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>  
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token keyword">double</span> height<span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>  
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> height<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token keyword">double</span> height<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token keyword">double</span> height<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token string">&quot;Student{&quot;</span> <span class="token operator">+</span>  
                <span class="token string">&quot;age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>  
                <span class="token string">&quot;, height=&quot;</span> <span class="token operator">+</span> height <span class="token operator">+</span>  
                <span class="token string">&quot;, name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>  
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Student</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token comment">//按照年龄进行比较：  </span>
        <span class="token comment">/*return this.getAge() - o.getAge();*/</span>  
        <span class="token comment">//按照身高比较  </span>
        <span class="token comment">/*return ((Double)(this.getHeight())).compareTo((Double)(o.getHeight()));*/</span>  
        <span class="token comment">//按照名字比较：  </span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test02</span> <span class="token punctuation">{</span>  
    <span class="token comment">//这是main方法，程序的入口  </span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token comment">//比较两个学生：  </span>
        <span class="token class-name">Student</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">,</span><span class="token number">160.5</span><span class="token punctuation">,</span><span class="token string">&quot;alili&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">Student</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">,</span><span class="token number">170.5</span><span class="token punctuation">,</span><span class="token string">&quot;bnana&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h3 id="外部比较器【推荐】" tabindex="-1"><a class="header-anchor" href="#外部比较器【推荐】" aria-hidden="true">#</a> 外部比较器【推荐】</h3><p>定一个比较器类，实现Comparator,并重写compare方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>  
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token keyword">double</span> height<span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>  
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> height<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token keyword">double</span> height<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token keyword">double</span> height<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token string">&quot;Student{&quot;</span> <span class="token operator">+</span>  
                <span class="token string">&quot;age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>  
                <span class="token string">&quot;, height=&quot;</span> <span class="token operator">+</span> height <span class="token operator">+</span>  
                <span class="token string">&quot;, name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>  
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">BiJiao01</span> <span class="token keyword">implements</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Student</span> o1<span class="token punctuation">,</span> <span class="token class-name">Student</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token comment">//比较年龄：  </span>
        <span class="token keyword">return</span> o1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span>o2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test02</span> <span class="token punctuation">{</span>  
    <span class="token comment">//这是main方法，程序的入口  </span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token comment">//比较两个学生：  </span>
        <span class="token class-name">Student</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">160.5</span><span class="token punctuation">,</span><span class="token string">&quot;alili&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">Student</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">,</span><span class="token number">170.5</span><span class="token punctuation">,</span><span class="token string">&quot;bnana&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token comment">//获取外部比较器：  </span>
        <span class="token class-name">Comparator</span> bj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BiJiao03</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bj1<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","比较器.html.vue"]]);export{r as default};
