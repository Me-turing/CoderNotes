---
title: SpringBoot项目配置
icon: file
order: 1
author: 十七
date: 2023-07-04 周二
category:
	- 初级开发工程师
tag:
	- P5
sticky: true
index: true
---

在前面的学习中,我们知道`spring-boot-starter-parent`依赖中对于SpringBoot工程的一些配置文件进行了初始化的设定:

![](assets/image-20230704141012629.png)

我们看到SpringBoot会默认读取项目下名字为 `application开头` 的  `yml` / `yaml` / `properties` 配置文件

所以我们可以通过这些配置文件对SpringBoot默认初始化的一些参数进行自定义的设定,如 `端口号`/ `项目路径` / `数据源` 等

## SpringBoot可配置参数

spring官方为我们提供了可配置参数的API文档 :  [Spring官方配置文档](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#appendix.application-properties)

![](assets/image-20230704160226041.png)

## application配置文件

例如,在Spring官方配置中提供了对接口以及项目上下文的配置参考如下: 

![](assets/image-20230704163857074.png)
![](assets/image-20230704163917940.png)

我们接下来将通过不同的配置文件类型来演示该选项的配置

### 两种类型的配置文件

#### properties配置文件


创建 application.properties 文件

![](assets/image-20230704164044923.png)

`.properties文件`为`key=value`的形式,Spring官方列举的参数均为properties文件的key,我们直接配置他的value值即可

代码如下:

```properties
server.port=8081
server.servlet.context-path=/springboot02
```

> 注意: 在配置上下文路径时,我们需要以`/`开头但是不能以`/`结尾

#### yml配置文件

创建application.yml文件

![](assets/image-20230704164726832.png)

需要注意的是,`.yml`文件的语法与`.properties`文件有所不同:
1. 在`.properties`文件中,一个`.`表示层级,而在`.yml`中层级结束需要用`:`,且下一个层级需要与上一个层级多两个空格
2. 在`.properties`文件中我们是直接`key=value`的形式,在`.yml`中需要是`最低级: value`的形式(注意冒号后应该有空格)
3. `.yml`对大小写敏感 且 相同的部分只出现一次 

![](assets/image-20230704165523850.png)

语法如下:
```yml
server:
  port: 8082
  servlet:
    context-path: /springboot02
```

##### 存储自定义数据

普通数据类型
```yml
server:
  port: 8082
```

配置对象类型数据
```yml
person:  
  name: zs  
  age: 18  
  sex: 男

#或者写成json格式
person2: {name: ls,age: 12,sex: 男}
```

配置数组类型
```yml
number1:
  - 1
  - 2
  - 3
  - 4

#或者
number2: [1,2,3,4]
```

### application配置文件的优先级

#### 同级目录下

1. 如果在同级目录下同时存在`.yml`文件与`.properties`文件,则优先读取`.properties`文件,然后再读取`.yml`文件
2. 如果同一个属性两个文件都存在,则默认以优先级最高的为准,优先级低的属性不会对前面的属性进行覆盖

#### 不同目录下

##### 允许存放的位置

配置文件允许存放在以下位置:

当前项目根目录中

##### 优先级





## bootstrap配置文件


## SpringBoot项目结构

