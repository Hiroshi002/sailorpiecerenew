import { getSiteConfig } from "@/config/site";
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MapPin, Info, Image as ImageIcon } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Ancient Fragments | ${siteConfig.name}`,
    description: "Dedicated Ancient Fragments route page with all 20 Sea 2 unlock spawn screenshots, the matching 1 to 20 order, and the visual route handoff from the Lost Fragments quest.",
    openGraph: {
      title: `Ancient Fragments | ${siteConfig.name}`,
      description: "Dedicated Ancient Fragments route page with all 20 Sea 2 unlock spawn screenshots, the matching 1 to 20 order, and the visual route handoff from the Lost Fragments quest.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Ancient Fragments | ${siteConfig.name}`,
      description: "Dedicated Ancient Fragments route page with all 20 Sea 2 unlock spawn screenshots, the matching 1 to 20 order, and the visual route handoff from the Lost Fragments quest.",
      images: [siteConfig.ogImage],
    },
  };
}

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-vignette opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,30,56,0.1),transparent_70%)]" />
      </div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 font-mono opacity-80">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Ancient Fragments</span>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
            Wiki Entry
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
            Ancient Fragments
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
            Dedicated Ancient Fragments route page with all 20 Sea 2 unlock spawn screenshots, the matching 1 to 20 order, and the visual route handoff from the Lost Fragments quest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="panel-action clip-diagonal p-6 bg-gradient-to-br from-black to-[var(--bg-panel)] flex items-center gap-6">
               <div className="icon-premium-wrapper">
                  <MapPin className="w-8 h-8 text-orange-500 icon-glow-gold" />
               </div>
               <div>
                  <span className="text-[10px] text-orange-400 font-black tracking-widest uppercase">Spawn Count</span>
                  <div className="text-3xl text-white font-black italic">20 Fragments</div>
               </div>
            </div>
            <div className="panel-action clip-diagonal p-6 bg-gradient-to-br from-black to-[var(--bg-panel)] flex items-center gap-6">
               <div className="icon-premium-wrapper">
                  <ImageIcon className="w-8 h-8 text-blue-400 icon-glow-blue" />
               </div>
               <div>
                  <span className="text-[10px] text-blue-400 font-black tracking-widest uppercase">Documentation</span>
                  <div className="text-3xl text-white font-black italic">100% Screenshot Coverage</div>
               </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="panel-action clip-diagonal p-8 mb-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)] opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          
          <div className="mb-8 relative z-10">
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
              <div className="icon-premium-wrapper">
                <Info className="w-6 h-6 text-gray-400" />
              </div>
              <h2 className="text-3xl font-black text-white text-kinetic uppercase">Overview</h2>
            </div>
            <ul className="space-y-4">
              <li className="text-gray-300 italic">No specific overview details available.</li>
            </ul>
          </div>
        </div>
        
      </main>

      <Footer />
    </div>
  );
}
