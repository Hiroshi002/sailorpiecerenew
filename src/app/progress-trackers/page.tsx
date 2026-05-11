import { getSiteConfig } from "@/config/site";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { LineChart, Trophy, TowerControl as Tower, Swords, Sparkles, ClipboardCheck } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Sailor Piece Progress Trackers | ${siteConfig.name}`,
    description: "Shared progress tracker hub for Boss Rush, Infinite Tower, Skill Tree, and endgame account milestones.",
    openGraph: {
      title: `Sailor Piece Progress Trackers | ${siteConfig.name}`,
      description: "Shared progress tracker hub for Boss Rush, Infinite Tower, Skill Tree, and endgame account milestones.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Sailor Piece Progress Trackers | ${siteConfig.name}`,
      description: "Shared progress tracker hub for Boss Rush, Infinite Tower, Skill Tree, and endgame account milestones.",
      images: [siteConfig.ogImage],
    },
  };
}

const trackerEntries = [
  {
    title: "Boss Rush permanent tracker",
    eyebrow: "Tracker",
    summary: "Track your current Rush Coin stash, next permanent upgrade cost, and how many coins you still need to fully max Boss Rush.",
    detail: "Shared with the Boss Rush guide so your permanent-upgrade progress stays in sync everywhere on the site.",
    href: "/entries/boss-rush#boss-rush-progress-tracker",
    chips: ["Boss Rush", "Rush Coins", "Shared save"],
    icon: <Trophy className="w-6 h-6 text-[var(--accent-red)] icon-glow-red transition-all" />
  },
  {
    title: "Infinite Tower permanent tracker",
    eyebrow: "Tracker",
    summary: "Track Tower Token spending, next upgrade breakpoints, and the remaining token wall until Infinite Tower is fully maxed.",
    detail: "Useful when you are deciding whether to keep pushing damage, crit, HP, or luck before moving on to another late-game grind.",
    href: "/entries/infinite-tower#infinite-tower-progress-tracker",
    chips: ["Infinite Tower", "Tower Tokens", "Shared save"],
    icon: <Tower className="w-6 h-6 text-blue-400 icon-glow-blue transition-all" />
  },
  {
    title: "Crystal Defense permanent tracker",
    eyebrow: "Tracker",
    summary: "Track Crystal Coin spending, next Defense Upgrade breakpoints, and the full Crystal Coin wall left until Crystal Defense is fully maxed.",
    detail: "Built from the confirmed Crystal Defense upgrade ladder, with current notes on payouts.",
    href: "/entries/crystal-defense#crystal-defense-progress-tracker",
    chips: ["Crystal Defense", "Crystal Coins", "Shared save"],
    icon: <Swords className="w-6 h-6 text-purple-400 icon-glow-blue transition-all" />
  },
  {
    title: "Skill Tree tracker",
    eyebrow: "Tracker",
    summary: "Track current Skill Points, branch levels, and the next point cost while you work toward a fully maxed Skill Tree.",
    detail: "Built from the current branch ladders already shown on the page, matching the visible wiki numbers.",
    href: "/entries/skill-tree-guide#skill-tree-progress-tracker",
    chips: ["Skill Tree", "Skill Points", "Shared save"],
    icon: <Sparkles className="w-6 h-6 text-[var(--accent-gold)] icon-glow-gold transition-all" />
  },
  {
    title: "Endgame account checklist",
    eyebrow: "Tracker",
    summary: "Keep the bigger endgame goals visible, from final weapons and runes to passives, titles, auras, enchants, and artifact min-maxing.",
    detail: "Best for players who are already established and want one long-term board for everything still left on the account.",
    href: "/entries/new-player-progression-path#endgame-account-checklist",
    chips: ["Checklist", "Endgame", "Synced systems"],
    icon: <ClipboardCheck className="w-6 h-6 text-green-400 icon-glow-green transition-all" />
  }
];

const faqs = [
  {
    question: "Do these trackers save between visits?",
    answer: "Yes. The progress trackers save in your browser local storage, so they stay on your device and sync between the related wiki pages."
  },
  {
    question: "Which trackers are shared across pages?",
    answer: "Boss Rush, Infinite Tower, Skill Tree, and the endgame account checklist use shared saved values, so updating one of those trackers also updates the same tracker wherever else it appears on the site."
  }
];

export default function ProgressTrackersPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-vignette opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_70%)]" />
      </div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 block">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 font-mono opacity-80">
          <Link href="/" className="hover:text-[var(--accent-red)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Progress Trackers</span>
        </div>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="panel-action clip-diagonal p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-black to-[var(--bg-panel)] border-b-4 border-b-green-500/50">
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-green-400 text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                Site Page
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tight" style={{ textShadow: "3px 3px 0px rgba(16, 185, 129, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
                Progress Trackers
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed border-l-4 border-green-500 pl-6 bg-black/30 py-4">
                Shared progress tracker hub for Boss Rush, Infinite Tower, Skill Tree, and endgame account milestones.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-2">
                 <span className="px-3 py-1 bg-green-900/40 border border-green-500/50 text-green-300 text-[10px] font-black uppercase tracking-widest rounded-sm">Endgame tracking</span>
                 <span className="px-3 py-1 bg-blue-900/40 border border-blue-500/50 text-blue-300 text-[10px] font-black uppercase tracking-widest rounded-sm">Local save</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="mb-12">
          <div className="panel-action clip-diagonal p-8">
            <div className="flex items-center gap-4 mb-6">
              <LineChart className="w-8 h-8 text-green-400 icon-glow-green transition-all" />
              <h2 className="text-3xl font-black text-white text-kinetic uppercase">Overview</h2>
            </div>
            <ul className="space-y-4 text-gray-300 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 font-bold">•</span>
                <span>This page keeps the main long-term Sailor Piece progression trackers in one place instead of scattering them across multiple guides.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 font-bold">•</span>
                <span>Boss Rush, Infinite Tower, and Skill Tree tracker values are shared with their main wiki pages so your progress stays synced.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 font-bold">•</span>
                <span>The endgame checklist is meant to track the major late-game goals players usually care about after the account is already established.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Tracker Hub */}
        <section className="mb-16">
          <div className="mb-8 border-b-2 border-green-500 pb-4">
            <h2 className="text-4xl text-white text-kinetic uppercase font-black">Tracker Hub</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="panel-action clip-diagonal p-8 bg-gradient-to-br from-black to-[var(--bg-panel)] h-full">
               <div className="text-[10px] text-green-400 font-black tracking-[0.2em] uppercase mb-2">Tracker Hub</div>
               <h3 className="text-2xl font-black text-white italic mb-4">Sailor Piece Progress Trackers</h3>
               <p className="text-gray-400 text-sm leading-relaxed mb-6">
                 Use this page as the shared home for long-term account trackers. Boss Rush, Infinite Tower, Crystal Defense, and Skill Tree progress all save in one place.
               </p>
               <div className="flex flex-wrap gap-2">
                 <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-red-900/30 border border-red-500/50 text-red-300">Boss Rush</span>
                 <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-blue-900/30 border border-blue-500/50 text-blue-300">Infinite Tower</span>
                 <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-purple-900/30 border border-purple-500/50 text-purple-300">Crystal Defense</span>
               </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="panel-action clip-button p-6 border-l-4 border-l-green-500">
                <div className="text-[10px] text-green-500 font-black uppercase tracking-widest mb-2">What syncs</div>
                <strong className="block text-white mb-2">Permanent systems</strong>
                <p className="text-xs text-gray-400">Updating progress here also updates the same saved values on their main wiki pages.</p>
              </div>
              <div className="panel-action clip-button p-6 border-l-4 border-l-[var(--accent-gold)]">
                <div className="text-[10px] text-[var(--accent-gold)] font-black uppercase tracking-widest mb-2">Best use</div>
                <strong className="block text-white mb-2">Late-game planning</strong>
                <p className="text-xs text-gray-400">See next upgrade costs and total milestones left until max on the account.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trackerEntries.map((tool, i) => (
              <Link key={i} href={tool.href} className="group panel-action clip-diagonal p-8 flex flex-col hover:translate-y-[-8px] transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="icon-premium-wrapper group-hover:border-green-500/50 transition-colors">
                    {tool.icon}
                  </div>
                  <span className="text-[10px] text-green-400 font-black uppercase tracking-[0.2em]">{tool.eyebrow}</span>
                </div>
                <h3 className="text-xl font-black text-white italic mb-3 group-hover:text-green-400 transition-colors">{tool.title}</h3>
                <p className="text-xs text-gray-400 mb-4 line-clamp-2">{tool.summary}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {tool.chips.map((chip, j) => (
                    <span key={j} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-black/40 border border-white/10 text-gray-400 group-hover:text-white transition-colors">{chip}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Tracker UI Placeholder */}
        <section className="mb-16">
           <div className="panel-action clip-diagonal p-8 bg-black/40 border-dashed border-2 border-white/10 text-center">
              <h2 className="text-2xl font-black text-white text-kinetic mb-6 opacity-50 uppercase tracking-widest">Active Trackers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left opacity-60">
                 <div className="p-6 bg-white/5 border border-white/5 clip-button">
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-4">Instance Loaded</div>
                    <div className="h-4 bg-gray-800 rounded-full w-full mb-4 overflow-hidden">
                       <div className="h-full bg-green-500 w-1/3 shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
                    </div>
                    <p className="text-[10px] text-gray-500 italic text-center">Trackers are synced via Local Storage</p>
                 </div>
                 <div className="flex items-center justify-center border border-dashed border-white/10 clip-diagonal p-6">
                    <p className="text-xs text-gray-500 italic">Advanced tracker logic and shared saves reside here.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="mb-8 border-b-2 border-green-500 pb-4">
            <h2 className="text-3xl text-white text-kinetic uppercase font-black">Tracker FAQ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="panel-action clip-diagonal p-6 border-l-4 border-l-green-500 h-full">
                <h3 className="text-sm md:text-lg font-black text-white italic mb-3 tracking-wide">{faq.question}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
