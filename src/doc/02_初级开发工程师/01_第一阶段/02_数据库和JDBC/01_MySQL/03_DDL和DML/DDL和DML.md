---
title: DDL和DML
icon: file
order: 1
author: 十七
date: 2023-06-15 周四
category:
	- 初级开发工程师
tag:
	- P5
sticky: true
index: true
---


## DDL 数据库定义语言

### 操作数据库

#### 创建数据库

```sql
create database 数据库名 [character set 字符集][collate  校对规则] 
```

#### 查询所有数据库

```sql
show databases; 
```

#### 查询某个数据库的结构

```sql
show create database 数据库名;
```

#### 查询当前正在使用哪个数据库

```sql
select database();
```

#### 修改数据库的字符集

```sql
alter database 数据库名 character set 字符集;
```

#### 选中某个数据库

```sql
USE 数据库名;
```

#### 删除数据库

```sql
drop database 数据库名;
```

### 表的操作

#### 创建表

```sql
create table 表名(
  列名 类型 [约束],
  列名 类型 [约束]
  ...
);
```

##### 一般创建

```sql
-- 创建数据库表：
create table t_student(
        sno int(6), -- 6显示长度 
        sname varchar(5), -- 5个字符
        sex char(1),
        age int(3),
        enterdate date,
        classname varchar(10),
        email varchar(15)
);
```

##### 快速创建

```sql
-- 添加一张表：快速添加：结构和数据跟t_student 都是一致的
create table t_student2
as
select * from t_student;

-- 快速添加，结构跟t_student一致，数据没有：
create table t_student3
as
select * from t_student where 1=2;

-- 快速添加：只要部分列，部分数据：
create table t_student4
as
select sno,sname,age from t_student where sno = 2;

```

#### 修改表

##### 添加一个字段

```sql
//添加一个字段，默认在最后添加
alter table 【数据库名.】表名称 add 【column】 字段名 数据类型;
//添加到第一个字段
alter table 【数据库名.】表名称 add 【column】 字段名 数据类型 first;
//在某一个字段后面添加
alter table 【数据库名.】表名称 add 【column】 字段名 数据类型 after 另一个字段;
```

##### 修改表的字段类型和约束

```sql
alter table 表名 modify 字段 类型 约束 ；`
```

##### 修改列的名字

```sql
alter table 表名 change 旧列 新列 类型 约束;`
```

##### 删除字段

```sql
alter table 表名 drop 列名;`
```

##### 修改表名

```sql
`rename table 旧表名 to 新表名;` 
```

#### 查询所有表

```sql
show tables;
```

#### 查询某张表的结构

```sql
desc 表名;
```

#### 查看建表语句

```sql
-- 查看建表语句：
show create table t_student;
/*
CREATE TABLE `t_student` (
  `sno` int DEFAULT NULL,
  `sname` varchar(5) DEFAULT NULL,
  `sex` char(1) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `enterdate` date DEFAULT NULL,
  `classname` varchar(10) DEFAULT NULL,
  `email` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
*/
```

#### 删除表

```sql
drop table 表名；
```

#### 清空表

```sql
-- 删除数据操作 :清空数据
delete from 表名;
truncate table 表名;
```

## DML

### 插入数据

#### 指定插入的列

```sql
insert into 表名(列,列..) values(值,值..);
```

#### 不指定插入的列

```sql
insert into 表名 values(值,值....);   
```

#### 例子

```sql
-- 在t_student数据库表中插入数据：
insert into t_student values (1,'张三','男',18,'2022-5-8','软件1班','123@126.com');
insert into t_student values (10010010,'张三','男',18,'2022-5-8','软件1班','123@126.com');
insert into t_student values (2,'张三','男',18,'2022.5.8','软件1班','123@126.com');
insert into t_student values (2,"张三",'男',18,'2022.5.8','软件1班','123@126.com');
insert into t_student values (7,"张三",'男',18,now(),'软件1班','123@126.com');
insert into t_student values (9,"易烊千玺",'男',18,now(),'软件1班','123@126.com');
insert into t_student (sno,sname,enterdate) values (10,'李四','2023-7-5');
```

1.  int  宽度是显示宽度，如果超过，可以自动增大宽度 int底层都是4个字节
2.  时间的方式多样  '1256-12-23'  "1256/12/23"  "1256.12.23"
3.  字符串不区分单引号和双引号
4.  如何写入当前的时间  `now()` ,` sysdate()` ,`CURRENT\_DATE()`
5.  char varchar 是字符的个数，不是字节的个数，可以使用binary，varbinary表示定长和不定长的字节个数。
6.  如果不是全字段插入数据的话，需要加入字段的名字

> 注意事项：
> ①：在做插值的操作时，值的位置要与列的字段名一一对应
> ②：可以只指定部分列进行插值操作，其他未指定的列，将采用NULL或default默认值
> ③：如果有自增的字段可以在插值的时候使用NULL代替
> ④：如果列使用了非空约束，则必须插入

### 修改数据

```sql
update 表名 set 列 =值, 列 =值 [where 条件]
```

例子: 
```sql
-- 修改表中数据
update t_student set sex = '女' ;
update t_student set sex = '男' where sno = 10 ;
UPDATE T_STUDENT SET AGE = 21 WHERE SNO = 10;
update t_student set CLASSNAME = 'java01' where sno = 10 ;
update t_student set CLASSNAME = 'JAVA01' where sno = 9 ;
update t_student set age = 29 where classname = 'java01';

-- 删除操作：
delete from t_student where sno = 2;

```

1.  关键字，表名，字段名不区分大小写
2.  默认情况下，内容不区分大小写
3.  删除操作from关键字不可缺少
4.  修改，删除数据别忘记加限制条件

### 删除数据  delect\&truncate

#### delect

**删除表中的数据，但是可以通过事务回滚**

```sql
delete from 表名 [where 条件]

```

#### truncate

**删除原表，再创建相同的新表，** ​**不可以通过事务回滚**

```sql
truncate table 表;
```

**delete和truncate的区别:**

从最终的结果来看，虽然使用TRUNCATE操作和使用DELETE操作都可以删除表中的全部记录，但是两者还是有很多区别的，其区别主要体现在以下几个方面：

1.  DELETE为数据操作语言DML；TRUNCATE为数据定义语言DDL。
2.  DELETE操作是将表中所有记录一条一条删除直到删除完；TRUNCATE操作则是保留了表的结构，重新创建了这个表，所有的状态都相当于新表。因此，**`TRUNCATE操作的效率更高`**。
3.  DELETE操作可以回滚；**`TRUNCATE操作会导致隐式提交，因此不能回滚`**。
4.  DELETE操作执行成功后会返回已删除的行数（如删除4行记录，则会显示“Affected rows：4”）；截断操作\*\*`不会返回已删除的行量`**，结果通常是“Affected rows：0”。DELETE操作删除表中记录后，再次向表中添加新记录时，对于设置有`自增约束字段的值会从删除前表中该字段的最大值加1开始自增`；TRUNCATE操作则会重新从1开始自增。

#### 物理删除和逻辑和删除的区别

##### 物理删除

真正的删除了，数据不存在

##### 逻辑删除

没有删除，数据还在。只是在数据中添加了状态标记：Start = 1  时启用，Start = 0 时禁用
