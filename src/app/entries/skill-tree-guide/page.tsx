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
    title: `Skill Tree | ${siteConfig.name}`,
    description: "Slime Island stat tree that unlocks at level 7,000 and uses Skill Points earned by defeating NPCs.",
    openGraph: {
      title: `Skill Tree | ${siteConfig.name}`,
      description: "Slime Island stat tree that unlocks at level 7,000 and uses Skill Points earned by defeating NPCs.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Skill Tree | ${siteConfig.name}`,
      description: "Slime Island stat tree that unlocks at level 7,000 and uses Skill Points earned by defeating NPCs.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Unlock level",
    "value": "7,000"
  },
  {
    "label": "Unlock cost",
    "value": "1,000 Gems"
  },
  {
    "label": "Location",
    "value": "Slime Island"
  },
  {
    "label": "SP Rate",
    "value": "1 per 250 NPC kills"
  },
  {
    "label": "Total SP to max",
    "value": "324 SP"
  }
];

const facts = [
  "The Skill Tree unlocks on Slime Island at level 7,000 by paying 1,000 Gems.",
  "Skill Points (SP) are earned by defeating NPCs, with a rate of 1 SP per 250 kills.",
  "Mob farming is significantly more efficient than boss farming for earning SP.",
  "The current tree features five main branches: Damage, HP, Crit Damage, Crit Chance, and Luck.",
  "Fully maxing the tree requires 324 SP, equivalent to roughly 81,000 NPC kills."
];

const branches = [
  { name: "Damage %", lv1: "3", lv2: "6", lv3: "10", lv4: "15", lv5: "25", max: "+25% Damage" },
  { name: "HP %", lv1: "2", lv2: "5", lv3: "8", lv4: "13", lv5: "20", max: "+25% HP" },
  { name: "Crit Damage", lv1: "2", lv2: "4", lv3: "7", lv4: "10", lv5: "15", max: "+15% Crit Dmg" },
  { name: "Crit Chance", lv1: "2", lv2: "4", lv3: "7", lv4: "10", lv5: "15", max: "+5% Crit Chance" },
  { name: "Luck", lv1: "5", lv2: "15", lv3: "30", lv4: "50", lv5: "75", max: "+15% Luck" }
];

const unlockSteps = [
  "Reach level 7,000 or higher.",
  "Travel to Slime Island and locate the small huts on the right side.",
  "Speak with the Skill Tree NPC and pay the 1,000 Gem unlock fee.",
  "Start farming high-density mobs to accumulate Skill Points."
];

const upgradePriority = [
  { branch: "Damage %", priority: "High", reason: "Directly boosts wave clear speed and boss DPS." },
  { branch: "Crit Damage/Chance", priority: "Medium", reason: "Scales well once base damage is established." },
  { branch: "Luck", priority: "Medium", reason: "Crucial for long-term farming but expensive to max." },
  { branch: "HP %", priority: "Low", reason: "Mainly for survivability in Tower and Hard Dungeons." }
];

const moveset: any[] = [];

const routeDetails: any[] = [];

const relatedPages = [
  {
    "href": "/entries/power-system-overview/index",
    "title": "Powers",
    "summary": "Late-game Lawless Island system that rolls build-wide power traits using Power Shards."
  },
  {
    "href": "/entries/artifacts-overview/index",
    "title": "Artifacts",
    "summary": "Artifact unlocks, ranked set bonuses, stat pools, dust upgrades, and Snow Island milestone progression."
  },
  {
    "href": "/entries/haki-guide/index",
    "title": "Haki",
    "summary": "Armament, Observation, and Conqueror Haki effects, scaling, trainer locations, unlock routes, leveling, and Haki color rerolls."
  },
  {
    "href": "/entries/slime-puzzle/index",
    "title": "Slime Puzzle",
    "summary": "Seven hidden slime collectibles tied to the Slime Key Crafter on Slime Island and the route into the Slime Crafter unlock."
  },
  {
    "href": "/entries/bosses-guide/index",
    "title": "Bosses",
    "summary": "Open-world, spawnable, dungeon, and tower bosses with Boss Island summon costs, major drops, and farming routes."
  },
  {
    "href": "/entries/rimuru/index",
    "title": "Rimuru",
    "summary": "Slime Island sword route tied to the slime collection puzzle, Slime Key crafting, and one of the strongest late-game boss grinds."
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
          <span className="text-gray-300">Skill Tree</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Skill Tree
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Slime Island stat tree that unlocks at level 7,000 and uses Skill Points earned by defeating NPCs.
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

        {/* Skill Tree Branches */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group border-2 border-blue-500/30">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4 text-blue-400">Skill Tree Branches</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-xs uppercase">
                    <th className="py-4 px-4">Branch</th>
                    <th className="py-4 px-4">Lv 1</th>
                    <th className="py-4 px-4">Lv 2</th>
                    <th className="py-4 px-4">Lv 3</th>
                    <th className="py-4 px-4">Lv 4</th>
                    <th className="py-4 px-4">Lv 5</th>
                    <th className="py-4 px-4 text-right">Max Gain</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {branches.map((b, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group/row text-sm font-mono">
                      <td className="py-4 px-4 font-bold text-white uppercase font-sans">{b.name}</td>
                      <td className="py-4 px-4 text-gray-400">{b.lv1} SP</td>
                      <td className="py-4 px-4 text-gray-400">{b.lv2} SP</td>
                      <td className="py-4 px-4 text-gray-400">{b.lv3} SP</td>
                      <td className="py-4 px-4 text-gray-400">{b.lv4} SP</td>
                      <td className="py-4 px-4 text-gray-400">{b.lv5} SP</td>
                      <td className="py-4 px-4 text-right font-black text-[var(--accent-red)]">{b.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Unlock Steps & Priority */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">How to Unlock</h2>
            <div className="space-y-4">
              {unlockSteps.map((step, i) => (
                <div key={i} className="flex gap-4 items-center bg-black/40 p-4 rounded-xl border border-white/5">
                  <span className="w-8 h-8 rounded-full bg-[var(--accent-red)] flex items-center justify-center text-white font-black shrink-0">{i + 1}</span>
                  <span className="text-gray-300 text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Upgrade Priority</h2>
            <div className="space-y-4">
              {upgradePriority.map((p, i) => (
                <div key={i} className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-black uppercase">{p.branch}</span>
                    <span className={`font-bold ${p.priority === 'High' ? 'text-red-400' : 'text-blue-400'}`}>{p.priority}</span>
                  </div>
                  <div className="text-[10px] text-gray-500 italic">{p.reason}</div>
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
