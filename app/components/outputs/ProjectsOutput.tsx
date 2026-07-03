import Spacer from "../Spacer";
import ProjectRow from "../Project_row";
import type { Project } from "../../lib/types";

export default function ProjectsOutput({ projects }: { projects: Project[] }) {
  return (
    <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-4">
      <Spacer />
      <div className="text-sm leading-relaxed">
        {projects.length === 0 ? (
          <span className="text-[var(--muted)]">
            no projects loaded — see{" "}
            <a href="/projects" className="text-[var(--fg)] hover:text-[var(--accent)]">/projects</a>
          </span>
        ) : (
          projects.map((p) => <ProjectRow key={p.link} {...p} />)
        )}
      </div>
      <Spacer />
    </div>
  );
}
