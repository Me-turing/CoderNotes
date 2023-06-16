const e=JSON.parse('{"key":"v-33874b2c","path":"/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/02_%E6%95%B0%E6%8D%AE%E5%BA%93%E5%92%8CJDBC/02_JDBC/07_%E8%BF%9E%E6%8E%A5%E6%B1%A0%E7%9A%84%E4%BD%BF%E7%94%A8/%E8%BF%9E%E6%8E%A5%E6%B1%A0%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"连接池的使用","lang":"zh-CN","frontmatter":{"title":"连接池的使用","icon":"file","order":1,"author":"十七","date":"2023-06-15 周四","category":["初级开发工程师"],"tag":["P5"],"sticky":true,"index":true,"description":"为什么要使用连接池 建立数据库连接的两种方式 传统连接方式 首先调用Class.forName()方法加载数据库驱动，然后调用DriverManager.getConnection()方法建立连接. 存在的问题 : Connection对象在每次执行DML和DQL的过程中都要创建一次,DML和DQL执行完毕后,connection对象都会被销毁. co...","head":[["meta",{"property":"og:url","content":"https://meturing.gitee.io/coder-notes/coder-notes/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/02_%E6%95%B0%E6%8D%AE%E5%BA%93%E5%92%8CJDBC/02_JDBC/07_%E8%BF%9E%E6%8E%A5%E6%B1%A0%E7%9A%84%E4%BD%BF%E7%94%A8/%E8%BF%9E%E6%8E%A5%E6%B1%A0%E7%9A%84%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:title","content":"连接池的使用"}],["meta",{"property":"og:description","content":"为什么要使用连接池 建立数据库连接的两种方式 传统连接方式 首先调用Class.forName()方法加载数据库驱动，然后调用DriverManager.getConnection()方法建立连接. 存在的问题 : Connection对象在每次执行DML和DQL的过程中都要创建一次,DML和DQL执行完毕后,connection对象都会被销毁. co..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"十七"}],["meta",{"property":"article:tag","content":"P5"}],["meta",{"property":"article:published_time","content":"2023-06-14T16:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"连接池的使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-14T16:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"十七\\"}]}"]]},"headers":[{"level":2,"title":"为什么要使用连接池","slug":"为什么要使用连接池","link":"#为什么要使用连接池","children":[{"level":3,"title":"建立数据库连接的两种方式","slug":"建立数据库连接的两种方式","link":"#建立数据库连接的两种方式","children":[]}]},{"level":2,"title":"具体实现","slug":"具体实现","link":"#具体实现","children":[{"level":3,"title":"创建连接池文件","slug":"创建连接池文件","link":"#创建连接池文件","children":[]},{"level":3,"title":"修改BaseDAO","slug":"修改basedao","link":"#修改basedao","children":[]},{"level":3,"title":"效果","slug":"效果","link":"#效果","children":[]}]},{"level":2,"title":"继续优化","slug":"继续优化","link":"#继续优化","children":[{"level":3,"title":"创建配置文件","slug":"创建配置文件","link":"#创建配置文件","children":[]},{"level":3,"title":"创建PropertiesUtil","slug":"创建propertiesutil","link":"#创建propertiesutil","children":[]},{"level":3,"title":"修改连接池","slug":"修改连接池","link":"#修改连接池","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.39,"words":1618},"filePathRelative":"CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/02_JDBC/07_连接池的使用/连接池的使用.md","localizedDate":"2023年6月15日","autoDesc":true,"excerpt":""}');export{e as data};
