import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as t,c as l,d as c,e as n,b as r,w as d,f as e}from"./app-71f45f98.js";const u={},o=e(`<h2 id="了解jparepository接口" tabindex="-1"><a class="header-anchor" href="#了解jparepository接口" aria-hidden="true">#</a> 了解JpaRepository接口</h2><blockquote><p>提供的有多条件查询，并支持分页和排序功能，此接口不能单独使用，需要和其他的接口一块使用</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">JpaSpecificationExecutor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token class-name">T</span> <span class="token function">findOne</span><span class="token punctuation">(</span><span class="token class-name">Specification</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> var1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token class-name">Specification</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> var1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token class-name">Specification</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> var1<span class="token punctuation">,</span> <span class="token class-name">Pageable</span> var2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token class-name">Specification</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> var1<span class="token punctuation">,</span> <span class="token class-name">Sort</span> var2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token class-name">Specification</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> var1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搭建环境" tabindex="-1"><a class="header-anchor" href="#搭建环境" aria-hidden="true">#</a> 搭建环境</h2>`,4),p=e(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="创建接口" tabindex="-1"><a class="header-anchor" href="#创建接口" aria-hidden="true">#</a> 创建接口</h3><p>StudentDaoByCrudRepository.java 接口 继承 CrudRepository接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface StudentDaoJpaSpecificationExecutor extends JpaRepository&lt;Student,Integer&gt;, JpaSpecificationExecutor {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单一条件查询" tabindex="-1"><a class="header-anchor" href="#单一条件查询" aria-hidden="true">#</a> 单一条件查询</h3><blockquote><p><code>List&lt;T&gt; findAll(Specification&lt;T&gt; var1);</code> 方法可以进行单一查询</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)  
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)  
public class TestDemo08 {  
    @Autowired  
    private StudentDaoJpaSpecificationExecutor studentDaoJpaSpecificationExecutor;  
    /**  
     * 单一结果查询  
     */  
    @Test  
    public void testDemo01(){  
        Specification specification = new Specification() {  
            /**  
             * 定义查询条件  
             * @param root 根对象  封装查询条件的对象  
             * @param criteriaQuery 基本的查询  
             * @param criteriaBuilder 创建查询条件  
             * @return  
             */  
            @Override  
            public Predicate toPredicate(Root root, CriteriaQuery criteriaQuery, CriteriaBuilder criteriaBuilder) {  
                Predicate equal = criteriaBuilder.equal(root.get(&quot;stuName&quot;), &quot;张三&quot;);  
                return equal;  
            }  
        };  
        List studentsList = studentDaoJpaSpecificationExecutor.findAll(specification);  
        studentsList.forEach(System.out::println);  
    }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多条件查询" tabindex="-1"><a class="header-anchor" href="#多条件查询" aria-hidden="true">#</a> 多条件查询</h3><blockquote><p><code>List&lt;T&gt; findAll(Specification&lt;T&gt; var1);</code> 当我们在Specification接口中将参数数组存放到CriteriaBuilder中时，此时获取的就是多个查询条件的结果</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)  
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)  
public class TestDemo08 {  
    @Autowired  
    private StudentDaoJpaSpecificationExecutor studentDaoJpaSpecificationExecutor;  
    @Test  
    public void testDemo02(){  
        Specification specification = new Specification() {  
            /**  
             * 定义查询条件  
             * @param root 根对象  封装查询条件的对象  
             * @param criteriaQuery 基本的查询  
             * @param criteriaBuilder 创建查询条件  
             * @return  
             */  
            @Override  
            public Predicate toPredicate(Root root, CriteriaQuery criteriaQuery, CriteriaBuilder criteriaBuilder) {  
                ArrayList&lt;Predicate&gt; predicates = new ArrayList&lt;&gt;();  
                predicates.add(criteriaBuilder.equal(root.get(&quot;stuName&quot;),&quot;张三&quot;));  
                predicates.add(criteriaBuilder.equal(root.get(&quot;stuAge&quot;),18));  
                Predicate[] predicate = new Predicate[predicates.size()];  
                return criteriaBuilder.and(predicates.toArray(predicate));  
            }  
        };  
        List studentsList = studentDaoJpaSpecificationExecutor.findAll(specification);  
        studentsList.forEach(System.out::println);  
    }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h3><blockquote><p><code>Page&lt;T&gt; findAll(Specification&lt;T&gt; var1, Pageable var2);</code></p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)  
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)  
public class TestDemo08 {  
    @Autowired  
    private StudentDaoJpaSpecificationExecutor studentDaoJpaSpecificationExecutor;  
    @Test  
    public void testDemo03(){  
        Specification specification = new Specification() {  
            /**  
             * 定义查询条件  
             * @param root 根对象  封装查询条件的对象  
             * @param criteriaQuery 基本的查询  
             * @param criteriaBuilder 创建查询条件  
             * @return  
             */  
            @Override  
            public Predicate toPredicate(Root root, CriteriaQuery criteriaQuery, CriteriaBuilder criteriaBuilder) {  
                return criteriaBuilder.equal(root.get(&quot;stuName&quot;),&quot;zhangsan&quot;);  
            }  
        };  
        PageRequest pageRequest = new PageRequest(0, 3);  
        Page pageInfo = studentDaoJpaSpecificationExecutor.findAll(specification, pageRequest);  
        System.out.println(pageInfo.getTotalElements());  
        System.out.println(pageInfo.getTotalPages());  
        List content = pageInfo.getContent();  
        System.out.println(content);  
    } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h3><blockquote><p><code>List&lt;T&gt; findAll(Specification&lt;T&gt; var1, Sort var2);</code></p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)  
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)  
public class TestDemo08 {  
    @Autowired  
    private StudentDaoJpaSpecificationExecutor studentDaoJpaSpecificationExecutor;  
    @Test  
    public void testDemo04(){  
        Specification specification = new Specification() {  
            /**  
             * 定义查询条件  
             * @param root 根对象  封装查询条件的对象  
             * @param criteriaQuery 基本的查询  
             * @param criteriaBuilder 创建查询条件  
             * @return  
             */  
            @Override  
            public Predicate toPredicate(Root root, CriteriaQuery criteriaQuery, CriteriaBuilder criteriaBuilder) {  
                return criteriaBuilder.equal(root.get(&quot;stuName&quot;),&quot;zhangsan&quot;);  
            }  
        };  
        Sort sortInfo = new Sort(Sort.Direction.DESC, &quot;stuName&quot;);  
        List stuList = studentDaoJpaSpecificationExecutor.findAll(specification, sortInfo);  
        stuList.forEach(System.out::println);  
    }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分页和排序" tabindex="-1"><a class="header-anchor" href="#分页和排序" aria-hidden="true">#</a> 分页和排序</h3><blockquote><p>分页和排序可以将构造分页时，将排序传递进去，然后在使用<code>Page&lt;T&gt; findAll(Specification&lt;T&gt; var1, Pageable var2);</code> 查询</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)  
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)  
public class TestDemo08 {  
    @Autowired  
    private StudentDaoJpaSpecificationExecutor studentDaoJpaSpecificationExecutor;  
    @Test  
    public void testDemo05(){  
        Specification specification = new Specification() {  
            /**  
             * 定义查询条件  
             * @param root 根对象  封装查询条件的对象  
             * @param criteriaQuery 基本的查询  
             * @param criteriaBuilder 创建查询条件  
             * @return  
             */  
            @Override  
            public Predicate toPredicate(Root root, CriteriaQuery criteriaQuery, CriteriaBuilder criteriaBuilder) {  
                return criteriaBuilder.equal(root.get(&quot;stuName&quot;),&quot;zhangsan&quot;);  
            }  
        };  
        Sort sortInfo = new Sort(Sort.Direction.DESC, &quot;stuName&quot;);  
        // 封装分页对象的时候我们可以直接指定 排序的规则
        PageRequest pageRequest = new PageRequest(0, 3, sortInfo);  
        Page pageInfo = studentDaoJpaSpecificationExecutor.findAll(specification, pageRequest);  
        pageInfo.getContent().forEach(System.out::println);  
    }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function v(m,b){const i=s("RouterLink");return t(),l("div",null,[o,c("p",null,[n("请按照开始章节搭建环境 : "),r(i,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/06_SpringJPA/03_SpringJPA%E7%9F%A5%E8%AF%86%E7%82%B9/01_%E5%85%A5%E9%97%A8%E6%A1%88%E4%BE%8B/%E5%85%A5%E9%97%A8%E6%A1%88%E4%BE%8B.html"},{default:d(()=>[n("入门案例")]),_:1})]),p])}const k=a(u,[["render",v],["__file","JpaSpecificationExecutor接口.html.vue"]]);export{k as default};
