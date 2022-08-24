import { defineUserConfig, defaultTheme } from "vuepress"
import { searchPlugin } from "@vuepress/plugin-search"
import fs from "fs"
import path from "path"

const currentPath = path.resolve(__dirname, "./sideBar.ts")
const sideBar = JSON.parse(fs.readFileSync(currentPath, "utf-8"))

const navBar = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "github地址",
    link: "https://github.com/salitedfish/salitedfish.github.io",
  },
  {
    text: "学习网站",
    children: [
      {
        text: "coderSheep学习网站",
        link: "https://www.r2coding.com/#/",
      },
      {
        text: "emoji参考地址",
        link: "https://github.com/ikatyang/emoji-cheat-sheet",
      },
    ],
  },
]

export default defineUserConfig({
  lang: "zh-CN",
  title: "Good-Look",
  description: "",
  head: [["link", { rel: "icon", href: "/img/favicon.ico" }]],
  theme: defaultTheme({
    logo: "/img/logo.jpg",
    navbar: navBar,
    sidebar: ["/README.md", ...sideBar],
  }),
  plugins: [searchPlugin({})],
})
