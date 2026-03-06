const fs = require('fs');
const path = require('path');

const dir = '/public';

const mapping = {
  'CHANTIER EN COURS ✔️• Restaurant asiatique• 📍Marrakech.jpg': 'resto-1.jpg',
  'CHANTIER EN COURS ✔️• Restaurant asiatique• 📍Marrakech (1).jpg': 'resto-2.jpg',
  'CHANTIER EN COURS ✔️• Restaurant asiatique• 📍Marrakech (2).jpg': 'resto-3.jpg',
  'Intérieurs Villa -ج- - 📍Bouskoura , Casablanca#architecture #design #interiordesign #villa-1.jpg': 'interieurs-villa-h-new.jpg',
  'PC MODIF AUTORISÉ✔️Villa K,S📍Marrakech , Maroc-1.jpg': 'villa-ks-mod-1.jpg',
  'PC MODIF AUTORISÉ✔️Villa K.S📍Marrakech , Maroc (1).jpg': 'villa-ks-mod-2.jpg',
  'PROJET AUTORISÉ ✔️Immeuble d’habitation moyen standing en R+3📍Bouskoura , Casablanca#architectu-1.jpg': 'immeuble-r3-new.jpg',
  'PROJET AUTORISÉ✔️Villa -ج- - 📍Bouskoura , Casablanca #architecture #villa #maroc #casablanca-1.jpg': 'villa-h-new.jpg',
  'PROJET AUTORISÉ✔️Villa K,S 📍Marrakech , Maroc-1.jpg': 'villa-ks-new.jpg'
};

for (const [oldName, newName] of Object.entries(mapping)) {
  const oldPath = path.join(dir, oldName);
  const newPath = path.join(dir, newName);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${oldName} to ${newName}`);
  } else {
    console.log(`File not found: ${oldName}`);
  }
}
