import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import VideoMovesetCard from '@/components/VideoMovesetCard';

export const metadata: Metadata = {
  title: "How to Get Alucard in Sailor Piece - Wiki Guide",
  description: "Alucard guide for Sailor Piece with trainer location, quest steps, materials, mastery, and F move progression."
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
          <span className="text-gray-300">Alucard</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Alucard
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Sailor Island sustain-focused fighting style with a Vampire race and Vampire King title gate.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-xs text-gray-400 mb-1">NPC</div>
                <div className="text-sm font-semibold text-white">Alucard Trainer</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-xs text-gray-400 mb-1">Island</div>
                <div className="text-sm font-semibold text-white">Sailor Island</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 col-span-2">
                <div className="text-xs text-gray-400 mb-1">Main role</div>
                <div className="text-sm font-semibold text-white">Lifesteal-heavy style with strong sustain</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 col-span-2 md:col-span-4">
                <div className="text-xs text-gray-400 mb-1">Cost</div>
                <div className="text-sm font-semibold text-[var(--accent-gold)]">6,500,000 Money and 10,000 Gems</div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(255,30,56,0.2)] bg-black relative aspect-square">
            <Image 
              src="/images/hero/melee-vampireking.webp" 
              alt="Alucard hero image" 
              fill
              className="object-cover object-top opacity-90 transition-opacity duration-500 hover:opacity-100"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Content Section: Overview */}
        <div className="panel-action clip-diagonal p-8 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)] opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Overview</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[var(--accent-red)] mt-1">•</span>
                <span>Alucard is a fighting style in Sailor Piece.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[var(--accent-red)] mt-1">•</span>
                <span>Alucard is known for lifesteal-heavy style with strong sustain.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[var(--accent-red)] mt-1">•</span>
                <span>Alucard is unlocked through Alucard Trainer on Sailor Island.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Section: How to obtain */}
        <div className="panel-action clip-diagonal p-8 mb-8 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">How to obtain Alucard</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[var(--accent-red)] mt-1">1.</span>
                <span>Travel to Sailor Island and find the Alucard Trainer near the water in the left corner of the island.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[var(--accent-red)] mt-1">2.</span>
                <span>Make sure you already have the Vampire race and Vampire King title before bringing the rest of the bundle.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Section: Required materials */}
        <div className="panel-action clip-diagonal p-8 mb-8 relative overflow-hidden group">
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
                    <td className="py-3 px-4 font-semibold text-green-400">Money</td>
                    <td className="py-3 px-4 text-white">6,500,000</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-blue-400">Gems</td>
                    <td className="py-3 px-4 text-white">10,000</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-purple-400">Race</td>
                    <td className="py-3 px-4 text-white"><Link href="/entries/races-overview" className="text-purple-300 hover:text-purple-200 underline decoration-white/30 underline-offset-4">Vampire</Link></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-red-500">Title</td>
                    <td className="py-3 px-4 text-white"><Link href="/entries/titles-overview" className="text-red-400 hover:text-red-300 underline decoration-white/30 underline-offset-4">Vampire King</Link></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/soulamulet.webp" alt="Soul Amulet" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-yellow-400">Soul Amulet</span>
                          <div className="text-xs text-gray-500 flex items-center gap-1"><span className="text-blue-400">8%</span> Drop Rate</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x5</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/casull.webp" alt="Casull" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-red-400">Casull</span>
                          <div className="text-xs text-gray-500 flex items-center gap-1"><span className="text-blue-400">2%</span> Drop Rate</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x1</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/bloodring.webp" alt="Blood Ring" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-red-400">Blood Ring</span>
                          <div className="text-xs text-gray-500 flex items-center gap-1"><span className="text-blue-400">2%</span> Drop Rate</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x1</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-400">Clan</td>
                    <td className="py-3 px-4 text-gray-500 italic">None required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Content Section: Moveset */}
        <div className="panel-action clip-diagonal p-8 mb-8 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Moveset</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoMovesetCard move={{ key: "M1", videoSrc: "/uploads/alucard-m1.webm", poster: "/uploads/alucard-m1.webp", description: "Basic combo or default attack note.", cooldown: "0s CD" }} />
              <VideoMovesetCard move={{ key: "Z", videoSrc: "/uploads/alucard-z.webm", poster: "/uploads/alucard-z.webp", description: "No description provided." }} />
              <VideoMovesetCard move={{ key: "X", videoSrc: "/uploads/alucard-x.webm", poster: "/uploads/alucard-x.webp", description: "No description provided." }} />
              <VideoMovesetCard move={{ key: "C", videoSrc: "/uploads/alucard-c.webm", poster: "/uploads/alucard-c.webp", description: "No description provided." }} />
              <VideoMovesetCard move={{ key: "V", videoSrc: "/uploads/alucard-v.webm", poster: "/uploads/alucard-v.webp", description: "No description provided." }} />
              <VideoMovesetCard move={{ key: "F", description: "Use this row for the mastery, awakening, or final move if the style has one." }} />
            </div>
          </div>
        </div>

        {/* Content Section: How to equip */}
        <div className="panel-action clip-diagonal p-8 mb-12 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">How to equip the style</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[var(--accent-red)] mt-1">•</span>
                <span>Open your inventory and switch to the Melee tab.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[var(--accent-red)] mt-1">•</span>
                <span>Select Alucard and equip it after unlocking the style.</span>
              </li>
            </ul>
          </div>
        </div>
        
      </main>

      <Footer />
    </div>
  );
}
