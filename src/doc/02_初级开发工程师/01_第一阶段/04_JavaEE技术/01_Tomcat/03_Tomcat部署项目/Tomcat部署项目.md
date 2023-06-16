---
title: Tomcat部署项目
icon: file
order: 1
author: 十七
date: 2023-06-15 周四
category:
	- 初级开发工程师
tag:
	- P5
sticky: true
index: true
---



## 方式一 : 在webapps目录中

1. 在Tomcat的webapps中创建一个我们自己的项目目录
    ![](./image/image_UGsx_bPFSV.png)
2.  在自己的myProject中放入一下静态资源
    ![](./image/image_7h9HkeQhfY.png)
3.  启动Tomcat,访问对应的资源
    ![](./image/image_xSz5lOF5D_.png)

运行原理

![](./image/image_2wRn-VgR4h.png)

## 方式二 : 在其他目录中

在localhost中添加配置文件

```xml
<Context path="/myProject" docBase="d:/myProject"/>
```

建议配置文件名和项目名相同

运行原理

![](./image/image_w0kPAllbOc.png)
