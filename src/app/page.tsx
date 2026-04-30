"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Search, Code, Globe, BookOpen } from "lucide-react";

// Localization Dictionaries
const DICT = {
  th: {
    searchPlaceholder: "ค้นหาวิกิ...",
    subtitle: "ปลดปล่อยพลังแห่งท้องทะเล",
    home: "หน้าแรก",
    codes: "โค้ดล่าสุด",
    guideHub: "ศูนย์รวมคู่มือฉบับแฟนเมด",
    ignited: "ทะยานสู่จุดสูงสุด",
    heroDesc: "วิกิเกม Sailor Piece ฉบับรวมคู่มือสมบูรณ์แบบ แนะนำแนวทางการเล่นแบบเจาะลึก ทั้งไกด์สำหรับมุ่งหน้าไป Sea 2, เส้นทางหาชิ้นส่วน Ancient Fragments, และแนวทางการคราฟอาวุธสุดโกงอย่าง Great Mage หรือ Cosmic Garou!",
    stats: {
      pages: "หน้าข้อมูล",
      categories: "หมวดหมู่",
      searchable: "คำค้นหา",
      updated: "อัปเดตล่าสุด"
    },
    date: "27 เม.ย. 2026",
    qaSubtitle: "หน้ายอดฮิตช่วงท้ายเกม",
    qaTitle: "เมนูลัด",
    qaDesc: "เข้าถึงหน้าข้อมูลอาวุธและสไตล์การต่อสู้ระดับท็อปเทียร์ด้วยคลิกเดียว",
    navTitle: "หมวดหมู่ทั้งหมด",
    navDesc: "เจาะลึกทุกระบบสายการเล่น ไอเทมดรอปบอส และแผนที่จุดฟาร์ม",
    browseTitle: "เริ่มใช้งานวิกิ",
    aboutTitle: "เกี่ยวกับวิกินี้",
    fastAccess: "เนื้อหาที่น่าสนใจ",
    quickItems: [
      { id: "anti", title: "Anti Magic", cat: "ดาบ / ระดับ S+", img: "/images/hero/antimagic.webp", href: "/entries/anti-magic/" },
      { id: "atomic", title: "Atomic", cat: "ดาบ / ระดับ S+", img: "/images/icons/weapon-atomic.webp", href: "/entries/atomic/" },
      { id: "great", title: "Great Mage", cat: "ดาบ / ระดับ S+", img: "/images/icons/weapon-greatmage.webp", href: "/entries/great-mage-style/" },
      { id: "dragon", title: "Dragon Goddess", cat: "ดาบ / ระดับ S+", img: "/images/icons/weapon-dragongoddess.webp", href: "/entries/dragon-goddess/" },
      { id: "cosmic", title: "Cosmic Being", cat: "สไตล์ต่อสู้ / ระดับ S+", img: "/images/icons/melee-cosmicbeing.webp", href: "/entries/cosmic-being-style/" },
      { id: "theworld", title: "The World", cat: "สไตล์ต่อสู้ / ระดับ S+", img: "/images/icons/melee-theworld.webp", href: "/entries/the-world-style/" },
    ],
    navItems: [
      "Sea 2", "หมัด/สไตล์ต่อสู้", "ดาบ", "ผลปีศาจ", "เผ่าพันธุ์", "Traits", "แคลน", "พลังพิเศษ", 
      "อาร์ติแฟกต์", "เครื่องประดับ", "คอสเมติก", "บิลด์อาวุธ", "วัสดุคราฟต์", "รูน (Runes)", 
      "ฉายา", "พาสซีฟ", "Enchantments", "ออร่า", "สายเลือด", "เรลิก", 
      "ตารางเทรด", "โค้ดทั้งหมด", "ฮาคิ", "บอส", "กิลด์", "Boss Rush", 
      "กันฐาน (Defense)", "หอคอยอนันต์", "ผังต้นไม้สกิล", "ดันเจี้ยน", "พรบารมี", "เส้นทางผู้เล่น"
    ],
    browseItems: [
      { title: "สารบัญวิกิ", desc: "รวมหน้าเพจและหมวดหมู่ทั้งหมดที่คุณค้นหาได้ในที่เดียว ง่ายต่อการเข้าถึง" },
      { title: "แผนที่และเกาะทั้งหมด", desc: "ดูจุดเกิดของบอส, เควสต์, NPC, และจุดอัปเกรดในแต่ละเกาะแบบเจาะลึก" },
      { title: "คู่มือลง Sea 2", desc: "เส้นทางการหา Ancient Fragments, จุดเกิดสัตว์ทะเล, และการเดินทางไปโลกสองแบบละเอียดยิบ" },
      { title: "ลิงก์เว็บหลัก", desc: "กดไปหน้าเกมเพจ Roblox หลัก, ดิสคอร์ดพูดคุย, และอัปเดตแบบเรียลไทม์" },
      { title: "ระบบคำนวณ", desc: "ศูนย์รวมเครื่องมือคำนวณดาเมจ, วิเคราะห์พาสซีฟและบิลด์อาวุธที่เหมาะกับคุณ" },
      { title: "เครื่องมือเช็คความคืบหน้า", desc: "บันทึกความคืบหน้าหอคอยอนันต์, Skill Tree, และสถานะเลเวลของคุณเอง" },
      { title: "เกี่ยวกับวิกินี้", desc: "ทำความรู้จักกับที่มาของวิกิ, การตรวจสอบข้อมูล, และทีมนักพัฒนาแฟนเมด" }
    ],
    about1: {
      tag: "ข้อมูลในบล็อกนี้มีอะไรบ้าง?",
      title: "เจาะลึกระบบสเตตัส, คู่มือการฟาร์มบอส, และข้อมูลสาย End-game",
      desc: "วิกินี้ถูกทำขึ้นเพื่ออธิบายและวิเคราะห์ระบบของเกาะต่างๆ ระดับความยาก การผสมไอเทม เพื่อลดปัญหาการเดินหลงทางสำหรับผู้เล่นใหม่และช่วยแนะนำของฟาร์มในช่วงท้ายเกม ไม่ต้องงมข้อมูลเองอีกต่อไป"
    },
    about2: {
      tag: "ออกแบบมาสำหรับทุกคน",
      title: "รองรับมือถือ แท็บเล็ต อ่านง่าย ไว้วางแผนการฟาร์มล่วงหน้า",
      desc: "ช่องค้นหา หรือ Search หมวดหมู่ด้านบน จะช่วยดึงคุณเข้าสู่บทหน้าคู่มือหรือหน้าเนื้อหาได้อย่างรวดเร็ว ในหน้าคู่มือต่างๆ ยังมีการระบุจุดเชื่อมต่อไปยังวัสดุหรือชิ้นส่วนประกอบไอเทมอีกด้วย!"
    }
  },
  en: {
    searchPlaceholder: "Search entries...",
    subtitle: "Unleash the Grand Sea",
    home: "Home",
    codes: "Active Codes",
    guideHub: "Fan-made Guide Hub",
    ignited: "Ignited",
    heroDesc: "Fan-made Sailor Piece wiki with Sea 2 guides, Ancient Fragments routes, Great Mage and Cosmic Garou update coverage, sea beast farming, builds, boss routes, and unlock requirements.",
    stats: {
      pages: "Content Pages",
      categories: "Categories",
      searchable: "Searchable",
      updated: "Last Updated"
    },
    date: "27 Apr 2026",
    qaSubtitle: "Popular Endgame Pages",
    qaTitle: "Quick Access",
    qaDesc: "Open the most-visited late-game weapon and fighting style pages in one click.",
    navTitle: "Navigation Hub",
    navDesc: "Explore all categories and systems within Sailor Piece.",
    browseTitle: "Browse the Wiki",
    aboutTitle: "About This Wiki",
    fastAccess: "S+ TIER",
    quickItems: [
      { id: "anti", title: "Anti Magic", cat: "Weapons / S+ Tier", img: "/images/hero/antimagic.webp", href: "/entries/anti-magic/" },
      { id: "atomic", title: "Atomic", cat: "Weapons / S+ Tier", img: "/images/icons/weapon-atomic.webp", href: "/entries/atomic/" },
      { id: "great", title: "Great Mage", cat: "Weapons / S+ Tier", img: "/images/icons/weapon-greatmage.webp", href: "/entries/great-mage-style/" },
      { id: "dragon", title: "Dragon Goddess", cat: "Weapons / S+ Tier", img: "/images/icons/weapon-dragongoddess.webp", href: "/entries/dragon-goddess/" },
      { id: "cosmic", title: "Cosmic Being", cat: "Melee / S+ Tier", img: "/images/icons/melee-cosmicbeing.webp", href: "/entries/cosmic-being-style/" },
      { id: "theworld", title: "The World", cat: "Melee / S+ Tier", img: "/images/icons/melee-theworld.webp", href: "/entries/the-world-style/" },
    ],
    navItems: [
      "Sea 2", "Melees", "Weapons", "Fruits", "Races", "Traits", "Clans", "Powers", 
      "Artifacts", "Accessories", "Cosmetics", "Builds", "Materials", "Runes", 
      "Titles", "Spec Passives", "Enchantments", "Auras", "Bloodlines", "Relics", 
      "Trade Values", "Codes", "Haki", "Bosses", "Guilds", "Boss Rush", 
      "Crystal Defense", "Infinite Tower", "Skill Tree", "Dungeons", "Blessings", "Progression"
    ],
    browseItems: [
      { title: "Wiki Directory", desc: "Browse every category hub, overview page, and published entry from one clean index." },
      { title: "All Islands and Map", desc: "Open the interactive island hub for NPCs, bosses, progression stage, and related pages." },
      { title: "Sea 2 Guide", desc: "Open the Ancient Fragments Sea 2 locations guide for Lost Fragments, Cartographer access, Sea 2 islands, sea beasts, and the new update rollout." },
      { title: "Official Links", desc: "Jump straight to the Roblox game page, Discord, Trello, and current trading tools." },
      { title: "Sailor Piece Calculator", desc: "Open the tool hub for power compares, passive compares, and the build planner." },
      { title: "Progress Trackers", desc: "Track Boss Rush, Infinite Tower, Crystal Defense, Skill Tree, and your long-term endgame account checklist." },
      { title: "About This Wiki", desc: "See what the site covers, how pages are checked, and how the project is structured." },
      { title: "Recent Changes", desc: "Open the changelog to see the newest page updates, corrections, and feature additions." }
    ],
    about1: {
      tag: "What You Can Find Here",
      title: "Progression, Systems, and Endgame Help",
      desc: "This wiki covers Sailor Piece progression, items, bosses, materials, and late-game systems. Everything is split into focused guides so you can find what you need quickly without digging through one giant page."
    },
    about2: {
      tag: "How Players Use It",
      title: "Find Pages Fast and Plan Ahead",
      desc: "Use search when you already know the item or route you want, or browse categories when you want to compare options. Many pages also link directly to the materials, bosses, and upgrades connected to them."
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<"th" | "en">("en");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const t = DICT[lang];

  // Derive searchable data dynamically across categories
  const allSearchable = [
    ...t.quickItems.map((i: { title: string; href: string }) => ({ title: i.title, type: t.qaTitle, link: i.href })),
    ...t.navItems.map((i: string) => ({ title: i, type: t.navTitle, link: `/${i.toLowerCase().replace(/ /g, "-")}` })),
    ...t.browseItems.map((i: { title: string }) => ({ title: i.title, type: t.browseTitle, link: "/" }))
  ];

  const searchResults = allSearchable.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 6);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20" style={{ WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent)" }}></div>

      <main className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans">
        
        {/* Supreme Top Navigation */}
        <nav className="w-full flex justify-between items-center px-4 sm:px-8 py-3 sm:py-5 border-b border-[var(--border-action)] bg-[var(--bg-dark)]/90 backdrop-blur-xl sticky top-0 z-40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex-wrap gap-4">
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-[var(--accent-red)] to-[#500000] flex items-center justify-center clip-button border border-[var(--accent-red)] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,30,56,0.4)]">
              <span className="text-white font-black text-lg sm:text-2xl italic tracking-tighter">SP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-black text-white text-kinetic tracking-wider">Sailor Piece Wiki</span>
              <span className="text-[8px] sm:text-[10px] text-[var(--accent-gold)] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-black w-max">{t.subtitle}</span>
            </div>
          </Link>
          <div className="flex gap-3 sm:gap-6 items-center flex-wrap">
            {/* Animated Search Bar with Live Results Dropdown */}
            <div className="relative group hidden md:block z-50">
               <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  placeholder={t.searchPlaceholder} 
                  className="bg-black/50 border border-[var(--border-action)] text-white text-sm italic font-black tracking-widest px-4 py-2 sm:py-2.5 w-48 focus:w-64 focus:bg-black focus:border-[var(--accent-gold)] clip-button outline-none transition-all duration-300 placeholder-gray-500 focus:placeholder-[var(--accent-gold)] shadow-[inset_0_0_10px_rgba(255,30,56,0.1)] focus:shadow-[0_0_15px_rgba(255,184,0,0.3)] relative z-20"
               />
               <Search className="absolute right-4 top-2.5 sm:top-3 w-4 h-4 text-gray-400 group-focus-within:text-[var(--accent-gold)] group-focus-within:icon-glow-gold transition-all pointer-events-none z-30" strokeWidth={3} />

               {/* Live Search Interactive Window */}
               {isSearchFocused && searchQuery.trim().length > 0 && (
                  <div className="absolute top-[48px] -right-4 w-[340px] bg-black/95 border-2 border-[var(--border-action)] shadow-[0_20px_50px_rgba(0,0,0,1)] clip-diagonal z-[100] p-3 backdrop-blur-xl">
                     <div className="text-[10px] text-[var(--accent-gold)] font-black uppercase tracking-[0.2em] mb-2 px-2 border-b border-gray-800 pb-2">
                        {lang === "th" ? "🔥 ผลการค้นหา" : "🔥 Search Results"}
                     </div>
                     <div className="flex flex-col gap-1 max-h-[300px] overflow-y-auto custom-scrollbar pr-1">
                        {searchResults.length > 0 ? (
                           searchResults.map((res, i) => (
                              <Link key={i} href={res.link} className="block px-3 py-2 hover:bg-[var(--accent-red)]/10 border-l-4 border-transparent hover:border-l-[var(--accent-red)] transition-all group/item rounded-sm">
                                 <div className="text-white font-bold text-[13px] italic tracking-wide group-hover/item:text-[var(--accent-gold)] transition-colors">{res.title}</div>
                                 <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-0.5">{res.type}</div>
                              </Link>
                           ))
                        ) : (
                           <div className="px-3 py-6 text-gray-400 text-xs italic font-semibold text-center border border-dashed border-gray-800 m-1 bg-black/30">
                              {lang === "th" ? "ไม่พบข้อมูลที่คุณค้นหา..." : "No matching entries found..."}
                           </div>
                        )}
                     </div>
                  </div>
               )}
            </div>

            {/* Language Toggle Button */}
            <button 
               onClick={() => setLang(lang === "th" ? "en" : "th")}
               className="text-white font-black tracking-widest clip-button px-3 sm:px-5 py-2 border-2 border-white/50 hover:border-white hover:bg-[var(--accent-gold)] hover:border-[var(--accent-gold)] hover:text-black hover:shadow-[0_0_15px_rgba(255,184,0,0.4)] transition-all text-xs sm:text-sm mr-2 flex items-center gap-2 group"
               title="Toggle Language"
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
        </nav>

        {/* Hero Section */}
        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-8 sm:mt-16 z-10 relative">
          <div className="panel-action clip-diagonal p-8 sm:p-12 lg:p-20 relative overflow-hidden flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
            <div className="absolute top-0 right-0 w-full md:w-3/5 h-1/2 md:h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center md:bg-left-top mix-blend-luminosity brightness-[0.6] md:brightness-75" style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 60%)" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[var(--bg-dark)] via-[var(--bg-dark)]/95 to-transparent pointer-events-none"></div>
            <div className="absolute -left-[10%] -top-[10%] md:-left-[20%] md:-top-[20%] w-[100%] md:w-[60%] h-[140%] bg-[var(--accent-red)] opacity-[0.03] md:opacity-5 blur-[80px] md:blur-[120px] pointer-events-none rounded-full"></div>

            <div className="flex-1 relative z-10 w-full mb-4 md:mb-8 text-center md:text-left">
              <div className="inline-flex flex-wrap justify-center md:justify-start items-center gap-3 mb-6">
                 <div className="px-4 py-1.5 sm:px-5 sm:py-2 border border-[var(--accent-gold)] text-[var(--accent-gold)] font-black text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em] clip-button shadow-[0_0_15px_rgba(255,184,0,0.2)] bg-black/80 backdrop-blur-md flex items-center gap-2">
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--accent-gold)] animate-pulse icon-glow-gold" /> {t.guideHub}
                 </div>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-[6.5rem] lg:text-[7.5rem] leading-[1] md:leading-[0.9] text-white text-kinetic text-shadow-red mb-6 sm:mb-8 font-black">
                Sailor Piece <br className="hidden md:block" /><span className="text-[var(--accent-gold)] text-shadow-gold md:ml-0 ml-2">{t.ignited}</span>
              </h1>
              <p className="text-gray-300 w-full md:max-w-2xl text-base sm:text-lg font-medium md:font-semibold leading-relaxed mb-8 sm:mb-6 border-l-4 border-[var(--accent-red)] pl-4 sm:pl-6 bg-gradient-to-r from-[var(--accent-red)]/10 to-transparent py-4 text-justify md:text-left mx-auto md:mx-0">
                {t.heroDesc}
              </p>

              {/* Stat Boxes */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
                {[
                  { label: t.stats.pages, val: "107" },
                  { label: t.stats.categories, val: "17" },
                  { label: t.stats.searchable, val: "418" },
                  { label: t.stats.updated, val: t.date }
                ].map((stat, i) => (
                  <div key={i} className="bg-black/60 border border-[var(--border-action)] p-3 sm:p-5 clip-button text-center backdrop-blur-md hover:bg-[var(--accent-red)]/20 hover:border-[var(--accent-red)] transition-all group cursor-default">
                    <div className="text-[12px] sm:text-[14px] text-gray-400 group-hover:text-white tracking-widest font-black mb-1 sm:mb-2 transition-colors">{stat.label}</div>
                    <div className="text-xl sm:text-2xl text-white font-black italic text-shadow-red">{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Matrix */}
        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-16 sm:mt-20 z-10">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-8 pb-4 border-b-2 border-[var(--accent-red)] text-center md:text-left gap-4">
            <div>
               <span className="text-[10px] text-[var(--accent-red)] font-black tracking-[0.2em] uppercase block mb-1">{t.qaSubtitle}</span>
               <h2 className="text-3xl sm:text-4xl text-white text-kinetic text-shadow-red uppercase tracking-wide font-black">{t.qaTitle}</h2>
            </div>
            <p className="text-[var(--accent-gold)] text-sm sm:text-base italic font-bold">{t.qaDesc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t.quickItems.map((item, i) => (
              <Link key={i} href={item.href} className="group panel-action clip-diagonal !p-0 flex flex-col relative overflow-hidden bg-gradient-to-b from-black to-[var(--bg-panel)]">
                <div className="w-full h-40 sm:h-48 relative border-b-2 border-[var(--border-action)] bg-[#111]">
                  <Image src={item.img} alt={item.title} fill className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 mix-blend-screen" />
                  <div className="absolute top-4 sm:top-5 right-4 sm:right-5 bg-[var(--accent-red)] text-white font-black italic px-3 py-1 sm:px-4 sm:py-1 text-xs sm:text-sm clip-button border-2 border-[var(--accent-red)] drop-shadow-[0_0_10px_rgba(255,30,56,0.8)] z-10">
                    {t.fastAccess}
                  </div>
                </div>
                <div className="p-6 sm:p-8 relative z-10">
                  <div className={`text-[12px] font-black tracking-[0.1em] sm:tracking-[0.1em] mb-2 sm:mb-3 ${item.cat.includes('S+') ? 'rainbow-fx' : 'text-[var(--accent-gold)]'}`}>{item.cat}</div>
                  <h3 className="text-2xl sm:text-3xl text-white text-kinetic mb-3 sm:mb-4 group-hover:text-[var(--accent-red)] group-hover:translate-x-2 transition-all">{item.title}</h3>
                  <div className="w-8 sm:w-12 h-1 bg-[var(--accent-red)] group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(255,30,56,0.5)]"></div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Global Navigation Hub */}
        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-16 sm:mt-20 z-10">
          <div className="mb-6 sm:mb-8 pb-4 border-b-2 border-[var(--accent-red)] text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl text-white text-kinetic text-shadow-red uppercase tracking-wide font-black">{t.navTitle}</h2>
            <p className="text-gray-400 font-medium text-sm sm:text-base mt-1">{t.navDesc}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
             {t.navItems.map((item, i) => {
                const slug = DICT.en.navItems[i].toLowerCase().replace(/ /g, "-");
               return (
                  // <Link key={i} href={`/entries/${slug}`} className="panel-action clip-button py-3 sm:py-4 px-2 flex justify-center items-center text-center group hover:bg-[var(--accent-red)]/20"></Link>
                <Link key={i} href={`/${slug}`} className="panel-action clip-button py-3 sm:py-4 px-2 flex justify-center items-center text-center group hover:bg-[var(--accent-red)]/20">
                   <span className="font-bold text-gray-300 group-hover:text-white tracking-wider text-[12px] transition-colors">{item}</span>
                </Link>
             )})}
          </div>
        </section>

        {/* Browse the Wiki & About */}
        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-16 sm:mt-20 z-10 mb-16 sm:mb-24 flex flex-col lg:flex-row gap-10 sm:gap-12">
            
            <div className="flex-1">
               <div className="mb-6 sm:mb-8 pb-4 border-b-2 border-[var(--accent-gold)] text-center md:text-left">
                  <h2 className="text-3xl sm:text-4xl text-white text-kinetic text-shadow-gold uppercase tracking-wide font-black">{t.browseTitle}</h2>
               </div>
               <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {t.browseItems.map((item, i) => (
                     <Link key={i} href="/" className="panel-action clip-diagonal p-5 sm:p-6 group hover:translate-x-2 sm:hover:translate-x-4 border-l-4 border-l-[var(--accent-gold)] block">
                        <h4 className="text-white font-black italic text-base sm:text-lg tracking-wider mb-2 group-hover:text-[var(--accent-gold)] transition-colors">{item.title}</h4>
                        <p className="text-[12px] sm:text-[14px] text-gray-400 line-clamp-3 lg:line-clamp-none">{item.desc}</p>
                     </Link>
                  ))}
               </div>
            </div>

            <div className="flex-1">
               <div className="mb-6 sm:mb-8 pb-4 border-b-2 border-[var(--accent-red)] text-center md:text-left">
                  <h2 className="text-3xl sm:text-4xl text-white text-kinetic text-shadow-red uppercase tracking-wide font-black">{t.aboutTitle}</h2>
               </div>
               <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6">
                  <div className="panel-action clip-diagonal p-6 sm:p-8 border-l-4 border-l-[var(--accent-red)] h-full">
                     <div className="text-[12px] text-[var(--accent-red)] font-black tracking-widest mb-2">{t.about1.tag}</div>
                     <h3 className="text-xl sm:text-2xl text-white font-black italic mb-3 sm:mb-4">{t.about1.title}</h3>
                     <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{t.about1.desc}</p>
                  </div>
                  
                  <div className="panel-action clip-diagonal p-6 sm:p-8 border-l-4 border-l-[var(--accent-red)] h-full">
                     <div className="text-[12px] text-[var(--accent-red)] font-black tracking-widest mb-2">{t.about2.tag}</div>
                     <h3 className="text-xl sm:text-2xl text-white font-black italic mb-3 sm:mb-4">{t.about2.title}</h3>
                     <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{t.about2.desc}</p>
                  </div>
               </div>
            </div>
            
        </section>

      </main>
      <Footer />
    </>
  );
}
