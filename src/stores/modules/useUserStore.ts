import {defineStore} from "pinia";
import {ref} from "vue";
import {dingtalkLogin} from "/@/api/login";
import type {User} from "/#/types";
import {router} from "/@/router";
import {usePermissionStore} from "./usePermission";
import type {RouteRecordRaw} from "vue-router";

export const useUserInfoStore = defineStore('userInfo', () => {
  const corpId = ref('')
  const userInfo = ref<User | null>(null)
  const token = ref('')

  const setCorpId = (newId: string) => {
    corpId.value = newId
  }

  const getUserInfo = (): User => {
    return userInfo.value || JSON.parse(window.localStorage.getItem('userInfo') || '{}')
  }

  const setUserInfo = (newUserInfo: User) => {
    userInfo.value = newUserInfo
    window.localStorage.setItem('userInfo', JSON.stringify(newUserInfo))
  }

  const setToken = (newToken: string) => {
    token.value = newToken
    //TODO 这里需要封装好缓存方案,过期方案，目前先用localStorage
    localStorage.setItem('token', newToken)
  }

  const setupLogin = async (authCode: string) => {
    try {
      const data = await dingtalkLogin(authCode)
      const {tokenInfo} = data
      setToken(tokenInfo.tokenValue)
      setUserInfo(data.userInfo)

      return afterLoginAction()

    } catch (error) {
      return Promise.reject(error)
    }

  }

  const afterLoginAction = async () => {
    const permssionStore = usePermissionStore()
    const routes = await permssionStore.buildRouteAction()
    routes.forEach((route) => {
      router.addRoute(route as unknown as RouteRecordRaw)
    })
    await router.replace('/home')
    return Promise.resolve(userInfo.value)
  }

  return {
    corpId,
    setCorpId,
    setupLogin,
    getUserInfo
  }
})
