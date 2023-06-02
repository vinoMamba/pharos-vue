import {defineStore} from "pinia";
import {ref} from "vue";
import type {AppRouteRecordRaw, MenuItem} from "/@/router/types";
import {useAppStore} from "./useAppStore";
import {PermissionModeEnum} from "/@/enums/config";
import {asyncRoutes} from "/@/router/routes";

export const usePermissionStore = defineStore('permission', () => {
  const isDynamicAddRoute = ref(false)
  const backMenuList = ref<MenuItem[]>([])
  const frontMenuList = ref<MenuItem[]>([])

  const getFrontMenuList = (): MenuItem[] => {
    return frontMenuList.value
  }

  const getBackMenuList = (): MenuItem[] => {
    return backMenuList.value
  }

  const getIsDynamicAddRoute = (): boolean => {
    return isDynamicAddRoute.value
  }

  const setFrontMenuList = (menuList: MenuItem[]): void => {
    frontMenuList.value = menuList
  }

  const setDynamicAddRoute = (dynamicAddRoute: boolean): void => {
    isDynamicAddRoute.value = dynamicAddRoute
  }

  const buildRouteAction = async (): Promise<AppRouteRecordRaw[]> => {
    const appStore = useAppStore()
    const {permissionMode} = appStore.getProjectConfig()
    let routes: AppRouteRecordRaw[] = []

    switch (permissionMode) {
      case PermissionModeEnum.BACK:
        break
      case PermissionModeEnum.FRONT:
        routes = asyncRoutes
        break
      default:
        break
    }
    return routes
  }

  return {
    getBackMenuList,
    getFrontMenuList,
    getIsDynamicAddRoute,
    setFrontMenuList,
    setDynamicAddRoute,
    buildRouteAction
  }
})
