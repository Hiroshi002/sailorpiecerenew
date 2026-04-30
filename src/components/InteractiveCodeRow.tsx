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
    <tr className={used ? "opacity-50 line-through decoration-white/20" : "hover:bg-[var(--bg-glass)] transition-colors"}>
      <td className="p-6 border-b border-[var(--border-subtle)] align-top w-28">
        <label className="flex items-center gap-3 cursor-pointer text-xs text-[var(--text-secondary)] group">
          <input 
            type="checkbox" 
            checked={used} 
            onChange={(e) => setUsed(e.target.checked)} 
            className="w-4 h-4 accent-[var(--accent-azure)] cursor-pointer"
          />
          <span className="group-hover:text-white transition-colors uppercase font-bold tracking-wider">Used</span>
        </label>
      </td>
      <td 
        className={`font-black p-6 border-b border-[var(--border-subtle)] cursor-pointer ${copied ? 'text-green-400' : 'text-white'} hover:text-[var(--accent-azure)] transition-all`} 
        onClick={handleCopy}
        title="Click to copy"
      >
        <div className="flex items-center gap-3">
          {item.code}
          {copied && <span className="text-[10px] uppercase tracking-wider text-green-400 animate-pulse bg-green-900/40 px-2 py-0.5 rounded">Copied!</span>}
        </div>
      </td>
      <td className="p-6 border-b border-[var(--border-subtle)] text-sm text-[var(--text-secondary)] min-w-[200px]">
        {item.rewards}
      </td>
    </tr>
  );
}
