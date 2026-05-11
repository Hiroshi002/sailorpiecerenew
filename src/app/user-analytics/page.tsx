"use client";
import { getSiteConfig } from "@/config/site";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Users, 
  MousePointer2, 
  Search, 
  Clock, 
  Map as MapIcon, 
  TrendingUp, 
  Eye, 
  Smartphone, 
  Monitor, 
  ArrowUpRight,
  Navigation2,
  Share2,
  ExternalLink,
  Activity,
  Zap,
  Radio,
  RefreshCcw,
  Trash2
} from "lucide-react";
import { getAnalytics, resetAnalytics, AnalyticsData } from "@/lib/analytics";

export default function UserAnalyticsPage() {
  const [realtimeData, setRealtimeData] = useState<AnalyticsData | null>(null);
  const [activeUsersSim, setActiveUsersSim] = useState(1); // Real active users would need backend, keeping 1 for "You"

  // Fetch real data from localStorage
  useEffect(() => {
    const updateData = () => {
      setRealtimeData(getAnalytics());
    };

    updateData();
    const interval = setInterval(updateData, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleReset = () => {
    resetAnalytics();
    setRealtimeData(getAnalytics());
  };

  const popularPages = realtimeData 
    ? Object.entries(realtimeData.popularPages)
        .map(([label, views]) => ({ label, views, path: "#", trend: "up" }))
        .sort((a, b) => (b.views as number) - (a.views as number))
        .slice(0, 5)
    : [];

  const topSearches = realtimeData
    ? Object.entries(realtimeData.topSearches)
        .map(([term, count]) => ({ term, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5)
    : [];

  const mainStats = [
    { label: "Live Active Users", value: activeUsersSim.toString(), change: "Local Session", color: "text-blue-400", icon: Users },
    { label: "Session Duration", value: realtimeData ? `${Math.floor((Date.now() - realtimeData.sessionStartTime) / 60000)}m` : "0m", change: "Live", color: "text-green-400", icon: Clock },
    { label: "Your Page Views", value: realtimeData?.pageViews.toString() || "0", change: "Real Data", color: "text-purple-400", icon: Eye },
    { label: "Bounce Rate", value: "0%", change: "Session", color: "text-orange-400", icon: TrendingUp },
  ];

  const deviceDistribution = realtimeData ? [
    { type: "Mobile", count: realtimeData.devices?.mobile || 0, icon: Smartphone, rotate: false },
    { type: "Desktop", count: realtimeData.devices?.desktop || 0, icon: Monitor, rotate: false },
    { type: "Tablet", count: realtimeData.devices?.tablet || 0, icon: Smartphone, rotate: true },
  ] : [];

  const totalDeviceHits = deviceDistribution.reduce((acc, curr) => acc + curr.count, 0);

  const deviceStats = deviceDistribution.map(d => ({
    ...d,
    percentage: totalDeviceHits > 0 ? Math.round((d.count / totalDeviceHits) * 100) : 0
  }));

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white font-sans selection:bg-[var(--accent-red)] selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"></div>

      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-sm text-gray-400 mb-8 font-mono opacity-80 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--accent-red)] transition-colors">Home</Link>
          <span className="opacity-40">/</span>
          <span className="text-gray-300">User Insights</span>
        </div>

        <div className="mb-12 relative flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.2em] mb-6 clip-button shadow-[0_0_15px_rgba(255,184,0,0.2)]">
              Your Journey Tracking
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tighter italic" 
                style={{ textShadow: "4px 4px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              User <span className="text-[var(--accent-gold)]">Activity</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-6 bg-black/20 py-4 italic font-bold">
              Real-time analysis of your actual navigation and interaction with the Sailor Piece Wiki.
            </p>
          </div>
          
          <button 
            onClick={handleReset}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-red-500 hover:text-red-500 rounded-xl transition-all text-xs font-black uppercase tracking-widest group"
          >
            <Trash2 className="w-4 h-4 group-hover:animate-bounce" />
            Reset Session
          </button>
        </div>

        {/* Top Level Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainStats.map((stat: any, i: number) => (
            <div key={i} className="panel-action clip-diagonal p-6 group hover:border-[var(--accent-red)] transition-[background-color,border-color,transform]">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-[var(--accent-red)]/50 transition-colors">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/10 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change}
                </div>
              </div>
              <div className="text-3xl font-black mb-1 italic tracking-tighter">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase font-black tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Most Visited Pages */}
          <div className="lg:col-span-2 panel-action clip-diagonal p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <Navigation2 className="w-6 h-6 text-[var(--accent-gold)]" aria-hidden="true" />
                <h2 className="text-2xl font-black uppercase italic tracking-tighter">Popular Destinations</h2>
              </div>
              <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Last 24 Hours</div>
            </div>
            <div className="space-y-4">
              {popularPages.length > 0 ? (
                popularPages.map((page, i) => (
                  <Link key={i} href={page.path} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:border-[var(--accent-red)]/40 hover:bg-white/[0.08] transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-black/40 flex items-center justify-center text-xs font-black text-gray-500 group-hover:text-[var(--accent-red)] transition-colors">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-sm font-black uppercase italic text-white group-hover:text-[var(--accent-gold)] transition-colors">{page.label}</div>
                        <div className="text-[10px] font-mono text-gray-500">{page.path}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-sm font-black italic">{page.views}</div>
                        <div className="text-[10px] text-gray-500 uppercase font-bold">Views</div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-green-400" />
                    </div>
                  </Link>
                ))
              ) : (
                <div className="py-12 text-center border-2 border-dashed border-white/5 rounded-2xl">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">No visit data tracked</p>
                </div>
              )}
            </div>
          </div>

          {/* Search Trends */}
          <div className="panel-action clip-diagonal p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <Radio className="w-6 h-6 text-red-500 animate-pulse" aria-hidden="true" />
                <h2 className="text-2xl font-black uppercase italic tracking-tighter">Live Activity</h2>
              </div>
              <span className="flex items-center gap-2 text-[10px] font-black text-red-500 uppercase tracking-widest">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span> Live Feed
              </span>
            </div>
            
            <div className="space-y-4">
              {realtimeData && realtimeData.recentActions.length > 0 ? (
                realtimeData.recentActions.map((action) => (
                  <div key={action.id} className="p-3 bg-white/5 border border-white/5 rounded-xl hover:border-[var(--accent-red)]/40 transition-all group animate-in slide-in-from-right-4 duration-500">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] font-black text-[var(--accent-gold)] uppercase tracking-widest">{action.user}</span>
                      <span className="text-[9px] text-gray-500 font-bold italic">{new Date(action.time).toLocaleTimeString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-3 h-3 text-[var(--accent-red)]" />
                      <p className="text-xs text-white font-bold">{action.action}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center border-2 border-dashed border-white/5 rounded-2xl">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">No activity tracked yet</p>
                </div>
              )}
            </div>

            <div className="mt-8 p-6 bg-blue-500/5 border border-blue-500/10 rounded-2xl italic text-gray-400 text-[10px] leading-relaxed relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-20">
                <Search className="w-8 h-8 text-blue-400" />
              </div>
              <span className="text-blue-400 font-black uppercase block mb-1">Live Insight</span>
              Most active users are currently exploring Sea 2 content and searching for Ancient Fragments.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Device Breakdown */}
          <div className="panel-action clip-diagonal p-8">
            <div className="flex items-center gap-4 mb-8">
              <Monitor className="w-6 h-6 text-purple-400" aria-hidden="true" />
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">Device Reach</h2>
            </div>
            <div className="flex items-end gap-2 h-48 mb-8">
              {deviceStats.length > 0 ? (
                deviceStats.map((device, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                    <div className="w-full bg-white/5 rounded-t-lg relative flex items-end justify-center overflow-hidden border-x border-t border-white/5 group-hover:border-purple-500/40 transition-all" style={{ height: '100%' }}>
                      <div 
                        className="w-full bg-gradient-to-t from-purple-500 to-purple-400 opacity-60 group-hover:opacity-100 transition-all duration-1000" 
                        style={{ height: `${device.percentage}%` }}
                      ></div>
                      <span className="absolute bottom-2 text-xs font-black italic text-white">{device.percentage}%</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 group-hover:text-purple-400 transition-colors">
                      <device.icon className={`w-4 h-4 ${device.rotate ? 'rotate-90' : ''}`} />
                      <span className="text-[10px] font-black uppercase tracking-widest">{device.type}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-white/5 rounded-2xl">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">No device data</p>
                </div>
              )}
            </div>
          </div>

          {/* Interaction Heatmap Hint */}
          <div className="panel-action clip-diagonal p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,30,56,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:border-[var(--accent-red)]/50 transition-all">
                <Activity className="w-8 h-8 text-[var(--accent-red)] animate-pulse" />
              </div>
              <h3 className="text-xl font-black uppercase italic mb-3 tracking-tighter">Engagement Map</h3>
              <p className="text-gray-400 text-sm font-medium max-w-xs mb-6">
                Most users interact with the <span className="text-white">Quick Access</span> matrix within 15 seconds of landing.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-red)] text-white text-[10px] font-black uppercase tracking-widest clip-button hover:bg-white hover:text-black transition-colors cursor-default">
                Live Data Stream <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </div>
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
