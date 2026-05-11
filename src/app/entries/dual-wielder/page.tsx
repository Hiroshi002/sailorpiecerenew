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
    title: `Dual Wielder | ${siteConfig.name}`,
    description: "Dual Wielder Sailor Piece sword guide for the Minotaur Raid route, with standard M1, Z, X, C, V, and F moves and no separate F move mastery route.",
    openGraph: {
      title: `Dual Wielder | ${siteConfig.name}`,
      description: "Dual Wielder Sailor Piece sword guide for the Minotaur Raid route, with standard M1, Z, X, C, V, and F moves and no separate F move mastery route.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Dual Wielder | ${siteConfig.name}`,
      description: "Dual Wielder Sailor Piece sword guide for the Minotaur Raid route, with standard M1, Z, X, C, V, and F moves and no separate F move mastery route.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Type",
    "value": "Sword"
  },
  {
    "label": "Update status",
    "value": "Ranked current-update sword"
  },
  {
    "label": "Island",
    "value": "Blue Planet / Minotaur Raid"
  },
  {
    "label": "Tier",
    "value": "S+"
  }
];

const moveset = [
  {
    "key": "M1",
    "description": "Fast dual-sword combo attacks.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "Z",
    "description": "Cross-slash dealing high damage to a single target.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "X",
    "description": "Spinning attack that damages nearby enemies.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "C",
    "description": "Rapid flurry of slashes in front of the user.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "V",
    "description": "Powerful dual-blade slam causing an shockwave.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "F",
    "description": "Ultimate dual-blade technique, high DPS focus.",
    "videoSrc": "",
    "poster": ""
  }
];

const routeDetails = [
  { field: "Obtainment", details: "Minotaur Raid direct drop" },
  { field: "Drop Rates (100% Luck)", details: "Easy: 0.26%, Medium: 0.40%, Hard: 0.64%, Extreme: 0.94%" },
  { field: "F Move", details: "Included by default; no separate mastery route" },
  { field: "Materials", details: "No material bundle confirmed; farm the raid route" }
];

const relatedPages = [
  {
    "href": "/entries/weapons-overview",
    "title": "Weapons and Swords",
    "summary": "Current sword roster and progression routes, now including Dual Wielder."
  },
  {
    "href": "/entries/raids-overview",
    "title": "Raids",
    "summary": "Blue Planet Minotaur Raid route where Dual Wielder is dropped."
  },
  {
    "href": "/sea-2",
    "title": "Sea 2 Guide",
    "summary": "Main update hub for the current Sea 2 expansion."
  }
];

export default function DualWielderPage() {
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
          <Link href="/weapons" className="hover:text-[var(--accent-red)] transition-colors">Weapons</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Dual Wielder</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Dual Wielder
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              S+ current-update sword from Minotaur Raid and the current pure DPS king, with slightly weaker AoE than wider rivals like Ice Queen.
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
              src="/images/hero/dualwielder.webp" 
              alt="Dual Wielder Sword" 
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
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Dual Wielder is ranked S+ and is currently treated as the pure DPS king among sword routes.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Its main weakness is AoE: it does not cover as broadly as rivals such as Ice Queen, but it performs extremely well everywhere else.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Dual Wielder is connected to the Minotaur Raid route, matching the Dual Swordsman title source.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>The F move is included by default and does not need a separate mastery route.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Section: Route Checklist */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Route Checklist</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Field</th>
                    <th className="py-4 px-4">Current Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {routeDetails.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-semibold text-[var(--accent-red)]">{row.field}</td>
                      <td className="py-3 px-4 text-white">{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Content Section: Moveset */}
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
        
        {/* Related Pages */}
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
        
      </main>

      <Footer />
    </div>
  );
}
