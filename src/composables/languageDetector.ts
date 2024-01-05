import i18n, { SUPPORT_LOCALES } from '@/i18n'
import { useNavigatorLanguage, usePreferredLanguages } from '@vueuse/core'

export function useLanguageDetector() {
  const navigatorLanguage = useNavigatorLanguage()
  const preferredLanguages = usePreferredLanguages()

  const setLanguageAndStorage = (language: string) => {
    try {
      localStorage.setItem('locale', language)
      i18n.global.locale.value = language
      document.querySelector('html')?.setAttribute('lang', language)
    } catch (error) {
      console.error('Error setting the language:', error)
    }
  }

  const checkAndSetLocale = () => {
    const storedLocale = localStorage.getItem('locale')

    if (storedLocale) {
      setLanguageAndStorage(storedLocale)
    } else if (SUPPORT_LOCALES.includes(navigatorLanguage.language.value)) {
      setLanguageAndStorage(navigatorLanguage.language.value)
    } else {
      const foundLocale = preferredLanguages.value.find((lang) => SUPPORT_LOCALES.includes(lang)) || 'en'
      setLanguageAndStorage(foundLocale)
    }
  }

  checkAndSetLocale()

  return {
    setLocale: (language: string) => {
      setLanguageAndStorage(language)
    },
  }
}
