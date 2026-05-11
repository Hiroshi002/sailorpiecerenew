import { getRuntimeConfig } from "@/lib/config-loader";

const DEFAULT_SITE_CONFIG = {
  name: "Sailor Piece Wiki",
  shortName: "Sailor Wiki",
  description: "ศูนย์รวมคู่มือ ข้อมูลบอส อาวุธ และระบบต่างๆ ของเกม Sailor Piece",
  url: "https://sailor-piece-wiki.vercel.app",
  ogImage: "/images/site/sailorpiece-wiki-cover-v2.webp",
  links: {
    roblox: "https://www.roblox.com/games/your-game-id",
    discord: "https://discord.gg/your-discord-link",
    trello: "https://trello.com/b/your-trello-link",
    youtube: "https://youtube.com/@your-channel",
  },
  author: "Sailor Piece Community",
  keywords: [
    "Sailor Piece",
    "Roblox",
    "Wiki",
    "Guide",
    "Sea 2",
    "Ancient Fragments",
    "Boss Rush",
    "Infinite Tower",
  ],
  version: "1.0.0",
  lastUpdated: "2026-05-12",
  theme: {
    colors: {
      primary: "#ff1e38",
      secondary: "#ffb800",
      background: "#050505",
      panel: "rgba(15, 15, 15, 0.85)",
      border: "rgba(255, 30, 56, 0.4)",
    },
    animations: {
      transitionDuration: "300ms",
      hoverScale: "1.05",
      pulseSpeed: "4s",
    },
    layout: {
      maxWidth: "1400px",
      containerPadding: "1.5rem",
      borderRadius: "0px",
    }
  },
  nav: {
    main: [
      { title: "Home", href: "/" },
      { title: "Sea 2", href: "/sea-2" },
      { title: "Melees", href: "/melees" },
      { title: "Weapons", href: "/weapons" },
      { title: "Codes", href: "/entries/codes-overview" },
    ],
    footer: [
      { title: "About", href: "/about" },
      { title: "Directory", href: "/directory" },
      { title: "Changelog", href: "/changelog" },
      { title: "Contact", href: "/contact" },
      { title: "Privacy", href: "/privacy-policy" },
      { title: "Terms", href: "/terms" },
    ]
  }
};

// Use a function to get the config to ensure fresh data during dev
export const getSiteConfig = () => getRuntimeConfig("site", DEFAULT_SITE_CONFIG);

export type SiteConfig = typeof DEFAULT_SITE_CONFIG;
