<template><div><h2 id="tomcat的安装" tabindex="-1"><a class="header-anchor" href="#tomcat的安装" aria-hidden="true">#</a> Tomcat的安装</h2>
<h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3>
<p>官方网址: <a href="http://tomcat.apache.org/" title="http://tomcat.apache.org/" target="_blank" rel="noopener noreferrer">http://tomcat.apache.org/<ExternalLinkIcon/></a></p>
<figure><img src="@source/doc/02_初级开发工程师/01_第一阶段/04_JavaEE技术/01_Tomcat/02_Tomcat的安装与结构/image/image_7o9k8dh8Mo.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>tomcat由apache开源组织使用java开发的一款web容器,<strong>在使用之前需要安装JDK及配置JAVA_HOME</strong>.</p>
<p>Tomcat是绿色软解，解压就可使用。如果之前已经安装了其他tomcat并且还配置了<code v-pre>CATALINA_HOME </code>不要忘记修改<code v-pre>CATALINA_HOME</code>指向我们现在使用的这个tomcat</p>
<h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3>
<p>运行<code v-pre>startup.bat</code>文件</p>
<blockquote>
<p>注意: 一定要配置JAVA_HOME, 部分电脑需要配置CATALINA_HOME</p>
</blockquote>
<h3 id="关闭" tabindex="-1"><a class="header-anchor" href="#关闭" aria-hidden="true">#</a> 关闭</h3>
<p>运行<code v-pre>shutdown.bat</code>文件或者直接关闭掉启动窗口</p>
<h3 id="访问" tabindex="-1"><a class="header-anchor" href="#访问" aria-hidden="true">#</a> 访问</h3>
<p>访问Tomcat的URL格式：<a href="http://ip" title="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:port<br>
访问本机Tomcat的URL格式：<a href="http://localhost:8080" title="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080<ExternalLinkIcon/></a></p>
<h2 id="tomcat目录结构" tabindex="-1"><a class="header-anchor" href="#tomcat目录结构" aria-hidden="true">#</a> Tomcat目录结构</h2>
<table>
<thead>
<tr>
<th>目录</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>bin</td>
<td>主要是用来存放tomcat的命令文件，主要有两大类，
一类是以.sh结尾的（linux命令），另一类是以.bat结尾的（windows命令）</td>
</tr>
<tr>
<td>conf</td>
<td>conf目录主要是用来存放tomcat的一些配置文件</td>
</tr>
<tr>
<td>lib</td>
<td>lib目录主要用来存放tomcat运行需要加载的jar包</td>
</tr>
<tr>
<td>logs</td>
<td>logs目录用来存放tomcat在运行过程中产生的日志文件</td>
</tr>
<tr>
<td>temp</td>
<td>temp目录用户存放tomcat在运行过程中产生的临时文件。（清空不会对tomcat运行带来影响）</td>
</tr>
<tr>
<td>webapps</td>
<td>webapps目录用来存放应用程序，当tomcat启动时会去加载webapps目录下的应用程序。可以以文件夹、war包的形式发布应用</td>
</tr>
<tr>
<td>work</td>
<td>work目录用来存放tomcat在运行时的编译后文件，例如JSP编译后的文件</td>
</tr>
</tbody>
</table>
</div></template>


