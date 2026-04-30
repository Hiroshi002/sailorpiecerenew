"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

interface VideoMovesetCardProps {
  move: {
    key: string;
    videoSrc?: string;
    poster?: string;
    description: string;
    cooldown?: string;
  };
}

export default function VideoMovesetCard({ move }: VideoMovesetCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Lock body scroll when modal is open
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => { document.body.style.overflow = ''; }
  }, [isModalOpen]);

  const handleClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleClose = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsModalOpen(false);
  }, []);

  const genericPlaceholder = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20225%22%3E%3Crect%20width%3D%22400%22%20height%3D%22225%22%20rx%3D%220%22%20fill%3D%22%23080c14%22%2F%3E%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22368%22%20height%3D%22193%22%20rx%3D%220%22%20fill%3D%22%230e1524%22%20stroke%3D%22%23ff1e38%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%226%206%22%20stroke-opacity%3D%220.2%22%2F%3E%3Cpath%20d%3D%22M200%2080L240%20140H160Z%22%20fill%3D%22%23ff1e38%22%20opacity%3D%220.5%22%2F%3E%3C%2Fsvg%3E";
  
  const posterSrc = (imageError || !move.poster) ? genericPlaceholder : move.poster;

  const modalContent = isModalOpen ? (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-300" aria-modal="true" role="dialog">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity" 
        onClick={handleClose}
      />
      <div className="relative w-full max-w-5xl bg-slate-950 border border-[var(--accent-red)]/30 rounded-none shadow-[0_0_100px_rgba(255,30,56,0.2)] overflow-hidden flex flex-col pointer-events-auto transform transition-all animate-in zoom-in-95 duration-300 pattern-isometric">
        
        {/* Header Overlay */}
        <div className="absolute top-0 inset-x-0 z-20 flex justify-between items-center p-4 bg-gradient-to-b from-black/90 to-transparent pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
             <div className="w-12 h-12 bg-black border border-[var(--accent-red)] flex items-center justify-center shadow-[0_0_20px_rgba(255,30,56,0.6)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-[var(--accent-red)] opacity-20"></div>
                <span className="font-black text-white text-xl drop-shadow-md text-kinetic relative z-10">{move.key}</span>
             </div>
             {move.cooldown && (
               <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest border-l-2 border-[var(--accent-red)] shadow-lg inline-block clip-diagonal">
                 CD: {move.cooldown}
               </span>
             )}
          </div>
          
          <button 
            type="button" 
            className="w-12 h-12 flex items-center justify-center bg-black/50 backdrop-blur-md hover:bg-[var(--accent-red)] text-white transition-all duration-300 active:scale-95 border border-[var(--accent-red)]/50 shadow-[0_0_15px_rgba(255,30,56,0.3)] pointer-events-auto group"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform duration-500"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Video Container */}
        <div className="relative w-full bg-black aspect-video flex-shrink-0 group overflow-hidden border-b border-[var(--accent-red)]/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,30,56,0.05),transparent_70%)] pointer-events-none z-0" />
          
          {move.videoSrc && !videoError ? (
            <video
              src={move.videoSrc}
              className="w-full h-full object-contain relative z-10"
              loop
              controls
              playsInline
              autoPlay
              poster={posterSrc}
              onError={() => setVideoError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 relative z-10">
              <Image src={posterSrc} alt="Fallback" fill sizes="100vw" className="object-cover opacity-20 blur-md pointer-events-none grayscale sepia" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/90 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center text-center px-4">
                 <div className="w-20 h-20 bg-black/60 flex items-center justify-center mb-4 border border-[var(--accent-red)]/50 shadow-[0_0_30px_rgba(255,30,56,0.3)] clip-diagonal">
                   <svg className="w-10 h-10 text-[var(--accent-red)] drop-shadow-[0_0_5px_rgba(255,30,56,0.8)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                 </div>
                 <span className="text-2xl md:text-3xl font-black text-white tracking-widest uppercase text-kinetic drop-shadow-[0_0_10px_rgba(255,30,56,0.5)]">No Media Found</span>
                 <p className="text-gray-400 mt-2 text-sm max-w-sm uppercase font-mono tracking-widest border-t border-[var(--accent-red)]/30 pt-2">Data signature missing</p>
              </div>
            </div>
          )}
        </div>

        {/* Description Container */}
        <div className="p-6 md:p-8 bg-black relative overflow-y-auto max-h-[35vh]">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-red)] to-transparent opacity-50" />
          
          <div className="flex items-center gap-3 mb-4">
             <div className="h-1 w-8 bg-[var(--accent-red)] shadow-[0_0_10px_rgba(255,30,56,0.8)]"></div>
             <h3 className="text-white text-xl font-black uppercase tracking-widest text-kinetic">
                Action Log
             </h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg border-l-2 border-[var(--accent-red)]/30 pl-4 bg-white/5 py-3 pr-3 backdrop-blur-sm">
            {move.description || "NO DESCRIPTION DATA AVAILABLE."}
          </p>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div 
        className="group relative bg-black/60 backdrop-blur-md border border-[var(--accent-red)]/20 overflow-hidden cursor-pointer hover:border-[var(--accent-red)] shadow-lg hover:shadow-[0_0_40px_-10px_rgba(255,30,56,0.4)] transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1 clip-diagonal-card"
        onClick={handleClick}
      >
        {/* Thumbnail Section */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950 flex-shrink-0 border-b border-[var(--accent-red)]/20">
          {posterSrc ? (
            <Image 
              src={posterSrc} 
              alt={`Preview of ${move.key}`} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`transition-transform duration-700 ease-in-out group-hover:scale-110 ${imageError ? 'object-contain p-8 opacity-40 mix-blend-screen grayscale' : 'object-cover grayscale group-hover:grayscale-0'}`}
              unoptimized={posterSrc.startsWith("data:")}
              onError={() => setImageError(true)}
            />
          ) : null}
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-60" />
          <div className="absolute inset-0 bg-[var(--accent-red)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
          
          {/* Badges */}
          <div className="absolute top-0 left-0 px-4 py-2 bg-[var(--accent-red)] shadow-[0_0_20px_rgba(255,30,56,0.6)] transform origin-top-left group-hover:scale-105 transition-transform duration-300 clip-badge">
            <span className="font-black text-black tracking-widest uppercase text-sm">{move.key}</span>
          </div>
          
          {move.cooldown && (
            <div className="absolute top-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-md border border-[var(--accent-red)]/30 transform group-hover:scale-105 transition-transform duration-300 clip-diagonal">
               <span className="text-[10px] font-bold text-[var(--accent-red)] uppercase tracking-widest drop-shadow-[0_0_5px_rgba(255,30,56,0.5)]">cd: {move.cooldown}</span>
            </div>
          )}

          {/* Central Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
             <div className="w-16 h-16 bg-black/50 backdrop-blur-md flex items-center justify-center border border-[var(--accent-red)] shadow-[0_0_40px_rgba(255,30,56,0.5)] clip-play">
               <svg className="w-8 h-8 text-[var(--accent-red)] ml-1 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
             </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-[var(--bg-panel)]/50">
          <div className="w-8 h-1 bg-[var(--accent-red)] mb-4 transform origin-left transition-all duration-500 group-hover:w-20 shadow-[0_0_10px_rgba(255,30,56,0.8)]" />
          <p className="text-sm text-gray-400 leading-relaxed max-h-[4.5rem] overflow-hidden group-hover:text-gray-200 transition-colors duration-300 relative font-sans">
            <span className="line-clamp-3">{move.description || "NO DESCRIPTION AVAILABLE DATA CORRUPTED."}</span>
          </p>
          <div className="mt-auto pt-4 flex items-center justify-between text-xs text-[var(--accent-red)]/60 font-bold uppercase tracking-widest group-hover:text-[var(--accent-red)] transition-colors duration-300 pointer-events-none">
            <span className="border-b border-transparent group-hover:border-[var(--accent-red)]/50 pb-0.5 transition-colors">Access Record</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 shadow-sm transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><polyline points="13 17 18 12 13 7"></polyline><line x1="6" y1="12" x2="18" y2="12"></line></svg>
          </div>
        </div>
      </div>

      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
