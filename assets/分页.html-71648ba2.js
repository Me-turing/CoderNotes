import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as l,c as s,d as e,e as n,b as d,w as u,f as r}from"./app-71f45f98.js";const v="/CoderNotes/assets/image-20230706102819621-8627bd24.png",c="/CoderNotes/assets/image-20230706103627955-cbb3437b.png",m="/CoderNotes/assets/image-20230706104233271-48e638f8.png",o={},g=r('<h2 id="分页概念" tabindex="-1"><a class="header-anchor" href="#分页概念" aria-hidden="true">#</a> 分页概念</h2><h3 id="什么是分页" tabindex="-1"><a class="header-anchor" href="#什么是分页" aria-hidden="true">#</a> 什么是分页</h3><p>简单来说:大量数据无法一次性全部显示在网页上?怎么办?</p><p>只能选取其中的一部分,将大量数据分成好几段,每一段我们用一个网页显示,也就是一页,在页面上我们可以手动控制我们要选择的页面.分页就是将大量数据分成很多页显示的一种处理手段.</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="分页有什么好处" tabindex="-1"><a class="header-anchor" href="#分页有什么好处" aria-hidden="true">#</a> 分页有什么好处</h3><ol><li>通过分页,我们<strong>不用一次性将所有的数据查出来</strong>,只需先查出来一部分,可以减少数据库的IO数据量的传输,降低数据库读写压力,从而提高数据库响应速度</li><li>页面也不用一次性显示所有的数据,可以<strong>减少浏览器和服务器之间大量数据的IO传输</strong>,从而提高服务器的响应速度</li><li>我们可能值需要很多信息中少数的几条,那么传输其他多余的数据就是无形之中对于资源的浪费,分页可以<strong>减少资源的浪费</strong></li></ol><h2 id="分页思路" tabindex="-1"><a class="header-anchor" href="#分页思路" aria-hidden="true">#</a> 分页思路</h2><p>核心思路是通过前端传送的当前页与每页数量大小,通过sql中的limit控制展示数据,并返回给前端</p><h3 id="数据库上的分页" tabindex="-1"><a class="header-anchor" href="#数据库上的分页" aria-hidden="true">#</a> 数据库上的分页</h3><p><code>select * from student limit 0,5</code></p><p>sql语句通过<strong>limit关键字</strong>实现数据的分页查询, limit后面可以放两个整数作为参数,前一个参数的意义为从那条数据开始查询,后一个参数的意义是连续取出多少条</p><p>如果查询 第n页,每页x条 数据那么sql语句应该写成<code>Select * from student limit (n-1)*x,x</code><br> 分页查询的sql语句代码公式为:<code>SELECT * FROM emp LIMIT (页码数-1)*页大小,页大小</code></p><p>分页所需的参数 :</p><ol><li><code>index </code> 当前页码</li><li><code>size</code> 每页数量</li><li><code>start =(index-1)*size</code> 从第几条开始</li><li><code>maxpage = if(total%size==0){maxpage=total/size}else {maxpage=total/size+1}</code> 最大页码数</li></ol><h3 id="业务思路" tabindex="-1"><a class="header-anchor" href="#业务思路" aria-hidden="true">#</a> 业务思路</h3><p>例如我们实现一个这样的分页效果:<br><img src="'+c+'" alt="" loading="lazy"></p><p>前端需要发送给后端的数据 :</p><ol><li>当前第几页 - <code>page</code></li><li>每页展示数量 - <code>size</code></li><li>查询条件 - <code>filterParameters</code></li></ol><p>后端需要发给前端的数据:</p><ol><li>当前页面的所有数据信息 - <code>List&lt;Object&gt;</code></li><li>当前第几页 - <code>page</code></li><li>共计多少条数据 - <code>totalSize</code></li><li>共计多少页 - <code>totalPage</code></li><li>每页大小 - <code>size</code></li></ol><h2 id="分页实现" tabindex="-1"><a class="header-anchor" href="#分页实现" aria-hidden="true">#</a> 分页实现</h2><p>我们实现一个简单的分页小程序<br><img src="'+m+`" alt="" loading="lazy"></p><h3 id="准备数据" tabindex="-1"><a class="header-anchor" href="#准备数据" aria-hidden="true">#</a> 准备数据</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>CREATE TABLE \`student\` (
    \`stuid\` int(11) NOT NULL AUTO_INCREMENT,
    \`stuname\` varchar(20) DEFAULT NULL,
    \`stuage\` int(2) DEFAULT NULL,
    \`stugender\` char(2) DEFAULT NULL,
    \`filename\` varchar(100) DEFAULT NULL,
    \`filetype\` varchar(20) DEFAULT NULL,
    PRIMARY KEY (\`stuid\`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT   CHARSET=utf8;

insert into \`student\`(\`stuid\`,\`stuname\`,\`stuage\`,\`stugender\`,\`filename\`,\`filetype\`)   values   (1,&#39;name1&#39;,11,&#39;1&#39;,NULL,NULL),(2,&#39;name2&#39;,12,&#39;0&#39;,NULL,NULL),(3,&#39;name3&#39;,13,&#39;1&#39;,NULL,NULL),(4,&#39;name4&#39;,14,&#39;1&#39;,NULL,NULL),(5,&#39;name5&#39;,15,&#39;1&#39;,NULL,NULL),(6,&#39;name6&#39;,16,&#39;0&#39;,NULL,NULL),(7,&#39;name7&#39;,17,&#39;0&#39;,NULL,NULL),(8,&#39;name8&#39;,18,&#39;0&#39;,NULL,NULL),(9,&#39;name9&#39;,19,&#39;0&#39;,NULL,NULL),(10,&#39;name10&#39;,20,&#39;1&#39;,NULL,NULL),(11,&#39;name11&#39;,11,&#39;0&#39;,NULL,NULL),(12,&#39;name12&#39;,12,&#39;1&#39;,NULL,NULL),(13,&#39;name13&#39;,13,&#39;0&#39;,NULL,NULL),(14,&#39;name14&#39;,14,&#39;1&#39;,NULL,NULL),(15,&#39;name15&#39;,15,&#39;0&#39;,NULL,NULL),(16,&#39;name16&#39;,16,&#39;1&#39;,NULL,NULL),(17,&#39;name17&#39;,17,&#39;1&#39;,NULL,NULL),(18,&#39;name18&#39;,18,&#39;0&#39;,NULL,NULL),(19,&#39;name19&#39;,19,&#39;1&#39;,NULL,NULL),(20,&#39;name20&#39;,20,&#39;0&#39;,NULL,NULL);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h3><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;$Title%sSourceCode%lt;/title&gt;
    &lt;style&gt;
      table{
        border: 1px red solid;
        margin:0px auto;
        width: 80%;
      }
      td,th{
        border:1px solid green;
      }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div style=&quot;text-align: center&quot;&gt;
    名字关键字:&lt;input type=&quot;text&quot; id=&quot;stuname&quot; value=&quot;\${stuname}&quot;&gt;
    年龄下限&lt;input type=&quot;text&quot;  id=&quot;stuage&quot; value=&quot;\${stuage}&quot;&gt;
    &lt;input type=&quot;button&quot; value=&quot;查询&quot; onclick=&quot;changePage(1)&quot; &gt;
  &lt;/div&gt;
  &lt;table&gt;
    &lt;tr&gt;
      &lt;th&gt;学生编号&lt;/th&gt;
      &lt;th&gt;学生姓名&lt;/th&gt;
      &lt;th&gt;学生年龄&lt;/th&gt;
      &lt;th&gt;学生性别&lt;/th&gt;
      &lt;th&gt;照片&lt;/th&gt;
      &lt;th&gt;照片类型&lt;/th&gt;
      &lt;th&gt;操作&lt;/th&gt;
    &lt;/tr&gt;
    &lt;%--
    pageBean
    public class PageBean&lt;T&gt; implements Serializable {
    // 当前页数据
    private List&lt;T&gt; data;
    // 查询出的总记录数
    private int totalSize;
    // 页大小
    private int pageSize;
    // 总页数
    private int totalPage;
    // 当前页数
    private int currentPage;
    --%&gt;
    &lt;c:forEach items=&quot;\${pageBean.data}&quot; var=&quot;student&quot;&gt;
      &lt;tr&gt;
        &lt;td&gt;\${student.stuid}&lt;/td&gt;
        &lt;td&gt;\${student.stuname}&lt;/td&gt;
        &lt;td&gt;\${student.stuage}&lt;/td&gt;
        &lt;td&gt;\${student.stugender}&lt;/td&gt;
        &lt;td&gt;\${student.filename}&lt;/td&gt;
        &lt;td&gt;\${student.filetype}&lt;/td&gt;
        &lt;td&gt;
          &lt;a href=&quot;#&quot;&gt;删除&lt;/a&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
    &lt;/c:forEach&gt;
    &lt;tr align=&quot;center&quot;&gt;
      &lt;td colspan=&quot;7&quot;&gt;
        &lt;a href=&quot;javascript:void(0)&quot;  onclick=&quot;changePage(\${pageBean.currentPage-1})&quot;&gt;上一页&lt;/a&gt;
        &lt;c:forEach begin=&quot;1&quot; end=&quot;\${pageBean.totalPage}&quot; var=&quot;num&quot;&gt;
          &lt;c:choose&gt;
            &lt;c:when test=&quot;\${num eq pageBean.currentPage}&quot;&gt;
              [\${num}]
            &lt;/c:when&gt;
            &lt;c:otherwise&gt;
              \${num}
            &lt;/c:otherwise&gt;
          &lt;/c:choose&gt;
        &lt;/c:forEach&gt;
        &lt;a href=&quot;javascript:void(0)&quot;  onclick=&quot;changePage(\${pageBean.currentPage+1})&quot;&gt;下一页&lt;/a&gt;
        &amp;nbsp;&amp;nbsp;&amp;nbsp;
        尾页
        &amp;nbsp;&amp;nbsp;&amp;nbsp;
        每页
          &lt;input id=&quot;pageSize&quot; style=&quot;width: 40px&quot; type=&quot;text&quot; value=&quot;\${pageBean.pageSize}&quot;&gt;
        条
        &amp;nbsp;&amp;nbsp;&amp;nbsp;
        当前第
          \${pageBean.currentPage}
        页
        &amp;nbsp;&amp;nbsp;&amp;nbsp;
        共\${pageBean.totalPage}页
        &amp;nbsp;&amp;nbsp;&amp;nbsp;
        共
           \${pageBean.totalSize}
        条记录
        &amp;nbsp;&amp;nbsp;&amp;nbsp;
      &lt;/td&gt;
    &lt;/tr&gt;
    &lt;script src=&quot;js/jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
      function changePage(currentPage){
        if(currentPage&lt;1){
          alert(&quot;已经是第一页了&quot;)
          return;
        }
        if(currentPage&gt;\${pageBean.totalPage}){
          alert(&quot;已经是最后一页了&quot;)
          return;
        }
        window.location.href=&quot;showStudentController.do?stuname=&quot;+$(&quot;#stuname&quot;).val()+&quot;&amp;stuage=&quot;+$(&quot;#stuage&quot;).val()+&quot;&amp;currentPage=&quot;+currentPage+&quot;&amp;pageSize=&quot;+$(&quot;#pageSize&quot;).val();
      }
    &lt;/script&gt;
  &lt;/table&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Controller层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@WebServlet(urlPatterns = &quot;/showStudentController&quot;)
public class ShowStudentController extends HttpServlet {
    private StudentService studentService=new StudentServiceImpl();
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 接收数据
        // 页码数
        int currentPage =1;
        try {
            currentPage=Integer.parseInt(req.getParameter(&quot;currentPage&quot;));
        } catch (NumberFormatException e) {
        }
        // 页大小
        int pageSize =5;
        try {
            pageSize =Integer.parseInt(req.getParameter(&quot;pageSize&quot;));
        } catch (NumberFormatException e) {
        }
        // 查询条件
        String stuname = req.getParameter(&quot;stuname&quot;);
        String stuage = req.getParameter(&quot;stuage&quot;);
        // 调用service层服务处理业务逻辑
        PageBean&lt;Student&gt; pageBean =studentService.findByPage(stuname,stuage,currentPage,pageSize);
        // 将数据放入请求域
        req.setAttribute(&quot;pageBean&quot;,pageBean);
        req.setAttribute(&quot;stuname&quot;, stuname);
        req.setAttribute(&quot;stuage&quot;, stuage);
        // 响应数据,页面跳转
        req.getRequestDispatcher(&quot;showStudent.jsp&quot;).forward(req,resp);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Service层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class StudentServiceImpl implements StudentService {
    private StudentDao studentDao =new StudentDaoImpl();
    // 做分页数据封装的业务处理
    @Override
    public PageBean&lt;Student&gt; findByPage(String stuname,String stuage,int currentPage, int pageSize) {
        // 查询出该页所有数据
        List&lt;Student&gt; students = studentDao.findByPage( stuname, stuage,currentPage, pageSize);
        // 查询出有多少条数据
        int totalSize =studentDao.findTotalSize( stuname, stuage);
        // 总页数
        int totalPage =totalSize%pageSize==0?totalSize/pageSize:totalSize/pageSize+1;
        // 当前页
        // 页大小
        PageBean&lt;Student&gt; pageBean =new PageBean&lt;&gt;(students,  totalSize,  pageSize,  totalPage,  currentPage);
        return pageBean;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DAO层</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class StudentDaoImpl extends BaseDao implements StudentDao {
    @Override
    public List&lt;Student&gt; findByPage(String stuname,String stuage,int currentPage, int pageSize) {
        StringBuilder sql=new StringBuilder(&quot;select  * from student where 1=1 &quot;);
        if(null != stuname &amp;&amp; !&quot;&quot;.equals(stuname)) {
            sql.append(&quot;and stuname like ? &quot;);
        }
        if(null != stuage &amp;&amp; !&quot;&quot;.equals(stuage)) {
            sql.append(&quot;and stuage &gt; ? &quot;);
        }
        sql.append(&quot;limit ?,?&quot;);
        System.out.println(sql.toString());
        List list =null;
        if(null != stuname &amp;&amp; !&quot;&quot;.equals(stuname) &amp;&amp; null != stuage &amp;&amp; !&quot;&quot;.equals(stuage)){
             list = baseQuery(Student.class, sql.toString(), &quot;%&quot;+stuname+&quot;%&quot;,stuage,(currentPage - 1) * pageSize, pageSize);
        }else if ((null != stuname &amp;&amp; !&quot;&quot;.equals(stuname)) &amp;&amp; (null == stuage || &quot;&quot;.equals(stuage))){
             list = baseQuery(Student.class, sql.toString(), &quot;%&quot;+stuname+&quot;%&quot;,(currentPage - 1) * pageSize, pageSize);
        }else if ((null == stuname || &quot;&quot;.equals(stuname))&amp;&amp; (null != stuage &amp;&amp; !&quot;&quot;.equals(stuage))){
             list = baseQuery(Student.class, sql.toString(), stuage,(currentPage - 1) * pageSize, pageSize);
        }else{
             list = baseQuery(Student.class, sql.toString(), (currentPage - 1) * pageSize, pageSize);
        }
        return list;
    }
    @Override
    public int findTotalSize(String stuname,String stuage) {
        StringBuilder sql=new StringBuilder(&quot;select  count(1) from student where 1=1 &quot;);
        if(null != stuname &amp;&amp; !&quot;&quot;.equals(stuname)) {
            sql.append(&quot;and stuname like ? &quot;);
        }
        if(null != stuage &amp;&amp; !&quot;&quot;.equals(stuage)) {
            sql.append(&quot;and stuage &gt; ? &quot;);
        }
        int count =0;
        if(null != stuname &amp;&amp; !&quot;&quot;.equals(stuname) &amp;&amp; null != stuage &amp;&amp; !&quot;&quot;.equals(stuage)){
            count = baseQueryInt( sql.toString(), &quot;%&quot;+stuname+&quot;%&quot;,stuage);
        }else if ((null != stuname &amp;&amp; !&quot;&quot;.equals(stuname)) &amp;&amp; (null == stuage || &quot;&quot;.equals(stuage))){
            count = baseQueryInt( sql.toString(), &quot;%&quot;+stuname+&quot;%&quot;);
        }else if ((null == stuname || &quot;&quot;.equals(stuname))&amp;&amp; (null != stuage &amp;&amp; !&quot;&quot;.equals(stuage))){
            count = baseQueryInt( sql.toString(),stuage);
        }else{
            count = baseQueryInt(sql.toString());
        }
        return count;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function b(p,q){const i=a("RouterLink");return l(),s("div",null,[g,e("blockquote",null,[e("p",null,[n("关于BaseDao请参考 : "),d(i,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/02_%E6%95%B0%E6%8D%AE%E5%BA%93%E5%92%8CJDBC/02_JDBC/06_DAO/DAO.html"},{default:u(()=>[n("DAO")]),_:1})])])])}const S=t(o,[["render",b],["__file","分页.html.vue"]]);export{S as default};
