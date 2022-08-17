import { defineUserConfig, defaultTheme } from "vuepress"
import { searchPlugin } from "@vuepress/plugin-search"

export default defineUserConfig({
  lang: "zh-CN",
  title: "Good-Look",
  description: "",
  head: [["link", { rel: "icon", href: "/img/favicon.ico" }]],
  theme: defaultTheme({
    logo: "/img/logo.jpg",
    navbar: [],
    sidebar: [
      {
        text: "javascript",
        collapsible: true,
        children: ["/javascript/事件循环.md"],
      },
      {
        text: "typescript",
        collapsible: true,
        children: ["/typescript/内置工具类型.md"],
      },
      {
        text: "node",
        collapsible: true,
        children: ["/node/内置模块.md"],
      },
      {
        text: "vue",
        collapsible: true,
        children: ["/vue/响应式原理.md"],
      },
      {
        text: "react",
        collapsible: true,
        children: [],
      },
    ],
  }),
  plugins: [searchPlugin({})],
})
