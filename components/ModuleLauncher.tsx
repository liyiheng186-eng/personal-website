import { modules, type ModuleId } from "@/data/modules";
import { ModuleCard } from "@/components/ModuleCard";

type ModuleLauncherProps = {
  activeModule: ModuleId | null;
  onOpen: (moduleId: ModuleId) => void;
};

export function ModuleLauncher({ activeModule, onOpen }: ModuleLauncherProps) {
  return (
    <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {modules.map((module) => (
        <ModuleCard
          key={module.id}
          module={module}
          isActive={activeModule === module.id}
          onOpen={() => onOpen(module.id)}
        />
      ))}
    </section>
  );
}
