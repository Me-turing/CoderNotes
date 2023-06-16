export const data = JSON.parse("{\"key\":\"v-7533557d\",\"path\":\"/doc/01_JavaSE%E9%98%B6%E6%AE%B5/B_%E8%BF%9B%E9%98%B6/01_%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html\",\"title\":\"异常处理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"异常处理\",\"icon\":\"file\",\"order\":1,\"author\":\"十七\",\"date\":\"2023-06-15 周四\",\"category\":[\"JavaSE阶段\"],\"tag\":[\"Java基础\"],\"sticky\":true,\"index\":true,\"description\":\"前言 为什么需要异常处理 我们首先简单来看一个代码： 在上面的代码中，如果我们输入非int类型的数据时会出现：InputMismatchException 如果输入除数为时会出现：ArithmeticException 异常：Exception 📌在程序的运行过程中，发生了不正常的现象，阻止了程序的运行，我们称之为发生异常。 解决异常处理 我们试着使...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://me-turing.github.io/CoderNotes/CoderNotes/doc/01_JavaSE%E9%98%B6%E6%AE%B5/B_%E8%BF%9B%E9%98%B6/01_%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"异常处理\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"前言 为什么需要异常处理 我们首先简单来看一个代码： 在上面的代码中，如果我们输入非int类型的数据时会出现：InputMismatchException 如果输入除数为时会出现：ArithmeticException 异常：Exception 📌在程序的运行过程中，发生了不正常的现象，阻止了程序的运行，我们称之为发生异常。 解决异常处理 我们试着使...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://me-turing.github.io/CoderNotes/CoderNotes/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"异常处理\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"十七\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Java基础\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-06-14T16:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"异常处理\\\",\\\"image\\\":[\\\"https://me-turing.github.io/CoderNotes/CoderNotes/\\\"],\\\"datePublished\\\":\\\"2023-06-14T16:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"十七\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[{\"level\":3,\"title\":\"为什么需要异常处理\",\"slug\":\"为什么需要异常处理\",\"link\":\"#为什么需要异常处理\",\"children\":[]},{\"level\":3,\"title\":\"解决异常处理\",\"slug\":\"解决异常处理\",\"link\":\"#解决异常处理\",\"children\":[]}]},{\"level\":2,\"title\":\"try-catch\",\"slug\":\"try-catch\",\"link\":\"#try-catch\",\"children\":[{\"level\":3,\"title\":\"代码案例\",\"slug\":\"代码案例\",\"link\":\"#代码案例\",\"children\":[]},{\"level\":3,\"title\":\"执行逻辑\",\"slug\":\"执行逻辑\",\"link\":\"#执行逻辑\",\"children\":[]},{\"level\":3,\"title\":\"catch中处理异常\",\"slug\":\"catch中处理异常\",\"link\":\"#catch中处理异常\",\"children\":[]}]},{\"level\":2,\"title\":\"try-Catch-finally\",\"slug\":\"try-catch-finally\",\"link\":\"#try-catch-finally\",\"children\":[{\"level\":3,\"title\":\"前言\",\"slug\":\"前言-1\",\"link\":\"#前言-1\",\"children\":[]},{\"level\":3,\"title\":\"代码案例\",\"slug\":\"代码案例-1\",\"link\":\"#代码案例-1\",\"children\":[]},{\"level\":3,\"title\":\"执行逻辑\",\"slug\":\"执行逻辑-1\",\"link\":\"#执行逻辑-1\",\"children\":[]},{\"level\":3,\"title\":\"常用操作\",\"slug\":\"常用操作\",\"link\":\"#常用操作\",\"children\":[]}]},{\"level\":2,\"title\":\"多重catch\",\"slug\":\"多重catch\",\"link\":\"#多重catch\",\"children\":[]},{\"level\":2,\"title\":\"异常的分类\",\"slug\":\"异常的分类\",\"link\":\"#异常的分类\",\"children\":[{\"level\":3,\"title\":\"结构层次\",\"slug\":\"结构层次\",\"link\":\"#结构层次\",\"children\":[]},{\"level\":3,\"title\":\"代码案例\",\"slug\":\"代码案例-2\",\"link\":\"#代码案例-2\",\"children\":[]}]},{\"level\":2,\"title\":\"throw与throws\",\"slug\":\"throw与throws\",\"link\":\"#throw与throws\",\"children\":[]},{\"level\":2,\"title\":\"重写与重载异常\",\"slug\":\"重写与重载异常\",\"link\":\"#重写与重载异常\",\"children\":[]},{\"level\":2,\"title\":\"自定义异常\",\"slug\":\"自定义异常\",\"link\":\"#自定义异常\",\"children\":[{\"level\":3,\"title\":\"代码声明\",\"slug\":\"代码声明\",\"link\":\"#代码声明\",\"children\":[]}]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":8.34,\"words\":2501},\"filePathRelative\":\"doc/01_JavaSE阶段/B_进阶/01_异常处理/异常处理.md\",\"localizedDate\":\"2023年6月15日\",\"autoDesc\":true,\"excerpt\":\"\"}")
