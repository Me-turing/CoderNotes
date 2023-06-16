export const data = JSON.parse("{\"key\":\"v-2d7f010a\",\"path\":\"/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/01_Mybatis%E5%9F%BA%E7%A1%80/05_Mybatis%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%BC%80%E5%8F%91/Mybatis%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%BC%80%E5%8F%91.html\",\"title\":\"Mybatis代理模式的开发\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Mybatis代理模式的开发\",\"icon\":\"file\",\"order\":1,\"author\":\"十七\",\"date\":\"2023-06-15 周四\",\"category\":[\"初级开发工程师\"],\"tag\":[\"P5\"],\"sticky\":true,\"index\":true,\"description\":\"为什么要基于代理模式开发 前面已经使用MyBatis完成了对Emp表的CRUD操作，都是由SqlSession调用自身方法发送SQL命令并得到结果的，实现了MyBatis的入门. 但是这种开发形式存在以下缺点: 1. 不管是selectList()、`selectOne()、selectMap()，都是通过SQLSession对象`的API完成增删改查...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://me-turing.github.io/CoderNotes/CoderNotes/CoderNotes/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/01_Mybatis%E5%9F%BA%E7%A1%80/05_Mybatis%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%BC%80%E5%8F%91/Mybatis%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%BC%80%E5%8F%91.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Mybatis代理模式的开发\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"为什么要基于代理模式开发 前面已经使用MyBatis完成了对Emp表的CRUD操作，都是由SqlSession调用自身方法发送SQL命令并得到结果的，实现了MyBatis的入门. 但是这种开发形式存在以下缺点: 1. 不管是selectList()、`selectOne()、selectMap()，都是通过SQLSession对象`的API完成增删改查...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://me-turing.github.io/CoderNotes/CoderNotes/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-16T06:43:34.000Z\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Mybatis代理模式的开发\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"十七\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"P5\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-06-14T16:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-16T06:43:34.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Mybatis代理模式的开发\\\",\\\"image\\\":[\\\"https://me-turing.github.io/CoderNotes/CoderNotes/\\\"],\\\"datePublished\\\":\\\"2023-06-14T16:00:00.000Z\\\",\\\"dateModified\\\":\\\"2023-06-16T06:43:34.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"十七\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"为什么要基于代理模式开发\",\"slug\":\"为什么要基于代理模式开发\",\"link\":\"#为什么要基于代理模式开发\",\"children\":[]},{\"level\":2,\"title\":\"构建项目结构\",\"slug\":\"构建项目结构\",\"link\":\"#构建项目结构\",\"children\":[{\"level\":3,\"title\":\"项目环境\",\"slug\":\"项目环境\",\"link\":\"#项目环境\",\"children\":[]},{\"level\":3,\"title\":\"简单的Demo\",\"slug\":\"简单的demo\",\"link\":\"#简单的demo\",\"children\":[]}]},{\"level\":2,\"title\":\"代理模式浅析\",\"slug\":\"代理模式浅析\",\"link\":\"#代理模式浅析\",\"children\":[]},{\"level\":2,\"title\":\"代理模式基本开发\",\"slug\":\"代理模式基本开发\",\"link\":\"#代理模式基本开发\",\"children\":[{\"level\":3,\"title\":\"参数传递问题\",\"slug\":\"参数传递问题\",\"link\":\"#参数传递问题\",\"children\":[]},{\"level\":3,\"title\":\"模糊查询\",\"slug\":\"模糊查询\",\"link\":\"#模糊查询\",\"children\":[]},{\"level\":3,\"title\":\"自增主键回填\",\"slug\":\"自增主键回填\",\"link\":\"#自增主键回填\",\"children\":[]},{\"level\":3,\"title\":\"实现DML操作\",\"slug\":\"实现dml操作\",\"link\":\"#实现dml操作\",\"children\":[]}]}],\"git\":{\"createdTime\":1686897814000,\"updatedTime\":1686897814000,\"contributors\":[{\"name\":\"Meturing\",\"email\":\"2339989978@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":10.47,\"words\":3141},\"filePathRelative\":\"CoderNotes/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/05_Mybatis代理模式的开发/Mybatis代理模式的开发.md\",\"localizedDate\":\"2023年6月15日\",\"autoDesc\":true,\"excerpt\":\"\"}")
