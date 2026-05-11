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
    title: `How to Get Abyssal Empress in Sailor Piece | ${siteConfig.name}`,
    description: "Abyssal Empress guide for Sailor Piece with obtainment steps, NPC location, materials, questline, mastery, and evolution path notes.",
    openGraph: {
      title: `How to Get Abyssal Empress in Sailor Piece | ${siteConfig.name}`,
      description: "Abyssal Empress guide for Sailor Piece with obtainment steps, NPC location, materials, questline, mastery, and evolution path notes.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `How to Get Abyssal Empress in Sailor Piece | ${siteConfig.name}`,
      description: "Abyssal Empress guide for Sailor Piece with obtainment steps, NPC location, materials, questline, mastery, and evolution path notes.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Main route",
    "value": "Tower Shop on Tower Island"
  },
  {
    "label": "Cost",
    "value": "4,000 Tower Tokens"
  },
  {
    "label": "Alt route",
    "value": "Rare Infinite Tower drop"
  },
  {
    "label": "Moves",
    "value": "Z, X, C, V, F"
  }
];

const facts = [
  "Abyssal Empress can be purchased from the Tower Shop on Tower Island for 4,000 Tower Tokens.",
  "The sword can also drop from Infinite Tower bosses, but the wiki still treats that route as very low chance.",
  "Abyssal Empress does not need an older sword evolution path and is instead a straight Infinite Tower grind.",
];

const moveset = [
  {
    "key": "M1",
    "description": "Basic combo attack.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "Z",
    "description": "Use a combo of slashes with the last attack turning into a dash.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "X",
    "description": "Perform multiple cuts and create a black hole that keeps dealing damage.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "C",
    "description": "Use a barrage of slashes in a small radius around the target zone.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "V",
    "description": "Unleash a powerful barrage of slashes in a big radius.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "F",
    "description": "Release a series of slashes that deal very high damage in a wide area.",
    "videoSrc": "",
    "poster": ""
  }
];

const routeDetails = [
  { field: "Tower Tokens", details: "4,000", link: "/entries/material-sourcing#material-tower-token" },
  { field: "Tower Key", details: "Needed to keep opening the Infinite Tower portal", link: "/entries/material-sourcing#material-tower-key" },
  { field: "Level gate", details: "Level 8,500 or higher for the Infinite Tower route" },
  { field: "Questline", details: "None published" },
];

const relatedPages = [
  {
    "href": "/entries/atomic/index",
    "title": "Atomic",
    "summary": "Lawless Island endgame sword, also called CID V2, that upgrades directly from Shadow."
  },
  {
    "href": "/entries/weapons-overview/index",
    "title": "Weapons and Swords",
    "summary": "Current sword roster and progression routes, from starter sellers to late-game upgrade chains and shared upgrade systems."
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
          <span className="text-gray-300">Abyssal Empress</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Abyssal Empress
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Tower Island endgame sword earned through Infinite Tower grinding or by buying it with Tower Tokens.
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
              src="/images/hero/weapon-abyssalempress.webp" 
              alt="Abyssal Empress Hero Image" 
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
                <li key={i} className="flex gap-4 group/item">
                  <div className="text-[var(--accent-red)] font-black text-xl italic group-hover/item:scale-125 transition-transform duration-300">0{i+1}</div>
                  <p className="text-gray-300 text-lg leading-relaxed font-medium border-b border-white/5 pb-4 w-full group-hover/item:text-white transition-colors">
                    {fact}
                  </p>
                </li>
              ))}
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
