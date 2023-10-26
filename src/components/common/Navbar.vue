<script setup>
import { ref } from 'vue';
import LoginIcon from '../../assets/icons/LoginIcon.vue';
import ClubLogo from './ClubLogo.vue';

const menus = ref([
  {
    id: 1,
    title: "Asosiy",
    link: '/register'
  },
  {
    id: 2,
    title: "Grantlar",
    link: "/register"
  },
  {
    id: 3,
    title: "Soliq imtiyozlari",
    link: '/register'
  },
])
</script>
<template>
  <div class="relative z-50 w-full bg-white shadow-7xl">
    <div class="container mx-auto">
      <div class="h-[88px] flex items-center justify-between mx-5 sm:mx-0">
        <ClubLogo />
        <div class="flex items-center space-x-10">
          <ul class="items-center hidden space-x-10 md:flex">
            <li v-for="(menu, idx) in menus" :key="menu.id ?? idx" class="text-sm whitespace-nowrap">
              <router-link :to="menu.link">{{ menu.title }}</router-link>
            </li>
          </ul>
          <router-link to="/auth/login" class="flex items-center space-x-1 text-sm cursor-pointer">
            <LoginIcon />
            <p class="hidden font-bold sm:block">Kirish</p>
          </router-link>
          <a href="/register"
            class="hidden sm:block border-[#3366FF] text-sm text-[#3366FF] whitespace-nowrap px-8 py-2 border-2 rounded-lg">
            Ro‘yxatdan o’tish
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>