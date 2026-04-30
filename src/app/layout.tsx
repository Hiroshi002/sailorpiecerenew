import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseGlow from "./MouseGlow";
import Particles from "./Particles";
import LoadingScreen from "./LoadingScreen";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col relative`}>
        <div className="bg-vignette" />
        <div className="bg-glow" />
        <LoadingScreen />
        <MouseGlow />
        <Particles />
        {children}
      </body>
    </html>
  );
}
