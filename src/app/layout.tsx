import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "../components/navBar";
import BackgroundLayout from "../components/backgroundLayout";

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

const neueMontreal = localFont({
  src: [
    {
      path: "../../public/fonts/PPNeueMontreal-Book.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/PPNeueMontreal-Thin.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/PPNeueMontreal-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-neue-montreal",
});

export const metadata: Metadata = {
  title: "Hanna Gomozova",
  description: "Hanna Gomozova Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${neueMontreal.variable} ${geistSans.variable} ${geistMono.variable} antialiased h-full`}
    >
      <body className={`h-full flex text-primary-text justify-center relative`}>
        <div className="w-full h-full bg-body-background relative flex flex-col">
          <BackgroundLayout />

          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
