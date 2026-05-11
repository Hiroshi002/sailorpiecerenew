"use client";
import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { Search, Globe, Code } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { trackSearch } from "@/lib/analytics";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t, siteConfig } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Derive searchable data dynamically across categories - memoized for performance
  const allSearchable = useMemo(() => [
    ...(t.searchList || []).map((i: any) => ({ title: i.title, type: i.type, link: i.href })),
    ...t.quickItems.map((i: { title: string; href: string }) => ({ title: i.title, type: t.qaTitle, link: i.href })),
    ...t.navItems.map((i: { label: string; href: string }) => ({ title: i.label, type: t.navTitle, link: i.href })),
    ...t.browseItems.map((i: { title: string; href: string }) => ({ title: i.title, type: t.browseTitle, link: i.href }))
  ], [t]);

  const searchResults = useMemo(() => 
    allSearchable.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 6),
  [allSearchable, searchQuery]);

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    if (searchQuery.trim()) {
      trackSearch(searchQuery);
    }
  };

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[var(--bg-dark)]/95 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl" : "bg-transparent backdrop-blur-md"}`}>
      <div className="w-full flex justify-between items-center px-4 sm:px-8 py-3 sm:py-5 border-b border-[var(--border-action)] flex-wrap gap-4">
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-[var(--accent-red)] to-[#500000] flex items-center justify-center clip-button border border-[var(--accent-red)] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,30,56,0.4)]">
            <span className="text-white font-black text-lg sm:text-2xl italic tracking-normal">SP</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-black text-white text-kinetic tracking-[0.08em]" translate="no">{siteConfig.name}</span>
            <span className="text-[8px] sm:text-[10px] text-[var(--accent-gold)] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-black w-max" translate="no">{t.subtitle}</span>
          </div>
        </Link>
        
        <div className="flex gap-3 sm:gap-6 items-center flex-wrap">
          {/* Animated Search Bar with Live Results Dropdown */}
          <div className="relative group hidden md:block z-50">
             <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchFocus}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder={t.searchPlaceholder} 
                aria-label={lang === "th" ? "ค้นหาข้อมูลในวิกิ" : "Search the wiki"}
                className="bg-black/50 border border-[var(--border-action)] text-white text-sm italic font-black tracking-widest px-4 py-2 sm:py-2.5 w-48 focus:w-64 focus:bg-black focus:border-[var(--accent-gold)] clip-button outline-none transition-all duration-300 placeholder-gray-500 focus:placeholder-[var(--accent-gold)] shadow-[inset_0_0_10px_rgba(255,30,56,0.1)] focus:shadow-[0_0_15px_rgba(255,184,0,0.3)] relative z-20"
             />
             <Search className="absolute right-4 top-2.5 sm:top-3 w-4 h-4 text-gray-400 group-focus-within:text-[var(--accent-gold)] group-focus-within:icon-glow-gold transition-all pointer-events-none z-30" strokeWidth={3} />

             {/* Live Search Interactive Window */}
             <div 
                className={`absolute top-[48px] -right-4 w-[340px] bg-black/95 border-2 border-[var(--border-action)] shadow-[0_20px_50px_rgba(0,0,0,1)] clip-diagonal z-[100] p-3 backdrop-blur-xl transition-all duration-300 ${isSearchFocused && searchQuery.trim().length > 0 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                aria-live="polite"
             >
                <div className="text-[10px] text-[var(--accent-gold)] font-black uppercase tracking-[0.2em] mb-2 px-2 border-b border-gray-800 pb-2">
                   {lang === "th" ? "🔥 ผลการค้นหา" : "🔥 Search Results"}
                </div>
                   <div className="flex flex-col gap-1 max-h-[300px] overflow-y-auto custom-scrollbar pr-1">
                      {searchResults.length > 0 ? (
                         searchResults.map((res, i) => (
                            <Link key={i} href={res.link} className="block px-3 py-2 hover:bg-[var(--accent-red)]/10 border-l-4 border-transparent hover:border-l-[var(--accent-red)] transition-all group/item rounded-sm">
                               <div className="text-white font-bold text-[13px] italic tracking-wide group-hover/item:text-[var(--accent-gold)] transition-colors">{res.title}</div>
                                 <div className="text-[9px] text-gray-400 uppercase tracking-widest mt-0.5">{res.type}</div>
                              </Link>
                           ))
                        ) : (
                           <div className="px-3 py-6 text-gray-400 text-xs italic font-semibold text-center border border-dashed border-gray-800 m-1 bg-black/30">
                              {lang === "th" ? "ไม่พบข้อมูลที่คุณค้นหา…" : "No matching entries found…"}
                           </div>
                        )}
                     </div>
                  </div>
            </div>

            {/* Language Toggle Button */}
            <button 
               onClick={() => setLang(lang === "th" ? "en" : "th")}
               className="text-white font-black tracking-widest clip-button px-3 sm:px-5 py-2 border-2 border-white/50 hover:border-white hover:bg-[var(--accent-gold)] hover:border-[var(--accent-gold)] hover:text-black hover:shadow-[0_0_15px_rgba(255,184,0,0.4)] transition-all text-xs sm:text-sm mr-2 flex items-center gap-2 group"
               title={lang === "th" ? "เปลี่ยนภาษา" : "Toggle Language"}
               aria-label={lang === "th" ? "เปลี่ยนภาษาเป็นภาษาอังกฤษ" : "Switch language to Thai"}
            >
             <Globe className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-[spin_4s_linear_infinite] icon-glow-blue transition-all" />
             <span className="opacity-90">{lang === "th" ? "🇹🇭 TH" : "🇺🇸 EN"}</span>
          </button>

          <Link href="/" className="text-white hover:text-[var(--accent-red)] font-black uppercase text-xs sm:text-sm tracking-widest clip-button px-3 sm:px-6 py-2 border border-transparent hover:border-[var(--accent-red)] hover:bg-[var(--accent-red)]/10 transition-all hidden sm:block">
            {t.home}
          </Link>
          <Link href="/entries/codes-overview/" className="text-black bg-[var(--accent-gold)] font-black uppercase text-xs sm:text-sm tracking-widest clip-button px-4 sm:px-8 py-2 sm:py-3 border border-[var(--accent-gold)] hover:bg-white hover:border-white transition-all shadow-[0_0_15px_rgba(255,184,0,0.4)] flex items-center gap-2 group">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:scale-110 group-hover:icon-glow-red transition-all" />
            <span>{t.codes}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
