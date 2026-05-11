import { getSiteConfig } from "@/config/site";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Sea 2 Guide | ${siteConfig.name}`,
    description: "Complete guide to unlocking and exploring Sea 2 in Sailor Piece.",
    openGraph: {
      title: `Sea 2 Guide | ${siteConfig.name}`,
      description: "Complete guide to unlocking and exploring Sea 2 in Sailor Piece.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Sea 2 Guide | ${siteConfig.name}`,
      description: "Complete guide to unlocking and exploring Sea 2 in Sailor Piece.",
      images: [siteConfig.ogImage],
    },
  };
}

const unlockSteps = [
  { title: "Lost Fragments Quest", desc: "Start the quest on World Island in Sea 1." },
  { title: "2 Ancient Fragments", desc: "Collect 2 fragments from 20 possible spawn locations." },
  { title: "7 Map Pieces", desc: "Farm map pieces from specific bosses (Saber, Gojo, etc.)." },
  { title: "Cartographer NPC", desc: "Return to World Island to finalize the unlock." },
];

const mapPieces = [
  { map: "Map 1", bosses: "Saber or Yuji" },
  { map: "Map 2", bosses: "Gojo or Sukuna" },
  { map: "Map 3", bosses: "Jinwoo or Qin Shi" },
  { map: "Map 4", bosses: "Anos or Alucard" },
  { map: "Map 5", bosses: "Aizen or Rimuru" },
  { map: "Map 6", bosses: "Ichigo or Blessed Maiden" },
  { map: "Map 7", bosses: "The World or Cosmic Being" },
];

export default function Sea2Guide() {
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
                <span className="w-2 h-2 bg-[var(--accent-gold)] animate-pulse shadow-[0_0_8px_rgba(255,184,0,1)]"></span> New Horizon
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1] text-white text-kinetic text-shadow-red mb-6 font-black uppercase">
                Sea 2 <span className="text-[var(--accent-gold)] text-shadow-gold">Unlock Guide</span>
              </h1>
              <p className="text-gray-300 w-full max-w-2xl text-base sm:text-lg font-medium leading-relaxed mb-4 mx-auto border-b border-[var(--accent-red)]/30 pb-6">
                Everything you need to know about Ancient Fragments, Map Pieces, and reaching the Second Sea.
              </p>
            </div>
          </div>
        </section>

        {/* Unlock Route */}
        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-16 z-10">
          <div className="mb-8 pb-4 border-b-2 border-[var(--accent-red)] text-left">
            <h2 className="text-3xl text-white text-kinetic text-shadow-red uppercase tracking-wide font-black">The Unlock Route</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {unlockSteps.map((step, i) => (
              <div key={i} className="panel-action clip-diagonal p-8 border-t-4 border-[var(--accent-red)] group hover:border-[var(--accent-gold)] transition-all duration-500 relative">
                <div className="text-[var(--accent-red)] font-black text-5xl mb-4 group-hover:scale-110 group-hover:text-[var(--accent-gold)] transition-transform origin-left opacity-30 group-hover:opacity-100 italic drop-shadow-[0_0_10px_rgba(255,30,56,0.3)]">0{i + 1}</div>
                <h3 className="text-white font-black mb-3 uppercase tracking-wide text-lg text-kinetic">{step.title}</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Map Pieces Table */}
        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-20 z-10">
          <div className="mb-8 pb-4 border-b-2 border-white/10 text-left relative">
            <h2 className="text-3xl text-white text-kinetic text-shadow-red uppercase tracking-wide font-black">Map Pieces & Bosses</h2>
            <div className="absolute -bottom-[2px] left-0 w-32 h-[2px] bg-[var(--accent-red)] shadow-[0_0_10px_rgba(255,30,56,0.8)]"></div>
          </div>
          
          <div className="w-full overflow-x-auto">
            <table className="w-full panel-action text-left border-collapse">
              <thead>
                <tr className="bg-[var(--accent-red)]/20 border-b-2 border-[var(--accent-red)]">
                  <th className="p-4 sm:p-6 text-white font-black uppercase text-sm tracking-widest w-1/3">Map Piece</th>
                  <th className="p-4 sm:p-6 text-[var(--accent-gold)] font-black uppercase text-sm tracking-widest">Required Bosses (Defeat any)</th>
                </tr>
              </thead>
              <tbody>
                {mapPieces.map((item, i) => (
                  <tr key={i} className="border-b border-[var(--border-action)] hover:bg-[var(--accent-red)]/10 transition-colors group">
                    <td className="p-4 sm:p-6 font-black text-white italic group-hover:text-[var(--accent-gold)] transition-colors">{item.map}</td>
                    <td className="p-4 sm:p-6 text-gray-300 font-medium group-hover:text-white transition-colors">{item.bosses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 panel-action clip-diagonal border-l-4 border-l-[var(--accent-gold)] flex items-start gap-4">
            <span className="text-3xl animate-bounce">💡</span>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium">
              <span className="text-[var(--accent-gold)] font-black uppercase tracking-wider text-kinetic">Pro Tip:</span> Map Pieces do not need to be completed in order. 
              You can farm whichever boss is easiest for you first!
            </p>
          </div>
        </section>

        {/* Video Guide */}
        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-20 mb-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center panel-action clip-diagonal p-8 sm:p-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[var(--accent-red)] text-[var(--accent-red)] font-black text-[10px] uppercase tracking-[0.2em] clip-button bg-black/80">
                Media View
              </div>
              <h2 className="text-3xl text-white text-kinetic text-shadow-red uppercase tracking-wide font-black mb-6">Visual Guide</h2>
              <p className="text-gray-400 font-medium leading-relaxed mb-8 text-sm sm:text-base border-l-2 border-[var(--accent-red)] pl-4 py-2">
                Check out the full Ancient Fragments route guide to find all 20 spawn locations quickly.
              </p>
              <a href="https://youtube.com/shorts/K6-cn_Bp2hY" target="_blank" rel="noopener noreferrer" className="inline-block bg-[var(--accent-red)] hover:bg-[var(--accent-gold)] text-white hover:text-black font-black uppercase tracking-widest px-8 py-4 clip-button transition-all border border-transparent shadow-[0_0_15px_rgba(255,30,56,0.6)] hover:shadow-[0_0_20px_rgba(255,184,0,0.8)]">
                Watch on YouTube
              </a>
            </div>
            
            <div className="aspect-[9/16] max-w-sm mx-auto w-full bg-black clip-diagonal border-2 border-[var(--border-action)] shadow-[0_0_30px_rgba(255,30,56,0.2)] p-2">
              <div className="w-full h-full clip-diagonal overflow-hidden relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/K6-cn_Bp2hY"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
