export type JourneyNode = {
  phase: string;
  title: string;
  description: string;
  tags: string[];
};

export const journeyNodes: JourneyNode[] = [
  {
    phase: "Now",
    title: "上财在读",
    description: "金融、数据科学、商业观察和 AI 实践交叉成长。",
    tags: ["上财", "金融", "数据科学"],
  },
  {
    phase: "Base",
    title: "家庭实业底盘",
    description: "来自真实商业环境，对线下生意、服务业和本地市场有持续观察。",
    tags: ["线下商业", "服务业", "本地市场"],
  },
  {
    phase: "Method",
    title: "AI项目制学习",
    description: "用项目驱动学习，用 AI 辅助拆解、沉淀和输出。",
    tags: ["项目制学习", "AI辅助", "输出"],
  },
  {
    phase: "Practice",
    title: "AI营销实践",
    description: "参与现实项目，观察 AI 在实体行业中的落地路径。",
    tags: ["增长", "获客", "实体行业"],
  },
  {
    phase: "System",
    title: "第二 AI 大脑 / YihengOS",
    description:
      "用 Obsidian、AI、内容系统和个人项目构建自己的认知操作系统。",
    tags: ["Obsidian", "第二大脑", "个人系统"],
  },
  {
    phase: "Long-term",
    title: "163个行业探索",
    description: "用长期系列拆解行业、商业模式和现实世界的运行逻辑。",
    tags: ["行业拆解", "商业模式", "长期主义"],
  },
];

export const doneThings = [
  "自媒体内容创作",
  "AI营销项目",
  "医疗养老服务探索",
  "毛选 Skill 开发",
  "个人网站搭建",
  "行业拆解",
];

export const contentPlaceholders = [
  "视频卡片占位",
  "文章卡片占位",
  "小红书 / 抖音 / 公众号入口",
];
