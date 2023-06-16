<template><div><h2 id="导入log4j日志框架" tabindex="-1"><a class="header-anchor" href="#导入log4j日志框架" aria-hidden="true">#</a> 导入Log4j日志框架</h2>
<h3 id="回顾之前在jdbc中的使用" tabindex="-1"><a class="header-anchor" href="#回顾之前在jdbc中的使用" aria-hidden="true">#</a> 回顾之前在JDBC中的使用</h3>
<p><a href="Log4j%E6%97%A5%E5%BF%97%E6%A1%86%E6%9E%B6#%E4%BB%80%E4%B9%88%E6%98%AF%E6%97%A5%E5%BF%97log">什么是日志log</a></p>
<p><a href="Log4j%E6%97%A5%E5%BF%97%E6%A1%86%E6%9E%B6#log4j%E6%97%A5%E5%BF%97%E7%9A%84%E7%BA%A7%E5%88%AB">log4j日志的级别</a></p>
<p><a href="Log4j%E6%97%A5%E5%BF%97%E6%A1%86%E6%9E%B6#%E4%BD%BF%E7%94%A8log4j%E8%AE%B0%E5%BD%95%E6%97%A5%E5%BF%97">使用log4j记录日志</a></p>
<p><a href="Log4j%E6%97%A5%E5%BF%97%E6%A1%86%E6%9E%B6#%E4%BB%A3%E7%A0%81%E4%B8%AD%E8%AE%B0%E5%BD%95%E6%97%A5%E5%BF%97">代码中记录日志</a></p>
<p><a href="Log4j%E6%97%A5%E5%BF%97%E6%A1%86%E6%9E%B6#%E7%90%86%E8%A7%A3%E6%97%A5%E5%BF%97%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%AD%97%E7%AC%A6%E7%9A%84%E5%90%AB%E4%B9%89">理解日志格式化字符的含义</a></p>
<h3 id="在maven中使用log4j" tabindex="-1"><a class="header-anchor" href="#在maven中使用log4j" aria-hidden="true">#</a> 在Maven中使用Log4j</h3>
<p>目前位置<code v-pre>Log4j</code>分为<code v-pre>Log4j1</code>和<code v-pre>Log4j2</code> 两个版本,在配置上有所不同</p>
<h4 id="导入log4j1" tabindex="-1"><a class="header-anchor" href="#导入log4j1" aria-hidden="true">#</a> 导入Log4j1</h4>
<p>将<code v-pre>log4j.properties</code>文件复制到<code v-pre>resources</code>下。另外在其中可以将全局的日志级别调高，避免大量debug信息的干扰。同时将对映射文件的操作调低，可以用来显示SQL语句的调试信息。开发阶段，建议启动控制的日志。<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409180127.png" alt="" loading="lazy"></p>
<h5 id="配置pom文件" tabindex="-1"><a class="header-anchor" href="#配置pom文件" aria-hidden="true">#</a> 配置Pom文件</h5>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;dependency&gt;  
    &lt;groupId&gt;log4j&lt;/groupId&gt;  
    &lt;artifactId&gt;log4j&lt;/artifactId&gt;  
    &lt;version&gt;1.2.17&lt;/version&gt;  
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="配置loj4g-properties文件" tabindex="-1"><a class="header-anchor" href="#配置loj4g-properties文件" aria-hidden="true">#</a> 配置loj4g.properties文件</h5>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token comment">#定义全局日志级别调试阶段推荐debug</span>
<span class="token comment">#log4j.rootLogger=debug,stdout,logfile   #及打印到控制台又输出到文件  </span>
<span class="token key attr-name">log4j.rootLogger</span><span class="token punctuation">=</span><span class="token value attr-value">debug,stdout  </span>
  
<span class="token comment">#stdout 输出到控制台  </span>
<span class="token key attr-name">log4j.appender.stdout</span><span class="token punctuation">=</span><span class="token value attr-value">org.apache.log4j.ConsoleAppender  </span>
<span class="token key attr-name">log4j.appender.stdout.Target</span><span class="token punctuation">=</span><span class="token value attr-value">System.err  </span>
<span class="token key attr-name">log4j.appender.stdout.layout</span><span class="token punctuation">=</span><span class="token value attr-value">org.apache.log4j.SimpleLayout  </span>
  
<span class="token comment">#logfile 输出到文件  </span>
<span class="token key attr-name">log4j.appender.logfile</span><span class="token punctuation">=</span><span class="token value attr-value">org.apache.log4j.FileAppender  </span>
<span class="token key attr-name">log4j.appender.logfile.File</span><span class="token punctuation">=</span><span class="token value attr-value">d:/meturing.log  </span>
<span class="token key attr-name">log4j.appender.logfile.layout</span><span class="token punctuation">=</span><span class="token value attr-value">org.apache.log4j.PatternLayout  </span>
<span class="token key attr-name">log4j.appender.logfile.layout.ConversionPattern</span><span class="token punctuation">=</span><span class="token value attr-value">%d{yyyy-MM-dd HH:mm:ss} %l %F %p %m%n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h5>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409180306.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="导入log4j2" tabindex="-1"><a class="header-anchor" href="#导入log4j2" aria-hidden="true">#</a> 导入Log4j2</h4>
<p>将<code v-pre>log4j2.xml</code>文件负责到<code v-pre>resources</code>下<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409180815.png" alt="" loading="lazy"></p>
<h5 id="配置pom文件-1" tabindex="-1"><a class="header-anchor" href="#配置pom文件-1" aria-hidden="true">#</a> 配置Pom文件</h5>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;dependency&gt;  
    &lt;groupId&gt;org.apache.logging.log4j&lt;/groupId&gt;  
    &lt;artifactId&gt;log4j-core&lt;/artifactId&gt;  
    &lt;version&gt;2.12.1&lt;/version&gt;  
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="配置log4j2-xml文件" tabindex="-1"><a class="header-anchor" href="#配置log4j2-xml文件" aria-hidden="true">#</a> 配置log4j2.xml文件</h5>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;  
&lt;Configuration status=&quot;DEBUG&quot;&gt;  
    &lt;Appenders&gt;  
        &lt;Console name=&quot;Console&quot; target=&quot;SYSTEM_ERR&quot;&gt;  
            &lt;PatternLayout pattern=&quot;%d{YYYY-MM-dd HH:mm:ss} [%t] %-5p %c{1}:%L - %msg%n&quot; /&gt;  
        &lt;/Console&gt;  
  
        &lt;RollingFile name=&quot;RollingFile&quot; filename=&quot;log/test.log&quot;  
                     filepattern=&quot;${logPath}/%d{YYYYMMddHHmmss}-fargo.log&quot;&gt;  
            &lt;PatternLayout pattern=&quot;%d{YYYY-MM-dd HH:mm:ss} [%t] %-5p %c{1}:%L - %msg%n&quot; /&gt;  
            &lt;Policies&gt;  
                &lt;SizeBasedTriggeringPolicy size=&quot;10 MB&quot; /&gt;  
            &lt;/Policies&gt;  
            &lt;DefaultRolloverStrategy max=&quot;20&quot; /&gt;  
        &lt;/RollingFile&gt;  
  
    &lt;/Appenders&gt;  
    &lt;Loggers&gt;  
        &lt;Root level=&quot;DEBUG&quot;&gt;  
            &lt;AppenderRef ref=&quot;Console&quot; /&gt;  
&lt;!--            &lt;AppenderRef ref=&quot;RollingFile&quot; /&gt;--&gt;  
        &lt;/Root&gt;  
    &lt;/Loggers&gt;  
&lt;/Configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用多个配置在Root中使用多行<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409180649.png" alt="" loading="lazy"></p>
<h5 id="效果-1" tabindex="-1"><a class="header-anchor" href="#效果-1" aria-hidden="true">#</a> 效果</h5>
<p>我们发现Log4j2的日志打印的更加详细<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409180901.png" alt="" loading="lazy"></p>
<h3 id="配置mybatis使用的日志" tabindex="-1"><a class="header-anchor" href="#配置mybatis使用的日志" aria-hidden="true">#</a> 配置Mybatis使用的日志</h3>
<p>我们在Mybatis官网可以看到: <a href="https://mybatis.net.cn/configuration.html#settings" target="_blank" rel="noopener noreferrer">https://mybatis.net.cn/configuration.html#settings<ExternalLinkIcon/></a><br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409181124.png" alt="" loading="lazy"><br>
<strong>logImpl参数可以指定使用的日志实现,默认是没有配置的,会按照顺序依次查找</strong></p>
<h4 id="修改sqlmapconfig-xml文件" tabindex="-1"><a class="header-anchor" href="#修改sqlmapconfig-xml文件" aria-hidden="true">#</a> 修改sqlMapConfig.xml文件</h4>
<p>注意Mybatis.xml配置文件编辑时需要注意标签的先后顺序,否则会报错,标签的先后顺序需要遵守左侧的层级<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409181531.png" alt="" loading="lazy"></p>
<p>我们看到官方说明文档中,在settings配置中可以指定log框架,所以我们新增logImpl属性配置<br>
如果没有配置,默认情况下Mybatis会自动按照顺序寻找使用的log框架<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409181332.png" alt="" loading="lazy"></p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;settings&gt;  
    &lt;setting name=&quot;logImpl&quot; value=&quot;LOG4J&quot;/&gt;  
&lt;/settings&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事务配置" tabindex="-1"><a class="header-anchor" href="#事务配置" aria-hidden="true">#</a> 事务配置</h2>
<p>在 MyBatis 中有两种类型的事务管理器（也就是 <code v-pre>type=&quot;[JDBC|MANAGED]&quot;</code>）：</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409190001.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="jdbc" tabindex="-1"><a class="header-anchor" href="#jdbc" aria-hidden="true">#</a> JDBC</h3>
<p><code v-pre>JDBC</code> – 这个配置直接使用了 JDBC 的提交和回滚功能，它依赖从数据源获得的连接来管理事务作用域。默认情况下，为了与某些驱动程序兼容，它在关闭连接时启用自动提交。然而，对于某些驱动程序来说，启用自动提交不仅是不必要的，而且是一个代价高昂的操作。因此，从 3.5.10 版本开始，你可以通过将 &quot;skipSetAutoCommitOnClose&quot; 属性设置为 &quot;true&quot; 来跳过这个步骤。例如：</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;transactionManager type=&quot;JDBC&quot;&gt;
  &lt;property name=&quot;skipSetAutoCommitOnClose&quot; value=&quot;true&quot;/&gt;
&lt;/transactionManager&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="managed" tabindex="-1"><a class="header-anchor" href="#managed" aria-hidden="true">#</a> MANAGED</h3>
<p><code v-pre>MANAGED</code> – 这个配置几乎没做什么。它从不提交或回滚一个连接，而是让容器来管理事务的整个生命周期（(比如 Spring 或 JEE 应用服务器的上下文）。 默认情况下它会关闭连接。然而一些容器并不希望连接被关闭，因此需要将 <strong>closeConnection 属性设置为 false 来阻止默认的关闭行为</strong>。<br>
<strong>mybatis本身并不做事务的处理,交给其他框架去处理事务,如spring</strong> , 例如:</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;transactionManager type=&quot;MANAGED&quot;&gt;
  &lt;property name=&quot;closeConnection&quot; value=&quot;false&quot;/&gt;
&lt;/transactionManager&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="映射文件的加载方式" tabindex="-1"><a class="header-anchor" href="#映射文件的加载方式" aria-hidden="true">#</a> 映射文件的加载方式</h2>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409190305.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>既然 MyBatis 的行为已经由上述元素配置完了，我们现在就要来定义 SQL 映射语句了。 但首先，我们需要告诉 MyBatis 到哪里去找到这些语句。 在自动查找资源方面，Java 并没有提供一个很好的解决方案，所以最好的办法是直接告诉 MyBatis 到哪里去找映射文件。 你可以使用相对于类路径的资源引用，或完全限定资源定位符（包括 <code v-pre>file:///</code> 形式的 URL），或类名和包名等。例如：</p>
<h3 id="使用类路径的资源引用" tabindex="-1"><a class="header-anchor" href="#使用类路径的资源引用" aria-hidden="true">#</a> 使用类路径的资源引用</h3>
<p>mapper映射文件的文件路径导入 使用的mapper标签的resource属性</p>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;!-- 使用相对于类路径的资源引用 --&gt;
&lt;mappers&gt;
  &lt;mapper resource=&quot;org/mybatis/builder/AuthorMapper.xml&quot;/&gt;
  &lt;mapper resource=&quot;org/mybatis/builder/BlogMapper.xml&quot;/&gt;
  &lt;mapper resource=&quot;org/mybatis/builder/PostMapper.xml&quot;/&gt;
&lt;/mappers&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用接口的全限定名导入" tabindex="-1"><a class="header-anchor" href="#使用接口的全限定名导入" aria-hidden="true">#</a> 使用接口的全限定名导入</h3>
<p>接口的全限定名导入 使用的是mapper标签的class属性 (基于接口的代理模式开发)</p>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;!-- 使用相对于类路径的资源引用 --&gt;
&lt;mappers&gt;
  &lt;mapper class=&quot;org.mybatis.builder.AuthorMapper&quot;/&gt;
  &lt;mapper class=&quot;org.mybatis.builder.BlogMapper&quot;/&gt;
  &lt;mapper class=&quot;org.mybatis.builder.PostMapper&quot;/&gt;
&lt;/mappers&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用完全限定资源定位符-url" tabindex="-1"><a class="header-anchor" href="#使用完全限定资源定位符-url" aria-hidden="true">#</a> 使用完全限定资源定位符（URL）</h3>
<p>网络资源路径 使用的mapper标签的url属性</p>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;!-- 使用完全限定资源定位符（URL） --&gt;
&lt;mappers&gt;
  &lt;mapper url=&quot;file:///var/mappers/AuthorMapper.xml&quot;/&gt;
  &lt;mapper url=&quot;file:///var/mappers/BlogMapper.xml&quot;/&gt;
  &lt;mapper url=&quot;file:///var/mappers/PostMapper.xml&quot;/&gt;
&lt;/mappers&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将包内的映射器接口全部注册为映射器" tabindex="-1"><a class="header-anchor" href="#将包内的映射器接口全部注册为映射器" aria-hidden="true">#</a> 将包内的映射器接口全部注册为映射器</h3>
<p>包扫描形式加载所有的mapper映射文件 使用的是 package标签</p>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;!-- 将包内的映射器接口全部注册为映射器 --&gt;
&lt;mappers&gt;
  &lt;package name=&quot;org.mybatis.builder&quot;/&gt;
&lt;/mappers&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实体类别名处理" tabindex="-1"><a class="header-anchor" href="#实体类别名处理" aria-hidden="true">#</a> 实体类别名处理</h2>
<p>类型别名可为 Java 类型设置一个缩写名字。 它仅用于 XML 配置，意在降低冗余的全限定类名书写。例如：<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409191334.png" alt="" loading="lazy"></p>
<h3 id="手动指定-typealias" tabindex="-1"><a class="header-anchor" href="#手动指定-typealias" aria-hidden="true">#</a> 手动指定 typeAlias</h3>
<h4 id="配置文件代码" tabindex="-1"><a class="header-anchor" href="#配置文件代码" aria-hidden="true">#</a> 配置文件代码</h4>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;typeAliases&gt;  
    &lt;typeAlias alias=&quot;dept&quot; type=&quot;com.meturing.pojo.Dept&quot;/&gt;  
&lt;/typeAliases&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h4>
<p>我们可以直接使用指定的别名,就不用再写包的全类路径了</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409191710.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="包扫描-package" tabindex="-1"><a class="header-anchor" href="#包扫描-package" aria-hidden="true">#</a> 包扫描 package</h3>
<h4 id="配置文件代码-1" tabindex="-1"><a class="header-anchor" href="#配置文件代码-1" aria-hidden="true">#</a> 配置文件代码</h4>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409191849.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;!--  别名  --&gt;  
&lt;typeAliases&gt;  
    &lt;package name=&quot;com.meturing.pojo&quot; /&gt;  
&lt;/typeAliases&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h4>
<p><strong>在没有注解的情况下，会使用 Bean 的首字母小写的非限定类名来作为它的别名。</strong><br>
比如 <code v-pre>domain.blog.Author</code> 的别名为 <code v-pre>author</code>；</p>
<p>若有注解<code v-pre>@Alias</code> ，则别名为其注解值。见下面的例子：<br>
<img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409192056.png" alt="" loading="lazy"></p>
<h2 id="外部属性配置文件存储数据库链接信息" tabindex="-1"><a class="header-anchor" href="#外部属性配置文件存储数据库链接信息" aria-hidden="true">#</a> 外部属性配置文件存储数据库链接信息</h2>
<h3 id="创建外部properties文件" tabindex="-1"><a class="header-anchor" href="#创建外部properties文件" aria-hidden="true">#</a> 创建外部properties文件</h3>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">jdbc_driver</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver  </span>
<span class="token key attr-name">jdbc_url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://192.168.1.188:3306/test?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=Asia/Shanghai  </span>
<span class="token key attr-name">jdbc_username</span><span class="token punctuation">=</span><span class="token value attr-value">root  </span>
<span class="token key attr-name">jdbc_password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意:</p>
<ol>
<li>properties文件是Key=value的形式</li>
<li>注意末尾空格也会被当作Value的字符</li>
<li>key最好不要使用常用类型,比如:<code v-pre>name </code>/ <code v-pre>userName</code>  / <code v-pre>type</code>  , 推荐使用下划线区分用途,如:<code v-pre>jdbc_username</code></li>
</ol>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409195042.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>properties</code>属性可以在外部进行配置，并可以进行动态替换。你既可以在典型的 Java 属性文件中配置这些属性，也可以在 properties 元素的子元素中设置。例如：</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409194918.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;!--  属性  --&gt;  
&lt;properties resource=&quot;jdbc_config.properties&quot;&gt;  
    &lt;property name=&quot;username&quot; value=&quot;dev_user&quot;/&gt;  
    &lt;property name=&quot;password&quot; value=&quot;F2Fa3!33TYyg&quot;/&gt;  
&lt;/properties&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置好的属性可以在整个配置文件中用来替换需要动态配置的属性值。比如:</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409194955.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;dataSource type=&quot;POOLED&quot;&gt;
  &lt;property name=&quot;driver&quot; value=&quot;${driver}&quot;/&gt;
  &lt;property name=&quot;url&quot; value=&quot;${url}&quot;/&gt;
  &lt;property name=&quot;username&quot; value=&quot;${username}&quot;/&gt;
  &lt;property name=&quot;password&quot; value=&quot;${password}&quot;/&gt;
&lt;/dataSource&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h3>
<p>如果一个属性在不只一个地方进行了配置，那么，MyBatis 将按照下面的顺序来加载:</p>
<ul>
<li>首先读取在 properties 元素体内指定的属性。</li>
<li>然后根据 properties 元素中的 resource 属性读取类路径下属性文件，或根据 url 属性指定的路径读取属性文件，并覆盖之前读取过的同名属性。</li>
<li>最后读取作为方法参数传递的属性，并覆盖之前读取过的同名属性。</li>
</ul>
<p><strong>因此，通过方法参数传递的属性具有最高优先级，resource/url 属性中指定的配置文件次之，最低优先级的则是 properties 元素中指定的属性</strong></p>
<h3 id="设置默认值" tabindex="-1"><a class="header-anchor" href="#设置默认值" aria-hidden="true">#</a> 设置默认值</h3>
<p>从 MyBatis 3.4.2 开始，你可以为占位符指定一个默认值。例如：</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;dataSource type=&quot;POOLED&quot;&gt;
  &lt;!-- ... --&gt;
  &lt;property name=&quot;username&quot; value=&quot;${username:ut_user}&quot;/&gt; &lt;!-- 如果属性 'username' 没有被配置，'username' 属性的值将为 'ut_user' --&gt;
&lt;/dataSource&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个特性默认是关闭的。要启用这个特性，需要添加一个特定的属性来开启这个特性。例如：</p>
<div class="language-Xml line-numbers-mode" data-ext="Xml"><pre v-pre class="language-Xml"><code>&lt;properties resource=&quot;org/mybatis/example/config.properties&quot;&gt;
  &lt;!-- ... --&gt;
  &lt;property name=&quot;org.apache.ibatis.parsing.PropertyParser.enable-default-value&quot; value=&quot;true&quot;/&gt; &lt;!-- 启用默认值特性 --&gt;
&lt;/properties&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你在属性名中使用了 <code v-pre>&quot;:&quot;</code> 字符（如：<code v-pre>db:username</code>），或者在 SQL 映射中使用了 OGNL 表达式的三元运算符（如： <code v-pre>${tableName != null ? tableName : 'global_constants'}</code>），<strong>就需要设置特定的属性来修改分隔属性名和默认值的字符</strong>。<br>
 例如：</p>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;properties resource=&quot;org/mybatis/example/config.properties&quot;&gt;
  &lt;!-- ... --&gt;
  &lt;property name=&quot;org.apache.ibatis.parsing.PropertyParser.default-value-separator&quot; value=&quot;?:&quot;/&gt; &lt;!-- 修改默认值的分隔符 --&gt;
&lt;/properties&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre v-pre class="language-XMl"><code>&lt;dataSource type=&quot;POOLED&quot;&gt;
  &lt;!-- ... --&gt;
  &lt;property name=&quot;username&quot; value=&quot;${db:username?:ut_user}&quot;/&gt;
&lt;/dataSource&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2>
<p>在使用Mapper设置返回值类型时,我们对于基础类型无需写他的全类路径,Mybatis底层已经帮我们实现了别名</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409200018.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>下面是一些为常见的 Java 类型内建的类型别名。它们都是不区分大小写的，注意，为了应对原始类型的命名重复，采取了特殊的命名风格。</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/03_Mybatis配置/assets/Pasted_image_20230409195842.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>总结来说:</p>
<p>原当初是大驼峰的,首字母全部转小写,如: <code v-pre>ArrayList</code> -&gt; <code v-pre>arraylist</code><br>
原单词首字母是小写的个体单词,首字母前面加下划线,如:<code v-pre>int </code>-&gt;<code v-pre> _int</code></p>
</div></template>


