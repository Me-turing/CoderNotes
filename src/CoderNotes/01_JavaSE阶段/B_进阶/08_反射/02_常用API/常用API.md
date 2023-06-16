---
title: 常用API
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


## 构造器

### API

| API                                                                                 | 说明                   |
| ----------------------------------------------------------------------------------- | -------------------- |
| java.lang.Class#Constructor\<?>\[] getConstructors()                                | 获取构造器列表(仅限Public修饰)  |
| java.lang.Class#Constructor\<?>\[] getDeclaredConstructors()                        | 获取构造器列表(全部)          |
| java.lang.Class#Constructor\<T> getConstructor(Class\<?>... parameterTypes)         | 获取指定的构造器(仅限Public修饰) |
| java.lang.Class#Constructor\<T> getDeclaredConstructor(Class\<?>... parameterTypes) | 获取指定的构造器(全部)         |
| java.lang.Class#T newInstance(Object ... initargs)                                  | 初始化对象                |

### 案例

```java
/**
 * 获取构造器和创建对象
 * 字节码对象.getConstructors() -> 获取构造器列表(仅限Public修饰)
 * 字节码对象.getDeclaredConstructors() -> 获取构造器列表(全部)
 * 字节码对象.getConstructor() -> 获取指定的无参构造器(仅限Public修饰)
 * 字节码对象.getConstructor(Class,Class,.....) -> 获取带参的构造器,参数传入构造器的参数类型.class(仅限Public修饰)
 * 字节码对象.getDeclaredConstructor(Class,.....) -> 获取编译后的指定构造器,参数传入构造器的参数类型.class(全部)
 */
public class Demo01 {
    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        Class studentClass = Student.class;//获取到字节码对象
        
        //通过字节码信息可以获取构造器：
        //getConstructors只能获取当前运行时类的被public修饰的构造器
        Constructor[] constructors = studentClass.getConstructors();
        Arrays.stream(constructors).forEach(c->{
            System.out.println(c);
        });
        System.out.println("-------------------");
        //getDeclaredConstructors:获取运行时类的全部修饰符的构造器
        Constructor[] declaredConstructors = studentClass.getDeclaredConstructors();
        Arrays.stream(declaredConstructors).forEach(c->{
            System.out.println(c);
        });
        System.out.println("-------------------");
        //获取指定的构造器：
        //得到空构造器(仅限Public修饰)
        Constructor constructor = studentClass.getConstructor();
        System.out.println(constructor);
        //得到两个参数的构造器(仅限Public修饰)
        Constructor constructor1 = studentClass.getConstructor(int.class,int.class);
        System.out.println(constructor1);
        //得到一个参数的构造器(全部)
        Constructor declaredConstructor = studentClass.getDeclaredConstructor(int.class);
        System.out.println(declaredConstructor);
        
        //有了构造器以后我就可以创建对象：
        Object o = constructor.newInstance();
        System.out.println(o);
        Object o1 = constructor1.newInstance(10,10);
        System.out.println(o1);
    }
}
```

## 属性

### API

| API                                                        | 说明                                                                                |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------- |
| java.lang.Class#Field\[] getFields()                       | 字节码对象.getFields() -> 获取属性列表(仅限Public修饰)                                           |
| java.lang.Class#Field\[] getDeclaredFields()               | 字节码对象.getDeclaredFields() -> 获取属性列表(全部)                                           |
| java.lang.Class#Field getField(String name)                | 获取指定的属性(仅限Public修饰)                                                               |
| java.lang.Class#Field getDeclaredField(String name)        | 获取指定的属性(全部)                                                                       |
| java.lang.reflect.Field#int getModifiers()                 | 属性对象.getModifiers() -> 获取属性的修饰符&#xA;Modifier.toString(int arg) : 将上面获取到的码值转换成最终的值 |
| java.lang.reflect.Field#Class\<?> getType()                | 属性对象.getType() -> 获取属性的类型&#xA;java.lang.Class#getName.getName() 获取对应的名字           |
| java.lang.reflect.Field#String getName()                   | 属性对象.getName() -> 获取属性名字                                                          |
| java.lang.reflect.Field#void set(Object obj, Object value) | 属性对象.set(对象,值) -> 设置属性的值,但是要传入对象                                                  |

### 案例

```java
/**
 * 获取属性和对属性赋值
 * 字节码对象.getFields() -> 获取属性列表(仅限Public修饰)
 * 字节码对象.getDeclaredFields() -> 获取属性列表(全部)
 * 字节码对象.getField(str) -> 获取指定的属性(仅限Public修饰)
 * 字节码对象.getDeclaredField(str) -> 获取指定的属性(全部)
 * 属性对象.getModifiers() -> 获取属性的修饰符
 * 属性对象.getType() -> 获取属性的类型
 * 属性对象.getName() -> 获取属性名字
 * 属性对象.set(对象,值) -> 设置属性的值,但是要传入对象
 */
public class Demo02 {
    public static void main(String[] args) throws NoSuchFieldException, InstantiationException, IllegalAccessException {
        //获取字节码对象
        Class studentClass = Student.class;
        //获取所有的属性(Public)
        Field[] fields = studentClass.getFields();
        Arrays.stream(fields).forEach(c->{
            System.out.println(c);
        });
        System.out.println("----------------------------");
        //获取全部的属性(不限制修饰符)
        Field[] declaredFields = studentClass.getDeclaredFields();
        Arrays.stream(declaredFields).forEach(c->{
            System.out.println(c);
        });
        System.out.println("----------------------------");
        //获取指定的属性(Public)
        Field score = studentClass.getField("score");
        System.out.println(score);
        System.out.println("----------------------------");
        //获取指定的属性(全部)
        Field sno = studentClass.getDeclaredField("sno");
        System.out.println(sno);
        System.out.println("----------------------------");
        
        //获取属性的结构
        //获取属性的修饰符
        int modifiers = sno.getModifiers();
        System.out.println(Modifier.toString(modifiers));
        //获取属性的类型
        Class type = sno.getType();
        System.out.println(type.getName());
        //获取属性的名字
        String name = sno.getName();
        System.out.println(name);
        
        //给属性设置值:必须要有对象
        Field score1 = studentClass.getField("score");
        Object o = studentClass.newInstance();
        score1.set(o, 100);
        System.out.println(o);
    }
}
```

## 方法

### API

| API                                                                                | 说明                                                                                |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| java.lang.Class#Method\[] getMethods()                                             | 获取全部的方法(仅限Public修饰,包含父类)                                                          |
| java.lang.Class#Method\[] getDeclaredMethods()                                     | 获取全部的方法(全部修饰符,仅限当前类)                                                              |
| java.lang.Class#Method getMethod(String name, Class\<?>... parameterTypes)         | 获取指定的方法(仅限Public修饰,包含父类)                                                          |
| java.lang.Class#Method getDeclaredMethod(String name, Class\<?>... parameterTypes) | 获取指定的方法(全部修饰符,仅限当前类)                                                              |
| java.lang.reflect.Method#int getModifiers()                                        | 属性对象.getModifiers() -> 获取属性的修饰符&#xA;Modifier.toString(int arg) : 将上面获取到的码值转换成最终的值 |
| java.lang.reflect.Method#Class\<?> getReturnType()                                 | 获取方法返回类型                                                                          |
| java.lang.reflect.Method#String getName()                                          | 获取方法名                                                                             |
| java.lang.reflect.Method#Parameter\[] getParameters()                              | 获取方法参数列表                                                                          |
| java.lang.reflect.Method#Class\<?>\[] getParameterTypes()                          | 获取方法参数类型列表                                                                        |
| java.lang.reflect.Method#Class\<?>\[] getExceptionTypes()                          | 获取方法异常类型                                                                          |
| java.lang.reflect.Method#Annotation\[] getAnnotations()                            | 获取方法注解                                                                            |
| java.lang.reflect.Method#Object invoke(Object obj, Object... args)                 | 运行指定方法                                                                            |

### 案例

```java
/**
 * 获取方法和调用方法
 * 字节对象.getMethods() -> 获取全部的方法(仅限Public修饰,包含父类)
 * 字节对象.getDeclaredMethods() -> 获取全部的方法(全部修饰符,仅限当前类)
 * 字节对象.getMethod(str) -> 获取指定的方法,参数为方法名(仅限Public修饰,包含父类)
 * 字节对象.getMethod(str,str,...,str) -> 获取指定的方法,参数为方法名,方法参数类型(仅限Public修饰,包含父类)
 * 字节对象.getDeclaredMethod(str) -> 获取指定的方法,参数为方法名(全部修饰符,仅限当前类)
 * 字节对象.getDeclaredMethod(str,str,...,str) -> 获取指定的方法,参数为方法名,方法参数类型(全部修饰符,仅限当前类)
 *
 * 方法对象.getModifiers() -> 获取方法修饰符
 * 方法对象.getReturnType() -> 获取方法返回类型
 * 方法对象.getName() -> 获取方法名
 * 方法对象.getParameters() -> 获取方法参数列表
 * 方法对象.getParameterTypes() -> 获取方法参数类型列表
 * 方法对象.getExceptionTypes() -> 获取方法异常类型
 * 方法对象.getAnnotations() -> 获取方法注解
 *
 * 方法对象.invoke(object) -> 执行无参方法
 * 方法对象.invoke(object,str,...,str) -> 执行带参方法
 */
public class Demo03 {
    public static void main(String[] args) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException {
        Class<Student> studentClass = Student.class;
        
        //获取运行时类的方法还有所有父类中的方法(仅限Public修饰,包含父类)
        Method[] methods = studentClass.getMethods();
        Arrays.stream(methods).forEach(c -> {
            System.out.println(c);
        });
        System.out.println("-----------------------");
        //获取运行时类中的所有方法(全部,只有当前类)
        Method[] declaredMethods = studentClass.getDeclaredMethods();
        Arrays.stream(declaredMethods).forEach(c -> {
            System.out.println(c);
        });
        System.out.println("-----------------------");
        //获取指定的方法
        Method showInfo1 = studentClass.getMethod("showInfo");
        System.out.println(showInfo1);
        Method showInfo2 = studentClass.getMethod("showInfo",int.class,int.class);
        System.out.println(showInfo2);
        Method work = studentClass.getDeclaredMethod("work", int.class);
        System.out.println(work);
        System.out.println("------------------------------");
        
        //获取方法的结构
         /*
        @注解
        修饰符 返回值类型  方法名(参数列表) throws XXXXX{}
         */
        //获取名字
        System.out.println(Modifier.toString(work.getModifiers()));//获取修饰符
        System.out.println(work.getReturnType());//获取返回类型
        System.out.println(work.getName());//获取方法名
        Parameter[] parameters = showInfo2.getParameters();//获取参数列表
        Arrays.stream(parameters).forEach(c -> System.out.println(c));
        Class<?>[] parameterTypes = work.getParameterTypes();//获取参数类型
        Arrays.stream(parameterTypes).forEach(c -> System.out.println(c));
        
        Method myMethod = studentClass.getMethod("myMethod");
        Class<?>[] exceptionTypes = myMethod.getExceptionTypes();//获取异常
        Arrays.stream(exceptionTypes).forEach(c -> System.out.println(c));
        Annotation[] annotations = myMethod.getAnnotations();//获得注解
        Arrays.stream(annotations).forEach(c -> System.out.println(c));
        
        //调用方法
        System.out.println("-------------------------");
        Student student = studentClass.newInstance();
        myMethod.invoke(student);
        System.out.println(showInfo2.invoke(student, 1,1));
    }
}
```

## 接口

### API

| API                                                      | 说明         |
| -------------------------------------------------------- | ---------- |
| java.lang.Class#Class\<?>\[] getInterfaces()             | 获取接口       |
| java.lang.Class#native Class\<? super T> getSuperclass() | 获取父类的字节码对象 |
| java.lang.Class#Package getPackage()                     | 当前类所在的包    |
| java.lang.Class#Annotation\[] getAnnotations()           | 当前类的注解     |

### 案例

```java
/**
 * 获取类的接口，所在包，注解
 * 字节码对象.getInterfaces() -> 获取接口
 * 字节码对象.getSuperclass() -> 获取父类的字节码对象
 * 字节码对象.getPackage() -> 当前类所在的包
 * 字节码对象.getPackage().getName() -> 当前类所在的包名
 * 字节码对象.getAnnotations() -> 当前类的注解
 */
public class Demo04 {
    public static void main(String[] args) {
        Class<Student> studentClass = Student.class;
        
        //获取当前类的接口
        Class<?>[] interfaces = studentClass.getInterfaces();
        Arrays.stream(interfaces).forEach(c -> {
            System.out.println(c);
        });
        
        //获取父类的接口
        Class<? super Student> superclass = studentClass.getSuperclass();
        Class<?>[] interfaces1 = superclass.getInterfaces();
        Arrays.stream(interfaces1).forEach(c -> System.out.println(c));
        
        //获取所在的包
        Package aPackage = studentClass.getPackage();
        System.out.println(aPackage);
        System.out.println(aPackage.getName());
        
        //获取类上的注解
        Annotation[] annotations = studentClass.getAnnotations();
        Arrays.stream(annotations).forEach(c -> System.out.println(c));
    }
}
```
