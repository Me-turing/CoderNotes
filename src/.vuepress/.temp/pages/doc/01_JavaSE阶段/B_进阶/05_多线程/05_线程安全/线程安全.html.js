export const data = JSON.parse("{\"key\":\"v-33b050de\",\"path\":\"/doc/01_JavaSE%E9%98%B6%E6%AE%B5/B_%E8%BF%9B%E9%98%B6/05_%E5%A4%9A%E7%BA%BF%E7%A8%8B/05_%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8/%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8.html\",\"title\":\"线程安全\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"线程安全\",\"icon\":\"file\",\"order\":1,\"author\":\"十七\",\"date\":\"2023-06-15 周四\",\"category\":[\"JavaSE阶段\"],\"tag\":[\"Java基础\"],\"sticky\":true,\"index\":true,\"description\":\"由于多线程的特性，由于多个线程互相抢占资源，可能会出现资源不可控的现象： 比如：抢票软件出现了 重票，错票。主要就是：多个线程，在争抢资源的过程中，导致共享的资源出现问题。一个线程还没执行完，另一个线程就参与进来了，开始争抢。 为此，我们需要对线程进行同步操作，也就是加锁。 同步代码块 语法 synchronized (同步监视器){} 代码 关于同步...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://meturing.gitee.io/coder-notes/coder-notes/doc/01_JavaSE%E9%98%B6%E6%AE%B5/B_%E8%BF%9B%E9%98%B6/05_%E5%A4%9A%E7%BA%BF%E7%A8%8B/05_%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8/%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"线程安全\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"由于多线程的特性，由于多个线程互相抢占资源，可能会出现资源不可控的现象： 比如：抢票软件出现了 重票，错票。主要就是：多个线程，在争抢资源的过程中，导致共享的资源出现问题。一个线程还没执行完，另一个线程就参与进来了，开始争抢。 为此，我们需要对线程进行同步操作，也就是加锁。 同步代码块 语法 synchronized (同步监视器){} 代码 关于同步...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://meturing.gitee.io/coder-notes/coder-notes/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-15T14:28:44.000Z\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"线程安全\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"十七\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Java基础\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-06-14T16:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-15T14:28:44.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"线程安全\\\",\\\"image\\\":[\\\"https://meturing.gitee.io/coder-notes/coder-notes/\\\"],\\\"datePublished\\\":\\\"2023-06-14T16:00:00.000Z\\\",\\\"dateModified\\\":\\\"2023-06-15T14:28:44.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"十七\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"同步代码块\",\"slug\":\"同步代码块\",\"link\":\"#同步代码块\",\"children\":[{\"level\":3,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]},{\"level\":3,\"title\":\"代码\",\"slug\":\"代码\",\"link\":\"#代码\",\"children\":[]},{\"level\":3,\"title\":\"关于同步监视器\",\"slug\":\"关于同步监视器\",\"link\":\"#关于同步监视器\",\"children\":[]},{\"level\":3,\"title\":\"同步方法\",\"slug\":\"同步方法\",\"link\":\"#同步方法\",\"children\":[]},{\"level\":3,\"title\":\"Lock锁\",\"slug\":\"lock锁\",\"link\":\"#lock锁\",\"children\":[]},{\"level\":3,\"title\":\"线程同步的优缺点\",\"slug\":\"线程同步的优缺点\",\"link\":\"#线程同步的优缺点\",\"children\":[]}]}],\"git\":{\"createdTime\":1686839324000,\"updatedTime\":1686839324000,\"contributors\":[{\"name\":\"Turing\",\"email\":\"2339989978@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":7.99,\"words\":2396},\"filePathRelative\":\"doc/01_JavaSE阶段/B_进阶/05_多线程/05_线程安全/线程安全.md\",\"localizedDate\":\"2023年6月15日\",\"autoDesc\":true,\"excerpt\":\"\"}")
