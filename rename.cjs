const fs = require('fs');
const path = require('path');

const dir = 'public';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.includes('Intérieurs')) {
    fs.renameSync(path.join(dir, file), path.join(dir, 'interieurs-villa-h.jpg'));
  } else if (file.includes('Immeuble')) {
    fs.renameSync(path.join(dir, file), path.join(dir, 'immeuble-r3.jpg'));
  } else if (file.includes('Villa -ج-')) {
    fs.renameSync(path.join(dir, file), path.join(dir, 'villa-h.jpg'));
  } else if (file.includes('PC MODIF')) {
    fs.renameSync(path.join(dir, file), path.join(dir, 'villa-ks.jpg'));
  } else if (file.includes('Villa K.S 📍')) {
    fs.renameSync(path.join(dir, file), path.join(dir, 'villa-ks-2.jpg'));
  }
});
console.log('Renamed files');
