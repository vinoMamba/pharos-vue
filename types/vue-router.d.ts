
export {}

declare module "vue-router" {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    title: string;
    icon?: string;
    ignoreAuth?: boolean;
    hideChildrenInMenu?: boolean;
    hideMenu?: boolean;
    loaded?: boolean;
    orderNo?: number;
  }
}
