import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'componetsImg', 'sobre');
const destDir = path.join(process.cwd(), 'public', 'images', 'sobre');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

async function processImages() {
  const files = [
    { src: 'Escritorio_IMG.png', name: 'escritorio' },
    { src: 'gabrielImagem.png', name: 'gabriel' },
    { src: 'joaoImagem.png', name: 'joao' },
  ];

  for (const f of files) {
    const srcPath = path.join(srcDir, f.src);
    const destWebp = path.join(destDir, `${f.name}.webp`);
    const destPng = path.join(destDir, `${f.name}.png`);

    if (fs.existsSync(srcPath)) {
      await sharp(srcPath).webp({ quality: 90 }).toFile(destWebp);
      fs.copyFileSync(srcPath, destPng);
      console.log(`Processed ${f.src} -> ${destWebp} & ${destPng}`);
    } else {
      console.warn(`File not found: ${srcPath}`);
    }
  }
}

processImages();
