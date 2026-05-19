"use client";

import { useMemo, useState } from "react";
import { IndustryDetailPanel } from "@/components/IndustryDetailPanel";
import { IndustryMap } from "@/components/IndustryMap";
import { industries } from "@/data/industries";

export function IndustryMapWindow() {
  const initialIndustry = useMemo(() => industries[0], []);
  const [selectedIndustry, setSelectedIndustry] = useState(initialIndustry);

  return (
    <div>
      <div className="mb-7 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-100/42">
          163 Industries
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-100/74">
          用长期行业探索版图记录现实世界的运行逻辑。节点会随着内容产出逐步点亮。
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.85fr)]">
        <IndustryMap
          industries={industries}
          selectedId={selectedIndustry.id}
          onSelect={setSelectedIndustry}
        />
        <IndustryDetailPanel industry={selectedIndustry} />
      </div>
    </div>
  );
}
