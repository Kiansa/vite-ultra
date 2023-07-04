import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import { resolve } from 'path'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, '@/locales/**'),
      defaultLocale: 'en',
      fallbackLocale: 'en',
    }),
  ],
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
  },
  server: {
    open: true,
  },
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: true,
  },
})
