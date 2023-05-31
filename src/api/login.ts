import type {TokenInfo, User} from "/#/types"
import {http} from "/@/utils/http"

export const dingtalkLogin = (authCode: string) => {
  return http.post<{userInfo: User, tokenInfo: TokenInfo}>({
    url: '/login/dingtalk',
    data: {
      authCode
    }
  },
    {
      withToken: false,
    }
  )
}
