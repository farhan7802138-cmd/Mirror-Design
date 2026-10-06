const fs = require('fs');
const path = require('path');

const files = ['mirrors.html', 'aluminium.html', 'index.html', 'gallery.html', 'services.html'];
files.forEach(f => {
  if (!fs.existsSync(f)) return;
  const html = fs.readFileSync(f, 'utf8');
  const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/g)].map(m => m[1]);
  console.log('=== ' + f + ' === (total imgs: ' + imgs.length + ')');
  const phs = imgs.filter(src => src.includes('placeholder') || src.includes('unsplash'));
  if (phs.length) {
    console.log('  Placeholders/Unsplash found:');
    phs.forEach(p => console.log('    ' + p));
  } else {
    console.log('  No placeholders.');
  }
});
