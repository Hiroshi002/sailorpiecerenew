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
    title: `Sailor Piece Materials | ${siteConfig.name}`,
    description: "Sailor Piece materials guide with NPC material drop chances, including Guild Key drop chance, Dominion Brand drop chance, Relic Part drop chances, chest contents, and rare item sources.",
    openGraph: {
      title: `Sailor Piece Materials | ${siteConfig.name}`,
      description: "Sailor Piece materials guide with NPC material drop chances, including Guild Key drop chance, Dominion Brand drop chance, Relic Part drop chances, chest contents, and rare item sources.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Sailor Piece Materials | ${siteConfig.name}`,
      description: "Sailor Piece materials guide with NPC material drop chances, including Guild Key drop chance, Dominion Brand drop chance, Relic Part drop chances, chest contents, and rare item sources.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Rarity bands",
    "value": "Rare to Secret"
  },
  {
    "label": "Starter mats",
    "value": "Wood, Iron, Obsidian, Mythril"
  },
  {
    "label": "Best overlap route",
    "value": "Lawless and Ninja"
  },
  {
    "label": "Biggest sink",
    "value": "Weapon and melee upgrades"
  }
];

const facts = [
  "Most basic crafting materials come from normal mob farming, while the best upgrade materials are tied to bosses, dungeons, or endgame islands.",
  "Boss materials usually matter twice: once for the base weapon or melee unlock, and again for later F move or evolution routes.",
  "Power Shards, Passive Shards, Boss Keys, Dungeon Keys, and Tokens act like progression currencies even when they are listed as items.",
  "Chest contents and chest reward odds listed on this page are treated as fixed base values and are not affected by luck.",
  "This page also tracks the current Guild Key drop chance range, Dominion Brand drop chance, and Relic Part #1 to #8 drop chances from the published Sea 2 NPC routes.",
  "Blue Planet Raid Shop prices are now captured in Raid Coins, including chests, rerolls, keys, Dual Outfit, Celestial Aura, Aura Crate, and Cosmetic Crate."
];

const materialCategories = [
  {
    title: "Common and Uncommon Materials",
    rarity: "common",
    items: [
      { name: "Wood", source: "Any enemy in the game", use: "Starter crafting and low-end recipes" },
      { name: "Iron", source: "Jungle Island enemies and above", use: "Mid-game crafting routes" },
      { name: "Obsidian", source: "Desert Island enemies and above", use: "Crafting and early blessing materials" },
      { name: "Mythril", source: "Desert Island enemies and above", use: "Blessing your sword and higher-end crafting" },
      { name: "Adamantite", source: "Snow/Hollow enemies (<1%)", use: "High-end melee upgrades and late-game recipes" }
    ]
  },
  {
    title: "Rare Materials",
    rarity: "rare",
    items: [
      { name: "Energy Core", source: "Yuji Boss (25%)", use: "Yuji fighting style route" },
      { name: "Heart", source: "Cupid Striker / Madoka Boss", use: "Madoka fighting style route" },
      { name: "Broken Sword", source: "Sword enemies (0.335% - 4%)", use: "Divine Grail and Babylon Key routes" },
      { name: "Worthiness Fragment", source: "Hollow enemies (1.23%)", use: "Manipulator Sword questline" }
    ]
  },
  {
    title: "Epic Materials",
    rarity: "epic",
    items: [
      { name: "Abyss Edge", source: "Solo Hunter / Jinwoo (17.5%)", use: "Base Jinwoo sword unlock" },
      { name: "Void Fragment", source: "Gojo Boss (20%)", use: "Gojo fighting style and ascension" },
      { name: "Cursed Finger", source: "Sukuna Boss (20%)", use: "Sukuna fighting style" },
      { name: "Awakened Cursed Finger", source: "Strongest in History (15-25%)", use: "Sukuna evolution route" },
      { name: "Battle Shard", source: "Ice Queen Boss (16%)", use: "Ice Queen sword purchase" },
      { name: "Flash Impact", source: "Yuji Boss (9%)", use: "Yuji fighting style" },
      { name: "Sage Pulse", source: "Rimuru Boss (13.5-22.5%)", use: "Rimuru sword route" },
      { name: "Mirage Pendant", source: "Aizen Boss (20%)", use: "Manipulator Sword purchase" },
      { name: "Magic Shard", source: "Atomic Boss (8.75-12.5%)", use: "Atomic sword evolution" },
      { name: "Demon Remnant", source: "Moon Slayer Boss (8.91%)", use: "Moon Slayer style unlock" }
    ]
  },
  {
    title: "Progression & Currencies",
    rarity: "legendary",
    items: [
      { name: "Power Shard", source: "All NPC mobs", use: "Power rerolls on Lawless Island" },
      { name: "Boss Key", source: "Quest NPC rewards", use: "Summoning bosses on Boss Island" },
      { name: "Dungeon Key", source: "Boss and chest drops", use: "Entering dungeons" },
      { name: "Boss Ticket", source: "Defeated bosses", use: "Boss Ticket Exchange shop" },
      { name: "Raid Coin", source: "Raid clears", use: "Raid Shop (Blue Planet)" }
    ]
  }
];

const relatedPages = [
  {
    "href": "/entries/weapons-overview/index",
    "title": "Weapons and Swords",
    "summary": "Current sword roster and progression routes, from starter sellers to late-game upgrade chains."
  },
  {
    "href": "/entries/specs-overview/index",
    "title": "Melees and Fighting Styles",
    "summary": "Current melee roster in Sailor Piece and the shared way fighting styles scale."
  },
  {
    "href": "/entries/blessings-system/index",
    "title": "Blessings System",
    "summary": "Shibuya Station upgrade system for swords and specs."
  },
  {
    "href": "/entries/spec-passives-overview/index",
    "title": "Spec Passives",
    "summary": "Judgement Island passive system that adds a rerolled buff layer."
  },
  {
    "href": "/entries/runes-overview/index",
    "title": "Runes",
    "summary": "Rune Dungeon and Infinite Tower rune system, leveling, and strongest routes."
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
          <span className="text-gray-300">Materials Overview</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Materials Overview
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Current material rarities, chest contents, drop sources, tracked rates, and what each item is used for, including NPC material drop chances for Guild Key, Dominion Brand, Relic Parts, Bloodline Stone, and other rare Sea 2 items.
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

        {/* Material Categories */}
        <div className="space-y-10 mb-12">
          {materialCategories.map((category, i) => (
            <div key={i} className="panel-action clip-diagonal p-8 relative overflow-hidden group">
              <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4 flex items-center gap-4">
                {category.title}
                <span className={`text-[10px] px-2 py-0.5 rounded border border-white/10 font-mono uppercase tracking-widest rarity-${category.rarity}`}>
                  {category.rarity}
                </span>
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                      <th className="py-4 px-4">Material</th>
                      <th className="py-4 px-4">Farming Source</th>
                      <th className="py-4 px-4">Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {category.items.map((item, j) => (
                      <tr key={j} className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-bold text-white">{item.name}</td>
                        <td className="py-4 px-4 text-[var(--accent-red)] text-sm font-semibold">{item.source}</td>
                        <td className="py-4 px-4 text-gray-400 text-sm italic">{item.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
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
