---
lang: zh-CN
title: treeSharking
description: 页面的描述
---

#### 简介
+ treeSharking是打包工具rollup、webapck等提供的功能
+ treeSharking是打包的时候将未使用到的代码及无任何副作用的代码删除掉，从而减小打包体积
+ treeSharking依赖ESModule的静态导入分析
+ 副作用指的是改变函数外的变量、修改参数、打印信息等等。注意如果传参为对象，函数内部访问对象内的属性，即使无其他操作，也视为副作用

#### 示例
如下图所示module.ts导出了有副作用的函数foo、poo和一个无任何副作用的函数pureFoo，尽管在index.ts中foo和pureFoo都被执行，但打包结果显示只包含了foo，可见未使用的代码和无任何副作用的代码都不会被打包。
```ts
// module.ts
export const pureFoo = () => {
  pureFoo;
};

export const foo = () => {
  console.log("foo");
};

export const poo = () => {
  console.log("poo");
};
```
```ts
// index.ts
import { pureFoo, foo } from "./module";
pureFoo();
foo();
```
```js
// index.mjs
var foo = function foo() {
  console.log("foo");
};

foo();
```
关于副作用有一点要注意，如下图，pureFoo仅仅只是访问了参数对象中的属性，也被打包进去了，因为打包工具不能判断访问属性是否会产生副作用（如proxy中get进行了其他操作）
```ts
// module.ts
export const pureFoo = (a: { b: number }) => {
  a.b;
};
```
```ts
// index.ts
import { pureFoo } from "./module";
pureFoo({ b: 2 });
```
```js
// index.mjs
var pureFoo = function pureFoo(a) {
  a.b;
};

pureFoo({
  b: 2
});
```
