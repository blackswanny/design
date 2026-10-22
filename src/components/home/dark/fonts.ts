import localFont from "next/font/local";

export const portfolioSans = localFont({
  src: [
    {
      path: "../../../app/fonts/InterTight-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../app/fonts/InterTight-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-portfolio-sans",
  display: "swap",
});

// Instrument Serif Italic — SIL Open Font License (public/fonts/InstrumentSerif-OFL.txt).
export const portfolioDisplay = localFont({
  src: "../../../../public/fonts/InstrumentSerif-Italic.ttf",
  weight: "400",
  style: "italic",
  variable: "--font-portfolio-display",
  display: "swap",
});
