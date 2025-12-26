export default function Home() {
  return (
    <section>
      <h1 className="text-3xl text-[var(--fg)]">Ricky Circelli</h1>

      <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
        Finance + Data Science student athlete building applied fintech, credit risk, and analytics projects.
      
      </p>

      <div className="mt-8 space-y-3 text-sm">
        <div className="border-l border-[var(--border)] pl-4">
          <p className="text-[var(--fg)]">Focus</p>
          <p className="mt-1 text-[var(--muted)]">Credit risk • alternative data • portfolio optimization • dashboards</p>
        </div>

        <div className="border-l border-[var(--border)] pl-4">
          <p className="text-[var(--fg)]">Currently</p>
          <p className="mt-1 text-[var(--muted)]">Building and documenting projects while competing for South Carolina Men's Track and Field.</p>
        </div>

      </div>
    </section>
  );
}
