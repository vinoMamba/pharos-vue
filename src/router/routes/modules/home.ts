import {LAYOUT} from "../../constant";
import type {AppRouteRecordRaw} from "../../types";

export const home: AppRouteRecordRaw = {
  path: "/home",
  name: "home",
  meta: {},
  component: LAYOUT,
  redirect: "/home/index",
  children: [
    {
      path: "index",
      name: "homeIndex",
      meta: {},
      component: () => import("/@/views/basic/home/HomePage.vue")
    }
  ]
}

export default home
