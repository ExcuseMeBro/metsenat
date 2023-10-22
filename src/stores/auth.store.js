import { defineStore } from "pinia";
import { ref } from "vue";
import authService from "../services/auth.service";
import { useRouter } from "vue-router";
import { toast } from "vue-sonner";

const router = useRouter();

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const isLoading = ref(false);
  user.value = JSON.parse(localStorage.getItem("user"));

  function login(login, password) {
    console.log(login, password);
    isLoading.value = true;
    authService
      .login({
        login: login,
        password: password,
      })
      .then((res) => {
        console.log(res?.data);
        localStorage.setItem("user", JSON.stringify(res?.data));
        router.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Login yoki parol noto`g`ri!");
      })
      .finally(() => {
        isLoading.value = false;
      });
  }

  function logout() {
    authService.logout();
    user.value = null;
    window.location.reload();
  }

  return { user, login, logout, isLoading };
});
