<template><div><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2>
<p>把分布在不同地理区域的计算机与专门的外部设备用通信线路互连成一个规模大、功能强的网络系统，从而使众多的计算机可以方便地互相传递信息、共享硬件、软件、数据信息等资源。设备之间在网络中进行数据的传输，发送/接收数据。</p>
<p>两台或两台以上的计算机即可构成网络，网络通讯最重要的要素是 IP 和 PORT，通过IP定位计算机，通过PORT定位使用的软件程序。</p>
<h3 id="ip" tabindex="-1"><a class="header-anchor" href="#ip" aria-hidden="true">#</a> IP</h3>
<ol>
<li>A类IP地址：第一个字节在0 - 127之间（1.0.0.1 ~ 126.155.255.254）（其中127.0.0.1 为保留地址，一般用于环回地址）</li>
<li>B类IP地址：第一个字节在128 - 192之间（128.0.0.1 ~ 191.255.255.254）</li>
<li>C类IP地址：第一个字节在192 - 223之间（192.0.0.1 ~ 223.255.255.254）</li>
<li>D类IP地址：第一个字节在224 - 239之间（224.0.0.1 ~ 239.255.255.254）</li>
<li>E类IP地址：第一个字节在240 - 255之间（240.0.0.1 ~ 255.255.255.254）</li>
</ol>
<h3 id="port" tabindex="-1"><a class="header-anchor" href="#port" aria-hidden="true">#</a> PORT</h3>
<p>0 到 65535</p>
<h3 id="通讯协议" tabindex="-1"><a class="header-anchor" href="#通讯协议" aria-hidden="true">#</a> 通讯协议</h3>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/06_网络编程/01_初识网络编程/image/image_ZX6EWdtUCv.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>消息发送： 应用层 → 传输层 → 网络层 → 物理，数据链路层</p>
<p>消息接收：物理，数据链路层 → 网络层 → 传输层 → 应用层</p>
<h3 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h3>
<p><strong>安全可靠的，使用三次握手，四次挥手的方式</strong></p>
<h4 id="建立连接-三次握手" tabindex="-1"><a class="header-anchor" href="#建立连接-三次握手" aria-hidden="true">#</a> 建立连接：三次握手</h4>
<p>客户端请求链接   /   服务器响应客户端的请求   /  客户端回应服务器收到响应</p>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/06_网络编程/01_初识网络编程/image/image_UeyHZzBe1h.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="断开链接-四次挥手" tabindex="-1"><a class="header-anchor" href="#断开链接-四次挥手" aria-hidden="true">#</a> 断开链接：四次挥手</h4>
<p>客户端请求断开  / 服务器响应客户端断开请求  / 服务器断开链接  /  客户端检验是否断开</p>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/06_网络编程/01_初识网络编程/image/image_9gvFDb3Vzb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="udp" tabindex="-1"><a class="header-anchor" href="#udp" aria-hidden="true">#</a> UDP</h3>
<p><strong>不太安全可靠，数据发送使用数据包，容易产生丢包的现象。</strong></p>
<h2 id="地址api" tabindex="-1"><a class="header-anchor" href="#地址api" aria-hidden="true">#</a> 地址API</h2>
<h3 id="inetaddress" tabindex="-1"><a class="header-anchor" href="#inetaddress" aria-hidden="true">#</a> InetAddress</h3>
<h4 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>InetAddress.getByName(String str)</td>
<td>获取指定地址的IP地址,如：localhost → 获取本地地址       127.0.0.1 → 获取本地地址       LAPTOP → 获取计算机名地址  <a href="http://baidu.com" target="_blank" rel="noopener noreferrer">baidu.com<ExternalLinkIcon/></a> → 获取域名地址</td>
</tr>
<tr>
<td>InetAddress对象.getHostName()</td>
<td>获取域名</td>
</tr>
<tr>
<td>InetAddress对象.getHostAddress()</td>
<td>获取ip地址</td>
</tr>
</tbody>
</table>
<h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test01</span> <span class="token punctuation">{</span>
    <span class="token comment">//这是一个main方法，是程序的入口：</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UnknownHostException</span><span class="token punctuation">,</span> <span class="token class-name">UnknownHostException</span> <span class="token punctuation">{</span>
        <span class="token comment">//封装IP：</span>
        <span class="token comment">//InetAddress ia = new InetAddress();不能直接创建对象，因为InetAddress()被default修饰了。</span>
        <span class="token class-name">InetAddress</span> ia <span class="token operator">=</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string">"192.168.199.217"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ia<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InetAddress</span> ia2 <span class="token operator">=</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//localhost指代的是本机的ip地址</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ia2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InetAddress</span> ia3 <span class="token operator">=</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string">"127.0.0.1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//127.0.0.1指代的是本机的ip地址</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ia3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InetAddress</span> ia4 <span class="token operator">=</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string">"LAPTOP-CRIVSRRU"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//封装计算机名</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ia4<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InetAddress</span> ia5 <span class="token operator">=</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string">"www.baidu.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//封装域名</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ia5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ia5<span class="token punctuation">.</span><span class="token function">getHostName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取域名</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ia5<span class="token punctuation">.</span><span class="token function">getHostAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取ip地址</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inetsocketaddress" tabindex="-1"><a class="header-anchor" href="#inetsocketaddress" aria-hidden="true">#</a> InetSocketAddress</h3>
<h4 id="api-1" tabindex="-1"><a class="header-anchor" href="#api-1" aria-hidden="true">#</a> API</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>InetSocketAddress isa = new InetSocketAddress(&quot;192.168.199.217&quot;,8080);</td>
<td>初始化InetSocketAddress对象：参数1→地址   参数2 → 端口号</td>
</tr>
<tr>
<td>isa.getHostName()</td>
<td>获取地址名</td>
</tr>
<tr>
<td>isa.getPort()</td>
<td>获取端口号</td>
</tr>
<tr>
<td>isa.getAddress()</td>
<td>获取InetAddress对象</td>
</tr>
</tbody>
</table>
<h4 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test02</span> <span class="token punctuation">{</span>
    <span class="token comment">//这是一个main方法，是程序的入口：</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">InetSocketAddress</span> isa <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InetSocketAddress</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>isa<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// localhost/127.0.0.1:8080</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>isa<span class="token punctuation">.</span><span class="token function">getHostName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//localhost</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>isa<span class="token punctuation">.</span><span class="token function">getPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//8080</span>
        <span class="token class-name">InetAddress</span> ia <span class="token operator">=</span> isa<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//转为InetAddress</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ia<span class="token punctuation">.</span><span class="token function">getHostName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//localhost</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ia<span class="token punctuation">.</span><span class="token function">getHostAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//127.0.0.1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


