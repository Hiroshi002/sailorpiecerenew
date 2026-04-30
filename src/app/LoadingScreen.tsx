"use client";
import React, { useState, useEffect } from "react";
import { Compass } from "lucide-react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setFade(true);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-700 ease-in-out ${fade ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-red)]/10 blur-[150px] rounded-full"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--accent-gold)]/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Icon */}
        <div className="relative mb-8">
           <Compass className="w-20 h-20 text-[var(--accent-gold)] animate-[spin_4s_linear_infinite] drop-shadow-[0_0_20px_rgba(255,184,0,0.6)]" strokeWidth={1.5} />
           <div className="absolute inset-0 border-4 border-dashed border-[var(--accent-red)] rounded-full animate-[spin_6s_linear_infinite_reverse] opacity-50 scale-125"></div>
           <div className="absolute inset-0 border-2 border-[var(--accent-gold)] rounded-full animate-ping opacity-20 scale-150"></div>
        </div>
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl tracking-[0.3em] font-black italic text-white uppercase mb-2 text-shadow-red animate-pulse">
           Sailor Piece
        </h1>
        <div className="text-[10px] sm:text-xs text-[var(--accent-gold)] tracking-[0.5em] uppercase font-bold mb-10">
           Loading Archives
        </div>

        {/* Progress Bar Container */}
        <div className="w-72 sm:w-96 h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/5 relative">
          <div className="absolute inset-0 bg-white/10 w-full animate-pulse"></div>
          <div 
            className="h-full bg-gradient-to-r from-[var(--accent-red)] via-[var(--accent-gold)] to-[var(--accent-red)] transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%`, backgroundSize: '200% 100%' }}
          >
             <div className="absolute top-0 right-0 bottom-0 w-10 bg-white blur-[5px] mix-blend-overlay"></div>
          </div>
        </div>
        
        {/* Percentage */}
        <div className="mt-4 text-[12px] sm:text-sm text-white/50 tracking-widest font-mono">
           {Math.floor(progress)}%
        </div>
      </div>
    </div>
  );
}
