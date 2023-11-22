import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as d,d as e,e as a,b as r,f as i}from"./app-71f45f98.js";const c="/CoderNotes/assets/Pasted_image_20230416184304-ed89b3c4.png",o="/CoderNotes/assets/Pasted_image_20230416184107-09f43241.png",u="/CoderNotes/assets/Pasted_image_20230416184140-295f9b5a.png",p="/CoderNotes/assets/Pasted_image_20230416185024-fe2d50f1.png",v="/CoderNotes/assets/Pasted_image_20230416185140-4dd73d28.png",m="/CoderNotes/assets/Pasted_image_20230416185748-472a3a70.png",g="/CoderNotes/assets/Pasted_image_20230416185646-b0067365.png",h="/CoderNotes/assets/Pasted_image_20230416185832-2390b360.png",b="/CoderNotes/assets/Pasted_image_20230416190405-603bd610.png",f="/CoderNotes/assets/Pasted_image_20230416194118-b128e42e.png",_="/CoderNotes/assets/Pasted_image_20230416193927-b34a991e.png",y="/CoderNotes/assets/Pasted_image_20230416194146-67ff1651.png",q="/CoderNotes/assets/Pasted_image_20230416194253-a9390173.png",x="/CoderNotes/assets/Pasted_image_20230416194631-f3ad027f.png",S="/CoderNotes/assets/Pasted_image_20230416194422-61e79842.png",C="/CoderNotes/assets/Pasted_image_20230416195036-9d550385.png",E="/CoderNotes/assets/Pasted_image_20230416195053-10730766.png",M="/CoderNotes/assets/Pasted_image_20230416195101-e6b452e8.png",L="/CoderNotes/assets/Pasted_image_20230416195245-04c79498.png",P="/CoderNotes/assets/Pasted_image_20230416195326-74a8c600.png",N="/CoderNotes/assets/Pasted_image_20230416195407-391753b8.png",k="/CoderNotes/assets/Pasted_image_20230416195421-19392f11.png",z="/CoderNotes/assets/Pasted_image_20230416195427-d0cacc74.png",B="/CoderNotes/assets/Pasted_image_20230416195448-60275d36.png",T={},D=i('<h2 id="了解缓存" tabindex="-1"><a class="header-anchor" href="#了解缓存" aria-hidden="true">#</a> 了解缓存</h2><h3 id="什么时缓存" tabindex="-1"><a class="header-anchor" href="#什么时缓存" aria-hidden="true">#</a> 什么时缓存</h3><p><strong>缓存</strong> : 是一种临时存储少量数据至内存或者是磁盘的一种技术.减少数据的加载次数,可以降低工作量,提高程序响应速度</p><p>缓存的重要性是不言而喻的。mybatis的缓存将相同查询条件的SQL语句执行一遍后所得到的结果存在内存或者某种缓存介质当中，当下次遇到一模一样的查询SQL时候不在执行SQL与数据库交互，而是直接从缓存中获取结果，减少服务器的压力；尤其是在查询越多、缓存命中率越高的情况下，使用缓存对性能的提高更明显。</p><p>MyBatis允许使用缓存，缓存一般放置在高速读/写的存储器上，比如服务器的内存，能够有效的提供系统性能。<strong>MyBatis分为一级缓存和二级缓存</strong>，同时也可配置关于缓存设置。</p><h3 id="缓存的使用顺序" tabindex="-1"><a class="header-anchor" href="#缓存的使用顺序" aria-hidden="true">#</a> 缓存的使用顺序</h3><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>查询的顺序是：</p><ul><li>先查询二级缓存，因为二级缓存中可能会有其他程序已经查出来的数据，可以拿来直接使用。</li><li>如果二级缓存没有命中，再查询一级缓存</li><li>如果一级缓存也没有命中，则查询数据库</li><li>SqlSession关闭之前，一级缓存中的数据会写入二级缓存</li></ul><h3 id="缓存的效力范围" tabindex="-1"><a class="header-anchor" href="#缓存的效力范围" aria-hidden="true">#</a> 缓存的效力范围</h3><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>一级存储是SqlSession上的缓存</strong>，<strong>二级缓存是在SqlSessionFactory(namespace)上的缓存</strong>。默认情况下，MyBatis开启一级缓存，没有开启二级缓存。当数据量大的时候可以借助一些<strong>第三方缓存框架或Redis缓存来协助保存Mybatis的二级缓存数据</strong>。</p><h2 id="一级缓存" tabindex="-1"><a class="header-anchor" href="#一级缓存" aria-hidden="true">#</a> 一级缓存</h2><p><strong>一级存储是SqlSession上的缓存，默认开启，是一种内存型缓存,不要求实体类对象实现Serializable接口。</strong></p><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当我们获得一次请求后,缓存中的数据使用键值对形式存储数据. 通常是通过<code>namespace+sqlid+args+offset</code> 计算哈希值作为Key,将返回的对象作为value</p><h3 id="开启缓存" tabindex="-1"><a class="header-anchor" href="#开启缓存" aria-hidden="true">#</a> 开启缓存</h3><p>默认开启!</p><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void Testcache1(){  
    DeptMapper mapper1 = sqlSession.getMapper(DeptMapper.class);  
    Dept dept1 = mapper1.findeDept(20);  
  
    DeptMapper mapper2 = sqlSession.getMapper(DeptMapper.class);  
    Dept dept2 = mapper2.findeDept(20);  
  
    System.out.println(mapper1==mapper2);  //false
    System.out.println(dept1==dept2);  //true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们查看控制台发现,两次查询调用实际上只请求了一次数据库,第二次使用的是缓存,且返回的实体对象是同一个对象</p><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><p>以下操作会导致一级缓存失效:</p><ul><li>不是同一个SqlSession</li><li>同一个SqlSession但是查询条件发生了变化</li><li>同一个SqlSession两次查询期间执行了任何一次增删改操作</li><li>同一个SqlSession两次查询期间手动清空了缓存</li><li>同一个SqlSession两次查询期间提交了事务</li></ul><h2 id="二级缓存" tabindex="-1"><a class="header-anchor" href="#二级缓存" aria-hidden="true">#</a> 二级缓存</h2><p><strong>二级缓存是以namespace为标记的缓存，可以是由一个SqlSessionFactory创建的SqlSession之间共享缓存数据。默认并不开启。</strong></p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="开启缓存-1" tabindex="-1"><a class="header-anchor" href="#开启缓存-1" aria-hidden="true">#</a> 开启缓存</h3><ol><li><p>配置Mybatis配置文件 : 在sqlMapConfig.xml文件中的<code>&lt;settings&gt;</code>标签配置开启二级缓存<br><img src="'+m+'" alt="" loading="lazy"><br> cacheEnabled的默认值就是true，所以这步的设置可以省略</p></li><li><p>配置Mapper文件 : 在要开启二级缓存的mapper文件中开启缓存<br><img src="'+g+'" alt="" loading="lazy"></p></li><li><p>设置实体类 : 实体类必须序列化!<br><img src="'+h+`" alt="" loading="lazy"></p></li></ol><p>经过设置后，查询结果如图所示。发现第一个SqlSession会首先去二级缓存中查找，如果不存在，就查询数据库，<strong>在commit()或者close()的时候将数据放入到二级缓存</strong>。第二个SqlSession执行相同SQL语句查询时就直接从二级缓存中获取了。</p><h3 id="案例-1" tabindex="-1"><a class="header-anchor" href="#案例-1" aria-hidden="true">#</a> 案例</h3><p>下面的代码中创建了两个SqlSession，执行相同的SQL语句，尝试让第二个SqlSession使用第一个SqlSession查询后缓存的数据。要求实体类必须实现序列化接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void Testcache2(){  
    EmpMapper mapper1 = sqlSession.getMapper(EmpMapper.class);  
    List&lt;Emp&gt; emp1 = mapper1.findEmp(20);  
    sqlSession.commit();  
    EmpMapper mapper2 = sqlSession.getMapper(EmpMapper.class);  
    List&lt;Emp&gt; emp2 = mapper2.findEmp(20);  
    System.out.println(mapper1==mapper2);  
    System.out.println(emp1==emp2);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们看到,此时仍是只查询了一次数据库,且返回的对象不是同一个,但出现了缓存命中的提示:<code>Cache Hit Ratio [com.meturing.mapper.EmpMapper]: 0.5</code><br><img src="`+b+`" alt="" loading="lazy"></p><p>缓存命中率的计算 : 缓存命中率 = 命中缓存的次数 / 查询的总次数</p><h3 id="注意事项-1" tabindex="-1"><a class="header-anchor" href="#注意事项-1" aria-hidden="true">#</a> 注意事项</h3><ol><li>MyBatis的二级缓存的缓存介质有多种多样，而并不一定是在内存中，所以需要对JavaBean对象实现序列化接口。</li><li>二级缓存是以 namespace 为单位的，不同 namespace 下的操作互不影响</li><li>加入Cache元素后，会对相应命名空间所有的select元素查询结果进行缓存，而其中的insert、update、delete在操作是会清空整个namespace的缓存</li><li><strong>如果在加入Cache元素的前提下让个别select 元素不使用缓存，可以使用useCache属性，设置为false。</strong>(<code>useCache</code>控制当前sql语句是否启用缓存 <code>flushCache</code>控制当前sql执行一次后是否刷新缓存)<br><code>&lt;select id=&quot;findByEmpno&quot; resultType=&quot;emp&quot; useCache=&quot;true&quot; flushCache=&quot;false&quot;&gt;</code></li></ol><h3 id="缓存中的其他参数" tabindex="-1"><a class="header-anchor" href="#缓存中的其他参数" aria-hidden="true">#</a> 缓存中的其他参数</h3><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;cache type=&quot;&quot; readOnly=&quot;&quot; eviction=&quot;&quot; flushInterval=&quot;&quot; size=&quot;&quot; blocking=&quot;&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">含义</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;">自定义缓存类，要求实现org.apache.ibatis.cache.Cache接口</td><td style="text-align:left;">null</td></tr><tr><td style="text-align:left;">readOnly</td><td style="text-align:left;"><div>是否只读</div><div>true:给所有调用者返回缓存对象的相同实例。因此这些对象不能被修改。这提供了很重要的性能优势。</div><div>false:会返回缓存对象的拷贝(通过序列化) 。这会慢一些,但是安全</div></td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">eviction</td><td style="text-align:left;"><div>缓存策略</div><div>LRU（默认） – 最近最少使用：移除最长时间不被使用的对象。</div><div>FIFO – 先进先出：按对象进入缓存的顺序来移除它们。</div><div>SOFT – 软引用：基于垃圾回收器状态和软引用规则移除对象。</div><div>WEAK – 弱引用：更积极地基于垃圾收集器状态和弱引用规则移除对象。</div><div><br></div></td><td style="text-align:left;">LRU</td></tr><tr><td style="text-align:left;">flushInterval</td><td style="text-align:left;">刷新间隔，毫秒为单位。默认为null，也就是没有刷新间隔，只有执行update、insert、delete语句才会刷新</td><td style="text-align:left;">null</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">缓存对象个数</td><td style="text-align:left;">1024</td></tr><tr><td style="text-align:left;">blocking</td><td style="text-align:left;"><div>是否使用阻塞性缓存BlockingCache</div><div>true：在查询缓存时锁住对应的Key，如果缓存命中了则会释放对应的锁，否则会在查询数据库以后再释放锁，保证只有一个线程到数据库中查找指定key对应的数据</div><div>false：不使用阻塞性缓存，性能更好</div><div><br></div></td><td style="text-align:left;">false</td></tr></tbody></table><h2 id="三方缓存-ehcache" tabindex="-1"><a class="header-anchor" href="#三方缓存-ehcache" aria-hidden="true">#</a> 三方缓存 - Ehcache</h2><p>分布式缓存框架：我们系统为了提高系统并发 和性能，一般对系统进行分布式部署（集群部署方式）不适用分布缓存， 缓存的数据在各个服务单独存储，不方便系统开发。所以要使用分布式缓存对缓存数据进行集中管理.ehcache,redis ,memcache缓存框架。</p><p><code>Ehcache</code>：是一种广泛使用的开源java分布式缓存。主要面向通用缓存，javaEE 和 轻量级容器。它具有内存和磁盘存储功能。被用于大型复杂分布式web application的</p><h3 id="配置ehcache的环境" tabindex="-1"><a class="header-anchor" href="#配置ehcache的环境" aria-hidden="true">#</a> 配置Ehcache的环境</h3><h4 id="导入pom-xml依赖" tabindex="-1"><a class="header-anchor" href="#导入pom-xml依赖" aria-hidden="true">#</a> 导入Pom.xml依赖</h4><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;!-- Mybatis EHCache整合包 --&gt;  
&lt;dependency&gt;  
    &lt;groupId&gt;org.mybatis.caches&lt;/groupId&gt;  
    &lt;artifactId&gt;mybatis-ehcache&lt;/artifactId&gt;  
    &lt;version&gt;1.2.1&lt;/version&gt;  
&lt;/dependency&gt;  
&lt;!-- slf4j日志门面的一个具体实现 --&gt;  
&lt;dependency&gt;  
    &lt;groupId&gt;ch.qos.logback&lt;/groupId&gt;  
    &lt;artifactId&gt;logback-classic&lt;/artifactId&gt;  
    &lt;version&gt;1.2.3&lt;/version&gt;  
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建ehcache配置文件" tabindex="-1"><a class="header-anchor" href="#创建ehcache配置文件" aria-hidden="true">#</a> 创建EHCache配置文件</h4><figure><img src="`+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot; ?&gt;
&lt;ehcache xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:noNamespaceSchemaLocation=&quot;../config/ehcache.xsd&quot;&gt;
    &lt;!-- 磁盘保存路径 --&gt;
    &lt;diskStore path=&quot;D:\\atguigu\\ehcache&quot;/&gt;
    
    &lt;defaultCache
            maxElementsInMemory=&quot;1000&quot;
            maxElementsOnDisk=&quot;10000000&quot;
            eternal=&quot;false&quot;
            overflowToDisk=&quot;true&quot;
            timeToIdleSeconds=&quot;120&quot;
            timeToLiveSeconds=&quot;120&quot;
            diskExpiryThreadIntervalSeconds=&quot;120&quot;
            memoryStoreEvictionPolicy=&quot;LRU&quot;&gt;
    &lt;/defaultCache&gt;
&lt;/ehcache&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50),O=e("br",null,null,-1),J=e("br",null,null,-1),w=e("img",{src:_,alt:"",loading:"lazy"},null,-1),I=e("br",null,null,-1),X=e("strong",null,"文件名必须叫做:ehcache.xml",-1),R=i('<h4 id="指定缓存管理器的具体类型" tabindex="-1"><a class="header-anchor" href="#指定缓存管理器的具体类型" aria-hidden="true">#</a> 指定缓存管理器的具体类型</h4><figure><img src="'+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;cache type=&quot;org.mybatis.caches.ehcache.EhcacheCache&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="加入logback日志" tabindex="-1"><a class="header-anchor" href="#加入logback日志" aria-hidden="true">#</a> 加入logback日志</h4><p>存在SLF4J时，作为简易日志的log4j将失效，此时我们需要借助SLF4J的具体实现logback来打印日志。</p><p>将原有的log4j文件及依赖清除后,再导入SLF4J的具体实现logback日志</p><figure><img src="`+q+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>logback.xml</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;  
&lt;configuration debug=&quot;true&quot;&gt;  
    &lt;!-- 指定日志输出的位置 --&gt;  
    &lt;appender name=&quot;STDOUT&quot;  
              class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;  
        &lt;encoder&gt;  
            &lt;!-- 日志输出的格式 --&gt;  
            &lt;!-- 按照顺序分别是：时间、日志级别、线程名称、打印日志的类、日志主体内容、换行 --&gt;  
            &lt;pattern&gt;[%d{HH:mm:ss.SSS}] [%-5level] [%thread] [%logger] [%msg]%n&lt;/pattern&gt;  
        &lt;/encoder&gt;  
    &lt;/appender&gt;  
    &lt;!-- 设置全局日志级别。日志级别按顺序分别是：DEBUG、INFO、WARN、ERROR --&gt;  
    &lt;!-- 指定任何一个日志级别都只打印当前级别和后面级别的日志。 --&gt;  
    &lt;root level=&quot;DEBUG&quot;&gt;  
        &lt;!-- 指定打印日志的appender，这里通过“STDOUT”引用了前面配置的appender --&gt;  
        &lt;appender-ref ref=&quot;STDOUT&quot; /&gt;  
    &lt;/root&gt;  
    &lt;!-- 根据特殊需求指定局部日志级别 --&gt;  
    &lt;logger name=&quot;com.atguigu.crowd.mapper&quot; level=&quot;DEBUG&quot;/&gt;  
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果再Mybatis中配置了具体的日志指向,则需要修改</p><figure><img src="`+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>此处可以删除,让Mybatis自己选择,详情见 [[Mybatis配置#导入Log4j日志框架]]</p><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void Testcache2(){  
    EmpMapper mapper1 = sqlSession.getMapper(EmpMapper.class);  
    List&lt;Emp&gt; emp1 = mapper1.findEmp(20);  
    sqlSession.commit();  
    EmpMapper mapper2 = sqlSession.getMapper(EmpMapper.class);  
    List&lt;Emp&gt; emp2 = mapper2.findEmp(20);  
    System.out.println(mapper1==mapper2);  
    System.out.println(emp1==emp2);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+S+'" alt="" loading="lazy"><br> 我们发现,此时以及成功使用了Ehcache缓存,且成功命中</p><h2 id="缓存的基本原理" tabindex="-1"><a class="header-anchor" href="#缓存的基本原理" aria-hidden="true">#</a> 缓存的基本原理</h2><p>根据Cache接口中方法的声明我们能够看到，缓存的本质是一个Map。</p><h3 id="cache接口" tabindex="-1"><a class="header-anchor" href="#cache接口" aria-hidden="true">#</a> Cache接口</h3><p><code>org.apache.ibatis.cache.Cache</code>接口：所有缓存都必须实现的顶级接口</p><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="cache接口的方法" tabindex="-1"><a class="header-anchor" href="#cache接口的方法" aria-hidden="true">#</a> Cache接口的方法</h4><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+M+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="perpetualcache-实现类" tabindex="-1"><a class="header-anchor" href="#perpetualcache-实现类" aria-hidden="true">#</a> PerpetualCache 实现类</h4><figure><img src="'+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>org.apache.ibatis.cache.impl.PerpetualCache<strong>是Mybatis的默认缓存</strong>，<strong>也是Cache接口的默认实现</strong>。<strong>Mybatis一级缓存和自带的二级缓存都是通过PerpetualCache来操作缓存数据的</strong>。但是这就奇怪了，同样是PerpetualCache这个类，怎么能区分出来两种不同级别的缓存呢？</p><p>一级缓存与二级缓存的调用者不同</p><ul><li>一级缓存：由<strong>BaseExecutor调用PerpetualCache</strong></li><li>二级缓存：由<strong>CachingExecutor调用PerpetualCache</strong>，而CachingExecutor可以看做是对BaseExecutor的装饰</li></ul><h3 id="一级缓存机制" tabindex="-1"><a class="header-anchor" href="#一级缓存机制" aria-hidden="true">#</a> 一级缓存机制</h3><figure><img src="'+P+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>org.apache.ibatis.executor.BaseExecutor类中的关键方法：</p><p>query( )方法</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public &lt;E&gt; List&lt;E&gt; query(MappedStatement ms, Object parameter, RowBounds rowBounds, ResultHandler resultHandler, CacheKey key, BoundSql boundSql) throws SQLException {
    ErrorContext.instance().resource(ms.getResource()).activity(&quot;executing a query&quot;).object(ms.getId());
    if (closed) {
        throw new ExecutorException(&quot;Executor was closed.&quot;);
    }
    if (queryStack == 0 &amp;&amp; ms.isFlushCacheRequired()) {
        clearLocalCache();
    }
    List&lt;E&gt; list;
    try {
        queryStack++;
        
        // 尝试从本地缓存中获取数据
        list = resultHandler == null ? (List&lt;E&gt;) localCache.getObject(key) : null;
        
        if (list != null) {
            handleLocallyCachedOutputParameters(ms, key, parameter, boundSql);
        } else {
            
            // 如果本地缓存中没有查询到数据，则查询数据库
            list = queryFromDatabase(ms, parameter, rowBounds, resultHandler, key, boundSql);
        }
    } finally {
        queryStack--;
    }
    if (queryStack == 0) {
        for (org.apache.ibatis.executor.BaseExecutor.DeferredLoad deferredLoad : deferredLoads) {
            deferredLoad.load();
        }
        // issue #601
        deferredLoads.clear();
        if (configuration.getLocalCacheScope() == LocalCacheScope.STATEMENT) {
            // issue #482
            clearLocalCache();
        }
    }
    return list;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>queryFromDatabase()方法</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private &lt;E&gt; List&lt;E&gt; queryFromDatabase(MappedStatement ms, Object parameter, RowBounds rowBounds, ResultHandler resultHandler, CacheKey key, BoundSql boundSql) throws SQLException {
    List&lt;E&gt; list;
    localCache.putObject(key, EXECUTION_PLACEHOLDER);
    try {
        
        // 从数据库中查询数据
        list = doQuery(ms, parameter, rowBounds, resultHandler, boundSql);
    } finally {
        localCache.removeObject(key);
    }
    
    // 将数据存入本地缓存
    localCache.putObject(key, list);
    if (ms.getStatementType() == StatementType.CALLABLE) {
        localOutputParameterCache.putObject(key, parameter);
    }
    return list;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二级缓存机制" tabindex="-1"><a class="header-anchor" href="#二级缓存机制" aria-hidden="true">#</a> 二级缓存机制</h3><figure><img src="`+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下面我们来看看CachingExecutor类中的query()方法在不同情况下使用的具体缓存对象<br> ①未开启二级缓存<br><img src="'+k+'" alt="" loading="lazy"><br> ②使用自带二级缓存<br><img src="'+z+'" alt="" loading="lazy"><br> ③使用EHCache<br><img src="'+B+'" alt="" loading="lazy"></p>',38);function j(F,H){const n=t("defalutCache");return l(),d("div",null,[D,e("p",null,[a("defaultCache标签各属性说明"),O,a(' 当借助CacheManager.add("缓存名称")创建Cache时，EhCache便会采用'),r(n),a("指定的的管理策略。"),J,w,I,X]),R])}const A=s(T,[["render",j],["__file","Mybatis缓存.html.vue"]]);export{A as default};
