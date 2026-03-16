import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Summit - Climb higher every day",
  description: "The habit tracking app that helps you build lasting routines through streaks, insights, and beautiful design.",
  keywords: ["habit tracker", "habits", "streaks", "iOS app", "productivity", "routine", "self-improvement"],
  authors: [{ name: "Summit" }],
  openGraph: {
    title: "Summit - Climb higher every day",
    description: "The habit tracking app that helps you build lasting routines through streaks, insights, and beautiful design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit - Climb higher every day",
    description: "The habit tracking app that helps you build lasting routines through streaks, insights, and beautiful design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
