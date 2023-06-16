const e=JSON.parse('{"key":"v-24610968","path":"/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/02_%E6%95%B0%E6%8D%AE%E5%BA%93%E5%92%8CJDBC/02_JDBC/03_SQL%E6%B3%A8%E5%85%A5%E5%92%8C%E9%A2%84%E7%BC%96%E8%AF%91/SQL%E6%B3%A8%E5%85%A5%E5%92%8C%E9%A2%84%E7%BC%96%E8%AF%91.html","title":"SQL注入和预编译","lang":"zh-CN","frontmatter":{"title":"SQL注入和预编译","icon":"file","order":1,"author":"十七","date":"2023-06-15 周四","category":["初级开发工程师"],"tag":["P5"],"sticky":true,"index":true,"description":"什么是SQL注入 SQL注入攻击指的是通过构建特殊的输入作为参数传入Web应用程序，而这些输入大都是SQL语法里的一些组合，通过执行SQL语句进而执行攻击者所要的操作，其主要原因是程序没有细致地过滤用户输入的数据，致使非法数据侵入系统。 以模拟登录为例:在前台输入用户名和密码，后台判断信息是否正确，并给出前台反馈信息，前台输出反馈信息。 模拟SQL注入...","head":[["meta",{"property":"og:url","content":"https://me-turing.github.io/CoderNotes/CoderNotes/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/02_%E6%95%B0%E6%8D%AE%E5%BA%93%E5%92%8CJDBC/02_JDBC/03_SQL%E6%B3%A8%E5%85%A5%E5%92%8C%E9%A2%84%E7%BC%96%E8%AF%91/SQL%E6%B3%A8%E5%85%A5%E5%92%8C%E9%A2%84%E7%BC%96%E8%AF%91.html"}],["meta",{"property":"og:title","content":"SQL注入和预编译"}],["meta",{"property":"og:description","content":"什么是SQL注入 SQL注入攻击指的是通过构建特殊的输入作为参数传入Web应用程序，而这些输入大都是SQL语法里的一些组合，通过执行SQL语句进而执行攻击者所要的操作，其主要原因是程序没有细致地过滤用户输入的数据，致使非法数据侵入系统。 以模拟登录为例:在前台输入用户名和密码，后台判断信息是否正确，并给出前台反馈信息，前台输出反馈信息。 模拟SQL注入..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-16T06:43:34.000Z"}],["meta",{"property":"article:author","content":"十七"}],["meta",{"property":"article:tag","content":"P5"}],["meta",{"property":"article:published_time","content":"2023-06-14T16:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-16T06:43:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQL注入和预编译\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-14T16:00:00.000Z\\",\\"dateModified\\":\\"2023-06-16T06:43:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"十七\\"}]}"]]},"headers":[{"level":2,"title":"什么是SQL注入","slug":"什么是sql注入","link":"#什么是sql注入","children":[]},{"level":2,"title":"模拟SQL注入","slug":"模拟sql注入","link":"#模拟sql注入","children":[{"level":3,"title":"创建表","slug":"创建表","link":"#创建表","children":[]},{"level":3,"title":"编写登录程序","slug":"编写登录程序","link":"#编写登录程序","children":[]},{"level":3,"title":"测试程序","slug":"测试程序","link":"#测试程序","children":[]},{"level":3,"title":"注入原理","slug":"注入原理","link":"#注入原理","children":[]}]},{"level":2,"title":"prepareStatment 预编译","slug":"preparestatment-预编译","link":"#preparestatment-预编译","children":[{"level":3,"title":"Statement和PreparedStatment的关系和区别","slug":"statement和preparedstatment的关系和区别","link":"#statement和preparedstatment的关系和区别","children":[]},{"level":3,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":3,"title":"流程","slug":"流程","link":"#流程","children":[]},{"level":3,"title":"开启","slug":"开启","link":"#开启","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]},{"level":2,"title":"重构CRUD","slug":"重构crud","link":"#重构crud","children":[]}],"git":{"createdTime":1686897814000,"updatedTime":1686897814000,"contributors":[{"name":"Meturing","email":"2339989978@qq.com","commits":1}]},"readingTime":{"minutes":7.77,"words":2330},"filePathRelative":"CoderNotes/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/02_JDBC/03_SQL注入和预编译/SQL注入和预编译.md","localizedDate":"2023年6月15日","autoDesc":true,"excerpt":""}');export{e as data};
