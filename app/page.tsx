import Spacer from "./components/Spacer";
import SkillBar from "./components/SkillBar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ricky Circelli",
  description:
    "Student-athlete at the University of South Carolina focused on fintech and data science. Projects, experience, and technical skills."
};

export default function Home() {
  return (
    <section className="flex flex-col">
      
    {/* HERO command */}
    <p className="text-sm text-[var(--muted)]">
    <Link
      href="/"
      className="opacity-80 hover:text-[var(--accent)] transition-colors"
    >
      ricky@rickycircelli
    </Link>
    <span className="opacity-60">:~$</span>{" "}
    <span className="text-[var(--fg)]">whoami</span>
    </p>

    {/* HERO output */}
    <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-4">
      <h1 className="text-lg sm:text-xl font-medium text-[var(--fg)]">
        hi, i’m ricky.
      </h1>

      <p className="mt-2 text-sm text-[var(--muted)]">
        role=<a href="https://gamecocksonline.com/sports/track/roster/player/ricky-circelli/" className="text-[var(--fg)] hover:text-[var(--accent)]">
              student-athlete
            </a>{" "}
        | focus=<span className="text-[var(--fg)]">finance/data-science</span>{" "}
        | interest=<span className="text-[var(--fg)]">fintech</span>
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
        <span className="opacity-60">:~$</span>{" "}
        <span className="text-[var(--fg)]">cat</span> status.txt
      </p>


      {/* STATUS output */}
      <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-4 text-sm">
        <Spacer />
        <span className="opacity-60 text-[var(--fg)]">#</span>{" "}
        <span className="text-[var(--fg)]">
          learning, building, and documenting projects while competing for south carolina men’s track & field
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
        <Spacer />

          {/* Item 1 */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div className="text-[var(--fg)]">
                <span className="emphasis">Ally Financial</span>{" "}
                <span className="text-[var(--muted)]">
                  — Quantitative Modeling Intern
                </span>
              </div>
              <div className="text-xs text-[var(--muted)]">
                Summer 2026 · Charlotte, NC
              </div>
            </div>

            <div className="mt-3 space-y-1 text-[var(--muted)]">
              <div>
                <span className="opacity-70">{">"}</span>{" "}
                built an end-to-end ml credit risk model for auto lending across 200k+ applications + 2k+ variables
              </div>
              <div>
                <span className="opacity-70">{">"}</span>{" "}
                applied reject inference, iv analysis, and correlation reduction to refine a high-dimensional variable set
              </div>
              <div>
                <span className="opacity-70">{">"}</span>{" "}
                trained + evaluated xgboost, lightgbm, catboost, and random forest, validating with auc, ks, and shap
              </div>
            </div>

            <div className="mt-4 text-xs">
              <span className="text-[var(--muted)]">stack:</span>{" "}
              <span className="accent-muted">python</span>
              <span className="text-[var(--muted)]"> · </span>
              <span className="accent-muted">snowflake</span>
              <span className="text-[var(--muted)]"> · </span>
              <span className="accent-muted">sql</span>
            </div>
          </div>

          <Spacer />

          {/* Varsity Stack */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div className="text-[var(--fg)]">
                <a
                  href="https://varsitystack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="emphasis hover:text-[var(--accent)]"
                >
                  Varsity Stack
                </a>{" "}
                <span className="text-[var(--muted)]">
                  — Founder
                </span>
              </div>
              <div className="text-xs text-[var(--muted)]">
                2026–Present · Columbia, SC
              </div>
            </div>

            <div className="mt-3 space-y-1 text-[var(--muted)]">
              <div>
                <span className="opacity-70">{">"}</span>{" "}
                founded an ai-powered athlete supplement intelligence platform, leading product, engineering, and gtm
              </div>
              <div>
                <span className="opacity-70">{">"}</span>{" "}
                shipped full-stack mobile + web products with claude code and llm apis
              </div>
              <div>
                <span className="opacity-70">{">"}</span>{" "}
                top 5 finalist in the sec startup competition; 1,000+ downloads and recurring subscription revenue
              </div>
            </div>

            <div className="mt-4 text-xs">
              <span className="text-[var(--muted)]">stack:</span>{" "}
              <span className="accent-muted">claude code</span>
              <span className="text-[var(--muted)]"> · </span>
              <span className="accent-muted">llm apis</span>
              <span className="text-[var(--muted)]"> · </span>
              <span className="accent-muted">supabase</span>
              <span className="text-[var(--muted)]"> · </span>
              <span className="accent-muted">railway</span>
            </div>
          </div>

          <Spacer />

          {/* Item 2 */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div className="text-[var(--fg)]">
                <span className="emphasis">University of South Carolina</span>{" "}
                <span className="text-[var(--muted)]">
                  — Finance + Data Science{" "}
                  <span className="emphasis-accent">(GPA: 4.0)</span>
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
                <span className="opacity-70">{">"}</span> carolina finance and investment association
              </div>

              <div>
                <span className="opacity-70">{">"}</span> gamecock artificial intelligence and machine learning
              </div>

            </div>

            <div className="mt-4 text-xs">
              <span className="text-[var(--muted)]">honors:</span>{" "}
              <span className="accent-muted">president’s list (4x)</span>
              <span className="text-[var(--muted)]"> · </span>
              <span className="accent-muted">csc academic all-district</span>
              <span className="text-[var(--muted)]"> · </span>
              <span className="accent-muted">sec academic honor roll</span>
            </div>

            <div className="mt-4 text-xs">
              <span className="text-[var(--muted)]">coursework:</span>{" "}
              <span className="accent-muted">statistical methods</span>
              <span className="text-[var(--muted)]"> · </span>
              <span className="accent-muted">applied statisitcs</span>
              <span className="text-[var(--muted)]"> · </span>
              <span className="accent-muted">computing for data science</span>
              <span className="text-[var(--muted)]"> · </span>
              <span className="accent-muted">data analytics</span>
            </div>

            <Spacer />
          </div>

          {/* Dubin Clark */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div className="text-[var(--fg)]">
                <span className="emphasis">Dubin Clark</span>{" "}
                <span className="text-[var(--muted)]">
                  — Private Equity Intern
                </span>
              </div>
              <div className="text-xs text-[var(--muted)]">
                Summer 2024 · Jacksonville, FL
              </div>
            </div>

            <div className="mt-3 space-y-1 text-[var(--muted)]">
              <div>
                <span className="opacity-70">{">"}</span>{" "}
                Created one-pagers, diligence memos, and financial models in Excel; took notes during client calls
              </div>
            </div>
          </div>

          <Spacer />

        </div>
      </div>


      {/* SKILLS command */}
      <p className="text-sm text-[var(--muted)]">
      <span className="opacity-80">ricky@rickycircelli</span>
      <span className="opacity-60">:~$</span>{" "}
      <span>skills --matrix</span>
      </p>


      {/* SKILLS output */}
      <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-5">
        <div className="space-y-4 text-sm font-mono">
        <Spacer />

          {/* LANGUAGES */}
          <div className="grid grid-cols-[120px_1fr] gap-4">
            <div className="text-[var(--fg)]">LANGUAGES</div>
            <div className="space-y-1">
              <SkillBar level={7} label="Python" />
              <SkillBar level={6} label="SQL" />
              <SkillBar level={6} label="R" />
            </div>
          </div>
          <Spacer />

          {/* MACHINE LEARNING */}
          <div className="grid grid-cols-[120px_1fr] gap-4">
            <div className="text-[var(--fg)]">ML</div>
            <div className="space-y-1">
              <SkillBar level={7} label="XGBoost" />
              <SkillBar level={7} label="LightGBM" />
              <SkillBar level={7} label="CatBoost" />
              <SkillBar level={7} label="Scikit-learn" />
              <SkillBar level={6} label="SHAP" />
              <SkillBar level={5} label="TensorFlow" />
            </div>
          </div>
          <Spacer />

          {/* GEN AI */}
          <div className="grid grid-cols-[120px_1fr] gap-4">
            <div className="text-[var(--fg)]">GEN AI</div>
            <div className="space-y-1">
              <SkillBar level={7} label="Claude API" />
              <SkillBar level={6} label="OpenAI API" />
              <SkillBar level={7} label="Prompt Engineering" />
              <SkillBar level={6} label="AI Agents" />
              <SkillBar level={6} label="RAG" />
            </div>
          </div>
          <Spacer />

          {/* DATA */}
          <div className="grid grid-cols-[120px_1fr] gap-4">
            <div className="text-[var(--fg)]">DATA</div>
            <div className="space-y-1">
              <SkillBar level={7} label="Snowflake" />
              <SkillBar level={7} label="Pandas" />
              <SkillBar level={7} label="NumPy" />
              <SkillBar level={7} label="Power BI (PL-300)" />
              <SkillBar level={7} label="Excel" />
            </div>
          </div>
          <Spacer />

          {/* TOOLS */}
          <div className="grid grid-cols-[120px_1fr] gap-4">
            <div className="text-[var(--fg)]">TOOLS</div>
            <div className="space-y-1">
              <SkillBar level={7} label="Claude Code (CCA-F)" />
              <SkillBar level={7} label="Git / GitHub" />
              <SkillBar level={6} label="AWS (Cloud Practitioner)" />
              <SkillBar level={6} label="Supabase" />
              <SkillBar level={6} label="Railway" />
            </div>
          </div>
          <Spacer />

        </div>
      </div>

      {/* CONTACT command */}
      <p className="text-sm text-[var(--muted)]">
          <span className="opacity-80">ricky@rickycircelli</span>
          <span className="opacity-60">:~$</span>{" "}
          <span className="text-[var(--fg)]">echo</span>{" "}
          <span className="text-[var(--muted)]">$EMAIL</span>
      </p>

      {/* CONTACT output */}
      <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-4">
      <p className="text-sm mt-1 pl-4">
          <a
        href="mailto:rickycircelli@gmail.com"
        className="emphasis-accent underline decoration-[rgba(143,175,154,0.45)]"
        >
        rickycircelli@gmail.com
          </a>
    </p>
      </div>
    <Spacer />
    </section>
  );
}
