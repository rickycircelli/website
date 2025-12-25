export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-zinc-50">
      <h1 className="text-4xl font-bold text-black">
        Ricky Circelli
      </h1>

      <p className="mt-4 text-lg text-zinc-700 max-w-xl">
        Finance + Data Science student athlete building applied fintech,
        credit risk, and analytics projects.
      </p>

      <div className="mt-6 flex gap-6">
        <a className="underline" href="/projects">Projects</a>
        <a className="underline" href="https://github.com/rickycircelli">GitHub</a>
        <a className="underline" href="https://www.linkedin.com/in/richardcircelli/">LinkedIn</a>
      </div>
    </main>
  );
}
