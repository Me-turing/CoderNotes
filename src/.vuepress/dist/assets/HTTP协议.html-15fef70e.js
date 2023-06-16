import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,f as d}from"./app-54a62cbe.js";const i="/coder-notes/assets/image_lvQgH3SZHk-e950ccbe.png",r="/coder-notes/assets/image_EL9KjM2Sno-9fa7a343.png",n="/coder-notes/assets/image_gEofOumFQ_-eedf7055.png",h="/coder-notes/assets/image_eHgmlMvKxs-786ac79b.png",s="/coder-notes/assets/image_UYL6809_nT-3b94c490.png",o="/coder-notes/assets/image_oixepOmA5o-1561ad8d.png",c="/coder-notes/assets/image_T_ey6VIBbR-033da431.png",p="/coder-notes/assets/image_MMn0SYaDHS-6798a354.png",l="/coder-notes/assets/image_hRbpJgNpHq-8562e18a.png",g="/coder-notes/assets/image_Z_qCymmdnr-7ec81e2e.png",f="/coder-notes/assets/image_SjjGfAOY94-7fa34f99.png",T="/coder-notes/assets/image_g2cboiZwG_-4e2bbebc.png",u="/coder-notes/assets/image_NdfrRH3jq--d680feb2.png",x="/coder-notes/assets/image_koN4j73rz5-20cfd06f.png",b="/coder-notes/assets/image_ZSDghf8nyh-79ed48fb.png",m="/coder-notes/assets/image_mQhoo7sMel-2a0fae57.png",_="/coder-notes/assets/image_EAjskI379V-e859184a.png",P="/coder-notes/assets/image_Oihm6MGaKU-4f63e819.png",H="/coder-notes/assets/image_biA_HfnJhT-3dde10ed.png",y={},S=d('<h2 id="了解http协议" tabindex="-1"><a class="header-anchor" href="#了解http协议" aria-hidden="true">#</a> 了解HTTP协议</h2><h3 id="什么是http协议" tabindex="-1"><a class="header-anchor" href="#什么是http协议" aria-hidden="true">#</a> 什么是HTTP协议</h3><p>**HTTP协议是Hyper Text Transfer Protocol（超文本传输协议）**的缩写, HTTP是万维网（WWW:World Wide Web）的数据通信的基础。</p><p>HTTP是<strong>一个简单的 请求 → 响应 协议</strong>，它通常运行在TCP之上。它指定了客户端可能发送给服务器什么样的消息以及得到什么样的响应。</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>HTTP是一个基于TCP/IP通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）。</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="http协议特点" tabindex="-1"><a class="header-anchor" href="#http协议特点" aria-hidden="true">#</a> HTTP协议特点</h3><h4 id="支持客户-服务器模式" tabindex="-1"><a class="header-anchor" href="#支持客户-服务器模式" aria-hidden="true">#</a> 支持客户/服务器模式</h4><p>HTTP协议支持客户端服务端模式，需要使用浏览器作为客户端来访问服务端</p><h4 id="简单快速" tabindex="-1"><a class="header-anchor" href="#简单快速" aria-hidden="true">#</a> 简单快速</h4><p>客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、POST等。每种方法规定了客户与服务器联系的类型不同。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快</p><h4 id="灵活" tabindex="-1"><a class="header-anchor" href="#灵活" aria-hidden="true">#</a> 灵活</h4><p>HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type（Content-Type是HTTP包中用来表示内容类型的标识）加以标记。</p><h4 id="无连接" tabindex="-1"><a class="header-anchor" href="#无连接" aria-hidden="true">#</a> 无连接</h4><p>每次请求一次，释放一次连接。所以无连接表示每次连接只能处理一个请求。优点就是节省传输时间，实现简单。我们有时称这种无连接为短连接。对应的就有了长链接，长连接专门解决效率问题。当建立好了一个连接之后，可以多次请求。但是缺点就是容易造成占用资源不释放的问题。当HTTP协议头部中字段Connection：keep-alive表示支持长链接</p><h4 id="单向性" tabindex="-1"><a class="header-anchor" href="#单向性" aria-hidden="true">#</a> 单向性</h4><p>服务端永远是被动的等待客户端的请求</p><h4 id="无状态" tabindex="-1"><a class="header-anchor" href="#无状态" aria-hidden="true">#</a> 无状态</h4><p>HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。为了解决HTTP协议无状态，于是，两种用于保持HTTP连接状态的技术就应运而生了，一个是Cookie，而另一个则是Session</p><h3 id="http协议发展和版本" tabindex="-1"><a class="header-anchor" href="#http协议发展和版本" aria-hidden="true">#</a> HTTP协议发展和版本</h3><p>http协议在1991年发布第一个版本版本号为0.9。随后WWW联盟（WWW Consortium-W3C）于1994年成立，http协议被纳入到W3C组织中进行维护和管理。</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="http1-0" tabindex="-1"><a class="header-anchor" href="#http1-0" aria-hidden="true">#</a> http1.0</h4><p>最早在1996年在网页中使用，内容简单，所以浏览器的每次请求都需要与服务器建立一个TCP连接，服务器处理完成后立即断开TCP连接（无连接），服务器不跟踪每个客户端也不记录过去的请求（无状态）,请求只能由客户端发起（单向性）</p><h4 id="http1-1" tabindex="-1"><a class="header-anchor" href="#http1-1" aria-hidden="true">#</a> http1.1</h4><p>到1999年广泛在各大浏览器网络请求中使用，HTTP/1.0中默认使用Connection: close。在HTTP/1.1中已经默认使用Connection: keep-alive（长连接），避免了连接建立和释放的开销，但服务器必须按照客户端请求的先后顺序依次回送相应的结果，以保证客户端能够区分出每次请求的响应内容。通过Content-Length字段来判断当前请求的数据是否已经全部接收。不允许同时存在两个并行的响应。</p><p>1.1中最重要的一个特点是支持“长连接”，即“一次连接可以多次请求”。</p><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>HTTP 1.1支持持久连接（HTTP/1.1的默认模式使用带流水线的持久连接），在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟。一个包含有许多图像的网页文件的多个请求和应答可以在一个连接中传输，但每个单独的网页文件的请求和应答仍然需要使用各自的连接。HTTP 1.1还允许客户端不用等待上一次请求结果返回，就可以发出下一次请求，但服务器端必须按照接收到客户端请求的先后顺序依次回送响应结果，以保证客户端能够区分出每次请求的响应内容，这样也显著地减少了整个下载过程所需要的时间。</p><h4 id="http2-0" tabindex="-1"><a class="header-anchor" href="#http2-0" aria-hidden="true">#</a> http2.0</h4><h5 id="长连接" tabindex="-1"><a class="header-anchor" href="#长连接" aria-hidden="true">#</a> 长连接</h5><p>在HTTP/2中，客户端向某个域名的服务器请求页面的过程中，只会创建一条TCP连接，即使这页面可能包含上百个资源。 单一的连接应该是HTTP2的主要优势，单一的连接能减少TCP握手带来的时延。HTTP2中用一条单一的长连接，避免了创建多个TCP连接带来的网络开销，提高了吞吐量</p><h5 id="多路复用-multiplexing" tabindex="-1"><a class="header-anchor" href="#多路复用-multiplexing" aria-hidden="true">#</a> 多路复用 (Multiplexing)</h5><p>HTTP2.0中所有加强性能的核心是二进制传输，在HTTP1.x中，我们是通过文本的方式传输数据。在HTTP2.0中引入了新的编码机制，所有传输的数据都会被分割，并采用二进制格式编码。<br><img src="'+o+'" alt="" loading="lazy"></p><p>多路复用，连接共享。不同的request可以使用同一个连接传输（最后根据每个request上的id号组合成正常的请求）<br> HTTP2.0中，有两个概念非常重要：帧（frame）和流（stream）。<br> 帧是最小的数据单位，每个帧会标识出该帧属于哪个流，流是多个帧组成的数据流。<br> 所谓多路复用，即在一个TCP连接中存在多个流，即可以同时发送多个请求，对端可以通过帧中的表示知道该帧属于哪个请求。在客户端，这些帧乱序发送，到对端后再根据每个帧首部的流标识符重新组装。通过该技术，可以避免HTTP旧版本的队头阻塞问题，极大提高传输性能。</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="首部压缩-header-compression" tabindex="-1"><a class="header-anchor" href="#首部压缩-header-compression" aria-hidden="true">#</a> 首部压缩（Header Compression）</h5><p>由于1.1中header带有大量的信息，并且得重复传输，2.0使用encoder来减少需要传输的hearder大小。</p><h5 id="服务端推送-server-push" tabindex="-1"><a class="header-anchor" href="#服务端推送-server-push" aria-hidden="true">#</a> 服务端推送（Server Push）</h5><p>在HTTP2.0中，服务端可以在客户端某个请求后，主动推送其他资源。<br> 可以想象一下，某些资源客户端是一定会请求的，这时就可以采取服务端push的技术，提前给客户端推送必要的资源，就可以相对减少一点延迟时间。在浏览器兼容的情况下也可以使用prefetch。</p><h5 id="更安全" tabindex="-1"><a class="header-anchor" href="#更安全" aria-hidden="true">#</a> 更安全</h5><p>HTTP2.0使用了tls的拓展ALPN做为协议升级，除此之外，HTTP2.0对tls的安全性做了近一步加强，通过黑名单机制禁用了几百种不再安全的加密算法。</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="http请求" tabindex="-1"><a class="header-anchor" href="#http请求" aria-hidden="true">#</a> HTTP请求</h2><h3 id="了解http请求" tabindex="-1"><a class="header-anchor" href="#了解http请求" aria-hidden="true">#</a> 了解HTTP请求</h3><h4 id="打开网页的基本流程" tabindex="-1"><a class="header-anchor" href="#打开网页的基本流程" aria-hidden="true">#</a> 打开网页的基本流程</h4><ol><li>当你在浏览器输入URL的时候，浏览器发送一个Request去获取html. 服务器把Response发送回给浏览器。</li><li>浏览器分析Response中的 HTML，发现其中引用了很多其他文件，比如图片，CSS文件，JS文件。</li><li>浏览器会自动再次发送Request去获取图片，CSS文件，或者JS文件。</li><li>等所有的文件都下载成功后。 网页就被显示出来了。</li></ol><h4 id="request-消息结构" tabindex="-1"><a class="header-anchor" href="#request-消息结构" aria-hidden="true">#</a> Request 消息结构</h4><p>第一部分叫Request line<br> 第二部分叫Request header<br> 第三部分是Request body</p><p>Request header和Request body之间有个空行。</p><h3 id="请求的主要组成部分" tabindex="-1"><a class="header-anchor" href="#请求的主要组成部分" aria-hidden="true">#</a> 请求的主要组成部分</h3><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="请求行-request-line" tabindex="-1"><a class="header-anchor" href="#请求行-request-line" aria-hidden="true">#</a> 请求行 request Line</h4><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>GET /course/id/18.html?a=3&amp;b=4 HTTP/1.1
POST /login HTTP/1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>请求方式 默认 GET</li><li>资源路径</li><li>请求使用的协议</li></ol><h4 id="请求头-request-headers" tabindex="-1"><a class="header-anchor" href="#请求头-request-headers" aria-hidden="true">#</a> 请求头 request headers</h4><p>请求头用于说明是谁或什么在发送请求、请求源于何处，或者客户端的喜好及能力。服务器可以根据请求头部给出的客户端信息，试着为客户端提供更好的响应。请求头中信息的格式为key：value。</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>Host</td><td>客户端指定自己想访问的WEB服务器的域名/IP 地址和端口号</td></tr><tr><td>Connection</td><td>连接方式。如果值是close则表示基于短连接方式，如果该值是keep-alive，网络连接就是持久的，在一定时间范围内是不会关闭，使得对同一个服务器的请求可以继续在该连接上完成</td></tr><tr><td>Upgrade-Insecure-Requests</td><td>服务端是否支持https加密协议</td></tr><tr><td>Cache-Control</td><td>指定请求和响应遵循的缓存机制</td></tr><tr><td>User-Agent</td><td>浏览器表明自己的身份（是哪种浏览器）。例如Chrome浏览器：Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36</td></tr><tr><td>Accept</td><td>告诉WEB服务器自己接受什么介质类型，表示任何类型，type/ 表示该类型下的所有子类型</td></tr><tr><td>Accept-Encoding</td><td>浏览器申明自己接收的编码方法，通常指定压缩方法，是否支持压缩，支持什么压缩方法（gzip，deflate）</td></tr><tr><td>Accept-Language</td><td>浏览器申明自己接收的语言。语言跟字符集的区别：中文是语言，中文有多种字符集，比如big5，gb2312，gbk等</td></tr><tr><td>Accept-Charset</td><td>浏览器告诉服务器自己能接收的字符集</td></tr><tr><td>Referer</td><td>浏览器向WEB 服务器表明自己是从哪个网页URL获得点击当前请求中的网址/URL</td></tr><tr><td>Refresh</td><td>表示浏览器应该在多少时间之后刷新文档，以秒计时</td></tr><tr><td>Cookie</td><td>可向服务端传递数据一种模型</td></tr></tbody></table><h4 id="请求体-request-body" tabindex="-1"><a class="header-anchor" href="#请求体-request-body" aria-hidden="true">#</a> 请求体 request body</h4><p>客户端传递给服务器的数据。比如：表单使用post方式提交的数据、上传的文件数据.等</p><figure><img src="`+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="http请求方式" tabindex="-1"><a class="header-anchor" href="#http请求方式" aria-hidden="true">#</a> HTTP请求方式</h3><h4 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> GET</h4><p>向指定的资源发出“显示”请求。GET请求中会将请求中传递的数据包含在URL中并在浏览器的地址栏中显示。GET请求传递数据时要求数据必须是ASCII字符。GET请求可以被浏览器缓存</p><h4 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> POST</h4><p>向指定资源提交数据，请求服务器进行处理（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求传递数据时，数据可以试试ASCII字符也可以是字节型数据，默认为字符型。POST请求默认情况下不会被浏览器所缓存</p><h4 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> HEAD</h4><p>向服务器索要与GET请求相一致的响应，只不过响应体将不会被返回。这一方法可以在不必传输整个响应内容的情况下，就可以获取包含在响应消息头度中的元信息</p><h4 id="put" tabindex="-1"><a class="header-anchor" href="#put" aria-hidden="true">#</a> PUT</h4><p>向指定资源位置上传其最新内容</p><h4 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> DELETE</h4><p>请求服务器删除Request-URI所标识的资源</p><h4 id="trace" tabindex="-1"><a class="header-anchor" href="#trace" aria-hidden="true">#</a> TRACE</h4><p>回显服务器收到的请求，主要用于测试或诊断</p><h4 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> OPTIONS</h4><p>这个方法可使服务器传回该资源所支持的所有HTTP请求方法。用&#39; *&#39;来代替资源名称，向Web服务器发送OPTIONS请求，可以测试服务器功能是否正常运作</p><h4 id="connect" tabindex="-1"><a class="header-anchor" href="#connect" aria-hidden="true">#</a> CONNECT</h4><p>HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。通常用于SSL加密服务器的链接（经由非加密的HTTP代理服务器）</p><h3 id="get和post的区别-面试常问" tabindex="-1"><a class="header-anchor" href="#get和post的区别-面试常问" aria-hidden="true">#</a> GET和POST的区别-面试常问</h3><ol><li>GET在浏览器回退时是无害的，而POST会再次提交请求</li><li>GET产生的URL地址可以被Bookmark，而POST不可以</li><li>GET请求会被浏览器主动cache，而POST不会，除非手动设置</li><li>GET请求只能进行url编码，而POST支持多种编码方式</li><li>GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留</li><li>GET请求在URL中传送的参数是有长度限制的，而POST则没有。对参数的数据类型GET只接受ASCII字符，而POST即可是字符也可是字节</li><li>GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息</li><li>GET参数通过URL传递，POST放在Request body中</li></ol><h2 id="http响应" tabindex="-1"><a class="header-anchor" href="#http响应" aria-hidden="true">#</a> HTTP响应</h2><h3 id="响应行" tabindex="-1"><a class="header-anchor" href="#响应行" aria-hidden="true">#</a> 响应行</h3><figure><img src="'+T+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>响应行：HTTP/1.1 200</p><p>和请求消息相比，响应消息多了一个“响应状态码”，它以“清晰明确”的语言告诉客户端本次请求的处理结果。</p><h4 id="http状态码分类" tabindex="-1"><a class="header-anchor" href="#http状态码分类" aria-hidden="true">#</a> HTTP状态码分类</h4><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="常见状态码及含义" tabindex="-1"><a class="header-anchor" href="#常见状态码及含义" aria-hidden="true">#</a> 常见状态码及含义</h4><table><thead><tr><th>状态码</th><th>含义</th></tr></thead><tbody><tr><td>200</td><td>请求成功，已经正常处理完毕</td></tr><tr><td>301</td><td>请求永久重定向，转移到其它URL</td></tr><tr><td>302</td><td>请求临时重定向</td></tr><tr><td>304</td><td>请求被重定向到客户端本地缓存</td></tr><tr><td>400</td><td>客户端请求存在语法错误</td></tr><tr><td>401</td><td>客户端请求没有经过授权</td></tr><tr><td>403</td><td>客户端的请求被服务器拒绝，一般为客户端没有访问权限</td></tr><tr><td>404</td><td>资源未找到，客户端请求的URL在服务端不存在</td></tr><tr><td>500</td><td>服务端出现异常</td></tr></tbody></table><h4 id="状态码明细" tabindex="-1"><a class="header-anchor" href="#状态码明细" aria-hidden="true">#</a> 状态码明细</h4><h5 id="_1xx" tabindex="-1"><a class="header-anchor" href="#_1xx" aria-hidden="true">#</a> 1xx</h5><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="_2xx" tabindex="-1"><a class="header-anchor" href="#_2xx" aria-hidden="true">#</a> 2xx</h5><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="_3xx" tabindex="-1"><a class="header-anchor" href="#_3xx" aria-hidden="true">#</a> 3xx</h5><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="_4xx" tabindex="-1"><a class="header-anchor" href="#_4xx" aria-hidden="true">#</a> 4xx</h5><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="_5xx" tabindex="-1"><a class="header-anchor" href="#_5xx" aria-hidden="true">#</a> 5xx</h5><figure><img src="'+H+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="响应头" tabindex="-1"><a class="header-anchor" href="#响应头" aria-hidden="true">#</a> 响应头</h3><p>响应头用于告知浏览器当前响应中的详细信息，浏览器通过获取响应头中的信息可以知道应该如何处理响应结果。响应头中信息的格式为<code>key：value</code></p><h4 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> Date</h4><p>响应的Date使用的是GMT时间格式，表示响应消息送达时间</p><h4 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> Server</h4><p>服务器通过这个Server告诉浏览器服务器的类型</p><h4 id="vary" tabindex="-1"><a class="header-anchor" href="#vary" aria-hidden="true">#</a> Vary</h4><p>客户端缓存机制或者是缓存服务器在做缓存操作的时候，会使用到Vary头，会读取响应头中的Vary的内容，进行一些缓存的判断</p><h4 id="content-encoding" tabindex="-1"><a class="header-anchor" href="#content-encoding" aria-hidden="true">#</a> Content-Encoding</h4><p>文档的编码(Encode)方式。用gzip压缩文档能够显著地减少HTML文档的响应时间</p><h4 id="content-length" tabindex="-1"><a class="header-anchor" href="#content-length" aria-hidden="true">#</a> Content-Length</h4><p>表示内容长度。只有当浏览器使用持久HTTP连接时才需要这个数据</p><h4 id="content-type" tabindex="-1"><a class="header-anchor" href="#content-type" aria-hidden="true">#</a> Content-Type</h4><p>表示响应的文档属于什么MIME类型</p><h5 id="什么是mime" tabindex="-1"><a class="header-anchor" href="#什么是mime" aria-hidden="true">#</a> 什么是MIME?</h5><p>MIME(Multipurpose Internet Mail Extensions)多用途互联网邮件扩展类型。是设定某种扩展名的文件用一种应用程序来打开的方式类型，当该扩展名文件被访问的时候，浏览器会自动使用指定应用程序来打开。多用于指定一些客户端自定义的文件名，以及一些媒体文件打开方式。</p><h5 id="mime作用" tabindex="-1"><a class="header-anchor" href="#mime作用" aria-hidden="true">#</a> MIME作用</h5><p>HTTP协议所产生的响应中正文部分可以是任意格式的数据，那么如何保证接收方能看得懂发送方发送的正文数据呢？HTTP协议采用MIME协议来规范正文的数据格式。</p><h5 id="mime类型" tabindex="-1"><a class="header-anchor" href="#mime类型" aria-hidden="true">#</a> MIME类型</h5><table><thead><tr><th>Type</th><th>Meaning</th></tr></thead><tbody><tr><td>application/postscript</td><td>PostScript file</td></tr><tr><td>application/vnd.lotus-notes</td><td>Lotus Notes file</td></tr><tr><td>application/vnd.ms-excel</td><td>Excel spreadsheet</td></tr><tr><td>application/vnd.ms-powerpoint</td><td>PowerPoint presentation</td></tr><tr><td>application/x-gzip</td><td>Gzip archive</td></tr><tr><td>application/x-java-archive</td><td>JAR file</td></tr><tr><td>application/x-java-serialized-object</td><td>Serialized Java object</td></tr><tr><td>application/x-java-vm</td><td>Java bytecode (class)file</td></tr><tr><td>application/zip</td><td>Zip archive</td></tr><tr><td>audio/basic</td><td>Sound file in au or snd format</td></tr><tr><td>audio/midi</td><td>MIDI sound file</td></tr><tr><td>audio/x-aiff</td><td>AIFF sound file</td></tr><tr><td>audio/x-wav</td><td>Microsoft Windows sound file</td></tr><tr><td>image/gif</td><td>GIF image</td></tr><tr><td>image/jpeg</td><td>JPEG image</td></tr><tr><td>image/png</td><td>PNG image</td></tr><tr><td>image/tiff</td><td>TIFF image</td></tr><tr><td>image/x-xbitmap</td><td>X Windows bitmap image</td></tr><tr><td>text/css</td><td>HTML cascading style sheet</td></tr><tr><td>text/html</td><td>HTML document</td></tr><tr><td>text/plain</td><td>Plain text</td></tr><tr><td>text/xml</td><td>XML</td></tr><tr><td>video/mpeg</td><td>MPEG video clip</td></tr><tr><td>video/quicktime</td><td>QuickTime video clip</td></tr><tr><td>application/msword</td><td>Microsoft Word document</td></tr><tr><td>application/octet-stream</td><td>Unrecognized or binary data</td></tr><tr><td>application/pdf</td><td>Acrobat (.pdf) file</td></tr></tbody></table><h3 id="响应体" tabindex="-1"><a class="header-anchor" href="#响应体" aria-hidden="true">#</a> 响应体</h3><p>响应体就是响应的消息体，如果是纯数据就是返回纯数据，如果请求的是HTML页面，那么返回的就是HTML代码，如果是JS就是JS代码，如此之类。</p>',126),E=[S];function v(C,M){return e(),a("div",null,E)}const L=t(y,[["render",v],["__file","HTTP协议.html.vue"]]);export{L as default};
