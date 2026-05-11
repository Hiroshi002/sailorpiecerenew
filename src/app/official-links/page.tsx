import { getSiteConfig } from "@/config/site";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Radio, 
  BadgeDollarSign, 
  Gamepad2, 
  MessageSquare, 
  Layout, 
  Users, 
  CircleDollarSign, 
  List, 
  Calculator, 
  Megaphone,
  ExternalLink
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Official Links | ${siteConfig.name}`,
    description: "Official Sailor Piece destinations and community links.",
    openGraph: {
      title: `Official Links | ${siteConfig.name}`,
      description: "Official Sailor Piece destinations and community links.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Official Links | ${siteConfig.name}`,
      description: "Official Sailor Piece destinations and community links.",
      images: [siteConfig.ogImage],
    },
  };
}

const linkGroups = [
  {
    title: "Official Channels",
    icon: <Radio className="w-8 h-8 text-[var(--accent-red)] icon-glow-red" />,
    links: [
      { 
        title: "Roblox Game Page", 
        href: "https://www.roblox.com/games/77747658251236/", 
        desc: "Play the game on Roblox.",
        icon: <Gamepad2 className="w-6 h-6 text-[var(--accent-red)]" />
      },
      { 
        title: "Official Discord", 
        href: "https://discord.gg/sailorpiece", 
        desc: "Join the community for updates.",
        icon: <MessageSquare className="w-6 h-6 text-[#5865F2]" />
      },
      { 
        title: "Official Trello", 
        href: "https://trello.com/b/EVZ6nToB/sailor-piece-rework", 
        desc: "View the development board.",
        icon: <Layout className="w-6 h-6 text-[#0079BF]" />
      },
      { 
        title: "Shadowrise Devs", 
        href: "https://www.roblox.com/communities/1002185259/Shadowrise-Devs", 
        desc: "Roblox developer group.",
        icon: <Users className="w-6 h-6 text-white" />
      },
    ]
  },
  {
    title: "Trading & Market",
    icon: <BadgeDollarSign className="w-8 h-8 text-[var(--accent-gold)] icon-glow-gold" />,
    links: [
      { 
        title: "Vaulted ValuesX", 
        href: "https://sailor-piece.vaultedvaluesx.com/home", 
        desc: "Check current item values.",
        icon: <CircleDollarSign className="w-6 h-6 text-[var(--accent-gold)]" />
      },
      { 
        title: "Value List", 
        href: "https://sailor-piece.vaultedvaluesx.com/value-list", 
        desc: "Detailed price list.",
        icon: <List className="w-6 h-6 text-[var(--accent-gold)]" />
      },
      { 
        title: "Trade Calculator", 
        href: "https://sailor-piece.vaultedvaluesx.com/trade-calculator", 
        desc: "Simulate your trades.",
        icon: <Calculator className="w-6 h-6 text-[var(--accent-gold)]" />
      },
      { 
        title: "Trade Ads", 
        href: "https://sailor-piece.vaultedvaluesx.com/trade-ads", 
        desc: "Post and browse trade offers.",
        icon: <Megaphone className="w-6 h-6 text-[var(--accent-gold)]" />
      },
    ]
  }
];

export default function OfficialLinks() {
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
                <span className="w-2 h-2 bg-[var(--accent-gold)] animate-pulse shadow-[0_0_8px_rgba(255,184,0,1)]"></span> Community Hub
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1] text-white text-kinetic text-shadow-red mb-6 font-black uppercase">
                Official <span className="text-[var(--accent-gold)] text-shadow-gold">& Resources</span>
              </h1>
              <p className="text-gray-300 w-full max-w-2xl text-base sm:text-lg font-medium leading-relaxed mb-4 mx-auto border-b border-[var(--accent-red)]/30 pb-6">
                Jump straight to the game, community channels, and trading tools.
              </p>
            </div>
          </div>
        </section>

        {/* Links Grid */}
        <section className="w-full max-w-[1200px] px-4 sm:px-6 mt-16 mb-24 z-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            {linkGroups.map((group, i) => (
              <div key={i} className="space-y-6">
                <div className="mb-4 pb-2 border-b-2 border-white/10 relative">
                  <div className="flex items-center gap-4">
                    <div className="icon-premium-wrapper">
                      {group.icon}
                    </div>
                    <h2 className="text-2xl text-white text-kinetic text-shadow-red uppercase tracking-wide font-black">{group.title}</h2>
                  </div>
                  <div className="absolute -bottom-[2px] left-0 w-16 h-[2px] bg-[var(--accent-red)] shadow-[0_0_10px_rgba(255,30,56,0.8)]"></div>
                </div>

                <div className="grid gap-4">
                  {group.links.map((link, j) => (
                    <a key={j} href={link.href} target="_blank" rel="noopener noreferrer" className="group panel-action clip-diagonal p-6 flex items-center gap-6 hover:border-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/5 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent-gold)]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Individual Icon Wrapper */}
                      <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-black/40 border border-white/10 clip-button group-hover:border-[var(--accent-gold)]/50 group-hover:bg-black/60 transition-all duration-300 flex-shrink-0">
                        <div className="transition-transform duration-300 group-hover:scale-110">
                          {link.icon}
                        </div>
                      </div>

                      <div className="relative z-10 flex-grow">
                        <h3 className="font-black text-white text-kinetic group-hover:text-[var(--accent-gold)] transition-colors text-lg tracking-wide mb-1 uppercase">{link.title}</h3>
                        <p className="text-gray-400 text-sm font-medium leading-tight">{link.desc}</p>
                      </div>

                      <div className="relative z-10 text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                        <ExternalLink className="w-5 h-5 shadow-[0_0_15px_rgba(255,184,0,0.8)]" />
                      </div>
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
