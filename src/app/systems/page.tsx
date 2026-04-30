import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Settings, Shield, Swords, MapPin, Sparkles, BookOpen, UserPlus, Users, Gem, Box } from "lucide-react";

export const metadata: Metadata = {
  title: "Systems | Sailor Piece Wiki",
  description: "Core mechanics like haki, blessings, enchanting, dungeons, boss rush, infinite tower, and other progression systems.",
  openGraph: {
    title: "Systems | Sailor Piece Wiki",
    description: "Core mechanics like haki, blessings, enchanting, dungeons, boss rush, infinite tower, and other progression systems.",
    images: [{ url: "/images/site/sailorpiece-wiki-cover-v2.webp" }],
  },
};

const systemEntries = [
  { title: "Blessings System", count: "Swords and Specs", summary: "Shibuya Station upgrade system for swords and specs, with shared B1 to B10 materials.", href: "/entries/blessings-system", icon: <Sparkles className="w-5 h-5 text-blue-400 icon-glow-blue transition-all" /> },
  { title: "Boss Rush", count: "Sailor Island", summary: "Sailor Island boss gauntlet with 15 waves, Rush Keys, Rush Coins, and permanent upgrades.", href: "/entries/boss-rush", icon: <Swords className="w-5 h-5 text-red-500 icon-glow-red transition-all" /> },
  { title: "Bosses", count: "Boss Island", summary: "Open-world, spawnable, dungeon, and tower bosses with summon costs and drops.", href: "/entries/bosses-guide", icon: <Shield className="w-5 h-5 text-gray-400 transition-all" /> },
  { title: "Dungeon Pieces", count: "6", summary: "Six hidden collectibles tied to the Dungeon Master questline that unlock the full dungeon system.", href: "/entries/dungeon-pieces", icon: <Box className="w-5 h-5 text-purple-400 icon-glow-blue transition-all" /> },
  { title: "Dungeons", count: "5,000", summary: "Dungeon unlock steps, key farming, and current Shadow, Rune, and Double dungeon routes.", href: "/entries/dungeons-overview", icon: <Settings className="w-5 h-5 text-blue-500 icon-glow-blue transition-all" /> },
  { title: "Enchanting Accessories", count: "Accessories only", summary: "Shibuya Station accessory upgrade system with E1 to E10 scaling and duplicate copy costs.", href: "/entries/enchanting-accessories", icon: <Gem className="w-5 h-5 text-pink-400 icon-glow-gold transition-all" /> },
  { title: "Haki", count: "3", summary: "Armament, Observation, and Conqueror Haki effects, trainer locations, and unlock routes.", href: "/entries/haki-guide", icon: <Shield className="w-5 h-5 text-gray-600 transition-all" /> },
  { title: "Hogyoku Fragments", count: "6", summary: "Six hidden fragments used for the Hollow Island quest that unlocks Soul Society.", href: "/entries/hogyoku-fragments", icon: <Box className="w-5 h-5 text-gray-500 transition-all" /> },
  { title: "Infinite Tower", count: "Tower Island", summary: "Tower Island endgame mode with scaling floors, rewards, and Tower Tokens.", href: "/entries/infinite-tower", icon: <Settings className="w-5 h-5 text-blue-600 icon-glow-blue transition-all" /> },
  { title: "Crystal Defense", count: "Punch Island", summary: "Punch Island survival mode at the back of Sea 2 where you defend a crystal.", href: "/entries/crystal-defense", icon: <Shield className="w-5 h-5 text-purple-500 icon-glow-blue transition-all" /> },
  { title: "Demonic Bloodline", count: "+32%", summary: "New Sea 2 bloodline with the strongest sword-focused stat line confirmed on the wiki.", href: "/entries/demonic-bloodline", icon: <UserPlus className="w-5 h-5 text-red-600 icon-glow-red transition-all" /> },
  { title: "NPC Locations", count: "Sailor Island", summary: "Island-by-island NPC hub for trainers, sellers, masters, dealers, and summoners.", href: "/entries/npc-locations", icon: <MapPin className="w-5 h-5 text-green-500 icon-glow-green transition-all" /> },
  { title: "Sailor Island", count: "Utility Hub", summary: "Main early-to-mid utility hub with fruit dealers, reroll NPCs, and ascension access.", href: "/entries/sailor-island", icon: <MapPin className="w-5 h-5 text-blue-400 icon-glow-blue transition-all" /> },
  { title: "Skill Tree", count: "7,000", summary: "Slime Island stat tree that unlocks at level 7,000 and uses Skill Points.", href: "/entries/skill-tree-guide", icon: <Settings className="w-5 h-5 text-green-600 icon-glow-green transition-all" /> },
  { title: "Slime Puzzle", count: "7", summary: "Seven hidden slime collectibles tied to the Slime Key Crafter on Slime Island.", href: "/entries/slime-puzzle", icon: <Box className="w-5 h-5 text-green-400 icon-glow-green transition-all" /> },
  { title: "Spec Passives", count: "10,000", summary: "Judgement Island passive system that adds a rerolled buff layer onto your gear.", href: "/entries/spec-passives-overview", icon: <Sparkles className="w-5 h-5 text-yellow-400 icon-glow-gold transition-all" /> },
  { title: "Stat Reroll NPC", count: "Sailor Island", summary: "Sailor Island gem-based stat reroll station for Damage, Defense, Crit, and Luck lines.", href: "/entries/stat-reroll-npc", icon: <Settings className="w-5 h-5 text-gray-400 transition-all" /> },
  { title: "Melee Styles", count: "Melee system", summary: "Explains what fighting styles do and how they fit into builds in Sailor Piece.", href: "/entries/what-is-a-melee-style", icon: <BookOpen className="w-5 h-5 text-orange-400 icon-glow-gold transition-all" /> },
  { title: "Fruits / Powers", count: "Combat route", summary: "Explains what fruits do and how they fit into overall builds.", href: "/entries/what-is-a-power", icon: <BookOpen className="w-5 h-5 text-purple-400 icon-glow-blue transition-all" /> },
  { title: "Weapons", count: "Sword route", summary: "Defines how sword and weapon pages are grouped and what each page tracks.", href: "/entries/what-is-a-weapon", icon: <BookOpen className="w-5 h-5 text-blue-400 icon-glow-blue transition-all" /> },
  { title: "New Player Path", count: "Roadmap", summary: "Start-from-scratch progression route for new accounts with safer earlier upgrades.", href: "/entries/new-player-progression-path", icon: <MapPin className="w-5 h-5 text-yellow-500 icon-glow-gold transition-all" /> },
  { title: "Easter Egg Hunt", count: "7 Easter Eggs", summary: "Sea 1 Easter quest guide with official 7-egg structure and completion rewards.", href: "/entries/easter-egg-hunt", icon: <Box className="w-5 h-5 text-pink-300 icon-glow-gold transition-all" /> },
  { title: "Bloodlines", count: "Stats confirmed", summary: "Sea 2 Bloodlines system page with corrected confirmed stat tables.", href: "/entries/bloodlines-system", icon: <Users className="w-5 h-5 text-red-400 icon-glow-red transition-all" /> },
  { title: "Guilds", count: "Sea 2 System", summary: "Sea 2 Guilds system page with confirmed create-guild requirements and drop rates.", href: "/entries/guilds-system", icon: <Users className="w-5 h-5 text-blue-500 icon-glow-blue transition-all" /> },
  { title: "Relics", count: "Relic Crafter", summary: "Sea 2 Relics system page with Relic Crafter NPC and confirmed forge recipes.", href: "/entries/relics-system", icon: <Settings className="w-5 h-5 text-purple-600 icon-glow-blue transition-all" /> },
  { title: "Ancient Fragments", count: "Sea 2 Utility", summary: "Dedicated screenshot route for all 20 Sea 2 Ancient Fragment locations.", href: "/ancient-fragments", icon: <MapPin className="w-5 h-5 text-orange-600 icon-glow-gold transition-all" /> }
];

export default function SystemsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-vignette opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1),transparent_70%)]" />
      </div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 block">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 font-mono opacity-80">
          <Link href="/" className="hover:text-[var(--accent-red)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Systems</span>
        </div>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="panel-action clip-diagonal p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-black to-[var(--bg-panel)] border-b-4 border-b-purple-500/50">
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-purple-400 text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                Wiki Category
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tight" style={{ textShadow: "3px 3px 0px rgba(139, 92, 246, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
                Systems
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed border-l-4 border-purple-500 pl-6 bg-black/30 py-4">
                Core mechanics like haki, blessings, enchanting, dungeons, boss rush, infinite tower, and other progression systems.
              </p>
              
              <div className="flex gap-6 mt-10">
                <div className="flex flex-col border-r border-white/10 pr-8">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Entries</span>
                  <span className="text-2xl text-white font-black italic">26</span>
                </div>
                <div className="flex flex-col border-r border-white/10 pr-8">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Start Here</span>
                  <span className="text-2xl text-white font-black italic underline decoration-purple-500">Blessings System</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Status</span>
                  <span className="text-2xl text-purple-400 font-black italic uppercase">Growing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Entry Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemEntries.map((entry, i) => (
              <Link key={i} href={entry.href} className="group panel-action clip-diagonal !p-0 flex flex-col relative overflow-hidden bg-gradient-to-b from-black/80 to-[var(--bg-panel)] hover:border-purple-500 transition-all">
                <div className="p-6 sm:p-8 relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-purple-400 font-black tracking-[0.2em] uppercase">Systems</span>
                      <span className="text-[10px] text-gray-500 font-bold uppercase mt-1 italic">{entry.count}</span>
                    </div>
                    <div className="icon-premium-wrapper group-hover:border-purple-500 group-hover:bg-purple-500/10 transition-all">
                      {entry.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-white text-kinetic mb-4 group-hover:text-purple-400 transition-all">{entry.title}</h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed mb-6 flex-grow">{entry.summary}</p>
                  <div className="mt-auto">
                    <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-white text-[9px] font-black uppercase tracking-widest clip-button group-hover:bg-purple-600 group-hover:text-white group-hover:border-transparent transition-all">
                      Open page
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Verification Section */}
        <section className="mb-12">
          <div className="panel-action clip-diagonal p-8 sm:p-10 relative overflow-hidden group border-t-4 border-t-purple-500">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="text-[10px] text-purple-400 font-black tracking-[0.2em] uppercase mb-4">Verification</div>
                <h2 className="text-3xl md:text-4xl font-black text-white text-kinetic mb-6 uppercase leading-tight">Cross-checked against <br /><span className="text-purple-400">live game info</span></h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-purple-500 pl-6 italic">
                  How the Systems section is checked: We maintain accuracy by cross-referencing with official Discord channels and in-game tests.
                </p>
              </div>
              <div className="flex-1 w-full">
                <ul className="grid grid-cols-1 gap-2">
                  {[
                    "Pages are checked against live in-game routing and NPC locations.",
                    "The wiki cross-checks the Sailor Piece Discord server and FAQs.",
                    "Multiple published sources are compared when public guides disagree.",
                    "Discord updates and in-game checks help confirm current state.",
                    "Report outdated systems via Discord for quick rechecking."
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4 text-[11px] font-semibold text-gray-300 bg-white/5 p-3 border border-white/5 clip-button hover:bg-white/10 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]"></div>
                      <span>{text}</span>
                    </li>
                  ))}
                  <li className="mt-2 text-right">
                    <Link href="/contact" className="text-purple-400 font-black uppercase text-[10px] tracking-widest inline-flex items-center gap-2 hover:translate-x-2 transition-transform">
                      Open contact page <span className="text-lg">→</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
