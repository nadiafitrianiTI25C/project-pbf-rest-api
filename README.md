# REST API Data Mahasiswa

Tugas Project PBF Sesi 7: REST API sederhana dengan Node.js dan Express.js.
Data disimpan di dalam array (tanpa database), sehingga data kembali ke kondisi awal setiap server dijalankan ulang.

**Nama:** Nadia Fitriani | **NIM:** 20250040038 | **Kelas:** TI 25C

## Struktur Project

```
project-pbf/
|-- models/
|   `-- mahasiswaModel.js        (data array dan fungsi pengelola data)
|-- controllers/
|   `-- mahasiswaController.js   (menangani request dan response)
|-- routes/
|   `-- mahasiswaRoutes.js       (daftar endpoint)
|-- app.js                       (aplikasi Express)
`-- package.json
```

## Cara Menjalankan

```bash
npm install
node app.js
```

Server berjalan di `http://localhost:3000`.

## Dokumentasi Endpoint

Base URL: `http://localhost:3000/api/mahasiswa`

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | /api/mahasiswa | Menampilkan semua mahasiswa |
| GET | /api/mahasiswa/:id | Menampilkan detail mahasiswa |
| POST | /api/mahasiswa | Menambahkan mahasiswa |
| PUT | /api/mahasiswa/:id | Mengubah mahasiswa |
| DELETE | /api/mahasiswa/:id | Menghapus mahasiswa |

### 1. GET /api/mahasiswa

Menampilkan seluruh data mahasiswa.

Response `200 OK`:

```json
{
  "success": true,
  "message": "Data berhasil ditampilkan",
  "data": [
    { "id": 1, "nim": "2026001", "nama": "Andi Saputra", "prodi": "Teknik Informatika" },
    { "id": 2, "nim": "2026002", "nama": "Budi Santoso", "prodi": "Sistem Informasi" }
  ]
}
```

### 2. GET /api/mahasiswa/:id

Menampilkan detail mahasiswa berdasarkan id. Contoh: `GET /api/mahasiswa/1`

Response `200 OK`:

```json
{
  "success": true,
  "message": "Detail data berhasil ditampilkan",
  "data": { "id": 1, "nim": "2026001", "nama": "Andi Saputra", "prodi": "Teknik Informatika" }
}
```

Response `404 Not Found` (id tidak ada):

```json
{
  "success": false,
  "message": "Data mahasiswa dengan id 99 tidak ditemukan"
}
```

### 3. POST /api/mahasiswa

Menambahkan mahasiswa baru. Id dibuat otomatis.

Body (JSON), semua field wajib diisi:

```json
{
  "nim": "2026003",
  "nama": "Citra",
  "prodi": "Teknik Informatika"
}
```

Response `201 Created`:

```json
{
  "success": true,
  "message": "Data berhasil ditambahkan",
  "data": { "id": 3, "nim": "2026003", "nama": "Citra", "prodi": "Teknik Informatika" }
}
```

Response `400 Bad Request` (data tidak lengkap):

```json
{
  "success": false,
  "message": "Data tidak lengkap, nim, nama, dan prodi wajib diisi"
}
```

### 4. PUT /api/mahasiswa/:id

Mengubah data mahasiswa berdasarkan id. Contoh: `PUT /api/mahasiswa/3`

Body (JSON), semua field wajib diisi:

```json
{
  "nim": "2026003",
  "nama": "Citra Dewi",
  "prodi": "Sistem Informasi"
}
```

Response `200 OK`:

```json
{
  "success": true,
  "message": "Data berhasil diperbarui",
  "data": { "id": 3, "nim": "2026003", "nama": "Citra Dewi", "prodi": "Sistem Informasi" }
}
```

Response `404 Not Found` (id tidak ada) dan `400 Bad Request` (data tidak lengkap) memakai format yang sama seperti di atas.

### 5. DELETE /api/mahasiswa/:id

Menghapus mahasiswa berdasarkan id. Contoh: `DELETE /api/mahasiswa/3`

Response `200 OK`:

```json
{
  "success": true,
  "message": "Data berhasil dihapus",
  "data": { "id": 3, "nim": "2026003", "nama": "Citra Dewi", "prodi": "Sistem Informasi" }
}
```

Response `404 Not Found` (id tidak ada):

```json
{
  "success": false,
  "message": "Data mahasiswa dengan id 3 tidak ditemukan"
}
```

### Response Error Lainnya

| Kondisi | Status | Pesan |
|---|---|---|
| Endpoint tidak ada | 404 | Endpoint tidak ditemukan |
| Format JSON salah | 400 | Format JSON tidak valid |
