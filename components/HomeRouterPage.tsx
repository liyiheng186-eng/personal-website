"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AudienceRouter } from "@/components/AudienceRouter";
import { SiteHeader } from "@/components/SiteHeader";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

export function HomeRouterPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-28 h-56 w-56 rounded-full bg-blue-100/80 blur-3xl" />

      <SiteHeader />

      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pb-14 pt-16 sm:pb-20 sm:pt-24 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
        <motion.p
          variants={fadeUp}
          className="inline-flex rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm font-medium text-black/52 shadow-sm"
        >
          个人商业操作系统
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-8 text-6xl font-semibold leading-none tracking-[-0.06em] sm:text-8xl"
        >
          李毅恒
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl font-medium tracking-[-0.03em] text-black/72 sm:text-2xl"
        >
          05后｜上财在读｜AI武装起来的新一代商业观察者
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-3xl text-lg leading-8 text-black/58"
        >
          我不是在做一个普通作品集，而是在把 AI、项目制学习、内容系统和现实商业实践，变成一个持续生长的个人商业操作系统。
        </motion.p>
        <motion.p variants={fadeUp} className="mt-4 text-base text-black/46">
          如果你是第一次点进来，可以先选一个最接近你的身份，从对应视角认识我。
        </motion.p>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.18 }}
          className="rounded-[36px] border border-black/10 bg-white p-4 shadow-[0_28px_80px_rgba(0,0,0,0.12)]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#e9eaee]">
            <motion.img
              src="/yiheng-portrait.png"
              alt="李毅恒的 AI 形象照"
              className="h-full w-full object-cover object-center"
              whileHover={reduceMotion ? undefined : { scale: 1.018 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-transparent to-white/5" />
          </div>
        </motion.div>
      </section>

      <div className="relative z-10">
        <AudienceRouter />
      </div>
    </main>
  );
}
