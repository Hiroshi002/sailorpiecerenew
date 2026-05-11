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
    title: `Races | ${siteConfig.name}`,
    description: "Race rerolls, passive bonuses, and build-defining races used by late-game weapons and specs.",
    openGraph: {
      title: `Races | ${siteConfig.name}`,
      description: "Race rerolls, passive bonuses, and build-defining races used by late-game weapons and specs.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Races | ${siteConfig.name}`,
      description: "Race rerolls, passive bonuses, and build-defining races used by late-game weapons and specs.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  { label: "Reroll item", value: "Race Reroll" },
  { label: "Main reroll route", value: "Inventory > Items" },
  { label: "Key sword race", value: "Swordblessed for Yamato" },
  { label: "Key Aizen race", value: "Shinigami" },
  { label: "Current update", value: "Angel and Wraith Mythical races, Archangel and Reaper Secret evolutions, +2 race storage" },
  { label: "New Mythical races", value: "Angel and Wraith" },
  { label: "New Secret races", value: "Archangel and Reaper" },
  { label: "Top raw damage race", value: "Reaper" },
  { label: "Top farming secret race", value: "Archangel" }
];

const overviewFacts = [
  "Races are rerolled from your inventory using Race Rerolls.",
  "Higher-tier races can add large damage, HP, luck, lifesteal, drop, or specific weapon bonuses to your build.",
  "The current update adds Angel and Wraith as Mythical races, with Angel evolving into Archangel and Wraith evolving into Reaper.",
  "Archangel is a Secret race evolved from Angel through the Celestial Guide on Blue Planet: 5 secret drops, 4 Hidden Halos, and 3 boss Halos across a 3-part Divine Trials questline.",
  "The first Archangel Divine Trial accepts eligible secret drops from trades and from Boss Rush, Infinite Tower, or Crystal Defense shops, not only raw drops.",
  "The 4 found Archangel Secret Halo island checks are Sea 2 Starter Island, Bizarre Island, Punch Island, and Blue Planet.",
  "The 3 boss Halos for Archangel are now captured: Patience (Atomic/Strongest Shinobi), Charity (Cosmic Being/Sun God), and Diligence (Spirit Warrior/The World).",
  "Reaper is a Secret race evolved from Wraith through Soul Trials: 1,500 NPCs, 3 Rare Souls, 10 Krakens, and 10 deathless Raids.",
  "Race Rerolls are found in crates, boss drops, event shops, or bought with gems; current update adds +2 race storage for active builds."
];

const rerollSteps = [
  "Open your inventory.",
  "Go to the Items tab and use a Race Reroll.",
  "Confirm the reroll to replace your current race.",
  "Save a stock of rerolls before chasing a late-game race because high-tier rolls are much rarer."
];

const raceUpdateNotes = [
  { race: "Angel", status: "Mythical base race with +15% Sword Damage, +37% Luck, +90% Max HP, +15% Melee Damage, and +85% Damage. Evolves into Archangel through Divine Trials." },
  { race: "Wraith", status: "Mythical base race with +25% Sword Damage, +90% Max HP, +2% Lifesteal, +10% Damage Reduction, and +85% Damage. Evolves into Reaper through Soul Trials." },
  { race: "Archangel", status: "Secret Angel evolution with +22% Sword Damage, +55% Luck, +115% Max HP, +22% Melee Damage, +15% Double Drops Chance, +2 Extra Jumps, and +100% Damage." },
  { race: "Reaper", status: "Secret Wraith evolution with +35% Sword Damage, +120% Max HP, +25% Execute Damage, +3% Lifesteal, +15% Damage Reduction, and +100% Damage." }
];

const archangelTrials = [
  { step: "Start condition", requirement: "Have Angel race equipped", notes: "Celestial Guide is located on Blue Planet and starts the 3-part Divine Trials route into Archangel." },
  { step: "First Divine Trial", requirement: "Get 5 secret drops while using Angel", notes: "Aura Crates, Cosmetic Crates, Secret Chests, and similar secret drops count. Traded secret drops and eligible secret drops bought from Boss Rush, Infinite Tower, or Crystal Defense shops also work." },
  { step: "Second Divine Trial", requirement: "Find 4 Hidden Halos", notes: "Humility, Kindness, Temperance, and Self-Respect are the named hidden Halo set. Found on Sea 2 Starter, Bizarre, Punch, and Blue Planet islands." },
  { step: "Third Divine Trial", requirement: "Collect 3 Boss Halos", notes: "Patience from Atomic/Strongest Shinobi, Charity from Cosmic Being/Sun God, and Diligence from Spirit Warrior/The World." }
];

const reaperTrials = [
  { step: "Start condition", requirement: "Have Wraith race equipped", notes: "Soul Harvester on Slayer Island visibly requires Wraith equipped to start the 4-part Soul Trials route." },
  { step: "First Soul Trial", requirement: "Defeat 1,500 NPCs with Wraith equipped", notes: "This is the long normal-enemy grind portion of the Wraith evolution route." },
  { step: "Second Soul Trial", requirement: "Collect 3 Rare Souls from specific bosses", notes: "Warrior Soul (Spirit Warrior), Ancient Soul (Cosmic Being/Sun God), and Time Soul (The World)." },
  { step: "Third Soul Trial", requirement: "Defeat 10 Krakens with Wraith equipped", notes: "Krakens spawn in Sea 2. This checks your build's sustainability and sea-event farming speed." },
  { step: "Fourth Soul Trial", requirement: "Complete 10 deathless Raids", notes: "Must be done with Wraith equipped. Deathless requirement makes this the final gate for Reaper." }
];

const raceList = [
  { race: "Human", rarity: "Common", bonuses: "Default race with no bonus" },
  { race: "Skypea", rarity: "Uncommon", bonuses: "+2 Jumps" },
  { race: "Fishman", rarity: "Uncommon", bonuses: "+15% XP gain and +15% Cash gain" },
  { race: "Mink", rarity: "Rare", bonuses: "+15% Movement speed and +10% Stamina" },
  { race: "Swordblessed", rarity: "Legendary", bonuses: "+10% Sword damage, required for Yamato" },
  { race: "Shinigami", rarity: "Legendary", bonuses: "+15% Damage, required for Manipulator Sword" },
  { race: "Angel", rarity: "Mythical", bonuses: "See Current update race notes" },
  { race: "Wraith", rarity: "Mythical", bonuses: "See Current update race notes" },
  { race: "Archangel", rarity: "Secret", bonuses: "See Current update race notes" },
  { race: "Reaper", rarity: "Secret", bonuses: "See Current update race notes" }
];

const moveset: any[] = [];

const relatedPages = [
  { href: "/entries/archangel-halo-locations/index", title: "Archangel Halo Locations", summary: "Puzzle-style guide for the 4 found Secret Halos and 3 Boss Halos used in Archangel Divine Trials." },
  { href: "/entries/titles-overview/index", title: "Titles", summary: "Damage, farming, event, and exclusive titles used to push your Sailor Piece build further." },
  { href: "/entries/yamato/index", title: "Yamato", summary: "Judgement Island sword that asks for gems, a title, a race, and a full set of Yamato boss drops." },
  { href: "/entries/manipulator-sword/index", title: "Manipulator Sword (Aizen)", summary: "Late-game Hollow Island (Hueco Mundo) sword that starts with a full trainer questline." },
  { href: "/entries/raids-overview/index", title: "Raids", summary: "Reaper Soul Trials include 10 deathless Raid clears while Wraith is equipped." }
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
          <span className="text-gray-300">Races</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-normal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              Races
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              Race rerolls, passive bonuses, secret race evolutions, and build-defining races used by late-game weapons and specs.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {metaItems.map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:border-[var(--accent-red)]/30 transition-colors group">
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 group-hover:text-[var(--accent-red)] transition-colors font-bold">{item.label}</div>
                  <div className="text-sm font-semibold text-white leading-tight">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(255,30,56,0.2)] bg-black relative aspect-square">
            <Image 
              src="/images/site/sailorpiecewikiv3.webp" 
              alt="Sailor Piece Wiki Races Cover" 
              fill
              className="object-contain p-4 opacity-90 transition-opacity duration-500 hover:opacity-100"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* Overview Section */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)] opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          
          <div className="mb-4 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-[var(--accent-red)]" />
              <h2 className="text-3xl font-black text-white text-kinetic uppercase tracking-tight">Overview</h2>
            </div>
            <ul className="space-y-4">
              {overviewFacts.map((fact, i) => (
                <li key={i} className="flex gap-4 items-start group/fact">
                  <div className="mt-2 w-2 h-2 rounded-full bg-[var(--accent-red)] group-hover/fact:scale-125 transition-transform shrink-0" />
                  <span className="text-gray-300 leading-relaxed group-hover/fact:text-white transition-colors">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How to Reroll Section */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">How to reroll races</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rerollSteps.map((step, i) => (
                <div key={i} className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[var(--accent-red)]/50 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-red)] flex items-center justify-center shrink-0 font-black text-white shadow-[0_0_15px_rgba(255,30,56,0.3)]">
                    {i + 1}
                  </div>
                  <span className="text-gray-200 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Update Notes Table */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Current update race notes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Race Update</th>
                    <th className="py-4 px-4">Current Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {raceUpdateNotes.map((note, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-black text-[var(--accent-red)] uppercase tracking-wider">{note.race}</td>
                      <td className="py-4 px-4 text-gray-300 leading-relaxed">{note.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Archangel Trials Table */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Archangel Divine Trials</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Step</th>
                    <th className="py-4 px-4">Requirement</th>
                    <th className="py-4 px-4">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {archangelTrials.map((trial, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-bold text-white">{trial.step}</td>
                      <td className="py-4 px-4 text-blue-400 font-medium">{trial.requirement}</td>
                      <td className="py-4 px-4 text-gray-400 text-sm leading-relaxed">{trial.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Reaper Trials Table */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Reaper Soul Trials</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Step</th>
                    <th className="py-4 px-4">Requirement</th>
                    <th className="py-4 px-4">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {reaperTrials.map((trial, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-bold text-white">{trial.step}</td>
                      <td className="py-4 px-4 text-purple-400 font-medium">{trial.requirement}</td>
                      <td className="py-4 px-4 text-gray-400 text-sm leading-relaxed">{trial.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Full Race List Table */}
        <div className="panel-action clip-diagonal p-8 mb-10 relative overflow-hidden group">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Race list</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                    <th className="py-4 px-4">Race</th>
                    <th className="py-4 px-4">Rarity</th>
                    <th className="py-4 px-4">Signature Bonuses</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {raceList.map((item, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group/row">
                      <td className="py-4 px-4 font-black text-white group-hover/row:text-[var(--accent-red)] transition-colors italic">{item.race}</td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border ${
                          item.rarity === "Common" ? "border-gray-500 text-gray-500" :
                          item.rarity === "Uncommon" ? "border-green-500 text-green-500" :
                          item.rarity === "Rare" ? "border-blue-500 text-blue-500" :
                          item.rarity === "Legendary" ? "border-orange-500 text-orange-500" :
                          item.rarity === "Mythical" ? "border-pink-500 text-pink-500" :
                          "border-[var(--accent-gold)] text-[var(--accent-gold)]"
                        }`}>
                          {item.rarity}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-400 text-sm">{item.bonuses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Verification Section */}
        <div className="panel-action clip-diagonal p-8 mb-10 bg-white/[0.02] border-white/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-6 bg-[var(--accent-gold)]" />
            <h2 className="text-xl font-black text-white uppercase tracking-widest">Verification</h2>
          </div>
          <p className="text-sm text-gray-400 mb-4 font-medium italic">Cross-checked against live game info and active community update channels</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Pages are checked against live in-game routing and NPC locations.",
              "Cross-checks Sailor Piece Discord server and FAQ answers.",
              "Compares multiple published sources for requirement changes.",
              "Direct in-game checks help confirm what is still current."
            ].map((v, i) => (
              <li key={i} className="text-xs text-gray-500 flex gap-2 items-center">
                <div className="w-1 h-1 rounded-full bg-gray-700" />
                {v}
              </li>
            ))}
          </ul>
        </div>

        {/* Related Pages */}
        {relatedPages.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-black text-white text-kinetic mb-8 uppercase border-b border-white/10 pb-4">Related Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPages.map((page, i) => (
                <Link
                  key={i}
                  href={page.href}
                  className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--accent-red)] transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.08] block relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent-red)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <strong className="block text-base font-bold text-white group-hover:text-[var(--accent-red)] transition-colors mb-2">{page.title}</strong>
                  <span className="text-xs text-gray-400 leading-relaxed block">{page.summary}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
        
      </main>

      <Footer />
    </div>
  );
}
