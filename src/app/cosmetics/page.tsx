import { getSiteConfig } from "@/config/site";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sparkles, Palette, ShieldCheck, Gem } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Cosmetics / Auras | ${siteConfig.name}`,
    description: "Cosmetics, aura buffs, and crate-based stat items that support your build.",
    openGraph: {
      title: `Cosmetics / Auras | ${siteConfig.name}`,
      description: "Cosmetics, aura buffs, and crate-based stat items that support your build.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Cosmetics / Auras | ${siteConfig.name}`,
      description: "Cosmetics, aura buffs, and crate-based stat items that support your build.",
      images: [siteConfig.ogImage],
    },
  };
}

const entries = [
  {
    title: "Auras",
    eyebrow: "Cosmetics / Auras",
    count: "17 listed",
    summary: "Aura crate system, current damage bonuses, and the obtainable aura ladder in Sailor Piece.",
    href: "/entries/auras-overview",
    tone: "tone-cosmetics",
    icon: <Sparkles className="w-6 h-6 text-[var(--accent-gold)] icon-glow-gold transition-all" />
  },
  {
    title: "Cosmetics and Crates",
    eyebrow: "Cosmetics / Auras",
    count: "7",
    summary: "Stat cosmetics obtained from Cosmetic Crates, with the current rarity ladder and equip flow.",
    href: "/entries/cosmetics-overview",
    tone: "tone-cosmetics",
    icon: <Palette className="w-6 h-6 text-blue-400 icon-glow-blue transition-all" />
  },
  {
    title: "Destroyer Aura",
    eyebrow: "Cosmetics / Auras",
    count: "Crystal Defense",
    summary: "Legendary Crystal Defense shop aura sold for Crystal Coins on Punch Island, with the purchase route confirmed through the Defense Merchant.",
    href: "/entries/destroyer-aura",
    tone: "tone-cosmetics",
    icon: <Gem className="w-6 h-6 text-purple-400 icon-glow-blue transition-all" />
  },
  {
    title: "Demonic Aura",
    eyebrow: "Cosmetics / Auras",
    count: "Legendary",
    summary: "Legendary aura now confirmed by the Discord FAQ, with the rarity locked in while the exact obtainment route is still being checked live.",
    href: "/entries/demonic-aura",
    tone: "tone-cosmetics",
    icon: <ShieldCheck className="w-6 h-6 text-[var(--accent-red)] icon-glow-red transition-all" />
  }
];

export default function CosmeticsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-vignette opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,184,0,0.1),transparent_70%)]" />
      </div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 block">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 font-mono opacity-80">
          <Link href="/" className="hover:text-[var(--accent-red)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Cosmetics / Auras</span>
        </div>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="panel-action clip-diagonal p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-black to-[var(--bg-panel)]">
            <div className="absolute top-0 right-0 w-3/5 h-full bg-[url('/images/site/sailorpiece-wiki-cover-v2.webp')] bg-cover bg-center brightness-[0.3] mix-blend-overlay" style={{ WebkitMaskImage: "linear-gradient(to left, black, transparent)" }}></div>
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-gold)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,184,0,0.2)]">
                Wiki Category
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tight" style={{ textShadow: "3px 3px 0px rgba(255, 184, 0, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
                Cosmetics / Auras
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-gold)] pl-6 bg-black/30 py-4">
                Cosmetics, aura buffs, and crate-based stat items that support your build.
              </p>
              
              <div className="flex gap-6 mt-10">
                <div className="flex flex-col border-r border-white/10 pr-8">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Entries</span>
                  <span className="text-2xl text-white font-black italic">4</span>
                </div>
                <div className="flex flex-col border-r border-white/10 pr-8">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Start Here</span>
                  <span className="text-2xl text-white font-black italic underline decoration-[var(--accent-gold)]">Auras</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Status</span>
                  <span className="text-2xl text-[var(--accent-gold)] font-black italic uppercase">Growing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Entry Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {entries.map((entry, i) => (
              <Link key={i} href={entry.href} className="group panel-action clip-diagonal !p-0 flex flex-col relative overflow-hidden bg-gradient-to-b from-black/80 to-[var(--bg-panel)] hover:border-[var(--accent-gold)] transition-all">
                <div className="p-8 sm:p-10 relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[var(--accent-gold)] font-black tracking-[0.2em] uppercase">{entry.eyebrow}</span>
                      <span className="text-[10px] text-gray-500 font-bold uppercase mt-1 italic">{entry.count}</span>
                    </div>
                    <div className="icon-premium-wrapper group-hover:border-[var(--accent-gold)] group-hover:bg-[var(--accent-gold)]/10 transition-all">
                      {entry.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-white text-kinetic mb-4 group-hover:text-[var(--accent-gold)] transition-all">{entry.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{entry.summary}</p>
                  <div className="mt-auto">
                    <span className="inline-block px-6 py-2 bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest clip-button group-hover:bg-[var(--accent-gold)] group-hover:text-black group-hover:border-transparent transition-all">
                      Open page
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Verification Section */}
        <section className="mb-12">
          <div className="panel-action clip-diagonal p-8 sm:p-10 relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[var(--accent-gold)] opacity-[0.03] blur-3xl rounded-full group-hover:opacity-10 transition-opacity"></div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="text-[10px] text-[var(--accent-gold)] font-black tracking-[0.2em] uppercase mb-4">Verification</div>
                <h2 className="text-3xl md:text-4xl font-black text-white text-kinetic mb-6 uppercase leading-tight">Cross-checked against <br /><span className="text-[var(--accent-gold)]">live game info</span></h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-[var(--accent-gold)] pl-6 italic">
                  How the Cosmetics / Auras section is checked: We maintain accuracy by cross-referencing with official Discord channels and in-game tests.
                </p>
              </div>
              <div className="flex-1 w-full">
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Pages are checked against live in-game routing, NPC locations, and item costs.",
                    "The wiki cross-checks the Sailor Piece Discord server and FAQ answers.",
                    "Multiple published sources are compared when public guides disagree.",
                    "Discord updates and in-game checks help confirm what is still current.",
                    "Report outdated routes via Discord to have them rechecked quickly."
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4 text-xs font-semibold text-gray-300 bg-white/5 p-4 border border-white/5 clip-button hover:bg-white/10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_rgba(255,184,0,0.8)]"></div>
                      <span>{text}</span>
                    </li>
                  ))}
                  <li className="mt-2">
                    <Link href="/contact" className="text-[var(--accent-gold)] font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
                      Open contact page <span className="text-lg">→</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
