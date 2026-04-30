import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: "Sailor Piece Wiki" };

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-vignette opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,30,56,0.1),transparent_70%)]" />
      </div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 font-mono opacity-80">
          <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Passive Shard</span>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
            Wiki Entry
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
            Passive Shard
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
            How to get Passive Shard in Sailor Piece, the best Passive Shard farming routes, and what these shards are used for in the Spec Passives system.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">Main system</div>
                    <div className="text-sm font-semibold text-white">Spec Passives</div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">Best published enemy</div>
                    <div className="text-sm font-semibold text-white">Fast Ninja at 0.5350405%</div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">General rule</div>
                    <div className="text-sm font-semibold text-white">Any enemy after unlocking Spec Passives</div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">Main NPC</div>
                    <div className="text-sm font-semibold text-white">Spec Passives NPC on Judgement Island</div>
                  </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="panel-action clip-diagonal p-8 mb-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)] opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          
          <div className="mb-8 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Overview</h2>
            <ul className="space-y-4">
              
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Passive Shard is the reroll item used by the Spec Passives system on Judgement Island.</span>
                </li>

                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Once Spec Passives are unlocked, Passive Shards can drop from any enemy, with stronger enemies giving better odds.</span>
                </li>

                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>The current normal-enemy sheet tops out at 0.5350405% on Fast Ninja, with Strong Bandit at 0.5150405% and Delinquent plus Strong Fighter at 0.5050405%.</span>
                </li>
            </ul>
          </div>
        </div>
        
      </main>

      <Footer />
    </div>
  );
}
