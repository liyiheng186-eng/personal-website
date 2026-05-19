export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: string;
  action: string;
};

export const projects: Project[] = [
  {
    title: "医绿通",
    description:
      "围绕养老、医疗、陪诊、体检等方向的服务探索，尝试把真实需求、内容表达和线下服务连接起来。",
    tags: ["医疗服务", "养老", "陪诊", "体检"],
    status: "In Progress",
    action: "查看详情",
  },
  {
    title: "AI营销",
    description:
      "探索 AI 如何真正落地实体行业与高客单业务增长，而不是停留在工具演示和概念包装。",
    tags: ["AI营销", "实体行业", "获客", "增长"],
    status: "Building",
    action: "查看案例",
  },
  {
    title: "AI探索新边界",
    description:
      "围绕 AI 第二大脑、Agent、个人系统搭建和新型学习方式的长期探索。",
    tags: ["AI", "Agent", "第二大脑", "YihengOS"],
    status: "Exploring",
    action: "查看探索",
  },
];
