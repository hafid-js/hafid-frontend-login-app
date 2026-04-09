# Frontend - Sistem Login (Vue)

Frontend untuk sistem autentikasi (login & dashboard) menggunakan Vue 3 + Vite.
Terhubung dengan backend Laravel yang menggunakan JWT + HttpOnly Cookie.

---

## Tech Stack

* Vue 3
* Vite
* Vue Router
* Axios
* Tabler UI
* SweetAlert2

---

## Requirement

* Node.js >= 20
* Backend API sudah berjalan (Laravel)

---

## Cara Menjalankan

```bash
git clone https://github.com/hafid-js/hafid-frontend-login-app.git
cd hafid-frontend-login-app
npm install
npm run dev
```

Akses di:
http://localhost:5173

---

## Konfigurasi API

Pastikan base URL mengarah ke backend Laravel, contoh:

```js
// services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  withCredentials: true
});

export default api;
```

---

## Fitur

* Register
* Login
* Logout
* Validasi form login & register
* Proteksi halaman dashboard
* Ambil data user (`/me`)
* Dark mode toggle
* Alert menggunakan SweetAlert2

---

## Sistem Autentikasi

* User dapat melakukan registrasi melalui endpoint `/api/register`
* Setelah register, user dapat login menggunakan akun yang telah dibuat
* Login akan mengirim request ke backend
* Backend mengembalikan JWT dalam HttpOnly Cookie
* Cookie otomatis dikirim di setiap request
* Halaman dashboard hanya bisa diakses jika sudah login
* Logout akan menghapus sesi

---

## Catatan

* Project ini menggunakan HttpOnly Cookie, sehingga token tidak bisa diakses dari JavaScript
* Pastikan `withCredentials: true` di Axios agar cookie ikut terkirim
* Backend dan frontend harus menggunakan domain yang sama (misalnya 127.0.0.1)

---

## Alur Aplikasi

1. User melakukan registrasi (opsional)
2. User login melalui form
3. Backend mengirim cookie (JWT)
4. Frontend redirect ke dashboard
5. Request ke `/me` untuk ambil data user
6. User dapat melakukan logout
7. Logout akan menghapus sesi (cookie)
8. Jika token tidak valid → kembali ke login

---

## Catatan Tambahan

* UI menggunakan Tabler
* Project ini dibuat menggunakan sistem login fullstack (Laravel + Vue)
