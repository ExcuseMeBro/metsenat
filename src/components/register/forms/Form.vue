<script setup>
import { computed, reactive, ref, watch } from 'vue';
import { vMaska } from "maska"
import SumCard from '../SumCard.vue';
import CheckedIcon from '../../../assets/icons/CheckedIcon.vue';
import SpinnerIcon from '../../../assets/icons/SpinnerIcon.vue';
import { useRegisterStore } from '../../../stores/register.store';
import { cleanObjectEmptyFields } from '../../../helpers/cleanEmptyFields.js'
import { toast } from "vue-sonner";

const props = defineProps({
  isLegalForm: { required: true }
})

const payment_amounts = ref([
  1000000,
  5000000,
  7000000,
  10000000,
  30000000
])
const isSelectedAnother = ref(false)

const getSelectedAmount = (pa) => {
  isSelectedAnother.value = false
  formData.payment_amount = pa
}

const formData = reactive({
  full_name: '',
  phone: '',
  payment_amount: null,
  company_name: ''
})
const isLoading = computed(() => useRegisterStore().isLoading)

const submitData = () => {
  if (!formData.full_name) {
    toast.error("Iltimos, ismingizni kiriting!")
  } else if (!formData.phone) {
    toast.error("Iltimos, telefon raqamingizni kiriting!")
  } else if (!formData.payment_amount) {
    toast.error("Iltimos, summani kiriting!")
  } else if (props.isLegalForm && !formData.company_name) {
    toast.error("Iltimos, tashkilot nomini kiriting!")
  } else {
    useRegisterStore().register(cleanObjectEmptyFields(formData))
  }
}
</script>
<template>
  <div class="space-y-7">
    <div class="flex flex-col space-y-2">
      <label for="full_name" class="text-xs font-medium uppercase">F.I.Sh. (Familiya Ism Sharifingiz)</label>
      <input type="text" v-model="formData.full_name" id="full_name" placeholder="Abdullayev Abdulla Abdulla o`g`li"
        class="h-[42px] custom-input-bg border bg-[#e0e7ff3b] px-3 border-[#E0E7FF] outline-none rounded-md">
    </div>
    <div class="flex flex-col space-y-2">
      <label for="phone" class="text-xs font-medium uppercase">Telefon raqamingiz</label>
      <div class="relative w-full">
        <span class="absolute -translate-y-1/2 top-1/2 left-3">+998</span>
        <input v-maska data-maska="## ###-##-##" v-model="formData.phone" id="phone" placeholder="00 000-00-00"
          class="h-[42px] custom-input-bg border bg-[#e0e7ff3b] w-full px-3 pl-14 border-[#E0E7FF] outline-none rounded-md">
      </div>
    </div>
    <div class="flex flex-col space-y-2">
      <p class="text-xs font-medium uppercase">To‘lov summasi</p>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div v-for="(pa, idx) in payment_amounts" :key="idx">
          <SumCard @click="getSelectedAmount(pa)" :is-selected="formData.payment_amount === pa" :price="pa"
            class="flex" />
        </div>
        <div @click="isSelectedAnother = true" :class="isSelectedAnother ? 'border-[#2E5BFF]' : 'border-[#E0E7FF]'"
          class="relative cursor-pointer rounded-[5px] border-2 h-[60px] flex items-center justify-center">
          <CheckedIcon v-if="isSelectedAnother" v-motion-pop class="absolute -right-2 -top-2" />
          <p class="text-lg font-medium uppercase">Boshqa</p>
        </div>
      </div>
      <div v-if="isSelectedAnother" v-motion-slide-left class="flex col-span-3 space-y-2">
        <input type="text" v-maska data-maska="0.99" data-maska-tokens="0:\d:multiple|9:\d:optional"
          v-model="formData.payment_amount" placeholder="0"
          class="h-[42px] custom-input-bg border bg-[#e0e7ff3b] w-full px-3 border-[#E0E7FF] outline-none rounded-md">
      </div>
    </div>
    <div v-if="props.isLegalForm" v-motion-slide-left class="flex flex-col space-y-2">
      <label for="company_name" class="text-xs font-medium uppercase">Tashkilot nomi</label>
      <input type="text" v-model="formData.company_name" id="company_name" placeholder="Orient group"
        class="h-[42px] custom-input-bg border bg-[#e0e7ff3b] px-3 border-[#E0E7FF] outline-none rounded-md">
    </div>
    <button v-if="isLoading" disabled
      class="h-[50px] w-full font-medium text-[15px] bg-[#5578f9] rounded-md flex items-center justify-center text-white">
      <SpinnerIcon class="mr-2 w-7 h-7" />
      Yuborilmoqda...
    </button>
    <button v-else @click="submitData()"
      class="h-[50px] w-full font-medium text-[15px] bg-[#2E5BFF] rounded-md flex items-center justify-center text-white">
      Yuborish
    </button>
  </div>
</template>


<style scoped></style>