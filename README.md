# 🐾 Vibe Pet Landing Page

一个专为宠物美容服务打造的现代化落地页，风格活泼友好，支持在线预约。

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![i18n](https://img.shields.io/badge/i18n-中文%2FEnglish-blue)

## ✨ 功能特性

- 🎨 **蓝色主题**：现代简洁的蓝色设计风格，视觉清爽
- 🌍 **国际化多语言**：支持中文 / English 一键切换，默认中文
- 📱 **响应式布局**：完美适配桌面端、平板、移动端
- 🎬 **滚动动画**：基于 IntersectionObserver 的元素入场动画
- 📋 **预约表单**：带表单验证的在线预约 CTA 模块
- 🧩 **组件化架构**：CSS Modules 样式隔离，结构清晰

## 🛠 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| React | 18 | UI 框架 |
| TypeScript | 5 | 类型安全 |
| Vite | 5 | 构建工具 |
| i18next | 23 | 国际化框架 |
| react-i18next | 14 | React i18n 绑定 |
| CSS Modules | - | 样式隔离方案 |

## 📁 项目结构

```
vibe-pet-landing-page/
├── index.html
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.tsx              # 应用入口
    ├── App.tsx               # 根组件
    ├── i18n.ts               # i18n 配置
    ├── index.css             # 全局样式 & 设计 Token
    ├── types.ts              # 全局类型定义
    ├── locales/
    │   ├── zh.json           # 中文翻译
    │   └── en.json           # 英文翻译
    ├── hooks/
    │   └── useScrollReveal.ts
    └── components/
        ├── Navbar/           # 导航栏 + 语言切换
        ├── Hero/             # 首屏英雄区
        ├── TrustBar/         # 信任品牌栏
        ├── Services/         # 服务项目展示
        ├── HowItWorks/       # 预约流程说明
        ├── Testimonials/     # 用户评价
        ├── Booking/          # 预约表单 CTA
        └── Footer/           # 页脚
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:5173](http://localhost:5173)

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

### 类型检查

```bash
npm run typecheck
```

## 🌍 国际化

项目使用 `i18next` + `react-i18next` 实现多语言支持：

- 默认语言：**中文（zh）**
- 支持语言：中文、English
- 语言文件位于 `src/locales/` 目录
- 点击导航栏右上角语言切换按钮即可切换

如需新增语言，在 `src/locales/` 下添加对应 JSON 文件，并在 `src/i18n.ts` 中注册即可。

## 📄 License

MIT
