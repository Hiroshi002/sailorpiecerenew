import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import VideoMovesetCard from "@/components/VideoMovesetCard";

export const metadata: Metadata = {
  title: "Sailor Piece Guild Key Drop Chance | Guilds, Sources, Create Cost",
  description: "Sea 2 guilds guide for Sailor Piece with the Guild Key drop chance, Guild Key sources, create-guild requirements, and current guild upgrade stats.",
};

const metaItems = [
  {
    "label": "Status",
    "value": "Create and join menu confirmed from current in-game screenshot"
  },
  {
    "label": "Sea",
    "value": "Sea 2"
  },
  {
    "label": "Main item",
    "value": "Guild Key"
  },
  {
    "label": "Level gate",
    "value": "10,000"
  },
  {
    "label": "Sourcing note",
    "value": "Current Sea 2 range: 0.00019342% on Delinquent up to 0.011% on Sea Serpent and Kraken"
  },
  {
    "label": "Tracked upgrades",
    "value": "6 confirmed guild upgrade lines"
  }
];

const moveset: any[] = [];

const routeDetails: any[] = [];

const relatedPages = [
  {
    "href": "/entries/../sea-2/index",
    "title": "Sea 2 Guide",
    "summary": "Sea 2 Bloodlines system page with the corrected confirmed stat table now tracked for Commoner, Demonblood, Hunter, Nightfall, Stormborn, Dawnbringer, Astral, Vizard, Primordial, and Demonic."
  },
  {
    "href": "/entries/relics-system/index",
    "title": "Relics",
    "summary": "Sea 2 Relics system page with the Relic Crafter NPC, the currently confirmed forge recipes, and the tracked Relic Part enemy routes by island, level band, and current drop chances."
  },
  {
    "href": "/entries/guild-key/index",
    "title": "Guild Key",
    "summary": "How to get Guild Key in Sailor Piece, what it is used for, and the current Guild Key drop chance routes across Sea 2 normal enemies and bosses."
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
          <span className="text-gray-300">Guilds</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Guilds
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Sea 2 Guilds system page with the confirmed create-guild requirements, the now-tracked Guild Key drop rates and Guild Key drop chance routes from current Sea 2 mobs and bosses, and the current guild-upgrade board showing member capacity, damage, crit damage, crit chance, HP, and luck level caps plus per-level gains.
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
        <div className="panel-action clip-diagonal p-8 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)] opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Overview</h2>
            <ul className="space-y-4">
              
            </ul>
          </div>
        </div>

        {/* Content Section: Route Details */}
        {routeDetails.length > 0 && (
          <div className="panel-action clip-diagonal p-8 mb-8 relative overflow-hidden group">
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
          <div className="panel-action clip-diagonal p-8 mb-8 relative overflow-hidden group">
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
