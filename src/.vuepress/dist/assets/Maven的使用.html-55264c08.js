import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as e}from"./app-a48529f7.js";const t="/CoderNotes/assets/image_pVPJhAySKp-da68cdd7.png",p="/CoderNotes/assets/image_XG6utfcMKY-6f688cb9.png",o="/CoderNotes/assets/image_VRcKajoPTE-acd9acd3.png",c="/CoderNotes/assets/image_QQLIb-BXnB-5bcc18d9.png",i="/CoderNotes/assets/image_7Jf4tcRGyv-357d29ec.png",l="/CoderNotes/assets/image_hFl7ZSoaOK-b2e7af22.png",r="/CoderNotes/assets/image_5V1puCNOgF-0821d5af.png",d="/CoderNotes/assets/image_i23UY8Bu-x-6d596fe9.png",u="/CoderNotes/assets/image_WZ14HuJHge-40e5294b.png",g="/CoderNotes/assets/image_rLWzlDtNC--a1cdfb18.png",m="/CoderNotes/assets/image_U7R8SkITg8-8ac05da0.png",k="/CoderNotes/assets/image_4VfYoREck_-ec0be327.png",v={},b=e(`<h2 id="第三章-maven的使用" tabindex="-1"><a class="header-anchor" href="#第三章-maven的使用" aria-hidden="true">#</a> 第三章：Maven的使用</h2><h3 id="_3-1-安装maven核心程序" tabindex="-1"><a class="header-anchor" href="#_3-1-安装maven核心程序" aria-hidden="true">#</a> 3.1 安装Maven核心程序</h3><p>1）检查JAVA_HOME环境变量。Maven是使用Java开发的，所以必须知道当前系统环境中JDK的安装目录。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">C</span><span class="token operator">:</span>\\<span class="token class-name">Windows</span>\\<span class="token class-name">System32</span><span class="token operator">&gt;</span>echo <span class="token operator">%</span><span class="token constant">JAVA_HOME</span><span class="token operator">%</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_111</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2）解压Maven的核心程序。将apache-maven-3.2.2-bin.zip解压到一个<strong>非中文无空格</strong>的目录下。例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">D</span><span class="token operator">:</span>\\apache<span class="token operator">-</span>maven<span class="token operator">-</span><span class="token number">3.2</span><span class="token number">.2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3）配置环境变量。</p><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（1）在系统变量里面创建M2_HOME变量，并赋值</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>变量：<span class="token constant">M2_HOME</span>
值：<span class="token class-name">D</span><span class="token operator">:</span>\\apache<span class="token operator">-</span>maven<span class="token operator">-</span><span class="token number">3.2</span><span class="token number">.2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）在Path变量中，添加maven环境变量</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>变量：<span class="token class-name">Path</span>
值：<span class="token operator">%</span><span class="token constant">M2_HOME</span><span class="token operator">%</span>\\bin或<span class="token class-name">D</span><span class="token operator">:</span>\\apache<span class="token operator">-</span>maven<span class="token operator">-</span><span class="token number">3.2</span><span class="token number">.2</span>\\bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4）查看Maven版本信息验证安装是否正确</p><p>（1）按Win +r，进入电脑运行模式；</p><p>（2）在打开里面输入：cmd</p><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（3）在管理员窗口输入</p><p>C:\\Users\\Administrator&gt;mvn -v</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-2-maven的本地仓库配置" tabindex="-1"><a class="header-anchor" href="#_3-2-maven的本地仓库配置" aria-hidden="true">#</a> 3.2 Maven的本地仓库配置</h3><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（1）Maven默认的本地仓库：~\\.m2\\repository目录。</p><p><code>说明：~表示当前用户的家目录。</code></p><p>（2）Maven的核心配置文件位置：</p><p><code>解压目录D:\\apache-maven-3.2.2\\conf\\settings.xml</code></p><p>（3）本地仓库地址更改到E:\\LocalRepository，默认在C:\\Users\\Administrator\\.m2\\repository</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>localRepository<span class="token punctuation">&gt;</span></span><span class="token class-name">E</span><span class="token operator">:</span>\\<span class="token class-name">LocalRepository</span><span class="token operator">&lt;</span><span class="token operator">/</span>localRepository<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（4）配置阿里云镜像（下载速度快）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>mirror<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>id<span class="token punctuation">&gt;</span></span>nexus<span class="token operator">-</span>aliyun<span class="token operator">&lt;</span><span class="token operator">/</span>id<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>mirrorOf<span class="token punctuation">&gt;</span></span>central<span class="token operator">&lt;</span><span class="token operator">/</span>mirrorOf<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>name<span class="token punctuation">&gt;</span></span><span class="token class-name">Nexus</span> aliyun<span class="token operator">&lt;</span><span class="token operator">/</span>name<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>url<span class="token punctuation">&gt;</span></span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>maven<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>nexus<span class="token operator">/</span>content<span class="token operator">/</span>groups<span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">&lt;</span><span class="token operator">/</span>url<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>mirror<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-在idea中配置maven" tabindex="-1"><a class="header-anchor" href="#_3-3-在idea中配置maven" aria-hidden="true">#</a> 3.3 在IDEA中配置Maven</h3><p>1）close project所有项目后，回到如下页面，点击右下角的Configure=》点击setting</p><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>2）设置Maven的安装目录及本地仓库</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Ø<strong>Maven home directory</strong>： 可以指定本地 Maven 的安装目录所在，因为我已经配置了M2_HOME系统参数，所以直接这样配置IntelliJ IDEA是可以找到的。但是假如你没有配置的话，这里可以选择你的Maven安装目录。此外，这里不建议使用IDEA默认的。</p><p>Ø <strong>User settings file / Local repository</strong>：我们还可以指定 Maven 的 settings.xml 位置和本地仓库位置。</p><p>3) 配置Maven自动导入依赖的jar包</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Ø <code>Import Maven projects automatically：</code>表示 IntelliJ IDEA 会实时监控项目的 pom.xml 文件，进行项目变动设置，勾选上。</p><p>Ø <code>Automatically download</code>：在 Maven 导入依赖包的时候是否自动下载源码和文档。默认是没有勾选的，也不建议勾选，原因是这样可以加快项目从外网导入依赖包的速度，如果我们需要源码和文档的时候我们到时候再针对某个依赖包进行联网下载即可。IntelliJ IDEA 支持直接从公网下载源码和文档的。</p><p>Ø<code> VM options for importer</code>：可以设置导入的VM参数。一般这个都不需要主动改，除非项目真的导入太慢了我们再增大此参数。</p><h3 id="_3-4-创建maven程序" tabindex="-1"><a class="header-anchor" href="#_3-4-创建maven程序" aria-hidden="true">#</a> 3.4 创建Maven程序</h3><h4 id="_3-4-1-创建项目" tabindex="-1"><a class="header-anchor" href="#_3-4-1-创建项目" aria-hidden="true">#</a> 3.4.1 创建项目</h4><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_3-4-2-项目结构" tabindex="-1"><a class="header-anchor" href="#_3-4-2-项目结构" aria-hidden="true">#</a> 3.4.2 项目结构</h4><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Ø main目录用于存放主程序。</p><p>Ø java目录用于存放源代码文件。</p><p>Ø resources目录用于存放配置文件和资源文件。</p><p>Ø test目录用于存放测试程序。</p><h4 id="_3-4-3-配置maven的核心配置文件pom-xml" tabindex="-1"><a class="header-anchor" href="#_3-4-3-配置maven的核心配置文件pom-xml" aria-hidden="true">#</a> 3.4.3 配置Maven的核心配置文件pom.xml</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--当前的Maven模块的坐标信息--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--添加依赖--&gt;</span>
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
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-4-maven的命令" tabindex="-1"><a class="header-anchor" href="#_3-4-4-maven的命令" aria-hidden="true">#</a> 3.4.4 Maven的命令</h4><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',56),h=[b];function f(_,x){return n(),s("div",null,h)}const j=a(v,[["render",f],["__file","Maven的使用.html.vue"]]);export{j as default};
