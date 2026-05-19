"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { availableProducts, developingProducts } from "@/data/products";

const tabs = [
  { id: "developing", label: "开发中" },
  { id: "available", label: "可对外提供" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ProductsWindow() {
  const [activeTab, setActiveTab] = useState<TabId>("developing");
  const items = activeTab === "developing" ? developingProducts : availableProducts;

  return (
    <div>
      <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-100/42">
            Products & Services
          </p>
          <p className="mt-3 text-lg leading-8 text-slate-100/74">
            这里展示我正在开发、未来可能对外提供的产品、Skill、Agent 和服务。
          </p>
        </div>
        <div className="inline-flex w-full rounded-full border border-white/10 bg-white/[0.045] p-1 md:w-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`h-9 flex-1 rounded-full px-4 text-sm font-medium transition md:flex-none ${
                activeTab === tab.id
                  ? "bg-white text-slate-950"
                  : "text-slate-200/58 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <ProductCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
