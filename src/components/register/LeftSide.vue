<script setup>
import { computed } from 'vue';
import Tab from './Tab.vue';
import { useRegisterStore } from '../../stores/register.store';

const isSubmitted = computed(() => useRegisterStore().isSubmitted)

</script>
<template>
  <div class="max-h-[calc(100vh-88px)] w-full px-20 py-16 overflow-auto">
    <div v-if="isSubmitted" class="space-y-7">
      <div class="flex items-center justify-center">
        <img src="/successfully_submit.png" alt="icon">
      </div>
      <div class="w-full text-center">
        <h1 class="text-base font-medium">Ma’lumotlar tekshirish uchun yuborildi.</h1>
        <p class="text-[#B2B7C1] text-xs">Tez orada siz bilan operatorimiz bog’lanib, barcha ma’lumotlarni aniqlashtiradi.
        </p>
      </div>
      <pre>{{ formData }}</pre>
    </div>
    <div v-else>
      <h1 class="text-[40px] font-bold leading-[56px] tracking-[1%]">Homiy sifatida ariza <br> topshirish</h1>
      <div>
        <Tab />
      </div>
    </div>
  </div>
</template>

<style scoped></style>