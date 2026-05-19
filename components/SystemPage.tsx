"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { audiences } from "@/data/audiences";
import type { SystemPageSection } from "@/data/systemPages";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type SystemPageProps = {
  title: string;
  description: string;
  heroKicker: string;
  contactMethods?: {
    label: string;
    value: string;
    href: string;
  }[];
  from?: string;
  sections: SystemPageSection[];
};

export function SystemPage({
  title,
  description,
  heroKicker,
  contactMethods,
  from,
  sections,
}: SystemPageProps) {
  const validSource = audiences.some((audience) => audience.slug === from);
  const backHref = validSource ? `/guide/${from}` : "/";
  const backLabel = validSource ? "返回认识路径" : "返回首页";
  const contactHref = validSource ? `/contact?from=${from}` : "/contact";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
      <SiteHeader
        backHref={backHref}
        backLabel={backLabel}
        contactHref={contactHref}
      />
      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-12">
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <motion.p
            variants={fadeUp}
            className="mb-5 inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-sm font-medium text-black/48 shadow-sm"
          >
            {heroKicker}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-3xl text-lg leading-8 text-black/56"
          >
            {description}
          </motion.p>
        </motion.div>
        {contactMethods ? (
          <motion.div
            className="mt-10 grid gap-4 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {contactMethods.map((method) => {
              const Icon = method.label.includes("邮箱") ? Mail : Phone;

              return (
                <motion.a
                  key={method.label}
                  variants={fadeUp}
                  className="group rounded-[28px] border border-black/[0.08] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.008] hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
                  href={method.href}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-black text-white">
                    <Icon size={21} />
                  </span>
                  <p className="mt-8 text-sm font-semibold text-black/38">
                    {method.label}
                  </p>
                  <p className="mt-2 break-all text-2xl font-semibold tracking-[-0.04em] text-[#1d1d1f]">
                    {method.value}
                  </p>
                </motion.a>
              );
            })}
          </motion.div>
        ) : null}
        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {sections.map((section) => (
            <motion.article
              id={section.id}
              key={`${section.title}-${section.id ?? section.status}`}
              variants={fadeUp}
              className="flex min-h-[360px] flex-col rounded-[28px] border border-black/[0.08] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.008] hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-semibold text-black/48">
                  {section.status}
                </span>
                {section.nextHref ? (
                  <Link
                    className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black/82"
                    href={section.nextHref}
                  >
                    继续看
                  </Link>
                ) : null}
              </div>
              <p className="text-sm font-semibold text-[#0071e3]">
                {section.subtitle}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-black/54">
                {section.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {section.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/[0.08] px-2.5 py-1 text-xs font-medium text-black/46"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <p className="rounded-[18px] bg-[#f5f5f7] p-4 text-sm leading-6 text-black/58">
                  {section.whyItMatters}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
        <Link
          className="mt-12 inline-flex h-11 items-center gap-2 rounded-full bg-black px-5 text-sm font-semibold text-white transition hover:bg-black/82"
          href={backHref}
        >
          {validSource ? "回到二级认识路径" : "回到访客入口"}
          <ArrowRight size={16} />
        </Link>
        </motion.div>
      </section>
    </main>
  );
}
