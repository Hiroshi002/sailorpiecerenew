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
    title: `Boss Rush | ${siteConfig.name}`,
    description: "Sailor Island boss gauntlet with 15 waves, Rush Keys, Rush Coins, Escanor drops, and permanent Rush upgrades.",
    openGraph: {
      title: `Boss Rush | ${siteConfig.name}`,
      description: "Sailor Island boss gauntlet with 15 waves, Rush Keys, Rush Coins, Escanor drops, and permanent Rush upgrades.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Boss Rush | ${siteConfig.name}`,
      description: "Sailor Island boss gauntlet with 15 waves, Rush Keys, Rush Coins, Escanor drops, and permanent Rush upgrades.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Island",
    "value": "Sailor Island"
  },
  {
    "label": "Waves",
    "value": "15"
  },
  {
    "label": "Global timer",
    "value": "300 seconds"
  },
  {
    "label": "Reward gate",
    "value": "10% DMG contribution"
  },
  {
    "label": "Main currency",
    "value": "Rush Coins"
  },
  {
    "label": "Special Boss",
    "value": "Escanor (Sin of Pride)"
  }
];

const facts = [
  "Boss Rush is a 15-wave gauntlet on Sailor Island requiring 1 Rush Key to enter.",
  "Dealing at least 10% of the total rush HP is mandatory for receiving end rewards.",
  "Rush Coins can be spent on powerful permanent stat upgrades and rare shop items.",
  "Escanor can spawn up to three times in a single run, offering exclusive mythical drops.",
  "HP scales up by roughly 55% for each additional player in the group."
];

const howToStart = [
  "Travel to Sailor Island and go to the right side of the inner city.",
  "Find the central Boss Rush NPC near the two merchant NPCs.",
  "Ensure you have at least 1 Rush Key in your inventory.",
  "Select your difficulty (Easy to Extreme) and enter the portal."
];

const rushKeySources = [
  { source: "Fast Ninja", chance: "0.21%" },
  { source: "Strong Bandit", chance: "0.195%" },
  { source: "Delinquent", chance: "0.1925%" },
  { source: "Arena Fighter", chance: "0.1775%" },
  { source: "Gem Merchant", chance: "175 Gems" }
];

const permanentUpgrades = [
  { name: "Damage", totalBonus: "+25% (+5% per Lv)", totalCost: "1,350 Coins", cap: "Lv 5" },
  { name: "Health", totalBonus: "+37.5% (+7.5% per Lv)", totalCost: "850 Coins", cap: "Lv 5" },
  { name: "Crit Damage", totalBonus: "+15% (+3% per Lv)", totalCost: "1,350 Coins", cap: "Lv 5" },
  { name: "Luck", totalBonus: "+10% (+2% per Lv)", totalCost: "1,350 Coins", cap: "Lv 5" }
];

const clearGrades = [
  { grade: "SSS", time: "Under 30s" },
  { grade: "SS", time: "Under 60s" },
  { grade: "S", time: "Under 120s" },
  { grade: "A", time: "Under 180s" },
  { grade: "B", time: "Under 240s" },
  { grade: "C", time: "Under 300s" }
];

const exclusiveDrops = [
  { item: "Escanor Sin of Pride", rate: "0.6% - 1.85%", note: "Mythical Sword" },
  { item: "The One Title", rate: "0.85% - 1.75%", note: "+65% Damage" },
  { item: "Sun Armor", rate: "0.5% - 1.5%", note: "Mythical Accessory" }
];

const moveset: any[] = [];

const routeDetails: any[] = [];

const relatedPages = [
  {
    "href": "/entries/infinite-tower/index",
    "title": "Infinite Tower",
    "summary": "Tower Island endgame mode with scaling floors, stacking debuffs, direct floor rewards, Tower Tokens, and a backup shop."
  },
  {
    "href": "/entries/dungeons-overview/index",
    "title": "Dungeons",
    "summary": "Dungeon unlock steps, key farming, and the current Shadow, Rune, and Double dungeon routes."
  },
  {
    "href": "/entries/titles-overview/index",
    "title": "Titles",
    "summary": "Damage, farming, event, and exclusive titles used to push your Sailor Piece build further."
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
          <span className="text-gray-300">Boss Rush</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Boss Rush
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Sailor Island boss gauntlet with 15 waves, Rush Keys, Rush Coins, Escanor drops, and permanent Rush upgrades.
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

        {/* How to Start & Grades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">How to Start</h2>
            <div className="space-y-4">
              {howToStart.map((step, i) => (
                <div key={i} className="flex gap-4 items-center bg-black/40 p-4 rounded-xl border border-white/5">
                  <span className="w-8 h-8 rounded-full bg-[var(--accent-red)] flex items-center justify-center text-white font-black shrink-0">{i + 1}</span>
                  <span className="text-gray-300 text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Clear Grades</h2>
            <div className="grid grid-cols-2 gap-4">
              {clearGrades.map((g, i) => (
                <div key={i} className="bg-white/5 p-3 rounded-lg border border-white/10 text-center">
                  <div className="text-xl font-black text-[var(--accent-red)]">{g.grade}</div>
                  <div className="text-[10px] text-gray-500 uppercase font-mono">{g.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Permanent Upgrades */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group border-2 border-orange-500/30">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4 text-orange-400">Permanent Rush Upgrades</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {permanentUpgrades.map((up, i) => (
                <div key={i} className="bg-orange-950/10 border border-orange-500/20 p-5 rounded-xl hover:border-orange-500 transition-all">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-black text-white uppercase">{up.name}</h3>
                    <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded font-bold border border-orange-500/30">{up.cap}</span>
                  </div>
                  <div className="text-xs text-orange-200 font-bold mb-2">{up.totalBonus}</div>
                  <div className="text-[10px] text-gray-500 font-mono uppercase">Cost: {up.totalCost}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Sources & Exclusive Drops */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Rush Key Sources</h2>
            <div className="space-y-3">
              {rushKeySources.map((s, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-gray-300 font-bold">{s.source}</span>
                  <span className="text-[var(--accent-red)] font-mono">{s.chance}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Exclusive Drops</h2>
            <div className="space-y-4">
              {exclusiveDrops.map((d, i) => (
                <div key={i} className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-black uppercase">{d.item}</span>
                    <span className="text-[var(--accent-red)] font-mono">{d.rate}</span>
                  </div>
                  <div className="text-[10px] text-gray-500 italic">{d.note}</div>
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
