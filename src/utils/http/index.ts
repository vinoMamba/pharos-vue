import type {AxiosTransform} from "./axiosTransform";
import {HttpClient} from "./httpClient";
import {ContentType, RequestMethod} from "/@/enums/http";

const transform: AxiosTransform = {
  /*
  * 在请求之前对请求数据进行处理
  */
  beforeRequestHook: (config, options) => {
    const {joinParamsToUrl, joinTime} = options
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
  requestInterceptors: (config, options) => {
    const timestamp = Date.now()
    const expire = 11000 //过期时间
    if (timestamp > expire) {
      //TODO:refreshToken
    }
    const token = 'token'  // getToken()
    if (token) {
      //TODO: set token to headers
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
      withToken: true
    }
  })
}

export const http = createHttp() 
