import { GeistMono } from "geist/font/mono";
import TerminalWindow from "./components/TerminalWindow";
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

  twitter: {
    card: "summary_large_image",
    title: "Ricky Circelli",
    description:
      "Finance & Data Science student-athlete building fintech and data projects.",
    images: ["/og.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ricky Circelli",
  url: "https://rickycircelli.com",
  email: "mailto:rickycircelli8@gmail.com",
  jobTitle: "Student-Athlete",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of South Carolina",
  },
  knowsAbout: [
    "Finance",
    "Data Science",
    "Fintech",
    "Machine Learning",
    "Python",
  ],
  sameAs: [
    "https://github.com/rickycircelli",
    "https://www.linkedin.com/in/richardcircelli/",
    "https://gamecocksonline.com/sports/track/roster/player/ricky-circelli/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistMono.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="mx-auto max-w-4xl px-3 py-6 sm:px-6 sm:py-10">
          <main className="mt-4 sm:mt-10">
            <TerminalWindow>{children}</TerminalWindow>
          </main>
        </div>
      </body>
    </html>
  );
}
