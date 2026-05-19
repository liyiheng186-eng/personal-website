import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function DoingWindow() {
  return (
    <div>
      <div className="mb-7 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-100/42">
          Active Projects
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-100/74">
          这里记录我正在推进的现实项目：从线下服务，到 AI 增长，再到个人系统的长期搭建。
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
