import { getSiteConfig } from "@/config/site";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Sailor Piece Index System | ${siteConfig.name}`,
    description: "Sailor Piece Index System guide with Starter Island and Slayer Island Index NPC locations, 229 category total, 200 upgrade target, counting rules, and maximum milestone buffs.",
    openGraph: {
      title: `Sailor Piece Index System | ${siteConfig.name}`,
      description: "Sailor Piece Index System guide with Starter Island and Slayer Island Index NPC locations, 229 category total, 200 upgrade target, counting rules, and maximum milestone buffs.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Sailor Piece Index System | ${siteConfig.name}`,
      description: "Sailor Piece Index System guide with Starter Island and Slayer Island Index NPC locations, 229 category total, 200 upgrade target, counting rules, and maximum milestone buffs.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  { label: "System", value: "Index" },
  { label: "Sea 1 location", value: "Starter Island" },
  { label: "Sea 2 location", value: "Slayer Island" },
  { label: "Progress rewards", value: "Index milestone buffs" },
  { label: "Tracked entries", value: "229 total entries shown" },
  { label: "Upgrade target", value: "200 total Index" },
  { label: "Maximum buffs", value: "+25% Dmg, +25% Luck, +15% HP" }
];

const facts = [
  "The Index is a new in-game collection and progression system, not the same thing as the wiki directory page.",
  "One Index location is on Starter Island in Sea 1.",
  "Another Index location is on Slayer Island in Sea 2.",
  "The Index overview currently tracks 229 total entries across Melees, Swords, Clans, Races, Auras, Traits, Runes, Cosmetics, Relics, Bloodlines, and Titles.",
  "Only 200 total Index is currently needed to unlock every visible Index upgrade, so players do not need a perfect 229 of 229 collection for all current buffs.",
  "Index credit requires the item, race, clan, or similar unlock to be equipped or stored in inventory.",
  "Event specs, event titles, and event auras do count toward Index, but they are not strictly required to reach the current 200 upgrade target.",
  "New seasonal guild leaderboard auras and titles do not count toward Index.",
  "Index milestones grant visible buffs at total Index thresholds from 5 through 200.",
  "The in-game Index Global Buffs panel shows maximum captured buffs of +25% Damage, +25% Luck, +25% Crit Damage, +3.5% Crit Chance, and +15% HP."
];

const categories = [
  { name: "Melees", total: "18" },
  { name: "Swords", total: "22" },
  { name: "Clans", total: "15" },
  { name: "Races", total: "27" },
  { name: "Auras", total: "27" },
  { name: "Traits", total: "24" },
  { name: "Runes", total: "15" },
  { name: "Cosmetics", total: "31" },
  { name: "Relics", total: "13" },
  { name: "Bloodlines", total: "14" },
  { name: "Titles", total: "23" }
];

const milestones = [
  { threshold: "5", buff: "+5% Damage" },
  { threshold: "10", buff: "+5% Luck" },
  { threshold: "20", buff: "+5% Crit Damage" },
  { threshold: "30", buff: "+1% Crit Chance" },
  { threshold: "40", buff: "+5% HP" },
  { threshold: "50", buff: "+2.5% Damage" },
  { threshold: "60", buff: "+5% Luck" },
  { threshold: "70", buff: "+2.5% Crit Damage" },
  { threshold: "80", buff: "+0.5% Crit Chance" },
  { threshold: "90", buff: "+2.5% HP" },
  { threshold: "100", buff: "+5% Damage" },
  { threshold: "110", buff: "+5% Luck" },
  { threshold: "120", buff: "+5% Crit Damage" },
  { threshold: "130", buff: "+1% Crit Chance" },
  { threshold: "140", buff: "+5% HP" },
  { threshold: "150", buff: "+5% Damage" },
  { threshold: "160", buff: "+5% Luck" },
  { threshold: "170", buff: "+5% Crit Damage" },
  { threshold: "180", buff: "+1% Crit Chance" },
  { threshold: "190", buff: "+2.5% HP" },
  { threshold: "200", buff: "+5% Damage, +5% Luck, +7.5% Crit Damage" }
];

const relatedPages = [
  {
    href: "/entries/progress-trackers",
    title: "Progress Trackers",
    summary: "Tracker hub where Index milestones can later become an interactive checklist if thresholds are confirmed."
  },
  {
    href: "/entries/sea-2",
    title: "Sea 2 Guide",
    summary: "Main Sea 2 overview page covering the last-island note once the exact name is confirmed."
  },
  {
    href: "/entries/directory",
    title: "Wiki Directory",
    summary: "The site index page; separate from the new in-game Index system."
  }
];

const faq = [
  {
    q: "Is the Index System the same as the wiki directory?",
    a: "No. The Index System is an in-game Sailor Piece progression system with milestone buffs, while the wiki directory is just the site's browse index."
  },
  {
    q: "Where is the Index System in Sailor Piece?",
    a: "The current captures place one Index location on Starter Island in Sea 1 and another Index NPC on Slayer Island in Sea 2."
  },
  {
    q: "How much Index do you need for every current upgrade?",
    a: "You currently need 200 total Index for every visible upgrade, even though the Index menu shows 229 total possible entries."
  },
  {
    q: "What counts toward the Index?",
    a: "The Index counts Melees, Swords, Clans, Races, Auras, Traits, Runes, Cosmetics, Relics, Bloodlines, and Titles as long as the current Index sees the item or unlock equipped or stored. Event specs, titles, and auras count, while new seasonal guild leaderboard rewards do not."
  }
];

export default function IndexSystemPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-blue-500 mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(59,130,246,0.1)] md:shadow-[inset_0_0_80px_rgba(59,130,246,0.15)] relative font-sans bg-slate-950">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-vignette opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]" />
      </div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 block">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 font-mono opacity-80">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/systems" className="hover:text-blue-400 transition-colors">Systems</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Index System</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(59, 130, 246, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Index System
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-blue-500 pl-4 backdrop-blur-sm bg-black/20 py-2">
              In-game Index system with NPC locations on Starter Island in Sea 1 and Slayer Island in Sea 2, category maximums, counting rules, and milestone buffs through the 200 Index upgrade cap.
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
          
          <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.2)] bg-black relative aspect-square">
            <Image 
              src="/images/site/sailorpiecewikiv3.webp" 
              alt="Sailor Piece Wiki V3 branded cover" 
              fill
              className="object-contain p-4 opacity-90 transition-opacity duration-500 hover:opacity-100"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* Overview Section */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">Overview</h2>
            <ul className="space-y-4">
              {facts.map((fact, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-500 mt-1.5 shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect width="12" height="12" fill="currentColor" fillOpacity="0.2"/>
                      <rect x="3" y="3" width="6" height="6" fill="currentColor"/>
                    </svg>
                  </span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Categories Section */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Index Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((cat, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10 flex justify-between items-center">
                  <span className="text-gray-300 font-semibold">{cat.name}</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-sm font-mono border border-blue-500/30">{cat.total}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestone Buffs Section */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Milestone Buffs</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Total Index</th>
                    <th className="py-4 px-4">Visible Buff</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {milestones.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-mono text-blue-400">{row.threshold}</td>
                      <td className="py-3 px-4 text-white font-medium">{row.buff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">FAQ</h2>
            <div className="grid gap-6">
              {faq.map((item, i) => (
                <div key={i} className="bg-black/40 rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/30 text-xs">Q</span>
                    {item.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed pl-11">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Pages Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {relatedPages.map((page, i) => (
            <Link key={i} href={page.href} className="group panel-action p-6 transition-all hover:scale-[1.02] active:scale-95">
              <h4 className="text-blue-400 font-black uppercase tracking-wider mb-2 group-hover:text-blue-300 transition-colors">{page.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">{page.summary}</p>
            </Link>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
