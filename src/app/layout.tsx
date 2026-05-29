import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: portfolio.seo.title,
  description: portfolio.seo.description,
  keywords: portfolio.seo.keywords,
  authors: [{ name: portfolio.personalInfo.name }],
  openGraph: {
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    type: "website",
    siteName: portfolio.personalInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.seo.title,
    description: portfolio.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
