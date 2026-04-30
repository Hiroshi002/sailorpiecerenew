const fs = require('fs');
const path = require('path');

const ENTRIES_DIR = path.join(__dirname, 'src', 'app', 'entries');

function fixFiles(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            fixFiles(filePath);
        } else if (file === 'page.tsx') {
            let content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('{data.heroImage.src && (')) {
                console.log(`Fixing ${filePath}`);
                // Replace the conditional with false to effectively hide the broken image block
                // or remove the outer check if we want to keep it but it's risky if data is missing.
                // The safest fix for now is to replace data.heroImage.src with a check if src length > 0
                // but since data is undefined, we should just remove the block or replace it with a constant.
                
                // Let's replace the whole block if src is empty
                content = content.replace(/\{data\.heroImage\.src && \([\s\S]*?src=""[\s\S]*?fill[\s\S]*?\)\}/g, '{/* Hero Image Placeholder */}');
                
                // Also fix cases where src is NOT empty but data is undefined
                // content = content.replace(/\{data\.heroImage\.src && \(/g, '{true && ('); // Risky if data is used inside
                
                // Better: find everything from {data.heroImage.src && ( to the matching )} and wrap or remove
                // Actually, let's just use a more surgical replacement for the specific error
                content = content.replace(/\{data\.heroImage\.src && \(/g, '{false && ('); // Disable the broken blocks
                
                fs.writeFileSync(filePath, content, 'utf8');
            }
        }
    });
}

fixFiles(ENTRIES_DIR);
console.log('Done.');
