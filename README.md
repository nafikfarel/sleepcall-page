# Ahmeds — VS Code Agent Rebuild Pack

Paket ini disiapkan dari archive reference yang diberikan user. Tujuannya agar project bisa dibuka di VS Code dan langsung dikerjakan oleh coding agent (mis. GitHub Copilot Agent mode atau agent lain yang membaca workspace instructions).

## Cara pakai
1. Extract ZIP ini.
2. Buka folder hasil extract di VS Code.
3. Pastikan Node.js + npm tersedia.
4. Buka coding agent di VS Code.
5. Copy seluruh isi `PROMPT_AWAL.md` sebagai prompt pertama.
6. Biarkan agent membaca `AGENTS.md`, `TASK.md`, dan folder `reference/` lalu mengimplementasikan project.

## Struktur penting
- `PROMPT_AWAL.md` — prompt pertama siap copy/paste.
- `AGENTS.md` — instruksi lintas-agent.
- `.github/copilot-instructions.md` — context otomatis untuk GitHub Copilot di workspace.
- `TASK.md` — spesifikasi & acceptance criteria.
- `reference/original/` — HTML/CSS/JS utama yang sudah dipisahkan untuk inspeksi cepat.
- `reference/snapshot/` — snapshot asli lengkap dengan struktur file browser-save, jika agent ingin menjalankan/membandingkan versi sumber.
- `public/assets/` — asset visual yang sudah diekstrak.
- `src/config.js` — seluruh nilai yang mudah dipersonalisasi.
- `src/main.js`, `src/style.css` — starter shell yang harus dilanjutkan agent.

## Menjalankan
```bash
npm install
npm run dev
```

Build production:
```bash
npm run build
npm run preview
```

## Catatan personalisasi
Setelah rebuild selesai, ubah nomor WhatsApp, teks, URL musik, atau asset mapping melalui `src/config.js`.
