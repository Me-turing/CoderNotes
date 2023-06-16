export const data = JSON.parse("{\"key\":\"v-29dfccd3\",\"path\":\"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/03_%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/04_JQuery/05_%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81%E4%B8%8E%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81%E4%B8%8E%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.html\",\"title\":\"表单验证与正则表达式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"表单验证与正则表达式\",\"icon\":\"file\",\"order\":1,\"author\":\"十七\",\"date\":\"2023-06-15 周四\",\"category\":[\"初级开发工程师\"],\"tag\":[\"P5\"],\"sticky\":true,\"index\":true,\"description\":\"一个简单的登录Demo 实现效果 验证要求 1. 用户名不能为空 2. 用户名长度大于等于6 3. 用户名中不能有数字 4. 密码不少于5位 5. 两次密码必须一致 6. 邮箱格式正确必须有@和. 例如:123456789@qq.com 实现代码 ```html function checkUsername() { var username = $(\\\"...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://meturing.gitee.io/coder-notes/coder-notes/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/03_%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/04_JQuery/05_%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81%E4%B8%8E%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81%E4%B8%8E%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"表单验证与正则表达式\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"一个简单的登录Demo 实现效果 验证要求 1. 用户名不能为空 2. 用户名长度大于等于6 3. 用户名中不能有数字 4. 密码不少于5位 5. 两次密码必须一致 6. 邮箱格式正确必须有@和. 例如:123456789@qq.com 实现代码 ```html function checkUsername() { var username = $(\\\"...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://meturing.gitee.io/coder-notes/coder-notes/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-15T14:28:44.000Z\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"表单验证与正则表达式\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"十七\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"P5\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-06-14T16:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-15T14:28:44.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"表单验证与正则表达式\\\",\\\"image\\\":[\\\"https://meturing.gitee.io/coder-notes/coder-notes/\\\"],\\\"datePublished\\\":\\\"2023-06-14T16:00:00.000Z\\\",\\\"dateModified\\\":\\\"2023-06-15T14:28:44.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"十七\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"一个简单的登录Demo\",\"slug\":\"一个简单的登录demo\",\"link\":\"#一个简单的登录demo\",\"children\":[{\"level\":3,\"title\":\"实现效果\",\"slug\":\"实现效果\",\"link\":\"#实现效果\",\"children\":[]},{\"level\":3,\"title\":\"验证要求\",\"slug\":\"验证要求\",\"link\":\"#验证要求\",\"children\":[]},{\"level\":3,\"title\":\"实现代码\",\"slug\":\"实现代码\",\"link\":\"#实现代码\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}]},{\"level\":2,\"title\":\"正则表达式\",\"slug\":\"正则表达式\",\"link\":\"#正则表达式\",\"children\":[{\"level\":3,\"title\":\"什么是正则表达式\",\"slug\":\"什么是正则表达式\",\"link\":\"#什么是正则表达式\",\"children\":[]},{\"level\":3,\"title\":\"为什么使用正则表达式\",\"slug\":\"为什么使用正则表达式\",\"link\":\"#为什么使用正则表达式\",\"children\":[]},{\"level\":3,\"title\":\"正则表达式举例\",\"slug\":\"正则表达式举例\",\"link\":\"#正则表达式举例\",\"children\":[]},{\"level\":3,\"title\":\"正则表达式的使用\",\"slug\":\"正则表达式的使用\",\"link\":\"#正则表达式的使用\",\"children\":[]}]},{\"level\":2,\"title\":\"使用正则优化表单\",\"slug\":\"使用正则优化表单\",\"link\":\"#使用正则优化表单\",\"children\":[]}],\"git\":{\"createdTime\":1686839324000,\"updatedTime\":1686839324000,\"contributors\":[{\"name\":\"Turing\",\"email\":\"2339989978@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":5.34,\"words\":1602},\"filePathRelative\":\"doc/02_初级开发工程师/01_第一阶段/03_前端技术/04_JQuery/05_表单验证与正则表达式/表单验证与正则表达式.md\",\"localizedDate\":\"2023年6月15日\",\"autoDesc\":true,\"excerpt\":\"\"}")
