import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as a,c as r,d as l,b as n,w as t,e,f as o}from"./app-71f45f98.js";const g="/CoderNotes/assets/image-20230705175347672-3d4daa6a.png",c="/CoderNotes/assets/image-20230705175723725-e9b3b8a0.png",v="/CoderNotes/assets/image-20230705180033135-5abd7378.png",u="/CoderNotes/assets/image-20230705175700991-0bb3da5c.png",m="/CoderNotes/assets/image-20230705180207151-24e40a98.png",b="/CoderNotes/assets/image-20230705175816107-a6ed3cd1.png",q="/CoderNotes/assets/image-20230705175822100-8b909d41.png",p={},h=l("p",null,[e("在前面的学习中,我使用了 log4j1 / log4j2,也尝试了手动配置加入Logback日志."),l("br"),e(" 详见之前的手动配置 :")],-1),f=o('<h2 id="logback" tabindex="-1"><a class="header-anchor" href="#logback" aria-hidden="true">#</a> logback</h2><p>Spring Boot默认使用Logback组件作为日志管理。Logback是由log4j创始人设计的一个开源日志组件。</p><p>在Spring Boot项目中<strong>我们不需要额外的添加Logback的依赖</strong>，因为在<code>spring-boot-starter</code>或者<code>spring-boot-starter-web</code><br> 中已经包含了Logback的依赖。</p><h3 id="logback读取配置文件的步骤" tabindex="-1"><a class="header-anchor" href="#logback读取配置文件的步骤" aria-hidden="true">#</a> logback读取配置文件的步骤</h3><p>（1）在classpath下查找文件logback-test.xml<br> （2）如果文件不存在，则查找logback.groovy<br> （3）如果文件不存在，则查找logback.xml</p><h3 id="logback整合" tabindex="-1"><a class="header-anchor" href="#logback整合" aria-hidden="true">#</a> logback整合</h3><p>在resources目录下创建logback.xml配置文件即可</p><figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="配置参考" tabindex="-1"><a class="header-anchor" href="#配置参考" aria-hidden="true">#</a> 配置参考</h4><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
&lt;configuration&gt;
    &lt;!--定义日志文件的存储地址 勿在 LogBack 的配置中使用相对路径--&gt;
    &lt;property name=&quot;LOG_HOME&quot; value=&quot;\${catalina.base}/logs/&quot;/&gt;
    &lt;!-- 控制台输出 --&gt;
    &lt;appender name=&quot;Stdout&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;
        &lt;!-- 日志输出格式 --&gt;
        &lt;layout class=&quot;ch.qos.logback.classic.PatternLayout&quot;&gt;
            &lt;!--格式化输出：%d表示日期，%thread表示线程名，%-5level：级别从左显示5个字符宽度%msg：日志消息，%n是换行符--&gt;
            &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n
            &lt;/pattern&gt;
        &lt;/layout&gt;
    &lt;/appender&gt;
    &lt;!-- 按照每天生成日志文件 --&gt;
    &lt;appender name=&quot;RollingFile&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;
            &lt;!--日志文件输出的文件名--&gt;
            &lt;FileNamePattern&gt;\${LOG_HOME}/server.%d{yyyy-MM-dd}.log&lt;/FileNamePattern&gt;
            &lt;MaxHistory&gt;30&lt;/MaxHistory&gt;
        &lt;/rollingPolicy&gt;
        &lt;layout class=&quot;ch.qos.logback.classic.PatternLayout&quot;&gt;
            &lt;!--格式化输出：%d表示日期，%thread表示线程名，%-5level：级别从左显示5个字符宽度%msg：日志消息，%n是换行符--&gt;
            &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n
            &lt;/pattern&gt;
        &lt;/layout&gt;
        &lt;!--日志文件最大的大小--&gt;
        &lt;triggeringPolicy class=&quot;ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy&quot;&gt;
            &lt;MaxFileSize&gt;10MB&lt;/MaxFileSize&gt;
        &lt;/triggeringPolicy&gt;
    &lt;/appender&gt;

    &lt;!-- 日志输出级别 --&gt;
    &lt;root level=&quot;info&quot;&gt;
        &lt;appender-ref ref=&quot;Stdout&quot;/&gt;
        &lt;appender-ref ref=&quot;RollingFile&quot;/&gt;
    &lt;/root&gt;

    &lt;!-- 指定包的日志级别 --&gt;
    &lt;logger name=&quot;com.meturing.mapper&quot; level=&quot;DEBUG&quot;&gt;&lt;/logger&gt;

    &lt;!--日志异步到数据库 --&gt;
    &lt;!--&lt;appender name=&quot;DB&quot; class=&quot;ch.qos.logback.classic.db.DBAppender&quot;&gt;
            日志异步到数据库
            &lt;connectionSource class=&quot;ch.qos.logback.core.db.DriverManagerConnectionSource&quot;&gt;
               连接池
               &lt;dataSource class=&quot;com.mchange.v2.c3p0.ComboPooledDataSource&quot;&gt;
                  &lt;driverClass&gt;com.mysql.jdbc.Driver&lt;/driverClass&gt;
                  &lt;url&gt;jdbc:mysql://127.0.0.1:3306/databaseName&lt;/url&gt;
                  &lt;user&gt;root&lt;/user&gt;
                  &lt;password&gt;root&lt;/password&gt;
                &lt;/dataSource&gt;
            &lt;/connectionSource&gt;
      &lt;/appender&gt; --&gt;
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置解析" tabindex="-1"><a class="header-anchor" href="#配置解析" aria-hidden="true">#</a> 配置解析</h4><h5 id="日志存放位置" tabindex="-1"><a class="header-anchor" href="#日志存放位置" aria-hidden="true">#</a> 日志存放位置</h5><p><img src="`+c+'" alt="" loading="lazy"><br><code>&lt;property name=&quot;LOG_HOME&quot; value=&quot;${catalina.base}/logs/&quot;/&gt;</code> 设置了当前日志文件保存至Tomcat文件的logs目录中<br><img src="'+v+'" alt="" loading="lazy"></p><h5 id="日志级别与配置" tabindex="-1"><a class="header-anchor" href="#日志级别与配置" aria-hidden="true">#</a> 日志级别与配置</h5><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="指定包的日志级别" tabindex="-1"><a class="header-anchor" href="#指定包的日志级别" aria-hidden="true">#</a> 指定包的日志级别</h5><p>logback支持对指定的包执行特定的日志级别,我们通常可以对业务区域配置较低的日志级别,对数据层配置高的日志级别</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="日志存储至数据库中" tabindex="-1"><a class="header-anchor" href="#日志存储至数据库中" aria-hidden="true">#</a> 日志存储至数据库中</h5><p>logback支持将日志直接存储至日志数据库中,此操作是异步的,不会阻塞主线程的使用.</p><p>比如说 : 用户在前端执行的操作日志,会在后端异步存储到数据库中,不会影响到用户的使用</p><figure><img src="'+q+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>注意 : 此处需要独立配置日志数据库的数据源信息</p><h4 id="完整配置" tabindex="-1"><a class="header-anchor" href="#完整配置" aria-hidden="true">#</a> 完整配置</h4><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!-- 日志级别从低到高分为TRACE &lt; DEBUG &lt; INFO &lt; WARN &lt; ERROR &lt; FATAL，比如: 如果设置为WARN，则低于WARN的信息都不会输出 --&gt;
&lt;!-- scan:当此属性设置为true时，配置文档如果发生改变，将会被重新加载，默认值为true --&gt;
&lt;!-- scanPeriod:设置监测配置文档是否有修改的时间间隔，如果没有给出时间单位，默认单位是毫秒。当scan为true时，此属性生效。默认的时间间隔为1分钟。 --&gt;
&lt;!-- debug:当此属性设置为true时，将打印出logback内部日志信息，实时查看logback运行状态。默认值为false。 --&gt;
&lt;configuration scan=&quot;true&quot; scanPeriod=&quot;10 seconds&quot;&gt;
    &lt;contextName&gt;logback&lt;/contextName&gt;

    &lt;!-- name的值是变量的名称，value的值时变量定义的值。通过定义的值会被插入到logger上下文中。定义后，可以使“\${}”来使用变量。 --&gt;
    &lt;springProperty scope=&quot;context&quot; name=&quot;myLogLocation&quot; source=&quot;logging.file-location&quot; default=&quot;/var/log/myapp&quot;/&gt;
    &lt;property name=&quot;log.path&quot; value=&quot;\${myLogLocation}&quot;/&gt;

    &lt;!--0. 日志格式和颜色渲染 --&gt;
    &lt;!-- 彩色日志依赖的渲染类 --&gt;
    &lt;conversionRule conversionWord=&quot;clr&quot; converterClass=&quot;org.springframework.boot.logging.logback.ColorConverter&quot;/&gt;
    &lt;conversionRule conversionWord=&quot;wex&quot;
                    converterClass=&quot;org.springframework.boot.logging.logback.WhitespaceThrowableProxyConverter&quot;/&gt;
    &lt;conversionRule conversionWord=&quot;wEx&quot;
                    converterClass=&quot;org.springframework.boot.logging.logback.ExtendedWhitespaceThrowableProxyConverter&quot;/&gt;
    &lt;!-- 彩色日志格式 --&gt;
    &lt;property name=&quot;CONSOLE_LOG_PATTERN&quot;
              value=&quot;\${CONSOLE_LOG_PATTERN:-%clr(%d{yyyy-MM-dd HH:mm:ss.SSS}){faint} %clr(\${LOG_LEVEL_PATTERN:-%5p}) %clr(\${PID:- }){magenta} %clr(---){faint} %clr([%15.15t]){faint} %clr(%-40.40logger{39}){cyan} %clr(:){faint} %m%n\${LOG_EXCEPTION_CONVERSION_WORD:-%wEx}}&quot;/&gt;

    &lt;!--1. 输出到控制台--&gt;
    &lt;appender name=&quot;CONSOLE&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;
        &lt;!--此日志appender是为开发使用，只配置最底级别，控制台输出的日志级别是大于或等于此级别的日志信息--&gt;
        &lt;filter class=&quot;ch.qos.logback.classic.filter.ThresholdFilter&quot;&gt;
            &lt;level&gt;debug&lt;/level&gt;
        &lt;/filter&gt;
        &lt;encoder&gt;
            &lt;Pattern&gt;\${CONSOLE_LOG_PATTERN}&lt;/Pattern&gt;
            &lt;!-- 设置字符集 --&gt;
            &lt;charset&gt;UTF-8&lt;/charset&gt;
        &lt;/encoder&gt;
    &lt;/appender&gt;

    &lt;!--2. 输出到文档--&gt;
    &lt;!-- 2.1 level为 DEBUG 日志，时间滚动输出  --&gt;
    &lt;appender name=&quot;DEBUG_FILE&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;!-- 正在记录的日志文档的路径及文档名 --&gt;
        &lt;file&gt;\${log.path}/debug.log&lt;/file&gt;
        &lt;!--日志文档输出格式--&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n&lt;/pattern&gt;
            &lt;charset&gt;UTF-8&lt;/charset&gt; &lt;!-- 设置字符集 --&gt;
        &lt;/encoder&gt;
        &lt;!-- 日志记录器的滚动策略，按日期，按大小记录 --&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;
            &lt;!-- 日志归档 --&gt;
            &lt;fileNamePattern&gt;\${log.path}/debug-%d{yyyy-MM-dd}.%i.log&lt;/fileNamePattern&gt;
            &lt;timeBasedFileNamingAndTriggeringPolicy class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP&quot;&gt;
                &lt;maxFileSize&gt;100MB&lt;/maxFileSize&gt;
            &lt;/timeBasedFileNamingAndTriggeringPolicy&gt;
            &lt;!--日志文档保留天数--&gt;
            &lt;maxHistory&gt;15&lt;/maxHistory&gt;
        &lt;/rollingPolicy&gt;
        &lt;!-- 此日志文档只记录debug级别的 --&gt;
        &lt;filter class=&quot;ch.qos.logback.classic.filter.LevelFilter&quot;&gt;
            &lt;level&gt;debug&lt;/level&gt;
            &lt;onMatch&gt;ACCEPT&lt;/onMatch&gt;
            &lt;onMismatch&gt;DENY&lt;/onMismatch&gt;
        &lt;/filter&gt;
    &lt;/appender&gt;

    &lt;!-- 2.2 level为 INFO 日志，时间滚动输出  --&gt;
    &lt;appender name=&quot;INFO_FILE&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;!-- 正在记录的日志文档的路径及文档名 --&gt;
        &lt;file&gt;\${log.path}/info.log&lt;/file&gt;
        &lt;!--日志文档输出格式--&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n&lt;/pattern&gt;
            &lt;charset&gt;UTF-8&lt;/charset&gt;
        &lt;/encoder&gt;
        &lt;!-- 日志记录器的滚动策略，按日期，按大小记录 --&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;
            &lt;!-- 每天日志归档路径以及格式 --&gt;
            &lt;fileNamePattern&gt;\${log.path}/info-%d{yyyy-MM-dd}.%i.log&lt;/fileNamePattern&gt;
            &lt;timeBasedFileNamingAndTriggeringPolicy class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP&quot;&gt;
                &lt;maxFileSize&gt;100MB&lt;/maxFileSize&gt;
            &lt;/timeBasedFileNamingAndTriggeringPolicy&gt;
            &lt;!--日志文档保留天数--&gt;
            &lt;maxHistory&gt;15&lt;/maxHistory&gt;
        &lt;/rollingPolicy&gt;
        &lt;!-- 此日志文档只记录info级别的 --&gt;
        &lt;filter class=&quot;ch.qos.logback.classic.filter.LevelFilter&quot;&gt;
            &lt;level&gt;info&lt;/level&gt;
            &lt;onMatch&gt;ACCEPT&lt;/onMatch&gt;
            &lt;onMismatch&gt;DENY&lt;/onMismatch&gt;
        &lt;/filter&gt;
    &lt;/appender&gt;

    &lt;!-- 2.3 level为 WARN 日志，时间滚动输出  --&gt;
    &lt;appender name=&quot;WARN_FILE&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;!-- 正在记录的日志文档的路径及文档名 --&gt;
        &lt;file&gt;\${log.path}/warn.log&lt;/file&gt;
        &lt;!--日志文档输出格式--&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n&lt;/pattern&gt;
            &lt;charset&gt;UTF-8&lt;/charset&gt; &lt;!-- 此处设置字符集 --&gt;
        &lt;/encoder&gt;
        &lt;!-- 日志记录器的滚动策略，按日期，按大小记录 --&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;
            &lt;fileNamePattern&gt;\${log.path}/warn-%d{yyyy-MM-dd}.%i.log&lt;/fileNamePattern&gt;
            &lt;timeBasedFileNamingAndTriggeringPolicy class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP&quot;&gt;
                &lt;maxFileSize&gt;100MB&lt;/maxFileSize&gt;
            &lt;/timeBasedFileNamingAndTriggeringPolicy&gt;
            &lt;!--日志文档保留天数--&gt;
            &lt;maxHistory&gt;15&lt;/maxHistory&gt;
        &lt;/rollingPolicy&gt;
        &lt;!-- 此日志文档只记录warn级别的 --&gt;
        &lt;filter class=&quot;ch.qos.logback.classic.filter.LevelFilter&quot;&gt;
            &lt;level&gt;warn&lt;/level&gt;
            &lt;onMatch&gt;ACCEPT&lt;/onMatch&gt;
            &lt;onMismatch&gt;DENY&lt;/onMismatch&gt;
        &lt;/filter&gt;
    &lt;/appender&gt;

    &lt;!-- 2.4 level为 ERROR 日志，时间滚动输出  --&gt;
    &lt;appender name=&quot;ERROR_FILE&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;!-- 正在记录的日志文档的路径及文档名 --&gt;
        &lt;file&gt;\${log.path}/error.log&lt;/file&gt;
        &lt;!--日志文档输出格式--&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n&lt;/pattern&gt;
            &lt;charset&gt;UTF-8&lt;/charset&gt; &lt;!-- 此处设置字符集 --&gt;
        &lt;/encoder&gt;
        &lt;!-- 日志记录器的滚动策略，按日期，按大小记录 --&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;
            &lt;fileNamePattern&gt;\${log.path}/error-%d{yyyy-MM-dd}.%i.log&lt;/fileNamePattern&gt;
            &lt;timeBasedFileNamingAndTriggeringPolicy class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP&quot;&gt;
                &lt;maxFileSize&gt;100MB&lt;/maxFileSize&gt;
            &lt;/timeBasedFileNamingAndTriggeringPolicy&gt;
            &lt;!--日志文档保留天数--&gt;
            &lt;maxHistory&gt;15&lt;/maxHistory&gt;
        &lt;/rollingPolicy&gt;
        &lt;!-- 此日志文档只记录ERROR级别的 --&gt;
        &lt;filter class=&quot;ch.qos.logback.classic.filter.LevelFilter&quot;&gt;
            &lt;level&gt;ERROR&lt;/level&gt;
            &lt;onMatch&gt;ACCEPT&lt;/onMatch&gt;
            &lt;onMismatch&gt;DENY&lt;/onMismatch&gt;
        &lt;/filter&gt;
    &lt;/appender&gt;

    &lt;!-- 2.5 所有 除了DEBUG级别的其它高于DEBUG的 日志，记录到一个文件  --&gt;
    &lt;appender name=&quot;ALL_FILE&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;!-- 正在记录的日志文档的路径及文档名 --&gt;
        &lt;file&gt;\${log.path}/all.log&lt;/file&gt;
        &lt;!--日志文档输出格式--&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n&lt;/pattern&gt;
            &lt;charset&gt;UTF-8&lt;/charset&gt; &lt;!-- 此处设置字符集 --&gt;
        &lt;/encoder&gt;
        &lt;!-- 日志记录器的滚动策略，按日期，按大小记录 --&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;
            &lt;fileNamePattern&gt;\${log.path}/all-%d{yyyy-MM-dd}.%i.log&lt;/fileNamePattern&gt;
            &lt;timeBasedFileNamingAndTriggeringPolicy class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP&quot;&gt;
                &lt;maxFileSize&gt;100MB&lt;/maxFileSize&gt;
            &lt;/timeBasedFileNamingAndTriggeringPolicy&gt;
            &lt;!--日志文档保留天数--&gt;
            &lt;maxHistory&gt;15&lt;/maxHistory&gt;
        &lt;/rollingPolicy&gt;
        &lt;!-- 此日志文档记录除了DEBUG级别的其它高于DEBUG的 --&gt;
        &lt;filter class=&quot;ch.qos.logback.classic.filter.LevelFilter&quot;&gt;
            &lt;level&gt;DEBUG&lt;/level&gt;
            &lt;onMatch&gt;DENY&lt;/onMatch&gt;
            &lt;onMismatch&gt;ACCEPT&lt;/onMismatch&gt;
        &lt;/filter&gt;
    &lt;/appender&gt;

    &lt;!--
        &lt;logger&gt;用来设置某一个包或者具体的某一个类的日志打印级别、
        以及指定&lt;appender&gt;。&lt;logger&gt;仅有一个name属性，
        一个可选的level和一个可选的addtivity属性。
        name:用来指定受此logger约束的某一个包或者具体的某一个类。
        level:用来设置打印级别，大小写无关：TRACE, DEBUG, INFO, WARN, ERROR, ALL 和 OFF，
              还有一个特殊值INHERITED或者同义词NULL，代表强制执行上级的级别。
              如果未设置此属性，那么当前logger将会继承上级的级别。
        addtivity:是否向上级logger传递打印信息。默认是true。
        &lt;logger name=&quot;org.springframework.web&quot; level=&quot;info&quot;/&gt;
        &lt;logger name=&quot;org.springframework.scheduling.annotation.ScheduledAnnotationBeanPostProcessor&quot; level=&quot;INFO&quot;/&gt;
    --&gt;

    &lt;!--
        使用mybatis的时候，sql语句是debug下才会打印，而这里我们只配置了info，所以想要查看sql语句的话，有以下两种操作：
        第一种把&lt;root level=&quot;info&quot;&gt;改成&lt;root level=&quot;DEBUG&quot;&gt;这样就会打印sql，不过这样日志那边会出现很多其他消息
        第二种就是单独给dao下目录配置debug模式，代码如下，这样配置sql语句会打印，其他还是正常info级别：
        【logging.level.org.mybatis=debug logging.level.dao=debug】
     --&gt;

    &lt;!--
        root节点是必选节点，用来指定最基础的日志输出级别，只有一个level属性
        level:用来设置打印级别，大小写无关：TRACE, DEBUG, INFO, WARN, ERROR, ALL 和 OFF，
        不能设置为INHERITED或者同义词NULL。默认是DEBUG
        可以包含零个或多个元素，标识这个appender将会添加到这个logger。
    --&gt;

    &lt;!-- 4  最终的策略：
                 基本策略(root级) + 根据profile在启动时, logger标签中定制化package日志级别(优先级高于上面的root级)--&gt;
    &lt;springProfile name=&quot;dev&quot;&gt;
        &lt;root level=&quot;info&quot;&gt;
            &lt;appender-ref ref=&quot;CONSOLE&quot;/&gt;
            &lt;appender-ref ref=&quot;DEBUG_FILE&quot;/&gt;
            &lt;appender-ref ref=&quot;INFO_FILE&quot;/&gt;
            &lt;appender-ref ref=&quot;WARN_FILE&quot;/&gt;
            &lt;appender-ref ref=&quot;ERROR_FILE&quot;/&gt;
            &lt;appender-ref ref=&quot;ALL_FILE&quot;/&gt;
        &lt;/root&gt;
        &lt;logger name=&quot;com.xusanduo.demo&quot; level=&quot;debug&quot;/&gt; &lt;!-- 开发环境, 指定某包日志为debug级 --&gt;
    &lt;/springProfile&gt;

    &lt;springProfile name=&quot;test&quot;&gt;
        &lt;root level=&quot;info&quot;&gt;
            &lt;appender-ref ref=&quot;CONSOLE&quot;/&gt;
            &lt;appender-ref ref=&quot;DEBUG_FILE&quot;/&gt;
            &lt;appender-ref ref=&quot;INFO_FILE&quot;/&gt;
            &lt;appender-ref ref=&quot;WARN_FILE&quot;/&gt;
            &lt;appender-ref ref=&quot;ERROR_FILE&quot;/&gt;
            &lt;appender-ref ref=&quot;ALL_FILE&quot;/&gt;
        &lt;/root&gt;
        &lt;logger name=&quot;com.xusanduo.demo&quot; level=&quot;info&quot;/&gt; &lt;!-- 测试环境, 指定某包日志为info级 --&gt;
    &lt;/springProfile&gt;

    &lt;springProfile name=&quot;pro&quot;&gt;
        &lt;root level=&quot;info&quot;&gt;
            &lt;!-- 生产环境最好不配置console写文件 --&gt;
            &lt;appender-ref ref=&quot;DEBUG_FILE&quot;/&gt;
            &lt;appender-ref ref=&quot;INFO_FILE&quot;/&gt;
            &lt;appender-ref ref=&quot;WARN_FILE&quot;/&gt;
            &lt;appender-ref ref=&quot;ERROR_FILE&quot;/&gt;
            &lt;appender-ref ref=&quot;ALL_FILE&quot;/&gt;
        &lt;/root&gt;
        &lt;logger name=&quot;com.xusanduo.demo&quot; level=&quot;warn&quot;/&gt; &lt;!-- 生产环境, 指定某包日志为warn级 --&gt;
        &lt;logger name=&quot;com.xusanduo.demo.MyApplication&quot; level=&quot;info&quot;/&gt; &lt;!-- 特定某个类打印info日志, 比如application启动成功后的提示语 --&gt;
    &lt;/springProfile&gt;

&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function E(y,A){const i=d("RouterLink");return a(),r("div",null,[h,l("p",null,[n(i,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/01_Mybatis%E5%9F%BA%E7%A1%80/03_Mybatis%E9%85%8D%E7%BD%AE/Mybatis%E9%85%8D%E7%BD%AE.html#%E5%AF%BC%E5%85%A5Log4j%E6%97%A5%E5%BF%97%E6%A1%86%E6%9E%B6"},{default:t(()=>[e("导入Log4j日志框架")]),_:1})]),l("p",null,[n(i,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/01_Mybatis%E5%9F%BA%E7%A1%80/08_Mybatis%E7%BC%93%E5%AD%98/Mybatis%E7%BC%93%E5%AD%98.html#%E5%8A%A0%E5%85%A5logback%E6%97%A5%E5%BF%97"},{default:t(()=>[e("加入logback日志")]),_:1})]),f])}const N=s(p,[["render",E],["__file","SpringBoot整合Logback.html.vue"]]);export{N as default};
