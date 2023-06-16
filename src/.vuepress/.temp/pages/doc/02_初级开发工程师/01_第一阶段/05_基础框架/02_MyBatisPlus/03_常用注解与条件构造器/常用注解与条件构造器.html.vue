<template><div><h2 id="常用注解" tabindex="-1"><a class="header-anchor" href="#常用注解" aria-hidden="true">#</a> 常用注解</h2>
<h3 id="指定表名-tablename" tabindex="-1"><a class="header-anchor" href="#指定表名-tablename" aria-hidden="true">#</a> 指定表名 : @TableName</h3>
<p>经过以上的测试，在使用MyBatis-Plus实现基本的CRUD时，我们并没有指定要操作的表，只是在 Mapper接口继承BaseMapper时，设置了泛型User，而操作的表为user表 由此得出结论，MyBatis-Plus在确定操作的表时，由BaseMapper的泛型决定，即实体类型决 定，且默认操作的表名和实体类型的类名一致</p>
<p>如果表名和我们的实体类的名称不一致的话，在执行相关操作的时候会抛出对应的异常，比如数据库的表我们该为T_USER,然后执行查询操作。</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/03_常用注解与条件构造器/assets/image-20230418170219390.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="直接配置" tabindex="-1"><a class="header-anchor" href="#直接配置" aria-hidden="true">#</a> 直接配置</h4>
<p>这时我们就可以通过<code v-pre>@TableName</code>来解决这个问题。</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@ToString  
@Data  
@AllArgsConstructor  
@NoArgsConstructor  
@TableName(&quot;t_user&quot;)  
public class User {  
    private Long uid;  
    private String uname;  
    private Integer age;  
    private String email;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h4>
<div class="language-Properties line-numbers-mode" data-ext="Properties"><pre v-pre class="language-Properties"><code># 配置MyBatis-Plus操作表的默认前缀
mybatis-plus.global-config.db-config.table-prefix=t_
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定主键-tableid" tabindex="-1"><a class="header-anchor" href="#指定主键-tableid" aria-hidden="true">#</a> 指定主键 : @TableId</h3>
<p>我们可以通过@TableId注解来显示的指定哪个属性为主键对应的属性，在前面的例子中默认id就是，如果我们的主键字段不是id，比如uid的话，把实体user中的id改为uid，同时表结构中的id字段也修改为uid字段。我们来看看效果。执行插入操作。</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/03_常用注解与条件构造器/assets/image-20230418170442279.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到抛出了一个 <code v-pre>Field 'uid' doesn't</code> 的异常，这时我们可以在User实体的uid属性上添加<code v-pre>@TableId</code>即可。</p>
<p>@TableId中的<code v-pre>value</code>值在实体类中的字段和表结构的字段一致的情况下我们不用添加，但如果不一致，@TableId中的value我们需要设置表结构中的主键字段。<br>
@TableId中还有一个比较重要的属性是<code v-pre>Type</code>。Type是用来定义主键的生成策略的。</p>
<h4 id="主键策略" tabindex="-1"><a class="header-anchor" href="#主键策略" aria-hidden="true">#</a> 主键策略</h4>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/03_常用注解与条件构造器/assets/image-20230418170900225.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>配置主键自增得在表结构中的字段要设置自动增长才行</strong></p>
<h4 id="直接配置-1" tabindex="-1"><a class="header-anchor" href="#直接配置-1" aria-hidden="true">#</a> 直接配置</h4>
<ol>
<li>如果实体类中的字段与数据库<strong>一致</strong></li>
</ol>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@ToString  
@Data  
@AllArgsConstructor  
@NoArgsConstructor  
@TableName(&quot;t_user&quot;)  
public class User {  
    @TableId(type = IdType.AUTO)//表示主键 分配主键自增  
    private Long uid;  
    private String uname;  
    private Integer age;  
    private String email;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>如果实体类中的字段与数据库<strong>不一致</strong></li>
</ol>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@ToString  
@Data  
@AllArgsConstructor  
@NoArgsConstructor  
@TableName(&quot;t_user&quot;)  
public class User {  
    @TableId(value = &quot;id&quot;,type = IdType.AUTO)//表示主键 并重新映射到Id字段,分配主键自增  
    private Long uid;  
    private String uname;  
    private Integer age;  
    private String email;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全局配置-1" tabindex="-1"><a class="header-anchor" href="#全局配置-1" aria-hidden="true">#</a> 全局配置</h4>
<div class="language-Properties line-numbers-mode" data-ext="Properties"><pre v-pre class="language-Properties"><code># 主键生成策略  
mybatis-plus.global-config.db-config.id-type=auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定字段-tablefield" tabindex="-1"><a class="header-anchor" href="#指定字段-tablefield" aria-hidden="true">#</a> 指定字段 : @TableField</h3>
<p>@TableField注解的作用是当实体类中的属性和表结构中的字段名称不一致的情况下来设置对应关系的，<br>
当然，在MyBatis-Plus中针对实体中是<strong>userName而表结构中是user_name这种情况会自动帮助我们完成驼峰命名法的转换</strong>。</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@ToString  
@Data  
@AllArgsConstructor  
@NoArgsConstructor  
@TableName(&quot;t_user&quot;)  
public class User {  
    @TableId(value = &quot;id&quot;,type = IdType.AUTO)//表示主键 并重新映射到Id字段,分配主键自增  
    private Long uid;  
    @TableField(value = &quot;name&quot;)// 表结构中的name属性和name属性对应  
    private String uname;  
    private Integer age;  
    private String email;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑删除-tablelogic" tabindex="-1"><a class="header-anchor" href="#逻辑删除-tablelogic" aria-hidden="true">#</a> 逻辑删除 : @TableLogic</h3>
<p>@TableLogic是用来完成 <code v-pre>逻辑删除</code>操作的</p>
<table>
<thead>
<tr>
<th>删除类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>逻辑删除</td>
<td>假删除，将对应数据中代表是否被删除字段的状态修改为“被删除状态”，&lt;br /&gt;之后在数据库中仍旧能看到此条数据记录</td>
</tr>
<tr>
<td>物理删除</td>
<td>真实删除，将对应数据从数据库中删除，之后查询不到此条被删除的数据</td>
</tr>
</tbody>
</table>
<h4 id="直接配置-2" tabindex="-1"><a class="header-anchor" href="#直接配置-2" aria-hidden="true">#</a> 直接配置</h4>
<h5 id="创建逻辑删除字段" tabindex="-1"><a class="header-anchor" href="#创建逻辑删除字段" aria-hidden="true">#</a> 创建逻辑删除字段</h5>
<p>先在表中创建一个isDel字段<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/03_常用注解与条件构造器/assets/image-20230418171406738.png" alt="" loading="lazy"></p>
<h5 id="修改实体类" tabindex="-1"><a class="header-anchor" href="#修改实体类" aria-hidden="true">#</a> 修改实体类</h5>
<p>对应的在实体类中添加一个isdel属性</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@ToString  
@Data  
@AllArgsConstructor  
@NoArgsConstructor  
@TableName(&quot;t_user&quot;)  
public class User {  
    @TableId(value = &quot;id&quot;,type = IdType.AUTO)//表示主键 并重新映射到Id字段,分配主键自增  
    private Long uid;  
    @TableField(value = &quot;name&quot;)// 表结构中的name属性和name属性对应  
    private String uname;  
    private Integer age;  
    private String email;  
    @TableLogic(value = &quot;0&quot;,delval = &quot;1&quot;)//逻辑删除,默认为0 删除后为1  
    private Integer isdel;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时我们发现,Mybatis对于所有的查询都会再条件中拼接: <code v-pre>Where isdel = 0</code></p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/03_常用注解与条件构造器/assets/image-20230418171737893.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>所有的删除都变成了Update语言:</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/03_常用注解与条件构造器/assets/image-20230418173309628.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="全局配置-2" tabindex="-1"><a class="header-anchor" href="#全局配置-2" aria-hidden="true">#</a> 全局配置</h4>
<div class="language-Properties line-numbers-mode" data-ext="Properties"><pre v-pre class="language-Properties"><code># 配置逻辑删除  
mybatis-plus.global-config.db-config.logic-delete-field=isdel
mybatis-plus.global-config.db-config.logic-delete-value=1  
mybatis-plus.global-config.db-config.logic-not-delete-value=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件构造器" tabindex="-1"><a class="header-anchor" href="#条件构造器" aria-hidden="true">#</a> 条件构造器</h2>
<p>当我们需要对单表的CURD做复杂条件处理的时候我们就需要借助Wrapper接口来处理，也就是通过条件构造器来处理。</p>
<h3 id="wrapper接口" tabindex="-1"><a class="header-anchor" href="#wrapper接口" aria-hidden="true">#</a> Wrapper接口</h3>
<p>Wrapper接口是条件构造的抽象类，是最顶级的类</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/03_常用注解与条件构造器/assets/image-20230418214305118.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>对应动作</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/03_常用注解与条件构造器/assets/image-20230418214315936.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="wrapper的常用api" tabindex="-1"><a class="header-anchor" href="#wrapper的常用api" aria-hidden="true">#</a> Wrapper的常用API</h3>
<h4 id="ge、gt、le、lt、isnull、isnotnull" tabindex="-1"><a class="header-anchor" href="#ge、gt、le、lt、isnull、isnotnull" aria-hidden="true">#</a> ge、gt、le、lt、isNull、isNotNull</h4>
<p><code v-pre>UPDATE user SET deleted=1 WHERE deleted=0 AND name IS NULL AND age &gt;= ? AND email IS NOT NULL</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void testDelete() {
    QueryWrapper&lt;User&gt; queryWrapper = new QueryWrapper&lt;&gt;();
    queryWrapper
        .isNull(&quot;name&quot;)
        .ge(&quot;age&quot;, 12)
        .isNotNull(&quot;email&quot;);
    int result = userMapper.delete(queryWrapper);
    System.out.println(&quot;delete return count = &quot; + result);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="eq、ne" tabindex="-1"><a class="header-anchor" href="#eq、ne" aria-hidden="true">#</a> eq、ne</h4>
<p>注意：seletOne返回的是一条实体记录，当出现多条时会报错</p>
<p><code v-pre>SELECT id,name,age,email,create_time,update_time,deleted,version FROM user WHERE deleted=0 AND name = ?</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void testSelectOne() {
    QueryWrapper&lt;User&gt; queryWrapper = new QueryWrapper&lt;&gt;();
    queryWrapper.eq(&quot;name&quot;, &quot;Tom&quot;);
    User user = userMapper.selectOne(queryWrapper);
    System.out.println(user);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="between、notbetween" tabindex="-1"><a class="header-anchor" href="#between、notbetween" aria-hidden="true">#</a> between、notBetween</h4>
<p>包含大小边界</p>
<p><code v-pre>SELECT COUNT(1) FROM user WHERE deleted=0 AND age BETWEEN ? AND ?</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void testSelectCount() {
    QueryWrapper&lt;User&gt; queryWrapper = new QueryWrapper&lt;&gt;();
    queryWrapper.between(&quot;age&quot;, 20, 30);
    Integer count = userMapper.selectCount(queryWrapper);
    System.out.println(count);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="alleq" tabindex="-1"><a class="header-anchor" href="#alleq" aria-hidden="true">#</a> allEq</h4>
<p>包含大小边界</p>
<p><code v-pre>SELECT id,name,age,email,create_time,update_time,deleted,version FROM user WHERE deleted=0 AND name = ? AND id = ? AND age = ?</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void testSelectList() {
    QueryWrapper&lt;User&gt; queryWrapper = new QueryWrapper&lt;&gt;();
    Map&lt;String, Object&gt; map = new HashMap&lt;&gt;();
    map.put(&quot;id&quot;, 2);
    map.put(&quot;name&quot;, &quot;Jack&quot;);
    map.put(&quot;age&quot;, 20);
    queryWrapper.allEq(map);
    List&lt;User&gt; users = userMapper.selectList(queryWrapper);
    users.forEach(System.out::println);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="like、notlike、likeleft、likeright" tabindex="-1"><a class="header-anchor" href="#like、notlike、likeleft、likeright" aria-hidden="true">#</a> like、notLike、likeLeft、likeRight</h4>
<p>包含大小边界</p>
<p><code v-pre>SELECT id,name,age,email,create_time,update_time,deleted,version FROM user WHERE deleted=0 AND name NOT LIKE ? AND email LIKE ?</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void testSelectMaps() {
    QueryWrapper&lt;User&gt; queryWrapper = new QueryWrapper&lt;&gt;();
    queryWrapper
        .notLike(&quot;name&quot;, &quot;e&quot;)
        .likeRight(&quot;email&quot;, &quot;t&quot;);
    List&lt;Map&lt;String, Object&gt;&gt; maps = userMapper.selectMaps(queryWrapper);//返回值是Map列表
    maps.forEach(System.out::println);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="in、notin、insql、notinsql、exists、notexists" tabindex="-1"><a class="header-anchor" href="#in、notin、insql、notinsql、exists、notexists" aria-hidden="true">#</a> in、notIn、inSql、notinSql、exists、notExists</h4>
<p>in、notIn：</p>
<ul>
<li><code v-pre>notIn(&quot;age&quot;,{1,2,3})</code>---&gt;<code v-pre>age not in (1,2,3)</code></li>
<li><code v-pre>notIn(&quot;age&quot;, 1, 2, 3)</code>---&gt;<code v-pre>age not in (1,2,3)</code></li>
</ul>
<p>inSql、notinSql：可以实现子查询</p>
<ul>
<li>例: <code v-pre>inSql(&quot;age&quot;, &quot;1,2,3,4,5,6&quot;)</code>---&gt;<code v-pre>age in (1,2,3,4,5,6)</code></li>
<li>例: <code v-pre>inSql(&quot;id&quot;, &quot;select id from table where id &lt; 3&quot;)</code>---&gt;<code v-pre>id in (select id from table where id &lt; 3)</code></li>
</ul>
<p><code v-pre>SELECT id,name,age,email,create_time,update_time,deleted,version FROM user WHERE deleted=0 AND id IN (select id from user where id &lt; 3)</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void testSelectObjs() {
    QueryWrapper&lt;User&gt; queryWrapper = new QueryWrapper&lt;&gt;();
    //queryWrapper.in(&quot;id&quot;, 1, 2, 3);
    queryWrapper.inSql(&quot;id&quot;, &quot;select id from user where id &lt; 3&quot;);
    List&lt;Object&gt; objects = userMapper.selectObjs(queryWrapper);//返回值是Object列表
    objects.forEach(System.out::println);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="or、and" tabindex="-1"><a class="header-anchor" href="#or、and" aria-hidden="true">#</a> or、and</h4>
<p>不调用or则默认为使用 and 连</p>
<p><code v-pre>UPDATE user SET name=?, age=?, update_time=? WHERE deleted=0 AND name LIKE ? OR age BETWEEN ? AND ?</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void testUpdate1() {
    //修改值
    User user = new User();
    user.setAge(99);
    user.setName(&quot;Andy&quot;);
    //修改条件
    UpdateWrapper&lt;User&gt; userUpdateWrapper = new UpdateWrapper&lt;&gt;();
    userUpdateWrapper
        .like(&quot;name&quot;, &quot;h&quot;)
        .or()
        .between(&quot;age&quot;, 20, 30);
    int result = userMapper.update(user, userUpdateWrapper);
    System.out.println(result);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="嵌套or、嵌套and" tabindex="-1"><a class="header-anchor" href="#嵌套or、嵌套and" aria-hidden="true">#</a> 嵌套or、嵌套and</h4>
<p>这里使用了lambda表达式，or中的表达式最后翻译成sql时会被加上圆括号</p>
<p><code v-pre>UPDATE user SET name=?, age=?, update_time=? WHERE deleted=0 AND name LIKE ? OR ( name = ? AND age &lt;&gt; ? )</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void testUpdate2() {
    //修改值
    User user = new User();
    user.setAge(99);
    user.setName(&quot;Andy&quot;);
    //修改条件
    UpdateWrapper&lt;User&gt; userUpdateWrapper = new UpdateWrapper&lt;&gt;();
    userUpdateWrapper
        .like(&quot;name&quot;, &quot;h&quot;)
        .or(i -&gt; i.eq(&quot;name&quot;, &quot;李白&quot;).ne(&quot;age&quot;, 20));
    int result = userMapper.update(user, userUpdateWrapper);
    System.out.println(result);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="orderby、orderbydesc、orderbyasc" tabindex="-1"><a class="header-anchor" href="#orderby、orderbydesc、orderbyasc" aria-hidden="true">#</a> orderBy、orderByDesc、orderByAsc</h4>
<p>这里使用了lambda表达式，or中的表达式最后翻译成sql时会被加上圆括号</p>
<p><code v-pre>SELECT id,name,age,email,create_time,update_time,deleted,version FROM user WHERE deleted=0 ORDER BY id DESC</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void testSelectListOrderBy() {
    QueryWrapper&lt;User&gt; queryWrapper = new QueryWrapper&lt;&gt;();
    queryWrapper.orderByDesc(&quot;id&quot;);
    List&lt;User&gt; users = userMapper.selectList(queryWrapper);
    users.forEach(System.out::println);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="last" tabindex="-1"><a class="header-anchor" href="#last" aria-hidden="true">#</a> last</h4>
<p>直接拼接到 sql 的最后<br>
<strong>注意：只能调用一次,多次调用以最后一次为准 有sql注入的风险,请谨慎使用</strong></p>
<p><code v-pre>SELECT id,name,age,email,create_time,update_time,deleted,version FROM user WHERE deleted=0 limit 1</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void testSelectListLast() {
    QueryWrapper&lt;User&gt; queryWrapper = new QueryWrapper&lt;&gt;();
    queryWrapper.last(&quot;limit 1&quot;);
    List&lt;User&gt; users = userMapper.selectList(queryWrapper);
    users.forEach(System.out::println);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h4>
<p><code v-pre>SELECT id,name,age FROM user WHERE deleted=0</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void testSelectListColumn() {
    QueryWrapper&lt;User&gt; queryWrapper = new QueryWrapper&lt;&gt;();
    queryWrapper.select(&quot;id&quot;, &quot;name&quot;, &quot;age&quot;);
    List&lt;User&gt; users = userMapper.selectList(queryWrapper);
    users.forEach(System.out::println);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set、setsql" tabindex="-1"><a class="header-anchor" href="#set、setsql" aria-hidden="true">#</a> set、setSql</h4>
<p>最终的sql会合并 user.setAge()，以及 userUpdateWrapper.set()  和 setSql() 中 的字段</p>
<p><code v-pre>UPDATE user SET age=?, update_time=?, name=?, email = '123@qq.com' WHERE deleted=0 AND name LIKE ?</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void testUpdateSet() {
    //修改值
    User user = new User();
    user.setAge(99);
    //修改条件
    UpdateWrapper&lt;User&gt; userUpdateWrapper = new UpdateWrapper&lt;&gt;();
    userUpdateWrapper
        .like(&quot;name&quot;, &quot;h&quot;)
        .set(&quot;name&quot;, &quot;老李头&quot;)//除了可以查询还可以使用set设置修改的字段
        .setSql(&quot; email = '123@qq.com'&quot;);//可以有子查询
    int result = userMapper.update(user, userUpdateWrapper);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口的使用" tabindex="-1"><a class="header-anchor" href="#接口的使用" aria-hidden="true">#</a> 接口的使用</h3>
<h4 id="querywrapper" tabindex="-1"><a class="header-anchor" href="#querywrapper" aria-hidden="true">#</a> QueryWrapper</h4>
<p>首先来看看QueryWrapper的使用，针对where后的条件封装。</p>
<h5 id="查询条件" tabindex="-1"><a class="header-anchor" href="#查询条件" aria-hidden="true">#</a> 查询条件</h5>
<p><code v-pre>SELECT id AS uid,name AS uname,age,email,isdel FROM t_user WHERE isdel=0 AND (name LIKE ? AND age &gt; ? AND email IS NOT NULL)</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void test1(){  
    QueryWrapper&lt;User&gt; userQueryWrapper = new QueryWrapper&lt;&gt;();  
    userQueryWrapper.like(&quot;name&quot;, &quot;J&quot;).gt(&quot;age&quot;,18).isNotNull(&quot;email&quot;);  
    List&lt;User&gt; list = userService.list(userQueryWrapper);  
    list.forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="排序查询" tabindex="-1"><a class="header-anchor" href="#排序查询" aria-hidden="true">#</a> 排序查询</h5>
<p><code v-pre>SELECT id AS uid,name AS uname,age,email,isdel FROM t_user WHERE isdel=0 ORDER BY age ASC,uid DESC</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void test2(){  
    QueryWrapper&lt;User&gt; userQueryWrapper = new QueryWrapper&lt;&gt;();  
    userQueryWrapper.orderByAsc(&quot;age&quot;).orderByDesc(&quot;uid&quot;);  
    List&lt;User&gt; list = userService.list(userQueryWrapper);  
    list.forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="删除条件" tabindex="-1"><a class="header-anchor" href="#删除条件" aria-hidden="true">#</a> 删除条件</h5>
<p>由于开启了逻辑删除 <code v-pre>UPDATE t_user SET isdel=1 WHERE isdel=0 AND (age &gt;= ?)</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void test3(){  
    QueryWrapper&lt;User&gt; userQueryWrapper = new QueryWrapper&lt;&gt;();  
    userQueryWrapper.ge(&quot;age&quot;,28);  
    boolean remove = userService.remove(userQueryWrapper);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="组合条件" tabindex="-1"><a class="header-anchor" href="#组合条件" aria-hidden="true">#</a> 组合条件</h5>
<p>在封装条件的时候我们可以同时有多个条件组合，类似于 and 和 or的操作，这时QueryWrapper也能很轻松的处理。</p>
<p><code v-pre>SELECT id AS uid,name AS uname,age,email,isdel FROM t_user WHERE isdel=0 AND ((age &gt;= ? AND name LIKE ?) OR (email IS NULL))</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void test4(){  
    QueryWrapper&lt;User&gt; userQueryWrapper = new QueryWrapper&lt;&gt;();  
    userQueryWrapper.ge(&quot;age&quot;, 20).like(&quot;name&quot;, &quot;o&quot;).or().isNull(&quot;email&quot;);  
    List&lt;User&gt; list = userService.list(userQueryWrapper);  
    list.forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用and() 和 or()</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void test5(){  
    QueryWrapper&lt;User&gt; userQueryWrapper = new QueryWrapper&lt;&gt;();  
    userQueryWrapper.and((s)-&gt;{s.ge(&quot;age&quot;, 20).like(&quot;name&quot;, &quot;o&quot;);})  
            .or((s)-&gt;{s.isNull(&quot;email&quot;);});  
    List&lt;User&gt; list = userService.list(userQueryWrapper);  
    list.forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="查询特定的字段" tabindex="-1"><a class="header-anchor" href="#查询特定的字段" aria-hidden="true">#</a> 查询特定的字段</h5>
<p>特殊情况我们需要查询特定的字段，这时可以通过select方法来处理</p>
<p><code v-pre>SELECT name,age FROM t_user WHERE isdel=0 AND (name LIKE ?)</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void test6(){  
    QueryWrapper&lt;User&gt; userQueryWrapper = new QueryWrapper&lt;&gt;();  
    userQueryWrapper.like(&quot;name&quot;, &quot;J&quot;).select(&quot;name&quot;,&quot;age&quot;);  
    //返回Map集合列表，通常配合select()使用，避免User对象中没有被查询到的列值为null  
    List&lt;Map&lt;String, Object&gt;&gt; maps = userService.listMaps(userQueryWrapper);  
    maps.forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="实现子查询" tabindex="-1"><a class="header-anchor" href="#实现子查询" aria-hidden="true">#</a> 实现子查询</h5>
<p>单表查询中对子查询的需求也是有的，我们来看看如何实现。</p>
<p><code v-pre>SELECT id AS uid,name AS uname,age,email,isdel FROM t_user WHERE isdel=0 AND (id IN (select id from t_user where id &lt; 5))</code></p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void test7(){  
    QueryWrapper&lt;User&gt; userQueryWrapper = new QueryWrapper&lt;&gt;();  
    userQueryWrapper.inSql(&quot;id&quot;,&quot;select id from t_user where id &lt; 5&quot;);  
    List&lt;User&gt; list = userService.list(userQueryWrapper);  
    list.forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="updatewrapper" tabindex="-1"><a class="header-anchor" href="#updatewrapper" aria-hidden="true">#</a> UpdateWrapper</h4>
<p>当我们需要组装更新的字段数据的时候，可以通过UpdateWrapper来实现。</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void test8(){  
    UpdateWrapper&lt;User&gt; wrapper = new UpdateWrapper&lt;&gt;();  
    //将年龄为33的用户更改  
    wrapper.set(&quot;age&quot;,25).set(&quot;name&quot;, &quot;2333&quot;).set(&quot;email&quot;,&quot;xx@xx.xx&quot;).set(&quot;isdel&quot;, &quot;0&quot;).and(s-&gt;{s.eq(&quot;age&quot;,33);});  
    boolean update = userService.update(null, wrapper);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="动态sql" tabindex="-1"><a class="header-anchor" href="#动态sql" aria-hidden="true">#</a> 动态SQL</h4>
<p>实际开发中，用户的查询条件都是动态的，我们需要根据不同的输入条件来动态的生成对应的SQL语句，这时我们来看看在MyBatisPlus中是如何处理的。</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void test9(){  
    String  name = &quot;Tom&quot;;  
    Integer age = null;  
    String email = null;  
    QueryWrapper&lt;User&gt; wrapper = new QueryWrapper&lt;&gt;();  
    if(!StringUtils.isEmpty(name)){  
        wrapper.eq(&quot;name&quot;,name);  
    }  
    if(age != null &amp;&amp; age &gt; 0){  
        wrapper.eq(&quot;age&quot;,age);  
    }  
    if(!StringUtils.isEmpty(email)){  
        wrapper.eq(&quot;email&quot;,email);  
    }  
    List&lt;User&gt; users = userService.list(wrapper);  
    users.forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码是通过if来一个个判断的，看起来代码比较复杂，其实大家在前面看相关的API的时候会注意到都会有一个Condition参数</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/03_常用注解与条件构造器/assets/image-20230418231331876.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
public void test10(){  
    String  name = &quot;Tom&quot;;  
    Integer age = null;  
    String email = null;  
    QueryWrapper&lt;User&gt; wrapper = new QueryWrapper&lt;&gt;();  
    wrapper.eq(!StringUtils.isEmpty(name),&quot;name&quot;,name)  
            .eq(age != null &amp;&amp; age &gt; 0,&quot;age&quot;,age)  
            .eq(!StringUtils.isEmpty(email),&quot;email&quot;,email);  
    List&lt;User&gt; users = userService.list(wrapper);  
    users.forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


