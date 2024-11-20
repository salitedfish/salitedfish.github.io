---
lang: zh-CN
title: 控制反转
description: spring boot的java bean管理
---

# 相关注解

## 类注解

- @Component：修饰普通 bean
- @Controller：修饰 controller 层
- @RestController：修饰 controller 层
- @Service：修饰 service 层类
- @Repository：修饰 mapper 层类
- @Configuration：修饰配置类

## 方法注解

- @Bean：修饰配置类的方法

## 自动注入注解

- @Autowried：默认按类型再按名称
- @Resource：默认按名称再按类型，且可传名称参数
