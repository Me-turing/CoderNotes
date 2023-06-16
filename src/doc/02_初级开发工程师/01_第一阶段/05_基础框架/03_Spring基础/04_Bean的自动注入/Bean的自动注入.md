---
title: Bean的自动注入
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

## 前言

在之前的学习中,我们采用时是**通过property标签手动指定给属性进行注入**:

[Bean对象的引用](../02_基于XML管理Bean/基于XML管理Bean.md#Bean对象的引用)

对此,我们也可以使用Spring中提供的属性,让Spring自动帮我们注入Bean对象.

## Bean的自动注入

### 相关属性

`autowire` 属性控制自动将容器中的对象注入到当前对象的属性上
- `byName` 根据目标id值和属性值注入,要保证当前对象的属性值和目标对象的id值一致
- `byType` 根据类型注入,要保证相同类型的目标对象在容器中只有一个实例

### 相关代码

实体类
```Java
@ToString  
@NoArgsConstructor  
@Data  
public class Dept {  
}
```

```Java
@ToString  
@Data  
@AllArgsConstructor  
@NoArgsConstructor  
public class Emp {  
	private Dept dept;  
}
```

applicationContext.xml
```Xml
<!-- 注册Dept类 -->  
<bean id="dept" class="com.meturing.pojo.Dept"></bean>  
  
<!-- 手动注入 -->  
<bean id="emp1" class="com.meturing.pojo.Emp">  
	<property name="dept" ref="dept"></property>  
</bean>  
  
<!--  
自动注入dept  
autowire 属性控制自动将容器中的对象注入到当前对象的属性上  
byName 根据目标id值和属性值注入,要保证当前对象的属性值和目标对象的id值一致  
byType 根据类型注入,要保证相同类型的目标对象在容器中只有一个实例  
-->  
<bean id="emp2" class="com.meturing.pojo.Emp" autowire="byName"></bean>
```

测试代码
```Java
@Test  
public void test04(){  
	ClassPathXmlApplicationContext classPathXmlApplicationContext = new ClassPathXmlApplicationContext("applicationContext2.xml");  
	Emp emp = classPathXmlApplicationContext.getBean("emp2", Emp.class);  
	System.out.println(emp);  
}
```