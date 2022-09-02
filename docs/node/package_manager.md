---
lang: zh-CN
title: 包管理工具
description: 页面的描述
---

#### npm
+ node自带的包管理工具
+ 全局安装的包都安装在npm目录下的node_module下
#### pnpm
pnpm 是一个速度快、磁盘空间大的软件包管理器。pnpm 使用内容可寻址文件系统将所有模块目录中的所有文件存储在磁盘上。使用 npm 或 Yarn 时，如果你有 100 个项目使用 lodash，则磁盘上将有 100 个 lodash 副本。使用 pnpm，lodash 将存储在内容可寻址的存储中
+ node_modules 内的文件是由一个可寻址的内容存储空间链接的
+ 一个包只能访问其 package.json 中指定的依赖关系
#### yarn
#### cnpm