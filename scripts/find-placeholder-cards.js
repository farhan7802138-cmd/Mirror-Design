const fs = require('fs');

['mirrors.html', 'aluminium.html', 'index.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const cards = content.match(/<div class="product-card"[\s\S]*?<\/div>\s*<\/div>/g) || [];
  cards.forEach(c => {
    if (c.includes('placeholder')) {
      const titleMatch = c.match(/<h3>(.*?)<\/h3>/);
      const linkMatch = c.match(/href="([^"]+)"/);
      const imgMatch = c.match(/<img[^>]+src="([^"]+)"/);
      console.log(`${f} -> ${titleMatch ? titleMatch[1] : 'no title'} | ${linkMatch ? linkMatch[1] : ''} | ${imgMatch ? imgMatch[1] : ''}`);
    }
  });
});
