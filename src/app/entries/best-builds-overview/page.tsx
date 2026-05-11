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
    title: `Sailor Piece Best Builds | ${siteConfig.name}`,
    description: "Sailor Piece best builds guide with max damage builds, luck builds, theoretical endgame caps, and progression planning.",
    openGraph: {
      title: `Sailor Piece Best Builds | ${siteConfig.name}`,
      description: "Sailor Piece best builds guide with max damage builds, luck builds, theoretical endgame caps, and progression planning.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Sailor Piece Best Builds | ${siteConfig.name}`,
      description: "Sailor Piece best builds guide with max damage builds, luck builds, theoretical endgame caps, and progression planning.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Start here",
    "value": "Pick one route"
  },
  {
    "label": "Sword shell",
    "value": "Dual Wielder / Sun God / Ice Queen"
  },
  {
    "label": "Melee shell",
    "value": "The World / Cosmic Being"
  },
  {
    "label": "Farming shell",
    "value": "Archangel / Primordial"
  },
  {
    "label": "Main systems",
    "value": "Haki / Skill Tree / Ascension"
  },
  {
    "label": "HP benchmark",
    "value": "About 250M route-dependent"
  }
];

const facts = [
  "Start by choosing one build goal: sword damage, melee damage, or luck farming. The staged guide below explains what to chase before the cap tables matter.",
  "Strong builds are layered across weapons, melees, races, clans, traits, powers, spec passives, titles, accessories, artifacts, runes, and permanent account systems.",
  "Current endgame targets assume capped Haki, Ascension, Skill Tree, Blessings, Enchants, Tower, Boss Rush, Crystal Defense, Artifacts, and route-specific rerolls.",
  "Current max-health guidance is closer to roughly 250,000,000 HP on heavy HP routes, so older low-health notes should not be used as cap targets.",
  "Damage, luck, and utility totals are kept separate because artifact rolls, stat rerolls, gamepasses, and global events can change the visible panel number."
];

const stagedGuides = [
  {
    title: "Stage 1 - Pick your build goal",
    items: [
      "Pick Max Sword Damage if your weapon is the skill line carrying most of your clears. Dual Wielder is the current pure DPS king, Sun God is the damage-forward Ice Queen-style option, and Ice Queen remains the broad versatility pick.",
      "Pick Max Melee Damage if your fighting style is the main damage source. The World and Cosmic Being are the real Sea 2 meta targets, while Spirit Warrior is an A-tier substitute if you are still missing the better routes.",
      "Pick Max Luck Farming if the account is built around drops, rerolls, tower loops, boss loops, and long farming sessions.",
      "Do not compare exact cap numbers until the goal is clear. Sword, melee, and luck builds use different best slots, different swaps, and different artifact rolls.",
      "Use the staged sections first, then use the large tables as reference once you know which route you are actually building."
    ]
  },
  {
    title: "Stage 2 - Build a playable shell",
    items: [
      "Secure one strong main route before chasing every best-in-slot piece. A finished good route usually beats a half-built perfect route.",
      "For sword accounts, aim toward Dual Wielder, Sun God, Ice Queen, or Dragon Goddess while keeping a useful melee sidecar for coverage.",
      "For melee accounts, aim toward The World or Cosmic Being while keeping Spirit Warrior as a substitute route rather than the final meta target.",
      "For luck accounts, keep enough damage to clear quickly. Archangel, Primordial, Celestial Favor, Radiant Rune, and Crystal Luck Relic matter most only when the account can still kill efficiently.",
      "Use good fallbacks while farming: Sun Outfit or Demon Wing before Dual Outfit, strong legendary artifacts before perfect Sacred Dominion rolls, and practical rerolls before full Z lines."
    ]
  },
  {
    title: "Stage 3 - Finish account systems",
    items: [
      "Treat Haki, Ascension, Skill Tree, Blessings, Enchants, Artifacts, Infinite Tower, Boss Rush, Crystal Defense, and Guild upgrades as the backbone of the build.",
      "Current cap assumptions include Armament level 100, Observation level 50, Conqueror level 35, Ascension 10, 490 Skill Points, B10 main routes, E10 accessories, max Tower upgrades, max Boss Rush upgrades, and max Crystal Defense upgrades.",
      "Crystal Defense matters directly now because full upgrades add Damage, Crit Damage, Crit Chance, HP, and Luck to the account.",
      "Finish the permanent systems before obsessing over the final percent. They improve every route you play and make later item farming easier."
    ]
  },
  {
    title: "Stage 5 - Start min-max cleanup",
    items: [
      "Once the route works, chase the expensive cleanup: Z or SSS stat rerolls, perfect artifact mains and substats, final aura and cosmetic choices, and route-specific titles.",
      "Use the damage cap, luck cap, and utility tables as math references, not as the first shopping list for a newer account.",
      "Health rows now use a higher route-dependent benchmark near 250,000,000 HP instead of the older low estimates.",
      "Luck math includes the base panel total first, then doubles through the 2x Luck gamepass or a 2x global luck event when those boosts are active."
    ]
  }
];

const routeUpgrades = {
  title: "Stage 4 - Choose route upgrades",
  headers: ["Goal", "Core route", "Important swaps"],
  rows: [
    {
      goal: "Sword damage",
      route: "Dual Wielder, Sun God, Ice Queen, or Dragon Goddess at B10, Reaper, Doombringer, Frostbane, Emperor, Primordial Rune, Crystal Damage Relic, Sacred Dominion artifacts",
      swaps: "Use Archangel when farming value matters, Devil when +1 drops matter, and Sun Outfit or Demon Wing until Dual Outfit is ready."
    },
    {
      goal: "Melee damage",
      route: "The World or Cosmic Being at B10, with Spirit Warrior as an A-tier substitute; Archangel, Empyrean, Upper or Senzu, Emperor, Primordial Rune, Crystal Damage Relic, Sacred Dominion artifacts",
      swaps: "Use Archangel as the melee and farming race, Reaper as the raw-damage and execute swap, and Berserker as the easier damage passive fallback."
    },
    {
      goal: "Luck farming",
      route: "Archangel, Primordial, Devil, Radiant Rune, Crystal Luck Relic, Sacred Dominion artifacts with luck substats, maxed permanent systems",
      swaps: "Use Cosmic Being for Crystal Defense AFK, and Gilgamesh or Moon Slayer for broader farming patterns."
    }
  ]
};

const sea2RouteNotes = {
  title: "Sea 2 route notes",
  headers: ["Route", "Why it matters", "Best fit"],
  rows: [
    {
      route: "Ice Queen",
      why: "Still one of the cleanest broad PvE sword routes thanks to its damage buildup, strong clear pattern, and Frostbane synergy on sword-focused accounts.",
      fit: "Best broad sword route for repeated PvE clears and endgame damage buildup"
    },
    {
      route: "Dragon Goddess",
      why: "The latest reported buff wave pushes this back into the top Sea 2 sword lane, with a stronger all-around damage route instead of only a balanced middle-ground profile.",
      fit: "S+ Sea 2 sea-beast sword route after repeated buffs"
    },
    {
      route: "Sun God",
      why: "S+ sword route that plays like Ice Queen with more value pushed into raw damage and slightly less versatility in the overall arsenal.",
      fit: "S+ sword route with a high damage ceiling"
    },
    {
      route: "The World",
      why: "The king of Sea 2 AFK melee clears and repeated farm patterns. Its high damage, time-stop niche, and broad AoE coverage keep it at the top of the melee meta.",
      fit: "Top melee route for AFK clears and time-stop utility"
    },
    {
      route: "Cosmic Being",
      why: "One of the highest live-damage melee routes after the recent buff wave. Its lack of endlag and fast cooldowns make it the meta pick for active bossing and Crystal Defense.",
      fit: "Top live-damage melee route for bossing and defense"
    }
  ]
};

const capSetup = {
  title: "Theoretical top-limit setup",
  headers: ["Layer", "Top cap target", "Current cap note"],
  rows: [
    { layer: "Sword", target: "Dual Wielder, Sun God, Ice Queen, or Dragon Goddess at B10", note: "Dual Wielder is pure DPS king, Sun God is damage-forward S+ option." },
    { layer: "Melee", target: "The World or Cosmic Being at B10, with Spirit Warrior fallback", note: "The World for AFK, Cosmic Being for live damage." },
    { layer: "Accessory", target: "Dual Outfit at E10, Sun Outfit or Demon Wing at E10", note: "Dual Outfit leads at +150% Damage." },
    { layer: "Race", target: "Reaper for sword damage, Archangel for melee/luck", note: "Reaper adds execute and raw sword damage." },
    { layer: "Clan", target: "Emperor for damage, Devil for farming, Senzu for burst", note: "Emperor's 2.30x Damage is the current meta ceiling." },
    { layer: "Trait", target: "Godly or SSS Sword/Melee/Luck lines", note: "Focus on Z-tier rerolls for maximum impact." },
    { layer: "Artifacts", target: "Full Sacred Dominion set with perfect substats", note: "Sacred Dominion provides the strongest offensive set bonuses." }
  ]
};

const swordCapTotals = {
  title: "Sword cap totals",
  headers: ["Category", "Stat", "Approximate top-limit total"],
  rows: [
    { cat: "Offense", stat: "Damage %", total: "About +1,190% to +1,205% direct Damage" },
    { cat: "Offense", stat: "Sword Damage %", total: "About +40% to +45% rounded" },
    { cat: "Defense", stat: "Max Health", total: "About 250,000,000 HP route-dependent" },
    { cat: "Utility", stat: "Luck %", total: "About +386.5% base, or +773% with 2x pass" }
  ]
};

const universalChecklist = {
  title: "Universal max-out checklist",
  headers: ["Layer", "Target"],
  rows: [
    { layer: "Ascension", target: "Ascension 10" },
    { layer: "Armament Haki", target: "Level 100" },
    { layer: "Observation Haki", target: "Level 50" },
    { layer: "Conqueror Haki", target: "Level 35 and active" },
    { layer: "Skill Tree", target: "490 SP target" },
    { layer: "Weapon Blessing", target: "B10 main routes" },
    { layer: "Accessory Enchant", target: "E10 main pieces" }
  ]
};

const relatedPages = [
  {
    "href": "/entries/weapons-overview/index",
    "title": "Weapons and Swords",
    "summary": "Current sword roster and progression routes, from starter sellers to late-game upgrade chains."
  },
  {
    "href": "/entries/specs-overview/index",
    "title": "Melees and Fighting Styles",
    "summary": "Current melee roster in Sailor Piece and the shared way fighting styles scale."
  },
  {
    "href": "/entries/races-overview/index",
    "title": "Races",
    "summary": "Race rerolls, passive bonuses, and build-defining races."
  },
  {
    "href": "/entries/clans-overview/index",
    "title": "Clans",
    "summary": "Clan rerolls, clan passives, and the current late-game clan roster."
  },
  {
    "href": "/entries/artifacts-overview/index",
    "title": "Artifacts",
    "summary": "Artifact unlocks, ranked set bonuses, stat pools, and dust upgrades."
  },
  {
    "href": "/entries/runes-overview/index",
    "title": "Runes",
    "summary": "Rune Dungeon and Infinite Tower rune system, leveling, and the strongest rune routes."
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
          <span className="text-gray-300">Best Builds</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Best Builds
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Min-max endgame loadouts for raw damage, melee burst, and luck farming, focused on the current theoretical cap routes from this wiki's own item and system tables.
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
            <ul className="space-y-4">
              {facts.map((fact, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--accent-red)] shrink-0 shadow-[0_0_10px_rgba(255,30,56,0.5)]" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Staged Guides */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {stagedGuides.map((guide, i) => (
            <div key={i} className="panel-action clip-diagonal p-6 relative overflow-hidden group">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                <span className="text-[var(--accent-red)] font-mono">0{i + 1}</span>
                {guide.title}
              </h3>
              <ul className="space-y-4">
                {guide.items.map((item, j) => (
                  <li key={j} className="text-sm text-gray-400 leading-relaxed pl-4 border-l-2 border-white/5 group-hover:border-[var(--accent-red)]/30 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Route Upgrades Table */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">{routeUpgrades.title}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                  {routeUpgrades.headers.map((header, i) => (
                    <th key={i} className="py-4 px-4">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {routeUpgrades.rows.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold text-[var(--accent-red)]">{row.goal}</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">{row.route}</td>
                    <td className="py-4 px-4 text-gray-400 text-xs italic">{row.swaps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sea 2 Route Notes */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">{sea2RouteNotes.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sea2RouteNotes.rows.map((row, i) => (
              <div key={i} className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-[var(--accent-red)]/50 transition-all">
                <div className="text-[var(--accent-red)] font-black uppercase tracking-widest mb-2">{row.route}</div>
                <div className="text-sm text-gray-300 mb-3 leading-relaxed">{row.why}</div>
                <div className="text-xs text-gray-500 font-mono uppercase tracking-tighter">Best Fit: {row.fit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cap Setup & Totals */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">
          {/* Theoretical Cap Setup */}
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">{capSetup.title}</h2>
            <div className="space-y-4">
              {capSetup.rows.map((row, i) => (
                <div key={i} className="flex flex-col gap-1 border-b border-white/5 pb-3 last:border-0">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-gray-500 uppercase">{row.layer}</span>
                    <span className="text-[var(--accent-red)] font-bold text-sm">{row.target}</span>
                  </div>
                  <p className="text-xs text-gray-400 italic">{row.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sword Cap Totals */}
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden group">
            <h2 className="text-2xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">{swordCapTotals.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-gray-500 font-mono text-[10px] uppercase">
                    <th className="py-2 px-2">Stat</th>
                    <th className="py-2 px-2">Total Cap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {swordCapTotals.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2">
                        <div className="text-[10px] text-gray-500 uppercase leading-none mb-1">{row.cat}</div>
                        <div className="text-sm font-bold text-white">{row.stat}</div>
                      </td>
                      <td className="py-3 px-2 text-sm text-[var(--accent-red)] font-mono">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Universal Checklist */}
        <div className="panel-action clip-diagonal p-8 mb-12 relative overflow-hidden group">
          <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">{universalChecklist.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {universalChecklist.rows.map((row, i) => (
              <div key={i} className="bg-black/40 border border-white/10 p-4 rounded-lg flex flex-col items-center text-center group-hover:border-[var(--accent-red)]/20 transition-colors">
                <div className="text-[10px] text-gray-500 uppercase font-mono mb-2">{row.layer}</div>
                <div className="text-sm font-black text-white uppercase tracking-tight">{row.target}</div>
              </div>
            ))}
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
