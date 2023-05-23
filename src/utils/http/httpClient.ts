import axios, {type AxiosInstance, type AxiosRequestConfig} from "axios"
import type {AxiosOptons} from "./axiosTransform"
import type {RequestOptions, Result} from "/#/axios"
import type {AxiosResponse} from "axios"

export class HttpClient {
  private instance: AxiosInstance
  private readonly options: AxiosOptons
  constructor(options: AxiosOptons) {
    this.options = options
    this.instance = axios.create(options)
    this.setupInterceptors()
  }

  private setupInterceptors() {
  }

  private request<T>(config: AxiosRequestConfig, options: RequestOptions): Promise<T> {

    return new Promise((reslove, reject) => {
      this.instance.request(config)
        .then((res: AxiosResponse<Result>) => {
        })
        .catch((e: Error) => {
          reject(e)
        })
    })
  }

  get<T = any>(config: AxiosRequestConfig, options: RequestOptions): Promise<T> {
    return this.request<T>(
      {
        ...config,
        method: 'GET'
      },
      options
    )
  }
}
