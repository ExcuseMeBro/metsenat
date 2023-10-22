<script setup>
import { computed, reactive, ref, watch } from 'vue';
import ClubLogo from '../components/common/ClubLogo.vue';
import SpinnerIcon from '../assets/icons/SpinnerIcon.vue';
import { useAuthStore } from '../stores/auth.store';

const { login } = useAuthStore()

const loginData = reactive({
  login: '',
  password: ''
})

const isLoading = computed(() => useAuthStore().isLoading)

const loginDashboard = () => {
  login(loginData.login, loginData.password)
}
</script>
<template>
  <div class="flex flex-col items-center bg-[#F5F5F7] justify-center w-full h-screen">
    <ClubLogo />
    <div class="p-8 mt-12 bg-white w-96 shadow-6xl rounded-xl space-y-7">
      <h1 class="text-2xl font-bold">Kirish</h1>
      <div class="flex flex-col space-y-2 mt-11">
        <label for="login" class="text-xs font-medium uppercase">Login</label>
        <input type="text" v-model="loginData.login" id="login" placeholder="adm8904"
          class="h-[42px] custom-input-bg border bg-[#e0e7ff3b] px-3 border-[#E0E7FF] outline-none rounded-md">
      </div>
      <div class="flex flex-col space-y-2">
        <label for="password" class="text-xs font-medium uppercase">Parol</label>
        <input type="password" v-model="loginData.password" id="password" placeholder="*******"
          class="h-[42px] custom-input-bg border bg-[#e0e7ff3b] px-3 border-[#E0E7FF] outline-none rounded-md">
      </div>
      <button v-if="isLoading" disabled
        class="h-[50px] w-full font-medium text-[15px] bg-[#5578f9] rounded-md flex items-center justify-center text-white">
        <SpinnerIcon class="mr-2 w-7 h-7" />
        Ma'lumotlar tekshirilmoqda...
      </button>
      <button v-else @click="loginDashboard()"
        class="h-[50px] w-full font-medium text-[15px] bg-[#2E5BFF] rounded-md flex items-center justify-center text-white">
        Kirish
      </button>
    </div>
  </div>
</template>

<style scoped></style>