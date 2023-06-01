import {PermissionModeEnum} from "/@/enums/config"
export interface MenuSetting {
  collapsed: boolean
}

export interface ProjectConfig {
  permissionMode: PermissionModeEnum
  menuSetting: MenuSetting
}
