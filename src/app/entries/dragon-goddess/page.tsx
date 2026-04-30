import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import VideoMovesetCard from "@/components/VideoMovesetCard";

export const metadata: Metadata = {
  title: "How to Get Dragon Goddess in Sailor Piece",
  description: "Dragon Goddess guide for Sailor Piece with obtainment steps, NPC location, materials, questline, mastery, and evolution path notes.",
};

const metaItems = [
  { label: "Status", value: "Sea-beast drop confirmed" },
  { label: "Sea", value: "Sea 2" },
  { label: "Type", value: "Sword" },
  { label: "Alias", value: "Castorice" },
];

const overviewItems = [
  "Dragon Goddess is a late-game Sea 2 sword obtained exclusively through Sea-beast hunting.",
  "It is widely regarded as one of the best weapons for sea-beast farming due to its specialized skill set.",
  "The community often refers to this weapon as 'Castorice' in trade and meta discussions.",
  "Currently sits at Tier 1 for both bossing and open-world progression routes."
];

const obtainmentSteps = [
  "Reach Sea 2 and obtain a sturdy ship capable of deep-sea navigation.",
  "Venture into the 'Deep Sea' or 'Open Sea' regions where sea-beasts are known to spawn.",
  "Engage Sea Serpents or Krakens in combat. Krakens have a slightly higher recorded drop rate.",
  "The weapon drops as a loot item directly into your inventory upon the boss's defeat."
];

// const materialRequirements = [
//   { name: "Sea Serpent Skin", amount: "10", image: "/images/materials/serpent-skin.webp", dropRate: "15%" },
//   { name: "Kraken Ink", amount: "5", image: "/images/materials/kraken-ink.webp", dropRate: "10%" },
//   { name: "Dragon Scale", amount: "1", image: "/images/materials/dragon-scale.webp", dropRate: "1.2%" },
// ];

const bossDetails = [
  { label: "Sea Serpent HP", value: "650,000,000" },
  { label: "Kraken HP", value: "1,250,000,000" },
  { label: "Best Drop Rate", value: "0.465% (Kraken)" },
];

const bossDrops = [
  { item: "Dragon Goddess", chance: "0.465%", role: "Legendary Sword", image: "/images/hero/weapon-dragongoddess.webp" },
];

const moveset = [
  {
    "key": "M1",
    "description": "Standard combo slashes with water-ripple effects.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "Z",
    "description": "Dragon's Breath - Lunges forward with a concentrated blast of energy.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "X",
    "description": "Tidal Wave - Slams the blade down to create a massive area-of-effect wave.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "C",
    "description": "Goddess's Grace - A defensive spin that parries incoming attacks and counters.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "V",
    "description": "Ancient Roar - Summons a spectral dragon that devastates the surroundings.",
    "videoSrc": "",
    "poster": ""
  }
];

const relatedPages = [
  {
    "href": "/entries/sea-2",
    "title": "Sea 2 Guide",
    "summary": "Full progression route for Sea 2, including major islands and bosses."
  },
  {
    "href": "/entries/weapons-overview",
    "title": "Weapons Overview",
    "summary": "Compare Dragon Goddess with other late-game swords like Great Mage and Yamato."
  },
  {
    "href": "/entries/material-sourcing",
    "title": "Materials Guide",
    "summary": "Check where to farm the required skins and scales for upgrades."
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
          <Link href="/entries" className="hover:text-[var(--accent-red)] transition-colors">Weapons</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Dragon Goddess</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Dragon Goddess
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Sea 2 legendary sword obtainment route through sea-beast hunting. Known for Its devastating tidal effects and high mastery potential in late-game PvE.
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
              src="/images/hero/weapon-dragongoddess.webp" 
              alt="Dragon Goddess Hero Image" 
              fill
              className="object-contain p-4 opacity-90 transition-opacity duration-500 hover:opacity-100"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* Content Section: Overview */}
        <div className="panel-action clip-diagonal p-8 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)] opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Overview</h2>
            <ul className="space-y-4">
              {overviewItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-[var(--accent-red)] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Section: How to Obtain */}
        <div className="panel-action clip-diagonal p-8 mb-8 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">How to Get Dragon Goddess</h2>
            <ul className="space-y-4">
              {obtainmentSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-[var(--accent-red)] mt-1">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Section: Required materials */}
        <div className="panel-action clip-diagonal p-8 mb-8 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Required Materials and Upgrade Items</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Requirement</th>
                    <th className="py-4 px-4">Details</th>
                  </tr>
                </thead>
                {/* <tbody className="divide-y divide-white/5">
                  {materialRequirements.map((req, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                            <Image src={req.image} alt={req.name} fill className="object-contain" />
                          </div>
                          <div>
                            <span className="font-semibold text-gray-200">{req.name}</span>
                            {req.dropRate && (
                              <div className="text-xs text-gray-500 flex items-center gap-1">
                                <span className="text-blue-400">{req.dropRate}</span> Drop Rate
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-white font-mono">{req.amount ? `x${req.amount}` : "Confirmed"}</td>
                    </tr>
                  ))}
                </tbody> */}
              </table>
            </div>
          </div>
        </div>

        {/* Content Section: Boss Details & Drops */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Boss Statistics</h2>
            <div className="space-y-4">
              {bossDetails.map((detail, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-400 font-mono text-sm">{detail.label}</span>
                  <span className="text-white font-semibold">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Ocean Drops</h2>
            <div className="space-y-3">
              {bossDrops.map((drop, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-2 border border-white/10">
                   <div className="w-8 h-8 relative shrink-0">
                    <Image src={drop.image} alt={drop.item} fill className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-white">{drop.item}</div>
                    <div className="text-xs text-gray-500">{drop.role}</div>
                  </div>
                  <div className="text-sm font-mono text-[var(--accent-red)]">{drop.chance}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section: Moveset */}
        {moveset.length > 0 && (
          <div className="panel-action clip-diagonal p-8 mb-8 relative overflow-hidden group">
            <div className="mb-4 relative z-10">
              <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Moveset</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {moveset.map((move, i) => (
                  <VideoMovesetCard key={i} move={move} />
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Related Pages */}
        {relatedPages.length > 0 && (
          <div className="panel-action clip-diagonal p-8 mb-12 relative overflow-hidden group">
            <div className="mb-4 relative z-10">
              <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Related Content</h2>
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
