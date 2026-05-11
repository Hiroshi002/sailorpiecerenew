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
    title: `How to Get Sun God in Sailor Piece | ${siteConfig.name}`,
    description: "Sun God guide for Sailor Piece with obtainment steps, NPC location, materials, questline, and mastery notes.",
    openGraph: {
      title: `How to Get Sun God in Sailor Piece | ${siteConfig.name}`,
      description: "Sun God guide for Sailor Piece with obtainment steps, NPC location, materials, questline, and mastery notes.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `How to Get Sun God in Sailor Piece | ${siteConfig.name}`,
      description: "Sun God guide for Sailor Piece with obtainment steps, NPC location, materials, questline, and mastery notes.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  { label: "NPC", value: "Buy Sun God NPC" },
  { label: "Island", value: "Slayer Island" },
  { label: "Required Title", value: "Sun Dancer" },
  { label: "Tier", value: "S+" },
];

const moveset = [
  { key: "M1", videoSrc: "", poster: "", description: "Basic combo attack." },
  { key: "Z", videoSrc: "", poster: "", description: "Unleash a sun-infused strike dealing high fire damage." },
  { key: "X", videoSrc: "", poster: "", description: "Create a solar explosion around the user." },
  { key: "C", videoSrc: "", poster: "", description: "Dash forward with a flaming trail, slashing all enemies in path." },
  { key: "V", videoSrc: "", poster: "", description: "Summon solar pillars to strike down from the sky." },
  { key: "F", videoSrc: "", poster: "", description: "Ultimate sun god transformation or massive solar blast." },
];

const relatedPages = [
  { title: "Weapons and Swords", summary: "Current sword roster and progression routes, from starter sellers to late-game upgrade chains.", href: "/entries/weapons-overview" },
  { title: "Bosses", summary: "Sun God boss HP, spawn timing, and normalized boss-drop rates.", href: "/entries/bosses-guide" },
  { title: "Titles", summary: "Sun Dancer title route, buff, and drop chance.", href: "/entries/titles-overview" },
  { title: "Sea 2 Guide", summary: "Main update hub for the current Sea 2 expansion and new systems.", href: "/sea-2" },
];

export default function SunGod() {
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
          <span className="text-gray-300">Sun God</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Sun God
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              S+ current-update Sun God sword route on Slayer Island, playing like a more damage-focused Ice Queen with slightly less versatility.
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
              src="/images/hero/sungod.webp" 
              alt="Sun God hero image" 
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
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Sun God is now ranked S+ as a damage-forward current-update sword.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Sun God plays like Ice Queen with more of the value pushed into raw damage and slightly less of the kit value in versatility.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Sun God is bought from the Buy Sun God NPC behind the Sun God world boss on top of a hill on Slayer Island.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>The unlock needs the Sun Dancer title, 2 Sun Essence, 5 Solar Shard, 9 Flame Pulse, and 16 Divine Remnant.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Farm the Sun God world boss for the title and required materials.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Section: Required materials */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Required Materials and Gates</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Requirement</th>
                    <th className="py-4 px-4">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-red-500">Title</td>
                    <td className="py-3 px-4 text-white">Sun Dancer</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-blue-400">NPC Location</td>
                    <td className="py-3 px-4 text-white">Behind the Sun God world boss on top of a hill</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/sunessence.webp" alt="Sun Essence" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-purple-400">Sun Essence</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x2</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/solarshard.webp" alt="Solar Shard" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-purple-400">Solar Shard</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x5</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/flamepulse.webp" alt="Flame Pulse" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-orange-400">Flame Pulse</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x9</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/divineremnant.webp" alt="Divine Remnant" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-blue-200">Divine Remnant</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x16</td>
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
