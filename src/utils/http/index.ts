import {isString} from "lodash-es";
import type {AxiosOptons, AxiosTransform} from "./axiosTransform";
import {HttpClient} from "./httpClient";
import {ContentType, RequestMethod} from "/@/enums/http";

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
    console.log('transform response');
    console.log(res);
    console.log(options);
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
    }
  })
}

export const http = createHttp() 
