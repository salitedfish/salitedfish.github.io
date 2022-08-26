---
lang: zh-CN
title: 用法
description: 页面的描述
---

#### 简介
+ vuex5:wink:
+ 支持typescript
+ 可以像在setup里面一样写代码

#### 示例
+ 安装pinia
```ts
//main.ts
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.mount("#app");
```
+ 创建store
```ts
//store.ts
import { ref } from "vue";
import { defineStore } from "pinia";

//pinia支持像vue3setup的写法
export const store = defineStore("store", () => {
  const name = ref("gxk")
  return {
    name
  };
});

//pinia支持像vuex的写法，只是没有mutation
export const storeDemo = defineStore("storeDemo", {
    state: () => {
        return {
            name: "gxk"
        }
    }
    actions: {
        nameSetter(){
            this.name = "gxh"
        }
    },
    getters: {
        nameGetter(state){
            return state.name
        }
    }
})
```
+ 使用store
```vue
<script lang="ts" setup>
import { store, storeToRefs  } from "@/store";

const store = store();
store.name
store.$reset()
const { name } = storeToRefs(store());

</script>
```