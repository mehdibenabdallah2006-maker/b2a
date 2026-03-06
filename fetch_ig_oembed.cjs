const https = require('https');

const urls = [
  'https://api.instagram.com/oembed/?url=https://www.instagram.com/p/DKAJwZNTmM-/',
  'https://api.instagram.com/oembed/?url=https://www.instagram.com/p/C0mNhJnqthe/',
  'https://api.instagram.com/oembed/?url=https://www.instagram.com/p/C5YIrs-qNAi/',
  'https://api.instagram.com/oembed/?url=https://www.instagram.com/p/C6Wb7OPNFdF/',
  'https://api.instagram.com/oembed/?url=https://www.instagram.com/p/DEpTOs-NUfs/'
];

urls.forEach(url => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`${url} -> ${data}`);
    });
  }).on('error', err => console.error(err));
});
