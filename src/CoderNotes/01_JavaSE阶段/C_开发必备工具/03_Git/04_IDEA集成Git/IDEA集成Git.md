---
title: IDEA集成Git
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


## IDEA集成Git

### 配置Git程序

![](./image/image_22_UUnYCQq7gQ.jpeg)

![](./image/image_23_waPh84kpP7.jpeg)

### 初始化本地库

![](./image/image_24_zumZec0Mnz.jpeg)

![](./image/image_25_7TheA9htP4.jpeg)

### 添加到暂存区

![](./image/image_26_h-TU2bWeU6.jpeg)

### 提交到本地库

![](./image/image_27_ubDD6NDEg_.jpeg)

![](./image/image_28_IV3jKfVRV_.jpeg)

### 创建分支

![](./image/image_29_dXEupNIkfy.jpeg)

![](./image/image_30_w5pR39qRsP.jpeg)

![](./image/image_31_357_Qt19Np.jpeg)

### 切换分支

在IDEA窗口的右下角

![](./image/image_32_srOUPc2LSd.jpeg)

### 合并分支

![](./image/image_33_VkFdLWcXBk.jpeg)

### 解决冲突

在和远程库交互过程中也有可能发生冲突，因为解决办法一样，所以这里按照分支操作过程中产生的冲突来演示。

#### 冲突的产生

仍然是同一个文件在同一个位置有不同内容。

![](./image/image_34_GSH2RvVCH3.jpeg)

![](./image/image_35_KMeRIW-_IE.jpeg)

#### 合并分支

![](./image/image_36_IMXR47M6FM.jpeg)

#### 看到冲突提示

![](./image/image_37_VErAOmHpZa.jpeg)

这里可以直接点“Accept Yours”或者“Accept Theirs”来解决冲突。这代表完全使用我们的内容或完全使用他们的内容。

如果我们想要详细修改冲突内容则点击Close。此时IDEA会提示Resolve

![](./image/image_38_X8P_0qFLNl.jpeg)

#### 冲突的表现

![](./image/image_39_POwUN3PY8l.jpeg)

#### 点击Resolve

![](./image/image_40_mivW5ALGDD.jpeg)

#### 点击Merge...

![](./image/image_41_V4Ni1ty-wN.jpeg)

根据需要调整完成后点击“Save changes and finish merging”

![](./image/image_42_hWuHUI055s.jpeg)

然后提交到本地库就好啦！

![](./image/image_43_LdCqujaAKV.jpeg)

## 在IDEA中连接GitHub

### 保存GitHub账号

![](./image/image_44_PJ1M_BAeRm.jpeg)

![](./image/image_45_eQYhLGett_.jpeg)

### 分享工程到GitHub

![](./image/image_46_QGugKhebmr.jpeg)

![](./image/image_47_azsNDOlNkZ.jpeg)

![](./image/image_48_W2UBi4-73u.jpeg)

### Clone

![](./image/image_49_JO2sw25XDg.jpeg)

![](./image/image_50_Ila37dQqOe.jpeg)

![](./image/image_51_Z94iBeVom3.jpeg)

![](./image/image_52_PS8bzYGMVM.jpeg)

### Push

![](./image/image_53_vpvk_oKVkK.jpeg)

### Pull

![](./image/image_54_zAEe30x8Ho.jpeg)

![](./image/image_55_gj57GfpCpb.jpeg)
