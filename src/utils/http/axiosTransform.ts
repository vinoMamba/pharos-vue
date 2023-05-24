import type {AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import type {RequestOptions, Result} from "/#/axios"

export interface AxiosOptons extends AxiosRequestConfig {
  /*
  * 身份授权模式
  * eg: Bearer 承载令牌 | Degist 摘要令牌  | OAuth 开放令牌 |  JWT
  */
  authenticationScheme?: 'Bearer' | 'Degist' | 'Basic'
  transform?: AxiosTransform
  requestOptions?: RequestOptions
}


export abstract class AxiosTransform {
  /*
   *  请求之前的钩子
  */
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig
  /*
   * 处理响应的钩子
  */
  transformResponseHook?: (res: AxiosResponse<Result>, options: RequestOptions) => any
  /*
   * 请求拦截器
  */
  requestInterceptors?: (config: InternalAxiosRequestConfig, options: AxiosOptons) => InternalAxiosRequestConfig
  /*
   * 响应拦截器
  */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>
}
