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
    title: `Runes | ${siteConfig.name}`,
    description: "Rune Dungeon and Infinite Tower rune system, including current rune tiers, leveling, and the strongest rune routes.",
    openGraph: {
      title: `Runes | ${siteConfig.name}`,
      description: "Rune Dungeon and Infinite Tower rune system, including current rune tiers, leveling, and the strongest rune routes.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Runes | ${siteConfig.name}`,
      description: "Rune Dungeon and Infinite Tower rune system, including current rune tiers, leveling, and the strongest rune routes.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Current rune count",
    "value": "11"
  },
  {
    "label": "Main source",
    "value": "Rune Dungeon for non-secret runes"
  },
  {
    "label": "Secret rune source",
    "value": "Infinite Tower"
  },
  {
    "label": "Rune level cap",
    "value": "60"
  },
  {
    "label": "Rune EXP to max",
    "value": "700 total rune drops"
  },
  {
    "label": "Max scaling",
    "value": "1.6x base effect"
  },
  {
    "label": "Secret pity ladder",
    "value": "Radiant 6,000, Primordial 7,500 floors"
  }
];

const facts = [
  "Runes are equipable passive items that boost damage, survivability, or luck.",
  "The main rune pool comes from Rune Dungeons, while the two secret runes are tied to Infinite Tower.",
  "Rune Dungeon drop chance scales with both difficulty and the later waves of a run, so W15 on Extreme is much better than early waves on Easy.",
  "Primordial Rune and Radiant Rune sit at the top of current rune rankings, while Havoc Rune is the strongest non-secret damage rune in current tier lists.",
  "Secret runes now also have an Infinite Tower pity tracker that adds +1 pity per cleared floor, with Radiant guaranteed at 6,000 floors and Primordial guaranteed at 7,500 floors."
];

const howItWorks = [
  "Runes have their own inventory category; open your inventory, scroll right to the Runes section, and equip one rune at a time.",
  "Most runes drop from Rune Dungeons, which have Easy, Medium, Hard, and Extreme difficulty settings and 15 waves each run.",
  "Published rune chance notes usually use W1, W5, W10, and W15 as the shorthand checkpoints for each run.",
  "Secret runes are separate from the normal dungeon pool and come from Infinite Tower instead, not Rune Dungeon."
];

const unlockSteps = [
  "Get a Dungeon Key from world bosses such as Saber, Sukuna, Gojo, and other boss routes that drop keys.",
  "Use a portal to reach Dungeon Island and talk to the Dungeon Master NPC.",
  "Finish the unlock quest by collecting six Dungeon Puzzle Pieces and defeating 25 Bosses.",
  "You need to be at least level 5,000 before you can start the Rune Dungeon route."
];

const runeTiers = [
  { name: "Primordial Rune", rarity: "secret", tier: "S+", effect: "75% - 120% Damage", why: "Best overall damage rune for max DPS builds." },
  { name: "Radiant Rune", rarity: "secret", tier: "S", effect: "17.5% - 28% Luck", why: "Top luck rune for drop and crate farming." },
  { name: "Havoc Rune", rarity: "mythical", tier: "S", effect: "55% - 88% Damage", why: "Best non-secret damage rune." },
  { name: "Wrath Rune", rarity: "mythical", tier: "A", effect: "40% - 64% Damage", why: "Very strong raw damage and easier to get than Havoc." },
  { name: "Fortune Rune", rarity: "mythical", tier: "A", effect: "10% - 16% Luck", why: "Best non-secret luck option." },
  { name: "Destruction Rune", rarity: "legendary", tier: "B", effect: "25% - 40% Damage", why: "Strong direct damage bridge rune." },
  { name: "Inferno Rune", rarity: "mythical", tier: "C", effect: "Burn 70% - 112% DMG", why: "Decent burn damage over time." },
  { name: "Blood Rune", rarity: "mythical", tier: "C", effect: "Bleed 65% - 97% DMG", why: "Useful bleed effect but trails raw damage." },
  { name: "Frost Rune", rarity: "legendary", tier: "C", effect: "Freeze + 30-48% DMG", why: "Utility freeze with some damage." },
  { name: "Guardian Rune", rarity: "epic", tier: "C", effect: "39% - 62.4% HP", why: "Solid health padding." },
  { name: "Suppression Rune", rarity: "rare", tier: "D", effect: "10% - 16% Reduction", why: "Lowest-impact defensive rune." }
];

const levelingRules = [
  "Max Rune Level is 60.",
  "Any rune you obtain adds +1 Rune EXP, no matter which rune type or rarity it is.",
  "You need 700 total rune drops to reach max Rune Level.",
  "Each Rune Level adds +1% potency, so Rune Level 60 gives a 1.6x multiplier to a rune's base effect.",
  "Rune Level is shared across your rune collection, so your total rune drops decide how effective every equipped rune becomes."
];

const relatedPages = [
  {
    "href": "/entries/dungeons-overview/index",
    "title": "Dungeons",
    "summary": "Dungeon unlock steps, key farming, and the current Shadow, Rune, and Double dungeon routes."
  },
  {
    "href": "/entries/infinite-tower/index",
    "title": "Infinite Tower",
    "summary": "Tower Island endgame mode with scaling floors, rewards, and secret runes."
  },
  {
    "href": "/entries/material-sourcing/index",
    "title": "Materials Overview",
    "summary": "Current material rarities, drop sources, and tracked rates for rare Sea 2 items."
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
          <span className="text-gray-300">Runes</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Runes
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Rune Dungeon and Infinite Tower rune system, including current rune tiers, leveling, and the strongest rune routes.
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

        {/* How It Works & Unlock */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">How Runes Work</h2>
            <ul className="space-y-4">
              {howItWorks.map((step, i) => (
                <li key={i} className="text-sm text-gray-400 leading-relaxed pl-4 border-l-2 border-[var(--accent-red)]/30">
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">How to Unlock</h2>
            <ul className="space-y-4">
              {unlockSteps.map((step, i) => (
                <li key={i} className="text-sm text-gray-400 leading-relaxed pl-4 border-l-2 border-blue-500/30">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rune Tier Table */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4 text-center">Current Rune Tier Order</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                  <th className="py-4 px-4">Rune</th>
                  <th className="py-4 px-4">Tier</th>
                  <th className="py-4 px-4">Effect (Base - Max)</th>
                  <th className="py-4 px-4">Why players use it</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {runeTiers.map((rune, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className={`text-[10px] px-2 py-0.5 rounded border border-white/10 font-mono uppercase tracking-widest rarity-${rune.rarity}`}>
                          {rune.rarity}
                        </span>
                        <span className="font-bold text-white">{rune.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-black text-xl italic text-kinetic">
                      <span className={`tier-${rune.tier.toLowerCase().replace('+', '-plus')}`}>{rune.tier}</span>
                    </td>
                    <td className="py-4 px-4 text-[var(--accent-red)] text-sm font-bold font-mono">{rune.effect}</td>
                    <td className="py-4 px-4 text-gray-400 text-xs italic">{rune.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Leveling Rules */}
        <div className="panel-action clip-diagonal p-8 mb-12 relative overflow-hidden group">
          <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">Global Rune Leveling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {levelingRules.map((rule, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                  <span className="text-2xl font-black text-[var(--accent-red)] opacity-50">0{i + 1}</span>
                  <p className="text-sm text-gray-300">{rule}</p>
                </div>
              ))}
            </div>
            <div className="bg-black/40 rounded-xl p-8 border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-center">
              <div className="text-[var(--accent-red)] text-5xl font-black mb-4">1.6x</div>
              <div className="text-white font-bold uppercase tracking-widest mb-2">Maximum Multiplier</div>
              <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                Reached at Rune Level 60 (700 total drops). This multiplier applies to the base stat of every rune you own.
              </p>
            </div>
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
