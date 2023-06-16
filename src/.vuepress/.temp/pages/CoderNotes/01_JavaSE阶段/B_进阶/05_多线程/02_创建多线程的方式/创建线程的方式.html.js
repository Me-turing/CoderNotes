export const data = JSON.parse("{\"key\":\"v-676d4832\",\"path\":\"/CoderNotes/01_JavaSE%E9%98%B6%E6%AE%B5/B_%E8%BF%9B%E9%98%B6/05_%E5%A4%9A%E7%BA%BF%E7%A8%8B/02_%E5%88%9B%E5%BB%BA%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%9A%84%E6%96%B9%E5%BC%8F/%E5%88%9B%E5%BB%BA%E7%BA%BF%E7%A8%8B%E7%9A%84%E6%96%B9%E5%BC%8F.html\",\"title\":\"创建线程的方式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"创建线程的方式\",\"icon\":\"file\",\"order\":1,\"author\":\"十七\",\"date\":\"2023-06-15 周四\",\"category\":[\"JavaSE阶段\"],\"tag\":[\"Java基础\"],\"sticky\":true,\"index\":true,\"description\":\"继承Thread类 步骤 ① 继承Thread类 ② 重写run方法 ③ 执行start方法 一个简单的Demo 我们可以看到：在执行多线程之前，我们的程序还是单线程执行的，将红色代码块全部执行完毕，当执行到绿色代码块时，并不会等待执行完毕，而是和橙色代码块一起并发执行。 给线程设置名字 Thread.currentThread().setName(\\\"...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://me-turing.github.io/CoderNotes/CoderNotes/CoderNotes/01_JavaSE%E9%98%B6%E6%AE%B5/B_%E8%BF%9B%E9%98%B6/05_%E5%A4%9A%E7%BA%BF%E7%A8%8B/02_%E5%88%9B%E5%BB%BA%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%9A%84%E6%96%B9%E5%BC%8F/%E5%88%9B%E5%BB%BA%E7%BA%BF%E7%A8%8B%E7%9A%84%E6%96%B9%E5%BC%8F.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"创建线程的方式\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"继承Thread类 步骤 ① 继承Thread类 ② 重写run方法 ③ 执行start方法 一个简单的Demo 我们可以看到：在执行多线程之前，我们的程序还是单线程执行的，将红色代码块全部执行完毕，当执行到绿色代码块时，并不会等待执行完毕，而是和橙色代码块一起并发执行。 给线程设置名字 Thread.currentThread().setName(\\\"...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://me-turing.github.io/CoderNotes/CoderNotes/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-16T06:43:34.000Z\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"创建线程的方式\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"十七\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Java基础\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-06-14T16:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-16T06:43:34.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"创建线程的方式\\\",\\\"image\\\":[\\\"https://me-turing.github.io/CoderNotes/CoderNotes/\\\"],\\\"datePublished\\\":\\\"2023-06-14T16:00:00.000Z\\\",\\\"dateModified\\\":\\\"2023-06-16T06:43:34.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"十七\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"继承Thread类\",\"slug\":\"继承thread类\",\"link\":\"#继承thread类\",\"children\":[{\"level\":3,\"title\":\"步骤\",\"slug\":\"步骤\",\"link\":\"#步骤\",\"children\":[]},{\"level\":3,\"title\":\"一个简单的Demo\",\"slug\":\"一个简单的demo\",\"link\":\"#一个简单的demo\",\"children\":[]},{\"level\":3,\"title\":\"给线程设置名字\",\"slug\":\"给线程设置名字\",\"link\":\"#给线程设置名字\",\"children\":[]},{\"level\":3,\"title\":\"模拟卖票\",\"slug\":\"模拟卖票\",\"link\":\"#模拟卖票\",\"children\":[]}]},{\"level\":2,\"title\":\"实现Runnable接口\",\"slug\":\"实现runnable接口\",\"link\":\"#实现runnable接口\",\"children\":[{\"level\":3,\"title\":\"步骤\",\"slug\":\"步骤-1\",\"link\":\"#步骤-1\",\"children\":[]},{\"level\":3,\"title\":\"一个简单的Demo\",\"slug\":\"一个简单的demo-1\",\"link\":\"#一个简单的demo-1\",\"children\":[]},{\"level\":3,\"title\":\"模拟卖票\",\"slug\":\"模拟卖票-1\",\"link\":\"#模拟卖票-1\",\"children\":[]}]},{\"level\":2,\"title\":\"实现Callable接口\",\"slug\":\"实现callable接口\",\"link\":\"#实现callable接口\",\"children\":[{\"level\":3,\"title\":\"优点\",\"slug\":\"优点\",\"link\":\"#优点\",\"children\":[]},{\"level\":3,\"title\":\"步骤\",\"slug\":\"步骤-2\",\"link\":\"#步骤-2\",\"children\":[]},{\"level\":3,\"title\":\"一个简单的Demo\",\"slug\":\"一个简单的demo-2\",\"link\":\"#一个简单的demo-2\",\"children\":[]}]}],\"git\":{\"createdTime\":1686897814000,\"updatedTime\":1686897814000,\"contributors\":[{\"name\":\"Meturing\",\"email\":\"2339989978@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":4.17,\"words\":1252},\"filePathRelative\":\"CoderNotes/01_JavaSE阶段/B_进阶/05_多线程/02_创建多线程的方式/创建线程的方式.md\",\"localizedDate\":\"2023年6月15日\",\"autoDesc\":true,\"excerpt\":\"\"}")
