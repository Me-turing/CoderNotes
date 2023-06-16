<template><div><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<h3 id="数据库准备" tabindex="-1"><a class="header-anchor" href="#数据库准备" aria-hidden="true">#</a> 数据库准备</h3>
<p>继续使用该类型的数据源</p>
<p><RouterLink to="/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/01_Mybatis%E5%9F%BA%E7%A1%80/02_%E6%90%AD%E5%BB%BAMybatis%E9%A1%B9%E7%9B%AE%E7%8E%AF%E5%A2%83/%E6%90%AD%E5%BB%BAMybatis%E9%A1%B9%E7%9B%AE%E7%8E%AF%E5%A2%83.html#%E5%AF%BC%E5%85%A5%E6%95%B0%E6%8D%AE%E5%BA%93">导入数据库</RouterLink></p>
<h3 id="项目工程初始化" tabindex="-1"><a class="header-anchor" href="#项目工程初始化" aria-hidden="true">#</a> 项目工程初始化</h3>
<h4 id="导入maven依赖" tabindex="-1"><a class="header-anchor" href="#导入maven依赖" aria-hidden="true">#</a> 导入Maven依赖</h4>
<p>我们依旧需要导入以下依赖:</p>
<ol>
<li><code v-pre>spring-context </code>-&gt; Spring核心依赖</li>
<li><code v-pre>spring-aspects</code> -&gt; Spring切面</li>
<li><code v-pre>aopalliance</code> -&gt; AOP联盟包</li>
<li><code v-pre>druid </code>-&gt; 德鲁伊连接池</li>
<li><code v-pre>mysql-connector-java</code> -&gt; mysql连接驱动</li>
<li><code v-pre>spring-jdbc</code> -&gt; <strong>新</strong>  SpringJDBC包</li>
<li><code v-pre>spring-tx</code> -&gt; <strong>新</strong>  Spring事务</li>
<li><code v-pre>spring-orm</code> -&gt; <strong>新</strong>  SpringORM</li>
<li><code v-pre>lombok</code> -&gt; Lombok包</li>
<li><code v-pre>commons-logging</code> -&gt; Apache Commons日志</li>
<li><code v-pre>junit</code>   -&gt;  单元测试</li>
</ol>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;packaging&gt;jar&lt;/packaging&gt;

&lt;properties&gt;
	&lt;maven.compiler.source&gt;8&lt;/maven.compiler.source&gt;
	&lt;maven.compiler.target&gt;8&lt;/maven.compiler.target&gt;
	&lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
&lt;/properties&gt;
&lt;dependencies&gt;
	&lt;!-- Spring核心依赖 --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;org.springframework&lt;/groupId&gt;
		&lt;artifactId&gt;spring-context&lt;/artifactId&gt;
		&lt;version&gt;5.2.12.RELEASE&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!-- Spring切面 --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;org.springframework&lt;/groupId&gt;
		&lt;artifactId&gt;spring-aspects&lt;/artifactId&gt;
		&lt;version&gt;5.3.5&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!-- AOP联盟 --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;aopalliance&lt;/groupId&gt;
		&lt;artifactId&gt;aopalliance&lt;/artifactId&gt;
		&lt;version&gt;1.0&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!-- 德鲁伊连接池 --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;com.alibaba&lt;/groupId&gt;
		&lt;artifactId&gt;druid&lt;/artifactId&gt;
		&lt;version&gt;1.1.14&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!-- Mysql连接驱动 --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;mysql&lt;/groupId&gt;
		&lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
		&lt;version&gt;8.0.28&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!-- SpringJDBC包 --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;org.springframework&lt;/groupId&gt;
		&lt;artifactId&gt;spring-jdbc&lt;/artifactId&gt;
		&lt;version&gt;5.3.18&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!-- Spring事务管理 --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;org.springframework&lt;/groupId&gt;
		&lt;artifactId&gt;spring-tx&lt;/artifactId&gt;
		&lt;version&gt;5.3.18&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!-- Spring中的ORM映射 --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;org.springframework&lt;/groupId&gt;
		&lt;artifactId&gt;spring-orm&lt;/artifactId&gt;
		&lt;version&gt;5.3.5&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!-- lombok --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
		&lt;artifactId&gt;lombok&lt;/artifactId&gt;
		&lt;version&gt;1.18.26&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!-- Apache Commons日志 --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;commons-logging&lt;/groupId&gt;
		&lt;artifactId&gt;commons-logging&lt;/artifactId&gt;
		&lt;version&gt;1.2&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!-- 单元测试 --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;junit&lt;/groupId&gt;
		&lt;artifactId&gt;junit&lt;/artifactId&gt;
		&lt;version&gt;4.13.1&lt;/version&gt;
		&lt;scope&gt;test&lt;/scope&gt;
	&lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/09_JDBCTemplate/assets/image-20230516103736956.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="配置spring工程" tabindex="-1"><a class="header-anchor" href="#配置spring工程" aria-hidden="true">#</a> 配置Spring工程</h4>
<p>applicationContex.xml</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
       xmlns:p=&quot;http://www.springframework.org/schema/p&quot;
       xmlns:c=&quot;http://www.springframework.org/schema/c&quot;
       xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot;
       xmlns:util=&quot;http://www.springframework.org/schema/util&quot;
       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       https://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/c
       https://www.springframework.org/schema/c/spring-c.xsd
       http://www.springframework.org/schema/aop
       https://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/util
       https://www.springframework.org/schema/util/spring-util.xsd
       http://www.springframework.org/schema/p
       https://www.springframework.org/schema/p/spring-p.xsd&quot;&gt;
    &lt;!-- 包扫描 --&gt;
    &lt;context:component-scan base-package=&quot;com.meturing&quot; /&gt;
    &lt;!-- 导入外部配置依赖 --&gt;
    &lt;context:property-placeholder location=&quot;JDBC.properties&quot; /&gt;
    &lt;!-- 配置德鲁伊连接池 --&gt;
    &lt;bean id=&quot;dataSource&quot; class=&quot;com.alibaba.druid.pool.DruidDataSource&quot;&gt;
        &lt;property name=&quot;username&quot; value=&quot;${jdbc_username}&quot;/&gt;
        &lt;property name=&quot;password&quot; value=&quot;${jdbc_password}&quot;/&gt;
        &lt;property name=&quot;url&quot; value=&quot;${jdbc_url}&quot;/&gt;
        &lt;property name=&quot;driverClassName&quot; value=&quot;${jdbc_driver}&quot;/&gt;
    &lt;/bean&gt;

    &lt;!--配置JDBCTemplate对象,并向里面注入DataSource--&gt;
    &lt;bean id=&quot;jdbcTemplate&quot; class=&quot;org.springframework.jdbc.core.JdbcTemplate&quot;&gt;
        &lt;!--通过set方法注入连接池--&gt;
        &lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot;/&gt;
    &lt;/bean&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JDBC.properties 数据源配置文件</p>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>jdbc_username=root
jdbc_password=root
jdbc_driver=com.mysql.cj.jdbc.Driver
jdbc_url=jdbc:mysql://192.168.1.188:3306/test?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=Asia/Shanghai&amp;allowPublicKeyRetrieval=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/09_JDBCTemplate/assets/image-20230516104033792.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="创建工程文件层级" tabindex="-1"><a class="header-anchor" href="#创建工程文件层级" aria-hidden="true">#</a> 创建工程文件层级</h4>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/09_JDBCTemplate/assets/image-20230515162850226.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Emp.Java实体类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@AllArgsConstructor
@NoArgsConstructor
@Data
public class Emp implements Serializable{
    private Integer empno;
    private String ename;
    private String job;
    private Integer mgr;
    private Date hiredate;
    private Double sal;
    private Double comm;
    private Integer deptno;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>EmpService.java 接口</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public interface EmpService {
    int findEmpCount();
    Emp findByEmpno(int empno);
    List&lt;Emp&gt; findByDeptno(int deptno);
    int addEmp(Emp emp);
    int updateEmp(Emp emp);
    int deleteEmp( int empno);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>EmpServiceImpl.java 实现类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Service
public class EmpServiceImpl implements EmpService {
    @Autowired
    private EmpDao empDao;
    @Override
    public int findEmpCount() {return empDao.findEmpCount();}
    @Override
    public Emp findByEmpno(int empno) {return empDao.findByEmpno(empno);}
    @Override
    public List&lt;Emp&gt; findByDeptno(int deptno) {return empDao.findByDeptno(deptno);}
    @Override
    public int addEmp(Emp emp) {return empDao.addEmp(emp);}
    @Override
    public int updateEmp(Emp emp) {return empDao.updateEmp(emp);}
    @Override
    public int deleteEmp(int empno) {return empDao.deleteEmp(empno);}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>EmpDao.java 持久层工具接口</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public interface EmpDao {
    int findEmpCount();
    Emp findByEmpno(int empno);
    List&lt;Emp&gt; findByDeptno(int deptno);
    int addEmp(Emp emp);
    int updateEmp(Emp emp);
    int deleteEmp(int empno);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmpDaoImpl</span> <span class="token keyword">implements</span> <span class="token class-name">EmpDao</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Autowired</span>  
	<span class="token keyword">private</span> <span class="token class-name">JdbcTemplate</span> jdbcTemplate<span class="token punctuation">;</span><span class="token comment">//获取JdbcTemplate对象操作数据库</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findEmpCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token comment">//获取Emp总数</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Emp</span> <span class="token function">findByEmpno</span><span class="token punctuation">(</span><span class="token keyword">int</span> empno<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token comment">//根据empno查询</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Emp</span><span class="token punctuation">></span></span> <span class="token function">findByDeptno</span><span class="token punctuation">(</span><span class="token keyword">int</span> deptno<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token comment">//根据deptno查询</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">addEmp</span><span class="token punctuation">(</span><span class="token class-name">Emp</span> emp<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token comment">//新增</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">updateEmp</span><span class="token punctuation">(</span><span class="token class-name">Emp</span> emp<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token comment">//修改</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">deleteEmp</span><span class="token punctuation">(</span><span class="token keyword">int</span> empno<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token comment">//删除</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jdbctemplate的使用" tabindex="-1"><a class="header-anchor" href="#jdbctemplate的使用" aria-hidden="true">#</a> JDBCTemplate的使用</h2>
<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3>
<p>JDBCTemplate是spring框架中提供的一个对象，是对原始繁琐的Jdbc API对象的简单封装。spring框架为我们提供了很多的操作模板类。</p>
<p>例如：操作关系型数据的JdbcTemplate和，操作nosql数据库的RedisTemplate，操作消息队列的JmsTemplate等等。</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/09_JDBCTemplate/assets/image-20230515142756236.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="简单的使用" tabindex="-1"><a class="header-anchor" href="#简单的使用" aria-hidden="true">#</a> 简单的使用</h3>
<h4 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h4>
<h5 id="单一结果" tabindex="-1"><a class="header-anchor" href="#单一结果" aria-hidden="true">#</a> 单一结果</h5>
<p>queryForObject : 查询并返回Object类型实体<br>
<code v-pre>&lt;T&gt; T queryForObject(String sql, RowMapper&lt;T&gt; rowMapper, @Nullable Object... args)</code></p>
<p>EmpDaoImpl.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Override
public int findEmpCount() {
	return jdbcTemplate.queryForObject(&quot;select count(1) from emp&quot;, Integer.class);
}

@Override
public Emp findByEmpno(int empno) {
	BeanPropertyRowMapper&lt;Emp&gt; empBeanPropertyRowMapper = new BeanPropertyRowMapper&lt;&gt;(Emp.class);
	return jdbcTemplate.queryForObject(&quot;select * from  emp where empno =?&quot;, empBeanPropertyRowMapper, empno);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void test01(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContex.xml&quot;);
	EmpService empService = applicationContext.getBean( EmpService.class);
	int empCount = empService.findEmpCount();//获取员工的总数
	System.out.println(empCount);
	
	Emp byEmpno = empService.findByEmpno(8899);  
	System.out.println(byEmpno);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/09_JDBCTemplate/assets/image-20230515161717393.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="多结果返回" tabindex="-1"><a class="header-anchor" href="#多结果返回" aria-hidden="true">#</a> 多结果返回</h5>
<p>query : 返回多结果值<br>
<code v-pre>&lt;T&gt; List&lt;T&gt; query(String sql, RowMapper&lt;T&gt; rowMapper, @Nullable Object... args)</code></p>
<p>EmpDaoImpl.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Override
public List&lt;Emp&gt; findByDeptno(int deptno) {
	String sql = &quot;select * from emp where deptno =?&quot;;
	BeanPropertyRowMapper&lt;Emp&gt; empBeanPropertyRowMapper = new BeanPropertyRowMapper&lt;&gt;(Emp.class);
	return jdbcTemplate.query(sql, empBeanPropertyRowMapper, deptno);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void test01(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContex.xml&quot;);
	EmpService empService = applicationContext.getBean( EmpService.class);
	List&lt;Emp&gt; byDeptno = empService.findByDeptno(30);  
	System.out.println(byDeptno);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/09_JDBCTemplate/assets/image-20230515161821436.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="增-删-改" tabindex="-1"><a class="header-anchor" href="#增-删-改" aria-hidden="true">#</a> 增/删/改</h4>
<p>增删改的操作都是使用update方法<br>
<code v-pre>int update(String sql, @Nullable Object... args)</code></p>
<p>EmpDaoImpl.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//新增
@Override
public int addEmp(Emp emp) {
	String sql = &quot;insert into emp values(DEFAULT ,?,?,?,?,?,?,?)&quot;;
	Object[] args = {emp.getEname(),emp.getJob(),emp.getMgr(),emp.getHiredate(),emp.getSal(),emp.getComm(),emp.getDeptno()};
	return jdbcTemplate.update(sql, args);
}

//修改
@Override
public int updateEmp(Emp emp) {
	String sql = &quot;update emp set ename =? , job =?, mgr=? , hiredate =?, sal=?, comm=?, deptno =? where empno =?&quot;;
	Object[] args = {emp.getEname(),emp.getJob(),emp.getMgr(),emp.getHiredate(),emp.getSal(),emp.getComm(),emp.getDeptno(),emp.getEmpno()};
	return jdbcTemplate.update(sql, args);
}

//删除
@Override
public int deleteEmp(int empno) {
	String sql =&quot;delete  from emp where empno =?&quot;;
	return jdbcTemplate.update(sql, empno);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void test01(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContex.xml&quot;);
	EmpService empService = applicationContext.getBean( EmpService.class);
	
	//Emp emp = new Emp(null, &quot;test&quot;, &quot;test&quot;, 1888, new Date(), 1888.00, null, 10);
	//empService.addEmp(emp);
	
	//Emp emp = new Emp(8900, &quot;111&quot;, &quot;test&quot;, 1888, new Date(), 1888.00, 0.0, 10);
	//empService.updateEmp(emp);
	
	empService.deleteEmp(8900);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jdbctemplate的批处理" tabindex="-1"><a class="header-anchor" href="#jdbctemplate的批处理" aria-hidden="true">#</a> JDBCTemplate的批处理</h2>
<h3 id="新增工程文件" tabindex="-1"><a class="header-anchor" href="#新增工程文件" aria-hidden="true">#</a> 新增工程文件</h3>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/09_JDBCTemplate/assets/image-20230515163335698.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>DeptService.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public interface DeptService {
    int[] deptBatchAdd(List&lt;Dept&gt; depts);
    int[] deptBatchUpdate(List&lt;Dept&gt; depts);
    int[] deptBatchDelete(List&lt;Integer&gt; deptnos);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DeptServiceImpl.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Service
public class DeptServiceImpl implements DeptService {
	@Autowired  
	private DeptDao deptDao;  
	@Override  
	public int[] deptBatchAdd(List&lt;Dept&gt; depts) {return deptDao.deptBatchAdd(depts);}  
	@Override  
	public int[] deptBatchUpdate(List&lt;Dept&gt; depts) {return deptDao.deptBatchUpdate(depts);}  
	@Override  
	public int[] deptBatchDelete(List&lt;Integer&gt; deptnos) {return deptDao.deptBatchDelete(deptnos);}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DeptDao.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Repository
public interface DeptDao {
    int[] deptBatchAdd(List&lt;Dept&gt; depts);
    int[] deptBatchUpdate(List&lt;Dept&gt; depts);
    int[] deptBatchDelete(List&lt;Integer&gt; deptnos);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DeptDaoImpl.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Repository
public class DeptDaoImpl implements DeptDao {
	@Autowired  
	private JdbcTemplate template;
    @Override
    public int[] deptBatchAdd(List&lt;Dept&gt; depts) {return new int[0];}//批量新增
    @Override
    public int[] deptBatchUpdate(List&lt;Dept&gt; depts) {return new int[0];}//批量更新
    @Override
    public int[] deptBatchDelete(List&lt;Integer&gt; deptnos) {return new int[0];}//批量删除
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单实用" tabindex="-1"><a class="header-anchor" href="#简单实用" aria-hidden="true">#</a> 简单实用</h3>
<p>在批量处理时,我们统一使用的是<code v-pre>int[] batchUpdate(String sql, List&lt;Object[]&gt; batchArgs)</code>方法</p>
<h4 id="批量新增" tabindex="-1"><a class="header-anchor" href="#批量新增" aria-hidden="true">#</a> 批量新增</h4>
<p>DeptDaoImpl.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Override
public int[] deptBatchAdd(List&lt;Dept&gt; depts) {
	String sql =&quot;insert into dept values(DEFAULT,?,?)&quot;;
	List&lt;Object[]&gt; args =new LinkedList&lt;&gt;();
	for (Dept dept : depts) {
		Object[] arg ={dept.getDname(),dept.getLoc()};
		args.add(arg);
	}
	return template.batchUpdate(sql,args);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void test02(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContex.xml&quot;);
	DeptService deptService = applicationContext.getBean( DeptService.class);
	List&lt;Dept&gt; depts = new ArrayList&lt;&gt;();
	 depts.add(new Dept(null, &quot;1&quot;,&quot;1&quot;));
	 depts.add(new Dept(null, &quot;2&quot;,&quot;2&quot;));
	 depts.add(new Dept(null, &quot;3&quot;,&quot;3&quot;));
	deptService.deptBatchAdd(depts);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/09_JDBCTemplate/assets/image-20230515165049589.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/09_JDBCTemplate/assets/image-20230515165307481.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="批量更新" tabindex="-1"><a class="header-anchor" href="#批量更新" aria-hidden="true">#</a> 批量更新</h4>
<p>DeptDaoImpl.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Override
public int[] deptBatchUpdate(List&lt;Dept&gt; depts) {
	String sql =&quot;update dept set dname =? ,loc =? where deptno=?&quot;;
	List&lt;Object[]&gt; args =new LinkedList&lt;&gt;();
	for (Dept dept : depts) {
		Object[] arg ={dept.getDname(),dept.getLoc(),dept.getDeptno()};
		args.add(arg);
	}
	return template.batchUpdate(sql, args);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void test02(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContex.xml&quot;);
	DeptService deptService = applicationContext.getBean( DeptService.class);
	List&lt;Dept&gt; depts = new ArrayList&lt;&gt;();
	 depts.add(new Dept(50, &quot;11&quot;,&quot;11&quot;));
	 depts.add(new Dept(60, &quot;22&quot;,&quot;22&quot;));
	 depts.add(new Dept(70, &quot;33&quot;,&quot;33&quot;));
	deptService.deptBatchAdd(depts);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/09_JDBCTemplate/assets/image-20230515165452702.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/09_JDBCTemplate/assets/image-20230515165540228.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="批量删除" tabindex="-1"><a class="header-anchor" href="#批量删除" aria-hidden="true">#</a> 批量删除</h4>
<p>DeptDaoImpl.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Override
public int[] deptBatchUpdate(List&lt;Dept&gt; depts) {
	String sql =&quot;update dept set dname =? ,loc =? where deptno=?&quot;;
	List&lt;Object[]&gt; args =new LinkedList&lt;&gt;();
	for (Dept dept : depts) {
		Object[] arg ={dept.getDname(),dept.getLoc(),dept.getDeptno()};
		args.add(arg);
	}
	return template.batchUpdate(sql, args);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void test02(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContex.xml&quot;);
	DeptService deptService = applicationContext.getBean( DeptService.class);
	List&lt;Integer&gt; deptnos =new ArrayList&lt;&gt;();  
	deptnos.add(44);  
	deptnos.add(45);  
	deptnos.add(46);  
	deptService.deptBatchDelete(deptnos);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/09_JDBCTemplate/assets/image-20230515165725743.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/09_JDBCTemplate/assets/image-20230515165735654.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


