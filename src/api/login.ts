import {http} from "/@/utils/http"

export const dingtalkLogin = (authCode: string) => {
  return http.post({
    url: '/login/dingtalk',
    data: {
      authCode
    }
  })
}
