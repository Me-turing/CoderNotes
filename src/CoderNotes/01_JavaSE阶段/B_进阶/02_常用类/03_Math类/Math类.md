---
title: Math类
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


## 特性

所属包：`java.lang`
继承：`被final修饰，不可继承`
对象：`构造器私有化，无法创建`
调用：`所有方法都是静态，直接调用`

## 常用方法

```java
   public class test01 {
    public static void main(String[] args) {
        //常用属性：
        System.out.println(Math.PI);
        //常用方法：
        System.out.println("随机数："+Math.random());//[0.0,1.0)
        System.out.println("绝对值："+Math.abs(-80));//80
        System.out.println("向上取值："+Math.ceil(9.1));//10.0
        System.out.println("向下取值："+Math.floor(9.9));//9.0
        System.out.println("四舍五入："+Math.round(3.5));//4
        System.out.println("取大的那个值："+Math.max(3, 6));//6
        System.out.println("取小的那个值："+Math.min(3, 6));//3
    }
}
```

## 静态导入

```java
import static java.lang.Math.*;

public class test02 {
    public static void main(String[] args) {
        //常用属性：
        System.out.println(PI);
        //常用方法：
        System.out.println("随机数："+random());//[0.0,1.0)
        System.out.println("绝对值："+abs(-80));
        System.out.println("向上取值："+ceil(9.1));
        System.out.println("向下取值："+floor(9.9));
        System.out.println("四舍五入："+round(3.5));
        System.out.println("取大的那个值："+max(3, 6));
        System.out.println("取小的那个值："+min(3, 6));
    }
    //如果跟Math中方法重复了，那么会优先走本类中的方法（就近原则）
    public static int random(){
        return 100;
    }
}
```
