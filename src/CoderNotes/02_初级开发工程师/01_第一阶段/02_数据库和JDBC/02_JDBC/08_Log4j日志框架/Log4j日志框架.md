---
title: Log4j日志框架
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


### 什么是日志log

异常信息  登录成功失败的信息  其他重要操作的信息

日志可以记录程序的运行状态,运行信息,用户的一些常用操作.日志可以帮助我们分析程序的运行状态,帮我们分析用户的操作习惯,进而对程序进行改进

### 如何记录日志

- 直接打印 : `System.out.println(.....)    e.printStackTrace();`
	- 缺点：不是保存到文件，不能长久存储
- IO流 : 将`System.out.println(.....)  e.printStackTrace();`写入文件
	- 缺点 : 操作繁琐,IO流操作容易阻塞线程,日志没有等级,日志的格式不能很好的定制,要想实行编程复杂
- 使用现成的日志框架，比如log4j
	- 优点 :  1 长久保存 2   有等级3  格式可以很好的定制 4  代码编写简单

### log4j日志的级别

`FATAL`：  指出现非常严重的错误事件，这些错误可能导致应用程序异常中止
`ERROR`： 指虽有错误，但仍允许应用程序继续运行
`WARN`：  指运行环境潜藏着危害
`INFO`：    指报告信息，这些信息在粗粒度级别上突出显示应用程序的进程
`DEBUG`： 指细粒度信息事件，对于应用程序的调试是最有用的

### 使用log4j记录日志

1) 加入jar包   `log4j-1.2.8.jar`
2)  加入属性文件 src 下 `log4j.properties`
```.properties
log4j.rootLogger=error,logfile
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.Target=System.err
log4j.appender.stdout.layout=org.apache.log4j.SimpleLayout
log4j.appender.logfile=org.apache.log4j.FileAppender
log4j.appender.logfile.File=d:/meturing.log
log4j.appender.logfile.layout=org.apache.log4j.PatternLayout
log4j.appender.logfile.layout.ConversionPattern=%d{yyyy-MM-dd   HH:mm:ss} %l %F %p %m%n
```

> 通过属性文件理解log4j的主要API  :
>> - Appender 日志目的地 :ConsoleAppender  FileAppender
>> - Layout 日志格式化器 ：SimpleLayout  PatternLayout

### 代码中记录日志

```properties
//创建一个日志记录器
private static final Logger logger =   Logger.getLogger(DBUtil.class.getName());
 
//在合适的地方添加日志
logger.info("正确的读取了属性文件："+prop);
logger.debug("正确的关闭了结果集");
logger.error("DML操作错误："+e);
```

### 理解日志格式化字符的含义

```text
%p：输出日志信息的优先级，即DEBUG，INFO，WARN，ERROR，FATAL。
%d：输出日志时间点的日期或时间，默认格式为ISO8601，也可以在其后指定格式，如：%d{yyyy/MM/dd HH:mm:ss,SSS}。
%r：输出自应用程序启动到输出该log信息耗费的毫秒数。
%t：输出产生该日志事件的线程名。
%l：输出日志事件的发生位置，相当于%c.%M(%F:%L)的组合，包括类全名、方法、文件名以及在代码中的行数。例如 test.TestLog4j.main(TestLog4j.java:10)。
%c：输出日志信息所属的类目，通常就是所在类的全名。
%M：输出产生日志信息的方法名。
%F：输出日志消息产生时所在的文件名称。
%L：输出代码中的行号。
%m：输出代码中指定的具体日志信息。
%n：输出一个回车换行符，Windows平台为"rn"，Unix平台为"n"。
%x：输出和当前线程相关联的NDC(嵌套诊断环境)，尤其用到像java servlets这样的多客户多线程的应用中。
%%：输出一个"%"字符。
```

### 加入到连接池中

```java
public class MyConnectionPool {
    private static String driver;
    private static String url;
    private static String user;
    private static String password;
    private static int initSize;
    private static int maxSize;
    private static Logger logger;
    private static LinkedList<Connection> pool;
    static{
        logger=Logger.getLogger(MyConnectionPool.class);
        // 初始化参数
        PropertiesUtil propertiesUtil=new PropertiesUtil("/jdbc.properties");
        driver=propertiesUtil.getProperties("driver");
        url=propertiesUtil.getProperties("url");
        user=propertiesUtil.getProperties("user");
        password=propertiesUtil.getProperties("password");
        initSize=Integer.parseInt(propertiesUtil.getProperties("initSize"));
        maxSize=Integer.parseInt(propertiesUtil.getProperties("maxSize"));
        // 加载驱动
        try {
            Class.forName(driver);
        } catch (ClassNotFoundException e) {
            logger.fatal("找不到数据库驱动类"+driver,e);
        }
        // 初始化pool
        pool=new LinkedList<Connection>();
        // 创建5个链接对象
        for (int i = 0; i <initSize ; i++) {
            Connection connection = initConnection();
            if(null != connection){
                pool.add(connection);
                logger.info("初始化连接"+connection.hashCode()+"放入连接池");
            }
        }
    }
    // 私有的初始化一个链接对象的方法
    private static Connection initConnection(){
        try {
            return DriverManager.getConnection(url,user,password);
        } catch (SQLException e) {
            logger.fatal("初始化连接异常",e);
        }
        return null;
    }
    // 共有的向外界提供链接对象的
    public static Connection getConnection(){
        Connection connection =null;
        if(pool.size()>0){
            connection= pool.removeFirst();// 移除集合中的第一个元素
            logger.info("连接池中还有连接:"+connection.hashCode());
        }else{
            connection = initConnection();
            logger.info("连接池空,创建新连接:"+connection.hashCode());
        }
        return connection;
    }
    // 共有的向连接池归还连接对象的方法
    public static void returnConnection(Connection connection){
        if(null != connection){
            try {
                if(!connection.isClosed()){
                    if(pool.size()<maxSize){
                        try {
                            connection.setAutoCommit(true);// 调整事务状态
                            logger.debug("设置连接:"+connection.hashCode()+"自动提交为true");
                        } catch (SQLException e) {
                            e.printStackTrace();
                        }
                        pool.addLast(connection);
                        logger.info("连接池未满,归还连接:"+connection.hashCode());
                    }else{
                        try {
                            connection.close();
                           logger.info("连接池满了,关闭连接:"+connection.hashCode());
                        } catch (SQLException e) {
                            e.printStackTrace();
                        }
                    }
                }else{
                   logger.info("连接:"+connection.hashCode()+"已经关闭,无需归还");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }else{
           logger.warn("传入的连接为null,不可归还");
        }
    }
}

```
