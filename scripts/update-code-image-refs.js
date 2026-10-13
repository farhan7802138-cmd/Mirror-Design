import fs from 'fs';
import path from 'path';

const filesToUpdate = [
  'src/data/root-pages.js',
  'src/data/services.js',
  'src/data/service-areas.js',
  'src/data/blog-posts.js',
  'src/data/products.js'
];

for (const file of filesToUpdate) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');

  // Convert specific known non-webp references
  content = content
    .replace(/dessing image\.jpeg/g, 'dessing image.webp')
    .replace(/Mirror dressing \(3\)\.png/g, 'Mirror dressing (3).webp')
    .replace(/mirror 2\.jpeg/g, 'mirror 2.webp')
    .replace(/mirror%202\.jpeg/g, 'mirror 2.webp')
    .replace(/WhatsApp Image 2026-06-23 at 7\.29\.16 PM \(1\)\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.29.16 PM (1).webp')
    .replace(/WhatsApp Image 2026-06-23 at 7\.29\.17 PM \(3\)\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.29.17 PM (3).webp')
    .replace(/WhatsApp Image 2026-06-23 at 7\.30\.55 PM \(1\)\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.30.55 PM (1).webp')
    .replace(/WhatsApp Image 2026-06-23 at 7\.30\.55 PM\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.30.55 PM.webp')
    .replace(/WhatsApp Image 2026-06-23 at 7\.30\.58 PM \(1\)\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.30.58 PM (1).webp')
    .replace(/WhatsApp Image 2026-06-23 at 7\.30\.58 PM\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.30.58 PM.webp')
    .replace(/WhatsApp Image 2026-06-23 at 7\.31\.01 PM \(2\)\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.31.01 PM (2).webp')
    .replace(/WhatsApp Image 2026-06-23 at 7\.31\.01 PM \(3\)\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.31.01 PM (3).webp')
    .replace(/WhatsApp Image 2026-06-23 at 7\.31\.01 PM\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.31.01 PM.webp')
    .replace(/WhatsApp Image 2026-06-23 at 7\.31\.02 PM\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.31.02 PM.webp')
    .replace(/WhatsApp Image 2026-06-23 at 7\.31\.03 PM \(3\)\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.31.03 PM (3).webp')
    .replace(/WhatsApp Image 2026-06-23 at 7\.31\.03 PM\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.31.03 PM.webp')
    .replace(/WhatsApp Image 2026-06-23 at 7\.31\.04 PM\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.31.04 PM.webp')
    // Also URL encoded variants
    .replace(/WhatsApp%20Image%202026-06-23%20at%207\.30\.55%20PM\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.30.55 PM.webp')
    .replace(/WhatsApp%20Image%202026-06-23%20at%207\.29\.16%20PM%20\(1\)\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.29.16 PM (1).webp')
    .replace(/WhatsApp%20Image%202026-06-23%20at%207\.30\.58%20PM\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.30.58 PM.webp')
    .replace(/WhatsApp%20Image%202026-06-23%20at%207\.31\.01%20PM\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.31.01 PM.webp')
    .replace(/WhatsApp%20Image%202026-06-23%20at%207\.31\.02%20PM\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.31.02 PM.webp')
    .replace(/WhatsApp%20Image%202026-06-23%20at%207\.31\.03%20PM\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.31.03 PM.webp')
    .replace(/WhatsApp%20Image%202026-06-23%20at%207\.31\.04%20PM\.jpeg/g, 'WhatsApp Image 2026-06-23 at 7.31.04 PM.webp')
    // Ensure images 2 path prefix is clean
    .replace(/src="images 2\//g, 'src="/images 2/')
    .replace(/src="images%202\//g, 'src="/images 2/');

  // Also replace any lingering old png references in schema or bodies to webp
  content = content
    .replace(/shopfront-shutters\.png/g, 'shopfront-shutters.webp')
    .replace(/greek-key-dual-lit-led-mirror-sialkot\.jpeg/g, 'greek-key-dual-lit-led-mirror-sialkot.webp')
    .replace(/glass-partitions\.png/g, 'glass-partitions.webp')
    .replace(/smart-touch-mirror\.png/g, 'smart-touch-mirror.webp')
    .replace(/aluminium-doors\.png/g, 'aluminium-doors.webp')
    .replace(/wavy-led-mirror\.png/g, 'wavy-led-mirror.webp')
    .replace(/bathroom-mirrors\.png/g, 'bathroom-mirrors.webp');

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated image references in ${file}`);
}
