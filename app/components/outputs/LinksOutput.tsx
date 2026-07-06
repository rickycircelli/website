import Spacer from "../Spacer";

export default function LinksOutput() {
  return (
    <div className="px-2 py-4">
      <div className="space-y-2 text-sm">
        <Spacer />

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
  );
}
