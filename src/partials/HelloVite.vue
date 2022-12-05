<script setup>
import { ref } from 'vue'
import { useStore } from '@/services/store'
const store = useStore()
defineProps({
  msg: String,
})
</script>

<template>
  <h1 class="my-8 text-7xl font-extrabold">{{ msg }}</h1>

  <div class="space-y-4">
    <button class="bg-purple-700 py-2 px-6 rounded-full font-bold text-xl my-4" type="button" @click="store.count++">count is {{ store.count }}</button>
    <p class="text-white text-sm font-bold">
      Edit
      <code class="bg-gray-900 py-1 px-2 mx-2 rounded-lg">partials/HelloVite.vue</code> to test HMR and Pinia (+persist)
    </p>
  </div>
  <div class="leading-0 text-base space-y-1 my-2">
    <p>Vue I18n configured with auto detection based on browser language</p>
    <p>
      Install
      <a class="bg-purple-800 rounded-full px-4" href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
  </div>
</template>
