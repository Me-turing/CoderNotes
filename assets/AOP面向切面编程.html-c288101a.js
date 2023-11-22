const e=JSON.parse('{"key":"v-6b068529","path":"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/03_Spring%E5%9F%BA%E7%A1%80/08_AOP%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%BC%96%E7%A8%8B/AOP%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%BC%96%E7%A8%8B.html","title":"AOP面向切面编程","lang":"zh-CN","frontmatter":{"title":"AOP面向切面编程","icon":"file","order":1,"author":"十七","date":"2023-06-15 周四","category":["初级开发工程师"],"tag":["P5"],"sticky":true,"index":true,"description":"概念 什么是AOP切面编程 AOP切面编程一般可以帮助我们在不修改现有代码的情况下,对程序的功能进行拓展,往往用于实现 日志处理,`权限控制,性能检测,事务控制等 在之前的学习中,我们学习了动态代理 : 静态代理与动态代理 (../07_静态代理与动态代理/静态代理与动态代理.md) AOP实现的原理就是动态代理: 在有接口的情况下,使用JDK动态代理...","head":[["meta",{"property":"og:url","content":"https://me-turing.github.io/CoderNotes/CoderNotes/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/03_Spring%E5%9F%BA%E7%A1%80/08_AOP%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%BC%96%E7%A8%8B/AOP%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%BC%96%E7%A8%8B.html"}],["meta",{"property":"og:title","content":"AOP面向切面编程"}],["meta",{"property":"og:description","content":"概念 什么是AOP切面编程 AOP切面编程一般可以帮助我们在不修改现有代码的情况下,对程序的功能进行拓展,往往用于实现 日志处理,`权限控制,性能检测,事务控制等 在之前的学习中,我们学习了动态代理 : 静态代理与动态代理 (../07_静态代理与动态代理/静态代理与动态代理.md) AOP实现的原理就是动态代理: 在有接口的情况下,使用JDK动态代理..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://me-turing.github.io/CoderNotes/CoderNotes/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-10T02:49:38.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"AOP面向切面编程"}],["meta",{"property":"article:author","content":"十七"}],["meta",{"property":"article:tag","content":"P5"}],["meta",{"property":"article:published_time","content":"2023-06-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-10T02:49:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AOP面向切面编程\\",\\"image\\":[\\"https://me-turing.github.io/CoderNotes/CoderNotes/\\"],\\"datePublished\\":\\"2023-06-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-10T02:49:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"十七\\"}]}"]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[{"level":3,"title":"什么是AOP切面编程","slug":"什么是aop切面编程","link":"#什么是aop切面编程","children":[]},{"level":3,"title":"AOP切面编程的相关术语","slug":"aop切面编程的相关术语","link":"#aop切面编程的相关术语","children":[]}]},{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[{"level":3,"title":"所需依赖","slug":"所需依赖","link":"#所需依赖","children":[]},{"level":3,"title":"Spring配置文件","slug":"spring配置文件","link":"#spring配置文件","children":[]},{"level":3,"title":"接口环境","slug":"接口环境","link":"#接口环境","children":[]}]},{"level":2,"title":"切入点表达式","slug":"切入点表达式","link":"#切入点表达式","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"使用案例","slug":"使用案例","link":"#使用案例","children":[]},{"level":3,"title":"重用切入点表达式","slug":"重用切入点表达式","link":"#重用切入点表达式","children":[]}]},{"level":2,"title":"JoinPoint对象和ProceedingJoinPoint对象","slug":"joinpoint对象和proceedingjoinpoint对象","link":"#joinpoint对象和proceedingjoinpoint对象","children":[{"level":3,"title":"JoinPoint对象","slug":"joinpoint对象","link":"#joinpoint对象","children":[]},{"level":3,"title":"ProceedingJoinPoint对象","slug":"proceedingjoinpoint对象","link":"#proceedingjoinpoint对象","children":[]}]},{"level":2,"title":"通知","slug":"通知","link":"#通知","children":[{"level":3,"title":"@Before 前置通知","slug":"before-前置通知","link":"#before-前置通知","children":[]},{"level":3,"title":"@AfterReturning 返回通知","slug":"afterreturning-返回通知","link":"#afterreturning-返回通知","children":[]},{"level":3,"title":"@AfterThrowing 异常通知","slug":"afterthrowing-异常通知","link":"#afterthrowing-异常通知","children":[]},{"level":3,"title":"@After 后置通知","slug":"after-后置通知","link":"#after-后置通知","children":[]},{"level":3,"title":"@Around 环绕通知","slug":"around-环绕通知","link":"#around-环绕通知","children":[]}]},{"level":2,"title":"通知优先级","slug":"通知优先级","link":"#通知优先级","children":[{"level":3,"title":"@Order 注解","slug":"order-注解","link":"#order-注解","children":[]},{"level":3,"title":"实际意义","slug":"实际意义","link":"#实际意义","children":[]}]},{"level":2,"title":"AOP的完全XML开发","slug":"aop的完全xml开发","link":"#aop的完全xml开发","children":[]},{"level":2,"title":"AOP的完全注解开发","slug":"aop的完全注解开发","link":"#aop的完全注解开发","children":[]},{"level":2,"title":"AOP的通知获取细节","slug":"aop的通知获取细节","link":"#aop的通知获取细节","children":[{"level":3,"title":"JoinPoint接口","slug":"joinpoint接口","link":"#joinpoint接口","children":[]},{"level":3,"title":"方法返回值","slug":"方法返回值","link":"#方法返回值","children":[]},{"level":3,"title":"抛出的异常捕捉","slug":"抛出的异常捕捉","link":"#抛出的异常捕捉","children":[]}]},{"level":2,"title":"AOP对获取bean的影响","slug":"aop对获取bean的影响","link":"#aop对获取bean的影响","children":[{"level":3,"title":"情景一：只有一个bean类","slug":"情景一-只有一个bean类","link":"#情景一-只有一个bean类","children":[]},{"level":3,"title":"情景二：一个接口和一个实现类bean","slug":"情景二-一个接口和一个实现类bean","link":"#情景二-一个接口和一个实现类bean","children":[]},{"level":3,"title":"情景三：一个接口和多个实现类bean","slug":"情景三-一个接口和多个实现类bean","link":"#情景三-一个接口和多个实现类bean","children":[]},{"level":3,"title":"情景四：一个接口和一个实现类bean，并对接口切面【重要】","slug":"情景四-一个接口和一个实现类bean-并对接口切面【重要】","link":"#情景四-一个接口和一个实现类bean-并对接口切面【重要】","children":[]},{"level":3,"title":"情景五：一个bean类，并对其切面【重要】","slug":"情景五-一个bean类-并对其切面【重要】","link":"#情景五-一个bean类-并对其切面【重要】","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"git":{"createdTime":1686904628000,"updatedTime":1696906178000,"contributors":[{"name":"Meturing","email":"2339989978@qq.com","commits":1},{"name":"SEVENTEEN","email":"2339989978@qq.com","commits":1}]},"readingTime":{"minutes":13.99,"words":4196},"filePathRelative":"doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/08_AOP面向切面编程/AOP面向切面编程.md","localizedDate":"2023年6月15日","autoDesc":true,"excerpt":""}');export{e as data};
