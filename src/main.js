import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 

const saved = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-bs-theme", saved);


createApp(App)
  .use(router)
  .mount('#app')