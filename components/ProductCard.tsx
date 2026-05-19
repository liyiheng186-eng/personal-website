import type { ProductItem } from "@/data/products";

type ProductCardProps = {
  item: ProductItem;
};

export function ProductCard({ item }: ProductCardProps) {
  return (
    <article
      className={`rounded-3xl border border-white/10 bg-white/[0.045] p-5 ${
        item.featured ? "md:col-span-2 md:min-h-[220px]" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <span className="shrink-0 rounded-full border border-blue-100/16 bg-blue-100/[0.06] px-2.5 py-1 text-[11px] text-blue-100/72">
          {item.status}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-200/60">{item.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/[0.055] px-2.5 py-1 text-[11px] text-slate-200/56"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
