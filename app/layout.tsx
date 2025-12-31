import type { Metadata } from "next";
import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import "./globals.css";


export const metadata = {
  title: "Ricky Circelli | Finance & Data Science Student-Athlete",
  description:
    "Student-athlete at the University of South Carolina focused on finance, data science, and fintech. Projects, experience, and technical skills.",
  keywords: [
    "Ricky Circelli",
    "finance",
    "data science",
    "fintech",
    "student athlete",
    "machine learning",
    "Python",
  ],
  openGraph: {
    title: "Ricky Circelli",
    description:
      "Finance & Data Science student-athlete building fintech and data projects.",
    url: "https://rickycircelli.com",
    siteName: "Ricky Circelli",
    images: [
      {
        url: "/og.png", //add later
        width: 1200,
        height: 630,
      },
    ],
    type: "website",

    alternates: {
      canonical: "https://rickycircelli.com",
    }
  },
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
