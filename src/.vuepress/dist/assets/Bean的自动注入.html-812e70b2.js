import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as s,d as e,b as d,w as r,e as n,f as o}from"./app-a48529f7.js";const c={},u=e("h2",{id:"前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),n(" 前言")],-1),v=e("p",null,[n("在之前的学习中,我们采用时是"),e("strong",null,"通过property标签手动指定给属性进行注入"),n(":")],-1),m=o(`<p>对此,我们也可以使用Spring中提供的属性,让Spring自动帮我们注入Bean对象.</p><h2 id="bean的自动注入" tabindex="-1"><a class="header-anchor" href="#bean的自动注入" aria-hidden="true">#</a> Bean的自动注入</h2><h3 id="相关属性" tabindex="-1"><a class="header-anchor" href="#相关属性" aria-hidden="true">#</a> 相关属性</h3><p><code>autowire</code> 属性控制自动将容器中的对象注入到当前对象的属性上</p><ul><li><code>byName</code> 根据目标id值和属性值注入,要保证当前对象的属性值和目标对象的id值一致</li><li><code>byType</code> 根据类型注入,要保证相同类型的目标对象在容器中只有一个实例</li></ul><h3 id="相关代码" tabindex="-1"><a class="header-anchor" href="#相关代码" aria-hidden="true">#</a> 相关代码</h3><p>实体类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@ToString  
@NoArgsConstructor  
@Data  
public class Dept {  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@ToString  
@Data  
@AllArgsConstructor  
@NoArgsConstructor  
public class Emp {  
	private Dept dept;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>applicationContext.xml</p><div class="language-Xml line-numbers-mode" data-ext="Xml"><pre class="language-Xml"><code>&lt;!-- 注册Dept类 --&gt;  
&lt;bean id=&quot;dept&quot; class=&quot;com.meturing.pojo.Dept&quot;&gt;&lt;/bean&gt;  
  
&lt;!-- 手动注入 --&gt;  
&lt;bean id=&quot;emp1&quot; class=&quot;com.meturing.pojo.Emp&quot;&gt;  
	&lt;property name=&quot;dept&quot; ref=&quot;dept&quot;&gt;&lt;/property&gt;  
&lt;/bean&gt;  
  
&lt;!--  
自动注入dept  
autowire 属性控制自动将容器中的对象注入到当前对象的属性上  
byName 根据目标id值和属性值注入,要保证当前对象的属性值和目标对象的id值一致  
byType 根据类型注入,要保证相同类型的目标对象在容器中只有一个实例  
--&gt;  
&lt;bean id=&quot;emp2&quot; class=&quot;com.meturing.pojo.Emp&quot; autowire=&quot;byName&quot;&gt;&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test  
public void test04(){  
	ClassPathXmlApplicationContext classPathXmlApplicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext2.xml&quot;);  
	Emp emp = classPathXmlApplicationContext.getBean(&quot;emp2&quot;, Emp.class);  
	System.out.println(emp);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function p(b,E){const i=t("RouterLink");return l(),s("div",null,[u,v,e("p",null,[d(i,{to:"/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/03_Spring%E5%9F%BA%E7%A1%80/02_%E5%9F%BA%E4%BA%8EXML%E7%AE%A1%E7%90%86Bean/%E5%9F%BA%E4%BA%8EXML%E7%AE%A1%E7%90%86Bean.html#Bean%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%BC%95%E7%94%A8"},{default:r(()=>[n("Bean对象的引用")]),_:1})]),m])}const A=a(c,[["render",p],["__file","Bean的自动注入.html.vue"]]);export{A as default};
