const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app');
const targetFiles = [
  'ancient-fragments/page.tsx',
  'entries/dominion-brand/page.tsx',
  'entries/npc-locations/page.tsx',
  'entries/qin-shi-style/page.tsx',
  'entries/upper-seal/page.tsx',
  'entries/yuji-style/page.tsx',
  'entries/what-is-a-weapon/page.tsx',
  'entries/what-is-a-power/page.tsx',
  'entries/tower-key/page.tsx',
  'entries/sukuna-style/page.tsx',
  'entries/power-fragment/page.tsx',
  'entries/passive-shard/page.tsx',
  'entries/hogyoku-fragments/page.tsx',
  'entries/gojo-style/page.tsx',
  'entries/dungeon-key/page.tsx',
  'entries/combat-style/page.tsx',
  'entries/bloodline-stone/page.tsx',
  'entries/alucard-style/page.tsx'
];

function processFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already migrated (doesn't have page-shell)
  if (!content.includes('className="page-shell"')) {
    console.log(`Already migrated or not applicable: ${filePath}`);
    return;
  }

  // Extract title
  let title = '';
  const titleMatch = content.match(/<h1[^>]*>(.*?)<\/h1>/s) || content.match(/<h2[^>]*>(.*?)<\/h2>/s);
  if (titleMatch) title = titleMatch[1].replace(/<[^>]+>/g, '').trim();

  // Extract summary
  let summary = '';
  const summaryMatch = content.match(/<p className="lede"[^>]*>(.*?)<\/p>/s);
  if (summaryMatch) summary = summaryMatch[1].replace(/<[^>]+>/g, '').trim();

  // Extract meta items
  const metaItems = [];
  const metaBoxRegex = /<div className="meta-box"[^>]*>([\s\S]*?)<\/div>/g;
  let metaBox;
  while ((metaBox = metaBoxRegex.exec(content)) !== null) {
    const boxContent = metaBox[1];
    const labelMatch = boxContent.match(/<span className="meta-label"[^>]*>(.*?)<\/span>/s);
    const valueMatch = boxContent.match(/<span className="meta-value"[^>]*>(.*?)<\/span>/s);
    if (labelMatch && valueMatch) {
      metaItems.push({
        label: labelMatch[1].replace(/<[^>]+>/g, '').trim(),
        value: valueMatch[1].replace(/<[^>]+>/g, '').trim()
      });
    }
  }

  // Extract facts
  const facts = [];
  const factsRegex = /<ul data-editable="array" data-prop="facts">([\s\S]*?)<\/ul>/s;
  const factsBlock = content.match(factsRegex);
  if (factsBlock) {
    const liRegex = /<li[^>]*><span[^>]*>(.*?)<\/span><\/li>/g;
    let liMatch;
    while ((liMatch = liRegex.exec(factsBlock[1])) !== null) {
      facts.push(liMatch[1].replace(/<[^>]+>/g, '').trim());
    }
  }

  // Check if it's an entry page
  const isEntry = filePath.includes('entries/');
  // Extract metadata export if we can just keep the whole block
  let metadataBlock = 'export const metadata = { title: "Sailor Piece Wiki" };';
  const metadataMatch = content.match(/export const metadata[^=]*= (\{[\s\S]*?\n\};)/s);
  if (metadataMatch) {
    metadataBlock = `export const metadata: Metadata = ${metadataMatch[1]}`;
  }

  // Generate new content
  const metaRender = metaItems.map(m => `
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">${m.label}</div>
                    <div className="text-sm font-semibold text-white">${m.value}</div>
                  </div>`).join('\\n');

  const factsRender = facts.map(f => `
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>${f}</span>
                </li>`).join('\\n');

  let template = `import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

${metadataBlock}

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-vignette opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,30,56,0.1),transparent_70%)]" />
      </div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 font-mono opacity-80">
          <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-gray-300">${title}</span>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
            Wiki Entry
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
            ${title}
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
            ${summary}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            ${metaRender}
          </div>
        </div>

        {/* Content Section */}
        <div className="panel-action clip-diagonal p-8 mb-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)] opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          
          <div className="mb-8 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Overview</h2>
            <ul className="space-y-4">
              ${factsRender || '<li className="text-gray-300 italic">No specific overview details available.</li>'}
            </ul>
          </div>
        </div>
        
      </main>

      <Footer />
    </div>
  );
}
`;

  fs.writeFileSync(filePath, template, 'utf8');
  console.log(`Successfully migrated ${filePath}`);
}

targetFiles.forEach(file => {
  const fullPath = path.join(srcDir, file);
  processFile(fullPath);
});

console.log("Migration complete.");
