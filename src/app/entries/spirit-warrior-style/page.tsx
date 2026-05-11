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
    title: `Spirit Warrior | ${siteConfig.name}`,
    description: "Spirit Warrior Sailor Piece fighting style guide with the full Blue Planet Empyrean Trainer questline, Empyrean bloodline gate, Spirit Stones, and more.",
    openGraph: {
      title: `Spirit Warrior | ${siteConfig.name}`,
      description: "Spirit Warrior Sailor Piece fighting style guide with the full Blue Planet Empyrean Trainer questline, Empyrean bloodline gate, Spirit Stones, and more.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Spirit Warrior | ${siteConfig.name}`,
      description: "Spirit Warrior Sailor Piece fighting style guide with the full Blue Planet Empyrean Trainer questline, Empyrean bloodline gate, Spirit Stones, and more.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Type",
    "value": "Fighting Style"
  },
  {
    "label": "Trainer",
    "value": "Empyrean Trainer"
  },
  {
    "label": "Island",
    "value": "Blue Planet"
  },
  {
    "label": "Tier",
    "value": "S+"
  }
];

const moveset = [
  {
    "key": "M1",
    "description": "Spirit-infused melee combo.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "Z",
    "description": "Spirit palm strike dealing knockback.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "X",
    "description": "Spirit surge around the user.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "C",
    "description": "Barrage of spirit-enhanced punches.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "V",
    "description": "Unleash a massive spirit wave.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "F",
    "description": "Spirit flight or ultimate spirit burst.",
    "videoSrc": "",
    "poster": ""
  }
];

const questSteps = [
  { field: "Training 1", details: "Consume 3 Spirit Stones (Kill NPCs on Blue Planet)" },
  { field: "Training 2", details: "Obtain Empyrean Bloodline" },
  { field: "Training 3", details: "Defeat 15 World Bosses using Melee" },
  { field: "Training 4", details: "Reach Wave 75+ in Crystal Defense 4 times" },
  { field: "Training 5", details: "Kill 10 Sea Beasts" },
  { field: "Training 6", details: "Kill 50 Spirit Warrior or Goku bosses" }
];

const relatedPages = [
  {
    "href": "/entries/specs-overview",
    "title": "Melees and Fighting Styles",
    "summary": "Current fighting style roster and progression routes."
  },
  {
    "href": "/sea-2",
    "title": "Sea 2 Guide",
    "summary": "Main update hub for the current Sea 2 expansion."
  }
];

export default function SpiritWarriorPage() {
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
          <Link href="/melees" className="hover:text-[var(--accent-red)] transition-colors">Melees</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Spirit Warrior</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Spirit Warrior
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              A-tier Sea 2 melee questline tied to Blue Planet and the Empyrean Trainer; usable damage, but weaker AoE and versatility keep it below meta styles.
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
              src="/images/hero/spiritwarrior.webp" 
              alt="Spirit Warrior Style" 
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
                <span>Spirit Warrior is an A-tier substitute melee for players who do not have meta styles yet.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>It has usable damage output, but its versatility and AoE hold it back.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Obtained through a long questline via the Empyrean Trainer on Blue Planet.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>The F move is included by default and does not have a separate mastery questline.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Section: Questline Checklist */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Questline Checklist</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Step</th>
                    <th className="py-4 px-4">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {questSteps.map((row, i) => (
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
