import Spacer from "../Spacer";

export default function StatusOutput() {
  return (
    <div className="px-2 py-4 text-sm">
      <Spacer />
      <span className="opacity-60 text-[var(--fg)]">#</span>{" "}
      <span className="text-[var(--fg)]">
        learning, building, and documenting projects while competing for south carolina men’s track &amp; field
      </span>
      <Spacer />
    </div>
  );
}
