const fs = require('fs');
const path = require('path');

const dir = '/public';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.includes('Intérieurs')) {
    fs.renameSync(path.join(dir, file), path.join(dir, 'interieurs-villa-h-new.jpg'));
  } else if (file.includes('PC MODIF AUTORISÉ✔️Villa K,S📍Marrakech , Maroc-1')) {
    fs.renameSync(path.join(dir, file), path.join(dir, 'villa-ks-mod-1.jpg'));
  } else if (file.includes('PC MODIF AUTORISÉ✔️Villa K.S📍Marrakech , Maroc (1)')) {
    fs.renameSync(path.join(dir, file), path.join(dir, 'villa-ks-mod-2.jpg'));
  } else if (file.includes('Immeuble d’habitation')) {
    fs.renameSync(path.join(dir, file), path.join(dir, 'immeuble-r3-new.jpg'));
  } else if (file.includes('PROJET AUTORISÉ✔️Villa -ج-')) {
    fs.renameSync(path.join(dir, file), path.join(dir, 'villa-h-new.jpg'));
  } else if (file.includes('PROJET AUTORISÉ✔️Villa K,S 📍Marrakech')) {
    fs.renameSync(path.join(dir, file), path.join(dir, 'villa-ks-new.jpg'));
  }
}
console.log("Renaming done.");
