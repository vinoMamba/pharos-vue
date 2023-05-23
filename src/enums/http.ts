/*
* Content-Type : 用于指定请求或响应中所传输数据的媒体类型的标头字段
*/
export enum ContentType {
    /*
    * JSON: 数据以 JSON格式进行编码
    */
    JSON = 'application/json;charset=UTF-8',
    /*
    * 表示数据以 URL 编码形式进行编码
    * eg: key1=value1&key2=value2&key3=value3
    */
    FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
    /*
    * 表示数据是以多部分表单数据的形式进行编码，通常用于上传文件或包含二进制数据的表单
    *
    * 适用于文件上传
    */
    FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

/*
* Request Methods
*/
export enum RequestMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}
