import { getSiteConfig } from "@/config/site";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calculator, Zap, Swords, Layout } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    title: `Sailor Piece Calculator | ${siteConfig.name}`,
    description: "Calculator hub for power roll comparison, spec passive comparison, and build planning tools.",
    openGraph: {
      title: `Sailor Piece Calculator | ${siteConfig.name}`,
      description: "Calculator hub for power roll comparison, spec passive comparison, and build planning tools.",
      url: `${siteConfig.url}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Sailor Piece Calculator | ${siteConfig.name}`,
      description: "Calculator hub for power roll comparison, spec passive comparison, and build planning tools.",
      images: [siteConfig.ogImage],
    },
  };
}

const tools = [
  {
    title: "Power comparison calculator",
    eyebrow: "Compare",
    summary: "Compare 2 different Powers to see which roll is better for general damage, bossing, and luck farming.",
    detail: "Use OCR screenshot upload, paste from clipboard, or manual text entry to compare two stored power rolls side by side.",
    href: "/entries/power-system-overview#power-roll-comparison",
    chips: ["Power", "OCR ready", "Damage vs Luck"],
    className: "calculator-tool-power",
    icon: <Zap className="w-6 h-6 text-[var(--accent-red)] icon-glow-red transition-all" />
  },
  {
    title: "Spec Passive comparison calculator",
    eyebrow: "Compare",
    summary: "Compare 2 different Spec Passives to see which passive roll is better for damage, bosses, or farming value.",
    detail: "Useful for checking rolls like Rampage, Combo Ramp, Fortune Chosen, crit variants, and mixed damage/luck setups.",
    href: "/entries/spec-passives-overview#spec-passive-roll-comparison",
    chips: ["Spec Passive", "Rampage aware", "+1 Drop aware"],
    className: "calculator-tool-spec",
    icon: <Swords className="w-6 h-6 text-blue-400 icon-glow-blue transition-all" />
  },
  {
    title: "Build calculator and planner",
    eyebrow: "Planner",
    summary: "Open the build planner to check upgrade order, account gaps, and the best next step for your route.",
    detail: "Best when you want a wider account-planning tool instead of comparing just one passive or one power roll.",
    href: "/entries/best-builds-overview#build-progression-planner",
    chips: ["Planner", "Progression", "Next upgrade"],
    className: "calculator-tool-build",
    icon: <Layout className="w-6 h-6 text-[var(--accent-gold)] icon-glow-gold transition-all" />
  }
];

const faqs = [
  {
    question: "What calculators are on this page right now?",
    answer: "Right now the page links directly to the Power roll comparison tool, the Spec Passive comparison tool, and the Build progression planner."
  },
  {
    question: "Does this page contain the calculators itself?",
    answer: "No. It acts as a clean tool hub and sends you straight to the exact calculator section on the relevant page."
  }
];

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-vignette opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,30,56,0.1),transparent_70%)]" />
      </div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 block">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 font-mono opacity-80">
          <Link href="/" className="hover:text-[var(--accent-red)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Sailor Piece Calculator</span>
        </div>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="panel-action clip-diagonal p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--accent-red)]/5 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.2)]">
                Site Page
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tight" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
                Sailor Piece Calculator
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-6">
                Calculator hub for power roll comparison, spec passive comparison, and build planning tools.
              </p>
              <div className="mt-8 flex gap-3">
                <span className="px-4 py-1 bg-[var(--accent-red)]/20 border border-[var(--accent-red)]/50 text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest rounded-sm">Site</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="mb-12">
          <div className="panel-action clip-diagonal p-8">
            <div className="flex items-center gap-4 mb-6">
              <Calculator className="w-8 h-8 text-[var(--accent-gold)] icon-glow-gold transition-all" />
              <h2 className="text-3xl font-black text-white text-kinetic uppercase">Overview</h2>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent-red)] mt-1 font-bold">•</span>
                <span>This page is the tool hub for the Sailor Piece Wiki calculators and comparison helpers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent-red)] mt-1 font-bold">•</span>
                <span>Use it when you want to compare two power rolls, compare two spec passives, or open the existing build progression planner without hunting through category pages first.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent-red)] mt-1 font-bold">•</span>
                <span>More calculators can be added here over time so players have one stable page for tools instead of scattered utility links.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Tools Hub */}
        <section className="mb-16">
          <div className="mb-8 border-b-2 border-[var(--accent-red)] pb-4 flex justify-between items-end">
            <div>
              <span className="text-[10px] text-[var(--accent-red)] font-black tracking-[0.2em] uppercase block mb-1">Available Tools</span>
              <h2 className="text-4xl text-white text-kinetic uppercase font-black">Tool Hub</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="panel-action clip-diagonal p-8 bg-gradient-to-br from-black to-[var(--bg-panel)] h-full">
               <div className="text-[10px] text-[var(--accent-gold)] font-black tracking-[0.2em] uppercase mb-2">Intro</div>
               <h3 className="text-2xl font-black text-white italic mb-4">Sailor Piece Calculator tools</h3>
               <p className="text-gray-400 text-sm leading-relaxed mb-6">
                 Use this page as the cleaner home for comparison tools, build planning, and future utility pages. Each card jumps straight to the exact tool section so you do not need to dig through the full guide page first.
               </p>
               <div className="flex flex-wrap gap-2">
                 <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300">Power compares</span>
                 <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-purple-900/30 border border-purple-500/50 text-purple-300">Spec passive compares</span>
                 <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-[var(--accent-red)]/20 border border-[var(--accent-red)]/50 text-[var(--accent-red)]">Build planning</span>
               </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="panel-action clip-button p-6 border-l-4 border-l-[var(--accent-gold)]">
                <div className="text-[10px] text-[var(--accent-gold)] font-black uppercase tracking-widest mb-2">Why use</div>
                <strong className="block text-white mb-2">One place for actual tools</strong>
                <p className="text-xs text-gray-400">Open the comparison or planner you need without hunting through multiple overview pages first.</p>
              </div>
              <div className="panel-action clip-button p-6 border-l-4 border-l-[var(--accent-red)]">
                <div className="text-[10px] text-[var(--accent-red)] font-black uppercase tracking-widest mb-2">Best use</div>
                <strong className="block text-white mb-2">Roll checks and planning</strong>
                <p className="text-xs text-gray-400">Great for deciding which Power or Spec Passive roll is better, then planning next upgrades.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <Link key={i} href={tool.href} className="group panel-action clip-diagonal p-8 flex flex-col hover:translate-y-[-8px] transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="icon-premium-wrapper group-hover:border-[var(--accent-red)]/50 transition-colors">
                    {tool.icon}
                  </div>
                  <span className="text-[10px] text-[var(--accent-gold)] font-black uppercase tracking-[0.2em]">{tool.eyebrow}</span>
                </div>
                <h3 className="text-xl font-black text-white italic mb-3 group-hover:text-[var(--accent-red)] transition-colors">{tool.title}</h3>
                <p className="text-xs text-gray-400 mb-4 line-clamp-2">{tool.summary}</p>
                <p className="text-[11px] text-gray-500 mb-6 italic leading-relaxed">{tool.detail}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {tool.chips.map((chip, j) => (
                    <span key={j} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-black/40 border border-white/10 text-gray-400 group-hover:text-white transition-colors">{chip}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Future Calculators */}
        <section className="mb-16">
          <div className="panel-action clip-diagonal p-8 bg-black/40 border-dashed border-2 border-white/10">
            <h2 className="text-2xl font-black text-white text-kinetic mb-4 opacity-50 uppercase tracking-widest">Future Calculator Space</h2>
            <p className="text-gray-500 text-sm mb-8 italic">This page is meant to keep growing into the main Sailor Piece Calculator hub.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {[
                { title: "Value comparison helper", detail: "Reserved for quick trade-value comparisons, reroll checks, and snapshot value reads." },
                { title: "Route and material math", detail: "Reserved for farming calculators like expected runs, mat totals, and efficiency helpers." },
                { title: "Cap and stat helper", detail: "Reserved for future cap tools that estimate damage, crit, HP, and luck totals." }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/5 bg-white/5 clip-button">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] text-[var(--accent-red)] font-black uppercase tracking-[0.2em]">Planned</span>
                    <span className="text-[8px] text-gray-500 font-bold uppercase italic">Reserved</span>
                  </div>
                  <h4 className="text-white font-black italic mb-2 tracking-wide">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 italic">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="mb-8 border-b-2 border-[var(--accent-gold)] pb-4">
            <h2 className="text-3xl text-white text-kinetic uppercase font-black">Calculator FAQ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="panel-action clip-diagonal p-6 border-l-4 border-l-[var(--accent-gold)] h-full">
                <h3 className="text-lg font-black text-white italic mb-3 tracking-wide">{faq.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
