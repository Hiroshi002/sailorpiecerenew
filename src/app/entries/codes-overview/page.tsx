import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveCodeRow from "@/components/InteractiveCodeRow";
import { Ticket, Gift, Terminal, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Sailor Piece Codes | Active Codes, Rewards, Requirements",
  description: "Active and expired Sailor Piece codes with rewards, redeem steps, and requirements.",
};

const activeCodes = [
  { code: "THEBIG1BVISITSTYYYYY", rewards: "50x Power Shard, 75x Passive Shard, 10x Secret Chest, 100x Clan Reroll, 10x Aura Crate, 8x Cosmetic Crate" },
  { code: "1MLIKESWOAHHH", rewards: "50x Power Shard, 75x Passive Shard, 10x Secret Chest, 100x Clan Reroll, 8x Aura Crate, 6x Cosmetic Crate" },
  { code: "ANTIMAGICUPDATE", rewards: "$350,000, 500 Gems, 20x Power Shard, 10x Bloodline Stone, 25x Passive Shard, 40x Clan Reroll, 75x Trait Reroll, 85x Race Reroll, 75x Haki Color Reroll" },
  { code: "CRYSTALDEFENSE", rewards: "$350,000, 500 Gems, 25x Power Shard, 10x Bloodline Stone, 35x Passive Shard, 50x Clan Reroll, 75x Trait Reroll, 85x Race Reroll, 75x Haki Color Reroll" },
  { code: "600KFAVORITES",rewards: "30x Power Shard, 40x Passive Shard, 4x Secret Chest, 100x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "BIGUPDATENEXTSOONN", rewards: "10x Bloodline Stone, 20x Power Shard, 40x Passive Shard, 4x Secret Chest, 100x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "TYFOR250KFOLLOWEVENT", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "SPECBUFFS", rewards: "20x Bloodline Stone, 45x Power Shard, 55x Passive Shard, 5x Secret Chest, 125x Clan Reroll, 6x Aura Crate, 5x Cosmetic Crate" },
  { code: "CODEFORTHERESTARTSORRY2", rewards: "20x Bloodline Stone, 45x Power Shard, 55x Passive Shard, 5x Secret Chest, 125x Clan Reroll, 6x Aura Crate, 5x Cosmetic Crate" },
  { code: "CODEFORTHERESTARTSORRY3", rewards: "20x Bloodline Stone, 45x Power Shard, 55x Passive Shard, 5x Secret Chest, 125x Clan Reroll, 6x Aura Crate, 5x Cosmetic Crate" },
  { code: "CODEFORTHERESTARTSORRY", rewards: "10x Bloodline Stone, 30x Power Shard, 40x Passive Shard, 4x Secret Chest, 100x Clan Reroll, 5x Aura Crate, 4x Cosmetic Crate" },
  { code: "SORRYFORTHETRADELOCKSS", rewards: "10x Bloodline Stone, 20x Power Shard, 40x Passive Shard, 4x Secret Chest, 100x Clan Reroll, 5x Aura Crate, 4x Cosmetic Crate" },
  { code: "TRADINGFIXEDHOPEFULLY", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 5x Aura Crate, 4x Cosmetic Crate" },
];

const expiredCodes = [
  { code: "RESTARTSORRYYYYYY", rewards: "30x Power Shard, 40x Passive Shard, 6x Secret Chest, 100x Clan Reroll, 6x Aura Crate, 5x Cosmetic Crate" },
  { code: "FIXINGTRADINGISSUESSOON", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 5x Aura Crate, 4x Cosmetic Crate" },
  { code: "THEOTHERFREECODEMB", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "YETANOTHERFREECODE", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "BUGFIXESCODES", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "YETANOTHERFREECODE2", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "500KFAVORITES", rewards: "30x Power Shard, 40x Passive Shard, 4x Secret Chest, 100x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "900MVISITSTYSMM", rewards: "10x Bloodline Stone, 30x Power Shard, 40x Passive Shard, 4x Secret Chest, 100x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "900KLIKESTYYY", rewards: "15x Bloodline Stone, 30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 4x Aura Crate, 3x Cosmetic Crate" },
  { code: "LASTRESTARTHOPEFULLY", rewards: "10x Bloodline Stone, 30x Power Shard, 40x Passive Shard, 4x Secret Chest, 100x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "BIGGESTUPDATESEA2NEXT", rewards: "$250,000, 400 Gems, 5x Passive Shard, 10x Clan Reroll, 35x Trait Reroll, 45x Race Reroll, 20x Haki Color Reroll" },
  { code: "MASSIVEUPDATE", rewards: "$250,000, 400 Gems, 5x Passive Shard, 10x Clan Reroll, 35x Trait Reroll, 45x Race Reroll, 20x Haki Color Reroll" },
  { code: "MOONUPDATE", rewards: "$350,000, 500 Gems, 5x Power Shard, 10x Passive Shard, 15x Clan Reroll, 40x Trait Reroll, 50x Race Reroll, 25x Haki Color Reroll" },
  { code: "ICEQUEEN", rewards: "$350,000, 500 Gems, 10x Power Shard, 15x Passive Shard, 25x Clan Reroll, 50x Trait Reroll, 75x Race Reroll, 50x Haki Color Reroll" },
  { code: "MINIUPDATEBIGONESOON", rewards: "$350,000, 500 Gems, 5x Power Shard, 10x Passive Shard, 15x Clan Reroll, 40x Trait Reroll, 50x Race Reroll, 25x Haki Color Reroll" },
  { code: "SEA2NEXTUPDATE", rewards: "$250,000, 500 Gems, 10x Passive Shard, 20x Clan Reroll, 50x Trait Reroll, 65x Race Reroll, 30x Haki Color Reroll" },
  { code: "TYFOR115KFOLLOW", rewards: "$250,000, 500 Gems, 5x Power Shard, 15x Passive Shard, 25x Clan Reroll, 60x Trait Reroll, 75x Race Reroll, 50x Haki Color Reroll" },
  { code: "INFINITETOWER", rewards: "$250,000, 500 Gems, 10x Passive Shard, 20x Clan Reroll, 50x Trait Reroll, 65x Race Reroll, 30x Haki Color Reroll" },
  { code: "500MVISITSWOAHH", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 4x Aura Crate, 3x Cosmetic Crate" },
  { code: "700MVISITSWOWW", rewards: "35x Power Shard, 45x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 4x Aura Crate, 3x Cosmetic Crate" },
  { code: "700KLIKESTYSM", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 4x Aura Crate, 3x Cosmetic Crate" },
  { code: "800KLIKESTYSM", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 4x Aura Crate, 3x Cosmetic Crate" },
  { code: "1MMEMBERSTYSMGUYS", rewards: "40x Power Shard, 50x Passive Shard, 6x Secret Chest, 100x Clan Reroll, 5x Aura Crate, 4x Cosmetic Crate" },
  { code: "VERYSORRYFORTHEDELAYGUYS", rewards: "35x Power Shard, 45x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 4x Aura Crate, 3x Cosmetic Crate" },
  { code: "ALOTOFNEWCONTENTSEA2", rewards: "40x Power Shard, 50x Passive Shard, 6x Secret Chest, 100x Clan Reroll, 5x Aura Crate, 4x Cosmetic Crate" },
  { code: "SORRYFORTRADELOCK", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 4x Aura Crate, 3x Cosmetic Crate" },
  { code: "SORRYFORTHESEISSUES", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 4x Aura Crate, 3x Cosmetic Crate" },
  { code: "SORRYFORBADSEA2QUEST", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "400MVISITSWOAHH", rewards: "35x Passive Shard, 4x Secret Chest, 95x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "FREECODE", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "600KLIKESTY", rewards: "35x Passive Shard, 4x Secret Chest, 95x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "500KLIKESTY", rewards: "35x Passive Shard, 4x Secret Chest, 95x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "SORRYFORRESTARTONLYONETONIGHTT", rewards: "35x Passive Shard, 4x Secret Chest, 95x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "BIGGESTUPDATENEXT", rewards: "50x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 5x Aura Crate, 5x Cosmetic Crate" },
  { code: "200MVISITS", rewards: "3x Secret Chest, 85x Clan Reroll, 3x Aura Crate, 3x Cosmetic Crate" },
  { code: "SORRYFORMANYRESTARTS", rewards: "3x Secret Chest, 85x Clan Reroll, 3x Aura Crate, 3x Cosmetic Crate" },
  { code: "SORRYFORALLTHEBUGSS", rewards: "4x Secret Chest, 85x Clan Reroll, 3x Aura Crate, 3x Cosmetic Crate" },
  { code: "SORRYFORALLTHEBUGSBUTBETTER", rewards: "$350,000, 750 Gems, 25x Passive Shard, 50x Clan Reroll, 100x Trait Reroll, 125x Race Reroll, 50x Haki Color Reroll" },
  { code: "150MVISITS", rewards: "3x Secret Chest, 85x Clan Reroll, 2x Aura Crate, 2x Cosmetic Crate" },
];

export default function CodesOverview() {
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
          <span className="text-gray-300">Codes Overview</span>
        </div>

        {/* Hero */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-gold)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,184,0,0.3)]">
            <Gift className="w-3.5 h-3.5 text-[var(--accent-gold)] icon-glow-gold animate-bounce" />
            <span>Reward Codes</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
            Active <span className="text-[var(--accent-gold)]" style={{ textShadow: "2px 2px 0px rgba(255, 184, 0, 1), -1px -1px 0px rgba(0,0,0,1)" }}>Archives</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
            Stay ahead with the latest working codes. Copy, redeem, and power up your pirate journey with exclusive rewards.
          </p>
        </div>

        {/* Active Codes Table Section */}
        <div className="panel-action clip-diagonal p-1 mb-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)] opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          
          <div className="bg-[#0b132a]/40 backdrop-blur-sm px-8 py-5 flex items-center gap-3 border-b border-white/10 text-[var(--accent-red)]">
            <Ticket className="w-6 h-6 icon-glow-red" />
            <h2 className="text-2xl font-black text-white text-kinetic uppercase tracking-wider">Live Codes List</h2>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 font-mono text-xs uppercase tracking-[0.2em] text-gray-400">
                  <th className="py-6 px-8 flex-shrink-0 w-28">Status</th>
                  <th className="py-6 px-8 whitespace-nowrap">Code (Tap to Copy)</th>
                  <th className="py-6 px-8">Rewards</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {activeCodes.map((item, i) => (
                  <InteractiveCodeRow key={i} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Expired Codes Table Section */}
        <div className="panel-action clip-diagonal p-1 mb-12 relative overflow-hidden group opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500">
          <div className="bg-[#0b132a]/20 backdrop-blur-sm px-8 py-4 flex items-center gap-3 border-b border-white/5 text-gray-500">
            <Ticket className="w-5 h-5 flex-shrink-0" />
            <h2 className="text-xl font-black text-gray-400 text-kinetic uppercase tracking-widest">Expired Archive</h2>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody className="divide-y divide-white/5">
                {expiredCodes.map((item, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group/row">
                    <td className="py-5 px-8 border-b border-white/5 align-middle w-28 flex-shrink-0">
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-600 bg-gray-900/50 px-2 py-1 rounded w-max">Expired</div>
                    </td>
                    <td className="font-mono py-5 px-8 border-b border-white/5 text-gray-500 line-through whitespace-nowrap">
                      {item.code}
                    </td>
                    <td className="py-5 px-8 border-b border-white/5 text-sm text-gray-600 italic whitespace-normal leading-relaxed max-w-md">
                      {item.rewards}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Instructions / How to Redeem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <Terminal className="w-6 h-6 text-[var(--accent-red)] icon-glow-red" />
              <h2 className="text-2xl font-black text-white text-kinetic uppercase">How to Redeem</h2>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent-red)] font-bold">01.</span>
                <span>Launch <strong className="text-white">Sailor Piece</strong> on Roblox.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent-red)] font-bold">02.</span>
                <span>Click the <strong className="text-white">Menu</strong> button on the left.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent-red)] font-bold">03.</span>
                <span>Select the <strong className="text-white">Codes</strong> icon.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent-red)] font-bold">04.</span>
                <span>Paste your code and hit <strong className="text-white">Enter</strong>.</span>
              </li>
            </ul>
          </div>

          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <Info className="w-6 h-6 text-[var(--accent-gold)] icon-glow-gold" />
              <h2 className="text-2xl font-black text-white text-kinetic uppercase">Code Tips</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-xs text-[var(--accent-gold)] font-bold uppercase mb-1">One-Time Use</div>
                <p className="text-sm text-gray-400">Each code can only be redeemed once per account.</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-xs text-[var(--accent-red)] font-bold uppercase mb-1">Case Sensitive</div>
                <p className="text-sm text-gray-400">Codes are usually case-sensitive. Use the copy button to ensure accuracy.</p>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
