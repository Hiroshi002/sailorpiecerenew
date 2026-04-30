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

targetFiles.forEach(file => {
    const filePath = path.join(srcDir, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(/\\n/g, '\n');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Fixed " + file);
    }
});
