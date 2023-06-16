<template><div><p>每次书写AJAX代码比较繁琐 步骤都是一样的,数据回显使用原生js代码也比较繁琐,可以使用jQuery对上述问题进行优化,jQuery不仅仅对dom操作进行了封装 同时也对AJAX提交和回显已经进行了封装,可大大简化AJAX的操作步骤</p>
<h2 id="jquery-ajax-的简单使用" tabindex="-1"><a class="header-anchor" href="#jquery-ajax-的简单使用" aria-hidden="true">#</a> JQuery.ajax()的简单使用</h2>
<h3 id="经典使用方法" tabindex="-1"><a class="header-anchor" href="#经典使用方法" aria-hidden="true">#</a> 经典使用方法</h3>
<p>前端代码</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;$Title%sSourceCode%lt;/title&gt;
    &lt;meta charset=&quot;UTF-8&quot;/&gt;
    &lt;script src=&quot;js/jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        function checkUname(){
            // 获取输入框中的内容
            if(null == $(&quot;#unameI&quot;).val() || '' == $(&quot;#unameI&quot;).val()){
                $(&quot;#unameInfo&quot;).text(&quot;用户名不能为空&quot;);
                return;
            }
            $(&quot;#unameInfo&quot;).text(&quot;&quot;);
            // 通过jQuery.ajax() 发送异步请求
            $.ajax(
                    {
                        type:&quot;GET&quot;,// 请求的方式 GET  POST
                        url:&quot;unameCheckServlet.do?&quot;, // 请求的后台服务的路径
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端代码</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@WebServlet(&quot;/unameCheckServlet.do&quot;)
public class UnameCheckServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String uname = req.getParameter(&quot;uname&quot;);
        String info=&quot;&quot;;
        if(&quot;meturing&quot;.equals(uname)){
            info=&quot;用户名已经占用&quot;;
        }else{
            info=&quot;用户名可用&quot;;
        }
        // 向浏览器响应数据
        resp.setCharacterEncoding(&quot;UTF-8&quot;);
        resp.setContentType(&quot;text/html;charset=UTF-8&quot;);
        resp.getWriter().print(info);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取json格式" tabindex="-1"><a class="header-anchor" href="#获取json格式" aria-hidden="true">#</a> 获取JSON格式</h3>
<p>前端代码</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;script src=&quot;js/jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        function testAjax(){
            // 向后台发送一个ajax异步请求
            // 接收响应的数据
            $.ajax(
                {
                    type:&quot;GET&quot;,
                    url:&quot;servlet1.do&quot;,
                    data:{&quot;username&quot;:&quot;zhangsan&quot;,&quot;password&quot;:&quot;123456&quot;},// key=value&amp;key=value  {&quot;属性名&quot;:&quot;属性值&quot;}
                    dataType:&quot;json&quot;,//以什么格式接收后端响应给我们的信息
                    success:function(list){
                        $.each(list,function(i,e){
                            console.log(e)
                        })
                    }
                }
            )
        }
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;input type=&quot;button&quot; value=&quot;测试&quot; onclick=&quot;testAjax()&quot;&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端代码</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;script src=&quot;js/jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        function testAjax(){
            // 向后台发送一个ajax异步请求
            // 接收响应的数据
            $.ajax(
                {
                    type:&quot;GET&quot;,
                    url:&quot;servlet1.do&quot;,
                    data:{&quot;username&quot;:&quot;zhangsan&quot;,&quot;password&quot;:&quot;123456&quot;},// key=value&amp;key=value  {&quot;属性名&quot;:&quot;属性值&quot;}
                    dataType:&quot;json&quot;,//以什么格式接收后端响应给我们的信息
                    success:function(list){
                        $.each(list,function(i,e){
                            console.log(e)
                        })
                    }
                }
            )
        }
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;input type=&quot;button&quot; value=&quot;测试&quot; onclick=&quot;testAjax()&quot;&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jquery-ajax-属性说明" tabindex="-1"><a class="header-anchor" href="#jquery-ajax-属性说明" aria-hidden="true">#</a> JQuery.Ajax()属性说明</h2>
<h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h3>
<h4 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h4>
<p>要求为String类型的参数，（默认为当前页地址）发送请求的地址</p>
<h4 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h4>
<p>要求为String类型的参数，请求方式（post或get）默认为get。注意其他http请求方法，例如put和delete也可以使用，但仅部分浏览器支持。</p>
<h4 id="timeout" tabindex="-1"><a class="header-anchor" href="#timeout" aria-hidden="true">#</a> timeout</h4>
<p>要求为Number类型的参数，设置请求超时时间（毫秒）。此设置将覆盖$.ajaxSetup()方法的全局设置。</p>
<h4 id="async" tabindex="-1"><a class="header-anchor" href="#async" aria-hidden="true">#</a> async</h4>
<p>要求为Boolean类型的参数，默认设置为true，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为false。注意，同步请求将锁住浏览器，用户其他操作必须等待请求完成才可以执行。</p>
<h4 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache</h4>
<p>要求为Boolean类型的参数，默认为true（当dataType为script时，默认为false），设置为false将不会从浏览器缓存中加载请求信息。</p>
<h4 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h4>
<p>要求为Object或String类型的参数，发送到服务器的数据。如果已经不是字符串，将自动转换为字符串格式。get请求中将附加在url后。</p>
<p>防止这种自动转换，可以查看<code v-pre>processData</code>选项。对象必须为key/value格式，例如<code v-pre>{foo1:&quot;bar1&quot;,foo2:&quot;bar2&quot;}</code>转换为<code v-pre>&amp;foo1=bar1&amp;foo2=bar2</code>。如果是数组，JQuery将自动为不同值对应同一个名称。例如<code v-pre>{foo:[&quot;bar1&quot;,&quot;bar2&quot;]}</code>转换为<code v-pre>&amp;foo=bar1&amp;foo=bar2</code>。</p>
<h4 id="datatype" tabindex="-1"><a class="header-anchor" href="#datatype" aria-hidden="true">#</a> dataType</h4>
<p>要求为String类型的参数，预期服务器返回的数据类型。如果不指定，JQuery将自动根据http包mime信息返回responseXML或responseText，并作为回调函数参数传递。可用的类型如下：</p>
<p><code v-pre>XML</code>:  返回XML文档，可用JQuery处理。<br>
<code v-pre>html</code>:  返回纯文本HTML信息；包含的script标签会在插入DOM时执行。<br>
<code v-pre>script</code>:  返回纯文本JavaScript代码。不会自动缓存结果。除非设置了cache参数。注意在远程请求时（不在同一个域下），所有post请求都将转为get请求。<br>
<code v-pre>json</code>:  返回JSON数据。<br>
<code v-pre>jsonp</code>:  JSONP格式。使用JSONP形式调用函数时，例如<code v-pre>myurl?callback=?</code>，JQuery将自动替换后一个“?”为正确的函数名，以执行回调函数。<br>
<code v-pre>text</code>：返回纯文本字符串。</p>
<h4 id="beforesend" tabindex="-1"><a class="header-anchor" href="#beforesend" aria-hidden="true">#</a> beforeSend</h4>
<p>要求为Function类型的参数，发送请求前可以修改<code v-pre>XMLHttpRequest</code>对象的函数，例如添加自定义HTTP头。在<code v-pre>beforeSend</code>中如果返回false可以取消本次ajax请求。</p>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>/* XMLHttpRequest对象是惟一的参数。*/
  function(XMLHttpRequest){
       this; //调用本次ajax请求时传递的options参数
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="complete" tabindex="-1"><a class="header-anchor" href="#complete" aria-hidden="true">#</a> complete</h4>
<p>要求为Function类型的参数，请求完成后调用的回调函数（请求成功或失败时均调用）。参数：<code v-pre>XMLHttpRequest</code>对象和一个描述成功请求类型的字符串。</p>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>function(XMLHttpRequest, textStatus){
  this; //调用本次ajax请求时传递的options参数
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="success" tabindex="-1"><a class="header-anchor" href="#success" aria-hidden="true">#</a> success</h4>
<p>要求为Function类型的参数，请求成功后调用的回调函数，有两个参数:</p>
<ul>
<li>由服务器返回，并根据dataType参数进行处理后的数据</li>
<li>描述状态的字符串</li>
</ul>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>function(data, textStatus){
	//data可能是xmlDoc、jsonObj、html、text等等
	 this; //调用本次ajax请求时传递的options参数
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="error" tabindex="-1"><a class="header-anchor" href="#error" aria-hidden="true">#</a> error</h4>
<p>要求为Function类型的参数，请求失败时被调用的函数。该函数有3个参数，即XMLHttpRequest对象、错误信息、捕获的错误对象(可选)。ajax事件函数如下：</p>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>function(XMLHttpRequest, textStatus, errorThrown){
  //通常情况下textStatus和errorThrown只有其中一个包含信息
  this; //调用本次ajax请求时传递的options参数
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="contenttype" tabindex="-1"><a class="header-anchor" href="#contenttype" aria-hidden="true">#</a> contentType</h4>
<p>要求为String类型的参数，当发送信息至服务器时，内容编码类型默认为<code v-pre>&quot;application/x-www-form-urlencoded&quot;</code>。该默认值适合大多数应用场合。</p>
<h4 id="datafilter" tabindex="-1"><a class="header-anchor" href="#datafilter" aria-hidden="true">#</a> dataFilter</h4>
<p>要求为Function类型的参数，给Ajax返回的原始数据进行预处理的函数。提供data和type两个参数。<strong>data是Ajax返回的原始数据，type是调用jQuery.ajax时提供的dataType参数</strong>。函数返回的值将由jQuery进一步处理。</p>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>function(data, type){
  //返回处理后的数据
   return data;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> global</h4>
<p>要求为Boolean类型的参数，默认为true。表示是否触发全局ajax事件。设置为false将不会触发全局ajax事件，ajaxStart或ajaxStop可用于控制各种ajax事件。</p>
<h4 id="ifmodified" tabindex="-1"><a class="header-anchor" href="#ifmodified" aria-hidden="true">#</a> ifModified</h4>
<p>要求为Boolean类型的参数，默认为false。仅在服务器数据改变时获取新数据。服务器数据改变判断的依据是Last-Modified头信息。默认值是false，即忽略头信息。</p>
<h4 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> jsonp</h4>
<p>要求为String类型的参数，在一个jsonp请求中重写回调函数的名字。该值用来替代在&quot;callback=?&quot;这种GET或POST请求中URL参数里的&quot;callback&quot;部分，例如{jsonp:'onJsonPLoad'}会导致将&quot;onJsonPLoad=?&quot;传给服务器。</p>
<h4 id="username" tabindex="-1"><a class="header-anchor" href="#username" aria-hidden="true">#</a> username</h4>
<p>要求为String类型的参数，用于响应HTTP访问认证请求的用户名。</p>
<h4 id="password" tabindex="-1"><a class="header-anchor" href="#password" aria-hidden="true">#</a> password</h4>
<p>要求为String类型的参数，用于响应HTTP访问认证请求的密码</p>
<h4 id="processdata" tabindex="-1"><a class="header-anchor" href="#processdata" aria-hidden="true">#</a> processData</h4>
<p>要求为Boolean类型的参数，默认为true。默认情况下，发送的数据将被转换为对象（从技术角度来讲并非字符串）以配合默认内容类型<code v-pre>&quot;application/x-www-form-urlencoded&quot;</code>。如果要发送DOM树信息或者其他不希望转换的信息，请设置为false。</p>
<h4 id="scriptcharset" tabindex="-1"><a class="header-anchor" href="#scriptcharset" aria-hidden="true">#</a> scriptCharset</h4>
<p>要求为String类型的参数，只有当请求时dataType为&quot;jsonp&quot;或者&quot;script&quot;，并且type是GET时才会用于强制修改字符集(charset)。通常在本地和远程的内容编码不同时使用。</p>
<h3 id="具体代码说明" tabindex="-1"><a class="header-anchor" href="#具体代码说明" aria-hidden="true">#</a> 具体代码说明</h3>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>&lt;script&gt;
  
  
      function testAjax(){
         $.ajax({
             url:&quot;servlet1&quot;,
             /*post get  部分浏览器可使用put delete*/
             type:&quot;get&quot;,
             /*请求超时的时间设置*/
             timeout:2000,
             /*是否发送异步请求,默认值为true,如需同步请求,改为false*/
             async:true,
             /*是否从浏览器的缓存中加载信息,默认为true,false则不读取浏览器缓存*/
             cache:true,
             /*向服务器发送的数据,可以是key/value格式,也可以是对象格式
             * get方式下,会将信息附加在url后,如果数据不是字符串,会转换成字符串格式
             * */
             data:{username:&quot;bjmeturing&quot;,password:&quot;bjmeturing&quot;},
             /*
             * 默认值为true 默认情况下,发送的数据将被转换为对象以配合
             *   content-type:application/x-www-form-urlencoded
             * 如果发送信息不希望被转换,设置为false即可
             * */
             proccessData:true,
             /*发送到服务器的数据为String类型时,默认值为
             *   application/x-www-form-urlencoded
             * 该值适合大多数应用场景
             * */
             contentType:&quot;application/x-www-form-urlencoded&quot;,
              /*
              * 预期服务器返回值类型,
              * 如果不指定 jQuery根据http响应mime信息返回xml或者text
              * 并作为返回值传递,可选类型如下
              * xml 返回xml数据(基本淘汰)
              * html:返回纯文本HTML信息
              * script:返回JS脚本,
              * json:返回json数据
              * jsonp:jsonp格式
              * text:返回纯文本,也是默认格式
              * */
             dataType:&quot;json&quot;,
             /*
             * 指定跨域回调函数名
             * */
             //jsonp:&quot;fun1&quot;,
  
             /*只有当请求参数为dataType为jsonp或者script,并且是get方式请求时
             * 才能强制修改字符集,通常在跨域编码不同时使用
             * */
            //  scriptCharset:&quot;utf-8&quot;,
  
             beforeSend:function(XMLHttpRequest){
               /*
                * 请求发送前可以通过该方法修改XMLHttpRequest对象函数
                * 如听见请求头
                * 如果该方法返回false,则会取消ajax请求
                * */
             },
             success:function(data,textStatus){
                 /*
                 *一般请求成功后会调用的函数,有两个可选参数
                 * data,数据 根据dataType的配置处理之后的数据 可能是xml text json 等
                 * testStatus ,描述响应状态的字符串
                 *  */
             },
             error:function(XMLHttpRequest,textStatus,errorThrown){
                 /*
                 * 请求失败时调用的函数,可选参数有
                 * XMLHttpRequest对象
                 * 错误信息
                 * 捕获的异常对象
                 * */
             },
             complete:function(XMLHttpRequest,textStatus){
                 /*
                 * 无论请求是否成功都睡调用的回调函数
                 * 可选参数有
                 * XMLHttpRequest对象
                 * textStatus 描述成功请求的类型的字符串
                 * */
             },
             dataFilter:function(data,type){
                 /*
                 * 数据过滤方法
                 * 给Ajax返回的原始数据进行预处理的函数。
                 * 提供data和type两个参数。
                 * data是Ajax返回的原始数据，
                 * type是调用jQuery.ajax时提供的dataType参数。
                 * 函数返回的值将由jQuery进一步处理
                 * */
             }
  
         })
      }
  
  
  &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ajax异步提交的可选属性和方法较多,实际研发我们没必要写这么多,一般可以使用默认值的属性就可以省略不写,一些业务逻辑或者功能上不需要的方法也可以省略不写,由于属性太多,针对于一些特殊情况,jQuery也给我们提供了一些专用的方法,这样可以简化<code v-pre>$.ajax</code>的写法,每一种简化写法都相当于已经指定了<code v-pre>$.ajax</code>一些属性的值.</p>
<h2 id="jquery实现ajax的其他写法" tabindex="-1"><a class="header-anchor" href="#jquery实现ajax的其他写法" aria-hidden="true">#</a> jQuery实现AJAX的其他写法</h2>
<h3 id="load" tabindex="-1"><a class="header-anchor" href="#load" aria-hidden="true">#</a> $.load()</h3>
<p><code v-pre>jQuery load() </code>方法是简单但强大的 AJAX 方法，<code v-pre>load() </code>方法从服务器加载数据，并把返回的数据放入被选元素中。<strong>默认使用 GET 方式</strong> - 传递<strong>附加参数时自动转换为 POST 方式</strong>,</p>
<h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>$(selector).load(URL,data,callback);
//url: URL地址
//data:待发送参数
//callback:载入成功时回调函数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h4>
<p>第一个页面</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;script src=&quot;js/jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        function testLoad(){
            //$(&quot;#d1&quot;).load(&quot;servlet2.do&quot;,&quot;username=aaa&amp;password=bbb&quot;,function(){alert(&quot;响应结束&quot;)})
            $(&quot;#d1&quot;).load(&quot;loadPage.html #a&quot;)
        }
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;d1&quot; style=&quot;width: 100px;height: 100px;border: 1px solid black&quot;&gt;
&lt;/div&gt;
&lt;input type=&quot;button&quot; value=&quot;测试&quot; onclick=&quot;testLoad()&quot;&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二个页面</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;a&quot;&gt;
    &lt;li&gt;JAVA&lt;/li&gt;
    &lt;li&gt;HTML&lt;/li&gt;
    &lt;li&gt;CSS&lt;/li&gt;
    &lt;li&gt;Mysql&lt;/li&gt;
    &lt;li&gt;python&lt;/li&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端代码</p>
<div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre v-pre class="language-JAVA"><code>@WebServlet(&quot;/servlet2.do&quot;)
public class Servlet2 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter(&quot;username&quot;);
        String password = req.getParameter(&quot;password&quot;);
        System.out.println(username);
        System.out.println(password);
        resp.setContentType(&quot;text/html;charset=UTF-8&quot;);
        resp.setCharacterEncoding(&quot;UTF-8&quot;);
        resp.getWriter().print(&quot;&lt;h1&gt;hello&lt;/h1&gt;&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> $.get()</h3>
<p>这是一个简单的 GET 请求功能以取代复杂<code v-pre> $.ajax</code> 。请求成功时可调用回调函数。如果需要在出错时执行函数，请使用<code v-pre>$.ajax</code>。</p>
<h4 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h4>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>$.get(url,[data],[callback],[type])
//url: URL地址
//data:待发送参数
//callback:载入成功时回调函数
//type:返回内容格式，xml, html, script, json, text, _default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该函数是简写的 Ajax 函数，等价于</p>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>$.ajax({
 type:   'GET',
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getjson" tabindex="-1"><a class="header-anchor" href="#getjson" aria-hidden="true">#</a> $.getJSON()</h3>
<p>JSON是一种较为理想的数据传输格式，它能够很好的融合与JavaScript或其他宿主语言，并且可以被JS直接使用。使用JSON相比传统的通过 GET、POST直接发送“裸体”数据，在结构上更为合理，也更为安全。至于jQuery的<code v-pre>getJSON()</code>函数，只是设置了JSON参数的ajax()函数的一个简化版本。</p>
<h4 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2" aria-hidden="true">#</a> 语法</h4>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>$.getJSON(
      url,             //请求URL
      [data],          //传参，可选参数
      [callback]       //回调函数，可选参数
   　);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该函数是简写的 Ajax 函数，等价于</p>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>$.ajax({
  url: url,
  data: data,
  success: callback,
  dataType: json
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>仅仅是等效于上述函数,但是除此之外这个函数也是可以跨域使用的，相比get()、post()有一定优势。另外这个函数可以通过把请求url写 成&quot;<code v-pre>myurl?callback=X</code>&quot;这种格式，让程序执行回调函数X。</p>
<p>注意:<code v-pre>$.getJSON</code><strong>是以GET方式提交数据</strong>，如果需要提交很大的数据量，可选<code v-pre>$.post</code></p>
<h3 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> $.post()</h3>
<p>这是一个简单的 POST 请求功能以取代复杂 <code v-pre>$.ajax</code> 。请求成功时可调用回调函数。如果需要在出错时执行函数，请使用<code v-pre>$.ajax</code>。</p>
<h4 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3" aria-hidden="true">#</a> 语法</h4>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>$.post(url,[data],[callback],[type])
//url: URL地址
//data:待发送参数
//callback:载入成功时回调函数
//type:返回内容格式，xml, html, script, json, text, _default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该函数是简写的 Ajax 函数，等价于</p>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>$.ajax({
  type:'POST',
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试代码-1" tabindex="-1"><a class="header-anchor" href="#测试代码-1" aria-hidden="true">#</a> 测试代码</h4>
<p>前端代码</p>
<div class="language-JSP line-numbers-mode" data-ext="JSP"><pre v-pre class="language-JSP"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;script src=&quot;js/jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        function testAjax(){
            $.get(
                &quot;servlet1.do&quot;,
                {&quot;username&quot;:&quot;zhangsan&quot;,&quot;password&quot;:&quot;123456&quot;},
                function(list){
                    $.each(list,function(i,e){
                        console.log(e)
                    })
                 },
                &quot;json&quot;)
            console.log(&quot;------------------------------&quot;)
            $.getJSON(
                &quot;servlet1.do&quot;,
                {&quot;username&quot;:&quot;zhangsan&quot;,&quot;password&quot;:&quot;123456&quot;},
                function(list){
                    $.each(list,function(i,e){
                        console.log(e)
                    })
                })
            console.log(&quot;------------------------------&quot;)
            $.post(
                &quot;servlet1.do&quot;,
                {&quot;username&quot;:&quot;zhangsan&quot;,&quot;password&quot;:&quot;123456&quot;},
                function(list){
                    $.each(list,function(i,e){
                        console.log(e)
                    })
                },
                &quot;json&quot;)
        }
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;input type=&quot;button&quot; value=&quot;测试&quot; onclick=&quot;testAjax()&quot;&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端代码</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>@WebServlet(&quot;/servlet1.do&quot;)
public class Servlet1 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter(&quot;username&quot;);
        String password = req.getParameter(&quot;password&quot;);
        System.out.println(username);
        System.out.println(password);
        Student stu1=new Student(&quot;小黑&quot;,&quot;男&quot;,10,new Date());
        Student stu2=new Student(&quot;小白&quot;,&quot;男&quot;,10,new Date());
        Student stu3=new Student(&quot;小黄&quot;,&quot;男&quot;,10,new Date());
        Student stu4=new Student(&quot;小花&quot;,&quot;男&quot;,10,new Date());
        ArrayList&lt;Student&gt; list =new ArrayList&lt;&gt;();
        Collections.addAll(list,stu1,stu2,stu3,stu4);
        GsonBuilder gb =new GsonBuilder();
        gb.setDateFormat(&quot;yyyy-MM-dd&quot;);
        Gson gson = gb.create();
        String json = gson.toJson(list);
        resp.setContentType(&quot;text/html;charset=UTF-8&quot;);
        resp.setCharacterEncoding(&quot;UTF-8&quot;);
        resp.getWriter().print(json);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


