# Prompt Awal untuk Agent VS Code

Kerjakan project ini sampai selesai secara otomatis.

Mulai dengan membaca `AGENTS.md` dan `TASK.md`, lalu inspect `reference/original/original.html`, `reference/original/original.css`, dan `reference/original/original.js`. Semua gambar/GIF dari versi asli sudah ada di `public/assets/`.

Tugasmu adalah membuat ulang webpage interaktif pada reference menjadi source project Vite + Vanilla JavaScript yang bersih, maintainable, responsif, dan semirip mungkin secara visual maupun alur interaksinya. Jangan sekadar menyalin browser-saved HTML/CSS dump; rekonstruksi komponennya dengan struktur yang rapi.

Target alur yang wajib berfungsi end-to-end:
- halaman awal wallpaper + overlay + gambar kado + teks “Klik Kadonya!”;
- klik kado memulai musik (jika browser mengizinkan), menjalankan animasi, lalu meminta nama lewat SweetAlert2;
- nama wajib diisi dan maksimal 10 karakter;
- lanjut greeting + pilihan tombol kiri/kanan + confirmation/reconsideration seperti versi reference dengan GIF yang sesuai;
- kedua jalur akhirnya masuk ke scene utama;
- scene utama menampilkan stiker animasi, efek partikel jatuh, message card glassmorphism, dan efek mengetik berurutan menggunakan TypeIt;
- setelah teks selesai, tampilkan tombol `💌 Balas`;
- klik balas membuka WhatsApp dengan nomor dan pesan dari `src/config.js`, dan pesan harus URL-encoded.

Aturan implementasi:
- gunakan `src/config.js` sebagai single source of truth untuk teks, nomor WhatsApp, URL musik, batas nama, dan path asset;
- jangan gunakan inline onclick atau global state berantakan;
- gunakan class CSS/state class untuk transisi, bukan menempel string style panjang lewat JavaScript;
- jaga mobile-first, minimal sekitar lebar 320px, tanpa overflow horizontal;
- tambahkan fallback `prefers-reduced-motion`;
- efek partikel harus dibatasi agar tidak membuat DOM tumbuh tanpa batas;
- kegagalan autoplay/audio tidak boleh menghentikan flow;
- jangan tambahkan backend;
- jangan mengubah project menjadi React/Vue/Next kecuali benar-benar diperlukan;
- jangan hapus folder `reference` sebelum verifikasi selesai.

Jangan berhenti di tahap analisis atau membuat TODO. Langsung implementasikan. Setelah implementasi, jalankan `npm install`, `npm run build`, perbaiki semua error yang ditemukan, lalu lakukan smoke test alur interaksi sebisa mungkin. Jika browser automation tersedia, cek minimal satu viewport mobile dan satu desktop.

Selesai hanya jika acceptance criteria di `TASK.md` terpenuhi. Pada jawaban akhir, laporkan ringkas file yang diubah, cara menjalankan project, hasil build/test, dan bagian mana di `src/config.js` yang bisa aku personalisasi.
