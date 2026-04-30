import React from "react";
import Link from "next/link";
import { Compass, Home, Anchor, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      {/* Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20 pointer-events-none" style={{ WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent)" }}></div>

      <Header />

      <main className="flex-grow flex flex-col items-center justify-center min-h-[70vh] px-4 py-20 relative overflow-hidden">
        {/* Background Visual Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-red)] opacity-5 blur-[120px] rounded-full"></div>
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[var(--accent-gold)] opacity-[0.03] blur-[80px] rounded-full animate-pulse"></div>
          
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
              backgroundImage: "repeating-linear-gradient(45deg, var(--accent-red) 0px, var(--accent-red) 1px, transparent 1px, transparent 10px)" 
            }} 
          ></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6">
          {/* Animated Icon Container */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-[var(--accent-red)] blur-2xl opacity-20 animate-pulse"></div>
            <div className="panel-action p-6 rounded-full border-2 border-[var(--accent-red)] relative z-10 bg-black/60 backdrop-blur-xl">
              <Compass className="w-16 h-16 text-[var(--accent-red)] icon-glow-red animate-[spin_10s_linear_infinite]" strokeWidth={1.5} />
            </div>
            <div className="absolute -top-2 -right-2 bg-[var(--accent-gold)] text-black p-1.5 rounded-full shadow-[0_0_15px_rgba(255,184,0,0.5)] border border-white/20">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>

          {/* 404 Heading */}
          <h1 className="text-8xl md:text-[10rem] font-black text-kinetic text-white text-shadow-red leading-none mb-4 mix-blend-difference">
            404
          </h1>
          
          <div className="mb-8 relative">
             <div className="inline-block px-6 py-2 bg-[var(--accent-red)] text-white font-black italic uppercase tracking-[0.2em] transform -skew-x-12 shadow-[5px_5px_0px_rgba(0,0,0,1)] border border-white/10">
                Lost at Sea
             </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-white italic mb-6 tracking-wide uppercase">
             The Archives Have Vanished
          </h2>

          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-10 border-l-4 border-[var(--accent-gold)] pl-6 bg-gradient-to-r from-[var(--accent-gold)]/5 to-transparent py-4 text-left">
            You've ventured beyond the charted territories of the <span className="text-[var(--accent-red)] font-bold">Sailor Piece Wiki</span>. The page you seek has been swallowed by the Grand Sea or never existed in these scrolls.
          </p>

          {/* Navigation Options */}
          <div className="flex flex-col sm:flex-row gap-6 w-full items-center justify-center">
            <Link 
              href="/" 
              className="group relative flex items-center gap-3 bg-[var(--accent-gold)] text-black px-10 py-4 font-black uppercase italic tracking-widest clip-diagonal hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 w-full sm:w-auto"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Return to Harbor</span>
              <div className="absolute bottom-0 left-0 h-1 bg-[var(--accent-red)] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>

            <Link 
              href="/directory/" 
              className="group flex items-center gap-3 bg-black/40 border-2 border-[var(--border-action)] text-white px-10 py-4 font-black uppercase italic tracking-widest clip-diagonal hover:border-[var(--accent-red)] hover:bg-[var(--accent-red)]/10 transition-all duration-300 w-full sm:w-auto"
            >
              <Anchor className="w-5 h-5 group-hover:rotate-12 transition-transform text-[var(--accent-red)]" />
              <span>View Directory</span>
            </Link>
          </div>
          
          {/* Subtle Decorative Text */}
          <div className="mt-16 opacity-30 flex items-center gap-4">
             <div className="h-[1px] w-12 bg-gray-600"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">End of Known World</span>
             <div className="h-[1px] w-12 bg-gray-600"></div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
