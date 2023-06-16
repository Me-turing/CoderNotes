export const data = JSON.parse("{\"key\":\"v-3e31a203\",\"path\":\"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/03_Spring%E5%9F%BA%E7%A1%80/06_%E6%B3%A8%E8%A7%A3%E6%96%B9%E5%BC%8F%E7%AE%A1%E7%90%86Bean/%E6%B3%A8%E8%A7%A3%E6%96%B9%E5%BC%8F%E7%AE%A1%E7%90%86Bean.html\",\"title\":\"注解方式管理Bean\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"注解方式管理Bean\",\"icon\":\"file\",\"order\":1,\"author\":\"十七\",\"date\":\"2023-06-15 周四\",\"category\":[\"初级开发工程师\"],\"tag\":[\"P5\"],\"sticky\":true,\"index\":true,\"description\":\"基于注解的IOC 相关注解 @Component 放在类上,用于标记,告诉spring当前类需要由容器实例化bean并放入容器中 该注解有三个子注解: Controller 用于实例化controller层bean; Service 用于实例化service层bean; Repository 用于实例化持久层bean; 当不确定是哪一层,就用Compo...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://meturing.gitee.io/coder-notes/coder-notes/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/03_Spring%E5%9F%BA%E7%A1%80/06_%E6%B3%A8%E8%A7%A3%E6%96%B9%E5%BC%8F%E7%AE%A1%E7%90%86Bean/%E6%B3%A8%E8%A7%A3%E6%96%B9%E5%BC%8F%E7%AE%A1%E7%90%86Bean.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"注解方式管理Bean\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"基于注解的IOC 相关注解 @Component 放在类上,用于标记,告诉spring当前类需要由容器实例化bean并放入容器中 该注解有三个子注解: Controller 用于实例化controller层bean; Service 用于实例化service层bean; Repository 用于实例化持久层bean; 当不确定是哪一层,就用Compo...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://meturing.gitee.io/coder-notes/coder-notes/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-15T14:28:44.000Z\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"注解方式管理Bean\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"十七\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"P5\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-06-14T16:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-15T14:28:44.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"注解方式管理Bean\\\",\\\"image\\\":[\\\"https://meturing.gitee.io/coder-notes/coder-notes/\\\"],\\\"datePublished\\\":\\\"2023-06-14T16:00:00.000Z\\\",\\\"dateModified\\\":\\\"2023-06-15T14:28:44.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"十七\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"基于注解的IOC\",\"slug\":\"基于注解的ioc\",\"link\":\"#基于注解的ioc\",\"children\":[{\"level\":3,\"title\":\"相关注解\",\"slug\":\"相关注解\",\"link\":\"#相关注解\",\"children\":[]},{\"level\":3,\"title\":\"包扫描\",\"slug\":\"包扫描\",\"link\":\"#包扫描\",\"children\":[]},{\"level\":3,\"title\":\"相关代码\",\"slug\":\"相关代码\",\"link\":\"#相关代码\",\"children\":[]}]},{\"level\":2,\"title\":\"基于注解的DI\",\"slug\":\"基于注解的di\",\"link\":\"#基于注解的di\",\"children\":[{\"level\":3,\"title\":\"环境准备\",\"slug\":\"环境准备\",\"link\":\"#环境准备\",\"children\":[]},{\"level\":3,\"title\":\"Autowired的使用\",\"slug\":\"autowired的使用\",\"link\":\"#autowired的使用\",\"children\":[]},{\"level\":3,\"title\":\"Qualifier的使用\",\"slug\":\"qualifier的使用\",\"link\":\"#qualifier的使用\",\"children\":[]},{\"level\":3,\"title\":\"Resources的使用\",\"slug\":\"resources的使用\",\"link\":\"#resources的使用\",\"children\":[]},{\"level\":3,\"title\":\"Value的使用\",\"slug\":\"value的使用\",\"link\":\"#value的使用\",\"children\":[]},{\"level\":3,\"title\":\"引入外部资源注入\",\"slug\":\"引入外部资源注入\",\"link\":\"#引入外部资源注入\",\"children\":[]},{\"level\":3,\"title\":\"完全使用注解(使用配置类)\",\"slug\":\"完全使用注解-使用配置类\",\"link\":\"#完全使用注解-使用配置类\",\"children\":[]}]}],\"git\":{\"createdTime\":1686839324000,\"updatedTime\":1686839324000,\"contributors\":[{\"name\":\"Turing\",\"email\":\"2339989978@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":5.23,\"words\":1570},\"filePathRelative\":\"doc/02_初级开发工程师/01_第一阶段/05_基础框架/03_Spring基础/06_注解方式管理Bean/注解方式管理Bean.md\",\"localizedDate\":\"2023年6月15日\",\"autoDesc\":true,\"excerpt\":\"\"}")
