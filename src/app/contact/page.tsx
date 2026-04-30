"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageSquare, Globe, Sparkles, ChevronDown } from "lucide-react";

export default function Contact() {
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
                <span className="w-2 h-2 bg-[var(--accent-gold)] animate-pulse shadow-[0_0_8px_rgba(255,184,0,1)]"></span> Get in Touch
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1] text-white text-kinetic text-shadow-red mb-6 font-black uppercase">
                Support <span className="text-[var(--accent-gold)] text-shadow-gold">& Feedback</span>
              </h1>
              <p className="text-gray-300 w-full max-w-2xl text-base sm:text-lg font-medium leading-relaxed mb-4 mx-auto border-b border-[var(--accent-red)]/30 pb-6">
                Have questions, found a bug, or want to contribute? Reach out to us.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="w-full max-w-[1400px] px-4 sm:px-6 mt-16 mb-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="mb-8 pb-4 border-b-2 border-[var(--accent-red)] text-left">
                <h2 className="text-3xl sm:text-4xl text-white text-kinetic text-shadow-red uppercase tracking-wide font-black">Contact Info</h2>
              </div>

              <div className="grid gap-6">
                <div className="panel-action clip-diagonal p-6 sm:p-8 flex items-start gap-4 sm:gap-6 group">
                  <div className="w-12 h-12 clip-button bg-[var(--accent-red)]/20 flex items-center justify-center shrink-0 border border-[var(--accent-red)] group-hover:bg-[var(--accent-red)] group-hover:text-white transition-all duration-300">
                    <MessageSquare className="w-6 h-6 icon-glow-red group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-black text-white text-kinetic tracking-wider text-sm sm:text-base mb-1 group-hover:text-[var(--accent-gold)] transition-colors">Discord Support</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-4">Message our lead editor directly on Discord.</p>
                    <code className="bg-black border border-[var(--border-action)] px-4 py-2 clip-button text-[var(--accent-red)] font-black text-xs shadow-[0_0_10px_rgba(255,30,56,0.3)]">@awesomedu</code>
                  </div>
                </div>

                <div className="panel-action clip-diagonal p-6 sm:p-8 flex items-start gap-4 sm:gap-6 group lg:cursor-pointer" onClick={() => window.open('https://discord.gg/WPyCztYAJv', '_blank')}>
                  <div className="w-12 h-12 clip-button bg-[var(--accent-gold)]/20 flex items-center justify-center shrink-0 border border-[var(--accent-gold)] group-hover:bg-[var(--accent-gold)] group-hover:text-black transition-all duration-300">
                    <Globe className="w-6 h-6 icon-glow-gold group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-black text-white text-kinetic tracking-wider text-sm sm:text-base mb-1 group-hover:text-[var(--accent-gold)] transition-colors">Community Server</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-4">Join our Discord community for real-time help.</p>
                    <a href="https://discord.gg/WPyCztYAJv" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-gold)] font-black text-xs hover:underline tracking-widest break-all">
                      DISCORD.GG/WPYCZTYAJV
                    </a>
                  </div>
                </div>
              </div>

              <div className="panel-action clip-diagonal p-8 bg-[var(--accent-red)]/5 border-t-4 border-[var(--accent-red)]">
                <h3 className="font-black text-white mb-4 text-sm uppercase tracking-widest italic">Why reach out?</h3>
                <ul className="space-y-3">
                  {[
                    "A page has outdated values or missing requirements.",
                    "You found a bug in the website layout or search.",
                    "You want to suggest new features or pages.",
                    "You're interested in joining the editing team."
                  ].map((reason, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-300 font-medium">
                      <Sparkles className="w-4 h-4 text-[var(--accent-red)] shrink-0 mt-0.5 icon-glow-red animate-pulse" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="panel-action clip-diagonal p-8 sm:p-12 relative overflow-hidden bg-gradient-to-b from-[var(--bg-panel)] to-black">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)]/10 blur-3xl rounded-full pointer-events-none" />
              <h3 className="text-3xl text-white font-black italic text-kinetic tracking-wide mb-8">Direct <span className="text-[var(--accent-gold)] text-shadow-gold">Message</span></h3>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black">Your Name</label>
                    <input type="text" className="w-full bg-black border border-[var(--border-action)] clip-button px-4 py-3 text-white focus:border-[var(--accent-gold)] focus:shadow-[0_0_15px_rgba(255,184,0,0.3)] outline-none transition-all placeholder:text-gray-600 font-medium" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black">Discord Tag</label>
                    <input type="text" className="w-full bg-black border border-[var(--border-action)] clip-button px-4 py-3 text-white focus:border-[var(--accent-gold)] focus:shadow-[0_0_15px_rgba(255,184,0,0.3)] outline-none transition-all placeholder:text-gray-600 font-medium" placeholder="user#0000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black">Subject</label>
                  <div className="relative">
                    <select className="w-full bg-black border border-[var(--border-action)] clip-button px-4 py-3 text-white focus:border-[var(--accent-gold)] focus:shadow-[0_0_15px_rgba(255,184,0,0.3)] outline-none transition-all appearance-none cursor-pointer font-medium">
                      <option>General Inquiry</option>
                      <option>Report Outdated Info</option>
                      <option>Bug Report</option>
                      <option>Feature Request</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--accent-red)]">
                      <ChevronDown className="w-4 h-4 icon-glow-red" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black">Message</label>
                  <textarea className="w-full bg-black border border-[var(--border-action)] clip-button px-4 py-3 text-white focus:border-[var(--accent-gold)] focus:shadow-[0_0_15px_rgba(255,184,0,0.3)] outline-none transition-all min-h-[160px] resize-none placeholder:text-gray-600 custom-scrollbar font-medium" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[var(--accent-red)] hover:bg-[var(--accent-gold)] text-white hover:text-black font-black uppercase tracking-widest py-4 clip-button transition-all border border-transparent shadow-[0_0_15px_rgba(255,30,56,0.6)] hover:shadow-[0_0_20px_rgba(255,184,0,0.8)] mt-4">
                  Send Transmission
                </button>
              </form>
            </div>
            
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

