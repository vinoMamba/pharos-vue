import {env} from 'dingtalk-jsapi'

export function isInDingtalk() {
  return env.platform !== 'notInDingTalk'
}

