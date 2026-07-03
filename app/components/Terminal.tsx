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

function Cursor() {
  return (
    <span className="inline-block w-[0.6em] -mb-[2px] h-[1.1em] align-middle bg-[var(--accent)] animate-pulse" />
  );
}

export default function Terminal({ projects }: { projects: Project[] }) {
  const [entries, setEntries] = useState<Entry[]>(INTRO);
  const [phase, setPhase] = useState<"static" | "animating" | "done">("static");
  const [typed, setTyped] = useState("");
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const skipRef = useRef(false);

  // intro animation (skipped entirely under prefers-reduced-motion)
  useEffect(() => {
    let cancelled = false;
    const skip = () => {
      skipRef.current = true;
    };
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);

    (async () => {
      // defer past the effect body so state updates aren't synchronous in it
      await new Promise((r) => setTimeout(r, 0));
      if (cancelled) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setPhase("done");
        return;
      }
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

  // keep the latest line in view while typing/appending
  useEffect(() => {
    if (phase !== "static") endRef.current?.scrollIntoView({ block: "end" });
  }, [entries, typed, phase]);

  useEffect(() => {
    if (phase === "done") inputRef.current?.focus({ preventScroll: true });
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
      onClick={() => phase === "done" && inputRef.current?.focus({ preventScroll: true })}
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
          <Cursor />
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
            <Cursor />
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
