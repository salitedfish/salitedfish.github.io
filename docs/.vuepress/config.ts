import { defineUserConfig, defaultTheme } from "vuepress"
import { searchPlugin } from "@vuepress/plugin-search"
import { navBar } from "./navBar"
import fs from "fs"
import path from "path"

/**左侧导航栏自动生成 */
const currentPath = path.resolve(__dirname, "./sideBar.ts")
const sideBar = JSON.parse(fs.readFileSync(currentPath, "utf-8"))

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
