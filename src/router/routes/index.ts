import type {AppRouteRecordRaw} from "../types";


export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  meta: {},
  redirect: "/login",
}

export const LoginRoute: AppRouteRecordRaw = {
  path: "/login",
  name: "Login",
  meta: {},
  // vue 里面加载 .tsx 文件的时候需要加上 .then(res => res.xxx) 这样的写法
  component: () => import("/@/views/sys/login/loginPage.tsx").then(res => res.LoginPage),
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
  RootRoute,
  LoginRoute
]

