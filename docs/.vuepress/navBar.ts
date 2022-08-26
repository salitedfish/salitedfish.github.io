export const navBar = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "github地址",
    link: "https://github.com/salitedfish/salitedfish.github.io",
  },
  {
    text: "项目文档",
    children: [
      {
        text: "vue",
        children: [
          {
            text: "vue3文档",
            link: "https://cn.vuejs.org/guide/introduction.html",
          },
          {
            text: "pinia文档",
            link: "https://pinia.web3doc.top/",
          },
          {
            text: "muxt文档",
            link: "https://v3.nuxtjs.org/guide/concepts/introduction",
          },
        ],
      },
      {
        text: "react",
        children: [
          {
            text: "react文档",
            link: "https://reactjs.org/",
          },
          {
            text: "react native文档",
            link: "https://www.react-native.cn/",
          },
          {
            text: "mobx文档",
            link: "https://mobx.js.org/README.html",
          },
        ],
      },
      {
        text: "build tools",
        children: [
          {
            text: "vite文档",
            link: "https://vitejs.cn/",
          },
          {
            text: "gulp文档",
            link: "https://www.gulpjs.com.cn/",
          },
          {
            text: "rollup文档",
            link: "https://www.rollupjs.com/",
          },
          {
            text: "vitest文档",
            link: "https://cn.vitest.dev/guide/why.html",
          },
          {
            text: "qiankun文档",
            link: "https://qiankun.umijs.org/zh",
          },
        ],
      },
      {
        text: "css",
        children: [
          {
            text: "tailwindcss文档",
            link: "https://tailwindcss.com/",
          },
          {
            text: "less文档",
            link: "https://less.bootcss.com/",
          },
        ],
      },
      {
        text: "others",
        children: [
          {
            text: "emoji参考地址",
            link: "https://github.com/ikatyang/emoji-cheat-sheet",
          },
        ],
      },
    ],
  },
  {
    text: "学习网站",
    children: [
      {
        text: "coderSheep学习/工具网站",
        link: "https://www.r2coding.com/#/",
      },
    ],
  },
]
