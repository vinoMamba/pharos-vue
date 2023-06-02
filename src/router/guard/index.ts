import type {RouteRecordRaw, Router} from "vue-router";
import {usePermissionStore} from "/@/stores/modules/usePermission";
import {PAGE_NOT_FOUND_ROUTE} from "../routes";

export function setupRouterGurad(router: Router) {
  permissionGurad(router)
}

export async function permissionGurad(router: Router) {

  const permissionStore = usePermissionStore()
  router.beforeEach(async (to, _from, next) => {
    const routes = await permissionStore.buildRouteAction()

    routes.forEach((route) => {
      router.addRoute(route as unknown as RouteRecordRaw)
    })

    router.addRoute(PAGE_NOT_FOUND_ROUTE as unknown as RouteRecordRaw)

    if (to.name === PAGE_NOT_FOUND_ROUTE.name) {
      next({path: to.fullPath, replace: true, query: to.query})
    } else {
      next()
    }
  })
}


