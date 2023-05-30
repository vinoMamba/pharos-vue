export interface RequestOptions {
  joinParamsToUrl?: boolean
  isTransformResponse?: boolean
  isReturnNativeResponse?: boolean
  withToken?: boolean
  joinTime?: boolean
  urlPrefix?: string
  apiUrl?: string
  successMsgMode?: 'message' | 'modal' | 'none'
}

export interface Result<T = any> {
  code: number
  message: string
  data: T
}
