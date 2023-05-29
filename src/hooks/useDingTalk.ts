import {env} from 'dingtalk-jsapi'

function isInDingtalk() {
  return env.platform !== 'notInDingTalk'
}



export {
  isInDingtalk,
}
