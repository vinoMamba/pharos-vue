import type {RouteRecordRaw, Router} from "vue-router";
import {usePermissionStore} from "/@/stores/modules/usePermission";

export function setupRouterGurad(router: Router) {
  permissionGurad(router)
}

export async function permissionGurad(router: Router) {
  const permissionStore = usePermissionStore()
  router.beforeEach(async (to, from) => {
    const routes = await permissionStore.buildRouteAction()
    routes.forEach((route) => {
      router.addRoute(route as unknown as RouteRecordRaw)
    })
  })
}


