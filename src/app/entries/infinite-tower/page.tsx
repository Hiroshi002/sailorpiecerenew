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
    title: `Infinite Tower | ${siteConfig.name}`,
    description: "Tower Island endgame mode with scaling floors, stacking debuffs, direct floor rewards, Tower Tokens, and a backup shop.",
    openGraph: {
      title: `Infinite Tower | ${siteConfig.name}`,
      description: "Tower Island endgame mode with scaling floors, stacking debuffs, direct floor rewards, Tower Tokens, and a backup shop.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Infinite Tower | ${siteConfig.name}`,
      description: "Tower Island endgame mode with scaling floors, stacking debuffs, direct floor rewards, Tower Tokens, and a backup shop.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Island",
    "value": "Tower Island"
  },
  {
    "label": "Unlock level",
    "value": "8,500+"
  },
  {
    "label": "Entry item",
    "value": "Tower Key"
  },
  {
    "label": "Secret runes",
    "value": "Radiant, Primordial"
  },
  {
    "label": "Full upgrade cost",
    "value": "36,500 Tokens"
  },
  {
    "label": "Secret Pity",
    "value": "6k - 7.5k Floors"
  }
];

const facts = [
  "Infinite Tower is the main endgame survival mode located on Tower Island.",
  "Boss checkpoints appear every 5 floors, with debuffs stacking harder after floor 50.",
  "Radiant Rune (Luck) and Primordial Rune (Damage) are the two secret chase drops.",
  "Secret runes have a pity tracker: Radiant at 6,000 floors and Primordial at 7,500 floors.",
  "Fully maxing the permanent upgrade tree requires 36,500 Tower Tokens.",
  "Gilgamesh V is one of the best AFK moves for clearing waves due to its massive AoE."
];

const secretRunes = [
  { name: "Radiant Rune", floor: "High", base: "0.0135%", max: "0.0458%", x2: "0.0911%" },
  { name: "Primordial Rune", floor: "High", base: "0.0130%", max: "0.0439%", x2: "0.0877%" },
  { name: "Radiant Rune", floor: "Low", base: "0.0025%", max: "0.0084%", x2: "0.0168%" },
  { name: "Primordial Rune", floor: "Low", base: "0.0020%", max: "0.0068%", x2: "0.0135%" }
];

const upgradeTree = [
  { name: "Damage", bonus: "+25% Total", cost: "7,250", gain: "+5% per Lv" },
  { name: "Crit Damage", bonus: "+15% Total", cost: "7,250", gain: "+3% per Lv" },
  { name: "Crit Chance", bonus: "+5% Total", cost: "7,250", gain: "+1% per Lv" },
  { name: "HP %", bonus: "+25% Total", cost: "7,250", gain: "+5% per Lv" },
  { name: "Luck", bonus: "+10% Total", cost: "7,500", gain: "+2% per Lv" }
];

const afkSetup = [
  "Use a damage build (e.g., Gilgamesh V) for faster wave clears.",
  "Set 'Auto-Reset' to floor 50-70 depending on build strength.",
  "Enable 'Auto-Restart' to loop back to floor 1 after the run ends.",
  "Luck builds are not recommended for deep-floor token farming."
];

const shopItems = [
  { name: "Abyssal Empress", cost: "4,000 Tokens" },
  { name: "Abyssal Outfit", cost: "900 Tokens" },
  { name: "Purple Flare Aura", cost: "1,200 Tokens" },
  { name: "Mythical Chest", cost: "75 Tokens" },
  { name: "Aura Crate", cost: "1,200 Tokens" },
  { name: "Clan Reroll", cost: "10 Tokens" }
];

const keySources = [
  { island: "Lawless Island", enemy: "Arena Fighters", note: "Best AoE farm spot" },
  { island: "Ninja Island", enemy: "Ninjas", note: "Second main key route" }
];

const moveset: any[] = [];

const routeDetails: any[] = [];

const relatedPages = [
  {
    "href": "/entries/dungeons-overview/index",
    "title": "Dungeons",
    "summary": "Dungeon unlock steps, key farming, and the current Shadow, Rune, and Double dungeon routes."
  },
  {
    "href": "/entries/artifacts-overview/index",
    "title": "Artifacts",
    "summary": "Artifact unlocks, ranked set bonuses, stat pools, dust upgrades, and Snow Island milestone progression."
  },
  {
    "href": "/entries/abyssal-empress/index",
    "title": "Abyssal Empress",
    "summary": "Tower Island endgame sword earned through Infinite Tower grinding or by buying it with Tower Tokens."
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
          <span className="text-gray-300">Infinite Tower</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Infinite Tower
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Tower Island endgame mode with scaling floors, stacking debuffs, direct floor rewards, Tower Tokens, and a backup shop.
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

        {/* Secret Runes */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group border-2 border-purple-500/30">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4 text-purple-400">Secret Chase Runes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Rune</th>
                    <th className="py-4 px-4">Floor</th>
                    <th className="py-4 px-4">Base %</th>
                    <th className="py-4 px-4">Max %</th>
                    <th className="py-4 px-4 text-right">2x Drop %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {secretRunes.map((rune, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group/row text-sm">
                      <td className="py-4 px-4 font-bold text-white uppercase">{rune.name}</td>
                      <td className="py-4 px-4 text-gray-400">{rune.floor}</td>
                      <td className="py-4 px-4 font-mono">{rune.base}</td>
                      <td className="py-4 px-4 font-mono text-blue-400">{rune.max}</td>
                      <td className="py-4 px-4 text-right font-black text-[var(--accent-red)] font-mono">{rune.x2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Upgrade Tree */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Permanent Upgrade Tree</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {upgradeTree.map((up, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:border-[var(--accent-red)] transition-all">
                  <div className="text-sm font-black text-white mb-1 uppercase">{up.name}</div>
                  <div className="text-[10px] text-gray-500 mb-2">{up.gain}</div>
                  <div className="text-lg font-black text-blue-400 mb-1">{up.bonus}</div>
                  <div className="text-[8px] text-gray-600 uppercase font-mono">Cost: {up.cost}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AFK Setup & Key Sources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">How to AFK Tower</h2>
            <ul className="space-y-4">
              {afkSetup.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-red)] shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Tower Key Sources</h2>
            <div className="space-y-4">
              {keySources.map((s, i) => (
                <div key={i} className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <div className="text-white font-bold mb-1">{s.island}</div>
                  <div className="text-xs text-blue-400 mb-1 uppercase font-mono">{s.enemy}</div>
                  <div className="text-[10px] text-gray-500 italic">{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shop Items */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Tower Backup Shop</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {shopItems.map((item, i) => (
                <div key={i} className="bg-black/40 border border-white/10 p-4 rounded-xl text-center">
                  <div className="text-[10px] font-black text-white mb-2 uppercase truncate">{item.name}</div>
                  <div className="text-sm font-bold text-orange-400">{item.cost}</div>
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
