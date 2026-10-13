import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const filesToConvert = [
  'public/images/dessing image.jpeg',
  'public/images/Mirror dressing (3).png',
  'public/images 2/mirror 2.jpeg',
  'public/images 2/WhatsApp Image 2026-06-23 at 7.29.16 PM (1).jpeg',
  'public/images 2/WhatsApp Image 2026-06-23 at 7.29.17 PM (3).jpeg',
  'public/images 2/WhatsApp Image 2026-06-23 at 7.30.55 PM (1).jpeg',
  'public/images 2/WhatsApp Image 2026-06-23 at 7.30.55 PM.jpeg',
  'public/images 2/WhatsApp Image 2026-06-23 at 7.30.58 PM (1).jpeg',
  'public/images 2/WhatsApp Image 2026-06-23 at 7.30.58 PM.jpeg',
  'public/images 2/WhatsApp Image 2026-06-23 at 7.31.01 PM (2).jpeg',
  'public/images 2/WhatsApp Image 2026-06-23 at 7.31.01 PM (3).jpeg',
  'public/images 2/WhatsApp Image 2026-06-23 at 7.31.01 PM.jpeg',
  'public/images 2/WhatsApp Image 2026-06-23 at 7.31.02 PM.jpeg',
  'public/images 2/WhatsApp Image 2026-06-23 at 7.31.03 PM (3).jpeg',
  'public/images 2/WhatsApp Image 2026-06-23 at 7.31.03 PM.jpeg',
  'public/images 2/WhatsApp Image 2026-06-23 at 7.31.04 PM.jpeg'
];

async function convertAll() {
  console.log('Converting non-webp images to high-quality .webp...');
  for (const file of filesToConvert) {
    if (!fs.existsSync(file)) {
      console.warn(`File not found: ${file}`);
      continue;
    }
    const ext = path.extname(file);
    const targetWebp = file.slice(0, -ext.length) + '.webp';

    const isPng = ext.toLowerCase() === '.png';
    const sharpInstance = sharp(file);
    if (isPng) {
      await sharpInstance.webp({ quality: 90, lossless: false }).toFile(targetWebp);
    } else {
      await sharpInstance.webp({ quality: 85 }).toFile(targetWebp);
    }
    console.log(`Converted: ${file} -> ${targetWebp}`);
  }
  console.log('All images converted to .webp successfully!');
}

convertAll().catch(err => {
  console.error(err);
  process.exit(1);
});
