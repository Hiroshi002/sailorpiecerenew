import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import VideoMovesetCard from "@/components/VideoMovesetCard";

export const metadata: Metadata = {
  title: "Crystal Defense | Sailor Piece Punch Island Mode",
  description: "Crystal Defense Sailor Piece page with the back of Punch Island location, 1 Crystal Key entry, boss waves every 5 rounds, shop prices, and upgrade costs.",
};

const metaItems = [
  {
    "label": "Location",
    "value": "Back of Punch Island"
  },
  {
    "label": "Sea",
    "value": "Sea 2"
  },
  {
    "label": "Entry item",
    "value": "Crystal Key"
  },
  {
    "label": "Key source",
    "value": "Any Sea 2 NPC"
  },
  {
    "label": "Mode goal",
    "value": "Protect the crystal from waves of enemies"
  },
  {
    "label": "Boss cadence",
    "value": "Random boss every 5 waves"
  },
  {
    "label": "Best AFK style",
    "value": "Cosmic Being V from the middle or crystal"
  },
  {
    "label": "Side systems",
    "value": "Leaderboard, shop, upgrade shop"
  }
];

const moveset: any[] = [];

const routeDetails: any[] = [];

const relatedPages = [
  {
    "href": "/entries/../sea-2/index",
    "title": "Sea 2 Guide",
    "summary": "Main Sea 2 overview page covering islands, unlock routes, bosses, sea beasts, and the newer update systems."
  },
  {
    "href": "/entries/material-sourcing/index",
    "title": "Materials Overview",
    "summary": "Current material rarities, chest contents, drop sources, tracked rates, and what each item is used for."
  },
  {
    "href": "/entries/anti-magic/index",
    "title": "Anti Magic",
    "summary": "Asta-themed Crystal Defense sword that drops from the 5-wave boss loop, normalizes to about 0.048% to 0.064% on the estimated 100%-luck baseline, and also appears in the Defense Merchant shop."
  },
  {
    "href": "/entries/demon-wing/index",
    "title": "Demon Wing",
    "summary": "Crystal Defense boss-drop accessory with an estimated 100%-luck rate band of about 0.060% to 0.080% from the published boss checks."
  },
  {
    "href": "/entries/clover-outfit/index",
    "title": "Clover Outfit",
    "summary": "Crystal Defense shop accessory sold for 850 Crystal Coins, now with the current base and E10 stat lines confirmed."
  },
  {
    "href": "/entries/destroyer-aura/index",
    "title": "Destroyer Aura",
    "summary": "Crystal Defense shop aura currently shown at 2,000 Crystal Coins."
  },
  {
    "href": "/entries/devil-clan/index",
    "title": "Devil Clan",
    "summary": "Crystal Defense update clan with +42% Damage, +60% Max HP, +12% Sword Damage, +15% Luck, and a 30% +1 drop passive."
  },
  {
    "href": "/entries/demonic-bloodline/index",
    "title": "Demonic Bloodline",
    "summary": "New bloodline with +32% Damage, +12% Luck Multi, +2% Lifesteal, +12% Sword Damage Multi, and +40% Max HP."
  },
  {
    "href": "/entries/demon-dweller/index",
    "title": "Demon Dweller",
    "summary": "Crystal Defense boss-wave title with +100% Damage."
  },
  {
    "href": "/entries/bosses-guide/index",
    "title": "Bosses",
    "summary": "Open-world, spawnable, dungeon, and tower bosses with Boss Island summon costs, major drops, and farming routes."
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
          <span className="text-gray-300">Crystal Defense</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Crystal Defense
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Punch Island survival mode at the back of Sea 2 where you spend 1 Crystal Key to defend a crystal, push through boss waves every 5 rounds, and farm Crystal Coins for the new shop and upgrades.
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
