import { getSiteConfig } from "@/config/site";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Scale, ShoppingBag } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Trade Values | ${siteConfig.name}`,
    description: "Official trading links, dev product prices, CCR anchors, and player market tools.",
    openGraph: {
      title: `Trade Values | ${siteConfig.name}`,
      description: "Official trading links, dev product prices, CCR anchors, and player market tools.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Trade Values | ${siteConfig.name}`,
      description: "Official trading links, dev product prices, CCR anchors, and player market tools.",
      images: [siteConfig.ogImage],
    },
  };
}

const tradeEntries = [
  {
    title: "Trade Values Overview",
    count: "Market Snapshots",
    summary: "Official Sailor Piece trading links, CCR guidance, and a credited snapshot of gamepass, material, chest, and boss-drop values.",
    href: "/entries/trade-values-overview",
    icon: <Scale className="w-6 h-6 text-blue-400 icon-glow-blue transition-all" />
  },
  {
    title: "Dev Products",
    count: "Robux Items",
    summary: "Current in-game Sailor Piece dev products, confirmed Robux prices, bundle notes, and CCR anchor products for traders.",
    href: "/entries/dev-products",
    icon: <ShoppingBag className="w-6 h-6 text-[var(--accent-gold)] icon-glow-gold transition-all" />
  }
];

export default function TradeValuesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-vignette opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]" />
      </div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 block">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 font-mono opacity-80">
          <Link href="/" className="hover:text-[var(--accent-red)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Trade Values</span>
        </div>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="panel-action clip-diagonal p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-black to-[var(--bg-panel)] border-b-4 border-b-blue-500/50">
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                Wiki Category
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tight" style={{ textShadow: "3px 3px 0px rgba(59, 130, 246, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
                Trade Values
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed border-l-4 border-blue-500 pl-6 bg-black/30 py-4">
                Official trading links, dev product prices, CCR anchors, and player market tools.
              </p>
              
              <div className="flex gap-6 mt-10">
                <div className="flex flex-col border-r border-white/10 pr-8">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Entries</span>
                  <span className="text-2xl text-white font-black italic">2</span>
                </div>
                <div className="flex flex-col border-r border-white/10 pr-8">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Start Here</span>
                  <span className="text-2xl text-white font-black italic underline decoration-blue-500">Trade Values</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Status</span>
                  <span className="text-2xl text-blue-400 font-black italic uppercase">Growing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Entry Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradeEntries.map((entry, i) => (
              <Link key={i} href={entry.href} className="group panel-action clip-diagonal !p-0 flex flex-col relative overflow-hidden bg-gradient-to-b from-black/80 to-[var(--bg-panel)] hover:border-blue-500 transition-all">
                <div className="p-8 sm:p-10 relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-blue-400 font-black tracking-[0.2em] uppercase">Trade Values</span>
                      <span className="text-[10px] text-gray-500 font-bold uppercase mt-1 italic">{entry.count}</span>
                    </div>
                    <div className="icon-premium-wrapper group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                      {entry.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-white text-kinetic mb-4 group-hover:text-blue-400 transition-all">{entry.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{entry.summary}</p>
                  <div className="mt-auto">
                    <span className="inline-block px-6 py-2 bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest clip-button group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all">
                      Open page
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Verification Section */}
        <section className="mb-12">
          <div className="panel-action clip-diagonal p-8 sm:p-10 relative overflow-hidden group border-t-4 border-t-blue-500">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="text-[10px] text-blue-400 font-black tracking-[0.2em] uppercase mb-4">Verification</div>
                <h2 className="text-3xl md:text-4xl font-black text-white text-kinetic mb-6 uppercase leading-tight">Cross-checked against <br /><span className="text-blue-400">live market info</span></h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-blue-500 pl-6 italic">
                  How the Trade Values section is checked: We maintain accuracy by cross-referencing with official Discord channels and in-game tests.
                </p>
              </div>
              <div className="flex-1 w-full">
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Pages are checked against live in-game routing and prices.",
                    "The wiki cross-checks the Sailor Piece Discord server and market updates.",
                    "Multiple published sources are compared when market values shift.",
                    "Discord updates and in-game checks help confirm current Robux costs.",
                    "Report outdated values via Discord for quick rechecking."
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4 text-xs font-semibold text-gray-300 bg-white/5 p-4 border border-white/5 clip-button hover:bg-white/10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                      <span>{text}</span>
                    </li>
                  ))}
                  <li className="mt-2 text-right">
                    <Link href="/contact" className="text-blue-400 font-black uppercase text-[10px] tracking-widest inline-flex items-center gap-2 hover:translate-x-2 transition-transform">
                      Open contact page <span className="text-lg">→</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
