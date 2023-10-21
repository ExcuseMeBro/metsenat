<script setup>
import QuoteCard from './QuoteCard.vue';
import ClipImg from '../../assets/icons/ClipImg.vue';

</script>
<template>
  <div class="h-[calc(100vh-88px)] w-full relative overflow-hidden p-10">
    <QuoteCard />
    <ClipImg class="w-[80%] absolute -bottom-32 right-0 z-0" />
  </div>
</template>

<style scoped></style>