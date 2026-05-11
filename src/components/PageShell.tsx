import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageShellProps {
  children: React.ReactNode;
  maxWidth?: string;
}

export default function PageShell({ children, maxWidth = "1920px" }: PageShellProps) {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950/50"
      style={{ maxWidth }}
    >
      <Header />
      <main className="w-full relative z-10 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
