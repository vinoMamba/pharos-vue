import {isArray} from "lodash-es";
import type {AppRouteRecordRaw} from "../types";
import {PAGE_NOT_FOUND_NAME, LAYOUT, EXCEPTION_COMPONENT} from "../constant";


export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  meta: {
    title: "Root",
  },
  redirect: "/login",
}

export const LoginRoute: AppRouteRecordRaw = {
  path: "/login",
  name: "Login",
  meta: {
    title: "登录",
  },
  // vue 里面加载 .tsx 文件的时候需要加上 .then(res => res.xxx) 这样的写法
  component: () => import("/@/views/sys/login/loginPage.tsx").then(res => res.LoginPage),
}

export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: "/:path(.*)*",
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: "ErrorPage",
  },
  children: [
    {
      path: "/:path(.*)*",
      name: PAGE_NOT_FOUND_NAME,
      component: EXCEPTION_COMPONENT,
      meta: {
        title: "ErrorPage",
      }
    }
  ]
}

const routeModuleList: AppRouteRecordRaw[] = []
/*
* 通过 import.meta.glob 方法来加载 modules 下面的所有 ts 文件
*/
const modules = import.meta.glob("./modules/**/*.ts", {eager: true})
const keys = Object.keys(modules)
keys.forEach(key => {
  const mod = (modules[key] as {default: AppRouteRecordRaw}).default
  const modList = isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList]

export const basicRoutes = [
  RootRoute,
  LoginRoute,
  PAGE_NOT_FOUND_ROUTE
]

