---
title: SpringBoot单元测试
icon: file
order: 1
author: 十七
date: 2023-07-18 周二
category:
	- 初级开发工程师
tag:
	- P5
sticky: true
index: true
---

springboot 2.2.0开始引入Junit5作为单元测试的默认库,JUnit5和之前的版本有很大的不同,由单个子项目的几个不同模块组成:
- `JUnit Platform`是在JVM上启动测试框架的技术,不仅支持Junit自己的测试引擎,其他的测试引擎也可以
- `JUnit Jupiter` 提供了Junit5的最新的编程模型,是Junit5 的核心,内部包含了一个测试引擎,用于在Junit Platform上运行
- `JUnit Vintager`  提供了兼容Junit4/3 的测试引擎
