import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import type {ConfigEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {loadEnv} from 'vite'
import {htmlPlugin} from './plugins/html'
import {wrapperEnv} from './plugins/wrapperEnv'

// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv) => {
  const env = loadEnv(configEnv.mode, process.cwd())
  // 为了给 env 添加类型
  const wrapEnv = wrapperEnv(env)
  return {
    plugins: [vue(), vueJsx(), htmlPlugin(wrapEnv)],
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: fileURLToPath(new URL('./src', import.meta.url)) + '/'
        },
        {
          find: /\/#\//,
          replacement: fileURLToPath(new URL('./types', import.meta.url)) + '/'
        }
      ],
    }
  }
})
