<template><div><h2 id="逆向工程" tabindex="-1"><a class="header-anchor" href="#逆向工程" aria-hidden="true">#</a> 逆向工程</h2>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<p>MyBatis的一个主要的特点就是需要程序员自己编写SQL，那么如果表太多的话，难免会很麻烦，所以MyBatis官方提供了一个逆向工程，可以针对单表自动生成MyBatis执行所需要的代码（包括mapper.xml，mapper.java，pojo）。一般在开发中，常用的逆向工程方式是通过数据库的表生成代码。</p>
<ul>
<li>正向工程：先创建Java实体类，由框架负责根据实体类生成数据库表。Hibernate是支持正向工程的。</li>
<li>逆向工程：先创建数据库表，由框架负责根据数据库表，反向生成如下资源：（包括mapper.xml，mapper.java，pojo）</li>
</ul>
<h3 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理" aria-hidden="true">#</a> 基本原理</h3>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/09_Mybatis逆向工程与其他配置/assets/Pasted_image_20230416195841.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="配置环境" tabindex="-1"><a class="header-anchor" href="#配置环境" aria-hidden="true">#</a> 配置环境</h3>
<h4 id="导入pom-xml依赖" tabindex="-1"><a class="header-anchor" href="#导入pom-xml依赖" aria-hidden="true">#</a> 导入Pom.xml依赖</h4>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!-- 依赖MyBatis核心包 --&gt;  
&lt;dependencies&gt;  
    &lt;dependency&gt;  
        &lt;groupId&gt;org.mybatis&lt;/groupId&gt;  
        &lt;artifactId&gt;mybatis&lt;/artifactId&gt;  
        &lt;version&gt;3.5.3&lt;/version&gt;  
    &lt;/dependency&gt;  
&lt;/dependencies&gt;  
&lt;!-- 控制Maven在构建过程中相关配置 --&gt;  
&lt;build&gt;  
    &lt;!-- 构建过程中用到的插件 --&gt;  
    &lt;plugins&gt;  
        &lt;!-- 具体插件，逆向工程的操作是以构建过程中插件形式出现的 --&gt;  
        &lt;plugin&gt;  
            &lt;groupId&gt;org.mybatis.generator&lt;/groupId&gt;  
            &lt;artifactId&gt;mybatis-generator-maven-plugin&lt;/artifactId&gt;  
            &lt;version&gt;1.3.0&lt;/version&gt;  
            &lt;!-- 插件的依赖 --&gt;  
            &lt;dependencies&gt;  
                &lt;!-- 逆向工程的核心依赖 --&gt;  
                &lt;dependency&gt;  
                    &lt;groupId&gt;org.mybatis.generator&lt;/groupId&gt;  
                    &lt;artifactId&gt;mybatis-generator-core&lt;/artifactId&gt;  
                    &lt;version&gt;1.3.2&lt;/version&gt;  
                &lt;/dependency&gt;  
                &lt;!-- 数据库连接池 --&gt;  
                &lt;dependency&gt;  
                    &lt;groupId&gt;com.mchange&lt;/groupId&gt;  
                    &lt;artifactId&gt;c3p0&lt;/artifactId&gt;  
                    &lt;version&gt;0.9.2&lt;/version&gt;  
                &lt;/dependency&gt;  
                &lt;!-- MySQL驱动 --&gt;  
                &lt;dependency&gt;  
                    &lt;groupId&gt;mysql&lt;/groupId&gt;  
                    &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;  
                    &lt;version&gt;8.0.16&lt;/version&gt;  
                &lt;/dependency&gt;  
            &lt;/dependencies&gt;  
        &lt;/plugin&gt;  
    &lt;/plugins&gt;  
&lt;/build&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置mbg" tabindex="-1"><a class="header-anchor" href="#配置mbg" aria-hidden="true">#</a> 配置MBG</h4>
<p><strong>文件名必须是：generatorConfig.xml</strong></p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/09_Mybatis逆向工程与其他配置/assets/Pasted_image_20230416200026.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;  
&lt;!DOCTYPE generatorConfiguration  
        PUBLIC &quot;-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN&quot;  
        &quot;http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd&quot;&gt;  
&lt;generatorConfiguration&gt;  
    &lt;!--  
            targetRuntime: 执行生成的逆向工程的版本  
                    MyBatis3Simple: 生成基本的CRUD（清新简洁版）  
                    MyBatis3: 生成带条件的CRUD（奢华尊享版）  
     --&gt;  
    &lt;context id=&quot;DB2Tables&quot; targetRuntime=&quot;MyBatis3&quot;&gt;  
        &lt;!-- 数据库的连接信息 --&gt;  
        &lt;jdbcConnection driverClass=&quot;com.mysql.cj.jdbc.Driver&quot;  
                        connectionURL=&quot;jdbc:mysql://192.168.1.188:3306/test?useSSL=false&amp;amp;useUnicode=true&amp;amp;characterEncoding=UTF-8&amp;amp;serverTimezone=Asia/Shanghai&quot;  
                        userId=&quot;root&quot;  
                        password=&quot;root&quot;&gt;  
        &lt;/jdbcConnection&gt;  
        &lt;!-- javaBean的生成策略--&gt;  
        &lt;javaModelGenerator targetPackage=&quot;com.meturing.pojo&quot; targetProject=&quot;.\src\main\java&quot;&gt;  
            &lt;property name=&quot;enableSubPackages&quot; value=&quot;true&quot; /&gt;  
            &lt;property name=&quot;trimStrings&quot; value=&quot;true&quot; /&gt;  
        &lt;/javaModelGenerator&gt;  
        &lt;!-- SQL映射文件的生成策略 --&gt;  
        &lt;sqlMapGenerator targetPackage=&quot;com.meturing.mapper&quot;  targetProject=&quot;.\src\main\resources&quot;&gt;  
            &lt;property name=&quot;enableSubPackages&quot; value=&quot;true&quot; /&gt;  
        &lt;/sqlMapGenerator&gt;  
        &lt;!-- Mapper接口的生成策略 --&gt;  
        &lt;javaClientGenerator type=&quot;XMLMAPPER&quot; targetPackage=&quot;com.meturing.mapper&quot;  targetProject=&quot;.\src\main\java&quot;&gt;  
            &lt;property name=&quot;enableSubPackages&quot; value=&quot;true&quot; /&gt;  
        &lt;/javaClientGenerator&gt;  
        &lt;!-- 逆向分析的表 --&gt;  
        &lt;!-- tableName设置为*号，可以对应所有表，此时不写domainObjectName --&gt;  
        &lt;!-- domainObjectName属性指定生成出来的实体类的类名 --&gt;  
        &lt;table tableName=&quot;dept&quot; domainObjectName=&quot;Dept&quot;/&gt;  
    &lt;/context&gt;  
&lt;/generatorConfiguration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="执行mbg插件" tabindex="-1"><a class="header-anchor" href="#执行mbg插件" aria-hidden="true">#</a> 执行MBG插件</h4>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/09_Mybatis逆向工程与其他配置/assets/Pasted_image_20230416200054.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/09_Mybatis逆向工程与其他配置/assets/Pasted_image_20230416201201.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="qbc查询" tabindex="-1"><a class="header-anchor" href="#qbc查询" aria-hidden="true">#</a> QBC查询</h3>
<p>QBC：Query By Criteria<br>
QBC查询最大的特点就是将SQL语句中的WHERE子句进行了组件化的封装，让我们可以通过调用Criteria对象的方法自由的拼装查询条件。</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void tetsQBC(){  
    //目标:组装查询条件 where (xxx) or (xxx)    //1. 创建Example对象  
    DeptExample example = new DeptExample();  
  
    //2. Example对象创建Criteria对象  
    DeptExample.Criteria criteria01 = example.createCriteria();  
    DeptExample.Criteria criteria02 = example.or();  
  
    //3. 在Criteria对象添加查询条件  
    // 封装的第一个 dname like '%S%'    criteria01.andDnameLike(&quot;%S%&quot;);  
  
    // 封装的第二个 Deptno &gt;= 20    criteria02.andDeptnoGreaterThan(20);  
  
    //4.根据 Example对象执行查询  
    // select * from Dept WHERE  
    // ( dname like '%S%' ) or ( Deptno &gt;= 20)    DeptMapper mapper = sqlSession.getMapper(DeptMapper.class);  
    List&lt;Dept&gt; deptList = mapper.selectByExample(example);  
    deptList.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mybatis其他配置" tabindex="-1"><a class="header-anchor" href="#mybatis其他配置" aria-hidden="true">#</a> Mybatis其他配置</h2>
<h3 id="main目录下xml文件编译问题" tabindex="-1"><a class="header-anchor" href="#main目录下xml文件编译问题" aria-hidden="true">#</a> main目录下XML文件编译问题</h3>
<p>Maven项目默认对于Java文件下只处理.java文件,在打包后才将Resources目录下的文件进行合并<br>
所以对于Java目录下的其他的配置文件,我们需要在Pom.xml中进行配置</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/09_Mybatis逆向工程与其他配置/assets/Pasted_image_20230416202724.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/09_Mybatis逆向工程与其他配置/assets/Pasted_image_20230416202738.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Pom.xml的配置如下</p>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;build&gt;  
    &lt;!--告诉maven将项目源码中的xml文件也进行编译，并放到编译目录中--&gt;  
    &lt;resources&gt;  
        &lt;resource&gt;  
            &lt;directory&gt;src/main/java&lt;/directory&gt;  
            &lt;includes&gt;  
                &lt;include&gt;**/*.xml&lt;/include&gt;  
            &lt;/includes&gt;  
            &lt;filtering&gt;true&lt;/filtering&gt;  
        &lt;/resource&gt;  
        &lt;resource&gt;  
            &lt;directory&gt;src/main/resources&lt;/directory&gt;  
            &lt;filtering&gt;true&lt;/filtering&gt;  
        &lt;/resource&gt;  
    &lt;/resources&gt;  
&lt;/build&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型处理器" tabindex="-1"><a class="header-anchor" href="#类型处理器" aria-hidden="true">#</a> 类型处理器</h3>
<h4 id="mybatis内置类型处理器" tabindex="-1"><a class="header-anchor" href="#mybatis内置类型处理器" aria-hidden="true">#</a> Mybatis内置类型处理器</h4>
<p>无论是 MyBatis 在预处理语句（PreparedStatement）中设置一个参数时，还是从结果集中取出一个值时，都会用类型处理器将获取的值以合适的方式转换成 Java 类型。</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/09_Mybatis逆向工程与其他配置/assets/Pasted_image_20230416203325.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="日期处理" tabindex="-1"><a class="header-anchor" href="#日期处理" aria-hidden="true">#</a> 日期处理</h4>
<p>日期和时间的处理，JDK1.8以前一直是个头疼的问题。我们通常使用 JSR310 规范领导者 Stephen Colebourne 创建的 Joda-Time 来操作。JDK1.8已经实现全部的JSR310 规范了。</p>
<p>Mybatis在日期时间处理的问题上，提供了基于 JSR310（Date and Time API）编写的各种日期时间类型处理器。<br>
MyBatis3.4以前的版本需要我们手动注册这些处理器，以后的版本都是自动注册的。</p>
<p>如需注册，需要下载<code v-pre>mybatistypehandlers-jsr310</code>，并通过如下方式注册<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/09_Mybatis逆向工程与其他配置/assets/Pasted_image_20230416203358.png" alt="" loading="lazy"></p>
<h4 id="自定义类型处理" tabindex="-1"><a class="header-anchor" href="#自定义类型处理" aria-hidden="true">#</a> 自定义类型处理</h4>
<p>当某个具体类型Mybatis靠内置的类型处理器无法识别时，可以使用Mybatis提供的自定义类型处理器机制。</p>
<p>第一步：实现 org.apache.ibatis.type.TypeHandler 接口或者继承 org.apache.ibatis.type.BaseTypeHandler 类。</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@MappedTypes(value = Address.class)
@MappedJdbcTypes(JdbcType.CHAR)
public class AddressTypeHandler extends BaseTypeHandler&lt;Address&gt; {
    @Override
    public void setNonNullParameter(PreparedStatement preparedStatement, int i, Address address, JdbcType jdbcType) throws SQLException {

    }

    @Override
    public Address getNullableResult(ResultSet resultSet, String columnName) throws SQLException {

        // 1.从结果集中获取原始的地址数据
        String addressOriginalValue = resultSet.getString(columnName);

        // 2.判断原始数据是否有效
        if (addressOriginalValue == null || &quot;&quot;.equals(addressOriginalValue))
            return null;

        // 3.如果原始数据有效则执行拆分
        String[] split = addressOriginalValue.split(&quot;,&quot;);
        String province = split[0];
        String city = split[1];
        String street = split[2];

        // 4.创建Address对象
        Address address = new Address();
        address.setCity(city);
        address.setProvince(province);
        address.setStreet(street);

        return address;
    }

    @Override
    public Address getNullableResult(ResultSet resultSet, int i) throws SQLException {
        return null;
    }

    @Override
    public Address getNullableResult(CallableStatement callableStatement, int i) throws SQLException {
        return null;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：指定其映射某个JDBC类型（可选操作）。</p>
<p>第三步：在Mybatis全局配置文件中注册。</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!-- 注册自定义类型转换器 --&gt;
&lt;typeHandlers&gt;
    &lt;typeHandler 
             jdbcType=&quot;CHAR&quot; 
             javaType=&quot;com.atguigu.mybatis.entity.Address&quot; 
             handler=&quot;com.atguigu.mybatis.type.handler.AddressTypeHandler&quot;/&gt;
&lt;/typeHandlers&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插件机制" tabindex="-1"><a class="header-anchor" href="#插件机制" aria-hidden="true">#</a> 插件机制</h3>
<h4 id="mybatis四大对象" tabindex="-1"><a class="header-anchor" href="#mybatis四大对象" aria-hidden="true">#</a> Mybatis四大对象</h4>
<h5 id="executor" tabindex="-1"><a class="header-anchor" href="#executor" aria-hidden="true">#</a> Executor</h5>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/09_Mybatis逆向工程与其他配置/assets/Pasted_image_20230416203600.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="parameterhandler" tabindex="-1"><a class="header-anchor" href="#parameterhandler" aria-hidden="true">#</a> ParameterHandler</h5>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/09_Mybatis逆向工程与其他配置/assets/Pasted_image_20230416203612.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="resultsethandler" tabindex="-1"><a class="header-anchor" href="#resultsethandler" aria-hidden="true">#</a> ResultSetHandler</h5>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/09_Mybatis逆向工程与其他配置/assets/Pasted_image_20230416203630.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="statementhandler" tabindex="-1"><a class="header-anchor" href="#statementhandler" aria-hidden="true">#</a> StatementHandler</h5>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/09_Mybatis逆向工程与其他配置/assets/Pasted_image_20230416203636.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="mybatis插件机制" tabindex="-1"><a class="header-anchor" href="#mybatis插件机制" aria-hidden="true">#</a> Mybatis插件机制</h4>
<p>插件是MyBatis提供的一个非常强大的机制，我们可以通过插件来修改MyBatis的一些核心行为。插件通过<strong>动态代理</strong>机制，可以介入四大对象的任何一个方法的执行。著名的Mybatis插件包括 PageHelper（分页插件）、通用 Mapper（SQL生成插件）等。</p>
<p>如果想编写自己的Mybatis插件可以通过实现org.apache.ibatis.plugin.Interceptor接口来完成，表示对Mybatis常规操作进行拦截，加入自定义逻辑。</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/09_Mybatis逆向工程与其他配置/assets/Pasted_image_20230416203658.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="mybatis底层的jdbc封装" tabindex="-1"><a class="header-anchor" href="#mybatis底层的jdbc封装" aria-hidden="true">#</a> Mybatis底层的JDBC封装</h4>
<p>org.apache.ibatis.executor.statement.PreparedStatementHandler类：</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/09_Mybatis逆向工程与其他配置/assets/Pasted_image_20230416203718.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>查找上面目标时，Debug查看源码的切入点是：<br>
org.apache.ibatis.session.defaults.DefaultSqlSession类的update()方法<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/09_Mybatis逆向工程与其他配置/assets/Pasted_image_20230416203732.png" alt="" loading="lazy"></p>
</div></template>


