import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as s}from"./app-54a62cbe.js";const t="/coder-notes/assets/Pasted_image_20230406223554-0138ee78.png",a={},l=s(`<h2 id="ajax数据格式处理" tabindex="-1"><a class="header-anchor" href="#ajax数据格式处理" aria-hidden="true">#</a> AJAX数据格式处理</h2><h3 id="响应普通文本数据" tabindex="-1"><a class="header-anchor" href="#响应普通文本数据" aria-hidden="true">#</a> 响应普通文本数据</h3><p>如果服务器给我们响应的数据非常简答,那么使用字符串就好了,不需要我们做复杂的处理,后台编码也简单.</p><h4 id="前端代码" tabindex="-1"><a class="header-anchor" href="#前端代码" aria-hidden="true">#</a> 前端代码</h4><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;AJAX数据响应格式&lt;/title&gt;
    &lt;script&gt;
        var xhr;
        function  getData(){
            xhr =new XMLHttpRequest();
            xhr.open(&quot;GET&quot;,&quot;testDataServlet&quot;,true)
            xhr.onreadystatechange=showData
            xhr.send(null)
        }
        function showData(){
           if(xhr.readyState==4&amp;&amp;xhr.status==200) {
                var text =xhr.responseText;
                console.info(text)
           }
        }
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;button  type=&quot;button&quot; onclick=&quot;getData()&quot;  &gt;触发&lt;/button&gt;
  &lt;/body&gt;
  &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="后台代码" tabindex="-1"><a class="header-anchor" href="#后台代码" aria-hidden="true">#</a> 后台代码</h4><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>@WebServlet(&quot;/testDataServlet&quot;)

  public class TestDataServlet extends HttpServlet {
    @Override
    public void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType(&quot;text/html;charset=UTF-8&quot;);
        resp.setCharacterEncoding(&quot;UTF-8&quot;);
        resp.getWriter().print(&quot;普通文本数据&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><p>如果响应的数据是一个对象或者对象集合,数据处理起来会非常麻烦,可以使用JSON格式处理</p><h2 id="json的介绍和应用" tabindex="-1"><a class="header-anchor" href="#json的介绍和应用" aria-hidden="true">#</a> JSON的介绍和应用</h2><p><code>JSON(JavaScriptObject Notation, JS 对象简谱)</code> <strong>是一种轻量级的数据交换格式</strong>。它基于<code>ECMAScript</code> (欧洲计算机协会制定的js规范)的一个子集，采用完全独立于编程语言的文本格式来存储和表示数据。简洁和清晰的层次结构使得JSON 成为理想的数据交换语言。 易于人阅读和编写，同时也易于机器解析和生成，并有效地提升网络传输效率。</p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><p><strong>轻量级</strong>,在这里用它不是为了厉害的功能代码,而是为了实现数据转换</p><p>Json 格式<strong>既能考虑到前端对象的特点 同时也能兼顾后台对象</strong>信息的特点</p><p>Json 格式<strong>可以被前端直接识别并解析成对象</strong></p><p>jQuery形式实现AJAX默认前后端传递数据的格式就是JSON</p><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;script&gt;
        /*
        * JSON格式创建对象
        * {&quot;属性名&quot;:&quot;属性值&quot;,&quot;属性名&quot;:属性值 ... ... }
        * */
        var person ={&quot;name&quot;:&quot;zhangsan&quot;,&quot;age&quot;:10}
        alert(person.name)
        alert(person.age)
        var persons =[{&quot;name&quot;:&quot;zhangsan&quot;,&quot;age&quot;:10},{&quot;name&quot;:&quot;lisi&quot;,&quot;age&quot;:10},{&quot;name&quot;:&quot;wangwu&quot;,&quot;age&quot;:10}];
        for (var i = 0; i &lt;persons.length ; i++) {
            var person =persons[i];
            console.log(person.name)
            console.log(person.age)
        }
        var personStr=&#39;{&quot;name&quot;:&quot;zhangsan&quot;,&quot;age&quot;:10}&#39;;// 是一个字符串
        // 可以直接把上面这种格式的字符串直接转换成对象
        var p =JSON.parse(personStr);
        console.log(p.name)
        console.log(p.age)
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-与-js-对象的关系" tabindex="-1"><a class="header-anchor" href="#json-与-js-对象的关系" aria-hidden="true">#</a> JSON 与 JS 对象的关系</h3><p>很多人搞不清楚 JSON 和 JS 对象的关系，甚至连谁是谁都不清楚。其实，可以这么理解：<strong>JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串。</strong></p><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>var obj = {a: &#39;Hello&#39;, b: &#39;World&#39;}; //这是一个对象，注意键名也是可以使用引号包裹的
var json = &#39;{&quot;a&quot;: &quot;Hello&quot;, &quot;b&quot;:   &quot;World&quot;}&#39;; //这是一个 JSON 字符串，本质是一个字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json和js对象互转" tabindex="-1"><a class="header-anchor" href="#json和js对象互转" aria-hidden="true">#</a> JSON和JS对象互转</h3><p>要实现从JSON字符串转换为JS对象，使用 <code>JSON.parse()</code></p><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>var obj = JSON.parse(&#39;{&quot;a&quot;: &quot;Hello&quot;, &quot;b&quot;:   &quot;World&quot;}&#39;); //结果是 {a: &#39;Hello&#39;, b: &#39;World&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要实现从JS对象转换为JSON字符串，使用<code>JSON.stringify()</code> 方法</p><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>var json = JSON.stringify({a: &#39;Hello&#39;, b: &#39;World&#39;}); //结果是  &#39;{&quot;a&quot;: &quot;Hello&quot;, &quot;b&quot;: &quot;World&quot;}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>JSON格式字符串,拼接比较麻烦,可以修改toString方法但是就破坏了toString原有的格式,而且一旦字段如果太多修改工作量大,后面可以使用<strong>JSON工具类转换</strong></p><h2 id="gson工具类的使用" tabindex="-1"><a class="header-anchor" href="#gson工具类的使用" aria-hidden="true">#</a> GSON工具类的使用</h2><p>gson工具类中已经给我们封装好了json格式和java对象之间转换的API,我们直接使用即可,再也不用手动去转换项目中</p><h3 id="使用案例" tabindex="-1"><a class="header-anchor" href="#使用案例" aria-hidden="true">#</a> 使用案例</h3><p>添加gson-2.2.4.jar</p><p>页面代码</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;$Title%sSourceCode%lt;/title&gt;
    &lt;script&gt;
      var xhr ;
      function testData(){
        xhr =new XMLHttpRequest();
        xhr.open(&quot;GET&quot;,&quot;testServlet.do&quot;,true);
        xhr.onreadystatechange=showReturnInfo;
        xhr.send(null);
      }
      function showReturnInfo(){
        if(xhr.readyState==4 &amp;&amp; xhr.status==200){
          var info =xhr.responseText;
          var users=JSON.parse(info)
          for (var i = 0; i &lt;users.length ; i++) {
            var user =users[i];
            console.log(user.uname)
            console.log(user.age)
            console.log(user.gender)
            console.log(user.birthday)
          }
        }
      }
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;input type=&quot;button&quot; value=&quot;测试&quot; onclick=&quot;testData()&quot;&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后台代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@WebServlet(&quot;/testServlet.do&quot;)
public class TestServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        User user1 =new User(&quot;晓明1&quot;,10,&quot;男&quot;,new Date());
        User user2 =new User(&quot;晓明2&quot;,10,&quot;男&quot;,new Date());
        User user3 =new User(&quot;晓明3&quot;,10,&quot;男&quot;,new Date());
        User user4 =new User(&quot;晓明4&quot;,10,&quot;男&quot;,new Date());
        User user5 =new User(&quot;晓明5&quot;,10,&quot;男&quot;,new Date());
        ArrayList&lt;User&gt; list =new ArrayList&lt;&gt;();
        Collections.addAll(list,user1,user2,user3,user4,user5);
        // 响应普通文本数据
        resp.setCharacterEncoding(&quot;UTF-8&quot;);
        resp.setContentType(&quot;text/html;charset=UTF-8&quot;);
        GsonBuilder gsonBuilder = new GsonBuilder().setDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;);
        Gson gson = gsonBuilder.create();
        String str = gson.toJson(list);
        System.out.println(str);
        resp.getWriter().print(str);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),d=[l];function r(u,o){return n(),i("div",null,d)}const m=e(a,[["render",r],["__file","数据格式.html.vue"]]);export{m as default};
