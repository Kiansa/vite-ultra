import { defineStore } from 'pinia'
export const useStore = defineStore('userData', {
  state: () => ({
    count: '0',
  }),
  persist: true,
})
