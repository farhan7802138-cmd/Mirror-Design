const fs = require('fs');

let html = fs.readFileSync('services.html', 'utf8');

// For each card with a product link
html = html.replace(/<div class="product-card[^"]*"[\s\S]*?<\/div>\s*<\/div>/g, card => {
  const linkMatch = card.match(/href="\/products\/([a-zA-Z0-9_-]+)"/);
  if (!linkMatch) return card;
  const slug = linkMatch[1];
  
  // Find if a product image exists
  const prodImg = `images/products/${slug}-sialkot.webp`;
  const rootImg = `images/${slug}.webp`;
  let targetImg = null;
  if (fs.existsSync(prodImg)) targetImg = `/images/products/${slug}-sialkot.webp`;
  else if (fs.existsSync(rootImg)) targetImg = `/images/${slug}.webp`;

  if (targetImg) {
    // Replace the img src inside this card
    return card.replace(/<img\s+src="[^"]*"/, `<img src="${targetImg}"`);
  }
  return card;
});

// Also fix the top service overview cards
html = html.replace(
  /<img src="\/images\/placeholders\/glass-shower-partition-sialkot\.webp" alt="Aluminium Windows Service Sialkot"/,
  '<img src="/images/products/aluminium-sliding-window-sialkot.webp" alt="Aluminium Windows Service Sialkot"'
);
html = html.replace(
  /<img src="\/images\/placeholders\/glass-shower-partition-sialkot\.webp" alt="Shower Cabins Service Sialkot"/,
  '<img src="/images/products/glass-shower-partition-sialkot.webp" alt="Shower Cabins Service Sialkot"'
);

fs.writeFileSync('services.html', html, 'utf8');
console.log('Successfully updated services.html images!');
