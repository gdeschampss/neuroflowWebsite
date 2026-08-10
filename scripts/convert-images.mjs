import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageMappings = [
  { src: 'sectionImagens/blogHeroSection.png', dest: 'public/images/blog-hero-section.webp' },
  { src: 'logoImagens/logo.png', dest: 'public/images/logo.webp' },
  { src: 'logoImagens/logo3d.png', dest: 'public/images/logo3d.webp' },
  { src: 'logoImagens/logo3d1.png', dest: 'public/images/logo3d1.webp' },
  { src: 'logoImagens/logoNeuroWeb.png', dest: 'public/images/logo-neuroweb.webp' },
  { src: 'logoImagens/Design sem nome (7).png', dest: 'public/images/logo-design-alt.webp' },
  { src: 'componetsImg/atlas.png', dest: 'public/images/atlas.webp' },
  { src: 'componetsImg/contentesWhatsAppPriuncipal.png', dest: 'public/images/whatsapp-principal.webp' },
  { src: 'componetsImg/contentesWhatsAppPriuncipal (1).png', dest: 'public/images/whatsapp-principal-1.webp' },
  { src: 'componetsImg/contentesWhatsAppPriuncipal (2).png', dest: 'public/images/whatsapp-principal-2.webp' },
  { src: 'componetsImg/logosLinkksAtlas.png', dest: 'public/images/logos-atlas.webp' },
  { src: 'componetsImg/logosLinkksNeuroflow.png', dest: 'public/images/logos-neuroflow.webp' },
  { src: 'componetsImg/logosLinkksNeuroweb.png', dest: 'public/images/logos-neuroweb.webp' },
  { src: 'componetsImg/whatssAppComponent.png', dest: 'public/images/whatsapp-component.webp' },
  { src: 'componetsImg/neuroflowInstagram.jpeg', dest: 'public/images/instagram-showcase.webp' },
  { src: 'componetsImg/neuroWebcomponent.png', dest: 'public/images/neuroweb-component.webp' },
];

const rootDir = process.cwd();

async function convertImages() {
  const publicImagesDir = path.join(rootDir, 'public', 'images');
  if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
  }

  console.log('Starting image conversion to .webp...');

  for (const mapping of imageMappings) {
    const srcPath = path.join(rootDir, mapping.src);
    const destPath = path.join(rootDir, mapping.dest);

    if (fs.existsSync(srcPath)) {
      try {
        await sharp(srcPath)
          .webp({ quality: 85 })
          .toFile(destPath);
        console.log(`Converted: ${mapping.src} -> ${mapping.dest}`);
      } catch (err) {
        console.error(`Failed to convert ${mapping.src}:`, err);
      }
    } else {
      console.warn(`Source image not found: ${mapping.src}`);
    }
  }

  console.log('Image conversion completed!');
}

convertImages();
