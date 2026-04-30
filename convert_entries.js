const fs = require('fs');
const path = require('path');

const ENTRIES_DIR = path.join(__dirname, 'src', 'app', 'entries');

function escapeJsx(text) {
    if (!text) return '';
    return text.replace(/&amp;/g, '&')
               .replace(/&lt;/g, '<')
               .replace(/&gt;/g, '>')
               .replace(/&quot;/g, '"')
               .replace(/&#39;/g, "'")
               .replace(/{/g, '{"{"}')
               .replace(/}/g, '{"}"}');
}

function cleanText(text) {
    if (!text) return '';
    return text.replace(/<[^>]*>?/gm, '').trim();
}

function extractData(html) {
    const data = {
        title: '',
        description: '',
        h1: '',
        summary: '',
        metaItems: [],
        overviewItems: [],
        routeDetails: [],
        moveset: [],
        relatedPages: [],
        heroImage: { src: '', alt: '' }
    };

    // Metadata
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    if (titleMatch) data.title = cleanText(titleMatch[1]);

    const descMatch = html.match(/<meta name="description" content="(.*?)"/);
    if (descMatch) data.description = cleanText(descMatch[1]);

    // Hero Image
    const heroImgMatch = html.match(/<img class="entry-hero-image"[\s\S]*?src="(.*?)"[\s\S]*?alt="(.*?)"/);
    if (heroImgMatch) {
        data.heroImage.src = heroImgMatch[1].replace('../../', '/');
        data.heroImage.alt = cleanText(heroImgMatch[2]);
    }

    // H1 and Summary
    const h1Match = html.match(/<h1[\s\S]*?>(.*?)<\/h1>/);
    if (h1Match) data.h1 = cleanText(h1Match[1]);

    const summaryMatch = html.match(/<p class="lede"[\s\S]*?>(.*?)<\/p>/);
    if (summaryMatch) data.summary = cleanText(summaryMatch[1]);

    // Meta Items
    const metaBoxRegex = /<div class="meta-box"[\s\S]*?<span class="meta-label"[\s\S]*?>(.*?)<\/span>[\s\S]*?<span class="meta-value"[\s\S]*?>(.*?)<\/span>[\s\S]*?<\/div>/g;
    let match;
    while ((match = metaBoxRegex.exec(html)) !== null) {
        data.metaItems.push({ label: cleanText(match[1]), value: cleanText(match[2]) });
    }

    // Overview Items
    const overviewSectionMatch = html.match(/<div class="panel panel-entry[\s\S]*?<ul>([\s\S]*?)<\/ul>/);
    if (overviewSectionMatch) {
        const liRegex = /<li[\s\S]*?><span>([\s\S]*?)<\/span><\/li>/g;
        let liMatch;
        while ((liMatch = liRegex.exec(overviewSectionMatch[1])) !== null) {
            data.overviewItems.push(cleanText(liMatch[1]));
        }
    }

    // Route Details / Requirements
    const reqTableMatch = html.match(/<table class="detail-table detail-table-requirements">[\s\S]*?<tbody>([\s\S]*?)<\/tbody>[\s\S]*?<\/table>/);
    if (reqTableMatch) {
        const trRegex = /<tr[\s\S]*?><td class="req-key-cell"[\s\S]*?>(.*?)<\/td><td class="req-value-cell"[\s\S]*?>(.*?)<\/td><\/tr>/g;
        let trMatch;
        while ((trMatch = trRegex.exec(reqTableMatch[1])) !== null) {
            let field = cleanText(trMatch[1]);
            let details = cleanText(trMatch[2]);
            let linkMatch = trMatch[1].match(/href="(.*?)"/);
            let link = linkMatch ? linkMatch[1].replace('.html', '').replace('../', '/entries/') : null;
            if (link && link.startsWith('/entries/index')) link = '/';
            
            data.routeDetails.push({ field, details, link });
        }
    }

    // Moveset
    const moveCardRegex = /<article class="move-card"[\s\S]*?<span class="move-card-key"[\s\S]*?>(.*?)<\/span>[\s\S]*?<div class="move-card-field-value"><span[\s\S]*?>(.*?)<\/span><\/div>[\s\S]*?<\/article>/g;
    while ((match = moveCardRegex.exec(html)) !== null) {
        data.moveset.push({ key: cleanText(match[1]), description: cleanText(match[2]), videoSrc: '', poster: '' });
    }

    // Related Pages
    const relatedLinksRegex = /<a class="mini-link"[\s\S]*?href="(.*?)"[\s\S]*?<strong[\s\S]*?>(.*?)<\/strong>[\s\S]*?<span[\s\S]*?>(.*?)<\/span>[\s\S]*?<\/a>/g;
    while ((match = relatedLinksRegex.exec(html)) !== null) {
        let href = match[1].replace('.html', '').replace('../', '/entries/');
        if (href.startsWith('/entries/index')) href = '/';
        data.relatedPages.push({
            href: href,
            title: cleanText(match[2]),
            summary: cleanText(match[3])
        });
    }

    return data;
}

function generateTsx(data) {
    const metaItemsJs = JSON.stringify(data.metaItems, null, 2);
    const movesetJs = JSON.stringify(data.moveset, null, 2);
    const routeDetailsJs = JSON.stringify(data.routeDetails, null, 2);
    const relatedPagesJs = JSON.stringify(data.relatedPages, null, 2);

    return `import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import VideoMovesetCard from "@/components/VideoMovesetCard";

export const metadata: Metadata = {
  title: "${escapeJsx(data.title)}",
  description: "${escapeJsx(data.description)}",
};

const metaItems = ${metaItemsJs};

const moveset = ${movesetJs};

const routeDetails = ${routeDetailsJs};

const relatedPages = ${relatedPagesJs};

export default function EntryPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 md:pb-24 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[var(--accent-red)] mx-auto max-w-[1920px] shadow-[inset_0_0_40px_rgba(255,30,56,0.1)] md:shadow-[inset_0_0_80px_rgba(255,30,56,0.15)] relative font-sans bg-slate-950">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
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
          <Link href="/entries" className="hover:text-[var(--accent-red)] transition-colors">Entries</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">${escapeJsx(data.h1)}</span>
        </div>

        {/* Hero */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-action)] bg-[var(--bg-panel)] text-[var(--accent-red)] text-xs font-bold uppercase tracking-widest mb-6 clip-button text-kinetic shadow-[0_0_15px_rgba(255,30,56,0.3)]">
              Wiki Entry
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white text-kinetic uppercase tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ textShadow: "3px 3px 0px rgba(255, 30, 56, 1), -1px -1px 0px rgba(0,0,0,1)" }}>
              ${escapeJsx(data.h1)}
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed border-l-4 border-[var(--accent-red)] pl-4 backdrop-blur-sm bg-black/20 py-2">
              ${escapeJsx(data.summary)}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metaItems.map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                  <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          ${data.heroImage.src ? `
            <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(255,30,56,0.2)] bg-black relative aspect-square">
              <Image 
                src="${data.heroImage.src}" 
                alt="${escapeJsx(data.heroImage.alt)}" 
                fill
                className="object-contain p-4 opacity-90 transition-opacity duration-500 hover:opacity-100"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          ` : ''}
        </div>

        {/* Content Section: Overview */}
        <div className="panel-action clip-diagonal p-8 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)] opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Overview</h2>
            <ul className="space-y-4">
              ${data.overviewItems.map(item => `
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-[var(--accent-red)] mt-1">•</span>
                  <span>${escapeJsx(item)}</span>
                </li>`).join('\n              ')}
            </ul>
          </div>
        </div>

        {/* Content Section: Route Details */}
        {routeDetails.length > 0 && (
          <div className="panel-action clip-diagonal p-8 mb-8 relative overflow-hidden group">
            <div className="mb-4 relative z-10">
              <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Route Details</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/20 text-gray-400 font-mono text-sm uppercase">
                      <th className="py-4 px-4">Field</th>
                      <th className="py-4 px-4">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {routeDetails.map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="py-3 px-4 font-semibold text-blue-400">{row.field}</td>
                        <td className="py-3 px-4 text-white">
                          {row.link ? (
                            <Link href={row.link} className="text-blue-300 hover:text-blue-200 underline decoration-white/30 underline-offset-4">{row.details}</Link>
                          ) : row.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Content Section: Moveset */}
        {moveset.length > 0 && (
          <div className="panel-action clip-diagonal p-8 mb-8 relative overflow-hidden group">
            <div className="mb-4 relative z-10">
              <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Moveset</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {moveset.map((move, i) => (
                  <VideoMovesetCard key={i} move={move} />
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Related Pages */}
        {relatedPages.length > 0 && (
          <div className="panel-action clip-diagonal p-8 mb-12 relative overflow-hidden group">
            <div className="mb-4 relative z-10">
              <h2 className="text-3xl font-black text-white text-kinetic mb-6 uppercase border-b border-white/10 pb-4">Related Pages</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedPages.map((page, i) => (
                  <Link
                    key={i}
                    href={page.href}
                    className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent-red)] transition-all duration-300 hover:scale-105 block"
                  >
                    <strong className="block text-sm font-bold text-white group-hover:text-[var(--accent-red)] transition-colors mb-2">{page.title}</strong>
                    <span className="text-xs text-gray-400">{page.summary}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        
      </main>

      <Footer />
    </div>
  );
}
`;
}

function processEntries() {
    const entries = fs.readdirSync(ENTRIES_DIR);
    entries.forEach(entry => {
        const entryPath = path.join(ENTRIES_DIR, entry);
        if (fs.statSync(entryPath).isDirectory()) {
            const htmlPath = path.join(entryPath, 'index.html');
            const tsxPath = path.join(entryPath, 'page.tsx');

            if (fs.existsSync(htmlPath) && !fs.existsSync(tsxPath)) {
                console.log(`Processing ${entry}...`);
                const html = fs.readFileSync(htmlPath, 'utf8');
                const data = extractData(html);
                const tsx = generateTsx(data);
                fs.writeFileSync(tsxPath, tsx, 'utf8');
                console.log(`Created ${tsxPath}`);
            } else if (fs.existsSync(tsxPath)) {
                console.log(`Skipping ${entry} (TSX already exists)`);
            }
        }
    });
}

processEntries();
