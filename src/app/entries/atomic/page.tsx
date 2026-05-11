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
    title: `How to Get Atomic in Sailor Piece | ${siteConfig.name}`,
    description: "Atomic guide for Sailor Piece with obtainment steps, NPC location, materials, questline, mastery, and evolution path notes.",
    openGraph: {
      title: `How to Get Atomic in Sailor Piece | ${siteConfig.name}`,
      description: "Atomic guide for Sailor Piece with obtainment steps, NPC location, materials, questline, mastery, and evolution path notes.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `How to Get Atomic in Sailor Piece | ${siteConfig.name}`,
      description: "Atomic guide for Sailor Piece with obtainment steps, NPC location, materials, questline, mastery, and evolution path notes.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  { label: "NPC", value: "Atomic NPC" },
  { label: "Island", value: "Lawless Island" },
  { label: "Base weapon", value: "Shadow" },
  { label: "Cost", value: "45,000 Gems" },
];

const moveset = [
  { key: "M1", videoSrc: "/uploads/atomic-m1.webm", poster: "/uploads/atomic-m1.webp", description: "Basic combo attack." },
  { key: "Z", videoSrc: "/uploads/atomic-z.webm", poster: "/uploads/atomic-z.webp", description: "Launch an upward attack, smash the ground, then dash forward with a hard hit." },
  { key: "X", videoSrc: "/uploads/atomic-x.webm", poster: "/uploads/atomic-x.webp", description: "Create a cyclone of slashes and then drop down to perform a smash." },
  { key: "C", videoSrc: "/uploads/atomic-c.webm", poster: "/uploads/atomic-c.webp", description: "Create a wide barrage of slashes, pause briefly, and then launch a massive smash attack." },
  { key: "V", videoSrc: "/uploads/atomic-v.webm", poster: "/uploads/atomic-v.webp", description: "Use a cutscene move that darkens the area and drops devastating damage onto the ground." },
  { key: "F", videoSrc: "/uploads/atomic-f.webm", poster: "/uploads/atomic-f.webp", description: "Create a dark purple domain and unleash a massive area attack after completing mastery." },
];

const masteryTasks = [
  { step: "Quest 1", objective: "Kill the Atomic Boss 20 times on Hard or Extreme difficulty" },
  { step: "Quest 2", objective: "Obtain the Eminence clan" },
  { step: "Quest 3", objective: "Reach Floor 51 on the Infinite Tower 5 times" },
  { step: "Reward", objective: "Unlock F move on Atomic" },
];

const relatedPages = [
  { title: "Shadow", summary: "Dungeon Island sword, also searched as CID V1, that acts as the direct base weapon for Atomic.", href: "/entries/shadow" },
  { title: "Abyssal Empress", summary: "Tower Island endgame sword earned through Infinite Tower grinding or by buying it with Tower Tokens.", href: "/entries/abyssal-empress" },
  { title: "Weapons and Swords", summary: "Current sword roster and progression routes, from starter sellers to late-game upgrade chains and shared upgrade systems.", href: "/entries/weapons-overview" },
  { title: "Blessings System", summary: "Shibuya Station upgrade system for swords and specs, with shared B1 to B10 materials and stat gains.", href: "/entries/blessings-system" },
  { title: "Spec Passives", summary: "Judgement Island passive system that adds a rerolled buff layer onto your swords and fighting styles.", href: "/entries/spec-passives-overview" },
];

export default function Atomic() {
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
          <span className="text-gray-300">Atomic</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Atomic
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Lawless Island endgame sword, also called CID V2, that upgrades directly from Shadow.
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
              src="/images/hero/weapon-atomic.webp" 
              alt="Atomic hero image" 
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
                <span>Atomic is bought from the Atomic NPC on Lawless Island after you already own Shadow.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>The unlock needs the Eminence Incarnate title, 45,000 Gems, four Atomic Boss materials, 80 Abyss Sigils, and the base Shadow sword.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Atomic has its own F move mastery route on Lawless Island and is currently one of the strongest swords in the game.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Travel to Lawless Island and go to the right corner to find the Atomic NPC.</span>
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
                    <td className="py-3 px-4 font-semibold text-blue-400">Base Weapon</td>
                    <td className="py-3 px-4 text-white"><Link href="/entries/shadow" className="text-blue-300 hover:text-blue-200 underline decoration-white/30 underline-offset-4">Shadow</Link></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-red-500">Title</td>
                    <td className="py-3 px-4 text-white">Eminence Incarnate</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-blue-400">Gems</td>
                    <td className="py-3 px-4 text-white">45,000</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/atomicomen.webp" alt="Atomic Omen" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-purple-400">Atomic Omen</span>
                          <div className="text-xs text-gray-500 flex items-center gap-1"><span className="text-blue-400">0.3% - 0.6%</span> Drop Rate</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x1</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/eminenceessence.webp" alt="Eminence Essence" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-purple-400">Eminence Essence</span>
                          <div className="text-xs text-gray-500 flex items-center gap-1"><span className="text-blue-400">0.7% - 1.15%</span> Drop Rate</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x3</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/shadowremnant.webp" alt="Shadow Remnant" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-300">Shadow Remnant</span>
                          <div className="text-xs text-gray-500 flex items-center gap-1"><span className="text-blue-400">2.85% - 4.5%</span> Drop Rate</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x9</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/magicshard.webp" alt="Magic Shard" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-blue-200">Magic Shard</span>
                          <div className="text-xs text-gray-500 flex items-center gap-1"><span className="text-blue-400">8.75% - 12.5%</span> Drop Rate</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x16</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/abysssigil.webp" alt="Abyss Sigil" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-red-500">Abyss Sigil</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x80</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-400">Race / Clan / Trait</td>
                    <td className="py-3 px-4 text-gray-500 italic">None required</td>
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

        {/* Content Section: Mastery Tasks */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Atomic F Move Mastery</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Step</th>
                    <th className="py-4 px-4">Objective</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {masteryTasks.map((task, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-semibold text-[var(--accent-red)]">{task.step}</td>
                      <td className="py-3 px-4 text-white">{task.objective}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
