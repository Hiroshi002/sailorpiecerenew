import { getSiteConfig } from "@/config/site";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Sailor Piece Raids | ${siteConfig.name}`,
    description: "Sailor Piece Raids guide for Blue Planet, Minotaur Raid HP by difficulty, Raid Shop prices, Raid Coins, Raid Key farming, and the current Combat fists requirement.",
    openGraph: {
      title: `Sailor Piece Raids | ${siteConfig.name}`,
      description: "Sailor Piece Raids guide for Blue Planet, Minotaur Raid HP by difficulty, Raid Shop prices, Raid Coins, Raid Key farming, and the current Combat fists requirement.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Sailor Piece Raids | ${siteConfig.name}`,
      description: "Sailor Piece Raids guide for Blue Planet, Minotaur Raid HP by difficulty, Raid Shop prices, Raid Coins, Raid Key farming, and the current Combat fists requirement.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  { label: "Mode", value: "Raids" },
  { label: "Island", value: "Blue Planet" },
  { label: "Sea", value: "Sea 2" },
  { label: "Entry item", value: "Raid Key" },
  { label: "Visible raid", value: "Minotaur Raid" },
  { label: "Shop currency", value: "Raid Coins" },
  { label: "Key source", value: "Sea 2 NPCs (Combat)" }
];

const facts = [
  "Raids are a new Sea 2 gamemode located on Blue Planet island.",
  "The raid menu shows Minotaur Raid with a Spawn button.",
  "Minotaur Raid HP: Easy >1.5T; Medium >7.5T; Hard >35T; Extreme 75T.",
  "Raids use Raid Coins as the shop currency.",
  "The Raid Shop sells Dual Outfit, Celestial Aura, rerolls, Bloodline Stone, Boss Key, Dungeon Key, Tower Key, chests, Aura Crate, and Cosmetic Crate.",
  "Dual Outfit (Accessory): 130% Def, 110% Dmg, 15% Dmg Reduction at E0.",
  "Completing Minotaur Raid can drop the Dual Swordsman title (Normal 0.85% to Extreme 2.5%).",
  "Dual Wielder sword is a direct Minotaur Raid drop (Easy 0.26% to Extreme 0.94% at 100% luck)."
];

const shopItems = [
  { item: "Dual Outfit", cost: "500 Raid Coins", note: "Accessory. 130% Def, 110% Dmg at E0." },
  { item: "Celestial Aura", cost: "2.5K Raid Coins", note: "Legendary Aura." },
  { item: "Trait Reroll", cost: "3 Raid Coins", note: "Reroll item." },
  { item: "Race Reroll", cost: "3 Raid Coins", note: "Reroll item." },
  { item: "Clan Reroll", cost: "7 Raid Coins", note: "Reroll item." },
  { item: "Bloodline Stone", cost: "11 Raid Coins", note: "Reroll item." },
  { item: "Boss Key", cost: "3 Raid Coins", note: "Entry item." },
  { item: "Dungeon Key", cost: "3 Raid Coins", note: "Entry item." },
  { item: "Tower Key", cost: "7 Raid Coins", note: "Entry item." },
  { item: "Secret Chest", cost: "400 Raid Coins", note: "Chest item." },
  { item: "Aura Crate", cost: "500 Raid Coins", note: "Crate item." },
  { item: "Cosmetic Crate", cost: "650 Raid Coins", note: "Crate item." }
];

const mechanics = [
  { step: "Phase 1", desc: "Fight normally until 50% HP." },
  { step: "Shield Phase", desc: "At 50% HP, Minotaur raises a shield in the center." },
  { step: "Lever Mechanic", desc: "Pull 3-6 random levers to drop the shield." },
  { step: "Heal Rule", desc: "Boss heals 15% HP every 30s the shield stays up." },
  { step: "Phase 2", desc: "Shield drops, boss gains new heavy attacks." }
];

const relatedPages = [
  {
    href: "/entries/sea-2",
    title: "Sea 2 Guide",
    summary: "Main Sea 2 overview page covering islands, unlock routes, bosses, and systems."
  },
  {
    href: "/entries/combat-style",
    title: "Combat Style",
    summary: "Default fist style required for farming Raid Keys from Sea 2 NPCs."
  },
  {
    href: "/entries/accessories-overview",
    title: "Accessories",
    summary: "Dual Outfit stat line, icon, and E0 to E10 comparison."
  }
];

const faq = [
  {
    q: "Where are raids in Sailor Piece?",
    a: "Raids are on Blue Planet island in Sea 2."
  },
  {
    q: "How do you get a Raid Key in Sailor Piece?",
    a: "Raid Keys drop from Sea 2 NPCs while using fists, also known as Combat."
  },
  {
    q: "What is in the Sailor Piece Raid Shop?",
    a: "The Raid Shop sells Dual Outfit, Celestial Aura, rerolls, Bloodline Stone, Boss Key, Dungeon Key, Tower Key, chests, and crates."
  },
  {
    q: "How do raids work in Sailor Piece?",
    a: "Minotaur Raid has a 50% HP shield phase where you must pull levers while the boss heals if you're too slow."
  }
];

export default function RaidsOverviewPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-purple-600 mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(147,51,234,0.1)] md:shadow-[inset_0_0_80px_rgba(147,51,234,0.15)] relative font-sans bg-slate-950">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-vignette opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(147,51,234,0.1),transparent_70%)]" />
      </div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 block">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 font-mono opacity-80">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/systems" className="hover:text-purple-400 transition-colors">Systems</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Raids</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(147,51,234,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(147, 51, 234, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Raids
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-purple-600 pl-4 backdrop-blur-sm bg-black/20 py-2">
              Sea 2 raid gamemode located on Blue Planet island, with Minotaur Raid, Raid Coins, and a Raid Shop that sells exclusive equipment and materials.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metaItems.map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                  <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(147,51,234,0.2)] bg-black relative aspect-square">
            <Image 
              src="/images/site/sailorpiecewikiv3.webp" 
              alt="Sailor Piece Wiki Raids Hero" 
              fill
              className="object-contain p-4 opacity-90 transition-opacity duration-500 hover:opacity-100"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* Overview Section */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600 opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">Overview</h2>
            <ul className="space-y-4">
              {facts.map((fact, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-purple-500 mt-1.5 shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect width="12" height="12" fill="currentColor" fillOpacity="0.2"/>
                      <rect x="3" y="3" width="6" height="6" fill="currentColor"/>
                    </svg>
                  </span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mechanics Section */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Minotaur Raid Mechanics</h2>
            <div className="grid gap-4">
              {mechanics.map((step, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold shrink-0 border border-purple-600/30">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{step.step}</h3>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shop Section */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Raid Shop</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Item</th>
                    <th className="py-4 px-4">Cost</th>
                    <th className="py-4 px-4">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {shopItems.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 text-purple-400 font-bold">{row.item}</td>
                      <td className="py-3 px-4 text-white font-mono">{row.cost}</td>
                      <td className="py-3 px-4 text-gray-400 text-sm">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">FAQ</h2>
            <div className="grid gap-6">
              {faq.map((item, i) => (
                <div key={i} className="bg-black/40 rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 shrink-0 border border-purple-600/30 text-xs">Q</span>
                    {item.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed pl-11">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Pages Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {relatedPages.map((page, i) => (
            <Link key={i} href={page.href} className="group panel-action p-6 transition-all hover:scale-[1.02] active:scale-95">
              <h4 className="text-purple-400 font-black uppercase tracking-wider mb-2 group-hover:text-purple-300 transition-colors">{page.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">{page.summary}</p>
            </Link>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
