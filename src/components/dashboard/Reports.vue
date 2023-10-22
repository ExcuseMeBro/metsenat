<script setup>
import { ref } from 'vue';
import MoneyIcon from '../../assets/icons/MoneyIcon.vue'
import { useCurrencyFormatter } from '../../composables/useMoneyFomatter';


const totalAmountInfos = ref([
  {
    id: 1,
    title: 'Jami to‘langan summa',
    color: '#4C6FFF1A',
    iconColor: '#4C6FFF',
    amount: 1684325000
  },
  {
    id: 2,
    title: 'Jami so‘ralgan summa',
    color: '#EDC7001A',
    iconColor: '#EDC700',
    amount: 14098530000
  },
  {
    id: 3,
    title: 'To‘lanishi kerak summa',
    color: '#ED72001A',
    iconColor: '#ED7200',
    amount: 12414205000
  },
])
</script>
<template>
  <div class="container mx-auto">
    <div class="flex items-center w-full space-x-7 my-7">
      <div v-for="(card, idx) in totalAmountInfos" :key="idx" class="flex items-center flex-1 h-24 px-6 space-x-4 bg-white rounded-lg">
        <div :style="`background-color: ${card.color}`" class="flex items-center justify-center w-12 h-12 rounded-xl">
          <MoneyIcon :style="`color: ${card.iconColor}`"/>
        </div>
        <div>
          <p class="font-[400] text-[#7A7A9D]">{{ card.title }}</p>
          <p class="text-xl font-bold">{{ useCurrencyFormatter(card.amount) }} <span class="uppercase text-[#B2B7C1] ml-1">uzs</span></p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>