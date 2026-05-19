export type ProductItem = {
  title: string;
  description: string;
  tags: string[];
  status: string;
  featured?: boolean;
};

export const developingProducts: ProductItem[] = [
  {
    title: "毛选 Skill",
    description:
      "把《毛选》的思维方式转化为现实判断辅助工具，用于辅助分析问题、拆解矛盾、判断路径。",
    tags: ["毛选", "现实判断", "AI Skill"],
    status: "Prototype",
    featured: true,
  },
  {
    title: "Agent 工作流",
    description:
      "围绕选题、内容生产、信息整理、个人知识库调用的 Agent 工作流探索。",
    tags: ["Agent", "Workflow", "Automation"],
    status: "Planning",
  },
  {
    title: "Vibe Coding 网站实验",
    description:
      "用 AI 协作快速搭建个人网站、项目页、工具页和内容展示系统。",
    tags: ["Vibe Coding", "Website", "AI Coding"],
    status: "Building",
  },
];

export const availableProducts: ProductItem[] = [
  {
    title: "AI营销服务",
    description:
      "面向实体行业、高客单业务、本地服务的 AI 获客与内容增长方案探索。",
    tags: ["营销", "增长", "AI落地"],
    status: "Available Soon",
  },
  {
    title: "内容策略服务",
    description:
      "基于商业观察、平台机制和 AI 辅助，设计短视频、小红书、公众号内容策略。",
    tags: ["内容", "IP", "平台机制"],
    status: "Experimental",
  },
  {
    title: "实体产品探索",
    description:
      "未来可能围绕医疗、养老、本地生活、眼镜行业等方向探索实体产品。",
    tags: ["实体产品", "服务设计", "本地商业"],
    status: "Reserved",
  },
];
