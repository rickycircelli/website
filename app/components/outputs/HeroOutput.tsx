export default function HeroOutput() {
  return (
    <div className="px-2 py-4 text-sm">
      <div className="space-y-1">
        <div className="whitespace-pre">
          <span className="text-[var(--accent)]">{"user".padEnd(8, " ")}</span>
          <span className="text-[var(--fg)]">ricky</span>
        </div>
        <div className="whitespace-pre">
          <span className="text-[var(--accent)]">{"role".padEnd(8, " ")}</span>
          <a
            href="https://gamecocksonline.com/sports/track/roster/player/ricky-circelli/"
            className="text-[var(--fg)] hover:text-[var(--accent)]"
          >
            student-athlete
          </a>
        </div>
        <div className="whitespace-pre">
          <span className="text-[var(--accent)]">{"focus".padEnd(8, " ")}</span>
          <span className="text-[var(--fg)]">finance/data-science</span>
        </div>
        <div className="whitespace-pre">
          <span className="text-[var(--accent)]">{"interest".padEnd(8, " ")}</span>
          <span className="text-[var(--fg)]">fintech</span>
        </div>
      </div>
    </div>
  );
}
