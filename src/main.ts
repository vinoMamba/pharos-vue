import './assets/main.css'
import 'ant-design-vue/dist/antd.css'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import {setupRouter} from './router'

const setupApp = () => {
  const app = createApp(App)
  app.use(createPinia())
  setupRouter(app)
  app.mount('#app')
}

setupApp()


