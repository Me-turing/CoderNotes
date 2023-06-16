export const data = JSON.parse("{\"key\":\"v-f9f90516\",\"path\":\"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/01_Mybatis%E5%9F%BA%E7%A1%80/04_MyBatis%E6%99%AE%E9%80%9A%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%BC%80%E5%8F%91/MyBatis%E6%99%AE%E9%80%9A%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%BC%80%E5%8F%91.html\",\"title\":\"MyBatis普通模式的开发\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"MyBatis普通模式的开发\",\"icon\":\"file\",\"order\":1,\"author\":\"十七\",\"date\":\"2023-06-15 周四\",\"category\":[\"初级开发工程师\"],\"tag\":[\"P5\"],\"sticky\":true,\"index\":true,\"description\":\"在前面的学习中,我们简单搭建了一个Mybatis的项目环境 基础写法思路 (../02_搭建Mybatis项目环境/搭建Mybatis项目环境.md#基础写法思路) 基于普通模式的开发,也成为传统DAO模式. 简单来讲就是创建对应的接口,然后在接口的实现类中使用SQLSession对象调用select insert delete update 等方法实...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://me-turing.github.io/CoderNotes/CoderNotes/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/01_Mybatis%E5%9F%BA%E7%A1%80/04_MyBatis%E6%99%AE%E9%80%9A%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%BC%80%E5%8F%91/MyBatis%E6%99%AE%E9%80%9A%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%BC%80%E5%8F%91.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"MyBatis普通模式的开发\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"在前面的学习中,我们简单搭建了一个Mybatis的项目环境 基础写法思路 (../02_搭建Mybatis项目环境/搭建Mybatis项目环境.md#基础写法思路) 基于普通模式的开发,也成为传统DAO模式. 简单来讲就是创建对应的接口,然后在接口的实现类中使用SQLSession对象调用select insert delete update 等方法实...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://me-turing.github.io/CoderNotes/CoderNotes/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"MyBatis普通模式的开发\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"十七\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"P5\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-06-14T16:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"MyBatis普通模式的开发\\\",\\\"image\\\":[\\\"https://me-turing.github.io/CoderNotes/CoderNotes/\\\"],\\\"datePublished\\\":\\\"2023-06-14T16:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"十七\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"构建环境\",\"slug\":\"构建环境\",\"link\":\"#构建环境\",\"children\":[]},{\"level\":2,\"title\":\"SQLSession 查询的三种方式\",\"slug\":\"sqlsession-查询的三种方式\",\"link\":\"#sqlsession-查询的三种方式\",\"children\":[{\"level\":3,\"title\":\"返回单个对象\",\"slug\":\"返回单个对象\",\"link\":\"#返回单个对象\",\"children\":[]},{\"level\":3,\"title\":\"返回对象的List集合\",\"slug\":\"返回对象的list集合\",\"link\":\"#返回对象的list集合\",\"children\":[]},{\"level\":3,\"title\":\"返回对象的Map集合\",\"slug\":\"返回对象的map集合\",\"link\":\"#返回对象的map集合\",\"children\":[]}]},{\"level\":2,\"title\":\"SQLSession的参数传递\",\"slug\":\"sqlsession的参数传递\",\"link\":\"#sqlsession的参数传递\",\"children\":[{\"level\":3,\"title\":\"单一参数传递\",\"slug\":\"单一参数传递\",\"link\":\"#单一参数传递\",\"children\":[]},{\"level\":3,\"title\":\"多参数Map传递\",\"slug\":\"多参数map传递\",\"link\":\"#多参数map传递\",\"children\":[]},{\"level\":3,\"title\":\"多参数实体类对象传递\",\"slug\":\"多参数实体类对象传递\",\"link\":\"#多参数实体类对象传递\",\"children\":[]}]},{\"level\":2,\"title\":\"SQLSession实现DML全部操作\",\"slug\":\"sqlsession实现dml全部操作\",\"link\":\"#sqlsession实现dml全部操作\",\"children\":[{\"level\":3,\"title\":\"增加\",\"slug\":\"增加\",\"link\":\"#增加\",\"children\":[]},{\"level\":3,\"title\":\"修改\",\"slug\":\"修改\",\"link\":\"#修改\",\"children\":[]},{\"level\":3,\"title\":\"删除\",\"slug\":\"删除\",\"link\":\"#删除\",\"children\":[]}]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":4.73,\"words\":1418},\"filePathRelative\":\"doc/02_初级开发工程师/01_第一阶段/05_基础框架/01_Mybatis基础/04_MyBatis普通模式的开发/MyBatis普通模式的开发.md\",\"localizedDate\":\"2023年6月15日\",\"autoDesc\":true,\"excerpt\":\"\"}")
