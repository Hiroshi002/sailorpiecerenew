import { getSiteConfig } from "@/config/site";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveCodeRow from "@/components/InteractiveCodeRow";
import { Ticket, Gift, Terminal, Info, CheckCircle2, ShieldCheck, Zap, History } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Sailor Piece Codes | ${siteConfig.name}`,
    description: "Active and expired Sailor Piece codes with rewards, redeem steps, and requirements.",
    openGraph: {
      title: `Sailor Piece Codes | ${siteConfig.name}`,
      description: "Active and expired Sailor Piece codes with rewards, redeem steps, and requirements.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Sailor Piece Codes | ${siteConfig.name}`,
      description: "Active and expired Sailor Piece codes with rewards, redeem steps, and requirements.",
      images: [siteConfig.ogImage],
    },
  };
}

const activeCodes = [
  { 
    code: "HUGEUPDATEWWW", 
    rewards: "$250,000, 400 Gems, 10x Bloodline Stone, 15x Passive Shard, 20x Clan Reroll, 50x Trait Reroll, 65x Race Reroll, 50x Haki Color Reroll",
    requirement: "Requirement not captured in the screenshot."
  },
  { 
    code: "RAIDS", 
    rewards: "$250,000, 400 Gems, 10x Bloodline Stone, 5x Raid Key, 15x Passive Shard, 20x Clan Reroll, 50x Trait Reroll, 65x Race Reroll, 50x Haki Color Reroll",
    requirement: "Requirement not captured in the screenshot."
  },
  { 
    code: "DELAYCODENR1", 
    rewards: "50x Power Shard, 75x Passive Shard, 12x Secret Chest (Untradeable), 100x Clan Reroll (Untradeable), 10x Aura Crate (Untradeable), 8x Cosmetic Crate (Untradeable)",
    requirement: "Requirement not captured in the screenshot."
  },
  { 
    code: "DELAYCODENR2", 
    rewards: "50x Power Shard, 75x Passive Shard, 12x Secret Chest (Untradeable), 100x Clan Reroll (Untradeable), 10x Aura Crate (Untradeable), 8x Cosmetic Crate (Untradeable)",
    requirement: "Requirement not captured in the screenshot."
  },
  { 
    code: "1B100MVISITS", 
    rewards: "50x Power Shard, 75x Passive Shard, 10x Secret Chest (Untradeable), 100x Clan Reroll (Untradeable), 5x Aura Crate (Untradeable), 4x Cosmetic Crate (Untradeable)",
    requirement: "Requirement not captured in the screenshot."
  },
  { 
    code: "1B200MVISITS", 
    rewards: "50x Power Shard, 75x Passive Shard, 10x Secret Chest (Untradeable), 100x Clan Reroll (Untradeable), 6x Aura Crate (Untradeable), 5x Cosmetic Crate (Untradeable)",
    requirement: "Requirement not captured in the screenshot."
  },
  { 
    code: "1B300MVISITS", 
    rewards: "50x Power Shard, 75x Passive Shard, 10x Secret Chest (Untradeable), 100x Clan Reroll (Untradeable), 6x Aura Crate (Untradeable), 5x Cosmetic Crate (Untradeable)",
    requirement: "Requirement not captured in the screenshot."
  },
  { 
    code: "1M100KLIKESTYYY", 
    rewards: "50x Power Shard, 75x Passive Shard, 10x Secret Chest (Untradeable), 100x Clan Reroll (Untradeable), 5x Aura Crate (Untradeable), 4x Cosmetic Crate (Untradeable)",
    requirement: "Requirement not captured in the screenshot."
  },
  { 
    code: "TYSMFOR400KFOLLOWONEEVENT", 
    rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest (Untradeable), 100x Clan Reroll (Untradeable), 6x Aura Crate (Untradeable), 5x Cosmetic Crate (Untradeable)",
    requirement: "Requirement not captured in the screenshot."
  },
];

const expiredCodes = [
  { code: "THEBIG1BVISITSTYYYYY", rewards: "50x Power Shard, 75x Passive Shard, 10x Secret Chest, 100x Clan Reroll, 10x Aura Crate, 8x Cosmetic Crate" },
  { code: "1MLIKESWOAHHH", rewards: "50x Power Shard, 75x Passive Shard, 10x Secret Chest, 100x Clan Reroll, 8x Aura Crate, 6x Cosmetic Crate" },
  { code: "ANTIMAGICUPDATE", rewards: "$350,000, 500 Gems, 20x Power Shard, 10x Bloodline Stone, 25x Passive Shard, 40x Clan Reroll, 75x Trait Reroll, 85x Race Reroll, 75x Haki Color Reroll" },
  { code: "CRYSTALDEFENSE", rewards: "$350,000, 500 Gems, 25x Power Shard, 10x Bloodline Stone, 35x Passive Shard, 50x Clan Reroll, 75x Trait Reroll, 85x Race Reroll, 75x Haki Color Reroll" },
  { code: "600KFAVORITES", rewards: "30x Power Shard, 40x Passive Shard, 4x Secret Chest, 100x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "BIGUPDATENEXTSOONN", rewards: "10x Bloodline Stone, 20x Power Shard, 40x Passive Shard, 4x Secret Chest, 100x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "TYFOR250KFOLLOWEVENT", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 3x Aura Crate, 2x Cosmetic Crate" },
  { code: "RAIDSOON", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 5x Aura Crate, 4x Cosmetic Crate" },
  { code: "2XLUCK", rewards: "20x Bloodline Stone, 45x Power Shard, 55x Passive Shard, 5x Secret Chest, 125x Clan Reroll, 7x Aura Crate, 6x Cosmetic Crate" },
  { code: "SPECBUFFS", rewards: "20x Bloodline Stone, 45x Power Shard, 55x Passive Shard, 5x Secret Chest, 125x Clan Reroll, 6x Aura Crate, 5x Cosmetic Crate" },
  { code: "CODEFORTHERESTARTSORRY2", rewards: "20x Bloodline Stone, 45x Power Shard, 55x Passive Shard, 5x Secret Chest, 125x Clan Reroll, 6x Aura Crate, 5x Cosmetic Crate" },
  { code: "CODEFORTHERESTARTSORRY3", rewards: "20x Bloodline Stone, 45x Power Shard, 55x Passive Shard, 5x Secret Chest, 125x Clan Reroll, 6x Aura Crate, 5x Cosmetic Crate" },
  { code: "CODEFORTHERESTARTSORRY", rewards: "10x Bloodline Stone, 30x Power Shard, 40x Passive Shard, 4x Secret Chest, 100x Clan Reroll, 5x Aura Crate, 4x Cosmetic Crate" },
  { code: "SORRYFORTHETRADELOCKSS", rewards: "10x Bloodline Stone, 20x Power Shard, 40x Passive Shard, 4x Secret Chest, 100x Clan Reroll, 5x Aura Crate, 4x Cosmetic Crate" },
  { code: "TRADINGFIXEDHOPEFULLY", rewards: "30x Power Shard, 40x Passive Shard, 5x Secret Chest, 100x Clan Reroll, 5x Aura Crate, 4x Cosmetic Crate" },
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

const metaItems = [
  { label: "Last Checked", value: "2026-05-10" },
  { label: "Active Codes", value: "9 Codes" },
  { label: "Expired Archive", value: "54 Codes" },
  { label: "Redeem Menu", value: "Settings > Codes" },
];

export default function CodesOverview() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950 overflow-x-hidden">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-vignette opacity-80" />
        <div className="absolute inset-0 bg-glow" />
        <div className="absolute inset-0 bg-[length:100%_4px] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] opacity-20" />
      </div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 block animate-in fade-in duration-700">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8 font-mono opacity-80 flex items-center gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[var(--accent-red)] transition-colors">Home</Link>
          <span className="opacity-40">/</span>
          <Link href="/directory" className="hover:text-[var(--accent-red)] transition-colors">Directory</Link>
          <span className="opacity-40">/</span>
          <span className="text-gray-300">Codes Overview</span>
        </nav>

        {/* Hero Section */}
        <section className="mb-16 flex flex-col lg:flex-row gap-12 items-start relative animate-in slide-in-from-left-4 duration-700">
          <div className="flex-1">
            <header>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.2em] mb-8 clip-button text-kinetic shadow-[0_0_15px_rgba(255,184,0,0.3)]">
                <Gift className="w-3.5 h-3.5 text-[var(--accent-gold)] icon-glow-gold animate-bounce" />
                <span>Mythic Rewards</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-black mb-8 text-white text-kinetic uppercase tracking-tighter italic drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]" 
                  style={{ textShadow: "4px 4px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
                Active <span className="text-[var(--accent-gold)]" style={{ textShadow: "3px 3px 0px rgba(255, 184, 0, 1), -1px -1px 0px rgba(0,0,0,1)" }}>Archives</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-6 backdrop-blur-sm bg-black/20 py-4 font-bold italic">
                Unlock the secrets of the Grand Sea. Every code below is a verified artifact, granting mythic shards, gems, and currency to fuel your pirate legacy.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {metaItems.map((item, i) => (
                  <article key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[var(--accent-red)]/40 transition-colors group">
                    <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-black group-hover:text-[var(--accent-gold)] transition-colors">{item.label}</div>
                    <div className="text-sm font-black text-white uppercase italic">{item.value}</div>
                  </article>
                ))}
              </div>
            </header>
          </div>
          
          <div className="w-full lg:w-1/3 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(255,30,56,0.2)] bg-black/40 relative aspect-square group backdrop-blur-md animate-in zoom-in-95 duration-700 delay-200 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-red)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Ticket size={120} className="text-[var(--accent-red)] opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 icon-glow-red" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[10px] text-[var(--accent-gold)] font-black uppercase tracking-[0.3em] mb-1">Authenticated</div>
              <div className="text-lg text-white font-black uppercase italic tracking-tighter">Verified Gift Vault</div>
            </div>
          </div>
        </section>

        {/* Overview Row */}
        <section className="panel-action clip-diagonal p-8 mb-12 relative overflow-hidden group border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-red)] opacity-5 blur-[100px] group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-6 flex items-center gap-4 italic tracking-tighter">
              <div className="icon-premium-wrapper">
                <ShieldCheck className="text-[var(--accent-red)] icon-glow-red" />
              </div>
              Redemption Protocol
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <ul className="space-y-5">
                <li className="flex items-start gap-4 text-gray-300 font-bold">
                  <Zap size={16} className="text-[var(--accent-red)] mt-1 shrink-0" />
                  <span>Codes are redeemed from the <span className="text-white uppercase italic">Settings</span> menu in-game.</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300 font-bold">
                  <Zap size={16} className="text-[var(--accent-red)] mt-1 shrink-0" />
                  <span>Some codes may have <span className="text-[var(--accent-gold)] uppercase italic">Level or Ascension</span> requirements reported by the community.</span>
                </li>
              </ul>
              <div className="p-6 bg-white/5 border border-white/5 rounded-2xl italic text-gray-400 text-sm leading-relaxed">
                <Info size={24} className="mb-4 text-[var(--accent-gold)]" />
                &quot;The tide brings treasures only to those who know where to look. Use these artifacts wisely to hasten your journey to the Second Sea.&quot;
              </div>
            </div>
          </div>
        </section>

        {/* Active Codes Table Section */}
        <section className="panel-action clip-diagonal p-1 mb-16 relative overflow-hidden group border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)] opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          
          <div className="bg-[#0b132a]/40 backdrop-blur-md px-8 py-6 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="icon-premium-wrapper !p-2">
                <Gift className="w-6 h-6 text-[var(--accent-red)] icon-glow-red" />
              </div>
              <h2 className="text-3xl font-black text-white text-kinetic uppercase tracking-wider italic">Active Shards</h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[10px] font-black text-[var(--accent-gold)] uppercase tracking-[0.2em] animate-pulse">
              <CheckCircle2 size={12} />
              Verified Active
            </div>
          </div>

          <div className="w-full overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 bg-white/5">
                  <th className="py-6 px-8 flex-shrink-0 w-32">Usage</th>
                  <th className="py-6 px-8 whitespace-nowrap">Code Fragment</th>
                  <th className="py-6 px-8">Mythic Rewards</th>
                  <th className="py-6 px-8">Requirements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {activeCodes.map((item, i) => (
                  <InteractiveCodeRow key={i} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Expired Codes Table Section */}
        <section className="panel-action clip-diagonal p-1 mb-16 relative overflow-hidden group opacity-40 hover:opacity-80 transition-all grayscale hover:grayscale-0 duration-700 border border-white/5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <div className="bg-[#0b132a]/20 backdrop-blur-sm px-8 py-5 flex items-center gap-4 border-b border-white/5">
            <History className="w-5 h-5 text-gray-500" />
            <h2 className="text-xl font-black text-gray-400 text-kinetic uppercase tracking-widest italic">The Void (Expired)</h2>
          </div>

          <div className="w-full overflow-x-auto max-h-[500px] custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <tbody className="divide-y divide-white/5">
                {expiredCodes.map((item, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group/row">
                    <td className="py-5 px-8 align-middle w-32 flex-shrink-0">
                      <div className="text-[8px] font-black uppercase tracking-widest text-gray-600 bg-gray-900/80 px-2 py-1 rounded w-max border border-white/5">Faded</div>
                    </td>
                    <td className="font-mono py-5 px-8 text-gray-500 line-through whitespace-nowrap text-sm">
                      {item.code}
                    </td>
                    <td className="py-5 px-8 text-xs text-gray-600 italic whitespace-normal leading-relaxed max-w-md">
                      {item.rewards}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Instructions / How to Redeem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
          <section className="panel-action clip-diagonal p-10 relative overflow-hidden group border border-white/10">
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
              <div className="icon-premium-wrapper">
                <Terminal className="w-6 h-6 text-[var(--accent-red)] icon-glow-red" />
              </div>
              <h2 className="text-3xl font-black text-white text-kinetic uppercase italic tracking-tighter">Extraction Manual</h2>
            </div>
            <ol className="space-y-6 text-gray-300 font-bold italic">
              <li className="flex items-start gap-4">
                <span className="text-[var(--accent-red)] font-black text-xl tracking-tighter">01.</span>
                <span>Enter the world of <span className="text-white uppercase tracking-wider">Sailor Piece</span> on Roblox.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[var(--accent-red)] font-black text-xl tracking-tighter">02.</span>
                <span>Access the <span className="text-white uppercase tracking-wider">Settings</span> interface on the left flank.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[var(--accent-red)] font-black text-xl tracking-tighter">03.</span>
                <span>Navigate to the <span className="text-white uppercase tracking-wider">Codes</span> terminal at the base.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[var(--accent-red)] font-black text-xl tracking-tighter">04.</span>
                <span>Input the fragment and trigger <span className="text-[var(--accent-gold)] uppercase tracking-wider">Redeem</span>.</span>
              </li>
            </ol>
          </section>

          <section className="panel-action clip-diagonal p-10 relative overflow-hidden group border border-white/10">
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
              <div className="icon-premium-wrapper">
                <Info className="w-6 h-6 text-[var(--accent-gold)] icon-glow-gold" />
              </div>
              <h2 className="text-3xl font-black text-white text-kinetic uppercase italic tracking-tighter">Voyager Intelligence</h2>
            </div>
            <div className="space-y-6">
              <article className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent-gold)]/30 transition-colors">
                <div className="text-xs text-[var(--accent-gold)] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Zap size={12} />
                  Singularity
                </div>
                <p className="text-sm text-gray-400 font-bold">Each artifact can only be extracted once per account. Choose your moment wisely.</p>
              </article>
              <article className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent-red)]/30 transition-colors">
                <div className="text-xs text-[var(--accent-red)] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Zap size={12} />
                  Precision
                </div>
                <p className="text-sm text-gray-400 font-bold">Fragments are case-sensitive. Use the digital copy link to ensure perfect alignment.</p>
              </article>
            </div>
          </section>
        </div>

      </main>

      <Footer />
    </div>
  );
}
