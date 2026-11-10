import localFont from "next/font/local";

import "./globals.css";
import ScrollCue from "../components/scrollCue";

import type { Metadata } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const description =
  "Product designer in the San Francisco Bay Area. Research, UX, UI, and design systems, from the first idea to a working product.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hanna.vision"),
  title: "Hanna Gomozova — Product Designer",
  description,
  openGraph: {
    title: "Hanna Gomozova — Product Designer",
    description,
    url: "/",
    siteName: "Hanna Gomozova",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <ScrollCue />
      </body>
    </html>
  );
}
