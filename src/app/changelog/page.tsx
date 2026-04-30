"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Rocket, ArrowLeft, Zap, Info, ShieldCheck, History } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ChangelogEntry {
  id: string;
  date: string;
  title: string;
  items: string[];
}

const changelogData: ChangelogEntry[] = [
  {
    id: "2026-04-30-restart-compensation",
    date: "2026-04-30",
    title: "New Restart Compensation Code",
    items: [
      "Added the new CODEFORTHERESTARTSORRY3 code to the active Sailor Piece codes table from the supplied in-game reward screenshot.",
      "Tracked CODEFORTHERESTARTSORRY3 as 20x Bloodline Stone, 45x Power Shard, 55x Passive Shard, 5x Secret Chest, 125x Clan Reroll, 6x Aura Crate, and 5x Cosmetic Crate.",
      "Kept the requirement wording cautious at likely Level 10,000 and Ascension 5 until a cleaner in-game gate capture confirms it directly."
    ]
  },
  {
    id: "2026-04-29-restart-trading-fix",
    date: "2026-04-29",
    title: "Restart & Trading Fix Codes",
    items: [
      "Added the new CODEFORTHERESTARTSORRY2 and TRADINGFIXEDHOPEFULLY codes to the active Sailor Piece codes table.",
      "Tracked CODEFORTHERESTARTSORRY2 as 20x Bloodline Stone, 45x Power Shard, 55x Passive Shard, 5x Secret Chest, 125x Clan Reroll, 6x Aura Crate, and 5x Cosmetic Crate.",
      "Tracked TRADINGFIXEDHOPEFULLY as 30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 5x Aura Crate, and 4x Cosmetic Crate."
    ]
  },
  {
    id: "2026-04-29-progression-revamp",
    date: "2026-04-29",
    title: "Progression Page Revamp",
    items: [
      "Reworked the New Player Progression Path page around the newer six-phase community layout.",
      "Added jump navigation, card-style phase sections, inline popup references, and route-table linking across the progression page.",
      "Expanded the progression references for accessories, runes, rerolls, and permanent systems.",
      "Added category color-coding to the progression-page reference chips for visual family grouping.",
      "Updated the weapon and melee progression lanes to include the newer Sea 2 branches.",
      "Synced Crystal Defense with the newer coin-gain note reported for fresh servers."
    ]
  },
  {
    id: "2026-04-24-values-sync",
    date: "2026-04-24",
    title: "Values, Drops & Materials Sync",
    items: [
      "Updated the Trade Values page with newer CCR values for Ragna Set, Madoka Set, 2x Drop, 2x Luck, and 2x Gems.",
      "Added Frieren Set (with Egg) to the quick trade-value snapshot at 50,000 CCR.",
      "Synced the Sea 2 sea-beast quick-reference cards and boss popups to the newer FAQ-backed Sea Serpent and Kraken values.",
      "Cleaned up the Sea 2 map-piece wording with more expected boss names.",
      "Fixed the Materials page route links and inline material jumps."
    ]
  },
  {
    id: "2026-04-23-rune-keywords",
    date: "2026-04-23",
    title: "Rune Wording & Search Keywords",
    items: [
      "Rechecked the Runes page wording so the max Rune Level route is tracked as 700 total drops.",
      "Kept the Rune Level notes aligned across the main Runes page stats and leveling bullets.",
      "Expanded search indexing and alias coverage for improved site navigation.",
      "Refreshed the Best Builds page to the newer checked max-route assumptions."
    ]
  },
  {
    id: "2026-04-22-apology-codes",
    date: "2026-04-22",
    title: "New Apology Codes Update",
    items: [
      "Added THEOTHERFREECODEMB, YETANOTHERFREECODE, BUGFIXESCODES, and YETANOTHERFREECODE2 to the active codes table.",
      "Tracked all four new codes with the same lighter late-game reward bundle as SORRYFORBADSEA2QUEST.",
      "Kept the gate wording cautious (Level 10,000 and Ascension 4) until confirmed."
    ]
  },
  {
    id: "2026-04-20-easter-seo-pass",
    date: "2026-04-20",
    title: "Easter, Routing & SEO Cleanup",
    items: [
      "Reworked the Easter Egg Hunt page around the developer-confirmed quest flow.",
      "Expanded the Easter Egg Hunt page with the currently reported location pool.",
      "Folded the screenshot-backed Easter Egg route directly into the main Easter guide.",
      "Renamed and refined the Ancient Fragments route page for Sea 2.",
      "Added Blossom Outfit to the Accessories page as a Sea Serpent accessory route.",
      "Corrected the normal-drop Kraken payout wording and Sea 2 sea-beast notes.",
      "Updated the Sea 2 guide so Map Piece 4 now points to Anos or Alucard.",
      "Added a dedicated YouTube Shorts Ancient Fragments guide embed to the Sea 2 page.",
      "Added video SEO for the Ancient Fragments Shorts guide with VideoObject structured data.",
      "Fixed Titles page styling for Ancient Mage, Time Tyrant, Cosmic Being, and Dragon Queen.",
      "Expanded the Anos page with a real Anos Boss summon and farming summary.",
      "Finalized the Cosmic Being F-move tracker with the now-confirmed last step.",
      "Expanded the Relics and The World pages with cleaner Sea 2 breakdown.",
      "Added new visit and likes codes from direct in-game screenshots.",
      "Refreshed the Trade Values page to the Apr 20, 2026 snapshot."
    ]
  },
  {
    id: "2026-04-19-sea-beast-correction",
    date: "2026-04-19",
    title: "Sea Beast & Sea 2 Corrections",
    items: [
      "Updated the Sea 2 guide with newer map-piece notes for Alucard and Ragna.",
      "Corrected the Sea 2 map-piece boss list with the fuller boss-to-map snapshot.",
      "Added a new Sea 2 sea-beast block covering spawn rules for open sea and deep sea.",
      "Corrected sea-beast HP wording for Kraken and Sea Serpent.",
      "Added current Sea Serpent and Kraken drop snapshots to the Sea 2 guide.",
      "Expanded Dragon Goddess into a real Sea 2 drop page with screenshots.",
      "Finished the Dragon Goddess route page as a real sea-beast farming guide.",
      "Corrected Dominion Brand sourcing to Bizarre Island NPC drops.",
      "Expanded the Guilds page and Materials page with Guild Key notes.",
      "Confirmed the alternate Great Mage grind path through the Easter shop.",
      "Reworked the Sea 2 guide handoff section to point into the finished route pages.",
      "Updated Cosmic Being with Garou notes and Punch Island spawn rules.",
      "Extended the Cosmic Being F-move tracker with Mastery 2 steps.",
      "Corrected the Bloodlines page with the cleaner supplied stat table."
    ]
  },
  {
    id: "2026-04-09-seo-page-polish",
    date: "2026-04-09",
    title: "SEO & System Page Polish",
    items: [
      "Rebuilt sitemap and robots files for the sailorpiecewiki.com domain.",
      "Added pages for bosses, trade values, dev products, NPC locations, and Haki.",
      "Added the Bosses page with HP notes, summon costs, and drops.",
      "Improved mobile layout and tier-list visuals across the wiki.",
      "Added a build planner with artifact selection and stat reroll tracking.",
      "Added the Best Builds page with theoretical top-limit setups.",
      "Expanded homepage navigation to cover all 20+ major system pages."
    ]
  }
];

const metaItems = [
  { label: "Category", value: "Archives" },
  { label: "Last Verified", value: "Apr 30, 2026" },
  { label: "Status", value: "Live Records" },
  { label: "Access", value: "Public" },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950 overflow-x-hidden">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-vignette opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,30,56,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[length:100%_4px] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] opacity-20" />
      </div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 block animate-in fade-in duration-700">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-8 font-mono opacity-80 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--accent-red)] transition-colors">Home</Link>
          <span className="opacity-40">/</span>
          <span className="text-gray-300">Changelog</span>
        </div>

        {/* Hero Section */}
        <div className="mb-16 flex flex-col lg:flex-row gap-12 items-start relative animate-in slide-in-from-left-4 duration-700">
          <div className="flex-1">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-[10px] font-black uppercase tracking-[0.2em] mb-8 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
                Wiki Record
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 text-white text-kinetic uppercase tracking-tighter italic drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]" 
                  style={{ textShadow: "4px 4px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
                Changelog
              </h1>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-6 backdrop-blur-sm bg-black/20 py-4 font-bold italic">
                The ultimate legendary archives for the Sailor Piece community. Tracking every system update, guide expansion, and mythic discovery.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {metaItems.map((item, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[var(--accent-red)]/40 transition-colors group">
                    <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-black group-hover:text-[var(--accent-gold)] transition-colors">{item.label}</div>
                    <div className="text-sm font-black text-white uppercase italic">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(255,30,56,0.2)] bg-black/40 relative aspect-square group backdrop-blur-md animate-in zoom-in-95 duration-700 delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-red)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 flex items-center justify-center">
              <History size={120} className="text-[var(--accent-red)] opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 icon-glow-red" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[10px] text-[var(--accent-gold)] font-black uppercase tracking-[0.3em] mb-1">Authenticated</div>
              <div className="text-lg text-white font-black uppercase italic tracking-tighter">System Archives</div>
            </div>
          </div>
        </div>

        {/* Overview Row */}
        <div className="panel-action clip-diagonal p-8 mb-12 relative overflow-hidden group border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-red)] opacity-5 blur-[100px] group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-6 flex items-center gap-4 italic tracking-tighter">
              <div className="icon-premium-wrapper">
                <Rocket className="text-[var(--accent-red)] icon-glow-red" />
              </div>
              System Overview & Handoff
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <ul className="space-y-5">
                <li className="flex items-start gap-4 text-gray-300 font-bold">
                  <Zap size={16} className="text-[var(--accent-red)] mt-1 shrink-0" />
                  <span>These records track the evolution of the <span className="text-white">Sailor Piece Wiki</span> database and interface.</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300 font-bold">
                  <Zap size={16} className="text-[var(--accent-red)] mt-1 shrink-0" />
                  <span>Official game patch notes must be verified via the developer&apos;s secure Discord channels.</span>
                </li>
              </ul>
              <div className="p-6 bg-white/5 border border-white/5 rounded-2xl italic text-gray-400 text-sm leading-relaxed">
                <ShieldCheck size={24} className="mb-4 text-[var(--accent-gold)]" />
                &quot;The stars guide the way, but the archives reveal the path. Every entry here marks a step towards the complete Grand Sea guide.&quot;
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Entries */}
        <div className="space-y-12 mb-24 relative">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent-red)] via-[var(--accent-gold)]/30 to-transparent transform sm:-translate-x-1/2 opacity-20" />

          {changelogData.map((entry, index) => (
            <div 
              key={entry.id}
              className={`relative flex flex-col sm:flex-row items-center gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
              style={{ animationDelay: `${400 + (index * 100)}ms` }}
            >
              <div className="absolute left-6 sm:left-1/2 top-4 w-4 h-4 bg-white rounded-full sm:-translate-x-1/2 z-20 shadow-[0_0_20px_white] border-4 border-slate-950" />

              <div className={`w-full sm:w-1/2 px-12 ${index % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                <div className={`flex items-center gap-3 mb-2 text-[var(--accent-gold)] font-black text-xs uppercase tracking-[0.3em] italic ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>
                  <Calendar size={14} className="opacity-80 icon-glow-gold" />
                  {entry.date}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-tight text-shadow-red group cursor-default">
                  {entry.title}
                </h3>
              </div>

              <div className="w-full sm:w-1/2 px-4 sm:px-12">
                <div className="panel-action clip-diagonal !p-8 bg-black/40 border-l-4 border-[var(--accent-red)] group hover:border-[var(--accent-gold)] transition-all shadow-xl">
                  <ul className="space-y-5">
                    {entry.items.map((item, i) => (
                      <li key={i} className="flex gap-4 group/item">
                        <Zap size={14} className="text-[var(--accent-red)] mt-1 shrink-0 group-hover/item:text-[var(--accent-gold)] group-hover/item:scale-110 transition-all" />
                        <p className="text-gray-400 text-sm md:text-base font-bold leading-relaxed group-hover/item:text-gray-100 transition-colors">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <Link href="/directory/" className="panel-action clip-diagonal p-10 group relative border border-white/10 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-red)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2 group-hover:text-[var(--accent-red)] transition-colors">Return to Directory</h4>
                  <p className="text-gray-400 text-sm font-bold">Browse the complete index of wiki guides.</p>
                </div>
                <ArrowLeft className="text-white group-hover:-translate-x-2 transition-transform" />
             </div>
          </Link>
          <div className="panel-action clip-diagonal p-10 group relative border border-white/10 bg-[var(--bg-panel)] flex flex-col justify-center items-center text-center">
             <Info className="text-[var(--accent-gold)] mb-6" size={40} />
             <h4 className="text-xl font-black text-white uppercase italic mb-2 tracking-tighter">Contribution Protocol</h4>
             <p className="text-gray-400 text-xs font-bold max-w-xs">New data is verified by the community archivists daily.</p>
          </div>
        </div>

      </main>

      <Footer />

      <style jsx global>{`
        :root {
          --accent-red: #ff1e38;
          --accent-gold: #ffb800;
          --bg-dark: #0a0a0a;
          --bg-panel: #121010;
          --border-action: rgba(255, 30, 56, 0.4);
          --border-subtle: rgba(255, 255, 255, 0.08);
        }

        .bg-vignette {
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%);
        }

        .clip-diagonal {
          clip-path: polygon(25px 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%, 0 25px);
        }

        .clip-button {
          clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px);
        }

        .text-kinetic {
          filter: drop-shadow(0 0 2px rgba(255,30,56,0.3));
        }

        .text-shadow-red {
          text-shadow: 3px 3px 0px var(--accent-red), -1px -1px 0px rgba(0,0,0,1);
        }

        .panel-action {
          background: var(--bg-panel);
          border: 1px solid var(--border-subtle);
          box-shadow: 10px 10px 40px rgba(0,0,0,0.5);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .panel-action:hover {
          background: #1a1818;
          border-color: var(--accent-red);
          transform: translateY(-4px);
        }

        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #020617;
        }
        ::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 10px;
          border: 2px solid #020617;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: var(--accent-red);
        }
      `}</style>
    </div>
  );
}
