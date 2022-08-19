---
lang: zh-CN
title: 事件循环
description: 页面的描述
---

### 简介
+ 浏览器用来存储待执行回调函数的队列，分为宏任务队列、微任务队列
+ 宏任务包括定时器、DOM事件回调、AJAX回调（注意Fetch是基于Promise是微任务）
+ 微任务基于Promise的回调、MutationObserverer、queueMicrotask、Object.observe(node中：process.nextTick)
+ 宏任务队列只有一个，每执行完一个宏任务都会检查微任务队列并清空，执行微任务过程中产生微任务则继续执行微任务
+ 浏览器在执行每个宏任务，清空微任务队列后渲染页面，所以微任务过多或执行时间过长为影响页面渲染，宏任务执行时间过长才会影响页面渲染
+ 浏览器单次执行微任务有最大次数（好像是1000次），以防止页面卡顿

### 执行顺序
+ 先初始化完同步任务（此时js堆栈为空）
+ 先检测微任务队列，有则将队列执行完并清空，无则下一步
+ 执行requestFrameAnimation
+ 页面渲染（也有可能不渲染）
+ 执行requestIdleCallback（到这里一次事件循环结束）
+ 执行第一个宏任务
+ 宏任务执行后，再检测微任务队列，有则将队列执行完并清空，无则下一步
+ 执行requestFrameAnimation
+ ...