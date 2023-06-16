const t=JSON.parse('{"key":"v-184a253a","path":"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/01_Tomcat/04_Tomcat%E7%9A%84%E9%85%8D%E7%BD%AE%E4%B8%8E%E7%BB%84%E4%BB%B6/Tomcat%E7%9A%84%E9%85%8D%E7%BD%AE%E4%B8%8E%E7%BB%84%E4%BB%B6.html","title":"Tomcat的配置与组件","lang":"zh-CN","frontmatter":{"title":"Tomcat的配置与组件","icon":"file","order":1,"author":"十七","date":"2023-06-15 周四","category":["初级开发工程师"],"tag":["P5"],"sticky":true,"index":true,"description":"Tomcat的配置文件 Tomcat 的配置文件由4个xml组成，分别是 context.xml、web.xml、server.xml、tomcat-users.xml。每个文件都有自己的功能与配置方法。 context.xml Context.xml 是 Tomcat 公用的环境配置。 Tomcat 服务器会定时去扫描这个文件。一旦发现文件被修改（时...","head":[["meta",{"property":"og:url","content":"https://me-turing.github.io/CoderNotes/CoderNotes/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/01_Tomcat/04_Tomcat%E7%9A%84%E9%85%8D%E7%BD%AE%E4%B8%8E%E7%BB%84%E4%BB%B6/Tomcat%E7%9A%84%E9%85%8D%E7%BD%AE%E4%B8%8E%E7%BB%84%E4%BB%B6.html"}],["meta",{"property":"og:title","content":"Tomcat的配置与组件"}],["meta",{"property":"og:description","content":"Tomcat的配置文件 Tomcat 的配置文件由4个xml组成，分别是 context.xml、web.xml、server.xml、tomcat-users.xml。每个文件都有自己的功能与配置方法。 context.xml Context.xml 是 Tomcat 公用的环境配置。 Tomcat 服务器会定时去扫描这个文件。一旦发现文件被修改（时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://me-turing.github.io/CoderNotes/CoderNotes/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Tomcat的配置与组件"}],["meta",{"property":"article:author","content":"十七"}],["meta",{"property":"article:tag","content":"P5"}],["meta",{"property":"article:published_time","content":"2023-06-14T16:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tomcat的配置与组件\\",\\"image\\":[\\"https://me-turing.github.io/CoderNotes/CoderNotes/\\"],\\"datePublished\\":\\"2023-06-14T16:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"十七\\"}]}"]]},"headers":[{"level":2,"title":"Tomcat的配置文件","slug":"tomcat的配置文件","link":"#tomcat的配置文件","children":[{"level":3,"title":"context.xml","slug":"context-xml","link":"#context-xml","children":[]},{"level":3,"title":"web.xml","slug":"web-xml","link":"#web-xml","children":[]},{"level":3,"title":"server.xml","slug":"server-xml","link":"#server-xml","children":[]},{"level":3,"title":"tomcat-users.xml","slug":"tomcat-users-xml","link":"#tomcat-users-xml","children":[]}]},{"level":2,"title":"Tomcat的配置","slug":"tomcat的配置","link":"#tomcat的配置","children":[{"level":3,"title":"解决控制台乱码","slug":"解决控制台乱码","link":"#解决控制台乱码","children":[]},{"level":3,"title":"修改Tomcat监听端口","slug":"修改tomcat监听端口","link":"#修改tomcat监听端口","children":[]},{"level":3,"title":"配置Tomcat并发数","slug":"配置tomcat并发数","link":"#配置tomcat并发数","children":[]},{"level":3,"title":"配置Tomcat Manager","slug":"配置tomcat-manager","link":"#配置tomcat-manager","children":[]}]},{"level":2,"title":"Tomcat的组件","slug":"tomcat的组件","link":"#tomcat的组件","children":[{"level":3,"title":"Tomcat体系结构图","slug":"tomcat体系结构图","link":"#tomcat体系结构图","children":[]},{"level":3,"title":"核心组件","slug":"核心组件","link":"#核心组件","children":[]},{"level":3,"title":"Tomcat处理请求过程","slug":"tomcat处理请求过程","link":"#tomcat处理请求过程","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.8,"words":2339},"filePathRelative":"doc/02_初级开发工程师/01_第一阶段/04_JavaEE技术/01_Tomcat/04_Tomcat的配置与组件/Tomcat的配置与组件.md","localizedDate":"2023年6月15日","autoDesc":true,"excerpt":""}');export{t as data};
