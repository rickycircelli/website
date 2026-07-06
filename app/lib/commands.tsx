import type { ReactNode } from "react";
import type { Project } from "./types";
import HeroOutput from "../components/outputs/HeroOutput";
import LinksOutput from "../components/outputs/LinksOutput";
import StatusOutput from "../components/outputs/StatusOutput";
import ExperienceOutput from "../components/outputs/ExperienceOutput";
import SkillsOutput from "../components/outputs/SkillsOutput";
import ContactOutput from "../components/outputs/ContactOutput";
import ProjectsOutput from "../components/outputs/ProjectsOutput";
import HelpOutput from "../components/outputs/HelpOutput";
import NeofetchOutput from "../components/outputs/NeofetchOutput";

function Msg({ children }: { children: ReactNode }) {
  return (
    <div className="px-2 py-3 text-sm text-[var(--muted)]">
      {children}
    </div>
  );
}

export type CommandContext = { projects: Project[] };
export type CommandResult = ReactNode | "CLEAR";

export function runCommand(raw: string, ctx: CommandContext): CommandResult {
  const input = raw.trim();
  if (input === "") return null;
  const lower = input.toLowerCase();
  const [cmd] = lower.split(/\s+/);

  // full-line aliases from the intro transcript
  if (lower === "ls links/" || lower === "ls links") return <LinksOutput />;
  if (lower === "cat status.txt") return <StatusOutput />;
  if (lower === "cat experience.log") return <ExperienceOutput />;
  if (lower === "skills --matrix") return <SkillsOutput />;
  if (lower === "echo $email") return <ContactOutput />;

  switch (cmd) {
    case "help":
      return <HelpOutput />;
    case "whoami":
      return <HeroOutput />;
    case "links":
    case "ls":
      return <LinksOutput />;
    case "status":
      return <StatusOutput />;
    case "experience":
      return <ExperienceOutput />;
    case "skills":
      return <SkillsOutput />;
    case "contact":
    case "email":
      return <ContactOutput />;
    case "projects":
      return <ProjectsOutput projects={ctx.projects} />;
    case "neofetch":
      return <NeofetchOutput />;
    case "clear":
      return "CLEAR";
    case "resume":
      if (typeof window !== "undefined") {
        window.open("/resume/ricky_circelli_resume.pdf", "_blank", "noopener,noreferrer");
      }
      return <Msg>opening resume.pdf…</Msg>;
    case "track":
      return (
        <Msg>
          <a
            href="https://gamecocksonline.com/sports/track/roster/player/ricky-circelli/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--fg)] hover:text-[var(--accent)]"
          >
            gamecocksonline.com → ricky circelli
          </a>
        </Msg>
      );
    case "gamecock":
    case "gamecocks":
    case "cocky":
      return (
        <div className="px-2 py-4 text-sm leading-snug">
          <pre className="whitespace-pre" style={{ color: "#c94f5d" }}>
{String.raw`        ,~~.
       (  9 )-_,
  (\___ )=='-'
   \ .   ) )
    \ '-' /
  ~'`}<span className="text-[var(--muted)]">{String.raw`~"~"~`}</span>{String.raw`'~'
`}
          </pre>
          <p className="mt-2 text-[var(--fg)]">
            forever to thee. <span className="text-[var(--muted)]">— go gamecocks 🐔</span>
          </p>
        </div>
      );
    case "sudo":
      return <Msg>nice try. this incident will be reported.</Msg>;
    case "vim":
    case "vi":
      return <Msg>entering vim… you can never leave. (just kidding — try &apos;help&apos;)</Msg>;
    case "exit":
      return <Msg>:( fine. closing session… (not really)</Msg>;
    case "cat":
    case "echo":
      return <Msg>usage: try &apos;help&apos; to see what&apos;s on this machine</Msg>;
    default:
      return (
        <Msg>
          command not found: {input.split(/\s+/)[0]} — try{" "}
          <span className="text-[var(--accent)]">help</span>
        </Msg>
      );
  }
}
