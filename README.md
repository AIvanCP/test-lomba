# Lomba Sains Semarang 2026

Landing page responsif untuk kompetisi sains tingkat SD, SMP, dan SMA se-Semarang.

## 🎯 Fitur Utama

- **Responsive Design**: Optimal di semua ukuran layar (mobile, tablet, desktop)
- **Modern UI**: Desain bersih dengan Tailwind CSS
- **Interactive Elements**: 
  - Mobile menu toggle dengan smooth animation
  - FAQ accordion yang mudah digunakan
  - Smooth scroll navigation
  - Scroll-to-top button
- **Accessibility**: Semantic HTML dan keyboard navigation support
- **Performance**: Optimized dengan Intersection Observer untuk animasi

## 🛠️ Teknologi

- HTML5
- Tailwind CSS 4.x (via CDN)
- Vanilla JavaScript (ES6+)
- Google Fonts (Plus Jakarta Sans, Space Grotesk)

## 📂 Struktur File

```
lombain/
├── index.html          # Halaman utama
├── script.js           # JavaScript untuk interaktivitas
├── package.json        # NPM dependencies
├── tailwind.config.js  # Konfigurasi Tailwind (opsional)
├── input.css          # Source CSS (opsional)
└── README.md          # Dokumentasi
```

## 🎨 Sections

1. **Hero Section**: Judul utama, CTA, dan statistik
2. **Tentang**: Informasi event (tanggal, lokasi, kategori)
3. **Feature Blocks**: Kategori peserta, jadwal, hadiah, poster
4. **Call to Action**: Banner pendaftaran dengan trust indicators
5. **Download**: Poster dan buku panduan
6. **FAQ**: Pertanyaan yang sering diajukan (accordion)
7. **Footer**: Navigasi, kontak, dan social media

## 🚀 Cara Menggunakan

### Quick Start (Langsung Buka)

1. Clone atau download repository
2. Buka `index.html` di browser
3. Selesai! Tidak perlu build process.

### Development (Dengan NPM)

```bash
# Install dependencies
npm install

# Buka di browser (Windows)
npm run dev

# Preview
npm run preview
```

## 🎨 Customization

### Warna

Edit konfigurasi Tailwind di `<script>` tag di `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: { ... },  // Ubah warna primer
                accent: { ... }    // Ubah warna aksen
            }
        }
    }
}
```

### Font

Ganti Google Fonts di `<link>` tag dan update config:

```javascript
fontFamily: {
    sans: ['Font Baru', 'sans-serif'],
    display: ['Font Display', 'sans-serif'],
}
```

### Konten

Semua konten berada di `index.html`. Edit langsung teks, emoji, atau link sesuai kebutuhan.

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

- Gunakan lazy loading untuk gambar (sudah tersedia di script.js)
- Compress poster/PDF sebelum upload
- Pertimbangkan untuk self-host fonts jika ingin performa maksimal

## 🔧 Untuk Integrasi Laravel

Landing page ini siap diintegrasikan ke Laravel:

1. Pindahkan `index.html` ke `resources/views/landing.blade.php`
2. Pindahkan `script.js` ke `public/js/`
3. Update asset paths menggunakan `{{ asset() }}` helper
4. Gunakan `@yield` atau `@include` untuk modular structure

```blade
<!-- Contoh integrasi -->
<script src="{{ asset('js/script.js') }}"></script>
```

## 📝 To-Do untuk Production

- [ ] Ganti placeholder links dengan URL real
- [ ] Upload poster/PDF yang sebenarnya
- [ ] Implementasi form pendaftaran (Google Forms/backend)
- [ ] Setup Google Analytics
- [ ] Test accessibility dengan screen reader
- [ ] Optimize images/assets
- [ ] Setup meta tags untuk SEO

## 📄 License

Bebas digunakan untuk keperluan pendidikan dan kompetisi.

## 👨‍💻 Dibuat dengan

- Tailwind CSS untuk styling
- JavaScript vanilla untuk interaktivitas
- Love untuk edukasi sains! 🔬

---

**Lomba Sains Semarang 2026** - Jelajahi Dunia Ilmu Pengetahuan! 🚀
