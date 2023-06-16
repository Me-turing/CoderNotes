import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as l,d as e,e as i,b as c,f as a}from"./app-c47b8d81.js";const t="/CoderNotes/assets/image-20230418143412375-4ddebd3a.png",v="/CoderNotes/assets/image-20230418143509665-5279f4e9.png",u={},o=a(`<h2 id="basemapper简单的crud" tabindex="-1"><a class="header-anchor" href="#basemapper简单的crud" aria-hidden="true">#</a> BaseMapper简单的CRUD</h2><h3 id="查询用户" tabindex="-1"><a class="header-anchor" href="#查询用户" aria-hidden="true">#</a> 查询用户</h3><h4 id="查询所有-selectlist" tabindex="-1"><a class="header-anchor" href="#查询所有-selectlist" aria-hidden="true">#</a> 查询所有:selectList</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void selectUser1() {  
    List&lt;User&gt; users = userMapper.selectList(null);  
    users.forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="根据id查询-selectbyid" tabindex="-1"><a class="header-anchor" href="#根据id查询-selectbyid" aria-hidden="true">#</a> 根据ID查询:selectById</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void selectUser2() {  
    User user = userMapper.selectById(5L);  
    System.out.println(user);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="根据map查询-selectbymap" tabindex="-1"><a class="header-anchor" href="#根据map查询-selectbymap" aria-hidden="true">#</a> 根据Map查询:selectByMap</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void selectUser3() {  
    HashMap&lt;String, Object&gt; userMap = new HashMap&lt;&gt;();  
    userMap.put(&quot;age&quot;,24);  
    userMap.put(&quot;name&quot;,&quot;Billie&quot;);  
    List&lt;User&gt; users = userMapper.selectByMap(userMap);  
    users.forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新增用户-insert" tabindex="-1"><a class="header-anchor" href="#新增用户-insert" aria-hidden="true">#</a> 新增用户 : insert</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void addUser(){  
    User user = new User(6L,&quot;张三&quot;,28,&quot;xxxx@xx.com&quot;);  
    int insertRows = userMapper.insert(user);  
    System.out.println(insertRows);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户" aria-hidden="true">#</a> 删除用户</h3><h4 id="根据id单一删除-deletebyid" tabindex="-1"><a class="header-anchor" href="#根据id单一删除-deletebyid" aria-hidden="true">#</a> 根据ID单一删除 : deleteById</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void deleteUser1(){  
    User user = new User(6L,&quot;李四&quot;,15,&quot;xxxx@xx.com&quot;);  
    int deleteRows = userMapper.deleteById(user);  
    System.out.println(deleteRows);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="根据id批量删除-deletebatchids" tabindex="-1"><a class="header-anchor" href="#根据id批量删除-deletebatchids" aria-hidden="true">#</a> 根据ID批量删除 : deleteBatchIds</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void deleteUser2(){  
    int deleteRows = userMapper.deleteBatchIds(Arrays.asList(6L,1648197837407772673L,1648197837445521409L));  
    System.out.println(deleteRows);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="根据map删除-deletebymap" tabindex="-1"><a class="header-anchor" href="#根据map删除-deletebymap" aria-hidden="true">#</a> 根据Map删除 : deleteByMap</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void deleteUser3(){  
    HashMap&lt;String, Object&gt; userMap = new HashMap&lt;&gt;();  
    userMap.put(&quot;age&quot;,15);  
    userMap.put(&quot;name&quot;,&quot;张三&quot;);  
    int deleteRows = userMapper.deleteByMap(userMap);  
    System.out.println(deleteRows);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改用户-updatebyid" tabindex="-1"><a class="header-anchor" href="#修改用户-updatebyid" aria-hidden="true">#</a> 修改用户 : updateById</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void updateUser1(){  
    User user = new User(6L,&quot;李四&quot;,15,&quot;xxxx@xx.com&quot;);  
    int updateRows = userMapper.updateById(user);  
    System.out.println(updateRows);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iservice接口" tabindex="-1"><a class="header-anchor" href="#iservice接口" aria-hidden="true">#</a> IService接口</h2><h3 id="了解iservice接口" tabindex="-1"><a class="header-anchor" href="#了解iservice接口" aria-hidden="true">#</a> 了解IService接口</h3>`,21),m={href:"https://baomidou.com/pages/49cc81/#service-crud-%E6%8E%A5%E5%8F%A3",target:"_blank",rel:"noopener noreferrer"},b=a('<h3 id="为什么要使用iservice接口" tabindex="-1"><a class="header-anchor" href="#为什么要使用iservice接口" aria-hidden="true">#</a> 为什么要使用IService接口</h3><p>官网说明：</p><ul><li>通用 Service CRUD 封装IService(opens new window)接口，进一步封装 CRUD 采用 get 查询单行 remove 删除 list 查询集合 page 分页 前缀命名方式区分 Mapper 层避免混淆，</li><li>泛型 T 为任意实体对象</li><li>建议如果存在自定义通用 Service 方法的可能，请创建自己的 IBaseService 继承 Mybatis-Plus 提供的基类</li><li>对象 Wrapper 为 条件构造器</li></ul><p>在MyBatis-Plus中有一个接口 IService和其实现类 ServiceImpl，封装了常见的业务层逻辑,在使用上更加的灵活</p><h3 id="构建iservice接口环境" tabindex="-1"><a class="header-anchor" href="#构建iservice接口环境" aria-hidden="true">#</a> 构建IService接口环境</h3><h4 id="创建userservice接口-继承-iservice" tabindex="-1"><a class="header-anchor" href="#创建userservice接口-继承-iservice" aria-hidden="true">#</a> 创建UserService接口 继承 IService</h4><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>要使用MyBatisPlus的Service完成CRUD操作，得继承IService</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface UserService extends IService&lt;User&gt; {  
  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建接口实现类-继承-serviceimpl-实现userservice接口" tabindex="-1"><a class="header-anchor" href="#创建接口实现类-继承-serviceimpl-实现userservice接口" aria-hidden="true">#</a> 创建接口实现类 继承 ServiceImpl 实现UserService接口</h4><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>必须继承ServiceImpl 并且在泛型中指定 对应的Mapper和实体对象</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Service  
public class UserServiceImpl extends ServiceImpl&lt;UserMapper, User&gt; implements UserService {  
  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iservice接口实现的crud" tabindex="-1"><a class="header-anchor" href="#iservice接口实现的crud" aria-hidden="true">#</a> IService接口实现的CRUD</h3><p>通过Service中提供的count方法可以查询总的记录数。get方法，List方法等</p><h4 id="查询操作" tabindex="-1"><a class="header-anchor" href="#查询操作" aria-hidden="true">#</a> 查询操作</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Autowired  
@Qualifier(&quot;userServiceImpl&quot;)  
public UserService iUserService;

@Test  
public void testCount(){  
    long count = iUserService.count();  
    System.out.println(count);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="批量插入" tabindex="-1"><a class="header-anchor" href="#批量插入" aria-hidden="true">#</a> 批量插入</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Autowired  
@Qualifier(&quot;userServiceImpl&quot;)  
public UserService iUserService;

@Test  
public void batchInserts(){  
    List&lt;User&gt; users = Arrays.asList(new User(null, &quot;王五&quot;, 22, &quot;111@111.com&quot;),  
            new User(null, &quot;赵六&quot;, 33, &quot;222@222.com&quot;));  
    boolean b = iUserService.saveBatch(users);  
    System.out.println(b);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function p(h,g){const s=d("ExternalLinkIcon");return r(),l("div",null,[o,e("p",null,[i("官网地址："),e("a",m,[i("https://baomidou.com/pages/49cc81/#service-crud-%E6%8E%A5%E5%8F%A3"),c(s)])]),b])}const f=n(u,[["render",p],["__file","BaseMapper与IService.html.vue"]]);export{f as default};
