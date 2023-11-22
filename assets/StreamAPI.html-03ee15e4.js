const e=JSON.parse('{"key":"v-6a2f05aa","path":"/doc/01_JavaSE%E9%98%B6%E6%AE%B5/D_JDK%E6%96%B0%E7%89%B9%E6%80%A7/01_JDK8%E6%96%B0%E7%89%B9%E6%80%A7/04_StreamAPI/StreamAPI.html","title":"StreamAPI","lang":"zh-CN","frontmatter":{"title":"StreamAPI","icon":"file","order":1,"author":"十七","date":"2023-06-15 周四","category":["JavaSE阶段"],"tag":["Java基础"],"sticky":true,"index":true,"description":"集合处理数据的弊端 当我们需要对集合中的元素进行操作的时候, 除了必须的添加\\\\删除\\\\获取 外,比较常用的就是集合的循环 上面的代码针对与我们不同的需求总是一次次的循环循环循环. 这时我们希望有更加高效的处理方式， 这时我们就可以通过JDK8中提供的Stream API来解决这个问题了。 Stream更加优雅的解决方案: Stream流式编程思想 Str...","head":[["meta",{"property":"og:url","content":"https://me-turing.github.io/CoderNotes/CoderNotes/doc/01_JavaSE%E9%98%B6%E6%AE%B5/D_JDK%E6%96%B0%E7%89%B9%E6%80%A7/01_JDK8%E6%96%B0%E7%89%B9%E6%80%A7/04_StreamAPI/StreamAPI.html"}],["meta",{"property":"og:title","content":"StreamAPI"}],["meta",{"property":"og:description","content":"集合处理数据的弊端 当我们需要对集合中的元素进行操作的时候, 除了必须的添加\\\\删除\\\\获取 外,比较常用的就是集合的循环 上面的代码针对与我们不同的需求总是一次次的循环循环循环. 这时我们希望有更加高效的处理方式， 这时我们就可以通过JDK8中提供的Stream API来解决这个问题了。 Stream更加优雅的解决方案: Stream流式编程思想 Str..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://me-turing.github.io/CoderNotes/CoderNotes/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-10T02:49:38.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"StreamAPI"}],["meta",{"property":"article:author","content":"十七"}],["meta",{"property":"article:tag","content":"Java基础"}],["meta",{"property":"article:published_time","content":"2023-06-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-10T02:49:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"StreamAPI\\",\\"image\\":[\\"https://me-turing.github.io/CoderNotes/CoderNotes/\\"],\\"datePublished\\":\\"2023-06-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-10T02:49:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"十七\\"}]}"]]},"headers":[{"level":2,"title":"集合处理数据的弊端","slug":"集合处理数据的弊端","link":"#集合处理数据的弊端","children":[]},{"level":2,"title":"Stream流式编程思想","slug":"stream流式编程思想","link":"#stream流式编程思想","children":[]},{"level":2,"title":"Stream流的获取方式","slug":"stream流的获取方式","link":"#stream流的获取方式","children":[{"level":3,"title":"根据Collection获取","slug":"根据collection获取","link":"#根据collection获取","children":[]},{"level":3,"title":"根据Stream的of方法获取","slug":"根据stream的of方法获取","link":"#根据stream的of方法获取","children":[]}]},{"level":2,"title":"Stream流中的常用方法","slug":"stream流中的常用方法","link":"#stream流中的常用方法","children":[{"level":3,"title":"ForEach","slug":"foreach","link":"#foreach","children":[]},{"level":3,"title":"Count","slug":"count","link":"#count","children":[]},{"level":3,"title":"Filter","slug":"filter","link":"#filter","children":[]},{"level":3,"title":"Limit","slug":"limit","link":"#limit","children":[]},{"level":3,"title":"Skip","slug":"skip","link":"#skip","children":[]},{"level":3,"title":"Map","slug":"map","link":"#map","children":[]},{"level":3,"title":"Sorted","slug":"sorted","link":"#sorted","children":[]},{"level":3,"title":"Distinct","slug":"distinct","link":"#distinct","children":[]},{"level":3,"title":"Match","slug":"match","link":"#match","children":[]},{"level":3,"title":"Find","slug":"find","link":"#find","children":[]},{"level":3,"title":"Max和Min","slug":"max和min","link":"#max和min","children":[]},{"level":3,"title":"Reduce","slug":"reduce","link":"#reduce","children":[]},{"level":3,"title":"MapToInt/MapToDouble/MapToLong","slug":"maptoint-maptodouble-maptolong","link":"#maptoint-maptodouble-maptolong","children":[]},{"level":3,"title":"Concat","slug":"concat","link":"#concat","children":[]}]},{"level":2,"title":"综合案例","slug":"综合案例","link":"#综合案例","children":[]},{"level":2,"title":"Stream结果收集","slug":"stream结果收集","link":"#stream结果收集","children":[{"level":3,"title":"结果收集到集合","slug":"结果收集到集合","link":"#结果收集到集合","children":[]},{"level":3,"title":"结果收集到数组","slug":"结果收集到数组","link":"#结果收集到数组","children":[]},{"level":3,"title":"流中的数据进行聚合计算","slug":"流中的数据进行聚合计算","link":"#流中的数据进行聚合计算","children":[]},{"level":3,"title":"流中的数据进行分组操作","slug":"流中的数据进行分组操作","link":"#流中的数据进行分组操作","children":[]},{"level":3,"title":"流中的数据进行分区操作","slug":"流中的数据进行分区操作","link":"#流中的数据进行分区操作","children":[]},{"level":3,"title":"流中的数据进行拼接操作","slug":"流中的数据进行拼接操作","link":"#流中的数据进行拼接操作","children":[]}]},{"level":2,"title":"并行的Stream流","slug":"并行的stream流","link":"#并行的stream流","children":[{"level":3,"title":"串行的Stream流","slug":"串行的stream流","link":"#串行的stream流","children":[]},{"level":3,"title":"获取并行的Stream流","slug":"获取并行的stream流","link":"#获取并行的stream流","children":[]},{"level":3,"title":"并行流的操作","slug":"并行流的操作","link":"#并行流的操作","children":[]},{"level":3,"title":"并行流和串行流的对比","slug":"并行流和串行流的对比","link":"#并行流和串行流的对比","children":[]},{"level":3,"title":"并行流的线程安全问题","slug":"并行流的线程安全问题","link":"#并行流的线程安全问题","children":[]}]}],"git":{"createdTime":1686904628000,"updatedTime":1696906178000,"contributors":[{"name":"Meturing","email":"2339989978@qq.com","commits":1},{"name":"SEVENTEEN","email":"2339989978@qq.com","commits":1}]},"readingTime":{"minutes":17.49,"words":5248},"filePathRelative":"doc/01_JavaSE阶段/D_JDK新特性/01_JDK8新特性/04_StreamAPI/StreamAPI.md","localizedDate":"2023年6月15日","autoDesc":true,"excerpt":""}');export{e as data};