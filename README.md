# 智能客服系统

一个基于 Vue 3 和 TypeScript 开发的现代化智能客服系统，集成多种 AI 对话模型，提供智能、高效的客服体验。

## 项目概述

本项目采用最新的前端技术栈，包括 Vite 构建工具、Vue 3 组合式 API、TypeScript 类型系统等，确保了代码的可维护性和扩展性。系统设计了灵活的 AI 提供商工厂模式，支持多种 AI 对话模型的接入。

## 技术栈

- **前端框架**：Vue 3
- **开发语言**：TypeScript
- **构建工具**：Vite
- **UI 组件库**：Vant
- **图标系统**：Unplugin-icons
- **自动导入**：Unplugin-auto-import
- **样式预处理器**：SCSS
- **调试工具**：VConsole
- **代码压缩**：Vite-plugin-compression

## 核心功能

### 1. 多 AI 模型支持

系统设计了灵活的 AI 提供商工厂模式，支持多种 AI 对话模型的接入：

- Kimi AI
- 其他可扩展的 AI 模型接口

### 2. 智能对话界面

- 用户消息和 AI 消息的清晰区分
- 支持富文本和多媒体内容展示
- 消息状态实时反馈

### 3. 移动端优化

- 响应式设计，完美适配移动设备
- 触摸友好的交互体验
- 针对 H5 场景优化的组件

## 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
pnpm i
```

### 启动项目

```bash
pnpm run dev
```

### 构建项目

```bash
pnpm run build
```

## 项目结构

```bash

├── src/
│ ├── ai/ # AI 相关逻辑
│ │ └── providers/ # AI 提供商实现
│ │ ├── factory.ts # 工厂模式创建 AI 实例
│ │ ├── kimi.ts # Kimi AI 实现
│ │ └── types.ts # AI 接口类型定义
│ ├── assets/ # 静态资源
│ │ └── styles/ # 全局样式
│ ├── components/ # 组件
│ │ └── h5Components/ # 移动端组件
│ │ └── Message/ # 消息相关组件
│ │ ├── AiMessage.vue # AI 消息组件
│ │ └── UserMessage.vue # 用户消息组件
│ ├── views/ # 页面视图
│ │ └── customerService/ # 客服页面
│ └── main.ts # 应用入口
├── types/ # 全局类型定义
├── vite.config.ts # Vite 配置
└── tsconfig.json # TypeScript 配置
```