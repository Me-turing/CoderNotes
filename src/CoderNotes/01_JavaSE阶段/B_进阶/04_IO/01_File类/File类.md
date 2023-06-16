---
title: File类
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


### 概念

在Java中对文件或目录的操作，通常是将他转换为File对象，该对象内置了很多处理的方法，以便我们使用。

例如：**File file1 = new File("D:/新建文件.txt");**  但是这种写法并不好，因为路径中很容易出现\\t之类的转义符

所以推荐使用：**File file2 = new File("D:"+File.separatorChar+"newTest.txt");**  其中`File.separatorChar`在此自动替换了路径中的特殊符号

盘符上的文件 → 封装为对象 → 对象属于File类的对象 → 有了这个对象，我们程序就可以直接操纵这个对象，通过这个对象获取文件的各种信息，还可以对文件进行创建 ，删除。

### 文件的操作

**File file2 = new File("D:"+File.separatorChar+"newTest.txt");**   //将指定文件封装为File对象

#### 常见API

| API                                        | 说明                                               | 举例                                                                                                             |
| ------------------------------------------ | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| boolean canRead()                          | 是否可读                                             | System.out.println("是否可读："+file2.canRead());                                                                   |
| boolean canWrite()                         | 是否可写                                             | System.out.println("是否可写："+file2.canWrite())                                                                   |
| String getName()                           | 文件名字                                             | System.out.println("文件名字："+file2.getName());                                                                   |
| String getParent()                         | 上级目录                                             | System.out.println("上级目录："+file2.getParent());                                                                 |
| boolean isDirectory()                      | 是否是一个目录                                          | System.out.println("是否是一个目录："+file2.isDirectory());                                                            |
| boolean isFile()                           | 是否是一个文件                                          | System.out.println("是否是一个文件："+file2.isFile());                                                                 |
| boolean isHidden()                         | 是否隐藏                                             | System.out.println("是否隐藏："+file2.isHidden());                                                                  |
| long length()                              | 文件大小                                             | System.out.println("文件大小："+file2.length());                                                                    |
| boolean exists()                           | 文件是否存在                                           | System.out.println("文件是否存在："+file2.exists());                                                                  |
| boolean delete()                           | 删除文件                                             | file2.delete();                                                                                                |
| file1\=\=file2                               | 比较两个对象的地址                                        | System.out.println(file1\=\=file2);|
| file1.equals(file2)                        | 比较两个文件的路径（即是否是同一个文件）                             | System.out.println(file1.equals(file2));|
| String getAbsolutePath()                   | 绝对路径：文件真实的、精准的、完整的路径                             | System.out.println("绝对路径："+file.getAbsolutePath());//E:\AllPerject\IDEAProject\MCA\_Demo\JavaSE\_Demo\demo.txt |
| String getPath()                           | 相对路径：在Main方法中是以当前项目为参照物，在JUNIT中是以当前模块为参照物的相对路径位置 | System.out.println("相对路径："+file.getPath());//demo.txt                                                          |
| String toString()                          | toString，通常就是相对路径                                | System.out.println("toString:"+file.toString());//demo.txt                                                     |
| boolean createNewFile() throws IOException | 创建文件                                             | file2.createNewFile();                                                                                         |

####  代码案例

``` java
    public class TestFile01 {
        public static void main(String[] args) throws IOException {
            /**
             * 文件相关的操作
             */
    //        File file = new File("D:\\新建文件夹.txt");
            File file1 = new File("D:/新建文件.txt");
            File file2 = new File("D:"+File.separatorChar+"newTest.txt");//推荐这种写法
            
            System.out.println("是否可读："+file2.canRead());
            System.out.println("是否可写："+file2.canWrite());
            System.out.println("文件名字："+file2.getName());
            System.out.println("上级目录："+file2.getParent());
            System.out.println("是否是一个目录："+file2.isDirectory());
            System.out.println("是否是一个文件："+file2.isFile());
            System.out.println("是否隐藏："+file2.isHidden());
            System.out.println("文件大小："+file2.length());
            System.out.println("文件是否存在："+file2.exists());
            
            //如果文件存在则删除
    //        if (file2.exists()){
    //            file2.delete();
    //        }else {
    //            //不存在则创建
    //            file2.createNewFile();
    //        }
            /**
             * 地址相关的操作
             */
            //比较两个对象的地址
            System.out.println(file1==file2);
            //比较两个文件的路径（即是否是同一个文件）
            System.out.println(file1.equals(file2));
            
            System.out.println("绝对路径："+file2.getAbsolutePath());//D:\newTest.txt
            System.out.println("相对路径："+file2.getPath());//D:\newTest.txt
            System.out.println("toString:"+file2.toString());//D:\newTest.txt
            System.out.println("-----------------");
            File file = new File("demo.txt");
            if (file.exists()) file.createNewFile();
            ////绝对路径指的就是：真实的一个精准的，完整的路径
            System.out.println("绝对路径："+file.getAbsolutePath());//E:\AllPerject\IDEAProject\MCA_Demo\JavaSE_Demo\demo.txt
            //相对路径：有一个参照物，相对这个参照物的路径。
            //在main方法中，相对位置指的就是：E:\AllPerject\IDEAProject\MCA_Demo\JavaSE_Demo
            //在junit的测试方法中，相对路径指的就是模块位置
            System.out.println("相对路径："+file.getPath());//demo.txt
            //toString的效果永远是  相对路径
            System.out.println("toString:"+file.toString());//demo.txt
            
            File file3 = new File("a/b/c/demo.txt");
            if (file3.exists()) file3.createNewFile();
            System.out.println("绝对路径："+file3.getAbsolutePath());//E:\AllPerject\IDEAProject\MCA_Demo\JavaSE_Demo\a\b\c\demo.txt
            System.out.println("相对路径："+file3.getPath());//a\b\c\demo.txt
            
        }
    }
```

### 目录的操作

`File file2 = new File("D:"+File.separatorChar+"IDEA_workspace");`  //将指定目录封装为File对象

#### 常见API

| API                      | 说明                                               | 举例                                                                                                              |
| ------------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| boolean canRead()        | 是否可读                                             | System.out.println("是否可读："+file2.canRead());                                                                    |
| boolean canWrite()       | 是否可写                                             | System.out.println("是否可写："+file2.canWrite())                                                                    |
| String getName()         | 文件名字                                             | System.out.println("文件名字："+file2.getName());                                                                    |
| String getParent()       | 上级目录                                             | System.out.println("上级目录："+file2.getParent());                                                                  |
| boolean isDirectory()    | 是否是一个目录                                          | System.out.println("是否是一个目录："+file2.isDirectory());                                                             |
| boolean isFile()         | 是否是一个文件                                          | System.out.println("是否是一个文件："+file2.isFile());                                                                  |
| boolean isHidden()       | 是否隐藏                                             | System.out.println("是否隐藏："+file2.isHidden());                                                                   |
| long length()            | 文件大小                                             | System.out.println("文件大小："+file2.length());                                                                     |
| boolean exists()         | 文件是否存在                                           | System.out.println("文件是否存在："+file2.exists());                                                                   |
| file1\=\=file2             | 比较两个对象的地址                                        | System.out.println(file1\=\=file2);                                                                               |
| file1.equals(file2)      | 比较两个文件的路径（即是否是同一个文件）                             | System.out.println(file1.equals(file2));                                                                        |
| String getAbsolutePath() | 绝对路径：文件真实的、精准的、完整的路径                             | System.out.println("绝对路径："+file2.getAbsolutePath());//E:\AllPerject\IDEAProject\MCA\_Demo\JavaSE\_Demo\demo.txt |
| String getPath()         | 相对路径：在Main方法中是以当前项目为参照物，在JUNIT中是以当前模块为参照物的相对路径位置 | System.out.println("相对路径："+file2.getPath());//demo.txt                                                          |
| String toString()        | toString，通常就是相对路径                                | System.out.println("toString:"+file2.toString());//demo.txt                                                     |
| boolean mkdir()          | 创建单层目录                                           | file2.mkdir();                                                                                                  |
| boolean mkdirs()         | 创建多层目录                                           | file2.mkdirs();                                                                                                 |
| boolean delete()         | 删除目录：  只会删除一层目录，并且必须为空目录                         | file2.delete();                                                                                                 |
| String\[] list()         | 获取指定目录内存在的所有目录或者文件的名字的数组                         | String\[] list = file2.list();                                                                                  |
| File\[] listFiles()      | 获取指定目录内存在的所有目录或者文件的File对象数组                      | File\[] files = file2.listFiles();                                                                              |

#### 代码案例

```java
 package com.meturing.file;
    
    import java.io.File;
    
    /**
     * 对目录开始操作
     */
    public class TestFile02 {
        public static void main(String[] args) {
            //将目录封装为File类的对象：
            File f = new File("D:\\IDEA_workspace");
            System.out.println("文件是否可读："+f.canRead());
            System.out.println("文件是否可写："+f.canWrite());
            System.out.println("文件的名字："+f.getName());
            System.out.println("上级目录："+f.getParent());
            System.out.println("是否是一个目录："+f.isDirectory());
            System.out.println("是否是一个文件："+f.isFile());
            System.out.println("是否隐藏："+f.isHidden());
            System.out.println("文件的大小："+f.length());
            System.out.println("是否存在："+f.exists());
            System.out.println("绝对路径："+f.getAbsolutePath());
            System.out.println("相对路径："+f.getPath());
            System.out.println("toString:"+f.toString());
            
            //目录特有的属性
            File a = new File("D:"+File.separatorChar+"a");
            a.mkdir();//创建单层目录
            File b = new File("D:"+File.separatorChar+"a"+File.separatorChar+"b"+File.separatorChar+"c");
            b.mkdirs();//创建多层目录
            
            b.delete();//删除  如果删除目录的话，只会删除一层目录，并且必须为空目录
            
            //获取指定目录内存在的所有目录或者文件的名字的数组
            String[] list = a.list();
            for (String s : list) {
                System.out.println(s);
            }
            
            //获取指定目录内存在的所有目录或者文件的File对象数组
            File[] files = a.listFiles();
            for (File file : files) {
                System.out.println("当前的名字："+file.getName()+"\t当前的绝对路径"+file.getAbsolutePath());
            }
        }
    }
```
    

