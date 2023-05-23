import type {AppRouteRecordRaw} from "../types";

export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  meta: {},
  component: () => (import('../../App.vue'))
}

const routerModuleList: AppRouteRecordRaw[] = []

const modules = import.meta.glob("./modules/**/*ts")
const keys = Object.keys(modules)
keys.forEach(async key => {
  const module = await (modules[key]() as Promise<{default: AppRouteRecordRaw}>)
  const mod = module.default
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routerModuleList.push(...modList)
})

export const asyncRoutes = [...routerModuleList]


export const basicRoutes = [
  RootRoute
]

