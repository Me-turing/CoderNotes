import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as t}from"./app-a48529f7.js";const p="/CoderNotes/assets/image_aaWFeqNSwo-743b471b.png",e="/CoderNotes/assets/image_5YaQDKW--i-d1b2666c.png",o="/CoderNotes/assets/image_LS5MdnxQG6-0a934af0.png",c="/CoderNotes/assets/image_x73a8aVYl--389a0f4d.png",l="/CoderNotes/assets/image_NdGxjLLRsr-b830044c.png",i="/CoderNotes/assets/image_F4KeJMCImX-aa9d4587.png",u={},r=t(`<h2 id="_4-1-pom" tabindex="-1"><a class="header-anchor" href="#_4-1-pom" aria-hidden="true">#</a> 4.1 POM</h2><p>Project Object Model：项目对象模型。<strong>将Java工程的相关信息封装为</strong>对象作为便于操作和管理的模型。使用pom.xml文件描述整个模块的思想</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.meturing.maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mavenDemo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--1.组ID: 公司域名倒写  www.tedu.cn--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--2.项目名称唯一--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--3.版本号 唯一的--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--了解: 什么时候有效--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.1.46<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>commons-dbutils<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-dbutils<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-约定目录结构" tabindex="-1"><a class="header-anchor" href="#_4-2-约定目录结构" aria-hidden="true">#</a> 4.2 约定目录结构</h2><p>Maven项目有自己的一套规范，有默认约定好的目录结构，之所以能够自动化构建项目和管理jar包，完全取决于约定好的设计</p><p>约定 &gt; 配置 &gt; 编码</p><h2 id="_4-3-坐标" tabindex="-1"><a class="header-anchor" href="#_4-3-坐标" aria-hidden="true">#</a> 4.3 坐标</h2><p>Maven中的坐标它就是体现当前Maven工程的唯一性，而且也是将来引用此jar包的唯一路径</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&lt;</span>dependency<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token comment">--1.组ID: 公司域名倒写  com.meturing.demo--&gt;</span>
	<span class="token operator">&lt;</span>groupId<span class="token operator">&gt;</span>junit<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token comment">--2.项目名称唯一--&gt;</span>
	<span class="token operator">&lt;</span>artifactId<span class="token operator">&gt;</span>junit<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token comment">--3.版本号 唯一的--&gt;</span>
	<span class="token operator">&lt;</span>version<span class="token operator">&gt;</span><span class="token number">4.12</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token comment">--了解: 什么时候有效--&gt;</span>
	<span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span>test<span class="token operator">&lt;</span><span class="token operator">/</span>scope<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>命名规范<br> （1）groupId：公司或组织的域名倒序+当前项目名称<br> （2）artifactId：当前项目的模块名称<br> （3）version：当前模块的版本</p></blockquote><p><strong>在本地仓库中，jar包的位置与Maven的坐标一一对应</strong>，如果遇到Jar包下载不全等其他问题，可以在本地仓库删除文件再重新导入</p><h2 id="_4-4-依赖管理" tabindex="-1"><a class="header-anchor" href="#_4-4-依赖管理" aria-hidden="true">#</a> 4.4 依赖管理</h2><h3 id="_4-4-1-概念" tabindex="-1"><a class="header-anchor" href="#_4-4-1-概念" aria-hidden="true">#</a> 4.4.1 概念</h3><p>Maven项目之间可以通过坐标相互进行依赖</p><p>如果A依赖B，B依赖C，那么A→B和B→C都是直接依赖，而A→C是间接依赖。</p><h3 id="_4-4-2-依赖范围" tabindex="-1"><a class="header-anchor" href="#_4-4-2-依赖范围" aria-hidden="true">#</a> 4.4.2 依赖范围</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code> <span class="token comment">&lt;!--添加依赖--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--junit的依赖坐标--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                scope标签决定了当前依赖的生效范围 main和test
                如果不写，默认是compile，表示主程序和测试程序都生效
                如果设置成provided的话，则表示
                主程序和测试程序都生效且实时加载
            --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-2-1-compile-默认" tabindex="-1"><a class="header-anchor" href="#_4-4-2-1-compile-默认" aria-hidden="true">#</a> 4.4.2.1 compile（默认）</h4><p>（1）main目录下的Java代码<strong>可以</strong>访问这个范围的依赖<br> （2）test目录下的Java代码<strong>可以</strong>访问这个范围的依赖<br> （3）部署到Tomcat服务器上运行时<strong>要</strong>放在WEB-INF的lib目录下<br> 例如：对Hello的依赖。主程序、测试程序和服务器运行时都需要用到。</p><h4 id="_4-4-2-2-test" tabindex="-1"><a class="header-anchor" href="#_4-4-2-2-test" aria-hidden="true">#</a> 4.4.2.2 test</h4><p>（1）main目录下的Java代码<strong>不能</strong>访问这个范围的依赖<br> （2）test目录下的Java代码<strong>可以</strong>访问这个范围的依赖<br> （3）部署到Tomcat服务器上运行时<strong>不会</strong>放在WEB-INF的lib目录下<br> 例如：对junit的依赖。仅仅是测试程序部分需要。</p><h4 id="_4-4-2-3-provided" tabindex="-1"><a class="header-anchor" href="#_4-4-2-3-provided" aria-hidden="true">#</a> 4.4.2.3 provided</h4><p>（1）main目录下的Java代码<strong>可以</strong>访问这个范围的依赖<br> （2）test目录下的Java代码<strong>可以</strong>访问这个范围的依赖<br> （3）部署到Tomcat服务器上运行时<strong>不会</strong>放在WEB-INF的lib目录下<br> 例如：servlet-api在服务器上运行时，Servlet容器会提供相关API，所以部署的时候不需要。</p><h4 id="_4-4-2-4-其他runtime、import、system等" tabindex="-1"><a class="header-anchor" href="#_4-4-2-4-其他runtime、import、system等" aria-hidden="true">#</a> 4.4.2.4 其他runtime、import、system等</h4><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-4-3-依赖的传递性" tabindex="-1"><a class="header-anchor" href="#_4-4-3-依赖的传递性" aria-hidden="true">#</a> 4.4.3 依赖的传递性</h3><ol><li>用户添加jar包时,maven工具会根据jar包的坐标,去本地仓库中查找指定的jar包文件. </li><li>找到jar包并且实现了jar包文件的依赖. </li><li>同时加载当前目录下的pom文件,通过标签 加载其它的依赖项. </li><li>循环执行上述的操作 直到所有的jar包依赖完成为止.</li></ol><p><strong>多个Maven工程之间相互依赖具有传递性，但是是否能够传递还要取决于被传递者的使用范围</strong></p><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-4-5-jar包冲突" tabindex="-1"><a class="header-anchor" href="#_4-4-5-jar包冲突" aria-hidden="true">#</a> 4.4.5 Jar包冲突</h3><h4 id="路径最短则优先" tabindex="-1"><a class="header-anchor" href="#路径最短则优先" aria-hidden="true">#</a> 路径最短则优先</h4><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="路径相同时先声明的优先" tabindex="-1"><a class="header-anchor" href="#路径相同时先声明的优先" aria-hidden="true">#</a> 路径相同时先声明的优先</h4><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>这里“声明”的先后顺序指的是dependency标签配置的先后顺序。</code></p><h3 id="_4-4-6-依赖的排除" tabindex="-1"><a class="header-anchor" href="#_4-4-6-依赖的排除" aria-hidden="true">#</a> 4.4.6 依赖的排除</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>    <span class="token comment">&lt;!--依赖排除--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>commons-logging<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-logging<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-版本统一管理" tabindex="-1"><a class="header-anchor" href="#_4-5-版本统一管理" aria-hidden="true">#</a> 4.5 版本统一管理</h2><h3 id="_4-5-1-在pom-xml中创建自定义标签" tabindex="-1"><a class="header-anchor" href="#_4-5-1-在pom-xml中创建自定义标签" aria-hidden="true">#</a> 4.5.1 在pom.xml中创建自定义标签</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--统一管理当前模块的jar包的版本--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>spring.version</span><span class="token punctuation">&gt;</span></span>4.0.0.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>spring.version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-2-在指定位置使用标签" tabindex="-1"><a class="header-anchor" href="#_4-5-2-在指定位置使用标签" aria-hidden="true">#</a> 4.5.2 在指定位置使用标签</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-context<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-webmvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-6-maven的安全性保障机制" tabindex="-1"><a class="header-anchor" href="#_4-6-maven的安全性保障机制" aria-hidden="true">#</a> 4.6 Maven的安全性保障机制</h2><p><strong>为了避免jar包在网络中进行传输.可能会被篡改，Maven采用sha1算法校验机制</strong></p><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-6-1-sha1算法" tabindex="-1"><a class="header-anchor" href="#_4-6-1-sha1算法" aria-hidden="true">#</a> 4.6.1 sha1算法</h3><p><strong>SHA-1（英语：Secure Hash Algorithm 1，中文名：安全散列算法1）是一种密码散列函数</strong>，美国国家安全局设计，并由美国国家标准技术研究所（NIST）发布为联邦数据处理标准（FIPS）。<strong>SHA-1可以生成一个被称为消息摘要的160位（20字节）散列值，散列值通常的呈现形式为40个十六进制数</strong>。</p><blockquote><p>对数据采用算法进行计算生成<strong>摘要信息</strong>，当数据传递到本地也会生成摘要信息。 之后对比2个摘要数据。判断数据是否相同</p></blockquote><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>但是，由于底层采用了hash码，所以拥有以下特性：</p><ol><li>对相同数据,采用相同的hash算法, 问: 结果是否相同? <br> 答:必定相同</li><li>不同的数据,采用相同的hash算法, 问: 结果是否不同? <br> 答: 可能相同，可能出现hash碰撞</li></ol><h3 id="_4-6-2-哈希碰撞" tabindex="-1"><a class="header-anchor" href="#_4-6-2-哈希碰撞" aria-hidden="true">#</a> 4.6.2 哈希碰撞</h3><p>由于哈希码长度的局限性，在资源的文件的种类无限多样化的前提下，哈希码可能会出现不同的数据出现相同的哈希码，这种情况叫做hash碰撞</p><p>为了避免哈希碰撞出现的概率，我们可以<strong>增加哈希码的长度</strong>，弱化出现哈希碰撞的概率</p><h2 id="_4-6-仓库" tabindex="-1"><a class="header-anchor" href="#_4-6-仓库" aria-hidden="true">#</a> 4.6 仓库</h2><h3 id="_4-6-1-仓库分类" tabindex="-1"><a class="header-anchor" href="#_4-6-1-仓库分类" aria-hidden="true">#</a> 4.6.1 仓库分类</h3><p><strong>本地仓库</strong>：为当前本机电脑上的所有Maven工程服务。<br><strong>远程仓库</strong><br><strong>私服</strong>：架设在当前局域网环境下，为当前局域网范围内的所有Maven工程服务。<br><strong>中央仓库</strong>：架设在Internet上，为全世界所有Maven工程服务。<br><strong>中央仓库的镜像</strong>：架设在各个大洲，为中央仓库分担流量。减轻中央仓库的压力，同时更快的响应用户请求。</p><h3 id="_4-6-2-仓库中的文件" tabindex="-1"><a class="header-anchor" href="#_4-6-2-仓库中的文件" aria-hidden="true">#</a> 4.6.2 仓库中的文件</h3><p>（1）Maven的插件<br> （2）我们自己开发的项目的模块<br> （3）第三方框架或工具的jar包</p><blockquote><p>不管是什么样的jar包，在仓库中都是按照坐标生成目录结构，所以可以通过统一的方式查询或依赖。</p></blockquote><h2 id="_4-7-生命周期" tabindex="-1"><a class="header-anchor" href="#_4-7-生命周期" aria-hidden="true">#</a> 4.7 生命周期</h2><h3 id="_4-7-1-clean-lifecycle" tabindex="-1"><a class="header-anchor" href="#_4-7-1-clean-lifecycle" aria-hidden="true">#</a> 4.7.1 Clean Lifecycle</h3><p>在进行真正的构建之前进行一些清理工作。</p><h3 id="_4-7-2-default-lifecycle" tabindex="-1"><a class="header-anchor" href="#_4-7-2-default-lifecycle" aria-hidden="true">#</a> 4.7.2 Default Lifecycle</h3><p>构建的核心部分，编译，测试，打包，安装，部署等等。</p><h3 id="_4-7-3-site-lifecycle" tabindex="-1"><a class="header-anchor" href="#_4-7-3-site-lifecycle" aria-hidden="true">#</a> 4.7.3 Site Lifecycle</h3><p>生成项目报告，站点，发布站点。</p><h2 id="_4-8-插件和目标" tabindex="-1"><a class="header-anchor" href="#_4-8-插件和目标" aria-hidden="true">#</a> 4.8 插件和目标</h2><p>（1）Maven的核心仅仅定义了抽象的生命周期，具体的任务都是交由插件完成的。<br> （2）每个插件都能实现多个功能，每个功能就是一个插件目标。<br> （3）Maven的生命周期与插件目标相互绑定，以完成某个具体的构建任务。<br> 例如：compile就是插件maven-compiler-plugin的一个功能；pre-clean是插件maven-clean-plugin的一个目标。</p>',69),d=[r];function g(k,v){return a(),s("div",null,d)}const b=n(u,[["render",g],["__file","Maven的核心概念.html.vue"]]);export{b as default};
