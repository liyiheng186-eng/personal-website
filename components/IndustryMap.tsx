"use client";

import type { Industry } from "@/data/industries";

type IndustryMapProps = {
  industries: Industry[];
  selectedId: string;
  onSelect: (industry: Industry) => void;
};

const statusClass = {
  已完成: "bg-blue-300 shadow-[0_0_18px_rgba(147,197,253,0.72)]",
  研究中: "bg-slate-100 shadow-[0_0_16px_rgba(226,232,240,0.5)]",
  待开启: "bg-slate-500/45 shadow-none",
};

export function IndustryMap({ industries, selectedId, onSelect }: IndustryMapProps) {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/38">
      <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/12 bg-[radial-gradient(circle,rgba(147,197,253,0.1),transparent_62%)]" />
      <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045]" />
      <div className="absolute inset-8 rounded-full border border-dashed border-white/[0.06]" />
      <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-y-10 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {industries.map((industry) => {
        const selected = selectedId === industry.id;

        return (
          <button
            key={industry.id}
            type="button"
            title={industry.name}
            onClick={() => onSelect(industry)}
            className="industry-node absolute -translate-x-1/2 -translate-y-1/2"
            style={
              {
                "--node-x": `${industry.x}%`,
                "--node-y": `${industry.y}%`,
              } as React.CSSProperties
            }
          >
            <span
              className={`block rounded-full transition duration-200 hover:scale-125 ${
                statusClass[industry.status]
              } ${selected ? "h-4 w-4 ring-4 ring-blue-200/18" : "h-2.5 w-2.5"}`}
            />
            <span className="pointer-events-none absolute left-1/2 top-5 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/90 px-2 py-1 text-[11px] text-slate-100/70 group-hover:block" />
          </button>
        );
      })}

      <div className="absolute bottom-4 left-4 flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-[11px] text-slate-200/56 backdrop-blur-xl">
        <span className="inline-flex items-center gap-1.5">
          <i className="h-2 w-2 rounded-full bg-blue-300" /> 已完成
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="h-2 w-2 rounded-full bg-slate-100" /> 研究中
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="h-2 w-2 rounded-full bg-slate-500/60" /> 待开启
        </span>
      </div>
    </div>
  );
}
