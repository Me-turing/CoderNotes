export const data = JSON.parse("{\"key\":\"v-d5620b7a\",\"path\":\"/doc/01_JavaSE%E9%98%B6%E6%AE%B5/C_%E5%BC%80%E5%8F%91%E5%BF%85%E5%A4%87%E5%B7%A5%E5%85%B7/02_Maven/03_Maven%E7%9A%84%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5/Maven%E7%9A%84%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5.html\",\"title\":\"Maven的核心概念\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Maven的核心概念\",\"icon\":\"file\",\"order\":1,\"author\":\"十七\",\"date\":\"2023-06-15 周四\",\"category\":[\"JavaSE阶段\"],\"tag\":[\"Java基础\"],\"sticky\":true,\"index\":true,\"description\":\"4.1 POM Project Object Model：项目对象模型。将Java工程的相关信息封装为对象作为便于操作和管理的模型。使用pom.xml文件描述整个模块的思想 4.2 约定目录结构 Maven项目有自己的一套规范，有默认约定好的目录结构，之所以能够自动化构建项目和管理jar包，完全取决于约定好的设计 约定 > 配置 > 编码 4.3 坐标...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://meturing.gitee.io/coder-notes/coder-notes/doc/01_JavaSE%E9%98%B6%E6%AE%B5/C_%E5%BC%80%E5%8F%91%E5%BF%85%E5%A4%87%E5%B7%A5%E5%85%B7/02_Maven/03_Maven%E7%9A%84%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5/Maven%E7%9A%84%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Maven的核心概念\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"4.1 POM Project Object Model：项目对象模型。将Java工程的相关信息封装为对象作为便于操作和管理的模型。使用pom.xml文件描述整个模块的思想 4.2 约定目录结构 Maven项目有自己的一套规范，有默认约定好的目录结构，之所以能够自动化构建项目和管理jar包，完全取决于约定好的设计 约定 > 配置 > 编码 4.3 坐标...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://meturing.gitee.io/coder-notes/coder-notes/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-15T14:28:44.000Z\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Maven的核心概念\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"十七\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Java基础\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-06-14T16:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-15T14:28:44.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Maven的核心概念\\\",\\\"image\\\":[\\\"https://meturing.gitee.io/coder-notes/coder-notes/\\\"],\\\"datePublished\\\":\\\"2023-06-14T16:00:00.000Z\\\",\\\"dateModified\\\":\\\"2023-06-15T14:28:44.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"十七\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"4.1  POM\",\"slug\":\"_4-1-pom\",\"link\":\"#_4-1-pom\",\"children\":[]},{\"level\":2,\"title\":\"4.2  约定目录结构\",\"slug\":\"_4-2-约定目录结构\",\"link\":\"#_4-2-约定目录结构\",\"children\":[]},{\"level\":2,\"title\":\"4.3  坐标\",\"slug\":\"_4-3-坐标\",\"link\":\"#_4-3-坐标\",\"children\":[]},{\"level\":2,\"title\":\"4.4  依赖管理\",\"slug\":\"_4-4-依赖管理\",\"link\":\"#_4-4-依赖管理\",\"children\":[{\"level\":3,\"title\":\"4.4.1  概念\",\"slug\":\"_4-4-1-概念\",\"link\":\"#_4-4-1-概念\",\"children\":[]},{\"level\":3,\"title\":\"4.4.2  依赖范围\",\"slug\":\"_4-4-2-依赖范围\",\"link\":\"#_4-4-2-依赖范围\",\"children\":[]},{\"level\":3,\"title\":\"4.4.3  依赖的传递性\",\"slug\":\"_4-4-3-依赖的传递性\",\"link\":\"#_4-4-3-依赖的传递性\",\"children\":[]},{\"level\":3,\"title\":\"4.4.5  Jar包冲突\",\"slug\":\"_4-4-5-jar包冲突\",\"link\":\"#_4-4-5-jar包冲突\",\"children\":[]},{\"level\":3,\"title\":\"4.4.6  依赖的排除\",\"slug\":\"_4-4-6-依赖的排除\",\"link\":\"#_4-4-6-依赖的排除\",\"children\":[]}]},{\"level\":2,\"title\":\"4.5  版本统一管理\",\"slug\":\"_4-5-版本统一管理\",\"link\":\"#_4-5-版本统一管理\",\"children\":[{\"level\":3,\"title\":\"4.5.1  在pom.xml中创建自定义标签\",\"slug\":\"_4-5-1-在pom-xml中创建自定义标签\",\"link\":\"#_4-5-1-在pom-xml中创建自定义标签\",\"children\":[]},{\"level\":3,\"title\":\"4.5.2  在指定位置使用标签\",\"slug\":\"_4-5-2-在指定位置使用标签\",\"link\":\"#_4-5-2-在指定位置使用标签\",\"children\":[]}]},{\"level\":2,\"title\":\"4.6  Maven的安全性保障机制\",\"slug\":\"_4-6-maven的安全性保障机制\",\"link\":\"#_4-6-maven的安全性保障机制\",\"children\":[{\"level\":3,\"title\":\"4.6.1   sha1算法\",\"slug\":\"_4-6-1-sha1算法\",\"link\":\"#_4-6-1-sha1算法\",\"children\":[]},{\"level\":3,\"title\":\"4.6.2  哈希碰撞\",\"slug\":\"_4-6-2-哈希碰撞\",\"link\":\"#_4-6-2-哈希碰撞\",\"children\":[]}]},{\"level\":2,\"title\":\"4.6  仓库\",\"slug\":\"_4-6-仓库\",\"link\":\"#_4-6-仓库\",\"children\":[{\"level\":3,\"title\":\"4.6.1  仓库分类\",\"slug\":\"_4-6-1-仓库分类\",\"link\":\"#_4-6-1-仓库分类\",\"children\":[]},{\"level\":3,\"title\":\"4.6.2  仓库中的文件\",\"slug\":\"_4-6-2-仓库中的文件\",\"link\":\"#_4-6-2-仓库中的文件\",\"children\":[]}]},{\"level\":2,\"title\":\"4.7  生命周期\",\"slug\":\"_4-7-生命周期\",\"link\":\"#_4-7-生命周期\",\"children\":[{\"level\":3,\"title\":\"4.7.1  Clean Lifecycle\",\"slug\":\"_4-7-1-clean-lifecycle\",\"link\":\"#_4-7-1-clean-lifecycle\",\"children\":[]},{\"level\":3,\"title\":\"4.7.2  Default Lifecycle\",\"slug\":\"_4-7-2-default-lifecycle\",\"link\":\"#_4-7-2-default-lifecycle\",\"children\":[]},{\"level\":3,\"title\":\"4.7.3  Site Lifecycle\",\"slug\":\"_4-7-3-site-lifecycle\",\"link\":\"#_4-7-3-site-lifecycle\",\"children\":[]}]},{\"level\":2,\"title\":\"4.8  插件和目标\",\"slug\":\"_4-8-插件和目标\",\"link\":\"#_4-8-插件和目标\",\"children\":[]}],\"git\":{\"createdTime\":1686839324000,\"updatedTime\":1686839324000,\"contributors\":[{\"name\":\"Turing\",\"email\":\"2339989978@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":6.52,\"words\":1955},\"filePathRelative\":\"doc/01_JavaSE阶段/C_开发必备工具/02_Maven/03_Maven的核心概念/Maven的核心概念.md\",\"localizedDate\":\"2023年6月15日\",\"autoDesc\":true,\"excerpt\":\"\"}")
