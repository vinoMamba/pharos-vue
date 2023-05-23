import type {AxiosTransform} from "./axiosTransform";
import {HttpClient} from "./httpClient";
import {ContentType} from "/@/enums/http";

const transform: AxiosTransform = {
  beforeRequestHook: (config, options) => {
    console.log("beforeRequestHook");
    console.log(options);
    return config
  },
  transformResponseHook: (res, options) => {
    console.log('transform response');
    console.log(res);
    console.log(options);
  },
  requestInterceptors: (config, options) => {
    console.log("requestInterceptors");
    console.log(options);
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
