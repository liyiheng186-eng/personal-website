"use client";

import { Activity, Command, Globe2, Sparkles } from "lucide-react";
import { modules, type ModuleId } from "@/data/modules";

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

type DockProps = {
  activeModule: ModuleId | null;
  onOpen: (moduleId: ModuleId) => void;
};

export function Dock({ activeModule, onOpen }: DockProps) {
  return (
    <nav
      className="fixed bottom-4 left-1/2 z-40 hidden -translate-x-1/2 items-end gap-2 rounded-[24px] border border-white/18 bg-black/34 px-3 py-2 shadow-dock backdrop-blur-2xl sm:flex"
      aria-label="YihengOS Dock"
    >
      {modules.map((module) => {
        const Icon = icons[module.icon];
        const active = activeModule === module.id;

        return (
          <button
            key={module.id}
            type="button"
            aria-label={module.title}
            title={module.dockLabel}
            onClick={() => onOpen(module.id)}
            className={`group relative grid h-[52px] w-[52px] place-items-center rounded-[15px] bg-gradient-to-br ${iconStyles[module.icon]} text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.58),0_9px_18px_rgba(0,0,0,0.22)] transition duration-200 hover:-translate-y-2 hover:scale-110`}
          >
            <Icon size={24} strokeWidth={2.2} />
            <span
              className={`absolute -bottom-2 h-1 w-1 rounded-full bg-white transition ${
                active ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
