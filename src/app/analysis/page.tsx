"use client";
import { getSiteConfig } from "@/config/site";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  BarChart3, 
  PieChart, 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Zap, 
  FileText, 
  Search,
  ArrowRight,
  ChevronRight,
  Target,
  Lightbulb,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

export default function AnalysisPage() {
  const stats = [
    { label: "First-Shot Success", value: "35%", rating: "Critical", color: "text-red-500", icon: Target },
    { label: "Completion Rate", value: "88%", rating: "Excellent", color: "text-green-500", icon: CheckCircle2 },
    { label: "Avg Scope Growth", value: "45%", rating: "High", color: "text-red-400", icon: TrendingUp },
    { label: "Replan Rate", value: "52%", rating: "High", color: "text-red-400", icon: Activity },
  ];

  const rootCauses = [
    { label: "Spec Ambiguity", percentage: 46, count: 12, desc: "Vague UI requests lead to experimentation.", color: "bg-red-500" },
    { label: "Human Scope Change", percentage: 23, count: 6, desc: "Aesthetic shifts mid-session.", color: "bg-orange-500" },
    { label: "Repo Fragility", percentage: 15, count: 4, desc: "Next.js hydration and coupling issues.", color: "bg-yellow-500" },
    { label: "Verification Churn", percentage: 15, count: 4, desc: "Late-stage fixes for complex features.", color: "bg-blue-500" },
  ];

  const hotspots = [
    { file: "src/app/globals.css", desc: "Touched in almost every redesign session.", sessions: "20+" },
    { file: "src/app/page.tsx", desc: "Subject to total rewrites (Bento vs Hero).", sessions: "15" },
    { file: "api/spotify/search/route.ts", desc: "Source of complexity for infinite search.", sessions: "8" },
  ];

  const conversations = [
    { id: "277ffbc5", title: "Infinite Search & UI", intent: "DELIVERY", duration: "118m", scope: "+80%", revs: 31, cause: "REPO_FRAGILITY", severity: 85 },
    { id: "3021f19e", title: "Sailor Piece Wiki Redesign", intent: "DELIVERY", duration: "95m", scope: "+50%", revs: 22, cause: "HUMAN_SCOPE_CHANGE", severity: 65 },
    { id: "baa2f14f", title: "VisionOS Overhaul", intent: "REFACTOR", duration: "60m", scope: "+30%", revs: 13, cause: "SPEC_AMBIGUITY", severity: 45 },
    { id: "7474cef5", title: "Prune Unused Files", intent: "REFACTOR", duration: "15m", scope: "+5%", revs: 1, cause: "CLEAN", severity: 10 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white font-sans selection:bg-[var(--accent-red)] selection:text-white">
      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"></div>

      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-8 font-mono opacity-80 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--accent-red)] transition-colors">Home</Link>
          <span className="opacity-40">/</span>
          <span className="text-gray-300">System Analysis</span>
        </div>

        {/* Hero Section */}
        <div className="mb-12 relative">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.2em] mb-6 clip-button shadow-[0_0_15px_rgba(255,184,0,0.2)]">
            Forensic Analysis Dashboard
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tighter italic" 
              style={{ textShadow: "4px 4px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
            Project <span className="text-[var(--accent-gold)]">Analyze</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-6 bg-black/20 py-4 italic font-bold">
            Real-time diagnostics of AI-assisted development sessions. Tracking rework patterns, root causes, and project friction.
          </p>
        </div>

        {/* Executive Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat: any, i: number) => (
            <div key={i} className="panel-action clip-diagonal p-6 group hover:border-[var(--accent-red)] transition-[background-color,border-color,transform]">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-[var(--accent-red)]/50 transition-colors">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded border ${stat.color.replace('text', 'border')} ${stat.color.replace('text', 'bg')}/10`}>
                  {stat.rating}
                </div>
              </div>
              <div className="text-3xl font-black mb-1 italic tracking-tighter">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase font-black tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Root Cause Breakdown */}
          <div className="lg:col-span-2 panel-action clip-diagonal p-8">
            <div className="flex items-center gap-4 mb-8">
              <PieChart className="w-6 h-6 text-[var(--accent-gold)]" aria-hidden="true" />
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">Root Cause Breakdown</h2>
            </div>
            <div className="space-y-6">
              {rootCauses.map((cause, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <span className="text-sm font-black uppercase tracking-widest text-white group-hover:text-[var(--accent-gold)] transition-colors">{cause.label}</span>
                      <p className="text-[10px] text-gray-500 font-bold mt-0.5">{cause.desc}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-black italic">{cause.percentage}%</span>
                      <span className="text-[10px] text-gray-500 ml-2 uppercase">({cause.count} Sessions)</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className={`h-full ${cause.color} transition-[width,opacity] duration-1000 group-hover:opacity-80`} 
                      style={{ width: `${cause.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Friction Hotspots */}
          <div className="panel-action clip-diagonal p-8">
            <div className="flex items-center gap-4 mb-8">
              <AlertTriangle className="w-6 h-6 text-[var(--accent-red)]" aria-hidden="true" />
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">Hotspots</h2>
            </div>
            <div className="space-y-4">
              {hotspots.map((spot, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-xl hover:border-[var(--accent-red)]/40 transition-[border-color,background-color] group">
                  <div className="flex justify-between items-start mb-2">
                    <code className="text-[11px] text-[var(--accent-gold)] font-mono font-bold bg-black/40 px-2 py-1 rounded">{spot.file}</code>
                    <span className="text-[10px] font-black bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded uppercase">{spot.sessions} Sessions</span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium group-hover:text-gray-200 transition-colors">{spot.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendations & Findings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="panel-action clip-diagonal p-8 border-l-4 border-l-[var(--accent-gold)]">
            <div className="flex items-center gap-4 mb-6">
              <Lightbulb className="w-6 h-6 text-[var(--accent-gold)]" aria-hidden="true" />
              <h2 className="text-2xl font-black uppercase italic tracking-tighter text-[var(--accent-gold)]">Non-Obvious Findings</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-4 group">
                <Zap className="w-4 h-4 text-[var(--accent-gold)] mt-1 shrink-0" aria-hidden="true" />
                <p className="text-sm text-gray-300 font-bold leading-relaxed group-hover:text-white transition-colors">
                  <span className="text-white underline decoration-[var(--accent-gold)]/40">The "Redesign Loop"</span>: Redesign tasks are rarely "done" in one go; they typically go through 3 distinct visual phases.
                </p>
              </li>
              <li className="flex gap-4 group">
                <Zap className="w-4 h-4 text-[var(--accent-gold)] mt-1 shrink-0" aria-hidden="true" />
                <p className="text-sm text-gray-300 font-bold leading-relaxed group-hover:text-white transition-colors">
                  <span className="text-white underline decoration-[var(--accent-gold)]/40">Hydration Ghost</span>: Sessions involving complex UI components repeatedly struggle with Next.js hydration mismatches.
                </p>
              </li>
            </ul>
          </div>

          <div className="panel-action clip-diagonal p-8 border-l-4 border-l-[var(--accent-red)]">
            <div className="flex items-center gap-4 mb-6">
              <ShieldCheck className="w-6 h-6 text-[var(--accent-red)]" aria-hidden="true" />
              <h2 className="text-2xl font-black uppercase italic tracking-tighter text-[var(--accent-red)]">Recommendations</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-4 group">
                <ChevronRight className="w-4 h-4 text-[var(--accent-red)] mt-1 shrink-0" aria-hidden="true" />
                <p className="text-sm text-gray-300 font-bold leading-relaxed group-hover:text-white transition-colors">
                  <span className="text-white">Break "Full Redesign"</span> into per-component tasks to reduce revision counts and context bloat.
                </p>
              </li>
              <li className="flex gap-4 group">
                <ChevronRight className="w-4 h-4 text-[var(--accent-red)] mt-1 shrink-0" aria-hidden="true" />
                <p className="text-sm text-gray-300 font-bold leading-relaxed group-hover:text-white transition-colors">
                  <span className="text-white">Use reference images</span> or CSS variables in opening prompts to anchor the aesthetic early.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Session Log */}
        <div className="panel-action clip-diagonal p-8 overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <FileText className="w-6 h-6 text-blue-400" aria-hidden="true" />
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">Session Logs</h2>
            </div>
            <div className="relative w-full sm:w-64">
              <input 
                type="text" 
                placeholder="Search sessions…" 
                aria-label="Search development sessions"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-xs font-bold outline-none focus:border-[var(--accent-red)] transition-colors" 
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-500" aria-hidden="true" />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">ID</th>
                  <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Title</th>
                  <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Intent</th>
                  <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Duration</th>
                  <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Revisions</th>
                  <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 text-right">Severity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {conversations.map((conv, i) => (
                  <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 font-mono text-[11px] text-gray-500 group-hover:text-gray-300">{conv.id}</td>
                    <td className="py-4">
                      <div className="text-sm font-black uppercase italic group-hover:text-[var(--accent-red)] transition-colors">{conv.title}</div>
                      <div className="text-[10px] text-gray-500 font-bold mt-0.5">{conv.cause}</div>
                    </td>
                    <td className="py-4">
                      <span className={`text-[10px] font-black px-2 py-1 rounded border ${
                        conv.intent === 'DELIVERY' ? 'text-blue-400 border-blue-400/20 bg-blue-400/10' : 
                        'text-purple-400 border-purple-400/20 bg-purple-400/10'
                      }`}>
                        {conv.intent}
                      </span>
                    </td>
                    <td className="py-4 text-sm font-bold text-gray-400">{conv.duration}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-[var(--accent-red)]" style={{ width: `${(conv.revs / 35) * 100}%` }}></div>
                        </div>
                        <span className="text-xs font-black italic">{conv.revs}</span>
                      </div>
                    </td>
                    <td className="py-4 text-right">
                      <span className={`text-lg font-black italic ${
                        conv.severity > 70 ? 'text-red-500' : 
                        conv.severity > 40 ? 'text-orange-500' : 'text-green-500'
                      }`}>
                        {conv.severity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <button className="w-full mt-8 py-4 border-2 border-dashed border-white/10 rounded-xl text-gray-500 text-xs font-black uppercase tracking-[0.3em] hover:border-[var(--accent-red)] hover:text-white transition-[border-color,color] group">
            <span className="group-hover:tracking-[0.5em] transition-all">View All Sessions</span>
          </button>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .text-kinetic {
          filter: drop-shadow(0 0 2px rgba(255,30,56,0.3));
        }
        .clip-diagonal {
          clip-path: polygon(25px 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%, 0 25px);
        }
        .clip-button {
          clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px);
        }
        .panel-action {
          background: var(--bg-panel);
          border: 1px solid var(--border-subtle);
          box-shadow: 10px 10px 40px rgba(0,0,0,0.5);
          transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .panel-action:hover {
          background: #1a1818;
          border-color: var(--accent-red);
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
}
