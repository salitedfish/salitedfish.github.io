---
lang: zh-CN
title: 前端部署
description: 页面的描述
---

#### 脚本部署
+ 这个没有压缩，只是打包
```shell
tar -czf lib.tar lib
scp lib.tar root@121.40.18.70:/root/lib.tar
rm -rf lib
rm -rf lib.tar
ssh root@121.40.18.70 'cd /root && rm -rf lib && tar -xzf lib.tar && rm -rf lib.tar'
```
+ 用powershell自带的Compress-Archive和Expand-Archive来压缩或解压  
+ 这个只能在powershell环境下使用
```shell
Compress-Archive lib lib.zip
scp lib.zip root@121.40.18.70:/root/lib.zip
rm -rf lib
rm -rf lib.zip
ssh root@121.40.18.70 'cd /root && rm -rf lib && unzip lib.zip && rm -rf lib.zip'
```

#### git action 自动化部署
+ 由一系列git action组成的git workflow可以在监听到指定事件时执行此workflow，具体内容可自己配置。  
+ 其实自动化部署就是让git action自动执行部署脚本。  
参考：[git workflow](../git/workflow.md)