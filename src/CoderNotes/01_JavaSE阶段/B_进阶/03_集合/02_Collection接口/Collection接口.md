---
title: Collection接口
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


## 常用方法

| 方法                                 | 说明          |
| ---------------------------------- | ----------- |
| add(E e)                           | 增加元素        |
| addAll(Collection\<? extends E> c) | 将另一个集合添加入   |
| clear()                            | 清空集合元素      |
| remove(Object o)                   | 移除某一个元素     |
| contains(Object o)                 | 判断指定元素是否存在  |
| equals(Object o)                   | 判断元素是否相同    |
| isEmpty()                          | 判断是否为空      |
| size()                             | 获取集合使用元素的大小 |

```java
public class Test01 {
    public static void main(String[] args) {
        /*
            Collection接口的常用方法：
            增加：add(E e) addAll(Collection<? extends E> c)
            删除：clear() remove(Object o)
            修改：
            查看：iterator() size()
            判断：contains(Object o)  equals(Object o) isEmpty()
         */
        //创建对象：接口不能创建对象，利用实现类创建对象：
        Collection collection = new ArrayList();
        //增加：add(E e)
        //调用方法：
        //集合有一个特点：只能存放引用数据类型的数据，不能是基本数据类型
        //基本数据类型自动装箱，对应包装类。int--->Integer
        collection.add(18);
        collection.add(19);
        collection.add(20);
        System.out.println(collection);//[18, 19, 20]
        //addAll(Collection<? extends E> c) 将另一个集合添加入
        List integers = Arrays.asList(new Integer[]{11, 12, 13, 15});
        collection.addAll(integers);
        System.out.println(collection);//[18, 19, 20, 11, 12, 13, 15]
        // 移除某个元素
        collection.remove(18);
        System.out.println(collection);//[19, 20, 11, 12, 13, 15]
        boolean remove = collection.remove(19);
        System.out.println("集合移除19是否成功："+remove);//集合移除19是否成功：true
        // 清空集合
        collection.clear();
        System.out.println(collection);//[]
        //查看
        collection.add(22);
        System.out.println("集合存在的元素数量："+collection.size());//集合存在的元素数量：1
        System.out.println("集合是否为空："+collection.isEmpty()); //集合是否为空：false
        System.out.println("集合是否包含22："+collection.contains(22));//集合是否包含22：true
        List arrayList = new ArrayList();
        arrayList.add(22);
        System.out.println("集合内容是否相同："+arrayList.equals(collection));//集合内容是否相同：true
        System.out.println("集合地址是否相同："+(arrayList==collection));//集合地址是否相同：false
    }
}
```

## 集合遍历

循环可以使用：**增强for循环**、**Lambda表达式**、**迭代器循环**

```java
public class Test02 {
    public static void main(String[] args) {
        Collection arrayList = new ArrayList();
        arrayList.add(12);
        arrayList.add(13);
        // 增强For循环
        for (Object o : arrayList) {
            System.out.println(o);
        }
        System.out.println("===============");
        //Lambda 表达式输出
        arrayList.forEach(System.out::println);
        System.out.println("===============");
        /**
         *  迭代器循环遍历
         *  集合对象.iterator();  创建迭代器对象
         *  迭代器对象.hasNext()  是否存在下一个元素
         *  迭代器对象.next()     获取当前元素，并下移指针
         */
        Iterator iterator = arrayList.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
```
