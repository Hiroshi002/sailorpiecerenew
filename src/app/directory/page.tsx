"use client";
import { getSiteConfig } from "@/config/site";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export default function Directory() {
  const { t } = useLanguage();
  const d = t.directory;

  // Map the static links with the correct paths and localized titles/descriptions
  const directoryGroups = [
    {
      title: d.groups[0].title,
      description: d.groups[0].description,
      links: [
        { title: d.groups[0].links[0].title, href: "/", desc: d.groups[0].links[0].desc },
        { title: d.groups[0].links[1].title, href: "/entries/codes-overview/", desc: d.groups[0].links[1].desc },
        { title: d.groups[0].links[2].title, href: "/entries/new-player-progression-path/", desc: d.groups[0].links[2].desc },
        { title: d.groups[0].links[3].title, href: "/sea-2/", desc: d.groups[0].links[3].desc },
      ]
    },
    {
      title: d.groups[1].title,
      description: d.groups[1].description,
      links: [
        { title: d.groups[1].links[0].title, href: "/melees/", desc: d.groups[1].links[0].desc },
        { title: d.groups[1].links[1].title, href: "/weapons/", desc: d.groups[1].links[1].desc },
        { title: d.groups[1].links[2].title, href: "/entries/powers-overview/", desc: d.groups[1].links[2].desc },
        { title: d.groups[1].links[3].title, href: "/entries/races-overview/", desc: d.groups[1].links[3].desc },
      ]
    },
    {
      title: d.groups[2].title,
      description: d.groups[2].description,
      links: [
        { title: d.groups[2].links[0].title, href: "/ancient-fragments/", desc: d.groups[2].links[0].desc },
        { title: d.groups[2].links[1].title, href: "/calculator/", desc: d.groups[2].links[1].desc },
        { title: d.groups[2].links[2].title, href: "/official-links/", desc: d.groups[2].links[2].desc },
        { title: d.groups[2].links[3].title, href: "/analysis/", desc: d.groups[2].links[3].desc },
        { title: d.groups[2].links[4].title, href: "/user-analytics/", desc: d.groups[2].links[4].desc },
        { title: d.groups[2].links[5].title, href: "/changelog/", desc: d.groups[2].links[5].desc },
      ]
    }
  ];

  return (
    <>
      <div className="bg-vignette"></div>
      <div className="bg-glow"></div>
      
      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20" style={{ WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent)" }} aria-hidden="true"></div>
      
      <main className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans">
        <Header />

        {/* Hero Section */}
        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-8 sm:mt-12 z-10 relative">
          {/* Breadcrumb / Navigation indicator */}
          <div className="flex items-center gap-2 mb-6 animate-fade-in opacity-60 hover:opacity-100 transition-opacity">
            <Link href="/" className="text-[var(--accent-gold)] text-xs uppercase tracking-widest font-bold flex items-center gap-1 hover:underline">
              <span>{t.home || "Home"}</span>
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-white text-xs uppercase tracking-widest font-bold opacity-80">{d.title}</span>
          </div>

          <div className="panel-action clip-diagonal p-8 sm:p-12 lg:p-20 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[var(--bg-dark)] via-[var(--bg-dark)]/80 to-transparent pointer-events-none"></div>
            <div className="absolute w-[100%] h-[140%] bg-[var(--accent-red)] opacity-5 blur-[120px] pointer-events-none rounded-full"></div>

            <div className="relative z-10 w-full">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[var(--accent-gold)] text-[var(--accent-gold)] font-black text-xs uppercase tracking-[0.2em] clip-button shadow-[0_0_15px_rgba(255,184,0,0.2)] bg-black/80 mb-6">
                <span className="w-2 h-2 bg-[var(--accent-gold)] animate-pulse shadow-[0_0_8px_rgba(255,184,0,1)]"></span> {d.archives}
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1] text-white text-kinetic text-shadow-red mb-6 font-black uppercase">
                {d.title} <span className="text-[var(--accent-gold)] text-shadow-gold">{d.subtitle}</span>
              </h1>
              <p className="text-gray-300 w-full max-w-2xl text-base sm:text-lg font-medium leading-relaxed mb-4 mx-auto border-b border-[var(--accent-red)]/30 pb-6">
                {d.heroDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Directory Grid */}
        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-16 mb-24 z-10" aria-label="Directory categories">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-10" role="list">
            {directoryGroups.map((group, i) => (
              <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }} role="listitem">
                <div className="mb-6 pb-2 border-b-2 border-[var(--accent-red)] relative">
                  <h2 className="text-2xl text-white text-kinetic text-shadow-red uppercase tracking-wide font-black">{group.title}</h2>
                  <p className="text-[var(--accent-gold)] text-xs uppercase tracking-widest font-bold mt-1 italic opacity-80">{group.description}</p>
                  <div className="absolute -bottom-[2px] left-0 w-12 h-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                </div>
                
                <div className="grid gap-4" role="list">
                  {group.links.map((link, j) => (
                    <Link 
                      key={j} 
                      href={link.href} 
                      className="group panel-action clip-diagonal p-6 sm:p-5 hover:border-[var(--accent-red)] hover:bg-[var(--accent-red)]/5 transition-all duration-300 block relative overflow-hidden"
                      aria-label={`${link.title}: ${link.desc}`}
                      role="listitem"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent-red)]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex justify-between items-center mb-2 relative z-10">
                        <h3 className="font-black text-white text-kinetic group-hover:text-[var(--accent-red)] transition-colors text-sm sm:text-base uppercase tracking-wide">{link.title}</h3>
                        <div className="bg-blue-500/80 p-1.5 rounded-md group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:scale-110">
                          <ArrowUpRight className="w-4 h-4 text-white stroke-[3px]" />
                        </div>
                      </div>
                      <p className="text-gray-300 text-xs sm:text-sm font-medium leading-relaxed relative z-10 group-hover:text-white transition-colors">{link.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
