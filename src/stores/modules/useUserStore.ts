import {defineStore} from "pinia";
import {ref} from "vue";
import {dingtalkLogin} from "/@/api/login";
import type {User} from "/#/types";
import {router} from "/@/router";
import {asyncRoutes, getAsyncRoutes} from "/@/router/routes";
import type {Route} from "ant-design-vue/lib/breadcrumb/Breadcrumb";
import type {RouteRecordRaw} from "vue-router";

export const useUserInfoStore = defineStore('userInfo', () => {
  const corpId = ref('')
  const userInfo = ref<User | null>(null)
  const token = ref('')

  const setCorpId = (newId: string) => {
    corpId.value = newId
  }

  const setUserInfo = (newUserInfo: User) => {
    userInfo.value = newUserInfo
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

      /*
      * 处理路由,后期加入权限管理
      */
      const routes = await getAsyncRoutes()
      routes.forEach((route) => {
        router.addRoute(route as unknown as RouteRecordRaw)
      })

      await router.replace('/home')
      return Promise.resolve(userInfo.value)
    } catch (error) {
      return Promise.reject(error)
    }

  }

  return {
    corpId,
    setCorpId,
    setupLogin,
  }
})
