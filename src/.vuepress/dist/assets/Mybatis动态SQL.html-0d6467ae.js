import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as i}from"./app-54a62cbe.js";const s={},t=i(`<p>MyBatis在简化操作方法提出了动态SQL功能，将使用Java代码拼接SQL语句，改变为在XML映射文件中截止标签拼接SQL语句。相比而言，大大减少了代码量，更灵活、高度可配置、利于后期维护。</p><p>MyBatis中动态SQL是编写在mapper.xml中的，其语法和JSTL类似，但是却是基于强大的OGNL表达式实现的。</p><p>MyBatis也可以在注解中配置SQL，但是由于注解功能受限，尤其是对于复杂的SQL语句，可读性很差，所以较少使用。</p><h2 id="if标签" tabindex="-1"><a class="header-anchor" href="#if标签" aria-hidden="true">#</a> IF标签</h2><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;if test=&quot;条件1&quot;&gt;语句1&lt;/if&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果满足条件1,则会拼接语句1</p><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3><p>EmpMapper.Java接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findByCondition(Emp emp);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>EmpMapper.XML</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;select id=&quot;findByCondition&quot; resultType=&quot;emp&quot; parameterType=&quot;emp&quot;&gt;  
    select * from emp where 1=1    
    &lt;if test=&quot;empno!=null&quot;&gt; and empno = #{empno} &lt;/if&gt;  
    &lt;if test=&quot;ename!=null and ename!=&#39;&#39; &quot;&gt; and ename = #{ename} &lt;/if&gt;  
    &lt;if test=&quot;job!=null and job!=&#39;&#39; &quot;&gt; and job = #{job} &lt;/if&gt;  
    &lt;if test=&quot;mgr!=null&quot;&gt; and mgr = #{mgr} &lt;/if&gt;  
    &lt;if test=&quot;hiredate!=null and hiredate!=&#39;&#39; &quot;&gt; and hiredate = #{hiredate} &lt;/if&gt;  
    &lt;if test=&quot;sal!=null&quot;&gt; and sal = #{sal} &lt;/if&gt;  
    &lt;if test=&quot;comm!=null&quot;&gt; and comm = #{comm} &lt;/if&gt;  
    &lt;if test=&quot;deptno!=null&quot;&gt; and deptno = #{deptno} &lt;/if&gt;  
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码一:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void findByCondition(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();   
    List&lt;Emp&gt; empList = mapper.findByCondition(emp);  
    empList.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述测试文件最终执行的语句是 : <code>select * from emp where 1=1</code></p><p>测试代码二:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void findByCondition(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();
    emp.setEmpno(7499); 
    List&lt;Emp&gt; empList = mapper.findByCondition(emp);  
    empList.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述测试文件最终执行的语句是 : <code>select * from emp where 1=1 and empno = ?</code></p><h2 id="where标签" tabindex="-1"><a class="header-anchor" href="#where标签" aria-hidden="true">#</a> WHERE标签</h2><h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h3><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;where&gt;语句块&lt;/where&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用于处理where和and:</p><ol><li>当语句块中存在语句时,会自动拼接Where</li><li>当第一个条件前带有and时,会自动处理多余的and</li></ol><h3 id="案例-1" tabindex="-1"><a class="header-anchor" href="#案例-1" aria-hidden="true">#</a> 案例</h3><p>EmpMapper.Java接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findByCondition(Emp emp);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>EmpMapper.XML</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;select id=&quot;findByCondition&quot; resultType=&quot;emp&quot; parameterType=&quot;emp&quot;&gt;  
    select * from emp    
    &lt;where&gt;  
        &lt;if test=&quot;empno!=null&quot;&gt; and empno = #{empno} &lt;/if&gt;  
        &lt;if test=&quot;ename!=null and ename!=&#39;&#39; &quot;&gt; and ename = #{ename} &lt;/if&gt;  
        &lt;if test=&quot;job!=null and job!=&#39;&#39; &quot;&gt; and job = #{job} &lt;/if&gt;  
        &lt;if test=&quot;mgr!=null&quot;&gt; and mgr = #{mgr} &lt;/if&gt;  
        &lt;if test=&quot;hiredate!=null and hiredate!=&#39;&#39; &quot;&gt; and hiredate = #{hiredate} &lt;/if&gt;  
        &lt;if test=&quot;sal!=null&quot;&gt; and sal = #{sal} &lt;/if&gt;  
        &lt;if test=&quot;comm!=null&quot;&gt; and comm = #{comm} &lt;/if&gt;  
        &lt;if test=&quot;deptno!=null&quot;&gt; and deptno = #{deptno} &lt;/if&gt;  
    &lt;/where&gt;  
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码一:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void findByCondition(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();   
    List&lt;Emp&gt; empList = mapper.findByCondition(emp);  
    empList.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述测试文件最终执行的语句是 : <code>select * from emp</code></p><p>测试代码二:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void findByCondition(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();
    emp.setEmpno(7499); 
    List&lt;Emp&gt; empList = mapper.findByCondition(emp);  
    empList.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述测试文件最终执行的语句是 : <code>select * from emp where empno = ?</code></p><h2 id="choose标签" tabindex="-1"><a class="header-anchor" href="#choose标签" aria-hidden="true">#</a> CHOOSE标签</h2><h3 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2" aria-hidden="true">#</a> 语法</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>choose</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>条件1<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>语句1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>条件2<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>语句2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>choose</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相当于Java代码中的<code>switch:case</code>,满足条件后执行指定的语句,但是后续判断的语句将不再执行</p><h3 id="案例-2" tabindex="-1"><a class="header-anchor" href="#案例-2" aria-hidden="true">#</a> 案例</h3><p>EmpMapper.Java接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findByCondition(Emp emp);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>EmpMapper.XML</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;select id=&quot;findByCondition&quot; resultType=&quot;emp&quot; parameterType=&quot;emp&quot;&gt;  
    select * from emp    
    &lt;where&gt;  
        &lt;choose&gt;  
            &lt;when test=&quot;empno!=null&quot;&gt; and empno = #{empno} &lt;/when&gt;  
            &lt;when test=&quot;ename!=null and ename!=&#39;&#39; &quot;&gt; and ename = #{ename} &lt;/when&gt;  
            &lt;when test=&quot;job!=null and job!=&#39;&#39; &quot;&gt; and job = #{job} &lt;/when&gt;  
            &lt;when test=&quot;mgr!=null&quot;&gt; and mgr = #{mgr} &lt;/when&gt;  
            &lt;when test=&quot;hiredate!=null and hiredate!=&#39;&#39; &quot;&gt; and hiredate = #{hiredate} &lt;/when&gt;  
            &lt;when test=&quot;sal!=null&quot;&gt; and sal = #{sal} &lt;/when&gt;  
            &lt;when test=&quot;comm!=null&quot;&gt; and comm = #{comm} &lt;/when&gt;  
            &lt;when test=&quot;deptno!=null&quot;&gt; and deptno = #{deptno} &lt;/when&gt;  
        &lt;/choose&gt;  
    &lt;/where&gt;  
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码一:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void findByCondition(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();   
    List&lt;Emp&gt; empList = mapper.findByCondition(emp);  
    empList.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述测试文件最终执行的语句是 : <code>select * from emp</code></p><p>测试代码二:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void findByCondition(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();
    emp.setEmpno(7499); 
    List&lt;Emp&gt; empList = mapper.findByCondition(emp);  
    empList.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述测试文件最终执行的语句是 : <code>select * from emp where empno = ?</code></p><p>测试代码三:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void findByCondition(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();
    emp.setEmpno(7499);
    emp.setEmpname(&quot;SMITH&quot;); 
    List&lt;Emp&gt; empList = mapper.findByCondition(emp);  
    empList.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述测试文件最终执行的语句是 : <code>select * from emp WHERE empno = ?</code>,因为满足了一个条件后,后续的语句都不在执行</p><h2 id="set标签" tabindex="-1"><a class="header-anchor" href="#set标签" aria-hidden="true">#</a> SET标签</h2><h3 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3" aria-hidden="true">#</a> 语法</h3><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;set&gt;语句块&lt;/set&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用于处理<code>set</code>和<code>,</code>:</p><ol><li>当语句块中存在语句时,会自动拼接set</li><li>当第一个条件前带有<code>,</code>时,会自动处理多余的<code>,</code></li></ol><h3 id="案例-3" tabindex="-1"><a class="header-anchor" href="#案例-3" aria-hidden="true">#</a> 案例</h3><p>EmpMapper.Java接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>int updateEmpByCondtion(Emp emp);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>EmpMapper.XML</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;update id=&quot;updateEmpByCondtion&quot; parameterType=&quot;emp&quot;&gt;  
    update emp        
    &lt;set&gt;  
		&lt;if test=&quot;ename!=null and ename!=&#39;&#39; &quot;&gt; , ename = #{ename} &lt;/if&gt;  
		&lt;if test=&quot;job!=null and job!=&#39;&#39; &quot;&gt; , job = #{job} &lt;/if&gt;  
		&lt;if test=&quot;mgr!=null&quot;&gt; , mgr = #{mgr} &lt;/if&gt;  
		&lt;if test=&quot;hiredate!=null and hiredate!=&#39;&#39; &quot;&gt; , hiredate = #{hiredate} &lt;/if&gt;  
		&lt;if test=&quot;sal!=null&quot;&gt; , sal = #{sal} &lt;/if&gt;  
		&lt;if test=&quot;comm!=null&quot;&gt; , comm = #{comm} &lt;/if&gt;  
		&lt;if test=&quot;deptno!=null&quot;&gt; , deptno = #{deptno} &lt;/if&gt;  
	&lt;/set&gt;  
	&lt;where&gt;  
		empno =#{empno}        
	&lt;/where&gt;  
&lt;/update&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码一:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void updateEmpByCondtion(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();  
    emp.setEmpno(8899);  
    emp.setEname(&quot;LISI&quot;);  
    emp.setMgr(1500);  
    emp.setSal(1500.0);  
    mapper.updateEmpByCondtion(emp);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述测试文件最终执行的语句是 : <code>update emp SET ename = ? , mgr = ? , sal = ? WHERE empno =? </code></p><h2 id="trim标签" tabindex="-1"><a class="header-anchor" href="#trim标签" aria-hidden="true">#</a> TRIM标签</h2><p><strong>trim</strong>标签一般用于去除sql语句中多余的and关键字，逗号，或者给sql语句前拼接 “where“、“set“以及“values(“ 等前缀，或者添加“)“等后缀，可用于选择性插入、更新、删除或者条件查询等操作。</p><h3 id="语法-4" tabindex="-1"><a class="header-anchor" href="#语法-4" aria-hidden="true">#</a> 语法</h3><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;trim prefix=&#39;拼接前缀&#39;  prefixOverrides=&#39;去除前缀&#39;  suffix=&#39;拼接后缀&#39; suffixOverrides=&#39;去除后缀&#39;&gt;语句块&lt;/trim&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>prefix 要增加什么前缀</li><li>prefixOverrides 要去除什么前缀</li><li>suffix 要增加什么后缀</li><li>suffixOverrides 要去除什么后缀</li></ol><h3 id="案例-4" tabindex="-1"><a class="header-anchor" href="#案例-4" aria-hidden="true">#</a> 案例</h3><p>EmpMapper.Java接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>int updateEmpByCondtion(Emp emp);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>EmpMapper.XML</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;update id=&quot;updateEmpByCondtion&quot; parameterType=&quot;emp&quot;&gt;  
    update emp    
    &lt;trim prefix=&quot;set&quot; suffixOverrides=&quot;,&quot;&gt;  
        &lt;if test=&quot;ename!=null and ename!=&#39;&#39; &quot;&gt; ename = #{ename} , &lt;/if&gt;  
        &lt;if test=&quot;job!=null and job!=&#39;&#39; &quot;&gt;  job = #{job} , &lt;/if&gt;  
        &lt;if test=&quot;mgr!=null&quot;&gt;  mgr = #{mgr} , &lt;/if&gt;  
        &lt;if test=&quot;hiredate!=null and hiredate!=&#39;&#39; &quot;&gt; hiredate = #{hiredate} ,&lt;/if&gt;  
        &lt;if test=&quot;sal!=null&quot;&gt;  sal = #{sal} , &lt;/if&gt;  
        &lt;if test=&quot;comm!=null&quot;&gt; comm = #{comm} ,&lt;/if&gt;  
        &lt;if test=&quot;deptno!=null&quot;&gt; deptno = #{deptno},  &lt;/if&gt;  
    &lt;/trim&gt;  
    &lt;where&gt;  
        empno =#{empno}    
	&lt;/where&gt;  
&lt;/update&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码一:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void updateEmpByCondtion(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();  
    emp.setEmpno(8899);  
    emp.setEname(&quot;LISI&quot;);  
    emp.setMgr(1500);  
    emp.setSal(1500.0);  
    mapper.updateEmpByCondtion(emp);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述测试文件最终执行的语句是 : <code>update emp SET ename = ? , mgr = ? , sal = ? WHERE empno =? </code></p><h2 id="bind标签" tabindex="-1"><a class="header-anchor" href="#bind标签" aria-hidden="true">#</a> BIND标签</h2><p>一般用于处理模糊查询的模板</p><p>在之前的处理中,我们是这样处理模糊查询的:<br> ![[Mybatis代理模式的开发#模糊查询#方式二: 使用concat()函数拼接 - 推荐]]</p><p>这样使用并不优雅,我们可以使用 <code>BIND标签</code> 来处理.</p><h3 id="语法-5" tabindex="-1"><a class="header-anchor" href="#语法-5" aria-hidden="true">#</a> 语法</h3><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;bind name=&quot;名字1&quot; value=&quot;参数1&quot;/&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>bind 标签可以让我们在SQL中对<code>参数1</code>进行动态的处理,然后保存到<code>名字1</code>中,方便后续的SQL使用</p><h3 id="案例-5" tabindex="-1"><a class="header-anchor" href="#案例-5" aria-hidden="true">#</a> 案例</h3><p>EmpMapper.XML</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;select id=&quot;findObjectByName&quot; parameterType=&quot;string&quot; resultType=&quot;emp&quot;&gt;  
    &lt;bind name=&quot;findEname&quot; value=&quot;&#39;%&#39;+ename+&#39;%&#39;&quot;/&gt;  
    select * from emp where ename like concat(&#39;%&#39;,#{findEname},&#39;%&#39;)
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试单元</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>  
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">findObjectByName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
    <span class="token class-name">EmpMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">EmpMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Emp</span><span class="token punctuation">&gt;</span></span> empList <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">findObjectByName</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    empList<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述测试文件最终执行的语句是 :<code>select * from emp where ename like concat(&#39;%&#39;,?,&#39;%&#39;) </code></p><h2 id="sql标签与include标签" tabindex="-1"><a class="header-anchor" href="#sql标签与include标签" aria-hidden="true">#</a> SQL标签与include标签</h2><p>SQL标签可以对一些复用性比较高的代码段进行包裹,方便其他地方快速的调用</p><h3 id="语法-6" tabindex="-1"><a class="header-anchor" href="#语法-6" aria-hidden="true">#</a> 语法</h3><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;!-- 创建  --&gt;
&lt;sql id=&quot;名字&quot;&gt;代码段&lt;/sql&gt;

&lt;!-- 引用  --&gt;
&lt;include refid=&quot;名字&quot;&gt;&lt;/include&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意: SQL标签可以多层嵌套,例如:</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;sql id=&quot;名字1&quot;&gt;代码段1&lt;/sql&gt;
&lt;sql id=&quot;名字2&quot;&gt;&lt;include refid=&quot;名字1&quot;&gt;&lt;/include&gt;代码段2&lt;/sql&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>那么在使用<code>名字2</code>时,则会依次查找然后拼接最后的代码: <code>代码段1代码段2</code></p><h3 id="案例-6" tabindex="-1"><a class="header-anchor" href="#案例-6" aria-hidden="true">#</a> 案例</h3><p>EmpMapper.java接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findObject();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>EmpMapper.xml</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;sql id=&quot;empColumn&quot;&gt;empno,ename,job,mgr,hiredate,sal,comm,deptno&lt;/sql&gt;  
&lt;select id=&quot;findObject&quot;  resultType=&quot;emp&quot;&gt;  
    select &lt;include refid=&quot;empColumn&quot;&gt;&lt;/include&gt; from emp
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void findObject(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    List&lt;Emp&gt; empList = mapper.findObject();  
    empList.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述测试文件最终执行的语句是 : <code>select empno,ename,job,mgr,hiredate,sal,comm,deptno from emp</code></p><h2 id="foreach标签" tabindex="-1"><a class="header-anchor" href="#foreach标签" aria-hidden="true">#</a> FOREACH标签</h2><p>用来遍历集合或者数组,通常是用来处理<code>In</code>中的参数</p><h3 id="语法-7" tabindex="-1"><a class="header-anchor" href="#语法-7" aria-hidden="true">#</a> 语法</h3><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;foreach collection=&quot;array&quot; separator=&quot;,&quot; open=&quot;(&quot; close=&quot;)&quot; item=&quot;empNo&quot;&gt; 代码块 &lt;/foreach&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用于遍历数组或集合:</p><ul><li><code>collection</code> : 遍历的集合或者是数组 (数组为array/集合为list)</li><li><code>separator</code> : 多个元素取出的时候 用什么文字分隔</li><li><code>open</code> : 以什么开头</li><li><code>close</code> : 以什么结尾</li><li><code>item</code> : 中间变量名</li></ul><h3 id="案例-7" tabindex="-1"><a class="header-anchor" href="#案例-7" aria-hidden="true">#</a> 案例</h3><h4 id="测试数组" tabindex="-1"><a class="header-anchor" href="#测试数组" aria-hidden="true">#</a> 测试数组</h4><p>EmpMapper.Java接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findObjectsByEmpNo1(int[] empno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>EmpMapper.XML</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;select id=&quot;findObjectsByEmpNo1&quot;  resultType=&quot;emp&quot;&gt;  
    select *  from emp where empno in    
    &lt;foreach collection=&quot;array&quot; separator=&quot;,&quot; open=&quot;(&quot; close=&quot;)&quot; item=&quot;empNo&quot;&gt;  
        #{empNo}    
	&lt;/foreach&gt;  
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码一:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void findObjectsByEmpNo1(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    int[] arr = new int[]{7369,7499,7521};  
    List&lt;Emp&gt; empList = mapper.findObjectsByEmpNo1(arr);  
    empList.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述测试文件最终执行的语句是 : <code>select * from emp where empno in ( ? , ? , ? ) </code></p><h4 id="测试集合" tabindex="-1"><a class="header-anchor" href="#测试集合" aria-hidden="true">#</a> 测试集合</h4><p>EmpMapper.Java接口</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Emp&gt; findObjectsByEmpNo(List&lt;Integer&gt; empno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>EmpMapper.XML</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;select id=&quot;findObjectsByEmpNo&quot;  resultType=&quot;emp&quot;&gt;  
    select *  from emp where empno in    
    &lt;foreach collection=&quot;list&quot; separator=&quot;,&quot; open=&quot;(&quot; close=&quot;)&quot; item=&quot;empNo&quot;&gt;  
        #{empNo}    
	&lt;/foreach&gt;  
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码一:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void findObjectsByEmpNo2(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    List&lt;Integer&gt; integers = Arrays.asList(7369, 7499, 7521);  
    List&lt;Emp&gt; empList = mapper.findObjectsByEmpNo2(integers);  
    empList.stream().forEach(System.out::println);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述测试文件最终执行的语句是 : <code>select * from emp where empno in ( ? , ? , ? ) </code></p>`,129),l=[t];function d(r,p){return n(),a("div",null,l)}const c=e(s,[["render",d],["__file","Mybatis动态SQL.html.vue"]]);export{c as default};
