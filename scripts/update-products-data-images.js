const fs = require('fs');

let content = fs.readFileSync('products-data.js', 'utf8');
content = content.replace(/images\/placeholders\/([a-zA-Z0-9_-]+)\.webp/g, (match, slug) => {
  return `images/products/${slug}.webp`;
});
fs.writeFileSync('products-data.js', content, 'utf8');
console.log('Successfully updated products-data.js!');
