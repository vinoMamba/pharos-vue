import axios, {type AxiosInstance, type AxiosRequestConfig} from "axios"
import type {AxiosOptons} from "./axiosTransform"
import type {RequestOptions, Result} from "/#/axios"
import type {AxiosResponse} from "axios"
import {cloneDeep} from "lodash-es"
import {isFunction} from "../lib/is"

export class HttpClient {
    private instance: AxiosInstance
    private readonly options: AxiosOptons
    constructor(options: AxiosOptons) {
        this.options = options
        this.instance = axios.create(options)
        this.setupInterceptors()
    }
    private getTransform() {
        const {transform} = this.options
        return transform
    }
    private setupInterceptors() {
    }

    private request<T>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        let cloneConfig = cloneDeep(config)
        const transform = this.getTransform()
        /*
        * requestOptions 是在创建HTTP实例时候的options
        */
        const {requestOptions} = this.options
        /*
        * newOptions 是将调用http.get(options) 传入的options 与 创建 http 实例的options 进行合并，生成最新的options
        */
        const newOptions: RequestOptions = Object.assign({}, requestOptions, options)

        const {beforeRequestHook, transformResponseHook} = transform || {}

        if (beforeRequestHook && isFunction(beforeRequestHook)) {
            cloneConfig = beforeRequestHook(cloneConfig, newOptions)
        }

        return new Promise((reslove, reject) => {
            this.instance.request(cloneConfig)
                .then((res: AxiosResponse<Result>) => {
                    if (transformResponseHook && isFunction(transformResponseHook)) {
                        try {
                            const newRes = transformResponseHook(res, newOptions)
                            reslove(newRes)
                        } catch (e) {
                            reject(e)
                        }
                    }
                })
                .catch((e: Error) => {
                    reject(e)
                })
        })
    }

    get<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return this.request<T>({...config, method: 'GET'}, options)
    }

    post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return this.request<T>({...config, method: 'POST'}, options)
    }

    put<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return this.request<T>({...config, method: 'PUT'}, options)
    }

    delete<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return this.request<T>({...config, method: 'DELETE'}, options)
    }
}
