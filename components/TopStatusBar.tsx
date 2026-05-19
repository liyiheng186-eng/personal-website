"use client";

import { useEffect, useState } from "react";

type TopStatusBarProps = {
  activeLabel: string;
};

export function TopStatusBar({ activeLabel }: TopStatusBarProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("zh-CN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };

    updateTime();
    const timer = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-8 items-center border-b border-white/10 bg-black/36 px-3 text-[13px] text-white/78 shadow-[0_1px_18px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:px-5">
      <div className="flex flex-1 items-center gap-4 font-medium">
        <span className="text-[15px] leading-none text-white">●</span>
        <span className="font-semibold text-white/92">YihengOS</span>
        <span className="hidden items-center gap-1.5 text-white/68 sm:inline-flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/90 shadow-[0_0_9px_rgba(110,231,183,0.5)]" />
          Building
        </span>
      </div>
      <div className="hidden flex-1 justify-center sm:flex">
        <span className="font-medium text-white/72">{activeLabel}</span>
      </div>
      <div className="flex flex-1 items-center justify-end gap-3">
        <span className="tabular-nums text-white/76">{time}</span>
        <nav className="hidden items-center gap-3 text-white/62 md:flex" aria-label="外部链接">
          <a className="transition hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="transition hover:text-white" href="#" aria-label="小红书链接占位">
            小红书
          </a>
          <a className="transition hover:text-white" href="#" aria-label="抖音链接占位">
            抖音
          </a>
          <a className="transition hover:text-white" href="mailto:hello@example.com">
            邮箱
          </a>
        </nav>
      </div>
    </header>
  );
}
