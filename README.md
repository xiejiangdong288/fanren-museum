# 《凡人修仙传》网页博物馆

这是一个为《凡人修仙传》小说爱好者创建的交互式网页博物馆，展示小说中的统计数据、人物关系和修仙体系等内容。

## 项目特点

- 小说创作统计可视化
- 修仙世界体系展示
- 人物关系网络交互图
- 用户评论互动功能
- 响应式设计，支持移动端

## 快速开始

### 安装依赖

```bash
# 安装项目依赖
npm install
```

### 运行开发服务器

```bash
# 启动开发服务器
npm start
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
# 构建生产版本
npm run build
```

### 部署到GitHub Pages

```bash
# 部署到GitHub Pages
npm run deploy
```

## 项目结构

```
fanren-museum/
├── public/                 # 公共资源
│   ├── data/               # 数据文件
│   │   ├── novel_stats.json       # 小说创作统计数据
│   │   ├── cultivation.json       # 修仙体系数据
│   │   └── character_network.json # 人物关系数据
│   └── index.html          # HTML模板
├── src/                    # 源代码
│   ├── components/         # 组件
│   │   ├── Layout/         # 布局组件
│   │   ├── Charts/         # 图表组件
│   │   └── CharacterNetwork/ # 人物关系网络组件
│   ├── pages/              # 页面
│   │   ├── Home/           # 首页
│   │   ├── NovelStats/     # 小说创作统计页面
│   │   ├── CultivationSystem/ # 修仙体系页面
│   │   └── CharacterNetwork/   # 人物关系网络页面
│   ├── data/               # 数据处理
│   ├── firebase/           # Firebase配置
│   ├── App.tsx             # 应用入口
│   └── index.tsx           # 渲染入口
└── package.json            # 项目配置
```

## 功能模块

### 1. 小说创作统计

展示《凡人修仙传》的创作数据，包括：
- 总字数和章节数统计
- 各卷字数对比
- 更新频率分析
- 读者互动数据

### 2. 修仙世界体系

展示小说中的修仙体系，包括：
- 修炼境界详解
- 灵根资质分布
- 三界修士人口分布
- 天劫与寿元数据

### 3. 人物关系网络

交互式展示小说中的人物关系，包括：
- 以韩立为中心的关系网络图
- 人物详情查看
- 关系类型分类
- 修为境界对照表

## 技术栈

- React + TypeScript
- React Router
- Chart.js (数据可视化)
- vis-network (关系网络可视化)
- Firebase (评论功能)
- Tailwind CSS (样式)

## 后续开发计划

- 势力与地域模块
- 物品与功法模块
- 事件与战争模块
- 更多交互功能

## 贡献指南

欢迎提交问题和功能请求！

## 许可证

本项目仅供《凡人修仙传》爱好者学习交流使用。
