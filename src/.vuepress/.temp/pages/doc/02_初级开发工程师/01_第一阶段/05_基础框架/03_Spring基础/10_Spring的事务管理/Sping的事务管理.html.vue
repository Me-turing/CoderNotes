<template><div><h2 id="事务的回顾" tabindex="-1"><a class="header-anchor" href="#事务的回顾" aria-hidden="true">#</a> 事务的回顾</h2>
<h3 id="事务的概念" tabindex="-1"><a class="header-anchor" href="#事务的概念" aria-hidden="true">#</a> 事务的概念</h3>
<p><code v-pre>事务(Transaction)</code>指的是一个操作序列，该操作序列中的多个操作要么都做，要么都不做，是一个不可分割的工作单位，<strong>是数据库环境中的逻辑工作单位，由DBMS中的事务管理子系统负责事务的处理。</strong></p>
<p>目前常用的存储引擎有<code v-pre>InnoDB</code>（MySQL5.5以后默认的存储引擎）和<code v-pre>MyISAM</code>（MySQL5.5之前默认的存储引擎），其中<strong>InnoDB支持事务处理机制，而MyISAM不支持。</strong></p>
<h3 id="事务的特性" tabindex="-1"><a class="header-anchor" href="#事务的特性" aria-hidden="true">#</a> 事务的特性</h3>
<p>事务处理可以确保除非事务性序列内的所有操作都成功完成，否则不会永久更新面向数据的资源。通过将一组相关操作组合为一个<strong>要么全部成功要么全部失败的序列</strong>，可以简化错误恢复并使应用程序更加可靠。</p>
<p>但并不是所有的操作序列都可以称为事务，这是因为一个操作序列要成为事务，必须满足事务的<code v-pre>原子性（Atomicity）</code>、<code v-pre>一致性（Consistency）</code>、<code v-pre>隔离性（Isolation）</code>和<code v-pre>持久性（Durability）</code>。这四个特性简称为ACID特性。</p>
<h4 id="原子性-atomicity" tabindex="-1"><a class="header-anchor" href="#原子性-atomicity" aria-hidden="true">#</a> 原子性（Atomicity）</h4>
<p>原子是自然界最小的颗粒，具有不可再分的特性。事务中的所有操作可以看做一个原子，事务是应用中不可再分的最小的逻辑执行体。</p>
<p>使用事务对数据进行修改的操作序列，要么全部执行，要么全不执行。通常，某个事务中的操作都具有共同的目标，并且是相互依赖的。如果数据库系统只执行这些操作中的一部分，则可能会破坏事务的总体目标，而原子性消除了系统只处理部分操作的可能性。</p>
<h4 id="一致性-consistency" tabindex="-1"><a class="header-anchor" href="#一致性-consistency" aria-hidden="true">#</a> 一致性（Consistency）</h4>
<p>一致性是指事务执行的结果必须使数据库从一个一致性状态，变到另一个一致性状态。当数据库中只包含事务成功提交的结果时，数据库处于一致性状态。一致性是通过原子性来保证的。</p>
<p>例如：在转账时，只有保证转出和转入的金额一致才能构成事务。也就是说事务发生前和发生后，数据的总额依然匹配。</p>
<h4 id="隔离性-isolation" tabindex="-1"><a class="header-anchor" href="#隔离性-isolation" aria-hidden="true">#</a> 隔离性（Isolation）</h4>
<p>隔离性是指各个事务的执行互不干扰，任意一个事务的内部操作对其他并发的事务，都是隔离的。也就是说：并发执行的事务之间既不能看到对方的中间状态，也不能相互影响。</p>
<p>例如：在转账时，只有当A账户中的转出和B账户中转入操作都执行成功后才能看到A账户中的金额减少以及B账户中的金额增多。并且其他的事务对于转账操作的事务是不能产生任何影响的。</p>
<h4 id="持久性-durability" tabindex="-1"><a class="header-anchor" href="#持久性-durability" aria-hidden="true">#</a> 持久性（Durability）</h4>
<p>持久性指事务一旦提交，对数据所做的任何改变，都要记录到永久存储器中，通常是保存进物理数据库，即使数据库出现故障，提交的数据也应该能够恢复。但如果是由于外部原因导致的数据库故障，如硬盘被损坏，那么之前提交的数据则有可能会丢失。</p>
<h3 id="事务的并发问题" tabindex="-1"><a class="header-anchor" href="#事务的并发问题" aria-hidden="true">#</a> 事务的并发问题</h3>
<h4 id="脏读-dirty-read" tabindex="-1"><a class="header-anchor" href="#脏读-dirty-read" aria-hidden="true">#</a> 脏读（Dirty read）</h4>
<p>当一个事务正在访问数据并且对数据进行了修改，而这种修改还没有提交到数据库中，这时另外一个事务也访问了这个数据，然后使用了这个数据。因为这个数据是还没有提交的数据，那么另外一个事务读到的这个数据是“脏数据”，依据“脏数据”所做的操作可能是不正确的。</p>
<table>
<thead>
<tr>
<th style="text-align:left">时间点</th>
<th style="text-align:left">事务A</th>
<th style="text-align:left">事务B</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">开启事务A</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left"></td>
<td style="text-align:left">开启事务B</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">查询余额为100</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left"></td>
<td style="text-align:left">余额增加至150</td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left">查询余额为150</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">6</td>
<td style="text-align:left"></td>
<td style="text-align:left">事务回滚</td>
</tr>
</tbody>
</table>
<h4 id="不可重复读-unrepeatableread" tabindex="-1"><a class="header-anchor" href="#不可重复读-unrepeatableread" aria-hidden="true">#</a> 不可重复读（Unrepeatableread）</h4>
<p>指在一个事务内多次读同一数据。在这个事务还没有结束时，另一个事务也访问该数据。那么，在第一个事务中的两次读数据之间，由于第二个事务的修改导致第一个事务两次读取的数据可能不太一样。这就发生了在一个事务内两次读到的数据是不一样的情况，因此称为不可重复读。</p>
<table>
<thead>
<tr>
<th style="text-align:left">时间点</th>
<th style="text-align:left">事务A</th>
<th style="text-align:left">事务B</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">开启事务A</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left"></td>
<td style="text-align:left">开启事务B</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">查询余额为100</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left"></td>
<td style="text-align:left">余额增加至150</td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left">查询余额为100</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">6</td>
<td style="text-align:left"></td>
<td style="text-align:left">提交事务</td>
</tr>
<tr>
<td style="text-align:left">7</td>
<td style="text-align:left">查询余额为150</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<h4 id="幻读-phantom-read" tabindex="-1"><a class="header-anchor" href="#幻读-phantom-read" aria-hidden="true">#</a> 幻读(Phantom read)</h4>
<p>幻读与不可重复读类似。它发生在一个事务（T1）读取了几行数据，接着另一个并发事务（T2）插入了一些数据时。在随后的查询中，第一个事务（T1）就会发现多了一些原本不存在的记录，就好像发生了幻觉一样，所以称为幻读。</p>
<table>
<thead>
<tr>
<th style="text-align:left">时间点</th>
<th style="text-align:left">事务A</th>
<th style="text-align:left">事务B</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">开启事务A</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left"></td>
<td style="text-align:left">开启事务B</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">查询id&lt;3的所有记录,共3条</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left"></td>
<td style="text-align:left">插入一条记录id=2</td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left"></td>
<td style="text-align:left">提交事务</td>
</tr>
<tr>
<td style="text-align:left">6</td>
<td style="text-align:left">查询id&lt;3的所有记录,共4条</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><strong>不可重复度和幻读区别</strong>：<br>
不可重复读的重点是修改，幻读的重点在于新增或者删除。</p>
<p><strong>解决不可重复读的问题只需锁住满足条件的行，解决幻读需要锁表</strong><br>
例1（同样的条件, 你读取过的数据, 再次读取出来发现值不一样了 ）：事务1中的A先生读取自己的工资为 1000的操作还没完成，事务2中的B先生就修改了A的工资为2000，导 致A再读自己的工资时工资变为 2000；这就是不可重复读。<br>
例2（同样的条件, 第1次和第2次读出来的记录数不一样 ）：假某工资单表中工资大于3000的有4人，事务1读取了所有工资大于3000的人，共查到4条记录，这时事务2又插入了一条工资大于3000的记录，事务1再次读取时查到的记录就变为了5条，这样就导致了幻读</p>
<h3 id="事务的隔离级别" tabindex="-1"><a class="header-anchor" href="#事务的隔离级别" aria-hidden="true">#</a> 事务的隔离级别</h3>
<p>事务的隔离级别用于决定如何控制并发用户读写数据的操作。数据库是允许多用户并发访问的，如果多个用户同时开启事务并对同一数据进行读写操作的话，有可能会出现脏读、不可重复读和幻读问题，所以MySQL中提供了四种隔离级别来解决上述问题。</p>
<p>事务的隔离级别从低到高依次为</p>
<ul>
<li><code v-pre>READ UNCOMMITTED</code> - 读未提交、</li>
<li><code v-pre>READ COMMITTED</code> - 读已提交、</li>
<li><code v-pre>REPEATABLE READ</code> - 可重复读</li>
<li><code v-pre>SERIALIZABLE</code> - 串行化</li>
</ul>
<p>隔离级别越低，越能支持高并发的数据库操作。</p>
<table>
<thead>
<tr>
<th style="text-align:left">隔离级别</th>
<th style="text-align:left">脏读</th>
<th style="text-align:center">不可重复读</th>
<th style="text-align:left">幻读</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">READ UNCOMMITTED</td>
<td style="text-align:left">√</td>
<td style="text-align:center"><span style="text-align: start;">√</span></td>
<td style="text-align:left">√</td>
</tr>
<tr>
<td style="text-align:left">READ COMMITTED</td>
<td style="text-align:left">×</td>
<td style="text-align:center"><span style="text-align: start;">√</span></td>
<td style="text-align:left">√</td>
</tr>
<tr>
<td style="text-align:left">REPEATABLE READ  </td>
<td style="text-align:left">×</td>
<td style="text-align:center"><span style="text-align: start;">×</span></td>
<td style="text-align:left">√</td>
</tr>
<tr>
<td style="text-align:left">SERIALIZABLE </td>
<td style="text-align:left">×</td>
<td style="text-align:center"><span style="text-align: start;">×</span></td>
<td style="text-align:left">×</td>
</tr>
</tbody>
</table>
<p>默认Mysql使用的是: <code v-pre>REPEATABLE READ</code> - 可重复读</p>
<h2 id="简单的转账案例" tabindex="-1"><a class="header-anchor" href="#简单的转账案例" aria-hidden="true">#</a> 简单的转账案例</h2>
<h3 id="数据源准备" tabindex="-1"><a class="header-anchor" href="#数据源准备" aria-hidden="true">#</a> 数据源准备</h3>
<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre v-pre class="language-SQL"><code>CREATE TABLE `wallet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `money` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wallet_id_IDX` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO wallet (id, name, money) VALUES(1, 'zhangsan', 15000.0);
INSERT INTO wallet (id, name, money) VALUES(2, 'lisi', 1000.0);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516102411062.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="spring工程配置" tabindex="-1"><a class="header-anchor" href="#spring工程配置" aria-hidden="true">#</a> Spring工程配置</h3>
<p><RouterLink to="/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/03_Spring%E5%9F%BA%E7%A1%80/09_JDBCTemplate/JDBCTemplate.html#%E5%AF%BC%E5%85%A5Maven%E4%BE%9D%E8%B5%96">导入Maven依赖</RouterLink></p>
<p><RouterLink to="/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/03_Spring%E5%9F%BA%E7%A1%80/09_JDBCTemplate/JDBCTemplate.html#%E9%85%8D%E7%BD%AESpring%E5%B7%A5%E7%A8%8B">配置Spring工程</RouterLink></p>
<h3 id="实现转账功能" tabindex="-1"><a class="header-anchor" href="#实现转账功能" aria-hidden="true">#</a> 实现转账功能</h3>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516111443832.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Wallet.java实体类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@AllArgsConstructor
@NoArgsConstructor
@Data
public class Wallet implements Serializable {
    private Integer id;
    private String name;
    private Integer money;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AccountDao.java接口</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public interface AccountDao {
    int transMoney(int id,int money);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AccountDaoImpl.java接口实现类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Repository
public class AccountDaoImpl implements AccountDao {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Override
    public int transMoney(int id, int money) {
        String sql =&quot;update wallet set money =money +? where id =?&quot;;
        return jdbcTemplate.update(sql,money,id);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AccountService.java接口</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public interface AccountService {
    int transMoney(int from ,int to,int money);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AccountServiceImpl.java接口实现类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountDao accountDao;
    @Override
    public int transMoney(int from, int to, int money) {
        int rows=0;
        rows+=accountDao.transMoney(from, 0 - money);
        rows+=accountDao.transMoney(to, money);
        return rows;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test
public void test01(){
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContex.xml&quot;);
	AccountService accountService = applicationContext.getBean(AccountService.class);
	accountService.transMoney(1,2,500);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516112108396.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516112059063.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="未开启事务的危害" tabindex="-1"><a class="header-anchor" href="#未开启事务的危害" aria-hidden="true">#</a> 未开启事务的危害</h3>
<p>在上面的操作中 A-&gt;B进行了转账行为,A的账户发生了扣款,B的账户发生了存款</p>
<p>如果在A-&gt;B转账中发生了异常,由于没有事务的控制,则会发生严重的后果:</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516113248789.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>再次执行转账功能:</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516113342367.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>此时我们再次查看余额:</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516113436471.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>我们发现A账户发生了扣款,但是B账户并没有成功存款,此时也没有重置A账户的余额,这样最终违背了一致性原则</p>
<p>所以我们需要引入事务的控制</p>
<h2 id="spring中对事物的管理" tabindex="-1"><a class="header-anchor" href="#spring中对事物的管理" aria-hidden="true">#</a> Spring中对事物的管理</h2>
<p>事务的管理应该放在我们的service层进行处理</p>
<p>spring中有两种事务的管理方式:</p>
<ol>
<li>编程式事务管理(了解)</li>
<li>声明式事务管理(掌握)
<ol>
<li>基于注解方式实现(掌握)</li>
<li>XML方式实现(了解)</li>
</ol>
</li>
</ol>
<p>Spring声明式事务的实现方式,底层就是AOP,AOP的底层就是动态代理</p>
<p><strong>事务管理器接口: PlatformTransactionManager</strong>  针对不同的框架,提供了不同的实现类<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516135836965.png" alt="" loading="lazy"></p>
<h3 id="编程式事务管理-了解" tabindex="-1"><a class="header-anchor" href="#编程式事务管理-了解" aria-hidden="true">#</a> 编程式事务管理 - 了解</h3>
<h4 id="修改applicationcontext-xml" tabindex="-1"><a class="header-anchor" href="#修改applicationcontext-xml" aria-hidden="true">#</a> 修改applicationContext.xml</h4>
<ol>
<li>注入事务管理器<code v-pre>DataSourceTransactionManager</code> 并将 dataSource 指向数据源</li>
<li>注入事务管理模板<code v-pre>TransactionTemplate</code> 并将 transactionManager 指向事务管理器<code v-pre>DataSourceTransactionManager</code></li>
</ol>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--配置事务管理器--&gt;
&lt;bean id=&quot;transactionManager&quot; class=&quot;org.springframework.jdbc.datasource.DataSourceTransactionManager&quot;&gt;
	&lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot; /&gt;
&lt;/bean&gt;
&lt;!--配置事务管理模板--&gt;
&lt;bean id=&quot;transactionTemplate&quot; class=&quot;org.springframework.transaction.support.TransactionTemplate&quot;&gt;
	&lt;property name=&quot;transactionManager&quot; ref=&quot;transactionManager&quot; /&gt;
&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516140424206.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="修改service层代码" tabindex="-1"><a class="header-anchor" href="#修改service层代码" aria-hidden="true">#</a> 修改Service层代码</h4>
<p>AccountServiceImpl.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountDao accountDao;
    @Autowired
    private TransactionTemplate transactionTemplate;
    @Override
    public int transMoney(int from, int to, int money) {
        Object execute = transactionTemplate.execute(new TransactionCallback&lt;Object&gt;() {
            @Override
            public Object doInTransaction(TransactionStatus transactionStatus) {
                //*********执行主要业务,过程中出现错误则回滚*************
                int rows=0;
                rows+=accountDao.transMoney(from, 0 - money);
                rows = 1/0;//制造异常
                rows+=accountDao.transMoney(to, money);
                return rows;
            }
        });
        return  execute instanceof Integer?(Integer)execute:0;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>自动注入获取transactionTemplate对象</li>
<li>transactionTemplate对象中 <code v-pre>&lt;T&gt; T execute(TransactionCallback&lt;T&gt; action)</code> 方法执行事务</li>
<li>使用<code v-pre>new TransactionCallback&lt;Object&gt;()</code> 接口直接实现<code v-pre>doInTransaction</code> 方法</li>
<li><code v-pre>doInTransaction</code>方法中实现我们原有代码功能</li>
</ol>
<p>注意: 默认情况下,<code v-pre>doInTransaction</code>方法中发生异常将自动回滚,我们无需干预,当然我们也可以使用<code v-pre>transactionStatus</code>对象手动创建还原点和回滚事件:<br>
<code v-pre>Object savepoint = transactionStatus.createSavepoint();</code> 创建还原点<br>
<code v-pre>transactionStatus.rollbackToSavepoint(savepoint);</code> 回滚到还原点</p>
<p>AccountServiceImpl.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountDao accountDao;
    @Autowired
    private TransactionTemplate transactionTemplate;
    @Override
    public int transMoney(int from, int to, int money) {
        Object execute = transactionTemplate.execute(new TransactionCallback&lt;Object&gt;() {
            @Override
            public Object doInTransaction(TransactionStatus transactionStatus) {
                //创建还原点
                Object savepoint = transactionStatus.createSavepoint();
                //*********执行主要业务,过程中出现错误则回滚,并返回错误日志*************
                int rows=0;
                try {
                    rows+=accountDao.transMoney(from, 0 - money);
                    rows = 1/0;//制造异常
                    rows+=accountDao.transMoney(to, money);
                } catch (Exception e) {
                    //回滚至还原点
                    transactionStatus.rollbackToSavepoint(savepoint);
                    return 0;
                }
                return rows;
            }
        });
        return  execute instanceof Integer?(Integer)execute:0;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试事务" tabindex="-1"><a class="header-anchor" href="#测试事务" aria-hidden="true">#</a> 测试事务</h4>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516142107380.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="声明式事务管理-熟悉" tabindex="-1"><a class="header-anchor" href="#声明式事务管理-熟悉" aria-hidden="true">#</a> 声明式事务管理 - 熟悉</h3>
<h4 id="transactional注解管理事务" tabindex="-1"><a class="header-anchor" href="#transactional注解管理事务" aria-hidden="true">#</a> @Transactional注解管理事务</h4>
<h5 id="修改applicationcontext-xml-1" tabindex="-1"><a class="header-anchor" href="#修改applicationcontext-xml-1" aria-hidden="true">#</a> 修改applicationContext.xml</h5>
<ol>
<li>导入tx声明空间</li>
<li>配置<code v-pre>DataSourceTransactionManager</code>事务管理器,并将<code v-pre>dataSource</code>属性注入到数据源中</li>
<li>使用<code v-pre>tx:annotation-driven</code> 标签 ,<code v-pre>transaction-manager </code>属性 指向<code v-pre>DataSourceTransactionManager</code>事务管理器</li>
</ol>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--配置一个事务管理器--&gt;
&lt;bean id=&quot;transactionManager&quot; class=&quot;org.springframework.jdbc.datasource.DataSourceTransactionManager&quot;&gt;
	&lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot; /&gt;
&lt;/bean&gt;
&lt;!--开启事务注解--&gt;
&lt;tx:annotation-driven transaction-manager=&quot;transactionManager&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516143104920.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="修改service层代码-1" tabindex="-1"><a class="header-anchor" href="#修改service层代码-1" aria-hidden="true">#</a> 修改Service层代码</h5>
<p>使用<code v-pre>@Transactional</code> 注解在需要事务的地方:</p>
<ol>
<li>在类上使用,则当前类中的所有方法都开始事务处理</li>
<li>在方法上使用,则当前方法使用事务处理</li>
</ol>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountDao accountDao;
    @Override
    @Transactional
    public int transMoney(int from, int to, int money) {
        int rows=0;
        rows+=accountDao.transMoney(from, 0 - money);
        rows+=accountDao.transMoney(to, money);
        return rows;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="测试事务-1" tabindex="-1"><a class="header-anchor" href="#测试事务-1" aria-hidden="true">#</a> 测试事务</h5>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516144102353.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>事务生效</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516142107380.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="xml方式管理事务" tabindex="-1"><a class="header-anchor" href="#xml方式管理事务" aria-hidden="true">#</a> XML方式管理事务</h4>
<h5 id="修改applicationcontext-xml-2" tabindex="-1"><a class="header-anchor" href="#修改applicationcontext-xml-2" aria-hidden="true">#</a> 修改applicationContext.xml</h5>
<ol>
<li>导入tx声明空间</li>
<li>配置<code v-pre>DataSourceTransactionManager</code>事务管理器,并将<code v-pre>dataSource</code>属性注入到数据源中</li>
<li>使用<code v-pre>tx:advice</code>标签创建一个事物的通知
<ol>
<li><code v-pre>transaction-manager</code>属性指向<code v-pre>DataSourceTransactionManager</code>事务管理器</li>
<li><code v-pre>tx:method</code>子标签控制指定方法上的事务</li>
</ol>
</li>
<li>使用<code v-pre>aop:config</code> 为需要使用事务的类添加切面事件
<ol>
<li><code v-pre>aop:advisor</code>子标签上的<code v-pre>advice-ref</code>属性指向<code v-pre>tx:advice</code>标签创建的通知</li>
</ol>
</li>
</ol>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--配置一个事务管理器--&gt;
&lt;bean id=&quot;transactionManager&quot; class=&quot;org.springframework.jdbc.datasource.DataSourceTransactionManager&quot;&gt;
	&lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot; /&gt;
&lt;/bean&gt;
&lt;!--配置通知--&gt;
&lt;tx:advice id=&quot;txAdvice&quot; transaction-manager=&quot;transactionManager&quot;&gt;
	&lt;tx:attributes&gt;
		&lt;!--配置事务的参数--&gt;
		&lt;!-- read-only属性：设置为false 【默认就是可以不设置】--&gt;
		&lt;!-- rollback-for属性：设置回滚的异常--&gt;
		&lt;!-- no-rollback-for属性：设置不回滚的异常--&gt;
		&lt;!-- isolation属性：设置事务的隔离级别--&gt;
		&lt;!-- timeout属性：设置事务的超时属性--&gt;
		&lt;!-- propagation属性：设置事务的传播行为--&gt;
		&lt;tx:method name=&quot;*&quot; isolation=&quot;DEFAULT&quot;  propagation=&quot;REQUIRED&quot;/&gt;
	&lt;/tx:attributes&gt;
&lt;/tx:advice&gt;
&lt;!--AOP添加事务--&gt;
&lt;aop:config&gt;
	&lt;!--配置切入点--&gt;
	&lt;aop:pointcut id=&quot;pt&quot; expression=&quot;execution(* com.meturing.service.AccountService.*(..))&quot;/&gt;
	&lt;!--配置切面--&gt;
	&lt;aop:advisor advice-ref=&quot;txAdvice&quot; pointcut-ref=&quot;pt&quot;&gt;&lt;/aop:advisor&gt;
&lt;/aop:config&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516151326751.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="修改service层代码-2" tabindex="-1"><a class="header-anchor" href="#修改service层代码-2" aria-hidden="true">#</a> 修改Service层代码</h5>
<p>Service层代码正常使用就好</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountDao accountDao;
    @Override
    public int transMoney(int from, int to, int money) {
        int rows=0;
        rows+=accountDao.transMoney(from, 0 - money);
        rows+=accountDao.transMoney(to, money);
        return rows;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="测试事务-2" tabindex="-1"><a class="header-anchor" href="#测试事务-2" aria-hidden="true">#</a> 测试事务</h5>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516145343134.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>事务生效</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516142107380.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="事务中的属性" tabindex="-1"><a class="header-anchor" href="#事务中的属性" aria-hidden="true">#</a> 事务中的属性</h2>
<p>我们在使用XML配置事务或者直接使用@Transactional注解来管理事务时,都有发现,在Spring的事务中存在多个属性:</p>
<ul>
<li>
<p>XML中<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516151858832.png" alt="" loading="lazy"></p>
</li>
<li>
<p>@Transactional注解中<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516151944518.png" alt="" loading="lazy"></p>
</li>
</ul>
<p>接下来我们详细了解一下:</p>
<h3 id="只读-readonly" tabindex="-1"><a class="header-anchor" href="#只读-readonly" aria-hidden="true">#</a> 只读 readOnly</h3>
<p>对一个查询操作来说，如果我们把它设置成只读，就能够明确告诉数据库，这个操作不涉及写操作。<br>
<strong>这样数据库就能够针对查询操作来进行优化。</strong></p>
<p>默认值为:false</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Transactional(readOnly = true)
public String getEmpName(Integer empId) { return empDao.selectEmpNameById(empId); }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><font color="#ff0000">注意: 只读操作只针对查询，如果配置增删改会抛出异常！！！</font><h3 id="超时-timeout" tabindex="-1"><a class="header-anchor" href="#超时-timeout" aria-hidden="true">#</a> 超时 timeout</h3>
<p>事务在执行过程中，有可能因为遇到某些问题，导致程序卡住，从而长时间占用数据库资源。而长时间占用资源，大概率是因为程序运行出现了问题（可能是Java程序或MySQL数据库或网络连接等等）</p>
<p>此时这个很可能出问题的程序应该被回滚，撤销它已做的操作，事务结束，把资源让出来，让其他正常程序可以执行。</p>
<p>默认值为-1,表示无限等待  单位是秒</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>//timeout属性设置事务的超时时间，以秒为单位
@Transactional(readOnly = true, timeout = 3)
public String getEmpName(Integer empId) {
    return empDao.selectEmpNameById(empId);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>概括来说就是一句话：<strong>超时回滚，释放资源。</strong></p>
<h3 id="回滚-rollbackfor" tabindex="-1"><a class="header-anchor" href="#回滚-rollbackfor" aria-hidden="true">#</a> 回滚 rollbackFor</h3>
<p>设置回滚的异常,发生该异常才回滚,其他异常不回滚</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Transactional(rollbackFor = Exception.class)
public String getEmpName(Integer empId) {
    return empDao.selectEmpNameById(empId);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不会滚的异常-norollbackfor" tabindex="-1"><a class="header-anchor" href="#不会滚的异常-norollbackfor" aria-hidden="true">#</a> 不会滚的异常 noRollbackFor</h3>
<p>设置不回滚的异常,发生该异常不回滚,其他异常回滚</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Transactional(noRollbackFor = FileNotFoundException.class)
public String getEmpName(Integer empId) {
    return empDao.selectEmpNameById(empId);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当异常范围与rollbackFor设定的一致时,以rollbackFor为准</strong></p>
<h3 id="隔离级别-isolation" tabindex="-1"><a class="header-anchor" href="#隔离级别-isolation" aria-hidden="true">#</a> 隔离级别 isolation</h3>
<p>在 <code v-pre>@Transactional 注解</code>中使用 <code v-pre>isolation 属性</code>设置事务的隔离级别。<br>
取值使用 <code v-pre>org.springframework.transaction.annotation.Isolation</code> 枚举类提供的数值。</p>
<h4 id="default-默认" tabindex="-1"><a class="header-anchor" href="#default-默认" aria-hidden="true">#</a> DEFAULT （默认）</h4>
<p>这是一个PlatfromTransactionManager默认的隔离级别，使用数据库默认的事务隔离级别。另外四个与JDBC的隔离级别相对应。<br>
MySQL默认<code v-pre>REPEATABLE_READ</code><br>
Oracle默认<code v-pre>READ_COMMITTED</code></p>
<h4 id="read-uncommitted-读未提交" tabindex="-1"><a class="header-anchor" href="#read-uncommitted-读未提交" aria-hidden="true">#</a> READ_UNCOMMITTED （读未提交）</h4>
<p>这是事务最低的隔离级别，它允许另外一个事务可以看到这个事务未提交的数据。<br>
<strong>这种隔离级别会产生脏读，不可重复读和幻像读。</strong></p>
<h4 id="read-committed-读已提交" tabindex="-1"><a class="header-anchor" href="#read-committed-读已提交" aria-hidden="true">#</a> READ_COMMITTED （读已提交）</h4>
<p>保证一个事务修改的数据提交后才能被另外一个事务读取，另外一个事务不能读取该事务未提交的数据。<br>
<strong>这种事务隔离级别可以避免脏读出现，但是可能会出现不可重复读和幻像读。</strong></p>
<h4 id="repeatable-read-可重复读" tabindex="-1"><a class="header-anchor" href="#repeatable-read-可重复读" aria-hidden="true">#</a> REPEATABLE_READ （可重复读）</h4>
<p>这种事务隔离级别可以防止脏读、不可重复读，但是可能出现幻像读。</p>
<p>它除了保证一个事务不能读取另一个事务未提交的数据外，还保证了不可重复读。</p>
<h4 id="serializable-串行化" tabindex="-1"><a class="header-anchor" href="#serializable-串行化" aria-hidden="true">#</a> SERIALIZABLE（串行化）</h4>
<p>这是花费<strong>最高代价</strong>但是<strong>最可靠</strong>的事务隔离级别，<strong>事务被处理为顺序执行</strong>。</p>
<p>除了防止脏读、不可重复读外，还避免了幻像读。</p>
<h3 id="传播行为-propagation" tabindex="-1"><a class="header-anchor" href="#传播行为-propagation" aria-hidden="true">#</a> 传播行为 propagation</h3>
<p>多事务方法之间调用,事务是如何管理的</p>
<h4 id="常用属性" tabindex="-1"><a class="header-anchor" href="#常用属性" aria-hidden="true">#</a> 常用属性</h4>
<table>
<thead>
<tr>
<th style="text-align:left">事务的传播行为类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">PROPAGATION_REQUIRED</td>
<td style="text-align:left">如果当前没有事务，就新建一个事务，如果已经存在一个事务中，加入到这个事务中。这是最常见的选择(默认)。</td>
</tr>
<tr>
<td style="text-align:left">PROPAGATION_SUPPORTS</td>
<td style="text-align:left">支持当前事务，如果当前没有事务，就以非事务方式执行。</td>
</tr>
<tr>
<td style="text-align:left">PROPAGATION_MANDATORY</td>
<td style="text-align:left">使用当前的事务，如果当前没有事务，就抛出异常。</td>
</tr>
<tr>
<td style="text-align:left">PROPAGATION_REQUIRES_NEW</td>
<td style="text-align:left">新建事务，如果当前存在事务，把当前事务挂起</td>
</tr>
<tr>
<td style="text-align:left">PROPAGATION_NOT_SUPPORTED</td>
<td style="text-align:left">以非事务方式执行操作，如果当前存在事务，就把当前事务挂起</td>
</tr>
<tr>
<td style="text-align:left">PROPAGATION_NEVER</td>
<td style="text-align:left">以非事务方式执行，如果当前存在事务，则抛出异常</td>
</tr>
<tr>
<td style="text-align:left">PROPAGATION_NESTED</td>
<td style="text-align:left">如果当前存在事务，则在嵌套事务内执行。如果当前没有事务，则执行与PROPAGATION_REQUIRED类似的操作</td>
</tr>
</tbody>
</table>
<h4 id="重点属性讲解" tabindex="-1"><a class="header-anchor" href="#重点属性讲解" aria-hidden="true">#</a> 重点属性讲解</h4>
<p>下面以a.save()里调用了b.save()举例，事务方法之间调用时事务如何传播。</p>
<p>以下内容来自 CSDN-<a href="https://blog.csdn.net/mccand1234" title="春天的早晨" target="_blank" rel="noopener noreferrer">春天的早晨<ExternalLinkIcon/></a></p>
<h5 id="propagation-required-默认" tabindex="-1"><a class="header-anchor" href="#propagation-required-默认" aria-hidden="true">#</a> PROPAGATION_REQUIRED（默认）</h5>
<p><strong>默认</strong>的spring事务传播级别，使用该级别的特点是，如果上下文中已经存在事务，那么就加入到事务中执行，如果当前上下文中不存在事务，则新建事务执行。如下图：</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516160820958.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>由于两个方法属于同一个物理事务，如果发生回滚，则两者都回滚。</p>
<h5 id="propagation-supports" tabindex="-1"><a class="header-anchor" href="#propagation-supports" aria-hidden="true">#</a> PROPAGATION_SUPPORTS</h5>
<p>顾名思义就是可以支持事务，如果b.save()在事务环境中运行，则以事务形式运行，否则以非事务运行。</p>
<p><strong>注：这里所谓的非事务形式的数据库访问只是指没有显式的事务边界而已，就是说数据库操作只是 auto-commit 的方式，在数据库的物理事务概念上，还是有事务的。譬如在这里，a.save()调用b.save()，如果当a是非事务执行（非手动提交事务，而是auto-commit），那么b.save()在执行前，a.save()的物理事务就要先提交，而同时，b.save()的物理事务也是auto-commit，这样才是这里说的b.save()以非事务方法运行，而不是指b.save()不开启数据库物理事务。而所谓的b.save()在事务环境中运行，是指当b的外层a.save()本身是手动提交事务时，b.save()也会包含在a.save()里边的同一个事务去执行，也就是说a.save()与b.save()的SQL操作在同一个物理事务中。</strong></p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516161459221.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="propagation-mandatory" tabindex="-1"><a class="header-anchor" href="#propagation-mandatory" aria-hidden="true">#</a> PROPAGATION_MANDATORY</h5>
<p>必须在一个事务中运行，也就是说，b.save()只能在已有事务的方法中被调用，如果当前事物不存在，会抛异常。</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516161529796.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="propagation-requires-new" tabindex="-1"><a class="header-anchor" href="#propagation-requires-new" aria-hidden="true">#</a> PROPAGATION_REQUIRES_NEW</h5>
<p>总是会创建一个新事务（包括物理事务），该传播级别的特点是，每次都会新建一个事务，并且同时将上下文中的事务挂起，执行当前新建事务完成以后，上下文事务恢复再执行。如下图：</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516161552519.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>两个方法之间既不属于同一个逻辑事务也不属于同一个物理事务。</p>
<h5 id="propagation-not-supported" tabindex="-1"><a class="header-anchor" href="#propagation-not-supported" aria-hidden="true">#</a> PROPAGATION_NOT_SUPPORTED</h5>
<p>顾名思义不支持事务，当处于存在事务的上下文环境中运行时，b.save()会暂停当前已开启的事务，意味着a.save()的事务被挂起直至b.save()<strong>以非事务方法运行完毕后</strong>，a.save()的事务继续执行。</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516161619088.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="propagation-never" tabindex="-1"><a class="header-anchor" href="#propagation-never" aria-hidden="true">#</a> PROPAGATION_NEVER</h5>
<p>绝不能在事务环境中运行，如果a.save()里声明了使用事务，而b.save()的事务类型声明为never，那么只能以抛异常告终。</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516161646459.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>与Mandatory相反</strong>，Mandatory意思是强制要求上下文中有事务（外层有事务），否则抛异常，而Never是上下文中不能有事务（外层无事务），否则抛异常。</p>
<h5 id="propagation-nested" tabindex="-1"><a class="header-anchor" href="#propagation-nested" aria-hidden="true">#</a> PROPAGATION_NESTED</h5>
<p>嵌套事务支持。该传播级别特征是，如果上下文中存在事务，则嵌套事务执行，如果不存在事务，则新建事务。</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/10_Spring的事务管理/assets/image-20230516161715172.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Nested和RequiresNew的区别：</p>
<ul>
<li>RequiresNew每次都创建新的独立的物理事务，而Nested只有一个物理事务；Nested嵌套事务回滚或提交不会导致外部事务回滚或提交，但外部事务回滚将导致嵌套事务回滚，而RequiresNew由于都是全新的事务，所以之间是无关联的  Nested使用JDBC 3的保存点实现，即如果使用低版本驱动将导致不支持嵌套事务</li>
<li><strong>使用嵌套事务，必须确保具体事务管理器实现的nestedTransactionAllowed属性为true，否则不支持嵌套事务，如DataSourceTransactionManager默认支持，而HibernateTransactionManager默认不支持，需要我们来开启。</strong></li>
</ul>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<h4 id="死活不要事务的" tabindex="-1"><a class="header-anchor" href="#死活不要事务的" aria-hidden="true">#</a> 死活不要事务的</h4>
<ul>
<li>PROPAGATION_NEVER：没有就非事务执行，有就抛出异常。</li>
<li>PROPAGATION_NOT_SUPPORTED：没有就非事务执行，有就<strong>直接挂起</strong>，然后非事务执行。 挂起记得B事务不能再操作同一张表，不然会死锁。</li>
</ul>
<h4 id="可有可无的" tabindex="-1"><a class="header-anchor" href="#可有可无的" aria-hidden="true">#</a> 可有可无的</h4>
<ul>
<li>PROPAGATION_SUPPORTS: 有就用，没有就算了。</li>
</ul>
<h4 id="必须有事务的" tabindex="-1"><a class="header-anchor" href="#必须有事务的" aria-hidden="true">#</a> 必须有事务的</h4>
<ul>
<li>PROPAGATION_REQUIRES_NEW: 有没有都新建事务，如果原来有，就将原来挂起。 外部内部事务互相隔离，互不影响，内层回滚不影响外部。</li>
<li>PROPAGATION_NESTED：如果没有，就新建一个事务；如果有，就在当前事务中嵌套其他事务。，外层默认事务，内层NESTED，外层调用try{内层}catch{}。 外层异常回滚外层+内层，内层异常仅回滚内层，不影响外层。</li>
<li>PROPAGATION_REQUIRED：如果没有，就新建一个事务；如果有，就加入当前事务。</li>
<li>PROPAGATION_MANDATORY：如果没有，就抛出异常；如果有，就使用当前事务。</li>
</ul>
</div></template>


