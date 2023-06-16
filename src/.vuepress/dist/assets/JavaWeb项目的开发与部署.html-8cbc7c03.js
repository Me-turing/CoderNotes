import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,f as t}from"./app-54a62cbe.js";const o="/coder-notes/assets/image_2HKwv0L-mN-61873ef7.png",s="/coder-notes/assets/image_oP2CuoyWrp-d4185fa1.png",r="/coder-notes/assets/image_-g28S2vg9u-2b79eb59.png",c="/coder-notes/assets/image_ATsYoAv024-637cb943.png",n="/coder-notes/assets/image_KsdvKqYo7Z-462a601c.png",d="/coder-notes/assets/image_kN6Nmiw4zA-a457d63b.png",l="/coder-notes/assets/image_wuRnx1ueP5-8d229725.png",p="/coder-notes/assets/image_jcFXDS8J-x-825e3034.png",g="/coder-notes/assets/image_08b7IX68Z2-352758bd.png",m="/coder-notes/assets/image_57H5n0mcUy-0132b18d.png",_="/coder-notes/assets/image_iQk92gdmtO-f94a3cfa.png",b="/coder-notes/assets/image_F-0Cpixwxe-fead0fac.png",f="/coder-notes/assets/image_lNIj3_DR5D-95ce42c0.png",h="/coder-notes/assets/image_oQUOg5ozzn-4191ded1.png",u="/coder-notes/assets/image_CP9WBY0-dE-28e17421.png",A="/coder-notes/assets/image_dVJOJlTpX2-ed9fe57f.png",x="/coder-notes/assets/image_AFEab8OI69-b78a7634.png",T="/coder-notes/assets/image_i3wyKpG04T-cb0e13f2.png",w={},y=t('<h2 id="初识javaweb目录结构" tabindex="-1"><a class="header-anchor" href="#初识javaweb目录结构" aria-hidden="true">#</a> 初识JavaWeb目录结构</h2><h3 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构" aria-hidden="true">#</a> 基本结构</h3><ul><li>project项目的根目录</li><li>静态资源文件/jsp <ul><li>lib jar包目录</li><li>classes java字节码目录</li><li>web.xml项目的配置文件</li><li>其他资源</li></ul></li></ul><h3 id="层级关系" tabindex="-1"><a class="header-anchor" href="#层级关系" aria-hidden="true">#</a> 层级关系</h3><p>层级关系一</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>层级关系二</p><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="使用idea开发javaweb" tabindex="-1"><a class="header-anchor" href="#使用idea开发javaweb" aria-hidden="true">#</a> 使用IDEA开发JavaWeb</h2><h3 id="创建工程" tabindex="-1"><a class="header-anchor" href="#创建工程" aria-hidden="true">#</a> 创建工程</h3><ol><li>选择Java Enterprise <br><img src="'+r+'" alt="" loading="lazy"><ol><li>Project SDK选项 推荐 1.8 如果没有SDK 可以通过后面的 NEW按钮选择自己的JDK安装路径即可 (注意选择的是bin的上一层)</li><li>Java EE version 推荐JAVA EE 8</li><li>Application Server 关联Tomcat容器,如果没有, NEW按钮选择自己的Tomcat安装路径即可 (注意选择的是bin的上一层)</li><li>Additional Libraries and Freameworks 中 必须勾选 Web Applicaiton(4.0)选项 同时注意 create web.xml勾选上</li></ol></li><li>自定义项目名,项目存放路径中注意不要出现 双 \\ 和特殊符号中文空格等<br><img src="'+c+'" alt="" loading="lazy"></li></ol><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>src目录</code> : 用于定义Java源代码<br><code>web目录</code> : 中用于存放一些页面资源( 如果上一步没有勾选Web Applicaiton(4.0)选项),则不会出现web目录<br><code>External Libraries </code> : 中要出现 JDK1.8 和Tomcat jsp-api和servlet-api 才可以正常编写JAVAWEB项目</p><h2 id="使用idea运行项目" tabindex="-1"><a class="header-anchor" href="#使用idea运行项目" aria-hidden="true">#</a> 使用IDEA运行项目</h2><p>启动项目之前,先对项目进行配置</p><ul><li><p>点击Edit Configurations 对项目进行启动之前的配置<br><img src="'+d+'" alt="" loading="lazy"></p></li><li><p>检查项目配置<br> Deployment选项<br><img src="'+l+'" alt="" loading="lazy"></p><p>在Deployment中, Deployed at the server startup里确认要部署的项目是不是我们要运行的项目<br> 在Application context中指定我们项目访问的路径名<br> idea默认是 项目名+&quot;<code>_war_exploded</code>&quot;,在这里我们可以对项目的访问名进行修改,如果不修改,也OK,可以一样使用<br> Server选项<br><img src="'+p+'" alt="" loading="lazy"></p><p><strong>勾选Open browser中的After launch选项</strong>. 这样idea在启动项目之后可以自动帮助我们打开浏览器并访问URL中的资源<br><strong>On Update action : 当代码改变的时候，需要IDEA为你做什么</strong>；选项选为 Update classes and resources ,意义为:更新字节码和其他资源<br><strong>On Frame deactivation : 当失去焦点（比如你最小化了IDEA窗口），需要IDEA为你做什么</strong>。选项. 选为 Update resources ,意义为:更新其他资源<br> HTTP port 默认为8080 不用修改<br> JMX port 默认为 1099 不用修改</p></li><li><p>然后点击运行启动即可<br><img src="'+g+'" alt="" loading="lazy"></p></li></ul><h2 id="使用idea部署项目" tabindex="-1"><a class="header-anchor" href="#使用idea部署项目" aria-hidden="true">#</a> 使用IDEA部署项目</h2><h3 id="第一种-默认" tabindex="-1"><a class="header-anchor" href="#第一种-默认" aria-hidden="true">#</a> 第一种[默认]</h3><p>在Idea中默认的并不会把web项目真正的部署到Tomcat的webapps目录中，而是通过为每个web项目创建一个独立的Tomcat副本并在Tomcat副本中通过的Tomcat的Context组件完成项目的目录指定，在Context组件的docBase属性中会指定Idea对web项目编译后的目录out/artifacts/.....。</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>默认部署方式:<br> Idea会在C:\\Users\\Administrator\\.IntelliJIdea2019.2\\system\\tomcat中为每个Web项目创建一个独立的Tomcat副本。</p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>C:\\Users\\Administrator\\.IntelliJIdea2019.2\\system\\tomcat\\Tomcat_9_0_34_demo_4\\conf\\Catalina\\localhost</code>目录中生成一个该项目的xml文件名称为：”项目名.xml”</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Idea通过执行Tomcat的<code>catalina.bat</code>启动脚本启动Tomcat，通过启动参数来指定启动Tomcat副本运行指定目录中的web项目</p><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Idea在启动Tomcat之前会先在操作系统中设置一些临时环境变量，这些变量会被Tomcat的启动脚本所读取</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>CATALINA_BASE</code>：是Tomcat副本的工作目录<br><code>CATALINA_HOME</code>：是Tomcat的安装目录</p><p>在Catalina.bat启动脚本运行时，会先去判断脚本中的<code>CATALINA_HOME</code>以及<code>CATALINA_BASE</code>是否有默认值，如果没有则直接读取系统环境变量中的值作为他们的默认值。由于Idea在启动Tomcat之前已经设置了临时环境变量，所以tomcat在启动后就会运行部署在Tomcat副本中的web项目</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="第二种" tabindex="-1"><a class="header-anchor" href="#第二种" aria-hidden="true">#</a> 第二种</h3><p>将web项目部署到Tomcat的webapps中</p><ol><li>点击项目结构选项<br> 指定输出artifacts的目录为Tomcat的webapps中的demo目录<br><img src="'+A+'" alt="" loading="lazy"></li><li>在tomcat的webapps中创建一个目录<br><img src="'+x+'" alt="" loading="lazy"></li><li>启动Tomcat，查看demo目录中的内容<br><img src="'+T+'" alt="" loading="lazy"></li></ol>',35),v=[y];function E(I,z){return e(),i("div",null,v)}const C=a(w,[["render",E],["__file","JavaWeb项目的开发与部署.html.vue"]]);export{C as default};
