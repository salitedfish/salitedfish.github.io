---
lang: zh-CN
title: setup_script
description: 页面的描述
---

#### 简介
+ setup script是vue3推出的vue组件语法糖。
+ 提供了一些编译器宏供用户使用，如：defineProps、defineEmits、defineExpose。
+ script标签内的变量、组件不需要显示导出，模板可直接引用。
+ 组件默认关闭，父组件无法通过ref获取到本组件示例。

#### 示例
```vue
<script lang="ts" setup>
import { ref } from "vue"

const a = ref(1)

const props = withDefaults(
  defineProps<{
    name: string;
  }>(),
  {
    name: "string",
  }
);

const emit = defineEmits<{
  (event: "eventName", id: number): void;
}>();

defineExpose({
  a,
})

emit("eventName", 100);
props.name;

</script>
```

#### 在style中使用响应式数据
+ vue3新增的功能，响应式数据在template和style中都能使用
```vue
<script lang="ts" setup>
import { reactive } from "vue";

const test = reactive({ color: "#333" });
const changeColor = () => {
  test.color = test.color === "#333" ? "#fff" : "#333";
};
</script>

<template>
  <div id="threeScene" @click="changeColor"></div>
</template>

<style scoped lang="less">
#threeScene {
  width: 100vw;
  height: 100vh;
  background-color: v-bind("test.color");
}
</style>
```