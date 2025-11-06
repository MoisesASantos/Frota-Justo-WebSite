import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fleetDir = path.join(__dirname, '..', 'public', 'images', 'fleet');

let totalConverted = 0;
let totalSkipped = 0;
let totalSize = { before: 0, after: 0 };

async function convertImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    totalSize.before += stats.size;

    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 }) // quality 85 é ótimo balanço qualidade/tamanho
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    totalSize.after += newStats.size;

    const reduction = ((stats.size - newStats.size) / stats.size * 100).toFixed(1);
    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)} (-${reduction}%)`);
    totalConverted++;
  } catch (error) {
    console.error(`✗ Erro ao converter ${inputPath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
      const webpPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      // Pula se já existe WebP
      if (fs.existsSync(webpPath)) {
        console.log(`⊘ Pulando ${entry.name} (WebP já existe)`);
        totalSkipped++;
        continue;
      }

      await convertImage(fullPath, webpPath);
    }
  }
}

console.log('🖼️  Iniciando conversão de imagens para WebP...\n');
console.log(`📁 Diretório: ${fleetDir}\n`);

await processDirectory(fleetDir);

const savedMB = ((totalSize.before - totalSize.after) / 1024 / 1024).toFixed(2);
const totalReduction = ((totalSize.before - totalSize.after) / totalSize.before * 100).toFixed(1);

console.log('\n' + '='.repeat(60));
console.log('✅ Conversão concluída!');
console.log(`📊 Estatísticas:`);
console.log(`   - Imagens convertidas: ${totalConverted}`);
console.log(`   - Imagens puladas: ${totalSkipped}`);
console.log(`   - Tamanho antes: ${(totalSize.before / 1024 / 1024).toFixed(2)} MB`);
console.log(`   - Tamanho depois: ${(totalSize.after / 1024 / 1024).toFixed(2)} MB`);
console.log(`   - Economia: ${savedMB} MB (${totalReduction}% menor)`);
console.log('='.repeat(60));
