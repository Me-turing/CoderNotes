import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as l,f as i}from"./app-a48529f7.js";const n={},d=i(`<h2 id="jstl核心标签库" tabindex="-1"><a class="header-anchor" href="#jstl核心标签库" aria-hidden="true">#</a> JSTL核心标签库</h2><h3 id="认识jstl" tabindex="-1"><a class="header-anchor" href="#认识jstl" aria-hidden="true">#</a> 认识JSTL</h3><h4 id="为什么要学习jstl" tabindex="-1"><a class="header-anchor" href="#为什么要学习jstl" aria-hidden="true">#</a> 为什么要学习JSTL</h4><p>通过之前的案例我们发现,就算在JSP中可以使用EL表达式取出域对象中的数据,但是仍然避免不了还是要在页面中书写一些java代码.这种嵌入JAVA代码的处理比较繁琐,容易出错,且代码不容易维护.</p><h4 id="什么是jstl" tabindex="-1"><a class="header-anchor" href="#什么是jstl" aria-hidden="true">#</a> 什么是JSTL</h4><p><code>JSTL（Java server pages standarded tag library，即JSP标准标签库）</code>是由JCP（Java community Proces）所制定的标准规范，它主要提供给Java Web开发人员一个标准通用的标签库，并由Apache的Jakarta小组来维护。</p><h4 id="使用jstl的好处" tabindex="-1"><a class="header-anchor" href="#使用jstl的好处" aria-hidden="true">#</a> 使用JSTL的好处</h4><p>开发人员可以利用JSTL和EL来开发Web程序，取代传统直接在页面上嵌入Java程序的做法，以提高程序的阅读性、维护性和方便性。在jstl中, 提供了多套标签库, 用于方便在jsp中完成或简化相关操作.</p><h3 id="jstl标签库的组成部分" tabindex="-1"><a class="header-anchor" href="#jstl标签库的组成部分" aria-hidden="true">#</a> JSTL标签库的组成部分</h3><ul><li>核心标签库: <code>core</code>, 简称c</li><li>格式化标签库: <code>format</code>, 简称fmt</li><li>函数标签库: <code>function</code>, 简称fn</li></ul><h3 id="jstl的使用前提" tabindex="-1"><a class="header-anchor" href="#jstl的使用前提" aria-hidden="true">#</a> JSTL的使用前提</h3><ol><li>需要在项目中导入<code>jstl-1.2.jar</code> ,<code>jstl</code>在后台由java代码编写, <code>jsp</code>页面中通过标签进行使用, 使用标签时, 会自动调用后台的java方法,</li><li>标签和方法之间的映射关系在对应的<code>tld</code>文件中描述. 需要在页面中通过<code>taglib</code>指令引入对应的标签库, <code>uri</code>可以在对应的<code>tld</code>文件中找到</li></ol><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@  taglib uri=&quot;标签库的定位&quot; prefix=&quot;前缀(简称)&quot; %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="jstl的使用" tabindex="-1"><a class="header-anchor" href="#jstl的使用" aria-hidden="true">#</a> JSTL的使用</h3><h4 id="导入核心标签库" tabindex="-1"><a class="header-anchor" href="#导入核心标签库" aria-hidden="true">#</a> 导入核心标签库</h4><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot;%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="操作域对象的标签" tabindex="-1"><a class="header-anchor" href="#操作域对象的标签" aria-hidden="true">#</a> 操作域对象的标签</h4><table><thead><tr><th style="text-align:left;">&lt;c:set&gt;</th><th style="text-align:left;">向域对象中放入数据</th><th style="text-align:left;">setAttribute</th></tr></thead><tbody><tr><td style="text-align:left;">&lt;c:out&gt;</td><td style="text-align:left;">从域对象中取出数据</td><td style="text-align:left;">getAttribute</td></tr><tr><td style="text-align:left;">&lt;c:remove&gt;</td><td style="text-align:left;">从域对象中移除数据</td><td style="text-align:left;">removeAttribute</td></tr></tbody></table><h5 id="向域对象放入值" tabindex="-1"><a class="header-anchor" href="#向域对象放入值" aria-hidden="true">#</a> 向域对象放入值</h5><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
 &lt;%--分别向四个域中放入数据--%&gt;
 &lt;%--
	 历史写法
	 &lt;% request.setAttribute(&quot;msg&quot;, &quot;requestMessage&quot;); %&gt;
 --%&gt;
&lt;%--
    c:set
        scope 指定放数据的域 可选值 page request session application
        var   数据的名称
        value 数据
--%&gt;
&lt;c:set scope=&quot;page&quot; var=&quot;msg&quot; value=&quot;pageMessage&quot;&gt;&lt;/c:set&gt;
&lt;c:set scope=&quot;request&quot; var=&quot;msg&quot; value=&quot;requestMessage&quot;&gt;&lt;/c:set&gt;
&lt;c:set scope=&quot;session&quot; var=&quot;msg&quot; value=&quot;sessionMessage&quot;&gt;&lt;/c:set&gt;
&lt;c:set scope=&quot;application&quot; var=&quot;msg&quot; value=&quot;applicationMessage&quot;&gt;&lt;/c:set&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="移除对象中的值" tabindex="-1"><a class="header-anchor" href="#移除对象中的值" aria-hidden="true">#</a> 移除对象中的值</h5><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;%--移除指定域中的值--%&gt;
&lt;c:remove var=&quot;msg&quot; scope=&quot;page&quot;&gt;&lt;/c:remove&gt;
&lt;c:remove var=&quot;msg&quot; scope=&quot;request&quot;&gt;&lt;/c:remove&gt;
&lt;c:remove var=&quot;msg&quot; scope=&quot;session&quot;&gt;&lt;/c:remove&gt;
&lt;c:remove var=&quot;msg&quot; scope=&quot;application&quot;&gt;&lt;/c:remove&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="获取域对象中的值" tabindex="-1"><a class="header-anchor" href="#获取域对象中的值" aria-hidden="true">#</a> 获取域对象中的值</h5><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;%--通过EL表达式取出域中的值--%&gt;
&lt;hr/&gt;
\${pageScope.msg}&lt;br/&gt;
\${requestScope.msg}&lt;br/&gt;
\${sessionScope.msg}&lt;br/&gt;
\${applicationScope.msg }&lt;br/&gt;
&lt;hr/&gt;
&lt;%--通过c:out标签获取域中的值--%&gt;
&lt;c:out value=&quot;\${pageScope.msg}&quot; default=&quot;page msg not found&quot;/&gt;
&lt;c:out value=&quot;\${requestScope.msg}&quot; default=&quot;request msg not found&quot;/&gt;
&lt;c:out value=&quot;\${sessionScope.msg}&quot; default=&quot;session msg not found&quot;/&gt;
&lt;c:out value=&quot;\${applicationScope.msg}&quot; default=&quot;application msg not found&quot;/&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多条件分支标签" tabindex="-1"><a class="header-anchor" href="#多条件分支标签" aria-hidden="true">#</a> 多条件分支标签</h4><h5 id="c-if-标签" tabindex="-1"><a class="header-anchor" href="#c-if-标签" aria-hidden="true">#</a> c:if 标签</h5><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page import=&quot;java.util.Random&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%--
    随机生成一个分数  
    0-100
    &gt;=90 A
    &gt;=80 B
    &gt;=70 C
    &gt;=60 D
    &lt;60  E
    --%&gt;
    &lt;%
        int score =new Random().nextInt(101);
        pageContext.setAttribute(&quot;score&quot;, score);
    %&gt;
    &lt;%--
    test  判断条件
    c:if可以将test的结果放入指定的域中
    scope 指定存放的域
    var   数据名
    --%&gt;
    分数:\${score}&lt;br/&gt; 等级:
    &lt;c:if test=&quot;\${score ge 90}&quot; scope=&quot;page&quot; var=&quot;f1&quot;&gt;A&lt;/c:if&gt;
    &lt;c:if test=&quot;\${score ge 80 and score lt 90}&quot; scope=&quot;page&quot; var=&quot;f2&quot;&gt;B&lt;/c:if&gt;
    &lt;c:if test=&quot;\${score ge 70 and score lt 80}&quot; scope=&quot;page&quot; var=&quot;f3&quot;&gt;C&lt;/c:if&gt;
    &lt;c:if test=&quot;\${score ge 60 and score lt 70}&quot; scope=&quot;page&quot; var=&quot;f4&quot;&gt;D&lt;/c:if&gt;
    &lt;c:if test=&quot;\${score lt 60}&quot; scope=&quot;page&quot; var=&quot;f5&quot;&gt;E&lt;/c:if&gt;
    &lt;hr/&gt;
    \${f1}
    \${f2}
    \${f3}
    \${f4}
    \${f5}
    &lt;hr/&gt;
    &lt;%--输出分数是否及格--%&gt;
    &lt;c:if test=&quot;\${score ge 60}&quot; scope=&quot;page&quot; var=&quot;flag&quot;&gt;及格&lt;/c:if&gt;
    &lt;c:if test=&quot;\${!pageScope.flag}&quot;&gt;不及格&lt;/c:if&gt;
    &lt;hr/&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="c-choose标签" tabindex="-1"><a class="header-anchor" href="#c-choose标签" aria-hidden="true">#</a> c:choose标签</h5><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page import=&quot;java.util.Random&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%--
    随机生成一个分数  0-100
    &gt;=90 A
    &gt;=80 B
    &gt;=70 C
    &gt;=60 D
    &lt;60  E
    --%&gt;
    &lt;%
        int score =new Random().nextInt(101);
        pageContext.setAttribute(&quot;score&quot;, score);
    %&gt;
    &lt;c:choose&gt;
        &lt;c:when test=&quot;\${score ge 90}&quot;&gt;A&lt;/c:when&gt;
        &lt;c:when test=&quot;\${score ge 80}&quot;&gt;B&lt;/c:when&gt;
        &lt;c:when test=&quot;\${score ge 70}&quot;&gt;C&lt;/c:when&gt;
        &lt;c:when test=&quot;\${score ge 60}&quot;&gt;D&lt;/c:when&gt;
        &lt;c:otherwise&gt;E&lt;/c:otherwise&gt;
    &lt;/c:choose&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="迭代标签" tabindex="-1"><a class="header-anchor" href="#迭代标签" aria-hidden="true">#</a> 迭代标签</h4><h5 id="c-foreach标签" tabindex="-1"><a class="header-anchor" href="#c-foreach标签" aria-hidden="true">#</a> c:foreach标签</h5><p>遍历指定次数: 打印九九乘法表</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%--
    for ( int i =1;i&lt;=9 ;i+=2){
        pageContext.setAttribute(&quot;i&quot;,i)
    }
    c:foreach 每次执时都会向page域中放入一个名为 i 值为当前值这样的一个操作
    
	c:forEach中的属性
		var: 迭代变量, 存放在pageContext作用域
		begin: 迭代起始值
		end: 迭代结束值
		step: 迭代变量变化的步长
    --%&gt;
    &lt;c:forEach var=&quot;i&quot; begin=&quot;1&quot; end=&quot;9&quot; step=&quot;1&quot;&gt;
        &lt;c:forEach var=&quot;j&quot; begin=&quot;1&quot; end=&quot;\${i}&quot; step=&quot;1&quot;&gt;
            \${j} * \${i} = \${i*j} &amp;nbsp;
        &lt;/c:forEach&gt;
        &lt;br/&gt;
    &lt;/c:forEach&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>便利对象数组/List</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;style&gt;
        table{
            border: 3px solid blue;
            width: 90%;
            margin: 0px auto;
        }
        td,th{
            border: 2px solid green;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;table cellspacing=&quot;0px&quot; cellpadding=&quot;0px&quot;&gt;
        &lt;tr&gt;
            &lt;th&gt;序号&lt;/th&gt;
            &lt;th&gt;索引&lt;/th&gt;
            &lt;th&gt;isFirst&lt;/th&gt;
            &lt;th&gt;isLast&lt;/th&gt;
            &lt;th&gt;工号&lt;/th&gt;
            &lt;th&gt;姓名&lt;/th&gt;
            &lt;th&gt;姓名&lt;/th&gt;
            &lt;th&gt;上级编号&lt;/th&gt;
            &lt;th&gt;职务&lt;/th&gt;
            &lt;th&gt;入职日期&lt;/th&gt;
            &lt;th&gt;薪资&lt;/th&gt;
            &lt;th&gt;补助&lt;/th&gt;
            &lt;th&gt;部门号&lt;/th&gt;
            &lt;th&gt;薪资等级&lt;/th&gt;
        &lt;/tr&gt;
        &lt;%--&lt;%
        List&lt;Emp&gt; emps = (List&lt;Emp&gt;) request.getAttribute(&quot;emps&quot;);
        for (Emp emp : emps) {
            pageContext.setAttribute(&quot;emp&quot;, emp);//将员工对象放入PageContext 域
        %&gt;
        c:foreach
            items 要遍历的数组/List  可以通过EL表达式取出集合之后给改属性赋值
            var   中间变量的名称
            varStatus 记录每一个对象状态的设置
                   count 个数
                   index 索引
                   first 如果当前元素是迭代的第一个元素 true 否则为false
                   last  如果当前元素是迭代的最后一个元素 true 否则为false
                   current 当前迭代的元素本身
        --%&gt;
        &lt;c:forEach items=&quot;\${emps}&quot; var=&quot;emp&quot; varStatus=&quot;empStatus&quot;&gt;
            &lt;tr&gt;
                &lt;td&gt;\${empStatus.count}&lt;/td&gt;
                &lt;td&gt;\${empStatus.index}&lt;/td&gt;
                &lt;td&gt;\${empStatus.first}&lt;/td&gt;
                &lt;td&gt;\${empStatus.last}&lt;/td&gt;
                &lt;td&gt;\${emp.empno}&lt;/td&gt;
                &lt;td&gt;\${emp.ename}&lt;/td&gt;
                &lt;td&gt;\${empStatus.current.ename}&lt;/td&gt;
                &lt;td&gt;\${emp.mgr}&lt;/td&gt;
                &lt;td&gt;\${emp.job}&lt;/td&gt;
                &lt;td&gt;\${emp.hiredate}&lt;/td&gt;
                &lt;td&gt;\${emp.sal}&lt;/td&gt;
                &lt;td&gt;\${emp.comm}&lt;/td&gt;
                &lt;td&gt;\${emp.deptno}&lt;/td&gt;
                &lt;td&gt;
                   &lt;c:choose&gt;
                       &lt;c:when test=&quot;\${emp.sal le 500}&quot;&gt;A&lt;/c:when&gt;
                       &lt;c:when test=&quot;\${emp.sal le 1000}&quot;&gt;B&lt;/c:when&gt;
                       &lt;c:when test=&quot;\${emp.sal le 1500}&quot;&gt;C&lt;/c:when&gt;
                       &lt;c:when test=&quot;\${emp.sal le 2000}&quot;&gt;D&lt;/c:when&gt;
                       &lt;c:when test=&quot;\${emp.sal le 3000}&quot;&gt;E&lt;/c:when&gt;
                       &lt;c:when test=&quot;\${emp.sal le 4000}&quot;&gt;F&lt;/c:when&gt;
                       &lt;c:when test=&quot;\${emp.sal gt 4000}&quot;&gt;G&lt;/c:when&gt;
                   &lt;/c:choose&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/c:forEach&gt;
    &lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jstl格式化标签" tabindex="-1"><a class="header-anchor" href="#jstl格式化标签" aria-hidden="true">#</a> JSTL格式化标签</h2><h3 id="格式化标签库" tabindex="-1"><a class="header-anchor" href="#格式化标签库" aria-hidden="true">#</a> 格式化标签库</h3><p>格式化标签库,也叫作<strong>fmt标签</strong>,是<strong>JTSL中的第二大组成部分</strong>,主要解决数据显示格式问题,<strong>让JSP页面的数据格式更加规范</strong></p><h3 id="导入语句" tabindex="-1"><a class="header-anchor" href="#导入语句" aria-hidden="true">#</a> 导入语句</h3><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ taglib prefix=&quot;fmt&quot; uri=&quot;http://java.sun.com/jsp/jstl/fmt&quot;%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="fmt标签属性" tabindex="-1"><a class="header-anchor" href="#fmt标签属性" aria-hidden="true">#</a> fmt标签属性</h3><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">描述</th><th style="text-align:left;">是否必要</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">要显示的数字</td><td style="text-align:left;">是</td><td style="text-align:left;">无</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">NUMBER，CURRENCY，或 PERCENT类型</td><td style="text-align:left;">否</td><td style="text-align:left;">Number</td></tr><tr><td style="text-align:left;">pattern</td><td style="text-align:left;">指定一个自定义的格式化模式用与输出  </td><td style="text-align:left;">否</td><td style="text-align:left;">无</td></tr><tr><td style="text-align:left;">currencyCode</td><td style="text-align:left;">货币码（当type=&quot;currency&quot;时）</td><td style="text-align:left;">否</td><td style="text-align:left;">取决于默认区域</td></tr><tr><td style="text-align:left;">currencySymbol</td><td style="text-align:left;">货币符号 (当 type=&quot;currency&quot;时)</td><td style="text-align:left;">否</td><td style="text-align:left;">取决于默认区域</td></tr><tr><td style="text-align:left;">groupingUsed</td><td style="text-align:left;">是否对数字分组 (TRUE 或 FALSE)</td><td style="text-align:left;">否</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">groupingUsed</td><td style="text-align:left;"><div>整型数最大的位数</div></td><td style="text-align:left;">否</td><td style="text-align:left;">无</td></tr><tr><td style="text-align:left;">maxIntegerDigits</td><td style="text-align:left;">整型数最大的位数</td><td style="text-align:left;">否</td><td style="text-align:left;">无</td></tr><tr><td style="text-align:left;">minIntegerDigits</td><td style="text-align:left;">整型数最小的位数</td><td style="text-align:left;">否</td><td style="text-align:left;">无</td></tr><tr><td style="text-align:left;">maxFractionDigits</td><td style="text-align:left;">小数点后最大的位数</td><td style="text-align:left;">否</td><td style="text-align:left;">无</td></tr><tr><td style="text-align:left;">minFractionDigits</td><td style="text-align:left;">小数点后最小的位数</td><td style="text-align:left;">否</td><td style="text-align:left;">无</td></tr><tr><td style="text-align:left;">var</td><td style="text-align:left;">存储格式化数字的变量</td><td style="text-align:left;">否</td><td style="text-align:left;">Print to page</td></tr><tr><td style="text-align:left;">scope</td><td style="text-align:left;">var属性的作用域</td><td style="text-align:left;">否</td><td style="text-align:left;">page</td></tr></tbody></table><p>如果type属性为<code>percent</code>或<code>number</code>，那么您就可以使用其它几个格式化数字属性。<br><code>maxIntegerDigits</code>属性和<code>minIntegerDigits</code>属性允许您指定整数的长度。若实际数字超过了<strong>maxIntegerDigits所指定的最大值，则数字将会被截断</strong></p><p>有一些属性允许您指定小数点后的位数。<code>minFractionalDigits</code>属性和<code>maxFractionalDigits</code>属性允许您指定小数点后的位数。<strong>若实际的数字超出了所指定的范围，则这个数字会被截断。</strong></p><p>数字分组可以用来在每三个数字中插入一个逗号。<code>groupingIsUsed</code>属性用来指定是否使用数字分组。当与<code>minIntegerDigits</code>属性一同使用时，<strong>就必须要很小心地来获取预期的结果了。</strong></p><p>您或许会使用<code>pattern</code>属性。<strong>这个属性可以让您在对数字编码时包含指定的字符</strong>。接下来的表格中列出了这些字符。</p><table><thead><tr><th style="text-align:left;">符号</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;">代表一位数字</td></tr><tr><td style="text-align:left;">E</td><td style="text-align:left;"><div>使用指数格式</div></td></tr><tr><td style="text-align:left;">#</td><td style="text-align:left;">代表一位数字，若没有则显示 0，前导 0 和追尾 0 不显示</td></tr><tr><td style="text-align:left;">.</td><td style="text-align:left;">小数点</td></tr><tr><td style="text-align:left;">,</td><td style="text-align:left;">数字分组分隔符</td></tr><tr><td style="text-align:left;">;</td><td style="text-align:left;">分隔格式</td></tr><tr><td style="text-align:left;">;</td><td style="text-align:left;">使用默认负数前缀</td></tr><tr><td style="text-align:left;">%</td><td style="text-align:left;">百分数</td></tr><tr><td style="text-align:left;">?</td><td style="text-align:left;">千分数</td></tr><tr><td style="text-align:left;"><span style="background-color:var(--background-primary);color:var(--text-normal);font-family:var(--font-interface);font-size:var(--default-font-size, 16px);font-weight:var(--body-font-weight, normal);">¤</span></td><td style="text-align:left;">货币符号，使用实际的货币符号代替</td></tr><tr><td style="text-align:left;">X</td><td style="text-align:left;">指定可以作为前缀或后缀的字符</td></tr><tr><td style="text-align:left;">&amp;apos;</td><td style="text-align:left;">在前缀或后缀中引用特殊字符</td></tr></tbody></table><h3 id="日期格式化" tabindex="-1"><a class="header-anchor" href="#日期格式化" aria-hidden="true">#</a> 日期格式化</h3><p>日期格式化标签是fmt标签中专门用于处理日期格式的标签</p><p><code>&lt;fmt:formatDate&gt;</code>标签有如下属性：</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">描述</th><th style="text-align:left;">是否必要</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">要显示的日期</td><td style="text-align:left;">是</td><td style="text-align:left;">无</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">DATE, TIME, 或 BOTH</td><td style="text-align:left;">否</td><td style="text-align:left;">date</td></tr><tr><td style="text-align:left;">dateStyle</td><td style="text-align:left;">FULL, LONG, MEDIUM, SHORT, 或 DEFAULT</td><td style="text-align:left;">否</td><td style="text-align:left;">default</td></tr><tr><td style="text-align:left;">timeStyle</td><td style="text-align:left;">FULL, LONG, MEDIUM, SHORT, 或 DEFAULT</td><td style="text-align:left;">否</td><td style="text-align:left;">default</td></tr><tr><td style="text-align:left;">pattern</td><td style="text-align:left;">自定义格式模式</td><td style="text-align:left;">否</td><td style="text-align:left;">无</td></tr><tr><td style="text-align:left;">timeZone</td><td style="text-align:left;">显示日期的时区</td><td style="text-align:left;">否</td><td style="text-align:left;">默认时区</td></tr><tr><td style="text-align:left;">var</td><td style="text-align:left;">存储格式化日期的变量名</td><td style="text-align:left;">否</td><td style="text-align:left;">显示在页面</td></tr><tr><td style="text-align:left;">scope</td><td style="text-align:left;">存储格式化日志变量的范围</td><td style="text-align:left;">否</td><td style="text-align:left;">页面</td></tr></tbody></table><p><code>&lt;fmt:formatDate&gt;</code>标签格式模式</p><table><thead><tr><th style="text-align:left;">代码</th><th style="text-align:left;">描述</th><th style="text-align:left;">实例</th></tr></thead><tbody><tr><td style="text-align:left;">G</td><td style="text-align:left;">时代标志</td><td style="text-align:left;">AD</td></tr><tr><td style="text-align:left;">y</td><td style="text-align:left;">不包含纪元的年份。如果不包含纪元的年份小于 10，则显示不具有前导零的年份。</td><td style="text-align:left;">2023</td></tr><tr><td style="text-align:left;">M</td><td style="text-align:left;">月份数字。一位数的月份没有前导零。</td><td style="text-align:left;">April &amp; 04</td></tr><tr><td style="text-align:left;">d</td><td style="text-align:left;">月中的某一天。一位数的日期没有前导零。</td><td style="text-align:left;">20</td></tr><tr><td style="text-align:left;">h</td><td style="text-align:left;">12 小时制的小时。一位数的小时数没有前导零。</td><td style="text-align:left;">12</td></tr><tr><td style="text-align:left;">H</td><td style="text-align:left;">24 小时制的小时。一位数的小时数没有前导零。</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">m</td><td style="text-align:left;">分钟。一位数的分钟数没有前导零。</td><td style="text-align:left;">45</td></tr><tr><td style="text-align:left;">s</td><td style="text-align:left;">秒。一位数的秒数没有前导零。</td><td style="text-align:left;">52</td></tr><tr><td style="text-align:left;">S</td><td style="text-align:left;">毫秒</td><td style="text-align:left;">970</td></tr><tr><td style="text-align:left;">E</td><td style="text-align:left;">周几</td><td style="text-align:left;">Tuesday</td></tr><tr><td style="text-align:left;">D</td><td style="text-align:left;">一年中的第几天</td><td style="text-align:left;">180</td></tr><tr><td style="text-align:left;">F</td><td style="text-align:left;"><div>一个月中的第几个周几</div></td><td style="text-align:left;">2 (一个月中的第二个星期三)</td></tr><tr><td style="text-align:left;">w</td><td style="text-align:left;">一年中的第几周r</td><td style="text-align:left;">27</td></tr><tr><td style="text-align:left;">W</td><td style="text-align:left;">一个月中的第几周</td><td style="text-align:left;">2</td></tr><tr><td style="text-align:left;">a</td><td style="text-align:left;">a.m./p.m. 指示符</td><td style="text-align:left;">PM</td></tr><tr><td style="text-align:left;">k</td><td style="text-align:left;">小时(12 小时制的小时)</td><td style="text-align:left;">24</td></tr><tr><td style="text-align:left;">K</td><td style="text-align:left;">小时(24 小时制的小时)</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">z</td><td style="text-align:left;">时区</td><td style="text-align:left;">中部标准时间</td></tr><tr><td style="text-align:left;">&amp;apos;</td><td style="text-align:left;"></td><td style="text-align:left;">转义文本</td></tr><tr><td style="text-align:left;">&amp;apos;&amp;apos;</td><td style="text-align:left;"></td><td style="text-align:left;">单引号</td></tr></tbody></table><h3 id="格式化标签案例开发" tabindex="-1"><a class="header-anchor" href="#格式化标签案例开发" aria-hidden="true">#</a> 格式化标签案例开发</h3><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;%@ taglib prefix=&quot;fmt&quot; uri=&quot;http://java.sun.com/jsp/jstl/fmt&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;style&gt;
        table{
            border: 3px solid blue;
            width: 90%;
            margin: 0px auto;
        }
        td,th{
            border: 2px solid green;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;table cellspacing=&quot;0px&quot; cellpadding=&quot;0px&quot;&gt;
        &lt;tr&gt;
            &lt;th&gt;序号&lt;/th&gt;
            &lt;th&gt;索引&lt;/th&gt;
            &lt;th&gt;isFirst&lt;/th&gt;
            &lt;th&gt;isLast&lt;/th&gt;
            &lt;th&gt;工号&lt;/th&gt;
            &lt;th&gt;姓名&lt;/th&gt;
            &lt;th&gt;姓名&lt;/th&gt;
            &lt;th&gt;上级编号&lt;/th&gt;
            &lt;th&gt;职务&lt;/th&gt;
            &lt;th&gt;入职日期&lt;/th&gt;
            &lt;th&gt;薪资&lt;/th&gt;
            &lt;th&gt;补助&lt;/th&gt;
            &lt;th&gt;部门号&lt;/th&gt;
            &lt;th&gt;薪资等级&lt;/th&gt;
        &lt;/tr&gt;
        &lt;%--&lt;%
        List&lt;Emp&gt; emps = (List&lt;Emp&gt;) request.getAttribute(&quot;emps&quot;);
        for (Emp emp : emps) {
            pageContext.setAttribute(&quot;emp&quot;, emp);//将员工对象放入PageContext 域
        %&gt;
        c:foreach
            items 要遍历的数组/List  可以通过EL表达式取出集合之后给改属性赋值
            var   中间变量的名称
            varStatus 记录每一个对象状态的设置
                   count 个数
                   index 索引
                   first 如果当前元素是迭代的第一个元素 true 否则为false
                   last  如果当前元素是迭代的最后一个元素 true 否则为false
                   current 当前迭代的元素本身
        --%&gt;
        &lt;c:forEach items=&quot;\${emps}&quot; var=&quot;emp&quot; varStatus=&quot;empStatus&quot;&gt;
            &lt;tr&gt;
                &lt;td&gt;\${empStatus.count}&lt;/td&gt;
                &lt;td&gt;\${empStatus.index}&lt;/td&gt;
                &lt;td&gt;\${empStatus.first}&lt;/td&gt;
                &lt;td&gt;\${empStatus.last}&lt;/td&gt;
                &lt;td&gt;\${emp.empno}&lt;/td&gt;
                &lt;td&gt;\${emp.ename}&lt;/td&gt;
                &lt;td&gt;\${empStatus.current.ename}&lt;/td&gt;
                &lt;td&gt;\${emp.mgr}&lt;/td&gt;
                &lt;td&gt;\${emp.job}&lt;/td&gt;
                &lt;td&gt;
                    &lt;fmt:formatDate value=&quot;\${emp.hiredate}&quot; pattern=&quot;yyyy年MM月dd日 HH:mm:ss&quot;/&gt;
                &lt;/td&gt;
                &lt;td&gt;
                    &lt;%--
                    0 代表必须有一位数字,如果对应的位置没有值怎么办?自动补充0
                    # 代表有一位数字,开头和结尾的所有的0不保留
                    --%&gt;
                        &amp;yen;&lt;fmt:formatNumber value=&quot;\${emp.sal}&quot; pattern=&quot;###,##0.00&quot;/&gt;
                &lt;/td&gt;
                &lt;td&gt;\${emp.comm}&lt;/td&gt;
                &lt;td&gt;\${emp.deptno}&lt;/td&gt;
                &lt;td&gt;
                   &lt;c:choose&gt;
                       &lt;c:when test=&quot;\${emp.sal le 500}&quot;&gt;A&lt;/c:when&gt;
                       &lt;c:when test=&quot;\${emp.sal le 1000}&quot;&gt;B&lt;/c:when&gt;
                       &lt;c:when test=&quot;\${emp.sal le 1500}&quot;&gt;C&lt;/c:when&gt;
                       &lt;c:when test=&quot;\${emp.sal le 2000}&quot;&gt;D&lt;/c:when&gt;
                       &lt;c:when test=&quot;\${emp.sal le 3000}&quot;&gt;E&lt;/c:when&gt;
                       &lt;c:when test=&quot;\${emp.sal le 4000}&quot;&gt;F&lt;/c:when&gt;
                       &lt;c:when test=&quot;\${emp.sal gt 4000}&quot;&gt;G&lt;/c:when&gt;
                   &lt;/c:choose&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/c:forEach&gt;
    &lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55),s=[d];function a(r,u){return e(),l("div",null,s)}const g=t(n,[["render",a],["__file","JSTL.html.vue"]]);export{g as default};
