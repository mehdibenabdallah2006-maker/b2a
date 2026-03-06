const https = require('https');

const urls = [
  'https://www.instagram.com/p/DKAJwZNTmM-/',
  'https://www.instagram.com/p/C0mNhJnqthe/',
  'https://www.instagram.com/p/C5YIrs-qNAi/',
  'https://www.instagram.com/p/C6Wb7OPNFdF/',
  'https://www.instagram.com/p/DEpTOs-NUfs/'
];

urls.forEach(url => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/<meta property="og:image" content="([^"]+)"/);
      if (match) {
        console.log(`${url} -> ${match[1].replace(/&amp;/g, '&')}`);
      } else {
        console.log(`${url} -> Not found`);
      }
    });
  }).on('error', err => console.error(err));
});
