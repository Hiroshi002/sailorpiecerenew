import { getSiteConfig } from "@/config/site";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import VideoMovesetCard from "@/components/VideoMovesetCard";
import { getGameData } from "@/config/game-data";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Bosses | ${siteConfig.name}`,
    description: "Open-world, spawnable, dungeon, and tower bosses with Boss Island summon costs, major drops, and farming routes.",
    openGraph: {
      title: `Bosses | ${siteConfig.name}`,
      description: "Open-world, spawnable, dungeon, and tower bosses with Boss Island summon costs, major drops, and farming routes.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Bosses | ${siteConfig.name}`,
      description: "Open-world, spawnable, dungeon, and tower bosses with Boss Island summon costs, major drops, and farming routes.",
      images: [siteConfig.ogImage],
    },
  };
}

export default function BossesGuide() {
  const gameData = getGameData();
  
  const relatedPages = [
    {
      "href": "/entries/material-sourcing/index",
      "title": "Materials Overview",
      "summary": "Current material rarities, chest contents, drop sources, tracked rates, and what each item is used for, including NPC material drop chances for Guild Key, Dominion Brand, Relic Parts, Bloodline Stone, and other rare Sea 2 items."
    },
    {
      "href": "/entries/boss-rush/index",
      "title": "Boss Rush",
      "summary": "Sailor Island boss gauntlet with 15 waves, Rush Keys, Rush Coins, Escanor drops, and permanent Rush upgrades."
    },
    {
      "href": "/entries/infinite-tower/index",
      "title": "Infinite Tower",
      "summary": "Tower Island endgame mode with scaling floors, stacking debuffs, direct floor rewards, Tower Tokens, and a backup shop."
    },
    {
      "href": "/entries/skill-tree-guide/index",
      "title": "Skill Tree",
      "summary": "Slime Island stat tree that unlocks at level 7,000 and uses Skill Points earned by defeating NPCs."
    },
    {
      "href": "/entries/dungeon-pieces/index",
      "title": "Dungeon Pieces",
      "summary": "Six hidden collectibles tied to the Dungeon Master questline that unlock the full dungeon system on Dungeon Island."
    }
  ];

  const metaItems = [
    {
      "label": "Main summon hub",
      "value": "Boss Island"
    },
    {
      "label": "Boss types",
      "value": "Open World, Spawnable, Dungeon, Event"
    },
    {
      "label": "World Boss Timer",
      "value": gameData.bosses.worldBossTimer
    },
    {
      "label": "Newest Boss",
      "value": gameData.bosses.newestBoss
    }
  ];

  const facts = [
    "Bosses are split into open-world, spawnable, dungeon/tower, and event-exclusive types.",
    "Most Boss Island summons require Boss Keys, money, gems, or special items.",
    `World Bosses now have an in-game countdown timer (${gameData.bosses.worldBossTimer} spawn cycle).`,
    "World-boss and sea-beast drop chances have been buffed in recent updates.",
    `${gameData.bosses.newestBoss.split(' (')[0]} is the latest major world boss, dropping Sun Essence and Sun Outfit materials.`
  ];

  const highValueBosses = gameData.bosses.highValue.map(boss => ({
    ...boss,
    drops: boss.drops.join(", ")
  }));

  const categories = [
    { type: "Open World", work: "Spawn naturally after cooldown resets.", farm: "Rerolls, titles, accessories, and keys." },
    { type: "Spawnable", work: "Summoned via NPCs using keys or items.", farm: "Late-game swords, melees, and boss titles." },
    { type: "Dungeon/Tower", work: "Appear on specific waves or floors.", farm: "Shadow Monarch, tower materials, and progression." }
  ];

  const aliases = [
    { wiki: "Jinwoo", ingame: "Solo Hunter", usage: "Sword route & Shadow Monarch" },
    { wiki: "Alucard", ingame: "Vampire King", usage: "Alucard style & title farming" },
    { wiki: "Rimuru", ingame: "Slime", usage: "Slime Island progression" },
    { wiki: "Sun God", ingame: "Sun God", usage: "Sun God sword & outfit" }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950">
      
      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 block">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 font-mono opacity-80">
          <Link href="/" className="hover:text-[var(--accent-red)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Bosses</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Category
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Bosses Guide
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Open-world, spawnable, dungeon, and tower bosses with Boss Island summon costs, major drops, and farming routes.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metaItems.map((item, i) => (
                <div key={i} className="panel-action clip-diagonal p-4 border-l-2 border-[var(--accent-red)] bg-black/40">
                  <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">{item.label}</div>
                  <div className="text-white font-bold text-sm italic">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* High Value Bosses */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 uppercase tracking-tighter">
            <span className="w-12 h-1 bg-[var(--accent-red)]"></span>
            High Value Drops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highValueBosses.map((boss, i) => (
              <div key={i} className="panel-action clip-diagonal p-6 border-l-4 border-[var(--accent-red)] group hover:bg-[var(--accent-red)]/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-[var(--accent-red)] transition-colors italic">{boss.name}</h3>
                    <div className="text-xs text-[var(--accent-gold)] font-bold uppercase tracking-widest">{boss.location}</div>
                  </div>
                  <div className="bg-black/60 px-3 py-1 border border-white/10 text-[var(--accent-red)] font-black text-xs clip-button italic">
                    HP: {boss.hp}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Rare Title</span>
                    <span className="text-white text-sm font-bold">{boss.title}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Major Drops</span>
                    <span className="text-gray-300 text-sm italic font-medium">{boss.drops}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Quick Facts */}
          <div>
            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight italic">Quick Access Facts</h2>
            <div className="space-y-4">
              {facts.map((fact, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white/5 border border-white/5 rounded-sm hover:border-[var(--accent-red)]/30 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-red)]/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-red)]"></div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">{fact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight italic">Boss Categories</h2>
            <div className="space-y-6">
              {categories.map((cat, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-white/10 hover:border-[var(--accent-red)] transition-colors py-1">
                  <h3 className="text-white font-black uppercase text-lg mb-1">{cat.type}</h3>
                  <p className="text-gray-400 text-sm mb-2 font-medium">{cat.work}</p>
                  <div className="text-[10px] text-[var(--accent-gold)] font-black uppercase tracking-widest">Main Purpose: {cat.farm}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alias Section */}
        <div className="mb-16 panel-action clip-diagonal p-8 border border-white/10 bg-black/60">
          <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight italic text-center">Wiki vs In-Game Aliases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aliases.map((a, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-[10px] text-[var(--accent-red)] font-black uppercase tracking-widest mb-1">Wiki Name</div>
                <div className="text-white font-black text-xl mb-3">{a.wiki}</div>
                <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">In-Game Alias</div>
                <div className="text-[var(--accent-gold)] font-bold italic mb-3">{a.ingame}</div>
                <p className="text-[11px] text-gray-400 font-medium leading-relaxed">{a.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Pages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPages.map((page, i) => (
            <Link key={i} href={page.href} className="panel-action clip-diagonal p-6 border border-white/10 hover:border-[var(--accent-red)] transition-all group bg-black/40">
              <h4 className="text-white font-black uppercase mb-3 group-hover:text-[var(--accent-red)] transition-colors italic">{page.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-medium line-clamp-3">{page.summary}</p>
              <div className="mt-4 flex items-center gap-2 text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Read Entry <span className="text-lg">→</span>
              </div>
            </Link>
          ))}
        </div>
        
      </main>

      <Footer />
    </div>
  );
}
