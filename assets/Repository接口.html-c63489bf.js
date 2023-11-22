import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as a,c as d,d as l,e,b as u,w as r,f as n}from"./app-71f45f98.js";const v="/CoderNotes/assets/image-20230803101258535-1b3e762b.png",o="/CoderNotes/assets/image-20230803101439924-83594776.png",c="/CoderNotes/assets/image-20230803101858591-8c15a6da.png",m={},b=n('<h2 id="了解repository接口" tabindex="-1"><a class="header-anchor" href="#了解repository接口" aria-hidden="true">#</a> 了解Repository接口</h2><p>Repository 接口是 SpringDataJPA 中为我我们提供的所有接口中的顶层接口</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>该接口是标志接口</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Repository 提供了两种查询方式的支持</p><ol><li>基于方法名称命名规则查询</li><li>基于<code>@Query</code> 注解查询</li></ol><h2 id="搭建环境" tabindex="-1"><a class="header-anchor" href="#搭建环境" aria-hidden="true">#</a> 搭建环境</h2>',8),p=n('<h2 id="使用repository接口" tabindex="-1"><a class="header-anchor" href="#使用repository接口" aria-hidden="true">#</a> 使用Repository接口</h2><blockquote><p>Repository接口接口是顶级标记接口,提供了对DB的查询操作和更新操作</p></blockquote><h3 id="使用方法名命名规则查询" tabindex="-1"><a class="header-anchor" href="#使用方法名命名规则查询" aria-hidden="true">#</a> 使用方法名命名规则查询</h3><h4 id="命名规则" tabindex="-1"><a class="header-anchor" href="#命名规则" aria-hidden="true">#</a> 命名规则</h4><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="实现使用" tabindex="-1"><a class="header-anchor" href="#实现使用" aria-hidden="true">#</a> 实现使用</h4><p>StudentDaoByName.java接口继承Repository接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface StudentDaoByName extends Repository&lt;Student, Integer&gt; {
    //from student where stuName = ?
    Student findByStuName(String name);
    //from student where stuName like %?%
    List&lt;Student&gt; findByStuNameContaining(String name);
    // from student where stuAge &gt; ?
    List&lt;Student&gt; findByStuAgeAfter(Integer stuAge);
    // from student where stuName like %?% and stuAge &gt; ?
    List&lt;Student&gt; findByStuNameContainingAndStuAgeAfter(String name,Integer stuAge);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)
public class TestDemo02 {
    @Autowired
    private StudentDaoByName studentDaoByName;
    @Test
    @Transactional
    public void query1(){
        Student student = studentDaoByName.findByStuName(&quot;王五&quot;);
        System.out.println(student);
    }
    @Test
    @Transactional
    public void query2(){
        List&lt;Student&gt; students = studentDaoByName.findByStuNameContaining(&quot;name&quot;);
        students.forEach(System.out::println);
    }
    @Test
    @Transactional
    public void query3(){
        List&lt;Student&gt; students = studentDaoByName.findByStuAgeAfter(18);
        students.forEach(System.out::println);
    }
    @Test
    @Transactional
    public void query4(){
        List&lt;Student&gt; students = studentDaoByName.findByStuNameContainingAndStuAgeAfter(&quot;name&quot;,18);
        students.forEach(System.out::println);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>我们发现,但是用命名规则时,对于复杂的场景下,名字会变得冗长,不是很方便而且容易出错</p></blockquote><h3 id="使用-query注解查询" tabindex="-1"><a class="header-anchor" href="#使用-query注解查询" aria-hidden="true">#</a> 使用@Query注解查询</h3><p>使用<code>@Query</code>注解可以应对复杂场景下的查询操作,可以使用JPQL和SQL语句</p><blockquote><p><code>@Query</code>注解可以完成数据更新操作，但是不能实现数据的添加和删除操作</p></blockquote><h4 id="jpql" tabindex="-1"><a class="header-anchor" href="#jpql" aria-hidden="true">#</a> JPQL</h4><p>JPQL：是通过Hibernate的HQL语句演变而来的，他和HQL语句很相似</p><p>StudentDaoByAnnotations01.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface StudentDaoByAnnotations01 extends Repository&lt;Student, Integer&gt; {
    @Query(&quot;from Student where stuName = ?&quot;)
    Student selectByStuName(String name);
    @Query(&quot;from Student where stuName like ?&quot;)
    List&lt;Student&gt; selectByStuNameLike(String name);
    @Query(&quot;from Student where  stuAge &gt; ?&quot;)
    List&lt;Student&gt; selectByStuAge(Integer stuAge);
    @Query(&quot;from Student where  stuName like ? and stuAge &gt; ?&quot;)
    List&lt;Student&gt; findByStuNameAndStuAge(String name,Integer stuAge);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)
public class TestDemo03 {
    @Autowired
    private StudentDaoByAnnotations01 studentDaoByAnnotations01;
    @Test
    @Transactional
    public void query1(){
        Student student = studentDaoByAnnotations01.selectByStuName(&quot;王五&quot;);
        System.out.println(student);
    }
    @Test
    @Transactional
    public void query2(){
        List&lt;Student&gt; students = studentDaoByAnnotations01.selectByStuNameLike(&quot;%name%&quot;);
        students.forEach(System.out::println);
    }
    @Test
    @Transactional
    public void query3(){
        List&lt;Student&gt; students = studentDaoByAnnotations01.selectByStuAge(18);
        students.forEach(System.out::println);
    }
    @Test
    @Transactional
    public void query4(){
        List&lt;Student&gt; students = studentDaoByAnnotations01.findByStuNameAndStuAge(&quot;%name%&quot;,18);
        students.forEach(System.out::println);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sql" tabindex="-1"><a class="header-anchor" href="#sql" aria-hidden="true">#</a> SQL</h4><p>我们也可以直接使用SQL语句,不过<strong>需要将nativeQuery属性设置为True</strong></p><p>StudentDaoByAnnotations02.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface StudentDaoByAnnotations02 extends Repository&lt;Student, Integer&gt; {
    @Query(value = &quot;select * from Student where stuName = ?&quot;,nativeQuery = true)
    Student selectByStuName(String name);
    @Query(value = &quot;select * from Student where stuName like ?&quot;,nativeQuery = true)
    List&lt;Student&gt; selectByStuNameLike(String name);
    @Query(value = &quot;select * from Student where  stuAge &gt; ?&quot;,nativeQuery = true)
    List&lt;Student&gt; selectByStuAge(Integer stuAge);
    @Query(value = &quot;select * from Student where  stuName like ? and stuAge &gt; ?&quot;,nativeQuery = true)
    List&lt;Student&gt; findByStuNameAndStuAge(String name,Integer stuAge);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)
public class TestDemo04 {
    @Autowired
    private StudentDaoByAnnotations02 studentDaoByAnnotations02;
    @Test
    @Transactional
    public void query1(){
        Student student = studentDaoByAnnotations02.selectByStuName(&quot;王五&quot;);
        System.out.println(student);
    }
    @Test
    @Transactional
    public void query2(){
        List&lt;Student&gt; students = studentDaoByAnnotations02.selectByStuNameLike(&quot;%name%&quot;);
        students.forEach(System.out::println);
    }
    @Test
    @Transactional
    public void query3(){
        List&lt;Student&gt; students = studentDaoByAnnotations02.selectByStuAge(18);
        students.forEach(System.out::println);
    }
    @Test
    @Transactional
    public void query4(){
        List&lt;Student&gt; students = studentDaoByAnnotations02.findByStuNameAndStuAge(&quot;%name%&quot;,18);
        students.forEach(System.out::println);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对数据的更新" tabindex="-1"><a class="header-anchor" href="#对数据的更新" aria-hidden="true">#</a> 对数据的更新</h4><p>当我们使用<code>@Query</code>注解执行更新操作时,需要使用<code>@Modifying</code>注解修饰方法</p><p>StudentDaoByAnnotations03.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface StudentDaoByAnnotations03 extends Repository&lt;Student, Integer&gt; {
    @Query(value = &quot;update Student set stuName = ? where stuId = ? &quot;)
    @Modifying// 被@Modifying修饰的方法是一个更新操作
    void updateStudentInfo(String stuName,Integer stuId);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestDemo05.java测试方法</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)
public class TestDemo05 {
    @Autowired
    private StudentDaoByAnnotations03 studentDaoByAnnotations03;
    @Test
    @Transactional
    @Rollback(false)
    public void update01(){
        studentDaoByAnnotations03.updateStudentInfo(&quot;aaaa&quot;, 1);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function g(y,S){const i=s("RouterLink");return a(),d("div",null,[b,l("p",null,[e("请按照开始章节搭建环境 : "),u(i,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/06_SpringJPA/03_SpringJPA%E7%9F%A5%E8%AF%86%E7%82%B9/01_%E5%85%A5%E9%97%A8%E6%A1%88%E4%BE%8B/%E5%85%A5%E9%97%A8%E6%A1%88%E4%BE%8B.html"},{default:r(()=>[e("入门案例")]),_:1})]),p])}const A=t(m,[["render",g],["__file","Repository接口.html.vue"]]);export{A as default};
