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
    title: `Auras | ${siteConfig.name}`,
    description: "Aura crate system, current damage bonuses, and the obtainable aura ladder in Sailor Piece.",
    openGraph: {
      title: `Auras | ${siteConfig.name}`,
      description: "Aura crate system, current damage bonuses, and the obtainable aura ladder in Sailor Piece.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Auras | ${siteConfig.name}`,
      description: "Aura crate system, current damage bonuses, and the obtainable aura ladder in Sailor Piece.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Main source",
    "value": "17 listed"
  },
  {
    "label": "Buff type",
    "value": "Damage"
  },
  {
    "label": "Equip tab",
    "value": "Inventory > Auras"
  },
  {
    "label": "Unobtainable aura",
    "value": "Valentine Aura"
  },
  {
    "label": "Newest confirmed auras",
    "value": "Destroyer, Demonic, Celestial, Monster"
  }
];

const facts = [
  "Auras are separate from cosmetics and mainly serve as damage-boosting visual effects.",
  "Most current auras come from Aura Crates, while some older event auras are no longer obtainable.",
  "Aura damage buffs are tracked as a flat damage increase based on rarity.",
  "Destroyer Aura is now confirmed as the Crystal Defense reward (2,000 Crystal Coins).",
  "Celestial Aura drops from the Minotaur Raid (up to 0.42% on Extreme at 100% luck)."
];

const updateNotes = [
  { aura: "Celestial Aura", status: "Legendary (+15% Damage). Minotaur Raid direct drop." },
  { aura: "Monster Aura", status: "Legendary (+15% Damage). Obtainment route being checked." },
  { aura: "Guild Auras", status: "4 new guild leaderboard auras confirmed as rewards." },
  { aura: "Easter Event", status: "Ended. Petal and Sacred Bloom auras are now historical." }
];

const auraList = [
  { name: "Destroyer Aura", rarity: "Legendary", buff: "+15% Damage", status: "Obtainable" },
  { name: "Celestial Aura", rarity: "Legendary", buff: "+15% Damage", status: "Obtainable" },
  { name: "Monster Aura", rarity: "Legendary", buff: "+15% Damage", status: "Obtainable" },
  { name: "Demonic Aura", rarity: "Legendary", buff: "+15% Damage", status: "Obtainable" },
  { name: "Hellfire Aura", rarity: "Legendary", buff: "+15% Damage", status: "Obtainable" },
  { name: "Saiyyan Aura", rarity: "Legendary", buff: "+15% Damage", status: "Obtainable" },
  { name: "Fallen Angel", rarity: "Legendary", buff: "+15% Damage", status: "Obtainable" },
  { name: "Corrupted", rarity: "Epic", buff: "+12.5% Damage", status: "Obtainable" },
  { name: "Ultra Instinct", rarity: "Epic", buff: "+12.5% Damage", status: "Obtainable" },
  { name: "Commander", rarity: "Epic", buff: "+12.5% Damage", status: "Obtainable" },
  { name: "Singer", rarity: "Rare", buff: "+10% Damage", status: "Obtainable" },
  { name: "Gambler", rarity: "Rare", buff: "+10% Damage", status: "Obtainable" },
  { name: "Glitch Aura", rarity: "Rare", buff: "+10% Damage", status: "Obtainable" },
  { name: "Valentine Aura", rarity: "Rare", buff: "+10% Damage", status: "Unobtainable" },
  { name: "Rose", rarity: "Uncommon", buff: "+7.5% Damage", status: "Obtainable" },
  { name: "Alter", rarity: "Common", buff: "+5% Damage", status: "Obtainable" }
];

const howToGet = [
  "Aura Crates drop from mobs, mini-bosses, and world bosses.",
  "Destroyer Aura is sold by the Defense Merchant for 2,000 Crystal Coins.",
  "Celestial Aura drops directly from the Minotaur Raid.",
  "Guild Leaderboard rewards now include 4 exclusive auras."
];

const howToEquip = [
  "Open inventory and switch to the Aura tab.",
  "Select the aura you want to activate.",
  "Only one aura buff can be active at a time."
];

const moveset: any[] = [];

const routeDetails: any[] = [];

const relatedPages = [
  {
    "href": "/entries/cosmetics-overview/index",
    "title": "Cosmetics and Crates",
    "summary": "Stat cosmetics obtained from Cosmetic Crates, with the current rarity ladder and equip flow."
  },
  {
    "href": "/entries/accessories-overview/index",
    "title": "Accessories",
    "summary": "Boss-drop and shop accessories with current stats, obtainment routes, and the accessory pieces players build around in late game."
  },
  {
    "href": "/entries/crystal-defense/index",
    "title": "Crystal Defense",
    "summary": "Punch Island survival mode with 1 Crystal Key entry, boss waves every 5 rounds, a leaderboard, and separate shop and upgrade-shop layers."
  },
  {
    "href": "/entries/demonic-aura/index",
    "title": "Demonic Aura",
    "summary": "Legendary aura now confirmed from the Discord FAQ, with the exact obtainment route still being checked live."
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
          <span className="text-gray-300">Auras</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Auras
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Aura crate system, current damage bonuses, and the obtainable aura ladder in Sailor Piece.
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
            <ul className="space-y-6">
              {facts.map((fact, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 group/item transition-colors hover:text-white">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--accent-red)] shadow-[0_0_10px_rgba(255,30,56,0.5)] shrink-0" />
                  <span className="text-lg leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Current Update Notes */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Current Update Notes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {updateNotes.map((note, i) => (
                <div key={i} className="bg-black/40 border border-white/10 p-4 rounded-xl">
                  <div className="text-[var(--accent-red)] font-bold mb-1 uppercase text-sm">{note.aura}</div>
                  <div className="text-gray-300 text-sm">{note.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Aura List */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Current Aura List</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Aura Name</th>
                    <th className="py-4 px-4">Rarity</th>
                    <th className="py-4 px-4">Damage Buff</th>
                    <th className="py-4 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {auraList.map((aura, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group/row">
                      <td className="py-4 px-4 font-bold text-white group-hover/row:text-[var(--accent-red)] transition-colors">{aura.name}</td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          aura.rarity === 'Legendary' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/50' :
                          aura.rarity === 'Epic' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50' :
                          aura.rarity === 'Rare' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' :
                          'bg-gray-500/20 text-gray-400 border border-gray-500/50'
                        }`}>
                          {aura.rarity}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-mono text-[var(--accent-red)]">{aura.buff}</td>
                      <td className="py-4 px-4 text-right">
                        <span className={`text-xs ${aura.status === 'Obtainable' ? 'text-green-400' : 'text-red-400 opacity-60'}`}>
                          {aura.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Obtainment & Equip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">How to Get</h2>
            <ul className="space-y-4">
              {howToGet.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-red)] shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">How to Equip</h2>
            <ul className="space-y-4">
              {howToEquip.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Section: Route Details */}
        {routeDetails.length > 0 && (
          <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
            <div className="mb-4 relative z-10">
              <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Route Details</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                      <th className="py-4 px-4">Field</th>
                      <th className="py-4 px-4">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {routeDetails.map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="py-3 px-4 font-semibold text-blue-400">{row.field}</td>
                        <td className="py-3 px-4 text-white">
                          {row.link ? (
                            <Link href={row.link} className="text-blue-300 hover:text-blue-200 underline decoration-white/30 underline-offset-4">{row.details}</Link>
                          ) : row.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Content Section: Moveset */}
        {moveset.length > 0 && (
          <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
            <div className="mb-4 relative z-10">
              <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Moveset</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {moveset.map((move, i) => (
                  <VideoMovesetCard key={i} move={move} />
                ))}
              </div>
            </div>
          </div>
        )}
        
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
