import './assets/main.css'
import 'ant-design-vue/dist/antd.css'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import {router, setupRouter} from './router'
import {setupRouterGurad} from './router/guard'

const setupApp = () => {
  const app = createApp(App)
  app.use(createPinia())

  setupRouter(app)
  setupRouterGurad(router)

  app.mount('#app')
}

setupApp()


