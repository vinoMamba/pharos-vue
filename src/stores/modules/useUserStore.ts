import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserInfoStore = defineStore('userInfo', () => {
  const corpId = ref('')
  const userInfo = ref(null)
  const setCorpId = (newId: string) => {
    corpId.value = newId
  }

  const setupLogin = (authCode: string) => {
    //TODO login api 
    console.log(authCode);
    return userInfo
  }

  return {
    corpId,
    setCorpId,
    setupLogin,
  }
})
