---
title: JpaSpecificationExecutor接口
icon: file
order: 1
author: 十七
date: 2023-08-05 周六
category:
	- 初级开发工程师
tag:
	- P5
sticky: true
index: true
---

## 了解JpaRepository接口

> 提供的有多条件查询，并支持分页和排序功能，此接口不能单独使用，需要和其他的接口一块使用

```java
public interface JpaSpecificationExecutor<T> {
    T findOne(Specification<T> var1);
    List<T> findAll(Specification<T> var1);
    Page<T> findAll(Specification<T> var1, Pageable var2);
    List<T> findAll(Specification<T> var1, Sort var2);
    long count(Specification<T> var1);
}
```

## 搭建环境

请按照开始章节搭建环境 : [入门案例](../01_入门案例/入门案例.md)
## 使用

### 创建接口

StudentDaoByCrudRepository.java 接口 继承 CrudRepository接口
```Java
public interface StudentDaoJpaSpecificationExecutor extends JpaRepository<Student,Integer>, JpaSpecificationExecutor {

}
```

### 单一条件查询

> `List<T> findAll(Specification<T> var1);` 方法可以进行单一查询

```Java
@RunWith(SpringJUnit4ClassRunner.class)  
@ContextConfiguration("classpath:applicationContext.xml")  
public class TestDemo08 {  
    @Autowired  
    private StudentDaoJpaSpecificationExecutor studentDaoJpaSpecificationExecutor;  
    /**  
     * 单一结果查询  
     */  
    @Test  
    public void testDemo01(){  
        Specification specification = new Specification() {  
            /**  
             * 定义查询条件  
             * @param root 根对象  封装查询条件的对象  
             * @param criteriaQuery 基本的查询  
             * @param criteriaBuilder 创建查询条件  
             * @return  
             */  
            @Override  
            public Predicate toPredicate(Root root, CriteriaQuery criteriaQuery, CriteriaBuilder criteriaBuilder) {  
                Predicate equal = criteriaBuilder.equal(root.get("stuName"), "张三");  
                return equal;  
            }  
        };  
        List studentsList = studentDaoJpaSpecificationExecutor.findAll(specification);  
        studentsList.forEach(System.out::println);  
    }  
}
```

### 多条件查询

> `List<T> findAll(Specification<T> var1);`  当我们在Specification接口中将参数数组存放到CriteriaBuilder中时，此时获取的就是多个查询条件的结果

```Java
@RunWith(SpringJUnit4ClassRunner.class)  
@ContextConfiguration("classpath:applicationContext.xml")  
public class TestDemo08 {  
    @Autowired  
    private StudentDaoJpaSpecificationExecutor studentDaoJpaSpecificationExecutor;  
    @Test  
    public void testDemo02(){  
        Specification specification = new Specification() {  
            /**  
             * 定义查询条件  
             * @param root 根对象  封装查询条件的对象  
             * @param criteriaQuery 基本的查询  
             * @param criteriaBuilder 创建查询条件  
             * @return  
             */  
            @Override  
            public Predicate toPredicate(Root root, CriteriaQuery criteriaQuery, CriteriaBuilder criteriaBuilder) {  
                ArrayList<Predicate> predicates = new ArrayList<>();  
                predicates.add(criteriaBuilder.equal(root.get("stuName"),"张三"));  
                predicates.add(criteriaBuilder.equal(root.get("stuAge"),18));  
                Predicate[] predicate = new Predicate[predicates.size()];  
                return criteriaBuilder.and(predicates.toArray(predicate));  
            }  
        };  
        List studentsList = studentDaoJpaSpecificationExecutor.findAll(specification);  
        studentsList.forEach(System.out::println);  
    }  
}
```

### 分页查询

> `Page<T> findAll(Specification<T> var1, Pageable var2);` 

```Java
@RunWith(SpringJUnit4ClassRunner.class)  
@ContextConfiguration("classpath:applicationContext.xml")  
public class TestDemo08 {  
    @Autowired  
    private StudentDaoJpaSpecificationExecutor studentDaoJpaSpecificationExecutor;  
    @Test  
    public void testDemo03(){  
        Specification specification = new Specification() {  
            /**  
             * 定义查询条件  
             * @param root 根对象  封装查询条件的对象  
             * @param criteriaQuery 基本的查询  
             * @param criteriaBuilder 创建查询条件  
             * @return  
             */  
            @Override  
            public Predicate toPredicate(Root root, CriteriaQuery criteriaQuery, CriteriaBuilder criteriaBuilder) {  
                return criteriaBuilder.equal(root.get("stuName"),"zhangsan");  
            }  
        };  
        PageRequest pageRequest = new PageRequest(0, 3);  
        Page pageInfo = studentDaoJpaSpecificationExecutor.findAll(specification, pageRequest);  
        System.out.println(pageInfo.getTotalElements());  
        System.out.println(pageInfo.getTotalPages());  
        List content = pageInfo.getContent();  
        System.out.println(content);  
    } 
}
```

### 排序

> `List<T> findAll(Specification<T> var1, Sort var2);`

```Java
@RunWith(SpringJUnit4ClassRunner.class)  
@ContextConfiguration("classpath:applicationContext.xml")  
public class TestDemo08 {  
    @Autowired  
    private StudentDaoJpaSpecificationExecutor studentDaoJpaSpecificationExecutor;  
    @Test  
    public void testDemo04(){  
        Specification specification = new Specification() {  
            /**  
             * 定义查询条件  
             * @param root 根对象  封装查询条件的对象  
             * @param criteriaQuery 基本的查询  
             * @param criteriaBuilder 创建查询条件  
             * @return  
             */  
            @Override  
            public Predicate toPredicate(Root root, CriteriaQuery criteriaQuery, CriteriaBuilder criteriaBuilder) {  
                return criteriaBuilder.equal(root.get("stuName"),"zhangsan");  
            }  
        };  
        Sort sortInfo = new Sort(Sort.Direction.DESC, "stuName");  
        List stuList = studentDaoJpaSpecificationExecutor.findAll(specification, sortInfo);  
        stuList.forEach(System.out::println);  
    }  
}
```

### 分页和排序

> 分页和排序可以将构造分页时，将排序传递进去，然后在使用`Page<T> findAll(Specification<T> var1, Pageable var2);` 查询

```Java
@RunWith(SpringJUnit4ClassRunner.class)  
@ContextConfiguration("classpath:applicationContext.xml")  
public class TestDemo08 {  
    @Autowired  
    private StudentDaoJpaSpecificationExecutor studentDaoJpaSpecificationExecutor;  
    @Test  
    public void testDemo05(){  
        Specification specification = new Specification() {  
            /**  
             * 定义查询条件  
             * @param root 根对象  封装查询条件的对象  
             * @param criteriaQuery 基本的查询  
             * @param criteriaBuilder 创建查询条件  
             * @return  
             */  
            @Override  
            public Predicate toPredicate(Root root, CriteriaQuery criteriaQuery, CriteriaBuilder criteriaBuilder) {  
                return criteriaBuilder.equal(root.get("stuName"),"zhangsan");  
            }  
        };  
        Sort sortInfo = new Sort(Sort.Direction.DESC, "stuName");  
        // 封装分页对象的时候我们可以直接指定 排序的规则
        PageRequest pageRequest = new PageRequest(0, 3, sortInfo);  
        Page pageInfo = studentDaoJpaSpecificationExecutor.findAll(specification, pageRequest);  
        pageInfo.getContent().forEach(System.out::println);  
    }  
}
```
