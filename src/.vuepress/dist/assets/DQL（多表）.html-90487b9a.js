import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as e}from"./app-54a62cbe.js";const t="/coder-notes/assets/image_TMrbjXDbQE-9c0a44d7.png",p="/coder-notes/assets/image_j9Z0Uev-PE-ab113f8c.png",o="/coder-notes/assets/image_ka5khfg9Wm-66674f17.png",i="/coder-notes/assets/image_AVAgcoQz8v-43101e29.png",c="/coder-notes/assets/image_UMYnZ3g7g9-f51d03b9.png",l="/coder-notes/assets/image_PATfK6e2xl-28392b38.png",r="/coder-notes/assets/image_QKoGOKM1jO-180ef0df.png",d="/coder-notes/assets/image_ZODT0AhWbW-f5acbdb0.png",u="/coder-notes/assets/image_DyGGxFrltb-07b3f6f2.png",k="/coder-notes/assets/image_sUYH336Oo2-afb5baf0.png",m="/coder-notes/assets/image_wOFoTN_T83-27ed04f4.png",h="/coder-notes/assets/image_AHzSscyVgZ-23abad8d.png",g="/coder-notes/assets/image_GQ--nh1ART-21314e1f.png",b="/coder-notes/assets/image_EWpfzAbAvh-43f73d91.png",v="/coder-notes/assets/image_TpnVn1Fi7--bd78aa8c.png",y="/coder-notes/assets/image_D9br_qWIWm-e729be4a.png",f={},w=e('<h2 id="三范式" tabindex="-1"><a class="header-anchor" href="#三范式" aria-hidden="true">#</a> 三范式</h2><p>好的数据库设计对数据的存储性能和后期的程序开发，都会产生重要的影响。<strong>建立科学的，规范的数据库就需要满足一些规则来优化数据的设计和存储，这些规则就称为范式</strong></p><h3 id="第一范式-确保每列保持原子性" tabindex="-1"><a class="header-anchor" href="#第一范式-确保每列保持原子性" aria-hidden="true">#</a> 第一范式：确保每列保持原子性</h3><p>第一范式是最基本的范式。<strong>如果数据库表中的所有字段值都是不可分解的原子值，就说明该数据库表满足了第一范式。</strong></p><p>第一范式的合理遵循需要根据系统的实际需求来定。比如某些数据库系统中需要用到“地址”这个属性，本来直接将“地址”属性设计成一个数据库表的字段就行。但是如果系统经常会访问“地址”属性中的“城市”部分，那么就非要将“地址”这个属性重新拆分为省份、城市、详细地址等多个部分进行存储，这样在对地址中某一部分操作的时候将非常方便。这样设计才算满足了数据库的第一范式，如下表所示。</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="第二范式-确保表中的每列都和主键相关" tabindex="-1"><a class="header-anchor" href="#第二范式-确保表中的每列都和主键相关" aria-hidden="true">#</a> 第二范式：确保表中的每列都和主键相关</h3><p>第二范式在第一范式的基础之上更进一层。<strong>第二范式需要确保数据库表中的每一列都和主键相关，而不能只与主键的某一部分相关（主要针对联合主键而言）</strong>。也就是说在一个数据库表中，一个表中只能保存一种数据，不可以把多种数据保存在同一张数据库表中。</p><p>比如要设计一个订单信息表，因为订单中可能会有多种商品，所以要将订单编号和商品编号作为数据库表的联合主键，如下表所示</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样就产生一个问题：这个表中是以订单编号和商品编号作为联合主键。这样在该表中商品名称、单位、商品价格等信息不与该表的主键相关，而仅仅是与商品编号相关。所以在这里违反了第二范式的设计原则。</p><p>而如果把这个订单信息表进行拆分，把商品信息分离到另一个表中，把订单项目表也分离到另一个表中，就非常完美了。如下所示</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>**这样设计，在很大程度上减小了数据库的冗余。如果要获取订单的商品信息，使用商品编号到商品信息表中查询即可 **</p><h3 id="第三范式-确保每列都和主键列直接相关-而不是间接相关" tabindex="-1"><a class="header-anchor" href="#第三范式-确保每列都和主键列直接相关-而不是间接相关" aria-hidden="true">#</a> 第三范式：确保每列都和主键列直接相关，而不是间接相关</h3><p><strong>第三范式需要确保数据表中的每一列数据都和主键直接相关，而不能间接相关。</strong></p><p>比如在设计一个订单数据表的时候，可以将客户编号作为一个外键和订单表建立相应的关系。而不可以在订单表中添加关于客户其它信息（比如姓名、所属公司等）的字段。如下面这两个表所示的设计就是一个满足第三范式的数据库表。</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样在查询订单信息的时候，就可以使用客户编号来引用客户信息表中的记录，也不必在订单信息表中多次输入客户信息的内容，减小了数据冗余</p><h2 id="多表关系" tabindex="-1"><a class="header-anchor" href="#多表关系" aria-hidden="true">#</a> 多表关系</h2><h3 id="一对多" tabindex="-1"><a class="header-anchor" href="#一对多" aria-hidden="true">#</a> 一对多</h3><p>将一的一方作为主表，多的一方作为从表，在从表中指定一个字段作为外键，指向主表的主键</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="多对多" tabindex="-1"><a class="header-anchor" href="#多对多" aria-hidden="true">#</a> 多对多</h3><p>因为两张表都是多的一方，所以在两张表中都无法创建外键，所以需要新创建一张中间表，在中间表中定义两个字段，这俩字段分别作为外键指向两张表各自的主键</p><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="一对一" tabindex="-1"><a class="header-anchor" href="#一对一" aria-hidden="true">#</a> 一对一</h3><p>在从表中指定一个字段创建外键并指向主表的主键，然后给从表的外键字段添加唯一约束</p><h2 id="多表关联查询" tabindex="-1"><a class="header-anchor" href="#多表关联查询" aria-hidden="true">#</a> 多表关联查询</h2><h3 id="交叉查询" tabindex="-1"><a class="header-anchor" href="#交叉查询" aria-hidden="true">#</a> 交叉查询</h3><p>交叉查询其实就是将多张表的数据没有条件地连接在一起进行展示</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> a<span class="token punctuation">.</span>列<span class="token punctuation">,</span>a<span class="token punctuation">.</span>列<span class="token punctuation">,</span>b<span class="token punctuation">.</span>列<span class="token punctuation">,</span>b<span class="token punctuation">.</span>列 <span class="token keyword">from</span> a<span class="token punctuation">,</span>b <span class="token punctuation">;</span>  

<span class="token keyword">select</span> a<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>b<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> a<span class="token punctuation">,</span>b <span class="token punctuation">;</span>  
<span class="token comment">--或者 </span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这种查询方式是不正确的会出现笛卡尔积的情况！！</strong></p><blockquote><p>笛卡尔积<br> 将两（或多）个表的所有行进行组合，连接后的行数为两（或多）个表的乘积数<br> 出现笛卡尔积，主要是因为缺少关联条件或者关联条件不准确</p></blockquote><h3 id="内连接查询" tabindex="-1"><a class="header-anchor" href="#内连接查询" aria-hidden="true">#</a> 内连接查询</h3><p>交叉查询产生这样的结果并不是我们想要的，那么怎么去除错误的、不想要的记录呢，当然是<strong>通过条件过滤</strong>。通常要查询的多个表之间都存在关联关系，那么就通过<strong>关联关系(主外键关系)去除笛卡尔积</strong>。这种通过条件过滤去除笛卡尔积的查询，我们称之为连接查询</p><h4 id="隐式内连" tabindex="-1"><a class="header-anchor" href="#隐式内连" aria-hidden="true">#</a> 隐式内连</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">//隐式内连接查询里面是没有inner join关键字</span>
<span class="token keyword">select</span> <span class="token punctuation">[</span>字段<span class="token punctuation">,</span>字段<span class="token punctuation">,</span>字段<span class="token punctuation">]</span> <span class="token keyword">from</span> a<span class="token punctuation">,</span>b <span class="token keyword">where</span> 连接条件 <span class="token punctuation">(</span>b表里面的外键 <span class="token operator">=</span> a表里面的主键 <span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="显式内连" tabindex="-1"><a class="header-anchor" href="#显式内连" aria-hidden="true">#</a> 显式内连</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">//显式内连接查询里面是有inner join关键字</span>
<span class="token keyword">select</span> <span class="token punctuation">[</span>字段<span class="token punctuation">,</span>字段<span class="token punctuation">,</span>字段<span class="token punctuation">]</span> <span class="token keyword">from</span> a <span class="token punctuation">[</span><span class="token keyword">inner</span><span class="token punctuation">]</span> <span class="token keyword">join</span> b <span class="token keyword">on</span> 连接条件 <span class="token punctuation">[</span> <span class="token keyword">where</span> 其它条件<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外连接查询" tabindex="-1"><a class="header-anchor" href="#外连接查询" aria-hidden="true">#</a> 外连接查询</h3><p>我们发现<strong>内连接查询出来的是满足连接条件的公共部分</strong>， 如果要保证查询出某张表的全部数据情况下进行连接查询. 那么就要使用外连接查询了. 外连接分为左外连接和右外连接</p><h4 id="左外连接" tabindex="-1"><a class="header-anchor" href="#左外连接" aria-hidden="true">#</a> 左外连接</h4><h5 id="a" tabindex="-1"><a class="header-anchor" href="#a" aria-hidden="true">#</a> A</h5><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>左边表中的所有数据</strong>，右边表中与左表关联数据（左边有右边没有的使用NULL填充）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> 字段 <span class="token keyword">from</span> 表<span class="token number">1</span> <span class="token keyword">left</span> <span class="token keyword">outer</span> <span class="token keyword">join</span> 表<span class="token number">2</span> <span class="token keyword">on</span> 关联条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="a-a∩b" tabindex="-1"><a class="header-anchor" href="#a-a∩b" aria-hidden="true">#</a> A-A∩B</h5><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>左表特有的数据</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> 字段 <span class="token keyword">from</span> 表<span class="token number">1</span> <span class="token keyword">left</span> <span class="token keyword">outer</span> <span class="token keyword">join</span> 表<span class="token number">2</span> <span class="token keyword">on</span> 关联条件 <span class="token keyword">where</span> 右表<span class="token punctuation">.</span><span class="token keyword">key</span> <span class="token operator">=</span> <span class="token boolean">NULL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="右外连接" tabindex="-1"><a class="header-anchor" href="#右外连接" aria-hidden="true">#</a> 右外连接</h4><h5 id="b" tabindex="-1"><a class="header-anchor" href="#b" aria-hidden="true">#</a> B</h5><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>右边表中的所有数据</strong>，左边表中与右表关联数据（右边有左边没有的使用NULL填充）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> 字段 <span class="token keyword">from</span> 表<span class="token number">1</span> <span class="token keyword">right</span> <span class="token keyword">outer</span> <span class="token keyword">join</span> 表<span class="token number">2</span> <span class="token keyword">on</span> 关联条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="b-a∩b" tabindex="-1"><a class="header-anchor" href="#b-a∩b" aria-hidden="true">#</a> B-A∩B</h5><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>右表特有的数据</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> 字段 <span class="token keyword">from</span> 表<span class="token number">1</span> <span class="token keyword">right</span> <span class="token keyword">outer</span> <span class="token keyword">join</span> 表<span class="token number">2</span> <span class="token keyword">on</span> 关联条件 <span class="token keyword">where</span>  左表<span class="token punctuation">.</span><span class="token keyword">key</span> <span class="token operator">=</span> <span class="token boolean">NULL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="union联合查询" tabindex="-1"><a class="header-anchor" href="#union联合查询" aria-hidden="true">#</a> union联合查询</h3><p>UNION 操作符用于合并两个或多个 SELECT 语句的结果集。</p><h5 id="a∪b" tabindex="-1"><a class="header-anchor" href="#a∪b" aria-hidden="true">#</a> A∪B</h5><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以使用UNION关键字将左外联和右外联合并起来</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="a∪b-a∩b" tabindex="-1"><a class="header-anchor" href="#a∪b-a∩b" aria-hidden="true">#</a> A∪B - A∩B</h5><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以使用UNION关键字将左独和右独合并起来</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="自连接查询" tabindex="-1"><a class="header-anchor" href="#自连接查询" aria-hidden="true">#</a> 自连接查询</h3><p><strong>自连接查询是一种特殊的多表连接查询，因为两个关联查询的表是同一张表，通过取别名的方式来虚拟成两张表，然后进行两张表的连接查询</strong></p><p>例如：查询员工的编号，姓名，薪资和他领导的编号，姓名，薪资</p><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">//将emp表分别以别名的方式声明employee员工 manager 领导</span>
<span class="token comment">//将employee.mgr = manager.id关联</span>
<span class="token keyword">SELECT</span> employee<span class="token punctuation">.</span>id <span class="token string">&#39;员工编号&#39;</span><span class="token punctuation">,</span>employee<span class="token punctuation">.</span>ename <span class="token string">&#39;员工姓名&#39;</span><span class="token punctuation">,</span>
employee<span class="token punctuation">.</span>salary <span class="token string">&#39;员工薪资&#39;</span><span class="token punctuation">,</span>manager<span class="token punctuation">.</span>id <span class="token string">&#39;领导编号&#39;</span><span class="token punctuation">,</span>
manager<span class="token punctuation">.</span>ename <span class="token string">&#39;领导姓名&#39;</span><span class="token punctuation">,</span>manager<span class="token punctuation">.</span>salary <span class="token string">&#39;领导薪资&#39;</span> 
<span class="token keyword">FROM</span> emp employee<span class="token punctuation">,</span>emp manager <span class="token keyword">WHERE</span> employee<span class="token punctuation">.</span>mgr <span class="token operator">=</span> manager<span class="token punctuation">.</span>id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询" aria-hidden="true">#</a> 子查询</h2><p>如果一个查询语句嵌套在另一个查询语句里面，那么这个查询语句就称之为子查询，根据位置不同，分为：where型，from型，exists型。注意：不管子查询在哪里，子查询必须使用()括起来。</p><h3 id="子查询的分类" tabindex="-1"><a class="header-anchor" href="#子查询的分类" aria-hidden="true">#</a> 子查询的分类</h3><h4 id="where型" tabindex="-1"><a class="header-anchor" href="#where型" aria-hidden="true">#</a> WHERE型</h4><p>子查询是单值结果，那么可以对其使用（=，&gt;等比较运算符）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 查询价格最高的商品信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t_product <span class="token keyword">where</span> price <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token keyword">from</span> t_product<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>子查询是多值结果，那么可对其使用（【not】in(子查询结果)，或 &gt;all(子查询结果)，或&gt;=all(子查询结果)，&lt;all(子查询结果)，&lt;=all（子查询结果)，或 &gt;any(子查询结果)，或&gt;=any(子查询结果)，&lt;any(子查询结果)，&lt;=any（子查询结果)）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 查询价格最高的商品信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> t_product <span class="token keyword">WHERE</span> price <span class="token operator">&gt;=</span><span class="token keyword">ALL</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> price <span class="token keyword">FROM</span> t_product<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="from型" tabindex="-1"><a class="header-anchor" href="#from型" aria-hidden="true">#</a> FROM型</h4><p>子查询的结果是多行多列的结果，类似于一张表格。</p><p>必须给子查询取别名，即临时表名，表的别名不要加“”和空格。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 思路一: 使用连接查询</span>
<span class="token comment">-- 使用外连接，查询出分类表的所有数据</span>
<span class="token keyword">SELECT</span> tc<span class="token punctuation">.</span>cname<span class="token punctuation">,</span><span class="token function">COUNT</span><span class="token punctuation">(</span>tp<span class="token punctuation">.</span>pid<span class="token punctuation">)</span> <span class="token keyword">FROM</span> t_category tc <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> t_product tp <span class="token keyword">ON</span> tp<span class="token punctuation">.</span>cno <span class="token operator">=</span> tc<span class="token punctuation">.</span>cid <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> tc<span class="token punctuation">.</span>cname

<span class="token comment">-- 思路二: 使用子查询</span>
<span class="token comment">-- 第一步:对t_product根据cno进行分组查询，统计每个分类的商品数量</span>
<span class="token keyword">SELECT</span> cno<span class="token punctuation">,</span><span class="token function">COUNT</span><span class="token punctuation">(</span>pid<span class="token punctuation">)</span> <span class="token keyword">FROM</span> t_product <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> cno
<span class="token comment">-- 第二步: 用t_category表去连接第一步查询出来的结果，进行连接查询,此时要求查询出所有的分类</span>
<span class="token keyword">SELECT</span> tc<span class="token punctuation">.</span>cname<span class="token punctuation">,</span>IFNULL<span class="token punctuation">(</span>tn<span class="token punctuation">.</span>total<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token string">&#39;总数量&#39;</span> <span class="token keyword">FROM</span> t_category tc <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> cno<span class="token punctuation">,</span><span class="token function">COUNT</span><span class="token punctuation">(</span>pid<span class="token punctuation">)</span> total <span class="token keyword">FROM</span> t_product <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> cno<span class="token punctuation">)</span> tn <span class="token keyword">ON</span> tn<span class="token punctuation">.</span>cno<span class="token operator">=</span>tc<span class="token punctuation">.</span>cid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="exists型" tabindex="-1"><a class="header-anchor" href="#exists型" aria-hidden="true">#</a> EXISTS型</h4><p>用于检查子查询是否至少会返回一行数据，该子查询实际上并不返回任何数据，而是返回值True或False</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 查询那些有商品的分类</span>
<span class="token keyword">SELECT</span> cid<span class="token punctuation">,</span>cname <span class="token keyword">FROM</span> t_category tc <span class="token keyword">WHERE</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> t_product tp <span class="token keyword">WHERE</span> tp<span class="token punctuation">.</span>cno <span class="token operator">=</span> tc<span class="token punctuation">.</span>cid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子查询的复制操作" tabindex="-1"><a class="header-anchor" href="#子查询的复制操作" aria-hidden="true">#</a> 子查询的复制操作</h3><h4 id="复制表" tabindex="-1"><a class="header-anchor" href="#复制表" aria-hidden="true">#</a> 复制表</h4><h5 id="拷贝表结构" tabindex="-1"><a class="header-anchor" href="#拷贝表结构" aria-hidden="true">#</a> 拷贝表结构</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> newadmin <span class="token operator">LIKE</span> admin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="拷贝表结构和数据-但约束与索引除外" tabindex="-1"><a class="header-anchor" href="#拷贝表结构和数据-但约束与索引除外" aria-hidden="true">#</a> 拷贝表结构和数据（但约束与索引除外）</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> newadmin <span class="token keyword">AS</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> admin <span class="token punctuation">)</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="拷贝表结构-数据" tabindex="-1"><a class="header-anchor" href="#拷贝表结构-数据" aria-hidden="true">#</a> 拷贝表结构+数据</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> newadmin <span class="token operator">LIKE</span> admin<span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> newadmin <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> admin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="跨数据库拷贝表" tabindex="-1"><a class="header-anchor" href="#跨数据库拷贝表" aria-hidden="true">#</a> 跨数据库拷贝表</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> newadmin <span class="token operator">LIKE</span> shop<span class="token punctuation">.</span>admin<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> newshop<span class="token punctuation">.</span>newadmin <span class="token operator">LIKE</span> shop<span class="token punctuation">.</span>admin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="拷贝一个表中其中的一些字段-指定新名-其中一些数据" tabindex="-1"><a class="header-anchor" href="#拷贝一个表中其中的一些字段-指定新名-其中一些数据" aria-hidden="true">#</a> 拷贝一个表中其中的一些字段（指定新名），其中一些数据</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> newadmin <span class="token keyword">AS</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> id<span class="token punctuation">,</span> username <span class="token keyword">AS</span> uname<span class="token punctuation">,</span> password <span class="token keyword">AS</span> pass <span class="token keyword">FROM</span> admin <span class="token keyword">WHERE</span> id<span class="token operator">&lt;</span><span class="token number">10</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="在创建表的同时定义表中的字段信息。" tabindex="-1"><a class="header-anchor" href="#在创建表的同时定义表中的字段信息。" aria-hidden="true">#</a> 在创建表的同时定义表中的字段信息。</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> tt<span class="token punctuation">(</span>eid <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token punctuation">(</span><span class="token keyword">select</span> employee_id <span class="token keyword">as</span> eid<span class="token punctuation">,</span>first_name<span class="token punctuation">,</span>last_name<span class="token punctuation">,</span>email <span class="token keyword">from</span> employees<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="复制数据" tabindex="-1"><a class="header-anchor" href="#复制数据" aria-hidden="true">#</a> 复制数据</h4><p>在 INSERT 语句中加入子查询，不必书写 VALUES 子句。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">//方法一</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> emp2 <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token number">90</span><span class="token punctuation">;</span>

<span class="token comment">//方法二</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> sales_reps<span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> salary<span class="token punctuation">,</span> commission_pct<span class="token punctuation">)</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> salary<span class="token punctuation">,</span> commission_pct
<span class="token keyword">FROM</span>   employees
<span class="token keyword">WHERE</span>  job_id <span class="token operator">LIKE</span> <span class="token string">&#39;%REP%&#39;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,108),_=[w];function E(x,q){return n(),s("div",null,_)}const R=a(f,[["render",E],["__file","DQL（多表）.html.vue"]]);export{R as default};
