import { getSiteConfig } from "@/config/site";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Sailor Piece Archangel Halo Locations | ${siteConfig.name}`,
    description: "Sailor Piece Archangel Halo Locations guide for Divine Trials, including exact Sea 2 Secret Halo spots and the 3 Boss Halo source pairs.",
    openGraph: {
      title: `Sailor Piece Archangel Halo Locations | ${siteConfig.name}`,
      description: "Sailor Piece Archangel Halo Locations guide for Divine Trials, including exact Sea 2 Secret Halo spots and the 3 Boss Halo source pairs.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Sailor Piece Archangel Halo Locations | ${siteConfig.name}`,
      description: "Sailor Piece Archangel Halo Locations guide for Divine Trials, including exact Sea 2 Secret Halo spots and the 3 Boss Halo source pairs.",
      images: [siteConfig.ogImage],
    },
  };
}

const metaItems = [
  { label: "Quest NPC", value: "Celestial Guide" },
  { label: "Start island", value: "Blue Planet" },
  { label: "Required race", value: "Angel" },
  { label: "Found Halos", value: "4 Sea 2 island checks" },
  { label: "Boss Halos", value: "3 boss-drop checks" },
  { label: "Timing note", value: "Reported 4m spawn / 10m despawn" },
];

const facts = [
  "Archangel is evolved from Angel through the Celestial Guide on Blue Planet.",
  "The halo portion of the Divine Trials works like a 7-step puzzle: Halos 1-4 are found around Sea 2 islands, while Halos 5-7 come from specific boss pairs.",
  "The 4 found Secret Halo island checks are Sea 2 Starter Island, Bizarre Island, Punch Island, and Blue Planet.",
  "The 3 boss Halos are Patience (Atomic/Strongest Shinobi), Charity (Cosmic Being/Sun God), and Diligence (Spirit Warrior/The World).",
  "Higher Luck increases the chance for Boss Halo drops.",
  "Reported timings are 4 minutes to spawn and 10 minutes to despawn (not fully confirmed).",
];

const steps = [
  { step: "1", halo: "Secret Halo", location: "Sea 2 Starter Island", notes: "Near spawn, right of the portal, on top of a small hill." },
  { step: "2", halo: "Secret Halo", location: "Bizarre Island", notes: "On the hill right of the colosseum." },
  { step: "3", halo: "Secret Halo", location: "Punch Island", notes: "On top of the first building on the left." },
  { step: "4", halo: "Secret Halo", location: "Blue Planet", notes: "On the right side after spawning, near the shore next to a bush." },
  { step: "5", halo: "Patience Halo", location: "Atomic or Strongest Shinobi", notes: "Boss Halo drop. Higher Luck increases the drop chance." },
  { step: "6", halo: "Charity Halo", location: "Cosmic Being or Sun God", notes: "Boss Halo drop. Sun God may also be called Sun Incarnate." },
  { step: "7", halo: "Diligence Halo", location: "Spirit Warrior or The World", notes: "Boss Halo drop. Higher Luck increases the drop chance." },
];

const relatedPages = [
  { href: "/entries/races-overview", title: "Races", summary: "Angel, Archangel, Wraith, Reaper, Divine Trials, and Soul Trials." },
  { href: "/sea-2#blue-planet", title: "Blue Planet", summary: "The starting point for the Archangel evolution quest." },
  { href: "/entries/atomic", title: "Atomic", summary: "Atomic is one of the Patience Halo boss sources." },
  { href: "/entries/strongest-shinobi-style", title: "Strongest Shinobi", summary: "Strongest Shinobi is one of the Patience Halo boss sources." },
];

export default function ArchangelHaloLocations() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,30,56,0.05),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-vignette opacity-60"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-glow opacity-20"></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-8 sm:mt-16 z-10 relative">
        <div className="panel-action clip-diagonal p-8 sm:p-12 lg:p-20 relative overflow-hidden flex flex-col items-center md:items-start text-center md:text-left">
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[var(--bg-dark)] via-[var(--bg-dark)]/80 to-transparent pointer-events-none"></div>
          <div className="absolute w-[120%] h-[120%] bg-[var(--accent-red)] opacity-5 blur-[120px] pointer-events-none rounded-full -top-1/2 -left-1/4"></div>

          <div className="relative z-10 w-full">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[var(--accent-gold)] text-[var(--accent-gold)] font-black text-xs uppercase tracking-[0.2em] clip-button shadow-[0_0_15px_rgba(255,184,0,0.2)] bg-black/80">
                <span className="w-2 h-2 bg-[var(--accent-gold)] animate-pulse shadow-[0_0_8px_rgba(255,184,0,1)]"></span> Wiki Entry
              </div>
              <div className="px-3 py-1 bg-[var(--accent-red)]/20 border border-[var(--accent-red)]/40 text-[var(--accent-red)] text-[10px] font-black uppercase tracking-widest clip-button">Systems</div>
              <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 text-blue-400 text-[10px] font-black uppercase tracking-widest clip-button">Sea 2</div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-8xl leading-[0.9] text-white text-kinetic text-shadow-red mb-6 font-black uppercase italic tracking-tighter">
              Archangel <span className="text-[var(--accent-gold)] text-shadow-gold block md:inline">Halo Locations</span>
            </h1>
            <p className="text-gray-300 w-full max-w-2xl text-base sm:text-xl font-medium leading-relaxed mb-10 border-l-4 border-[var(--accent-red)] pl-6 italic bg-black/20 py-4">
              Puzzle-style Archangel Divine Trials guide for the 4 found Secret Halos and the 3 boss Halos needed after Angel.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
              {metaItems.map((item, i) => (
                <div key={i} className="bg-black/40 border border-white/5 p-4 clip-diagonal group hover:border-[var(--accent-red)]/50 transition-all">
                  <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1 group-hover:text-[var(--accent-red)] transition-colors">{item.label}</div>
                  <div className="text-white font-bold text-sm tracking-wide">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-16 z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Overview */}
          <div className="panel-action p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)]/5 blur-3xl rounded-full"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 px-0 bg-[var(--accent-red)]"></div>
                <h2 className="text-3xl font-black text-white uppercase tracking-wider italic">Overview</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facts.map((fact, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="text-[var(--accent-red)] font-black text-xl italic group-hover:scale-125 transition-transform">0{i+1}</div>
                    <p className="text-gray-300 text-sm leading-relaxed font-medium border-b border-white/5 pb-4 w-full">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Halo Steps Table */}
          <div className="panel-action p-8 sm:p-12 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 px-0 bg-[var(--accent-gold)]"></div>
              <h2 className="text-3xl font-black text-white uppercase tracking-wider italic">7-Step Halo Puzzle</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--accent-red)]/30">
                    <th className="py-4 px-4 text-[var(--accent-gold)] font-black uppercase text-xs tracking-[0.2em]">Step</th>
                    <th className="py-4 px-4 text-[var(--accent-gold)] font-black uppercase text-xs tracking-[0.2em]">Halo</th>
                    <th className="py-4 px-4 text-[var(--accent-gold)] font-black uppercase text-xs tracking-[0.2em]">Where to Get</th>
                    <th className="py-4 px-4 text-[var(--accent-gold)] font-black uppercase text-xs tracking-[0.2em]">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {steps.map((step, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                      <td className="py-6 px-4 text-white font-black italic">{step.step}</td>
                      <td className="py-6 px-4 text-[var(--accent-red)] font-bold">{step.halo}</td>
                      <td className="py-6 px-4 text-white font-medium">{step.location}</td>
                      <td className="py-6 px-4 text-gray-400 text-sm italic leading-snug">{step.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Verification Section */}
          <div className="bg-black/40 border-2 border-white/5 p-8 sm:p-12 clip-diagonal relative">
             <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent-red)] to-transparent opacity-30"></div>
             <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-[var(--accent-red)]/10 border border-[var(--accent-red)]/30 flex items-center justify-center clip-button">
                   <span className="text-[var(--accent-red)] font-black text-xl">!</span>
                </div>
                <h2 className="text-2xl font-black text-white uppercase italic tracking-widest">Verification Status</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <p className="text-gray-400 text-sm leading-relaxed font-medium italic">
                      "Pages are checked against live in-game routing, NPC locations, item costs, requirements, and upgrade steps whenever they can be confirmed directly."
                   </p>
                   <ul className="space-y-3">
                      {["Cross-checked with Discord", "Verified in-game Sea 2", "Community FAQ confirmed"].map((check, i) => (
                         <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-500">
                            <span className="w-1.5 h-1.5 bg-[var(--accent-gold)] rounded-full"></span> {check}
                         </li>
                      ))}
                   </ul>
                </div>
                <div className="bg-black/60 p-6 border border-white/5 clip-button">
                   <div className="text-[10px] text-[var(--accent-gold)] font-black uppercase tracking-widest mb-2">Live Tracking</div>
                   <p className="text-white text-xs font-medium leading-relaxed">
                      Current spawn timings (4m/10m) are based on recent player captures and may be subject to change in minor patches.
                   </p>
                </div>
             </div>
          </div>
        </div>

        {/* Right Column: Sidebars */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Related Pages Sidebar */}
          <div className="panel-action p-8 relative overflow-hidden">
            <h3 className="text-xl font-black text-white uppercase italic tracking-widest mb-8 border-b border-[var(--accent-red)] pb-4">Related Content</h3>
            <div className="flex flex-col gap-6">
              {relatedPages.map((page, i) => (
                <Link key={i} href={page.href} className="group block">
                  <div className="text-[var(--accent-gold)] font-black text-xs uppercase tracking-widest mb-1 group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                    <span className="w-4 h-[2px] bg-[var(--accent-red)]"></span> {page.title}
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-200 transition-colors pl-6">
                    {page.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links / Official */}
          <div className="bg-gradient-to-br from-black to-slate-900 border border-white/10 p-8 clip-diagonal">
            <h3 className="text-lg font-black text-white uppercase italic tracking-widest mb-6">Wiki Navigation</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: "Wiki Directory", href: "/directory" },
                { label: "All Islands Map", href: "/islands" },
                { label: "Sea 2 Guide", href: "/sea-2" },
                { label: "Official Discord", href: "/entries/official-links" }
              ].map((link, i) => (
                <Link key={i} href={link.href} className="w-full py-3 px-4 bg-white/5 hover:bg-[var(--accent-red)] border border-white/5 hover:border-[var(--accent-red)] text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all clip-button text-center">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
