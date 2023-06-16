---
title: Obsidian双向链接
icon: file
order: 1
author: 十七
date: 2023-06-15 周四
category:
	- JavaSE阶段
tag:
	- Java基础
sticky: true
index: true
---

# 了解双向链接

# 语法

## 引入链接
![](../assets/Pasted_image_20230325233518.png)
``` txt
	-  链接一个文章 [[02_Markdown语法]]
	-  链接到文章的标题 [[02_Markdown语法#2. 使用Markdown]]
	-  链接到文章的块[[02_Markdown语法#^f261c0]]
		注意块的编号是不能修改的,需要注意一致性
		我们可以手动创建自定义的块编码
	-  链接到文章的字 [[02_Markdown语法#^1d499b|使用]]
```

## 嵌入块

![](../assets/Pasted_image_20230325233542.png)
``` txt
	嵌入内容:   ![[02_Markdown语法#^c83780|嵌入]]
```

# 使用

创建目录页,将目录页连接到具体的知识页面,这样建立了完整的链接
![](../assets/关系图1.png)
![](../assets/关系图.png)