import {defineStore} from "pinia";
import {ref} from "vue";
import type {MenuSetting, ProjectConfig} from "/#/config";
import {merge} from "lodash-es"

export const useAppStore = defineStore('app', () => {
  const projectConfig = ref<ProjectConfig | null>(null)

  const getProjectConfig = (): ProjectConfig => {
    return projectConfig.value || {} as ProjectConfig
  }

  const setProjectConfig = (config: DeepPartial<ProjectConfig>): void => {
    projectConfig.value = merge(projectConfig.value, config)
  }

  const getMenuSetting = (): MenuSetting => {
    return getProjectConfig().menuSetting
  }
  const setMenuSetting = (menuSetting: Partial<MenuSetting>): void => {
    setProjectConfig({menuSetting})
  }

  return {
    projectConfig,
    getProjectConfig,
    setProjectConfig,
    getMenuSetting,
    setMenuSetting
  }
})
