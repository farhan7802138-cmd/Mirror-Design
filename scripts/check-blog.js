const fs = require('fs');
const path = require('path');
const articles = [
  'led-mirror-price-in-sialkot.html',
  'aluminium-vs-wooden-doors-windows-pakistan.html',
  'glass-partition-shower-cabin-cost-sialkot.html',
  'choose-right-mirror-design-bedroom-bathroom-salon.html',
  'double-glazed-aluminium-windows-benefits-pakistan.html'
];
articles.forEach(file => {
  const content = fs.readFileSync(path.join(__dirname, '../blog', file), 'utf8');
  const title = (content.match(/<title>(.*?)<\/title>/) || [])[1] || '';
  const meta = (content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/) || [])[1] || '';
  const text = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text.split(' ').length;
  console.log(file + ': title=' + title.length + 'c ("' + title + '"), meta=' + meta.length + 'c, words=' + words);
});
