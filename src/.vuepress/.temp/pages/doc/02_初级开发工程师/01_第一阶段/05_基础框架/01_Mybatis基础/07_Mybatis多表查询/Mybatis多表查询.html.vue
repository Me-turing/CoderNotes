<template><div><h2 id="数据准备" tabindex="-1"><a class="header-anchor" href="#数据准备" aria-hidden="true">#</a> 数据准备</h2>
<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre v-pre class="language-SQL"><code>CREATE TABLE `projects`  (
  `pid` int(2) NOT NULL AUTO_INCREMENT,
  `pname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `money` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`pid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

INSERT INTO `projects` VALUES (1, ' ***大学OA', 500000);
INSERT INTO `projects` VALUES (2, '学生选课系统', 100000);
INSERT INTO `projects` VALUES (3, '讲师测评系统', 20000);
INSERT INTO `projects` VALUES (4, '线上问答系统 ', 20000);
CREATE TABLE `projectrecord`  (
  `empno` int(4) NOT NULL,
  `pid` int(2) NOT NULL,
  PRIMARY KEY (`empno`, `pid`) USING BTREE,
  INDEX `fk_project_pro`(`pid`) USING BTREE,
  CONSTRAINT `fk_emp_pro` FOREIGN KEY (`empno`) REFERENCES `emp` (`EMPNO`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_project_pro` FOREIGN KEY (`pid`) REFERENCES `projects` (`pid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

INSERT INTO `projectrecord` VALUES (7369, 1);
INSERT INTO `projectrecord` VALUES (7521, 1);
INSERT INTO `projectrecord` VALUES (7369, 2);
INSERT INTO `projectrecord` VALUES (7499, 2);
INSERT INTO `projectrecord` VALUES (7521, 2);
INSERT INTO `projectrecord` VALUES (7369, 3);
INSERT INTO `projectrecord` VALUES (7499, 3);
INSERT INTO `projectrecord` VALUES (7521, 3);
INSERT INTO `projectrecord` VALUES (7369, 4);
INSERT INTO `projectrecord` VALUES (7499, 4);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/07_Mybatis多表查询/assets/Pasted_image_20230416122518.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="resultmap标签" tabindex="-1"><a class="header-anchor" href="#resultmap标签" aria-hidden="true">#</a> resultMap标签</h2>
<h3 id="resulttype和resultmap" tabindex="-1"><a class="header-anchor" href="#resulttype和resultmap" aria-hidden="true">#</a> resultType和resultMap</h3>
<ul>
<li>resultType
<ul>
<li>resultType可以把查询结果封装到pojo类型中，但必须pojo类的属性名和查询到的数据库表的字段名一致。如果sql查询到的字段与pojo的属性名不一致，则需要使用resultMap将字段名和属性名对应起来，进行手动配置封装，将结果映射到pojo中</li>
</ul>
</li>
<li>resultMap
<ul>
<li>resultMap可以实现将查询结果映射为复杂类型的pojo，比如在查询结果映射对象中包括pojo和list实现一对一查询和一对多查询。</li>
</ul>
</li>
</ul>
<h3 id="resultmap标签解析" tabindex="-1"><a class="header-anchor" href="#resultmap标签解析" aria-hidden="true">#</a> resultMap标签解析</h3>
<ul>
<li>resultMap元素属性</li>
</ul>
<ol>
<li><code v-pre>id</code>:映射规则集的唯一标识，可以被select元素的resultMap属性应用</li>
<li><code v-pre>type</code>:映射的结果类型，这里指定封装成userList实例</li>
</ol>
<ul>
<li>resultMap元素包含以下子元素</li>
</ul>
<ol>
<li><code v-pre> id</code>:指定和数据表主键字段对应的标识属性。设置此项可以提升MyBatis框架的性能，特别是应用缓存和嵌套结果映射的时候。</li>
<li><code v-pre>result</code>:指定结果集字段和实体类属性的映射关系。</li>
<li><code v-pre>association</code>:映射到JavaBean某个“复杂类型”属性，比如JavaBean类</li>
<li><code v-pre>collection</code>:映射到JavaBean某个“复杂类型”属性，比如集合</li>
</ol>
<h2 id="关联查询" tabindex="-1"><a class="header-anchor" href="#关联查询" aria-hidden="true">#</a> 关联查询</h2>
<h3 id="手动映射" tabindex="-1"><a class="header-anchor" href="#手动映射" aria-hidden="true">#</a> 手动映射</h3>
<p>如果实体类中的字段名字与数据库中的字段名字不符的话,我们可以通过<code v-pre>resultMap</code>标签进行手动映射</p>
<p>例如: <strong>Dept在数据库中存在dname字段,但在实体类中叫做name</strong><br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/07_Mybatis多表查询/assets/Pasted_image_20230416121706.png" alt="" loading="lazy"></p>
<ul>
<li>DeptMapper.Java接口</li>
</ul>
<div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre v-pre class="language-JAVA"><code>List&lt;Dept&gt; findDepts();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>DeptMapper.XML</li>
</ul>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--手动处理字段之间的映射关系--&gt;  
&lt;resultMap id=&quot;deptMap&quot; type=&quot;dept&quot;&gt;  
    &lt;!--id标识当前字段为主键--&gt;  
    &lt;id column=&quot;deptno&quot; property=&quot;deptno&quot;&gt;&lt;/id&gt;  
    &lt;!--当属性名和查询出的数据表字段名相同 可以不写映射关系--&gt;  
    &lt;!--column表示数据库中的字段名 property表示实体类中的字段名--&gt;  
    &lt;result column=&quot;dname&quot; property=&quot;name&quot;&gt;&lt;/result&gt;  
    &lt;result column=&quot;loc&quot; property=&quot;loc&quot;&gt;&lt;/result&gt;  
&lt;/resultMap&gt;  
&lt;select id=&quot;findDepts&quot; resultMap=&quot;deptMap&quot;&gt;  
    select * from dept
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>测试代码</li>
</ul>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void findDepts(){  
    DeptMapper deptMapper = sqlSession.getMapper(DeptMapper.class);  
    List&lt;Dept&gt; deptList = deptMapper.findDepts();  
    deptList.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一对一查询-association子属性" tabindex="-1"><a class="header-anchor" href="#一对一查询-association子属性" aria-hidden="true">#</a> 一对一查询 : association子属性</h3>
<p>根据编号查询员工信息及所在的部门信息</p>
<p>执行的SQL:</p>
<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre v-pre class="language-SQL"><code>select * from  
emp e  
left join dept d  
on e.deptno =d.deptno  
where empno = '7499'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h4>
<p>我们看到emp表与dept表存在一对一的关系,所以在构建实体类的时候可以为emp表中创建一个dept的私有属性</p>
<h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4>
<p>构建实体类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Data  
@AllArgsConstructor  
@NoArgsConstructor  
public class Emp implements Serializable {  
    private Integer empno;  
    private String ename;  
    private String job;  
    private Integer mgr;  
    private Date hiredate;  
    private Double sal;  
    private Double comm;  
    private Integer deptno;  
    private Dept dept;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Data //所有参数构造Get/Set方法  
@AllArgsConstructor //导入全参构造函数  
@NoArgsConstructor //导入无参构造函数  
public class Dept implements Serializable {  
    private Integer deptno;  
    private String name;  
    private String loc;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>List&lt;Emp&gt; findEmpJoinDeptByEmpno(String empno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Mapper</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;resultMap id=&quot;empMap&quot; type=&quot;emp&quot;&gt;  
    &lt;!--设置emp本身的八个属性的映射关系--&gt;  
    &lt;id column=&quot;empno&quot; property=&quot;empno&quot;&gt;&lt;/id&gt;  
    &lt;result column=&quot;ename&quot; property=&quot;ename&quot;&gt;&lt;/result&gt;  
    &lt;result column=&quot;job&quot; property=&quot;job&quot;&gt;&lt;/result&gt;  
    &lt;result column=&quot;mgr&quot; property=&quot;mgr&quot;&gt;&lt;/result&gt;  
    &lt;result column=&quot;hiredate&quot; property=&quot;hiredate&quot;&gt;&lt;/result&gt;  
    &lt;result column=&quot;sal&quot; property=&quot;sal&quot;&gt;&lt;/result&gt;  
    &lt;result column=&quot;comm&quot; property=&quot;comm&quot;&gt;&lt;/result&gt;  
    &lt;result column=&quot;deptno&quot; property=&quot;deptno&quot;&gt;&lt;/result&gt;  
    &lt;!--  
        association 处理一对一 封装一对一信息关系的标签  
           property  emp类的属性名  
           javaType  用哪个类的对象给属性赋值  
   --&gt;  
    &lt;association property=&quot;dept&quot; javaType=&quot;dept&quot;&gt;  
        &lt;id column=&quot;deptno&quot; property=&quot;deptno&quot;&gt;&lt;/id&gt;  
        &lt;result column=&quot;dname&quot; property=&quot;name&quot;&gt;&lt;/result&gt;  
        &lt;result column=&quot;loc&quot; property=&quot;loc&quot;&gt;&lt;/result&gt;  
    &lt;/association&gt;  
&lt;/resultMap&gt;  
&lt;select id=&quot;findEmpJoinDeptByEmpno&quot; resultMap=&quot;empMap&quot;&gt;  
    select * from    emp e    left join dept d    on e.deptno =d.deptno    where empno = #{empno}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void  findEmpJoinDeptByEmpno(){  
    EmpMapper empMapper = sqlSession.getMapper(EmpMapper.class);  
    List&lt;Emp&gt; empList = empMapper.findEmpJoinDeptByEmpno(&quot;7499&quot;);  
    empList.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一对多查询-collection子属性" tabindex="-1"><a class="header-anchor" href="#一对多查询-collection子属性" aria-hidden="true">#</a> 一对多查询 : collection子属性</h3>
<p>根据部门号查询部门信息及该部门的所有员工信息</p>
<p>执行的SQL:</p>
<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre v-pre class="language-SQL"><code>select * from dept d left join emp e on d.deptno =e.deptno where d.deptno = 20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="分析-1" tabindex="-1"><a class="header-anchor" href="#分析-1" aria-hidden="true">#</a> 分析</h4>
<p>我们看到emp表与dept表存在多对一的关系,所以在构建实体类的时候可以为dept表中创建一个emp集合的私有属性</p>
<h4 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h4>
<p>构建实体类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Data //所有参数构造Get/Set方法  
@AllArgsConstructor //导入全参构造函数  
@NoArgsConstructor //导入无参构造函数  
public class Dept1 implements Serializable {  
    private Integer deptno;  
    private String name;  
    private String loc;  
    private List&lt;Emp1&gt; emp1List;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Data  
@AllArgsConstructor  
@NoArgsConstructor  
public class Emp1 implements Serializable {  
    private Integer empno;  
    private String ename;  
    private String job;  
    private Integer mgr;  
    private Date hiredate;  
    private Double sal;  
    private Double comm;  
    private Integer deptno;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>List&lt;Dept1&gt; findDeptLeftEmp(Integer deptno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Mapper</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;resultMap id=&quot;findDeptLeftEmp&quot; type=&quot;dept1&quot;&gt;  
    &lt;!--id标识当前字段为主键--&gt;  
    &lt;id column=&quot;deptno&quot; property=&quot;deptno&quot;&gt;&lt;/id&gt;  
    &lt;!--当属性名和查询出的数据表字段名相同 可以不写映射关系--&gt;  
    &lt;!--column表示数据库中的字段名 property表示实体类中的字段名--&gt;  
    &lt;result column=&quot;dname&quot; property=&quot;name&quot;&gt;&lt;/result&gt;  
    &lt;result column=&quot;loc&quot; property=&quot;loc&quot;&gt;&lt;/result&gt;  
    &lt;collection property=&quot;emp1List&quot; ofType=&quot;emp1&quot;&gt;  
        &lt;id column=&quot;empno&quot; property=&quot;empno&quot;&gt;&lt;/id&gt;  
        &lt;result column=&quot;ename&quot; property=&quot;ename&quot;&gt;&lt;/result&gt;  
        &lt;result column=&quot;job&quot; property=&quot;job&quot;&gt;&lt;/result&gt;  
        &lt;result column=&quot;mgr&quot; property=&quot;mgr&quot;&gt;&lt;/result&gt;  
        &lt;result column=&quot;hiredate&quot; property=&quot;hiredate&quot;&gt;&lt;/result&gt;  
        &lt;result column=&quot;sal&quot; property=&quot;sal&quot;&gt;&lt;/result&gt;  
        &lt;result column=&quot;comm&quot; property=&quot;comm&quot;&gt;&lt;/result&gt;  
        &lt;result column=&quot;deptno&quot; property=&quot;deptno&quot;&gt;&lt;/result&gt;  
    &lt;/collection&gt;  
&lt;/resultMap&gt;  
&lt;select id=&quot;findDeptLeftEmp&quot; resultMap=&quot;findDeptLeftEmp&quot;&gt;  
    select * from dept d left join emp e on d.deptno =e.deptno where d.deptno =#{deptno}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void  findDeptLeftEmp(){  
    DeptMapper mapper = sqlSession.getMapper(DeptMapper.class);  
    List&lt;Dept1&gt; dept1s = mapper.findDeptLeftEmp(20);  
    dept1s.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多对多查询-组合使用" tabindex="-1"><a class="header-anchor" href="#多对多查询-组合使用" aria-hidden="true">#</a> 多对多查询 : 组合使用</h3>
<p>根据项目编号查询项目信息,以及参与到该项目之中的所有的员工信息</p>
<p>执行的SQL:</p>
<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre v-pre class="language-SQL"><code>select * from  
projects p  
left join projectrecord pr  
on p.pid = pr.pidleft join emp e  
on e.empno = pr.empno where p.pid= 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-2" tabindex="-1"><a class="header-anchor" href="#分析-2" aria-hidden="true">#</a> 分析</h4>
<p>projects表 对应多个 projectrecord表 ,同时projectrecord表中又通过empno与emp表关联</p>
<p>所以我们可以在projects实体类中创建projectrecord实体类的集合,并在projectrecord实体类中创建emp的属性</p>
<h4 id="代码-2" tabindex="-1"><a class="header-anchor" href="#代码-2" aria-hidden="true">#</a> 代码</h4>
<p>构建实体类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Data  
@NoArgsConstructor  
@AllArgsConstructor  
public class Projects implements Serializable {  
    private Integer pid;  
    private String pname;  
    private Integer money;  
    private List&lt;Projectrecord&gt; projectrecordList;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Data  
@NoArgsConstructor  
@AllArgsConstructor  
public class Projectrecord implements Serializable {  
 private Integer empno;  
 private Integer pid;  
 private Emp emp;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>List&lt;Projects&gt; findProjectsInfo(Integer pid);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Mapper</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;resultMap id=&quot;findProjectsInfo&quot; type=&quot;projects&quot;&gt;
	&lt;!--projects的属性--&gt;
    &lt;id column=&quot;pid&quot; property=&quot;pid&quot;&gt;&lt;/id&gt;  
    &lt;result column=&quot;pname&quot; property=&quot;pname&quot;&gt;&lt;/result&gt;  
    &lt;result column=&quot;money&quot; property=&quot;money&quot;&gt;&lt;/result&gt;
    &lt;!-- 一对多: projectrecord的集合--&gt;
    &lt;collection property=&quot;projectrecordList&quot; ofType=&quot;projectrecord&quot;&gt;  
        &lt;id column=&quot;empno&quot; property=&quot;empno&quot;&gt;&lt;/id&gt;  
        &lt;id column=&quot;pid&quot; property=&quot;pid&quot;&gt;&lt;/id&gt;
        &lt;!-- 一对一: pemp的实体对象--&gt;
        &lt;association property=&quot;emp&quot; javaType=&quot;emp&quot;&gt;  
            &lt;id column=&quot;empno&quot; property=&quot;empno&quot;&gt;&lt;/id&gt;  
            &lt;result column=&quot;ename&quot; property=&quot;ename&quot;&gt;&lt;/result&gt;  
            &lt;result column=&quot;job&quot; property=&quot;job&quot;&gt;&lt;/result&gt;  
            &lt;result column=&quot;mgr&quot; property=&quot;mgr&quot;&gt;&lt;/result&gt;  
            &lt;result column=&quot;hiredate&quot; property=&quot;hiredate&quot;&gt;&lt;/result&gt;  
            &lt;result column=&quot;sal&quot; property=&quot;sal&quot;&gt;&lt;/result&gt;  
            &lt;result column=&quot;comm&quot; property=&quot;comm&quot;&gt;&lt;/result&gt;  
            &lt;result column=&quot;deptno&quot; property=&quot;deptno&quot;&gt;&lt;/result&gt;  
        &lt;/association&gt;  
    &lt;/collection&gt;  
&lt;/resultMap&gt;  
&lt;select id=&quot;findProjectsInfo&quot; parameterType=&quot;integer&quot; resultMap=&quot;findProjectsInfo&quot;&gt;  
    select * from    projects p    left join projectrecord pr          on p.pid = pr.pid    left join emp e          on e.empno = pr.empno    where p.pid= #{pid}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void  findProjectsInfo(){  
    ProjectsMapper mapper = sqlSession.getMapper(ProjectsMapper.class);  
    List&lt;Projects&gt; dept1s = mapper.findProjectsInfo(2);  
    dept1s.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="级联查询" tabindex="-1"><a class="header-anchor" href="#级联查询" aria-hidden="true">#</a> 级联查询</h2>
<p><strong>级联查询</strong>，顾名思义，就是利于数据库表间的外键关联关系进行自动的级联查询操作。使用MyBatis实现级联查询，除了实体类增加关联属性外，还需要在映射文件中进行配置。</p>
<h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3>
<p>主要是对于: <code v-pre>fetchType=&quot;eager&quot;</code> 的配置,默认不配置则为积极加载</p>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;collection property=&quot;需要保存到的字段名&quot;  
            select=&quot;需要执行的Mapper方法全类路径名&quot;  
            javaType=&quot;返回的类型&quot;  
            column=&quot;传入的参数&quot;  
            jdbcType=&quot;参数的类型[可不写]&quot;  
            fetchType=&quot;eager&quot;&gt;&lt;/collection&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>fetchType=&quot;lazy&quot;</code> 表示懒加载,延迟加载</p>
<h3 id="积极加载与懒加载" tabindex="-1"><a class="header-anchor" href="#积极加载与懒加载" aria-hidden="true">#</a> 积极加载与懒加载</h3>
<ul>
<li>默认为积极加载则无论是否使用,则都将级联中的方法进行执行</li>
<li><strong>延迟加载，又称按需加载</strong>。延迟加载的内容等到真正使用时才去进行加载（查询）。多用在关联对象或集合中。</li>
</ul>
<p><strong>延迟加载的好处</strong>：先从单表查询、需要时再从关联表去关联查询，大大降低数据库在单位时间内的查询工作量,将工作在时间上的分配更加均匀，而且单表要比关联查询多张表速度要快。</p>
<p>懒加载的配置:</p>
<ol>
<li>全局开关：在sqlMapConfig.xml中打开延迟加载的开关。配置完成后所有的association和collection元素都生效</li>
</ol>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;settings&gt;
    &lt;setting name=&quot;lazyLoadingEnabled&quot; value=&quot;true&quot;/&gt;
    &lt;setting name=&quot;aggressiveLazyLoading&quot; value=&quot;true&quot;/&gt;
&lt;/settings&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>lazyLoadingEnabled</strong>:是否开启延迟加载。是Mybatis是否启用懒加载的全局开关。当开启时，所有关联对象都会延迟加载。特定关联关系中可通过设置fetchType属性来覆盖该项的开关状态<br>
<strong>aggressiveLazyLoading</strong>：当开启时，任何方法的调用都会懒加载对象的所有属性。否则，每个属性会按需加载,<br>
2. 指定的association和collection元素中配置<strong>fetchType</strong>属性(eager：表示立刻加载；lazy：表示延迟加载)。<strong>将覆盖全局延迟设置</strong></p>
<h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3>
<p>Dept.Java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Data //所有参数构造Get/Set方法  
@AllArgsConstructor //导入全参构造函数  
@NoArgsConstructor //导入无参构造函数  
public class Dept implements Serializable {  
    private Integer deptno;  
    private String dname;  
    private String loc;  
  
    private List&lt;Emp&gt; empList;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Emp.Java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Data  
@AllArgsConstructor  
@NoArgsConstructor  
public class Emp implements Serializable {  
    private Integer empno;  
    private String ename;  
    private String job;  
    private Integer mgr;  
    private Date hiredate;  
    private Double sal;  
    private Double comm;  
    private Integer deptno;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dept.java接口</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>Dept findeDept(Integer deptno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Emp.java接口</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>Emp findEmp(Integer deptno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>DeptMapper.XML</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;resultMap id=&quot;findDeptAndEmp&quot; type=&quot;dept&quot;&gt;  
    &lt;id column=&quot;deptno&quot; property=&quot;deptno&quot;&gt;&lt;/id&gt;  
    &lt;result column=&quot;dname&quot; property=&quot;dname&quot;&gt;&lt;/result&gt;  
    &lt;result column=&quot;loc&quot; property=&quot;loc&quot;&gt;&lt;/result&gt; 
    &lt;!-- 
	    select=&quot;com.meturing.mapper.EmpMapper.findEmp&quot;  表示调用该Mapper的findEmp方法
	    javaType=&quot;list&quot; 表示返回值是一个list类型
	    column=&quot;deptno&quot; 表示需要传递的参数
	    jdbcType=&quot;INTEGER&quot; 表示参数的类型
	    fetchType=&quot;lazy&quot; 表示懒加载
	--&gt;
    &lt;collection property=&quot;empList&quot;  
                select=&quot;com.meturing.mapper.EmpMapper.findEmp&quot;  
                javaType=&quot;list&quot;  
                column=&quot;deptno&quot;  
                jdbcType=&quot;INTEGER&quot;  
                fetchType=&quot;lazy&quot;&gt;&lt;/collection&gt;  
&lt;/resultMap&gt;  
&lt;select id=&quot;findeDept&quot; parameterType=&quot;integer&quot; resultMap=&quot;findDeptAndEmp&quot;&gt;  
    select * from dept where deptno=#{deptno}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>EmpMapper.XML</p>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;select id=&quot;findEmp&quot; parameterType=&quot;integer&quot; resultType=&quot;emp&quot;&gt;  
    select * from emp where DEPTNO =#{deptno}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试方法:</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void Test01(){  
    DeptMapper mapper = sqlSession.getMapper(DeptMapper.class);  
    Dept dept = mapper.findeDept(20);  
    //System.out.println(dept);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述案例,当我们直接执行测试后,我们发现:</p>
<ol>
<li>由于使用了延迟加载,只会执行一次查询,将Dept中的结果搜索出来,<code v-pre>Dept.Java中的empList为null</code></li>
<li>当我们使用Dept属性时,则会通过级联的方法给empList中调用<code v-pre>com.meturing.mapper.EmpMapper.findEmp</code>赋值</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<h3 id="resultmap中的常见属性" tabindex="-1"><a class="header-anchor" href="#resultmap中的常见属性" aria-hidden="true">#</a> resultMap中的常见属性</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">property</td>
<td style="text-align:left">需要映射到JavaBean 的属性名称</td>
</tr>
<tr>
<td style="text-align:left">javaType</td>
<td style="text-align:left">property的类型，一个完整的类名，或者是一个类型别名。如果你匹配的是一个JavaBean，那MyBatis 通常会自行检测到</td>
</tr>
<tr>
<td style="text-align:left">column</td>
<td style="text-align:left">数据表的列名或者列别名</td>
</tr>
<tr>
<td style="text-align:left">jdbcType</td>
<td style="text-align:left">column在数据库表中的类型。这个属性只在insert,update 或delete 的时候针对允许空的列有用。JDBC 需要这项，但MyBatis 不需要</td>
</tr>
<tr>
<td style="text-align:left">typeHandler</td>
<td style="text-align:left">使用这个属性可以覆写类型处理器，实现javaType、jdbcType之间的相互转换。一般可以省略，会探测到使用的什么类型的typeHandler进行处理</td>
</tr>
<tr>
<td style="text-align:left">fetchType</td>
<td style="text-align:left">自动延迟加载</td>
</tr>
<tr>
<td style="text-align:left">select</td>
<td style="text-align:left">association、collection的属性，使用哪个查询查询属性的值，要求指定namespace+id的全名称</td>
</tr>
<tr>
<td style="text-align:left">ofType</td>
<td style="text-align:left">collection的属性，指明集合中元素的类型（即泛型类型）</td>
</tr>
</tbody>
</table>
<h3 id="级联查询和多表查询的比较及其选择" tabindex="-1"><a class="header-anchor" href="#级联查询和多表查询的比较及其选择" aria-hidden="true">#</a> 级联查询和多表查询的比较及其选择</h3>
<table>
<thead>
<tr>
<th style="text-align:left"></th>
<th style="text-align:left">级联查询</th>
<th style="text-align:left">多表查询</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><div>SQL语句数量</div></td>
<td style="text-align:left"><div>多条</div></td>
<td style="text-align:left"><div>一条</div></td>
</tr>
<tr>
<td style="text-align:left">性能</td>
<td style="text-align:left">性能低</td>
<td style="text-align:left">性能高</td>
</tr>
<tr>
<td style="text-align:left">延迟加载</td>
<td style="text-align:left">立即加载、延迟加载</td>
<td style="text-align:left">只有立即加载</td>
</tr>
<tr>
<td style="text-align:left">灵活性</td>
<td style="text-align:left">更灵活</td>
<td style="text-align:left">不灵活</td>
</tr>
<tr>
<td style="text-align:left">SQL难易度</td>
<td style="text-align:left">简单</td>
<td style="text-align:left">复杂</td>
</tr>
<tr>
<td style="text-align:left">选择依据</td>
<td style="text-align:left">简单、灵活</td>
<td style="text-align:left">高性能</td>
</tr>
</tbody>
</table>
<h3 id="resulttype和resultmap使用场景" tabindex="-1"><a class="header-anchor" href="#resulttype和resultmap使用场景" aria-hidden="true">#</a> ResultType和ResultMap使用场景</h3>
<ol>
<li>如果你做的是单表的查询并且封装的实体和数据库的字段一一对应   resultType</li>
<li>如果实体封装的属性和数据库的字段不一致  resultMap</li>
<li>使用N+1级联查询的时候   resultMap</li>
<li>使用的是多表的连接查询  resultMap</li>
</ol>
<h3 id="多表之间的实现步骤" tabindex="-1"><a class="header-anchor" href="#多表之间的实现步骤" aria-hidden="true">#</a> 多表之间的实现步骤</h3>
<p>一对一关联映射的实现</p>
<ol>
<li>实例：学生和学生证、雇员和工牌</li>
<li>数据库层次：主键关联或者外键关联</li>
<li>MyBatis层次：在映射文件的设置双方均使用association即可，用法相同</li>
</ol>
<p>多对多映射的实现</p>
<ol>
<li>实例：学生和课程、用户和角色</li>
<li>数据库层次：引入一个中间表将一个多对多转为两个一对多</li>
<li>MyBatis层次<br>
方法1：在映射文件的设置双方均使用collection即可，不用引入中间类<br>
方法2：引入中间类和中间类的映射文件，按照两个一对多处理</li>
</ol>
<p>自关联映射</p>
<ol>
<li>实例：Emp表中的员工和上级。一般是一对多关联</li>
<li>数据库层次：外键参考当前表的主键（比如mgr参考empno）</li>
<li>MyBatis层次：按照一对多处理，但是增加的属性都写到一个实体类中，增加的映射也都写到一个映射文件中</li>
</ol>
</div></template>


