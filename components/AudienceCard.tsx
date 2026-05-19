import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Handshake,
  Lightbulb,
  PlayCircle,
  Store,
} from "lucide-react";
import type { Audience } from "@/data/audiences";

type AudienceCardProps = {
  audience: Audience;
};

const iconMap = {
  "business-owner": Store,
  "tech-team": Bot,
  partner: Handshake,
  viewer: PlayCircle,
  creator: Lightbulb,
  "first-time": BriefcaseBusiness,
};

export function AudienceCard({ audience }: AudienceCardProps) {
  const Icon = iconMap[audience.slug];

  return (
    <Link
      className="group relative block min-h-[220px] overflow-hidden rounded-[28px] border border-black/[0.08] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_70px_rgba(0,0,0,0.09)]"
      href={`/guide/${audience.slug}`}
    >
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#f5f5f7] transition group-hover:bg-blue-50" />
      <div className="relative flex h-full flex-col">
        <div className="mb-9 flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1d1d1f] text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
            <Icon size={22} />
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f5f5f7] text-black/42 transition group-hover:bg-[#0071e3] group-hover:text-white">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-black/36">
          Guide
        </p>
        <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#1d1d1f]">
          {audience.shortTitle}
        </h3>
        <p className="mt-3 text-sm leading-6 text-black/56">{audience.description}</p>
      </div>
    </Link>
  );
}
