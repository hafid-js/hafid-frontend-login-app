import { ref } from "vue";

const theme = ref(localStorage.getItem("theme") || "light");

const applyTheme = (value) => {
  document.documentElement.setAttribute("data-bs-theme", value);
  localStorage.setItem("theme", value);
  theme.value = value;
};

export function useTheme() {
  return {
    theme,
    applyTheme,
  };
}