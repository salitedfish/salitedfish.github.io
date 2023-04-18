---
lang: zh-CN
title: 包管理工具
description: 页面的描述
---

#### npm

- node 自带的包管理工具
- npm init 和 npm create 完全等价，npm init vue@next 就是执行 npx create-vue@next, npm init @vue/next 就是 npx @vue/create-next
- 全局安装的包都安装在 npm 目录下的 node_module 下
- npx 用来执行 node_module 中的可执行文件，如果本地没找到就会先从远程安装并执行，之后再删除，从来不会安装在本地，如 npx create-vue@next

#### pnpm

pnpm 是一个速度快、磁盘空间大的软件包管理器。pnpm 使用内容可寻址文件系统将所有模块目录中的所有文件存储在磁盘上。使用 npm 或 Yarn 时，如果你有 100 个项目使用 lodash，则磁盘上将有 100 个 lodash 副本。使用 pnpm，lodash 将存储在内容可寻址的存储中

- node_modules 内的文件是由一个可寻址的内容存储空间链接的
- 一个包只能访问其 package.json 中指定的依赖关系

#### yarn

#### cnpm
