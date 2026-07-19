import type { Metadata } from "next";
import Terminal from "./components/Terminal";
import { getMediumProjects } from "./lib/medium";
import type { Project } from "./lib/types";

export const revalidate = 1800; // 30 minutes

export const metadata: Metadata = {
  title: "Ricky Circelli",
  description:
    "Student-athlete at the University of South Carolina focused on fintech and data science. Projects, experience, and technical skills."
};

export default async function Home() {
  let projects: Project[] = [];
  try {
    projects = await getMediumProjects();
  } catch (e) {
    console.error("Medium fetch error:", e);
  }

  return (
    <>
      <Terminal projects={projects} />

      {/* Server-rendered content for search engines; visually hidden, mirrors the terminal outputs */}
      <section className="sr-only">
        <h1>Ricky Circelli</h1>
        <p>
          Student-athlete at the University of South Carolina studying Finance
          and Data Science, focused on fintech, machine learning, and building
          data-driven products.
        </p>

        <h2>Experience</h2>
        <ul>
          <li>
            Ally Financial — Quantitative Modeling Intern (Summer 2026,
            Charlotte, NC). Built an end-to-end machine learning credit risk
            model for auto lending across 200k+ applications and 2k+ variables
            using Python, Snowflake, and SQL; trained and evaluated XGBoost,
            LightGBM, CatBoost, and Random Forest models with AUC, KS, and
            SHAP.
          </li>
          <li>
            <a href="https://varsitystack.com">Varsity Stack</a> — Founder
            (2026–Present, Columbia, SC). AI-powered athlete supplement
            intelligence platform; full-stack mobile and web products built
            with Claude Code and LLM APIs; top 5 finalist in the SEC Startup
            Competition with 1,000+ downloads and recurring subscription
            revenue.
          </li>
          <li>
            University of South Carolina — Finance + Data Science, Honors
            College, 4.0 GPA (2024–Present). President&apos;s List (4x), CSC
            Academic All-District, SEC Academic Honor Roll.
          </li>
          <li>
            Dubin Clark — Private Equity Intern (Summer 2024, Jacksonville,
            FL). Created one-pagers, diligence memos, and financial models.
          </li>
        </ul>

        <h2>Projects</h2>
        <ul>
          {projects.map((p) => (
            <li key={p.link}>
              <a href={p.link}>{p.title}</a> — {p.description}{" "}
              {p.stack.length > 0 && `(${p.stack.join(", ")})`}
            </li>
          ))}
        </ul>

        <h2>Skills</h2>
        <p>
          Python, SQL, R, XGBoost, LightGBM, CatBoost, Scikit-learn, SHAP,
          TensorFlow, Claude API, OpenAI API, prompt engineering, AI agents,
          RAG, Snowflake, Pandas, NumPy, Power BI (PL-300), Excel, Claude Code,
          Git, GitHub, AWS Cloud Practitioner, Supabase, Railway.
        </p>

        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:rickycircelli@gmail.com">rickycircelli@gmail.com</a>
          {" · "}
          <a href="https://github.com/rickycircelli">GitHub</a>
          {" · "}
          <a href="https://www.linkedin.com/in/richardcircelli/">LinkedIn</a>
        </p>
      </section>
    </>
  );
}
