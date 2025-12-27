import type { Metadata } from "next";
import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricky Circelli",
  description: "Finance + Data Science | Fintech, credit risk, analytics projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistMono.className} antialiased`}>
        <div className="mx-auto max-w-3xl px-6 py-10">
          
        <header className="flex items-center justify-between max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-4">
          
          <Link href="/" className="text-base">
            rickycircelli
          </Link>

          <nav className="flex items-center gap-8 text-sm max-[640px]:flex-wrap max-[640px]:gap-x-6 max-[640px]:gap-y-2">
           
            <a
              href="/resume/ricky_circelli_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume"
            >
              resume<span className="resume-hint">.pdf</span>
            </a>
            <span className="mx-3 text-[var(--muted)]">•</span>
            <Link href="/projects">projects</Link>
            <span className="mx-3 text-[var(--muted)]">•</span>
            <a href="https://github.com/rickycircelli" target="_blank" rel="noopener noreferrer">github</a>
            <span className="mx-3 text-[var(--muted)]">•</span>
            <a href="https://www.linkedin.com/in/richardcircelli/" target="_blank" rel="noopener noreferrer">linkedin</a>

          </nav>

        </header>

          <main className="mt-10">{children}</main>

          <footer className="mt-16 text-xs text-[var(--muted)]">
            <span className="opacity-80">© {new Date().getFullYear()} Ricky Circelli</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
