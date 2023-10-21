<script setup>
import LeftSide from '../components/register/LeftSide.vue';
import RightSide from '../components/register/RightSide.vue';


</script>
<template>
  <div class="flex items-center h-[calc(100vh-88px)] w-full">
    <div class="basis-[60%] bg-white">
      <LeftSide />
    </div>
    <div class="basis-[40%] bg-gray-100">
      <RightSide />
    </div>
  </div>
</template>


<style scoped></style>