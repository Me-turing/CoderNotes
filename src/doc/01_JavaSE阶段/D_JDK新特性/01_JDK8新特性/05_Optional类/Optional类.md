---
title: Optional类
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


### 之前对于Null的处理

```java
    @Test
    public void test01(){
//        String userName1 ="张三";
//        System.out.println("字符串的长度:"+userName1.length());//2
//
//        String userName2 = null;
//        System.out.println("字符串的长度:"+userName2.length());//异常

        //处理
        String userName3 = null;
        if (userName3 == null) {
            System.out.println("字符串为空");
        }else{
            System.out.println("字符串的长度:"+userName3.length());
        }
    }
```

### Optional类

Optional类是一个没有子类的工具类,是一个可以为null的容器对象,主要就是为了避免null检查,防止空指针异常

![](./image/image_fKSX02iI7F.png)

### Optional类的使用

```java
    /**
     * Optional对象的创建
     */
    @Test
    public void test02(){
        //通过of创建对象 of方法是不支持null
        Optional<String> op1 = Optional.of("张三");
//        Optional<Object> op2 = Optional.of(null);

        //通过ofNullable创建对象 支持null
        Optional<String> op3 = Optional.ofNullable("张三");
        Optional<String> op4 = Optional.ofNullable(null);

        //通过empty创建空的对象
        Optional<Object> op5 = Optional.empty();
    }
```

### Optional类的常用方法

| API                                     | 说明                                   |
| --------------------------------------- | ------------------------------------ |
| get()                                   | 如果有值则返回,否则抛出异常NoSuchElementException |
| isPresent()                             | 判断是否包含值,包含返回true 否则返回false           |
| orElse(T other)                         | 如果对象包含值,则返回该值否则就返回T                  |
| orElseGet(Supplier other)               | 如果调用对象包含值,就返回该值,否则返回Lambda表达式的返回值    |
| orElseThrow(Supplier exceptionSupplier) | 如果调用对象包含值,就返回该值,否则返回Lambda表达式的指定异常   |

```java
    /**
     * Optional对象的常用方法
     *  get() 如果有值则返回,否则抛出异常NoSuchElementException
     *          get()通常和isPresent方法一起使用
     * isPresent()   判断是否包含值,包含返回true 否则返回false
     * orElse(T other) 如果对象包含值,则返回该值否则就返回T
     * orElseGet(Supplier other)  如果调用对象包含值,就返回该值,否则返回Lambda表达式的返回值
     * orElseThrow(Supplier exceptionSupplier) 如果调用对象包含值,就返回该值,否则返回Lambda表达式的指定异常
     */
    @Test
    public void test03(){
        //通过of创建对象 of方法是不支持null
        Optional<String> op1 = Optional.of("张三");
        Optional<String> op2 = Optional.empty();

        //get 获取Optional的值
        //如果有值则返回 否则 抛出异常
        if (op1.isPresent()){
            System.out.println(op1.get());//张三
        }
        if(op2.isPresent()){
            System.out.println(op2.get());
        }

        //如果有值就返回原有值,为空就返回指定值
        String s3 = op1.orElse("李四");
        String s4 = op2.orElse("王五");
        System.out.println(s3);//张三
        System.out.println(s4);//王五

        //如果有值就返回原有值,为空就返回指定值
        String s = op2.orElseGet(() -> {
            return "Hello";
        });
        System.out.println(s);

        //如果有值就返回原有值,为空就返回指定异常
        String s1 = op2.orElseThrow(() -> {
            return new RuntimeException();
        });
        System.out.println(s1);
    }
```

### Optional类的高级应用

```java
    /**
     * 自定义一个方法将Student对象中的Name转换成大写并返回
     */
    @Test
    public void test05(){
        Student student1 = new Student(null, 19);
        Student student2 = new Student("张三", 19);

        System.out.println(getName(student1));
        System.out.println(getName(student2));

        Optional<Student> studentOp1 = Optional.ofNullable(student1);
        Optional<Student> studentOp2 = Optional.ofNullable(student2);
        System.out.println(getNameForOptional(studentOp1));
        System.out.println(getNameForOptional(studentOp2));
    }

    /**
     * 使用Optional对象
     * @param student
     * @return
     */
    public String getNameForOptional(Optional<Student> student){
        if (student.isPresent()) {
            String s = student
                    .map(Student::getName)//获取对象中的Name
                    .map(String::toUpperCase)//将名字转换成大写
                    .orElse(null);//如果为空返回null
            return s;
        }
        return null;
    }

    /**
     * 原始写法
     * @param student
     * @return
     */
    public String getName(Student student){
        if (student!=null){
            String name = student.getName();
            if (name != null){
                return name.toUpperCase();
            }else {
                return null;
            }
        }else {
            return null;
        }
    }
```
