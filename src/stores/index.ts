import {createPinia} from "pinia";
import type {App} from "vue";

export const store = createPinia()

export const setupPinia = (app: App<Element>) => {
  app.use(store)
} 
