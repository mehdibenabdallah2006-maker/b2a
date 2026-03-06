const fs = require('fs');
const path = require('path');

const dir = 'public';

const files = {
  'Intérieurs Villa -ج- - 📍Bouskoura , Casablanca#architecture #design #interiordesign #villa.jpg': 'interieurs-villa-h-new.jpg',
  'PC MODIF AUTORISÉ✔️Villa K.S📍Marrakech , Maroc.jpg': 'villa-ks-new.jpg',
  'PROJET AUTORISÉ ✔️Immeuble d’habitation moyen standing en R+3📍Bouskoura , Casablanca#architectu.jpg': 'immeuble-r3-new.jpg',
  'PROJET AUTORISÉ✔️Villa -ج- - 📍Bouskoura , Casablanca #architecture #villa #maroc #casablanca.jpg': 'villa-h-new.jpg',
  'PROJET AUTORISÉ✔️Villa K.S 📍Marrakech , Maroc.jpg': 'villa-ks-2-new.jpg'
};

for (const [oldName, newName] of Object.entries(files)) {
  try {
    fs.renameSync(path.join(dir, oldName), path.join(dir, newName));
    console.log(`Renamed ${oldName} to ${newName}`);
  } catch (e) {
    console.error(`Error renaming ${oldName}: ${e.message}`);
  }
}
