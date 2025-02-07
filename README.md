# 响应式在线简历模板

一个基于 React + TypeScript + Vite 构建的现代化简历模板，支持在线预览和打印。

## ✨ 特性

- 🌍 支持中英文国际化
- 🖨 针对打印优化，支持生成 PDF
- 🔧 使用简单，仅需修改 YAML 文件

## 🚀 快速开始

1. 克隆项目

```bash
git clone https://github.com/sosyz/resume-template.git
cd resume-template
```

2. 安装依赖

```bash
pnpm install
```

3. 启动开发服务器

```bash
pnpm dev
```

4. 构建生产版本

```bash
pnpm build
```

## 📝 自定义内容

所有简历内容都在 `src/locales` 目录下的 YAML 文件中配置：

- `zh.yaml` - 中文简历内容
- `en.yaml` - 英文简历内容（如果需要）

只需修改相应的 YAML 文件即可更新简历内容，支持的字段包括：

- 个人信息
- 教育背景
- 工作经历
- 项目经验
- 技能特长
- 获奖情况

## 🎈 在线预览

访问 [resume-demo.pages.dev](https://resume-demo.pages.dev) 查看在线演示
