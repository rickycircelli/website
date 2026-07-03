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
          <div key={cmd} className="whitespace-pre">
            <span className="text-[var(--accent)]">{cmd.padEnd(12, " ")}</span>
            <span className="text-[var(--muted)] whitespace-normal">{desc}</span>
          </div>
        ))}
      </div>
      <Spacer />
    </div>
  );
}
