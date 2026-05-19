"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Dock } from "@/components/Dock";
import { DoingWindow } from "@/components/DoingWindow";
import { HeroIdentityCard } from "@/components/HeroIdentityCard";
import { IndustryMapWindow } from "@/components/IndustryMapWindow";
import { JourneyWindow } from "@/components/JourneyWindow";
import { ModuleLauncher } from "@/components/ModuleLauncher";
import { ProductsWindow } from "@/components/ProductsWindow";
import { TopStatusBar } from "@/components/TopStatusBar";
import { WindowFrame } from "@/components/WindowFrame";
import { modules, type ModuleId } from "@/data/modules";

export function DesktopShell() {
  const [activeModule, setActiveModule] = useState<ModuleId | null>(null);
  const activeConfig = modules.find((module) => module.id === activeModule);

  return (
    <main className="relative min-h-screen overflow-hidden px-5 pb-28 pt-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-8 h-px bg-white/12" />
      <div className="pointer-events-none absolute left-[10%] top-[16%] h-40 w-40 rounded-full bg-white/[0.035] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[12%] right-[10%] h-52 w-52 rounded-full bg-white/[0.028] blur-3xl" />
      <TopStatusBar activeLabel={activeConfig?.dockLabel ?? "Home"} />

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col items-center justify-center gap-9">
        <HeroIdentityCard
          onEnter={() => setActiveModule("doing")}
          onProjects={() => setActiveModule("products")}
        />
        <ModuleLauncher activeModule={activeModule} onOpen={setActiveModule} />
      </section>

      <Dock activeModule={activeModule} onOpen={setActiveModule} />

      <AnimatePresence>
        {activeConfig ? (
          <WindowFrame
            key={activeConfig.id}
            title={activeConfig.windowTitle}
            onClose={() => setActiveModule(null)}
          >
            {activeConfig.id === "doing" ? <DoingWindow /> : null}
            {activeConfig.id === "products" ? <ProductsWindow /> : null}
            {activeConfig.id === "journey" ? <JourneyWindow /> : null}
            {activeConfig.id === "industry" ? <IndustryMapWindow /> : null}
          </WindowFrame>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
