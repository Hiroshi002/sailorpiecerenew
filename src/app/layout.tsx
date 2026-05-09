import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";
import LoadingScreen from "./LoadingScreen";
import VisualEffects from "./VisualEffects";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sailor Piece Wiki | Mythic Archives",
  description: "The ultimate legendary archives for Sailor Piece.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${inter.variable} ${josefin.variable}`}>
      <body className={`${inter.className} min-h-full flex flex-col relative`}>
        <div className="bg-vignette" />
        <div className="bg-glow" />
        <LoadingScreen />
        <VisualEffects />
        {children}
      </body>
    </html>
  );
}
