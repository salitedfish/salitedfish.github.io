---
lang: zh-CN
title: 定时任务
description: 页面的描述
---

# 相关注解

## 类注解

- @EnableScheduling：修饰开启定时任务的类（需要能被 springboot 加载到的类，比如加@Configuration）
- @Scheduled：修饰具体定时任务类
