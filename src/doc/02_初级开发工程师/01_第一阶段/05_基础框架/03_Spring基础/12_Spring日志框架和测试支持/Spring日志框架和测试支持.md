---
title: Spring日志框架和测试支持
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

## 日志支持

spring5框架自带了通用的日志封装,也可以整合自己的日志
1. spring移除了 LOG4jConfigListener,官方建议使用log4j2
2. spring5整合log4j2

导入相关依赖
```XML
<!--log4j2 依赖-->
<dependency>
	<groupId>org.apache.logging.log4j</groupId>
	<artifactId>log4j-core</artifactId>
	<version>2.14.0</version>
</dependency>
<!--log4j-slf4j-impl 包含了log4j2 依赖-->
<dependency>
	<groupId>org.apache.logging.log4j</groupId>
	<artifactId>log4j-slf4j-impl</artifactId>
	<version>2.14.0</version>
	<scope>test</scope>
</dependency>
```

添加XML配置文件
```XML
<?xml version="1.0" encoding="UTF-8"?>
<Configuration status="DEBUG">
	<Appenders>
		<Console name="Console" target="SYSTEM_OUT">
			<PatternLayout pattern="%d{YYYY-MM-dd HH:mm:ss} [%t] %-5p %c{1}:%L - %msg%n" />
		</Console>
	</Appenders>
	<Loggers>
		<Root level="debug">
		<AppenderRef ref="Console" />
		</Root>
	</Loggers>
</Configuration>
```

## 测试支持

### 整合Junit4

修改pom.xml
```XML
<!--Junit4单元测试-->
<dependency>
	<groupId>junit</groupId>
	<artifactId>junit</artifactId>
	<version>4.13.1</version>
	<scope>test</scope>
</dependency>
<!--spring test测试支持包-->
<dependency>
	<groupId>org.springframework</groupId>
	<artifactId>spring-test</artifactId>
	<version>5.3.5</version>
	<scope>test</scope>
</dependency>
```

创建测试类
```Java
@RunWith(SpringJUnit4ClassRunner.class)// 指定测试支持类
@ContextConfiguration("classpath:applicationContext.xml")// 指定核心配置文件位置
public class Test2 {
	@Autowired // 注入要获取的bean
	private  AccountService accountService;
	@Test()
	public void testTransaction(){
		int rows = accountService.transMoney(1, 2, 100);
		System.out.println(rows);
	}
}
```

### 整合Junit5

修改Pom.xml
```XMl
<dependency>
	<groupId>org.junit.jupiter</groupId>
	<artifactId>junit-jupiter-api</artifactId>
	<version>5.7.0</version>
	<scope>test</scope>
</dependency>
```

方式一 : 使用复合注解
```Java
// 使用复合注解
@SpringJUnitConfig(locations = "classpath:applicationContext.xml")
public class Test3 {
	@Autowired // 注入要获取的bean
	private  AccountService accountService;
	@Test
	public void testTransaction(){
		int rows = accountService.transMoney(1, 2, 100);
		System.out.println(rows);
	}
}
```

方式二 : 使用ExtentWith和ContextConfiguration注解
```Java
@ExtendWith(SpringExtension.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class Test3 {
	@Autowired // 注入要获取的bean
	private  AccountService accountService;
	@Test
	public void testTransaction(){
		int rows = accountService.transMoney(1, 2, 100);
		System.out.println(rows);
	}
}
```