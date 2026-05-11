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
    title: `Sailor Piece Accessories | ${siteConfig.name}`,
    description: "Sailor Piece accessories guide with stats, obtainment routes, enchant ladders, and E0 to E10 comparison tables.",
    openGraph: {
      title: `Sailor Piece Accessories | ${siteConfig.name}`,
      description: "Sailor Piece accessories guide with stats, obtainment routes, enchant ladders, and E0 to E10 comparison tables.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Sailor Piece Accessories | ${siteConfig.name}`,
      description: "Sailor Piece accessories guide with stats, obtainment routes, enchant ladders, and E0 to E10 comparison tables.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Main source",
    "value": "Bosses and shop routes"
  },
  {
    "label": "Upgrade route",
    "value": "Enchanting at Shibuya Station"
  },
  {
    "label": "Best current DPS pick",
    "value": "Dual Outfit"
  },
  {
    "label": "Best shop piece",
    "value": "Dual Outfit (Raid Shop)"
  }
];

const facts = [
  "Accessories are separate from cosmetics and auras and usually come from bosses, shops, or special quest rewards.",
  "Most strong accessories add a mix of defense, damage, and damage reduction.",
  "Late-game accessories matter even more because they can be enchanted at Shibuya Station.",
  "Crystal Defense now adds Demon Wing as a boss-drop accessory and Clover Outfit as a Crystal Coin shop accessory on Punch Island.",
  "The current update adds Dual Outfit, Sun Outfit, and Spirit Outfit as newly captured outfit accessories with E0 and E10 stat lines."
];

const accessories = [
  {
    name: "Dual Outfit",
    rarity: "Mythical",
    stats: "130% Defense, 110% Damage, 15% Damage Reduction",
    source: "Raid Shop for 500 Raid Coins; Minotaur Raid direct drop",
    color: "text-red-400"
  },
  {
    name: "Sun Outfit",
    rarity: "Mythical",
    stats: "125% Defense, 105% Damage, 15% Damage Reduction",
    source: "Sun God world boss on Slayer Island",
    color: "text-red-400"
  },
  {
    name: "Demon Wing",
    rarity: "Mythical",
    stats: "125% Defense, 102% Damage, 15% Damage Reduction",
    source: "Crystal Defense boss every 5 waves",
    color: "text-red-400"
  },
  {
    name: "Spirit Outfit",
    rarity: "Mythical",
    stats: "120% Defense, 100% Damage, 15% Damage Reduction",
    source: "Spirit Warrior/Goku boss on Blue Planet",
    color: "text-red-400"
  }
];

const enchantComparison = [
  { name: "Dual Outfit", e0: "130/110/15", e10: "180/150/35" },
  { name: "Sun Outfit", e0: "125/105/15", e10: "175/145/35" },
  { name: "Demon Wing", e0: "125/102/15", e10: "175/142/35" },
  { name: "Spirit Outfit", e0: "120/100/15", e10: "170/140/35" }
];

const faq = [
  {
    question: "What do accessories do in Sailor Piece?",
    answer: "Accessories add major offensive and defensive stats and become much stronger when enchanted from E0 to E10."
  },
  {
    question: "Does the accessories page compare different enchant levels?",
    answer: "Yes. The accessories page includes comparison support so players can compare pieces at E0 through E10."
  },
  {
    question: "What is the best accessory in Sailor Piece?",
    answer: "The best accessory depends on the current build path, but Dual Outfit now leads the strongest captured broad stat line on the site at E10."
  }
];

const moveset: any[] = [];

const routeDetails: any[] = [];

const relatedPages = [
  {
    "href": "/entries/enchanting-accessories/index",
    "title": "Enchanting Accessories",
    "summary": "Shibuya Station accessory upgrade system with E1 to E10 scaling, duplicate copy costs, success rates, published checkpoint ladders, and full confirmed step-by-step routes for the tracked accessories."
  },
  {
    "href": "/entries/bosses-guide/index",
    "title": "Bosses",
    "summary": "Open-world, spawnable, dungeon, and tower bosses with Boss Island summon costs, major drops, and farming routes."
  },
  {
    "href": "/entries/cosmetics-overview/index",
    "title": "Cosmetics and Crates",
    "summary": "Stat cosmetics obtained from Cosmetic Crates, with the current rarity ladder and equip flow."
  },
  {
    "href": "/entries/crystal-defense/index",
    "title": "Crystal Defense",
    "summary": "Punch Island survival mode with 1 Crystal Key entry, boss waves every 5 rounds, a leaderboard, and separate shop and upgrade-shop layers."
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
          <span className="text-gray-300">Accessories</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Accessories
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Boss-drop and shop accessories with current stats, obtainment routes, and the accessory pieces players build around in late game.
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
                <li key={i} className="flex items-start gap-4 text-gray-300">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[var(--accent-red)] shrink-0 shadow-[0_0_8px_rgba(255,30,56,0.6)]" />
                  <span className="text-lg leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Current Accessory List */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Current Accessory List</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Accessory</th>
                    <th className="py-4 px-4">Rarity</th>
                    <th className="py-4 px-4">Stats</th>
                    <th className="py-4 px-4">How to get</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {accessories.map((acc, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-bold text-white">{acc.name}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-xs font-bold uppercase`}>
                          {acc.rarity}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-300 text-sm">{acc.stats}</td>
                      <td className="py-3 px-4 text-gray-400 text-xs">{acc.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Enchant Comparison */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Accessory Enchant Comparison (E0 vs E10)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Accessory</th>
                    <th className="py-4 px-4 text-center text-blue-400">E0 (Base)</th>
                    <th className="py-4 px-4 text-center text-[var(--accent-red)]">E10 (Max)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {enchantComparison.map((item, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-bold text-white">{item.name}</td>
                      <td className="py-3 px-4 text-center text-blue-300 font-mono">{item.e0}</td>
                      <td className="py-3 px-4 text-center text-red-300 font-mono font-bold">{item.e10}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-gray-500 italic">* Format: Defense / Damage / Damage Reduction</p>
          </div>
        </div>

        {/* FAQ Section */}
        {faq.length > 0 && (
          <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
            <div className="mb-4 relative z-10">
              <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">FAQ</h2>
              <div className="space-y-6">
                {faq.map((item, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-lg font-bold text-[var(--accent-red)] mb-2 uppercase tracking-tight">{item.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

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
