import { Timeline } from "@/components/Timeline";
import { contentPlaceholders, doneThings, journeyNodes } from "@/data/journey";

export function JourneyWindow() {
  return (
    <div className="space-y-9">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-100/42">
          Growth Map
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-100/74">
          这不是一份传统简历，而是一张个人成长轨迹和内容资产地图。
        </p>
      </div>

      <section>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200/46">
          Timeline
        </h3>
        <Timeline nodes={journeyNodes} />
      </section>

      <section>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200/46">
          做过的事情
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {doneThings.map((thing) => (
            <div
              key={thing}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-medium text-slate-100/72"
            >
              {thing}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200/46">
          内容展示区
        </h3>
        <div className="grid gap-3 md:grid-cols-3">
          {contentPlaceholders.map((item) => (
            <div
              key={item}
              className="flex min-h-[130px] items-end rounded-3xl border border-dashed border-white/14 bg-white/[0.025] p-4 text-sm text-slate-200/52"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
