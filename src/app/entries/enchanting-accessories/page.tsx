import { getSiteConfig } from "@/config/site";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import VideoMovesetCard from "@/components/VideoMovesetCard";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Enchanting Accessories | ${siteConfig.name}`,
    description: "Shibuya Station accessory upgrade system with E1 to E10 scaling, duplicate copy costs, success rates, published checkpoint ladders, and full confirmed step-by-step routes for the tracked accessories.",
    openGraph: {
      title: `Enchanting Accessories | ${siteConfig.name}`,
      description: "Shibuya Station accessory upgrade system with E1 to E10 scaling, duplicate copy costs, success rates, published checkpoint ladders, and full confirmed step-by-step routes for the tracked accessories.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Enchanting Accessories | ${siteConfig.name}`,
      description: "Shibuya Station accessory upgrade system with E1 to E10 scaling, duplicate copy costs, success rates, published checkpoint ladders, and full confirmed step-by-step routes for the tracked accessories.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Applies to",
    "value": "Accessories only"
  },
  {
    "label": "Location",
    "value": "Shibuya Station"
  },
  {
    "label": "NPC",
    "value": "Enchanter NPC"
  },
  {
    "label": "Max level",
    "value": "E10"
  }
];

const facts = [
  "Enchanting applies only to accessories, not fruits, swords, or specs.",
  "Each enchant adds +5% Defense, +4% Damage, and +2% Damage Reduction to that accessory.",
  "Diamonds start appearing at E7 for most accessories and duplicate copies become the main bottleneck on later steps."
];

const howToSteps = [
  "Go to Shibuya Station and walk toward the tallest building.",
  "Talk to the Enchanter NPC beside the Blessing NPC.",
  "Pick the accessory you want to upgrade.",
  "Bring the listed materials and the duplicate copies required by the target enchant level."
];

const statGains = [
  { enchant: "E1", added: "+5% Defense, +4% Damage, +2% Damage Reduction", cumulative: "+5% Defense, +4% Damage, +2% Damage Reduction" },
  { enchant: "E5", added: "+5% Defense, +4% Damage, +2% Damage Reduction", cumulative: "+25% Defense, +20% Damage, +10% Damage Reduction" },
  { enchant: "E10", added: "+5% Defense, +4% Damage, +2% Damage Reduction", cumulative: "+50% Defense, +40% Damage, +20% Damage Reduction" }
];

const successRates = [
  { upgrade: "E0 to E1", chance: "100%" },
  { upgrade: "E1 to E2", chance: "80%" },
  { upgrade: "E2 to E3", chance: "70%" },
  { upgrade: "E3 to E4", chance: "70%" },
  { upgrade: "E4 to E5", chance: "70%" },
  { upgrade: "E5 to E6", chance: "60%" },
  { upgrade: "E6 to E7", chance: "50%" },
  { upgrade: "E7 to E8", chance: "40%" },
  { upgrade: "E8 to E9", chance: "30%" },
  { upgrade: "E9 to E10", chance: "20%" }
];

const materialLadders = [
  { name: "Holy Armor", e1: "30 Wood, 10 Iron, 2 Obsidian, 1 copy", e4: "5 Mythril, 85 Wood, 25 Iron, 15 Obsidian, 2 copies", e7: "1 Diamond, 3 Adamantite, 8 Mythril, 100 Wood, 2 copies", e10: "2 Diamond, 7 Adamantite, 10 Mythril, 100 Wood, 2 copies" },
  { name: "Vampire Coat", e1: "60 Wood, 25 Iron, 5 Obsidian, 1 copy", e4: "3 Adamantite, 20 Mythril, 150 Wood, 65 Iron, 2 copies", e7: "2 Diamond, 7 Adamantite, 20 Mythril, 150 Wood, 2 copies", e10: "6 Diamond, 20 Adamantite, 40 Mythril, 150 Wood, 2 copies" },
  { name: "Limitless Haori", e1: "5 Mythril, 85 Wood, 35 Iron, 15 Obsidian, 1 copy", e4: "6 Adamantite, 40 Mythril, 200 Wood, 125 Iron, 2 copies", e7: "5 Diamond, 15 Adamantite, 65 Mythril, 250 Wood, 2 copies", e10: "13 Diamond, 35 Adamantite, 85 Mythril, 250 Wood, 2 copies" },
  { name: "Demon King Outfit", e1: "15 Mythril, 125 Wood, 65 Iron, 30 Obsidian, 1 copy", e4: "20 Adamantite, 115 Mythril, 350 Wood, 250 Iron, 2 copies", e7: "7 Diamond, 45 Adamantite, 135 Mythril, 350 Wood, 2 copies", e10: "22 Diamond, 85 Adamantite, 150 Mythril, 350 Wood, 2 copies" },
  { name: "Hollow Mask", e1: "2 Mythril, 85 Wood, 35 Iron, 7 Obsidian, 1 copy", e4: "4 Adamantite, 25 Mythril, 150 Wood, 75 Iron, 2 copies", e7: "4 Diamond, 10 Adamantite, 40 Mythril, 175 Wood, 2 copies", e10: "9 Diamond, 25 Adamantite, 50 Mythril, 200 Wood, 2 copies" },
  { name: "Maiden Outfit", e1: "15 Mythril, 125 Wood, 65 Iron, 30 Obsidian, 1 copy", e4: "25 Adamantite, 115 Mythril, 350 Wood, 250 Iron, 2 copies", e7: "8 Diamond, 60 Adamantite, 150 Mythril, 350 Wood, 2 copies", e10: "30 Diamond, 115 Adamantite, 185 Mythril, 350 Wood, 2 copies" },
  { name: "Ultimate Wings", e1: "5 Mythril, 85 Wood, 35 Iron, 15 Obsidian, 1 copy", e4: "6 Adamantite, 40 Mythril, 200 Wood, 125 Iron, 2 copies", e7: "5 Diamond, 25 Adamantite, 65 Mythril, 250 Wood, 2 copies", e10: "15 Diamond, 50 Adamantite, 90 Mythril, 250 Wood, 2 copies" },
  { name: "Abyssal Outfit", e1: "15 Mythril, 125 Wood, 65 Iron, 30 Obsidian, 1 copy", e4: "30 Adamantite, 115 Mythril, 350 Wood, 250 Iron, 2 copies", e7: "12 Diamond, 75 Adamantite, 135 Mythril, 400 Wood, 2 copies", e10: "40 Diamond, 130 Adamantite, 175 Mythril, 500 Wood, 2 copies" }
];

const materialNotes = [
  "Diamonds start appearing at E7 for most published accessory ladders, which is where enchant farming gets much slower.",
  "Most accessories switch from one copy per attempt to two copies by the E3 to E4 step.",
  "Holy Armor, Sorcerer Blindfold, and Vessel Hair are among the cheaper ladders, while Maiden, Moon, Ice Queen, Abyssal, and Atomic Outfits are some of the heaviest grinds.",
  "If an enchant fails, the materials are still consumed, but the next attempt gains 10% extra success chance."
];

const moveset: any[] = [];

const routeDetails: any[] = [];

const relatedPages = [
  {
    "href": "/entries/blessings-system/index",
    "title": "Blessings System",
    "summary": "Shibuya Station upgrade system for swords and specs, with shared B1 to B10 materials and stat gains."
  },
  {
    "href": "/entries/cosmetics-overview/index",
    "title": "Cosmetics and Crates",
    "summary": "Stat cosmetics obtained from Cosmetic Crates, with the current rarity ladder and equip flow."
  }
];

export default function EntryPage() {
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
          <Link href="/entries" className="hover:text-[var(--accent-red)] transition-colors">Entries</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Enchanting Accessories</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Enchanting Accessories
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Shibuya Station accessory upgrade system with E1 to E10 scaling, duplicate copy costs, success rates, published checkpoint ladders, and full confirmed step-by-step routes for the tracked accessories.
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
          
          <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(255,30,56,0.2)] bg-black relative aspect-square">
            <Image 
              src="/images/site/sailorpiece-wiki-cover-v2.webp" 
              alt="Hero Image Placeholder" 
              fill
              className="object-contain p-4 opacity-90 transition-opacity duration-500 hover:opacity-100"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* Content Section: Overview */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)] opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">Overview</h2>
            <ul className="space-y-6">
              {facts.map((fact, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 group/item transition-colors hover:text-white">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--accent-red)] shadow-[0_0_10px_rgba(255,30,56,0.5)] shrink-0" />
                  <span className="text-lg leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How to Enchant */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">How to Enchant Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {howToSteps.map((step, i) => (
                <div key={i} className="bg-black/40 border border-white/10 p-6 rounded-xl hover:border-[var(--accent-red)]/50 transition-all flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-red)] flex items-center justify-center text-white font-black shrink-0 shadow-[0_0_15px_rgba(255,30,56,0.3)]">
                    {i + 1}
                  </div>
                  <span className="text-gray-300">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Per-level Stat Gain */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Per-level Stat Gain</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Enchant</th>
                    <th className="py-4 px-4">Added Stats</th>
                    <th className="py-4 px-4 text-right">Cumulative Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {statGains.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group/row">
                      <td className="py-4 px-4 font-black text-[var(--accent-red)] group-hover/row:scale-110 transition-transform inline-block">{row.enchant}</td>
                      <td className="py-4 px-4 text-gray-300">{row.added}</td>
                      <td className="py-4 px-4 text-right font-bold text-white">{row.cumulative}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Success Rates */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Enchant Success Rates</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {successRates.map((rate, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:bg-[var(--accent-red)]/10 transition-all group/rate">
                  <div className="text-xs text-gray-400 mb-1 group-hover/rate:text-gray-300 transition-colors uppercase font-mono">{rate.upgrade}</div>
                  <div className="text-2xl font-black text-white">{rate.chance}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Material Ladders */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Material Ladders</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Accessory</th>
                    <th className="py-4 px-4">E0 to E1</th>
                    <th className="py-4 px-4">E3 to E4</th>
                    <th className="py-4 px-4">E6 to E7</th>
                    <th className="py-4 px-4">E9 to E10</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {materialLadders.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group/row">
                      <td className="py-4 px-4 font-bold text-white">{row.name}</td>
                      <td className="py-4 px-4 text-xs text-gray-400 max-w-[150px]">{row.e1}</td>
                      <td className="py-4 px-4 text-xs text-gray-400 max-w-[150px]">{row.e4}</td>
                      <td className="py-4 px-4 text-xs text-gray-400 max-w-[150px] font-semibold text-blue-300">{row.e7}</td>
                      <td className="py-4 px-4 text-xs text-gray-400 max-w-[150px] font-black text-[var(--accent-red)]">{row.e10}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Material Notes */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">Material Notes</h2>
            <ul className="space-y-4">
              {materialNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 group/note hover:text-white transition-colors">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent-red)] shrink-0" />
                  <span className="text-base">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Related Pages */}
        {relatedPages.length > 0 && (
          <div className="panel-action clip-diagonal p-8 mb-12 relative overflow-hidden group">
            <div className="mb-4 relative z-10">
              <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Related Pages</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedPages.map((page, i) => (
                  <Link
                    key={i}
                    href={page.href}
                    className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent-red)] transition-all duration-300 hover:scale-105 block"
                  >
                    <strong className="block text-sm font-bold text-white group-hover:text-[var(--accent-red)] transition-colors mb-2">{page.title}</strong>
                    <span className="text-xs text-gray-400">{page.summary}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        
      </main>

      <Footer />
    </div>
  );
}

