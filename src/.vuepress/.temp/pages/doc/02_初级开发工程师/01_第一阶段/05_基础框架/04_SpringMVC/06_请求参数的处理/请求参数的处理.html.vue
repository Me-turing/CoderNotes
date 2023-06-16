<template><div><h2 id="获取参数的方式" tabindex="-1"><a class="header-anchor" href="#获取参数的方式" aria-hidden="true">#</a> 获取参数的方式</h2>
<h3 id="紧耦合方式-了解" tabindex="-1"><a class="header-anchor" href="#紧耦合方式-了解" aria-hidden="true">#</a> 紧耦合方式 - 了解</h3>
<p>DispatcherServlet中的service方法直接将此次请求的request对象传递给调用的单元方法即可。<br>
同时在单元方法上声明形参HttpServletRequest来接收request实参即可。</p>
<p>Controller层</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@RestController
public class TestGetRequestParam {
    //紧耦合方式参数注入
    @RequestMapping(&quot;/getParamByRequest&quot;)
    public String getParamByRequest(HttpServletRequest req, HttpServletResponse resp) {
        String username = req.getParameter(&quot;username&quot;);
        String password = req.getParameter(&quot;password&quot;);
        System.out.println(&quot;username:&quot;+username+&quot; / password:&quot;+password);
        return &quot;success&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>我们在Controller单元中修改:</p>
<blockquote>
<ul>
<li>使用<strong>HttpServletRequest与HttpServletResponse形参</strong>接收Request对象与Response对象</li>
<li>通过<code v-pre>Request对象.getParameter(&quot;参数名&quot;)</code>方法获取具体的参数</li>
</ul>
</blockquote>
</blockquote>
<p>testGetRequestParam.jsp</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;测试紧耦合方式参数注入&lt;/p&gt;
&lt;form action=&quot;getParamByRequest&quot;&gt;
    &lt;input name=&quot;username&quot; type=&quot;text&quot; value=&quot;admin&quot;&gt;
    &lt;input name=&quot;password&quot; type=&quot;password&quot; value=&quot;admin&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;TestParamByRequest&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意 : 前端发送的参数名需要和后端保持一致,否则获取不到显示为null</p>
</blockquote>
<h3 id="解耦合方式【熟练】" tabindex="-1"><a class="header-anchor" href="#解耦合方式【熟练】" aria-hidden="true">#</a> 解耦合方式【熟练】</h3>
<p>DispatcherServlet在其service方法中将请求数据根据需求从request对象中获取出来后，将数据直接传递给对应的单元方法使用。</p>
<p>同时在单元方法上直接声明对应的形参接收请求数据即可。</p>
<p>在单元方法上声明形参来接收请求数据时，形参名必须和请求数据的键名一致，DispatcherServlet会将调用单元方法的形参名作为请求数据的键名获取请求数据，然后传递给单元方法。如果不一致可以使用<code v-pre>@RequestParam</code>注解注明参数的映射</p>
<p>Controller层</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@RestController
public class TestGetRequestParam {
    //解耦合方式参数注入
    @RequestMapping(&quot;/getParamByArgName&quot;)
    public String getParamByArgName(@RequestParam String username, @RequestParam(&quot;password&quot;) String pwd) {
        System.out.println(&quot;username:&quot;+username+&quot; / password:&quot;+pwd);
        return &quot;success&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意:</p>
<blockquote>
<ol>
<li>默认情况下只要保证形参名与参数名一致,可以自动由SpringMVC处理映射</li>
<li>如果参数名不一致,需要使用<code v-pre>@RequestParam</code>注解来指定映射</li>
<li>在前面学习Restful风格时,从路径中获取参数的注解是<code v-pre>@PathVariable</code></li>
</ol>
</blockquote>
</blockquote>
<p>testGetRequestParam.jsp</p>
<div class="language-JSP<%@ line-numbers-mode" data-ext="JSP<%@"><pre v-pre class="language-JSP&lt;%@"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;测试解耦合方式参数注入&lt;/p&gt;
&lt;form action=&quot;getParamByArgName&quot;&gt;
    &lt;input name=&quot;username&quot; type=&quot;text&quot; value=&quot;admin&quot;&gt;
    &lt;input name=&quot;password&quot; type=&quot;password&quot; value=&quot;admin&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;TestParamByRequest&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数的处理" tabindex="-1"><a class="header-anchor" href="#参数的处理" aria-hidden="true">#</a> 参数的处理</h2>
<h3 id="pojo接收参数" tabindex="-1"><a class="header-anchor" href="#pojo接收参数" aria-hidden="true">#</a> POJO接收参数</h3>
<blockquote>
<p>注意事项 :</p>
<ol>
<li>提交的参数名必须和POJO的属性名保持一致</li>
<li>springmvc底层通过反射给参数列表的属性赋值(通过set方法设置属性值的,不是直接通过操作属性)POJO的属性一定要有set方法,要不然就会接收失败</li>
</ol>
</blockquote>
<p>testGetRequestParam.jsp</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;测试POJO&lt;/p&gt;
&lt;form action=&quot;getDataByPojo&quot;&gt;
    &lt;p&gt;姓名&lt;input type=&quot;text&quot; name=&quot;pname&quot;&gt;&lt;/p&gt;
    &lt;p&gt;年龄&lt;input type=&quot;text&quot; name=&quot;page&quot;&gt;&lt;/p&gt;
    &lt;p&gt;性别:
        &lt;input type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;1&quot; &gt;男
        &lt;input type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;0&quot; &gt;女
    &lt;/p&gt;
    &lt;p&gt;爱好
        &lt;input type=&quot;checkbox&quot; name=&quot;hobby&quot; value=&quot;1&quot;&gt; 篮球
        &lt;input type=&quot;checkbox&quot; name=&quot;hobby&quot; value=&quot;2&quot;&gt; 足球
        &lt;input type=&quot;checkbox&quot; name=&quot;hobby&quot; value=&quot;3&quot;&gt; 羽毛球
    &lt;/p&gt;生日
    &lt;p&gt;
        &lt;input type=&quot;text&quot; name=&quot;birthdate&quot;&gt;
    &lt;/p&gt;
    &lt;input type=&quot;submit&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>POJO类 : Person.java</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Person implements Serializable {
    private String pname;
    private String page;
    private String gender;
    private String[] hobby;
    private String birthdate;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Controller层</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@RestController
public class TestGetRequestParam {
    @RequestMapping(&quot;/getDataByPojo&quot;)
    public String getDataByPojo(Person person){
        System.out.println(person);
        return &quot;success&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日期类型的特殊处理" tabindex="-1"><a class="header-anchor" href="#日期类型的特殊处理" aria-hidden="true">#</a> 日期类型的特殊处理</h3>
<h4 id="注解方式" tabindex="-1"><a class="header-anchor" href="#注解方式" aria-hidden="true">#</a> 注解方式</h4>
<p>我们可以在字段上使用<code v-pre>@DateTimeFormat</code>注解来表示当前字段需要转换为Date类型</p>
<p>testGetRequestParam.jsp</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;测试日期转换&lt;/p&gt;
&lt;form action=&quot;getDateFormat&quot;&gt;
	&lt;/p&gt;生日
	&lt;p&gt;
		&lt;input type=&quot;text&quot; name=&quot;birthdate&quot;&gt;
	&lt;/p&gt;
	&lt;input type=&quot;submit&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Controller层</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@RestController
public class TestGetRequestParam {
    @RequestMapping(&quot;/getDateFormat&quot;)
    public String getDateFormat(@DateTimeFormat(pattern = &quot;yyyy-MM-dd&quot;) Date birthdate){
        System.out.println(birthdate);
        return &quot;success&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>@DateTimeFormat(pattern = &quot;yyyy-MM-dd&quot;) 可以用于方法参数列表和 类的属性上<br>
例如: <img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/06_请求参数的处理/assets/image-20230605095156582.png" alt="" loading="lazy"></p>
</blockquote>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/06_请求参数的处理/assets/image-20230605094511867.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="自定义转换器" tabindex="-1"><a class="header-anchor" href="#自定义转换器" aria-hidden="true">#</a> 自定义转换器</h4>
<p>定义转换器 : 实现Converter接口重写convert方法</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class StringToDateConverter implements Converter&lt;String, Date&gt; {
    private SimpleDateFormat dateFormat=new SimpleDateFormat(&quot;yyyy-MM-dd&quot;);
    public Date convert(String source) {
        Date date =null;
        try {
            date = dateFormat.parse(source);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        return date;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>springmvc.xml 中配置转换器</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--数据转换工厂--&gt;
&lt;bean id=&quot;conversionService&quot; class=&quot;org.springframework.context.support.ConversionServiceFactoryBean&quot;&gt;
	&lt;!--配置类型转换器--&gt;
	&lt;property name=&quot;converters&quot;&gt;
		&lt;array&gt;
			&lt;!--注入自定义转换器对象--&gt;
			&lt;bean class=&quot;com.meturing.util.StringToDateConverter&quot;&gt;&lt;/bean&gt;
		&lt;/array&gt;
	&lt;/property&gt;
&lt;/bean&gt;
&lt;!--这里配置转换服务工厂--&gt;
&lt;mvc:annotation-driven conversion-service=&quot;conversionService&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试:<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/06_请求参数的处理/assets/image-20230605095406545.png" alt="" loading="lazy"></p>
<h3 id="list集合接收参数" tabindex="-1"><a class="header-anchor" href="#list集合接收参数" aria-hidden="true">#</a> List集合接收参数</h3>
<p>创建Pets类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class Pets implements Serializable {
    private String petName;
    private String petType;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Person类中新增petsList属性,用来接收参数</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Person implements Serializable {
    private ArrayList&lt;Pets&gt; petsList ;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Controller层</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@RestController
public class TestGetRequestParam {
    @RequestMapping(&quot;/getDataByList&quot;)
    public String getDataByList(Person person){
        System.out.println(person.getPetsList());
        return &quot;success&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>testGetRequestParam.jsp</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;测试使用List接收参数&lt;/p&gt;
&lt;form action=&quot;getDataByList&quot;&gt;
	&lt;p&gt;
		宠物1: 名字:&lt;input type=&quot;text&quot; name=&quot;petsList[0].petName&quot; &gt;类型:&lt;input type=&quot;text&quot; name=&quot;petsList[0].petType&quot;&gt;
	&lt;/p&gt;
	&lt;p&gt;
		宠物2: 名字:&lt;input type=&quot;text&quot; name=&quot;petsList[1].petName&quot; &gt;类型:&lt;input type=&quot;text&quot; name=&quot;petsList[1].petType&quot;&gt;
	&lt;/p&gt;
	&lt;input type=&quot;submit&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>前端传送参数时,需要以数组的方式传送: 字段名[下标].属性名</p>
</blockquote>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/06_请求参数的处理/assets/image-20230606172610204.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="map集合接收参数" tabindex="-1"><a class="header-anchor" href="#map集合接收参数" aria-hidden="true">#</a> Map集合接收参数</h3>
<p>创建Pets类</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class Pets implements Serializable {
    private String petName;
    private String petType;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Person类中新增petsList属性,用来接收参数</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Person implements Serializable {
    private HashMap&lt;String,Pets&gt; petsMap ;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Controller层</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@RestController
public class TestGetRequestParam {
    @RequestMapping(&quot;/getDataByMap&quot;)
    public String getDataByMap(Person person){
        System.out.println(person.getPetsMap());
        return &quot;success&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>testGetRequestParam.jsp</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;测试使用Map接收参数&lt;/p&gt;
&lt;form action=&quot;getDataByMap&quot;&gt;
	&lt;p&gt;
		宠物1: 名字:&lt;input type=&quot;text&quot; name=&quot;petsMap['宠物1'].petName&quot; &gt;类型:&lt;input type=&quot;text&quot; name=&quot;petsMap['宠物1'].petType&quot;&gt;
	&lt;/p&gt;
	&lt;p&gt;
		宠物2: 名字:&lt;input type=&quot;text&quot; name=&quot;petsMap['宠物2'].petName&quot; &gt;类型:&lt;input type=&quot;text&quot; name=&quot;petsMap['宠物2'].petType&quot;&gt;
	&lt;/p&gt;
	&lt;input type=&quot;submit&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>前端传送参数时,需要以数组的方式传送: 字段名['key'].属性名</p>
</blockquote>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/06_请求参数的处理/assets/image-20230606172831961.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="编码问题" tabindex="-1"><a class="header-anchor" href="#编码问题" aria-hidden="true">#</a> 编码问题</h3>
<h4 id="get乱码" tabindex="-1"><a class="header-anchor" href="#get乱码" aria-hidden="true">#</a> Get乱码</h4>
<p>可以参照之前在JavaEE阶段中Servlet中处理方案</p>
<p><RouterLink to="/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/03_Servlet/03_%E4%B9%B1%E7%A0%81%E7%9A%84%E5%A4%84%E7%90%86/%E4%B9%B1%E7%A0%81%E7%9A%84%E5%A4%84%E7%90%86.html#get%E8%AF%B7%E6%B1%82%E4%B9%B1%E7%A0%81">get请求乱码</RouterLink></p>
<h4 id="post乱码" tabindex="-1"><a class="header-anchor" href="#post乱码" aria-hidden="true">#</a> POST乱码</h4>
<h5 id="设置请求编码方式" tabindex="-1"><a class="header-anchor" href="#设置请求编码方式" aria-hidden="true">#</a> 设置请求编码方式</h5>
<p>可以参照之前在JavaEE阶段中Servlet中处理方案,但是需要使用紧耦合的方式获取参数</p>
<p><RouterLink to="/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/03_Servlet/03_%E4%B9%B1%E7%A0%81%E7%9A%84%E5%A4%84%E7%90%86/%E4%B9%B1%E7%A0%81%E7%9A%84%E5%A4%84%E7%90%86.html#post%E8%AF%B7%E6%B1%82%E4%B9%B1%E7%A0%81">post请求乱码</RouterLink></p>
<h5 id="设置过滤器" tabindex="-1"><a class="header-anchor" href="#设置过滤器" aria-hidden="true">#</a> 设置过滤器</h5>
<p><RouterLink to="/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/05_%E8%BF%87%E6%BB%A4%E5%99%A8%E5%92%8C%E7%9B%91%E5%90%AC%E5%99%A8/03_%E8%BF%87%E6%BB%A4%E5%99%A8%E7%9A%84%E5%BA%94%E7%94%A8%E6%A1%88%E4%BE%8B/%E8%BF%87%E6%BB%A4%E5%99%A8%E7%9A%84%E5%BA%94%E7%94%A8%E6%A1%88%E4%BE%8B.html">过滤器的应用案例</RouterLink></p>
<h5 id="使用springmvc过滤器" tabindex="-1"><a class="header-anchor" href="#使用springmvc过滤器" aria-hidden="true">#</a> 使用SpringMVC过滤器</h5>
<blockquote>
<p><strong>web.xml中配置编码过滤器</strong></p>
</blockquote>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;!--创建springframework提供的CharacterEncodingFilter过滤器--&gt;
&lt;filter&gt;
	&lt;filter-name&gt;characterEncodingFilter&lt;/filter-name&gt;
	&lt;filter-class&gt;org.springframework.web.filter.CharacterEncodingFilter&lt;/filter-class&gt;
	&lt;init-param&gt;
		&lt;param-name&gt;encoding&lt;/param-name&gt;
		&lt;param-value&gt;utf-8&lt;/param-value&gt;
	&lt;/init-param&gt;
&lt;/filter&gt;
&lt;!--指定过滤器映射路径--&gt;
&lt;filter-mapping&gt;
	&lt;filter-name&gt;characterEncodingFilter&lt;/filter-name&gt;
	&lt;url-pattern&gt;/*&lt;/url-pattern&gt;
&lt;/filter-mapping&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


