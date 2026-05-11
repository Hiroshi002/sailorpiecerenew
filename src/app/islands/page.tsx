"use client";
import { getSiteConfig } from "@/config/site";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Info,
  Star,
  Users,
  Swords,
  Navigation,
  MapPin,
  Compass,
  Shield,
  ChevronRight,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Island button data (grid selectors)                                */
/* ------------------------------------------------------------------ */

interface IslandButton {
  id: string;
  stage: string;
  name: string;
  tag: string;
}

const sea1Islands: IslandButton[] = [
  { id: "starter-island", stage: "Early game", name: "Starter Island", tag: "Where every journey begins" },
  { id: "jungle-island", stage: "Early game", name: "Jungle Island", tag: "Danger hides beneath the canopy" },
  { id: "desert-island", stage: "Early to mid game", name: "Desert Island", tag: "Scorching sands and hidden trainers" },
  { id: "snow-island", stage: "Mid game", name: "Snow Island", tag: "Artifacts, upgrades, and colder enemies" },
  { id: "sailor-island", stage: "All stages", name: "Sailor Island", tag: "Your main utility hub" },
  { id: "world-island", stage: "Late game", name: "World Island", tag: "Lost Fragments handoff into Sea 2" },
  { id: "easter-island", stage: "Event / late game", name: "Easter Island", tag: "Seasonal event hub with boss and quest overlap" },
  { id: "shibuya-station", stage: "Mid to late game", name: "Shibuya Station", tag: "Dense upgrades and key overlap" },
  { id: "hollow-island", stage: "Late game", name: "Hollow Island", tag: "Late-game Aizen and fragment route" },
  { id: "boss-island", stage: "Late to endgame", name: "Boss Island", tag: "Summons, tickets, and top-end unlocks" },
  { id: "dungeon-island", stage: "Mid to late game", name: "Dungeon Island", tag: "Shadow routes and dungeon unlocks" },
  { id: "shinjuku-island", stage: "Late game", name: "Shinjuku Island", tag: "High-density cursed conflict" },
  { id: "slime-island", stage: "Late game", name: "Slime Island", tag: "Puzzle route and stat scaling" },
  { id: "academy-island", stage: "Endgame", name: "Academy Island", tag: "Training grounds for future legends" },
  { id: "judgement-island", stage: "Endgame", name: "Judgement Island", tag: "Where truth and fate collide" },
  { id: "soul-dominion", stage: "Very late game", name: "Soul Dominion", tag: "A realm ruled by lost spirits" },
  { id: "ninja-island", stage: "Very late game", name: "Ninja Island", tag: "Silent blades, hidden danger" },
  { id: "lawless-island", stage: "Very late game", name: "Lawless Island", tag: "No rules, no mercy, only chaos" },
  { id: "tower-island", stage: "Endgame", name: "Tower Island", tag: "Rise higher, survive longer" },
  { id: "valentine-island", stage: "Late game", name: "Valentine Island", tag: "A high-cost pink endgame route" },
];

const sea2Islands: IslandButton[] = [
  { id: "world-island-sea-2", stage: "Sea 2 entry", name: "World Island Sea 2", tag: "The gateway between seas" },
  { id: "starter-island-sea-2", stage: "Early Sea 2", name: "Starter Island Sea 2", tag: "First farming stop in the new sea" },
  { id: "bizarre-island", stage: "Mid Sea 2", name: "Bizarre Island", tag: "Where Sea 2 systems start branching wider" },
  { id: "punch-island", stage: "Late Sea 2", name: "Punch Island", tag: "The heaviest current Sea 2 combat hub" },
];

/* ------------------------------------------------------------------ */
/*  Detailed island panel data                                         */
/* ------------------------------------------------------------------ */

interface IslandDetail {
  name: string;
  tag: string;
  stage: string;
  rarity: string;
  npcs: string[];
  bosses: string[];
  focus: string;
  why: string[];
  links: { title: string; href: string; desc: string }[];
}

const islandData: Record<string, IslandDetail> = {
  "starter-island": {
    name: "Starter Island",
    tag: "Where every journey begins",
    stage: "Early game",
    rarity: "Opening route",
    npcs: ["Katana Seller", "Starter quest routes"],
    bosses: ["No major tracked boss route"],
    focus: "Bandits and low-level starter enemies.",
    why: [
      "First weapon pickup and one of the earliest portal stops.",
      "One of the hidden collection spots for the Slime Puzzle and Dungeon Piece route.",
    ],
    links: [
      { title: "Katana", href: "/entries/katana", desc: "Starter sword route sold here." },
      { title: "Slime Puzzle", href: "/entries/slime-puzzle", desc: "One slime pickup starts here." },
      { title: "Dungeon Pieces", href: "/entries/dungeon-pieces", desc: "One hidden Dungeon Piece starts here too." },
    ],
  },
  "jungle-island": {
    name: "Jungle Island",
    tag: "Danger hides beneath the canopy",
    stage: "Early game",
    rarity: "Early route",
    npcs: ["General progression and farming routes"],
    bosses: ["No major tracked boss route"],
    focus: "Early jungle enemies and one of the first places where Iron-tier progression begins to show up.",
    why: [
      "Useful bridge island before Desert and Snow routes open properly.",
      "Contains hidden collection spots used by both Slime Puzzle and Dungeon Piece routes.",
    ],
    links: [
      { title: "Materials Overview", href: "/entries/material-sourcing", desc: "See which farming mats start appearing from Jungle and above." },
      { title: "Slime Puzzle", href: "/entries/slime-puzzle", desc: "One slime spot is on the watchtower here." },
      { title: "Dungeon Pieces", href: "/entries/dungeon-pieces", desc: "One hidden Dungeon Piece is tucked into the shoreline route." },
    ],
  },
  "desert-island": {
    name: "Desert Island",
    tag: "Scorching sands and hidden trainers",
    stage: "Early to mid game",
    rarity: "Bridge route",
    npcs: ["Observation Haki Trainer"],
    bosses: ["No major tracked boss route"],
    focus: "Desert enemies plus the first stronger material step after Jungle.",
    why: [
      "Important Haki stop because Observation Haki is tied to this island.",
      "Another fixed collection island for slime, dungeon, and fragment routes.",
    ],
    links: [
      { title: "Haki", href: "/entries/haki-guide", desc: "Observation Haki unlock notes and cost are tied here." },
      { title: "Materials Overview", href: "/entries/material-sourcing", desc: "Obsidian and higher-tier farming starts ramping after Desert." },
      { title: "Dungeon Pieces", href: "/entries/dungeon-pieces", desc: "One hidden Dungeon Piece is near the larger pyramid." },
    ],
  },
  "snow-island": {
    name: "Snow Island",
    tag: "Artifacts, upgrades, and colder enemies",
    stage: "Mid game",
    rarity: "2,500+ for Artifacts",
    npcs: ["Artifact NPC", "Artifact Milestone NPC", "Dark Blade Seller", "Armament Haki Trainer", "Dragon Slayer Seller"],
    bosses: ["No major natural boss route"],
    focus: "Snow enemies and multiple hidden collection points.",
    why: [
      "Main artifact unlock island and one of the biggest mid-game account power spikes.",
      "Important stop for Dark Blade, early blessing mats, and multiple hidden fragment routes.",
    ],
    links: [
      { title: "Artifacts", href: "/entries/artifacts-overview", desc: "Artifact unlock, set tiers, dust, and milestone rewards." },
      { title: "Dark Blade", href: "/entries/dark-blade", desc: "One of the first major sword upgrades is sold here." },
      { title: "Haki", href: "/entries/haki-guide", desc: "Armament Haki route is tied to Snow Island." },
    ],
  },
  "sailor-island": {
    name: "Sailor Island",
    tag: "Your main utility hub",
    stage: "All stages",
    rarity: "Always relevant",
    npcs: ["Coin Fruit Dealer", "Gems Fruit Dealer", "Ascensions NPC", "Trait Master", "Stat Reroll NPC", "Boss Rush NPC", "Jinwoo Trainer", "Alucard Trainer"],
    bosses: ["Jinwoo", "Alucard", "Boss Rush route"],
    focus: "Utility-focused island rather than a normal farming map.",
    why: [
      "Best repeat-visit hub for fruits, rerolls, traits, ascension, and Boss Rush entry.",
      "Even late-game players keep coming back here because the utility density is so high.",
    ],
    links: [
      { title: "Sailor Island", href: "/entries/sailor-island", desc: "Dedicated page for the main Sailor Island utility routes." },
      { title: "Fruit Dealers", href: "/entries/fruit-dealers", desc: "Both fruit dealer NPCs are here." },
      { title: "Ascensions", href: "/entries/ascensions", desc: "Ascension tiers and gates are handled here." },
      { title: "Boss Rush", href: "/entries/boss-rush", desc: "Rush Keys, Escanor, and Rush Coin routes start here." },
    ],
  },
  "world-island": {
    name: "World Island",
    tag: "Lost Fragments handoff into Sea 2",
    stage: "Late game",
    rarity: "Sea 2 unlock route",
    npcs: ["Lost Fragments quest route", "Cartographer NPC"],
    bosses: ["No dedicated boss farm", "Sea 2 unlock handoff"],
    focus: "Unlock-focused route island rather than a normal long farming stop.",
    why: [
      "Main Sea 1 handoff into Sea 2 through the Lost Fragments route, the 2 Ancient Fragments requirement, and the 7 Map Pieces turn-in.",
      "You return here at the very end of the unlock chain to use the Cartographer NPC and move into Sea 2.",
    ],
    links: [
      { title: "Sea 2 Guide", href: "/sea-2", desc: "Ancient Fragments, Map Pieces, and the full Sea 2 unlock route start here." },
      { title: "Great Mage", href: "/entries/great-mage-style", desc: "One of the current late Sea 1 event routes overlaps with the Sea 2 handoff era." },
    ],
  },
  "easter-island": {
    name: "Easter Island",
    tag: "Seasonal event hub with boss and quest overlap",
    stage: "Event / late game",
    rarity: "Event route",
    npcs: ["Bunny NPC", "Easter Shop"],
    bosses: ["Great Mage Boss"],
    focus: "Event eggs, keys, and Easter farming routes instead of a normal permanent mob grind.",
    why: [
      "Main Sea 1 event island for the Easter Egg Hunt and the Great Mage weapon route.",
      "Worth revisiting for the Easter shop fallback path even if you are not only farming the boss drop route.",
    ],
    links: [
      { title: "Easter Egg Hunt", href: "/entries/easter-egg-hunt", desc: "Official 7-egg event quest, hidden eggs, timed eggs, and boss eggs." },
      { title: "Great Mage", href: "/entries/great-mage-style", desc: "Event weapon route, normalized boss drops, and Easter shop fallback." },
    ],
  },
  "shibuya-station": {
    name: "Shibuya Station",
    tag: "Dense upgrades and key overlap",
    stage: "Mid to late game",
    rarity: "Major mid-game hub",
    npcs: ["Yuji Trainer", "Gojo Trainer", "Sukuna Trainer", "Enchanter NPC", "Conqueror Haki route"],
    bosses: ["Gojo", "Sukuna"],
    focus: "High-density curse enemies and strong key-material overlap.",
    why: [
      "One of the busiest upgrade islands because enchants, Haki progress, melee trainers, and boss routes stack together here.",
      "Strong Dungeon Key and reroll overlap compared with simpler mid-game zones.",
    ],
    links: [
      { title: "Enchanting Accessories", href: "/entries/enchanting-accessories", desc: "Accessory enchant ladder and E1 to E10 route." },
      { title: "Haki", href: "/entries/haki-guide", desc: "Conqueror route overlaps with Shibuya Station." },
      { title: "Gojo", href: "/entries/gojo-style", desc: "Trainer and boss route page." },
      { title: "Sukuna", href: "/entries/sukuna-style", desc: "Trainer and boss route page." },
    ],
  },
  "hollow-island": {
    name: "Hollow Island",
    tag: "Late-game Aizen and fragment route",
    stage: "Late game",
    rarity: "About 8,500+ for Hogyoku route",
    npcs: ["Manipulator Trainer", "Ichigo Seller", "Hogyoku Quest NPC"],
    bosses: ["Aizen"],
    focus: "Late-game hollow enemies with key fragment and transmutation overlap.",
    why: [
      "Main route for Aizen, Manipulator Sword, Ichigo seller progression, and Hogyoku Fragment progress.",
      "One of the strongest Dungeon Key and late material islands before Soul Dominion.",
    ],
    links: [
      { title: "Manipulator Sword", href: "/entries/manipulator-sword", desc: "Trainer sword route tied here." },
      { title: "Ichigo", href: "/entries/ichigo", desc: "Seller route and Boss Ticket shortcut." },
      { title: "Hogyoku Fragments", href: "/entries/hogyoku-fragments", desc: "Questline that leads toward Soul Dominion." },
      { title: "Bosses", href: "/entries/bosses-guide", desc: "Aizen boss data and drop routes." },
    ],
  },
  "boss-island": {
    name: "Boss Island",
    tag: "Summons, tickets, and top-end unlocks",
    stage: "Late to endgame",
    rarity: "Major endgame hub",
    npcs: ["Boss Summoner", "Boss Exchange", "Gilgamesh Trainer", "Moon Slayer Trainer", "Ice Queen Seller", "Saber Alter Trainer", "Blessed Maiden Trainer"],
    bosses: ["Saber", "Gilgamesh", "Qin Shi", "Ice Queen", "Moon Slayer", "Blessed Maiden", "Corrupted Knight"],
    focus: "Boss-focused island with summon costs rather than normal mob loops.",
    why: [
      "Most of the biggest title-gated weapon and melee unlocks converge here.",
      "Boss Tickets, summon materials, and major late-game fashion or title routes all overlap on this island.",
    ],
    links: [
      { title: "Bosses", href: "/entries/bosses-guide", desc: "Boss Island summon sheet and high-value drops." },
      { title: "Ice Queen", href: "/entries/ice-queen", desc: "Current top sword route." },
      { title: "Gilgamesh", href: "/entries/gilgamesh-style", desc: "Strong AoE fighting style route." },
      { title: "Moon Slayer", href: "/entries/moon-slayer-style", desc: "One of the best melee finishers." },
    ],
  },
  "dungeon-island": {
    name: "Dungeon Island",
    tag: "Shadow routes and dungeon unlocks",
    stage: "Mid to late game",
    rarity: "5,000+ to unlock dungeons",
    npcs: ["Dungeon Master", "Shadow NPC", "Shadow Monarch NPC"],
    bosses: ["Dungeon waves", "Shadow route overlap"],
    focus: "Dungeon waves plus Shadow and Double Dungeon progression routes.",
    why: [
      "Core unlock island for Rune Dungeon, Shadow Dungeon, and Double Dungeon.",
      "Also the home of Shadow and Shadow Monarch progression.",
    ],
    links: [
      { title: "Dungeons", href: "/entries/dungeons-overview", desc: "Dungeon unlock flow, keys, and dungeon types." },
      { title: "Dungeon Pieces", href: "/entries/dungeon-pieces", desc: "Six hidden pieces needed for the unlock route." },
      { title: "Shadow", href: "/entries/shadow", desc: "Base CID weapon route starts here." },
      { title: "Shadow Monarch", href: "/entries/shadow-monarch", desc: "Upgraded dungeon-linked sword route." },
    ],
  },
  "shinjuku-island": {
    name: "Shinjuku Island",
    tag: "High-density cursed conflict",
    stage: "Late game",
    rarity: "Late-game farm route",
    npcs: ["Strongest in History Trainer", "Strongest of Today Trainer"],
    bosses: ["Strongest in History", "Strongest of Today"],
    focus: "Dense cursed enemies and one of the fastest published Rush Key farm areas.",
    why: [
      "Important for top melee routes and one of the better density-based farm loops.",
      "Strong overlap with Boss Rush key farming when you just need fast kills.",
    ],
    links: [
      { title: "Strongest in History", href: "/entries/strongest-in-history-style", desc: "Late-game trainer route on this island." },
      { title: "Strongest of Today", href: "/entries/strongest-of-today-style", desc: "Consume-based melee route tied here." },
      { title: "Boss Rush", href: "/entries/boss-rush", desc: "Rush Key farming notes reference this island heavily." },
    ],
  },
  "slime-island": {
    name: "Slime Island",
    tag: "Puzzle route and stat scaling",
    stage: "Late game",
    rarity: "7,000+ for Skill Tree",
    npcs: ["Skill Tree NPC", "Slime Key Crafter", "Rimuru Seller"],
    bosses: ["Rimuru"],
    focus: "Slime enemies plus puzzle-linked collection paths.",
    why: [
      "Main route for Skill Tree unlocks, Slime Puzzle progress, and the Rimuru sword line.",
      "One of the best examples of one island feeding both a fixed collectible route and a late-game boss grind.",
    ],
    links: [
      { title: "Skill Tree", href: "/entries/skill-tree-guide", desc: "Account-wide stat tree unlocked here." },
      { title: "Slime Puzzle", href: "/entries/slime-puzzle", desc: "Hidden collectible route that opens the broader slime path." },
      { title: "Rimuru", href: "/entries/rimuru", desc: "Late-game sword route tied to this island." },
    ],
  },
  "academy-island": {
    name: "Academy Island",
    tag: "Training grounds for future legends",
    stage: "Endgame",
    rarity: "Endgame route",
    npcs: ["Anos Trainer"],
    bosses: ["Anos route overlap"],
    focus: "High-end academy enemies and Anos progression overlap.",
    why: [
      "Mainly known for the Anos route and its heavy scaling requirements.",
      "Acts more like a focused trainer island than a broad system hub.",
    ],
    links: [
      { title: "Anos", href: "/entries/anos-style", desc: "Trainer route and endgame melee guide." },
      { title: "Bosses", href: "/entries/bosses-guide", desc: "Cross-check boss-linked drop overlap around Academy progression." },
    ],
  },
  "judgement-island": {
    name: "Judgement Island",
    tag: "Where truth and fate collide",
    stage: "Endgame",
    rarity: "10,000+ for Spec Passives",
    npcs: ["Spec Passive NPC", "Yamato Seller"],
    bosses: ["Yamato Boss"],
    focus: "Late-game Judgement enemies with passive and Yamato overlap.",
    why: [
      "Main home of Spec Passives and one of the biggest jump points for account scaling.",
      "Also ties directly into the Yamato sword line and related title route.",
    ],
    links: [
      { title: "Spec Passives", href: "/entries/spec-passives-overview", desc: "Passive rerolls and rarity odds tied here." },
      { title: "Yamato", href: "/entries/yamato", desc: "Judgement Island sword route." },
      { title: "Bosses", href: "/entries/bosses-guide", desc: "Yamato boss data and drops." },
    ],
  },
  "soul-dominion": {
    name: "Soul Dominion",
    tag: "A realm ruled by lost spirits",
    stage: "Very late game",
    rarity: "After Hogyoku unlock route",
    npcs: ["True Aizen NPC"],
    bosses: ["True Aizen Boss"],
    focus: "Quincy enemies and the final Aizen upgrade material routes.",
    why: [
      "Final stretch of the Aizen line after the Hollow Island Hogyoku route is complete.",
      "Much more of a focused endgame upgrade area than a general-purpose island.",
    ],
    links: [
      { title: "True Aizen", href: "/entries/true-aizen", desc: "Final sword upgrade route based here." },
      { title: "Hogyoku Fragments", href: "/entries/hogyoku-fragments", desc: "Prerequisite route that unlocks Soul Dominion." },
      { title: "Bosses", href: "/entries/bosses-guide", desc: "True Aizen boss drops and route notes." },
    ],
  },
  "ninja-island": {
    name: "Ninja Island",
    tag: "Silent blades, hidden danger",
    stage: "Very late game",
    rarity: "Top-end grind route",
    npcs: ["Strongest Shinobi Trainer"],
    bosses: ["Strongest Shinobi Boss"],
    focus: "Late-game ninja enemies used for some of the best artifact and material loops.",
    why: [
      "One of the main high-end material farms once you move into the strongest melee and artifact routes.",
      "Strongest Shinobi and multiple artifact paths depend on being comfortable here.",
    ],
    links: [
      { title: "Strongest Shinobi", href: "/entries/strongest-shinobi-style", desc: "Main trainer and boss route for this island." },
      { title: "Artifacts", href: "/entries/artifacts-overview", desc: "Multiple high-end artifact routes point back to Ninja farming." },
      { title: "Bosses", href: "/entries/bosses-guide", desc: "Strongest Shinobi boss data and drops." },
    ],
  },
  "lawless-island": {
    name: "Lawless Island",
    tag: "No rules, no mercy, only chaos",
    stage: "Very late game",
    rarity: "11,500+ for Powers",
    npcs: ["Power Master", "Atomic NPC"],
    bosses: ["Atomic Boss"],
    focus: "Arena Fighters and other late-game enemies that feed multiple shard and weapon routes.",
    why: [
      "Main island for the Power System and one of the biggest pure endgame damage jumps in the game.",
      "Atomic, power rerolls, and late artifact farming all converge here.",
    ],
    links: [
      { title: "Power System", href: "/entries/power-system-overview", desc: "Late-game passive system unlocked here." },
      { title: "Atomic", href: "/entries/atomic", desc: "CID V2 endgame sword route." },
      { title: "Artifacts", href: "/entries/artifacts-overview", desc: "Artifact farming notes reference Lawless heavily." },
    ],
  },
  "tower-island": {
    name: "Tower Island",
    tag: "Rise higher, survive longer",
    stage: "Endgame",
    rarity: "Endgame tower route",
    npcs: ["Tower entrance", "Tower Shop"],
    bosses: ["Infinite Tower scaling floors"],
    focus: "Scaling tower floors, tower debuffs, and token farming routes.",
    why: [
      "Main route for Infinite Tower, Tower Tokens, and Abyssal Empress.",
      "Also one of the few places where secret rune farming has its own dedicated endgame identity.",
    ],
    links: [
      { title: "Infinite Tower", href: "/entries/infinite-tower", desc: "Tower rules, tokens, upgrades, and rune farming." },
      { title: "Abyssal Empress", href: "/entries/abyssal-empress", desc: "Tower-token sword route." },
      { title: "Runes", href: "/entries/runes-overview", desc: "Secret rune notes connect back to Tower Island." },
    ],
  },
  "valentine-island": {
    name: "Valentine Island",
    tag: "A high-cost pink endgame route",
    stage: "Late game",
    rarity: "Late-game boss route",
    npcs: ["Madoka Trainer"],
    bosses: ["Madoka"],
    focus: "Valentine enemies and one of the heavier heart-based boss grinds.",
    why: [
      "Main route for Madoka and the heart-heavy accessory and title overlap around that boss.",
      "Not as broad as Boss Island, but still a meaningful late-game stop.",
    ],
    links: [
      { title: "Madoka", href: "/entries/madoka-style", desc: "Valentine Island fighting style route." },
      { title: "Bosses", href: "/entries/bosses-guide", desc: "Madoka boss data and title/drop notes." },
    ],
  },
  /* ---- Sea 2 ---- */
  "world-island-sea-2": {
    name: "World Island Sea 2",
    tag: "The gateway between seas",
    stage: "Sea 2 entry",
    rarity: "First Sea 2 stop",
    npcs: ["Sea 2 travel handoff routes"],
    bosses: ["No major tracked boss route"],
    focus: "Transition route between the Sea 2 landing point and the first real farming islands.",
    why: [
      "Acts as the Sea 2 landing point before the starter farming islands branch outward.",
      "Best treated as the new-sea anchor rather than a deep standalone grind island.",
    ],
    links: [
      { title: "Sea 2 Guide", href: "/sea-2", desc: "Full Sea 2 unlock, island, boss, and sea-beast overview." },
    ],
  },
  "starter-island-sea-2": {
    name: "Starter Island Sea 2",
    tag: "First farming stop in the new sea",
    stage: "Early Sea 2",
    rarity: "12,750+ routes",
    npcs: ["Delinquent route", "Strong Fighter route", "First Sea 2 quest path"],
    bosses: ["No dedicated tracked boss route"],
    focus: "Delinquent [Lv. 12750] and Strong Fighter [Lv. 13000] are the first confirmed Sea 2 relic-part routes.",
    why: [
      "First practical Sea 2 grind island once the unlock is complete.",
      "Relic Part #1 and #2 drop from Delinquent here, while Relic Part #3 and #4 drop from Strong Fighter.",
    ],
    links: [
      { title: "Relics", href: "/entries/relics-system", desc: "Relic Part #1 to #4 route and the Relic Crafter overview." },
      { title: "Sea 2 Guide", href: "/sea-2", desc: "Open the full Sea 2 route page for the broader island chain." },
    ],
  },
  "bizarre-island": {
    name: "Bizarre Island",
    tag: "Where Sea 2 systems start branching wider",
    stage: "Mid Sea 2",
    rarity: "13,500+ routes",
    npcs: ["Relic Crafter NPC", "The World route overlap"],
    bosses: ["The World Boss route"],
    focus: "Strong Bandit [Lv. 13500] and the Bizarre Island NPC routes feed Dominion Brand, Relic Parts, and newer Sea 2 progression items.",
    why: [
      "Main island for the Relic Crafter and one of the clearest Sea 2 material hubs right now.",
      "Dominion Brand is currently tracked here, which ties Bizarre Island directly into The World progression.",
    ],
    links: [
      { title: "Relics", href: "/entries/relics-system", desc: "Relic Crafter route and the Part #5 and #6 enemy drops." },
      { title: "The World", href: "/entries/the-world-style", desc: "Dominion Brand overlap, The World boss route, and mastery tracker." },
      { title: "Materials Overview", href: "/entries/material-sourcing", desc: "Sea 2 material routing notes now point back into Bizarre Island." },
    ],
  },
  "punch-island": {
    name: "Punch Island",
    tag: "The heaviest current Sea 2 combat hub",
    stage: "Late Sea 2",
    rarity: "Quest 23: 14500 to 99999",
    npcs: ["Cosmic Being NPC", "Cosmic Master NPC", "Quest 23 route"],
    bosses: ["Garou / Cosmic Being world boss"],
    focus: "Fast Ninja [Lv. 14500], the visible Quest 23 route, and the Garou world boss all overlap here.",
    why: [
      "Punch Island is the main current Sea 2 combat hub because Cosmic Being, relic parts, and the visible Quest 23 gate all point back here.",
      "Current notes place Garou in the middle of Punch Island, the Cosmic Being NPC on top of a building, and the Cosmic Master at the back building.",
    ],
    links: [
      { title: "Cosmic Being", href: "/entries/cosmic-being-style", desc: "Garou boss route, direct unlock note, and the confirmed F-move mastery steps." },
      { title: "Relics", href: "/entries/relics-system", desc: "Relic Part #7 and #8 are currently tracked from Fast Ninja here." },
      { title: "Sea 2 Guide", href: "/sea-2", desc: "Full Sea 2 island, sea-beast, and route summary." },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  FAQ data                                                           */
/* ------------------------------------------------------------------ */
const faqItems = [
  {
    q: "What is this islands page for?",
    a: "It is a quick map-style browse page for seeing what each island is mainly used for, which NPCs or bosses matter there, and which related guides you should open next.",
  },
  {
    q: "Does this page include Sea 2 islands too?",
    a: "Yes. The island hub now includes the currently confirmed Sea 2 island set as a separate section, while the deeper unlock chain and Ancient Fragments route still live on the dedicated Sea 2 page.",
  },
  {
    q: "Are the listed levels exact unlock requirements?",
    a: "No. The page uses practical visit-stage guidance unless a system has a clearly published level gate, so it works better as route advice than as a strict unlock list.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function IslandsPage() {
  const [activeIsland, setActiveIsland] = useState("starter-island");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const island = islandData[activeIsland] || islandData["starter-island"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950">
      {/* GLOBAL BACKGROUND */}
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
          <span className="text-gray-300">All Islands and Map</span>
        </div>

        {/* ─── Hero ─── */}
        <section className="mb-16">
          <div className="panel-action clip-diagonal p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-red)] opacity-[0.04] blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.2)]">
                Site Page
              </div>
              <h1
                className="text-5xl md:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tight"
                style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}
              >
                All Islands and Map
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-6 bg-black/40 py-4">
                Interactive island hub for current Sailor Piece Sea 1 and Sea 2 areas, with progression stage, major NPCs, bosses, event hubs, and related routes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-1 bg-[var(--accent-red)]/20 border border-[var(--accent-red)]/50 text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest rounded-sm">Site</span>
                <span className="px-4 py-1 bg-blue-900/40 border border-blue-500/50 text-blue-300 text-xs font-bold uppercase tracking-widest rounded-sm">Sea 1 + Sea 2</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Overview facts ─── */}
        <section className="mb-16">
          <div className="panel-action clip-diagonal p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-premium-wrapper">
                <Info className="w-8 h-8 text-blue-400 icon-glow-blue transition-all" />
              </div>
              <h2 className="text-2xl font-black text-white text-kinetic uppercase tracking-wide">Overview</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
              <li className="flex gap-3">
                <span className="text-[var(--accent-red)] font-bold mt-0.5">•</span>
                <span>This page groups both Sea 1 and the currently confirmed Sea 2 islands into one browseable island hub instead of splitting the basic map view too aggressively.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold mt-0.5">•</span>
                <span>Sea 1 still keeps the classic progression route, event islands, and the World Island handoff into Sea 2, while Sea 2 keeps the newer island routes together in their own section.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">•</span>
                <span>Use it like the in-game teleport board: click one island, then check the main NPCs, important bosses, progression systems, and follow-up pages tied to that area.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--accent-gold)] font-bold mt-0.5">•</span>
                <span>Some islands have direct dedicated wiki pages already, while others are covered through linked weapon, melee, boss, dungeon, or system routes.</span>
              </li>
            </ul>
          </div>

          {/* ─── Interactive Explorer ─── */}
          <div className="panel-action clip-diagonal p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="icon-premium-wrapper">
                <Compass className="w-7 h-7 text-[var(--accent-gold)] icon-glow-gold" />
              </div>
              <div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Interactive Map</span>
                <h2 className="text-2xl font-black text-white text-kinetic uppercase tracking-wide">Click an island to open its route summary</h2>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-8 max-w-3xl leading-relaxed">
              Use this like the in-game teleport board. Pick a Sea 1 or Sea 2 island, then check the main NPCs, important bosses, best use case, and the next wiki pages you should open from that area. The deeper Sea 2 unlock chain, Ancient Fragments route, and sea-beast coverage still live on the{" "}
              <Link href="/sea-2" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">Sea 2 Guide</Link>
              , but the islands hub now keeps the actual island layout together in one place.
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-8">
            {/* Left: Island selectors */}
            <div className="xl:w-[45%] space-y-12">
              {/* Sea 1 */}
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-3">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Island Cluster</span>
                  <h3 className="text-2xl font-black text-white text-kinetic italic">Sea 1 Islands</h3>
                  <p className="text-xs text-gray-500 mt-1">Classic progression islands, event hubs, and the World Island handoff into Sea 2.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sea1Islands.map((is) => (
                    <button
                      key={is.id}
                      onClick={() => setActiveIsland(is.id)}
                      className={`p-4 text-left clip-diagonal border transition-all duration-200 group relative overflow-hidden ${
                        activeIsland === is.id
                          ? "bg-[var(--accent-red)]/20 border-[var(--accent-red)] shadow-[0_0_20px_rgba(255,30,56,0.15)]"
                          : "bg-white/[0.03] border-white/10 hover:border-white/30 hover:bg-white/[0.06]"
                      }`}
                    >
                      {activeIsland === is.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-red)]/10 to-transparent pointer-events-none" />
                      )}
                      <div className="relative z-10">
                        <div className="text-[9px] text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors font-bold">{is.stage}</div>
                        <div className="text-base font-black text-white mt-0.5">{is.name}</div>
                        <div className="text-[10px] text-gray-500 italic mt-1 line-clamp-1">{is.tag}</div>
                      </div>
                      {activeIsland === is.id && (
                        <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--accent-red)] opacity-60" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sea 2 */}
              <div className="space-y-6">
                <div className="border-b border-blue-500/20 pb-3">
                  <span className="text-[10px] text-blue-400/60 uppercase tracking-widest font-black">Island Cluster</span>
                  <h3 className="text-2xl font-black text-white text-kinetic italic">Sea 2 Islands</h3>
                  <p className="text-xs text-gray-500 mt-1">Currently confirmed new-sea islands, route hubs, and the systems that now sit on them.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sea2Islands.map((is) => (
                    <button
                      key={is.id}
                      onClick={() => setActiveIsland(is.id)}
                      className={`p-4 text-left clip-diagonal border transition-all duration-200 group relative overflow-hidden ${
                        activeIsland === is.id
                          ? "bg-blue-900/30 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                          : "bg-white/[0.03] border-white/10 hover:border-white/30 hover:bg-white/[0.06]"
                      }`}
                    >
                      {activeIsland === is.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none" />
                      )}
                      <div className="relative z-10">
                        <div className="text-[9px] text-blue-400/60 uppercase tracking-widest group-hover:text-blue-300 transition-colors font-bold">{is.stage}</div>
                        <div className="text-base font-black text-white mt-0.5">{is.name}</div>
                        <div className="text-[10px] text-gray-500 italic mt-1 line-clamp-1">{is.tag}</div>
                      </div>
                      {activeIsland === is.id && (
                        <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400 opacity-60" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Active island detail panel */}
            <div className="xl:w-[55%]">
              <div className="xl:sticky xl:top-24">
                <div className="panel-action clip-diagonal p-8 sm:p-10 border-t-4 border-t-[var(--accent-gold)] relative overflow-hidden">
                  {/* Watermark */}
                  <div className="absolute top-6 right-6 text-5xl opacity-[0.03] font-black italic select-none pointer-events-none tracking-tighter">
                    ISLAND&nbsp;MAP
                  </div>

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-8 border-b border-white/10 pb-6 gap-4">
                    <div>
                      <span className="text-[10px] text-[var(--accent-gold)] font-black uppercase tracking-widest mb-1 block">Island Guide</span>
                      <h3 className="text-3xl sm:text-4xl text-white text-kinetic italic font-black uppercase tracking-tight">{island.name}</h3>
                      <p className="text-gray-400 text-sm mt-1">{island.tag}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2">
                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-sm whitespace-nowrap">
                        {island.stage}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-[var(--accent-gold)]/20 border border-[var(--accent-gold)]/50 text-[var(--accent-gold)] rounded-sm whitespace-nowrap">
                        {island.rarity}
                      </span>
                    </div>
                  </div>

                  {/* Info grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                    {/* NPCs */}
                    <div className="bg-white/[0.04] p-5 border border-white/5 clip-button">
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="w-4 h-4 text-blue-400 icon-glow-blue" />
                        <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Main NPCs</span>
                      </div>
                      <ul className="text-xs text-gray-400 space-y-2">
                        {island.npcs.map((n, i) => (
                          <li key={i} className="flex gap-2"><span className="text-blue-400/50">•</span>{n}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Bosses */}
                    <div className="bg-white/[0.04] p-5 border border-white/5 clip-button">
                      <div className="flex items-center gap-3 mb-3">
                        <Swords className="w-4 h-4 text-[var(--accent-red)] icon-glow-red" />
                        <span className="text-[10px] text-[var(--accent-red)] font-black uppercase tracking-widest">Key Bosses</span>
                      </div>
                      <ul className="text-xs text-gray-400 space-y-2">
                        {island.bosses.map((b, i) => (
                          <li key={i} className="flex gap-2"><span className="text-[var(--accent-red)]/50">•</span>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Enemy focus */}
                  <div className="bg-white/[0.04] p-5 border border-white/5 clip-button mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-4 h-4 text-purple-400 icon-glow-purple" />
                      <span className="text-[10px] text-purple-400 font-black uppercase tracking-widest">Enemy Focus</span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">{island.focus}</p>
                  </div>

                  {/* Why players go here */}
                  <div className="bg-black/60 p-6 border border-white/10 clip-button mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Navigation className="w-4 h-4 text-emerald-400 icon-glow-green" />
                      <span className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Why players go here</span>
                    </div>
                    <ul className="text-xs text-gray-300 space-y-3">
                      {island.why.map((w, i) => (
                        <li key={i} className="flex gap-3">
                          <Star className="w-3 h-3 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Related pages */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Related Pages — Best pages to open next</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {island.links.map((link, i) => (
                        <Link
                          key={i}
                          href={link.href}
                          className="flex flex-col p-4 bg-white/[0.04] border border-white/10 clip-button hover:border-[var(--accent-red)] hover:bg-white/[0.06] group transition-all duration-200"
                        >
                          <span className="text-sm font-black text-white group-hover:text-[var(--accent-red)] italic transition-colors">{link.title}</span>
                          <span className="text-[10px] text-gray-500 mt-1 leading-relaxed">{link.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="mb-16">
          <div className="panel-action clip-diagonal p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 opacity-[0.03] blur-[80px] pointer-events-none" />
            <div className="flex items-center gap-4 mb-8">
              <div className="icon-premium-wrapper">
                <Zap className="w-6 h-6 text-[var(--accent-gold)] icon-glow-gold" />
              </div>
              <h2 className="text-2xl font-black text-white text-kinetic uppercase tracking-wide">All Islands and Map FAQ</h2>
            </div>
            <div className="space-y-3">
              {faqItems.map((faq, i) => (
                <div key={i} className="border border-white/10 clip-button overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-white/[0.04] transition-colors"
                  >
                    <span className="text-sm font-bold text-white">{faq.q}</span>
                    <ChevronRight
                      className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-90" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
