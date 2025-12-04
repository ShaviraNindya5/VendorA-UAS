const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// GET semua produk dari NeonDB
app.get("/products", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM vendor_a");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = 3300;
app.listen(port, () => console.log(`Vendor A API running at http://localhost:${port}`));
