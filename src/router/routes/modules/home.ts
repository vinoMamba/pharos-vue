import {LAYOUT} from "../../constant";
import type {AppRouteRecordRaw} from "../../types";

export const home: AppRouteRecordRaw = {
  path: "/home",
  name: "home",
  meta: {
    title: "首页",
    hideChildrenInMenu: true
  },
  component: LAYOUT,
  redirect: "/home/index",
  children: [
    {
      path: "index",
      name: "homeIndex",
      meta: {
        title: "首页",
      },
      component: () => import("/@/views/basic/home/HomePage.vue")
    }
  ]
}

export default home
