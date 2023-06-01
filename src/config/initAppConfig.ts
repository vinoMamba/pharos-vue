import {useAppStore} from "/@/stores/modules/useAppStore"
import {initProjectConfig} from "./projectConfig"

export const initAppConfig = () => {
  const appStore = useAppStore()
  /*
  * TODO: 这里后面可以把数据存储在localStorage中，然后进行merge
  */
  appStore.setProjectConfig(initProjectConfig)
}
