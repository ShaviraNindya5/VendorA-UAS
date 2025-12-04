// db.js
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // NeonDB perlu ini
});

client.connect()
  .then(() => console.log('Terhubung ke NeonDB'))
  .catch(err => console.error('Gagal koneksi NeonDB:', err));

module.exports = client;
