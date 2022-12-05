import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import es from '@/locales/es'
import sv from '@/locales/sv'
// import more locales...

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en,
    es,
    sv,
  },
})

// Some extra power for different scenarios
import { nextTick } from 'vue'

export const SUPPORT_LOCALES = ['en', 'es', 'sv']

export function setupI18n(options = { locale: 'en' }) {
  const i18n = createI18n(options)
  setI18nLanguage(i18n, options.locale)
  return i18n
}

export function setI18nLanguage(i18n, locale) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }
}

export async function loadLocaleMessages(i18n, locale) {
  // load locale messages with dynamic import
  const messages = await import(`./locales/${locale}.json`)

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}

export default i18n
