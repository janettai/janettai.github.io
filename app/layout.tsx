import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://janettai.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Janett Labs",
    template: "%s | Janett Labs",
  },
  description: "A Manifesto for the Science of Learning",
  openGraph: {
    title: "Janett Labs",
    description: "A Manifesto for the Science of Learning",
    url: SITE_URL,
    siteName: "Janett Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Janett Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janett Labs",
    description: "A Manifesto for the Science of Learning",
    images: ["/og-default.png"],
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
