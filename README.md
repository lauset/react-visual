# React Visual

## 项目简介

Pnpm Workspace MonoRepo

总控可视化

### 使用技术

React18
socket.io
echarts
three.js

**样式部分**

sass
tailwindcss
unocss

**UI组件**

headlessui

**构建相关**

vite4
unplugin-auto-import 自动引入

**开发语言**

ts
tsx

### 目录结构

- packages
  - web                 => @lauset/react-visual
    - envs              => 环境配置
    - locales           => 国际化
    - src               => 项目源码
    - types             => 类型声明
    - unocss.config.ts  => unocss 配置
    - vite.config.ts    => vite 配置
- .eslintrc.js
- tsconfig.json

packages 下所有模块 ts 配置分别继承根 tsconfig

### 自动引入

react

axios

dayjs

API @/api/** 请求

## 项目操作

### 快速运行

安装依赖

```sh
# 进入 web 模块下
pnpm install

# 本地运行并监听其他模块
pnpm dev
```

### 具体脚本

**项目根目录执行**

```sh
# 清理依赖
pnpm clean

# 清理编译文件
pnpm clean:dist

# 运行 web 模块
pnpm dev

# 打包 web 模块
pnpm build:web

# 递归编译
pnpm build
```

**apis 目录执行**

```sh
pnpm build

pnpm watch

pnpm clean
```

**server 目录执行**

node 执行

**web 目录下执行**

```sh
# 本地运行
pnpm dev

# 项目打包
pnpm build

# 本地预览
pnpm preview
```
