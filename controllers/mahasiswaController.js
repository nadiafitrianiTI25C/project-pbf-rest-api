// Controller: menangani request & response, lalu memanggil fungsi pada model
const mahasiswaModel = require("../models/mahasiswaModel");

// cek apakah nim, nama, dan prodi sudah diisi
function dataLengkap(body) {
  const { nim, nama, prodi } = body || {};
  return Boolean(nim && nama && prodi);
}

// GET /api/mahasiswa
function getAllMahasiswa(req, res) {
  const data = mahasiswaModel.getAll();
  res.status(200).json({
    success: true,
    message: "Data berhasil ditampilkan",
    data,
  });
}

// GET /api/mahasiswa/:id
function getMahasiswaById(req, res) {
  const id = Number(req.params.id);
  const data = mahasiswaModel.getById(id);

  if (!data) {
    return res.status(404).json({
      success: false,
      message: `Data mahasiswa dengan id ${req.params.id} tidak ditemukan`,
    });
  }

  res.status(200).json({
    success: true,
    message: "Detail data berhasil ditampilkan",
    data,
  });
}

// POST /api/mahasiswa
function createMahasiswa(req, res) {
  if (!dataLengkap(req.body)) {
    return res.status(400).json({
      success: false,
      message: "Data tidak lengkap, nim, nama, dan prodi wajib diisi",
    });
  }

  const data = mahasiswaModel.create(req.body);
  res.status(201).json({
    success: true,
    message: "Data berhasil ditambahkan",
    data,
  });
}

// PUT /api/mahasiswa/:id
function updateMahasiswa(req, res) {
  if (!dataLengkap(req.body)) {
    return res.status(400).json({
      success: false,
      message: "Data tidak lengkap, nim, nama, dan prodi wajib diisi",
    });
  }

  const id = Number(req.params.id);
  const data = mahasiswaModel.update(id, req.body);

  if (!data) {
    return res.status(404).json({
      success: false,
      message: `Data mahasiswa dengan id ${req.params.id} tidak ditemukan`,
    });
  }

  res.status(200).json({
    success: true,
    message: "Data berhasil diperbarui",
    data,
  });
}

// DELETE /api/mahasiswa/:id
function deleteMahasiswa(req, res) {
  const id = Number(req.params.id);
  const data = mahasiswaModel.remove(id);

  if (!data) {
    return res.status(404).json({
      success: false,
      message: `Data mahasiswa dengan id ${req.params.id} tidak ditemukan`,
    });
  }

  res.status(200).json({
    success: true,
    message: "Data berhasil dihapus",
    data,
  });
}

module.exports = {
  getAllMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
