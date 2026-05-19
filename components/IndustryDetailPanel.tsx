import { ArrowUpRight } from "lucide-react";
import type { Industry } from "@/data/industries";

type IndustryDetailPanelProps = {
  industry: Industry;
};

export function IndustryDetailPanel({ industry }: IndustryDetailPanelProps) {
  return (
    <aside className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-100/42">
        Industry Detail
      </p>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-white">{industry.name}</h3>
          <p className="mt-1 text-sm text-slate-200/52">期数：{industry.issue}</p>
        </div>
        <span className="rounded-full border border-blue-100/16 bg-blue-100/[0.06] px-2.5 py-1 text-xs text-blue-100/72">
          {industry.status}
        </span>
      </div>
      <dl className="mt-7 space-y-5">
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-slate-200/36">所属板块</dt>
          <dd className="mt-1 text-sm text-slate-100/72">{industry.sector}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-slate-200/36">一句话判断</dt>
          <dd className="mt-2 text-base leading-7 text-slate-100/72">{industry.insight}</dd>
        </div>
      </dl>
      <button
        type="button"
        className="mt-8 inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
      >
        内容入口
        <ArrowUpRight size={15} />
      </button>
    </aside>
  );
}
