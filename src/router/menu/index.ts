import {cloneDeep} from "lodash-es";
import type {AppRouteRecordRaw, MenuItem} from "../types";

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
  return cloneDeep(list) as MenuItem[]
}
