import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,d as i,e as n,b as c,w as l,f as s}from"./app-71f45f98.js";const u="/CoderNotes/assets/image-20230803111732559-1b537e0f.png",d={},r=s('<h2 id="了解crudrepository接口" tabindex="-1"><a class="header-anchor" href="#了解crudrepository接口" aria-hidden="true">#</a> 了解CrudRepository接口</h2><blockquote><p>CrudRepository接口继承自Repository接口，所以Repository接口具有的功能CrudRepository接口都具有，而且又扩展了CRUD相关的功能</p></blockquote><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>接口内容</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@NoRepositoryBean
public interface CrudRepository&lt;T, ID extends Serializable&gt; extends Repository&lt;T, ID&gt; {
    &lt;S extends T&gt; S save(S var1);
    &lt;S extends T&gt; Iterable&lt;S&gt; save(Iterable&lt;S&gt; var1);
    T findOne(ID var1);
    boolean exists(ID var1);
    Iterable&lt;T&gt; findAll();
    Iterable&lt;T&gt; findAll(Iterable&lt;ID&gt; var1);
    long count();
    void delete(ID var1);
    void delete(T var1);
    void delete(Iterable&lt;? extends T&gt; var1);
    void deleteAll();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搭建环境" tabindex="-1"><a class="header-anchor" href="#搭建环境" aria-hidden="true">#</a> 搭建环境</h2>`,6),k=s(`<h2 id="使用crudrepository接口" tabindex="-1"><a class="header-anchor" href="#使用crudrepository接口" aria-hidden="true">#</a> 使用CrudRepository接口</h2><h3 id="创建接口" tabindex="-1"><a class="header-anchor" href="#创建接口" aria-hidden="true">#</a> 创建接口</h3><p>StudentDaoByCrudRepository.java 接口 继承 CrudRepository接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface StudentDaoByCrudRepository extends CrudRepository&lt;Student, Integer&gt; {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现业务代码" tabindex="-1"><a class="header-anchor" href="#实现业务代码" aria-hidden="true">#</a> 实现业务代码</h3><h4 id="添加数据" tabindex="-1"><a class="header-anchor" href="#添加数据" aria-hidden="true">#</a> 添加数据</h4><ul><li>save -&gt; 保存指定对象到DB中</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringJUnit4ClassRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ContextConfiguration</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:applicationContext.xml&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDemo06</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">StudentDaoByCrudRepository</span> studentDaoByCrudRepository<span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 添加数据
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span><span class="token function">setStuName</span><span class="token punctuation">(</span><span class="token string">&quot;成龙&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span><span class="token function">setStuAge</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        studentDaoByCrudRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	
    <span class="token doc-comment comment">/**
     * 批量添加数据
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            student<span class="token punctuation">.</span><span class="token function">setStuName</span><span class="token punctuation">(</span><span class="token string">&quot;成龙&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            student<span class="token punctuation">.</span><span class="token function">setStuAge</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        studentDaoByCrudRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据" aria-hidden="true">#</a> 删除数据</h4><ul><li>delete -&gt; 删除指定主键的数据</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringJUnit4ClassRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ContextConfiguration</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:applicationContext.xml&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDemo06</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">StudentDaoByCrudRepository</span> studentDaoByCrudRepository<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 删除数据
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        studentDaoByCrudRepository<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="更新数据" tabindex="-1"><a class="header-anchor" href="#更新数据" aria-hidden="true">#</a> 更新数据</h4><ul><li>save -&gt; 如果主键不为空时,则为更新操作</li><li>如果是findOne查询出来的数据,直接修改他的对象内容,也会通过序列化到DB内部</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringJUnit4ClassRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ContextConfiguration</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:applicationContext.xml&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDemo06</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">StudentDaoByCrudRepository</span> studentDaoByCrudRepository<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 更新数据
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 根据save方法来实现 如果Users对象的userId属性不为空则update</span>
        <span class="token class-name">Student</span> student <span class="token operator">=</span> studentDaoByCrudRepository<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token number">34</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span><span class="token function">setStuName</span><span class="token punctuation">(</span><span class="token string">&quot;成龙666&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        studentDaoByCrudRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 更新数据 方式二
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token annotation punctuation">@Transactional</span>
    <span class="token annotation punctuation">@Rollback</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Student</span> student <span class="token operator">=</span> studentDaoByCrudRepository<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token number">34</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span><span class="token function">setStuName</span><span class="token punctuation">(</span><span class="token string">&quot;成龙666&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h4><ul><li>findOne -&gt; 根据主键查询一条数据</li><li>findAll -&gt; 查询所有数据</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringJUnit4ClassRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ContextConfiguration</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:applicationContext.xml&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDemo06</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">StudentDaoByCrudRepository</span> studentDaoByCrudRepository<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 查询单条数据
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Student</span> student <span class="token operator">=</span> studentDaoByCrudRepository<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 查询所有的数据
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> studentList <span class="token operator">=</span> studentDaoByCrudRepository<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        studentList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function v(m,b){const a=e("RouterLink");return p(),o("div",null,[r,i("p",null,[n("请按照开始章节搭建环境 : "),c(a,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/06_SpringJPA/03_SpringJPA%E7%9F%A5%E8%AF%86%E7%82%B9/01_%E5%85%A5%E9%97%A8%E6%A1%88%E4%BE%8B/%E5%85%A5%E9%97%A8%E6%A1%88%E4%BE%8B.html"},{default:l(()=>[n("入门案例")]),_:1})]),k])}const h=t(d,[["render",v],["__file","CrudRepository接口.html.vue"]]);export{h as default};
