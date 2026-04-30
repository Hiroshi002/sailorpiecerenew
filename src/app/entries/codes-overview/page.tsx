import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveCodeRow from "@/components/InteractiveCodeRow";

export const metadata: Metadata = {
  title: "Sailor Piece Codes | Active Codes, Rewards, Requirements",
  description: "Active and expired Sailor Piece codes with rewards, redeem steps, and requirements.",
};

const activeCodes = [
  { code: "THEBIG1BVISITSTYYYYY", rewards: "50x Power Shard, 75x Passive Shard, 10x Secret Chest, 100x Clan Reroll" },
  { code: "1MLIKESWOAHHH", rewards: "50x Power Shard, 75x Passive Shard, 10x Secret Chest, 100x Clan Reroll" },
  { code: "ANTIMAGICUPDATE", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest" },
  { code: "CRYSTALDEFENSE", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest" },
];

export default function CodesOverview() {
  return (
    <div className="min-h-screen flex flex-col bg-vignette relative z-0">
      <Header />

      <main className="flex-1 w-full max-w-[1000px] mx-auto px-6 py-16 flex flex-col gap-12 relative z-10">
        
        <div className="text-center animate-fade-in relative mt-12">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-azure)] bg-[var(--bg-glass)] text-[var(--accent-azure)] text-xs font-bold uppercase tracking-widest mb-6">
            🎁 Reward Codes
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white font-[var(--font-display)] mb-6 drop-shadow-lg tracking-tight">
            Active <span className="text-gradient-azure">Archives</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto italic">
            Working Sailor Piece codes, direct copy-paste links, and progression checklists.
          </p>
        </div>

        <section className="w-full">
          <div className="bento-card !p-0 overflow-hidden border border-[var(--border-strong)]">
            <div className="bg-[#0b132a] px-8 py-5 flex items-center gap-3 border-b border-[var(--border-strong)]">
              <span className="text-2xl drop-shadow-md">🎟️</span>
              <h2 className="font-black text-white text-lg font-[var(--font-display)] uppercase tracking-wider">Live Codes List</h2>
            </div>
            <div className="w-full overflow-x-auto">
              <table className="code-table detail-table-codes w-full text-left border-collapse">
                <thead className="bg-[#0b132a]/50 border-b border-[var(--border-subtle)]">
                  <tr>
                    <th className="p-6 font-black uppercase text-[11px] tracking-widest text-[var(--accent-azure)] w-24">Status</th>
                    <th className="p-6 font-black uppercase text-[11px] tracking-widest text-[var(--accent-azure)]">Code (Tap to Copy)</th>
                    <th className="p-6 font-black uppercase text-[11px] tracking-widest text-[var(--accent-azure)]">Rewards</th>
                  </tr>
                </thead>
                <tbody>
                  {activeCodes.map((item, i) => (
                    <InteractiveCodeRow key={i} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
