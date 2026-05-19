export type SystemPageSection = {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  tags: string[];
  whyItMatters: string;
  nextHref?: string;
};

export type SystemPageContent = {
  title: string;
  description: string;
  heroKicker: string;
  contactMethods?: {
    label: string;
    value: string;
    href: string;
  }[];
  sections: SystemPageSection[];
};

export const systemPages = {
  building: {
    title: "正在构建",
    heroKicker: "Building",
    description:
      "这里不是项目陈列柜，而是我正在把 AI、内容、商业观察和现实服务连接起来的施工现场。",
    sections: [
      {
        id: "yilvtong",
        title: "医绿通",
        subtitle: "从医疗养老切入本地服务",
        description:
          "围绕养老、医疗、陪诊、体检等方向，观察真实需求如何被看见、被信任、被履约。",
        status: "正在探索",
        tags: ["医疗养老", "本地服务", "信任生意"],
        whyItMatters:
          "这类服务不是简单卖产品，而是解决信息差、信任建立和线下履约的问题。",
        nextHref: "/proof#business",
      },
      {
        id: "ai-marketing",
        title: "AI营销",
        subtitle: "让 AI 进入获客和转化链路",
        description:
          "探索 AI 如何帮助实体行业做选题、内容表达、线索承接和增长复盘，而不是停留在工具展示。",
        status: "正在构建",
        tags: ["AI获客", "内容增长", "实体行业"],
        whyItMatters:
          "真正有价值的 AI 营销，不是更快生成内容，而是降低试错成本、提高表达和转化效率。",
        nextHref: "/market#ai-marketing-service",
      },
      {
        id: "ai-frontier",
        title: "AI探索新边界",
        subtitle: "把 AI 变成个人成长方式",
        description:
          "围绕第二大脑、Agent、项目制学习和内容系统，持续测试 AI 如何改变一个人的学习与行动。",
        status: "长期探索",
        tags: ["Agent", "第二大脑", "项目制学习"],
        whyItMatters:
          "AI 不是外挂，而是新一代个体组织信息、判断问题和推进项目的基础设施。",
        nextHref: "/thinking",
      },
      {
        id: "second-brain",
        title: "第二 AI 大脑",
        subtitle: "让知识库不再只是收藏夹",
        description:
          "用 Obsidian、AI、内容系统和项目记录，把碎片输入变成可调用的判断和输出资产。",
        status: "系统搭建中",
        tags: ["Obsidian", "知识库", "内容系统"],
        whyItMatters:
          "一个人的长期竞争力，越来越取决于能否把输入转化成结构化判断和持续输出。",
        nextHref: "/proof#content-system",
      },
      {
        id: "yihengos",
        title: "YihengOS",
        subtitle: "个人商业操作系统",
        description:
          "它连接学习、行业观察、内容表达、AI 工作流和现实项目，是我未来长期生长的主系统。",
        status: "持续迭代",
        tags: ["个人系统", "商业观察", "AI协作"],
        whyItMatters:
          "我不是在做一个作品集，而是在把学习、项目和内容变成一个持续生长的系统。",
        nextHref: "/about#method",
      },
    ],
  },
  market: {
    title: "产品与服务",
    heroKicker: "Market",
    description:
      "这里放的不是成熟货架，而是正在从项目、内容和 AI 实验里长出来的能力模块。",
    sections: [
      {
        id: "skills",
        title: "Skill / Agent 实验",
        subtitle: "把重复判断和内容流程做成能力单元",
        description:
          "围绕选题、资料整理、内容生产、知识库调用和现实判断，探索可复用的 AI 工作流。",
        status: "实验中",
        tags: ["Agent", "Workflow", "Automation"],
        whyItMatters:
          "未来的个体能力，不只是会用工具，而是能把自己的方法封装成系统。",
      },
      {
        id: "maoxuan-skill",
        title: "毛选 Skill",
        subtitle: "把现实判断方法转成 AI 辅助工具",
        description:
          "尝试把《毛选》中关于矛盾、调查、路线和现实判断的思维方式，转化成分析问题的辅助 Skill。",
        status: "原型阶段",
        tags: ["毛选", "现实判断", "AI Skill"],
        whyItMatters:
          "阅读的终点不是摘抄，而是能不能帮助你在现实问题里做出更清醒的判断。",
      },
      {
        id: "ai-marketing-service",
        title: "AI营销服务",
        subtitle: "面向实体行业的增长方案探索",
        description:
          "从行业理解、内容定位、短视频选题、线索承接到复盘优化，探索 AI 如何进入增长闭环。",
        status: "可交流",
        tags: ["实体行业", "内容策略", "获客转化"],
        whyItMatters:
          "很多实体生意不是没有需求，而是不会被看见、不会被理解、不会被持续表达。",
      },
      {
        id: "content-strategy",
        title: "内容策略服务",
        subtitle: "让内容服务于认知和转化",
        description:
          "基于平台机制、商业观察和 AI 辅助，帮助项目设计更清晰的内容主题、表达路径和发布节奏。",
        status: "探索中",
        tags: ["内容", "IP", "平台机制"],
        whyItMatters:
          "内容不是热闹，而是让别人持续理解你、信任你、记住你的基础设施。",
      },
      {
        id: "future",
        title: "未来产品化方向",
        subtitle: "从服务和项目中长出产品",
        description:
          "未来可能围绕医疗养老、本地生活、眼镜行业、内容系统等方向沉淀工具、服务或实体产品。",
        status: "保留接口",
        tags: ["实体产品", "服务设计", "长期探索"],
        whyItMatters:
          "我希望产品不是拍脑袋想出来，而是从真实需求、长期内容和项目实践里长出来。",
      },
    ],
  },
  proof: {
    title: "证据系统",
    heroKicker: "Proof of Work",
    description:
      "这里用来沉淀我真正做过、正在做、持续输出的东西。不是自我包装，而是让别人看见进展。",
    sections: [
      {
        id: "business",
        title: "商业与实体项目证据",
        subtitle: "从真实场景里训练商业理解",
        description:
          "围绕实体行业、本地服务、AI 营销和医疗养老方向，沉淀项目观察、案例复盘和阶段性判断。",
        status: "持续补充",
        tags: ["实体行业", "本地服务", "AI营销"],
        whyItMatters:
          "商业观察不能只停在宏观判断，最终要回到一个个具体场景和具体问题。",
      },
      {
        id: "content",
        title: "内容证据",
        subtitle: "让观点被持续看见",
        description:
          "短视频、图文、长文和行业拆解会逐步汇总到这里，形成可追踪的内容资产。",
        status: "建设中",
        tags: ["短视频", "图文", "行业拆解"],
        whyItMatters:
          "内容是我对外表达判断、吸引同频人、连接项目机会的前台。",
      },
      {
        id: "content-system",
        title: "内容系统",
        subtitle: "从碎片信息到结构化输出",
        description:
          "用 AI 辅助选题、资料整理、结构化、改写和复盘，让内容生产从灵感变成系统。",
        status: "搭建中",
        tags: ["AI写作", "知识库", "复盘"],
        whyItMatters:
          "如果内容不能沉淀成系统，每一次输出都会重新从零开始。",
      },
      {
        id: "learning",
        title: "学习证据",
        subtitle: "把学习变成可见的作品",
        description:
          "通过项目制学习，把课程、阅读、观察和 AI 协作转化为页面、文章、工具和服务雏形。",
        status: "长期进行",
        tags: ["项目制学习", "输出", "复利"],
        whyItMatters:
          "真正的学习不只是知道更多，而是能做出更多、判断更准、表达更清楚。",
      },
    ],
  },
  map: {
    title: "163行业地图",
    heroKicker: "Industry Map",
    description:
      "这是我的长期内容主线：用 163 个行业训练商业理解力，也把现实世界拆给更多人看。",
    sections: [
      {
        title: "餐饮行业",
        subtitle: "第一期：最容易被低估的组织生意",
        description:
          "餐饮不是简单卖饭，而是门店位置、供应链、品牌表达、组织效率和复购机制的组合游戏。",
        status: "已完成",
        tags: ["消费者服务", "门店", "供应链"],
        whyItMatters:
          "餐饮是理解实体商业最好的入口之一，因为它把流量、产品、服务和管理压缩在一个门店里。",
      },
      {
        title: "休闲娱乐行业",
        subtitle: "第二期：消费结构背后的情绪生意",
        description:
          "娱乐方式背后，藏着不同家庭、城市、年龄层和时代情绪的消费结构。",
        status: "研究中",
        tags: ["消费者服务", "情绪价值", "城市消费"],
        whyItMatters:
          "休闲娱乐能帮助我们理解人们为什么愿意为体验、社交和情绪买单。",
      },
      {
        title: "医疗养老服务",
        subtitle: "信任、信息差和履约能力",
        description:
          "医疗和养老不是单一服务，而是信任建立、信息筛选、长期陪伴和线下履约的复合生意。",
        status: "研究中",
        tags: ["大健康", "本地服务", "信任"],
        whyItMatters:
          "这个方向连接家庭需求、人口结构和服务供给，也是医绿通项目的重要观察土壤。",
      },
      {
        title: "更多行业节点",
        subtitle: "长期点亮，不急着一次讲完",
        description:
          "后续会继续扩展本地生活、眼镜、教育、家政、文旅、消费品牌等方向。",
        status: "待开启",
        tags: ["长期系列", "商业模式", "现实世界"],
        whyItMatters:
          "长期主义不是口号，而是愿意用一个稳定框架持续拆解现实世界。",
      },
    ],
  },
  thinking: {
    title: "我的思考",
    heroKicker: "Thinking",
    description:
      "这里沉淀我长期关注的主题。不是随手感想，而是我判断现实、组织内容和推进项目的底层线索。",
    sections: [
      {
        title: "AI 与个人系统",
        subtitle: "AI 不是工具箱，是新基础设施",
        description:
          "我关注 AI 如何进入一个人的输入、判断、行动和输出，而不只是提高某个单点效率。",
        status: "长期主题",
        tags: ["AI", "个人系统", "第二大脑"],
        whyItMatters:
          "未来很多差距，不来自是否会用某个工具，而来自是否会用 AI 重构自己的系统。",
      },
      {
        title: "商业观察",
        subtitle: "从行业结构看现实生意",
        description:
          "我会持续拆解行业、用户、供给、渠道、组织和履约能力，训练自己看懂生意的能力。",
        status: "持续输出",
        tags: ["行业", "商业模式", "实体经济"],
        whyItMatters:
          "商业不是抽象概念，它最终落在一个个真实用户、真实门店和真实成本里。",
      },
      {
        title: "现实判断",
        subtitle: "比观点更重要的是判断质量",
        description:
          "我关心如何通过调查、矛盾分析、历史经验和 AI 辅助，让自己不被表面信息牵着走。",
        status: "方法沉淀",
        tags: ["判断", "毛选", "方法论"],
        whyItMatters:
          "信息越来越多的时候，真正稀缺的是能在复杂现实里做判断的能力。",
      },
      {
        title: "个体成长",
        subtitle: "用项目和内容逼自己生长",
        description:
          "项目制学习、内容输出和 Proof of Work，是我在 AI 时代给自己设计的成长路径。",
        status: "实践中",
        tags: ["成长", "创作", "项目制学习"],
        whyItMatters:
          "年轻人不一定要等到资源齐全才开始，先把自己变成一个持续输出和迭代的系统。",
      },
    ],
  },
  about: {
    title: "关于我",
    heroKicker: "About",
    description:
      "我不是想写一份传统简历，而是想解释：为什么我会把 AI、商业观察、内容和现实项目放在同一条线上。",
    sections: [
      {
        title: "上财在读",
        subtitle: "金融、数据科学与商业观察交叉成长",
        description:
          "学校给我一个理解商业和数据的入口，但我更关心这些知识如何进入真实项目。",
        status: "当前身份",
        tags: ["上财", "金融", "数据科学"],
        whyItMatters:
          "我希望自己不只是学生身份，而是尽早把学习和现实商业连接起来。",
      },
      {
        title: "家庭实业底盘",
        subtitle: "从真实生意里形成现实感",
        description:
          "来自真实商业环境，让我对线下服务、本地市场、客户信任和生意细节有持续观察。",
        status: "现实底色",
        tags: ["线下商业", "服务业", "本地市场"],
        whyItMatters:
          "这让我不会只从互联网概念理解商业，而会关心生意到底怎么跑起来。",
      },
      {
        id: "method",
        title: "AI项目制学习",
        subtitle: "先做项目，再倒逼学习",
        description:
          "我用 AI 帮自己拆问题、搭页面、做内容、整理资料、复盘判断，把学习变成可见输出。",
        status: "核心方法",
        tags: ["AI", "项目制学习", "输出"],
        whyItMatters:
          "AI 时代的学习不该只停在吸收信息，而要更快进入行动和作品。",
      },
      {
        title: "内容与商业观察",
        subtitle: "用表达连接同频人和真实机会",
        description:
          "我会通过短视频、图文和长内容，持续表达自己对行业、AI 和成长的判断。",
        status: "持续建设",
        tags: ["内容", "商业观察", "个人品牌"],
        whyItMatters:
          "内容不是装饰，而是我对外建立信任、连接机会和沉淀思考的方式。",
      },
    ],
  },
  contact: {
    title: "联系我",
    heroKicker: "Contact",
    description:
      "如果你想交流项目、内容、AI 营销、实体服务或合作方向，可以从一个具体问题开始。",
    contactMethods: [
      {
        label: "邮箱",
        value: "liyiheng946936572@163.com",
        href: "mailto:liyiheng946936572@163.com",
      },
      {
        label: "微信号 / 手机号",
        value: "15729589459",
        href: "tel:15729589459",
      },
    ],
    sections: [
      {
        title: "AI营销项目交流",
        subtitle: "实体行业、高客单业务、本地服务",
        description:
          "适合聊获客成本、内容定位、短视频选题、线索承接和转化路径。",
        status: "欢迎交流",
        tags: ["AI营销", "获客", "增长"],
        whyItMatters:
          "请尽量带着具体行业、产品、客单价和当前问题来聊，这样更容易判断下一步。",
      },
      {
        title: "医疗养老服务探索",
        subtitle: "医绿通相关方向",
        description:
          "适合聊养老、医疗、陪诊、体检、本地服务履约和家庭需求洞察。",
        status: "欢迎碰撞",
        tags: ["医绿通", "医疗养老", "本地服务"],
        whyItMatters:
          "这个方向需要真实需求和线下场景，适合长期观察和谨慎推进。",
      },
      {
        title: "内容合作",
        subtitle: "短视频、图文、行业拆解",
        description:
          "适合聊选题共创、平台内容、行业系列和商业观察类内容合作。",
        status: "可沟通",
        tags: ["内容", "IP", "行业拆解"],
        whyItMatters:
          "好的内容合作应该让双方的判断力、表达力和影响力都变得更强。",
      },
      {
        title: "同龄人交流",
        subtitle: "AI、项目制学习、创作和成长系统",
        description:
          "如果你也在探索 AI 时代如何学习、创作、做项目，可以从你的问题开始聊。",
        status: "开放交流",
        tags: ["AI学习", "创作者", "成长"],
        whyItMatters:
          "同频的人越早连接，越可能一起见证和推动长期变化。",
      },
    ],
  },
} satisfies Record<string, SystemPageContent>;
