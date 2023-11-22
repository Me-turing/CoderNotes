import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c,d as a,e as n,b as t,w as e,f as i}from"./app-71f45f98.js";const u="/CoderNotes/assets/image-20230730192601778-d516ecad.png",d="/CoderNotes/assets/image-20230730195030005-5bb454eb.png",r={},v=i(`<p>接下来我们快速的在SpringBoot中尝试复现文件的上传功能</p><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><h3 id="添加依赖" tabindex="-1"><a class="header-anchor" href="#添加依赖" aria-hidden="true">#</a> 添加依赖</h3><p>在SpringBoot中我们不需要再添加文件上传的依赖了，因为它已经内部集成了上传的依赖</p><p>但我们仍需要配置跨服务器传输的依赖：</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;dependency&gt;
	&lt;groupId&gt;com.sun.jersey&lt;/groupId&gt;
	&lt;artifactId&gt;jersey-client&lt;/artifactId&gt;
	&lt;version&gt;1.19&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件上传大小" tabindex="-1"><a class="header-anchor" href="#配置文件上传大小" aria-hidden="true">#</a> 配置文件上传大小</h3><p>默认情况下，SpringBoot对单个文件上传的大小设定为1MB，我们可以在SpringBoot的配置文件中配置上传文件的大小</p><div class="language-ymal line-numbers-mode" data-ext="ymal"><pre class="language-ymal"><code>spring:
  servlet:
    multipart:
      max-file-size: 10MB
      max-request-size: 100MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单一文件上传" tabindex="-1"><a class="header-anchor" href="#单一文件上传" aria-hidden="true">#</a> 单一文件上传</h2><h3 id="前端代码" tabindex="-1"><a class="header-anchor" href="#前端代码" aria-hidden="true">#</a> 前端代码</h3><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;html&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;./js/jquery-3.5.1.min.js&quot;&gt;&lt;/script&gt;
    &lt;style&gt;
        .progress {
            width: 200px;
            height: 10px;
            border: 1px solid #ccc;
            border-radius: 10px;
            margin: 10px 0px;
            overflow: hidden;
        }
        /* 初始状态设置进度条宽度为0px */
        .progress &gt; div {
            width: 0px;
            height: 100%;
            background-color: yellowgreen;
            transition: all .3s ease;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;addPlayer&quot; method=&quot;post&quot;&gt;
    &lt;p&gt;账号&lt;input type=&quot;text&quot; name=&quot;name&quot;&gt;&lt;/p&gt;
    &lt;p&gt;密码&lt;input type=&quot;text&quot; name=&quot;password&quot;&gt;&lt;/p&gt;
    &lt;p&gt;昵称&lt;input type=&quot;text&quot; name=&quot;nickname&quot;&gt;&lt;/p&gt;
    &lt;p&gt;头像:
        &lt;img id=&quot;avatarImg&quot; width=&quot;100px&quot; height=&quot;100px&quot; alt=&quot;请上传图片！&quot;&gt;
        &lt;%--进度条--%&gt;
        &lt;div class=&quot;progress&quot;&gt;
            &lt;div&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;br/&gt;
        &lt;input id=&quot;photo&quot; name=&quot;photo&quot; type=&quot;file&quot; &gt;
        &lt;a id=&quot;uploadFile&quot; name=&quot;uploadFile&quot; type=&quot;file&quot; href=&quot;javascript:void(0)&quot;&gt;立即上传&lt;/a&gt;
    &lt;/p&gt;
    &lt;p&gt;&lt;input type=&quot;submit&quot; value=&quot;注册&quot;&gt;&lt;/p&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
    // 获取上传文件的标签元素
    var uploadFileLink = document.getElementById(&quot;uploadFile&quot;);
    // 添加点击事件监听器
    uploadFileLink.addEventListener(&quot;click&quot;, function() {
        // 获取要上传的文件
        var photoFile =$(&quot;#photo&quot;)[0].files[0]
        if(photoFile==undefined){alert(&quot;您还未选中文件&quot;);return;}
        // 将文件装入FormData对象
        var formData =new FormData();
        formData.append(&quot;headPhoto&quot;,photoFile);
        // ajax向后台发送文件
        $.ajax({
            type:&quot;post&quot;,
            data:formData,
            url:&quot;fileUpload?ipAddress=&quot; + window.ipJson.ip,
            processData:false,
            contentType:false,
            success:function(result){
                //向img标签中追加src属性，展示图片
                 $(&quot;#avatarImg&quot;).attr(&quot;src&quot;,result.newFileName);
            },
            xhr: function() {
                var xhr = new XMLHttpRequest();
                //使用XMLHttpRequest.upload监听上传过程，注册progress事件，打印回调函数中的event事件
                xhr.upload.addEventListener(&#39;progress&#39;, function (e) {
                    //loaded代表上传了多少
                    //total代表总数为多少
                    var progressRate = (e.loaded / e.total) * 100 + &#39;%&#39;;
                    //通过设置进度条的宽度达到效果
                    $(&#39;.progress &gt; div&#39;).css(&#39;width&#39;, progressRate);
                })
                return xhr;
            }
        })
    });
    function ipJson(ipJson) {
        console.log(&#39;获取到的网络IP&#39;,ipJson);
        //可以把结果存在window上，方便调用
        window.ipJson=ipJson;
    }
&lt;/script&gt;
&lt;script src=&quot;https://whois.pconline.com.cn/ipJson.jsp?callback=ipJson&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后端代码" tabindex="-1"><a class="header-anchor" href="#后端代码" aria-hidden="true">#</a> 后端代码</h3><p>在接收文件流的时候，我们可以通过 <code>@RequestPart</code>注解来制定文件流的特殊名字（不是<code>@RequestParam</code>！！！）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RegistrationController</span> <span class="token punctuation">{</span>
    <span class="token comment">// 文件存储位置</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">FILESERVER</span><span class="token operator">=</span><span class="token string">&quot;http://127.0.0.1:8090/upload/&quot;</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/fileUpload&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">fileUpload</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span>
                                         <span class="token class-name">String</span> password<span class="token punctuation">,</span>
                                         <span class="token class-name">String</span> nickname<span class="token punctuation">,</span>
                                         <span class="token class-name">String</span> ipAddress<span class="token punctuation">,</span>
                                         <span class="token annotation punctuation">@RequestPart</span><span class="token punctuation">(</span><span class="token string">&quot;headPhoto&quot;</span><span class="token punctuation">)</span> <span class="token class-name">MultipartFile</span> headPhoto<span class="token punctuation">,</span>
                                         <span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> map<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 指定文件存储目录为我们项目部署环境下的upload目录</span>
        <span class="token class-name">String</span> realPath <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getRealPath</span><span class="token punctuation">(</span><span class="token string">&quot;/upload&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> dir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>realPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果不存在则创建目录</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>dir<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            dir<span class="token punctuation">.</span><span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 获取文件名</span>
        <span class="token class-name">String</span> originalFilename <span class="token operator">=</span> headPhoto<span class="token punctuation">.</span><span class="token function">getOriginalFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 避免文件名冲突,使用UUID替换文件名</span>
        <span class="token class-name">String</span> uuid <span class="token operator">=</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取拓展名</span>
        <span class="token class-name">String</span> extendsName <span class="token operator">=</span> originalFilename<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>originalFilename<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 新的文件名</span>
        <span class="token class-name">String</span> newFileName<span class="token operator">=</span>uuid<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>extendsName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建 sun公司提供的jersey包中的client对象</span>
        <span class="token class-name">Client</span> client<span class="token operator">=</span> <span class="token class-name">Client</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">WebResource</span> resource <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">resource</span><span class="token punctuation">(</span><span class="token constant">FILESERVER</span> <span class="token operator">+</span> newFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//  文件保存到另一个服务器上去了</span>
        resource<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> headPhoto<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 上传成功之后,把文件的名字和文件的类型返回给浏览器</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;上传成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;newFileName&quot;</span><span class="token punctuation">,</span> <span class="token constant">FILESERVER</span><span class="token operator">+</span>newFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;filetype&quot;</span><span class="token punctuation">,</span> headPhoto<span class="token punctuation">.</span><span class="token function">getContentType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> map<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动文件管理器" tabindex="-1"><a class="header-anchor" href="#启动文件管理器" aria-hidden="true">#</a> 启动文件管理器</h3>`,16),m=i('<h2 id="多文件同时上传" tabindex="-1"><a class="header-anchor" href="#多文件同时上传" aria-hidden="true">#</a> 多文件同时上传</h2><h3 id="修改前端代码" tabindex="-1"><a class="header-anchor" href="#修改前端代码" aria-hidden="true">#</a> 修改前端代码</h3><p>添加多文件上传的支持：</p><ol><li>form表单中添加 <code>enctype=&quot;multipart/form-data&quot;</code> 属性</li><li>选择文件的Input组件上 添加<code>multiple</code>属性</li></ol><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>修改上传的文件JS代码：</p><div class="language-Js line-numbers-mode" data-ext="Js"><pre class="language-Js"><code>&lt;script type=&quot;text/javascript&quot;&gt;
    // 获取上传文件的标签元素
    var uploadFileLink = document.getElementById(&quot;uploadFile&quot;);
    // 添加点击事件监听器
    uploadFileLink.addEventListener(&quot;click&quot;, function() {
        // 获取要上传的文件
        var photoFile =$(&quot;#photos&quot;)[0].files
        if(photoFile==undefined){alert(&quot;您还未选中文件&quot;);return;}
        // 将文件装入FormData对象
        var formData =new FormData();
        for (var i = 0; i &lt; photoFile.length; i++) {
            formData.append(&quot;photos&quot;, photoFile[i]);
        }
        // ajax向后台发送文件
        $.ajax({
            type:&quot;post&quot;,
            data:formData,
            url:&quot;fileUpload?ipAddress=&quot; + window.ipJson.ip,
            processData:false,
            contentType:false,
            success:function(result){
                //向img标签中追加src属性，展示图片
                 $(&quot;#avatarImg&quot;).attr(&quot;src&quot;,result.newFileName);
            },
            xhr: function() {
                var xhr = new XMLHttpRequest();
                //使用XMLHttpRequest.upload监听上传过程，注册progress事件，打印回调函数中的event事件
                xhr.upload.addEventListener(&#39;progress&#39;, function (e) {
                    //loaded代表上传了多少
                    //total代表总数为多少
                    var progressRate = (e.loaded / e.total) * 100 + &#39;%&#39;;
                    //通过设置进度条的宽度达到效果
                    $(&#39;.progress &gt; div&#39;).css(&#39;width&#39;, progressRate);
                })
                return xhr;
            }
        })
    });
    function ipJson(ipJson) {
        console.log(&#39;获取到的网络IP&#39;,ipJson);
        //可以把结果存在window上，方便调用
        window.ipJson=ipJson;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>注意 ： 此时获取的是一个List，需要手动循环塞给<code>formData</code></p></blockquote><h3 id="修改后端代码" tabindex="-1"><a class="header-anchor" href="#修改后端代码" aria-hidden="true">#</a> 修改后端代码</h3><p>此时后端接受的也是一个<code>MultipartFile</code>数组,需要循环塞给远端文件服务器</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/fileUpload&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">fileUpload</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span>
                                         <span class="token class-name">String</span> password<span class="token punctuation">,</span>
                                         <span class="token class-name">String</span> nickname<span class="token punctuation">,</span>
                                         <span class="token class-name">String</span> ipAddress<span class="token punctuation">,</span>
                                         <span class="token class-name">MultipartFile</span><span class="token punctuation">[</span><span class="token punctuation">]</span> photos<span class="token punctuation">,</span>
                                         <span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> map<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 指定文件存储目录为我们项目部署环境下的upload目录</span>
        <span class="token class-name">String</span> realPath <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getRealPath</span><span class="token punctuation">(</span><span class="token string">&quot;/upload&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> dir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>realPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果不存在则创建目录</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>dir<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            dir<span class="token punctuation">.</span><span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> headPhoto <span class="token operator">:</span> photos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 获取文件名</span>
            <span class="token class-name">String</span> originalFilename <span class="token operator">=</span> headPhoto<span class="token punctuation">.</span><span class="token function">getOriginalFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 避免文件名冲突,使用UUID替换文件名</span>
            <span class="token class-name">String</span> uuid <span class="token operator">=</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 获取拓展名</span>
            <span class="token class-name">String</span> extendsName <span class="token operator">=</span> originalFilename<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>originalFilename<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 新的文件名</span>
            <span class="token class-name">String</span> newFileName<span class="token operator">=</span>uuid<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>extendsName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 创建 sun公司提供的jersey包中的client对象</span>
            <span class="token class-name">Client</span> client<span class="token operator">=</span> <span class="token class-name">Client</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">WebResource</span> resource <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">resource</span><span class="token punctuation">(</span><span class="token constant">FILESERVER</span> <span class="token operator">+</span> newFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//  文件保存到另一个服务器上去了</span>
            resource<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> headPhoto<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 上传成功之后,把文件的名字和文件的类型返回给浏览器</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;上传成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//map.put(&quot;newFileName&quot;, FILESERVER+newFileName);</span>
        <span class="token comment">//map.put(&quot;filetype&quot;, headPhoto.getContentType());</span>
        <span class="token keyword">return</span> map<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function k(b,g){const s=l("RouterLink");return o(),c("div",null,[a("p",null,[n("在前面的学习中我们简单的在SpringMVC时测试了上传功能，详见 ： "),t(s,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/11_%E6%96%87%E4%BB%B6%E7%9A%84%E4%B8%8A%E4%BC%A0/%E6%96%87%E4%BB%B6%E7%9A%84%E4%B8%8A%E4%BC%A0.html"},{default:e(()=>[n("文件的上传")]),_:1})]),v,a("p",null,[n("详见："),t(s,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/11_%E6%96%87%E4%BB%B6%E7%9A%84%E4%B8%8A%E4%BC%A0/%E6%96%87%E4%BB%B6%E7%9A%84%E4%B8%8A%E4%BC%A0.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8%E6%9C%8D%E5%8A%A1%E5%99%A8"},{default:e(()=>[n("配置文件存储服务器")]),_:1})]),m])}const f=p(r,[["render",k],["__file","SpringBoot文件上传.html.vue"]]);export{f as default};
