---
title: Bean的生命周期
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

## 一般情况下的生命周期

### 生命周期阶段

1.  通过构造器创建bean实例      ->      执行构造器
2.  为bean属性赋值                     ->      执行set方法
3.  初始化bean                            ->      调用bean的初始化方法,需要`init-method`参数配置指定调用的方法
4.  bean的获取                            ->      容器对象 getBean方法
5.  容器关闭销毁bean                 ->      调用销毁方法,需要`destroy-method`参数配置指定调用的方法

### 相关代码

user.java 实体类
```Java
@Data  
@ToString  
public class User {  
private Integer userid;  
private String username;  
private String password;  
  
public User() {  
System.out.println("第一步:User构造");  
}  
  
public void setUsername(String username) {  
System.out.println("第二步:User属性赋值");  
this.username = username;  
}  
  
public void initUser(){  
System.out.println("第三步:User初始化");  
}  
  
public void destoryUser(){  
System.out.println("第五步:User销毁");  
}  
  
  
public User(Integer userid, String username, String password) {  
this.userid = userid;  
this.username = username;  
this.password = password;  
}  
}
```

applicationContext.xml
```XML
<bean id="user" class="com.meturing.pojo.User" init-method="initUser" destroy-method="destoryUser">
	<property name="username" value="xiaoqiang"></property>
</bean>
```

测试代码
```Java
@Test
public void test01(){
	ClassPathXmlApplicationContext classPathXmlApplicationContext = new ClassPathXmlApplicationContext("applicationContext1_1.xml");
	User user = classPathXmlApplicationContext.getBean("user", User.class);
	System.out.println("使用User,第四步:" );
	System.out.println(user);
	classPathXmlApplicationContext.close();//手动关闭容器,触发销毁方法
}
```

运行结果
```Txt
第一步:User构造
第二步:User属性赋值
第三步:User初始化
使用User,第四步:
User(userid=null, username=xiaoqiang, password=null)
第五步:User销毁
```

## Bean后置处理器引入

 如果我们想在Spring容器中完成bean实例化、配置以及其他初始化方法前后要添加一些自己逻辑处理。我们需要定义一个或多个BeanPostProcessor接口实现类，然后注册到Spring IOC容器中。

1. 接口中的两个方法都要将传入的bean返回，而不能返回null，如果返回的是null那么我们通过getBean方法将得不到目标
2. ApplicationContext会自动检测在配置文件中实现了BeanPostProcessor接口的所有bean，并把它们注册为后置处理器，然后在容器创建bean的适当时候调用它，因此部署一个后置处理器同部署其他的bean并没有什么区别。而使用BeanFactory实现的时候，bean 后置处理器必须通过代码显式地去注册，在IOC容器继承体系中的ConfigurableBeanFactory接口中定义了注册方法
 

### 生命周期阶段

1.  通过构造器创建bean实例      ->      执行构造器
2.  为bean属性赋值                     ->      执行set方法
3. **把bean实例传递给bean的后置处理器的方法**
4.  初始化bean                            ->      调用bean的初始化方法,需要`init-method`参数配置指定调用的方法
5. **把bean实例传递给bean的后置处理器的方法**
6.  bean的获取                            ->      容器对象 getBean方法
7.  容器关闭销毁bean                 ->      调用销毁方法,需要`destroy-method`参数配置指定调用的方法

### 相关代码

创建后置处理器: 实现 BeanPostProcesser  重写两个方法
```Java
public class MyBeanProcesser implements BeanPostProcessor {
    /**
     * 在初始化过程之前
     *
     * @param bean     实例化的Bean
     * @param beanName bean的ID
     * @return {@link Object }
     * @author meturing
     * @date 2023/04/28
     */
    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        System.out.println("id为:["+beanName+"]的Bean初始化之前!");
        return bean;//必须给传进来的bean进行返回
    }

    /**
     * 发布过程初始化后
     *
     * @param bean     实例化的Bean
     * @param beanName bean的ID
     * @return {@link Object }
     * @author meturing
     * @date 2023/04/28
     */
    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        System.out.println("id为:["+beanName+"]的Bean初始化之后!");
        return bean;//必须给传进来的bean进行返回
    }
}
```

applicationContext.xml 并将后置处理器添加到容器中
```Java
<bean id="user" class="com.meturing.pojo.User" init-method="initUser" destroy-method="destoryUser">
	<property name="username" value="xiaoqiang"></property>
</bean>
<!--  将bean的处理器注册进来  -->
<bean id="myBeanProcesser" class="com.meturing.beanProcesser.MyBeanProcesser"></bean>
```

测试方法
```Java
@Test
public void test02(){
	ClassPathXmlApplicationContext classPathXmlApplicationContext = new ClassPathXmlApplicationContext("applicationContext1_2.xml");
	User user = classPathXmlApplicationContext.getBean("user", User.class);
	System.out.println("使用User,第四步:" );
	System.out.println(user);
	classPathXmlApplicationContext.close();//手动关闭容器,触发销毁方法
}
```