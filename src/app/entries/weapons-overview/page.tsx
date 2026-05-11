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
    title: `Sailor Piece Weapons | ${siteConfig.name}`,
    description: "Sailor Piece weapons guide with sword pages, obtainment routes, materials, evolutions, mastery paths, and F move routes.",
    openGraph: {
      title: `Sailor Piece Weapons | ${siteConfig.name}`,
      description: "Sailor Piece weapons guide with sword pages, obtainment routes, materials, evolutions, mastery paths, and F move routes.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Sailor Piece Weapons | ${siteConfig.name}`,
      description: "Sailor Piece weapons guide with sword pages, obtainment routes, materials, evolutions, mastery paths, and F move routes.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Published sword pages",
    "value": "18"
  },
  {
    "label": "Direct evolutions",
    "value": "Shadow to Atomic, Jinwoo to Shadow Monarch, Aizen to True Aizen"
  },
  {
    "label": "Shared blessing route",
    "value": "Blessing NPC at Shibuya Station"
  },
  {
    "label": "Shared passive route",
    "value": "Spec Passives at Judgement Island"
  }
];

const moveset: any[] = [];

const routeDetails: any[] = [];

const relatedPages = [
  {
    "href": "/entries/anti-magic/index",
    "title": "Anti Magic",
    "summary": "Asta-themed Crystal Defense sword with boss-drop rates up to 0.5224% on deeper waves and a 5,000 Crystal Coin shop fallback."
  },
  {
    "href": "/entries/katana/index",
    "title": "Katana",
    "summary": "Starter sword sold on Starter Island and the first real sword pickup for most sword builds."
  },
  {
    "href": "/entries/dark-blade/index",
    "title": "Dark Blade",
    "summary": "Early upgrade sword from Snow Island that is usually the first big jump after Katana."
  },
  {
    "href": "/entries/gryphon/index",
    "title": "Gryphon",
    "summary": "Straight seller sword from Shibuya Station and one of the simpler ways to step into stronger swords."
  },
  {
    "href": "/entries/saber/index",
    "title": "Excalibur (Saber Sword)",
    "summary": "Boss Island sword, also listed as Saber Sword in some guides, that can be earned through boss farming or by spending Boss Tickets."
  },
  {
    "href": "/entries/ragna/index",
    "title": "Ragna",
    "summary": "Snow Island dragon sword route with a visible seller and mastery NPC, but a material line that newer trackers often treat as event-locked or unavailable."
  },
  {
    "href": "/entries/jinwoo/index",
    "title": "Jinwoo",
    "summary": "Sailor Island trainer sword with a full questline and a boss-material grind that later upgrades into Shadow Monarch."
  },
  {
    "href": "/entries/manipulator-sword/index",
    "title": "Manipulator Sword (Aizen Sword)",
    "summary": "Late-game Hollow Island (Hueco Mundo) sword that starts with a full trainer questline and then asks for boss materials and gems."
  },
  {
    "href": "/entries/true-aizen/index",
    "title": "True Aizen / True Manipulator",
    "summary": "Soul Dominion upgrade sword that builds directly on the Manipulator Sword and needs boss materials, a title, and unlocked island access."
  },
  {
    "href": "/entries/yamato/index",
    "title": "Yamato",
    "summary": "Judgement Island sword that asks for gems, a title, a race, and a full set of Yamato boss drops."
  },
  {
    "href": "/entries/shadow-monarch/index",
    "title": "Shadow Monarch",
    "summary": "Dungeon Island upgrade sword that consumes Jinwoo and a full set of Shadow Monarch boss drops."
  },
  {
    "href": "/entries/ice-queen/index",
    "title": "Ice Queen",
    "summary": "Boss Island late-game sword built around the Ice Queen boss, Frost Empress title, and a full bundle of frost materials."
  },
  {
    "href": "/entries/blessings-system/index",
    "title": "Blessings System",
    "summary": "Shibuya Station upgrade system for swords and specs, with shared B1 to B10 materials and stat gains."
  },
  {
    "href": "/entries/spec-passives-overview/index",
    "title": "Spec Passives",
    "summary": "Judgement Island passive system that adds a rerolled buff layer onto your swords and fighting styles."
  },
  {
    "href": "/entries/titles-overview/index",
    "title": "Titles",
    "summary": "Damage, farming, event, and exclusive titles used to push your Sailor Piece build further."
  },
  {
    "href": "/entries/races-overview/index",
    "title": "Races",
    "summary": "Race rerolls, passive bonuses, and build-defining races used by late-game weapons and specs."
  },
  {
    "href": "/entries/shadow/index",
    "title": "Shadow",
    "summary": "Dungeon Island sword, also searched as CID V1, that acts as the direct base weapon for Atomic."
  },
  {
    "href": "/entries/atomic/index",
    "title": "Atomic",
    "summary": "Lawless Island endgame sword, also called CID V2, that upgrades directly from Shadow."
  },
  {
    "href": "/entries/abyssal-empress/index",
    "title": "Abyssal Empress",
    "summary": "Tower Island endgame sword earned through Infinite Tower grinding or by buying it with Tower Tokens."
  },
  {
    "href": "/entries/ichigo/index",
    "title": "Ichigo",
    "summary": "Hollow Island sword route with a Boss Ticket shortcut, boss-drop crafting path, and Hollow-themed burst moves."
  },
  {
    "href": "/entries/rimuru/index",
    "title": "Rimuru",
    "summary": "Slime Island sword route tied to the slime collection puzzle, Slime Key crafting, and one of the strongest late-game boss grinds."
  },
  {
    "href": "/entries/escanor/index",
    "title": "Escanor",
    "summary": "Boss Rush weapon route with fire-heavy AoE moves, Pride synergy, and the matching Sun Armor grind on Sailor Island."
  },
  {
    "href": "/entries/dungeon-pieces/index",
    "title": "Dungeon Pieces",
    "summary": "Six hidden collectibles tied to the Dungeon Master questline that unlock the full dungeon system on Dungeon Island."
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
          <span className="text-gray-300">Weapons and Swords</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Weapons and Swords
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Current sword roster and progression routes, from starter sellers to late-game upgrade chains and shared upgrade systems.
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
