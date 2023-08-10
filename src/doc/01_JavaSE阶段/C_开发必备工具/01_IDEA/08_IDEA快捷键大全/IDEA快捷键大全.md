---
title: IDEA快捷键大全
icon: file
order: 1
author: 十七
date: 2023-08-08 周二
category:
    - 初级开发工程师
tag:
    - P5
sticky: true
index: true
---

本文参考了 IntelliJ IDEA 的官网，列举了IntelliJ IDEA（Windows 版）的所有快捷键。并在此基础上，为 90%
以上的快捷键提供了动图演示，能够直观的看到操作效果。

该快捷键共分 16 种，可以方便的按各类查找自己需要的快捷键~~

## 构建/编译

### Ctrl + F9 ：构建项目

> 该快捷键，等同于菜单【Build】—>【Build Project】

![](assets/image-20230808095256589.png)

执行该命令后，IntelliJ IDEA 会编译项目中所有类，并将编译结果输出到`out`目录中。IntelliJ IDEA 支持增量构建，会在上次构建的基础上，仅编译修改的类。

![](assets/image-20230808095311091.jpeg)

### Ctrl + Shift + F9 ：重新编译当前类

> 该快捷键，等同于菜单【Build】—>【Recompile ‘class name’】

![](assets/image-20230808095348740.png)

在IntelliJ IDEA 中打开要编译的类，执行该命令会编译当前类。

![](assets/image-20230808095401056.jpeg)

## 文本编辑

### Ctrl + X：剪切

剪切选中文本，若未选中则剪切当前行。

![](assets/image-20230808095524692.jpeg)

### Ctrl + C：复制

复制选中文本，若未选中则复制当前行。

### Ctrl + V：粘贴

### Ctrl + Alt + Shift + V：粘贴为纯文本

### Ctrl + Shift + V：从历史选择粘贴

从历史剪粘版中选择要粘贴的内容。

![](assets/2023-08-08-10-12-605.gif)

### Ctrl + D：复制行

复制光标所在行。

![](assets/230808105338640.gif)

### Ctrl + Shift + C：复制文件路径

复制选中文件所在路径。

![](assets/2308081058526401.gif)

### Ctrl + Alt + Shift + C：复制引用

复制包的路径，或者类的名称。

![](assets/640.gif)

### Ctrl + S：保存全部

### Ctrl + Z：撤销

撤销上一步操作内容。

### Ctrl + Shift + Z：重做

恢复上一步撤销内容。

![](assets/230808105923640.gif)

### Tab：缩进

### Shift + Tabl：取消缩进

![](assets/230808110046640.gif)

### Ctrl + Alt + I：自动缩进行

自动缩进至规范位置。

![](assets/230808110107640.gif)

### Shift + Enter：开始新行

无论光标是否在行尾，都开始新的行。

![](assets/230808110138640.gif)

### Ctrl + Alt + Enter：在当前行之前开始新行

![](assets/230808110217640.gif)

### Ctrl + Y：删除行

![](assets/230808110256640.gif)

### Ctrl + Shift + U：大小写转换

![](assets/230808110325640.gif)

### Ctrl + Alt + Shift + Insert：创建临时文件

可以创建各种类型的临时文件，该临时文件不会保存到磁盘中。

![](assets/230808110348640.gif)

### Shift + F4：在新窗口中打开

在新窗口打开当前文件。

![](assets/230808110446640.gif)

## 光标操作

### Ctrl + Left ：左移一个单词

![](assets/230808110550640.gif)

### Ctrl + Right：右移一个单词

![](assets/230808110628640.gif)

### Home：移动至行首

### End：移动至行尾

![](assets/230808110715640.gif)

### Ctrl + Shift + M：移动至大括号

多次按下快捷键，可以在左右两个大括号间切换。

![](assets/230808110748640.gif)

### `Ctrl + [`：移动至代码块开始

### `Ctrl + ]`：移动至代码块末尾

![](assets/230808111113640.gif)

### `Alt + Down`：下一个方法

### `Alt + Up`：上一个方法

![](assets/230808111144640.gif)

### `Ctrl + PageUp`：移动至页面顶部

### `Ctrl + PageDown`：移动至页面底部

![](assets/230808111207640.gif)

### `PageUp`：向上翻页

### `PageDown`：向下翻页

![](assets/230808111228640.gif)

### `Ctrl + Home`：移动至文件开头

### `Ctrl + End`：移动至文件末尾

![](assets/230808111247640.gif)

## 文本选择

### `Ctrl + A`：全选

### `Shift + Left`：向左选择

### `Shift + Right`：向右选择

![](assets/230808111413640.gif)

### `Ctrl + Shift + Left`：向左选择一个单词

### `Ctrl + Shift + Right`：向右选择一个单词

![](assets/230808111429640.gif)

### `Shift + Home`：向左选择至行头

### `Shift + End`：向右选择至行尾

![](assets/230808111449640.gif)

### `Shift + Up`：向上选择

### `Shift + Down`：向下选择

![](assets/230808111513640.gif)

### `Ctrl + Shift + [`：选择至代码块开头

### `Ctrl + Shift + ]`：选择至代码块结尾

![](assets/230808111606640.gif)

### `Ctrl + Shift + PageUp`：选择至页面顶部

### `Ctrl + Shift + PageDown`：选择至页面底部

![](assets/230808111626640.gif)

### `Shift + PageUp`：向上翻页选择

### `Shift + PageDown`：向下翻页选择

![](assets/230808111649640.gif)

### `Ctrl + Shift + Home`：选择至文件开关

### `Ctrl + Shift + End`：选择至文件结尾

![](assets/230808111711640.gif)

### `Ctrl + W`：扩展选择

### `Ctrl + Shift + W`：收缩选择

![](assets/230808111729640.gif)

## 代码折叠

### `Ctrl + NumPad+`：展开代码块

### `Ctrl + NumPad-`：折叠代码块

![](assets/230808111759640.gif)

### `Ctrl + Alt + NumPad+`：递归展开

### `Ctrl + Alt + NumPad-`：递归折叠

![](assets/230808111821640.gif)

### `Ctrl + Shift + NumPad+`：全部展开

### `Ctrl + Shift + NumPad-`：全部折叠

![](assets/230808111849640.gif)

### `Ctrl + .`：折叠选择

## 多个插入符号和范围选择

### `Alt + Shift + Click`：添加/删除插入符号

![](assets/230808112112640.gif)

### `Alt + Shift + Insert`：切换列选择模式

![](assets/230808112131640.gif)

### 双击`Ctrl` + `Up`：向上克隆插入符号

按`Ctrl`键两次，然后在不松开的情况下按向上箭头键。

![](assets/230808112238640.gif)

### `Alt + Shift + G`：将插入符号添加到选择中的每一行

![](assets/230808112307640.gif)

### `Alt + J`：选择单位下次出现的位置

### `Alt + Shift + J`：取消最后一次选择

![](assets/230808112321640.gif)

### `Ctrl + Alt + Shift + J`：选择所有出现的位置

![](assets/230808112421640.gif)

### `Alt + Shift + Middle-Click`：创建矩形选择

![](assets/230808112441640.gif)

### `Alt + Click`：拖拽以创建矩形选择区

![](assets/230808112502640.gif)

### `Ctrl + Alt + Shift + Click`：拖拽以创建多个矩形选择区

![](assets/230808112720640.gif)

## 辅助编码

### `Alt + Enter`：显示建议操作

该快捷键又称为“万通快捷键”，它会根据不同的语境建议不同的操作。下面这个演示只是其中的一种，还有很多种用法，你可以尝试一下。

![](assets/230808112754640.gif)

### `Ctrl + Space`：代码补全

![](assets/230808112822640.gif)

### `Ctrl + Shift + Space`：类型匹配代码补全

![](assets/230808112842640.gif)

### `Ctrl + Alt + Space`：第二次代码补全

![](assets/230808112902640.gif)

### `Ctrl + Shift + Enter`：补全当前语句

![](assets/230808112930640.gif)

### `Ctrl + Alt + L`：格式化代码

![](assets/230808112948640.gif)

### `Ctrl + P`：参数信息提醒

![](assets/230808113010640.gif)

### `Ctrl + Q`：快速文档

![](assets/230808113029640.gif)

### `Ctrl + Shift + Up`：向上移动语句

### `Ctrl + Shift + Down`：向下移动语句

![](assets/230808113048640.gif)

### `Ctrl + Alt + Shift + Left`：向左移动元素

### `Ctrl + Alt + Shift + Right`：向右移动元素

![](assets/230808113109640.gif)

### `Alt + Shift + Up`：向上移动队列

### `Alt + Shift + Down`：向下移动队列

![](assets/230808113137640.gif)

### `Ctrl + /`：添加行注释

![](assets/230808113156640.gif)

### `Ctrl + Shift + /`：添加块注释

![](assets/230808113213640.gif)

### `Alt + Insert`：生产语句

![](assets/230808113243640.gif)

## 上下文导航

### `Alt + Down`：跳转至下一个方法

### `Alt + Up`：跳转至上一个方法

![](assets/230808133248640.gif)

### `Ctrl + G`：跳转到指定行

![](assets/230808133316640.gif)

### `Ctrl + Tab`：切换活动文件

![](assets/230808133501640.gif)

### `Alt + F1`：选择文件的定位

![](assets/230808133530640.gif)

### `Ctrl + E`：最近的文件

![](assets/2308081335496401.gif)

### `Ctrl + Shift + Backspace`：返回上次编辑位置

![](assets/230808133616640.gif)

### `Ctrl + Alt + Left`：后退

### `Ctrl + Alt + Right`：前进

![](assets/230808133639640.gif)

### `Ctrl + Alt + Down`：下一事件

### `Ctrl + Alt + Up`：上一事件

![](assets/230808133657640.gif)

### `Alt + Right`：选择下一个选项卡

### `Alt + Left`：选择下一个选项卡

![](assets/230808133714640.gif)

### `F11`：切换匿名书签

![](assets/230808133739640.gif)

### `Ctrl + Shift + [digit]`：用数字切换书签

![](assets/230808133911640.gif)

### `Ctrl + F11`：使用助词符切换书签

![](assets/230808134023640.gif)

### `Shift + F11`：显示所有书签

![](assets/230808134044640.gif)

### `Ctrl + [digit]`：用数字跳转到书签

![](assets/230808134111640.gif)

### `Alt + 7`：显示结构窗口

![](assets/230808134131640.gif)

### `Alt + 3`：显示查找窗口

![](assets/230808134302640.gif)

## 查找操作

### 双击`Shift`：查找所有

![](assets/230808134329640.gif)

### `Ctrl + F`：查找字符（当前文件）

![](assets/230808134346640.gif)

### `F3`：查找下一个

### `Shift + F3`：查找上一个

![](assets/230808134408640.gif)

### `Ctrl + R`：替换字符（当前文件）

![](assets/230808134427640.gif)

### `Ctrl + Shift + F`：查找字符（所有文件）

![](assets/230808134446640.gif)

### `Ctrl + Shift + R`：替换字符（所有文件）

![](assets/230808134507640.gif)

### `Ctrl + F3`：跳转到光标处单词的下一位置

![](assets/230808134525640.gif)

### `Ctrl + Shift + N`：查找文件并跳转

![](assets/230808134546640.gif)

### `Ctrl + F12`：打开文件结构

![](assets/230808134602640.gif)

### `Ctrl + Alt + Shift + N`：查找符号（变量、方法等）

![](assets/230808134622640.gif)

### `Ctrl + Shift + A`：查找动作

![](assets/230808134644640.gif)

## 符号导航

### `Alt + F7`：查找用法

### `Ctrl + B`：跳转到声明处

![](assets/6401.gif)

### `Ctrl + Shift + B`：跳转到声明类处

![](assets/230808134835640.gif)

### `Ctrl + Alt + F7`：显示用法

### `Ctrl + U`：跳转到超级方法

### `Ctrl + Alt + B`：跳转到实现方法

![](assets/230808134854640.gif)

### `Ctrl + Shift + F7`：突出显示文件中的用法

## 代码分析

### `Alt + Enter`：显示意图操作

![](assets/230808134932640.gif)

### `Ctrl + F1`：显示错误描述

![](assets/230808134948640.gif)

### `F2`：下一个突出显示的错误

### `Shift + F2`：上一个突出显示的错误

![](assets/230808135013640.gif)

### `Ctrl + Alt + Shift + I`：按名称运行检查

![](assets/230808135028640.gif)

### `Alt + 6`：显示问题窗口

![](assets/230808135044640.gif)

## 运行和调试

### 双击`Ctrl`：运行所有

![](assets/230808135109640.gif)

### `Shift + F10`：运行上下文配置

![](assets/230808135123640.gif)

### `Alt + Shift + F10`：打开运行窗口

![](assets/6402.gif)

### `Shift + F9`：调试上下文配置

![](assets/230808135200640.gif)

### `Alt + Shift + F9`：打开调试窗口

![](assets/230808135215640.gif)

### `Ctrl + Alt + F5`：附加到进程

### `Ctrl + F2`：停止

![](assets/230808135233640.gif)

### `F9`：运行至下一断点

![](assets/230808135250640.gif)

### `Ctrl + Shift + F2`：停止后台进程

### `F8`：跨过调用

![](assets/230808135307640.gif)

### `Alt + Shift + F8`：强制跨过调用

### `F7`：进入调用

![](assets/230808135325640.gif)

### `Shift + F7`：智能进入调用

### `Alt + Shift + F7`：强制进入调用

### `Shift + F8`：跳出调用

![](assets/230808135340640.gif)

### `Alt + F9`：运行至光标处

![](assets/230808135355640.gif)

### `Ctrl + Alt + F9`：强制运行至光标处

### `Alt + F10`：显示执行点

![](assets/230808135423640.gif)

### `Alt + F8`：评估表达式

### `Ctrl + Alt + F8`：快速评估表达式

### `Ctrl + F8`：切换行断点

![](assets/230808135438640.gif)

### `Ctrl + Alt + Shift + F8`：切换临时行断点

![](assets/230808135452640.gif)

### `Ctrl + Shift + F8`：查看断点

![](assets/230808135509640.gif)

### `Ctrl + Shift + F8`：编辑断点

![](assets/230808135524640.gif)

### `Alt + 4`：显示运行窗口

### `Alt + 5`：显示调试窗口

### `Alt + 8`：显示服务窗口

![](assets/230808135540640.gif)

## 代码重构

### `Ctrl + Alt + Shift + T`：打开重构列表

![](assets/230808135658640.gif)

### `Shift + F6`：修改名称

### `Ctrl + F6`：修改签名

### `Ctrl + Alt + N`：内联

### `F6`：移动

### `Ctrl + Alt + M`：提取方法

![](assets/230808135715640.gif)

### `Ctrl + Alt + F`：引入域

### `Ctrl + Alt + P`：引入参数

### `Ctrl + Alt + V`：引入变量

### `Alt + Delete`：安全删除

## 全局 CVS 操作

### Alt + \` ：弹出 CVS 窗口

![](assets/230808135809640.gif)

### `Ctrl + K`：提交

![](assets/230808135828640.gif)

### `Ctrl + T`：更新项目

![](assets/230808135843640.gif)

### `Ctrl + Alt + Z`：回滚

![](assets/230808135857640.gif)

### `Ctrl + Shift + K`：拉取

![](assets/230808135912640.gif)

### `Ctrl + Alt + Shift + Down`：下一个修改

### `Ctrl + Alt + Shift + Up`：上一个修改

### `Alt + 9`：显示版本控制窗口

### `Alt + 0`：显示提交窗口

![](assets/230808135932640.gif)

## 差异查看器

### `F7`：下一个差异

### `Shift + F7`：上一个差异

![](assets/230808135954640.gif)

### `Ctrl + Alt + R`：接受左侧

### `Ctrl + Alt + A`：接受右侧

![](assets/230808140009640.gif)

### `Ctrl + Shift + Tab`：选择对面的差异窗格

![](assets/230808140023640.gif)

### `Ctrl + Shift + D`：显示差异设置窗口

## 工具窗口

### `Shift + Escape`：隐藏活动的工具窗口

![](assets/230808140052640.gif)

### `Ctrl + Shift + F12`：隐藏所有工具窗口

![](assets/230808140114640.gif)

### `F12`：跳转到最后一个工具窗口

### `Ctrl + Alt + Shift + Left`：向左延伸窗口大小

### `Ctrl + Alt + Shift + Right`：向右延伸窗口大小

![](assets/230808140129640.gif)

### `Ctrl + Alt + Shift + Up`：向顶部延伸窗口大小

### `Ctrl + Alt + Shift + Down`：向底部延伸窗口大小

![](assets/230808140149640.gif)

### `Alt + 1`：显示项目窗口

### `Alt + 2`：显示书签窗口

### `Alt + 3`：显示查找窗口

### `Alt + 4`：显示运行窗口

### `Alt + 5`：显示调试窗口

### `Alt + 6`：显示问题窗口

### `Alt + 7`：显示结构窗口

### `Alt + 8`：显示服务窗口

### `Alt + 9`：显示版本控制窗口

### `Alt + 0`：显示提交窗口

![](assets/230808140208640.gif)

### `Alt + F12`：显示终端窗口

![](assets/230808140226640.gif)

