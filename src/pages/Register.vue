<script setup>
import ClipImg from '../assets/icons/ClipImg.vue';
import LeftSide from '../components/register/LeftSide.vue';
import RightSide from '../components/register/RightSide.vue';


</script>
<template>
  <div class="relative left-0 right-0 flex flex-col md:flex-row items-center h-[calc(100vh-88px)] w-full">
    <div class="basis-[60%] bg-white">
    </div>
    <div class="relative basis-[40%] hidden md:block bg-gray-100 h-[calc(100vh-88px)] w-full overflow-hidden">
      <ClipImg v-motion-pop class="absolute right-0 z-0 w-full -bottom-32" />
    </div>
    <div class="container absolute -translate-x-1/2 left-1/2">
      <div class="flex flex-col md:flex-row items-center h-[calc(100vh-88px)] w-full">
        <div class="basis-[60%]">
          <LeftSide />
        </div>
        <div class="basis-[40%] relative overflow-hidden hidden md:block">
          <RightSide />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>