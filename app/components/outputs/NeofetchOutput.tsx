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
            <div key={k} className="whitespace-pre">
              <span className="text-[var(--accent)]">{k.padEnd(8, " ")}</span>
              <span className="text-[var(--fg)] whitespace-normal">{v}</span>
            </div>
          ))}
        </div>
      </div>
      <Spacer />
    </div>
  );
}
