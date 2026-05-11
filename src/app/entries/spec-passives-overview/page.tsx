import { getSiteConfig } from "@/config/site";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import VideoMovesetCard from "@/components/VideoMovesetCard";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Spec Passives | ${siteConfig.name}`,
    description: "Judgement Island passive system that adds a rerolled buff layer onto your swords and fighting styles.",
    openGraph: {
      title: `Spec Passives | ${siteConfig.name}`,
      description: "Judgement Island passive system that adds a rerolled buff layer onto your swords and fighting styles.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Spec Passives | ${siteConfig.name}`,
      description: "Judgement Island passive system that adds a rerolled buff layer onto your swords and fighting styles.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Unlock level",
    "value": "10,000"
  },
  {
    "label": "Unlock cost",
    "value": "5,000 Gems"
  },
  {
    "label": "Reroll item",
    "value": "Passive Shards"
  },
  {
    "label": "Pity",
    "value": "Guaranteed Mythical at 500 rerolls"
  }
];

const facts = [
  "Spec Passives are a separate late-game system and are not the melee category itself.",
  "The system unlocks at Judgement Island after reaching level 10,000 and paying 5,000 Gems.",
  "Once unlocked, you can apply rerolled passives onto swords and fighting styles using Passive Shards.",
  "You can only have one active spec passive at a time per slot (one for your sword, one for your style)."
];

const rarityOdds = [
  { rarity: "common", chance: "50.05%" },
  { rarity: "uncommon", chance: "28.75%" },
  { rarity: "rare", chance: "15%" },
  { rarity: "epic", chance: "5%" },
  { rarity: "legendary", chance: "1%" },
  { rarity: "mythical", chance: "0.2%" }
];

const topPassives = [
  {
    name: "Fortune Chosen",
    rarity: "mythical",
    effects: "17.5% to 30% chance for +1 Drop, 5% to 10% Luck, 5% to 12.5% Damage"
  },
  {
    name: "Executioner",
    rarity: "mythical",
    effects: "30% to 45% damage to NPCs below 50% HP, 2% to 4% Crit Chance, 7.5% to 15% Crit Damage"
  },
  {
    name: "Rampage",
    rarity: "mythical",
    effects: "15% to 30% Damage, 2% to 4% Crit Rate, 5% to 10% Crit Damage, plus stacking hit damage up to 1.15x to 1.30x"
  },
  {
    name: "Berserker",
    rarity: "mythical",
    effects: "25% to 45% Damage, -10% HP penalty, 5% to 10% Crit Damage"
  }
];

const passiveFamilies = [
  { family: "Damage I to V", range: "5% to 35% Damage" },
  { family: "Crit Chance I to V", range: "0.25% to 5% Crit Chance" },
  { family: "Crit Damage I to V", range: "1% to 18% Crit Damage" },
  { family: "Luck I to V", range: "1% to 15% Luck" }
];

const relatedPages = [
  {
    "href": "/entries/specs-overview/index",
    "title": "Melees and Fighting Styles",
    "summary": "Current melee roster in Sailor Piece and shared scaling logic."
  },
  {
    "href": "/entries/blessings-system/index",
    "title": "Blessings System",
    "summary": "Shibuya Station upgrade system for swords and specs."
  },
  {
    "href": "/entries/power-system-overview/index",
    "title": "Power System",
    "summary": "Lawless Island system that rolls build-wide power traits."
  }
];

export default function EntryPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-vignette opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,30,56,0.1),transparent_70%)]" />
      </div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 block">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 font-mono opacity-80">
          <Link href="/" className="hover:text-[var(--accent-red)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/entries" className="hover:text-[var(--accent-red)] transition-colors">Entries</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Spec Passives</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Spec Passives
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Judgement Island passive system that adds a rerolled buff layer onto your swords and fighting styles.
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
          
          <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(255,30,56,0.2)] bg-black relative aspect-square">
            <Image 
              src="/images/site/sailorpiece-wiki-cover-v2.webp" 
              alt="Hero Image Placeholder" 
              fill
              className="object-contain p-4 opacity-90 transition-opacity duration-500 hover:opacity-100"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* Content Section: Overview */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)] opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">Overview</h2>
            <ul className="space-y-4">
              {facts.map((fact, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--accent-red)] shrink-0 shadow-[0_0_10px_rgba(255,30,56,0.5)]" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rarity Odds & Families */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Rarity Odds Table */}
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Rarity Odds</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-xs uppercase">
                    <th className="py-3 px-2">Rarity</th>
                    <th className="py-3 px-2">Chance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {rarityOdds.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2">
                        <span className={`text-[10px] px-2 py-0.5 rounded border border-white/10 font-mono uppercase tracking-widest rarity-${row.rarity}`}>
                          {row.rarity}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-white font-mono">{row.chance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Passive Families */}
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Passive Families</h2>
            <div className="space-y-4">
              {passiveFamilies.map((family, i) => (
                <div key={i} className="flex justify-between items-center bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[var(--accent-red)]/30 transition-colors">
                  <span className="font-bold text-white uppercase text-sm tracking-tight">{family.family}</span>
                  <span className="text-[var(--accent-red)] font-mono text-xs">{family.range}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Passive Rolls */}
        <div className="panel-action clip-diagonal p-8 mb-12 relative overflow-hidden group">
          <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">Top Passive Rolls (Mythical)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topPassives.map((passive, i) => (
              <div key={i} className="bg-black/40 border border-white/10 p-6 rounded-xl hover:border-[var(--accent-red)]/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight">{passive.name}</h3>
                  <span className="text-[9px] px-2 py-0.5 rounded border border-purple-500/50 text-purple-400 font-mono uppercase tracking-widest bg-purple-500/10">
                    {passive.rarity}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed italic border-l-2 border-[var(--accent-red)] pl-4">
                  {passive.effects}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Related Pages */}
        {relatedPages.length > 0 && (
          <div className="panel-action clip-diagonal p-8 mb-12 relative overflow-hidden group">
            <div className="mb-4 relative z-10">
              <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Related Pages</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedPages.map((page, i) => (
                  <Link
                    key={i}
                    href={page.href}
                    className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent-red)] transition-all duration-300 hover:scale-105 block"
                  >
                    <strong className="block text-sm font-bold text-white group-hover:text-[var(--accent-red)] transition-colors mb-2">{page.title}</strong>
                    <span className="text-xs text-gray-400">{page.summary}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        
      </main>

      <Footer />
    </div>
  );
}
