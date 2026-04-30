import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import VideoMovesetCard from "@/components/VideoMovesetCard";

export const metadata: Metadata = {
  title: "How to Get Great Mage in Sailor Piece",
  description: "Great Mage guide for Sailor Piece with obtainment steps, NPC location, materials, questline, mastery, and evolution path notes.",
};

const metaItems = [
  { label: "NPC", value: "Great Mage Prompt" },
  { label: "Island", value: "Easter Island" },
  { label: "Sea", value: "Sea 1" },
  { label: "Cost", value: "Materials + Title" },
];

const overviewItems = [
  "Great Mage is a Sea 1 Easter Island event weapon, not a melee style.",
  "The Great Mage boss is currently tracked at 3,500,000,000 HP.",
  "The current buy requirements are Ancient Mage title, 500 Easter Egg, 18 Spell Echo, 10 Ancient Fragment, 5 Magic Essence, and 1 Mana Core.",
  "Great Mage can also be bought through the Easter shop for 1,500 Easter Eggs as a grind-heavy fallback route."
];

const obtainmentSteps = [
  "Go to Easter Island in Sea 1 and farm Easter Keys from the Easter Bunny event route.",
  "Spawn the Great Mage boss; difficulty costs are 1, 2, 3, or 4 Easter Keys depending on the selected mode.",
  "Farm the Ancient Mage title and the listed materials, then use the Buy Great Mage prompt at the weapon route.",
  "The Easter shop also offers a fallback buy route for 1,500 Easter Eggs if you want to skip the rarer boss materials."
];

const materialRequirements = [
  { name: "Ancient Mage Title", type: "Title", details: "Buff: +90% Damage", image: "/images/icons/greatmage.webp" },
  { name: "Easter Egg", amount: "500", image: "/images/materials/easteregg.webp" },
  { name: "Spell Echo", amount: "18", image: "/images/materials/spellecho.webp", dropRate: "9.87%" },
  { name: "Ancient Fragment", amount: "10", image: "/images/materials/ancientfragment.webp", dropRate: "3.41%" },
  { name: "Magic Essence", amount: "5", image: "/images/materials/magicessence.webp", dropRate: "0.78%" },
  { name: "Mana Core", amount: "1", image: "/images/materials/manacore.webp", dropRate: "0.27% - 0.55%" },
];

const bossDetails = [
  { label: "Boss HP", value: "3,500,000,000" },
  { label: "Summon Cost", value: "1-4 Easter Keys" },
  { label: "Title Odds", value: "0.65% - 1.25% (Pity 160)" },
];

const bossDrops = [
  { item: "Spell Echo", chance: "9.87%", role: "Buy material", image: "/images/materials/spellecho.webp" },
  { item: "Ancient Fragment", chance: "3.41%", role: "Buy material", image: "/images/materials/ancientfragment.webp" },
  { item: "Mage Outfit", chance: "0.90%", role: "Accessory drop", image: "/images/icons/mageoutfit.webp" },
  { item: "Magic Essence", chance: "0.78%", role: "Requirement", image: "/images/materials/magicessence.webp" },
  { item: "Mana Core", chance: "0.27% - 0.55%", role: "Rare drop", image: "/images/materials/manacore.webp" },
];

const moveset = [
  {
    "key": "M1",
    "description": "Basic combo or default attack note.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "Z",
    "description": "Unleashes a rapid magical blast forward.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "X",
    "description": "Creates a magical explosion around the user.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "C",
    "description": "Fires a concentrated beam of magic energy.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "V",
    "description": "Summons multiple magical projectiles from above.",
    "videoSrc": "",
    "poster": ""
  },
  {
    "key": "F",
    "description": "Final mastery move - needs dedicated live check.",
    "videoSrc": "",
    "poster": ""
  }
];

const relatedPages = [
  {
    "href": "/entries/easter-egg-hunt",
    "title": "Easter Egg Hunt",
    "summary": "Sea 1 Easter quest guide with completion rewards."
  },
  {
    "href": "/entries/weapons-overview",
    "title": "Weapons and Swords",
    "summary": "Current sword roster and progression routes."
  },
  {
    "href": "/entries/material-sourcing",
    "title": "Materials Overview",
    "summary": "Current material rarities and drop sources."
  },
  {
    "href": "/entries/bosses-guide",
    "title": "Bosses",
    "summary": "Open-world and spawnable bosses with major drops."
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
          <span className="text-gray-300">Great Mage</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Great Mage
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Easter Island event weapon route with the Ancient Mage title gate, tracked boss materials, and a confirmed Easter shop fallback for 1,500 Easter Eggs.
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
              src="/images/hero/weapon-greatmage.webp" 
              alt="Great Mage Hero Image" 
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
              {overviewItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                  <span className="text-[var(--accent-red)] mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Section: How to Obtain */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">How to Get Great Mage</h2>
            <ul className="space-y-6">
              {obtainmentSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg">
                  <span className="text-[var(--accent-red)] mt-1.5">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Section: Required materials */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Required Materials and Gates</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Requirement</th>
                    <th className="py-4 px-4">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {materialRequirements.map((req, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 relative rounded overflow-hidden bg-white/10 p-1">
                            <Image src={req.image} alt={req.name} fill className="object-contain" />
                          </div>
                          <div>
                            <span className={`font-semibold ${req.type === 'Title' ? 'text-orange-400' : 'text-gray-200'}`}>{req.name}</span>
                            {req.dropRate && (
                              <div className="text-xs text-gray-500 flex items-center gap-1">
                                <span className="text-blue-400">{req.dropRate}</span> Drop Rate
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-white font-mono">{req.amount ? `x${req.amount}` : req.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Content Section: Boss Details & Drops */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Boss Details</h2>
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
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Boss Drops</h2>
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
          <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
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
