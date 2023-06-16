---
title: VMware网络设置
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


## 配置虚拟机软件

右键虚拟机 -> 设置
![](./assets/Pasted_image_20230409134733.png)

检查开启NAT模式
![](./assets/Pasted_image_20230409134754.png)

设置虚拟机网络
![](./assets/Pasted_image_20230409134908.png)

管理员启动
![](./assets/Pasted_image_20230409134944.png)

配置VMnet8链接中的参数,注意子网IP
![](./assets/Pasted_image_20230409135009.png)

此处网关需要设置为与子网IP网段一致
	如子网IP为 `aaa.bbb.c.e`  网段IP应为: `aaa.bbb.c.f`
![](./assets/Pasted_image_20230409135154.png)

配置DHCP
此处起始IP应排除上述配置的子网IP与网关IP
![](./assets/Pasted_image_20230409135410.png)

保存配置

## 配置虚拟机系统

配置虚拟机使用固定IP,方便我们后续在宿主机管理

此处IP地址需要填写上述DHCP池中区间IP
子网掩码与上述虚拟机软件配置一致
默认网关与上述虚拟机软件配置一致
DNS随意填写常用DNA,推荐:`114.114.114.114` `8.8.8.8`
![](./assets/Pasted_image_20230409135713.png)

## 实现效果

宿主机直接链接到虚拟机中的环境配置
![](./assets/Pasted_image_20230409135924.png)