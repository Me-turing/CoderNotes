---
title: Spring整合Hibernate
icon: file
order: 1
author: 十七
date: 2023-07-31 周一
category:
	- 初级开发工程师
tag:
	- P5
sticky: true
index: true
---

## 构建项目环境

### 数据源

```SQL
CREATE TABLE `student` (
  `stuid` int NOT NULL AUTO_INCREMENT,
  `stuname` varchar(20) DEFAULT NULL,
  `stuage` int DEFAULT NULL,
  `stugender` char(2) DEFAULT NULL,
  `filename` varchar(100) DEFAULT NULL,
  `filetype` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`stuid`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb3;
```

### 创建Spring项目

创建一个全新的Spring模块

![](assets/image-20230731161237583.png)

![](assets/image-20230731161156658.png)

### 导入依赖

导入所需依赖

```XML
    <dependencies>
        <!--Spring核心包-->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>5.1.6.RELEASE</version>
        </dependency>
        <!--Spring切面包-->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-aspects</artifactId>
            <version>5.1.6.RELEASE</version>
        </dependency>
        <!--SpringORM-->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-orm</artifactId>
            <version>5.1.6.RELEASE</version>
        </dependency>
        <!--Mysql驱动包-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.11</version>
        </dependency>
        <!--德鲁特连接池-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.1.8</version>
        </dependency>
        <!--hibernate-->
        <dependency>
            <groupId>org.hibernate</groupId>
            <artifactId>hibernate-core</artifactId>
            <version>5.0.7.Final</version>
        </dependency>
        <!--junit测试单元-->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-test</artifactId>
            <version>5.1.6.RELEASE</version>
        </dependency>
        <!--lombok-->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.28</version>
        </dependency>
    </dependencies>
```

注意: 此时导入的是`hibernate-core`包

![](assets/image-20230801101258908.png)

### 添加配置文件

添加applicationContext.xml 配置文件

```XML
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:p="http://www.springframework.org/schema/p"
       xmlns:c="http://www.springframework.org/schema/c"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/aop
       http://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/p
       http://www.springframework.org/schema/p/spring-p.xsd
       http://www.springframework.org/schema/c
       http://www.springframework.org/schema/c/spring-c.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/tx
       http://www.springframework.org/schema/tx/spring-tx.xsd
">
    <!--配置包扫描-->
    <context:component-scan base-package="com.meturing"/>
    <!--配置外部的链接依赖-->
    <context:property-placeholder location="classpath:JDBC.properties"/>
    <!-- 创建druid 的数据源 -->
    <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
        <property name="username" value="${jdbc_username}"></property>
        <property name="password" value="${jdbc_password}"></property>
        <property name="driverClassName" value="${jdbc_driver}"></property>
        <property name="url" value="${jdbc_url}"></property>
    </bean>
    <!-- 配置Hibernate的SessionFactory对象 -->
    <bean class="org.springframework.orm.hibernate5.LocalSessionFactoryBean" id="sessionFactory">
        <!-- 关联数据源 -->
        <property name="dataSource" ref="dataSource"></property>
        <!-- 配置Hibernate的属性信息 -->
        <property name="hibernateProperties">
            <props>
                <prop key="show_sql">true</prop>
                <prop key="hibernate.hbm2ddl.auto">update</prop>
                </props>
        </property>
        <!-- 扫描路径 -->
        <property name="packagesToScan">
            <list>
                <value>com.meturing.pojo</value>
            </list>
        </property>
    </bean>
    <!-- 配置HibernateTemplate对象 -->
    <bean class="org.springframework.orm.hibernate5.HibernateTemplate" id="hibernateTemplate">
        <property name="sessionFactory" ref="sessionFactory"/>
    </bean>
    <!--  配置事务管理-->
    <bean class="org.springframework.orm.hibernate5.HibernateTransactionManager" id="transactionManager">
        <property name="sessionFactory" ref="sessionFactory" />
    </bean>
    <!-- 配置开启事务注解 -->
    <tx:annotation-driven transaction-manager="transactionManager"/>
</beans>
```

> 基本的注册配置与JDBCTemplate配置比较相似:
> 1. 配置包扫描
> 2. 导入外部文件引用
> 3. 配置Durid连接池
> 4. 配置Hibernate的SessionFactory对象 -> **LocalSessionFactoryBean**
> 5. 配置HibernateTemplate对象 -> **HibernateTemplate**
> 6.  配置事务管理 -> **HibernateTransactionManager**
> 7. 配置开启事务注解

添加数据库链接配置:

```properties
jdbc_username=CoderNotes
jdbc_password=CoderNotes
jdbc_driver=com.mysql.cj.jdbc.Driver
jdbc_url=jdbc:mysql://xxx.xxx.xxx.xx:3306/codernotes?useSSL=false&useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true
```

### 创建实体类

创建实体类Student.java

```Java
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "student")
public class Student implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="stuid")
    private Integer stuId;
    @Column(name="stuname")
    private String stuName;
    @Column(name="stuage")
    private Integer stuAge;
    @Column(name="stugender")
    private Integer stuGender;
    @Column(name="filename")
    private String fileName;
    @Column(name="filetype")
    private String fileType;
}
```

>1. `@Entity` 注解需要标注在实体类上,表示当前是个实体类
>2. `@Table(name = "xxxx")`注解修改当前类Mapping到指定的表名(如果类名与表明不一致时使用)
>3. `@Id` 使用在字段上,表示当前字段是主键
>4. `@GeneratedValue(strategy = GenerationType.IDENTITY)` 使用在主键字段上,表示当前主键自增方式
>5. `@Column(name="xxx")` 使用在字段上,表示当前的字段和数据库中的字段的映射方式

### 创建持久层

IStudent.java 接口
```Java
public interface IStudent {

}
```

IStudentImpl.java实现类
```java
@Repository
public class IStudentImpl implements IStudent {
	@Autowired  
	private HibernateTemplate hibernateTemplate;
}
```

## 实现业务代码

### 插入数据

> save 方法可以插入数据

IStudent.java 接口

```Java
public interface IStudent {
    void insertStudent(Student student);
}
```

IStudentImpl.java实现类

```Java
@Repository
public class IStudentImpl implements IStudent {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    /*插入数据*/
    @Override
    public void insertStudent(Student student) {
        hibernateTemplate.save(student);
    }
}
```

TestDemo01.Java测试类

```Java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class TestDemo01 {
    @Autowired
    private IStudent iStudent;
    @Test
    @Transactional
    @Rollback(false)
    public void testInsertStudent(){
        Student zhaoliu = new Student(null, "zhaoliu", 18, 10, "", "");
        iStudent.insertStudent(zhaoliu);
    }
}
```

### 更新数据

>update 可以更新数据

IStudent.java 接口

```Java
public interface IStudent {
    void updateStudent(Student student);
}
```

IStudentImpl.java实现类

```Java
@Repository
public class IStudentImpl implements IStudent {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    /*更新数据*/
    @Override
    public void updateStudent(Student student) {
        hibernateTemplate.update(student);
    }
}
```

TestDemo01.Java测试类

```Java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class TestDemo01 {
    @Autowired
    private IStudent iStudent;
    @Test
    @Transactional
    @Rollback(false)
    public void testUpdateStudent(){
        Student zhaoliu = new Student(37, "zhaoliu", 20, 10, "11", "22");
        iStudent.updateStudent(zhaoliu);
    }
}
```

### 删除数据

> delete语句可以删除数据

IStudent.java 接口

```Java
public interface IStudent {
    void deleteStudent(Student student);
}
```

IStudentImpl.java实现类

```Java
@Repository
public class IStudentImpl implements IStudent {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    /*删除数据*/
    @Override
    public void deleteStudent(Student student) {
        hibernateTemplate.delete(student);
    }
}
```

TestDemo01.Java测试类

```Java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class TestDemo01 {
    @Autowired
    private IStudent iStudent;
    @Test
    @Transactional
    @Rollback(false)
    public void testDeleteStudent(){
        Student zhaoliu = new Student(37, "zhaoliu", 20, 10, "11", "22");
        iStudent.deleteStudent(zhaoliu);
    }
}
```


### 查询数据

#### get

> get方法可以直接根据主键获取数据

IStudent.java 接口

```Java
public interface IStudent {
    Student selectStudentById(Integer studentId);
}
```

IStudentImpl.java实现类

```Java
@Repository
public class IStudentImpl implements IStudent {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    /*根据主键查询数据*/
    @Override
    public Student selectStudentById(Integer studentId) {
        return hibernateTemplate.get(Student.class,studentId);
    }
}
```

TestDemo01.Java测试类

```Java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class TestDemo01 {
    @Autowired
    private IStudent iStudent;
    @Test
    @Transactional
    public void testSelectStudentById(){
        Student student = iStudent.selectStudentById(1);
        System.out.println(student);
    }
}
```

#### createQuery

> createQuery方法可以直接拼写条件查询

IStudent.java 接口

```Java
public interface IStudent {
    List<Student> selectStudentByName(String studentName);
}
```

IStudentImpl.java实现类

```Java
@Repository
public class IStudentImpl implements IStudent {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    /*根据用户姓名获取数据*/
    @Override
    public List<Student> selectStudentByName(String studentName) {
        Session currentSession = hibernateTemplate.getSessionFactory().getCurrentSession();
        Query studentQuery = currentSession.createQuery(" from Student where stuname = :stuName").setString("stuName", studentName);
        return studentQuery.list();
    }
}
```

> 注意：此时from的是具体的实体类名，而非表名

TestDemo01.Java测试类

```Java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class TestDemo01 {
    @Autowired
    private IStudent iStudent;
    @Test
    @Transactional
    public void testSelectStudentByName(){
        List<Student> studentList = iStudent.selectStudentByName("name1");
        for (Student student : studentList) {
            System.out.println(student);
        }
    }
}
```

#### createSQLQuery

>createSQLQuery方法可以使用自定义SQL查询

IStudent.java 接口

```Java
public interface IStudent {
    List<Student> selectStudentByNameUseSQL(String studentName);
}
```

IStudentImpl.java实现类

```Java
@Repository
public class IStudentImpl implements IStudent {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    /*手动执行SQL查询*/
    @Override
    public List<Student> selectStudentByNameUseSQL(String studentName) {
        Session currentSession = hibernateTemplate.getSessionFactory().getCurrentSession();
        Query studentQuery = currentSession.createSQLQuery("select * from student where stuname = ?")
                .addEntity(Student.class)
                .setString(0, studentName);
        return studentQuery.list();
    }
}
```

TestDemo01.Java测试类

```Java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class TestDemo01 {
    @Autowired
    private IStudent iStudent;
    @Test
    @Transactional
    public void testSelectStudentByNameUseSQL(){
        List<Student> studentList = iStudent.selectStudentByNameUseSQL("name1");
        for (Student student : studentList) {
            System.out.println(student);
        }
    }
}
```


#### createCriteria

>createCriteria可以使用条件构造器查询

IStudent.java 接口

```Java
public interface IStudent {
    List<Student> selectStudentByNameUseCriteria(String studentName);
}
```

IStudentImpl.java实现类

```Java
@Repository
public class IStudentImpl implements IStudent {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    /*使用条件比较器查询*/
    @Override
    public List<Student> selectStudentByNameUseCriteria(String studentName) {
        Session currentSession = hibernateTemplate.getSessionFactory().getCurrentSession();
        Criteria studenCriteria = currentSession.createCriteria(Student.class)
                .add(Restrictions.eq("stuName", studentName));
        return studenCriteria.list();
    }
}
```

> 注意：此时stuName是实体类中具体的字段名，而非表中的字段名

TestDemo01.Java测试类

```Java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class TestDemo01 {
    @Autowired
    private IStudent iStudent;
    @Test
    @Transactional
    public void testSelectStudentByNameUseCriteria(){
        List<Student> studentList = iStudent.selectStudentByNameUseCriteria("name1");
        for (Student student : studentList) {
            System.out.println(student);
        }
    }
}
```
