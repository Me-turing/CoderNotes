export const data = JSON.parse("{\"key\":\"v-3f9424e6\",\"path\":\"/CoderNotes/01_JavaSE%E9%98%B6%E6%AE%B5/B_%E8%BF%9B%E9%98%B6/07_JUnit_%E6%B3%A8%E8%A7%A3_%E6%9E%9A%E4%B8%BE/02_%E6%B3%A8%E8%A7%A3/%E6%B3%A8%E8%A7%A3.html\",\"title\":\"注解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"注解\",\"icon\":\"file\",\"order\":1,\"author\":\"十七\",\"date\":\"2023-06-15 周四\",\"category\":[\"JavaSE阶段\"],\"tag\":[\"Java基础\"],\"sticky\":true,\"index\":true,\"description\":\"概念 JDK5.0 新增 --- 注解（Annotation）,也叫元数据 什么是注解 注解其实就是代码里的特殊标记，这些标记可以在编译,类加载,运行时被读取,并执行相应的处理。 通过使用注解,程序员可以在不改变原有逻辑的情况下，在源文件中嵌入一些补充信息。代码分析工具、开发工具和部署工具可以通过这些补充信息进行验证或者进行部署。 使用注解时要在其前面...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://me-turing.github.io/CoderNotes/CoderNotes/CoderNotes/01_JavaSE%E9%98%B6%E6%AE%B5/B_%E8%BF%9B%E9%98%B6/07_JUnit_%E6%B3%A8%E8%A7%A3_%E6%9E%9A%E4%B8%BE/02_%E6%B3%A8%E8%A7%A3/%E6%B3%A8%E8%A7%A3.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"注解\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"概念 JDK5.0 新增 --- 注解（Annotation）,也叫元数据 什么是注解 注解其实就是代码里的特殊标记，这些标记可以在编译,类加载,运行时被读取,并执行相应的处理。 通过使用注解,程序员可以在不改变原有逻辑的情况下，在源文件中嵌入一些补充信息。代码分析工具、开发工具和部署工具可以通过这些补充信息进行验证或者进行部署。 使用注解时要在其前面...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://me-turing.github.io/CoderNotes/CoderNotes/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-16T06:43:34.000Z\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"注解\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"十七\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Java基础\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-06-14T16:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-16T06:43:34.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"注解\\\",\\\"image\\\":[\\\"https://me-turing.github.io/CoderNotes/CoderNotes/\\\"],\\\"datePublished\\\":\\\"2023-06-14T16:00:00.000Z\\\",\\\"dateModified\\\":\\\"2023-06-16T06:43:34.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"十七\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"概念\",\"slug\":\"概念\",\"link\":\"#概念\",\"children\":[{\"level\":3,\"title\":\"什么是注解\",\"slug\":\"什么是注解\",\"link\":\"#什么是注解\",\"children\":[]},{\"level\":3,\"title\":\"注解的重要性\",\"slug\":\"注解的重要性\",\"link\":\"#注解的重要性\",\"children\":[]}]},{\"level\":2,\"title\":\"Junit 注解\",\"slug\":\"junit-注解\",\"link\":\"#junit-注解\",\"children\":[]},{\"level\":2,\"title\":\"文档注解\",\"slug\":\"文档注解\",\"link\":\"#文档注解\",\"children\":[{\"level\":3,\"title\":\"代码案例\",\"slug\":\"代码案例\",\"link\":\"#代码案例\",\"children\":[]},{\"level\":3,\"title\":\"IDEA的javadoc工具的使用\",\"slug\":\"idea的javadoc工具的使用\",\"link\":\"#idea的javadoc工具的使用\",\"children\":[]}]},{\"level\":2,\"title\":\"JDK内置注解\",\"slug\":\"jdk内置注解\",\"link\":\"#jdk内置注解\",\"children\":[{\"level\":3,\"title\":\"@Override\",\"slug\":\"override\",\"link\":\"#override\",\"children\":[]},{\"level\":3,\"title\":\"@Deprecated\",\"slug\":\"deprecated\",\"link\":\"#deprecated\",\"children\":[]},{\"level\":3,\"title\":\"@SuppressWarnings\",\"slug\":\"suppresswarnings\",\"link\":\"#suppresswarnings\",\"children\":[]}]},{\"level\":2,\"title\":\"简化配置文件\",\"slug\":\"简化配置文件\",\"link\":\"#简化配置文件\",\"children\":[{\"level\":3,\"title\":\"在servlet3.0之前的配置\",\"slug\":\"在servlet3-0之前的配置\",\"link\":\"#在servlet3-0之前的配置\",\"children\":[]},{\"level\":3,\"title\":\"servlet3.0之后使用注解\",\"slug\":\"servlet3-0之后使用注解\",\"link\":\"#servlet3-0之后使用注解\",\"children\":[]}]},{\"level\":2,\"title\":\"自定义注解\",\"slug\":\"自定义注解\",\"link\":\"#自定义注解\",\"children\":[{\"level\":3,\"title\":\"创建自定义注解\",\"slug\":\"创建自定义注解\",\"link\":\"#创建自定义注解\",\"children\":[]},{\"level\":3,\"title\":\"可以省略的元素\",\"slug\":\"可以省略的元素\",\"link\":\"#可以省略的元素\",\"children\":[]}]},{\"level\":2,\"title\":\"元注解\",\"slug\":\"元注解\",\"link\":\"#元注解\",\"children\":[{\"level\":3,\"title\":\"@Retention\",\"slug\":\"retention\",\"link\":\"#retention\",\"children\":[]},{\"level\":3,\"title\":\"@Target\",\"slug\":\"target\",\"link\":\"#target\",\"children\":[]},{\"level\":3,\"title\":\"@Documented(很少用）\",\"slug\":\"documented-很少用\",\"link\":\"#documented-很少用\",\"children\":[]},{\"level\":3,\"title\":\"@Inherited(极少用）\",\"slug\":\"inherited-极少用\",\"link\":\"#inherited-极少用\",\"children\":[]}]}],\"git\":{\"createdTime\":1686897814000,\"updatedTime\":1686897814000,\"contributors\":[{\"name\":\"Meturing\",\"email\":\"2339989978@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":5.97,\"words\":1791},\"filePathRelative\":\"CoderNotes/01_JavaSE阶段/B_进阶/07_JUnit_注解_枚举/02_注解/注解.md\",\"localizedDate\":\"2023年6月15日\",\"autoDesc\":true,\"excerpt\":\"\"}")
