<template><div><figure><img src="@source/CoderNotes/01_JavaSE阶段/B_进阶/03_集合/01_前言/image/image_ZKGATqGzW6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="什么是算法和数据结构" tabindex="-1"><a class="header-anchor" href="#什么是算法和数据结构" aria-hidden="true">#</a> 什么是算法和数据结构</h2>
<h3 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h3>
<ol>
<li>可以解决具体问题：解题流程 = 算法</li>
<li>有设计解决的具体的流程：不同的解题思路</li>
<li>有评价这个算法的具体指标：时间复杂度、空间复杂度</li>
</ol>
<h3 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h3>
<p>就是在计算机的缓存，内存，硬盘  如何组织管理数据的。重点在结构上，是按照什么结构来组织管理我们的数据。</p>
<h4 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h4>
<ul>
<li>逻辑结构：思想上的结构<br>
线性表（数组，链表），图，树，栈，队列</li>
<li>物理结构：真实结构<br>
紧密结构（顺序结构），跳转结构（链式结构）</li>
</ul>
<h4 id="紧密结构-顺序结构-与-跳转结构-链式结构" tabindex="-1"><a class="header-anchor" href="#紧密结构-顺序结构-与-跳转结构-链式结构" aria-hidden="true">#</a> 紧密结构（顺序结构）与   跳转结构（链式结构）</h4>
<p>以线性表为例：</p>
<ul>
<li><strong>结构逻辑图</strong></li>
</ul>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/B_进阶/03_集合/01_前言/assets/image_Gl61HOkFGl.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li><strong>结构特点</strong><br>
线性表是n个类型<code v-pre>相同数据元素</code>的有限<code v-pre>序列</code>，通常记作a0,a1,,,ai-1,ai,ai+1,,,,,an-1)。
<ul>
<li><strong>相同数据类型</strong><br>
在线性表的定义中,我们看到从a0到an-1的n个数据元素是具有相同属件的亓素。<br>
比如说可以都是数字,例如(12,23,45,56,45);<br>
也可以是宇符,例如(A,B,....Z)<br>
当然也可以是具有更复杂结构的数据元素,例如学生、商品、装备等。<br>
相同数据类型意味着在内存中存储时,每个元素会占用相同的内存空间,便于后续的查询定位。</li>
<li><strong>有限</strong><br>
在线性表的定义中,我们看到从a0到an-1的n个数据元素是具有相同属件的亓素。<br>
比如说可以都是数字,例如(12,23,45,56,45);<br>
也可以是宇符,例如(A,B,....Z)<br>
当然也可以是具有更复杂结构的数据元素,例如学生、商品、装备等。<br>
相同数据类型意味着在内存中存储时,每个元素会占用相同的内存空间,便于后续的查询定位。</li>
<li><strong>序列（顺序性）</strong><br>
在线性表的相邻数据元素之间存在若序偶关系，<br>
即ai-1是ai的直接前驱,则ai是ai-1的直接后续,<br>
同时ai又是ai+1的直接前驱，ai+1是ai的直接后续。<br>
唯一没有直接前驱的元素a0 一端称为表头,唯一没有后续的元素an-1一端称为表尾。<br>
除了表头和表尾元素外,任何一个元素都有且仅有一个直接前驱和直接后继。</li>
</ul>
</li>
</ul>
<h4 id="逻辑结构和物理结构" tabindex="-1"><a class="header-anchor" href="#逻辑结构和物理结构" aria-hidden="true">#</a> 逻辑结构和物理结构</h4>
<p>线性表逻辑结构，对应的真实结构如果是紧密结构---》典型就是  <strong><code v-pre>数组</code></strong></p>
<ul>
<li>数组<br>
<img src="@source/CoderNotes/01_JavaSE阶段/B_进阶/03_集合/01_前言/image/image_NxZHVNfzNz.png" alt="" loading="lazy"><br>
优点：<strong>查询元素效率高</strong><br>
缺点：<strong>删除元素，插入元素效率低</strong><br>
线性表逻辑结构，对应的真实结构如果是跳转结构---》典型就是  <strong><code v-pre>链表</code></strong></li>
<li>单向链表<br>
<img src="@source/CoderNotes/01_JavaSE阶段/B_进阶/03_集合/01_前言/image/image_sAuokus_Sp.png" alt="" loading="lazy"></li>
<li>双向链表<br>
<img src="@source/CoderNotes/01_JavaSE阶段/B_进阶/03_集合/01_前言/image/image_gqpXXFl8KX.png" alt="" loading="lazy"></li>
<li>循环链表<br>
<img src="@source/CoderNotes/01_JavaSE阶段/B_进阶/03_集合/01_前言/image/image_mF4OjcOkbQ.png" alt="" loading="lazy"><br>
优点：<strong>删除元素，插入元素效率高</strong><br>
缺点：<strong>查询元素效率低</strong></li>
</ul>
<h2 id="集合的引入" tabindex="-1"><a class="header-anchor" href="#集合的引入" aria-hidden="true">#</a> 集合的引入</h2>
<p>数组，集合都是对多个数据进行存储操作的，简称为容器。<br>
PS:这里的存储指的是内存层面的存储，而不是持久化存储（.txt,.avi,.jpg,数据库）</p>
<ul>
<li>
<p>特点：<br>
（1）数组一旦指定了长度，那么长度就被确定了，不可以更改。<br>
（2）数组一旦声明了类型以后，数组中只能存放这个类型的数据。数组中只能存放同一种类型的数据。</p>
</li>
<li>
<p>缺点：<br>
（1）数组一旦指定了长度，那么长度就被确定了，不可以更改。<br>
（2）删除，增加元素  效率低。<br>
（3）数组中实际元素的数量是没有办法获取的，没有提供对应的方法或者属性来获取<br>
（4）数组存储：有序，可重复 ，对于无序的，不可重复的数组不能满足要求。</p>
</li>
</ul>
<p>正因为上面的缺点，引入了一个新的存储数据的结构---》<strong><code v-pre>集合</code></strong><br>
不同集合底层数据结构不一样。<strong><code v-pre>集合不一样，特点也不一样</code></strong></p>
<h2 id="集合结构图" tabindex="-1"><a class="header-anchor" href="#集合结构图" aria-hidden="true">#</a> 集合结构图</h2>
<h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2>
<figure><img src="@source/CoderNotes/01_JavaSE阶段/B_进阶/03_集合/01_前言/image/image__29hjJ7vyl.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


