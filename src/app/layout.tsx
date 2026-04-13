import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "King of Skills AI — The Single Source of Truth for the AI Era",
    template: "%s | King of Skills AI",
  },
  description:
    "Daily AI intelligence, master prompts, skill frameworks, and courses — for ambitious professionals who want to master the AI era.",
  keywords: [
    "AI skills",
    "AI prompts",
    "business AI",
    "AI courses",
    "AI newsletter",
    "King of Skills",
    "mega prompts",
    "AI frameworks",
  ],
  authors: [{ name: "King of Skills AI" }],
  openGraph: {
    type: "website",
    siteName: "King of Skills AI",
    title: "King of Skills AI — The Single Source of Truth for the AI Era",
    description:
      "Daily AI intelligence, master prompts, skill frameworks, and courses — for ambitious professionals who want to master the AI era.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@kingofskillsai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
