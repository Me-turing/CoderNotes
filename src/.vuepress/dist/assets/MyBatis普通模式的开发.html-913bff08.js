import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as u,d as a,b as n,w as d,e,f as s}from"./app-a48529f7.js";const v="/CoderNotes/assets/Pasted_image_20230412104903-c1ee527f.png",o="/CoderNotes/assets/Pasted_image_20230412104915-d0fa74e6.png",p="/CoderNotes/assets/Pasted_image_20230412104926-ef2ec7cf.png",m="/CoderNotes/assets/Pasted_image_20230412105124-aa0ff3d3.png",b={},h=a("p",null,"在前面的学习中,我们简单搭建了一个Mybatis的项目环境",-1),g=s('<p>基于普通模式的开发,也成为传统DAO模式. 简单来讲就是创建对应的接口,然后在接口的实现类中使用SQLSession对象调用select insert delete update 等方法实现. 目前我们能开发中不再使用这种方式,但是我们仍需要了解SQLSession的基本API实现CRUD的功能以及参数的传递</p><h2 id="构建环境" tabindex="-1"><a class="header-anchor" href="#构建环境" aria-hidden="true">#</a> 构建环境</h2><p>本次我们尝试对Emp表进行操作,所以需要执行以下操作:</p><h4 id="新增emp实体类" tabindex="-1"><a class="header-anchor" href="#新增emp实体类" aria-hidden="true">#</a> 新增Emp实体类</h4><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="新增empmapper-xml" tabindex="-1"><a class="header-anchor" href="#新增empmapper-xml" aria-hidden="true">#</a> 新增EmpMapper.xml</h4><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="新增xml文件映射" tabindex="-1"><a class="header-anchor" href="#新增xml文件映射" aria-hidden="true">#</a> 新增XML文件映射</h4><p>由于当前使用的是非接口式开发,所以Mappers标签中不可以使用Package标签进行扫描,只能一个一个mapper标签的对XML进行注册</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="新增测试类" tabindex="-1"><a class="header-anchor" href="#新增测试类" aria-hidden="true">#</a> 新增测试类</h4><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="sqlsession-查询的三种方式" tabindex="-1"><a class="header-anchor" href="#sqlsession-查询的三种方式" aria-hidden="true">#</a> SQLSession 查询的三种方式</h2><p>SQLSession对象本身的API中存在三个查询方法,能够实现如下查询方式:</p><ol><li>返回单个对象 : <code>selectOne</code></li><li>返回对象的List集合 : <code>selectList</code></li><li>返回对象的Map集合 : <code>selectMap</code></li></ol><h3 id="返回单个对象" tabindex="-1"><a class="header-anchor" href="#返回单个对象" aria-hidden="true">#</a> 返回单个对象</h3><h4 id="mapper层" tabindex="-1"><a class="header-anchor" href="#mapper层" aria-hidden="true">#</a> Mapper层</h4><p>正常情况下我们查询单个对象的Java代码如下</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public emp findOne(){
   ......
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以EmpMapper.xml</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findOne&quot; resultType=&quot;emp&quot; &gt;  
    select * from emp where EMPNO = &#39;7499&#39;
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h4><p>Test2.Java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void test2(){  
    //执行查询方法  
    Emp emp = sqlSession.selectOne(&quot;findOne&quot;);  
    System.out.println(emp);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果多个Mapper.xml中出现相同的ID,则Mybatis会出现错误提示,找不到具体方法.<br> 所以我们可以使用<code>Mapper名字.id名字</code></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void test2(){  
    //执行查询方法  
    Emp emp = sqlSession.selectOne(&quot;empMapper.findOne&quot;);  
    System.out.println(emp);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回对象的list集合" tabindex="-1"><a class="header-anchor" href="#返回对象的list集合" aria-hidden="true">#</a> 返回对象的List集合</h3><h4 id="mapper层-1" tabindex="-1"><a class="header-anchor" href="#mapper层-1" aria-hidden="true">#</a> Mapper层</h4><p>正常情况下我们查询多个对象集合的Java代码如下</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public List&lt;emp&gt; findAll(){
   ......
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以EmpMapper.xml</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findAll&quot; resultType=&quot;emp&quot; &gt;  
    select * from emp
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试代码-1" tabindex="-1"><a class="header-anchor" href="#测试代码-1" aria-hidden="true">#</a> 测试代码</h4><p>Test2.Java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void test2(){  
   //执行查询方法  
   List&lt;Emp&gt; deptList = sqlSession.selectList(&quot;empMapper.findAll&quot;);  
   deptList.stream().forEach(System.out::println);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回对象的map集合" tabindex="-1"><a class="header-anchor" href="#返回对象的map集合" aria-hidden="true">#</a> 返回对象的Map集合</h3><h4 id="mapper层-2" tabindex="-1"><a class="header-anchor" href="#mapper层-2" aria-hidden="true">#</a> Mapper层</h4><p>正常情况下我们查询多个对象Map集合的Java代码如下</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public Map&lt;emp&gt; findAll(){
   ......
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以EmpMapper.xml</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findMap&quot; resultType=&quot;map&quot; &gt;  
    select * from emp
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试代码-2" tabindex="-1"><a class="header-anchor" href="#测试代码-2" aria-hidden="true">#</a> 测试代码</h4><p>Test2.Java</p><p><code>selectMap(&quot;Id名字&quot;,&quot;作为Key的字段&quot;)</code> 注意:作为Key的字段大小写需要完全和DB中保持一致</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void test3(){  
    //执行查询方法  
    Map&lt;Object, Object&gt; objectObjectMap = sqlSession.selectMap(&quot;findMap&quot;, &quot;EMPNO&quot;);  
    for (Map.Entry&lt;Object, Object&gt; objectObjectEntry : objectObjectMap.entrySet()) {  
        System.out.println(objectObjectEntry.getKey()+&quot;:&quot;+objectObjectEntry.getValue());  
    }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sqlsession的参数传递" tabindex="-1"><a class="header-anchor" href="#sqlsession的参数传递" aria-hidden="true">#</a> SQLSession的参数传递</h2><p>Mapper中通过<code>parameterType</code>属性来控制参数的类型及数量<br> 通常情况下<code>parameterType</code>属性可以不写,Mybatis可以根据自己的情况进行判断,但是<strong>如果写就要写对</strong></p>`,47),E=a("code",null,"${}",-1),f=a("code",null,"#{}",-1),q=a("br",null,null,-1),M=a("code",null,"${}",-1),x=a("code",null,"Statment",-1),J=a("br",null,null,-1),_=a("code",null,"#{}",-1),S=a("code",null,"preparedStatment",-1),y=s(`<h3 id="单一参数传递" tabindex="-1"><a class="header-anchor" href="#单一参数传递" aria-hidden="true">#</a> 单一参数传递</h3><h4 id="mapper层-3" tabindex="-1"><a class="header-anchor" href="#mapper层-3" aria-hidden="true">#</a> Mapper层</h4><p>Java伪代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public emp findByEmpno(int empno){
   ......
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以EmpMapper.xml</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findByEmpno&quot; resultType=&quot;emp&quot; parameterType=&quot;int&quot;&gt;  
    select  * from emp where empno = #{empno}  
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试代码-3" tabindex="-1"><a class="header-anchor" href="#测试代码-3" aria-hidden="true">#</a> 测试代码</h4><p>Test2.Java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void test1(){  
    //执行查询方法  
    Emp emp = sqlSession.selectOne(&quot;findByEmpno&quot;, 7499);  
    System.out.println(emp);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多参数map传递" tabindex="-1"><a class="header-anchor" href="#多参数map传递" aria-hidden="true">#</a> 多参数Map传递</h3><p>Java伪代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public List&lt;Emp&gt; findByEmpno(Map&lt;String,String&gt; empMap){
   ......
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以EmpMapper.xml</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findEmpByDeptnoAndSal&quot; resultType=&quot;emp&quot; parameterType=&quot;map&quot;&gt;  
    select * from emp where deptno = #{deptno} and sal &amp;gt;= #{sal}  
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意:对于SQL中的敏感符号,如<code>&lt;</code> <code>&gt; </code>通常参考HTML转义,w3school在线文档中有转译符号对应规则</p><h4 id="测试代码-4" tabindex="-1"><a class="header-anchor" href="#测试代码-4" aria-hidden="true">#</a> 测试代码</h4><p>Test2.Java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void test2(){  
    //执行查询方法  
    HashMap&lt;String, Object&gt; parameterMap = new HashMap&lt;&gt;();  
    parameterMap.put(&quot;deptno&quot;,&quot;30&quot;);  
    parameterMap.put(&quot;sal&quot;,1500.0);  
    List&lt;Object&gt; findEmp = sqlSession.selectList(&quot;findEmpByDeptnoAndSal&quot;, parameterMap);  
    findEmp.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多参数实体类对象传递" tabindex="-1"><a class="header-anchor" href="#多参数实体类对象传递" aria-hidden="true">#</a> 多参数实体类对象传递</h3><p>Java伪代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public List&lt;Emp&gt; findByEmpno(emp){
   ......
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以EmpMapper.xml</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;select id=&quot;findEmpByDeptnoAndSal2&quot; resultType=&quot;emp&quot; parameterType=&quot;emp&quot;&gt;  
    select * from emp where deptno = #{deptno} and sal &amp;gt;= #{sal}  
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意:对于SQL中的敏感符号,如<code>&lt;</code> <code>&gt; </code>通常参考HTML转义,w3school在线文档中有转译符号对应规则</p><h4 id="测试代码-5" tabindex="-1"><a class="header-anchor" href="#测试代码-5" aria-hidden="true">#</a> 测试代码</h4><p>Test2.Java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void test3(){  
    //执行查询方法  
    Emp emp = new Emp();  
    emp.setDeptno(30);  
    emp.setSal(1500.0);  
    List&lt;Object&gt; findEmp = sqlSession.selectList(&quot;findEmpByDeptnoAndSal2&quot;, emp);  
    findEmp.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sqlsession实现dml全部操作" tabindex="-1"><a class="header-anchor" href="#sqlsession实现dml全部操作" aria-hidden="true">#</a> SQLSession实现DML全部操作</h2><p>在上面的案例中,我们实现了对数据查询的简场景和复杂场景,接下来我们继续学习对数据的<code>增</code> <code>删</code> <code>改</code>功能</p><p>由于<code>增</code> <code>删 </code> <code>改</code> 方法都会返回受影响的行数,所以<strong>标签中没有resultType</strong>,默认会返回int类型数据</p><p>需要注意的是,由于对数据实行DML数据会涉及到数据的事务问题.<br> 默认情况下<code>sqlSession = build.openSession();</code>是开启的手动提交,我们需要在执行操作后再次执行<code>sqlSession.commit();</code> 提交 或者 <code>sqlSession.rollback();</code> 回滚数据. 当然我们可以<code>sqlSession = build.openSession(true);</code> <strong>设置事务的自动提交</strong></p><h3 id="增加" tabindex="-1"><a class="header-anchor" href="#增加" aria-hidden="true">#</a> 增加</h3><p>Java伪代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>pubilc int addEmp(Emp emp){
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mapper层-4" tabindex="-1"><a class="header-anchor" href="#mapper层-4" aria-hidden="true">#</a> Mapper层</h4><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;insert id=&quot;insertEmp&quot; parameterType=&quot;emp&quot;&gt;  
    INSERT INTO emp VALUES(#{empno},#{ename},#{job},#{mgr},#{hiredate},#{sal},#{comm},#{deptno});
&lt;/insert&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试代码-6" tabindex="-1"><a class="header-anchor" href="#测试代码-6" aria-hidden="true">#</a> 测试代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void testInsert(){  
    Emp emp = new Emp(8899,&quot;张三&quot;,&quot;SALESMAN&quot;,7839,new Date(),3100.0, 200.0,10 );  
    sqlSession.insert(&quot;insertEmp&quot;, emp);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h3><p>Java伪代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>pubilc int updateEmp(Emp emp){
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mapper层-5" tabindex="-1"><a class="header-anchor" href="#mapper层-5" aria-hidden="true">#</a> Mapper层</h4><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;update id=&quot;updateEmp&quot; parameterType=&quot;emp&quot;&gt;  
    UPDATE emp SET ENAME=#{ename} WHERE EMPNO=#{empno}&lt;/update&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试代码-7" tabindex="-1"><a class="header-anchor" href="#测试代码-7" aria-hidden="true">#</a> 测试代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void testUpdate(){  
    Emp emp = new Emp();  
    emp.setEmpno(8899);  
    emp.setEname(&quot;李四&quot;);  
    sqlSession.insert(&quot;updateEmp&quot;, emp);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3><p>Java伪代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>pubilc int deleteEmp(Emp emp){
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mapper层-6" tabindex="-1"><a class="header-anchor" href="#mapper层-6" aria-hidden="true">#</a> Mapper层</h4><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;delete id=&quot;deleteEmp&quot; parameterType=&quot;int&quot;&gt;  
    DELETE FROM emp WHERE EMPNO=#{empno}
&lt;/delete&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试代码-8" tabindex="-1"><a class="header-anchor" href="#测试代码-8" aria-hidden="true">#</a> 测试代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void testDelete(){  
    sqlSession.delete(&quot;deleteEmp&quot;, 8899);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52);function A(B,T){const l=i("RouterLink"),t=i("font");return c(),u("div",null,[h,a("p",null,[n(l,{to:"/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/01_Mybatis%E5%9F%BA%E7%A1%80/02_%E6%90%AD%E5%BB%BAMybatis%E9%A1%B9%E7%9B%AE%E7%8E%AF%E5%A2%83/%E6%90%AD%E5%BB%BAMybatis%E9%A1%B9%E7%9B%AE%E7%8E%AF%E5%A2%83.html#%E5%9F%BA%E7%A1%80%E5%86%99%E6%B3%95%E6%80%9D%E8%B7%AF"},{default:d(()=>[e("基础写法思路")]),_:1})]),g,a("p",null,[e("使用"),E,e(" 或 "),f,e(" 来进行参数的占位,两者区别如下:"),q,e("  - "),M,e(" 代表mybatis底层使用"),x,e("语句对象,参数是以字符串拼接的形式设置"),J,e("  - "),_,e(" 代表mybatis底层使用的"),S,e("语句对象,参数使用?作为占位符处理"),n(t,{color:"#ff0000"},{default:d(()=>[e("[常用]")]),_:1})]),y])}const O=r(b,[["render",A],["__file","MyBatis普通模式的开发.html.vue"]]);export{O as default};
