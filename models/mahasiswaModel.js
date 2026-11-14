// Model: mengelola data mahasiswa menggunakan array (tanpa database)
let mahasiswa = [
  { id: 1, nim: "20250040001", nama: "Budi Santoso", prodi: "Teknik Informatika" },
  { id: 2, nim: "20250040002", nama: "Siti Aminah", prodi: "Teknik Informatika" },
  { id: 3, nim: "20250040003", nama: "Rizky Pratama", prodi: "Sistem Informasi" },
  { id: 4, nim: "20250040004", nama: "Dewi Lestari", prodi: "Sistem Informasi" },
  { id: 5, nim: "20250040038", nama: "Nadia Fitriani", prodi: "Teknik Informatika" },
];

// ambil semua data
function getAll() {
  return mahasiswa;
}

// ambil satu data berdasarkan id
function getById(id) {
  return mahasiswa.find((m) => m.id === id);
}

// tambah data baru, id dibuat otomatis
function create({ nim, nama, prodi }) {
  const idBaru = mahasiswa.length ? Math.max(...mahasiswa.map((m) => m.id)) + 1 : 1;
  const dataBaru = { id: idBaru, nim, nama, prodi };
  mahasiswa.push(dataBaru);
  return dataBaru;
}

// ubah data berdasarkan id, hasilnya null jika id tidak ada
function update(id, { nim, nama, prodi }) {
  const data = getById(id);
  if (!data) return null;
  data.nim = nim;
  data.nama = nama;
  data.prodi = prodi;
  return data;
}

// hapus data berdasarkan id, hasilnya data yang dihapus atau null jika id tidak ada
function remove(id) {
  const index = mahasiswa.findIndex((m) => m.id === id);
  if (index === -1) return null;
  return mahasiswa.splice(index, 1)[0];
}

module.exports = { getAll, getById, create, update, remove };
