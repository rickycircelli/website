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
          
        
          <main className="mt-10">{children}</main>

          <footer className="mt-16 text-xs text-[var(--muted)] opacity-60">
            © {new Date().getFullYear()} Ricky Circelli
          </footer>
          
        </div>
      </body>
    </html>
  );
}
