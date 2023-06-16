import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as t,f as i}from"./app-c47b8d81.js";const l="/CoderNotes/assets/Pasted_image_20230408160401-675c0a27.png",s={},d=i(`<h2 id="什么是跨域" tabindex="-1"><a class="header-anchor" href="#什么是跨域" aria-hidden="true">#</a> 什么是跨域</h2><p>出于浏览器的同源策略限制。同源策略（Sameoriginpolicy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。同源策略会阻止一个域的javascript脚本和另外一个域的内容进行交互。所谓同源（即指在同一个域）就是两个页面<strong>具有相同的协议（protocol），主机（host）和端口号（port）</strong></p><p>本地路径地址：<code>http://127.0.0.1:8080/meturing/index.jsp</code></p><p><code>https://127.0.0.1:8080/meturing/index.jsp</code> 协议不一样<br><code>http://192.168.24.11:8080/meturing/index.jsp</code> IP不一致<br><code>http://127.0.0.1:8888/meturing/index.jsp</code>端口不一致<br><code>http://localhost:8080/meturing/index.jsp</code> IP不一致</p><h2 id="测试跨域限制" tabindex="-1"><a class="header-anchor" href="#测试跨域限制" aria-hidden="true">#</a> 测试跨域限制</h2><p>前端代码</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;$Title%sSourceCode%lt;/title&gt;
    &lt;meta charset=&quot;UTF-8&quot;/&gt;
    &lt;script src=&quot;js/jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        function checkUname(){
            // 获取输入框中的内容
            if(null == $(&quot;#unameI&quot;).val() || &#39;&#39; == $(&quot;#unameI&quot;).val()){
                $(&quot;#unameInfo&quot;).text(&quot;用户名不能为空&quot;);
                return;
            }
            $(&quot;#unameInfo&quot;).text(&quot;&quot;);
            // 通过jQuery.ajax() 发送异步请求
            $.ajax(
                    {
                        type:&quot;GET&quot;,// 请求的方式 GET  POST
                        url:&quot;http://localhost:8080/ajaxDemo3_war_exploded/unameCheckServlet.do?&quot;, // 请求的后台服务的路径
                        data:&quot;uname=&quot;+$(&quot;#unameI&quot;).val(),// 提交的参数
                        success:function(info){ // 响应成功执行的函数
                            $(&quot;#unameInfo&quot;).text(info)
                        }
                    }
            )
        }
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;myServlet1.do&quot; &gt;
    用户名:&lt;input id=&quot;unameI&quot; type=&quot;text&quot; name=&quot;uname&quot; onblur=&quot;checkUname()&quot;&gt;
    &lt;span id=&quot;unameInfo&quot; style=&quot;color: red&quot;&gt;&lt;/span&gt;&lt;br/&gt;
    密码:&lt;input type=&quot;password&quot; name=&quot;pwd&quot;&gt;&lt;br/&gt;
    &lt;input type=&quot;submit&quot; value=&quot;提交按钮&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器请求该资源的地址是:<code>http://127.0.0.1:8020/testa/index.html</code><br> 但是其内部ajax请求的资源的是:<code>http://localhost:8080/ajaxDemo3_war_exploded/unameCheckServlet.do? </code></p><p><strong>二者端口号和IP其实是不一致的,这就受到同源策略的控制</strong><br><img src="`+l+`" alt="" loading="lazy"></p><h2 id="jsonp实现跨域请求" tabindex="-1"><a class="header-anchor" href="#jsonp实现跨域请求" aria-hidden="true">#</a> jsonp实现跨域请求</h2><p>我们发现Web页面上调用js文件时则不受是否跨域的影响,拥有”src”这个属性的标签都却拥有跨域的能力，比如<code>&lt;\\script&gt;</code>、<code>&lt;\\img&gt;</code>、<code>&lt;\\iframe&gt;</code>。那么跨域访问数据就有了一种可能，那就是在远程服务器上设法把数据装进js格式的文件里，供客户端调用和进一步处理。就好比使用一个<code>&lt;script&gt;</code>,让其src属性指向我们要访问的跨域资源,然后以接收js文件的形式接收数据</p><p><strong>通过:dataType:&#39;jsonp&#39;属性实现跨域请求</strong><br><strong>通过 jsonp:&#39;callback&#39;,属性简化回调函数处理</strong></p><p>通过 <code>jsonp:’callback’</code>,实现自动处理回调函数名,相当于在url地址栏最后后拼接一个<code>callback=函数名</code>,后台自动根据这个函数名处理JS脚本,jQuery也会根据这函数名自动在前端处理回调函数,这样我们直接在success方法中接收返回的数据即可,可以不用自己去自己定义回调函数.后台获取参数时,<strong>参数名要要和jsonp:后面的函数名保持一致</strong></p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;$Title%sSourceCode%lt;/title&gt;
    &lt;meta charset=&quot;UTF-8&quot;/&gt;
    &lt;script src=&quot;http://localhost:8080/ajaxDemo3_war_exploded/js/jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        function checkUname(){
            // 获取输入框中的内容
            if(null == $(&quot;#unameI&quot;).val() || &#39;&#39; == $(&quot;#unameI&quot;).val()){
                $(&quot;#unameInfo&quot;).text(&quot;用户名不能为空&quot;);
                return;
            }
            $(&quot;#unameInfo&quot;).text(&quot;&quot;);
            // 通过jQuery.ajax() 发送异步请求
            $.ajax(
                {
                    type:&quot;GET&quot;,// 请求的方式 GET  POST
                    url:&quot;http://localhost:8080/ajaxDemo3_war_exploded/unameCheckServlet.do?&quot;, // 请求的后台服务的路径
                    data:{uname:$(&quot;#unameI&quot;).val()},// 提交的参数
                    dataType:&quot;jsonp&quot;,
                    jsonp:&quot;aaa&quot;,
                    success:function(info){
                    	$(&quot;#unameInfo&quot;).text(info)
                    }
                }
            )
        }
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;myServlet1.do&quot; &gt;
    用户名:&lt;input id=&quot;unameI&quot; type=&quot;text&quot; name=&quot;uname&quot; onblur=&quot;checkUname()&quot;&gt;
    &lt;span id=&quot;unameInfo&quot; style=&quot;color: red&quot;&gt;&lt;/span&gt;&lt;br/&gt;
    密码:&lt;input type=&quot;password&quot; name=&quot;pwd&quot;&gt;&lt;br/&gt;
    &lt;input type=&quot;submit&quot; value=&quot;提交按钮&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@WebServlet(&quot;/unameCheckServlet.do&quot;)
public class UnameCheckServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String uname = req.getParameter(&quot;uname&quot;);
        String callBack = req.getParameter(&quot;aaa&quot;);
        System.out.println(uname);
        String info=&quot;&quot;;
        if(&quot;meturing&quot;.equals(uname)){
            info=&quot;用户名已经占用&quot;;
        }else{
            info=&quot;用户名可用&quot;;
        }
        // 向浏览器响应数据
        resp.setCharacterEncoding(&quot;UTF-8&quot;);
        resp.setContentType(&quot;text/javaScript;charset=UTF-8&quot;);
        resp.getWriter().print(callBack+&quot;(&#39;&quot;+info+&quot;&#39;)&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过getjson方实现跨域请求" tabindex="-1"><a class="header-anchor" href="#通过getjson方实现跨域请求" aria-hidden="true">#</a> 通过getJson方实现跨域请求</h2><p><code>getJSON</code>方法是可以实现跨域请求的,在用该方法实现跨域请求时,在传递参数上应该注意在url后拼接一个<code>jsoncallback=?</code>,<strong>jQuery会自动替换?为正确的回调函数名</strong>,我们就可以不用单独定义回调函数了</p><p>前端代码</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;$Title%sSourceCode%lt;/title&gt;
    &lt;meta charset=&quot;UTF-8&quot;/&gt;
    &lt;script src=&quot;http://localhost:8080/ajaxDemo3_war_exploded/js/jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        function checkUname(){
            // 获取输入框中的内容
            if(null == $(&quot;#unameI&quot;).val() || &#39;&#39; == $(&quot;#unameI&quot;).val()){
                $(&quot;#unameInfo&quot;).text(&quot;用户名不能为空&quot;);
                return;
            }
            $(&quot;#unameInfo&quot;).text(&quot;&quot;);
           $.getJSON(
           	&quot;http://localhost:8080/ajaxDemo3_war_exploded/unameCheckServlet.do?jsoncallback=?&quot;,
           	{uname:$(&quot;#unameI&quot;).val()},
           	function(info){
           		$(&quot;#unameInfo&quot;).text(info)
           	}
           )
        }
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;myServlet1.do&quot; &gt;
    用户名:&lt;input id=&quot;unameI&quot; type=&quot;text&quot; name=&quot;uname&quot; onblur=&quot;checkUname()&quot;&gt;
    &lt;span id=&quot;unameInfo&quot; style=&quot;color: red&quot;&gt;&lt;/span&gt;&lt;br/&gt;
    密码:&lt;input type=&quot;password&quot; name=&quot;pwd&quot;&gt;&lt;br/&gt;
    &lt;input type=&quot;submit&quot; value=&quot;提交按钮&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@WebServlet(&quot;/unameCheckServlet.do&quot;)
public class UnameCheckServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String uname = req.getParameter(&quot;uname&quot;);
        String callBack = req.getParameter(&quot;jsoncallback&quot;);
        System.out.println(uname);
        String info=&quot;&quot;;
        if(&quot;meturing&quot;.equals(uname)){
            info=&quot;用户名已经占用&quot;;
        }else{
            info=&quot;用户名可用&quot;;
        }
        // 向浏览器响应数据
        resp.setCharacterEncoding(&quot;UTF-8&quot;);
        resp.setContentType(&quot;text/javaScript;charset=UTF-8&quot;);
        resp.getWriter().print(callBack+&quot;(&#39;&quot;+info+&quot;&#39;)&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过过滤器跨域" tabindex="-1"><a class="header-anchor" href="#通过过滤器跨域" aria-hidden="true">#</a> 通过过滤器跨域</h2><p>通过后台代码也可以实现跨域,一般在过滤器中添加如下代码,那么前端在请求时就不用考虑跨域问题了</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/*请求地址白名单 *代表所有*/
resp.setHeader(&quot;Access-Control-Allow-Origin&quot;, &quot;*&quot;);
/*请求方式白名单*/
resp.setHeader(&quot;Access-Control-Allow-Methods&quot;, &quot;POST, GET, OPTIONS, DELETE&quot;);
resp.setHeader(&quot;Access-Control-Max-Age&quot;, &quot;3600&quot;);
resp.setHeader(&quot;Access-Control-Allow-Headers&quot;, &quot;x-requested-with&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),u=[d];function a(o,r){return n(),t("div",null,u)}const m=e(s,[["render",a],["__file","Jsonp跨域处理.html.vue"]]);export{m as default};
