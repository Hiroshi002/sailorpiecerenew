import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Sailor Piece Wiki",
  description: "Basic terms for using this fan-made Sailor Piece wiki.",
};

const termsSections = [
  {
    title: "Unofficial Status",
    items: [
      "This wiki is a fan resource and is not affiliated with the developers or Roblox.",
      "Game names, character names, and assets belong to their respective owners.",
      "By using the site, you understand that gameplay decisions are your responsibility."
    ]
  },
  {
    title: "Use of the Site",
    items: [
      "Use the wiki for personal reference and community help.",
      "Do not harm, overload, or interfere with access for other users.",
      "Do not impersonate the wiki as an official property."
    ]
  },
  {
    title: "Accuracy and Content",
    items: [
      "Information may lag behind live game updates.",
      "Balance changes, drop rates, and routes can change without notice.",
      "Fan-made mistakes can happen; check important decisions with care."
    ]
  }
];

export default function TermsOfService() {
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
                <span className="w-2 h-2 bg-[var(--accent-gold)] animate-pulse shadow-[0_0_8px_rgba(255,184,0,1)]"></span> Usage Guidelines
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1] text-white text-kinetic text-shadow-red mb-6 font-black uppercase">
                Terms of <span className="text-[var(--accent-gold)] text-shadow-gold">Service</span>
              </h1>
              <p className="text-gray-300 w-full max-w-2xl text-base sm:text-lg font-medium leading-relaxed mb-4 mx-auto border-b border-[var(--accent-red)]/30 pb-6">
                Please read our terms carefully before using the Sailor Piece Wiki.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="w-full max-w-[1000px] px-4 sm:px-6 mt-16 mb-24 z-10 mx-auto">
          <div className="space-y-12">
            {termsSections.map((section, i) => (
              <div key={i} className="panel-action clip-diagonal p-8 sm:p-10 hover:border-[var(--accent-gold)] transition-all duration-300">
                <h2 className="text-2xl text-white text-kinetic text-shadow-red uppercase tracking-wide font-black mb-6 border-b-2 border-white/10 pb-4 inline-block">{section.title}</h2>
                <ul className="space-y-4">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-4 text-gray-300 leading-relaxed font-medium">
                      <span className="text-[var(--accent-gold)] font-black animate-pulse shadow-[0_0_10px_rgba(255,184,0,0.6)]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 sm:p-10 panel-action clip-diagonal text-center opacity-80 hover:opacity-100 transition-opacity">
            <p className="text-gray-400 text-sm font-medium">
              Last Updated: April 29, 2026. These terms are subject to change.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
