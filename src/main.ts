import './assets/main.css'
import 'ant-design-vue/dist/antd.css'
import 'virtual:uno.css'
import {createApp} from 'vue'
import App from './App.vue'
import {router, setupRouter} from './router'
import {setupPinia} from './stores'
import {setupRouterGurad} from './router/guard'

const setupApp = () => {
  const app = createApp(App)

  setupPinia(app)

  setupRouter(app)
  setupRouterGurad(router)

  app.mount('#app')
}

setupApp()


