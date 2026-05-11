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
    title: `Sailor Piece Relic Part Drop Chances | ${siteConfig.name}`,
    description: "Sea 2 relics guide for Sailor Piece with Relic Part drop chances, Relic Part #1 to #8 NPC routes, Relic Crafter recipes, and current forge details.",
    openGraph: {
      title: `Sailor Piece Relic Part Drop Chances | ${siteConfig.name}`,
      description: "Sea 2 relics guide for Sailor Piece with Relic Part drop chances, Relic Part #1 to #8 NPC routes, Relic Crafter recipes, and current forge details.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Sailor Piece Relic Part Drop Chances | ${siteConfig.name}`,
      description: "Sea 2 relics guide for Sailor Piece with Relic Part drop chances, Relic Part #1 to #8 NPC routes, Relic Crafter recipes, and current forge details.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Status",
    "value": "Sea 2 System - Live Tracking"
  },
  {
    "label": "Main NPC",
    "value": "Relic Crafter"
  },
  {
    "label": "Island",
    "value": "Bizarre Island"
  },
  {
    "label": "Crystal Relics",
    "value": "Damage (+40%), Luck (+30%)"
  }
];

const facts = [
  "Relics are one of the core progression systems introduced in Sea 2.",
  "The Relic Crafter NPC is located on Bizarre Island.",
  "Four craftable relics are currently confirmed: Luck, Damage, Crit Chance, and Crit Damage.",
  "Crystal Damage and Crystal Luck relics are rare chase drops from Crystal Defense.",
  "Relic Parts #1 through #8 drop from specific Sea 2 mobs with very low base chances."
];

const relicParts = [
  { id: "#1", source: "Delinquent", island: "Starter Sea 2", level: "12,750", chance: "0.015%", usage: "Crit Chance / Damage" },
  { id: "#2", source: "Delinquent", island: "Starter Sea 2", level: "12,750", chance: "0.0125%", usage: "Crit Chance / Crit Damage" },
  { id: "#3", source: "Strong Fighter", island: "Starter Sea 2", level: "13,000", chance: "0.01%", usage: "Damage / Crit Damage" },
  { id: "#4", source: "Strong Fighter", island: "Starter Sea 2", level: "13,000", chance: "0.009%", usage: "Crit Damage" },
  { id: "#5", source: "Strong Bandit", island: "Bizarre Island", level: "13,500", chance: "0.008%", usage: "Luck Relic" },
  { id: "#6", source: "Strong Bandit", island: "Bizarre Island", level: "13,500", chance: "0.007%", usage: "Luck Relic" },
  { id: "#7", source: "Fast Ninja", island: "Punch Island", level: "14,500", chance: "0.0075%", usage: "Damage Relic" },
  { id: "#8", source: "Fast Ninja", island: "Punch Island", level: "14,500", chance: "0.0065%", usage: "Damage Relic" }
];

const craftableRelics = [
  { name: "Luck Relic", bonus: "+20% Luck", recipe: "30 Part #5 + 25 Part #6" },
  { name: "Damage Relic", bonus: "+30% Damage", recipe: "40 Part #7 + 30 Part #8 + 50 Part #1 + 50 Part #3" },
  { name: "Crit Chance Relic", bonus: "+5% Crit Chance", recipe: "20 Part #1 + 15 Part #2" },
  { name: "Crit Damage Relic", bonus: "+15% Crit Damage", recipe: "25 Part #2 + 20 Part #3 + 15 Part #4" }
];

const crystalRelics = [
  { name: "Crystal Damage Relic", bonus: "+40% Damage", note: "Rare Crystal Defense drop (Chase item)" },
  { name: "Crystal Luck Relic", bonus: "+30% Luck", note: "Rare Crystal Defense drop (Chase item)" }
];

const moveset: any[] = [];

const routeDetails: any[] = [];

const relatedPages = [
  {
    "href": "/entries/../sea-2/index",
    "title": "Sea 2 Guide",
    "summary": "Sea 2 Bloodlines system page with the corrected confirmed stat table now tracked for Commoner, Demonblood, Hunter, Nightfall, Stormborn, Dawnbringer, Astral, Vizard, Primordial, and Demonic."
  },
  {
    "href": "/entries/../islands/index",
    "title": "All Islands and Map",
    "summary": "Interactive island hub for current Sailor Piece Sea 1 and Sea 2 areas, with progression stage, major NPCs, bosses, event hubs, and related routes."
  },
  {
    "href": "/entries/material-sourcing/index",
    "title": "Materials Overview",
    "summary": "Current material rarities, chest contents, drop sources, tracked rates, and what each item is used for, including NPC material drop chances for Guild Key, Dominion Brand, Relic Parts, Bloodline Stone, and other rare Sea 2 items."
  },
  {
    "href": "/entries/relic-parts/index",
    "title": "Relic Parts",
    "summary": "How to get Relic Parts in Sailor Piece, including Relic Part #1 to #8 drop chances, where each part drops, and which relic recipes they feed."
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
          <span className="text-gray-300">Relics</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Relics
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Sea 2 Relics system page with the Relic Crafter NPC, the currently confirmed forge recipes, and the tracked Relic Part enemy routes by island, level band, and current drop chances.
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

        {/* Crystal Defense Relics */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group border-2 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Crystal Defense Relics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {crystalRelics.map((relic, i) => (
                <div key={i} className="bg-blue-950/20 border border-blue-500/20 p-6 rounded-xl">
                  <div className="text-xl font-black text-blue-400 mb-2">{relic.name}</div>
                  <div className="text-3xl font-black text-white mb-4">{relic.bonus}</div>
                  <div className="text-sm text-gray-400 font-mono italic">{relic.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Craftable Relics */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Current Craftable Relics</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Relic</th>
                    <th className="py-4 px-4">Bonus</th>
                    <th className="py-4 px-4 text-right">Recipe</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {craftableRelics.map((relic, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group/row">
                      <td className="py-4 px-4 font-bold text-white group-hover/row:text-[var(--accent-red)] transition-colors">{relic.name}</td>
                      <td className="py-4 px-4 font-black text-[var(--accent-red)]">{relic.bonus}</td>
                      <td className="py-4 px-4 text-right text-xs text-gray-400 font-mono">{relic.recipe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Relic Part Drop Table */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Relic Part Drop Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono uppercase">
                    <th className="py-4 px-4">Part</th>
                    <th className="py-4 px-4">Source NPC</th>
                    <th className="py-4 px-4">Island</th>
                    <th className="py-4 px-4">Level</th>
                    <th className="py-4 px-4">Chance</th>
                    <th className="py-4 px-4 text-right">Used For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {relicParts.map((part, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group/row text-gray-300">
                      <td className="py-4 px-4 font-bold text-white">Relic Part {part.id}</td>
                      <td className="py-4 px-4">{part.source}</td>
                      <td className="py-4 px-4 text-xs text-gray-400">{part.island}</td>
                      <td className="py-4 px-4 font-mono">{part.level}</td>
                      <td className="py-4 px-4 font-black text-[var(--accent-red)]">{part.chance}</td>
                      <td className="py-4 px-4 text-right text-xs italic">{part.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
