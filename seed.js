// seed.js
const fs = require('fs');
const path = require('path');
const db = require('./db');

async function seedData() {
  try {
    const dataPath = path.join(__dirname, 'data', 'vendorA.json');
    const vendorData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

    for (let item of vendorData) {
      await db.query(
        `INSERT INTO vendor_a (kd_produk, nm_brg, hrg, ket_stok)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (kd_produk) DO NOTHING`,
        [item.kd_produk, item.nm_brg, item.hrg, item.ket_stok]
      );
      console.log(`Berhasil menambahkan: ${item.nm_brg}`);
    }

    console.log('Semua data berhasil di-seed!');
  } catch (err) {
    console.error('Error saat seed data:', err);
  } finally {
    await db.end();
  }
}

seedData();
