import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserInfoStore = defineStore('userInfo', () => {
  const corpId = ref('')
  const setCorpId = (newId: string) => {
    corpId.value = newId
  }

  return {
    setCorpId
  }
})
