<script setup>
import { onMounted, ref } from "vue";
import api from "../services/api";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { useTheme } from "@/composables/useTheme";
const { theme, applyTheme } = useTheme();

const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");
const showPassword = ref(false);
const error = ref("");
const errors = ref({});
const loading = ref(false);

onMounted(() => {
  applyTheme(theme.value);
});

const handleRegister = async () => {
  error.value = "";
  errors.value = {};
  loading.value = true;

  try {
    await api.post("/register", {
      name: name.value,
      email: email.value,
      password: password.value,
    });

    Swal.fire({
      title: "Register berhasil, silahkan login!",
      icon: "success",
      timer: 2000,
      confirmButtonColor: "#066fd1",
      showConfirmButton: false,
    });

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  } catch (err) {
    if (err.response?.data?.errors) {
      errors.value = err.response.data.errors;
    } else if (err.response?.data?.message) {
      error.value = err.response.data.message;
    }
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <router-view>
    <div class="page page-center">
      <div class="container container-tight py-4">
        <form class="card card-md" @submit.prevent="handleRegister">
          <div class="card-body">
            <h2 class="h2 text-center mb-4">Sign Up</h2>
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input
                v-model="name"
                type="text"
                class="form-control"
                placeholder="Enter name"
              />
              <small v-if="errors.name" class="text-danger">
                {{ errors.name[0] }}
              </small>
            </div>
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input
                v-model="email"
                class="form-control"
                placeholder="Enter email"
              />
              <small v-if="errors.email" class="text-danger">
                {{ errors.email[0] }}
              </small>
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <div class="input-group input-group-flat">
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  class="form-control"
                  placeholder="Password"
                  autocomplete="off"
                />

                <span class="input-group-text">
                  <a
                    href="#"
                    class="link-secondary"
                    @click.prevent="showPassword = !showPassword"
                  >
                    <svg
                      v-if="!showPassword"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                      <path
                        d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"
                      />
                      <path d="M3 3l18 18" />
                    </svg>

                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-eye"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path
                        d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"
                      />
                    </svg>
                  </a>
                </span>
              </div>
              <small v-if="errors.password" class="text-danger">
                {{ errors.password[0] }}
              </small>
            </div>
            <div class="form-footer">
              <button
                type="submit"
                class="btn btn-primary w-100"
                :disabled="loading"
              >
                <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm me-2"
                ></span>
                {{ loading ? "Loading..." : "Create new account" }}
              </button>
            </div>
          </div>
        </form>
        <div class="text-center text-secondary mt-3">
          Sudah memiliki akun? <router-link to="/login">Sign In</router-link>
        </div>
      </div>
    </div>
  </router-view>
</template>

<script>
export default {
  name: "Register",
};
</script>
