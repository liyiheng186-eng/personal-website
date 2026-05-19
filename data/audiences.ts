export type AudienceSlug =
  | "business-owner"
  | "tech-team"
  | "partner"
  | "viewer"
  | "creator"
  | "first-time";

export type GuideStep = {
  number: string;
  title: string;
  description: string;
  href: string;
  action: string;
};

export type RelatedCard = {
  title: string;
  description: string;
  href: string;
  meta: string;
};

export type Audience = {
  slug: AudienceSlug;
  title: string;
  shortTitle: string;
  description: string;
  guideIntro: string;
  steps: GuideStep[];
  relatedCards: RelatedCard[];
  cta: {
    label: string;
    href: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

export const audiences: Audience[] = [
  {
    slug: "business-owner",
    title: "如果你是实体行业老板",
    shortTitle: "实体行业老板",
    description: "从现实生意出发，看 AI 如何进入获客、转化和本地服务履约。",
    guideIntro:
      "我不会先和你聊模型参数。我更关心的是：一个实体生意怎样被看见、怎样建立信任、怎样把流量变成真实客户。",
    steps: [
      {
        number: "01",
        title: "先看我怎么看行业",
        description:
          "从 163 行业地图开始，看我是不是只会讲概念，还是能把门店、用户、供应链、履约和信任拆开来看。",
        href: "/map",
        action: "看行业地图",
      },
      {
        number: "02",
        title: "再看 AI 营销怎么落地",
        description:
          "我关注的不是工具演示，而是选题、内容、线索承接、私域转化和成交路径能不能组成一个闭环。",
        href: "/building#ai-marketing",
        action: "看 AI 营销",
      },
      {
        number: "03",
        title: "看医绿通的本地服务视角",
        description:
          "医疗、养老、陪诊、体检这类服务，表面是需求，底层是信任、信息差和长期履约能力。",
        href: "/building#yilvtong",
        action: "看医绿通",
      },
      {
        number: "04",
        title: "看可以合作调用的能力",
        description:
          "内容策略、AI 辅助获客、行业拆解、增长路径梳理，会先以探索型服务的方式逐步沉淀。",
        href: "/market#ai-marketing-service",
        action: "看服务方向",
      },
      {
        number: "05",
        title: "带着具体问题来聊",
        description:
          "如果你有获客成本高、内容不会做、线索承接弱、客户信任难建立的问题，可以直接从问题开始。",
        href: "/contact",
        action: "联系合作",
      },
    ],
    relatedCards: [
      {
        title: "AI营销不是发几条视频",
        description: "它应该是从用户问题、内容表达、线索承接到成交转化的增长系统。",
        href: "/building#ai-marketing",
        meta: "增长实验",
      },
      {
        title: "医绿通：本地服务的信任生意",
        description: "用医疗养老方向观察真实需求、线下履约和内容表达如何连接。",
        href: "/building#yilvtong",
        meta: "现实项目",
      },
      {
        title: "163 行业探索",
        description: "用长期拆解训练自己理解现实生意，而不是只追热点。",
        href: "/map",
        meta: "行业主线",
      },
    ],
    cta: {
      label: "联系我聊具体问题",
      href: "/contact",
      secondaryLabel: "先看证据系统",
      secondaryHref: "/proof#business",
    },
  },
  {
    slug: "tech-team",
    title: "如果你来自 AI 公司 / 科技团队",
    shortTitle: "AI 公司 / 科技团队",
    description: "看一个年轻用户如何把 AI 变成系统、工作流、内容和项目能力。",
    guideIntro:
      "我不是把 AI 当成新奇工具，而是在把它接进学习、判断、内容、项目和现实商业。这里更像一个 AI 原生个体的样本。",
    steps: [
      {
        number: "01",
        title: "先看 Proof of Work",
        description:
          "不用先听我自我介绍，先看我把 AI 用在了哪些项目、内容和方法沉淀上。",
        href: "/proof",
        action: "查看证据",
      },
      {
        number: "02",
        title: "看 YihengOS 的系统形态",
        description:
          "YihengOS 不是一个炫酷名字，而是我把知识库、项目、内容和 AI 协作连接起来的个人系统。",
        href: "/building#yihengos",
        action: "看 YihengOS",
      },
      {
        number: "03",
        title: "看 Skill / Agent 实验",
        description:
          "我正在探索把现实判断、内容生产、资料整理和选题工作流变成可复用的 AI 能力单元。",
        href: "/market#skills",
        action: "看实验",
      },
      {
        number: "04",
        title: "看项目制学习方法",
        description:
          "我更相信真实任务会倒逼学习。AI 的价值，是让拆解、执行、复盘和输出变得更快。",
        href: "/about#method",
        action: "看方法",
      },
      {
        number: "05",
        title: "如果你想看年轻用户怎么用 AI",
        description:
          "可以从产品反馈、应用场景、内容工作流、个人系统建设几个角度继续交流。",
        href: "/contact",
        action: "联系我",
      },
    ],
    relatedCards: [
      {
        title: "第二 AI 大脑",
        description: "从知识库到项目系统，观察 AI 如何进入一个人的长期成长结构。",
        href: "/building#second-brain",
        meta: "个人系统",
      },
      {
        title: "毛选 Skill",
        description: "把现实判断方法转化为 AI Skill 的早期原型探索。",
        href: "/market#maoxuan-skill",
        meta: "Skill 原型",
      },
      {
        title: "Agent 工作流",
        description: "围绕选题、内容、资料整理和知识库调用的工作流实验。",
        href: "/market#skills",
        meta: "Agent 实验",
      },
    ],
    cta: {
      label: "查看 Proof of Work",
      href: "/proof",
      secondaryLabel: "联系我交流",
      secondaryHref: "/contact",
    },
  },
  {
    slug: "partner",
    title: "如果你是潜在合作方",
    shortTitle: "潜在合作方",
    description: "看内容、AI、商业观察和现实项目之间，能否形成合作空间。",
    guideIntro:
      "我正在把流量入口、内容表达、AI 能力和现实项目连起来。适合合作的不是一句想法，而是一个能一起推进的具体场景。",
    steps: [
      {
        number: "01",
        title: "先看我正在推进什么",
        description:
          "医绿通、AI营销、AI探索新边界代表了三个方向：现实服务、增长落地、个人系统。",
        href: "/building",
        action: "看项目",
      },
      {
        number: "02",
        title: "再看哪些能力能被调用",
        description:
          "如果你需要内容、行业研究、AI 辅助增长、项目共创，可以先看产品与服务页的能力边界。",
        href: "/market",
        action: "看能力",
      },
      {
        number: "03",
        title: "用证据判断是否值得聊",
        description:
          "我会逐步把内容、项目、系统和实验沉淀成 Proof of Work，而不是只靠口头表达。",
        href: "/proof",
        action: "看证据",
      },
      {
        number: "04",
        title: "看未来可能产品化的方向",
        description:
          "Skill、Agent、AI营销服务、内容策略服务和实体产品探索，都可能从合作场景里长出来。",
        href: "/market#future",
        action: "看未来方向",
      },
      {
        number: "05",
        title: "带着资源或问题来碰撞",
        description:
          "合作不是泛泛认识一下，而是看有没有真实场景、明确目标和可推进的下一步。",
        href: "/contact",
        action: "发起沟通",
      },
    ],
    relatedCards: [
      {
        title: "正在构建的项目组合",
        description: "用三个方向展示我当前把注意力押在哪里。",
        href: "/building",
        meta: "项目组合",
      },
      {
        title: "产品与服务雏形",
        description: "不是成熟货架，而是正在形成的可合作能力。",
        href: "/market",
        meta: "能力调用",
      },
      {
        title: "证据系统",
        description: "把内容、项目和方法沉淀成可被验证的输出。",
        href: "/proof",
        meta: "Proof",
      },
    ],
    cta: {
      label: "发起合作沟通",
      href: "/contact",
      secondaryLabel: "查看产品与服务",
      secondaryHref: "/market",
    },
  },
  {
    slug: "viewer",
    title: "如果你是内容观众",
    shortTitle: "内容观众",
    description: "看我长期输出什么、为什么输出，以及为什么值得继续关注。",
    guideIntro:
      "我不想只做热点搬运。我更关心一个年轻人如何用 AI 重新理解行业、商业、学习和现实世界的运行逻辑。",
    steps: [
      {
        number: "01",
        title: "先看 163 个行业探索",
        description:
          "这是最核心的长期内容主线：用一个个行业训练商业理解力，也让你看到现实世界的结构。",
        href: "/map",
        action: "看行业地图",
      },
      {
        number: "02",
        title: "再看我的长期思考主题",
        description:
          "AI、商业观察、现实判断、个体成长，会成为我长期输出的四条线。",
        href: "/thinking",
        action: "看思考",
      },
      {
        number: "03",
        title: "看我如何把阅读变成工具",
        description:
          "毛选 Skill 是一个信号：我想把阅读、判断和现实问题连接起来，而不是停在摘抄。",
        href: "/market#maoxuan-skill",
        action: "看 Skill",
      },
      {
        number: "04",
        title: "看内容背后的系统",
        description:
          "我会用 AI 辅助选题、资料整理、结构化和复盘，让内容不是灵感，而是系统产物。",
        href: "/proof#content",
        action: "看内容证据",
      },
      {
        number: "05",
        title: "选择一个平台继续关注",
        description:
          "短视频负责快速触发，图文负责观点沉淀，长内容负责完整拆解。后续入口会逐步补齐。",
        href: "/contact",
        action: "去关注",
      },
    ],
    relatedCards: [
      {
        title: "163 个行业探索",
        description: "不是系列标题，而是我训练商业理解力的长期工程。",
        href: "/map",
        meta: "内容主线",
      },
      {
        title: "我的长期思考",
        description: "记录我对 AI、商业、判断和成长的持续观察。",
        href: "/thinking",
        meta: "观点系统",
      },
      {
        title: "内容系统",
        description: "用 AI 把碎片信息变成结构化输出和可复盘资产。",
        href: "/proof#content",
        meta: "输出机制",
      },
    ],
    cta: {
      label: "关注内容平台",
      href: "/contact",
      secondaryLabel: "继续看我的思考",
      secondaryHref: "/thinking",
    },
  },
  {
    slug: "creator",
    title: "如果你也是学习者 / 创作者",
    shortTitle: "学习者 / 创作者",
    description: "看我如何用 AI、项目制学习和内容输出搭建成长系统。",
    guideIntro:
      "我正在探索一种 AI 时代的成长方式：不是先学完再开始，而是用真实项目逼出学习、用内容逼出表达、用系统留下复利。",
    steps: [
      {
        number: "01",
        title: "先看 AI 探索新边界",
        description:
          "这里记录我如何把 AI 用到学习、内容、Agent、第二大脑和个人项目里。",
        href: "/building#ai-frontier",
        action: "看 AI 探索",
      },
      {
        number: "02",
        title: "看第二 AI 大脑 / YihengOS",
        description:
          "我想搭的不是笔记库，而是一个能连接输入、判断、行动和输出的个人系统。",
        href: "/building#second-brain",
        action: "看第二大脑",
      },
      {
        number: "03",
        title: "看内容系统和 Proof of Work",
        description:
          "让学习过程被看见、被复盘、被积累，最终变成别人能理解的作品。",
        href: "/proof#content-system",
        action: "看内容系统",
      },
      {
        number: "04",
        title: "看项目制学习方法",
        description:
          "项目会暴露真正不会的地方，也会倒逼你把知识转化成能力。",
        href: "/about#method",
        action: "看方法",
      },
      {
        number: "05",
        title: "看长期思考",
        description:
          "如果你也在寻找自己的成长系统，这里会持续记录我的判断、试错和阶段性方法。",
        href: "/thinking",
        action: "看思考",
      },
    ],
    relatedCards: [
      {
        title: "AI探索新边界",
        description: "把 AI 从工具箱推进到个人成长方式里。",
        href: "/building#ai-frontier",
        meta: "学习实验",
      },
      {
        title: "项目制学习",
        description: "用真实任务驱动输入、拆解、执行和复盘。",
        href: "/about#method",
        meta: "方法",
      },
      {
        title: "内容系统",
        description: "把碎片信息触发、AI 结构化和知识库沉淀串起来。",
        href: "/proof#content-system",
        meta: "系统",
      },
    ],
    cta: {
      label: "看我的长期思考",
      href: "/thinking",
      secondaryLabel: "继续了解 YihengOS",
      secondaryHref: "/building#second-brain",
    },
  },
  {
    slug: "first-time",
    title: "如果你是第一次认识我",
    shortTitle: "第一次认识我",
    description: "用最短路径了解我是谁、在做什么，以及这些事为什么连在一起。",
    guideIntro:
      "你不用一次性理解所有项目。先记住一句话：我是一个正在用 AI、内容和真实项目训练商业理解力的 05 后上财学生。",
    steps: [
      {
        number: "01",
        title: "先知道我是谁",
        description:
          "我不是传统简历型介绍，而是从背景、现实观察、AI 实践和内容输出四个角度解释自己。",
        href: "/about",
        action: "了解我",
      },
      {
        number: "02",
        title: "看我正在构建什么",
        description:
          "医绿通、AI营销、AI探索新边界，是我把观察变成项目的三个入口。",
        href: "/building",
        action: "看正在构建",
      },
      {
        number: "03",
        title: "看我做过哪些输出",
        description:
          "Proof of Work 会逐步沉淀内容、项目、系统和实验，让你看到真实进展。",
        href: "/proof",
        action: "看证据",
      },
      {
        number: "04",
        title: "看我长期研究什么",
        description:
          "163 行业探索是我的长期内容主线，也是理解我商业观察方式的最快入口。",
        href: "/map",
        action: "看行业地图",
      },
      {
        number: "05",
        title: "选择继续关注或联系",
        description:
          "如果你觉得这个方向值得观察，可以从内容平台、合作场景或直接沟通继续往下看。",
        href: "/contact",
        action: "继续关注",
      },
    ],
    relatedCards: [
      {
        title: "关于我",
        description: "从背景、现实观察和 AI 项目制学习理解我的起点。",
        href: "/about",
        meta: "起点",
      },
      {
        title: "正在构建",
        description: "看我当前真正投入注意力的项目组合。",
        href: "/building",
        meta: "项目",
      },
      {
        title: "163 个行业探索",
        description: "理解我为什么要持续拆解行业和现实商业。",
        href: "/map",
        meta: "长期主线",
      },
    ],
    cta: {
      label: "从关于我开始",
      href: "/about",
      secondaryLabel: "直接联系我",
      secondaryHref: "/contact",
    },
  },
];

export function getAudience(slug: string) {
  return audiences.find((audience) => audience.slug === slug);
}
