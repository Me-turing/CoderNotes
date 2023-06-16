import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as a}from"./app-c47b8d81.js";const t="/CoderNotes/assets/Pasted_image_20230406221702-56b3e681.png",r="/CoderNotes/assets/Pasted_image_20230406221902-c56b0619.png",d="/CoderNotes/assets/Pasted_image_20230406222215-7961555f.png",s={},l=a('<h2 id="同步交互与异步交互" tabindex="-1"><a class="header-anchor" href="#同步交互与异步交互" aria-hidden="true">#</a> 同步交互与异步交互</h2><h3 id="什么是同步交互" tabindex="-1"><a class="header-anchor" href="#什么是同步交互" aria-hidden="true">#</a> 什么是同步交互</h3><ol><li>首先用户向HTTP服务器提交一个处理请求。</li><li>接着服务器端接收到请求后，按照预先编写好的程序中的业务逻辑进行处理，比如和数据库服务器进行数据信息交换。</li><li>最后，服务器对请求进行响应，将结果返回给客户端，返回一个HTML在浏览器中显示，通常会有CSS样式丰富页面的显示效果。</li></ol><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><p>可以保留浏览器后退按钮的正常功能。在动态更新页面的情况下，用户可以回到前一个页面状态，浏览器能记下历史记录中的静态页面,用户通常都希望单击后退按钮时，就能够取消他们的前一次操作，同步交互可以实现这个需求.</p><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ol><li>同步交互的不足之处，会给用户一种不连贯的体验，当服务器处理请求时，用户只能等待状态，页面中的显示内容只能是空白。</li><li>因为已经跳转到新的页面,原本在页面上的信息无法保存,好多信息需要重新填写</li></ol><h3 id="什么是异步交互" tabindex="-1"><a class="header-anchor" href="#什么是异步交互" aria-hidden="true">#</a> 什么是异步交互</h3><p>指发送一个请求,不需要等待返回,随时可以再发送下一个请求，即不需要等待。</p><p>在部分情况下，我们的项目开发中都会优先选择不需要等待的异步交互方式。将用户请求放入消息队列，并反馈给用户，系统迁移程序已经启动，你可以关闭浏览器了。然后程序再慢慢地去写入数据库去。这就是异步。异步不用等所有操作等做完，就响应用户请求。即先响应用户请求，然后慢慢去写数据库，用户体验较好</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1" aria-hidden="true">#</a> 优点</h4><ol><li>前端用户操作和后台服务器运算可以同时进行,可以充分利用用户操作的间隔时间完成运算</li><li>页面没有跳转,响应回来的数据直接就在原页面上,页面原有信息得以保留</li></ol><h4 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1" aria-hidden="true">#</a> 缺点</h4><p>可能破坏浏览器后退按钮的正常行为。在动态更新页面的情况下，用户无法回到前一个页面状态，这是因为浏览器仅能记录的始终是当前一个的静态页面。</p><p><strong>用户通常都希望单击后退按钮，就能够取消他们的前一次操作，但是在AJAX这样异步的程序，却无法这样做。</strong></p><h2 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> AJAX</h2><h3 id="什么是ajax" tabindex="-1"><a class="header-anchor" href="#什么是ajax" aria-hidden="true">#</a> 什么是AJAX</h3><p>AJAX 即 <code>Asynchronous Javascript And XML</code> （异步 JavaScript和 XML），是指一种创建交互式、快速动态网页应用的网页开发技术，无需重新加载整个网页的情况下，能够更新部分网页的技术。通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。</p><h3 id="ajax关键技术" tabindex="-1"><a class="header-anchor" href="#ajax关键技术" aria-hidden="true">#</a> AJAX关键技术</h3><ol><li>使用CSS构建用户界面样式,负责页面排版和美工</li><li>使用DOM进行动态显示和交互,对页面进行局部修改</li><li>使用XMLHttpRequest异步获取数据</li><li>使用JavaScript将所有的元素绑定在一起</li></ol><h3 id="ajax的特点" tabindex="-1"><a class="header-anchor" href="#ajax的特点" aria-hidden="true">#</a> AJAX的特点</h3><p><strong>异步访问,局部刷新</strong></p><h2 id="体验原生异步" tabindex="-1"><a class="header-anchor" href="#体验原生异步" aria-hidden="true">#</a> 体验原生异步</h2><p>JS表单验证只能校验格式是否正确,但是无法验证用户名是否已经存在,这个就需要后台程序接受到数据后通过查询才能够完成的,那么这里就非常适用于使用异步方式校验,保证用于数据提交后,业务完成的成功率.提升用于体验感<br><img src="'+d+`" alt="" loading="lazy"></p><h3 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h3><p>获取XMLHTTPRequest对象 <code>xhr=new XMLHttpRequest();</code><br> 打开链接 <code>xhr.open(&quot;GET&quot;,&quot;loginServlet?uname=&quot;+uname,true);</code><br> 设置回调函数 <code>xhr.onreadystatechange=showRnturnInfo;</code><br> 提交数据 <code>xhr.send(data)</code></p><h3 id="相关代码" tabindex="-1"><a class="header-anchor" href="#相关代码" aria-hidden="true">#</a> 相关代码</h3><h4 id="页面代码" tabindex="-1"><a class="header-anchor" href="#页面代码" aria-hidden="true">#</a> 页面代码</h4><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;$Title%sSourceCode%lt;/title&gt;
    &lt;script&gt;
      var xhr ;
      function checkUname(){
        // 获取输入框中的内容
        var unameDOM=document.getElementById(&quot;unameI&quot;);
        var unameText =unameDOM.value;
        var unameInfoDom =document.getElementById(&quot;unameInfo&quot;);
        if(null == unameText || unameText == &#39;&#39;){
          unameInfoDom.innerText=&quot;用户名不能为空&quot;;
          return;
        }
        unameInfoDom.innerText=&quot;&quot;;
        // 发送异步请求
        // 获取一个 XMLHttpRequest对象 ,对象可以帮助我们发送异步请求
        xhr =new XMLHttpRequest();
        // 使用xhr对象设置打开链接,设置请求方式和参数xhr.open(&quot;请求方式&quot;,&quot;请求的URL&quot;,是否使用异步方式);
        xhr.open(&quot;GET&quot;,&quot;unameCheckServlet.do?uname=&quot;+unameText,true);
        // 设置回调函数
        xhr.onreadystatechange=showReturnInfo;
        // 正式发送请求
        xhr.send(null);
      }
      function showReturnInfo(){
        if(xhr.readyState==4 &amp;&amp; xhr.status==200){
          var returnInfo =xhr.responseText;
          var unameInfoDom =document.getElementById(&quot;unameInfo&quot;);
          unameInfoDom.innerText=returnInfo;
        }
      }
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;form action=&quot;myServlet1.do&quot; &gt;
    用户名:&lt;input id=&quot;unameI&quot; type=&quot;text&quot; name=&quot;uname&quot; onblur=&quot;checkUname()&quot;&gt;&lt;span id=&quot;unameInfo&quot; style=&quot;color: red&quot;&gt;&lt;/span&gt;&lt;br/&gt;
    密码:&lt;input type=&quot;password&quot; name=&quot;pwd&quot;&gt;&lt;br/&gt;
    &lt;input type=&quot;submit&quot;&gt;
  &lt;/form&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="servlet代码" tabindex="-1"><a class="header-anchor" href="#servlet代码" aria-hidden="true">#</a> Servlet代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@WebServlet(&quot;/unameCheckServlet.do&quot;)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存在问题" tabindex="-1"><a class="header-anchor" href="#存在问题" aria-hidden="true">#</a> 存在问题</h3><p>原生js提交AJAX异步请求代码<strong>比较繁琐</strong>,处理复杂数据<strong>比较麻烦,</strong> 后续可以使用jQuery解决</p>`,35),u=[l];function o(c,v){return n(),i("div",null,u)}const b=e(s,[["render",o],["__file","初识Ajax.html.vue"]]);export{b as default};
