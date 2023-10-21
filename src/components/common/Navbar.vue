<script setup>
import { ref } from 'vue';
import LoginIcon from '../../assets/icons/LoginIcon.vue';

const menus = ref([
  {
    id: 1,
    title: "Asosiy",
    link: '/'
  },
  {
    id: 2,
    title: "Grantlar",
    link: "/grants"
  },
  {
    id: 3,
    title: "Soliq imtiyozlari",
    link: '/tax'
  },
])
</script>
<template>
  <div class="w-full bg-white shadow-7xl">
    <div class="container mx-auto">
      <div class="h-[88px] flex items-center justify-between">
        <div class="h-[31px] flex items-center justify-center space-x-2">
          <img src="/logo_full.svg" alt="Logo" class="hidden lg:block">
          <img src="/logo_single.svg" alt="Logo single" class="lg:hidden">
          <span class="uppercase rounded-[6px] text-[12px] text-white bg-[#E94A47] p-0.5 px-2">club</span>
        </div>
        <div class="flex items-center space-x-10">
          <ul class="items-center hidden space-x-10 md:flex">
            <li v-for="(menu, idx) in menus" :key="menu.id ?? idx" class="text-sm whitespace-nowrap">
              <router-link :to="menu.link">{{ menu.title }}</router-link>
            </li>
          </ul>
          <router-link to="/auth/login" class="items-center hidden space-x-1 text-sm cursor-pointer md:flex">
            <LoginIcon />
            <p class="font-bold">Kirish</p>
          </router-link>
          <router-link to="/register" class="border-[#3366FF] text-sm text-[#3366FF] whitespace-nowrap px-8 py-2 border-2 rounded-lg">
            Ro‘yxatdan o’tish
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>