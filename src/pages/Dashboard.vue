<script setup>
import { onMounted, ref } from "vue";
import api from "../services/api";
import Swal from "sweetalert2";
import { useTheme } from "@/composables/useTheme";
import Footer from "@/components/Footer.vue";
const { theme, applyTheme } = useTheme();

const user = ref(null);

onMounted(async () => {
  applyTheme(theme.value);
  try {
    const res = await api.get("/me");
    user.value = res.data.user;
  } catch (e) {
    console.log("Belum login / token invalid");
  }
});

const handleLogout = async () => {
  const result = await Swal.fire({
    title: "Yakin mau logout?",
    text: "Kamu akan keluar dari akun ini",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#066fd1",
    confirmButtonText: "Ya, logout",
    cancelButtonText: "Batal",
    reverseButtons: true,
  });

  if (result.isConfirmed) {
    try {
      await api.post("/logout");

      await Swal.fire({
        icon: "success",
        title: "Berhasil logout",
        timer: 1500,
        showConfirmButton: false,
      });

      window.location.href = "/login";
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Logout gagal",
        text: "Silakan coba lagi",
      });
    }
  }
};
</script>

<template>
  <router-view>
    <div class="page-wrapper">
      <div class="page-header d-print-none" aria-label="Page header">
        <div class="container-xl">
          <div class="row g-2 align-items-center">
            <div class="mb-3">
              <label class="form-label">Theme</label>
              <div class="form-selectgroup">
                <label class="form-selectgroup-item">
                  <input
                    type="radio"
                    value="light"
                    v-model="theme"
                    @change="applyTheme(theme)"
                    class="form-selectgroup-input"
                  />
                  <span class="form-selectgroup-label">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-3"
                    >
                      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                      <path
                        d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
                      ></path>
                    </svg>
                  </span>
                </label>

                <label class="form-selectgroup-item">
                  <input
                    type="radio"
                    value="dark"
                    v-model="theme"
                    @change="applyTheme(theme)"
                    class="form-selectgroup-input"
                  />
                  <span class="form-selectgroup-label"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-3"
                    >
                      <path
                        d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
            </div>
            <div class="col">
              <h2 class="page-title">Dashboard</h2>
            </div>
            <div class="col text-end">
              <button class="btn btn-primary" @click="handleLogout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-logout"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                  />
                  <path d="M9 12h12l-3 -3" />
                  <path d="M18 15l3 -3" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="page-body">
        <div class="container-xl">
          <div class="card">
            <div class="card-body">
              <div v-if="user">
                <pre>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="text-reset" >{{ user.name }}</a><br>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ user.email }}<br>Created At&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ user.created_at }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  </router-view>
</template>

<style>
html, body {
  height: 100%;
}

.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-body {
  flex: 1;
}
</style>

<script>
export default {
  name: "Dashboard",
};

</script>
