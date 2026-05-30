# Dokumentasi & Alur Sistem Web Edukasi Zakat IZI (Inisiatif Zakat Indonesia)

Dokumen ini menjelaskan arsitektur, fitur, dan alur penggunaan (user flow) dari sistem website Inisiatif Zakat Indonesia (IZI) yang dibangun. Dokumen ini dapat digunakan sebagai panduan serah terima dan penjelasan teknis kepada pihak IZI.

---

## 1. Pendahuluan
Website Edukasi Zakat IZI dibangun dengan tujuan untuk memberikan edukasi literasi zakat kepada masyarakat luas secara digital, mempermudah perhitungan zakat, menyediakan layanan tanya jawab interaktif, serta menampilkan program-program donasi kemanusiaan yang sedang berjalan.

Sistem ini terbagi menjadi dua bagian utama:
1. **Sisi Publik (Masyarakat/User):** Halaman yang diakses oleh masyarakat umum untuk membaca artikel, menonton video edukasi, menghitung zakat, bertanya kepada ahli, dan melihat program donasi.
2. **Sisi Administrator (Pengelola IZI):** Dashboard khusus pengelola (Admin & Editor) untuk memanajemen seluruh konten yang tampil di sisi publik.

---

## 2. Fitur Utama Sistem

### A. Fitur Publik (Masyarakat)
- **Beranda & Edukasi:** Menampilkan artikel-artikel edukasi seputar Zakat, Infaq, Sedekah, dan Wakaf (ZISWAF).
- **Galeri Video:** Kumpulan video edukasi yang terintegrasi dengan YouTube untuk memudahkan literasi visual.
- **Kalkulator Zakat:** Alat bantu hitung zakat secara otomatis berdasarkan nisab dan penghasilan/harta masyarakat.
- **Program Donasi:** Etalase program kemanusiaan (seperti program untuk Sumatera, Wilayah 3T, dan Palestina) lengkap dengan target dana, dana terkumpul, dan tenggat waktu.
- **Layanan Tanya Jawab (Q&A):** Formulir bagi masyarakat yang ingin berkonsultasi seputar hukum zakat atau keuangan syariah. Pertanyaan akan dijawab oleh pengelola.

### B. Fitur Administrator (Dashboard)
- **Sistem Autentikasi & Hak Akses:** Login aman dengan sistem *Role-Based Access Control* (Admin & Editor).
- **Manajemen Artikel:** Tambah, edit, dan hapus artikel edukasi. Mengunggah gambar (thumbnail) yang disimpan secara otomatis di *cloud storage*.
- **Manajemen Kategori:** Mengelompokkan artikel dan program donasi berdasarkan tema tertentu.
- **Manajemen Video:** Menambahkan tautan (URL) YouTube untuk ditampilkan di halaman publik.
- **Manajemen Program Donasi:** Menambahkan detail program donasi baru, memperbarui nominal donasi yang terkumpul, status keaktifan, dan tautan laporan penyaluran.
- **Manajemen Pertanyaan (Q&A):** Melihat dan mengubah status pertanyaan dari masyarakat (Pending / Replied).
- **Statistik Dashboard:** Rangkuman cepat mengenai jumlah artikel, video, kategori, dan pertanyaan yang belum dijawab.

---

## 3. Alur Pengguna (User Flow)

### 3.1 Alur Publik (Masyarakat)
1. **Mengakses Edukasi:** User membuka website > Memilih menu "Edukasi" > Membaca artikel yang diinginkan.
2. **Mencari Program Donasi:** User membuka menu "Program" > Memilih kategori program (misal: Palestina) > Melihat detail program dan progress penggalangan dana > Klik tombol donasi yang akan mengarahkan ke halaman pembayaran IZI.
3. **Menggunakan Kalkulator:** User masuk ke menu "Kalkulator" > Memasukkan nominal harta/penghasilan > Sistem menghitung kewajiban zakat secara otomatis.
4. **Bertanya (Q&A):** User masuk ke menu "Layanan" > Mengisi form nama, nomor telepon, dan pertanyaan > Sistem menyimpan pertanyaan dengan status *Pending*.

### 3.2 Alur Administrator (Pengelola IZI)
1. **Login:** Admin mengakses `/login` > Memasukkan email dan password > Diverifikasi oleh sistem.
2. **Mengelola Konten (Contoh: Artikel):** Admin masuk ke menu "Artikel" di Dashboard > Klik "Tambah Artikel" > Mengisi judul, kategori, konten, dan mengunggah gambar > Klik Simpan > Artikel langsung tampil di halaman publik.
3. **Mengelola Pertanyaan Masyarakat:** Admin melihat ada pertanyaan baru berstatus *Pending* di dashboard > Admin bisa menghubungi penanya via nomor telepon yang ditinggalkan > Setelah selesai, Admin mengubah status pertanyaan menjadi *Replied* (Sudah Dijawab).

---

## 4. Teknologi yang Digunakan (Tech Stack)

Aplikasi ini dibangun menggunakan tumpukan teknologi modern, cepat, dan aman (*State of the Art*):

- **Next.js (React Framework):** Digunakan untuk membangun antarmuka pengguna (Frontend) dan logika server (Backend) dalam satu kesatuan. Menggunakan fitur *App Router* untuk performa yang sangat cepat (*Server-Side Rendering*).
- **Tailwind CSS:** *Framework* desain untuk memastikan tampilan website indah, responsif di HP/Laptop, dan modern.
- **PostgreSQL (Database):** Sistem manajemen basis data relasional yang sangat handal untuk menyimpan data artikel, user, program, dll.
- **Supabase:** Penyedia layanan infrastruktur *database* (Postgres) dan *Cloud Storage* (untuk menyimpan file gambar thumbnail secara aman).
- **Prisma ORM:** Alat yang menjembatani komunikasi antara kode program (Next.js) dengan *database* secara aman dan terstruktur.
- **NextAuth.js:** Sistem keamanan untuk proses autentikasi (Login/Logout) dan manajemen sesi pengguna.
- **Vercel:** Platform *cloud hosting* tempat aplikasi ini dideploy agar dapat diakses dari seluruh dunia tanpa henti (24/7).

---

*Dokumen ini dibuat khusus untuk keperluan Inisiatif Zakat Indonesia (IZI).*
