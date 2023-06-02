
export {}

declare module "vue-router" {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    orderNo?: number;
    title: string;
    dynamicLevel?: number;
    realPath?: string;
    ignoreAuth?: boolean;
    roles?: string[];
    ignoreKeepAlive?: boolean;
    affix?: boolean;
    icon?: string;
    frameSrc?: string;
    transitionName?: string;
    hideChildrenInMenu?: boolean;
    hideTab?: boolean;
    heideMenu?: boolean;
    loaded?: boolean;
  }
}
