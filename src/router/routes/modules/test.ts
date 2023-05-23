import type {AppRouteRecordRaw} from "../../types"

const test: AppRouteRecordRaw = {
  path: '/test',
  name: 'test',
  meta: {},
  component: () => (import("../../../views/LoginTest.vue"))
}
export default test
