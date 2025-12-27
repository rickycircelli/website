import Spacer from "../components/Spacer";

export default function Projects() {
  return (
    <main className="min-h-screen p-10 bg-zinc-50">
    
    <p className="text-sm text-[var(--muted)]">
    <span className="opacity-80">ricky@rickycircelli</span>
    <span className="opacity-60">:~$</span>{" "}
    <span className="text-[var(--fg)]">ls</span>{" "}
    links/
    </p>

    <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-4">
    <Spacer />
    
      <div className="space-y-2 text-sm">
        <div>
          <span className="text-[var(--muted)]">|</span>{" "}
          <a href="/" className="text-[var(--fg)] hover:text-[var(--accent)]">
            home
          </a>
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

      <Spacer />

      </div>
    </div>




    </main>
  );
}
