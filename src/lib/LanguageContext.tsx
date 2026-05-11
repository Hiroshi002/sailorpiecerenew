"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getDictionary } from "./dictionaries";

type Language = "th" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: any; // Using any for simplicity with the current DICT structure
  siteConfig: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ 
  children,
  initialDictionary,
  initialSiteConfig
}: { 
  children: React.ReactNode,
  initialDictionary: any,
  initialSiteConfig: any
}) {
  const [lang, setLangState] = useState<Language>("en");
  const [dictionary, setDictionary] = useState(initialDictionary);
  const [siteConfig, setSiteConfig] = useState(initialSiteConfig);

  // Auto-sync config from API to allow updates without refresh
  useEffect(() => {
    const syncConfig = async () => {
      try {
        const res = await fetch('/api/config', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          setSiteConfig(data.siteConfig);
          setDictionary(data.dictionary);
        }
      } catch (err) {
        console.error("[LanguageProvider] Sync failed:", err);
      }
    };

    // Initial sync
    syncConfig();

    // Poll every 3 seconds for changes (only in browser)
    const interval = setInterval(syncConfig, 3000);
    return () => clearInterval(interval);
  }, []);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "th")) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = dictionary[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, siteConfig }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
