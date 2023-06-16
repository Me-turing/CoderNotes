import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as p,c as u,d as a,e,b as n,w as d,f as s}from"./app-c47b8d81.js";const v="/CoderNotes/assets/Pasted_image_20230413142303-a689f274.png",l="/CoderNotes/assets/Pasted_image_20230414111905-14909a94.png",c={},m=s(`<h2 id="为什么要基于代理模式开发" tabindex="-1"><a class="header-anchor" href="#为什么要基于代理模式开发" aria-hidden="true">#</a> 为什么要基于代理模式开发</h2><p>前面已经使用MyBatis完成了对Emp表的CRUD操作，都是由SqlSession调用自身方法发送SQL命令并得到结果的，实现了MyBatis的入门.</p><p>但是这种开发形式存在以下缺点:</p><ol><li>不管是<code>selectList()</code>、<code>selectOne()</code>、<code>selectMap()</code>，都是通过<code>SQLSession对象</code>的API完成增删改查,都只能提供一个查询参数。如果要多个参数，<strong>需要封装到JavaBean或者Map中</strong>，并不一定永远是一个好办法。</li><li>返回值类型较固定</li><li>只提供了映射文件，没有提供数据库操作的接口，不利于后期的维护扩展。</li></ol><p><strong>在MyBatis中提供了另外一种成为Mapper代理（或称为接口绑定）的操作方式</strong> , 在实际开发中也使用该方式.<br> 相较于SQLSession的基本开发模式,基于代理的开发存在以下优点:</p><ol><li>有接口 模块之间有规范了</li><li>参数的处理多样了,接口中的方法参数列表由我们自己决定</li><li>通过代理模式由mybatis提供接口的实现类对象 我们不用写实现类了</li></ol><h2 id="构建项目结构" tabindex="-1"><a class="header-anchor" href="#构建项目结构" aria-hidden="true">#</a> 构建项目结构</h2><h3 id="项目环境" tabindex="-1"><a class="header-anchor" href="#项目环境" aria-hidden="true">#</a> 项目环境</h3><h4 id="构建步骤" tabindex="-1"><a class="header-anchor" href="#构建步骤" aria-hidden="true">#</a> 构建步骤</h4><ul><li>创建一个Maven工程项目</li><li>修改pom.xml文件</li></ul><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>    &lt;groupId&gt;com.meturing&lt;/groupId&gt;  
    &lt;artifactId&gt;MybatisTest02&lt;/artifactId&gt;  
    &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;  
    &lt;packaging&gt;jar&lt;/packaging&gt;  
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
        &lt;!-- log4j1 --&gt;  
        &lt;dependency&gt;  
            &lt;groupId&gt;log4j&lt;/groupId&gt;  
            &lt;artifactId&gt;log4j&lt;/artifactId&gt;  
            &lt;version&gt;1.2.17&lt;/version&gt;  
        &lt;/dependency&gt;  
    &lt;/dependencies&gt;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建sqlMapConfig.xml文件</li></ul><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;  
&lt;!DOCTYPE configuration  
        PUBLIC &quot;-//mybatis.org//DTD Config 3.0//EN&quot;  
        &quot;http://mybatis.org/dtd/mybatis-3-config.dtd&quot;&gt;  
&lt;configuration&gt;  
    &lt;!--  属性  --&gt;  
    &lt;properties resource=&quot;jdbc_config.properties&quot;&gt;  
        &lt;property name=&quot;username&quot; value=&quot;dev_user&quot;/&gt;  
        &lt;property name=&quot;password&quot; value=&quot;F2Fa3!33TYyg&quot;/&gt;  
    &lt;/properties&gt;  
    &lt;!--  设置  --&gt;  
    &lt;settings&gt;  
        &lt;!--  指定使用的日志框架  --&gt;  
        &lt;setting name=&quot;logImpl&quot; value=&quot;LOG4J&quot;/&gt;  
    &lt;/settings&gt;  
    &lt;!--  别名  --&gt;  
    &lt;typeAliases&gt;  
        &lt;package name=&quot;com.meturing.pojo&quot; /&gt;  
    &lt;/typeAliases&gt;  
    &lt;!--  环境变量  --&gt;  
    &lt;environments default=&quot;development&quot;&gt;  
        &lt;environment id=&quot;development&quot;&gt;  
            &lt;!--  事务  --&gt;  
            &lt;transactionManager type=&quot;JDBC&quot;/&gt;  
            &lt;!--  数据源  --&gt;  
            &lt;dataSource type=&quot;POOLED&quot;&gt;  
                &lt;property name=&quot;driver&quot; value=&quot;\${jdbc_driver}&quot;/&gt;  
                &lt;property name=&quot;url&quot; value=&quot;\${jdbc_url}&quot;/&gt;  
                &lt;property name=&quot;username&quot; value=&quot;\${jdbc_username}&quot;/&gt;  
                &lt;property name=&quot;password&quot; value=&quot;\${jdbc_password}&quot;/&gt;  
            &lt;/dataSource&gt;  
        &lt;/environment&gt;  
    &lt;/environments&gt;  
    &lt;!--  映射器  --&gt;  
    &lt;mappers&gt;  
        &lt;!-- 扫描指定目录下的Mapper接口 --&gt;  
        &lt;package name=&quot;com.meturing.mapper&quot;/&gt;  
        &lt;!--        &lt;mapper class=&quot;com.meturing.mapper.EmpMapper&quot; /&gt;--&gt;  
    &lt;/mappers&gt;  
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意:由于我们本次使用了代理模式的开发,所以对于Mapper映射器的配置需要我们指向接口所在的位置. 所以我们可以使用<code>&lt;mapper class=&quot;com.meturing.mapper.EmpMapper&quot; /&gt;</code> 指向具体的接口 或者 <code>&lt;package name=&quot;com.meturing.mapper&quot;/&gt;</code> 扫描指定包下所有的接口</p><ul><li>创建数据源和Log4j配置文件</li></ul><div class="language-Properties line-numbers-mode" data-ext="Properties"><pre class="language-Properties"><code>#定义全局日志级别调试阶段推荐debug  
#log4j.rootLogger=debug,stdout,logfile   #及打印到控制台又输出到文件  
log4j.rootLogger=debug,stdout    
#stdout 输出到控制台  
log4j.appender.stdout=org.apache.log4j.ConsoleAppender  log4j.appender.stdout.Target=System.err  log4j.appender.stdout.layout=org.apache.log4j.SimpleLayout    
#logfile 输出到文件  
log4j.appender.logfile=org.apache.log4j.FileAppender  log4j.appender.logfile.File=d:/meturing.log  log4j.appender.logfile.layout=org.apache.log4j.PatternLayout  log4j.appender.logfile.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %l %F %p %m%n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Properties line-numbers-mode" data-ext="Properties"><pre class="language-Properties"><code>jdbc_driver=com.mysql.cj.jdbc.Driver  
jdbc_url=jdbc:mysql://192.168.1.188:3306/test?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=Asia/Shanghai  
jdbc_username=root  
jdbc_password=root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建实体类Emp.java</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Data  
@AllArgsConstructor  
@NoArgsConstructor  
public class Emp {  
    private Integer empno;  
    private String ename;  
    private String job;  
    private Integer mgr;  
    private Date hiredate;  
    private Double sal;  
    private Double comm;  
    private Integer deptno;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建EmpMapper接口</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/**  
 * @author meturing 
 * @description emp映射器  
 * @date 2023/04/13  
 */
 public interface EmpMapper {  

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建EmpMapper.xml文件</li></ul><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;  
&lt;!DOCTYPE mapper  
        PUBLIC &quot;-//mybatis.org//DTDMapper3.0//EN&quot;  
        &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;  
&lt;mapper namespace=&quot;com.meturing.mapper.EmpMapper&quot;&gt;  

&lt;/mapper&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意:此时的namespace中需要填写EmpMapper接口的全类路径</strong></p><ul><li>创建测试单元类Test1.java</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Test1 {  
    private static SqlSession sqlSession = null;  
    /**  
     * 初始化  
     *  Before注解会使方法在执行测试单元前执行  
     * @author sqTan  
     * @date 2023/04/09     
     * */    
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
    
    /**  
     * 释放  
     * After注解会使方法在执行测试单元后执行  
     * @author sqTan  
     * @date 2023/04/09     
     * */    
    @After  
    public void release(){  
        //关闭链接  
        sqlSession.close();  
    }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本结构见下图:</p><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h4>',29),o=a("p",null,"XML文件放到resources目录下,与接口的层级保持一致",-1),b=s(`<h3 id="简单的demo" tabindex="-1"><a class="header-anchor" href="#简单的demo" aria-hidden="true">#</a> 简单的Demo</h3><p>接下来我们创建一个查询所有数据的方法,此时还需要注意:<br><strong>接口中的抽象方法的名字需要与Mapper.xml中的id属性保持一致!!</strong></p><h4 id="创建接口中的抽象方法" tabindex="-1"><a class="header-anchor" href="#创建接口中的抽象方法" aria-hidden="true">#</a> 创建接口中的抽象方法</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/**  
 * 找到所有  
 *  
 * @return {@link List }&lt;{@link Emp }&gt;  
 * @author sqTan * @date 2023/04/13 
 * */
 List&lt;Emp&gt; findAll();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建mapper-xml中的查询语句" tabindex="-1"><a class="header-anchor" href="#创建mapper-xml中的查询语句" aria-hidden="true">#</a> 创建Mapper.xml中的查询语句</h4><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findAll&quot; resultType=&quot;emp&quot;&gt;  
    select * from emp
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用测试类测试" tabindex="-1"><a class="header-anchor" href="#使用测试类测试" aria-hidden="true">#</a> 使用测试类测试</h4><p>我们通过<code>sqlSession.getMapper(Class&lt;T&gt; var1)</code>方法获取接口的代理对象,然后直接执行代理对象的方法<br> 构建接口的实现类以及处理查询的操作全部交给Mybatis来处理</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void testFindAll() {  
	EmpMapper mapper = sqlSession.getMapper(EmpMapper.class);  
	List&lt;Emp&gt; empList = mapper.findAll();  
	empList.stream().forEach(System.out::println);  
}  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代理模式浅析" tabindex="-1"><a class="header-anchor" href="#代理模式浅析" aria-hidden="true">#</a> 代理模式浅析</h2><p>为什么我们通过接口,无需实现类就可以实现对数据库的操作?<br> 简单来讲,在我们使用<code>sqlSession.getMapper(Class&lt;T&gt; var1)</code>方法时,Maybatis底层为我们做了以下事情:</p><ol><li>通过该方法在映射器中找到这个接口的字节码文件</li><li>在底层动态为我们生成了这个接口的实现类(返回null/无任何意义)</li><li>对这个生成的实现类采用动态代理的形式,通过Mapper.xml中的<code>namespace</code>路径匹配,用方法名与标签中的<code>ID</code>配对生成增强的代理对象</li><li>将这个增强的类的对象返回给我们使用</li></ol><h2 id="代理模式基本开发" tabindex="-1"><a class="header-anchor" href="#代理模式基本开发" aria-hidden="true">#</a> 代理模式基本开发</h2><h3 id="参数传递问题" tabindex="-1"><a class="header-anchor" href="#参数传递问题" aria-hidden="true">#</a> 参数传递问题</h3><h4 id="单一参数" tabindex="-1"><a class="header-anchor" href="#单一参数" aria-hidden="true">#</a> 单一参数</h4><h5 id="empmapper接口" tabindex="-1"><a class="header-anchor" href="#empmapper接口" aria-hidden="true">#</a> EmpMapper接口</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Emp findByEmpno(int empno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="empmapper-xml" tabindex="-1"><a class="header-anchor" href="#empmapper-xml" aria-hidden="true">#</a> EmpMapper.xml</h5><p>#{}中可以随便写,遵循见名知意</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findByEmpno&quot; parameterType=&quot;int&quot; resultType=&quot;emp&quot;&gt;  
    select * from emp where empno=#{empno}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="测试类" tabindex="-1"><a class="header-anchor" href="#测试类" aria-hidden="true">#</a> 测试类</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void testFindByEmpno() {  
    EmpMapper mapper = sqlSession.getMapper(EmpMapper.class);  
    Emp byEmpno = mapper.findByEmpno(7499);  
    System.out.println(byEmpno);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多参数" tabindex="-1"><a class="header-anchor" href="#多参数" aria-hidden="true">#</a> 多参数</h4><h5 id="方式一-arg" tabindex="-1"><a class="header-anchor" href="#方式一-arg" aria-hidden="true">#</a> 方式一 : arg*</h5><p>arg相当于通过数组获取参数结果,所以下标从0开始</p><ul><li>EmpMapper接口</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findByDeptnoAndSal(int deptno,double sal);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>EmpMapper.xml</li></ul><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findByEmpno&quot; resultType=&quot;emp&quot;&gt;  
    select * from emp where deptno =#{arg0} and sal &amp;gt;= #{arg1}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="方式二-param" tabindex="-1"><a class="header-anchor" href="#方式二-param" aria-hidden="true">#</a> 方式二 : param*</h5><p>arg相当于通过参数位置获取参数结果,所以下标从1开始</p><ul><li>EmpMapper接口</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findByDeptnoAndSal(int deptno,double sal);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>EmpMapper.xml</li></ul><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findByEmpno&quot; resultType=&quot;emp&quot;&gt;  
    select * from emp where deptno =#{param1} and sal &amp;gt;= #{param2}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="方式三-param别名" tabindex="-1"><a class="header-anchor" href="#方式三-param别名" aria-hidden="true">#</a> 方式三 : @Param别名</h5><ul><li><p>通过@Param注解使用别名之后,就不能再使用arg* 但是可以继续使用param*</p></li><li><p>EmpMapper接口</p></li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findByDeptnoAndSal(@Param(&quot;deptno&quot;) int deptno, @Param(&quot;sal&quot;) double sal);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>EmpMapper.xml</li></ul><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findByEmpno&quot; resultType=&quot;emp&quot;&gt;  
    select * from emp where deptno =#{deptno} and sal &amp;gt;= #{sal}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="测试类-1" tabindex="-1"><a class="header-anchor" href="#测试类-1" aria-hidden="true">#</a> 测试类</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void testFindByDeptnoAndSal() {  
    EmpMapper mapper = sqlSession.getMapper(EmpMapper.class);  
    List&lt;Emp&gt; byDeptnoAndSal = mapper.findByDeptnoAndSal(20, 1500.0);  
    byDeptnoAndSal.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h4><p>参数是map,{}写键的名字</p><h5 id="empmapper接口-1" tabindex="-1"><a class="header-anchor" href="#empmapper接口-1" aria-hidden="true">#</a> EmpMapper接口</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findMapByDeptnoAndSal(Map&lt;String, Object&gt; map);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="empmapper-xml-1" tabindex="-1"><a class="header-anchor" href="#empmapper-xml-1" aria-hidden="true">#</a> EmpMapper.xml</h5><p>#{}中可以随便写,遵循见名知意</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findMapByDeptnoAndSal&quot; parameterType=&quot;map&quot; resultType=&quot;emp&quot;&gt;  
    select * from emp where deptno =#{deptno} and sal &amp;gt;= #{sal}  
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="测试类-2" tabindex="-1"><a class="header-anchor" href="#测试类-2" aria-hidden="true">#</a> 测试类</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void findMapByDeptnoAndSal() {  
    EmpMapper mapper = sqlSession.getMapper(EmpMapper.class);  
    HashMap&lt;String, Object&gt; map = new HashMap&lt;&gt;();  
    map.put(&quot;deptno&quot;,20);  
    map.put(&quot;sal&quot;,1500.0);  
    List&lt;Emp&gt; byDeptnoAndSal = mapper.findMapByDeptnoAndSal(map);  
    byDeptnoAndSal.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="单个引用对象" tabindex="-1"><a class="header-anchor" href="#单个引用对象" aria-hidden="true">#</a> 单个引用对象</h4><p>单个引用类型,{}中写的使用对象的属性名</p><h5 id="empmapper接口-2" tabindex="-1"><a class="header-anchor" href="#empmapper接口-2" aria-hidden="true">#</a> EmpMapper接口</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findObjectByDeptnoAndSal1 (Emp emp);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="empmapper-xml-2" tabindex="-1"><a class="header-anchor" href="#empmapper-xml-2" aria-hidden="true">#</a> EmpMapper.xml</h5><p>#{}中可以随便写,遵循见名知意</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findObjectByDeptnoAndSal1&quot; parameterType=&quot;emp&quot; resultType=&quot;emp&quot;&gt;  
    select * from emp where deptno =#{deptno} and sal &amp;gt;= #{sal}  
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="测试类-3" tabindex="-1"><a class="header-anchor" href="#测试类-3" aria-hidden="true">#</a> 测试类</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void findObjectByDeptnoAndSal1() {  
    EmpMapper mapper = sqlSession.getMapper(EmpMapper.class);  
    Emp emp = new Emp();  
    emp.setDeptno(20);  
    emp.setSal(1500.0);  
    List&lt;Emp&gt; byDeptnoAndSal = mapper.findObjectByDeptnoAndSal1(emp);  
    byDeptnoAndSal.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多个引用对象" tabindex="-1"><a class="header-anchor" href="#多个引用对象" aria-hidden="true">#</a> 多个引用对象</h4><h5 id="方式一-arg-1" tabindex="-1"><a class="header-anchor" href="#方式一-arg-1" aria-hidden="true">#</a> 方式一 : arg*</h5><p>arg相当于通过数组获取参数结果,所以下标从0开始</p><ul><li>EmpMapper接口</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findObjectByDeptnoAndSal2 (Emp emp1,Emp emp2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>EmpMapper.xml</li></ul><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findObjectByDeptnoAndSal2&quot;  resultType=&quot;emp&quot;&gt;  
    select * from emp where deptno =#{arg0.deptno} and sal &amp;gt;= #{arg1.sal}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="方式二-param-1" tabindex="-1"><a class="header-anchor" href="#方式二-param-1" aria-hidden="true">#</a> 方式二 : param*</h5><p>arg相当于通过参数位置获取参数结果,所以下标从1开始</p><ul><li>EmpMapper接口</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findObjectByDeptnoAndSal2 (Emp emp1,Emp emp2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>EmpMapper.xml</li></ul><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findObjectByDeptnoAndSal2&quot;  resultType=&quot;emp&quot;&gt;  
    select * from emp where deptno =#{param1.deptno} and sal &amp;gt;= #{param2.sal}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="方式三-param别名-1" tabindex="-1"><a class="header-anchor" href="#方式三-param别名-1" aria-hidden="true">#</a> 方式三 : @Param别名</h5><ul><li><p>通过@Param注解使用别名之后,就不能再使用arg* 但是可以继续使用param*</p></li><li><p>EmpMapper接口</p></li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findObjectByDeptnoAndSal2 (@Param(&quot;emp1&quot;) Emp emp1,@Param(&quot;emp2&quot;) Emp emp2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>EmpMapper.xml</li></ul><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findByEmpno&quot; resultType=&quot;emp&quot;&gt;  
    select * from emp where deptno =#{emp1.deptno} and sal &amp;gt;= #{emp2.sal}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="测试类-4" tabindex="-1"><a class="header-anchor" href="#测试类-4" aria-hidden="true">#</a> 测试类</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void findObjectByDeptnoAndSal2() {  
    EmpMapper mapper = sqlSession.getMapper(EmpMapper.class);  
    Emp emp1 = new Emp();  
    emp1.setDeptno(20);  
    Emp emp2 = new Emp();  
    emp2.setSal(1500.0);  
    List&lt;Emp&gt; byDeptnoAndSal = mapper.findObjectByDeptnoAndSal2(emp1,emp2);  
    byDeptnoAndSal.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模糊查询" tabindex="-1"><a class="header-anchor" href="#模糊查询" aria-hidden="true">#</a> 模糊查询</h3><h4 id="方式一-直接在参数中处理" tabindex="-1"><a class="header-anchor" href="#方式一-直接在参数中处理" aria-hidden="true">#</a> 方式一:直接在参数中处理</h4><p>EmpMapper.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findObjectByName(String ename);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>EmpMapper.xml</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findObjectByName&quot; parameterType=&quot;string&quot; resultType=&quot;emp&quot;&gt;  
    select * from emp where ename like #{ename}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试单元</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public void findObjectByName(){  
    EmpMapper mapper = sqlSession.getMapper(EmpMapper.class);  
    List&lt;Emp&gt; empList = mapper.findObjectByName(&quot;%a%&quot;);  
    empList.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方式二-使用concat-函数拼接-推荐" tabindex="-1"><a class="header-anchor" href="#方式二-使用concat-函数拼接-推荐" aria-hidden="true">#</a> 方式二: 使用concat()函数拼接 - 推荐</h4><p>在进行模糊查询时，在映射文件中可以使用<code>concat()函数</code>来连接参数和通配符。<br><strong>另外注意对于特殊字符，比如&lt;，不能直接书写，应该使用字符实体替换。</strong></p><p>EmpMapper.java 接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findObjectByName(String ename);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>EmpMapper.xml</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findObjectByName&quot; parameterType=&quot;string&quot; resultType=&quot;emp&quot;&gt;  
    select * from emp where ename like concat(&#39;%&#39;,#{ename},&#39;%&#39;)
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试单元</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void findObjectByName(){  
    EmpMapper mapper = sqlSession.getMapper(EmpMapper.class);  
    List&lt;Emp&gt; empList = mapper.findObjectByName(&quot;a&quot;);  
    empList.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自增主键回填" tabindex="-1"><a class="header-anchor" href="#自增主键回填" aria-hidden="true">#</a> 自增主键回填</h3><p>MySQL支持主键自增。有时候完成添加后需要立刻获取刚刚自增的主键，由下一个操作来使用。比如结算构造车后，主订单的主键确定后，需要作为后续订单明细项的外键存在。如何拿到主键呢，MyBatis提供了支持，可以非常简单的获取。</p><blockquote><p>在很多应用场景中需要新增数据后获取到新增数据的主键值，针对这样的需求一般由三种解决方式：</p><ol><li>主键自定义，用户通过UUID或时间戳等方式生成唯一主键，把这个值当做主键值。在分布式场景中应用较多</li><li>查询后通过select max(主键) from 表获取主键最大值。这种方式在多线程访问情况下可能出现问题</li><li>查询后通过select @@identity获取最新生成主键。要求这条SQL必须在insert操作之后，且数据库连接没有关闭</li></ol></blockquote><h4 id="方式一-usegeneratedkeys-推荐" tabindex="-1"><a class="header-anchor" href="#方式一-usegeneratedkeys-推荐" aria-hidden="true">#</a> 方式一 : useGeneratedKeys - 推荐</h4><p>DeptMapper.java接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>int insterDept(Dept dept);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>DeptMapper.xml<br>   - <code>useGeneratedKeys=&quot;true&quot; </code>返回数据库帮我们生成的主键_<br>   - <code>keyProperty=&quot;deptno&quot; </code>生成的主键值用我们dept对象那个属性存储_</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;insert id=&quot;insterDept&quot; parameterType=&quot;dept&quot; useGeneratedKeys=&quot;true&quot; keyProperty=&quot;deptno&quot;&gt;  
    INSERT INTO dept  VALUES(#{deptno},#{dname},#{loc})
&lt;/insert&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试单元</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void insterDept() {  
    DeptMapper deptMapper = sqlSession.getMapper(DeptMapper.class);  
    Dept dept = new Dept(null, &quot;Java&quot;, &quot;北京&quot;);  
    deptMapper.insterDept(dept);  
    System.out.println(dept);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们看到,当我们执行成功后,插入生成的主键将会重新回填到原有的对象中<br><img src="`+l+`" alt="" loading="lazy"></p><h4 id="方式二-selectkey标签" tabindex="-1"><a class="header-anchor" href="#方式二-selectkey标签" aria-hidden="true">#</a> 方式二 : selectKey标签</h4><p>参数详解<br> order：取值AFTER|BEFORE，表示在新增之后|之前执行<code>&lt;selectKey&gt;</code>中的SQL命令<br> keyProperty：执行select @@identity后结果填充到哪个属性中</p><p>DeptMapper.java接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>int insterDept(Dept dept);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>DeptMapper.xml<br> 使用<code>selectKey</code>标签检索,<code>order=&quot;AFTER&quot;</code>表示插入之后,<code>keyProperty=&quot;deptno&quot;</code>设置主键字段, <code>resultType=&quot;int&quot;</code>表示主键类型, <code>select  @@identity</code> 得到上一次插入记录时自动产生的ID</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;insert id=&quot;insterDept2&quot; parameterType=&quot;dept&quot;&gt;  
    &lt;selectKey order=&quot;AFTER&quot; keyProperty=&quot;deptno&quot;  resultType=&quot;int&quot;&gt;  
        select @@identity    
	&lt;/selectKey&gt;  
    insert into dept values(null,#{dname},#{loc})
&lt;/insert&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试单元</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void insterDept() {  
    DeptMapper deptMapper = sqlSession.getMapper(DeptMapper.class);  
    Dept dept = new Dept(null, &quot;Java&quot;, &quot;北京&quot;);  
    deptMapper.insterDept(dept);  
    System.out.println(dept);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们看到,当我们执行成功后,插入生成的主键将会重新回填到原有的对象中<br><img src="`+l+`" alt="" loading="lazy"></p><h3 id="实现dml操作" tabindex="-1"><a class="header-anchor" href="#实现dml操作" aria-hidden="true">#</a> 实现DML操作</h3><h4 id="新增" tabindex="-1"><a class="header-anchor" href="#新增" aria-hidden="true">#</a> 新增</h4><p>见 [[Mybatis代理模式的开发#自增主键回填]]]</p><h4 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h4><p>DeptMapper.java接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Dept findDeptById(int deptId);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>DeptMapper.xml</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findDeptById&quot; parameterType=&quot;int&quot; resultType=&quot;dept&quot;&gt;  
    select * from dept where deptno =#{deptno}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试单元</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void updateDept(){  
    DeptMapper deptMapper = sqlSession.getMapper(DeptMapper.class);  
    Dept deptById = deptMapper.findDeptById(43);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h4><p>DeptMapper.java接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>int updateDept(Dept dept);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>DeptMapper.xml</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;update id=&quot;updateDept&quot; parameterType=&quot;dept&quot;&gt;  
    UPDATE dept SET DNAME=#{dname}, LOC=#{loc} WHERE DEPTNO=#{deptno}
&lt;/update&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试单元</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void updateDept(){  
    DeptMapper deptMapper = sqlSession.getMapper(DeptMapper.class);  
    Dept deptById = deptMapper.findDeptById(43);  
    deptById.setLoc(&quot;上海&quot;);  
    deptMapper.updateDept(deptById);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h4><p>DeptMapper.java接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>int deleteDept(int deptNo);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>DeptMapper.xml</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;delete id=&quot;deleteDept&quot; parameterType=&quot;int&quot;&gt;  
    DELETE FROM dept WHERE DEPTNO=#{deptno}
&lt;/delete&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试单元</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void deleteDept(){  
    DeptMapper deptMapper = sqlSession.getMapper(DeptMapper.class);  
    deptMapper.deleteDept(43);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,140);function g(h,q){const i=r("font");return p(),u("div",null,[m,a("p",null,[e("特别注意: 在代理模式开发下,"),n(i,{color:"#ff0000"},{default:d(()=>[e("我们必需要保证以下几点要素")]),_:1}),e(":")]),a("ol",null,[a("li",null,[n(i,{color:"#ffc000"},{default:d(()=>[e("接口的名字和Mapper映射为文件名字必须保持一致(不包含拓展名)")]),_:1})]),a("li",null,[n(i,{color:"#ffc000"},{default:d(()=>[e("Mapper映射文件的namespace必须是接口的全路径名")]),_:1})]),a("li",null,[n(i,{color:"#ffc000"},{default:d(()=>[e("DeptMapper映射文件应该和接口编译之后放在同一个目录下")]),_:1}),o])]),b])}const f=t(c,[["render",g],["__file","Mybatis代理模式的开发.html.vue"]]);export{f as default};
