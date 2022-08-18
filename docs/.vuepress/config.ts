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
        children: [
          "/javascript/ESModule.md",
          "/javascript/event_loop.md",
          "/javascript/prototype_chain.md",
        ],
      },
      {
        text: "typescript",
        collapsible: true,
        children: ["/typescript/inside_type.md", "/typescript/class.md"],
      },
      {
        text: "vue",
        collapsible: true,
        children: ["/vue/introduce.md", "/vue/setup_script.md"],
      },
      {
        text: "react",
        collapsible: true,
        children: [],
      },
      {
        text: "pinia",
        collapsible: true,
        children: ["/pinia/introduce.md"],
      },
      {
        text: "axios",
        collapsible: true,
        children: ["/axios/introduce.md"],
      },
      {
        text: "vite",
        collapsible: true,
        children: [],
      },
      {
        text: "webpack",
        collapsible: true,
        children: [],
      },
      {
        text: "node",
        collapsible: true,
        children: [
          "/node/commonjs.md",
          "/node/inside_module.md",
          "/node/koa.md",
        ],
      },
      {
        text: "git",
        collapsible: true,
        children: ["/git/command.md", "/git/workflow.md", "/git/page.md"],
      },
      {
        text: "nginx",
        collapsible: true,
        children: ["/nginx/introduce.md"],
      },
      {
        text: "linux",
        collapsible: true,
        children: ["/linux/introduce.md", "/linux/front_deploy.md"],
      },
    ],
  }),
  plugins: [searchPlugin({})],
})
