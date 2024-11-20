---
lang: zh-CN
title: hook
description: 页面的描述
---

#### 用法

- react 的 hook 用法需要谨慎，很多需要开发者自行控制
- react 数据更新很重要的一点是，每次更改数据都会创建新的指针(除非更改引用类型内部的值)，只有指针变了，组件才会更新
- react 变量更改后，即使延时也只能获取到老的指针，除非在数据更新后再获取指针
- 组件函数，内部数据更改每次都会执行
- useEffect 只有首次渲染和依赖改变时才会执行，依赖默认依赖内部全部变量。如果传空则无依赖，只有首次渲染执行
- useState 是异步更新，如果传数据会合并更改，传函数则会依次更改，但更新只会触发最后一次
- useState 更改值并不只是单单改值，连指针也改了

```ts
import React, { useEffect, useState } from "react"
const Com = () => {
  console.log("update function")
  const [list, setList] = useState<Number[]>([])
  //setList([123]) // 不能在这里更改数据，否则会无限重新渲染
  useEffect(() => {
    console.log("update effect")
    Promise.resolve().then(() => {
      // setList((list) => {
      //   list.push(123)
      //   return list
      // }) //这样写指针没变，最后结果是[123]，但是这样写组件函数不会更新
      // setTimeout(() => {
      //   console.log("list",list)
      // }, 1000)

      setList([123]) //这样写指针变了，最后结果还是[]
      setTimeout(() => {
        console.log("list", list)
      }, 1000)
    })
  }, []) // 如果不写依赖，并且useEffect内改动了数据的指针，则useEffect和组件函数会无限执行，空数组则只有首次执行

  useEffect(() => {
    console.log(list) // 这样写当list指针改变时，获取到的是[123]
  }, [list])

  return <div></div>
}

export default Com
```
