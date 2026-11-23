import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jyotirmaya Sahu | AI & Full-Stack Engineer",
  description: "AI and full-stack engineer building production AI agents, intelligent automation, CRM workflows, and high-performance applications.",
  openGraph: {
    title: "Jyotirmaya Sahu | AI & Full-Stack Engineer",
    description: "Production AI systems. Intelligent automation. Full-stack products. Enterprise engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
