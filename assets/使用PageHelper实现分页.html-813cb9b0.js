import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c as l,d as e,e as n,b as d,w as r,f as u}from"./app-71f45f98.js";const c="/CoderNotes/assets/image-20230706112101828-0c83aa04.png",o="/CoderNotes/assets/image-20230706134455346-2ae8a74e.png",p="/CoderNotes/assets/image-20230706135037132-ee93502a.png",v="/CoderNotes/assets/image-20230706135702860-7d6c0431.png",m="/CoderNotes/assets/image-20230706140053291-bf85c28d.png",g="/CoderNotes/assets/image-20230706140146465-af96fc38.png",b={},h=e("h2",{id:"为什么要使用pagehelper",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#为什么要使用pagehelper","aria-hidden":"true"},"#"),n(" 为什么要使用PageHelper")],-1),L=u('<p>但是我们发现这样的<strong>操作过于臃肿</strong>,我们需要不断的计算DB中的数量以及当前页面的位置去拼接SQL查询</p><p>在Mybatis中帮我们提供了一个PageHelper的插件,可以让我们用极少的代码实现分页功能</p><h2 id="了解pagehelper" tabindex="-1"><a class="header-anchor" href="#了解pagehelper" aria-hidden="true">#</a> 了解PageHelper</h2><h3 id="内部原理" tabindex="-1"><a class="header-anchor" href="#内部原理" aria-hidden="true">#</a> 内部原理</h3><p>PageHelper方法使用了静态的ThreadLocal参数，分页参数和线程是绑定的。</p><p>内部流程是ThreadLocal中设置了分页参数（pageIndex，pageSize），之后在查询执行的时候，获取当线程中的分页参数，执行查询的时候通过拦截器在sql语句中添加分页参数，之后实现分页查询，查询结束后在 finally 语句中清除ThreadLocal中的查询参数</p><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3><ol><li>调用PageHelper方法：PageHelper.startPage(pageNum, pageSize)</li><li>MyBatis 查询方法 : 注意：只要你可以保证在PageHelper方法调用后紧跟 MyBatis 查询方法，这就是安全的。因为PageHelper在finally代码段中自动清除了ThreadLocal存储的对象。</li><li>使用结果对PageInfo对象进行初始化</li><li>返回PageInfo对象中的结果</li></ol><h2 id="使用pagehelper" tabindex="-1"><a class="header-anchor" href="#使用pagehelper" aria-hidden="true">#</a> 使用PageHelper</h2><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数据准备" tabindex="-1"><a class="header-anchor" href="#数据准备" aria-hidden="true">#</a> 数据准备</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>CREATE TABLE \`student\` (
    \`stuid\` int(11) NOT NULL AUTO_INCREMENT,
    \`stuname\` varchar(20) DEFAULT NULL,
    \`stuage\` int(2) DEFAULT NULL,
    \`stugender\` char(2) DEFAULT NULL,
    \`filename\` varchar(100) DEFAULT NULL,
    \`filetype\` varchar(20) DEFAULT NULL,
    PRIMARY KEY (\`stuid\`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT   CHARSET=utf8;

insert into \`student\`(\`stuid\`,\`stuname\`,\`stuage\`,\`stugender\`,\`filename\`,\`filetype\`)   values   (1,&#39;name1&#39;,11,&#39;1&#39;,NULL,NULL),(2,&#39;name2&#39;,12,&#39;0&#39;,NULL,NULL),(3,&#39;name3&#39;,13,&#39;1&#39;,NULL,NULL),(4,&#39;name4&#39;,14,&#39;1&#39;,NULL,NULL),(5,&#39;name5&#39;,15,&#39;1&#39;,NULL,NULL),(6,&#39;name6&#39;,16,&#39;0&#39;,NULL,NULL),(7,&#39;name7&#39;,17,&#39;0&#39;,NULL,NULL),(8,&#39;name8&#39;,18,&#39;0&#39;,NULL,NULL),(9,&#39;name9&#39;,19,&#39;0&#39;,NULL,NULL),(10,&#39;name10&#39;,20,&#39;1&#39;,NULL,NULL),(11,&#39;name11&#39;,11,&#39;0&#39;,NULL,NULL),(12,&#39;name12&#39;,12,&#39;1&#39;,NULL,NULL),(13,&#39;name13&#39;,13,&#39;0&#39;,NULL,NULL),(14,&#39;name14&#39;,14,&#39;1&#39;,NULL,NULL),(15,&#39;name15&#39;,15,&#39;0&#39;,NULL,NULL),(16,&#39;name16&#39;,16,&#39;1&#39;,NULL,NULL),(17,&#39;name17&#39;,17,&#39;1&#39;,NULL,NULL),(18,&#39;name18&#39;,18,&#39;0&#39;,NULL,NULL),(19,&#39;name19&#39;,19,&#39;1&#39;,NULL,NULL),(20,&#39;name20&#39;,20,&#39;0&#39;,NULL,NULL);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现查询" tabindex="-1"><a class="header-anchor" href="#实现查询" aria-hidden="true">#</a> 实现查询</h3><p>关于Maven项目快速部署化Mybatis环境,请参考之前的教程.在此只展示核心业务代码:</p><p>com.meturing.mapper.StudentMapper.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface StudentMapper {
    List&lt;Student&gt; findeAllStudent();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>com.meturing.pojo.Student.java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span> <span class="token comment">//所有参数构造Get/Set方法</span>
<span class="token annotation punctuation">@AllArgsConstructor</span> <span class="token comment">//导入全参构造函数</span>
<span class="token annotation punctuation">@NoArgsConstructor</span> <span class="token comment">//导入无参构造函数</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> stuId<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> stuAge<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuGender<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> fileName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> fileType<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>resources/com/meturing/mapper/StudentMapper.xml</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
&lt;!DOCTYPE mapper
        PUBLIC &quot;-//mybatis.org//DTDMapper3.0//EN&quot;
        &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;
&lt;mapper namespace=&quot;com.meturing.mapper.StudentMapper&quot;&gt;
    &lt;select id=&quot;findeAllStudent&quot; resultType=&quot;student&quot;&gt;
        select * from student
    &lt;/select&gt;
&lt;/mapper&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test01.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Test01 {
    private static SqlSession sqlSession = null;
    /**
     * 初始化
     *  Before注解会使方法在执行测试单元前执行
     * @author sqTan
     * @date 2023/04/09
     */
    @Before
    public void init() {
        //创建一个SqlSessionFactoryBuilder对象
        SqlSessionFactoryBuilder sqlSessionFactoryBuilder = new SqlSessionFactoryBuilder();
        InputStream resourceAsStream = null;
        try {
            //通过Resources类获取指定配置文件的InputStream流
            resourceAsStream = Resources.getResourceAsStream(&quot;sqlMapConfig.xml&quot;);
        } catch (IOException e) {
            e.printStackTrace();
        }
        //通过SqlSessionFactoryBuilder对象使用配置文件的InputStream流构建一个SqlSessionFactory对象
        SqlSessionFactory build = sqlSessionFactoryBuilder.build(resourceAsStream);
        //使用SqlSessionFactory对象打开数据库链接
        sqlSession = build.openSession();
    }

    @Test
    public void Testcache1(){
        StudentMapper mapper = sqlSession.getMapper(StudentMapper.class);
        List&lt;Student&gt; emp = mapper.findeAllStudent();
        sqlSession.commit();
        for (int i = 0; i &lt; emp.size(); i++) {
            System.out.println(&quot;第[&quot;+(i+1)+&quot;]个学生:&quot;+emp.get(i));
        }
    }
    /**
     * 释放
     * After注解会使方法在执行测试单元后执行
     * @author sqTan
     * @date 2023/04/09
     */
    @After
    public void release(){
        //关闭链接
        sqlSession.close();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现分页" tabindex="-1"><a class="header-anchor" href="#实现分页" aria-hidden="true">#</a> 实现分页</h3><h4 id="导入插件" tabindex="-1"><a class="header-anchor" href="#导入插件" aria-hidden="true">#</a> 导入插件</h4><h5 id="导入依赖" tabindex="-1"><a class="header-anchor" href="#导入依赖" aria-hidden="true">#</a> 导入依赖</h5><p>新增依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--pagehelper--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.pagehelper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>pagehelper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.1.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="配置插件" tabindex="-1"><a class="header-anchor" href="#配置插件" aria-hidden="true">#</a> 配置插件</h5><p>在Mybatis配置文件中引入分页插件</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;!--分页插件--&gt;
&lt;plugins&gt;
	&lt;!-- com.github.pagehelper为PageHelper类所在包名 --&gt;
	&lt;plugin interceptor=&quot;com.github.pagehelper.PageHelper&quot;&gt;
		&lt;!-- 设置数据库类型 Oracle,Mysql,MariaDB,SQLite,Hsqldb,PostgreSQL六种数据库 --&gt;
		&lt;property name=&quot;dialect&quot; value=&quot;mysql&quot; /&gt;
		&lt;property name=&quot;rowBoundsWithCount&quot; value=&quot;true&quot; /&gt;
	&lt;/plugin&gt;
&lt;/plugins&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码" aria-hidden="true">#</a> 实现代码</h4><h5 id="方式一-直接使用" tabindex="-1"><a class="header-anchor" href="#方式一-直接使用" aria-hidden="true">#</a> 方式一 : 直接使用</h5><p><code>PageHelper.startPage(1, 5);</code> 设置当前为第一页,每页展示五个数据</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test
public void Testcache2(){
	StudentMapper mapper = sqlSession.getMapper(StudentMapper.class);
	//直接设置分页插件的当前页数和每页大小
	PageHelper.startPage(1, 5);
	List&lt;Student&gt; emp = mapper.findeAllStudent();
	sqlSession.commit();
	for (int i = 0; i &lt; emp.size(); i++) {
		System.out.println(&quot;第[&quot;+(i+1)+&quot;]个学生:&quot;+emp.get(i));
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们直接看到当前emp的结果展示就是分页后的结果</p><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="方式二-返回page对象" tabindex="-1"><a class="header-anchor" href="#方式二-返回page对象" aria-hidden="true">#</a> 方式二 : 返回Page对象</h5><p>但是这样的话只是对结果进行分页,我们在使用过程中还需要知道分页信息,所以可以尝试返回Page对象</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void Testcache2(){
        StudentMapper mapper = sqlSession.getMapper(StudentMapper.class);
        Page&lt;Student&gt; studentPage = PageHelper.startPage(1, 5);
        List&lt;Student&gt; emp = mapper.findeAllStudent();
        sqlSession.commit();
        System.out.println(studentPage.getResult());//获取执行结果
        System.out.println(&quot;当前页码:&quot;+studentPage.getPageNum());//获取当前页码
        System.out.println(&quot;每页数据的数量:&quot;+studentPage.getPageSize());//获取当前页码
        System.out.println(&quot;始页首行行号:&quot;+studentPage.getStartRow());//始页首行行号
        System.out.println(&quot;尾页尾行行号:&quot;+studentPage.getEndRow());//尾页尾行行号
        System.out.println(&quot;总记录数:&quot;+studentPage.getTotal());//总记录数
        System.out.println(&quot;总页数:&quot;+studentPage.getPages());//总页数
        for (int i = 0; i &lt; studentPage.getResult().size(); i++) {
            System.out.println(&quot;第[&quot;+(i+1)+&quot;]个学生:&quot;+studentPage.getResult().get(i));
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下<br><img src="`+p+`" alt="" loading="lazy"></p><blockquote><p>直接返回Page我们是不推荐的</p></blockquote><h5 id="方式三-返回pageinfo对象-推荐" tabindex="-1"><a class="header-anchor" href="#方式三-返回pageinfo对象-推荐" aria-hidden="true">#</a> 方式三 : 返回PageInfo对象 - 推荐</h5><p>使用PageInfo对象返回更多的数据</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test
public void Testcache3(){
	StudentMapper mapper = sqlSession.getMapper(StudentMapper.class);
	PageHelper.startPage(1, 5);
	List&lt;Student&gt; emp = mapper.findeAllStudent();
	sqlSession.commit();
	PageInfo&lt;Student&gt; studentPageInfo = new PageInfo&lt;&gt;(emp);
	System.out.println(&quot;当前页&quot;+studentPageInfo.getPageNum());       //当前页
	System.out.println(&quot;每页显示数据条数&quot;+studentPageInfo.getPageSize());      //每页显示数据条数
	System.out.println(&quot;当前页的数量&quot;+studentPageInfo.getSize());          //当前页的数量
	System.out.println(&quot;始页首行行号&quot;+studentPageInfo.getStartRow());      //始页首行行号
	System.out.println(&quot;尾页尾行行号&quot;+studentPageInfo.getEndRow());        //尾页尾行行号
	System.out.println(&quot;总记录数&quot;+studentPageInfo.getTotal());         //总记录数
	System.out.println(&quot;总页数&quot;+studentPageInfo.getPages());         //总页数
	System.out.println(&quot;查询结果的数据&quot;+studentPageInfo.getList());			//查询结果的数据
	System.out.println(&quot;首页&quot;+studentPageInfo.getFirstPage());     //首页
	System.out.println(&quot;上一页&quot;+studentPageInfo.getPrePage());       //上一页
	System.out.println(&quot;下一页&quot;+studentPageInfo.getNextPage());      // 下一页
	for (int i = 0; i &lt; studentPageInfo.getList().size(); i++) {
		System.out.println(&quot;第[&quot;+(i+1)+&quot;]个学生:&quot;+studentPageInfo.getList().get(i));
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下<br><img src="`+v+'" alt="" loading="lazy"></p><h2 id="pageinfo对象和page对象的区别" tabindex="-1"><a class="header-anchor" href="#pageinfo对象和page对象的区别" aria-hidden="true">#</a> PageInfo对象和Page对象的区别</h2><h3 id="类别" tabindex="-1"><a class="header-anchor" href="#类别" aria-hidden="true">#</a> 类别</h3><p>Page是一个ArrayList -&gt; <code>public class Page&lt;E&gt;extends Array List&lt;E&gt;{}</code></p><p>PageInfo是一个对象，能获取到的数据比Page多 -&gt; <code>public class Page Info&lt;T&gt; implements Serializable{}</code></p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>在使用PageInfo时,我们直接执行SQL后结果就在里面,使用<code>Page对象.getResult()</code>获取执行结果</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用PageInfo对象时,我们需要先使设定分页参数,然后执行SQL,最后初始化PageInfo时将SQL的执行结果进行传入. 使用<code>pageInfo对象.getList()</code>获取结果<br><img src="'+g+`" alt="" loading="lazy"></p><h3 id="内置属性" tabindex="-1"><a class="header-anchor" href="#内置属性" aria-hidden="true">#</a> 内置属性</h3><p>page对象参数</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private int pageNum;	//当前页码
private int pageSize; 	//每页数据的数量
private int startRow;	//始页首行行号
private int endRow;		//尾页尾行行号
private long total;		//总记录数
private int pages;		//总页数
private Boolean reasonable; //分页合理化
private Boolean pageSizeZero; //当设置为true的时候，如果pagesize设置为0（或RowBounds的limit=0），就不执行分页，返回全部结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PageInfo对象参数</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private int pageNum;   			//当前页
private int pageSize;			//每页显示数据条数
private int size;				//当前页的数量
private int startRow; 			//始页首行行号
private int endRow;				//尾页尾行行号
private long total;				//总记录数
private int pages;				//总页数
private List&lt;T&gt; list;			//查询结果的数据
private int firstPage;			//首页
private int prePage;			//上一页
private int nextPage;			// 下一页
private int lastPage;			//最后一页
private boolean isFirstPage;	//是不是第一页
private boolean isLastPage;		//是不是最后一页
private boolean hasPreviousPage;//有没有上一页
private boolean hasNextPage;	//有没有下一页
private int navigatePages;		//所有导航页号
private int[] navigatepageNums;	//导航页码数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58);function S(q,f){const a=i("RouterLink");return t(),l("div",null,[h,e("p",null,[n("在前面的学习中,我们使用JDBC+JSP+Servlet技术简单实现了一个带分页的用户学习展示功能,详见"),d(a,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/07_%E5%88%86%E9%A1%B5/%E5%88%86%E9%A1%B5.html"},{default:r(()=>[n("分页")]),_:1})]),L])}const N=s(b,[["render",S],["__file","使用PageHelper实现分页.html.vue"]]);export{N as default};
