import fs from 'fs';
import path from 'path';

const entriesDir = 'd:/testtt/Web_project/projectreal/webroblox/SailorPiecerenew/src/app/entries';

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Fix implicit any for moveset
    if (content.includes('const moveset = [];')) {
        content = content.replace('const moveset = [];', 'const moveset: any[] = [];');
        changed = true;
    }

    // Fix implicit any for routeDetails
    if (content.includes('const routeDetails = [];')) {
        content = content.replace('const routeDetails = [];', 'const routeDetails: any[] = [];');
        changed = true;
    }

    // Fix undefined data.heroImage.src
    // This pattern is more flexible with whitespace and captures the block
    const dataRefPattern = /\{\s*data\.heroImage\.src\s*&&[\s\S]+?\}\s*\)/g;
    
    if (content.includes('data.heroImage.src')) {
        // Try a simpler replace first if the complex one fails
        const newBlock = `<div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(255,30,56,0.2)] bg-black relative aspect-square">
            <Image 
              src="/images/site/sailorpiece-wiki-cover-v2.webp" 
              alt="Hero Image Placeholder" 
              fill
              className="object-contain p-4 opacity-90 transition-opacity duration-500 hover:opacity-100"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>`;
          
        // Let's use a more surgical approach for the replacement
        const startTag = '{data.heroImage.src && (';
        const startIndex = content.indexOf(startTag);
        if (startIndex !== -1) {
            // Find the matching closing )}
            let depth = 1;
            let i = startIndex + startTag.length;
            while (i < content.length && depth > 0) {
                if (content[i] === '(') depth++;
                if (content[i] === ')') depth--;
                i++;
            }
            // Now find the closing }
            while (i < content.length && content[i] !== '}') {
                i++;
            }
            if (i < content.length) {
                const fullMatch = content.substring(startIndex, i + 1);
                content = content.replace(fullMatch, newBlock);
                changed = true;
            }
        }
    }

    if (changed) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
    }
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (file === 'page.tsx') {
            fixFile(fullPath);
        }
    }
}

walk(entriesDir);
console.log('Done fixing systemic errors.');
