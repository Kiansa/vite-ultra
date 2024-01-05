<script setup>
import { ref } from 'vue'
import { useStore } from '@/stores/store'
const store = useStore()
defineProps({
  msg: String,
})
</script>

<template>
  <h1 class="my-8 text-7xl font-extrabold">{{ msg }}</h1>

  <div class="space-y-4">
    <button class="my-4 rounded-full bg-purple-700 px-6 py-2 text-xl font-bold" type="button" @click="store.count++">count is {{ store.count }}</button>
    <p class="text-sm font-bold text-white">
      Edit
      <code class="mx-2 rounded-lg bg-gray-900 px-2 py-1">partials/HelloVite.vue</code> to test HMR and Pinia (+persist)
    </p>
  </div>
  <div class="leading-0 my-2 space-y-1 text-base">
    <p>Vue I18n {{ $t('index.i18n') }}</p>
    <p>
      Install
      <a class="rounded-full bg-purple-800 px-4" href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
  </div>
</template>
