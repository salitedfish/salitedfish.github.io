---
lang: zh-CN
title: node模块化
description: 页面的描述
---

### 简介
+ 运行时动态导入，导入后可修改导入的值。
+ commonjs的模块化其实就是每个文件有个独立的module作用域，并导出了一个对象，其他文件引入这个对象。
+ exports其实就是对module.exports的引用，实际导出的是module.exports。如果重新赋值了module.exports会导致二者的引用不一样，exports会变成空对象。
### 示例
```ts
//nameModule.ts
const name = "gxk"
module.exports = {
  name 
}
exports.name // undefined, 内部其实一开始是exports=module.exports, 如果重新赋值了module.exports会导致二者的引用不一样了

// module.exports.name = name
// exports.name // gxk
```
```ts
const nameModule = require("./nameModule.ts")
console.log(nameModule.name) // gxk
nameModule.name = "gxh"
console.log(nameModule.name) // gxh
const newNameModule = require("./nameModule.ts")
console.log(newNameModule.name) // gxh
```