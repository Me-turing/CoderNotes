import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as t,f as a}from"./app-71f45f98.js";const s="/CoderNotes/assets/image-20230430132145781-2a87c3ec.png",i="/CoderNotes/assets/image-20230430132205680-b9487710.png",r="/CoderNotes/assets/image-20230430132239029-e872fd9c.png",l="/CoderNotes/assets/image-20230430132338134-2f666258.png",o={},d=a(`<p>spring容器可以读取.properties属性配置文件,可以将文件中的信息注入给bean</p><h2 id="相关案例" tabindex="-1"><a class="header-anchor" href="#相关案例" aria-hidden="true">#</a> 相关案例</h2><p>接下来我们将简单的以Druid连接池为例</p><h3 id="引入依赖" tabindex="-1"><a class="header-anchor" href="#引入依赖" aria-hidden="true">#</a> 引入依赖</h3><p>导入Druid依赖和mysql-connector依赖</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;!--  德鲁伊连接池  --&gt;
&lt;dependency&gt;
	&lt;groupId&gt;com.alibaba&lt;/groupId&gt;
	&lt;artifactId&gt;druid&lt;/artifactId&gt;
	&lt;version&gt;1.1.14&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--  数据库链接  --&gt;
&lt;dependency&gt;
	&lt;groupId&gt;mysql&lt;/groupId&gt;
	&lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
	&lt;version&gt;8.0.28&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="准备数据源配置文件" tabindex="-1"><a class="header-anchor" href="#准备数据源配置文件" aria-hidden="true">#</a> 准备数据源配置文件</h3><p>resources目录下准备一个jdbc.properties属性配置文件</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">jdbc_driver</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token key attr-name">jdbc_url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://192.168.1.188:3306/test?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=Asia/Shanghai</span>
<span class="token key attr-name">jdbc_username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">jdbc_password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将配置文件引入到applicationcontext-xml中" tabindex="-1"><a class="header-anchor" href="#将配置文件引入到applicationcontext-xml中" aria-hidden="true">#</a> 将配置文件引入到ApplicationContext.xml中</h3><ol><li><p>添加context名称空间<br><img src="`+s+'" alt="" loading="lazy"></p></li><li><p>添加context标签指向配置文件<br><img src="'+i+'" alt="" loading="lazy"></p></li><li><p>使用<code>${key}</code>的形式,直接使用配置文件的值<br><img src="'+r+`" alt="" loading="lazy"></p></li></ol><p>完整代码:</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;

    &lt;context:property-placeholder location=&quot;classpath:jdbc.properties&quot; /&gt;
    &lt;bean id=&quot;dataSource&quot; class=&quot;com.alibaba.druid.pool.DruidDataSource&quot;&gt;
        &lt;property name=&quot;username&quot; value=&quot;\${jdbc_username}&quot;&gt;&lt;/property&gt;
        &lt;property name=&quot;password&quot; value=&quot;\${jdbc_password}&quot;&gt;&lt;/property&gt;
        &lt;property name=&quot;url&quot; value=&quot;\${jdbc_url}&quot;&gt;&lt;/property&gt;
        &lt;property name=&quot;driverClassName&quot; value=&quot;\${jdbc_driver}&quot;&gt;&lt;/property&gt;
    &lt;/bean&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果:<br><img src="`+l+'" alt="" loading="lazy"></p>',14),c=[d];function p(u,m){return n(),t("div",null,c)}const b=e(o,[["render",p],["__file","引入外部配置文件.html.vue"]]);export{b as default};
