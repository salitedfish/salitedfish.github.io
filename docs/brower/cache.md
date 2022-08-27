---
lang: zh-CN
title: 存储
description: 页面的描述
---

#### localstorage
+ 单域名在2.5M到10M，chrome为<span style="color:#3eaf7c">5M</span>
+ 除非手动删除，否则不失效

#### sessionstorage
+ 单域名在2.5M到10M，chrome为<span style="color:#3eaf7c">5M</span>
+ 页面关闭则失效

#### cookie
+ Chrome每个域名最大携带53个，总大小<span style="color:#3eaf7c">4097字节</span>（但是占用8kb空间，占了两个存储区块。4096则是占用4kb空间，占了一个存储区块。磁盘占用只能是4kb的整数倍。）
+ cookie会随HTTP请求发送
+ cookie不区分端口
+ 设置失效时间  
1 关闭浏览器  
2.手动清除Cookie
+ 未设置失效时间  
1.时间到了失效，即使关闭了浏览器也不会被清除，因为cookie信息被保存在了硬盘上，浏览器再次打开的时候就会读取硬盘上的数据，而且不同的浏览器之间是可以共享的  
2.手动清除Cookie

#### indexDB
+ 浏览器提供的本地数据库
+ 可以用js创建和查找
+ 不支持sql查询
+ 操作为异步的
+ 支持事务(事务中一步失败，整个事务取消，数据库回滚)
+ 存在同源限制，只能访问自身域名下的数据库
+ 空间视硬盘大小而定
+ 支持二进制数据(ArrayBuffer和Blob)  
[阮一峰indexDB博客](https://www.ruanyifeng.com/blog/2018/07/indexeddb.html)