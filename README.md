# Thesis Garden 2026 — Cloudflare-ready

Versi ini sengaja dibuat STATIC agar bisa langsung dipasang di Cloudflare Pages / Cloudflare static hosting.

## Struktur

- index.html
- style.css
- app.js
- assets/

## Deploy ke Cloudflare Pages

1. Upload folder ini ke repository GitHub/GitLab, atau gunakan Direct Upload.
2. Untuk project static:
   - Build command: kosongkan
   - Build output directory: `/` (atau root project)
3. Deploy.
4. Tidak membutuhkan PHP, MySQL, Node.js, atau backend.

## Catatan progress

Checklist disimpan menggunakan `localStorage`.

Artinya:
- progress tetap tersimpan setelah refresh
- progress tersimpan di browser/device yang digunakan
- progress TIDAK otomatis sinkron antar-device

Kalau nanti mau login + sinkronisasi antar-device, versi berikutnya bisa memakai Cloudflare Workers + D1 atau Supabase.

## Customization

Semua warna utama ada di bagian `:root` dalam style.css.
