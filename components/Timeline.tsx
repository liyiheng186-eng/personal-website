import type { JourneyNode } from "@/data/journey";

type TimelineProps = {
  nodes: JourneyNode[];
};

export function Timeline({ nodes }: TimelineProps) {
  return (
    <div className="relative space-y-4 before:absolute before:bottom-3 before:left-[10px] before:top-3 before:w-px before:bg-white/10">
      {nodes.map((node) => (
        <article key={node.title} className="relative pl-9">
          <span className="absolute left-0 top-1.5 h-5 w-5 rounded-full border border-blue-100/26 bg-slate-950 shadow-[0_0_22px_rgba(147,197,253,0.18)]" />
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold text-white">{node.title}</h3>
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-blue-100/42">
                {node.phase}
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-200/58">{node.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {node.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/[0.055] px-2.5 py-1 text-[11px] text-slate-200/54"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
