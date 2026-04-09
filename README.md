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


---

## Screenshots

<img width="1680" height="1050" alt="Tangkapan Layar 2026-04-09 pukul 10 41 02 PM" src="https://github.com/user-attachments/assets/c3a29858-0037-4c14-bb20-55455112eda7" />

<img width="1680" height="1050" alt="Tangkapan Layar 2026-04-09 pukul 10 41 14 PM" src="https://github.com/user-attachments/assets/c34d3392-a070-47f3-be0f-dce729093d1d" />

<img width="1680" height="1050" alt="Tangkapan Layar 2026-04-09 pukul 10 41 50 PM" src="https://github.com/user-attachments/assets/e91608fa-b934-4d9c-bf71-6b7c06f7b941" />

<img width="1680" height="1050" alt="Tangkapan Layar 2026-04-10 pukul 6 24 37 AM" src="https://github.com/user-attachments/assets/18e76ee4-726a-4e62-b656-2a8ec3789823" />

<img width="1680" height="1050" alt="Tangkapan Layar 2026-04-09 pukul 10 42 48 PM" src="https://github.com/user-attachments/assets/39b72979-561a-4791-86ce-3594b7720312" />

<img width="940" height="1902" alt="iPhone-12-PRO-127 0 0 1" src="https://github.com/user-attachments/assets/55afa9cf-593a-4d4f-823d-e99811870c11" />

<img width="940" height="1902" alt="iPhone-12-PRO-127 0 0 1 (1)" src="https://github.com/user-attachments/assets/3223287c-1d8f-4efb-a7c6-3979b902fb49" />

<img width="940" height="1902" alt="iPhone-12-PRO-127 0 0 1 (4)" src="https://github.com/user-attachments/assets/0dab0c80-c8d8-4e69-870c-46c83753e37d" />

<img width="940" height="1902" alt="iPhone-12-PRO-127 0 0 1 (2)" src="https://github.com/user-attachments/assets/700f3936-ced8-49bb-b83c-6238c377efb7" />

<img width="940" height="1902" alt="iPhone-12-PRO-127 0 0 1 (3)" src="https://github.com/user-attachments/assets/bf57f448-a59b-4091-bdea-c08d68af64ba" />











