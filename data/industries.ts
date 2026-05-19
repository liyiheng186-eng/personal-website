export type IndustryStatus = "已完成" | "研究中" | "待开启";

export type Industry = {
  id: string;
  name: string;
  issue: string;
  status: IndustryStatus;
  sector: string;
  insight: string;
  x: number;
  y: number;
};

export const industries: Industry[] = [
  {
    id: "restaurant",
    name: "餐饮行业",
    issue: "01",
    status: "已完成",
    sector: "消费者服务",
    insight:
      "餐饮不是简单卖饭，而是门店、供应链、品牌和组织效率的组合游戏。",
    x: 46,
    y: 33,
  },
  {
    id: "entertainment",
    name: "休闲娱乐行业",
    issue: "02",
    status: "研究中",
    sector: "消费者服务",
    insight:
      "娱乐方式背后，藏着不同家庭、城市和时代的消费结构。",
    x: 63,
    y: 46,
  },
  {
    id: "healthcare",
    name: "医疗养老服务",
    issue: "待定",
    status: "研究中",
    sector: "大健康 / 本地服务",
    insight:
      "医疗和养老不是单一服务，而是信任、信息差和履约能力的长期生意。",
    x: 36,
    y: 58,
  },
  ...Array.from({ length: 18 }).map((_, index) => ({
    id: `placeholder-${index + 1}`,
    name: `行业节点 ${String(index + 4).padStart(2, "0")}`,
    issue: "待定",
    status: "待开启" as IndustryStatus,
    sector: "长期探索池",
    insight: "这个行业还在等待被点亮，未来会补充真实拆解和内容入口。",
    x: 18 + ((index * 17) % 66),
    y: 18 + ((index * 23) % 62),
  })),
];
