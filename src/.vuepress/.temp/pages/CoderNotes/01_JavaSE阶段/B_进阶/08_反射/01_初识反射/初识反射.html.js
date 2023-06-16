export const data = JSON.parse("{\"key\":\"v-1ca4bbc2\",\"path\":\"/CoderNotes/01_JavaSE%E9%98%B6%E6%AE%B5/B_%E8%BF%9B%E9%98%B6/08_%E5%8F%8D%E5%B0%84/01_%E5%88%9D%E8%AF%86%E5%8F%8D%E5%B0%84/%E5%88%9D%E8%AF%86%E5%8F%8D%E5%B0%84.html\",\"title\":\"初识反射\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"初识反射\",\"icon\":\"file\",\"order\":1,\"author\":\"十七\",\"date\":\"2023-06-15 周四\",\"category\":[\"JavaSE阶段\"],\"tag\":[\"Java基础\"],\"sticky\":true,\"index\":true,\"description\":\"为什么用反射 优缺点 1. 优点:主要是其动态性 1.反射和new 都能创建用户对象,并且调用里面的方法,但是反射是针对字符串编程,new是针对实体类编程; 2.可以使框架更灵活; 3.可以深入到类的内部结构,去做一些操作。; 2. 缺点:主要是性能损失 案例 常用的调用方法 尝试通过多态优化代码 利用反射优化代码 反射的概念 概念 JAVA反射机制是...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://me-turing.github.io/CoderNotes/CoderNotes/CoderNotes/01_JavaSE%E9%98%B6%E6%AE%B5/B_%E8%BF%9B%E9%98%B6/08_%E5%8F%8D%E5%B0%84/01_%E5%88%9D%E8%AF%86%E5%8F%8D%E5%B0%84/%E5%88%9D%E8%AF%86%E5%8F%8D%E5%B0%84.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"初识反射\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"为什么用反射 优缺点 1. 优点:主要是其动态性 1.反射和new 都能创建用户对象,并且调用里面的方法,但是反射是针对字符串编程,new是针对实体类编程; 2.可以使框架更灵活; 3.可以深入到类的内部结构,去做一些操作。; 2. 缺点:主要是性能损失 案例 常用的调用方法 尝试通过多态优化代码 利用反射优化代码 反射的概念 概念 JAVA反射机制是...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-16T06:43:34.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"十七\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Java基础\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-06-14T16:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-16T06:43:34.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"初识反射\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-06-14T16:00:00.000Z\\\",\\\"dateModified\\\":\\\"2023-06-16T06:43:34.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"十七\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"为什么用反射\",\"slug\":\"为什么用反射\",\"link\":\"#为什么用反射\",\"children\":[{\"level\":3,\"title\":\"优缺点\",\"slug\":\"优缺点\",\"link\":\"#优缺点\",\"children\":[]},{\"level\":3,\"title\":\"案例\",\"slug\":\"案例\",\"link\":\"#案例\",\"children\":[]}]},{\"level\":2,\"title\":\"反射的概念\",\"slug\":\"反射的概念\",\"link\":\"#反射的概念\",\"children\":[{\"level\":3,\"title\":\"概念\",\"slug\":\"概念\",\"link\":\"#概念\",\"children\":[]},{\"level\":3,\"title\":\"动态语音与静态语音\",\"slug\":\"动态语音与静态语音\",\"link\":\"#动态语音与静态语音\",\"children\":[]}]},{\"level\":2,\"title\":\"获取字节码对象\",\"slug\":\"获取字节码对象\",\"link\":\"#获取字节码对象\",\"children\":[{\"level\":3,\"title\":\"API\",\"slug\":\"api\",\"link\":\"#api\",\"children\":[]},{\"level\":3,\"title\":\"准备素材类\",\"slug\":\"准备素材类\",\"link\":\"#准备素材类\",\"children\":[]},{\"level\":3,\"title\":\"方式一: 通过对象获取\",\"slug\":\"方式一-通过对象获取\",\"link\":\"#方式一-通过对象获取\",\"children\":[]},{\"level\":3,\"title\":\"方式二: 通过内置.class属性获取\",\"slug\":\"方式二-通过内置-class属性获取\",\"link\":\"#方式二-通过内置-class属性获取\",\"children\":[]},{\"level\":3,\"title\":\"方式三: 通过字节码包名获取[推荐]\",\"slug\":\"方式三-通过字节码包名获取-推荐\",\"link\":\"#方式三-通过字节码包名获取-推荐\",\"children\":[]},{\"level\":3,\"title\":\"方式三: 通过类加载器获取\",\"slug\":\"方式三-通过类加载器获取\",\"link\":\"#方式三-通过类加载器获取\",\"children\":[]}]},{\"level\":2,\"title\":\"Class类的应用\",\"slug\":\"class类的应用\",\"link\":\"#class类的应用\",\"children\":[]}],\"git\":{\"createdTime\":1686897814000,\"updatedTime\":1686897814000,\"contributors\":[{\"name\":\"Meturing\",\"email\":\"2339989978@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":4.99,\"words\":1496},\"filePathRelative\":\"CoderNotes/01_JavaSE阶段/B_进阶/08_反射/01_初识反射/初识反射.md\",\"localizedDate\":\"2023年6月15日\",\"autoDesc\":true,\"excerpt\":\"\"}")
