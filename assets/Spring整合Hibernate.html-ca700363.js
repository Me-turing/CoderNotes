import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as a}from"./app-71f45f98.js";const t="/CoderNotes/assets/image-20230731161237583-1a12217e.png",s="/CoderNotes/assets/image-20230731161156658-62ff4175.png",d="/CoderNotes/assets/image-20230801101258908-96f5faba.png",l={},r=a('<h2 id="构建项目环境" tabindex="-1"><a class="header-anchor" href="#构建项目环境" aria-hidden="true">#</a> 构建项目环境</h2><h3 id="数据源" tabindex="-1"><a class="header-anchor" href="#数据源" aria-hidden="true">#</a> 数据源</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>CREATE TABLE `student` (\n  `stuid` int NOT NULL AUTO_INCREMENT,\n  `stuname` varchar(20) DEFAULT NULL,\n  `stuage` int DEFAULT NULL,\n  `stugender` char(2) DEFAULT NULL,\n  `filename` varchar(100) DEFAULT NULL,\n  `filetype` varchar(20) DEFAULT NULL,\n  PRIMARY KEY (`stuid`)\n) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb3;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建spring项目" tabindex="-1"><a class="header-anchor" href="#创建spring项目" aria-hidden="true">#</a> 创建Spring项目</h3><p>创建一个全新的Spring模块</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="导入依赖" tabindex="-1"><a class="header-anchor" href="#导入依赖" aria-hidden="true">#</a> 导入依赖</h3><p>导入所需依赖</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>    &lt;dependencies&gt;
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
        &lt;!--hibernate--&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.hibernate&lt;/groupId&gt;
            &lt;artifactId&gt;hibernate-core&lt;/artifactId&gt;
            &lt;version&gt;5.0.7.Final&lt;/version&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意: 此时导入的是<code>hibernate-core</code>包</p><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="添加配置文件" tabindex="-1"><a class="header-anchor" href="#添加配置文件" aria-hidden="true">#</a> 添加配置文件</h3><p>添加applicationContext.xml 配置文件</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot;
       xmlns:p=&quot;http://www.springframework.org/schema/p&quot;
       xmlns:c=&quot;http://www.springframework.org/schema/c&quot;
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
    &lt;!-- 配置Hibernate的SessionFactory对象 --&gt;
    &lt;bean class=&quot;org.springframework.orm.hibernate5.LocalSessionFactoryBean&quot; id=&quot;sessionFactory&quot;&gt;
        &lt;!-- 关联数据源 --&gt;
        &lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot;&gt;&lt;/property&gt;
        &lt;!-- 配置Hibernate的属性信息 --&gt;
        &lt;property name=&quot;hibernateProperties&quot;&gt;
            &lt;props&gt;
                &lt;prop key=&quot;show_sql&quot;&gt;true&lt;/prop&gt;
                &lt;prop key=&quot;hibernate.hbm2ddl.auto&quot;&gt;update&lt;/prop&gt;
                &lt;/props&gt;
        &lt;/property&gt;
        &lt;!-- 扫描路径 --&gt;
        &lt;property name=&quot;packagesToScan&quot;&gt;
            &lt;list&gt;
                &lt;value&gt;com.meturing.pojo&lt;/value&gt;
            &lt;/list&gt;
        &lt;/property&gt;
    &lt;/bean&gt;
    &lt;!-- 配置HibernateTemplate对象 --&gt;
    &lt;bean class=&quot;org.springframework.orm.hibernate5.HibernateTemplate&quot; id=&quot;hibernateTemplate&quot;&gt;
        &lt;property name=&quot;sessionFactory&quot; ref=&quot;sessionFactory&quot;/&gt;
    &lt;/bean&gt;
    &lt;!--  配置事务管理--&gt;
    &lt;bean class=&quot;org.springframework.orm.hibernate5.HibernateTransactionManager&quot; id=&quot;transactionManager&quot;&gt;
        &lt;property name=&quot;sessionFactory&quot; ref=&quot;sessionFactory&quot; /&gt;
    &lt;/bean&gt;
    &lt;!-- 配置开启事务注解 --&gt;
    &lt;tx:annotation-driven transaction-manager=&quot;transactionManager&quot;/&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>基本的注册配置与JDBCTemplate配置比较相似:</p><ol><li>配置包扫描</li><li>导入外部文件引用</li><li>配置Durid连接池</li><li>配置Hibernate的SessionFactory对象 -&gt; <strong>LocalSessionFactoryBean</strong></li><li>配置HibernateTemplate对象 -&gt; <strong>HibernateTemplate</strong></li><li>配置事务管理 -&gt; <strong>HibernateTransactionManager</strong></li><li>配置开启事务注解</li></ol></blockquote><p>添加数据库链接配置:</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">jdbc_username</span><span class="token punctuation">=</span><span class="token value attr-value">CoderNotes</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ol><li><code>@Entity</code> 注解需要标注在实体类上,表示当前是个实体类</li><li><code>@Table(name = &quot;xxxx&quot;)</code>注解修改当前类Mapping到指定的表名(如果类名与表明不一致时使用)</li><li><code>@Id</code> 使用在字段上,表示当前字段是主键</li><li><code>@GeneratedValue(strategy = GenerationType.IDENTITY)</code> 使用在主键字段上,表示当前主键自增方式</li><li><code>@Column(name=&quot;xxx&quot;)</code> 使用在字段上,表示当前的字段和数据库中的字段的映射方式</li></ol></blockquote><h3 id="创建持久层" tabindex="-1"><a class="header-anchor" href="#创建持久层" aria-hidden="true">#</a> 创建持久层</h3><p>IStudent.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface IStudent {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IStudentImpl.java实现类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IStudentImpl</span> <span class="token keyword">implements</span> <span class="token class-name">IStudent</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Autowired</span>  
	<span class="token keyword">private</span> <span class="token class-name">HibernateTemplate</span> hibernateTemplate<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现业务代码" tabindex="-1"><a class="header-anchor" href="#实现业务代码" aria-hidden="true">#</a> 实现业务代码</h2><h3 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据" aria-hidden="true">#</a> 插入数据</h3><blockquote><p>save 方法可以插入数据</p></blockquote><p>IStudent.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface IStudent {
    void insertStudent(Student student);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IStudentImpl.java实现类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Repository
public class IStudentImpl implements IStudent {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    /*插入数据*/
    @Override
    public void insertStudent(Student student) {
        hibernateTemplate.save(student);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestDemo01.Java测试类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)
public class TestDemo01 {
    @Autowired
    private IStudent iStudent;
    @Test
    @Transactional
    @Rollback(false)
    public void testInsertStudent(){
        Student zhaoliu = new Student(null, &quot;zhaoliu&quot;, 18, 10, &quot;&quot;, &quot;&quot;);
        iStudent.insertStudent(zhaoliu);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新数据" tabindex="-1"><a class="header-anchor" href="#更新数据" aria-hidden="true">#</a> 更新数据</h3><blockquote><p>update 可以更新数据</p></blockquote><p>IStudent.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface IStudent {
    void updateStudent(Student student);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IStudentImpl.java实现类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Repository
public class IStudentImpl implements IStudent {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    /*更新数据*/
    @Override
    public void updateStudent(Student student) {
        hibernateTemplate.update(student);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestDemo01.Java测试类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)
public class TestDemo01 {
    @Autowired
    private IStudent iStudent;
    @Test
    @Transactional
    @Rollback(false)
    public void testUpdateStudent(){
        Student zhaoliu = new Student(37, &quot;zhaoliu&quot;, 20, 10, &quot;11&quot;, &quot;22&quot;);
        iStudent.updateStudent(zhaoliu);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据" aria-hidden="true">#</a> 删除数据</h3><blockquote><p>delete语句可以删除数据</p></blockquote><p>IStudent.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface IStudent {
    void deleteStudent(Student student);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IStudentImpl.java实现类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Repository
public class IStudentImpl implements IStudent {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    /*删除数据*/
    @Override
    public void deleteStudent(Student student) {
        hibernateTemplate.delete(student);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestDemo01.Java测试类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)
public class TestDemo01 {
    @Autowired
    private IStudent iStudent;
    @Test
    @Transactional
    @Rollback(false)
    public void testDeleteStudent(){
        Student zhaoliu = new Student(37, &quot;zhaoliu&quot;, 20, 10, &quot;11&quot;, &quot;22&quot;);
        iStudent.deleteStudent(zhaoliu);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h3><h4 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h4><blockquote><p>get方法可以直接根据主键获取数据</p></blockquote><p>IStudent.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface IStudent {
    Student selectStudentById(Integer studentId);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IStudentImpl.java实现类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Repository
public class IStudentImpl implements IStudent {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    /*根据主键查询数据*/
    @Override
    public Student selectStudentById(Integer studentId) {
        return hibernateTemplate.get(Student.class,studentId);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestDemo01.Java测试类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)
public class TestDemo01 {
    @Autowired
    private IStudent iStudent;
    @Test
    @Transactional
    public void testSelectStudentById(){
        Student student = iStudent.selectStudentById(1);
        System.out.println(student);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="createquery" tabindex="-1"><a class="header-anchor" href="#createquery" aria-hidden="true">#</a> createQuery</h4><blockquote><p>createQuery方法可以直接拼写条件查询</p></blockquote><p>IStudent.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface IStudent {
    List&lt;Student&gt; selectStudentByName(String studentName);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IStudentImpl.java实现类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Repository
public class IStudentImpl implements IStudent {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    /*根据用户姓名获取数据*/
    @Override
    public List&lt;Student&gt; selectStudentByName(String studentName) {
        Session currentSession = hibernateTemplate.getSessionFactory().getCurrentSession();
        Query studentQuery = currentSession.createQuery(&quot; from Student where stuname = :stuName&quot;).setString(&quot;stuName&quot;, studentName);
        return studentQuery.list();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：此时from的是具体的实体类名，而非表名</p></blockquote><p>TestDemo01.Java测试类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)
public class TestDemo01 {
    @Autowired
    private IStudent iStudent;
    @Test
    @Transactional
    public void testSelectStudentByName(){
        List&lt;Student&gt; studentList = iStudent.selectStudentByName(&quot;name1&quot;);
        for (Student student : studentList) {
            System.out.println(student);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="createsqlquery" tabindex="-1"><a class="header-anchor" href="#createsqlquery" aria-hidden="true">#</a> createSQLQuery</h4><blockquote><p>createSQLQuery方法可以使用自定义SQL查询</p></blockquote><p>IStudent.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface IStudent {
    List&lt;Student&gt; selectStudentByNameUseSQL(String studentName);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IStudentImpl.java实现类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Repository
public class IStudentImpl implements IStudent {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    /*手动执行SQL查询*/
    @Override
    public List&lt;Student&gt; selectStudentByNameUseSQL(String studentName) {
        Session currentSession = hibernateTemplate.getSessionFactory().getCurrentSession();
        Query studentQuery = currentSession.createSQLQuery(&quot;select * from student where stuname = ?&quot;)
                .addEntity(Student.class)
                .setString(0, studentName);
        return studentQuery.list();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestDemo01.Java测试类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)
public class TestDemo01 {
    @Autowired
    private IStudent iStudent;
    @Test
    @Transactional
    public void testSelectStudentByNameUseSQL(){
        List&lt;Student&gt; studentList = iStudent.selectStudentByNameUseSQL(&quot;name1&quot;);
        for (Student student : studentList) {
            System.out.println(student);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="createcriteria" tabindex="-1"><a class="header-anchor" href="#createcriteria" aria-hidden="true">#</a> createCriteria</h4><blockquote><p>createCriteria可以使用条件构造器查询</p></blockquote><p>IStudent.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface IStudent {
    List&lt;Student&gt; selectStudentByNameUseCriteria(String studentName);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IStudentImpl.java实现类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Repository
public class IStudentImpl implements IStudent {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    /*使用条件比较器查询*/
    @Override
    public List&lt;Student&gt; selectStudentByNameUseCriteria(String studentName) {
        Session currentSession = hibernateTemplate.getSessionFactory().getCurrentSession();
        Criteria studenCriteria = currentSession.createCriteria(Student.class)
                .add(Restrictions.eq(&quot;stuName&quot;, studentName));
        return studenCriteria.list();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：此时stuName是实体类中具体的字段名，而非表中的字段名</p></blockquote><p>TestDemo01.Java测试类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)
public class TestDemo01 {
    @Autowired
    private IStudent iStudent;
    @Test
    @Transactional
    public void testSelectStudentByNameUseCriteria(){
        List&lt;Student&gt; studentList = iStudent.selectStudentByNameUseCriteria(&quot;name1&quot;);
        for (Student student : studentList) {
            System.out.println(student);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,87),u=[r];function v(c,o){return n(),i("div",null,u)}const p=e(l,[["render",v],["__file","Spring整合Hibernate.html.vue"]]);export{p as default};
