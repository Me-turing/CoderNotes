<template><div><h2 id="创建maven项目" tabindex="-1"><a class="header-anchor" href="#创建maven项目" aria-hidden="true">#</a> 创建Maven项目</h2>
<h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3>
<p>创建Maven项目 -&gt; Next<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/02_搭建Mybatis项目环境/assets/Pasted_image_20230409163532.png" alt="" loading="lazy"></p>
<p>配置Maven信息 -&gt; Finish<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/02_搭建Mybatis项目环境/assets/Pasted_image_20230409163627.png" alt="" loading="lazy"></p>
<h3 id="配置项目环境" tabindex="-1"><a class="header-anchor" href="#配置项目环境" aria-hidden="true">#</a> 配置项目环境</h3>
<h4 id="配置maven包" tabindex="-1"><a class="header-anchor" href="#配置maven包" aria-hidden="true">#</a> 配置Maven包</h4>
<h5 id="修改使用的maven" tabindex="-1"><a class="header-anchor" href="#修改使用的maven" aria-hidden="true">#</a> 修改使用的Maven</h5>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/02_搭建Mybatis项目环境/assets/Pasted_image_20230409164007.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="修改maven的pom-xml" tabindex="-1"><a class="header-anchor" href="#修改maven的pom-xml" aria-hidden="true">#</a> 修改Maven的Pom.xml</h5>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/02_搭建Mybatis项目环境/assets/Pasted_image_20230409164048.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;  
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;  
         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;  
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;  
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;  
  
    &lt;groupId&gt;com.meturing&lt;/groupId&gt;  
    &lt;artifactId&gt;MybatisTest02&lt;/artifactId&gt;  
    &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;  
    &lt;!--指定编译类型--&gt; 
    &lt;packaging&gt;jar&lt;/packaging&gt;  
    
    &lt;!--指定编译JDK版本--&gt;  
	&lt;properties&gt;  
	    &lt;maven.compiler.source&gt;8&lt;/maven.compiler.source&gt;  
	    &lt;maven.compiler.target&gt;8&lt;/maven.compiler.target&gt;  
	&lt;/properties&gt;
	
    &lt;dependencies&gt;  
        &lt;!--mysqlConnector--&gt;  
        &lt;dependency&gt;  
            &lt;groupId&gt;mysql&lt;/groupId&gt;  
            &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;  
            &lt;version&gt;8.0.16&lt;/version&gt;  
        &lt;/dependency&gt;  
        &lt;!--mybatis 核心jar包--&gt;  
        &lt;dependency&gt;  
            &lt;groupId&gt;org.mybatis&lt;/groupId&gt;  
            &lt;artifactId&gt;mybatis&lt;/artifactId&gt;  
            &lt;version&gt;3.5.3&lt;/version&gt;  
        &lt;/dependency&gt;  
        &lt;!--junit--&gt;  
        &lt;dependency&gt;  
            &lt;groupId&gt;junit&lt;/groupId&gt;  
            &lt;artifactId&gt;junit&lt;/artifactId&gt;  
            &lt;version&gt;4.13.1&lt;/version&gt;  
            &lt;scope&gt;test&lt;/scope&gt;  
        &lt;/dependency&gt;  
        &lt;!--lombok --&gt;  
        &lt;dependency&gt;  
            &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;  
            &lt;artifactId&gt;lombok&lt;/artifactId&gt;  
            &lt;version&gt;1.18.12&lt;/version&gt;  
            &lt;scope&gt;provided&lt;/scope&gt;  
        &lt;/dependency&gt;  
    &lt;/dependencies&gt;  
&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击图标 或 Compile导包<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/02_搭建Mybatis项目环境/assets/Pasted_image_20230409164306.png" alt="" loading="lazy"></p>
<h4 id="配置编译环境" tabindex="-1"><a class="header-anchor" href="#配置编译环境" aria-hidden="true">#</a> 配置编译环境</h4>
<h5 id="修改项目编译版本" tabindex="-1"><a class="header-anchor" href="#修改项目编译版本" aria-hidden="true">#</a> 修改项目编译版本</h5>
<p>统一使用JDK1.8编译开发</p>
<p>File -&gt; Settings<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/02_搭建Mybatis项目环境/assets/Pasted_image_20230409164910.png" alt="" loading="lazy"></p>
<p>File -&gt; Project Structure<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/02_搭建Mybatis项目环境/assets/Pasted_image_20230409164937.png" alt="" loading="lazy"></p>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/02_搭建Mybatis项目环境/assets/Pasted_image_20230409164956.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h4>
<h5 id="安装lombok" tabindex="-1"><a class="header-anchor" href="#安装lombok" aria-hidden="true">#</a> 安装Lombok</h5>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/02_搭建Mybatis项目环境/assets/Pasted_image_20230409170154.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>使用Lombok需要在项目中开启注解编译<br>
<img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/02_搭建Mybatis项目环境/assets/Pasted_image_20230409170238.png" alt="" loading="lazy"></p>
<h5 id="安装mybatisx" tabindex="-1"><a class="header-anchor" href="#安装mybatisx" aria-hidden="true">#</a> 安装MybatisX</h5>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/02_搭建Mybatis项目环境/assets/Pasted_image_20230409170123.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="准备项目结构与数据" tabindex="-1"><a class="header-anchor" href="#准备项目结构与数据" aria-hidden="true">#</a> 准备项目结构与数据</h2>
<h4 id="导入数据库" tabindex="-1"><a class="header-anchor" href="#导入数据库" aria-hidden="true">#</a> 导入数据库</h4>
<p>![[dump-test-202304141121.sql]]</p>
<h4 id="创建项目结构" tabindex="-1"><a class="header-anchor" href="#创建项目结构" aria-hidden="true">#</a> 创建项目结构</h4>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/02_搭建Mybatis项目环境/assets/Pasted_image_20230409171225.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在创建结构时需要注意:</p>
<ol>
<li>sqlMapConfig.xml需要放到resources根目录下</li>
<li>DeptMapper.xml文件需要与代码层中com.meturing.mapper的层级结构一致</li>
</ol>
<h4 id="创建实体类" tabindex="-1"><a class="header-anchor" href="#创建实体类" aria-hidden="true">#</a> 创建实体类</h4>
<p>创建实体类Dept.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>/**  
 * @author sqTan * @description 部门  
 * @date 2023/04/09  
 */
@Data //所有参数构造Get/Set方法  
@AllArgsConstructor //导入全参构造函数  
@NoArgsConstructor //导入无参构造函数  
public class Dept implements Serializable {  
    private Integer deptno;  
    private String dname;  
    private String loc;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="准备mybatis的配置" tabindex="-1"><a class="header-anchor" href="#准备mybatis的配置" aria-hidden="true">#</a> 准备Mybatis的配置</h2>
<h4 id="sqlmapconfig-xml-配置文件" tabindex="-1"><a class="header-anchor" href="#sqlmapconfig-xml-配置文件" aria-hidden="true">#</a> sqlMapConfig.xml 配置文件</h4>
<p>注意: 注意在使用配置文件时分号在XML中需要写成<code v-pre>&amp;amp;</code> 否则报错</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;  
&lt;!DOCTYPE configuration  
        PUBLIC &quot;-//mybatis.org//DTD Config 3.0//EN&quot;  
        &quot;http://mybatis.org/dtd/mybatis-3-config.dtd&quot;&gt;  
&lt;configuration&gt;  
    &lt;environments default=&quot;development&quot;&gt;  
        &lt;environment id=&quot;development&quot;&gt;  
            &lt;transactionManager type=&quot;JDBC&quot;/&gt;  
            &lt;dataSource type=&quot;POOLED&quot;&gt;  
                &lt;property name=&quot;driver&quot; value=&quot;com.mysql.cj.jdbc.Driver&quot;/&gt;  
                &lt;property name=&quot;url&quot; value=&quot;jdbc:mysql://192.168.1.188:3306/test?useSSL=false&amp;amp;useUnicode=true&amp;amp;characterEncoding=UTF-8&amp;amp;serverTimezone=Asia/Shanghai&quot;/&gt;  
                &lt;property name=&quot;username&quot; value=&quot;root&quot;/&gt;  
                &lt;property name=&quot;password&quot; value=&quot;root&quot;/&gt;  
            &lt;/dataSource&gt;  
        &lt;/environment&gt;  
    &lt;/environments&gt; 
    
    &lt;!-- 需要指向需要Mapping的XMl文件(注册) --&gt;  
    &lt;mappers&gt;  
        &lt;mapper resource=&quot;com/meturing/mapper/DeptMapper.xml&quot;/&gt;  
    &lt;/mappers&gt;  
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="deptmapper-xml映射文件" tabindex="-1"><a class="header-anchor" href="#deptmapper-xml映射文件" aria-hidden="true">#</a> DeptMapper.xml映射文件</h4>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;  
&lt;!DOCTYPE mapper  
        PUBLIC &quot;-//mybatis.org//DTDMapper3.0//EN&quot;  
        &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;  
&lt;mapper namespace=&quot;deptMapper&quot;&gt;  
    &lt;!-- public List&lt;Dept&gt; findAll(){ } --&gt;  
    &lt;select id=&quot;findAll&quot; resultType=&quot;com.meturing.pojo.Dept&quot; &gt;  
        select * from dept    
	&lt;/select&gt;  
&lt;/mapper&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>namespace</code> 表示当前Mapper的名字.可以随意<br>
<code v-pre>id</code> 表示当前SQL语句的名字<br>
<code v-pre>resultType</code> 表示当前SQL执行后需要存储的对象位置,需要填写全类路径</p>
<h2 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h2>
<h4 id="基础写法思路" tabindex="-1"><a class="header-anchor" href="#基础写法思路" aria-hidden="true">#</a> 基础写法思路</h4>
<figure><img src="@source/CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/02_搭建Mybatis项目环境/assets/Pasted_image_20230409171943.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>创建一个SqlSessionFactoryBuilder对象</li>
<li>通过Resources类获取指定配置文件的InputStream流</li>
<li>通过SqlSessionFactoryBuilder对象使用配置文件的InputStream流构建一个SqlSessionFactory对象</li>
<li>使用SqlSessionFactory对象打开数据库链接</li>
<li>执行SQL</li>
<li>关闭SqlSessionFactory对象</li>
</ol>
<h4 id="相关测试代码" tabindex="-1"><a class="header-anchor" href="#相关测试代码" aria-hidden="true">#</a> 相关测试代码</h4>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>package com.meturing.test;  
  
import com.meturing.pojo.Dept;  
import org.apache.ibatis.io.Resources;  
import org.apache.ibatis.session.SqlSession;  
import org.apache.ibatis.session.SqlSessionFactory;  
import org.apache.ibatis.session.SqlSessionFactoryBuilder;  
import org.junit.After;  
import org.junit.Before;  
import org.junit.Test;  
  
import java.io.IOException;  
import java.io.InputStream;  
import java.util.List;

public class Test1 {  
    private static SqlSession sqlSession = null;  
    
    /**  
     * 初始化  
     *  Before注解会使方法在执行测试单元前执行  
     * @author sqTan  
     * @date 2023/04/09     */    @Before  
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
    public void test1(){  
        //执行查询方法  
        List&lt;Dept&gt; deptList = sqlSession.selectList(&quot;findAll&quot;);  
        //deptList.stream().forEach(System.out::println);  
        for (Dept dept : deptList) {  
            System.out.println(dept);  
        }  
    }  
    
    /**  
     * 释放  
     * After注解会使方法在执行测试单元后执行  
     * @author sqTan  
     * @date 2023/04/09     */    @After  
    public void release(){  
        //关闭链接  
        sqlSession.close();  
    }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


