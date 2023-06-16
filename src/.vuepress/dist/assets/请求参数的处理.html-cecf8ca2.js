const e=JSON.parse('{"key":"v-58dede36","path":"/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/06_%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E7%9A%84%E5%A4%84%E7%90%86/%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E7%9A%84%E5%A4%84%E7%90%86.html","title":"请求参数的处理","lang":"zh-CN","frontmatter":{"title":"请求参数的处理","icon":"file","order":1,"author":"十七","date":"2023-06-15 周四","category":["初级开发工程师"],"tag":["P5"],"sticky":true,"index":true,"description":"获取参数的方式 紧耦合方式 - 了解 DispatcherServlet中的service方法直接将此次请求的request对象传递给调用的单元方法即可。 同时在单元方法上声明形参HttpServletRequest来接收request实参即可。 Controller层 我们在Controller单元中修改: - 使用HttpServletReques...","head":[["meta",{"property":"og:url","content":"https://me-turing.github.io/CoderNotes/CoderNotes/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/04_SpringMVC/06_%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E7%9A%84%E5%A4%84%E7%90%86/%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E7%9A%84%E5%A4%84%E7%90%86.html"}],["meta",{"property":"og:title","content":"请求参数的处理"}],["meta",{"property":"og:description","content":"获取参数的方式 紧耦合方式 - 了解 DispatcherServlet中的service方法直接将此次请求的request对象传递给调用的单元方法即可。 同时在单元方法上声明形参HttpServletRequest来接收request实参即可。 Controller层 我们在Controller单元中修改: - 使用HttpServletReques..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://me-turing.github.io/CoderNotes/CoderNotes/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-16T06:43:34.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"请求参数的处理"}],["meta",{"property":"article:author","content":"十七"}],["meta",{"property":"article:tag","content":"P5"}],["meta",{"property":"article:published_time","content":"2023-06-14T16:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-16T06:43:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"请求参数的处理\\",\\"image\\":[\\"https://me-turing.github.io/CoderNotes/CoderNotes/\\"],\\"datePublished\\":\\"2023-06-14T16:00:00.000Z\\",\\"dateModified\\":\\"2023-06-16T06:43:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"十七\\"}]}"]]},"headers":[{"level":2,"title":"获取参数的方式","slug":"获取参数的方式","link":"#获取参数的方式","children":[{"level":3,"title":"紧耦合方式 - 了解","slug":"紧耦合方式-了解","link":"#紧耦合方式-了解","children":[]},{"level":3,"title":"解耦合方式【熟练】","slug":"解耦合方式【熟练】","link":"#解耦合方式【熟练】","children":[]}]},{"level":2,"title":"参数的处理","slug":"参数的处理","link":"#参数的处理","children":[{"level":3,"title":"POJO接收参数","slug":"pojo接收参数","link":"#pojo接收参数","children":[]},{"level":3,"title":"日期类型的特殊处理","slug":"日期类型的特殊处理","link":"#日期类型的特殊处理","children":[]},{"level":3,"title":"List集合接收参数","slug":"list集合接收参数","link":"#list集合接收参数","children":[]},{"level":3,"title":"Map集合接收参数","slug":"map集合接收参数","link":"#map集合接收参数","children":[]},{"level":3,"title":"编码问题","slug":"编码问题","link":"#编码问题","children":[]}]}],"git":{"createdTime":1686897814000,"updatedTime":1686897814000,"contributors":[{"name":"Meturing","email":"2339989978@qq.com","commits":1}]},"readingTime":{"minutes":5.65,"words":1695},"filePathRelative":"CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/04_SpringMVC/06_请求参数的处理/请求参数的处理.md","localizedDate":"2023年6月15日","autoDesc":true,"excerpt":""}');export{e as data};
