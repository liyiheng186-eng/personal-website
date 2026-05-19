import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GuideStep } from "@/data/audiences";

type GuideStepCardProps = {
  step: GuideStep;
  audienceSlug: string;
};

function withGuideSource(href: string, audienceSlug: string) {
  const [path, hash] = href.split("#");
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}from=${audienceSlug}${hash ? `#${hash}` : ""}`;
}

export function GuideStepCard({ step, audienceSlug }: GuideStepCardProps) {
  return (
    <article className="group rounded-[26px] border border-black/[0.08] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.008] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold tracking-[0.18em] text-black/34">
          STEP {step.number}
        </span>
        <Link
          className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#f5f5f7] px-3 text-xs font-semibold text-black/68 transition group-hover:bg-[#0071e3] group-hover:text-white"
          href={withGuideSource(step.href, audienceSlug)}
        >
          {step.action}
          <ArrowRight size={14} />
        </Link>
      </div>
      <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#1d1d1f]">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-black/56">{step.description}</p>
    </article>
  );
}
