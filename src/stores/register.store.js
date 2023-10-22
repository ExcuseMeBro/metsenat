import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegisterStore = defineStore("register", () => {
  const isLoading = ref(false);
  const isSubmitted = ref(false);
  const formData = ref(null);

  function register(data) {
    console.log(data);
    formData.value = data
    isLoading.value = true;
    setTimeout(() => {
      isSubmitted.value = true
    }, 1000)
    // Register service call here
  }

  return { isLoading, isSubmitted, register };
});
