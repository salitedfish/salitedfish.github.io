---
lang: zh-CN
title: workflow
description: 页面的描述
---

### 简介
+ git workflow是由git action组成的工作流程。  
+ 本地仓库创建配置文件后，推送到远程仓库，远程仓库就能监听指定的触发器，从而执行一系列action。
+ 通过workflow可实现一系列自动化操作，如本地更新远程代码时，实现自动部署。

### 配置文件存放路径
配置文件路径一般在本地仓库根目录创建，再推送到远程仓库（当然也可在远程直接创建）。
+ ./github/workflow/xxx.yml  
+ ./github/workflow/xxx.yaml

### 配置文件示例
```yml
# 将出现在 GitHub 仓库的 Actions（操作）选项卡中的工作流程名称
name: docs 

# 指定此工作流程的触发器
on:
  # 每当 push 到 main 分支时触发部署
  push:
    branches: [main]
  # 手动触发部署
  workflow_dispatch:

# 工作流程中运行的所有作业组合在一起
jobs:
  # 定义名为docs的工作
  docs: 
    # 将作业配置为在最新版本的 Ubuntu Linux 运行器上运行
    runs-on: ubuntu-latest
    # 将docs作业中运行的所有步骤组合在一起
    steps:
      - uses: actions/checkout@v2
        with:
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          # 选择要使用的 node 版本
          node-version: "14"

      # 缓存 node_modules
      - name: Cache dependencies
        uses: actions/cache@v2
        id: yarn-cache
        with:
          path: |
            **/node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      # 如果缓存没有命中，安装依赖
      - name: Install dependencies
        if: steps.yarn-cache.outputs.cache-hit != 'true'
        run: yarn --frozen-lockfile

      # 运行构建脚本
      - name: Build VuePress site
        run: yarn docs:build

      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VuePress 的默认输出目录
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

```