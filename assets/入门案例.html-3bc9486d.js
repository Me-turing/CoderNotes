import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,f as t}from"./app-71f45f98.js";const s="/CoderNotes/assets/image-20230803100104714-43df6668.png",i="/CoderNotes/assets/image-20230803100027227-ce22dc4d.png",l="/CoderNotes/assets/image-20230803100221847-2426e303.png",r="/CoderNotes/assets/image-20230803100737404-a2ecb8a4.png",d="/CoderNotes/assets/image-20230803100729499-605b7069.png",o="/CoderNotes/assets/image-20230803101141386-b5464e9e.png",c={},u=t('<p>学习了前面的Hibernate和HibernateJPA,我们接下来将在Spring中整合SpringJPA</p><h2 id="构建项目环境" tabindex="-1"><a class="header-anchor" href="#构建项目环境" aria-hidden="true">#</a> 构建项目环境</h2><h3 id="数据源" tabindex="-1"><a class="header-anchor" href="#数据源" aria-hidden="true">#</a> 数据源</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>CREATE TABLE `student` (\n  `stuid` int NOT NULL AUTO_INCREMENT,\n  `stuname` varchar(20) DEFAULT NULL,\n  `stuage` int DEFAULT NULL,\n  `stugender` char(2) DEFAULT NULL,\n  `filename` varchar(100) DEFAULT NULL,\n  `filetype` varchar(20) DEFAULT NULL,\n  PRIMARY KEY (`stuid`)\n) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb3;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建spring项目" tabindex="-1"><a class="header-anchor" href="#创建spring项目" aria-hidden="true">#</a> 创建Spring项目</h3><p>创建一个全新的Spring模块</p><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="导入依赖" tabindex="-1"><a class="header-anchor" href="#导入依赖" aria-hidden="true">#</a> 导入依赖</h3><p>导入所需依赖</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>    &lt;dependencies&gt;
        &lt;!--Spring核心包--&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework&lt;/groupId&gt;
            &lt;artifactId&gt;spring-context&lt;/artifactId&gt;
            &lt;version&gt;5.1.6.RELEASE&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;!--Spring切面包--&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework&lt;/groupId&gt;
            &lt;artifactId&gt;spring-aspects&lt;/artifactId&gt;
            &lt;version&gt;5.1.6.RELEASE&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;!--SpringORM--&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework&lt;/groupId&gt;
            &lt;artifactId&gt;spring-orm&lt;/artifactId&gt;
            &lt;version&gt;5.1.6.RELEASE&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;!--Mysql驱动包--&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;mysql&lt;/groupId&gt;
            &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
            &lt;version&gt;8.0.11&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;!--德鲁特连接池--&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.alibaba&lt;/groupId&gt;
            &lt;artifactId&gt;druid&lt;/artifactId&gt;
            &lt;version&gt;1.1.8&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;!--hibernate-entitymanager--&gt;
		&lt;dependency&gt;  
		    &lt;groupId&gt;org.hibernate&lt;/groupId&gt;  
		    &lt;artifactId&gt;hibernate-entitymanager&lt;/artifactId&gt;  
		    &lt;version&gt;5.0.7.Final&lt;/version&gt;  
		&lt;/dependency&gt;
		&lt;!-- spring-data-jpa --&gt;
		&lt;dependency&gt;  
		    &lt;groupId&gt;org.springframework.data&lt;/groupId&gt;  
		    &lt;artifactId&gt;spring-data-jpa&lt;/artifactId&gt;  
		    &lt;version&gt;1.9.0.RELEASE&lt;/version&gt;  
		&lt;/dependency&gt;
        &lt;!--junit测试单元--&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;junit&lt;/groupId&gt;
            &lt;artifactId&gt;junit&lt;/artifactId&gt;
            &lt;version&gt;4.12&lt;/version&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework&lt;/groupId&gt;
            &lt;artifactId&gt;spring-test&lt;/artifactId&gt;
            &lt;version&gt;5.1.6.RELEASE&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;!--lombok--&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
            &lt;artifactId&gt;lombok&lt;/artifactId&gt;
            &lt;version&gt;1.18.28&lt;/version&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意: 此时导入的是<code>hibernate-entitymanager</code>包和<code>spring-data-jpa</code>包</p><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="添加配置文件" tabindex="-1"><a class="header-anchor" href="#添加配置文件" aria-hidden="true">#</a> 添加配置文件</h3><p>添加applicationContext.xml 配置文件</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot;
       xmlns:p=&quot;http://www.springframework.org/schema/p&quot;
       xmlns:c=&quot;http://www.springframework.org/schema/c&quot;
       xmlns:jpa=&quot;http://www.springframework.org/schema/data/jpa&quot;
       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
       xmlns:tx=&quot;http://www.springframework.org/schema/tx&quot;
       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/aop
       http://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/p
       http://www.springframework.org/schema/p/spring-p.xsd
       http://www.springframework.org/schema/c
       http://www.springframework.org/schema/c/spring-c.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/tx
       http://www.springframework.org/schema/tx/spring-tx.xsd
       http://www.springframework.org/schema/data/jpa
       http://www.springframework.org/schema/data/jpa/spring-jpa.xsd
&quot;&gt;
    &lt;!--配置包扫描--&gt;
    &lt;context:component-scan base-package=&quot;com.meturing&quot;/&gt;

    &lt;!--配置外部的链接依赖--&gt;
    &lt;context:property-placeholder location=&quot;classpath:JDBC.properties&quot;/&gt;
    &lt;!-- 创建druid 的数据源 --&gt;
    &lt;bean id=&quot;dataSource&quot; class=&quot;com.alibaba.druid.pool.DruidDataSource&quot;&gt;
        &lt;property name=&quot;username&quot; value=&quot;\${jdbc_username}&quot;&gt;&lt;/property&gt;
        &lt;property name=&quot;password&quot; value=&quot;\${jdbc_password}&quot;&gt;&lt;/property&gt;
        &lt;property name=&quot;driverClassName&quot; value=&quot;\${jdbc_driver}&quot;&gt;&lt;/property&gt;
        &lt;property name=&quot;url&quot; value=&quot;\${jdbc_url}&quot;&gt;&lt;/property&gt;
    &lt;/bean&gt;
    &lt;!-- 配置Hibernate的SessionFactory对象 id必须得是 ： entityManagerFactory --&gt;
    &lt;bean class=&quot;org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean&quot; id=&quot;entityManagerFactory&quot;&gt;
        &lt;!-- 关联数据源 --&gt;
        &lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot;&gt;&lt;/property&gt;
        &lt;!-- 配置Hibernate的属性信息 --&gt;
        &lt;property name=&quot;jpaVendorAdapter&quot;&gt;
            &lt;bean class=&quot;org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter&quot;&gt;
                &lt;property name=&quot;database&quot; value=&quot;MYSQL&quot;/&gt;
                &lt;property name=&quot;generateDdl&quot; value=&quot;true&quot;/&gt;
                &lt;property name=&quot;showSql&quot; value=&quot;true&quot;/&gt;
            &lt;/bean&gt;
        &lt;/property&gt;
        &lt;!-- 扫描路径 --&gt;
        &lt;property name=&quot;packagesToScan&quot;&gt;
            &lt;list&gt;
                &lt;value&gt;com.meturing.pojo&lt;/value&gt;
            &lt;/list&gt;
        &lt;/property&gt;
    &lt;/bean&gt;
    &lt;!--配置JPA所在的接口包--&gt;
    &lt;jpa:repositories base-package=&quot;com.meturing.dao&quot; /&gt;
    &lt;!--  配置事务管理--&gt;
    &lt;bean class=&quot;org.springframework.orm.jpa.JpaTransactionManager&quot; id=&quot;transactionManager&quot;&gt;
        &lt;property name=&quot;entityManagerFactory&quot; ref=&quot;entityManagerFactory&quot;/&gt;
    &lt;/bean&gt;
    &lt;!-- 配置开启事务注解 --&gt;
    &lt;tx:annotation-driven transaction-manager=&quot;transactionManager&quot;/&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>基本的注册配置与前面的HibernateJPA配置比较相似:</p><ol><li>引入JPA声明空间</li><li>配置包扫描</li><li>导入外部文件引用</li><li>配置Durid连接池</li><li>配置Hibernate的SessionFactory对象 <strong>(id必须是: entityManagerFactory)</strong> -&gt; <strong>LocalContainerEntityManagerFactoryBean</strong></li><li>配置JPA扫描接口</li><li>配置事务管理 -&gt; <strong>JpaTransactionManager</strong></li><li>配置开启事务注解</li></ol></blockquote><p>添加数据库链接配置:</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">jdbc_username</span><span class="token punctuation">=</span><span class="token value attr-value">CoderNotes</span>
<span class="token key attr-name">jdbc_password</span><span class="token punctuation">=</span><span class="token value attr-value">CoderNotes</span>
<span class="token key attr-name">jdbc_driver</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token key attr-name">jdbc_url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://xxx.xxx.xxx.xx:3306/codernotes?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=Asia/Shanghai&amp;allowPublicKeyRetrieval=true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建实体类" tabindex="-1"><a class="header-anchor" href="#创建实体类" aria-hidden="true">#</a> 创建实体类</h3><p>创建实体类Student.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = &quot;student&quot;)
public class Student implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name=&quot;stuid&quot;)
    private Integer stuId;
    @Column(name=&quot;stuname&quot;)
    private String stuName;
    @Column(name=&quot;stuage&quot;)
    private Integer stuAge;
    @Column(name=&quot;stugender&quot;)
    private Integer stuGender;
    @Column(name=&quot;filename&quot;)
    private String fileName;
    @Column(name=&quot;filetype&quot;)
    private String fileType;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ol><li><code>@Entity</code> 注解需要标注在实体类上,表示当前是个实体类</li><li><code>@Table(name = &quot;xxxx&quot;)</code>注解修改当前类Mapping到指定的表名(如果类名与表明不一致时使用)</li><li><code>@Id</code> 使用在字段上,表示当前字段是主键</li><li><code>@GeneratedValue(strategy = GenerationType.IDENTITY)</code> 使用在主键字段上,表示当前主键自增方式</li><li><code>@Column(name=&quot;xxx&quot;)</code> 使用在字段上,表示当前的字段和数据库中的字段的映射方式</li></ol></blockquote><h3 id="创建持久层" tabindex="-1"><a class="header-anchor" href="#创建持久层" aria-hidden="true">#</a> 创建持久层</h3><p>StudentDao.java 接口继承<code>JpaRepository </code></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface StudentDao extends JpaRepository&lt;Student, Integer&gt; {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现保存" tabindex="-1"><a class="header-anchor" href="#实现保存" aria-hidden="true">#</a> 实现保存</h2><p>TestDemo01.java 测试代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringJUnit4ClassRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ContextConfiguration</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:applicationContext.xml&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDemo01</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">StudentDao</span> studentDao<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Test</span>
	<span class="token annotation punctuation">@Transactional</span>
    <span class="token annotation punctuation">@Rollback</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">query1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        studentDao<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="jparepository接口" tabindex="-1"><a class="header-anchor" href="#jparepository接口" aria-hidden="true">#</a> JpaRepository接口</h2><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',33),p=[u];function v(g,m){return e(),a("div",null,p)}const k=n(c,[["render",v],["__file","入门案例.html.vue"]]);export{k as default};
