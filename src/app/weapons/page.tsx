import type { Metadata } from 'next'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Weapons / Swords | Sailor Piece Wiki',
  description: 'Sailor Piece weapons wiki with sword obtainment, evolution paths, and materials.',
};

const tiers = [
  {
    name: "S+ Tier",
    class: "tier-s-plus rainbow-fx border-transparent",
    items: [
      { slug: 'anti-magic', img: '/images/hero/antimagic.webp', title: 'Anti Magic', desc: 'Legendary sword with anti-magic properties and unique moveset.' },
      { slug: 'dragon-goddess', img: '/images/icons/weapon-dragongoddess.webp', title: 'Dragon Goddess', desc: 'Sea 2 legendary sword with divine dragon powers.' },
      { slug: 'great-mage-style', img: '/images/icons/weapon-greatmage.webp', title: 'Great Mage', desc: 'Magic-focused sword style with large AoE and high burst.' },
      { slug: 'atomic', img: '/images/icons/weapon-atomic.webp', title: 'Atomic', desc: 'Powerful sword with explosive capabilities and fast scaling.' },
      { slug: 'ice-queen', img: '/images/icons/weapon-icequeen.webp', title: 'Ice Queen', desc: 'Boss Island late-game sword built around the Ice Queen boss, Frost Empress title, and a full bundle of frost materials.' },
    ]
  },
  {
    name: "S Tier",
    class: "tier-s text-[var(--accent-gold)] border-[var(--accent-gold)]",
    items: [
      { slug: 'shadow-monarch', img: '/images/icons/weapon-shadowmonarch.webp', title: 'Shadow Monarch', desc: 'Dungeon Island upgrade sword that consumes Jinwoo and a full set of Shadow Monarch boss drops.' },
      { slug: 'abyssal-empress', img: '/images/icons/weapon-abyssalempress.webp', title: 'Abyssal Empress', desc: 'Tower Island endgame sword earned through Infinite Tower grinding or by buying it with Tower Tokens.' },
      { slug: 'escanor', img: '/images/icons/weapon-sinofpride.webp', title: 'Escanor', desc: 'Boss Rush weapon route with fire-heavy AoE moves, Pride synergy, and the matching Sun Armor grind on Sailor Island.' },
      { slug: 'yamato', img: '/images/icons/weapon-yamato.webp', title: 'Yamato', desc: 'Judgement Island sword that asks for gems, a title, a race, and a full set of Yamato boss drops.' },
      { slug: 'true-aizen', img: '/images/icons/weapon-truemanipulator.webp', title: 'True Aizen / True Manipulator', desc: 'Soul Dominion upgrade sword that builds directly on the Manipulator Sword and needs boss materials, a title, and unlocked island access.' },
      { slug: 'rimuru', img: '/images/icons/weapon-slimesword.webp', title: 'Rimuru', desc: 'Slime Island sword route tied to the slime collection puzzle, Slime Key crafting, and one of the strongest late-game boss grinds.' },
      { slug: 'shadow', img: '/images/icons/weapon-shadowsword.webp', title: 'Shadow', desc: 'Dungeon Island sword, also searched as CID V1, that acts as the direct base weapon for Atomic.' },
    ]
  },
  {
    name: "A Tier",
    class: "tier-a text-purple-400 border-purple-400",
    items: [
      { slug: 'manipulator-sword', img: '/images/icons/weapon-manipulator.webp', title: 'Manipulator Sword (Aizen Sword)', desc: 'Dungeon Island upgrade sword that consumes Jinwoo and a full set of Shadow Monarch boss drops.' },
      { slug: 'ragna', img: '/images/icons/weapon-dragonslayer.webp', title: 'Ragna', desc: 'Tower Island endgame sword earned through Infinite Tower grinding or by buying it with Tower Tokens.' },
      { slug: 'ichigo', img: '/images/icons/weapon-soulreaper.webp', title: 'Ichigo', desc: 'Boss Rush weapon route with fire-heavy AoE moves, Pride synergy, and the matching Sun Armor grind on Sailor Island.' },
    ]
  },
  {
    name: "B Tier",
    class: "tier-b text-blue-400 border-blue-400",
    items: [
      { slug: 'saber', img: '/images/icons/weapon-excalibur.webp', title: 'Excalibur(Suber Sword)', desc: 'Dungeon Island upgrade sword that consumes Jinwoo and a full set of Shadow Monarch boss drops.' },
      { slug: 'jinwoo', img: '/images/icons/weapon-solohunter.webp', title: 'Jinwoo', desc: 'Tower Island endgame sword earned through Infinite Tower grinding or by buying it with Tower Tokens.' },
    ]
  },
  {
    name: "C Tier",
    class: "tier-c text-green-400 border-green-400",
    items: [
      { slug: 'gryphon', img: '/images/icons/weapon-gryphon.webp', title: 'Gryphon', desc: 'Dungeon Island upgrade sword that consumes Jinwoo and a full set of Shadow Monarch boss drops.' },
      { slug: 'dark-blade', img: '/images/icons/weapon-darkblade.webp', title: 'Drak Blade', desc: 'Tower Island endgame sword earned through Infinite Tower grinding or by buying it with Tower Tokens.' },
      { slug: 'katana', img: '/images/icons/weapon-katana.webp', title: 'Katana', desc: 'Tower Island endgame sword earned through Infinite Tower grinding or by buying it with Tower Tokens.' },
    ]
  },
];

export default function SwordsPage() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20" style={{ WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent)" }}></div>
      <main className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans">
        <Header />

        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-8 sm:mt-16 z-10 relative">
          <div className="panel-action clip-diagonal p-8 sm:p-12 lg:p-20 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[var(--bg-dark)] via-[var(--bg-dark)]/80 to-transparent pointer-events-none"></div>
            <div className="absolute w-[100%] h-[140%] bg-[var(--accent-red)] opacity-5 blur-[120px] pointer-events-none rounded-full"></div>

            <div className="relative z-10 w-full">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[var(--accent-gold)] text-[var(--accent-gold)] font-black text-xs uppercase tracking-[0.2em] clip-button shadow-[0_0_15px_rgba(255,184,0,0.2)] bg-black/80 mb-6">
                <span className="w-2 h-2 bg-[var(--accent-gold)] animate-pulse shadow-[0_0_8px_rgba(255,184,0,1)]"></span> Wiki Category
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1] text-white text-kinetic text-shadow-red mb-6 font-black uppercase">
                Weapons / <span className="text-[var(--accent-gold)] text-shadow-gold">Swords</span>
              </h1>
              <p className="text-gray-300 w-full max-w-2xl text-base sm:text-lg font-medium leading-relaxed mb-4 mx-auto border-b border-[var(--accent-red)]/30 pb-6">
                Explore all weapons, evolution paths, and obtainment requirements.
              </p>
            </div>
          </div>
        </section>

        {tiers.map((tier, i) => (
          <section key={i} className="w-full max-w-[1400px] px-4 sm:px-6 mt-16 z-10">
            <div className="mb-8 pb-4 border-b-2 border-white/10 text-left relative">
              <h2 className="text-3xl text-white text-kinetic text-shadow-red uppercase tracking-wide font-black">{tier.name}</h2>
              <div className="absolute -bottom-[2px] left-0 w-16 h-[2px] bg-[var(--accent-red)] shadow-[0_0_10px_rgba(255,30,56,0.8)]"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {tier.items.map((item, j) => (
                <a key={j} href={`/entries/${item.slug}`} className="group panel-action clip-diagonal !p-0 flex flex-col relative overflow-hidden bg-gradient-to-b from-black to-[var(--bg-panel)] animate-fade-in" style={{ animationDelay: `${j * 0.1}s` }}>
                  <div className="w-full h-40 sm:h-56 relative border-b-2 border-[var(--border-action)] bg-[#111] overflow-hidden">
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill
                      className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 mix-blend-screen" 
                    />
                    <div className={`absolute top-4 sm:top-5 right-4 sm:right-5 bg-black/60 font-black italic px-3 py-1 text-xs clip-button border-2 z-10 backdrop-blur-md transition-colors ${tier.class}`}>
                      {tier.name.split(' ')[0]}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl text-white text-kinetic mb-3 group-hover:text-[var(--accent-red)] group-hover:translate-x-2 transition-all tracking-tight uppercase">{item.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm font-medium line-clamp-2 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity mb-4">{item.desc}</p>
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
