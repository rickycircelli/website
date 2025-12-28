import Link from "next/link";
import Spacer from "./Spacer";

function fmtDate(iso: string) {
  if (!iso) return "—";
  return new Date(iso).toISOString().slice(0, 10); // YYYY-MM-DD
}

export default function ProjectRow({
  title,
  link,
  date,
  description,
  stack,
  tags,
}: {
  title: string;
  link: string;
  date: string;
  description: string;
  stack: string[];
  tags?: string[];
}) {
  return (
    <div className="py-3">
      {/* top row */}

        <div className="flex items-baseline justify-between gap-4">

            {/* title (left) */}
            <Link
                href={link}
                target="_blank"
                className="emphasis"
            >   
                {title}
            </Link>

            {/* date (right) */}
            <div className="text-xs text-[var(--muted)]">
                {fmtDate(date)}
            </div>

        </div>


      {/* details */}
    <div className="mt-2 pl-4 space-y-1">
        {description ? (
          <div className="text-[var(--muted)]">
            <span className="text-[var(--muted)]">└─</span>{" "}
            <span className="text-[var(--muted)]">TL;DR</span>{" "}
            <span className="text-[var(--muted)] opacity-70">{description}</span>
          </div>
        ) : null}

        {stack?.length ? (
          <div className="text-[var(--muted)]">
            <span className="text-[var(--muted)]">└─</span>{" "}
            <span className="text-[var(--muted)]">Stack</span>{" "}
            <span className="accent-muted">
              {stack.map((item, i) => (
                <span key={item}>
                  {i > 0 && <span className="text-[var(--muted)]"> · </span>}
                  {item}
                </span>
              ))}
            </span>


          </div>
        ) : null}

        {tags?.length ? (
          <div className="text-[var(--muted)]">
            <span className="text-[var(--muted)]">└─</span>{" "}
            <span className="text-[var(--muted)]">Tags</span>{" "}
            <span className="accent-muted">
              {tags.map((item, i) => (
                <span key={item}>
                  {i > 0 && <span className="text-[var(--muted)]"> · </span>}
                  {item}
                </span>
              ))}
            </span>
          </div>
        ) : null}

        <div className="text-[var(--muted)]">
          <span className="text-[var(--muted)]">└─</span>{" "}
          <Link
            href={link}
            target="_blank"
            className="emphasis-accent underline decoration-[rgba(143,175,154,0.45)"
          >
            open
          </Link>
        <Spacer />
        </div>
      </div>
    </div>
  );
}
