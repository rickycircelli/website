export default function SkillBar({
  level,
  label,
}: {
  level: number;
  label: string;
}) {
  const total = 10;
  const filled = "█".repeat(level);
  const empty = "░".repeat(total - level);

  return (
    <div className="flex items-baseline gap-4">
      <span className="text-[var(--accent)] tracking-[0.1em] drop-shadow-[0_0_1px_rgba(0,0,0,0.6)]">
        {filled}
        <span className="text-[var(--muted)] drop-shadow-none">{empty}</span>
      </span>
      <span aria-hidden>&nbsp;</span>
      <span className="text-[var(--fg)]/70">{label}</span>
    </div>
  );
}

