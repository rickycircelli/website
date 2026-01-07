import type { Metadata } from "next";
import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import "./globals.css";


export const metadata = {
  metadataBase: new URL("https://rickycircelli.com"),

  title: "Ricky Circelli",
  description:
    "Student-athlete at the University of South Carolina focused on fintech and data science. Projects, experience, and technical skills.",

  keywords: [
    "Ricky Circelli",
    "finance",
    "data science",
    "fintech",
    "student athlete",
    "machine learning",
    "Python",
  ],

  alternates: {
    canonical: "https://rickycircelli.com",
  },

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Ricky Circelli",
    description:
      "Finance & Data Science student-athlete building fintech and data projects.",
    url: "https://rickycircelli.com",
    siteName: "Ricky Circelli",
    type: "website",
    images: [
      {
        url: "/og.png", 
        width: 1200,
        height: 630,
        alt: "Terminal-style personal website for Ricky Circelli",
      },
    ],
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
