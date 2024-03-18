---
lang: zh-CN
title: springboot切面
description: 页面的描述
---

# springboot 切面配合自定义注解使用

## 1.自定义注解

```java
import java.lang.annotation.ElementType;

@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
public @interface MyAspect {
    String value();
    String name();
}

```

## 2.切面类

```java
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;

@Aspect
@Component
public class MyAspectClass {

    /**
     * 在加了注解的方法执行前执行
     */
    @Before("@annotation(myAspect)")
    public void before(JoinPoint point, MyAspect myAspect) throws Throwable {
        // 获取注解方法的参数
        Object params = joinPoint.getArgs()[0];
        // 获取使用注解的值
        myAspect.value();
        myAspect.name();
    }

    /**
     * 在加了注解的方法执行后执行
     */
    @After("@annotation(myAspect)")
    public void after(JoinPoint point, MyAspect myAspect) throws Throwable {
        // 获取使用注解的值
        myAspect.value();
        myAspect.name();
    }

    /**
     * 可以选择执行前还是执行后
     */
    @Around("@annotation(myAspect)")
    public Object around(ProceedingJoinPoint point, MyAspect myAspect) throws Throwable {
        // 执行前
        // 获取使用注解的值
        myAspect.value();
        myAspect.name();
        // 执行原来的方法，且可以获得返回值
        Object result = point.proceed();
        // 执行后
        // 获取使用注解的值
        myAspect.value();
        myAspect.name();
        // 返回结果
        return result;
    }
}
```

## 3.使用

```java

public class TestAspect {

    @MyAspect("我是切面",name = "我是切面")
    public void test() {
    }
}
```
