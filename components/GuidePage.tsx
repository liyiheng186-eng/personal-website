 "use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { GuidePath } from "@/components/GuidePath";
import { RelatedCard } from "@/components/RelatedCard";
import { SiteHeader } from "@/components/SiteHeader";
import type { Audience } from "@/data/audiences";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

type GuidePageProps = {
  audience: Audience;
};

function withGuideSource(href: string, audienceSlug: string) {
  const [path, hash] = href.split("#");
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}from=${audienceSlug}${hash ? `#${hash}` : ""}`;
}

export function GuidePage({ audience }: GuidePageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-24 h-56 w-56 rounded-full bg-blue-100/70 blur-3xl" />

      <SiteHeader
        backHref="/"
        backLabel="回到首页"
        contactHref={withGuideSource("/contact", audience.slug)}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-10 sm:pb-24 sm:pt-16">
        <motion.section
          className="mb-12 rounded-[34px] border border-black/10 bg-white p-7 shadow-[0_28px_80px_rgba(0,0,0,0.12)] sm:p-10"
          variants={scaleIn}
          initial="hidden"
          animate="show"
        >
          <p className="mb-5 inline-flex rounded-full border border-black/10 bg-[#f5f5f7] px-3 py-1 text-sm font-medium text-black/48">
            YihengOS 认识路径
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#1d1d1f] sm:text-6xl">
            {audience.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/58">
            {audience.guideIntro}
          </p>
        </motion.section>

        <div className="space-y-12">
          <GuidePath steps={audience.steps} audienceSlug={audience.slug} />

          <section>
            <motion.div
              className="mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/36">
                相关内容
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#1d1d1f]">
                相关项目 / 内容 / 证据
              </h2>
            </motion.div>
            <motion.div
              className="grid gap-4 md:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {audience.relatedCards.map((card) => (
                <motion.div key={card.title} variants={fadeUp}>
                  <RelatedCard card={card} audienceSlug={audience.slug} />
                </motion.div>
              ))}
            </motion.div>
          </section>

          <motion.section
            className="rounded-[34px] bg-[#1d1d1f] p-7 text-white shadow-[0_28px_80px_rgba(0,0,0,0.12)] sm:p-9"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/36">
                  下一步
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                  接下来你可以继续往哪看？
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                {audience.cta.secondaryHref && audience.cta.secondaryLabel ? (
                  <Link
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/12 px-5 text-sm font-semibold text-white/64 transition hover:bg-white/[0.08] hover:text-white"
                    href={withGuideSource(audience.cta.secondaryHref, audience.slug)}
                  >
                    {audience.cta.secondaryLabel}
                  </Link>
                ) : null}
                <Link
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-black transition hover:bg-blue-50"
                  href={withGuideSource(audience.cta.href, audience.slug)}
                >
                  {audience.cta.label}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
