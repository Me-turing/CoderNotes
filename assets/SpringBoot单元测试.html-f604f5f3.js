import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,f as i}from"./app-71f45f98.js";const a="/CoderNotes/assets/image-20230718104621323-fe587372.png",t="/CoderNotes/assets/image-20230718133733803-1f0e8f29.png",l="/CoderNotes/assets/image-20230718134946785-377442de.png",d="/CoderNotes/assets/image-20230718135122318-3bffcb08.png",o="/CoderNotes/assets/image-20230718143227804-036b4b0f.png",r="/CoderNotes/assets/image-20230718143429888-e5f25b61.png",u="/CoderNotes/assets/image-20230718143950806-b4fa2a97.png",c="/CoderNotes/assets/image-20230718144012477-e0d4daea.png",v="/CoderNotes/assets/image-20230718144350037-a4538351.png",p="/CoderNotes/assets/image-20230718144319812-c380b25d.png",m="/CoderNotes/assets/image-20230718144548992-ca8b32f1.png",b="/CoderNotes/assets/image-20230718144607095-12df627e.png",g="/CoderNotes/assets/image-20230718145236845-97724dc1.png",h="/CoderNotes/assets/image-20230718145759627-fdc0ccd2.png",f="/CoderNotes/assets/image-20230718151735737-5c407880.png",q="/CoderNotes/assets/image-20230718152010011-76ad2e08.png",k="/CoderNotes/assets/image-20230718152727078-619b43a7.png",x="/CoderNotes/assets/image-20230719154255940-cd7b1641.png",J="/CoderNotes/assets/image-20230719154507635-e342c505.png",y={},A=i(`<h2 id="了解junit5" tabindex="-1"><a class="header-anchor" href="#了解junit5" aria-hidden="true">#</a> 了解Junit5</h2><p>springBoot 2.2.0开始引入Junit5作为单元测试的默认库,JUnit5和之前的版本有很大的不同,由单个子项目的几个不同模块组成:</p><ul><li><code>JUnit Platform</code>是在JVM上启动测试框架的技术,不仅支持Junit自己的测试引擎,其他的测试引擎也可以</li><li><code>JUnit Jupiter</code> 提供了Junit5的最新的编程模型,是Junit5 的核心,内部包含了一个测试引擎,用于在Junit Platform上运行</li><li><code>JUnit Vintager</code> 提供了兼容Junit4/3 的测试引擎</li></ul><blockquote><p>Junit5 = JUnit Platform+ JUnit Jupiter+JUnit Vintager</p></blockquote><h2 id="对junit4和junit3的支持" tabindex="-1"><a class="header-anchor" href="#对junit4和junit3的支持" aria-hidden="true">#</a> 对Junit4和Junit3的支持</h2><p>SpringBoot 2.4 以上版本移除了默认对Vintage的依赖,如果需要兼容junit4需要自行引入.</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;dependency&gt;
	&lt;groupId&gt;org.junit.vintage&lt;/groupId&gt;
	&lt;artifactId&gt;junit-vintage-engine&lt;/artifactId&gt;
	&lt;scope&gt;test&lt;/scope&gt;
	&lt;exclusions&gt;
		&lt;exclusion&gt;
		&lt;groupId&gt;org.hamcrest&lt;/groupId&gt;
		&lt;artifactId&gt;hamcrest-core&lt;/artifactId&gt; 
		&lt;/exclusion&gt;
	&lt;/exclusions&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="junit5中的注解" tabindex="-1"><a class="header-anchor" href="#junit5中的注解" aria-hidden="true">#</a> Junit5中的注解</h2><p>Junit支持Spring中的注解,测试起来比较方便, @Autowired @Transactional 等</p><figure><img src="`+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="简单实用" tabindex="-1"><a class="header-anchor" href="#简单实用" aria-hidden="true">#</a> 简单实用</h2><h3 id="junit4" tabindex="-1"><a class="header-anchor" href="#junit4" aria-hidden="true">#</a> Junit4</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@BootstrapWith(SpringBootTestContextBootstrapper.class)
@ExtendWith({SpringExtension.class})
public class Junit4Test01 {
    @BeforeClass
    public static void testBeforeClass() {
        System.out.println(&quot;testBeforeClass&quot;);
    }
    @AfterClass
    public static void testAfterClass() {
        System.out.println(&quot;testAfterClass&quot;);
    }
    @Before
    public void testBefore() {
        System.out.println(&quot;testBefore&quot;);
    }
    @After
    public void testAfter() {
        System.out.println(&quot;testAfter&quot;);
    }
    @Test
    public void testMethod(){
        System.out.println(&quot;testMethod&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行效果:</p><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="junit5" tabindex="-1"><a class="header-anchor" href="#junit5" aria-hidden="true">#</a> Junit5</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token annotation punctuation">@DisplayName</span><span class="token punctuation">(</span><span class="token string">&quot;Junit5测试类&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Junit5Test01</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@BeforeAll</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testBeforeAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;testBeforeAll&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@AfterAll</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testAfterAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;testAfterAll&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@BeforeEach</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testBeforeEach</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;testBeforeEach&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@AfterEach</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAfterEach</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;testAfterEach&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@RepeatedTest</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token comment">//重复测试3次</span>
    <span class="token annotation punctuation">@Timeout</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">,</span>unit <span class="token operator">=</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token comment">//超时时间</span>
    <span class="token annotation punctuation">@DisplayName</span><span class="token punctuation">(</span><span class="token string">&quot;当前是测试类&quot;</span><span class="token punctuation">)</span><span class="token comment">//当前测试的描述信息</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;contextLoads&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试效果</p><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="断言机制" tabindex="-1"><a class="header-anchor" href="#断言机制" aria-hidden="true">#</a> 断言机制</h2><p>断定某件事情,一定会发生,如果没有发生,那就是出现了问题,所欲的测试运行结束后,会有一个详细的断言报告</p><p>断言通常用来对测试需要满足的条件进行验证,这些断言方法都是<code>org.junit.jupiter.api.Assertions</code>中的静态方法</p><h3 id="简单的断言方法" tabindex="-1"><a class="header-anchor" href="#简单的断言方法" aria-hidden="true">#</a> 简单的断言方法</h3><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="测试实例" tabindex="-1"><a class="header-anchor" href="#测试实例" aria-hidden="true">#</a> 测试实例</h3><h4 id="常规断言" tabindex="-1"><a class="header-anchor" href="#常规断言" aria-hidden="true">#</a> 常规断言</h4><h5 id="比较值" tabindex="-1"><a class="header-anchor" href="#比较值" aria-hidden="true">#</a> 比较值</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@SpringBootTest
@DisplayName(&quot;测试断言&quot;)
class Junit5Test02 {
    @DisplayName(&quot;测试断言1&quot;)
    @Test
    public void testMethod01(){
        int age = 18;
        Assertions.assertEquals(10, age,&quot;age参数与期望值10不一致&quot;);
    }
	@DisplayName(&quot;测试断言2&quot;)
    @Test
    public void testMethod02(){
        int age = 10;
        Assertions.assertNotEquals(10, age,&quot;age参数与期望值10一致&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="比较对象" tabindex="-1"><a class="header-anchor" href="#比较对象" aria-hidden="true">#</a> 比较对象</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@SpringBootTest
@DisplayName(&quot;测试断言&quot;)
class Junit5Test02 {
    @DisplayName(&quot;测试断言3&quot;)
    @Test
    public void testMethod03(){
        String str1 = new String(&quot;123&quot;);
        String str2 = new String(&quot;123&quot;);
        Assertions.assertSame(str1, str2,&quot;两个对象引用不同&quot;);
    }
    @DisplayName(&quot;测试断言4&quot;)
    @Test
    public void testMethod04(){
        String str1 = new String(&quot;123&quot;);
        String str2 = str1;
        Assertions.assertNotSame(str1, str2,&quot;两个对象为相同引用&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="比较布尔类型" tabindex="-1"><a class="header-anchor" href="#比较布尔类型" aria-hidden="true">#</a> 比较布尔类型</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@SpringBootTest
@DisplayName(&quot;测试断言&quot;)
class Junit5Test02 {
    @DisplayName(&quot;测试断言5&quot;)
    @Test
    public void testMethod05(){
        Boolean flag = false;
        Assertions.assertTrue(flag,&quot;结果不是True&quot;);
    }
    @DisplayName(&quot;测试断言6&quot;)
    @Test
    public void testMethod06(){
        Boolean flag = true;
        Assertions.assertFalse(flag,&quot;结果不是Fasle&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="对象判空" tabindex="-1"><a class="header-anchor" href="#对象判空" aria-hidden="true">#</a> 对象判空</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@SpringBootTest
@DisplayName(&quot;测试断言&quot;)
class Junit5Test02 {
    @DisplayName(&quot;测试断言7&quot;)
    @Test
    public void testMethod07(){
        People people = new People();
        Assertions.assertNull(people,&quot;结果不为空&quot;);
    }
    @DisplayName(&quot;测试断言8&quot;)
    @Test
    public void testMethod08(){
        People people = null;
        Assertions.assertNotNull(people,&quot;结果为空&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="组合断言" tabindex="-1"><a class="header-anchor" href="#组合断言" aria-hidden="true">#</a> 组合断言</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@SpringBootTest
@DisplayName(&quot;测试断言&quot;)
class Junit5Test02 {
    @DisplayName(&quot;测试断言9&quot;)
    @Test
    public void testMethod09(){
        People people = new People(&quot;zhangsan&quot;,17);
        Assertions.assertAll(&quot;assertAll&quot;,
                ()-&gt; Assertions.assertNotNull(people,&quot;当前对象为空&quot;),
                ()-&gt; Assertions.assertTrue(18 &lt; people.getAge(),&quot;用户的年龄小于18&quot;)
        );
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="异常断言" tabindex="-1"><a class="header-anchor" href="#异常断言" aria-hidden="true">#</a> 异常断言</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@SpringBootTest
@DisplayName(&quot;测试断言&quot;)
class Junit5Test02 {
    @DisplayName(&quot;测试断言10&quot;)
    @Test
    public void testMethod10()  {
       Assertions.assertThrows(Exception.class,()-&gt;{int age = 1/1;},&quot;没有抛出异常&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="超时断言" tabindex="-1"><a class="header-anchor" href="#超时断言" aria-hidden="true">#</a> 超时断言</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@SpringBootTest
@DisplayName(&quot;测试断言&quot;)
class Junit5Test02 {
    @DisplayName(&quot;测试断言11&quot;)
    @Test
    public void testMethod11() {
        Assertions.assertTimeout(Duration.ofMillis(3000), () -&gt; {
            Thread.sleep(5000);
        }, &quot;执行时间超过设定值3000毫秒&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="快速断言" tabindex="-1"><a class="header-anchor" href="#快速断言" aria-hidden="true">#</a> 快速断言</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@SpringBootTest
@DisplayName(&quot;测试断言&quot;)
class Junit5Test02 {
    @DisplayName(&quot;测试断言12&quot;)
    @Test
    public void testMethod12() {
       boolean flag = false;
        if (!flag) {
            Assertions.fail(&quot;结果为fasle&quot;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+q+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h2><p>前置条件(assumptions假设) 类似于断言,不同在于: <strong>不满足断言的条件,测试方法会抛出异常表示失败. 而不满足前置条件的话,测试方法根本就不会执行.</strong></p><p>我们可以将前置条件看作测试方法的执行前提,不满足条件则方法没有执行的必要性.</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@SpringBootTest
@DisplayName(&quot;测试断言&quot;)
class Junit5Test03 {
    @DisplayName(&quot;测试断言1&quot;)
    @Test
    public void testMethod01(){
        int age = 18;
        Assumptions.assumeTrue(age&gt;18,&quot;age小于等于18&quot;);
        System.out.println(&quot;后面的代码片段&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="嵌套测试" tabindex="-1"><a class="header-anchor" href="#嵌套测试" aria-hidden="true">#</a> 嵌套测试</h2><p>在Junit5中我们可以使用<strong>内部类与@Nested</strong>的组合,来进行嵌套式的测试</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@SpringBootTest
@DisplayName(&quot;测试嵌套&quot;)
public class Junit5Test04 {
    @BeforeAll
    public static void externalBeforeAll(){System.out.println(&quot;ExternalBeforeAll&quot;);}
    @AfterAll
    public static void externalAfterAll(){System.out.println(&quot;ExternalAfterAll&quot;);}
    @BeforeEach
    public void externalBeforeEach(){System.out.println(&quot;ExternalBeforeEach&quot;);}
    @AfterEach
    public void externalAfterEach(){System.out.println(&quot;ExternalAfterEach&quot;);}
    @Test
    void isInstantiatedWithNew() {System.out.println(&quot;External Test Methods&quot;);}
    @Nested
    class InternalTestClass{
        @BeforeEach
        public void interiorBeforeEach(){System.out.println(&quot;InteriorBeforeEach&quot;);}
        @AfterEach
        public void interiorAfterEach(){System.out.println(&quot;InteriorAfterEach&quot;);}
        @Test
        void isInstantiatedWithNew() {System.out.println(&quot;Interior Test Methods&quot;);}
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们执行内部类<code>isInstantiatedWithNew()</code>方法时 : 会先执行外部的测试方法再执行内部的测试方法</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>ExternalBeforeAll
ExternalBeforeEach
InteriorBeforeEach
Interior Test Methods
InteriorAfterEach
ExternalAfterEach
ExternalAfterAll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们直接执行外部类<code>isInstantiatedWithNew()</code>方法时 : 只执行外部的测试方法,并不会执行内部类的方法</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>ExternalBeforeAll
ExternalBeforeEach
External Test Methods
ExternalAfterEach
ExternalAfterAll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数化测试" tabindex="-1"><a class="header-anchor" href="#参数化测试" aria-hidden="true">#</a> 参数化测试</h2><p>我们在测试的过程中,也可以使用<code>@ParameterizedTest</code>注解参数来进行测试</p><ul><li>@ParameterizedTest+@ValueSource 指定参数</li><li>@ParameterizedTest+@MethodSource 指定方法获取参数</li></ul><h3 id="直接使用参数" tabindex="-1"><a class="header-anchor" href="#直接使用参数" aria-hidden="true">#</a> 直接使用参数</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@SpringBootTest
@DisplayName(&quot;参数化测试&quot;)
public class Junit5Test05 {
    @ParameterizedTest
    @ValueSource(ints = { 1, 2, 3, 4, 5, 6})
    void parametricTestMethods01 (int age) {
        Assertions.assertTrue(age&gt;2&amp;&amp;age&lt;5,&quot;年龄不符&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述案例会初始化<code>{ 1, 2, 3, 4, 5, 6}</code> 的数据,分别传递给age参数进行测试</p><p>我们可以在控制台很直观的看到测试失败的案例</p><figure><img src="`+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="使用方法传参" tabindex="-1"><a class="header-anchor" href="#使用方法传参" aria-hidden="true">#</a> 使用方法传参</h3><p>我们也可以指定一个方法获取参数</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@SpringBootTest
@DisplayName(&quot;参数化测试&quot;)
public class Junit5Test05 {
    @ParameterizedTest
    @MethodSource(&quot;testPeopleList&quot;)
    void parametricTestMethods02 (People people) {
        Assertions.assertAll(
                ()-&gt;{Assertions.assertNotNull(people,&quot;参数不能是NULL&quot;);},
                ()-&gt;{Assertions.assertTrue(people.getAge()&lt;19,&quot;年龄不能小于19&quot;);}
        );
    }
    public static Stream&lt;People&gt; testPeopleList() {
        ArrayList&lt;People&gt; people = new ArrayList&lt;&gt;();
        people.add(new People(&quot;zhangsan&quot;,18));
        people.add(new People(&quot;lisi&quot;,21));
        people.add(null);
        return people.stream();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行效果如下:</p><figure><img src="`+J+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>注意 : 被调用的方法必须是一个静态的方法,且返回的时Stream流</p></blockquote>',80),T=[A];function N(_,S){return e(),s("div",null,T)}const D=n(y,[["render",N],["__file","SpringBoot单元测试.html.vue"]]);export{D as default};
