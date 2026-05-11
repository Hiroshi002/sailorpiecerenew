# 💡 Prompt Improvement Tips — Reducing Aesthetic Churn

Based on the analysis of 26 sessions, here are tips to improve the efficiency of UI-focused tasks and reduce rework loops.

## 1. Anchor the Aesthetic Early
**Observed Pattern**: Multiple sessions spent 10+ revisions just "finding the right look" (e.g., VisionOS vs Midnight Masterpiece).
**Tip**: Include specific aesthetic keywords and color hex codes in your opening prompt.
- **Bad**: "Redesign the website to be premium."
- **Good**: "Redesign the website using a **Midnight Masterpiece** aesthetic: absolute black backgrounds (#000000), neon cyan accents (#00ffff), and 40px backdrop-blur glassmorphism."

## 2. Define Structural Layouts
**Observed Pattern**: Agents often flip-flop between "Bento Box" and "Standard Hero" layouts.
**Tip**: Specify the layout architecture if you have a preference.
- **Bad**: "Make it look like a modern wiki."
- **Good**: "Use a **Bento Box grid system** for the main content categories and a **50/50 split-hero** for the header."

## 3. Anticipate Technical Constraints (Next.js)
**Observed Pattern**: 15% of sessions struggled with hydration errors after complex UI changes.
**Tip**: If you know you are in a Next.js environment, remind the agent to check for hydration mismatches or use `"use client"` where appropriate.
- **Good**: "When building the new `TrackCard`, ensure it's hydration-safe for Next.js App Router."

## 4. Break Down "Total Redesigns"
**Observed Pattern**: "Full Redesign" tasks often result in massive scope growth and 20+ revisions.
**Tip**: Request the redesign in phases to lock in the aesthetic on one page before applying it everywhere.
- **Example**: "Phase 1: Redesign just the Homepage. Once the style is approved, I'll ask for the rest of the site."

## 5. Provide Reference Components
**Observed Pattern**: High-sufficiency prompts often mentioned specific existing files.
**Tip**: Explicitly point to the files you want to use as a baseline or target.
- **Good**: "Apply the glassmorphism from `src/components/Sidebar.tsx` to the new `MathCard.tsx`."
