const fs = require('fs');

// 1. mirrors.html
let mirrorsHtml = fs.readFileSync('mirrors.html', 'utf8');
mirrorsHtml = mirrorsHtml.replace(
  /<div class="product-card-image">\s*<!-- TODO:[^>]*-->\s*<img src="\/images\/placeholders\/glass-shower-partition-sialkot\.webp" alt="Office Glass Partition Sialkot"/g,
  '<div class="product-card-image">\n            <img src="/images/products/office-glass-partition-sialkot.webp" alt="Office Glass Partition Sialkot"'
);
mirrorsHtml = mirrorsHtml.replace(
  /<div class="product-card-image">\s*<!-- TODO:[^>]*-->\s*<img src="\/images\/placeholders\/glass-shower-partition-sialkot\.webp" alt="Glass Kitchen Backsplash Sialkot"/g,
  '<div class="product-card-image">\n            <img src="/images/products/glass-kitchen-backsplash-sialkot.webp" alt="Glass Kitchen Backsplash Sialkot"'
);
mirrorsHtml = mirrorsHtml.replace(
  /<div class="product-card-image">\s*<!-- TODO:[^>]*-->\s*<img src="\/images\/placeholders\/glass-shower-partition-sialkot\.webp" alt="Glass Staircase Railing Sialkot"/g,
  '<div class="product-card-image">\n            <img src="/images/products/glass-staircase-railing-sialkot.webp" alt="Glass Staircase Railing Sialkot"'
);
mirrorsHtml = mirrorsHtml.replace(
  /<div class="product-card-image">\s*<!-- TODO:[^>]*-->\s*<img src="\/images\/placeholders\/glass-shower-partition-sialkot\.webp" alt="Glass Shower Partition Sialkot"/g,
  '<div class="product-card-image">\n            <img src="/images/products/glass-shower-partition-sialkot.webp" alt="Glass Shower Partition Sialkot"'
);
fs.writeFileSync('mirrors.html', mirrorsHtml, 'utf8');

// 2. aluminium.html
let alumHtml = fs.readFileSync('aluminium.html', 'utf8');
alumHtml = alumHtml.replace(
  /<!-- TODO:[^>]*-->\s*<img src="\/images\/placeholders\/glass-shower-partition-sialkot\.webp"\s*alt="Aluminium Sliding Window Sialkot"/g,
  '<img src="/images/products/aluminium-sliding-window-sialkot.webp" alt="Aluminium Sliding Window Sialkot"'
);
alumHtml = alumHtml.replace(
  /<!-- TODO:[^>]*-->\s*<img src="\/images\/placeholders\/glass-shower-partition-sialkot\.webp"\s*alt="Aluminium Casement Window Sialkot"/g,
  '<img src="/images/products/aluminium-casement-window-sialkot.webp" alt="Aluminium Casement Window Sialkot"'
);
alumHtml = alumHtml.replace(
  /<!-- TODO:[^>]*-->\s*<img src="\/images\/placeholders\/glass-shower-partition-sialkot\.webp"\s*alt="Aluminium Railing & Grills Sialkot"/g,
  '<img src="/images/products/aluminium-railing-grills-sialkot.webp" alt="Aluminium Railing & Grills Sialkot"'
);
alumHtml = alumHtml.replace(
  /<!-- TODO:[^>]*-->\s*<img src="\/images\/placeholders\/glass-shower-partition-sialkot\.webp"\s*alt="Aluminium Cabinet Frame Sialkot"/g,
  '<img src="/images/products/aluminium-cabinet-frame-sialkot.webp" alt="Aluminium Cabinet Frame Sialkot"'
);
fs.writeFileSync('aluminium.html', alumHtml, 'utf8');

// 3. index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(
  /<!-- TODO:[^>]*-->\s*<img src="\/images\/placeholders\/glass-shower-partition-sialkot\.webp"\s*alt="Glass Shower Partition Sialkot"/g,
  '<img src="/images/products/glass-shower-partition-sialkot.webp" alt="Glass Shower Partition Sialkot"'
);
indexHtml = indexHtml.replace(
  /<!-- TODO:[^>]*-->\s*<img src="\/images\/placeholders\/glass-shower-partition-sialkot\.webp"\s*alt="Office Glass Partition Sialkot"/g,
  '<img src="/images/products/office-glass-partition-sialkot.webp" alt="Office Glass Partition Sialkot"'
);
indexHtml = indexHtml.replace(
  /<!-- TODO:[^>]*-->\s*<img src="\/images\/placeholders\/glass-shower-partition-sialkot\.webp"\s*alt="Aluminium Sliding Window Sialkot"/g,
  '<img src="/images/products/aluminium-sliding-window-sialkot.webp" alt="Aluminium Sliding Window Sialkot"'
);
fs.writeFileSync('index.html', indexHtml, 'utf8');

console.log('Successfully updated product card images in mirrors.html, aluminium.html, index.html');
