# Interactive Terminal Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the terminal-styled homepage into a real interactive terminal — auto-typed intro of the existing transcript, then a live prompt accepting commands — with all current styling unchanged and content still SSR'd for SEO.

**Architecture:** Extract the existing JSX blocks from `app/page.tsx` into pure output components. A client `Terminal` component renders the full transcript on the server (SEO), then after hydration plays a typing animation (skippable, disabled under reduced-motion) and shows a live prompt. A command registry maps typed commands to output components. Projects data is fetched server-side in `page.tsx` and passed down as a prop.

**Tech Stack:** Next.js App Router, React client component, Tailwind classes already in use. No new dependencies. No test framework exists in this repo — verification is `npm run build` plus manual checks in the dev server.

**Spec:** `docs/superpowers/specs/2026-07-03-interactive-terminal-design.md`

---

### Task 1: Extract output components

**Files:**
- Create: `app/components/outputs/HeroOutput.tsx`
- Create: `app/components/outputs/LinksOutput.tsx`
- Create: `app/components/outputs/StatusOutput.tsx`
- Create: `app/components/outputs/ExperienceOutput.tsx`
- Create: `app/components/outputs/SkillsOutput.tsx`
- Create: `app/components/outputs/ContactOutput.tsx`

Each file is a default-export function component containing the *output* `<div>` block copied verbatim from `app/page.tsx` (current line ranges below). Do not change any classes or content. Import `Spacer` from `"../Spacer"` and `SkillBar` from `"../SkillBar"` where used. The `Link` from `next/link` in the hero command line is NOT part of the output block (command lines are handled by the Terminal); `HeroOutput` needs only the plain `<a>` inside it.

- [ ] **Step 1: Create the six components**

Line ranges in current `app/page.tsx` to copy into each component's return:
- `HeroOutput`: lines 29–41 (hero output div)
- `LinksOutput`: lines 52–105
- `StatusOutput`: lines 116–123
- `ExperienceOutput`: lines 133–331
- `SkillsOutput`: lines 343–412
- `ContactOutput`: lines 423–432

Template (example for StatusOutput; same shape for all):

```tsx
import Spacer from "../Spacer";

export default function StatusOutput() {
  return (
    <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-4 text-sm">
      <Spacer />
      <span className="opacity-60 text-[var(--fg)]">#</span>{" "}
      <span className="text-[var(--fg)]">
        learning, building, and documenting projects while competing for south carolina men’s track &amp; field
      </span>
      <Spacer />
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds (components are created but unused yet — that's fine).

- [ ] **Step 3: Commit**

```bash
git add app/components/outputs
git commit -m "refactor: extract homepage output blocks into components"
```

---

### Task 2: Projects + Help + Neofetch output components

**Files:**
- Create: `app/components/outputs/ProjectsOutput.tsx`
- Create: `app/components/outputs/HelpOutput.tsx`
- Create: `app/components/outputs/NeofetchOutput.tsx`
- Create: `app/lib/types.ts`

- [ ] **Step 1: Shared Project type**

`app/lib/types.ts`:

```ts
export type Project = {
  title: string;
  link: string;
  date: string;
  description: string;
  stack: string[];
};
```

- [ ] **Step 2: ProjectsOutput**

Reuses `ProjectRow` like `app/projects/page.tsx` does, but takes projects as a prop (client-safe — no server fetch here):

```tsx
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
```

- [ ] **Step 3: HelpOutput**

```tsx
import Spacer from "../Spacer";

const COMMANDS: [string, string][] = [
  ["help", "show this list"],
  ["whoami", "about me"],
  ["experience", "work + school history"],
  ["skills", "skill matrix"],
  ["projects", "things i've built"],
  ["links", "github / linkedin / resume"],
  ["status", "what i'm up to"],
  ["contact", "email"],
  ["resume", "open resume.pdf"],
  ["track", "athlete page"],
  ["neofetch", "system info"],
  ["clear", "clear the terminal"],
];

export default function HelpOutput() {
  return (
    <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-4 text-sm">
      <Spacer />
      <div className="space-y-1">
        {COMMANDS.map(([cmd, desc]) => (
          <div key={cmd}>
            <span className="text-[var(--accent)]">{cmd.padEnd(12, " ")}</span>
            <span className="text-[var(--muted)]">{desc}</span>
          </div>
        ))}
      </div>
      <Spacer />
    </div>
  );
}
```

- [ ] **Step 4: NeofetchOutput**

```tsx
import Spacer from "../Spacer";

const ROWS: [string, string][] = [
  ["user", "ricky@rickycircelli"],
  ["os", "gamecockOS 4.0 (columbia, sc)"],
  ["shell", "finance + data science"],
  ["uptime", "since 2024"],
  ["gpa", "4.0"],
  ["sport", "track & field — usc"],
  ["editor", "claude code"],
];

export default function NeofetchOutput() {
  return (
    <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-4 text-sm">
      <Spacer />
      <div className="flex flex-wrap gap-x-8 gap-y-3">
        <pre className="text-[var(--accent)] leading-tight text-xs">{String.raw`
   ____  ______
  / __ \/ ____/
 / /_/ / /
/ _, _/ /___
/_/ |_|\____/
`}</pre>
        <div className="space-y-1">
          {ROWS.map(([k, v]) => (
            <div key={k}>
              <span className="text-[var(--accent)]">{k.padEnd(8, " ")}</span>
              <span className="text-[var(--fg)]">{v}</span>
            </div>
          ))}
        </div>
      </div>
      <Spacer />
    </div>
  );
}
```

- [ ] **Step 5: Build + commit**

Run: `npm run build` — expected: success.

```bash
git add app/components/outputs app/lib/types.ts
git commit -m "feat: add projects, help, and neofetch output components"
```

---

### Task 3: Command registry

**Files:**
- Create: `app/lib/commands.tsx`

- [ ] **Step 1: Write the registry**

```tsx
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
    <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-3 text-sm text-[var(--muted)]">
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
```

- [ ] **Step 2: Build + commit**

Run: `npm run build` — expected: success.

```bash
git add app/lib/commands.tsx
git commit -m "feat: add terminal command registry"
```

---

### Task 4: Terminal component

**Files:**
- Create: `app/components/Terminal.tsx`

- [ ] **Step 1: Write the component**

Behavior:
- Server render / initial state: full finished transcript (all six intro entries) — SEO-safe.
- On mount: unless `prefers-reduced-motion`, clear and re-play the intro, typing each command at 30ms/char, appending its output instantly. Any keydown/pointerdown skips to done.
- When done: hint line + live prompt. Hidden input captures typing (works with mobile keyboards); Enter submits; ArrowUp/ArrowDown cycle history; container click focuses input; auto-scroll to bottom on new entries.

```tsx
"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import type { Project } from "../lib/types";
import { runCommand } from "../lib/commands";
import HeroOutput from "./outputs/HeroOutput";
import LinksOutput from "./outputs/LinksOutput";
import StatusOutput from "./outputs/StatusOutput";
import ExperienceOutput from "./outputs/ExperienceOutput";
import SkillsOutput from "./outputs/SkillsOutput";
import ContactOutput from "./outputs/ContactOutput";

type Entry = { command: string; output: ReactNode };

const INTRO: Entry[] = [
  { command: "whoami", output: <HeroOutput /> },
  { command: "ls links/", output: <LinksOutput /> },
  { command: "cat status.txt", output: <StatusOutput /> },
  { command: "cat experience.log", output: <ExperienceOutput /> },
  { command: "skills --matrix", output: <SkillsOutput /> },
  { command: "echo $EMAIL", output: <ContactOutput /> },
];

const TYPE_MS = 30;

function PromptPrefix({ home }: { home?: boolean }) {
  return (
    <>
      {home ? (
        <Link href="/" className="opacity-80 hover:text-[var(--accent)] transition-colors">
          ricky@rickycircelli
        </Link>
      ) : (
        <span className="opacity-80">ricky@rickycircelli</span>
      )}
      <span className="opacity-60">:~$</span>{" "}
    </>
  );
}

export default function Terminal({ projects }: { projects: Project[] }) {
  const [entries, setEntries] = useState<Entry[]>(INTRO);
  const [phase, setPhase] = useState<"static" | "animating" | "done">("static");
  const [typed, setTyped] = useState(""); // partial command during intro
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const skipRef = useRef(false);

  // intro animation
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }
    let cancelled = false;
    const skip = () => { skipRef.current = true; };
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);

    (async () => {
      setEntries([]);
      setPhase("animating");
      const done: Entry[] = [];
      for (const entry of INTRO) {
        for (let i = 1; i <= entry.command.length; i++) {
          if (skipRef.current || cancelled) break;
          setTyped(entry.command.slice(0, i));
          await new Promise((r) => setTimeout(r, TYPE_MS));
        }
        if (cancelled) return;
        done.push(entry);
        setEntries([...done]);
        setTyped("");
        if (skipRef.current) {
          setEntries(INTRO);
          break;
        }
      }
      if (!cancelled) setPhase("done");
    })();

    return () => {
      cancelled = true;
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, []);

  // autoscroll while animating or after new command output
  useEffect(() => {
    if (phase !== "static") endRef.current?.scrollIntoView({ block: "end" });
  }, [entries, typed, phase]);

  useEffect(() => {
    if (phase === "done") inputRef.current?.focus();
  }, [phase]);

  const submit = useCallback(() => {
    const raw = input;
    setInput("");
    setHistIdx(-1);
    const result = runCommand(raw, { projects });
    if (result === "CLEAR") {
      setEntries([]);
      return;
    }
    if (raw.trim()) setCmdHistory((h) => [...h, raw.trim()]);
    setEntries((e) => [...e, { command: raw, output: result }]);
  }, [input, projects]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const idx = histIdx === -1 ? cmdHistory.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(idx);
      setInput(cmdHistory[idx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx === -1) return;
      const idx = histIdx + 1;
      if (idx >= cmdHistory.length) {
        setHistIdx(-1);
        setInput("");
      } else {
        setHistIdx(idx);
        setInput(cmdHistory[idx]);
      }
    }
  };

  return (
    <section
      className="flex flex-col cursor-text"
      onClick={() => phase === "done" && inputRef.current?.focus()}
    >
      {entries.map((entry, i) => (
        <div key={i}>
          <p className="text-sm text-[var(--muted)]">
            <PromptPrefix home={i === 0 && phase !== "animating"} />
            <span className="text-[var(--fg)]">{entry.command}</span>
          </p>
          {entry.output}
        </div>
      ))}

      {phase === "animating" && (
        <p className="text-sm text-[var(--muted)]">
          <PromptPrefix />
          <span className="text-[var(--fg)]">{typed}</span>
          <span className="inline-block w-[0.6em] -mb-[2px] h-[1.1em] align-middle bg-[var(--accent)] animate-pulse" />
        </p>
      )}

      {phase === "done" && (
        <>
          <p className="mt-2 text-xs text-[var(--muted)] opacity-70">
            # type &apos;help&apos; to see available commands
          </p>
          <p className="text-sm text-[var(--muted)] relative">
            <PromptPrefix />
            <span className="text-[var(--fg)] whitespace-pre-wrap break-all">{input}</span>
            <span className="inline-block w-[0.6em] -mb-[2px] h-[1.1em] align-middle bg-[var(--accent)] animate-pulse" />
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              className="absolute inset-0 opacity-0 w-full cursor-text"
              autoCapitalize="none"
              autoCorrect="off"
              autoComplete="off"
              spellCheck={false}
              aria-label="terminal input"
              enterKeyHint="send"
            />
          </p>
        </>
      )}
      <div ref={endRef} />
    </section>
  );
}
```

- [ ] **Step 2: Build + commit**

Run: `npm run build` — expected: success (component still unused).

```bash
git add app/components/Terminal.tsx
git commit -m "feat: add interactive Terminal component with intro animation"
```

---

### Task 5: Rewire homepage

**Files:**
- Modify: `app/page.tsx` (replace entire content)

- [ ] **Step 1: Replace page.tsx**

```tsx
import type { Metadata } from "next";
import Terminal from "./components/Terminal";
import { getMediumProjects } from "./lib/medium";
import type { Project } from "./lib/types";

export const revalidate = 1800;

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

  return <Terminal projects={projects} />;
}
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: success. If it errors on passing ReactNode-producing data, check that only serializable `projects` crosses the server→client boundary (it does — outputs are created client-side).

- [ ] **Step 3: Manual verification (dev server)**

Run: `npm run dev`, open http://localhost:3000 and check:
- Intro types the six commands, outputs appear instantly, styling identical to before.
- Pressing a key or clicking mid-intro skips to the full transcript.
- After intro: hint line + blinking cursor; typing `help`, `whoami`, `projects`, `neofetch`, `sudo x`, `asdf` all behave per spec; `clear` empties; ArrowUp recalls.
- DevTools device emulation (iPhone): tapping the terminal focuses input; layout not broken.
- View-source (or disable JS) shows full transcript content for SEO.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: make homepage an interactive terminal"
```

---

### Task 6: Final check

- [ ] **Step 1:** `npm run build` clean; `npx eslint app` (or `npm run lint`) clean.
- [ ] **Step 2:** Verify `/projects` page still renders unchanged.
- [ ] **Step 3:** Commit any lint fixes.
