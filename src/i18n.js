import { createI18n } from 'vue-i18n'
import { nextTick } from 'vue'
import messages from '@intlify/unplugin-vue-i18n/messages'
export const SUPPORT_LOCALES = ['en', 'es', 'sv']  // add more locales

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages,
})

// Some extra power for different scenarios

export function setupI18n(options = {
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages,
}) {
  const i18n = createI18n(options)
  setI18nLanguage(i18n, options.locale)
  // loadLocaleMessages(i18n, options.locale)
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
