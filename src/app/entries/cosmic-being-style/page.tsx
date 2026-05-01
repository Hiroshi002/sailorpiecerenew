import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import VideoMovesetCard from '@/components/VideoMovesetCard';

export const metadata: Metadata = {
  title: "How to Get Cosmic Being in Sailor Piece",
  description: "Cosmic Being guide for Sailor Piece with trainer location, quest steps, materials, mastery, and F move progression."
};

export default function Page() {
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
          <span className="text-gray-300">Cosmic Being</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
                Wiki Entry
              </div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest clip-button">
                Sea 2
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Cosmic Being
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Sea 2 fighting style from the Cosmic Being NPC on Punch Island or as a direct Garou world-boss unlock, with the material route, boss drops, and Cosmic Master F-move steps.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-xs text-gray-400 mb-1">Route</div>
                <div className="text-sm font-semibold text-white">NPC Trade / World Boss</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-xs text-gray-400 mb-1">World Boss</div>
                <div className="text-sm font-semibold text-white">Garou (Punch Island)</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-xs text-gray-400 mb-1">Boss HP</div>
                <div className="text-sm font-semibold text-red-400">499,999,997,952</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-xs text-gray-400 mb-1">Title Gate</div>
                <div className="text-sm font-semibold text-[var(--accent-gold)]">Cosmic Being</div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(255,30,56,0.2)] bg-black relative aspect-square">
            <Image 
              src="/images/hero/melee-cosmicbeing.webp" 
              alt="Cosmic Being hero image" 
              fill
              className="object-cover object-top opacity-90 transition-opacity duration-500 hover:opacity-100"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Content Section: Overview */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)] opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">Overview</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Cosmic Being is one of the newly tracked Sea 2 fighting styles.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>It can be obtained either by trading materials to the Cosmic Being NPC on Punch Island or by defeating the Garou world boss tied to the route.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>The NPC route requires the Cosmic Being title, 12 Cosmic Essence, 8 Star Mark, 5 Galaxy Shard, and 2 Monster Pulse.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Garou has 499,999,997,952 HP and drops Cosmic Essence, Star Mark, Galaxy Shard, Cosmic Body, Monster Pulse, Cosmic Being, Guild Key, Aura Crate, and Cosmetic Crate.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>The tracked Garou row lists Cosmic Being at 0.525%, which this page treats as the direct style unlock chance.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Garou appears 30 minutes after server start and then 30 minutes after the previous kill, while also using an adaptation mechanic at each 25% HP lost.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Cosmic Being also has a separate Cosmic Master questline for the F move: defeat the world boss 15 times, reach Infinite Tower floor 90+ five times, and obtain Astral Bloodline.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Section: How to get Cosmic Being */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">How to obtain Cosmic Being</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">1.</span>
                <span>Talk to the Cosmic Being NPC on top of a building in Punch Island and trade the required materials listed below.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">2.</span>
                <span>Alternatively, defeat the Garou world boss in the middle of Punch Island for a direct drop chance.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Section: Required materials */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Requirements & Materials</h2>
            
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
                    <td className="py-3 px-4 text-white"><Link href="/entries/cosmic-being-style#current-cosmic-being-boss-details" className="text-[var(--accent-gold)] hover:text-yellow-200 underline decoration-white/30 underline-offset-4">Cosmic Being</Link></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">NPC Location</td>
                    <td className="py-3 px-4 text-white">Cosmic Being NPC on top of a building in Punch Island</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/cosmicessence.webp" alt="Cosmic Essence" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-fuchsia-400">Cosmic Essence</span>
                          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">Epic</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x12</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/starmark.webp" alt="Star Mark" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-yellow-400">Star Mark</span>
                          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">Legendary</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x8</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/galaxyshard.webp" alt="Galaxy Shard" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-yellow-400">Galaxy Shard</span>
                          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">Legendary</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x5</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/monsterpulse.webp" alt="Monster Pulse" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-red-500">Monster Pulse</span>
                          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">Mythical</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Content Section: F Move Prep Tracker */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Cosmic Being F Move Prep Tracker</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4 w-1/3">Requirement</th>
                    <th className="py-4 px-4">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Base style</td>
                    <td className="py-3 px-4 text-white">Cosmic Being</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Extra unlock</td>
                    <td className="py-3 px-4 text-[var(--accent-gold)]">Cosmic Master questline</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">NPC or island</td>
                    <td className="py-3 px-4 text-white">Cosmic Master NPC on top of a building in the back of Punch Island</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">First confirmed step</td>
                    <td className="py-3 px-4 text-white">Cosmic Being Mastery 1: Defeat Cosmic Being world boss 15 times</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Second confirmed step</td>
                    <td className="py-3 px-4 text-white">Cosmic Being Mastery 2: Reach Infinite Tower floor 90+ five times</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Final confirmed step</td>
                    <td className="py-3 px-4 text-white">Cosmic Being Mastery Final: Obtain the Astral Bloodline</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors border-t border-white/20">
                    <td className="py-3 px-4 font-semibold text-green-400">Reward</td>
                    <td className="py-3 px-4 text-green-300 font-medium">Unlocks the F move for Cosmic Being</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Content Section: Cosmic Garou mechanics */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Garou World Boss Mechanics</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Garou first spawns in the middle of Punch Island 30 minutes after server start and then respawns 30 minutes after the previous kill.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>The timer only resets after the previous boss has been killed, so missed or stalled spawns should not be treated like a stacking timer.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Boss HP is not currently reported to scale upward with extra players attacking it.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>At each 25% HP lost, the boss can trigger one of four adaptations: <span className="text-yellow-400">Harden</span> (+10% extra damage reduction on top of base 40%), <span className="text-red-400">Rage</span> (+25% more damage against players), <span className="text-blue-400">Accelerate</span> (+25% movement speed), or <span className="text-green-400">Regenerate</span> (10% of lost HP).</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>That adaptation passive can only activate 3 times during one boss life, and the same adaptation can repeat again in a row.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Section: Moveset */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Moveset</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoMovesetCard move={{ key: "M1", videoSrc: "/uploads/cosmic-being-m1.webm", poster: "/uploads/cosmic-being-m1.webp", description: "Basic combo or default attack note.", cooldown: "0s CD" }} />
              <VideoMovesetCard move={{ key: "Z", videoSrc: "/uploads/cosmic-being-z.webm", poster: "/uploads/cosmic-being-z.webp", description: "No description provided." }} />
              <VideoMovesetCard move={{ key: "X", videoSrc: "/uploads/cosmic-being-x.webm", poster: "/uploads/cosmic-being-x.webp", description: "No description provided." }} />
              <VideoMovesetCard move={{ key: "C", videoSrc: "/uploads/cosmic-being-c.webm", poster: "/uploads/cosmic-being-c.webp", description: "No description provided." }} />
              <VideoMovesetCard move={{ key: "V", videoSrc: "/uploads/cosmic-being-v.webm", poster: "/uploads/cosmic-being-v.webp", description: "No description provided." }} />
              <VideoMovesetCard move={{ key: "F", videoSrc: "/uploads/cosmic-being-f.webm", poster: "/uploads/cosmic-being-f.webp", description: "Use this row for the mastery, awakening, or final move if the style has one." }} />
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
