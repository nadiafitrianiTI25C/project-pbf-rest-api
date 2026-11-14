const express = require("express");
const mahasiswaRoutes = require("./routes/mahasiswaRoutes");

const app = express();
const PORT = 3000;

// agar body request berformat JSON bisa dibaca (req.body)
app.use(express.json());

// menyajikan halaman web di folder public (http://localhost:3000)
app.use(express.static("public"));

// endpoint utama
app.use("/api/mahasiswa", mahasiswaRoutes);

// jika JSON yang dikirim salah format
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400) {
    return res.status(400).json({ success: false, message: "Format JSON tidak valid" });
  }
  next(err);
});

// jika endpoint tidak ada
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Endpoint tidak ditemukan" });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
