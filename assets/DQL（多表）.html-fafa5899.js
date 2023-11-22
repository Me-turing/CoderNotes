const e=JSON.parse('{"key":"v-29b2db69","path":"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/02_%E6%95%B0%E6%8D%AE%E5%BA%93%E5%92%8CJDBC/01_MySQL/06_DQL%EF%BC%88%E5%A4%9A%E8%A1%A8%EF%BC%89/DQL%EF%BC%88%E5%A4%9A%E8%A1%A8%EF%BC%89.html","title":"DQL（多表）","lang":"zh-CN","frontmatter":{"title":"DQL（多表）","icon":"file","order":1,"author":"十七","date":"2023-06-15 周四","category":["初级开发工程师"],"tag":["P5"],"sticky":true,"index":true,"description":"三范式 好的数据库设计对数据的存储性能和后期的程序开发，都会产生重要的影响。建立科学的，规范的数据库就需要满足一些规则来优化数据的设计和存储，这些规则就称为范式 第一范式：确保每列保持原子性 第一范式是最基本的范式。如果数据库表中的所有字段值都是不可分解的原子值，就说明该数据库表满足了第一范式。 第一范式的合理遵循需要根据系统的实际需求来定。比如某些数...","head":[["meta",{"property":"og:url","content":"https://me-turing.github.io/CoderNotes/CoderNotes/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/02_%E6%95%B0%E6%8D%AE%E5%BA%93%E5%92%8CJDBC/01_MySQL/06_DQL%EF%BC%88%E5%A4%9A%E8%A1%A8%EF%BC%89/DQL%EF%BC%88%E5%A4%9A%E8%A1%A8%EF%BC%89.html"}],["meta",{"property":"og:title","content":"DQL（多表）"}],["meta",{"property":"og:description","content":"三范式 好的数据库设计对数据的存储性能和后期的程序开发，都会产生重要的影响。建立科学的，规范的数据库就需要满足一些规则来优化数据的设计和存储，这些规则就称为范式 第一范式：确保每列保持原子性 第一范式是最基本的范式。如果数据库表中的所有字段值都是不可分解的原子值，就说明该数据库表满足了第一范式。 第一范式的合理遵循需要根据系统的实际需求来定。比如某些数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://me-turing.github.io/CoderNotes/CoderNotes/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-10T02:49:38.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"DQL（多表）"}],["meta",{"property":"article:author","content":"十七"}],["meta",{"property":"article:tag","content":"P5"}],["meta",{"property":"article:published_time","content":"2023-06-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-10T02:49:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DQL（多表）\\",\\"image\\":[\\"https://me-turing.github.io/CoderNotes/CoderNotes/\\"],\\"datePublished\\":\\"2023-06-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-10T02:49:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"十七\\"}]}"]]},"headers":[{"level":2,"title":"三范式","slug":"三范式","link":"#三范式","children":[{"level":3,"title":"第一范式：确保每列保持原子性","slug":"第一范式-确保每列保持原子性","link":"#第一范式-确保每列保持原子性","children":[]},{"level":3,"title":"第二范式：确保表中的每列都和主键相关","slug":"第二范式-确保表中的每列都和主键相关","link":"#第二范式-确保表中的每列都和主键相关","children":[]},{"level":3,"title":"第三范式：确保每列都和主键列直接相关，而不是间接相关","slug":"第三范式-确保每列都和主键列直接相关-而不是间接相关","link":"#第三范式-确保每列都和主键列直接相关-而不是间接相关","children":[]}]},{"level":2,"title":"多表关系","slug":"多表关系","link":"#多表关系","children":[{"level":3,"title":"一对多","slug":"一对多","link":"#一对多","children":[]},{"level":3,"title":"多对多","slug":"多对多","link":"#多对多","children":[]},{"level":3,"title":"一对一","slug":"一对一","link":"#一对一","children":[]}]},{"level":2,"title":"多表关联查询","slug":"多表关联查询","link":"#多表关联查询","children":[{"level":3,"title":"交叉查询","slug":"交叉查询","link":"#交叉查询","children":[]},{"level":3,"title":"内连接查询","slug":"内连接查询","link":"#内连接查询","children":[]},{"level":3,"title":"外连接查询","slug":"外连接查询","link":"#外连接查询","children":[]},{"level":3,"title":"union联合查询","slug":"union联合查询","link":"#union联合查询","children":[]},{"level":3,"title":"自连接查询","slug":"自连接查询","link":"#自连接查询","children":[]}]},{"level":2,"title":"子查询","slug":"子查询","link":"#子查询","children":[{"level":3,"title":"子查询的分类","slug":"子查询的分类","link":"#子查询的分类","children":[]},{"level":3,"title":"子查询的复制操作","slug":"子查询的复制操作","link":"#子查询的复制操作","children":[]}]}],"git":{"createdTime":1686904628000,"updatedTime":1696906178000,"contributors":[{"name":"Meturing","email":"2339989978@qq.com","commits":2},{"name":"SEVENTEEN","email":"2339989978@qq.com","commits":1}]},"readingTime":{"minutes":8.74,"words":2622},"filePathRelative":"doc/02_初级开发工程师/01_第一阶段/02_数据库和JDBC/01_MySQL/06_DQL（多表）/DQL（多表）.md","localizedDate":"2023年6月15日","autoDesc":true,"excerpt":""}');export{e as data};
