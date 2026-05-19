"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

type WindowFrameProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

export function WindowFrame({ title, children, onClose }: WindowFrameProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/22 p-0 backdrop-blur-[2px] sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="mac-window flex h-[100svh] w-full flex-col overflow-hidden border border-white/38 shadow-[0_28px_100px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:h-auto sm:max-h-[78vh] sm:max-w-[1080px] sm:rounded-[18px]"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="flex h-11 shrink-0 items-center justify-between border-b border-white/10 bg-white/10 px-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-2" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]/90 ring-1 ring-black/10" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/90 ring-1 ring-black/10" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]/90 ring-1 ring-black/10" />
            </div>
            <h2 className="line-clamp-1 text-[13px] font-semibold text-white/76">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 items-center gap-1.5 rounded-[9px] px-2.5 text-xs font-medium text-white/58 transition hover:bg-white/[0.08] hover:text-white"
          >
            <X size={14} />
            Close
          </button>
        </header>
        <div className="window-scrollbar min-h-0 flex-1 overflow-y-auto bg-white/[0.035] p-5 sm:p-7">
          {children}
        </div>
      </motion.section>
    </motion.div>
  );
}
