<template><div><h2 id="分页插件" tabindex="-1"><a class="header-anchor" href="#分页插件" aria-hidden="true">#</a> 分页插件</h2>
<h3 id="创建插件配置类" tabindex="-1"><a class="header-anchor" href="#创建插件配置类" aria-hidden="true">#</a> 创建插件配置类</h3>
<p>在MyBatisPlus中集成了分页插件，我们不需要单独的引入，只需要添加对应的配置类</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/04_常用插件/assets/image-20230418232914910.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Configuration  
@MapperScan(&quot;com.meturing.mybatisplusdemo.mapper&quot;)  
public class MyBatisPlusConfig {  
    /**  
     * 新的分页插件,一缓和二缓遵循mybatis的规则,  
     * 需要设置 MybatisConfiguration#useDeprecatedExecutor = false 避免缓存出现问题(该属性会在旧插件移除后一同移除)  
     */    @Bean  
    public MybatisPlusInterceptor mybatisPlusInterceptor() {  
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();  
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));  
        return interceptor;  
    }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意:MapperScan需要指向Mapper层的包,此时由于@Configuration的导入,所以可以给启动类上的包扫描删除掉</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/04_常用插件/assets/image-20230418233025024.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后就可以测试操作了</p>
<h3 id="使用插件" tabindex="-1"><a class="header-anchor" href="#使用插件" aria-hidden="true">#</a> 使用插件</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Test  
void queryPage() {  
    Page&lt;User&gt; page = new Page&lt;&gt;(1,5);  
    Page&lt;User&gt; userPage = userService.page(page,null);  
    System.out.println(&quot;userPage.getCurrent() = &quot; + userPage.getCurrent());  
    System.out.println(&quot;userPage.getSize() = &quot; + userPage.getSize());  
    System.out.println(&quot;userPage.getTotal() = &quot; + userPage.getTotal());  
    System.out.println(&quot;userPage.getPages() = &quot; + userPage.getPages());  
    System.out.println(&quot;userPage.hasPrevious() = &quot; + userPage.hasPrevious());  
    System.out.println(&quot;userPage.hasNext() = &quot; + userPage.hasNext());  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果</p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/04_常用插件/assets/image-20230418232836030.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="乐观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁" aria-hidden="true">#</a> 乐观锁</h2>
<p>当要更新一条记录的时候，希望这条记录没有被别人更新</p>
<p>乐观锁实现方式：</p>
<ul>
<li>取出记录时，获取当前 version</li>
<li>更新时，带上这个 version</li>
<li>执行更新时， set version = newVersion where version = oldVersion</li>
<li>如果 version 不对，就更新失败</li>
</ul>
<h3 id="配置插件" tabindex="-1"><a class="header-anchor" href="#配置插件" aria-hidden="true">#</a> 配置插件</h3>
<p>在MyBatisPlusConfig类中导入</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@Bean
public MybatisPlusInterceptor mybatisPlusInterceptor() {
    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
    interceptor.addInnerInterceptor(new OptimisticLockerInnerInterceptor());
    return interceptor;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在实体类的字段上加上-version注解" tabindex="-1"><a class="header-anchor" href="#在实体类的字段上加上-version注解" aria-hidden="true">#</a> 在实体类的字段上加上<code v-pre>@Version</code>注解</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Version</span>
<span class="token keyword">private</span> <span class="token class-name">Integer</span> version<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>说明:</p>
<ul>
<li><strong>支持的数据类型只有:int,Integer,long,Long,Date,Timestamp,LocalDateTime</strong></li>
<li>整数类型下 <code v-pre>newVersion = oldVersion + 1</code></li>
<li><code v-pre>newVersion</code> 会回写到 <code v-pre>entity</code> 中</li>
<li>仅支持 <code v-pre>updateById(id)</code> 与 <code v-pre>update(entity, wrapper)</code> 方法</li>
<li><strong>在 <code v-pre>update(entity, wrapper)</code> 方法下, <code v-pre>wrapper</code> 不能复用!!!</strong></li>
</ul>
<h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>// Spring Boot 方式
@Configuration
@MapperScan(&quot;按需修改&quot;)
public class MybatisPlusConfig {
    /**
     * 旧版
     */
    @Bean
    public OptimisticLockerInterceptor optimisticLockerInterceptor() {
        return new OptimisticLockerInterceptor();
    }

    /**
     * 新版
     */
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor mybatisPlusInterceptor = new MybatisPlusInterceptor();
        mybatisPlusInterceptor.addInnerInterceptor(new OptimisticLockerInnerInterceptor());
        return mybatisPlusInterceptor;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码生成器" tabindex="-1"><a class="header-anchor" href="#代码生成器" aria-hidden="true">#</a> 代码生成器</h2>
<h3 id="添加依赖" tabindex="-1"><a class="header-anchor" href="#添加依赖" aria-hidden="true">#</a> 添加依赖</h3>
<div class="language-Xml line-numbers-mode" data-ext="Xml"><pre v-pre class="language-Xml"><code>&lt;!--    代码生成器    --&gt;  
&lt;dependency&gt;  
    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;  
    &lt;artifactId&gt;mybatis-plus-generator&lt;/artifactId&gt;  
    &lt;version&gt;3.5.2&lt;/version&gt;  
&lt;/dependency&gt;  
&lt;dependency&gt;  
    &lt;groupId&gt;org.freemarker&lt;/groupId&gt;  
    &lt;artifactId&gt;freemarker&lt;/artifactId&gt;  
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行代码" tabindex="-1"><a class="header-anchor" href="#运行代码" aria-hidden="true">#</a> 运行代码</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class MyFastAutoGenerator {  
    public static void main(String[] args) {  
        FastAutoGenerator.create(&quot;jdbc:mysql://192.168.1.188:3306/test?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=Asia/Shanghai&quot;  
                        , &quot;root&quot;, &quot;root&quot;)//数据源  
                .globalConfig(builder -&gt; {  
                    builder.author(&quot;meturing&quot;) // 设置作者  
                            //.enableSwagger() // 开启 swagger 模式  
                            .fileOverride() // 覆盖已生成文件  
                            .outputDir(&quot;D://MyBatisPlus&quot;); // 指定输出目录  
                })  
                .packageConfig(builder -&gt; {  
                    builder.parent(&quot;com.meturing.mp&quot;) // 设置父包名  
                            .moduleName(&quot;system&quot;) // 设置父包模块名  
                            .pathInfo(Collections.singletonMap(OutputFile.xml, &quot;D://&quot;)); // 设置mapperXml生成路径  
                })  
                .strategyConfig(builder -&gt; {  
                    builder.addInclude(&quot;t_user&quot;) // 设置需要生成的表名  
                            .addTablePrefix(&quot;t_&quot;, &quot;c_&quot;); // 设置过滤表前缀  
                })  
                .templateEngine(new FreemarkerTemplateEngine()) // 使用Freemarker引擎模板，默认的是Velocity引擎模板  
                .execute();  
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/05_基础框架/02_MyBatisPlus/04_常用插件/assets/image-20230418233354042.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="性能分析" tabindex="-1"><a class="header-anchor" href="#性能分析" aria-hidden="true">#</a> 性能分析</h2>
<p>性能分析拦截器，用于输出每条 SQL 语句及其执行时间</p>
<p>SQL 性能执行分析,开发环境使用，超过指定时间，停止运行。有助于发现问题</p>
<h3 id="配置插件-1" tabindex="-1"><a class="header-anchor" href="#配置插件-1" aria-hidden="true">#</a> 配置插件</h3>
<h4 id="引入依赖" tabindex="-1"><a class="header-anchor" href="#引入依赖" aria-hidden="true">#</a> 引入依赖</h4>
<div class="language-XML line-numbers-mode" data-ext="XML"><pre v-pre class="language-XML"><code>&lt;dependency&gt;
    &lt;groupId&gt;p6spy&lt;/groupId&gt;
    &lt;artifactId&gt;p6spy&lt;/artifactId&gt;
    &lt;version&gt;3.9.1&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置文件修改" tabindex="-1"><a class="header-anchor" href="#配置文件修改" aria-hidden="true">#</a> 配置文件修改</h4>
<ol>
<li>替换你的JDBC Driver为com.p6spy.engine.spy.P6SpyDriver</li>
<li>在原来urljdbc：后面添加p6spy：。如：jdbc:p6spy:mysql://127.0.0.1:3306或jdbc:p6spy:oracle:thin:@localhost:1521:ORCL</li>
<li>添加p6spy的配置文件spy.properties</li>
</ol>
<h4 id="spy-properties" tabindex="-1"><a class="header-anchor" href="#spy-properties" aria-hidden="true">#</a> spy.properties</h4>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">module.log</span><span class="token punctuation">=</span><span class="token value attr-value">com.p6spy.engine.logging.P6LogFactory,com.p6spy.engine.outage.P6OutageFactory</span>
<span class="token comment"># 自定义日志打印</span>
<span class="token key attr-name">logMessageFormat</span><span class="token punctuation">=</span><span class="token value attr-value">com.p6spy.engine.spy.appender.SingleLineFormat</span>
<span class="token comment">#logMessageFormat=com.p6spy.engine.spy.appender.CustomLineFormat</span>
<span class="token comment">#customLogMessageFormat=%(currentTime) | SQL耗时： %(executionTime) ms | 连接信息： %(category)-%(connectionId) | 执行语句： %(sql)</span>
<span class="token comment"># 使用控制台记录sql</span>
<span class="token key attr-name">appender</span><span class="token punctuation">=</span><span class="token value attr-value">com.p6spy.engine.spy.appender.StdoutLogger</span>
<span class="token comment">## 配置记录Log例外</span>
<span class="token key attr-name">excludecategories</span><span class="token punctuation">=</span><span class="token value attr-value">info,debug,result,batc,resultset</span>
<span class="token comment"># 设置使用p6spy driver来做代理</span>
<span class="token key attr-name">deregisterdrivers</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token comment"># 日期格式</span>
<span class="token key attr-name">dateformat</span><span class="token punctuation">=</span><span class="token value attr-value">yyyy-MM-dd HH:mm:ss</span>
<span class="token comment"># 实际驱动</span>
<span class="token key attr-name">driverlist</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token comment"># 是否开启慢SQL记录</span>
<span class="token key attr-name">outagedetection</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token comment"># 慢SQL记录标准 秒</span>
<span class="token key attr-name">outagedetectioninterval</span><span class="token punctuation">=</span><span class="token value attr-value">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义格式化" tabindex="-1"><a class="header-anchor" href="#自定义格式化" aria-hidden="true">#</a> 自定义格式化</h3>
<p>上面的的<code v-pre>logMessageFormat</code>是打印的格式<code v-pre>SingleLineFormat</code>最基础的配置是不会打印sql的。如果修改有两种方式：</p>
<ol>
<li>使用内置自定义格式化器（<code v-pre>CustomLineFormat</code>）手动配置打印格式</li>
</ol>
<p>修改配置文件的格式化为自定义格式化 logMessageFormat=com.p6spy.engine.spy.appender.CustomLineFormat</p>
<p>配置文件中添加手动配置打印的格式，推荐示例：<code v-pre>customLogMessageFormat=%(currentTime) | SQL耗时： %(executionTime) ms | 连接信息： %(category)-%(connectionId) | 执行语句： %(sql)</code></p>
<ol start="2">
<li>自己创建类实现<code v-pre>MessageFormattingStrategy</code>接口重写<code v-pre>formatMessage</code>方法即可</li>
</ol>
<p>创建类P6SpyLogger</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>public class P6SpyLogger implements MessageFormattingStrategy {
    /**
     * @Desc: 重写日志格式方法
     * now:当前时间
     * elapsed:执行耗时
     * category：执行分组
     * prepared：预编译sql语句
     * sql:执行的真实SQL语句，已替换占位
     */
    @Override
    public String formatMessage(int connectionId, String now, long elapsed, String category, String prepared, String sql) {
        return !&quot;&quot;.equals(sql.trim()) ? &quot;[ &quot; + LocalDateTime.now() + &quot; ] --- | took &quot;
                + elapsed + &quot;ms | &quot; + category + &quot; | connection &quot; + connectionId + &quot;\n &quot;
                + sql + &quot;;&quot; : &quot;&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将配置文件中的格式化器属性改为自己的类<code v-pre>logMessageFormat=com.xxx.xxx.P6SpyLogger</code></p>
<h3 id="p6spy有3中日志输出方式" tabindex="-1"><a class="header-anchor" href="#p6spy有3中日志输出方式" aria-hidden="true">#</a> p6spy有3中日志输出方式</h3>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token comment">#（推荐）使用Slf4j输出 配合SpringBoot使用日志门面</span>
<span class="token comment">#appender=com.p6spy.engine.spy.appender.Slf4JLogger</span>
<span class="token comment"># 仅控制台输出</span>
<span class="token comment">#appender=com.p6spy.engine.spy.appender.StdoutLogger</span>
<span class="token comment"># 文件输出，使用内置日志输出到文件</span>
<span class="token comment">#appender=com.p6spy.engine.spy.appender.FileLogger</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spy-properties详细说明" tabindex="-1"><a class="header-anchor" href="#spy-properties详细说明" aria-hidden="true">#</a> spy.properties详细说明</h3>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token comment"># 指定应用的日志拦截模块,默认为com.p6spy.engine.spy.P6SpyFactory</span>
<span class="token comment">#modulelist=com.p6spy.engine.spy.P6SpyFactory,com.p6spy.engine.logging.P6LogFactory,com.p6spy.engine.outage.P6OutageFactory</span>

<span class="token comment"># 真实JDBC driver , 多个以 逗号 分割 默认为空</span>
<span class="token comment">#driverlist=</span>

<span class="token comment"># 是否自动刷新 默认 flase</span>
<span class="token comment">#autoflush=false</span>

<span class="token comment"># 配置SimpleDateFormat日期格式 默认为空</span>
<span class="token comment">#dateformat=</span>

<span class="token comment"># 打印堆栈跟踪信息 默认flase</span>
<span class="token comment">#stacktrace=false</span>

<span class="token comment"># 如果 stacktrace=true，则可以指定具体的类名来进行过滤。</span>
<span class="token comment">#stacktraceclass=</span>

<span class="token comment"># 监测属性配置文件是否进行重新加载</span>
<span class="token comment">#reloadproperties=false</span>

<span class="token comment"># 属性配置文件重新加载的时间间隔，单位:秒 默认60s</span>
<span class="token comment">#reloadpropertiesinterval=60</span>

<span class="token comment"># 指定 Log 的 appender，取值：</span>
<span class="token comment">#appender=com.p6spy.engine.spy.appender.Slf4JLogger</span>
<span class="token comment">#appender=com.p6spy.engine.spy.appender.StdoutLogger</span>
<span class="token comment">#appender=com.p6spy.engine.spy.appender.FileLogger</span>

<span class="token comment"># 指定 Log 的文件名 默认 spy.log</span>
<span class="token comment">#logfile=spy.log</span>

<span class="token comment"># 指定是否每次是增加 Log，设置为 false 则每次都会先进行清空 默认true</span>
<span class="token comment">#append=true</span>

<span class="token comment"># 指定日志输出样式  默认为com.p6spy.engine.spy.appender.SingleLineFormat , 单行输出 不格式化语句</span>
<span class="token comment">#logMessageFormat=com.p6spy.engine.spy.appender.SingleLineFormat</span>
<span class="token comment"># 也可以采用  com.p6spy.engine.spy.appender.CustomLineFormat 来自定义输出样式, 默认值是%(currentTime)|%(executionTime)|%(category)|connection%(connectionId)|%(sqlSingleLine)</span>
<span class="token comment"># 可用的变量为:</span>
<span class="token comment">#   %(connectionId)            connection id</span>
<span class="token comment">#   %(currentTime)             当前时间</span>
<span class="token comment">#   %(executionTime)           执行耗时</span>
<span class="token comment">#   %(category)                执行分组</span>
<span class="token comment">#   %(effectiveSql)            提交的SQL 换行</span>
<span class="token comment">#   %(effectiveSqlSingleLine)  提交的SQL 不换行显示</span>
<span class="token comment">#   %(sql)                     执行的真实SQL语句，已替换占位</span>
<span class="token comment">#   %(sqlSingleLine)           执行的真实SQL语句，已替换占位 不换行显示</span>
<span class="token comment">#customLogMessageFormat=%(currentTime)|%(executionTime)|%(category)|connection%(connectionId)|%(sqlSingleLine)</span>

<span class="token comment"># date类型字段记录日志时使用的日期格式 默认dd-MMM-yy</span>
<span class="token comment">#databaseDialectDateFormat=dd-MMM-yy</span>

<span class="token comment"># boolean类型字段记录日志时使用的日期格式 默认boolean 可选值numeric</span>
<span class="token comment">#databaseDialectBooleanFormat=boolean</span>

<span class="token comment"># 是否通过jmx暴露属性 默认true</span>
<span class="token comment">#jmx=true</span>

<span class="token comment"># 如果jmx设置为true 指定通过jmx暴露属性时的前缀 默认为空</span>
<span class="token comment"># com.p6spy(.&lt;jmxPrefix>)?:name=&lt;optionsClassName></span>
<span class="token comment">#jmxPrefix=</span>

<span class="token comment"># 是否显示纳秒 默认false</span>
<span class="token comment">#useNanoTime=false</span>

<span class="token comment"># 实际数据源 JNDI</span>
<span class="token comment">#realdatasource=/RealMySqlDS</span>
<span class="token comment"># 实际数据源 datasource class</span>
<span class="token comment">#realdatasourceclass=com.mysql.jdbc.jdbc2.optional.MysqlDataSource</span>

<span class="token comment"># 实际数据源所携带的配置参数 以 k=v 方式指定 以 分号 分割</span>
<span class="token comment">#realdatasourceproperties=port;3306,serverName;myhost,databaseName;jbossdb,foo;bar</span>

<span class="token comment"># jndi数据源配置</span>
<span class="token comment"># 设置 JNDI 数据源的 NamingContextFactory。</span>
<span class="token comment">#jndicontextfactory=org.jnp.interfaces.NamingContextFactory</span>
<span class="token comment"># 设置 JNDI 数据源的提供者的 URL。</span>
<span class="token comment">#jndicontextproviderurl=localhost:1099</span>
<span class="token comment"># 设置 JNDI 数据源的一些定制信息，以分号分隔。</span>
<span class="token comment">#jndicontextcustom=java.naming.factory.url.pkgs;org.jboss.naming:org.jnp.interfaces</span>

<span class="token comment"># 是否开启日志过滤 默认false， 这项配置是否生效前提是配置了 include/exclude/sqlexpression</span>
<span class="token comment">#filter=false</span>

<span class="token comment"># 过滤 Log 时所包含的表名列表，以逗号分隔 默认为空</span>
<span class="token comment">#include=</span>
<span class="token comment"># 过滤 Log 时所排除的表名列表，以逗号分隔 默认为空</span>
<span class="token comment">#exclude=</span>

<span class="token comment"># 过滤 Log 时的 SQL 正则表达式名称  默认为空</span>
<span class="token comment">#sqlexpression=</span>

<span class="token comment">#显示指定过滤 Log 时排队的分类列表，取值: error, info, batch, debug, statement,</span>
<span class="token comment">#commit, rollback, result and resultset are valid values</span>
<span class="token comment"># (默认 info,debug,result,resultset,batch)</span>
<span class="token comment">#excludecategories=info,debug,result,resultset,batch</span>

<span class="token comment"># 是否过滤二进制字段</span>
<span class="token comment"># (default is false)</span>
<span class="token comment">#excludebinary=false</span>

<span class="token comment"># P6Log 模块执行时间设置，整数值 (以毫秒为单位)，只有当超过这个时间才进行记录 Log。 默认为0</span>
<span class="token comment">#executionThreshold=</span>

<span class="token comment"># P6Outage 模块是否记录较长时间运行的语句 默认false</span>
<span class="token comment"># outagedetection=true|false</span>
<span class="token comment"># P6Outage 模块执行时间设置，整数值 （以秒为单位)），只有当超过这个时间才进行记录 Log。 默认30s</span>
<span class="token comment"># outagedetectioninterval=integer time (seconds)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


