import {PermissionModeEnum} from "../enums/config";
import type {ProjectConfig} from "/#/config";

export const initProjectConfig: ProjectConfig = {
  permissionMode: PermissionModeEnum.FRONT,
  menuSetting: {
    collapsed: false,
  }
}
