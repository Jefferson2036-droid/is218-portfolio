import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Jefferson Rodas – Portfolio",
  description:
    "Portfolio of Jefferson Rodas: I build data and AI tools alongside the people who use them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const resumeFilePath = path.join(process.cwd(), "public", "resume.pdf");
  const hasResumePdf = fs.existsSync(resumeFilePath);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&family=IBM+Plex+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#0B1F3A] font-sans antialiased selection:bg-accent selection:text-white">
        <Header hasResumePdf={hasResumePdf} />
        <div className="flex-1">{children}</div>
        <Footer hasResumePdf={hasResumePdf} />
      </body>
    </html>
  );
}
