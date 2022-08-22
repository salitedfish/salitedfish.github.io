---
lang: zh-CN
title: 配置
description: 页面的描述
---

### 示例
```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  base: "/root",
  plugins: [vue(), eslintPlugin({ include: ["src/**/*.js", "src/**/*.ts", "src/**/*.vue"] })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    https: true,
    proxy: {
      "/api": {
        target: "http://172.16.100.174:8007",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
```