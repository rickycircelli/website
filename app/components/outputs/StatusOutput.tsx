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
