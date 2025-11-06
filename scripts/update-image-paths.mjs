import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fleetDataPath = path.join(__dirname, '..', 'client', 'data', 'fleetData.ts');

console.log('🔄 Atualizando caminhos de imagens para WebP...\n');

let content = fs.readFileSync(fleetDataPath, 'utf-8');
let replacements = 0;

// Substitui .jpg, .jpeg, .png por .webp
content = content.replace(/\.(jpg|jpeg|png)(?=["'])/gi, (match) => {
  replacements++;
  return '.webp';
});

fs.writeFileSync(fleetDataPath, content, 'utf-8');

console.log(`✅ ${replacements} caminhos atualizados em fleetData.ts`);
console.log(`📝 Todas as referências agora apontam para arquivos .webp\n`);
