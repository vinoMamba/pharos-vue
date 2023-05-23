import type {App} from 'vue'
import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import {basicRoutes} from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({left: 0, top: 0})
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
