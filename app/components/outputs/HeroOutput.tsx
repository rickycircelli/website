export default function HeroOutput() {
  return (
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
  );
}
