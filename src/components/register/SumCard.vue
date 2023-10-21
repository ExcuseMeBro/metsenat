<script setup>
import CheckedIcon from '../../assets/icons/CheckedIcon.vue';
import { useCurrencyFormatter } from '../../composables/useMoneyFomatter';

const props = defineProps({
  isSelected: { default: false },
  price: { required: true }
})
</script>
<template>
  <div :class="props.isSelected ? 'border-[#2E5BFF]' : 'border-[#E0E7FF]'" class="relative cursor-pointer rounded-[5px] border-2 h-[60px] flex items-center justify-center">
    <CheckedIcon v-show="props.isSelected" class="absolute -right-2 -top-2"/>
    <p class="text-lg font-medium uppercase">{{ useCurrencyFormatter(props.price) }}</p><span class="uppercase text-xs ml-1 text-[#2E5BFF]">uzs</span>
  </div>
</template>


<style scoped></style>