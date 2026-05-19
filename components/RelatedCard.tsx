import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { RelatedCard as RelatedCardType } from "@/data/audiences";

type RelatedCardProps = {
  card: RelatedCardType;
  audienceSlug: string;
};

function withGuideSource(href: string, audienceSlug: string) {
  const [path, hash] = href.split("#");
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}from=${audienceSlug}${hash ? `#${hash}` : ""}`;
}

export function RelatedCard({ card, audienceSlug }: RelatedCardProps) {
  return (
    <Link
      className="group block rounded-[24px] border border-black/[0.08] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.008] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      href={withGuideSource(card.href, audienceSlug)}
    >
      <div className="mb-8 flex items-center justify-between gap-4">
        <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-black/46">
          {card.meta}
        </span>
        <ArrowUpRight
          className="text-black/34 transition group-hover:text-[#0071e3]"
          size={17}
        />
      </div>
      <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#1d1d1f]">
        {card.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-black/52">{card.description}</p>
    </Link>
  );
}
