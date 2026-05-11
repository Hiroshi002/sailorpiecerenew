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
    title: `Haki | ${siteConfig.name}`,
    description: "Armament, Observation, and Conqueror Haki effects, scaling, trainer locations, unlock routes, leveling, and Haki color rerolls.",
    openGraph: {
      title: `Haki | ${siteConfig.name}`,
      description: "Armament, Observation, and Conqueror Haki effects, scaling, trainer locations, unlock routes, leveling, and Haki color rerolls.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Haki | ${siteConfig.name}`,
      description: "Armament, Observation, and Conqueror Haki effects, scaling, trainer locations, unlock routes, leveling, and Haki color rerolls.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Haki types",
    "value": "3"
  },
  {
    "label": "Armament target level",
    "value": "100"
  },
  {
    "label": "Observation max level",
    "value": "50"
  },
  {
    "label": "Likely Conqueror cap",
    "value": "Around 40 to 50"
  },
  {
    "label": "Trainer islands",
    "value": "Snow Island, Desert Island, Shibuya Station"
  }
];

const facts = [
  "There are three Haki types in Sailor Piece: Armament, Observation, and Conqueror.",
  "Armament Haki is your direct damage layer, Observation Haki is your dodge layer, and Conqueror Haki is your late-game passive plus active burst layer.",
  "Armament Haki is consistently published at +25% base damage with +0.5% damage per level.",
  "Observation Haki starts with 5 dodges and gains +1 dodge every 10 levels, reaching 10 dodges at level 50.",
  "Haki Color only changes the visual effect on Armament Haki and does not add stats."
];

const hakiDetails = [
  { name: "Armament Haki", effect: "Adds a direct damage buff to your current build.", scaling: "Starts at +25% damage and gains +0.5% damage per level.", usage: "Press G to toggle it on and off." },
  { name: "Observation Haki", effect: "Adds automatic dodges against incoming attacks.", scaling: "Starts with 5 dodges and gains 1 extra dodge every 10 levels.", usage: "Press H to activate the dodge pool." },
  { name: "Conqueror Haki", effect: "Adds passive damage and an active AoE blast.", scaling: "Currently tracked at +1% damage per level up to level 35/40.", usage: "Press J to trigger the active blast." }
];

const activationKeys = [
  { type: "Armament", key: "G", note: "Can be set to auto-use in Settings." },
  { type: "Observation", key: "H", note: "Can be set to auto-use in Settings." },
  { type: "Conqueror", key: "J", note: "Manual blast or auto-use if supported." }
];

const trainers = [
  { type: "Armament", npc: "Haki Trainer", location: "Snow Island (Edge)", cost: "250k Money + 250 Gems" },
  { type: "Observation", npc: "Observation Trainer", location: "Desert Island (Balcony)", cost: "250k Money + 300 Gems" },
  { type: "Conqueror", npc: "Conqueror Trainer", location: "Shibuya Station", cost: "Fragment + Full Questline" }
];

const armamentQuest = [
  { step: "Quest 1", requirement: "Kill 150 NPCs using Combat" },
  { step: "Quest 2", requirement: "Use Combat Z skill 65 times" },
  { step: "Quest 3", requirement: "Punch 750 times using Combat" }
];

const conquerorPrereqs = [
  "Armament Haki level 40",
  "Observation Haki level 25",
  "Ascension level 5",
  "1 Conqueror Fragment"
];

const levelingInfo = [
  { type: "Armament", logic: "Kill NPCs while active.", result: "+0.5% dmg per level." },
  { type: "Observation", logic: "Dodge attacks while active.", result: "+1 dodge every 10 levels." },
  { type: "Conqueror", logic: "Level on supported builds.", result: "+1% dmg per level." }
];

const hakiColors = [
  { part: "Applies to", note: "Armament Haki only" },
  { part: "Effect", note: "Cosmetic only, no stat gain" },
  { part: "Source", note: "Rerolls from bosses/codes" },
  { part: "Chase Color", note: "Rainbow (Rare)" }
];

const moveset: any[] = [];

const routeDetails: any[] = [];

const relatedPages = [
  {
    "href": "/entries/artifacts-overview/index",
    "title": "Artifacts",
    "summary": "Artifact unlocks, ranked set bonuses, stat pools, dust upgrades, and Snow Island milestone progression."
  },
  {
    "href": "/entries/dungeons-overview/index",
    "title": "Dungeons",
    "summary": "Dungeon unlock steps, key farming, and the current Shadow, Rune, and Double dungeon routes."
  },
  {
    "href": "/entries/infinite-tower/index",
    "title": "Infinite Tower",
    "summary": "Tower Island endgame mode with scaling floors, stacking debuffs, direct floor rewards, Tower Tokens, and a backup shop."
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
          <span className="text-gray-300">Haki</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Haki
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Armament, Observation, and Conqueror Haki effects, scaling, trainer locations, unlock routes, leveling, and Haki color rerolls.
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

        {/* Haki Details */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Haki Types & Effects</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Haki</th>
                    <th className="py-4 px-4">Effect</th>
                    <th className="py-4 px-4">Scaling</th>
                    <th className="py-4 px-4 text-right">Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {hakiDetails.map((haki, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group/row">
                      <td className="py-4 px-4 font-bold text-white group-hover/row:text-[var(--accent-red)] transition-colors">{haki.name}</td>
                      <td className="py-4 px-4 text-gray-300 text-sm">{haki.effect}</td>
                      <td className="py-4 px-4 text-xs text-gray-400 font-mono italic">{haki.scaling}</td>
                      <td className="py-4 px-4 text-right font-semibold text-blue-400">{haki.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Questlines & Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Armament Quest</h2>
            <div className="space-y-4">
              {armamentQuest.map((q, i) => (
                <div key={i} className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/5">
                  <span className="text-[var(--accent-red)] font-bold">{q.step}</span>
                  <span className="text-gray-300 text-sm">{q.requirement}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Conqueror Prereqs</h2>
            <ul className="space-y-3">
              {conquerorPrereqs.map((p, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trainers & Locations */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Trainers & Locations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {trainers.map((t, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-[var(--accent-red)] transition-all">
                  <div className="text-xs text-gray-400 uppercase font-mono mb-2">{t.type}</div>
                  <div className="text-lg font-black text-white mb-2">{t.npc}</div>
                  <div className="text-sm text-blue-400 mb-4">{t.location}</div>
                  <div className="text-xs text-gray-500 italic">{t.cost}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leveling & Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Leveling Logic</h2>
            <div className="space-y-4">
              {levelingInfo.map((l, i) => (
                <div key={i} className="text-sm">
                  <div className="text-white font-bold mb-1">{l.type}</div>
                  <div className="text-gray-400 mb-1">{l.logic}</div>
                  <div className="text-[var(--accent-red)] font-mono">{l.result}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Haki Colors</h2>
            <div className="space-y-3">
              {hakiColors.map((c, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-gray-500 font-mono">{c.part}</span>
                  <span className="text-gray-200">{c.note}</span>
                </div>
              ))}
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
