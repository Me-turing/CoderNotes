<template><div><h2 id="了解mybatisplus" tabindex="-1"><a class="header-anchor" href="#了解mybatisplus" aria-hidden="true">#</a> 了解MybatisPlus</h2>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/01_MyBatisPlus快速上手/assets/image-20230418134509659.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>MyBatis-Plus (opens new window)（简称 MP）是一个 MyBatis (opens new window) 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。</p>
</blockquote>
<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3>
<ul>
<li><strong><code v-pre>无侵入</code></strong>：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑</li>
<li><strong><code v-pre>损耗小</code></strong>：启动即会自动<strong>注入基本 CURD</strong>，性能基本无损耗，直接面向对象操作</li>
<li><strong><code v-pre>强大的 CRUD 操作</code></strong>：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求</li>
<li><strong><code v-pre>支持 Lambda 形式调用</code></strong>：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错</li>
<li><strong><code v-pre>支持多种数据库</code></strong>：支持 MySQL、MariaDB、Oracle、DB2、H2、HSQL、SQLite、Postgre、SQLServer2005、SQLServer 等多种数据库</li>
<li><strong><code v-pre>支持主键自动生成</code></strong>：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题</li>
<li><strong><code v-pre>支持 XML 热加载</code></strong>：Mapper 对应的 XML 支持热加载，对于简单的 CRUD 操作，甚至可以无 XML 启动</li>
<li><strong><code v-pre>支持 ActiveRecord 模式</code></strong>：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作</li>
<li><strong><code v-pre>支持自定义全局通用操作</code></strong>：支持全局通用方法注入（ Write once, use anywhere ）</li>
<li><strong><code v-pre>支持关键词自动转义</code></strong>：支持数据库关键词（order、key......）自动转义，还可自定义关键词</li>
<li><strong><code v-pre>内置代码生成器</code></strong>：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用</li>
<li><strong><code v-pre>内置分页插件</code></strong>：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询</li>
<li><strong><code v-pre>内置性能分析插件</code></strong>：可输出 Sql 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询</li>
<li><strong><code v-pre>内置全局拦截插件</code></strong>：提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操作</li>
<li><strong><code v-pre>内置 Sql 注入剥离器</code></strong>：支持 Sql 注入剥离，有效预防 Sql 注入攻击</li>
</ul>
<h2 id="入门案例" tabindex="-1"><a class="header-anchor" href="#入门案例" aria-hidden="true">#</a> 入门案例</h2>
<h3 id="准备数据" tabindex="-1"><a class="header-anchor" href="#准备数据" aria-hidden="true">#</a> 准备数据</h3>
<h4 id="表结构" tabindex="-1"><a class="header-anchor" href="#表结构" aria-hidden="true">#</a> 表结构</h4>
<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre v-pre class="language-SQL"><code>DROP TABLE IF EXISTS user;

CREATE TABLE user
(
    id BIGINT(20) NOT NULL COMMENT '主键ID',
    name VARCHAR(30) NULL DEFAULT NULL COMMENT '姓名',
    age INT(11) NULL DEFAULT NULL COMMENT '年龄',
    email VARCHAR(50) NULL DEFAULT NULL COMMENT '邮箱',
    PRIMARY KEY (id)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="初始化数据" tabindex="-1"><a class="header-anchor" href="#初始化数据" aria-hidden="true">#</a> 初始化数据</h4>
<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre v-pre class="language-SQL"><code>DELETE FROM user;

INSERT INTO user (id, name, age, email) VALUES
(1, 'Jone', 18, 'test1@baomidou.com'),
(2, 'Jack', 20, 'test2@baomidou.com'),
(3, 'Tom', 28, 'test3@baomidou.com'),
(4, 'Sandy', 21, 'test4@baomidou.com'),
(5, 'Billie', 24, 'test5@baomidou.com');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建项目环境" tabindex="-1"><a class="header-anchor" href="#创建项目环境" aria-hidden="true">#</a> 创建项目环境</h3>
<h4 id="创建springboot项目" tabindex="-1"><a class="header-anchor" href="#创建springboot项目" aria-hidden="true">#</a> 创建SpringBoot项目</h4>
<p>使用Spring Initializr快速创建项目</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/01_MyBatisPlus快速上手/assets/image-20230418134739045.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>初始化Lombok依赖 与 Spring Web 依赖</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/01_MyBatisPlus快速上手/assets/image-20230418134743384.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="调整pom-xml依赖" tabindex="-1"><a class="header-anchor" href="#调整pom-xml依赖" aria-hidden="true">#</a> 调整Pom.xml依赖</h4>
<p>分别引入:<br>
<code v-pre>MyBatisPlus的依赖</code>  <code v-pre>MySQL数据库</code> <code v-pre>数据库连接池 Druid</code></p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;parent&gt;  
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;  
    &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;  
    &lt;version&gt;2.6.6&lt;/version&gt;  
    &lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;  
&lt;/parent&gt;  
  
&lt;groupId&gt;com.meturing&lt;/groupId&gt;  
&lt;artifactId&gt;MybatisPlusDemo&lt;/artifactId&gt;  
&lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;  
&lt;name&gt;MybatisPlusDemo&lt;/name&gt;  
&lt;description&gt;MybatisPlusDemo&lt;/description&gt;  
&lt;packaging&gt;jar&lt;/packaging&gt;  
&lt;properties&gt;  
    &lt;java.version&gt;8&lt;/java.version&gt;  
&lt;/properties&gt;  
&lt;dependencies&gt;  
    &lt;dependency&gt;  
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;  
        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;  
    &lt;/dependency&gt;  
  
    &lt;dependency&gt;  
        &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;  
        &lt;artifactId&gt;lombok&lt;/artifactId&gt;  
        &lt;optional&gt;true&lt;/optional&gt;  
    &lt;/dependency&gt;  
    &lt;dependency&gt;  
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;  
        &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;  
        &lt;scope&gt;test&lt;/scope&gt;  
    &lt;/dependency&gt;  
    &lt;!-- 引入MyBatisPlus的依赖 --&gt;  
    &lt;dependency&gt;  
        &lt;groupId&gt;com.baomidou&lt;/groupId&gt;  
        &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;  
        &lt;version&gt;3.5.1&lt;/version&gt;  
    &lt;/dependency&gt;  
    &lt;!-- 数据库使用MySQL数据库 --&gt;  
    &lt;dependency&gt;  
        &lt;groupId&gt;mysql&lt;/groupId&gt;  
        &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;  
    &lt;/dependency&gt;  
    &lt;!-- 数据库连接池 Druid --&gt;    &lt;dependency&gt;  
        &lt;groupId&gt;com.alibaba&lt;/groupId&gt;  
        &lt;artifactId&gt;druid&lt;/artifactId&gt;  
        &lt;version&gt;1.1.14&lt;/version&gt;  
    &lt;/dependency&gt;  
    &lt;!-- lombok依赖 --&gt;  
    &lt;dependency&gt;  
        &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;  
        &lt;artifactId&gt;lombok&lt;/artifactId&gt;  
    &lt;/dependency&gt;  
&lt;/dependencies&gt;  
  
&lt;build&gt;  
    &lt;plugins&gt;  
        &lt;plugin&gt;  
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;  
            &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;  
            &lt;configuration&gt;  
                &lt;excludes&gt;  
                    &lt;exclude&gt;  
                        &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;  
                        &lt;artifactId&gt;lombok&lt;/artifactId&gt;  
                    &lt;/exclude&gt;  
                &lt;/excludes&gt;  
            &lt;/configuration&gt;  
        &lt;/plugin&gt;  
    &lt;/plugins&gt;  
&lt;/build&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改链接文件" tabindex="-1"><a class="header-anchor" href="#修改链接文件" aria-hidden="true">#</a> 修改链接文件</h4>
<p>然后我们需要在application.properties中配置数据源的相关信息</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/01_MyBatisPlus快速上手/assets/image-20230418135144413.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-Properties line-numbers-mode" data-ext="Properties"><pre v-pre class="language-Properties"><code>spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver  
spring.datasource.url=jdbc:mysql://192.168.1.188:3306/test?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=Asia/Shanghai  
spring.datasource.username=root  
spring.datasource.password=root  
  
spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改包扫面路径" tabindex="-1"><a class="header-anchor" href="#修改包扫面路径" aria-hidden="true">#</a> 修改包扫面路径</h4>
<p>们需要在SpringBoot项目的启动类上配置Mapper接口的扫描路径</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/01_MyBatisPlus快速上手/assets/image-20230418140044389.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="创建案例所需文件" tabindex="-1"><a class="header-anchor" href="#创建案例所需文件" aria-hidden="true">#</a> 创建案例所需文件</h3>
<h4 id="添加user实体类" tabindex="-1"><a class="header-anchor" href="#添加user实体类" aria-hidden="true">#</a> 添加User实体类</h4>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@ToString  
@Data  
@AllArgsConstructor  
@NoArgsConstructor  
public class User {  
    private Long id;  
    private String name;  
    private Integer age;  
    private String email;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建mapper接口" tabindex="-1"><a class="header-anchor" href="#创建mapper接口" aria-hidden="true">#</a> 创建Mapper接口</h4>
<p>在MyBatisPlus中的Mapper接口需要继承BaseMapper.</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>/**  
 * MyBatisPlus中的Mapper接口继承自BaseMapper，同时指定对应的实体类  
 */  
@Mapper  
public interface UserMapper extends BaseMapper&lt;User&gt; {  
  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建测试类" tabindex="-1"><a class="header-anchor" href="#创建测试类" aria-hidden="true">#</a> 创建测试类</h4>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/01_MyBatisPlus快速上手/assets/image-20230418140100413.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@SpringBootTest  
class MybatisPlusDemoApplicationTests {  
    @Autowired  
    private UserMapper userMapper;  
    /**  
     * 查询所有  
     *  
     * @author sqTan     
     * @date 2023/04/18     
     * */    
    @Test  
    public void selectUser1() {  
        List&lt;User&gt; users = userMapper.selectList(null);  
        users.forEach(System.out::println);  
    }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/01_MyBatisPlus快速上手/assets/image-20230418140238177.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="指定日志输出" tabindex="-1"><a class="header-anchor" href="#指定日志输出" aria-hidden="true">#</a> 指定日志输出</h3>
<p>为了便于学习我们可以指定日志的实现StdOutImpl来处理</p>
<div class="language-Properties line-numbers-mode" data-ext="Properties"><pre v-pre class="language-Properties"><code># 指定日志输出
mybatis-plus.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/01_MyBatisPlus快速上手/assets/image-20230418140359768.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


