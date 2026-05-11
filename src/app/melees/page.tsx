import { getSiteConfig } from "@/config/site";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getGameData } from "@/config/game-data";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Melees / Fighting Styles | ${siteConfig.name}`,
    description: "Sailor Piece fighting styles wiki with trainers, costs, and requirements.",
    openGraph: {
      title: `Melees / Fighting Styles | ${siteConfig.name}`,
      description: "Sailor Piece fighting styles wiki with trainers, costs, and requirements.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Melees / Fighting Styles | ${siteConfig.name}`,
      description: "Sailor Piece fighting styles wiki with trainers, costs, and requirements.",
      images: [siteConfig.ogImage],
    },
  };
}

export default function MeleesPage() {
  const gameData = getGameData();
  const tiers = gameData.melees.map(tier => ({
    ...tier,
    name: tier.tier,
    class: tier.tier === "S+ Tier" ? "tier-s-plus rainbow-fx border-transparent" :
           tier.tier === "S Tier" ? "tier-s text-[var(--accent-gold)] border-[var(--accent-gold)]" :
           tier.tier === "A Tier" ? "tier-a text-purple-400 border-purple-400" :
           tier.tier === "B Tier" ? "tier-b text-blue-400 border-blue-400" :
           "tier-c text-green-400 border-green-400"
  }));

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent)",
        }}
      ></div>
      <main className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans">
        <Header />

        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-8 sm:mt-16 z-10 relative">
          <div className="panel-action clip-diagonal p-8 sm:p-12 lg:p-20 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[var(--bg-dark)] via-[var(--bg-dark)]/80 to-transparent pointer-events-none"></div>
            <div className="absolute w-[100%] h-[140%] bg-[var(--accent-red)] opacity-5 blur-[120px] pointer-events-none rounded-full"></div>

            <div className="relative z-10 w-full">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[var(--accent-gold)] text-[var(--accent-gold)] font-black text-xs uppercase tracking-[0.2em] clip-button shadow-[0_0_15px_rgba(255,184,0,0.2)] bg-black/80 mb-6">
                <span className="w-2 h-2 bg-[var(--accent-gold)] animate-pulse shadow-[0_0_8px_rgba(255,184,0,1)]"></span>{" "}
                Wiki Category
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1] text-white text-kinetic text-shadow-red mb-6 font-black uppercase">
                Melees /{" "}
                <span className="text-[var(--accent-gold)] text-shadow-gold">
                  Styles
                </span>
              </h1>
              <p className="text-gray-300 w-full max-w-2xl text-base sm:text-lg font-medium leading-relaxed mb-4 mx-auto border-b border-[var(--accent-red)]/30 pb-6">
                Browse every fighting style, trainer location, and unlock
                requirement.
              </p>
            </div>
          </div>
        </section>

        {tiers.map((tier, i) => (
          <section
            key={i}
            className="w-full max-w-[1400px] px-4 sm:px-6 mt-16 z-10"
          >
            <div className="mb-8 pb-4 border-b-2 border-white/10 text-left relative">
              <h2 className="text-3xl text-white text-kinetic text-shadow-red uppercase tracking-wide font-black">
                {tier.name}
              </h2>
              <div className="absolute -bottom-[2px] left-0 w-16 h-[2px] bg-[var(--accent-red)] shadow-[0_0_10px_rgba(255,30,56,0.8)]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {tier.items.map((item, j) => (
                <a
                  key={j}
                  href={`/entries/${item.slug}`}
                  className="group panel-action clip-diagonal !p-0 flex flex-col relative overflow-hidden bg-gradient-to-b from-black to-[var(--bg-panel)] animate-fade-in"
                  style={{ animationDelay: `${j * 0.1}s` }}
                >
                  <div className="w-full h-40 sm:h-56 relative border-b-2 border-[var(--border-action)] bg-[#111] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 mix-blend-screen"
                    />
                    <div
                      className={`absolute top-4 sm:top-5 right-4 sm:right-5 bg-black/60 font-black italic px-3 py-1 text-xs clip-button border-2 z-10 backdrop-blur-md transition-colors ${tier.class}`}
                    >
                      {tier.name.split(" ")[0]}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl text-white text-kinetic mb-3 group-hover:text-[var(--accent-red)] group-hover:translate-x-2 transition-all tracking-tight uppercase">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm font-medium line-clamp-2 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity mb-4">
                        {item.desc}
                      </p>
                    </div>
                    <div className="w-8 h-1 bg-[var(--accent-red)] group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(255,30,56,0.5)]"></div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}

        <div className="mb-20"></div>
      </main>

      <Footer />
    </>
  );
}
