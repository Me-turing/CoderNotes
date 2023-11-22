import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as o,d as n,e,b as l,w as t,f as a}from"./app-71f45f98.js";const v="/CoderNotes/assets/image-20230627110849969-1f642f11.png",u="/CoderNotes/assets/image-20230627110938932-d99bc259.png",c="/CoderNotes/assets/image-20230627112634659-d0719006.png",p="/CoderNotes/assets/image-20230627112238310-f6411f87.png",m={},g=a('<p>注意:在开始文件的下载操作之前,请先完成文件的上传相关环境搭建</p><h2 id="展示全部的文件" tabindex="-1"><a class="header-anchor" href="#展示全部的文件" aria-hidden="true">#</a> 展示全部的文件</h2><p>在完成文件下载之前,我们需要先将之前上传的文件展示出来:</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="后端代码开发" tabindex="-1"><a class="header-anchor" href="#后端代码开发" aria-hidden="true">#</a> 后端代码开发</h3><h4 id="dto的思考" tabindex="-1"><a class="header-anchor" href="#dto的思考" aria-hidden="true">#</a> DTO的思考</h4><p>DTO，全称为Data Transfer Object，即数据传输对象。它是一个简单的POJO类，其中包含一些属性，并提供getter和setter方法。DTO通常用于在不同层之间传输数据，例如，在业务逻辑层和持久层之间传输数据。</p><p>DTO本身不是业务对象，他是根据UI需求进行设计的。简单来说Model面向业务，我们是通过业务来定义Model的。而DTO是面向UI，通过UI的需求来定义的，通过DTO我们实现了表现层与Model层之间的解耦，表现层不引用Model。如果开发过程中我们的模型变了，而界面没变，我们只需改Model而不需要去改动表现层.</p><p>例如:在这个开发案例中,我们db里面实际存储的是<code>uploadPath</code>,而我们前端需要展示的是<code>uploadName</code>,同时对于时间的格式化也不同.我们直接传送给前端这样是不合适的.所以我们可以添加一个DTO层处理前端需要的数据,并返回</p><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用DTO的好处:</p><p>DTO主要用于将数据封装后进行传递，提供给外部的接口作为参数。它可以避免直接传输实体对象，从而提高系统的安全性和性能。DTO还能够解决对象序列化和反序列化的问题，并保证数据的完整性和正确性。</p><p>DTO最常用于N层应用程序结构中服务层和UI层之间的数据传输。通过使用DTO，可以减少需要传输的数据量，从而提高应用程序的性能和吞吐量。</p><p>综上所述，<strong>DTO的作用是封装数据，将其从一层传输到另一层，并且可以提高应用程序的性能和系统的安全性。</strong></p><h4 id="相关代码" tabindex="-1"><a class="header-anchor" href="#相关代码" aria-hidden="true">#</a> 相关代码</h4><p>com.meturing.pojo.dto.UploadInfoDto.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UploadInfoDto implements Serializable {
    private Integer serialNo;
    private String uploadIp;
    private String uploadName;
    private String uploadType;
    private String uploadTime;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>com.meturing.controller.RegisterController.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class RegisterController {
    @Autowired
    private UserRegister userRegisterImpl;
    @RequestMapping(&quot;/getAllFile&quot;)
    @ResponseBody
    public List&lt;UploadInfoDto&gt; getAllFile() throws IOException {
        List&lt;UploadInfoDto&gt; allFile = userRegisterImpl.getAllFile();
        return allFile;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>com.meturing.service.UserRegister.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface UserRegister {  
	List&lt;UploadInfoDto&gt; getAllFile();  
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>com.meturing.service.impl.UserRegister.java<br><strong>注意:此时要将DB查出来的VO类转换为DTO类传送给前端</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Service
@Transactional
public class UserRegisterImpl implements UserRegister {
    @Autowired
    private UserRegisterMapper userRegisterMapper ;
    @Override
    public List&lt;UploadInfoDto&gt; getAllFile() {
        List&lt;UploadInfo&gt; uploadInfoList = userRegisterMapper.getAllFile();
        List&lt;UploadInfoDto&gt; uploadInfoDtoList = new ArrayList&lt;&gt;();
        for (UploadInfo uploadInfo : uploadInfoList) {
            UploadInfoDto uploadInfoDto = new UploadInfoDto();
            uploadInfoDto.setSerialNo(uploadInfo.getSerialNo());
            uploadInfoDto.setUploadIp(uploadInfo.getUploadIp());
            uploadInfoDto.setUploadName(uploadInfo.getUploadPath().substring(uploadInfo.getUploadPath().lastIndexOf(File.separatorChar)+1));
            uploadInfoDto.setUploadType(uploadInfo.getUploadType());
            DateFormat dateFormat = new SimpleDateFormat(&quot;yyyy-MM-dd HH:MM:SS&quot;);
            uploadInfoDto.setUploadTime(dateFormat.format(uploadInfo.getUploadTime()));
            uploadInfoDtoList.add(uploadInfoDto);
        }
        return uploadInfoDtoList;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>com.meturing.mapper.UserRegisterMapper.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Mapper
public interface UserRegisterMapper {
    List&lt;UploadInfo&gt; getAllFile();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>resources/com/meturing/mapper/UserRegisterMapper.xml</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
&lt;!DOCTYPE mapper
        PUBLIC &quot;-//mybatis.org//DTDMapper3.0//EN&quot;
        &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;
&lt;mapper namespace=&quot;com.meturing.mapper.UserRegisterMapper&quot;&gt;
    &lt;select id=&quot;getAllFile&quot; resultType=&quot;com.meturing.pojo.UploadInfo&quot;&gt;
        select * from uploadinfo
    &lt;/select&gt;
&lt;/mapper&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端代码开发" tabindex="-1"><a class="header-anchor" href="#前端代码开发" aria-hidden="true">#</a> 前端代码开发</h3><p>思路:</p><ol><li>初始化打开页面发送请求</li><li>使用JQ技术将请求的数据展示出来</li></ol><p>showPlayer.jsp</p><div class="language-JSP line-numbers-mode" data-ext="JSP"><pre class="language-JSP"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;style&gt;
        #playerTable{
            width: 50%;
            border: 3px solid cadetblue;
            margin: 0px auto;
            text-align: center;
        }
        #playerTable th,td{
            border: 1px solid gray;
        }
        #playerTable img{
            width: 100px;
            height: 100px;
        }
    &lt;/style&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;static/js/jquery-3.5.1.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        $(function (){
            $.ajax({
                type:&quot;get&quot;,
                url:&quot;getAllFile&quot;,
                success:function(players){
                    $.each(players,function(i,e){
                        console.log(i+&quot;/&quot;+e)
                        $(&quot;#playerTable&quot;).append(&#39;&lt;tr&gt;\\n&#39; +
                            &#39;        &lt;td&gt;&#39;+e.serialNo+&#39;&lt;/td&gt;\\n&#39; +
                            &#39;        &lt;td&gt;&#39;+e.uploadIp+&#39;&lt;/td&gt;\\n&#39; +
                            &#39;        &lt;td&gt;&#39;+e.uploadName+&#39;&lt;/td&gt;\\n&#39; +
                            &#39;        &lt;td&gt;&#39;+e.uploadType+&#39;&lt;/td&gt;\\n&#39; +
                            &#39;        &lt;td&gt;&#39;+e.uploadTime+&#39;&lt;/td&gt;\\n&#39; +
                            &#39;        &lt;td&gt;\\n&#39; +
                            &#39;            &lt;img src=&quot;http://127.0.0.1:8090/upload/&#39;+e.uploadName+&#39;&quot; alt=&quot;&quot; &gt;&#39; +
                            &#39;        &lt;/td&gt;\\n&#39; +
                            &#39;        &lt;td&gt;\\n&#39; +
                            &#39;            &lt;a href=&quot;&quot;&gt;下载&lt;/a&gt;\\n&#39; +
                            &#39;        &lt;/td&gt;\\n&#39; +
                            &#39;    &lt;/tr&gt;&#39;)
                    })
                }
            })
        })
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;table id=&quot;playerTable&quot; border=&quot;1&quot; cellspacing=&quot;0&quot;&gt;
   &lt;tr&gt;
       &lt;th&gt;编号&lt;/th&gt;
       &lt;th&gt;上传IP&lt;/th&gt;
       &lt;th&gt;文件名称&lt;/th&gt;
       &lt;th&gt;文件类型&lt;/th&gt;
       &lt;th&gt;上传时间&lt;/th&gt;
       &lt;th&gt;操作&lt;/th&gt;
   &lt;/tr&gt;
&lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),b=a('<h2 id="添加下载功能" tabindex="-1"><a class="header-anchor" href="#添加下载功能" aria-hidden="true">#</a> 添加下载功能</h2><h3 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h3><p>我们通常文件下载时,是将文件的字节流输出给浏览器,并设置响应头</p><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们可以通过以下API完成核心操作:</p><ol><li><code> response.setHeader</code> 设置响应头</li><li><code>response.setContentType</code> 设置响应类型</li><li><code>new URL(文件地址).openStream()</code> 获取文件输入流</li><li><code>response.getOutputStream()</code> 获取输出流</li><li><code>IOUtils.copy(输入流, 输出流)</code> 先浏览器响应</li></ol><h3 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码" aria-hidden="true">#</a> 实现代码</h3><p>com.meturing.controller.RegisterController.java</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class RegisterController {
    @Autowired
    private UserRegister userRegisterImpl;
    // 文件存储位置
    private final static String FILESERVER=&quot;http://127.0.0.1:8090/upload/&quot;;
    @RequestMapping(&quot;/fileDownLoad&quot;)
    public void fileDownLoad(String fileName, String fileType, HttpServletResponse response) throws IOException {
        // 设置响应头
        // 告诉浏览器要将数据保存到磁盘上,不在浏览器上直接解析
        response.setHeader(&quot;Content-Disposition&quot;, &quot;attachment;filename=&quot;+fileName);
        // 告诉浏览下载的文件类型
        response.setContentType(fileType);
        // 获取一个服务器上文件的输入流
        InputStream inputStream = new URL(FILESERVER + fileName).openStream();
        // 获取一个指向浏览器的输出流
        ServletOutputStream outputStream = response.getOutputStream();
        // 向浏览器响应文件即可
        IOUtils.copy(inputStream, outputStream);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>showPlayer.jsp<br> 我们需要发送: <code>localhost:8080/SpringMVC_Upload_03/fileDownLoad?fileName=0183eaf8-1ef2-412a-8eed-d98efffb8600.png&amp;fileType=image/png</code>就可以下载图片,所以我们需要修改下载的链接<br><img src="`+p+'" alt="" loading="lazy"></p>',10);function h(f,E){const i=d("RouterLink");return r(),o("div",null,[g,n("p",null,[e("关于JQ的遍历,请查看: "),l(i,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/03_%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/04_JQuery/03_JQuery%E4%B8%AD%E7%9A%84DOM%E7%BC%96%E7%A8%8B/JQuery%E4%B8%AD%E7%9A%84DOM%E7%BC%96%E7%A8%8B.html#%E8%BF%AD%E4%BB%A3%E9%81%8D%E5%8E%86%E6%96%B9%E5%BC%8F"},{default:t(()=>[e("迭代遍历方式")]),_:1})]),b,n("p",null,[e("关于Tomcat响应可以参考 : "),l(i,{to:"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/03_Servlet/02_HttpServletRequest%E5%92%8CHttpServlet/HttpServletRequest%E5%92%8CHttpServletResponse.html#%E8%AE%BE%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD"},{default:t(()=>[e("设置文件下载")]),_:1})])])}const I=s(m,[["render",h],["__file","文件的下载.html.vue"]]);export{I as default};
