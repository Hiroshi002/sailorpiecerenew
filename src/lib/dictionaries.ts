import { getSiteConfig } from "@/config/site";
import { getGameData } from "@/config/game-data";
import { getUIConfig } from "@/config/ui";

/**
 * Localization Dictionaries
 * 
 * This function now generates the dictionary dynamically to ensure
 * fresh data from JSON configs during development and runtime.
 */

export const getDictionary = () => {
  const siteConfig = getSiteConfig();
  const gameData = getGameData();
  const uiConfig = getUIConfig();

  // Calculate dynamic stats
  let pageCount = 0;
  try {
    if (typeof window === 'undefined') {
      const fs = require('fs');
      const path = require('path');
      const entriesPath = path.join(process.cwd(), 'src', 'app', 'entries');
      if (fs.existsSync(entriesPath)) {
        const getFiles = (dir: string) => {
          const files = fs.readdirSync(dir);
          files.forEach((file: string) => {
            const name = path.join(dir, file);
            if (fs.statSync(name).isDirectory()) {
              getFiles(name);
            } else if (file === 'page.tsx') {
              pageCount++;
            }
          });
        };
        getFiles(entriesPath);
        // Count top-level pages in src/app
        const appPath = path.join(process.cwd(), 'src', 'app');
        const appFiles = fs.readdirSync(appPath);
        appFiles.forEach((file: string) => {
          const fullPath = path.join(appPath, file);
          if (fs.statSync(fullPath).isDirectory() && file !== 'entries' && file !== 'api') {
            if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
              pageCount++;
            }
          }
        });
        // Add root page.tsx
        pageCount++;
      }
    }
  } catch (e) {
    pageCount = 116; // Fallback
  }

  const categoryCount = gameData.navigation.navItems.length;
  
  // Calculate a truly comprehensive searchable count
  let searchableCount = pageCount; // Start with all pages
  
  // Add all Melee styles
  gameData.melees.forEach((tier: any) => {
    searchableCount += tier.items.length;
  });
  
  // Add all Swords
  gameData.swords.forEach((tier: any) => {
    searchableCount += tier.items.length;
  });
  
  // Add all High-value Bosses
  searchableCount += gameData.bosses.highValue.length;
  
  // Add all unique drops from bosses
  const allDrops = new Set();
  gameData.bosses.highValue.forEach((boss: any) => {
    boss.drops.forEach((drop: string) => allDrops.add(drop));
  });
  searchableCount += allDrops.size;

  // Add entries if they exist in gameData
  if (gameData.entries) {
    gameData.entries.forEach((tier: any) => {
      searchableCount += tier.items.length;
    });
  }

  // Add navigation items that might not be pages
  searchableCount += gameData.navigation.navItems.length;
  searchableCount += gameData.navigation.featured.length;
  searchableCount += gameData.navigation.browseItems.length;

  // Build a comprehensive search list for the Header
  const searchListTH: any[] = [];
  const searchListEN: any[] = [];

  // 1. Add Melees
  gameData.melees.forEach((tier: any) => {
    tier.items.forEach((item: any) => {
      searchListTH.push({ title: item.title, type: "หมัด", href: `/entries/${item.slug}` });
      searchListEN.push({ title: item.title, type: "Melee", href: `/entries/${item.slug}` });
    });
  });

  // 2. Add Swords
  gameData.swords.forEach((tier: any) => {
    tier.items.forEach((item: any) => {
      searchListTH.push({ title: item.title, type: "ดาบ", href: `/entries/${item.slug}` });
      searchListEN.push({ title: item.title, type: "Sword", href: `/entries/${item.slug}` });
    });
  });

  // 3. Add Bosses
  gameData.bosses.highValue.forEach((boss: any) => {
    searchListTH.push({ title: boss.name, type: "บอส", href: "/entries/bosses-guide" });
    searchListEN.push({ title: boss.name, type: "Boss", href: "/entries/bosses-guide" });
    
    // Add Locations as searchable
    searchListTH.push({ title: `${boss.name} - ${boss.location}`, type: "สถานที่บอส", href: "/entries/bosses-guide" });
    searchListEN.push({ title: `${boss.name} - ${boss.location}`, type: "Boss Location", href: "/entries/bosses-guide" });

    // Add Drops
    boss.drops.forEach((drop: string) => {
      searchListTH.push({ title: drop, type: "ไอเทมดรอป", href: "/entries/bosses-guide" });
      searchListEN.push({ title: drop, type: "Drop Item", href: "/entries/bosses-guide" });
    });
  });

  // 4. Add Constants/Meta info
  searchListTH.push({ title: `Max Level: ${gameData.constants.maxLevel}`, type: "ข้อมูลระบบ", href: "/" });
  searchListEN.push({ title: `Max Level: ${gameData.constants.maxLevel}`, type: "System Info", href: "/" });
  searchListTH.push({ title: `Max Stat: ${gameData.constants.maxStat}`, type: "ข้อมูลระบบ", href: "/" });
  searchListEN.push({ title: `Max Stat: ${gameData.constants.maxStat}`, type: "System Info", href: "/" });

  // 5. Add all pages from entries directory with deep indexing
  try {
    if (typeof window === 'undefined') {
      const fs = require('fs');
      const path = require('path');
      const entriesPath = path.join(process.cwd(), 'src', 'app', 'entries');
      if (fs.existsSync(entriesPath)) {
        const addPages = (dir: string) => {
          const files = fs.readdirSync(dir);
          files.forEach((file: string) => {
            const name = path.join(dir, file);
            if (fs.statSync(name).isDirectory()) {
              const pageFile = path.join(name, 'page.tsx');
              if (fs.existsSync(pageFile)) {
                const title = file.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                
                // Primary Page Entry
                searchListTH.push({ title, type: "หน้าคู่มือ", href: `/entries/${file}` });
                searchListEN.push({ title, type: "Guide Page", href: `/entries/${file}` });
                
                // Deep Indexing: Add keywords/aliases for search coverage
                searchListTH.push({ title: `${title} Guide`, type: "วิธีหา / คู่มือ", href: `/entries/${file}` });
                searchListEN.push({ title: `${title} Guide`, type: "How to get / Guide", href: `/entries/${file}` });
                
                searchListTH.push({ title: `${title} Location`, type: "สถานที่พบ", href: `/entries/${file}` });
                searchListEN.push({ title: `${title} Location`, type: "Location", href: `/entries/${file}` });
                
                searchListTH.push({ title: `${title} Stats`, type: "สถิติ / พลัง", href: `/entries/${file}` });
                searchListEN.push({ title: `${title} Stats`, type: "Stats / Power", href: `/entries/${file}` });
              }
              addPages(name);
            }
          });
        };
        addPages(entriesPath);
      }
    }
  } catch (e) {}

  const dynamicStats = {
    pagesCount: pageCount.toString(),
    categoriesCount: categoryCount.toString(),
    searchableCount: searchListTH.length.toString(),
  };

  return {
    th: {
      // Basic UI Strings from uiConfig
      ...uiConfig.th.hero,
      stats: {
        ...uiConfig.th.stats,
        ...dynamicStats,
        updated: uiConfig.th.stats.updated,
        date: uiConfig.th.stats.date
      },
      searchList: searchListTH,
      searchPlaceholder: uiConfig.th.search.placeholder,
      home: uiConfig.th.navigation.home,
      codes: uiConfig.th.navigation.codes,
      qaSubtitle: uiConfig.th.navigation.quickAccessDesc,
      qaTitle: uiConfig.th.navigation.quickAccess,
      qaDesc: uiConfig.th.navigation.quickAccessDesc,
      navTitle: uiConfig.th.navigation.allCategories,
      navDesc: uiConfig.th.navigation.allCategoriesDesc,
      browseTitle: uiConfig.th.navigation.browseTitle,
      aboutTitle: uiConfig.th.about.sectionTitle,
      fastAccess: uiConfig.th.navigation.fastAccessTag,
      date: uiConfig.th.stats.date,

      // Dynamic Game Data mapping
      quickItems: gameData.navigation.featured.map(item => ({ 
        id: item.id, title: item.title_th, cat: item.cat_th, img: item.img, href: item.href 
      })),
      navItems: gameData.navigation.navItems.map(item => ({ label: item.label_th, href: item.href })),
      browseItems: gameData.navigation.browseItems.map(item => ({ title: item.title_th, desc: item.desc_th, href: item.href })),

      // About Section
      about1: {
        tag: uiConfig.th.about.card1.tag,
        title: uiConfig.th.about.card1.title,
        desc: uiConfig.th.about.card1.description
      },
      about2: {
        tag: uiConfig.th.about.card2.tag,
        title: uiConfig.th.about.card2.title,
        desc: uiConfig.th.about.card2.description
      },

      // Footer
      footer: uiConfig.th.footer,

      // Directory
      directory: uiConfig.th.directory
    },
    en: {
      // Basic UI Strings from uiConfig
      ...uiConfig.en.hero,
      stats: {
        ...uiConfig.en.stats,
        ...dynamicStats,
        updated: uiConfig.en.stats.updated,
        date: uiConfig.en.stats.date
      },
      searchList: searchListEN,
      searchPlaceholder: uiConfig.en.search.placeholder,
      home: uiConfig.en.navigation.home,
      codes: uiConfig.en.navigation.codes,
      qaSubtitle: uiConfig.en.navigation.quickAccessDesc,
      qaTitle: uiConfig.en.navigation.quickAccess,
      qaDesc: uiConfig.en.navigation.quickAccessDesc,
      navTitle: uiConfig.en.navigation.allCategories,
      navDesc: uiConfig.en.navigation.allCategoriesDesc,
      browseTitle: uiConfig.en.navigation.browseTitle,
      aboutTitle: uiConfig.en.about.sectionTitle,
      fastAccess: uiConfig.en.navigation.fastAccessTag,
      date: uiConfig.en.stats.date,

      // Dynamic Game Data mapping
      quickItems: gameData.navigation.featured.map(item => ({ 
        id: item.id, title: item.title_en, cat: item.cat_en, img: item.img, href: item.href 
      })),
      navItems: gameData.navigation.navItems.map(item => ({ label: item.label_en, href: item.href })),
      browseItems: gameData.navigation.browseItems.map(item => ({ title: item.title_en, desc: item.desc_en, href: item.href })),

      // About Section
      about1: {
        tag: uiConfig.en.about.card1.tag,
        title: uiConfig.en.about.card1.title,
        desc: uiConfig.en.about.card1.description
      },
      about2: {
        tag: uiConfig.en.about.card2.tag,
        title: uiConfig.en.about.card2.title,
        desc: uiConfig.en.about.card2.description
      },

      // Footer
      footer: uiConfig.en.footer,

      // Directory
      directory: uiConfig.en.directory
    }
  };
};
