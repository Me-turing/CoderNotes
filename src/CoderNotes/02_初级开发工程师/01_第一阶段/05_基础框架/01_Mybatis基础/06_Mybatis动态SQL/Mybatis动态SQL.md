---
title: Mybatis动态SQL
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


MyBatis在简化操作方法提出了动态SQL功能，将使用Java代码拼接SQL语句，改变为在XML映射文件中截止标签拼接SQL语句。相比而言，大大减少了代码量，更灵活、高度可配置、利于后期维护。

MyBatis中动态SQL是编写在mapper.xml中的，其语法和JSTL类似，但是却是基于强大的OGNL表达式实现的。

MyBatis也可以在注解中配置SQL，但是由于注解功能受限，尤其是对于复杂的SQL语句，可读性很差，所以较少使用。

## IF标签

### 语法

```XMl
<if test="条件1">语句1</if>
```

如果满足条件1,则会拼接语句1

### 案例

EmpMapper.Java接口
```Java
List<Emp> findByCondition(Emp emp);
```

EmpMapper.XML
```XML
<select id="findByCondition" resultType="emp" parameterType="emp">  
    select * from emp where 1=1    
    <if test="empno!=null"> and empno = #{empno} </if>  
    <if test="ename!=null and ename!='' "> and ename = #{ename} </if>  
    <if test="job!=null and job!='' "> and job = #{job} </if>  
    <if test="mgr!=null"> and mgr = #{mgr} </if>  
    <if test="hiredate!=null and hiredate!='' "> and hiredate = #{hiredate} </if>  
    <if test="sal!=null"> and sal = #{sal} </if>  
    <if test="comm!=null"> and comm = #{comm} </if>  
    <if test="deptno!=null"> and deptno = #{deptno} </if>  
</select>
```

测试代码一:
```Java
@Test  
public void findByCondition(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();   
    List<Emp> empList = mapper.findByCondition(emp);  
    empList.stream().forEach(System.out::println);  
}
```
上述测试文件最终执行的语句是 : `select * from emp where 1=1`

测试代码二:
```Java
@Test  
public void findByCondition(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();
    emp.setEmpno(7499); 
    List<Emp> empList = mapper.findByCondition(emp);  
    empList.stream().forEach(System.out::println);  
}
```
上述测试文件最终执行的语句是 : `select * from emp where 1=1 and empno = ?`

## WHERE标签

### 语法

```XMl
<where>语句块</where>
```

用于处理where和and:
1. 当语句块中存在语句时,会自动拼接Where
2. 当第一个条件前带有and时,会自动处理多余的and

### 案例

EmpMapper.Java接口
```Java
List<Emp> findByCondition(Emp emp);
```

EmpMapper.XML
```XML
<select id="findByCondition" resultType="emp" parameterType="emp">  
    select * from emp    
    <where>  
        <if test="empno!=null"> and empno = #{empno} </if>  
        <if test="ename!=null and ename!='' "> and ename = #{ename} </if>  
        <if test="job!=null and job!='' "> and job = #{job} </if>  
        <if test="mgr!=null"> and mgr = #{mgr} </if>  
        <if test="hiredate!=null and hiredate!='' "> and hiredate = #{hiredate} </if>  
        <if test="sal!=null"> and sal = #{sal} </if>  
        <if test="comm!=null"> and comm = #{comm} </if>  
        <if test="deptno!=null"> and deptno = #{deptno} </if>  
    </where>  
</select>
```

测试代码一:
```Java
@Test  
public void findByCondition(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();   
    List<Emp> empList = mapper.findByCondition(emp);  
    empList.stream().forEach(System.out::println);  
}
```
上述测试文件最终执行的语句是 : `select * from emp`

测试代码二:
```Java
@Test  
public void findByCondition(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();
    emp.setEmpno(7499); 
    List<Emp> empList = mapper.findByCondition(emp);  
    empList.stream().forEach(System.out::println);  
}
```
上述测试文件最终执行的语句是 : `select * from emp where empno = ?`

## CHOOSE标签

### 语法

```xml
<choose>
	<when test='条件1'>语句1</when>
	<when test='条件2'>语句2</when>
</choose>
```

相当于Java代码中的`switch:case`,满足条件后执行指定的语句,但是后续判断的语句将不再执行

### 案例

EmpMapper.Java接口
```Java
List<Emp> findByCondition(Emp emp);
```

EmpMapper.XML
```XML
<select id="findByCondition" resultType="emp" parameterType="emp">  
    select * from emp    
    <where>  
        <choose>  
            <when test="empno!=null"> and empno = #{empno} </when>  
            <when test="ename!=null and ename!='' "> and ename = #{ename} </when>  
            <when test="job!=null and job!='' "> and job = #{job} </when>  
            <when test="mgr!=null"> and mgr = #{mgr} </when>  
            <when test="hiredate!=null and hiredate!='' "> and hiredate = #{hiredate} </when>  
            <when test="sal!=null"> and sal = #{sal} </when>  
            <when test="comm!=null"> and comm = #{comm} </when>  
            <when test="deptno!=null"> and deptno = #{deptno} </when>  
        </choose>  
    </where>  
</select>
```

测试代码一:
```Java
@Test  
public void findByCondition(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();   
    List<Emp> empList = mapper.findByCondition(emp);  
    empList.stream().forEach(System.out::println);  
}
```
上述测试文件最终执行的语句是 : `select * from emp`

测试代码二:
```Java
@Test  
public void findByCondition(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();
    emp.setEmpno(7499); 
    List<Emp> empList = mapper.findByCondition(emp);  
    empList.stream().forEach(System.out::println);  
}
```
上述测试文件最终执行的语句是 : `select * from emp where empno = ?`

测试代码三:
```Java
@Test  
public void findByCondition(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();
    emp.setEmpno(7499);
    emp.setEmpname("SMITH"); 
    List<Emp> empList = mapper.findByCondition(emp);  
    empList.stream().forEach(System.out::println);  
}
```
上述测试文件最终执行的语句是 : `select * from emp WHERE empno = ?`,因为满足了一个条件后,后续的语句都不在执行

## SET标签

### 语法

```XMl
<set>语句块</set>
```

用于处理`set`和`,`:
1. 当语句块中存在语句时,会自动拼接set
2. 当第一个条件前带有`,`时,会自动处理多余的`,`

### 案例

EmpMapper.Java接口
```Java
int updateEmpByCondtion(Emp emp);
```

EmpMapper.XML
```XML
<update id="updateEmpByCondtion" parameterType="emp">  
    update emp        
    <set>  
		<if test="ename!=null and ename!='' "> , ename = #{ename} </if>  
		<if test="job!=null and job!='' "> , job = #{job} </if>  
		<if test="mgr!=null"> , mgr = #{mgr} </if>  
		<if test="hiredate!=null and hiredate!='' "> , hiredate = #{hiredate} </if>  
		<if test="sal!=null"> , sal = #{sal} </if>  
		<if test="comm!=null"> , comm = #{comm} </if>  
		<if test="deptno!=null"> , deptno = #{deptno} </if>  
	</set>  
	<where>  
		empno =#{empno}        
	</where>  
</update>
```

测试代码一:
```Java
@Test  
public void updateEmpByCondtion(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();  
    emp.setEmpno(8899);  
    emp.setEname("LISI");  
    emp.setMgr(1500);  
    emp.setSal(1500.0);  
    mapper.updateEmpByCondtion(emp);  
}
```
上述测试文件最终执行的语句是 : `update emp SET ename = ? , mgr = ? , sal = ? WHERE empno =? `

## TRIM标签

**trim**标签一般用于去除sql语句中多余的and关键字，逗号，或者给sql语句前拼接 “where“、“set“以及“values(“ 等前缀，或者添加“)“等后缀，可用于选择性插入、更新、删除或者条件查询等操作。

### 语法

```XMl
<trim prefix='拼接前缀'  prefixOverrides='去除前缀'  suffix='拼接后缀' suffixOverrides='去除后缀'>语句块</trim>
```

1. prefix 要增加什么前缀
2. prefixOverrides 要去除什么前缀
3. suffix 要增加什么后缀
4. suffixOverrides 要去除什么后缀

### 案例

EmpMapper.Java接口
```Java
int updateEmpByCondtion(Emp emp);
```

EmpMapper.XML
```XML
<update id="updateEmpByCondtion" parameterType="emp">  
    update emp    
    <trim prefix="set" suffixOverrides=",">  
        <if test="ename!=null and ename!='' "> ename = #{ename} , </if>  
        <if test="job!=null and job!='' ">  job = #{job} , </if>  
        <if test="mgr!=null">  mgr = #{mgr} , </if>  
        <if test="hiredate!=null and hiredate!='' "> hiredate = #{hiredate} ,</if>  
        <if test="sal!=null">  sal = #{sal} , </if>  
        <if test="comm!=null"> comm = #{comm} ,</if>  
        <if test="deptno!=null"> deptno = #{deptno},  </if>  
    </trim>  
    <where>  
        empno =#{empno}    
	</where>  
</update>
```

测试代码一:
```Java
@Test  
public void updateEmpByCondtion(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    Emp emp = new Emp();  
    emp.setEmpno(8899);  
    emp.setEname("LISI");  
    emp.setMgr(1500);  
    emp.setSal(1500.0);  
    mapper.updateEmpByCondtion(emp);  
}
```
上述测试文件最终执行的语句是 : `update emp SET ename = ? , mgr = ? , sal = ? WHERE empno =? `

## BIND标签

一般用于处理模糊查询的模板

在之前的处理中,我们是这样处理模糊查询的:
![[Mybatis代理模式的开发#模糊查询#方式二: 使用concat()函数拼接 - 推荐]]

这样使用并不优雅,我们可以使用 `BIND标签` 来处理.

### 语法

```XMl
<bind name="名字1" value="参数1"/> 
```
bind 标签可以让我们在SQL中对`参数1`进行动态的处理,然后保存到`名字1`中,方便后续的SQL使用

### 案例

EmpMapper.XML
```XML
<select id="findObjectByName" parameterType="string" resultType="emp">  
    <bind name="findEname" value="'%'+ename+'%'"/>  
    select * from emp where ename like concat('%',#{findEname},'%')
</select>
```

测试单元

```java
@Test  
public void findObjectByName(){  
    EmpMapper mapper = sqlSession.getMapper(EmpMapper.class);  
    List<Emp> empList = mapper.findObjectByName("a");  
    empList.stream().forEach(System.out::println);  
}
```
上述测试文件最终执行的语句是 :`select * from emp where ename like concat('%',?,'%') `

## SQL标签与include标签

SQL标签可以对一些复用性比较高的代码段进行包裹,方便其他地方快速的调用

### 语法

```XML
<!-- 创建  -->
<sql id="名字">代码段</sql>

<!-- 引用  -->
<include refid="名字"></include>
```

注意: SQL标签可以多层嵌套,例如:

```XMl
<sql id="名字1">代码段1</sql>
<sql id="名字2"><include refid="名字1"></include>代码段2</sql>
```

那么在使用`名字2`时,则会依次查找然后拼接最后的代码: `代码段1代码段2`

### 案例

EmpMapper.java接口
```Java
List<Emp> findObject();
```

EmpMapper.xml
```XML
<sql id="empColumn">empno,ename,job,mgr,hiredate,sal,comm,deptno</sql>  
<select id="findObject"  resultType="emp">  
    select <include refid="empColumn"></include> from emp
</select>
```

测试代码
```Java
@Test  
public void findObject(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    List<Emp> empList = mapper.findObject();  
    empList.stream().forEach(System.out::println);  
}
```
上述测试文件最终执行的语句是 : `select empno,ename,job,mgr,hiredate,sal,comm,deptno from emp`

## FOREACH标签

用来遍历集合或者数组,通常是用来处理`In`中的参数

### 语法

```XMl
<foreach collection="array" separator="," open="(" close=")" item="empNo"> 代码块 </foreach>
```

用于遍历数组或集合:
- `collection` : 遍历的集合或者是数组 (数组为array/集合为list)
- `separator` : 多个元素取出的时候 用什么文字分隔 
- `open` : 以什么开头
- `close` : 以什么结尾
- `item` : 中间变量名

### 案例

#### 测试数组

EmpMapper.Java接口
```Java
List<Emp> findObjectsByEmpNo1(int[] empno);
```

EmpMapper.XML
```XML
<select id="findObjectsByEmpNo1"  resultType="emp">  
    select *  from emp where empno in    
    <foreach collection="array" separator="," open="(" close=")" item="empNo">  
        #{empNo}    
	</foreach>  
</select>
```

测试代码一:
```Java
@Test  
public void findObjectsByEmpNo1(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    int[] arr = new int[]{7369,7499,7521};  
    List<Emp> empList = mapper.findObjectsByEmpNo1(arr);  
    empList.stream().forEach(System.out::println);  
}
```
上述测试文件最终执行的语句是 : `select * from emp where empno in ( ? , ? , ? ) `

#### 测试集合

EmpMapper.Java接口
```Java
List<Emp> findObjectsByEmpNo(List<Integer> empno);
```

EmpMapper.XML
```XML
<select id="findObjectsByEmpNo"  resultType="emp">  
    select *  from emp where empno in    
    <foreach collection="list" separator="," open="(" close=")" item="empNo">  
        #{empNo}    
	</foreach>  
</select>
```

测试代码一:
```Java
@Test  
public void findObjectsByEmpNo2(){  
    EmpMapper2 mapper = sqlSession.getMapper(EmpMapper2.class);  
    List<Integer> integers = Arrays.asList(7369, 7499, 7521);  
    List<Emp> empList = mapper.findObjectsByEmpNo2(integers);  
    empList.stream().forEach(System.out::println);  
}
```
上述测试文件最终执行的语句是 : `select * from emp where empno in ( ? , ? , ? ) `
