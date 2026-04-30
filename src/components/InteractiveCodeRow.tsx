"use client";
import React, { useState } from "react";

export default function InteractiveCodeRow({ item }: { item: { code: string; rewards: string } }) {
  const [copied, setCopied] = useState(false);
  const [used, setUsed] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <tr className={used ? "opacity-30 line-through decoration-white/20" : "hover:bg-white/5 transition-colors group/row"}>
      <td className="py-6 px-8 border-b border-white/5 align-middle w-28">
        <label className="flex items-center gap-3 cursor-pointer text-xs text-gray-500 group">
          <input 
            type="checkbox" 
            checked={used} 
            onChange={(e) => setUsed(e.target.checked)} 
            className="w-4 h-4 accent-[var(--accent-red)] cursor-pointer"
          />
          <span className="group-hover:text-white transition-colors uppercase font-bold tracking-wider">Used</span>
        </label>
      </td>
      <td 
        className={`font-black py-6 px-8 border-b border-white/5 cursor-pointer text-base md:text-lg transition-all ${copied ? 'text-green-400' : 'text-white group-hover/row:text-[var(--accent-red)]'}`} 
        onClick={handleCopy}
        title="Click to copy"
      >
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className="font-mono tracking-tight">{item.code}</span>
          {copied && <span className="text-[10px] uppercase font-bold tracking-widest text-green-400 animate-pulse bg-green-900/40 px-2 py-0.5 rounded border border-green-500/30">Copied!</span>}
        </div>
      </td>
      <td className="py-6 px-8 border-b border-white/5 text-sm text-gray-400 min-w-[300px] max-w-md whitespace-normal leading-relaxed align-middle">
        {item.rewards}
      </td>
    </tr>
  );
}
