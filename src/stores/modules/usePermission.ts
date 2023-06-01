import {defineStore} from "pinia";
import {ref} from "vue";
import type {AppRouteRecordRaw, Menu} from "/@/router/types";
import {useAppStore} from "./useAppStore";
import {PermissionModeEnum} from "/@/enums/config";
import {asyncRoutes} from "/@/router/routes";

export const usePermissionStore = defineStore('permission', () => {
  const isDynamicAddRoute = ref(false)
  const backMenuList = ref<Menu[]>([])
  const frontMenuList = ref<Menu[]>([])

  const getFrontMenuList = (): Menu[] => {
    return frontMenuList.value
  }

  const getBackMenuList = (): Menu[] => {
    return backMenuList.value
  }

  const getIsDynamicAddRoute = (): boolean => {
    return isDynamicAddRoute.value
  }

  const setFrontMenuList = (menuList: Menu[]): void => {
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
