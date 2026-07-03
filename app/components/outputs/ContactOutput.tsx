export default function ContactOutput() {
  return (
    <div className="border-t border-b border-[var(--border)] bg-[var(--panel)]/60 px-6 py-4">
      <p className="text-sm mt-1 pl-4">
        <a
          href="mailto:rickycircelli@gmail.com"
          className="emphasis-accent underline decoration-[rgba(143,175,154,0.45)]"
        >
          rickycircelli@gmail.com
        </a>
      </p>
    </div>
  );
}
