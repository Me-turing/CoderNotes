---
title: DQL（单表）
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


## DQL

### 查询所有行和列的数据

```sql
select * from 表名
```

### 查询指定列的数据

```sql
select 字段名 from 表名
select 字段名,字段名,字段名.... from 表名
```

### 去重查询

```sql
select distinct 字段名 from 表名
```

**注意点: 去重针对某列, distinct前面不能先出现列名**

### 别名查询

```sql
select 列名 as 别名  from 表
select 列名 别名 from 表
```

### 运算查询

```sql
//运算查询(+,-,*,/,%等)
select 列名+10 as 别名 from 表名;
```

> 运算查询字段,字段之间是可以的
> 字符串等类型可以做运算查询，但结果没有意义

### 条件查询

> 语法：select ... from 表 where 条件&#x20;

#### 比较运算符

大于：>
小于：<
大于等于：>=
小于等于：<=
等于：=   不能用于null判断
不等于：!=  或 <>
安全等于: <=>  可以用于null值判断`

#### 逻辑运算符

逻辑与：&& 或 and
逻辑或：|| 或 or
逻辑非：! 或 not
逻辑异或：^ 或 xor`

#### 范围

##### between and

```sql
//返回条件符合value1到value2之间的数据
select 列名 from 表名 where 列名 between value1 and value2

```

##### in

```sql
//返回条件符合value结果任意之一的值
select 列名 from 表名 where 列名 in (value1,value2..)
//返回条件不符合value结果任意之一的值
select 列名 from 表名 where 列名 not in (value1,value2..)

```

#### like模糊查询

like 'xxx'  模糊查询是处理字符串的时候进行部分匹配

```sql
//如果想要表示0~n个字符，用%    a%  =>  anbcjbjbdj
//如果想要表示确定的1个字符，用_  a_  =>   ab
select 列名 from 表名 where 列名 like 'value1'

```

#### 正则查询

```sql
//value可以写正则语法
select 列名 from 表名 where 列名 regexp 'value1'
```

#### 空值处理

```sql
//条件为空
select 列名 from 表名 where 列名 is null
//条件不为空
select 列名 from 表名 where 列名 is not null

```

### 排序查询ORDER BY

#### 单列排序

```sql
SELECT 字段名 FROM 表名 [WHERE 条件] ORDER BY 字段名 [ASC|DESC];  //ASC: 升序，默认值; DESC: 降序
```

#### 多列排序

**同时对多个字段进行排序，如果第1个字段相等，则按第2个字段排序，依次类推**

```sql
SELECT 字段名 FROM 表名 WHERE 字段=值 ORDER BY 字段名1 [ASC|DESC], 字段名2 [ASC|DESC];
```

### 聚合函数

```sql
SELECT 聚合函数(列名) FROM 表名 [where 条件];
```

| 说明 | 函数        |
| -- | --------- |
| 最大 | MAX(列名)   |
| 最小 | MIN(列名)   |
| 平均 | AVG(列名)   |
| 求和 | SUM(列名)   |
| 计数 | COUNT(列名) |

> 注意:  
> **聚合函数会忽略空值NULL**
> **IFNULL(列名，默认值)函数可以处理值为NULL**
> **如果列的值为NULL则返回默认值**

### 分组 GROUP BY 与 HAVING

```sql
//一般分组会跟聚合函数一起使用
//HAVING 可以对分组结果进行过滤
SELECT 字段1,字段2... FROM 表名  [where 条件] GROUP BY 列 [HAVING 条件];
```

HAVING与WHERE的区别
1.  WHERE
    1) 对查询结果进行分组前，将不符合where条件的行去掉，即在分组之前过滤数据，即先过滤再分组。
    2) where后面不可以使用聚合函数
2.  HAVING
    1) having 子句的作用是筛选满足条件的组，即在分组之后过滤数据，即先分组再过滤。
    2) having后面可以使用聚合函数

## 分页

```sql
//a 表示的是跳过的数据条数
//b 表示的是要查询的数据条数
select ... from .... limit a ,b
```
