import {defineStore} from "pinia";
import {ref} from "vue";

export const useAppStore = defineStore('app', () => {
  const projectConfig = ref({})
  return {
    projectConfig
  }
})
