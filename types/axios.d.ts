export interface RequestOptions {
    joinParamsToUrl?: boolean
    isTransformResponse?: boolean
    isReturnNativeResponse?: boolean
    withToken?: boolean
    joinTime?: boolean
}

export interface Result<T = any> {
    code: number
    message: string
    data: T
}
