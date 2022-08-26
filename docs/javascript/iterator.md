---
lang: zh-CN
title: iterator
description: 页面的描述
---

#### 简介
+ es6提供的用于遍历数据结构的接口
+ 提供for...of..或forEach使用

#### 支持iterator的数据结构
+ Array
+ Map
+ Set
+ String
+ TypedArray
+ arguments
+ NodeList

#### for...of...和for...in...的区别
+ 前者通过iterator遍历，后者通过下标遍历
+ 后者遍历必须要求下标为字符串，如对象、字符串、数组
+ map不能用后者遍历，是因为map的下标可以为任何值
+ set不能用后者遍历，是因为set没有下标
+ array可以用后者遍历，是因为数组的key可以看作下标
+ string可以用后者遍历，是因为字符串的key可以看作下标