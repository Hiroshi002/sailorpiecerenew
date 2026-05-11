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
    title: `Bloodlines | ${siteConfig.name}`,
    description: "Sea 2 Bloodlines system page with the corrected confirmed stat table, Demonic, and the new Legendary Empyrean and Doombringer bloodlines.",
    openGraph: {
      title: `Bloodlines | ${siteConfig.name}`,
      description: "Sea 2 Bloodlines system page with the corrected confirmed stat table, Demonic, and the new Legendary Empyrean and Doombringer bloodlines.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Bloodlines | ${siteConfig.name}`,
      description: "Sea 2 Bloodlines system page with the corrected confirmed stat table, Demonic, and the new Legendary Empyrean and Doombringer bloodlines.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  {
    "label": "Status",
    "value": "Corrected stat table confirmed from current bloodline image"
  },
  {
    "label": "Main item",
    "value": "Bloodline Stone"
  },
  {
    "label": "Current source",
    "value": "Sea 2 NPCs and Sea Beasts"
  },
  {
    "label": "Tracked bloodlines",
    "value": "12 confirmed entries"
  },
  {
    "label": "Core currency",
    "value": "Bloodline Stone from Sea 2 NPC enemies and Sea Beasts"
  },
  {
    "label": "Newest bloodlines",
    "value": "Empyrean and Doombringer"
  },
  {
    "label": "Best current melee hybrid",
    "value": "Empyrean"
  },
  {
    "label": "Best current sword burst",
    "value": "Doombringer"
  },
  {
    "label": "Best current grinding line",
    "value": "Primordial"
  }
];

const overviewPoints = [
  "Bloodlines are one of the newly tracked Sea 2 systems.",
  "Bloodline Stone is currently obtainable from Sea 2 NPCs and Sea Beasts.",
  "The newer current bloodline table gives a cleaner exact stat read for the tracked bloodlines, so the page no longer needs the older cropped-screen guesswork.",
  "Empyrean is currently treated as the best melee bloodline and can also compete in sword builds because its broad damage, luck, HP, reduction, and stacking passive are all useful.",
  "Doombringer is currently treated as the best sword burst bloodline and the stronger Demonic-style upgrade path, with Empyrean remaining close enough to swap by build preference.",
  "Primordial is now the real top grinding bloodline on this page and replaces the older mistaken Cosmic listing.",
  "Demonic remains a high-end Crystal Defense sword-focused bloodline, but now sits behind Doombringer in current sword recommendations.",
  "The current update adds 2 new Legendary bloodlines: Empyrean and Doombringer.",
  "Empyrean is now the newest Legendary melee and luck hybrid bloodline, while Doombringer is the newest Legendary sword burst bloodline."
];

const mechanicsPoints = [
  "Bloodlines are a new Sea 2 system.",
  "Bloodline Stones come from Sea 2 NPCs and Sea Beasts, with Sea Beasts acting as the strongest currently tracked route.",
  "There is no separate Bloodline NPC right now because you use Bloodline Stones directly from your inventory.",
  "The current bloodline table is now clean enough to lock in exact stats for the ten tracked entries on this page.",
  "The older Cosmic entry has been removed because the corrected table shows Primordial instead.",
  "The full bloodline list is now tracked on this page, with Legendary pity at 250 and Mythical pity at 750."
];

const updateNotes = [
  { bloodline: "Empyrean", status: "Legendary bloodline with +35% Damage, +5% Damage Reduction, +15% Luck Multi, +12% Melee Damage Multi, +45% Max HP, and a stacking damage-per-tick passive up to 15%." },
  { bloodline: "Doombringer", status: "Legendary bloodline with +32% Damage, +12% Luck Multi, +2% Lifesteal, +12% Sword Damage Multi, +40% Max HP, and a 20% chance on every skill used to gain a +20% damage buff for 8 seconds." }
];

const tierList = [
  { bloodline: "Empyrean", tier: "S+ (Best melee; also sword-viable)", stats: "+35% Damage, +5% Damage Reduction, +15% Luck Multi, +12% Melee Damage Multi, +45% Max HP, plus +0.15% DMG per tick up to 15%" },
  { bloodline: "Doombringer", tier: "S+ (Best sword burst)", stats: "+32% Damage, +12% Luck Multi, +2% Lifesteal, +12% Sword Damage Multi, +40% Max HP, plus a 20% chance on every skill used to gain +20% Damage for 8 seconds" },
  { bloodline: "Primordial", tier: "S (Best grinding line)", stats: "+27% Damage, +5% Damage Reduction, +15% Luck Multi, +10% Melee Damage Multi, +15% +1 Drop Chance, +40% Max HP" },
  { bloodline: "Demonic", tier: "S (High sword)", stats: "+32% Damage, +12% Luck Multi, +2% Lifesteal, +12% Sword Damage Multi, +40% Max HP" },
  { bloodline: "Astral", tier: "S (Strong sword)", stats: "+25% Damage, +12% Luck Multi, +2% Lifesteal, +12% Sword Damage Multi, +35% Max HP, plus Mark effect" }
];

const routeNotes = [
  "Empyrean and Doombringer are now the two named current-update Legendary bloodlines, replacing the earlier unnamed update lines.",
  "Empyrean is the current melee-first target and can still compete in sword builds because its stacking damage passive and broad stat line are not locked to one weapon type.",
  "Doombringer is the current sword-first target and now reads like the stronger Demonic-style burst choice.",
  "Primordial remains the best grinding bloodline because it combines luck, drop support, damage, reduction, melee value, and HP.",
  "Demonic remains a strong sword fallback, but it is no longer ranked beside Doombringer when judging current best-in-slot sword routes.",
  "Astral still holds a premium slot because it remains a very strong older sword bloodline, especially now that its Mark effect is directly readable.",
  "Dawnbringer and Nightfall remain strong mid-high options because both rows keep useful combat stats without wasting lines on weak filler bonuses.",
  "Hunter, Vizard, and Stormborn are still useful depending on whether you care more about farming utility, gems, or XP support than pure combat caps."
];

const relatedPages = [
  {
    "href": "/entries/../sea-2/index",
    "title": "Sea 2 Guide",
    "summary": "Comprehensive guide to Sea 2 mechanics, islands, and progression."
  },
  {
    "href": "/entries/relics-system/index",
    "title": "Relics",
    "summary": "Sea 2 Relics system page with the Relic Crafter NPC, the currently confirmed forge recipes, and the tracked Relic Part enemy routes."
  },
  {
    "href": "/entries/guilds-system/index",
    "title": "Guilds",
    "summary": "Sea 2 Guilds system page with the confirmed create-guild requirements and tracked Guild Key drop rates."
  },
  {
    "href": "/entries/material-sourcing/index",
    "title": "Materials Overview",
    "summary": "Current material rarities, chest contents, drop sources, and tracked rates for rare Sea 2 items."
  },
  {
    "href": "/entries/demonic-bloodline/index",
    "title": "Demonic Bloodline",
    "summary": "New sword-focused bloodline with +32% Damage, +12% Luck Multi, +2% Lifesteal, +12% Sword Damage Multi, and +40% Max HP."
  },
  {
    "href": "/entries/empyrean-bloodline/index",
    "title": "Empyrean Bloodline",
    "summary": "Legendary melee and luck hybrid bloodline with a stacking damage-per-tick passive."
  },
  {
    "href": "/entries/doombringer-bloodline/index",
    "title": "Doombringer Bloodline",
    "summary": "Legendary sword burst bloodline with a skill-use damage buff proc."
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
          <span className="text-gray-300">Bloodlines</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Bloodlines
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Sea 2 Bloodlines system page with the corrected confirmed stat table, Demonic, and the new Legendary Empyrean and Doombringer bloodlines.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
              src="/images/site/sailorpiecewikiv3.webp" 
              alt="Bloodlines Hero" 
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
              {overviewPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-red)] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Section: Mechanics */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">How bloodlines work right now</h2>
            <ul className="space-y-4">
              {mechanicsPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Section: Update Notes */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Current update bloodline notes</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Bloodline update</th>
                    <th className="py-4 px-4">Current status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {updateNotes.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-semibold text-blue-400">{row.bloodline}</td>
                      <td className="py-3 px-4 text-white">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Content Section: Tier List */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Current bloodline tier list</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Bloodline</th>
                    <th className="py-4 px-4">Tier</th>
                    <th className="py-4 px-4">Confirmed stats</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {tierList.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-semibold text-blue-400">{row.bloodline}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          row.tier.startsWith('S+') ? 'bg-red-500/20 text-red-400 border border-red-500/40' :
                          row.tier.startsWith('S') ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40' :
                          'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                        }`}>
                          {row.tier}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-white text-sm">{row.stats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Content Section: Route Notes */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">Current route notes</h2>
            <ul className="space-y-4">
              {routeNotes.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                  <span>{point}</span>
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

        {/* Verification Section */}
        <div className="panel-action clip-diagonal p-8 mb-12 relative overflow-hidden group border-t-2 border-[var(--accent-red)]/30">
          <div className="mb-4 relative z-10">
            <div className="text-[var(--accent-red)] font-mono text-xs mb-2 uppercase tracking-widest">Verification</div>
            <h2 className="text-2xl font-black text-white mb-6 uppercase">How this page is checked</h2>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent-red)]">/</span>
                <span>Pages are checked against live in-game routing, NPC locations, item costs, requirements, and upgrade steps whenever they can be confirmed directly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent-red)]">/</span>
                <span>When updates move faster than public guides, the wiki cross-checks the Sailor Piece Discord server, FAQ answers, and active community clarification posts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent-red)]">/</span>
                <span>When public guides disagree, the wiki compares multiple published sources instead of relying on one article alone before changing a route or requirement.</span>
              </li>
            </ul>
          </div>
        </div>
        
      </main>

      <Footer />
    </div>
  );
}
