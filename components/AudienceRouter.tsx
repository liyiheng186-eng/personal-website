"use client";

import { motion } from "framer-motion";
import { AudienceCard } from "@/components/AudienceCard";
import { audiences } from "@/data/audiences";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function AudienceRouter() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:pb-24">
      <motion.div
        className="mb-8 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/36">
          Choose Your Path
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[#1d1d1f] sm:text-5xl">
          你想从哪个视角了解我？
        </h2>
        <p className="mt-4 text-base text-black/52">不同的人，会看到不同的李毅恒。</p>
      </motion.div>
      <motion.div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {audiences.map((audience) => (
          <motion.div key={audience.slug} variants={fadeUp}>
            <AudienceCard audience={audience} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
