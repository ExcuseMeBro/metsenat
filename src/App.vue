<script setup>
import { Toaster } from 'vue-sonner'
import { useRecaptchaProvider } from 'vue-recaptcha/head'
useRecaptchaProvider()
</script>

<template>
  <Toaster position="bottom-right" />
  <router-view></router-view>
</template>

<style scoped></style>
