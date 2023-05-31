import type {AppRouteRecordRaw} from "../../types";

export const home: AppRouteRecordRaw = {
  path: "/home",
  name: "home",
  meta: {},
  component: () => import("/@/views/basic/home/HomePage.vue"),
}

export default home
