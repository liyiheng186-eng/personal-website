import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex min-h-[280px] flex-col rounded-3xl border border-white/10 bg-white/[0.045] p-5">
      <div className="mb-8 flex items-start justify-between gap-4">
        <span className="h-2.5 w-2.5 rounded-full bg-blue-200/80 shadow-[0_0_18px_rgba(191,219,254,0.45)]" />
        <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-slate-100/62">
          {project.status}
        </span>
      </div>
      <h3 className="text-xl font-semibold tracking-[-0.01em] text-white">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-200/60">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/[0.055] px-2.5 py-1 text-[11px] text-slate-200/56"
          >
            {tag}
          </span>
        ))}
      </div>
      <button
        type="button"
        className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 text-sm font-semibold text-slate-100/78 transition hover:border-white/22 hover:bg-white/[0.08]"
      >
        {project.action}
        <ArrowUpRight size={15} />
      </button>
    </article>
  );
}
