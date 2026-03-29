import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "MD Advisory — AI Agents & SAP Consulting",
  description:
    "Martin Dueck — Personalized AI agent systems and senior SAP consulting. 11 years of enterprise experience. Done-for-you AI agents, ready in one week.",
  openGraph: {
    title: "MD Advisory — AI Agents & SAP Consulting",
    description:
      "Personalized AI agent systems and senior SAP consulting by Martin Dueck.",
    url: "https://md-advisory.com",
    siteName: "MD Advisory",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
