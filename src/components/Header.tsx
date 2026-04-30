"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-40 transition-all duration-300 ${isScrolled ? "bg-[var(--bg-dark)]/95 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl" : "bg-transparent backdrop-blur-md"}`}>
      <div className="w-full flex justify-between items-center px-4 sm:px-8 py-3 sm:py-5 border-b border-[var(--border-action)]">
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-[var(--accent-red)] to-[#500000] flex items-center justify-center clip-button border border-[var(--accent-red)] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,30,56,0.4)]">
            <span className="text-white font-black text-lg sm:text-2xl italic tracking-normal">SP</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-black text-white text-kinetic tracking-[0.08em]">Sailor Piece Wiki</span>
            <span className="text-[8px] sm:text-[10px] text-[var(--accent-gold)] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-black w-max">Unleash the Grand Sea</span>
          </div>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6 flex-wrap">
          <Link href="/directory/" className="hidden lg:block text-white hover:text-[var(--accent-red)] font-black uppercase text-xs sm:text-sm tracking-widest clip-button px-3 sm:px-5 py-2 border border-transparent hover:border-[var(--accent-red)] hover:bg-[var(--accent-red)]/10 transition-all">
            Directory
          </Link>
          <Link href="/sea-2/" className="hidden lg:block text-white hover:text-[var(--accent-red)] font-black uppercase text-xs sm:text-sm tracking-widest clip-button px-3 sm:px-5 py-2 border border-transparent hover:border-[var(--accent-red)] hover:bg-[var(--accent-red)]/10 transition-all">
            Sea 2
          </Link>
          <Link href="/entries/codes-overview/" className="text-black bg-[var(--accent-gold)] font-black uppercase text-xs sm:text-sm tracking-widest clip-button px-4 sm:px-8 py-2 sm:py-3 border border-[var(--accent-gold)] hover:bg-white hover:border-white transition-all shadow-[0_0_15px_rgba(255,184,0,0.4)] flex items-center gap-2 group">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:scale-110 group-hover:icon-glow-gold transition-all" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.93V18h-2v-1.07A4.004 4.004 0 017 13h2a2 2 0 004 0c0-1.103-.897-2-2-2-2.206 0-4-1.794-4-4 0-2.056 1.539-3.768 3.536-3.965l.464-.046V4h2v1.07a4.004 4.004 0 014 3.93h-2a2 2 0 00-4 0c0 1.103.897 2 2 2 2.206 0 4 1.794 4 4 0 2.056-1.539 3.768-3.536 3.965l-.464.046z"/>
            </svg>
            <span>Codes</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
