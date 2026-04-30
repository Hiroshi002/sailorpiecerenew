import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wiki Directory | Sailor Piece Premium Guide",
  description: "Browse every major category, hub page, and published entry from one refined directory.",
};

const directoryGroups = [
  {
    title: "Primary Access",
    description: "Crucial entry points for all players.",
    links: [
      { title: "Encyclopedia Home", href: "/", desc: "The main portal with search and trending gear." },
      { title: "Latest Gift Codes", href: "/entries/codes-overview/", desc: "Verified active codes and rewards." },
      { title: "Progression Path", href: "/entries/new-player-progression-path/", desc: "The most efficient route to end-game." },
      { title: "The Second Sea", href: "/sea-2/", desc: "Unlock requirements and boss mapping." },
    ]
  },
  {
    title: "Database Categories",
    description: "Deep-dive into specific game systems.",
    links: [
      { title: "Combat Styles", href: "/melees--styles/", desc: "Fighting styles, trainers, and costs." },
      { title: "Weaponry Archives", href: "/weapons--swords/", desc: "Swords, evolutions, and mastery." },
      { title: "Power Manifestations", href: "/entries/powers-overview/", desc: "Devil fruits and unique abilities." },
      { title: "Ancestry & Lineage", href: "/entries/races-overview/", desc: "Race buffs and clan trait data." },
    ]
  },
  {
    title: "Advanced Utility",
    description: "Tools for the dedicated player.",
    links: [
      { title: "Fragment Locator", href: "/ancient-fragments/", desc: "All 20 ancient fragment locations." },
      { title: "Combat Calculator", href: "/calculator/", desc: "Build simulation and damage metrics." },
      { title: "Official Destinations", href: "/official-links/", desc: "Roblox, Discord, and Trello." },
      { title: "Site Changelog", href: "/changelog/", desc: "Track our recent site improvements." },
    ]
  }
];

export default function Directory() {
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
                <span className="w-2 h-2 bg-[var(--accent-gold)] animate-pulse shadow-[0_0_8px_rgba(255,184,0,1)]"></span> Full Archives
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1] text-white text-kinetic text-shadow-red mb-6 font-black uppercase">
                Site <span className="text-[var(--accent-gold)] text-shadow-gold">Directory</span>
              </h1>
              <p className="text-gray-300 w-full max-w-2xl text-base sm:text-lg font-medium leading-relaxed mb-4 mx-auto border-b border-[var(--accent-red)]/30 pb-6">
                Navigate through our complete collection of guides, databases, and tools.
              </p>
            </div>
          </div>
        </section>

        {/* Directory Grid */}
        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-16 mb-24 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-10">
            {directoryGroups.map((group, i) => (
              <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="mb-6 pb-2 border-b-2 border-[var(--accent-red)] relative">
                  <h2 className="text-2xl text-white text-kinetic text-shadow-red uppercase tracking-wide font-black">{group.title}</h2>
                  <p className="text-[var(--accent-gold)] text-xs uppercase tracking-widest font-bold mt-1 italic opacity-80">{group.description}</p>
                  <div className="absolute -bottom-[2px] left-0 w-12 h-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                </div>
                
                <div className="grid gap-4">
                  {group.links.map((link, j) => (
                    <a key={j} href={link.href} className="group panel-action clip-diagonal p-6 sm:p-5 hover:border-[var(--accent-red)] hover:bg-[var(--accent-red)]/5 transition-all duration-300 block relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent-red)]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex justify-between items-center mb-2 relative z-10">
                        <h3 className="font-black text-white text-kinetic group-hover:text-[var(--accent-red)] transition-colors text-sm sm:text-base uppercase tracking-wide">{link.title}</h3>
                        <span className="text-[var(--accent-red)] font-black opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 shadow-[0_0_10px_rgba(255,30,56,0.5)]">↗</span>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">{link.desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
