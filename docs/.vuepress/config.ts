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
        children: ["/javascript/事件循环.md", "/javascript/原型链.md"],
      },
      {
        text: "typescript",
        collapsible: true,
        children: ["/typescript/内置工具类型.md", "/typescript/class相关.md"],
      },
      {
        text: "node",
        collapsible: true,
        children: ["/node/内置模块.md", "/node/koa相关.md"],
      },
      {
        text: "vue",
        collapsible: true,
        children: ["/vue/随笔.md"],
      },
      {
        text: "react",
        collapsible: true,
        children: [],
      },
      {
        text: "git",
        collapsible: true,
        children: ["/git/workflow.md", "/git/page.md"],
      },
      {
        text: "nginx",
        collapsible: true,
        children: ["/nginx/随笔.md"],
      },
    ],
  }),
  plugins: [searchPlugin({})],
})
