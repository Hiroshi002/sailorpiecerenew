"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Info, Star, Users, Swords, Navigation } from "lucide-react";

// Note: In Next.js, metadata for a client component must be in a separate layout or exported from a server component.
// I will keep it simple here as this is a page component.

const sea1Islands = [
  { id: "starter-island", stage: "Early game", name: "Starter Island", tag: "Where every journey begins", theme: "location-sailor" },
  { id: "jungle-island", stage: "Early game", name: "Jungle Island", tag: "Danger hides beneath the canopy", theme: "location-slime" },
  { id: "desert-island", stage: "Early to mid", name: "Desert Island", tag: "Scorching sands & trainers", theme: "location-desert" },
  { id: "snow-island", stage: "Mid game", name: "Snow Island", tag: "Artifacts & colder enemies", theme: "location-snow" },
  { id: "sailor-island", stage: "All stages", name: "Sailor Island", tag: "Main utility hub", theme: "location-sailor" },
  { id: "world-island", stage: "Late game", name: "World Island", tag: "Sea 2 handoff", theme: "location-world" }
  // ... others can be added similarly, I'll focus on the core structure first
];

const sea2Islands = [
  { id: "world-island-sea-2", stage: "Sea 2 entry", name: "World Island Sea 2", tag: "Gateway between seas", theme: "location-world" },
  { id: "punch-island", stage: "Late Sea 2", name: "Punch Island", tag: "Heaviest combat hub", theme: "location-punch" }
];

const islandData: Record<string, {
  name: string;
  tag: string;
  stage: string;
  rarity: string;
  npcs: string[];
  bosses: string[];
  focus: string;
  why: string[];
  links: { title: string; href: string; desc: string }[]
}> = {
  "starter-island": {
    name: "Starter Island",
    tag: "Where every journey begins",
    stage: "Early game",
    rarity: "Opening route",
    npcs: ["Katana Seller", "Starter quest routes"],
    bosses: ["No major tracked boss route"],
    focus: "Bandits and low-level starter enemies.",
    why: ["First weapon pickup and one of the earliest portal stops.", "One of the hidden collection spots for the Slime Puzzle and Dungeon Piece route."],
    links: [
      { title: "Katana", href: "/entries/katana", desc: "Starter sword route sold here." },
      { title: "Slime Puzzle", href: "/entries/slime-puzzle", desc: "One slime pickup starts here." }
    ]
  },
  "punch-island": {
    name: "Punch Island",
    tag: "The heaviest current Sea 2 combat hub",
    stage: "Late Sea 2",
    rarity: "Endgame route",
    npcs: ["Defense Merchant", "Material Reroll NPC", "Skill Point Reset NPC"],
    bosses: ["Crystal Defense boss pool", "Legendary Guardian"],
    focus: "High-level Sea 2 enemies and wave-based defense survival.",
    why: ["Main hub for Crystal Defense and late-game Anti Magic / Demon Wing farming.", "Essential stop for Sea 2 material rerolling and stat optimization."],
    links: [
      { title: "Anti Magic", href: "/entries/anti-magic", desc: "Crystal Defense drop route." },
      { title: "Crystal Defense", href: "/entries/crystal-defense", desc: "Survival mode overview." }
    ]
  }
};

export default function IslandsPage() {
  const [activeIsland, setActiveIsland] = useState("starter-island");

  const island = islandData[activeIsland] || islandData["starter-island"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950">
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-vignette opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,30,56,0.1),transparent_70%)]" />
      </div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 block">
        
        <div className="text-sm text-gray-400 mb-6 font-mono opacity-80">
          <Link href="/" className="hover:text-[var(--accent-red)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">All Islands and Map</span>
        </div>

        <section className="mb-16">
          <div className="panel-action clip-diagonal p-8 sm:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.2)]">
                Site Page
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tight" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
                All Islands and Map
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-6 bg-black/40 py-4">
                Interactive island hub for current Sailor Piece Sea 1 and Sea 2 areas, with progression stage, NPCs, bosses, and routes.
              </p>
              <div className="mt-8 flex gap-3">
                <span className="px-4 py-1 bg-[var(--accent-red)]/20 border border-[var(--accent-red)]/50 text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest rounded-sm">Site</span>
                <span className="px-4 py-1 bg-blue-900/40 border border-blue-500/50 text-blue-300 text-xs font-bold uppercase tracking-widest rounded-sm">Sea 1 + Sea 2</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
           <div className="panel-action clip-diagonal p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                 <Info className="w-8 h-8 text-blue-400 icon-glow-blue transition-all" />
                 <h2 className="text-2xl font-black text-white text-kinetic uppercase tracking-wide">Island Cluster Overview</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
                 <li className="flex gap-3">
                    <span className="text-[var(--accent-red)] font-bold">•</span>
                    <span>Groups both Sea 1 and confirmed Sea 2 islands into one browseable hub.</span>
                 </li>
                 <li className="flex gap-3">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Use it like the in-game teleport board: click an island to see its main NPC and boss routes.</span>
                 </li>
              </ul>
           </div>

           <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2 space-y-12">
                 <div className="space-y-6">
                    <div className="border-b border-white/10 pb-2">
                       <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Cluster I</span>
                       <h3 className="text-2xl font-black text-white text-kinetic italic">Sea 1 Islands</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {sea1Islands.map(is => (
                          <button 
                            key={is.id}
                            onClick={() => setActiveIsland(is.id)}
                            className={`p-4 text-left clip-diagonal border transition-all group ${activeIsland === is.id ? 'bg-[var(--accent-red)]/20 border-[var(--accent-red)]' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                          >
                             <div className="text-[9px] text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">{is.stage}</div>
                             <div className="text-lg font-black text-white">{is.name}</div>
                             <div className="text-[10px] text-gray-400 italic mt-1">{is.tag}</div>
                          </button>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-6">
                    <div className="border-b border-white/10 pb-2">
                       <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Cluster II</span>
                       <h3 className="text-2xl font-black text-white text-kinetic italic">Sea 2 Islands</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {sea2Islands.map(is => (
                          <button 
                            key={is.id}
                            onClick={() => setActiveIsland(is.id)}
                            className={`p-4 text-left clip-diagonal border transition-all group ${activeIsland === is.id ? 'bg-blue-900/30 border-blue-500' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                          >
                             <div className="text-[9px] text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">{is.stage}</div>
                             <div className="text-lg font-black text-white">{is.name}</div>
                             <div className="text-[10px] text-gray-400 italic mt-1">{is.tag}</div>
                          </button>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="lg:w-1/2">
                 <div className="sticky top-24">
                    <div className="panel-action clip-diagonal p-8 sm:p-10 border-t-4 border-t-[var(--accent-gold)] relative">
                       <div className="absolute top-4 right-4 text-4xl opacity-5 font-black italic select-none">ISLAND MAP</div>
                       <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-6">
                          <div>
                             <span className="text-[10px] text-[var(--accent-gold)] font-black uppercase tracking-widest mb-1">Island Guide</span>
                             <h3 className="text-4xl text-white text-kinetic italic font-black uppercase tracking-tight">{island.name}</h3>
                             <p className="text-gray-400 text-sm mt-1">{island.tag}</p>
                          </div>
                          <div className="flex flex-col items-end gap-2 text-right">
                             <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-sm">
                                {island.stage}
                             </span>
                             <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-[var(--accent-gold)]/20 border border-[var(--accent-gold)]/50 text-[var(--accent-gold)] rounded-sm">
                                {island.rarity}
                             </span>
                          </div>
                       </div>

                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                          <div className="bg-white/5 p-5 border border-white/5 clip-button">
                             <div className="flex items-center gap-3 mb-3">
                                <Users className="w-4 h-4 text-blue-400 icon-glow-blue" />
                                <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Main NPCs</span>
                             </div>
                             <ul className="text-xs text-gray-400 space-y-2">
                                {island.npcs.map((n: string, i: number) => <li key={i} className="flex gap-2"><span>•</span>{n}</li>)}
                             </ul>
                          </div>
                          <div className="bg-white/5 p-5 border border-white/5 clip-button">
                             <div className="flex items-center gap-3 mb-3">
                                <Swords className="w-4 h-4 text-[var(--accent-red)] icon-glow-red" />
                                <span className="text-[10px] text-[var(--accent-red)] font-black uppercase tracking-widest">Key Bosses</span>
                             </div>
                             <ul className="text-xs text-gray-400 space-y-2">
                                {island.bosses.map((b: string, i: number) => <li key={i} className="flex gap-2"><span>•</span>{b}</li>)}
                             </ul>
                          </div>
                       </div>

                       <div className="bg-black/60 p-6 border border-white/10 clip-button mb-8">
                          <div className="flex items-center gap-3 mb-4">
                             <Navigation className="w-4 h-4 text-green-400 icon-glow-green" />
                             <span className="text-[10px] text-green-400 font-black uppercase tracking-widest">Why players go here</span>
                          </div>
                          <ul className="text-xs text-gray-300 space-y-3">
                             {island.why.map((w: string, i: number) => <li key={i} className="flex gap-3">
                                <Star className="w-3 h-3 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                                <span>{w}</span>
                             </li>)}
                          </ul>
                       </div>

                       <div className="space-y-4">
                          <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Related Pages</span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                             {island.links.map((link, i) => (
                                <Link key={i} href={link.href} className="flex flex-col p-4 bg-white/5 border border-white/10 clip-button hover:border-[var(--accent-red)] group transition-all">
                                   <span className="text-sm font-black text-white group-hover:text-[var(--accent-red)] italic">{link.title}</span>
                                   <span className="text-[10px] text-gray-500 mt-1">{link.desc}</span>
                                </Link>
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
