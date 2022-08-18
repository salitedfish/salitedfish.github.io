---
lang: zh-CN
title: ES模块化
description: 页面的描述
---

### 简介
+ 编译时静态导入，导入后不可修改导入的值(但是对象里的值还是改的)。
+ import需写在文件最开头。
+ 得益于ESModule能够通过import静态分析导入了哪些模块，从而能够实现treesharking。
### 示例
```ts
//manModule.ts
export const name = "gxk"
export const sex = "man"
```
```ts
//womanModule.ts
const name = "gxh"
const sex = "woman"
export default {
    name,
    sex
}
```
```ts
import { name } from "./manModule.ts"
import { name as newname } from "./manModule.ts"
import * as man from "./manModule.ts"
import woman from "./womanModule.ts"
export woman from "./womanModule.ts"
woman = "gxl" //err: 不能修改
woman.name = "gxl" //success: 可以修改
```