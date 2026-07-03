import Spacer from "../components/Spacer";
import { getMediumProjects } from "../lib/medium";
import ProjectRow from "../components/Project_row";
import Link from "next/link";

export const revalidate = 1800; // 30 minutes

type Project = {
  title: string;
  link: string;
  date: string;
  description: string;
  stack: string[];
};

export default async function ProjectsPage() {
  let projects: Project[] = [];

  try {
    projects = await getMediumProjects();
  } catch (e) {
    console.error("Medium fetch error:", e);
  }

  return (
    <section className="flex flex-col">
      {/* LINKS command */}
      <p className="text-sm text-[var(--muted)]">
      <Link
        href="/"
        className="opacity-80 hover:text-[var(--accent)] transition-colors"
      >
        ricky@rickycircelli
      </Link>
      <span className="opacity-60">:~$</span>{" "}
      <span className="text-[var(--fg)]">ls</span> links/
      </p>

      {/* LINKS output */}
      <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-4">
      <Spacer />

        <div className="space-y-2 text-sm">
          <div>
            <span className="text-[var(--muted)]">|</span>{" "}
            <Link href="/" className="text-[var(--fg)] hover:text-[var(--accent)]">
              home
            </Link>
          </div>

          <div>
            <span className="text-[var(--muted)]">|</span>{" "}
            <a
              href="https://github.com/rickycircelli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--fg)] hover:text-[var(--accent)]"
            >
              github
            </a>
          </div>

          <div>
            <span className="text-[var(--muted)]">|</span>{" "}
            <a
              href="https://www.linkedin.com/in/richardcircelli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--fg)] hover:text-[var(--accent)]"
            >
              linkedin
            </a>
          </div>

          <div>
            <span className="text-[var(--muted)]">|</span>{" "}
            <a
              href="/resume/ricky_circelli_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="emphasis-accent underline decoration-[rgba(143,175,154,0.45)]"
            >
              resume.pdf
            </a>
          </div>

        </div>
      <Spacer />
      </div>

      {/* PROJECTS command */}
      <p className="text-sm text-[var(--muted)]">
        <span className="opacity-80">ricky@rickycircelli</span>
        <span className="opacity-60">:~$</span>{" "}
        <span className="text-[var(--fg)]">cat</span> projects.log
      </p>

      {/* PROJECTS output */}
      <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-4">
        <Spacer />

        <div className="text-sm leading-relaxed">
          <div>
            {projects.map((p) => (
              <ProjectRow key={p.link} {...p} />
            ))}
          </div>
        </div>
        
      </div>

      <Spacer />
    </section>
  );
}
