import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | Sailor Piece Wiki",
  description: "What this fan-made Sailor Piece wiki is for and how the site is put together.",
  icons: {
    icon: [
      { url: "/siteicon.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

const facts = [
  "Sailor Piece Wiki is a fan-made community wiki built to help players find clear progression info without digging through scattered posts and guides.",
  "The site focuses on practical game info such as obtainment routes, requirements, upgrades, movesets, and progression systems.",
  "We keep the site structured like a normal wiki so players can move between categories, pages, and search results quickly.",
];

const sections = [
  {
    id: "what-this-site-covers",
    title: "What this site covers",
    items: [
      "Fruits, swords, melees, powers, races, clans, traits, titles, materials, systems, and codes.",
      "Requirement breakdowns for unlocks, evolutions, F moves, blessings, passives, and other late-game routes.",
      "Searchable wiki pages that help players jump straight to a weapon, melee, material, or system page.",
    ],
  },
  {
    id: "community-focus",
    title: "Community focus",
    items: [
      "This site is unofficial and is not affiliated with Sailor Piece, Roblox, or the game developers.",
      "The goal is to present helpful information in a cleaner wiki format for players.",
      "Game updates can change values, locations, and requirements, so pages may be revised over time.",
    ],
  },
  {
    id: "how-pages-are-verified",
    title: "How pages are verified",
    items: [
      "Pages are checked against live in-game routing, NPC locations, item costs, requirements, and upgrade steps whenever they can be confirmed directly.",
      "When updates move faster than public guides, the wiki cross-checks the Sailor Piece Discord server, FAQ answers, and active community clarification posts.",
      "When public guides disagree, the wiki compares multiple sources before changing a route or requirement.",
    ],
  },
];

const faqItems = [
  {
    question: "How does Sailor Piece Wiki verify information?",
    answer: "Pages are cross-checked against direct in-game routes, the Sailor Piece Discord server and FAQ flow, and multiple published guides before major updates are pushed live.",
  },
  {
    question: "What happens when guides disagree with each other?",
    answer: "The wiki compares multiple sources, checks the live game when possible, and updates the page again if Discord clarification or in-game evidence shows the route changed.",
  },
  {
    question: "How can I report outdated information?",
    answer: "Use the support Discord on the contact page so the route, cost, location, or requirement can be rechecked quickly.",
  },
];

export default function About() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20" style={{ WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent)" }}></div>
      <main className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans">
        <Header />

        {/* Hero Section */}
        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-8 sm:mt-16 z-10 relative">
          <div className="panel-action clip-diagonal p-8 sm:p-12 lg:p-20 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[var(--bg-dark)] via-[var(--bg-dark)]/80 to-transparent pointer-events-none"></div>
            <div className="absolute w-[100%] h-[140%] bg-[var(--accent-red)] opacity-5 blur-[120px] pointer-events-none rounded-full"></div>

            <div className="relative z-10 w-full">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[var(--accent-gold)] text-[var(--accent-gold)] font-black text-xs uppercase tracking-[0.2em] clip-button shadow-[0_0_15px_rgba(255,184,0,0.2)] bg-black/80 mb-6">
                <span className="w-2 h-2 bg-[var(--accent-gold)] animate-pulse shadow-[0_0_8px_rgba(255,184,0,1)]"></span> About the Wiki
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1] text-white text-kinetic text-shadow-red mb-6 font-black uppercase">
                Our <span className="text-[var(--accent-gold)] text-shadow-gold">Mission</span>
              </h1>
              <p className="text-gray-300 w-full max-w-2xl text-base sm:text-lg font-medium leading-relaxed mb-4 mx-auto border-b border-[var(--accent-red)]/30 pb-6">
                Learn more about how we build the most comprehensive guide for Sailor Piece players.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-16 z-10">
          <div className="mb-8 pb-4 border-b-2 border-[var(--accent-red)] text-left">
            <h2 className="text-3xl sm:text-4xl text-white text-kinetic text-shadow-red uppercase tracking-wide font-black">Overview</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {facts.map((fact, i) => (
                <div key={i} className="flex gap-4 p-5 panel-action clip-diagonal border-l-4 border-[var(--accent-red)] group">
                  <div className="w-10 h-10 clip-button bg-[var(--accent-red)]/20 flex items-center justify-center shrink-0 border border-[var(--accent-red)] group-hover:bg-[var(--accent-red)] transition-colors">
                    <span className="text-white text-sm font-black">{i + 1}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium group-hover:text-white transition-colors">{fact}</p>
                </div>
              ))}
            </div>
            
            <div className="relative p-2 panel-action clip-diagonal group">
              <div className="absolute inset-0 bg-[var(--accent-red)]/10 blur-xl group-hover:blur-2xl transition-all" />
              <Image
                src="/images/site/sailorpiece-wiki-cover-v2.webp"
                alt="Sailor Piece Wiki Cover"
                width={800}
                height={450}
                className="relative clip-diagonal border-2 border-[var(--border-action)] group-hover:border-[var(--accent-gold)] transition-colors opacity-90 group-hover:opacity-100"
              />
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-16 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.id} className="panel-action clip-diagonal p-8 border-t-2 border-[var(--accent-gold)]">
                <h3 className="text-xl sm:text-2xl text-white font-black italic mb-6 tracking-wide group-hover:text-[var(--accent-gold)] uppercase">{section.title}</h3>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-300 items-start">
                      <span className="text-[var(--accent-red)] text-lg leading-none mt-0.5 animate-pulse">❖</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full max-w-[1000px] px-4 sm:px-6 mt-20 mb-20 z-10 mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] text-[var(--accent-gold)] font-black tracking-[0.2em] uppercase block mb-1">Knowledge Hub</span>
            <h2 className="text-3xl sm:text-4xl text-white text-kinetic text-shadow-red uppercase tracking-wide font-black border-b-2 border-[var(--accent-red)] inline-block pb-2">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <details key={i} className="group panel-action clip-button overflow-hidden hover:border-[var(--accent-gold)]">
                <summary className="p-6 cursor-pointer flex justify-between items-center list-none bg-black/40">
                  <span className="font-black text-white uppercase tracking-wide text-sm group-hover:text-[var(--accent-gold)] transition-colors">{faq.question}</span>
                  <span className="text-[var(--accent-red)] group-open:rotate-180 transition-transform duration-500 font-bold">▼</span>
                </summary>
                <div className="p-6 pt-0 text-gray-300 text-sm leading-relaxed border-t border-[var(--border-action)] bg-black/80">
                  <div className="pt-6 font-medium">
                    {faq.answer}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
