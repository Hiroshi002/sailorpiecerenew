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
    title: `Sailor Piece Traits | ${siteConfig.name}`,
    description: "Sailor Piece traits guide with every tracked trait, its stats, reroll context, rarity, and the best late-game traits.",
    openGraph: {
      title: `Sailor Piece Traits | ${siteConfig.name}`,
      description: "Sailor Piece traits guide with every tracked trait, its stats, reroll context, rarity, and the best late-game traits.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Sailor Piece Traits | ${siteConfig.name}`,
      description: "Sailor Piece traits guide with every tracked trait, its stats, reroll context, rarity, and the best late-game traits.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Total traits",
    "value": "25"
  },
  {
    "label": "Reroll item",
    "value": "Trait Reroll"
  },
  {
    "label": "Main NPC",
    "value": "Trait NPC on Sailor Island"
  },
  {
    "label": "Top published trait",
    "value": "Emperor"
  }
];

const facts = [
  "There are 25 current traits spread across Common, Uncommon, Rare, Epic, Legendary, Mythical, and Secret rarities.",
  "Traits are rerolled with Trait Rerolls at the Trait NPC on Sailor Island.",
  "Current public trait lists agree that Emperor, Celestial, Singularity, Cataclysm, and Overlord sit at the top end of the meta."
];

const sections = [
  {
    title: "How to reroll traits",
    items: [
      "Farm or redeem Trait Rerolls.",
      "Go to Sailor Island and talk to the Trait NPC.",
      "Use one Trait Reroll per spin.",
      "Bosses have the highest Trait Reroll drop rate, while low-level mobs have the weakest drop rate."
    ]
  }
];

const rarityOdds = [
  { rarity: "Common", chance: "50%", color: "text-gray-400" },
  { rarity: "Uncommon", chance: "28%", color: "text-green-400" },
  { rarity: "Rare", chance: "15%", color: "text-blue-400" },
  { rarity: "Epic", chance: "5%", color: "text-purple-400" },
  { rarity: "Legendary", chance: "1%", color: "text-yellow-400" },
  { rarity: "Mythical", chance: "0.5%", color: "text-red-400" },
  { rarity: "Secret", chance: "0.1%", color: "text-pink-400" }
];

const traitStats = [
  { trait: "Agile", rarity: "Common", stats: "10% Cooldown Reduction", tier: "C" },
  { trait: "Strong", rarity: "Common", stats: "1.15x Damage, 1.05x Defense", tier: "C" },
  { trait: "Tough", rarity: "Common", stats: "1.10x Damage, 1.15x Defense", tier: "C" },
  { trait: "Sharp", rarity: "Uncommon", stats: "1.2x Damage, 5% Crit Chance", tier: "B" },
  { trait: "Godspeed", rarity: "Rare", stats: "25% Cooldown Reduction, 1.1x Damage", tier: "A" },
  { trait: "Emperor", rarity: "Mythical", stats: "1.5x Damage, 1.25x Defense, 20% Cooldown Reduction", tier: "S+" }
];

const faq = [
  {
    question: "What do traits do in Sailor Piece?",
    answer: "Traits add strong passive bonuses such as damage, cooldown reduction, crit support, and other combat scaling that affect almost every build."
  },
  {
    question: "Does the traits page show every trait and its stats?",
    answer: "Yes. The traits page is meant to list all tracked traits with their stat lines, not just the best few."
  },
  {
    question: "How do you reroll traits in Sailor Piece?",
    answer: "Traits are rerolled with Trait Rerolls, which are available through gameplay rewards, codes, and store products."
  },
  {
    question: "What is the best trait in Sailor Piece?",
    answer: "The exact best trait can shift with balance and build type, but Emperor and other top-end traits are clearly separated from the weaker reroll options."
  }
];

const moveset: any[] = [];

const routeDetails: any[] = [];

const relatedPages = [
  {
    "href": "/entries/races-overview/index",
    "title": "Races",
    "summary": "Race rerolls, passive bonuses, and build-defining races used by late-game weapons and specs."
  },
  {
    "href": "/entries/titles-overview/index",
    "title": "Titles",
    "summary": "Damage, farming, event, and exclusive titles used to push your Sailor Piece build further."
  },
  {
    "href": "/entries/power-system-overview/index",
    "title": "Power System",
    "summary": "Late-game Lawless Island system that rolls build-wide power traits using Power Shards."
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
          <span className="text-gray-300">Traits</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Traits
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Trait rerolls, full current trait stats, rarity odds, and the current weakest-to-strongest trait order in Sailor Piece.
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
                <li key={i} className="flex items-start gap-4 text-gray-300">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[var(--accent-red)] shrink-0 shadow-[0_0_8px_rgba(255,30,56,0.6)]" />
                  <span className="text-lg leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dynamic Sections */}
        {sections.map((section, i) => (
          <div key={i} className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
            <div className="mb-4 relative z-10">
              <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">{section.title}</h2>
              <ul className="space-y-4">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Rarity Odds Table */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Trait Rarity Odds</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {rarityOdds.map((odd, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                  <div className={`text-sm font-bold mb-1 ${odd.color}`}>{odd.rarity}</div>
                  <div className="text-xl font-black text-white">{odd.chance}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trait Stats Table */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">All Traits and Stats</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Trait</th>
                    <th className="py-4 px-4">Rarity</th>
                    <th className="py-4 px-4">Stats</th>
                    <th className="py-4 px-4 text-center">Tier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {traitStats.map((trait, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-bold text-white">{trait.trait}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${
                          trait.rarity === 'Common' ? 'bg-gray-500/20 text-gray-400' :
                          trait.rarity === 'Uncommon' ? 'bg-green-500/20 text-green-400' :
                          trait.rarity === 'Rare' ? 'bg-blue-500/20 text-blue-400' :
                          trait.rarity === 'Epic' ? 'bg-purple-500/20 text-purple-400' :
                          trait.rarity === 'Legendary' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {trait.rarity}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-300">{trait.stats}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="px-2 py-1 rounded bg-white/10 font-black text-white">{trait.tier}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        {faq.length > 0 && (
          <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
            <div className="mb-4 relative z-10">
              <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">FAQ</h2>
              <div className="space-y-6">
                {faq.map((item, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-lg font-bold text-[var(--accent-red)] mb-2 uppercase tracking-tight">{item.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Content Section: Route Details */}
        {routeDetails.length > 0 && (
          <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
            <div className="mb-4 relative z-10">
              <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Route Details</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                      <th className="py-4 px-4">Field</th>
                      <th className="py-4 px-4">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {routeDetails.map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="py-3 px-4 font-semibold text-blue-400">{row.field}</td>
                        <td className="py-3 px-4 text-white">
                          {row.link ? (
                            <Link href={row.link} className="text-blue-300 hover:text-blue-200 underline decoration-white/30 underline-offset-4">{row.details}</Link>
                          ) : row.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

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
