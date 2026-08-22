# 💌 Interactive Sleepcall Web Page

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sleepcall.cilandry.com)
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/nafikfarel/sleepcall-page/node.js.yml?branch=main&style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/nafikfarel/sleepcall-page/actions)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

Web interaktif romantis dengan tema **ajakan sleepcall**. Dibuat menggunakan **Vite + Vanilla JavaScript**, mempersembahkan pengalaman visual yang cute, romantic, glassmorphic card, animasi stiker panda, dan pesan ketik dinamis.

🔗 **Live Demo**: [sleepcall.cilandry.com](https://sleepcall.cilandry.com)

---

## ✨ Features

- 🎁 **Interactive Gift Landing**: Halaman pembuka kado romantis dengan animasi scaling dan fade yang mulus.
- 🐼 **Playful Choice Branching**: Alur pilihan dialog (Kiri/Kanan) dengan respons stiker panda animasi yang menggemaskan.
- ✍️ **TypeIt Animated Message**: Pengetikan otomatis pesan utama (*"Good Night ya! Ayo kita sleepcall, hehe"*) pada glassmorphic card.
- 💎 **Glassmorphism UI Design**: Card transparan dengan efek skew, text-shadow, dan latar belakang blur yang estetik.
- 🎵 **Audio Player & Mute Control**: Latar musik romantis yang dilengkapi tombol kontrol audio visual.
- ❄️ **Performance-Capped Falling Particles**: Generator partikel salju melayang dengan batas maksimal **100 elemen DOM** dan jeda otomatis saat tab tidak aktif.
- 💬 **Direct WhatsApp Integration**: Tombol balasan langsung terhubung ke WhatsApp dengan isi pesan tersanitasi `encodeURIComponent`.
- ⚙️ **Centralized Config Architecture**: Seluruh teks, nomor WhatsApp, asset, dan timing dikelola pada single source of truth [`src/config.js`](./src/config.js).
- 📱 **Mobile-First & Responsive (`100dvh`)**: Tampilan optimal di semua ukuran layar dari Smartphone hingga Desktop.
- ♿ **Accessibility Support**: Mendukung preferensi CSS `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Vite** | Build tool & dev server modern berkecepatan tinggi |
| **Vanilla JavaScript (ES6+)** | Logika aplikasi yang ringan tanpa overhead framework |
| **SweetAlert2** | Custom styled interactive popup dialogs |
| **TypeIt** | Engine animasi pengetikan teks dinamis |
| **CSS3 (Vanilla)** | Glassmorphism UI, layout responsif, dan keyframe animations |

---

## 🚀 Getting Started

### Prerequisites

Pastikan Anda telah menginstal Node.js (v20.x atau yang lebih baru) dan npm.

### Installation

1. Clone repository ini:
   ```bash
   git clone https://github.com/nafikfarel/sleepcall-page.git
   cd sleepcall-page
   ```

2. Install dependensi:
   ```bash
   npm install
   ```

3. Jalankan server development:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:5173`.

4. Build untuk produksi:
   ```bash
   npm run build
   ```

---

## ⚙️ Personalization & Configuration

Anda dapat mengubah teks, nomor WhatsApp, musik, atau asset stiker tanpa perlu mengubah logika aplikasi. Edit file [`src/config.js`](./src/config.js):

```javascript
export const appConfig = {
  // Nomor WhatsApp penerima (format internasional tanpa +)
  whatsappNumber: "6287864059569",

  // URL Musik Latar
  musicUrl: "https://feeldreams.github.io/vibescorona.mp3",

  copy: {
    giftHint: "Klik Kadonya!",
    nameTitle: "Masukin Nama Kamu",
    greeting: (name) => `Hai, ${name}!`,
    choiceTitle: (name) => `${name} Pilih Tombol yang Mana?`,
    leftChoice: "Kiri",
    rightChoice: "Kanan",
    resultText: "berarti malam ini kita SleepCall ya !",
    mainMessage: "Good Night ya! Ayo kita sleepcall, hehe",
    secondaryMessage: "Jangan lupa kirim balasannya ke WhatsApp aku",
    replyButton: "💌 Balas",
    whatsappMessage: (name) => `Iyaa *${name}* mau kok kita sleepcall! ><`
  }
};
```

---

## 📁 Project Structure

```text
sleepcall-page/
├── .github/workflows/
│   └── node.js.yml        # Continuous Integration (CI) build workflow
├── public/
│   └── assets/            # GIF & Gambar stiker
├── src/
│   ├── config.js          # Single source of truth untuk teks & opsi
│   ├── main.js            # Logika alur interaksi, partikel, & TypeIt
│   └── style.css          # Styling CSS glassmorphism & animasi
├── index.html             # Entry HTML document
├── vercel.json            # Deployment configuration untuk Vercel
├── package.json           # Dependensi & script project
└── README.md              # Dokumentasi project
```

---

## 📄 License

Project ini dilisensikan di bawah [MIT License](LICENSE).

Made with ❤️ by [Nafik Farel](https://github.com/nafikfarel).
