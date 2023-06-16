<template><div><h1 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h1>
<h2 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h2>
<p>搜索当前文件: CTRL+F<br>
搜索整个文件夹: CTRL+Shift+F</p>
<h2 id="搜索面板" tabindex="-1"><a class="header-anchor" href="#搜索面板" aria-hidden="true">#</a> 搜索面板</h2>
<figure><img src="@source/doc/01_JavaSE阶段/C_开发必备工具/04_Obsidian/assets/Pasted_image_20230325220222.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="搜索的技巧" tabindex="-1"><a class="header-anchor" href="#搜索的技巧" aria-hidden="true">#</a> 搜索的技巧</h2>
<ul>
<li>直接搜索</li>
<li>搜索多个关键词
<ul>
<li>空格分隔 : 都包含</li>
<li>OR : 只包含其中一个</li>
<li>
<ul>
<li>: 非 包含一个但不包含另一个</li>
</ul>
</li>
</ul>
</li>
<li>搜索指定范围
<ul>
<li>搜索文件名: file:word</li>
<li>搜索文件内容: content:word</li>
<li>搜索标签: tag:word</li>
<li>搜索同一行的多个关键词: line:word1 word2</li>
<li>搜索同意章节中的多个关键词: section:word1 word2</li>
<li>搜索同一段落(块)中的多个关键词 block:word1 word2</li>
</ul>
</li>
<li>搜索任务
<ul>
<li>搜索任务: task:&quot;&quot;</li>
<li>搜索未完成任务: task-todo:&quot;&quot;</li>
<li>搜索已完成任务: task-done:&quot;&quot;</li>
</ul>
</li>
<li>保存查询结果
<ul>
<li>代码 query<br>
<img src="@source/doc/01_JavaSE阶段/C_开发必备工具/04_Obsidian/assets/Pasted_image_20230325221848.png" alt="" loading="lazy"></li>
</ul>
</li>
</ul>
<h1 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h1>
<p>将你的资料库作为一个数据库,使用语法进行查询</p>
<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2>
<p>Obsidian资料库的查询</p>
<ul>
<li>查询对象: Obsidian资料库</li>
<li>查询依据: YAML数据/Meatainfo(元数据)</li>
</ul>
<h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h2>
<ul>
<li>什么时候使用搜索
<ul>
<li>条件单一</li>
<li>无需保存结果</li>
</ul>
</li>
<li>什么时候使用查询
<ul>
<li>条件复杂</li>
<li>需要保存结果</li>
</ul>
</li>
</ul>
<h2 id="yaml" tabindex="-1"><a class="header-anchor" href="#yaml" aria-hidden="true">#</a> YAML</h2>
<ul>
<li>位于Markdown文件开头</li>
<li>首尾三个-<br>
<img src="@source/doc/01_JavaSE阶段/C_开发必备工具/04_Obsidian/assets/Pasted_image_20230325225139.png" alt="" loading="lazy"></li>
<li>Obsidian支持的YAML字段
<ul>
<li>tags: 标签</li>
<li>publish: 出版</li>
<li>cssclass: 分类</li>
<li>aliases: 别名</li>
</ul>
</li>
<li>自定义字段
<ul>
<li>category: 范围</li>
<li>date: 日期</li>
<li>time: 时间</li>
<li>title: 标题</li>
<li>raling: 评分</li>
</ul>
</li>
<li>创建模板<br>
<img src="@source/doc/01_JavaSE阶段/C_开发必备工具/04_Obsidian/assets/Pasted_image_20230325225810.png" alt="" loading="lazy"><br>
<img src="@source/doc/01_JavaSE阶段/C_开发必备工具/04_Obsidian/assets/Pasted_image_20230325225824.png" alt="" loading="lazy"></li>
<li>行内标记
<ul>
<li>One Field:Value</li>
<li>这分文档可以打[rating::5] 分</li>
</ul>
</li>
<li>Obsidian的文件属性
<ul>
<li><a href="http://file.name" target="_blank" rel="noopener noreferrer">file.name<ExternalLinkIcon/></a>: 文件标题(字符串)</li>
<li>file.folder: 文件所属文件夹路径</li>
<li>file.path: 文件路径</li>
<li>file.size: (in bytes) 文件大小</li>
<li>file.ctime: 文件的创建时间（包含日期和时间）</li>
<li>file.mtime: 文件的修改时间</li>
<li>file.cday: 文件创建的日期</li>
<li>file.mday: 文件修改的日期</li>
<li>file.tags: 笔记中所有标签数组</li>
<li>file.etags: 除去子标签的数组</li>
<li>file.inlinks: 指向此文件的所有传入链接的数组</li>
<li>file.outlinks: 此文件所有出站的链接数组</li>
<li>file.aliases: 文件别名数组</li>
<li>file.day：如果文件名中有日期，那么会以这个字段显示。比如文 件名中包含 yyyy-mm-dd（年-月-日，例如2021-03-21），那么 就会存在这个 metadata。</li>
</ul>
</li>
<li>任务属性
<ul>
<li>Task 会继承所在文件的所有字段，比如 Task 所在的页面中已经包 含了 rating 信息了，那么 task 也会有</li>
<li>completed: 任务是否完成</li>
<li>fullyCompleted: 任务以及所有的子任务是否完成</li>
<li>text: 任务名</li>
<li>line: task 所在行</li>
<li>path: task 所在路径</li>
<li>section: 连接到任务所在区块</li>
<li>link: 连接到距离任务最近的可连接的区块</li>
<li>subtasks: 子任务</li>
<li>real: 如果为</li>
<li>true, 则是一个真正的任务，否则就是一个任务之前 或之后的元素列表</li>
<li>completion: 任务完成的日期</li>
<li>due: 任务到期时间</li>
<li>created: 创建日期</li>
<li>annotated: 如果任务有自定义标记则为 True，否则为 False</li>
</ul>
</li>
<li>DataView
<ul>
<li>展示方式
<ul>
<li>Table</li>
<li>List</li>
<li>Task</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="dataview语法" tabindex="-1"><a class="header-anchor" href="#dataview语法" aria-hidden="true">#</a> DataView语法</h2>
<p>基本和SQL的语法一致<br>
<img src="@source/doc/01_JavaSE阶段/C_开发必备工具/04_Obsidian/assets/Pasted_image_20230325230124.png" alt="" loading="lazy"></p>
<h3 id="简单的查询语法" tabindex="-1"><a class="header-anchor" href="#简单的查询语法" aria-hidden="true">#</a> 简单的查询语法</h3>
<p><img src="@source/doc/01_JavaSE阶段/C_开发必备工具/04_Obsidian/assets/Pasted_image_20230325223753.png" alt="" loading="lazy"><br>
<img src="@source/doc/01_JavaSE阶段/C_开发必备工具/04_Obsidian/assets/Pasted_image_20230325223820.png" alt="" loading="lazy"></p>
<h3 id="带条件的查询" tabindex="-1"><a class="header-anchor" href="#带条件的查询" aria-hidden="true">#</a> 带条件的查询</h3>
<p><img src="@source/doc/01_JavaSE阶段/C_开发必备工具/04_Obsidian/assets/Pasted_image_20230325225219.png" alt="" loading="lazy"><br>
<img src="@source/doc/01_JavaSE阶段/C_开发必备工具/04_Obsidian/assets/Pasted_image_20230325225231.png" alt="" loading="lazy"></p>
<h3 id="进阶查询" tabindex="-1"><a class="header-anchor" href="#进阶查询" aria-hidden="true">#</a> 进阶查询</h3>
<p><img src="@source/doc/01_JavaSE阶段/C_开发必备工具/04_Obsidian/assets/Pasted_image_20230325230742.png" alt="" loading="lazy"><br>
<img src="@source/doc/01_JavaSE阶段/C_开发必备工具/04_Obsidian/assets/Pasted_image_20230325230751.png" alt="" loading="lazy"></p>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议" aria-hidden="true">#</a> 使用建议</h3>
<p>可以自动化创建索引<br>
可以根据标签更好的管理自己的页面</p>
<p>注意: Obsidian中使用dataview并不会影响到关系图谱</p>
</div></template>


