import {cloneDeep} from "lodash-es";
import type {AppRouteRecordRaw, MenuItem} from "../types";
import {usePermissionStore} from "/@/stores/modules/usePermission";

export const treeMap = <T>(treeData: T[], opt: {children?: string, fn: Fn}): T[] => {
  return treeData.map(item => treeMapEach(item, opt)) as T[]
}

export const treeMapEach = (data: any, {children = "children", fn}: {children?: string, fn: Fn}) => {
  const hasChildren = Array.isArray(data[children]) && data[children].length > 0
  const transformed = fn(data)
  if (hasChildren) {
    return {
      ...transformed,
      [children]: data[children].map((i: number) => treeMapEach(i, {children, fn}))
    }
  } else {
    return {
      ...transformed
    }
  }
}

const joinParentPath = (menus: MenuItem[], parentPath = '') => {
  for (let index = 0; index < menus.length; index++) {
    const menu = menus[index]
    if (menu.path?.startsWith('/')) {
      menu.path = `${parentPath}${menu.path}}`
    }
    if (menu.children?.length) {
      joinParentPath(menu.children, menu.meta?.hideMenu ? parentPath : menu.path)
    }
  }
}


export const transformRouteToMenu = (routes: AppRouteRecordRaw[]): MenuItem[] => {
  const cloneRoutes = cloneDeep(routes)

  const list = treeMap(cloneRoutes, {
    fn: (route: AppRouteRecordRaw) => {
      const {meta: {title, hideMenu = false} = {}} = route
      return {
        ...(route.meta || {}),
        name: title,
        hideMenu,
        path: route.path,

      } as MenuItem
    }
  })
  joinParentPath(list as MenuItem[])
  return cloneDeep(list) as MenuItem[]
}

export const getAsyncMenus = () => {
  const permissionStore = usePermissionStore()

  /*
  * 过滤所有需要隐藏的菜单
  */
  const menuFilter = (items: MenuItem[]) => {
    return items.filter((item) => {
      const show = !item.meta?.hideMenu && !item.hideMenu
      if (show && item.children) {
        item.children = menuFilter(item.children)
      }
      return show
    })
  }

  return menuFilter(permissionStore.getFrontMenuList())
}


