import { ArrowRight, FolderOpen } from "lucide-react";

type HeroIdentityCardProps = {
  onEnter: () => void;
  onProjects: () => void;
};

export function HeroIdentityCard({ onEnter, onProjects }: HeroIdentityCardProps) {
  return (
    <section className="w-full max-w-[720px] overflow-hidden rounded-[22px] border border-white/25 bg-white/72 text-center text-slate-950 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition duration-300 hover:border-white/35">
      <div className="flex h-11 items-center border-b border-black/10 bg-white/38 px-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="mx-auto pr-12 text-[13px] font-medium text-slate-700/70">
          Welcome to YihengOS
        </span>
      </div>
      <div className="p-7 sm:p-12">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        Personal Operating System
      </p>
      <h1 className="text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-7xl">
        李毅恒
      </h1>
      <p className="mt-4 text-base font-medium text-slate-700 sm:text-lg">
        05后｜上财在读｜AI武装起来的新一代商业观察者
      </p>
      <p className="mx-auto mt-6 max-w-2xl text-balance text-sm leading-7 text-slate-600 sm:text-base">
        我正在通过 AI、项目制学习、商业观察和现实实践，搭建自己的第二 AI 大脑，并把它变成一个可持续生长的个人系统。
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-[10px] bg-[#007aff] px-5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_18px_rgba(0,122,255,0.26)] transition hover:bg-[#147efb] sm:w-auto"
          type="button"
          onClick={onEnter}
        >
          进入 YihengOS
          <ArrowRight size={16} />
        </button>
        <button
          className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-[10px] border border-black/10 bg-white/60 px-5 text-sm font-semibold text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition hover:bg-white/82 sm:w-auto"
          type="button"
          onClick={onProjects}
        >
          <FolderOpen size={16} />
          查看我的项目
        </button>
      </div>
      </div>
    </section>
  );
}
