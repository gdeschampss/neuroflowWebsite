import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const componetsDir = path.join(process.cwd(), 'componetsImg');
const craitivosDir = path.join(process.cwd(), 'craitivos');
const destDir = path.join(process.cwd(), 'public', 'images', 'products');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

async function processImage(srcPath, name) {
  if (!fs.existsSync(srcPath)) {
    console.warn(`Not found: ${srcPath}`);
    return;
  }
  const ext = path.extname(srcPath).toLowerCase();
  const destWebp = path.join(destDir, `${name}.webp`);
  const destOrig = path.join(destDir, `${name}${ext}`);

  try {
    if (ext === '.gif') {
      fs.copyFileSync(srcPath, destOrig);
      console.log(`Copied GIF: ${name}.gif`);
    } else {
      await sharp(srcPath).webp({ quality: 90 }).toFile(destWebp);
      fs.copyFileSync(srcPath, destOrig);
      console.log(`Processed: ${name}.webp & ${name}${ext}`);
    }
  } catch (err) {
    console.error(`Error processing ${srcPath}:`, err);
  }
}

async function run() {
  // NeuroWeb assets
  await processImage(path.join(componetsDir, 'neuroWebcomponent.png'), 'neuroweb-comp');
  await processImage(path.join(componetsDir, 'ac2df36ffd158a17f8e67461ffbd0156.jpg'), 'neuroweb-mockup');

  // Atlas assets
  await processImage(path.join(componetsDir, 'contentesWhatsAppPriuncipal (1).png'), 'atlas-whatsapp');
  await processImage(path.join(componetsDir, 'ChatGPT Image 11 de ago. de 2026, 04_02_23.png'), 'atlas-chatgpt');
  await processImage(path.join(componetsDir, 'atlas.png'), 'atlas-hero');
  await processImage(path.join(componetsDir, 'atlaslogogif.gif'), 'atlas-logo-gif');

  // Automações assets
  await processImage(path.join(componetsDir, 'automcaoPaginaImg.png'), 'automacao-page');
  await processImage(path.join(componetsDir, 'Clawd_ Paragliding.jfif'), 'automacao-clawd');
}

run();
