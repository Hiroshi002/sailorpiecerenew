import React from "react";
import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about/" },
  { label: "Directory", href: "/directory/" },
  { label: "Sea 2", href: "/sea-2/" },
  { label: "Official Links", href: "/official-links/" },
  { label: "Changelog", href: "/changelog/" },
  { label: "Contact", href: "/contact/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms", href: "/terms/" },
];

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-[var(--bg-dark)] border-t-[4px] border-[var(--accent-red)] pt-20 pb-12">
      {/* Background Anime Action Scanlines */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ 
          background: "repeating-linear-gradient(45deg, rgba(255,30,56,0.03) 0px, rgba(255,30,56,0.03) 2px, transparent 2px, transparent 8px)" 
        }} 
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center">
          
          {/* Main Brand Area */}
          <div className="flex flex-col items-center text-center mb-16">
            <Link href="/" className="group flex items-center mb-6 transform transition-transform hover:scale-105 hover:-rotate-1">
              <div 
                className="w-16 h-16 flex items-center justify-center font-black text-3xl text-white bg-gradient-to-br from-[var(--accent-red)] to-[#500000] border border-[var(--accent-red)] shadow-[0_0_20px_rgba(255,30,56,0.4)] transition-all group-hover:shadow-[0_0_30px_rgba(255,30,56,0.8)]"
                style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
              >
                SP
              </div>
              <span 
                className="text-4xl ml-5 font-black uppercase italic text-white tracking-tighter"
                style={{ textShadow: "3px 3px 0px var(--accent-red)" }}
              >
                Sailor Piece Wiki
              </span>
            </Link>
            <p className="max-w-2xl text-lg leading-relaxed italic text-gray-400 font-medium">
              &quot;The stars guide the way, but the wiki reveals the path.&quot; <br />
              <span className="opacity-90 font-bold text-[var(--accent-gold)]">The ultimate legendary archives for the Sailor Piece community.</span>
            </p>
          </div>

          {/* Links Grid */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-20 w-full max-w-4xl mx-auto border-y border-[var(--border-subtle)] py-8">
            {footerLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[var(--accent-gold)] transition-all transform hover:-translate-y-1 hover:scale-110"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Bottom Bar Container */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">

            {/* Premium Social Icons */}
            <div className="flex items-center order-2 md:order-1 border-l-4 border-[var(--accent-red)] bg-[#0a0a0a] py-3 px-8 shadow-[5px_5px_0px_rgba(255,30,56,0.2)]" style={{ transform: "skewX(-5deg)" }}>
              <div className="flex gap-6 items-center" style={{ transform: "skewX(5deg)" }}>
                {/* Twitter / X */}
                <a href="#" className="text-gray-400 hover:text-white icon-hover-pulse transition-all duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                {/* Discord */}
                <a href="#" className="text-gray-400 hover:text-[#5865F2] hover:drop-shadow-[0_0_12px_rgba(88,101,242,0.6)] icon-hover-pulse transition-all duration-300">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className="text-gray-400 hover:text-[#FF0000] hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.6)] icon-hover-pulse transition-all duration-300">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.582 6.186a2.646 2.646 0 00-1.865-1.884C18.069 3.86 12 3.86 12 3.86s-6.069 0-7.717.442A2.646 2.646 0 002.418 6.186C2 7.854 2 12 2 12s0 4.146.418 5.814a2.646 2.646 0 001.865 1.884C5.931 20.14 12 20.14 12 20.14s6.069 0 7.717-.442a2.646 2.646 0 001.865-1.884C22 16.146 22 12 22 12s0-4.146-.418-5.814zM9.99 15.42V8.58l6.335 3.42-6.335 3.42z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="flex flex-col items-center text-center order-1 md:order-2">
              <p className="text-xs uppercase tracking-[0.2em] font-black text-gray-400 mb-2">
                &copy; 2026 <span className="text-[var(--accent-red)]">Sailor Piece Wiki</span>
              </p>
              <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold text-white">
                Mythic Archives • Fan-Made Voyage Guide
              </p>
            </div>

            {/* Pride Label */}
            <div className="text-center md:text-right order-3 md:order-3">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mb-3">
                Charted with Pride
              </p>
              <div 
                className="inline-block px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-black text-black bg-white transform hover:bg-[var(--accent-red)] hover:text-white transition-colors cursor-default"
                style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
              >
                Community Heritage
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
