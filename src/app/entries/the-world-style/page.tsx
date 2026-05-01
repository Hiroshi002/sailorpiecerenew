import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import VideoMovesetCard from '@/components/VideoMovesetCard';

export const metadata: Metadata = {
  title: "How to Get The World in Sailor Piece",
  description: "The World guide for Sailor Piece with trainer location, quest steps, materials, mastery, and F move progression."
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
          <span className="text-gray-300">The World</span>
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
              <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest clip-button">
                Live Tracking
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              The World
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Sea 2 fighting style route built around The World Boss, with confirmed summon costs, buy requirements, per-difficulty drops, and the mastery quest for the F move unlock.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-xs text-gray-400 mb-1">Status</div>
                <div className="text-sm font-semibold text-white">Boss summon and style requirements confirmed in game</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-xs text-gray-400 mb-1">Boss HP</div>
                <div className="text-sm font-semibold text-red-400">5,000,000,000</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-xs text-gray-400 mb-1">Title Gate</div>
                <div className="text-sm font-semibold text-[var(--accent-gold)]">Time Tyrant</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-xs text-gray-400 mb-1">Bloodline Gate</div>
                <div className="text-sm font-semibold text-[var(--accent-gold)]">Primordial Bloodline</div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(255,30,56,0.2)] bg-black relative aspect-square">
            <Image 
              src="/images/hero/melee-theworld.webp" 
              alt="The World hero image" 
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
                <span>The World is one of the newly tracked Sea 2 fighting styles.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Buying The World requires Primordial Bloodline, the Time Tyrant title, 80 Dominion Brand, 20 Power Fragment, 12 Time Remnant, 6 World Core, and 2 Vampire Omen.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>The World Boss is summoned through The World Summoner and costs 1 Dominion Brand on Normal difficulty.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>The World Boss has 5,000,000,000 HP and a per-difficulty drop table for Power Fragment, Time Remnant, World Outfit, World Core, and Vampire Omen.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Dominion Brand is a low-chance Bizarre Island NPC drop used both for spawning The World Boss and buying The World style.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>The World also has a separate mastery route for the F move, with four objectives and a reward of the F move plus +30% damage.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Section: How to get The World */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">How to obtain The World</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">1.</span>
                <span>Use The World Summoner to spawn The World Boss and start farming the material route tied to the style.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">2.</span>
                <span>Normal difficulty costs 1 Dominion Brand, with higher difficulties increasing that cost to 2, 3, and 4.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">3.</span>
                <span>Dominion Brand drops at low chance from Bizarre Island NPCs, then after farming the rest of the route bring Primordial Bloodline, the Time Tyrant title, and the full material bundle to buy The World.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">4.</span>
                <span>Extreme currently leads the published Power Fragment, Time Remnant, World Outfit, World Core, and Vampire Omen rates.</span>
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
                    <td className="py-3 px-4 font-semibold text-gray-300">Bloodline</td>
                    <td className="py-3 px-4 text-[var(--accent-gold)]">Primordial Bloodline</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-red-500">Title</td>
                    <td className="py-3 px-4 text-white"><Link href="#current-the-world-boss-details" className="text-cyan-400 hover:text-cyan-200 underline decoration-white/30 underline-offset-4">Time Tyrant</Link></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/dominionbrand.webp" alt="Dominion Brand" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-yellow-400">Dominion Brand</span>
                          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">Legendary</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x80</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/powerfragment.webp" alt="Power Fragment" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-fuchsia-400">Power Fragment</span>
                          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">Epic</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x20</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/timeremnant.webp" alt="Time Remnant" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-yellow-400">Time Remnant</span>
                          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">Legendary</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x12</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/worldcore.webp" alt="World Core" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-yellow-400">World Core</span>
                          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">Legendary</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white font-mono">x6</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/vampireomen.webp" alt="Vampire Omen" fill className="object-contain" />
                        </div>
                        <div>
                          <span className="font-semibold text-red-500">Vampire Omen</span>
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
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">The World mastery and F move tracker</h2>
            
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
                    <td className="py-3 px-4 text-white">The World</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Quest</td>
                    <td className="py-3 px-4 text-[var(--accent-gold)]">The World Mastery</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">First step</td>
                    <td className="py-3 px-4 text-white">Defeat The World Boss on Hard or higher difficulty 20 times</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Second step</td>
                    <td className="py-3 px-4 text-white">Use the V move to time-stop NPCs 250 times</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Third step</td>
                    <td className="py-3 px-4 text-white">Defeat 10 World Bosses using The World</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Fourth step</td>
                    <td className="py-3 px-4 text-white">Defeat 10 Sea Beasts using The World</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors border-t border-white/20">
                    <td className="py-3 px-4 font-semibold text-green-400">Reward</td>
                    <td className="py-3 px-4 text-green-300 font-medium">Gain the F move and +30% Damage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Content Section: Current The World boss details */}
        <div id="current-the-world-boss-details" className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Current The World boss details</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4 w-1/3">Boss stat</th>
                    <th className="py-4 px-4">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Boss HP</td>
                    <td className="py-3 px-4 text-red-400 font-mono">5,000,000,000</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Visible pity note</td>
                    <td className="py-3 px-4 text-white">175 For title, 25 for drops as all bosses</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Summoner NPC</td>
                    <td className="py-3 px-4 text-white">The World Summoner</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Normal summon cost</td>
                    <td className="py-3 px-4 text-white">1 Dominion Brand</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Other difficulties</td>
                    <td className="py-3 px-4 text-white">Medium 2, Hard 3, and Extreme 4 Dominion Brands</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Title drop</td>
                    <td className="py-3 px-4 text-cyan-400">Time Tyrant</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Title odds</td>
                    <td className="py-3 px-4 text-white">Time Tyrant title: Normal 0.6%, Medium 0.8%, Hard 0.95%, Extreme 1.2%, pity 175</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-300">Best published material mode</td>
                    <td className="py-3 px-4 text-white">Extreme currently leads the visible drop rows</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Content Section: Current The World boss drops */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Current The World boss drops</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4 whitespace-nowrap">Item</th>
                    <th className="py-4 px-4 text-center">Normal</th>
                    <th className="py-4 px-4 text-center">Medium</th>
                    <th className="py-4 px-4 text-center">Hard</th>
                    <th className="py-4 px-4 text-center text-red-400">Extreme</th>
                    <th className="py-4 px-4">Why it matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/powerfragment.webp" alt="Power Fragment" fill className="object-contain" />
                        </div>
                        <span className="font-semibold text-fuchsia-400 whitespace-nowrap">Power Fragment</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center text-white font-mono">8.00%</td>
                    <td className="py-3 px-4 text-center text-white font-mono">9.00%</td>
                    <td className="py-3 px-4 text-center text-white font-mono">9.65%</td>
                    <td className="py-3 px-4 text-center text-white font-mono font-bold">11.5%</td>
                    <td className="py-3 px-4 text-gray-300">Main The World style requirement material</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/timeremnant.webp" alt="Time Remnant" fill className="object-contain" />
                        </div>
                        <span className="font-semibold text-yellow-400 whitespace-nowrap">Time Remnant</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center text-white font-mono">2.75%</td>
                    <td className="py-3 px-4 text-center text-white font-mono">3.10%</td>
                    <td className="py-3 px-4 text-center text-white font-mono">3.50%</td>
                    <td className="py-3 px-4 text-center text-white font-mono font-bold">4.25%</td>
                    <td className="py-3 px-4 text-gray-300">Secondary The World style requirement material</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          {/* Placeholder image for World Outfit as the HTML just has an SVG */}
                          <div className="w-full h-full bg-slate-800 rounded flex items-center justify-center border border-white/20" />
                        </div>
                        <span className="font-semibold text-gray-300 whitespace-nowrap">World Outfit</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center text-white font-mono">0.65%</td>
                    <td className="py-3 px-4 text-center text-white font-mono">0.90%</td>
                    <td className="py-3 px-4 text-center text-white font-mono">1.00%</td>
                    <td className="py-3 px-4 text-center text-white font-mono font-bold">1.15%</td>
                    <td className="py-3 px-4 text-gray-300">Accessory drop from the same boss route</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/worldcore.webp" alt="World Core" fill className="object-contain" />
                        </div>
                        <span className="font-semibold text-yellow-400 whitespace-nowrap">World Core</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center text-white font-mono">0.60%</td>
                    <td className="py-3 px-4 text-center text-white font-mono">0.70%</td>
                    <td className="py-3 px-4 text-center text-white font-mono">0.80%</td>
                    <td className="py-3 px-4 text-center text-white font-mono font-bold">0.90%</td>
                    <td className="py-3 px-4 text-gray-300">Late requirement for buying The World</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                          <Image src="/images/materials/vampireomen.webp" alt="Vampire Omen" fill className="object-contain" />
                        </div>
                        <span className="font-semibold text-red-500 whitespace-nowrap">Vampire Omen</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center text-white font-mono">0.25%</td>
                    <td className="py-3 px-4 text-center text-white font-mono">0.30%</td>
                    <td className="py-3 px-4 text-center text-white font-mono">0.40%</td>
                    <td className="py-3 px-4 text-center text-white font-mono font-bold">0.50%</td>
                    <td className="py-3 px-4 text-gray-300">Rarest currently shown buy material for the style</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Content Section: Route notes */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Route Notes</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>The World page now tracks both sides of the route: spawning the boss and buying the style afterward.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Primordial Bloodline is currently the big gate that makes this route different from a normal title-plus-material style purchase.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>Dominion Brand matters twice on this route because it is both the summon currency and part of the final buy bundle.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>The listed boss-drop percentages stay on the normalized 100%-luck baseline used across the site.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>The World mastery route is fully listed here, including the four objectives needed for the F move unlock.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                <span className="text-[var(--accent-red)] mt-1.5">•</span>
                <span>The mastery reward is the F move plus a permanent +30% Damage bonus.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Section: Moveset */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Moveset</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoMovesetCard move={{ key: "M1", videoSrc: "/uploads/the-world-m1.webm", poster: "/uploads/the-world-m1.webp", description: "Basic combo or default attack note.", cooldown: "0s CD" }} />
              <VideoMovesetCard move={{ key: "Z", videoSrc: "/uploads/the-world-z.webm", poster: "/uploads/the-world-z.webp", description: "No description provided." }} />
              <VideoMovesetCard move={{ key: "X", videoSrc: "/uploads/the-world-x.webm", poster: "/uploads/the-world-x.webp", description: "No description provided." }} />
              <VideoMovesetCard move={{ key: "C", videoSrc: "/uploads/the-world-c.webm", poster: "/uploads/the-world-c.webp", description: "No description provided." }} />
              <VideoMovesetCard move={{ key: "V", videoSrc: "/uploads/the-world-v.webm", poster: "/uploads/the-world-v.webp", description: "No description provided." }} />
              <VideoMovesetCard move={{ key: "F", videoSrc: "/uploads/the-world-f.webm", poster: "/uploads/the-world-f.webp", description: "Use this row for the mastery, awakening, or final move if the style has one." }} />
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
