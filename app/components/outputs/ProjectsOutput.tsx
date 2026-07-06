import Spacer from "../Spacer";
import ProjectRow from "../Project_row";
import type { Project } from "../../lib/types";

export default function ProjectsOutput({ projects }: { projects: Project[] }) {
  return (
    <div className="px-2 py-4">
      <Spacer />
      <div className="text-sm leading-relaxed">
        {projects.length === 0 ? (
          <span className="text-[var(--muted)]">no projects loaded — try again later</span>
        ) : (
          projects.map((p) => <ProjectRow key={p.link} {...p} />)
        )}
      </div>
      <Spacer />
    </div>
  );
}
