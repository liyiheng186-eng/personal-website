export type ModuleId = "doing" | "products" | "journey" | "industry";

export type ModuleConfig = {
  id: ModuleId;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  icon: "activity" | "command" | "timeline" | "globe";
  dockLabel: string;
  windowTitle: string;
};

export const modules: ModuleConfig[] = [
  {
    id: "doing",
    title: "我在做的事情",
    subtitle: "What I’m Building",
    description: "医绿通、AI营销、AI探索新边界",
    status: "Active",
    icon: "activity",
    dockLabel: "Doing",
    windowTitle: "我在做的事情 / What I’m Building",
  },
  {
    id: "products",
    title: "Skill / Agent / 产品与服务",
    subtitle: "Products & Services",
    description: "毛选 Skill、Agent、Vibe Coding、营销服务",
    status: "Building",
    icon: "command",
    dockLabel: "Skill",
    windowTitle: "Skill / Agent / 产品与服务",
  },
  {
    id: "journey",
    title: "我的经历",
    subtitle: "Journey",
    description: "个人轨迹、内容、自媒体、项目经历",
    status: "Growing",
    icon: "timeline",
    dockLabel: "Journey",
    windowTitle: "我的经历 / Journey",
  },
  {
    id: "industry",
    title: "163个行业探索",
    subtitle: "Industry Map",
    description: "用行业星图点亮长期探索版图",
    status: "Exploring",
    icon: "globe",
    dockLabel: "163",
    windowTitle: "163个行业探索 / Industry Exploration Map",
  },
];
