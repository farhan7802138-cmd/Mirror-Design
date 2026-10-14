import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputImagePath = 'C:/Users/Farhan Ali/.gemini/antigravity-ide/brain/2375f745-0ce7-4e04-aeaf-06fafebfbccf/.user_uploaded/media_1791961389221.jpg';
const publicDir = path.resolve('public');

if (!fs.existsSync(inputImagePath)) {
  console.error('Input image not found:', inputImagePath);
  process.exit(1);
}

async function run() {
  console.log('Generating favicons from:', inputImagePath);

  // 1. Master WebP Favicon (512x512)
  await sharp(inputImagePath)
    .resize(512, 512, { fit: 'cover' })
    .webp({ quality: 95 })
    .toFile(path.join(publicDir, 'favicon.webp'));
  console.log('Generated public/favicon.webp');

  // 2. WebP Favicon (192x192) - Google multiple of 48
  await sharp(inputImagePath)
    .resize(192, 192, { fit: 'cover' })
    .webp({ quality: 95 })
    .toFile(path.join(publicDir, 'favicon-192x192.webp'));
  console.log('Generated public/favicon-192x192.webp');

  // 3. WebP Favicon (48x48) - Google standard
  await sharp(inputImagePath)
    .resize(48, 48, { fit: 'cover' })
    .webp({ quality: 95 })
    .toFile(path.join(publicDir, 'favicon-48x48.webp'));
  console.log('Generated public/favicon-48x48.webp');

  // 4. PNG Favicon (48x48) - Fallback for older browsers / bots
  await sharp(inputImagePath)
    .resize(48, 48, { fit: 'cover' })
    .png()
    .toFile(path.join(publicDir, 'favicon-48x48.png'));
  console.log('Generated public/favicon-48x48.png');

  // 5. Apple Touch Icon (180x180)
  await sharp(inputImagePath)
    .resize(180, 180, { fit: 'cover' })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated public/apple-touch-icon.png');

  // 6. Favicon 32x32 PNG
  await sharp(inputImagePath)
    .resize(32, 32, { fit: 'cover' })
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('Generated public/favicon-32x32.png');

  // 7. Standard favicon.ico (using 48x48 PNG format wrapped)
  await sharp(inputImagePath)
    .resize(48, 48, { fit: 'cover' })
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Generated public/favicon.ico');

  console.log('All favicons successfully generated!');
}

run().catch((err) => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
