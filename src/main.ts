import './assets/main.css'
import 'ant-design-vue/dist/antd.css'
import 'virtual:uno.css'
import {createApp} from 'vue'
import App from './App.vue'
import {router, setupRouter} from './router'
import {setupPinia} from './stores'
import {setupRouterGurad} from './router/guard'
import {initAppConfig} from './config/initAppConfig'

const setupApp = () => {
  const app = createApp(App)

  setupPinia(app)
  /*
  * 初始化项目配置
  */
  initAppConfig()

  setupRouter(app)
  setupRouterGurad(router)

  app.mount('#app')
}

setupApp()


