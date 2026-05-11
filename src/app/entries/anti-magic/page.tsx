import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import VideoMovesetCard from "@/components/VideoMovesetCard";
import { getSiteConfig } from "@/config/site";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Anti Magic | ${siteConfig.name}`,
    description: "Anti Magic Sailor Piece guide with the Asta alias, Crystal Defense route, 1 Crystal Key entry, the 5,000 Crystal Coin shop fallback, and the estimated 100%-luck drop range.",
    openGraph: {
      title: `Anti Magic | ${siteConfig.name}`,
      description: "Anti Magic Sailor Piece guide with the Asta alias, Crystal Defense route, 1 Crystal Key entry, the 5,000 Crystal Coin shop fallback, and the estimated 100%-luck drop range.",
      url: `${siteConfig.url}/entries/anti-magic`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Anti Magic | ${siteConfig.name}`,
      description: "Anti Magic Sailor Piece guide with the Asta alias, Crystal Defense route, 1 Crystal Key entry, the 5,000 Crystal Coin shop fallback, and the estimated 100%-luck drop range.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  { label: "Mode", value: "Crystal Defense" },
  { label: "Main alias", value: "Asta" },
  { label: "Location", value: "Punch Island (Sea 2)" },
  { label: "Entry cost", value: "1 Crystal Key" },
];

const moveset = [
  { key: "M1", videoSrc: "/uploads/anti-magic-m1.webm", poster: "", description: "Basic combo string, still being checked live." },
  { key: "Z", videoSrc: "/uploads/anti-magic-z.webm", poster: "", description: "No description provided." },
  { key: "X", videoSrc: "/uploads/anti-magic-x.webm", poster: "", description: "No description provided." },
  { key: "C", videoSrc: "/uploads/anti-magic-c.webm", poster: "", description: "No description provided." },
  { key: "V", videoSrc: "/uploads/anti-magic-v.webm", poster: "", description: "No description provided." },
  { key: "F", videoSrc: "/uploads/anti-magic-f.webm", poster: "", description: "No description provided." },
];

const routeDetails = [
  { field: "Mode", details: "Crystal Defense", link: "/entries/crystal-defense" },
  { field: "Location", details: "Back of Punch Island in Sea 2" },
  { field: "Entry cost", details: "1 Crystal Key", link: "/entries/material-sourcing" },
  { field: "Shop route", details: "Defense Merchant for 5,000 Crystal Coins" },
  { field: "Estimated 100%-luck", details: "0.048% (Early) - 0.064% (Wave 40)" },
  { field: "Shared drop pool", details: "Demon Wing (~0.060% - 0.080% luck-normalized)" },
];

const relatedPages = [
  { title: "Weapons Overview", summary: "Current sword roster and progression routes, from starter sellers to late-game upgrade chains.", href: "/entries/weapons-overview" },
  { title: "Crystal Defense", summary: "Punch Island survival mode with 1 Crystal Key entry and boss waves every 5 rounds.", href: "/entries/crystal-defense" },
  { title: "Material Sourcing", summary: "Current material rarities, chest contents, drop sources, and tracked rates.", href: "/entries/material-sourcing" },
  { title: "Demon Wing", summary: "Crystal Defense boss-drop accessory that shares the same 5-wave boss loop as Anti Magic.", href: "/entries/demon-wing" },
  { title: "Accessories", summary: "Boss-drop and shop accessories with current stats and obtainment routes.", href: "/entries/accessories-overview" },
  { title: "Bosses", summary: "Open-world, spawnable, dungeon, and tower bosses with summon costs and major drops.", href: "/entries/bosses-guide" },
];

export default function AntiMagic() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950">
      
      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 block">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 font-mono opacity-80">
          <Link href="/" className="hover:text-[var(--accent-red)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/weapons" className="hover:text-[var(--accent-red)] transition-colors">Weapons</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Anti Magic</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Anti Magic
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Sea 2 sword also called Asta that comes from Crystal Defense on Punch Island, either as a boss drop or a 5,000 Crystal Coin shop buy, while the full moveset and mastery path are still being checked live.
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
              src="/images/hero/antimagic.webp" 
              alt="Anti Magic hero image" 
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
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Overview &amp; How to Obtain</h2>
            <ul className="space-y-6">
              {[
                "Anti Magic is the new Asta-themed sword from the latest update wave.",
                "Travel to the back of Punch Island in Sea 2 and enter Crystal Defense.",
                "Spend 1 Crystal Key to start a run and defeat the random boss that spawns every 5 waves.",
                "Anti Magic is obtained as a boss drop or from the Defense Merchant for 5,000 Crystal Coins.",
                "The drop odds appear to scale with both wave depth and luck, normalising to about 0.048% - 0.064%.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                  <span className="text-[var(--accent-red)] mt-1.5">•</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Section: Route Details */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Confirmed Route Details</h2>
            
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
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-400">Moveset Note</td>
                    <td className="py-3 px-4 text-gray-500 italic">Mastery path still being confirmed live</td>
                  </tr>
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
