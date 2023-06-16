import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-54a62cbe.js";const t={},p=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>为防止不符合规范的数据存入数据库，在用户对数据进行插入、修改、删除等操作时，MySQL提供了一种机制来检查数据库中的数据是否满足规定的条件，以保证数据库中数据的准确性和一致性，这种机制就是完整性约束。</p><table><thead><tr><th>约束条件</th><th>约束条件</th></tr></thead><tbody><tr><td>PRIMARY KEY</td><td>主键约束，约束字段的值可唯一地标识对应的记录</td></tr><tr><td>NOT NULL</td><td>非空约束，约束字段的值不能为空</td></tr><tr><td>UNIQUE</td><td>唯一约束，约束字段的值是唯一的</td></tr><tr><td>CHECK</td><td>检查约束，限制某个字段的取值范围</td></tr><tr><td>DEFAULT</td><td>默认值约束，约束字段的默认值</td></tr><tr><td>AUTO_INCREMENT</td><td>自动增加约束，约束字段的值自动递增</td></tr><tr><td>FOREIGN KEY</td><td>外键约束，约束表与表之间的关系</td></tr></tbody></table><p>MySQL中主要支持以下几种种完整性约束，如表所示。 其中Check约束是MySQL8中提供的支持。</p><h2 id="查看约束" tabindex="-1"><a class="header-anchor" href="#查看约束" aria-hidden="true">#</a> 查看约束</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span>table_constraints <span class="token keyword">WHERE</span> table_name <span class="token operator">=</span> <span class="token string">&#39;表名称&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名<span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> <span class="token keyword">INDEX</span> <span class="token keyword">FROM</span> 表名称<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="约束的命名规则" tabindex="-1"><a class="header-anchor" href="#约束的命名规则" aria-hidden="true">#</a> 约束的命名规则</h2><p>数据库名：<strong>与系统名相同</strong><br> 表名：<strong>系统名称缩写_表名</strong>（表名必须描述该表的用途，由单个或多个名词组成，首字母小写，后续单词首字母大写）<br> 字段名：<strong>字段名必须描述该字段的用途，由单个或多个名词组成，单词之间用下划线连接</strong><br> 主键字段：<strong>表名+Id</strong><br> 外键字段：<strong>与主表主键字段完全一样</strong><br> 主键：<strong>pk_表名</strong><br> 外键：<strong>fk_从表名_主表名</strong><br> 视图：<strong>view_名称</strong><br> 存储过程：<strong>prcd_名称</strong><br> 函数：<strong>fun_名称</strong><br> 触发器：<strong>trg_名称</strong><br> 索引：<strong>idx_名称</strong></p><h2 id="主键约束-primary-key" tabindex="-1"><a class="header-anchor" href="#主键约束-primary-key" aria-hidden="true">#</a> 主键约束 PRIMARY KEY</h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p>创建表，要设计主键，要把一些字段作为主键（<strong>可以是一个字段[单一主键]，也可以是多个字段[复合主键]</strong>），表示这个字段值<strong>非空的，唯一的</strong></p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><ol><li>主键约束相当于<strong>唯一约束</strong>+<strong>非空约束</strong>的组合，主键约束列**不允许重复，也不允许出现空值 ，如果是多列组合的主键约束，那么这些列都不允许为空值，并且组合的值不允许重复。</li><li><strong>每个表有且最多只允许一个主键约束</strong>。</li><li>MySQL的主键名总是PRIMARY， 就算自己命名了主键约束名也没用。</li><li><strong>当创建主键约束时， MySQL默认在对应的列上建立主键索引。删除主键时， 也会直接删除主键索引</strong>。</li></ol><h3 id="创建表时创建" tabindex="-1"><a class="header-anchor" href="#创建表时创建" aria-hidden="true">#</a> 创建表时创建</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#创建单一主键方式一</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> users<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
  sname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">#创建单一主键方式二</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> person<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span><span class="token punctuation">,</span>
  NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">#创建复合主键方式</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> book<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span><span class="token punctuation">,</span>
  bname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  bno <span class="token keyword">INT</span><span class="token punctuation">,</span>
 <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>bno<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建表后" tabindex="-1"><a class="header-anchor" href="#创建表后" aria-hidden="true">#</a> 创建表后</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#创建主键约束</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">ADD</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">#创建主键约束并命名</span>
<span class="token comment">-- ALTER TABLE 表名 ADD CONSTRAINT PK_约束名 PRIMARY KEY(字段列名);</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> PK_student <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">#注意：在使用复合主键时可以设置多个字段列名</span>
<span class="token comment">-- ALTER TABLE 表名 ADD CONSTRAINT PK_约束名 PRIMARY KEY(字段列名1,字段列名2);</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> PK_student <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>grade<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> 唯一性约束名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="唯一约束-unique-key" tabindex="-1"><a class="header-anchor" href="#唯一约束-unique-key" aria-hidden="true">#</a> 唯一约束 Unique key</h2><h3 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1" aria-hidden="true">#</a> 概念</h3><p>与主键绑定，指向与主键的关系</p><h3 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1" aria-hidden="true">#</a> 特点</h3><ol><li>同一个表可以有多个唯一约束</li><li>唯一约束可以是某一和列的值唯一，也可以多个列组合值的唯一</li><li>MySQL会给唯一约束的列上默认创建一个唯一索引</li><li>删除唯一键只能通过删除唯一索引的方式删除，删除时需要指定唯一索引名，唯一索引名就是唯一约束名一样。如果创建唯一约束时未指定名称，如果是单列，就默认和列名相同，如果是组合列，那么默认和0中排在第一个的列名相同。也可以自定义唯一性约束名。</li></ol><h3 id="创建表时创建-1" tabindex="-1"><a class="header-anchor" href="#创建表时创建-1" aria-hidden="true">#</a> 创建表时创建</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> b <span class="token punctuation">(</span>
uid <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
uname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">UNIQUE</span><span class="token punctuation">,</span>
age <span class="token keyword">INT</span> <span class="token keyword">CHECK</span><span class="token punctuation">(</span>age<span class="token operator">&gt;</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
hobby <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;123&#39;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建表后-1" tabindex="-1"><a class="header-anchor" href="#创建表后-1" aria-hidden="true">#</a> 创建表后</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#创建唯一约束</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">ADD</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">#创建唯一约束并命名</span>
<span class="token comment">--ALTER TABLE 表名 ADD CONSTRAINT PK_约束名 PRIMARY KEY(字段列名);</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> UK_student <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

注意：在使用复合键时可以设置多个字段列名
<span class="token comment">--ALTER TABLE 表名 ADD CONSTRAINT PK_约束名 UNIQUE KEY(字段列名1,字段列名2);</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> UK_student <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>grade<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除-1" tabindex="-1"><a class="header-anchor" href="#删除-1" aria-hidden="true">#</a> 删除</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> 唯一性约束名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="外键约束-foreign-key" tabindex="-1"><a class="header-anchor" href="#外键约束-foreign-key" aria-hidden="true">#</a> 外键约束 Foreign Key</h2><p><strong>实际开发中，我们在创建表的时候，一般外键不声明出来，把他作为关联使用就行了</strong></p><h3 id="概念-2" tabindex="-1"><a class="header-anchor" href="#概念-2" aria-hidden="true">#</a> 概念</h3><p>在遵循三范式的前提下，很多时候我们必须要进行拆表，将数据分别存放在多张表中，以减少冗余数据。但是拆分出来的表与表之间是有着关联关系的，我们必须得通过一种约束来约定表与表之间的关系，这种约束就是外键约束。</p><p>外键约束是保证一个或两个表之间的参照完整性,外键是构建于一个表的两个字段或是两个表的两个字段之间的参照关系。</p><h3 id="特点-2" tabindex="-1"><a class="header-anchor" href="#特点-2" aria-hidden="true">#</a> 特点</h3><p>外键保障数据的完整性和一致性</p><h3 id="创建表时创建-2" tabindex="-1"><a class="header-anchor" href="#创建表时创建-2" aria-hidden="true">#</a> 创建表时创建</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> b <span class="token punctuation">(</span>
uid <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
uname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">UNIQUE</span><span class="token punctuation">,</span>
age <span class="token keyword">INT</span> <span class="token keyword">CHECK</span><span class="token punctuation">(</span>age<span class="token operator">&gt;</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
hobby <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>
<span class="token keyword">FOREIGN</span> KET<span class="token punctuation">(</span>fname<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> cls<span class="token punctuation">(</span>cid<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在建表后" tabindex="-1"><a class="header-anchor" href="#在建表后" aria-hidden="true">#</a> 在建表后</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 从表名称 <span class="token keyword">add</span> <span class="token punctuation">[</span><span class="token keyword">constraint</span> 外键约束名<span class="token punctuation">]</span> <span class="token keyword">foreign</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>从表字段名<span class="token punctuation">)</span> <span class="token keyword">references</span> 主表名<span class="token punctuation">(</span>主表被参照字段名<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token keyword">on</span> <span class="token keyword">update</span> xx<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token keyword">on</span> <span class="token keyword">delete</span> xx<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除-2" tabindex="-1"><a class="header-anchor" href="#删除-2" aria-hidden="true">#</a> 删除</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> 唯一性约束名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果使用了外键约束的表，删除数据时，需要先删除从表再删除主表，或者尝试一下方式执行更新：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 策略1：no action 不允许操作</span>
<span class="token comment">-- 通过操作sql来完成：</span>
<span class="token comment">-- 先把班级2的学生对应的班级 改为null </span>
<span class="token keyword">update</span> t_student <span class="token keyword">set</span> classno <span class="token operator">=</span> <span class="token boolean">null</span> <span class="token keyword">where</span> classno <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token comment">-- 然后再删除班级2：</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> t_class <span class="token keyword">where</span> cno <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>


<span class="token comment">-- 策略2：cascade 级联操作：操作主表的时候影响从表的外键信息：</span>
<span class="token comment">-- 先删除之前的外键约束：</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> t_student <span class="token keyword">drop</span> <span class="token keyword">foreign</span> <span class="token keyword">key</span> fk_stu_classno<span class="token punctuation">;</span>
<span class="token comment">-- 重新添加外键约束：</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> t_student <span class="token keyword">add</span> <span class="token keyword">constraint</span> fk_stu_classno <span class="token keyword">foreign</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>classno<span class="token punctuation">)</span> <span class="token keyword">references</span> t_class <span class="token punctuation">(</span>cno<span class="token punctuation">)</span> <span class="token keyword">on</span> <span class="token keyword">update</span> <span class="token keyword">cascade</span> <span class="token keyword">on</span> <span class="token keyword">delete</span> <span class="token keyword">cascade</span><span class="token punctuation">;</span>
<span class="token comment">-- 试试更新：</span>
<span class="token keyword">update</span> t_class <span class="token keyword">set</span> cno <span class="token operator">=</span> <span class="token number">5</span> <span class="token keyword">where</span> cno <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token comment">-- 试试删除：</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> t_class <span class="token keyword">where</span> cno <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>


<span class="token comment">-- 策略3：set null  置空操作：</span>
<span class="token comment">-- 先删除之前的外键约束：</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> t_student <span class="token keyword">drop</span> <span class="token keyword">foreign</span> <span class="token keyword">key</span> fk_stu_classno<span class="token punctuation">;</span>
<span class="token comment">-- 重新添加外键约束：</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> t_student <span class="token keyword">add</span> <span class="token keyword">constraint</span> fk_stu_classno <span class="token keyword">foreign</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>classno<span class="token punctuation">)</span> <span class="token keyword">references</span> t_class <span class="token punctuation">(</span>cno<span class="token punctuation">)</span> <span class="token keyword">on</span> <span class="token keyword">update</span> <span class="token keyword">set</span> <span class="token boolean">null</span> <span class="token keyword">on</span> <span class="token keyword">delete</span> <span class="token keyword">set</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
<span class="token comment">-- 试试更新：</span>
<span class="token keyword">update</span> t_class <span class="token keyword">set</span> cno <span class="token operator">=</span> <span class="token number">8</span> <span class="token keyword">where</span> cno <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">-- 注意：</span>
<span class="token comment">-- 1. 策略2 级联操作  和  策略2 的  删除操作  可以混着使用：</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> t_student <span class="token keyword">add</span> <span class="token keyword">constraint</span> fk_stu_classno <span class="token keyword">foreign</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>classno<span class="token punctuation">)</span> <span class="token keyword">references</span> t_class <span class="token punctuation">(</span>cno<span class="token punctuation">)</span> <span class="token keyword">on</span> <span class="token keyword">update</span> <span class="token keyword">cascade</span> <span class="token keyword">on</span> <span class="token keyword">delete</span> <span class="token keyword">set</span> <span class="token boolean">null</span> <span class="token punctuation">;</span>

<span class="token comment">-- 2.应用场合：</span>
<span class="token comment">-- （1）朋友圈删除，点赞。留言都删除  --  级联操作</span>
<span class="token comment">-- （2）解散班级，对应的学生 置为班级为null就可以了，-- set null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外键约束的要求" tabindex="-1"><a class="header-anchor" href="#外键约束的要求" aria-hidden="true">#</a> 外键约束的要求</h3><ul><li>在从表上建立外键，而且主表要先存在。</li><li>一个表可以建立多个外键约束</li><li>通常情况下，从表的外键列一定要指向主表的主键列</li><li>从表的外键列与主表被参照的列名字可以不相同，但是数据类型必须一样</li></ul><h3 id="外键约束等级" tabindex="-1"><a class="header-anchor" href="#外键约束等级" aria-hidden="true">#</a> 外键约束等级</h3><ul><li><strong>Cascade方式</strong>：在主表上update/delete记录时，同步update/delete掉从表的匹配记录</li><li><strong>Set null方式</strong>：在主表上update/delete记录时，将从表上匹配记录的列设为null，但是要注意子表的外键列不能为not null</li><li><strong>No action方式</strong>：如果子表中有匹配的记录,则不允许对父表对应候选键进行update/delete操作</li><li><strong>Restrict方式</strong>：同no action, 都是立即检查外键约束</li><li><strong>Set default方式 (在可视化工具SQLyog中可能显示空白）</strong>：父表有变更时,子表将外键列设置成一个默认的值，但Innodb不能识别。如果没有指定等级，就相当于Restrict方式</li></ul><h2 id="非空约束-not-null" tabindex="-1"><a class="header-anchor" href="#非空约束-not-null" aria-hidden="true">#</a> 非空约束 NOT NULL</h2><h3 id="概念-3" tabindex="-1"><a class="header-anchor" href="#概念-3" aria-hidden="true">#</a> 概念</h3><p>表示当前字段不能为空</p><p>无论是单个字段还是多个字段非空约束的添加只能使用列级约束（非空约束无表级约束）</p><h3 id="创建表时创建-3" tabindex="-1"><a class="header-anchor" href="#创建表时创建-3" aria-hidden="true">#</a> 创建表时创建</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> b <span class="token punctuation">(</span>
uid <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
uname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">UNIQUE</span><span class="token punctuation">,</span>
age <span class="token keyword">INT</span> <span class="token keyword">CHECK</span><span class="token punctuation">(</span>age<span class="token operator">&gt;</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
hobby <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>
<span class="token keyword">FOREIGN</span> KET<span class="token punctuation">(</span>fname<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> cls<span class="token punctuation">(</span>cid<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建表后-2" tabindex="-1"><a class="header-anchor" href="#创建表后-2" aria-hidden="true">#</a> 创建表后</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 表明 <span class="token keyword">modify</span> 字段名 字段类型 <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span> <span class="token comment">//添加非空约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表明 <span class="token keyword">modify</span> 字段名 字段类型 <span class="token boolean">null</span><span class="token punctuation">;</span> <span class="token comment">//取消</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除-3" tabindex="-1"><a class="header-anchor" href="#删除-3" aria-hidden="true">#</a> 删除</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> 唯一性约束名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="自增-auto-increment" tabindex="-1"><a class="header-anchor" href="#自增-auto-increment" aria-hidden="true">#</a> 自增 AUTO_INCREMENT</h2><h3 id="概念-4" tabindex="-1"><a class="header-anchor" href="#概念-4" aria-hidden="true">#</a> 概念</h3><p>表示当前字段依次递增，通常与主键一起使用</p><h3 id="创建表时创建-4" tabindex="-1"><a class="header-anchor" href="#创建表时创建-4" aria-hidden="true">#</a> 创建表时创建</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> b <span class="token punctuation">(</span>
	uid <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
	uname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">UNIQUE</span><span class="token punctuation">,</span>
	age <span class="token keyword">INT</span> <span class="token keyword">CHECK</span><span class="token punctuation">(</span>age<span class="token operator">&gt;</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	hobby <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>
	<span class="token keyword">FOREIGN</span> KET<span class="token punctuation">(</span>fname<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> cls<span class="token punctuation">(</span>cid<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建表后-3" tabindex="-1"><a class="header-anchor" href="#创建表后-3" aria-hidden="true">#</a> 创建表后</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">modify</span> 字段名 字段类型 <span class="token keyword">auto_increment</span><span class="token punctuation">;</span> <span class="token comment">//添加自增</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">modify</span> 字段名 字段类型<span class="token punctuation">;</span><span class="token comment">//取消自增</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除-4" tabindex="-1"><a class="header-anchor" href="#删除-4" aria-hidden="true">#</a> 删除</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> 唯一性约束名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="检查约束-check" tabindex="-1"><a class="header-anchor" href="#检查约束-check" aria-hidden="true">#</a> 检查约束 CHECK</h2><h3 id="概念-5" tabindex="-1"><a class="header-anchor" href="#概念-5" aria-hidden="true">#</a> 概念</h3><p>在添加数据的时候，被标记的字段需要符合约束限定</p><h3 id="创建表时创建-5" tabindex="-1"><a class="header-anchor" href="#创建表时创建-5" aria-hidden="true">#</a> 创建表时创建</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> b <span class="token punctuation">(</span>
	uid <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
	uname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">UNIQUE</span><span class="token punctuation">,</span>
	age <span class="token keyword">INT</span> <span class="token keyword">CHECK</span><span class="token punctuation">(</span>age<span class="token operator">&gt;</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	hobby <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>
	<span class="token keyword">FOREIGN</span> KET<span class="token punctuation">(</span>fname<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> cls<span class="token punctuation">(</span>cid<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除-5" tabindex="-1"><a class="header-anchor" href="#删除-5" aria-hidden="true">#</a> 删除</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> 唯一性约束名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="默认约束-default" tabindex="-1"><a class="header-anchor" href="#默认约束-default" aria-hidden="true">#</a> 默认约束 Default</h2><h3 id="概念-6" tabindex="-1"><a class="header-anchor" href="#概念-6" aria-hidden="true">#</a> 概念</h3><p>在插入数据的时候如果没有对约束定义的字段赋值，则使用默认的字段进行赋值</p><h3 id="创建表时创建-6" tabindex="-1"><a class="header-anchor" href="#创建表时创建-6" aria-hidden="true">#</a> 创建表时创建</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> b <span class="token punctuation">(</span>
	uid <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
	uname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">UNIQUE</span><span class="token punctuation">,</span>
	age <span class="token keyword">INT</span> <span class="token keyword">CHECK</span><span class="token punctuation">(</span>age<span class="token operator">&gt;</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	hobby <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>
	<span class="token keyword">FOREIGN</span> KET<span class="token punctuation">(</span>fname<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> cls<span class="token punctuation">(</span>cid<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除-6" tabindex="-1"><a class="header-anchor" href="#删除-6" aria-hidden="true">#</a> 删除</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> 唯一性约束名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,82),o=[p];function l(c,d){return s(),a("div",null,o)}const k=n(t,[["render",l],["__file","约束策略.html.vue"]]);export{k as default};
