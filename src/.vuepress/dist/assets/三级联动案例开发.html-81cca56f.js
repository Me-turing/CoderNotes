import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as a}from"./app-a48529f7.js";const t="/CoderNotes/assets/Pasted_image_20230408161221-4960ca56.png",s="/CoderNotes/assets/Pasted_image_20230408161233-ab211358.png",l="/CoderNotes/assets/Pasted_image_20230408161402-c2a0bf23.png",r="/CoderNotes/assets/Pasted_image_20230408161414-35e38f08.png",d={},v=a('<h2 id="数据准备" tabindex="-1"><a class="header-anchor" href="#数据准备" aria-hidden="true">#</a> 数据准备</h2><p>使用china.sql生成area表格</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="项目搭建" tabindex="-1"><a class="header-anchor" href="#项目搭建" aria-hidden="true">#</a> 项目搭建</h2><figure><img src="'+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="项目代码" tabindex="-1"><a class="header-anchor" href="#项目代码" aria-hidden="true">#</a> 项目代码</h2><p>前端代码</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;$Title%sSourceCode%lt;/title&gt;
    &lt;script src=&quot;js/jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
      $(function(){
        // 获取所有的省份信息
        showArea(0,&quot;#provience&quot;)
      })
      function showArea(val,selectID){
        $.ajax({
          type:&quot;GET&quot;,
          url:&quot;areaController.do&quot;,
          data:{parentID:val},
          dataType:&quot;json&quot;,
          success:function(areas){
            // 清除上一次选择省份时,遗留的城市
            $(selectID).html(&#39;&lt;option&gt;-请选择-&lt;/option&gt;&#39;);
            $.each(areas,function(i,e){
              $(selectID).append(&#39;&lt;option value=&quot;&#39;+e.areaid+&#39;&quot;&gt;&#39;+e.areaname+&#39;&lt;/option&gt;&#39;)
            })
            if(selectID== &quot;#city&quot;){
              $(&quot;#qu&quot;).html(&#39;&lt;option&gt;-请选择-&lt;/option&gt;&#39;);
            }
          }
        })
      }
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
  籍贯:
  &lt;select id=&quot;provience&quot; onchange=&quot;showArea(this.value,&#39;#city&#39;)&quot;&gt;
    &lt;option&gt;-请选择-&lt;/option&gt;
  &lt;/select&gt;
  &lt;select id=&quot;city&quot; onchange=&quot;showArea(this.value,&#39;#qu&#39;)&quot;&gt;
    &lt;option&gt;-请选择-&lt;/option&gt;
  &lt;/select&gt;
  &lt;select id=&quot;qu&quot;&gt;
    &lt;option&gt;-请选择-&lt;/option&gt;
  &lt;/select&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AreaController代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@WebServlet(&quot;/areaController.do&quot;)
public class AreaController extends HttpServlet {
    private AreaService areaService=new AreaServiceImpl();
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Integer parentID=0;
        try {
            parentID= Integer.parseInt(req.getParameter(&quot;parentID&quot;));
        } catch (NumberFormatException e) {
            e.printStackTrace();
        }
        List&lt;Area&gt; areas=areaService.findByParentID(parentID);
        String json = new Gson().toJson(areas);
        resp.setCharacterEncoding(&quot;UTF-8&quot;);
        resp.setContentType(&quot;text/html;charset=UTF-8&quot;);
        resp.getWriter().print(json);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AreaService代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class AreaServiceImpl implements AreaService {
    private AreaDao areaDao =new AreaDaoImpl();
    @Override
    public List&lt;Area&gt; findByParentID(Integer parentID) {
        List&lt;Area&gt; areas = areaDao.findByParentID(parentID);
        return areas;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AreaDao代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class AreaDaoImpl extends BaseDao implements AreaDao  {
    @Override
    public List&lt;Area&gt; findByParentID(int parentID) {
        String sql=&quot;select * from area where parentid= ?&quot;;
        return baseQuery(Area.class, sql, parentID);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试效果<br><img src="`+l+'" alt="" loading="lazy"></p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',16),c=[v];function o(u,m){return i(),n("div",null,c)}const g=e(d,[["render",o],["__file","三级联动案例开发.html.vue"]]);export{g as default};
