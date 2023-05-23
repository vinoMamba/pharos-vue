import type {RouteRecordRaw} from "vue-router";

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta"> {
  name: string
  meta: any
}
