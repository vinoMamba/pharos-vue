import type {RouteMeta, RouteRecordRaw} from "vue-router";

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta"> {
  name: string
  meta: RouteMeta
}

export interface MenuTag {
  type?: "primary" | "error" | "warn" | "success"
  content?: string
  dot?: boolean
}

export interface MenuItem {
  name: string
  /*
  *  use unocss-icons. see: https://unocss.dev/presets/icons#icon-customizations
  *  你可以在这个网站上找到你想要的图标，然后复制它的名称到这里： https://icones.js.org/
  */
  icon?: string
  path: string
  paramPath?: string
  disabled?: boolean
  children?: MenuItem[]
  orderNo?: number
  roles?: string[]
  meta?: Partial<RouteMeta>
  tag?: MenuTag
  hideMenu?: boolean
}
