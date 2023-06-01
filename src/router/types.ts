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

export interface Menu {
  name: string
  icon?: string
  path: string
  paramPath?: string
  disabled?: boolean
  children?: Menu[]
  orderNo?: number
  roles?: string[]
  meta?: Partial<RouteMeta>
  tag?: MenuTag
  hideMenu?: boolean
}
