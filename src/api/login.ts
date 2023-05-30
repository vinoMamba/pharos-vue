import {http} from "/@/utils/http"

export const dingtalkLogin = (authCode: string) => {
  return http.post({
    url: '/dingtalk/login',
    data: {
      authCode
    }
  })
}
