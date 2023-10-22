<script setup>
import QuoteCard from './QuoteCard.vue';

</script>
<template>
  <div class="h-[calc(100vh-88px)] w-full p-5 xl:p-10">
    <QuoteCard v-motion-slide-bottom />
  </div>
</template>

<style scoped></style>