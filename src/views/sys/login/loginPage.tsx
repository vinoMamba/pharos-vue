import {defineComponent} from "vue";
import {Spin} from "ant-design-vue";
import {ref} from "vue";
import {useUserInfoStore} from "/@/stores/modules/useUserStore";
import {onMounted} from "vue";
import {isInDingtalk} from "/@/hooks/useDingTalk";
import {useMessage} from "/@/hooks/web/useMessage";
import {ready, runtime} from "dingtalk-jsapi"

export const LoginPage = defineComponent({
  name: 'LoginPage',
  setup() {
    const {message} = useMessage()
    const userInfoStore = useUserInfoStore()
    const isLoading = ref(true)
    onMounted(async () => {
      try {
        const code = "test"
        // const {code} = await runtime.permission.requestAuthCode({corpId: userInfoStore.corpId})
        const userInfo = await userInfoStore.setupLogin(code)
        if (userInfo) {
          //TODO
        } else {
          //TODO
        }
      } catch (error) {
        console.log(error);
      }
    })
    return () => (
      <Spin tip={"登录中..."} spinning={isLoading.value} />
    )
  }
})
