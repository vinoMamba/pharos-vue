import {isString} from "lodash-es";
import type {AxiosOptons, AxiosTransform} from "./axiosTransform";
import {HttpClient} from "./httpClient";
import {ContentType, RequestMethod} from "/@/enums/http";
import {useMessage} from "/@/hooks/web/useMessage";

const {message: createMessage, createSuccessModal} = useMessage()

const transform: AxiosTransform = {
  /*
  * 在请求之前对请求数据进行处理
  */
  beforeRequestHook: (config, options) => {
    const {joinParamsToUrl, joinTime, apiUrl, urlPrefix} = options
    if (urlPrefix && isString(urlPrefix)) {
      config.url = `${urlPrefix}${config.url}`
    }

    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`
    }

    if (config.method?.toUpperCase() === RequestMethod.GET) {
      //TODO
    } else {
      //TODO
    }
    return config
  },

  transformResponseHook: (res, options) => {
    const {isTransformResponse, isReturnNativeResponse} = options
    /*
    * 返回原生的res
    */
    if (isReturnNativeResponse) {
      console.log(res);
      return res
    }
    /*
    * 对返回的数据进行处理
    */
    if (!isTransformResponse) {
      return res.data
    }
    const {data} = res
    if (!data) {
      throw new Error('请求无数据返回')
    }
    const {code, message, data: result} = data

    const success = data && Reflect.has(data, 'code') && code === 0
    if (success) {
      const successMsg = message || '操作成功'
      if (options.successMsgMode === 'message') {
        createMessage.success(successMsg)
      }
      if (options.successMsgMode === 'modal') {
        createSuccessModal({
          title: '成功提示',
          content: successMsg
        })
      }
      return result
    }

  },
  /*
  * 请求之前的拦截器
  */
  requestInterceptors: (config, options) => {
    //TODO: getToken()
    const token = 'token'
    if (token && (config as AxiosOptons).requestOptions?.withToken !== false) {
      config.headers.Authorization = `${options.authenticationScheme} ${token}`
    }
    return config
  },
  responseInterceptors: (res) => {
    return res
  }
}

function createHttp() {
  return new HttpClient({
    authenticationScheme: 'Bearer',
    timeout: 10 * 100000,
    headers: {
      'Content-Type': ContentType.JSON
    },
    transform: {...transform},
    requestOptions: {
      apiUrl: import.meta.env.VITE_GLOB_API_URL,
      urlPrefix: import.meta.env.VITE_GLOB_API_URL_PREFIX,
      withToken: true,
      isTransformResponse: true,
    }
  })
}

export const http = createHttp() 
