<script setup>
import i18n from '@/services/i18n'
const myLocales = ['en', 'es', 'sv'] //add more locales...
let lang = localStorage.getItem('locale')
if (lang != null) {
  i18n.global.locale.value = lang
} else if (myLocales.includes(navigator.language.substring(0, 2)) == true) {
  i18n.global.locale.value = navigator.language.substring(0, 2)
  localStorage.setItem('locale', navigator.language.substring(0, 2))
} else {
  i18n.global.locale.value = 'en'
  localStorage.setItem('locale', 'en')
}
document.querySelector('html').setAttribute('lang', i18n.global.locale.value)
</script>

<template>
  <main class="grow bg-black text-white h-screen flex flex-col justify-center self-center mx-auto text-center">
    <router-view />
  </main>
</template>
