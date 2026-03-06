const fs = require('fs');
const path = require('path');

function renameAndMove(src, destName) {
  const dest = path.join('/app/applet/public', destName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${src} to ${dest}`);
  }
}

const files = [
  { src: '/app/applet/dist/Intérieurs Villa -ج- - 📍Bouskoura , Casablanca#architecture #design #interiordesign #villa.jpg', dest: 'interieurs-villa-h-new.jpg' },
  { src: '/app/applet/dist/PC MODIF AUTORISÉ✔️Villa K.S📍Marrakech , Maroc.jpg', dest: 'villa-ks-mod-1.jpg' },
  { src: '/app/applet/dist/PROJET AUTORISÉ ✔️Immeuble d’habitation moyen standing en R+3📍Bouskoura , Casablanca#architectu.jpg', dest: 'immeuble-r3-new.jpg' },
  { src: '/app/applet/dist/PROJET AUTORISÉ✔️Villa -ج- - 📍Bouskoura , Casablanca #architecture #villa #maroc #casablanca.jpg', dest: 'villa-h-new.jpg' },
  { src: '/app/applet/dist/PROJET AUTORISÉ✔️Villa K.S 📍Marrakech , Maroc.jpg', dest: 'villa-ks-new.jpg' },
  { src: '/app/applet/public/PROJET AUTORISÉ✔️Villa K,S 📍Marrakech , Maroc-1.jpg', dest: 'villa-ks-mod-2.jpg' }
];

for (const file of files) {
  renameAndMove(file.src, file.dest);
}
