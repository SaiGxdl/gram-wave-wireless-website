import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubtleLoader from "@/components/SubtleLoader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Gramwave Wireless | Advancing Wireless Connectivity Through Research",
    template: "%s | Gramwave Wireless",
  },
  description:
    "Gramwave Wireless is a deep-tech wireless communication research startup developing next-generation handset-side technologies to improve connectivity in weak-signal environments.",
  metadataBase: new URL("https://gramwavewireless.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gramwave Wireless | Advancing Wireless Connectivity Through Research",
    description:
      "A deep-tech wireless communication research startup focused on handset-side technologies to improve weak-signal environments.",
    url: "https://gramwavewireless.in",
    siteName: "Gramwave Wireless",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#030712] text-slate-100 selection:bg-accent/30 selection:text-white"
        suppressHydrationWarning
      >
        <SubtleLoader />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
