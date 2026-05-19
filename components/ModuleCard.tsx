import { Activity, Command, Globe2, Sparkles } from "lucide-react";
import type { ModuleConfig } from "@/data/modules";

const icons = {
  activity: Activity,
  command: Command,
  timeline: Sparkles,
  globe: Globe2,
};

const iconStyles = {
  activity: "from-blue-400 via-cyan-300 to-teal-300",
  command: "from-violet-400 via-fuchsia-400 to-pink-300",
  timeline: "from-amber-300 via-orange-300 to-rose-300",
  globe: "from-indigo-400 via-blue-400 to-sky-300",
};

type ModuleCardProps = {
  module: ModuleConfig;
  isActive: boolean;
  onOpen: () => void;
};

export function ModuleCard({ module, isActive, onOpen }: ModuleCardProps) {
  const Icon = icons[module.icon];

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group min-h-[188px] rounded-[22px] border border-white/12 bg-white/[0.075] p-5 text-center shadow-[0_16px_50px_rgba(0,0,0,0.24)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.105] focus:outline-none focus:ring-2 focus:ring-white/30"
    >
      <div className="flex flex-col items-center gap-3">
        <span className={`grid h-[58px] w-[58px] place-items-center rounded-[16px] bg-gradient-to-br ${iconStyles[module.icon]} text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_10px_24px_rgba(0,0,0,0.22)] transition group-hover:scale-105`}>
          <Icon size={27} strokeWidth={2.2} />
        </span>
        <span
          className={`rounded-full border px-2.5 py-1 text-[11px] font-medium backdrop-blur-xl ${
            isActive
              ? "border-white/35 bg-white/26 text-white"
              : "border-white/15 bg-black/10 text-white/68"
          }`}
        >
          {module.status}
        </span>
      </div>
      <div className="mt-4">
        <h2 className="text-base font-semibold tracking-[-0.01em] text-white drop-shadow-sm">
          {module.title}
        </h2>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white/48">
          {module.subtitle}
        </p>
        <p className="mt-3 text-xs leading-5 text-white/62">
          {module.description}
        </p>
      </div>
    </button>
  );
}
