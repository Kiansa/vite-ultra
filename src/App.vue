<script setup>
import { useLanguageDetector } from '@/composables/languageDetector'
useLanguageDetector()
</script>

<template>
  <main class="mx-auto flex h-screen grow flex-col justify-center self-center bg-black text-center text-white">
    <router-view />
  </main>
</template>
