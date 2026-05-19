 "use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";

type SiteHeaderProps = {
  backHref?: string;
  backLabel?: string;
  contactHref?: string;
};

const navItems = [
  { label: "正在构建", href: "/building" },
  { label: "证据系统", href: "/proof" },
  { label: "行业地图", href: "/map" },
];

export function SiteHeader({
  backHref,
  backLabel,
  contactHref = "/contact",
}: SiteHeaderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className="sticky top-0 z-50 px-4 pt-3"
      initial={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOutExpo }}
    >
      <nav className="mx-auto flex h-[58px] max-w-6xl items-center justify-between gap-3 rounded-[22px] border border-white/70 bg-white/72 px-3 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
        <Link
          className="inline-flex h-10 items-center gap-2 rounded-[16px] bg-[#1d1d1f] px-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] transition hover:bg-black"
          href={backHref ?? "/"}
        >
          {backHref ? <ArrowLeft size={15} /> : <Sparkles size={15} />}
          <span>{backLabel ?? "YihengOS｜李毅恒"}</span>
        </Link>

        <div className="hidden items-center rounded-[18px] border border-black/[0.06] bg-[#f5f5f7]/82 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="rounded-[14px] px-4 py-2 text-sm font-semibold text-black/56 transition hover:bg-white hover:text-black hover:shadow-sm"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          className="inline-flex h-10 items-center rounded-[16px] bg-[#0071e3] px-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,113,227,0.22)] transition hover:bg-[#0077ed]"
          href={contactHref}
        >
          联系我
        </Link>
      </nav>
    </motion.header>
  );
}
