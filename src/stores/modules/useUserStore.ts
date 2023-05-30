import {defineStore} from "pinia";
import {ref} from "vue";
import {dingtalkLogin} from "/@/api/login";

export const useUserInfoStore = defineStore('userInfo', () => {
  const corpId = ref('')
  const userInfo = ref(null)
  const setCorpId = (newId: string) => {
    corpId.value = newId
  }

  const setupLogin = async (authCode: string) => {
    const data = await dingtalkLogin(authCode)
    console.log(data.tokenInfo);
    console.log(data.userInfo);
    return userInfo
  }

  return {
    corpId,
    setCorpId,
    setupLogin,
  }
})
