import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as p,c as u,d as n,e as s,b as a,w as d,f as e}from"./app-71f45f98.js";const c="/CoderNotes/assets/image-20230620132840590-58da4005.png",r="/CoderNotes/assets/image-20230620133125004-23a3bcb1.png",v="/CoderNotes/assets/image-20230620133151505-4a9ed10f.png",m="/CoderNotes/assets/image-20230620133405723-b47bfbc3.png",g="/CoderNotes/assets/image-20230620133740922-89da643f.png",b="/CoderNotes/assets/image-20230624124427116-36b3a8fa.png",k="/CoderNotes/assets/image-20230625223610710-cd902c62.png",q="/CoderNotes/assets/image-20230624133346950-33f2644b.png",h="/CoderNotes/assets/image-20230625225228436-17958f7c.png",f="/CoderNotes/assets/image-20230625225344980-ce80c50e.png",x="/CoderNotes/assets/image-20230625230002269-5619270f.png",y="/CoderNotes/assets/image-20230625225948918-c1288f08.png",I="/CoderNotes/assets/image-20230626232905392-e19a9366.png",w="/CoderNotes/assets/image-20230626232803193-57757506.png",S="/CoderNotes/assets/image-20230627092952461-f827e37a.png",_="/CoderNotes/assets/image-20230627093145155-ce831e5d.png",M="/CoderNotes/assets/image-20230627093241140-2a2ce1d5.png",R="/CoderNotes/assets/image-20230627093253228-11e8c38f.png",E="/CoderNotes/assets/image-20230627093908475-df1f1966.png",U="/CoderNotes/assets/image-20230627094037273-7aa8721a.png",C="/CoderNotes/assets/image-20230627094236437-6d1adb5f.png",T="/CoderNotes/assets/image-20230627094431660-46820f97.png",j="/CoderNotes/assets/image-20230627094402470-44958a37.png",F="/CoderNotes/assets/image-20230627095905833-8fc93183.png",J="/CoderNotes/assets/image-20230627095515448-121eddd1.png",P={},D=e('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>随着我们互联网的发展，我们的用户从直接访问网站获取信息。变为希望将自己本地的资源发送给服务器，让服务器提供给其他人使用或者查看。还有部分的用户希望可以将本地的资源上传服务器存储起来，然后再其他的电脑中可以通过访问网站来获取上传的资源，这样用户就可以打破空间的局限性，再任何时候只要有网有电脑就可以对自己的资源进行操作，比如:云存储，云编辑</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>实现一个简单的文件上传的Demo我们需要知道哪些新的知识呢？</p><h3 id="前端展示上传按钮" tabindex="-1"><a class="header-anchor" href="#前端展示上传按钮" aria-hidden="true">#</a> 前端展示上传按钮</h3><p>用户可以点击该按钮后选择本地要上传的文件在页面中使用input标签，type值设置为”file”即可</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="上传请求的发送方式" tabindex="-1"><a class="header-anchor" href="#上传请求的发送方式" aria-hidden="true">#</a> 上传请求的发送方式</h3><p>上传成功后的响应结果在当前页面显示，使用ajax请求来完成资源的发送</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="上传请求的请求数据及其数据格式" tabindex="-1"><a class="header-anchor" href="#上传请求的请求数据及其数据格式" aria-hidden="true">#</a> 上传请求的请求数据及其数据格式</h3><h4 id="请求数据" tabindex="-1"><a class="header-anchor" href="#请求数据" aria-hidden="true">#</a> 请求数据</h4><p>建议上传功能中不携带除上传资源以外的数据，可以根据项目结构记录上传的记录，但是不要携带用户的密码，个人详情等</p><h4 id="数据格式" tabindex="-1"><a class="header-anchor" href="#数据格式" aria-hidden="true">#</a> 数据格式</h4><p>传统的请求中，请求数据是以键值对的格式来发送给后台服务器的，但是在上传请求中，没有任何一个键可以描述上次的数据，因为数据本身是非常大的键就相当于一个变量，我们使用一个变量存储一个10g的电影显然是不可能的。</p><p>在上传请求中，将请求数据以二进制流的方式发送给服务器。</p><h3 id="在ajax中如何发送二进制流数据给服务器" tabindex="-1"><a class="header-anchor" href="#在ajax中如何发送二进制流数据给服务器" aria-hidden="true">#</a> 在ajax中如何发送二进制流数据给服务器</h3><ol><li>创建FormData的对象，将请求数据存储到该对象中发送</li><li>将processData属性的值设置为false，告诉浏览器发送对象请求数据</li><li>将contentType属性的值设置为false，设置请求数据的类型为二进制类型。</li><li>正常发送ajax即可</li></ol><figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>ProcessData:</p><ol><li>类型 ： Boolean</li><li>默认值：true 。 默认情况下，通过data选项传递进来的数据，如果是一个对象（技术上讲只要不是字符串），都会转换成一个查询字符串，以配合默认内容类型“application/x-www-form-urlencoded”。如果要发送的DOM树信息或者其他不希望转换的信息，请设置为false。</li></ol></blockquote><h3 id="上传成功后后台服务器应该响应什么结果给浏览器" tabindex="-1"><a class="header-anchor" href="#上传成功后后台服务器应该响应什么结果给浏览器" aria-hidden="true">#</a> 上传成功后后台服务器应该响应什么结果给浏览器</h3><p>并且浏览器如何处理后台服务器处理完成后，响应一个json对象给浏览器，示例格式如下:</p><div class="language-Json line-numbers-mode" data-ext="Json"><pre class="language-Json"><code>{state:true,msg:“服务器繁忙”,url:”上传成功的资源的请求地址”}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="文件上传依赖的jar" tabindex="-1"><a class="header-anchor" href="#文件上传依赖的jar" aria-hidden="true">#</a> 文件上传依赖的jar</h3><p>在SpringMVC的基础上，我们需要新增对文件上传支持的依赖</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;!--文件上传依赖--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;commons-fileupload&lt;/groupId&gt;
  &lt;artifactId&gt;commons-fileupload&lt;/artifactId&gt;
  &lt;version&gt;1.4&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
  &lt;groupId&gt;commons-io&lt;/groupId&gt;
  &lt;artifactId&gt;commons-io&lt;/artifactId&gt;
  &lt;version&gt;2.8.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件上传组件" tabindex="-1"><a class="header-anchor" href="#配置文件上传组件" aria-hidden="true">#</a> 配置文件上传组件</h3><p>同时我们需要在SpringMVC中配置文件上传解析支持的组件</p><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code> &lt;!--文件上传解析组件
    id必须为multipartResolver
    springmvc默认使用该id找该组件
    --&gt;
    &lt;bean 
    id=&quot;multipartResolver&quot;                                            
    class=&quot;org.springframework.web.multipart.commons.CommonsMultipartResolver&quot;&gt;&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="准备环境" tabindex="-1"><a class="header-anchor" href="#准备环境" aria-hidden="true">#</a> 准备环境</h2><h3 id="准备数据表" tabindex="-1"><a class="header-anchor" href="#准备数据表" aria-hidden="true">#</a> 准备数据表</h3><p>创建用户上传记录表</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>CREATE TABLE `uploadinfo` (\n  `serialNo` int NOT NULL AUTO_INCREMENT COMMENT &#39;流水号&#39;,\n  `uploadIp` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,\n  `uploadPath` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,\n  `uploadType` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,\n  `uploadTime` datetime NOT NULL,\n  PRIMARY KEY (`serialNo`)\n) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT=&#39;上传详情记录表&#39;;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构建项目" tabindex="-1"><a class="header-anchor" href="#构建项目" aria-hidden="true">#</a> 构建项目</h3><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',38),L=n("li",null,[s("注意工程中需要导入对上传支持的依赖包 ： "),n("a",{href:"#%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E4%BE%9D%E8%B5%96%E7%9A%84jar"},"文件上传依赖的jar")],-1),N=n("li",null,[s("注意在SpringMVC的组件中添加文件解析组件 ： "),n("a",{href:"#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E7%BB%84%E4%BB%B6"},"配置文件上传组件")],-1),A=e('<h2 id="实现功能" tabindex="-1"><a class="header-anchor" href="#实现功能" aria-hidden="true">#</a> 实现功能</h2><h3 id="存储文件" tabindex="-1"><a class="header-anchor" href="#存储文件" aria-hidden="true">#</a> 存储文件</h3><h4 id="前端代码" tabindex="-1"><a class="header-anchor" href="#前端代码" aria-hidden="true">#</a> 前端代码</h4><h5 id="简单的前端代码" tabindex="-1"><a class="header-anchor" href="#简单的前端代码" aria-hidden="true">#</a> 简单的前端代码</h5><figure><img src="'+q+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;static/js/jquery-3.5.1.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;addPlayer&quot; method=&quot;get&quot;&gt;
    &lt;p&gt;账号&lt;input type=&quot;text&quot; name=&quot;name&quot;&gt;&lt;/p&gt;
    &lt;p&gt;密码&lt;input type=&quot;text&quot; name=&quot;password&quot;&gt;&lt;/p&gt;
    &lt;p&gt;昵称&lt;input type=&quot;text&quot; name=&quot;nickname&quot;&gt;&lt;/p&gt;
    &lt;p&gt;头像:
        &lt;br/&gt;
        &lt;input id=&quot;photo&quot; type=&quot;file&quot;&gt;
        &lt;a id=&quot;uploadFile&quot; href=&quot;javascript:void(0)&quot;&gt;立即上传&lt;/a&gt;
    &lt;/p&gt;
    &lt;p&gt;&lt;input type=&quot;submit&quot; value=&quot;注册&quot;&gt;&lt;/p&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
  
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="获取用户的真实ip信息" tabindex="-1"><a class="header-anchor" href="#获取用户的真实ip信息" aria-hidden="true">#</a> 获取用户的真实IP信息</h5><p>由于我们的上传详情中需要记录用户的上传IP信息，所以我们借助太平洋电脑网的API操作</p><p>我们访问： <code>https://whois.pconline.com.cn/ipJson.jsp?callback=ipJson</code></p><p>返回当前访问客户端的详情JSON信息：</p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>if(window.ipJson) {ipJson({&quot;ip&quot;:&quot;61.152.201.160&quot;,&quot;pro&quot;:&quot;上海市&quot;,&quot;proCode&quot;:&quot;310000&quot;,&quot;city&quot;:&quot;上海市&quot;,&quot;cityCode&quot;:&quot;310000&quot;,&quot;region&quot;:&quot;&quot;,&quot;regionCode&quot;:&quot;0&quot;,&quot;addr&quot;:&quot;上海市 电信&quot;,&quot;regionNames&quot;:&quot;&quot;,&quot;err&quot;:&quot;&quot;});}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以我们可以使用以下方法：</p><p>Register.jsp</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;static/js/jquery-3.5.1.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;addPlayer&quot; method=&quot;get&quot;&gt;
    &lt;p&gt;账号&lt;input type=&quot;text&quot; name=&quot;name&quot;&gt;&lt;/p&gt;
    &lt;p&gt;密码&lt;input type=&quot;text&quot; name=&quot;password&quot;&gt;&lt;/p&gt;
    &lt;p&gt;昵称&lt;input type=&quot;text&quot; name=&quot;nickname&quot;&gt;&lt;/p&gt;
    &lt;p&gt;头像:
        &lt;br/&gt;
        &lt;input id=&quot;photo&quot; type=&quot;file&quot;&gt;
        &lt;a id=&quot;uploadFile&quot; href=&quot;javascript:void(0)&quot;&gt;立即上传&lt;/a&gt;
    &lt;/p&gt;
    &lt;p&gt;&lt;input type=&quot;submit&quot; value=&quot;注册&quot;&gt;&lt;/p&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
    // 获取上传文件的标签元素
    var uploadFileLink = document.getElementById(&quot;uploadFile&quot;);
    // 添加点击事件监听器
    uploadFileLink.addEventListener(&quot;click&quot;, function() {
        alert(window.ipJson.ip);//获取IP信息
    });
    function ipJson(ipJson) {
        console.log(&#39;获取到的网络IP&#39;,ipJson);
        //可以把结果存在window上，方便调用
        window.ipJson=ipJson;
    }
&lt;/script&gt;
&lt;script src=&quot;https://whois.pconline.com.cn/ipJson.jsp?callback=ipJson&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时点击上传时，我们可以在<code>window.ipJson</code>中获取用户访问的详情信息</p><h5 id="前端上传代码" tabindex="-1"><a class="header-anchor" href="#前端上传代码" aria-hidden="true">#</a> 前端上传代码</h5><p>我们通过Ajax将文件上传至指定的接口：</p><ol><li>上传文件，参考 [[#在ajax中如何发送二进制流数据给服务器]]</li><li>在上传时我们可以通过Url中传递当前用户的IP信息</li></ol><p>Register.jsp</p><div class="language-HTMl line-numbers-mode" data-ext="HTMl"><pre class="language-HTMl"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;static/js/jquery-3.5.1.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;addPlayer&quot; method=&quot;get&quot;&gt;
    &lt;p&gt;账号&lt;input type=&quot;text&quot; name=&quot;name&quot;&gt;&lt;/p&gt;
    &lt;p&gt;密码&lt;input type=&quot;text&quot; name=&quot;password&quot;&gt;&lt;/p&gt;
    &lt;p&gt;昵称&lt;input type=&quot;text&quot; name=&quot;nickname&quot;&gt;&lt;/p&gt;
    &lt;p&gt;头像:
        &lt;br/&gt;
        &lt;input id=&quot;photo&quot; type=&quot;file&quot;&gt;
        &lt;a id=&quot;uploadFile&quot; href=&quot;javascript:void(0)&quot;&gt;立即上传&lt;/a&gt;
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
                // 接收后台响应的信息
                console.log(result)
                //图片回显
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="后端代码" tabindex="-1"><a class="header-anchor" href="#后端代码" aria-hidden="true">#</a> 后端代码</h4><p>我们需要将刚刚用户上传的信息保存至DB</p><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>将用户上传的文件保存到指定目录</p><figure><img src="'+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="接收上传的文件" tabindex="-1"><a class="header-anchor" href="#接收上传的文件" aria-hidden="true">#</a> 接收上传的文件</h5><p>com.meturing.pojo.UploadInfo</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UploadInfo implements Serializable {
    private Integer serialNo;
    private String uploadIp;
    private String uploadPath;
    private String uploadType;
    private Date uploadTime;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>com.meturing.controller.RegisterController.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class RegisterController {
    @Autowired
    private UserRegister userRegisterImpl;
    @RequestMapping(&quot;/fileUpload&quot;)
    @ResponseBody
    public String register(MultipartFile headPhoto, @RequestParam String ipAddress, HttpServletRequest request) throws IOException {
        //获取当前static/update目录地址
        String realPath = request.getServletContext().getRealPath(&quot;static/upload&quot;);
        File dir = new File(realPath);
        //如果文件夹不存在则创建
        if (!dir.exists()) dir.mkdirs();
        //获取上传文件的名字
        String filename = headPhoto.getOriginalFilename();
        //根据保存路径和保存文件名称获取对应的File对象
        File file = new File(dir, filename);
        //将收到的文件传输到给定的目标文件
        headPhoto.transferTo(file);
        //获取当前上传的类型
        String contentType = headPhoto.getContentType();
        //当前的时间
        Date date = Date.from(Instant.now());
        UploadInfo uploadInfo = new UploadInfo(null, ipAddress, realPath+File.separatorChar+filename, contentType, date);
        userRegisterImpl.saveInfo(uploadInfo);
        return &quot;success&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>com.meturing.service.UserRegister.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface UserRegister {
    void saveInfo(UploadInfo uploadInfo);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>com.meturing.service.impl.UserRegisterImpl.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Service
@Transactional
public class UserRegisterImpl implements UserRegister {
    @Autowired
    private UserRegisterMapper userRegisterMapper ;
    @Override
    public void saveInfo(UploadInfo uploadInfo) {
        userRegisterMapper.saveInfo(uploadInfo);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>com.meturing.mapper.UserRegisterMapper.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Mapper
public interface UserRegisterMapper {
    void saveInfo(UploadInfo uploadInfo);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>resources/com/meturing/mapper/UserRegisterMapper.xml</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
&lt;!DOCTYPE mapper
        PUBLIC &quot;-//mybatis.org//DTDMapper3.0//EN&quot;
        &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;
&lt;mapper namespace=&quot;com.meturing.mapper.UserRegisterMapper&quot;&gt;
    &lt;insert id=&quot;saveInfo&quot; parameterType=&quot;uploadInfo&quot;&gt;
        INSERT into uploadinfo values (DEFAULT,#{uploadIp},#{uploadPath},#{uploadType},#{uploadTime})
    &lt;/insert&gt;
&lt;/mapper&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用uuid避免文件重名" tabindex="-1"><a class="header-anchor" href="#使用uuid避免文件重名" aria-hidden="true">#</a> 使用UUID避免文件重名</h5><p><strong>UUID是通用唯一识别码（Universally Unique Identifier）</strong> 的缩写，是一种软件建构的标准，亦为开放软件基金会组织在分布式计算环境领域的一部分。</p><p><strong>其目的，是让分布式系统中的所有元素，都能有唯一的辨识信息，而不需要通过中央控制端来做辨识信息的指定</strong>。</p><p>如此一来，每个人都可以创建不与其它人冲突的UUID。在这样的情况下，就不需考虑数据库创建时的名称重复问题。目前最广泛应用的UUID，是微软公司的全局唯一标识符（GUID），而其他重要的应用，则有Linux ext2/ext3文件系统、 LUKS加密分区、GNOME、KDE、Mac OS X等等。另外我们也可以在e2fs progs包中的UUID库找到实现。</p><p>UUID伪代码：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>String filename = &quot;Snipaste_2023-06-22_09-46-17.png&quot;//用户上传的文件名 : Snipaste_2023-06-22_09-46-17.png
String substring = filename.substring(filename.lastIndexOf(&quot;.&quot;));//获取文件的后缀 .png
String uuidStr = UUID.randomUUID().toString();//获取UUID : 53f1cf07-5205-4dfe-9c97-b5e38766aaed
filename = uuidStr.concat(substring);//拼接新的名字 : 53f1cf07-5205-4dfe-9c97-b5e38766aaed.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 com.meturing.controller.RegisterController.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class RegisterController {
    @Autowired
    private UserRegister userRegisterImpl;
    @RequestMapping(&quot;/fileUpload&quot;)
    @ResponseBody
    public String register(MultipartFile headPhoto, @RequestParam String ipAddress, HttpServletRequest request) throws IOException {
        String realPath = request.getServletContext().getRealPath(&quot;static/upload&quot;);
        File dir = new File(realPath);
        if (!dir.exists()) dir.mkdirs();
        
        //获取上传文件的名字 并 使用UUID处理文件名字避免重复
        String filename = headPhoto.getOriginalFilename();
        String substring = filename.substring(filename.lastIndexOf(&quot;.&quot;));
        String uuidStr = UUID.randomUUID().toString();
        filename = uuidStr.concat(substring);
        
        File file = new File(dir, filename);
        headPhoto.transferTo(file);
        String contentType = headPhoto.getContentType();
        Date date = Date.from(Instant.now());
        UploadInfo uploadInfo = new UploadInfo(null, ipAddress, realPath+File.separatorChar+filename, contentType, date);
        userRegisterImpl.saveInfo(uploadInfo);
        return &quot;success&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><figure><img src="`+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="控制上传文件" tabindex="-1"><a class="header-anchor" href="#控制上传文件" aria-hidden="true">#</a> 控制上传文件</h5><p>对于文件的控制我们通常在后端也需要管理： 限制用户上传的文件类型/文件大小</p><ol><li><code>MultipartFile对象.getSize()</code> 可以获取当前上传的文件的大小</li><li><code>MultipartFile对象.getOriginalFilename()</code> 获取上传文件的名字，通过截取后缀判断当前的文件类型</li></ol><p>修改 com.meturing.controller.RegisterController.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class RegisterController {
    @Autowired
    private UserRegister userRegisterImpl;
    @RequestMapping(&quot;/fileUpload&quot;)
    @ResponseBody
    public HashMap&lt;String, String&gt; register(MultipartFile headPhoto, @RequestParam String ipAddress, HttpServletRequest request) throws IOException {
        HashMap&lt;String, String&gt; responseMap = new HashMap&lt;&gt;();
        
        //获取文件的大小
        if (headPhoto.getSize()&gt;=1024*1024*5){
            responseMap.put(&quot;message&quot;, &quot;文件大小不能超过5M&quot;);
            return responseMap;
        }
        
        String realPath = request.getServletContext().getRealPath(&quot;static/upload&quot;);
        File dir = new File(realPath);
        if (!dir.exists()) dir.mkdirs();
        String filename = headPhoto.getOriginalFilename();
        String substring = filename.substring(filename.lastIndexOf(&quot;.&quot;));
        
        //校验文件是否是.jpg类型
        if (substring.equals(&quot;.jpg&quot;)){
            responseMap.put(&quot;message&quot;, &quot;文件类型必须是.jpg&quot;);
            return responseMap;
        }
        
        String uuidStr = UUID.randomUUID().toString();
        filename = uuidStr.concat(substring);
        File file = new File(dir, filename);
        headPhoto.transferTo(file);
        String contentType = headPhoto.getContentType();
        Date date = Date.from(Instant.now());
        UploadInfo uploadInfo = new UploadInfo(null, ipAddress, realPath+File.separatorChar+filename, contentType, date);
        userRegisterImpl.saveInfo(uploadInfo);
        return null;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="回显上传文件" tabindex="-1"><a class="header-anchor" href="#回显上传文件" aria-hidden="true">#</a> 回显上传文件</h4><p>我们此时可以将前端文件上传保存到DB后返回给前端并在页面中展示出来<br><img src="`+I+`" alt="" loading="lazy"></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class RegisterController {
    @Autowired
    private UserRegister userRegisterImpl;
    @RequestMapping(&quot;/fileUpload&quot;)
    @ResponseBody
    public HashMap&lt;String, String&gt; register(MultipartFile headPhoto, @RequestParam String ipAddress, HttpServletRequest request) throws IOException {
        HashMap&lt;String, String&gt; responseMap = new HashMap&lt;&gt;();
        if (headPhoto.getSize()&gt;=1024*1024*5){
            responseMap.put(&quot;message&quot;, &quot;文件大小不能超过5M&quot;);
            return responseMap;
        }
        String realPath = request.getServletContext().getRealPath(&quot;static/upload&quot;);
        File dir = new File(realPath);
        if (!dir.exists()) dir.mkdirs();
        String filename = headPhoto.getOriginalFilename();
        String substring = filename.substring(filename.lastIndexOf(&quot;.&quot;));
        if (substring.equals(&quot;.jpg&quot;)){
            responseMap.put(&quot;message&quot;, &quot;文件类型必须是.jpg&quot;);
            return responseMap;
        }
        String uuidStr = UUID.randomUUID().toString();
        filename = uuidStr.concat(substring);
        File file = new File(dir, filename);
        headPhoto.transferTo(file);
        String contentType = headPhoto.getContentType();
        Date date = Date.from(Instant.now());
        UploadInfo uploadInfo = new UploadInfo(null, ipAddress, realPath+File.separatorChar+filename, contentType, date);
        userRegisterImpl.saveInfo(uploadInfo);
        
        //返回前端文件详情
        responseMap.put(&quot;message&quot;,&quot;上传成功！&quot;);
        responseMap.put(&quot;fileName&quot;,filename);
        responseMap.put(&quot;fileType&quot;,contentType);
        return responseMap;
        
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Register.jsp</p><ol><li>新增一个img标签</li><li>将Ajax返回的结果使用JQ添加src的属性</li></ol><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;static/js/jquery-3.5.1.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;addPlayer&quot; method=&quot;get&quot;&gt;
    &lt;p&gt;账号&lt;input type=&quot;text&quot; name=&quot;name&quot;&gt;&lt;/p&gt;
    &lt;p&gt;密码&lt;input type=&quot;text&quot; name=&quot;password&quot;&gt;&lt;/p&gt;
    &lt;p&gt;昵称&lt;input type=&quot;text&quot; name=&quot;nickname&quot;&gt;&lt;/p&gt;
    &lt;p&gt;头像:
        &lt;img id=&quot;avatarImg&quot; width=&quot;100px&quot; height=&quot;100px&quot; alt=&quot;请上传图片！&quot;&gt;
        &lt;br/&gt;
        &lt;input id=&quot;photo&quot; type=&quot;file&quot;&gt;
        &lt;a id=&quot;uploadFile&quot; href=&quot;javascript:void(0)&quot;&gt;立即上传&lt;/a&gt;
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
                $(&quot;#avatarImg&quot;).attr(&quot;src&quot;,&quot;static/upload/&quot;+result.fileName);
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加上传进度条" tabindex="-1"><a class="header-anchor" href="#添加上传进度条" aria-hidden="true">#</a> 添加上传进度条</h4><p>我们接下来尝试在上传图片时展示上传的进度<br><img src="`+w+`" alt="" loading="lazy"></p><p>伪代码</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>//样式
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
.....
&lt;%--进度条--%&gt;
&lt;div class=&quot;progress&quot;&gt;
	&lt;div&gt;&lt;/div&gt;
&lt;/div&gt;
.....
//JS事件
&lt;script type=&quot;text/javascript&quot;&gt;
        $.ajax({
            type:&quot;post&quot;,
            data:formData,
            url:&quot;fileUpload?ipAddress=&quot; + window.ipJson.ip,
            processData:false,
            contentType:false,
            success:function(result){
	         //回显处理
	         ......
            },
            //显示进度条
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
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>static/js/jquery-3.5.1.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.progress</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 10px 0px<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">/* 初始状态设置进度条宽度为0px */</span>
        <span class="token selector">.progress &gt; div</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> yellowgreen<span class="token punctuation">;</span>
            <span class="token property">transition</span><span class="token punctuation">:</span> all .3s ease<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addPlayer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>get<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>账号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>密码<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>昵称<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nickname<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>头像:
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>avatarImg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100px<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100px<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请上传图片！<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        &lt;%--进度条--%&gt;
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>progress<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>photo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploadFile<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript:void(0)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>立即上传<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>注册<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 获取上传文件的标签元素</span>
    <span class="token keyword">var</span> uploadFileLink <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;uploadFile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 添加点击事件监听器</span>
    uploadFileLink<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取要上传的文件</span>
        <span class="token keyword">var</span> photoFile <span class="token operator">=</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#photo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>photoFile<span class="token operator">==</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;您还未选中文件&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">return</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
        <span class="token comment">// 将文件装入FormData对象</span>
        <span class="token keyword">var</span> formData <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;headPhoto&quot;</span><span class="token punctuation">,</span>photoFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ajax向后台发送文件</span>
        $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span>formData<span class="token punctuation">,</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&quot;fileUpload?ipAddress=&quot;</span> <span class="token operator">+</span> window<span class="token punctuation">.</span>ipJson<span class="token punctuation">.</span>ip<span class="token punctuation">,</span>
            <span class="token literal-property property">processData</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">contentType</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//向img标签中追加src属性，展示图片</span>
                <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#avatarImg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;static/upload/&quot;</span><span class="token operator">+</span>result<span class="token punctuation">.</span>fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">xhr</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//使用XMLHttpRequest.upload监听上传过程，注册progress事件，打印回调函数中的event事件</span>
                xhr<span class="token punctuation">.</span>upload<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;progress&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">//loaded代表上传了多少</span>
                    <span class="token comment">//total代表总数为多少</span>
                    <span class="token keyword">var</span> progressRate <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>loaded <span class="token operator">/</span> e<span class="token punctuation">.</span>total<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
                    <span class="token comment">//通过设置进度条的宽度达到效果</span>
                    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.progress &gt; div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span> progressRate<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> xhr<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">ipJson</span><span class="token punctuation">(</span><span class="token parameter">ipJson</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;获取到的网络IP&#39;</span><span class="token punctuation">,</span>ipJson<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//可以把结果存在window上，方便调用</span>
        window<span class="token punctuation">.</span>ipJson<span class="token operator">=</span>ipJson<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://whois.pconline.com.cn/ipJson.jsp?callback=ipJson<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用独立文件存储服务器" tabindex="-1"><a class="header-anchor" href="#使用独立文件存储服务器" aria-hidden="true">#</a> 使用独立文件存储服务器</h3><p>分服务器上传作用:</p><ul><li>数据库服务器：运行我们的数据库</li><li>缓存和消息服务器：负责处理大并发访问的缓存和消息</li><li>文件服务器：负责存储用户上传文件的服务器。</li><li>应用服务器：负责部署我们的应用</li></ul><figure><img src="`+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在实际开发中，我们会有很多处理不同功能的服务器。(注意：此处说的不是服务器集群）<br> 总结：<strong>分服务器处理的目的是让服务器各司其职，从而提高我们项目的运行效率。</strong></p><h4 id="配置文件存储服务器" tabindex="-1"><a class="header-anchor" href="#配置文件存储服务器" aria-hidden="true">#</a> 配置文件存储服务器</h4><h5 id="单独解压一个tomcat文件" tabindex="-1"><a class="header-anchor" href="#单独解压一个tomcat文件" aria-hidden="true">#</a> 单独解压一个Tomcat文件</h5><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="配置servlet-xml" tabindex="-1"><a class="header-anchor" href="#配置servlet-xml" aria-hidden="true">#</a> 配置Servlet.xml</h5><p>修改启动/关闭的监听端口<br><img src="'+M+'" alt="" loading="lazy"></p><p>修改服务器主端口<br><img src="'+R+'" alt="" loading="lazy"></p><h5 id="配置web-xml" tabindex="-1"><a class="header-anchor" href="#配置web-xml" aria-hidden="true">#</a> 配置Web.xml</h5><p>修改服务器非只读</p><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="启动服务器" tabindex="-1"><a class="header-anchor" href="#启动服务器" aria-hidden="true">#</a> 启动服务器</h5><p>方式一: 直接运行对应的bat文件</p>',82),B={href:"http://shutdown.sh",target:"_blank",rel:"noopener noreferrer"},O={href:"http://startup.sh",target:"_blank",rel:"noopener noreferrer"},H=n("br",null,null,-1),z=n("img",{src:U,alt:"",loading:"lazy"},null,-1),X=e('<p>方式二: 编写一个启动的批量脚本<br><img src="'+C+`" alt="" loading="lazy"></p><p>代码:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@echo off
<span class="token builtin class-name">echo</span> 正在启动apache-tomcat-8.5.27<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token builtin class-name">echo</span> 请不要关闭本窗口
<span class="token builtin class-name">echo</span> <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token builtin class-name">cd</span> %~dp0bin<span class="token punctuation">\\</span> 
call startup.bat
<span class="token builtin class-name">echo</span> over
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试运行状态:</p><figure><img src="`+T+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+j+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="修改上传服务器" tabindex="-1"><a class="header-anchor" href="#修改上传服务器" aria-hidden="true">#</a> 修改上传服务器</h4><h5 id="添加依赖" tabindex="-1"><a class="header-anchor" href="#添加依赖" aria-hidden="true">#</a> 添加依赖</h5><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;!--Jersey服务--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;com.sun.jersey&lt;/groupId&gt;
  &lt;artifactId&gt;jersey-client&lt;/artifactId&gt;
  &lt;version&gt;1.19&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="修改后端代码" tabindex="-1"><a class="header-anchor" href="#修改后端代码" aria-hidden="true">#</a> 修改后端代码</h5><p>伪代码:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 文件存储位置  
private final static String FILESERVER=&quot;http://127.0.0.1:8090/upload/&quot;;

 @RequestMapping(&quot;/fileUpload&quot;)
    @ResponseBody
    public HashMap&lt;String, String&gt; register(MultipartFile headPhoto, @RequestParam String ipAddress, HttpServletRequest request) throws IOException {
		......
		
        String filename = headPhoto.getOriginalFilename();//获取上传文件的名字
        
        ......
        
        //创建 sun公司提供的jersey包中的client对象
        Client client = Client.create();
        WebResource resource = client.resource(FILESERVER + filename);
        //将文件提交到指定路径上
        resource.put(String.class,headPhoto.getBytes());
        
		......
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码:<br> com.meturing.controller.RegisterController.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class RegisterController {
    @Autowired
    private UserRegister userRegisterImpl;
    // 文件存储位置
    private final static String FILESERVER=&quot;http://127.0.0.1:8090/upload/&quot;;

    @RequestMapping(&quot;/fileUpload&quot;)
    @ResponseBody
    public HashMap&lt;String, String&gt; register(MultipartFile headPhoto, @RequestParam String ipAddress, HttpServletRequest request) throws IOException {
        HashMap&lt;String, String&gt; responseMap = new HashMap&lt;&gt;();
        //获取文件的大小
        if (headPhoto.getSize()&gt;=1024*1024*5){
            responseMap.put(&quot;message&quot;, &quot;文件大小不能超过5M&quot;);
            return responseMap;
        }
        String realPath = request.getServletContext().getRealPath(&quot;static/upload&quot;);//获取当前static/update目录地址
        File dir = new File(realPath);
        if (!dir.exists()) dir.mkdirs();//如果文件夹不存在则创建
        String filename = headPhoto.getOriginalFilename();//获取上传文件的名字
        //使用UUID处理文件名字避免重复
        String substring = filename.substring(filename.lastIndexOf(&quot;.&quot;));
        //校验文件是否是.jpg类型
        if (substring.equals(&quot;.jpg&quot;)){
            responseMap.put(&quot;message&quot;, &quot;文件类型必须是.jpg&quot;);
            return responseMap;
        }
        String uuidStr = UUID.randomUUID().toString();
        filename = uuidStr.concat(substring);
        //File file = new File(dir, filename);//根据保存路径和保存文件名称获取对应的File对象
        //headPhoto.transferTo(file);//将收到的文件传输到给定的目标文件
		
        //创建 sun公司提供的jersey包中的client对象
        Client client = Client.create();
        WebResource resource = client.resource(FILESERVER + filename);
        //将文件提交到指定路径上
        resource.put(String.class,headPhoto.getBytes());
		
        String contentType = headPhoto.getContentType();//获取当前上传的类型
        Date date = Date.from(Instant.now());//当前的时间
        UploadInfo uploadInfo = new UploadInfo(null, ipAddress, realPath+File.separatorChar+filename, contentType, date);
        userRegisterImpl.saveInfo(uploadInfo);
        responseMap.put(&quot;message&quot;,&quot;上传成功！&quot;);
        responseMap.put(&quot;fileName&quot;,filename);
        responseMap.put(&quot;fileType&quot;,contentType);
        return responseMap;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="修改前端代码" tabindex="-1"><a class="header-anchor" href="#修改前端代码" aria-hidden="true">#</a> 修改前端代码</h5><p>注意此时需要修改回显时的地址</p><figure><img src="`+F+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h4><figure><img src="'+J+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',19);function V($,Q){const l=i("RouterLink"),t=i("ExternalLinkIcon");return p(),u("div",null,[D,n("ol",null,[n("li",null,[s("按照前面的学习中构建SpringMVC的项目结构，可以参考 "),a(l,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/09_%E6%95%B4%E5%90%88SpringMVC/%E6%95%B4%E5%90%88SpringMVC.html"},{default:d(()=>[s("整合SpringMVC")]),_:1})]),L,N]),A,n("ul",null,[n("li",null,[s("shutdown.bat / "),n("a",B,[s("shutdown.sh"),a(t)]),s(" 停止")]),n("li",null,[s("startup.bat / "),n("a",O,[s("startup.sh"),a(t)]),s(" 启动"),H,z])]),X])}const W=o(P,[["render",V],["__file","文件的上传.html.vue"]]);export{W as default};
