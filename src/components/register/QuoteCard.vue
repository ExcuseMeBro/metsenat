<script setup>
import QuoteIcon from '../../assets/icons/QuoteIcon.vue';

</script>
<template>
  <div class="relative px-6 pt-5 w-[95%] h-28">
    <QuoteIcon class="absolute top-0 left-0 z-0" />
    <QuoteIcon class="absolute bottom-0 right-0 z-0 rotate-180" />
    <p class="relative text-xl z-1">Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi. Ayni oʻsha paytda
      ularni oʻzlari oʻrgangan muhitdan ajratib qoʻymaslik kerak.</p>
    <div class="flex items-center mt-5 space-x-4">
      <img src="/shavkat_m.png" alt="Author" class="rounded-2xl w-14 h-14">
      <div class="flex flex-col items-left">
        <h1 class="font-[600] whitespace-nowrap">Shavkat Mirziyoyev</h1>
        <p class="font-[400] text-[#86868B]">O‘zbekiston Respublikasi Prezidenti</p>
      </div>
    </div>
  </div>
</template>


<style scoped></style>