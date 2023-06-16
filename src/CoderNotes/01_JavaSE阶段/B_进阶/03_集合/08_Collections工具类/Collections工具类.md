---
title: Collections工具类
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


```java
public class Test01 {
    public static void main(String[] args) {
        //Collections不支持创建对象，因为构造器私有化了
        /*Collections cols = new Collections();*/
        //里面的属性和方法都是被static修饰，我们可以直接用类名.去调用即可：
        //常用方法：
        //addAll：
        ArrayList<String> list = new ArrayList<>();
        list.add("cc");
        list.add("bb");
        list.add("aa");
        Collections.addAll(list,"ee","dd","ff");
        Collections.addAll(list,new String[]{"gg","oo","pp"});
        System.out.println(list);
        //sort提供的是升序排列
        Collections.sort(list);
        System.out.println(list);
        //binarySearch必须在有序的集合中查找： 返回第一个下标
        System.out.println(Collections.binarySearch(list,"cc"));
        //copy:替换方法  只会替换相同的长度，如果目标长度长于复制的数组，则多余的元素不受影响
        ArrayList<String> list1 = new ArrayList<>();
        Collections.addAll(list1,"xx","zz");
        Collections.copy(list,list1);//将list1的内容替换到list上去
        System.out.println(list);
        System.out.println(list1);
        //fill 填充  用指定值填充所有元素
        Collections.fill(list1,"yyy");
        System.out.println(list1);
    }
}

```