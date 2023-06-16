<template><div><h2 id="事务tcl" tabindex="-1"><a class="header-anchor" href="#事务tcl" aria-hidden="true">#</a> 事务TCL</h2>
<h3 id="事务的概述" tabindex="-1"><a class="header-anchor" href="#事务的概述" aria-hidden="true">#</a> 事务的概述</h3>
<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4>
<p><strong>保证事务中的所有操作都作为一个工作单元来执行</strong>，即使出现了故障，都不能改变这种执行方式。当在一个事务中执行多个操作时，要么所有的事务都被<strong>提交(commit)</strong>，那么这些修改就永久地保存下来；要么数据库管理系统将放弃所作的所有修改，整个事务<strong>回滚(rollback)</strong> 到最初状态。</p>
<h4 id="事务的原理" tabindex="-1"><a class="header-anchor" href="#事务的原理" aria-hidden="true">#</a> 事务的原理</h4>
<p>事务开启之后, 所有的操作都会临时保存到事务日志, 事务日志只有在得到<code v-pre>commit</code>命令才会同步到数据表中，其他任何情况都会清空事务日志(rollback，断开连接)</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/02_数据库+JDBC/01_MySQL/08_TCL&amp;DCL/image/事务19_zrLY4c5LsK.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h4>
<p>如果在某个业务中需要执行多条SQL语句，那么此时一般是需要使用到事务，从而<strong>保证这多条SQL语句执行同时成功或同时失败</strong>。例如: 转账、批量删除、从购物车中提交订单等等操作</p>
<h4 id="事务的四大特性-acid" tabindex="-1"><a class="header-anchor" href="#事务的四大特性-acid" aria-hidden="true">#</a> 事务的四大特性(ACID)</h4>
<ol>
<li><strong>原子性（Atomicity）</strong><br>
原子性是指事务是一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生。</li>
<li><strong>一致性（Consistency）</strong><br>
事务必须使数据库从一个一致性状态变换到另外一个一致性状态。</li>
<li><strong>隔离性（lsolation）</strong><br>
事务的隔离性是指一个事务的执行不能被其他事务干扰，即一个事务内部的操作及使用的数据对并发的其他事务是隔离的，并发执行的各个事务之间不能互相干扰。</li>
<li><strong>持久性（Durability）</strong><br>
持久性是指一个事务一旦被提交，它对数据库中数据的改变就是永久性的，接下来的其他操作和数据库故障不应该对其有任何影响</li>
</ol>
<h3 id="mysql进行事务管理" tabindex="-1"><a class="header-anchor" href="#mysql进行事务管理" aria-hidden="true">#</a> MySQL进行事务管理</h3>
<h4 id="自动事务" tabindex="-1"><a class="header-anchor" href="#自动事务" aria-hidden="true">#</a> 自动事务</h4>
<p>MySQL默认是自动提交事务的，一条sql语句就是一个事务</p>
<h4 id="手动事务" tabindex="-1"><a class="header-anchor" href="#手动事务" aria-hidden="true">#</a> 手动事务</h4>
<h5 id="开启事务" tabindex="-1"><a class="header-anchor" href="#开启事务" aria-hidden="true">#</a> 开启事务</h5>
<p>手动开启事务</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">//手动开启事务之后，执行的SQL语句都不会真正改变数据库中的数据</span>
<span class="token comment">//，需要用户手动提交事务才能够真正执行SQL语句</span>
<span class="token keyword">start</span> <span class="token keyword">transaction</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置MYSQL中的自动事务参数</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">//第一步: 查看MYSQL中事务是否自动提交</span>
<span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">'%commit%'</span><span class="token punctuation">;</span>
<span class="token comment">//第二步: 设置自动提交的参数为OFF</span>
<span class="token comment"># 0:OFF  1:ON</span>
<span class="token keyword">set</span> autocommit <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="提交和回滚事务" tabindex="-1"><a class="header-anchor" href="#提交和回滚事务" aria-hidden="true">#</a> 提交和回滚事务</h5>
<h6 id="提交事务" tabindex="-1"><a class="header-anchor" href="#提交事务" aria-hidden="true">#</a> 提交事务</h6>
<p>当这个事务中的SQL语句执行完毕之后，没有出现任何问题，那么我们需要在最后提交事务，让这些SQL语句真正执行去改变数据库中的数据</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">commit</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="回滚事务" tabindex="-1"><a class="header-anchor" href="#回滚事务" aria-hidden="true">#</a> 回滚事务</h6>
<p>当执行这个事务中的SQL语句的过程中，一旦出现问题或者异常，则需要回滚事务，从而回到SQL语句执行之前的状态</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">rollback</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="事务的隔离级别" tabindex="-1"><a class="header-anchor" href="#事务的隔离级别" aria-hidden="true">#</a> 事务的隔离级别</h3>
<h4 id="不考虑事务的隔离性会引发的问题" tabindex="-1"><a class="header-anchor" href="#不考虑事务的隔离性会引发的问题" aria-hidden="true">#</a> 不考虑事务的隔离性会引发的问题</h4>
<p>事务在操作时的理想状态： 所有的事务之间保持隔离，互不影响。因为并发操作，多个用户同时访问同一个数据。<strong>可能引发并发访问的问题</strong></p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/02_数据库+JDBC/01_MySQL/08_TCL&amp;DCL/image/tu_6-1571060762152_4xtNNkcQei.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="事务的四个隔离级别" tabindex="-1"><a class="header-anchor" href="#事务的四个隔离级别" aria-hidden="true">#</a> 事务的四个隔离级别</h4>
<table>
<thead>
<tr>
<th><strong>级别</strong></th>
<th><strong>名字</strong></th>
<th><strong>隔离级别</strong></th>
<th><strong>脏读</strong></th>
<th><strong>不可重复读</strong></th>
<th><strong>幻读</strong></th>
<th><strong>数据库默认隔离级别</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1</strong></td>
<td>读未提交</td>
<td>read uncommitted</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td></td>
</tr>
<tr>
<td><strong>2</strong></td>
<td>读已提交</td>
<td>read committed</td>
<td>否</td>
<td>是</td>
<td>是</td>
<td>Oracle</td>
</tr>
<tr>
<td><strong>3</strong></td>
<td>可重复读</td>
<td>repeatable read</td>
<td>否</td>
<td>否</td>
<td>是</td>
<td>MySQL</td>
</tr>
<tr>
<td><strong>4</strong></td>
<td>串行化</td>
<td>serializable</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>最高的隔离级别</td>
</tr>
</tbody>
</table>
<p><strong>隔离级别越高，性能(效率)越差，安全性越高。</strong></p>
<h5 id="设置隔离级别" tabindex="-1"><a class="header-anchor" href="#设置隔离级别" aria-hidden="true">#</a> 设置隔离级别</h5>
<p>设置事务隔离级别</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">set</span> <span class="token keyword">session</span> <span class="token keyword">transaction</span> <span class="token keyword">isolation</span> <span class="token keyword">level</span>  隔离级别<span class="token punctuation">;</span>
eg: 设置事务隔离级别为<span class="token keyword">read</span> <span class="token keyword">uncommitted</span>
<span class="token keyword">set</span> <span class="token keyword">session</span> <span class="token keyword">transaction</span> <span class="token keyword">isolation</span> <span class="token keyword">level</span> <span class="token keyword">read</span> <span class="token keyword">uncommitted</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询当前事务隔离级别</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> @<span class="token variable">@tx_isolation</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="dcl" tabindex="-1"><a class="header-anchor" href="#dcl" aria-hidden="true">#</a> DCL</h3>
<p>我们现在默认使用的都是root用户，超级管理员，拥有全部的权限。但是，一个公司里面的数据库服务器上面可能同时运行着很多个项目的数据库。所以，我们应该可以根据不同的项目建立不同的用户，分配不同的权限来管理和维护数据库。</p>
<h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户" aria-hidden="true">#</a> 创建用户</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">'用户名'</span><span class="token variable">@'主机名'</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">'密码'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>关键字说明</p>
<blockquote>
<ol>
<li><code v-pre>用户名</code>：将创建的用户名</li>
<li><code v-pre>主机名</code>：指定该用户在哪个主机上可以登陆，如果是本地用户可用localhost，如果想让该用户可以从任意远程主机登陆，可以使用通配符%</li>
<li><code v-pre>密码</code>：该用户的登陆密码，密码可以为空，如果为空则l该用户可以不需要密码登陆服务器</li>
</ol>
</blockquote>
</blockquote>
<p>具体操作：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- user1用户只能在localhost这个IP登录mysql服务器</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">'user1'</span><span class="token variable">@'localhost'</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">'123'</span><span class="token punctuation">;</span>
<span class="token comment">-- user2用户可以在任何电脑上登录mysql服务器</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">'user2'</span><span class="token variable">@'%'</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">'123'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="授权用户" tabindex="-1"><a class="header-anchor" href="#授权用户" aria-hidden="true">#</a> 授权用户</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">GRANT</span> 权限<span class="token number">1</span><span class="token punctuation">,</span> 权限<span class="token number">2.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">ON</span> 数据库名<span class="token punctuation">.</span>表名 <span class="token keyword">TO</span> <span class="token string">'用户名'</span><span class="token variable">@'主机名'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>关键字说明：</p>
<blockquote>
<ol>
<li><code v-pre>GRANT</code> 授权关键字 授予用户的权限，如<code v-pre>SELECT</code>，<code v-pre>INSERT</code>，<code v-pre>UPDATE</code>等。如果要授予所的权限则使用<code v-pre>ALL</code></li>
<li><code v-pre>数据库名.表名</code>：该用户可以操作哪个数据库的哪些表。如果要授予该用户对所有数据库和表的相应操作权限则可用*表示，如<code v-pre>*.*</code> <code v-pre>'用户名'@'主机名'</code>: 给哪个用户授权</li>
</ol>
</blockquote>
</blockquote>
<p>具体操作：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">//给user1用户分配对test这个数据库操作的权限</span>
<span class="token keyword">GRANT</span> <span class="token keyword">CREATE</span><span class="token punctuation">,</span><span class="token keyword">ALTER</span><span class="token punctuation">,</span><span class="token keyword">DROP</span><span class="token punctuation">,</span><span class="token keyword">INSERT</span><span class="token punctuation">,</span><span class="token keyword">UPDATE</span><span class="token punctuation">,</span><span class="token keyword">DELETE</span><span class="token punctuation">,</span><span class="token keyword">SELECT</span> <span class="token keyword">ON</span> test<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">'user1'</span><span class="token variable">@'localhost'</span><span class="token punctuation">;</span>
<span class="token comment">//给user2用户分配对所有数据库操作的权限</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">'user2'</span><span class="token variable">@'%'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤销授权" tabindex="-1"><a class="header-anchor" href="#撤销授权" aria-hidden="true">#</a> 撤销授权</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">REVOKE</span>  权限<span class="token number">1</span><span class="token punctuation">,</span> 权限<span class="token number">2.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">ON</span> 数据库<span class="token punctuation">.</span>表名 <span class="token keyword">FROM</span> <span class="token string">'用户名'</span><span class="token variable">@'主机名'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看权限" tabindex="-1"><a class="header-anchor" href="#查看权限" aria-hidden="true">#</a> 查看权限</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SHOW</span> GRANTS <span class="token keyword">FOR</span> <span class="token string">'用户名'</span><span class="token variable">@'主机名'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户" aria-hidden="true">#</a> 删除用户</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">USER</span> <span class="token string">'用户名'</span><span class="token variable">@'主机名'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改用户密码" tabindex="-1"><a class="header-anchor" href="#修改用户密码" aria-hidden="true">#</a> 修改用户密码</h3>
<h4 id="修改管理员密码" tabindex="-1"><a class="header-anchor" href="#修改管理员密码" aria-hidden="true">#</a> 修改管理员密码</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code> <span class="token comment">//注意：需要在未登陆MySQL的情况下操作。-- 新密码不需要加上引号</span>
mysqladmin <span class="token operator">-</span>uroot <span class="token operator">-</span>p password 新密码 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改普通用户密码" tabindex="-1"><a class="header-anchor" href="#修改普通用户密码" aria-hidden="true">#</a> 修改普通用户密码</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code> <span class="token comment">//注意：需要在未登陆MySQL的情况下操作</span>
<span class="token keyword">set</span> password <span class="token keyword">for</span> <span class="token string">'用户名'</span><span class="token variable">@'主机名'</span> <span class="token operator">=</span> password<span class="token punctuation">(</span><span class="token string">'新密码'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


