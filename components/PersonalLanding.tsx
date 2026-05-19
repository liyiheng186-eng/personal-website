import {
  ArrowRight,
  BookOpenText,
  BrainCircuit,
  Building2,
  CirclePlay,
  Mail,
  Map,
  MessageCircle,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { industries } from "@/data/industries";
import { journeyNodes } from "@/data/journey";
import { projects } from "@/data/projects";

const projectIcons = [Stethoscope, Building2, BrainCircuit];

const contentLinks = [
  {
    title: "抖音",
    description: "短视频内容与项目进展",
    icon: CirclePlay,
    href: "#",
  },
  {
    title: "小红书",
    description: "商业观察、AI 实践与日常记录",
    icon: MessageCircle,
    href: "#",
  },
  {
    title: "公众号",
    description: "长文、行业拆解与方法论沉淀",
    icon: BookOpenText,
    href: "#",
  },
];

const cooperationItems = ["AI营销项目交流", "医疗养老服务探索", "内容合作", "同龄人交流"];

export function PersonalLanding() {
  const featuredIndustries = industries.slice(0, 3);
  const featuredJourney = journeyNodes.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-white/78 backdrop-blur-2xl">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
          <a className="text-sm font-semibold tracking-[-0.01em]" href="#top">
            李毅恒
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-black/58 md:flex">
            <a className="transition hover:text-black" href="#doing">
              我在做什么
            </a>
            <a className="transition hover:text-black" href="#industry">
              163行业
            </a>
            <a className="transition hover:text-black" href="#content">
              内容入口
            </a>
            <a className="transition hover:text-black" href="#contact">
              联系
            </a>
          </div>
          <a
            className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/82"
            href="#contact"
          >
            联系我
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative overflow-hidden px-5 pb-20 pt-20 sm:pb-28 sm:pt-28"
      >
        <div className="absolute left-1/2 top-12 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
        <div className="absolute right-[8%] top-28 h-48 w-48 rounded-full bg-blue-100/80 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-sm font-medium text-black/58 shadow-sm">
              YihengOS · 个人项目与认知系统
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-7xl">
              李毅恒
            </h1>
            <p className="mt-5 text-xl font-medium tracking-[-0.02em] text-black/72 sm:text-2xl">
              05后｜上财在读｜AI武装起来的新一代商业观察者
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/58">
              我正在用 AI、项目制学习和真实商业实践，探索医疗养老、AI营销、个人第二大脑和 163 个行业。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0071e3] px-6 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,113,227,0.22)] transition hover:bg-[#0077ed]"
                href="#doing"
              >
                看看我在做什么
                <ArrowRight size={17} />
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-black/78 shadow-sm transition hover:bg-black/[0.035]"
                href="#industry"
              >
                了解163个行业探索
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[34px] border border-black/10 bg-white p-4 shadow-[0_28px_80px_rgba(0,0,0,0.12)]">
              <div className="rounded-[24px] bg-[#f5f5f7] p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-black/42">Current Focus</p>
                    <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em]">
                      我现在在做什么
                    </h2>
                  </div>
                  <Sparkles className="text-[#0071e3]" size={28} />
                </div>
                <div className="space-y-3">
                  {projects.map((project, index) => {
                    const Icon = projectIcons[index] ?? Sparkles;

                    return (
                      <div
                        key={project.title}
                        className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"
                      >
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-black text-white">
                          <Icon size={20} />
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-semibold tracking-[-0.01em]">
                              {project.title}
                            </h3>
                            <span className="rounded-full bg-[#f5f5f7] px-2 py-0.5 text-xs font-medium text-black/48">
                              {project.status}
                            </span>
                          </div>
                          <p className="mt-1 text-sm leading-6 text-black/55">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="doing" className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="What I’m Building"
            title="我现在在做的三件事"
            description="这些不是单纯的想法，而是我正在用内容、AI 和现实项目持续推进的方向。"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = projectIcons[index] ?? Sparkles;

              return (
                <article
                  key={project.title}
                  className="flex min-h-[310px] flex-col rounded-[28px] border border-black/[0.08] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)]"
                >
                  <div className="mb-8 flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1d1d1f] text-white">
                      <Icon size={22} />
                    </span>
                    <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-semibold text-black/52">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[15px] leading-7 text-black/58">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/[0.08] px-3 py-1 text-xs font-medium text-black/52"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="industry" className="bg-white px-5 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Industry Exploration"
              title="163个行业探索"
              description="这是一个长期行业拆解计划。我会用内容和项目，把不同行业的商业模式、用户需求和现实运行逻辑慢慢讲清楚。"
            />
            <a
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-black px-5 text-sm font-semibold text-white transition hover:bg-black/82"
              href="#content"
            >
              查看内容入口
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="rounded-[34px] bg-[#f5f5f7] p-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {featuredIndustries.map((industry) => (
                <article
                  key={industry.id}
                  className="rounded-[24px] bg-white p-5 shadow-sm"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-sm font-semibold text-black/42">
                      第 {industry.issue} 期
                    </span>
                    <span className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-xs font-medium text-black/52">
                      {industry.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#0071e3]">
                    {industry.sector}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-black/58">
                    {industry.insight}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-3 rounded-[24px] border border-dashed border-black/12 bg-white/70 p-5 text-sm leading-6 text-black/52">
              其余行业节点会在后续内容中逐步点亮，形成一个长期更新的商业观察地图。
            </div>
          </div>
        </div>
      </section>

      <section id="content" className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Content"
            title="我的内容入口"
            description="如果你是从短视频平台看到我，可以从这里继续关注我的项目进展、行业观察和 AI 实践。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {contentLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.title}
                  className="rounded-[28px] border border-black/[0.08] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)]"
                  href={link.href}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f5f5f7] text-black">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
                    {link.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/56">
                    {link.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="About"
            title="关于我"
            description="我希望把学习、观察、项目和输出连接起来，用 AI 搭建一个能持续进化的个人系统。"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {featuredJourney.map((node) => (
              <article
                key={node.title}
                className="rounded-[24px] bg-[#f5f5f7] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/36">
                  {node.phase}
                </p>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">
                  {node.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/58">
                  {node.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-[#1d1d1f] p-8 text-white sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/42">
                Contact
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                如果你想交流项目、内容或合作方向，可以联系我。
              </h2>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {cooperationItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-sm text-white/68"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/88"
                href="mailto:hello@example.com"
              >
                <Mail size={17} />
                hello@example.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/[0.08] bg-white px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-black/46 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 李毅恒 · YihengOS</span>
          <span>用 AI、商业观察和真实项目探索未来商业。</span>
        </div>
      </footer>
    </main>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/38">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-black/58">{description}</p>
    </div>
  );
}
