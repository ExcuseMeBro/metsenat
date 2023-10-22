import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  user.value = JSON.parse(localStorage.getItem("user"));

  function login(login, password) {
    console.log(login, password);
    user.value = {
      name: "Tester",
    };
    localStorage.setItem("user", JSON.stringify(user.value));
  }

  function logout() {
    localStorage.clear();
    user.value = null;
    window.location.reload()
  }

  return { user, login, logout };
});
