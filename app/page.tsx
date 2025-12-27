import Spacer from "./components/Spacer";


export default function Home() {
  return (
    <section className="flex flex-col">
      
    {/* HERO command */}
    <p className="text-sm text-[var(--muted)]">
      <span className="opacity-80">ricky@rickycircelli</span>
      <span className="opacity-60">:~$</span>{" "}
      <span className="text-[var(--fg)]">whoami</span>
    </p>

    {/* HERO output */}
    <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-4">
      <h1 className="text-lg sm:text-xl font-medium text-[var(--fg)]">
        hi, i’m ricky.
      </h1>

      <p className="mt-2 text-sm text-[var(--muted)]">
        role=<span className="text-[var(--fg)]">student-athlete</span>{" "}
        | focus=<span className="text-[var(--fg)]">finance</span>{" "}
        | focus=<span className="text-[var(--fg)]">data-science</span>
      </p>
    </div>




      {/* LINKS command */}
      <p className="text-sm text-[var(--muted)]">
        <span className="opacity-80">ricky@rickycircelli</span>
        <span className="opacity-60">:~$</span>{" "}
        <span className="text-[var(--fg)]">ls</span>{" "}
        links/
      </p>


      {/* LINKS output */}
      <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-4">
        <div className="space-y-2 text-sm">
        <Spacer />


          <div>
            <span className="text-[var(--muted)]">|</span>{" "}
            <a href="/projects" className="text-[var(--fg)] hover:text-[var(--accent)]">
              projects
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

      {/* STATUS command */}
      <p className="text-sm text-[var(--muted)]">
        <span className="opacity-80">ricky@rickycircelli</span>
        <span className="opacity-60">:~$</span> status
      </p>


      {/* STATUS output */}
      <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-4 text-sm">
        <Spacer />
        <span className="opacity-60 text-[var(--fg)]">#</span>{" "}
        <span className="text-[var(--fg)]">
          building and documenting projects while competing for south carolina men’s track & field
        </span>
        <Spacer />
      </div>


      
      {/* EXPERIENCE command */}
      <p className="text-sm text-[var(--muted)]">
        <span className="opacity-80">ricky@rickycircelli</span>
        <span className="opacity-60">:~$</span>{" "}
        <span className="text-[var(--fg)]">cat</span> experience.log
      </p>

      {/* EXPERIENCE output */}
      <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-5">
        <div className="text-sm leading-relaxed">
          {/* Item 1 */}

        <Spacer />


          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div className="text-[var(--fg)]">
                <span className="emphasis">Ally Financial</span>{" "}
                <span className="text-[var(--muted)]">
                  — Auto Originations Analytics
                </span>
              </div>
              <div className="text-xs text-[var(--muted)]">
                Summer 2026 · Charlotte, NC
              </div>
            </div>

            <div className="mt-3 space-y-1 text-[var(--muted)]">
              <div>
                <span className="opacity-70">{">"}</span>{" "}
                builds scorecards + loss models for auto origination decisions
              </div>
              <div>
                <span className="opacity-70">{">"}</span>{" "}
                supports pricing with lifetime loss estimation + risk insights
              </div>
            </div>

            <div className="mt-4 text-xs">
              <span className="text-[var(--muted)]">stack:</span>{" "}
              <span className="accent-muted">python</span>
              <span className="text-[var(--muted)]"> · </span>
              <span className="accent-muted">sql</span>
              <span className="text-[var(--muted)]"> · </span>
              <span className="accent-muted">power bi</span>
            </div>
          </div>

          <Spacer />

          {/* Item 2 */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div className="text-[var(--fg)]">
                <span className="emphasis">University of South Carolina</span>{" "}
                <span className="text-[var(--muted)]">
                  — Finance + Data Science
                </span>
              </div>
              <div className="text-xs text-[var(--muted)]">
                2024–Present · Columbia, SC
              </div>
            </div>

            <div className="mt-3 space-y-1 text-[var(--muted)]">
              <div>
                <span className="opacity-70">{">"}</span> honors college
              </div>
              <div>
                <span className="opacity-70">{">"}</span> men’s track &amp; field
                (800m)
              </div>
              <div>
                <span className="opacity-70">{">"}</span> building fintech / credit-risk
                projects + factor research
              </div>
            </div>

            <div className="mt-4 text-xs">
              <span className="text-[var(--muted)]">focus:</span>{" "}
              <span className="accent-muted">credit risk</span>
              <span className="text-[var(--muted)]"> · </span>
              <span className="accent-muted">fintech</span>
              <span className="text-[var(--muted)]"> · </span>
              <span className="accent-muted">statistics</span>
            </div>

            <Spacer />


          </div>
        </div>
      </div>

      {/* CONTACT command */}
      <p className="text-sm text-[var(--muted)]">
        <span className="opacity-80">ricky@rickycircelli</span>
        <span className="opacity-60">:~$</span>{" "}
        <span className="text-[var(--fg)]">echo</span>{" "}
        <a
          href="mailto:rickycircelli@gmail.com"
          className="emphasis-accent underline decoration-[rgba(143,175,154,0.45)]"
        >
          rickycircelli@gmail.com
        </a>
      </p>

    </section>
  );
}
