import http from 'http';

const urls = [
  '/',
  '/about',
  '/services',
  '/services/led-mirrors',
  '/service-areas/sialkot',
  '/blog',
  '/blog/led-mirror-price-in-sialkot',
  '/mirrors',
  '/gallery',
  '/contact',
  '/products/wavy-royal-blue-velvet-floor-mirror',
  '/products/aluminium-sliding-door',
  '/products/glass-shower-partition',
  '/404'
];

async function checkAll() {
  console.log('Testing Preview Server Routes (http://localhost:4173):');
  for (const url of urls) {
    await new Promise(resolve => {
      http.get('http://localhost:4173' + url, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          const hasH1 = data.includes('<h1');
          const hasFooter = data.includes('<footer');
          const hasSEO = data.includes('<title');
          console.log(`${url.padEnd(48)} | Status: ${res.statusCode} | Size: ${data.length.toString().padStart(6)} | H1: ${hasH1} | Footer: ${hasFooter} | SEO: ${hasSEO}`);
          resolve();
        });
      }).on('error', err => {
        console.error(url, err.message);
        resolve();
      });
    });
  }
}

checkAll();
