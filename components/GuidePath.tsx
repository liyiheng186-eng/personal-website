"use client";

import { motion } from "framer-motion";
import { GuideStepCard } from "@/components/GuideStepCard";
import type { GuideStep } from "@/data/audiences";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type GuidePathProps = {
  steps: GuideStep[];
  audienceSlug: string;
};

export function GuidePath({ steps, audienceSlug }: GuidePathProps) {
  return (
    <section>
      <motion.div
        className="mb-5 flex items-end justify-between gap-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/36">
            Guide Path
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#1d1d1f]">
            认识路径
          </h2>
        </div>
        <span className="hidden text-sm text-black/38 sm:inline">
          {steps.length} steps
        </span>
      </motion.div>
      <motion.div
        className="grid gap-4 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {steps.map((step) => (
          <motion.div key={step.number} variants={fadeUp}>
            <GuideStepCard step={step} audienceSlug={audienceSlug} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
