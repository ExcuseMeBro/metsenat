<script setup>
import { ref } from 'vue';
import LegalEntity from './forms/LegalEntity.vue';
import PhysicalPerson from './forms/PhysicalPerson.vue';

const isLegal = ref(false)

</script>
<template>
  <div>
    <div class="flex items-center w-full mt-10 uppercase">
      <div @click="isLegal = false" :class="!isLegal ? 'border-[#3366FF] text-white bg-[#3366FF]': 'border-[#E0E7FF] text-[#3366FF99]'"
        class="border-l-2 cursor-pointer border-y-2  text-xs tracking-[1.13px] font-medium rounded-l-md flex-1 h-10 flex items-center justify-center">
        Jismoniy shaxs
      </div>
      <div @click="isLegal = true" :class="isLegal ? 'border-[#3366FF] text-white bg-[#3366FF]': 'border-[#E0E7FF] text-[#3366FF99]'"
        class="border-r-2 border-y-2 cursor-pointer text-xs tracking-[1.13px] font-medium rounded-r-md flex-1  h-10 flex items-center justify-center">
        Yuridik shaxs
      </div>
    </div>
    <div class="mt-7">
      <LegalEntity v-if="isLegal" v-motion-slide-right />
      <PhysicalPerson v-else v-motion-slide-left />
    </div>
  </div>
</template>


<style scoped></style>