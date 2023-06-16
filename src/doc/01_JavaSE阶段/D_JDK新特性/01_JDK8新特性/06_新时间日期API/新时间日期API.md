---
title: 新时间日期API
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


## 旧版日期时间的问题

在旧版本中JDK对于日期时间的这块设计是非常差的

```java
     /**
     * 旧版日期时间的设计问题
     */
    @Test
    public void test01() throws ParseException {
        //设计不合理 有两个Date在不同的包
        //创建时间的时候与预期不符
        Date date = new Date(2022, 12, 18);
        System.out.println(date);//Thu Jan 18 00:00:00 CST 3923
        
        //时间格式化
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        System.out.println(simpleDateFormat.format(date));//3923-01-18
        
        System.out.println(simpleDateFormat.parse("2022-12-18"));//Sun Dec 18 00:00:00 CST 2022
        
        //线程安全性问题:在多线程的情况下 格式化和解析操作会出现报错和不准确的情况
        for (int i = 0; i < 50; i++) {
            new Thread(()->{
                try {
                    System.out.println(simpleDateFormat.parse("2022-12-18"));
                } catch (ParseException e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }
```

缺陷如下:
1.  设计不合理
    在java.util和java.sql的包中都有Date类, java.util.Date同时包含日期和时间,java.sql.Date只有日期,同时用于格式化和解析的类在java.text包下
2.  非线程安全
    java.util.Date是非线程安全的,在多线程使用时可能会出现时间不准确以及报错的情况.所有的日期类都是可变的,这是java日期类最大的问题
3.  时区处理麻烦
    日期类并不提供国际化,没有时区的支持

## 新日期时间API

JDK8中增加了一套全新的日期时间API,这套API设计合理,是线程安全的.新的日期及时间的API位于java.time包中,下面是一些关键类:

| 类名                | 说明                                                    |
| ----------------- | ----------------------------------------------------- |
| LocalDate         | 表示日期 包含年月日 格式为:2019-10-16                             |
| LocalTime         | 表示时间 包含时分秒 格式为: 16:38:54.158549300                    |
| LocalDateTime     | 表示日期时间 包含年月日 时分秒  格式为: 2018-09-06T 15:33:56.750453300 |
| DateTimeFormatter | 日期时间格式化类                                              |
| Instant           | 时间戳,表示一个特定的时间瞬间                                       |
| Duration          | 用于计算两个时间(LocalTime,时分秒)的距离                            |
| Period            | 用于计算两个时间(LocalDate,年月日)的距离                            |
| ZonedDateTime     | 包含时区的时间                                               |

同时Java中使用的历法是ISO 8601日历系统,他是世界民用历法,也就是我们所说的公历. 平年有365天,闰年有366天. 此外java8还提供了4套其他历法:
-   ThaiBuddhistDate : 泰国佛教历
-   MinguoDate : 中华民国历
-   JapaneseDate : 日本历
-   HijrahDate : 伊斯兰历

### 日期时间的常见操作

`LocalDate`  `LocalTime` `LocalDateTime` 的常见操作

```java
    /**
     * 新版JDK8 日期时间操作
     */
    @Test
    public void test01() throws ParseException {
        //创建指定的日期时间
        LocalDate date1 = LocalDate.of(2022, 11, 18);
        System.out.println(date1);//2022-11-18

        //获取当前的日期
        LocalDate date2 = LocalDate.now();
        System.out.println(date2);//2022-12-18

        //根据我们的LocalDate对象获取对应的日期信息
        System.out.println("年:"+date2.getYear());//年:2022
        System.out.println("月:"+date2.getMonth());//月:DECEMBER
        System.out.println("月:"+date2.getMonth().getValue());//月:12
        System.out.println("日:"+date2.getDayOfMonth());//日:18
        System.out.println("星期:"+date2.getDayOfWeek());//星期:SUNDAY
        System.out.println("星期:"+date2.getDayOfWeek().getValue());//星期:7
    }

    /**
     * 新版时间操作
     */
    @Test
    public void test02(){
        //获取指定的时间
        LocalTime time1 = LocalTime.of(5, 26, 33, 23145);
        System.out.println(time1);//05:26:33.000023145

        //获取当前的时间
        LocalTime time2 = LocalTime.now();
        System.out.println(time2);//23:43:44.644

        //获取时间信息
        System.out.println("小时:"+time2.getHour());//小时:23
        System.out.println("分钟:"+time2.getMinute());//分钟:45
        System.out.println("秒:"+time2.getSecond());//秒:52
        System.out.println("纳秒:"+time2.getNano());//纳秒:145000000
    }

    /**
     * 新版日期时间操作
     */
    @Test
    public void test03(){
        //获取指定的时间
        LocalDateTime dateTime = LocalDateTime.of(2020,06,01,12,12,33,1511);
        System.out.println(dateTime);//2020-06-01T12:12:33.000001511

        //获取当前的时间
        LocalDateTime nowDateTime = LocalDateTime.now();
        System.out.println(nowDateTime);//2022-12-18T23:49:14.329

        //获取时间信息
        System.out.println("年:"+nowDateTime.getYear());//年:2022
        System.out.println("月:"+nowDateTime.getMonth());//月:DECEMBER
        System.out.println("月:"+nowDateTime.getMonth().getValue());//月:12
        System.out.println("日:"+nowDateTime.getDayOfMonth());//日:18
        System.out.println("星期:"+nowDateTime.getDayOfWeek());//星期:SUNDAY
        System.out.println("星期:"+nowDateTime.getDayOfWeek().getValue());//星期:7
        System.out.println("小时:"+nowDateTime.getHour());//小时:23
        System.out.println("分钟:"+nowDateTime.getMinute());//分钟:45
        System.out.println("秒:"+nowDateTime.getSecond());//秒:52
        System.out.println("纳秒:"+nowDateTime.getNano());//纳秒:145000000
    }
```

### 日期时间的修改和比较

#### 修改

```java
    /**
     * 日期时间的修改
     */
    @Test
    public void test01(){
        LocalDateTime now = LocalDateTime.now();
        System.out.println("修改前:"+now);
        //修改时间  对已存在的LocalDate对象,创建了它的模板,并不会修改原有的信息,而是帮我们重新创建了对象
        LocalDateTime localDateTime = now.withYear(1998);
        System.out.println("修改后:"+now);
        System.out.println("修改后:"+localDateTime);

        System.out.println(now.withMonth(10));//月份
        System.out.println(now.withHour(10));//小时

        //在当前日期的基础上加上或者减去指定的时间
        System.out.println(now.plusDays(2));//两天后
        System.out.println(now.plusYears(10));//十年后
        System.out.println(now.minusWeeks(1));//一周前
        System.out.println(now.minusYears(10));//十年前
    }
```

注意:在执行`LocalDate`对象的修改时,并不是直接修改了原有的LocalDate,而是返回一个修改后的新的LocalDate对象,原有的对象并不会受到影响,所以在多线程的环境下是安全的.

#### 比较

```java
 @Test
    public void test02(){
        LocalDate now = LocalDate.now();
        LocalDate date = LocalDate.of(1997, 11, 8);
        System.out.println(now.isAfter(date));//true  now是否在date之后
        System.out.println(now.isBefore(date));//false  now是否在date之前
        System.out.println(now.isEqual(date));//false  now与date一致
    }
```

### 格式化和解析操作

在JDK8中我们可以通过\*\*` java.time.format.DateTimeFormatter`\*\* 类可以进行日期的解析和格式化操作

```java
    /**
     * 日期格式化
     */
    @Test
    public void test01(){
        LocalDateTime now = LocalDateTime.now();
        //指定格式 使用系统默认的格式  2022-12-25T18:27:57.119
        DateTimeFormatter isoLocalDateTime = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
        //将日期时间转换为字符串
        String format = now.format(isoLocalDateTime);
        System.out.println(format);

        //指定转换 ofPattern指定想要的日期格式  2022/12/25 18:27:57
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        String format1 = now.format(dateTimeFormatter);
        System.out.println(format1);

        //将字符串解析为指定时间类型  2022-12-25T18:27:57
        LocalDateTime parse = LocalDateTime.parse("2022/12/25 18:27:57", dateTimeFormatter);
        System.out.println(parse);
    }
```

### Instant类

在JDK8中给我提供了Instant类(时间戳/时间线),内部保存了从1970年1月1日 0时0分0秒 以来的 秒和纳秒

```java
    /**
     * 时间戳
     */
    @Test
    public void test01() throws InterruptedException {
        Instant now = Instant.now();
        System.out.println(now);//2022-12-25T10:36:09.565Z
        System.out.println(now.getNano());//获取从1970年1月1日 0时0分0秒 到现在的纳秒
        Thread.sleep(5);
        Instant now1 = Instant.now();
        System.out.println("耗时:"+(now1.getNano()-now.getNano()));
    }
```

### 计算日期时间的差

在JDK8中提供了两个工具类: Duration/Period 来计算两个日期时间的差

1. Duration : 用来计算两个时间差(LocalTime)
2. Period : 用来计算两个日期差(LocalDate)

```java
    /**
     * 计算日期差
     */
    @Test
    public void test01() {
        //计算日期差
        LocalTime now = LocalTime.now();//18:52:37.225
        LocalTime time = LocalTime.of(22, 48, 59);
        //Duration计算时间差
        Duration between = Duration.between(now,time);
        System.out.println(between.toDays());//相差的天数  0
        System.out.println(between.toHours());//相差的小时  3
        System.out.println(between.toMinutes());//相差的分钟  236
        System.out.println(between.toMillis());//相差的秒  14181775
    }

    /**
     * 计算日期差
     */
    @Test
    public void test02() {
        //计算日期差
        LocalDate now = LocalDate.now();//2022-12-25
        LocalDate date = LocalDate.of(1997, 11, 8);
        Period period = Period.between(date, now);
        System.out.println(period.getYears());//相差年份 25
        System.out.println(period.getMonths());//相差月份 1
        System.out.println(period.getDays());//相差天数 17
    }
```

### 时间校正器

有时候我们需要如下调整:  将日期调整到下个月的第一天等操作,这时我们通过时间校正器效果会更好

TemporalAdjuster : 时间校正器
TemporalAdjusters : 通过该类静态方法提供了大量的常用TemporalAdjuster 实现,简化我们的处理操作

```java
    /**
     * 时间校正器
     */
    @Test
    public void test03() {
        LocalDateTime now = LocalDateTime.now();
        System.out.println(now);//2022-12-25T19:17:38.134

        //将当前的日期调整到下个月的一号
        TemporalAdjuster temporalAdjuster = (temporal) -> {
            LocalDateTime localDateTime = (LocalDateTime) temporal;
            LocalDateTime nextMonth = localDateTime.plusMonths(1).withDayOfMonth(1);
            System.out.println("localDateTime:"+nextMonth);//localDateTime:2023-01-01T19:17:38.134
            return nextMonth;
        };

        LocalDateTime with = now.with(temporalAdjuster);
        System.out.println(with);//2023-01-01T19:17:38.134

        //我们还可以通过TemporalAdjusters 来实现
        LocalDateTime with1 = now.with(TemporalAdjusters.firstDayOfNextMonth());
        System.out.println(with1);//2023-01-01T19:21:20.301
    }
```

### 日期时间的时区

Java8中加入了对时区的支持，LocalDate、 LocalTime、LocalDateTime是不带时区的，带时区的日期时间类分别为：ZonedDate / ZonedTime / ZonedDateTime

其中每个时区都对应着ID，ID的格式为"区域/城市”。例如：Asia/Shanghai等。

Zoneld：该类中包含了所有的时区信息

```java
    /**
     * 时区操作
     */
    @Test
    public void test1(){
        //获取所有的时区ID
        ZoneId.getAvailableZoneIds().forEach(System.out::println);

        //获取当前时间 中国使用的是东八区的时区,比标准时间早八个小时
        LocalDateTime now = LocalDateTime.now();
        System.out.println(now);//2022-12-25T19:33:09.036

        //获取标准时间
        ZonedDateTime now1 = ZonedDateTime.now(Clock.systemUTC());
        System.out.println(now1);// 2022-12-25T11:33:09.036Z

        //获取特定时区的时间
        //以当前计算机时区获取时间
        ZonedDateTime now2 = ZonedDateTime.now();
        System.out.println(now2);//2022-12-25T19:33:09.036+08:00[Asia/Shanghai]
        //设定指定时区的时间
        ZonedDateTime now3 = ZonedDateTime.now(ZoneId.of("America/Marigot"));
        System.out.println(now3);//2022-12-25T07:33:09.036-04:00[America/Marigot]
    }
```

## JDK新的日期和时间APi的优势:

1.  新版日期时间API中,日期和时间对象是不可变的,操作日期不会影响原来的值,而是生成一个新的实例
2.  提供不同两种方法,有效的区分了日和机器的操作
3.  TemporalAdjuster可以更精确的操作日期,还可以自定义日期调整
4.  线程安全的
