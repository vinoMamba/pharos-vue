import {defineComponent} from "vue";
import {Spin} from "ant-design-vue";
import {ref} from "vue";
import {useUserInfoStore} from "/@/stores/modules/useUserStore";
import {onMounted} from "vue";
import {useMessage} from "/@/hooks/web/useMessage";

export const LoginPage = defineComponent({
  name: 'LoginPage',
  setup() {
    const {notification, createErrorModal} = useMessage()
    const userInfoStore = useUserInfoStore()
    const isLoading = ref(true)
    onMounted(async () => {
      try {
        isLoading.value = true
        //TODO: 添加钉钉免登录
        const code = "test"
        // const {code} = await runtime.permission.requestAuthCode({corpId: userInfoStore.corpId})
        const userInfo = await userInfoStore.setupLogin(code)
        if (userInfo) {
          notification.success({
            message: "登录成功",
            description: `欢迎回来：${userInfo.name}`,
            duration: 2
          })
        }
      } catch (error) {
        createErrorModal({
          title: "登录失败",
          content: (error as Error).message,
        })
      } finally {
        isLoading.value = false
      }
    })
    return () => (
      <Spin tip={"登录中..."} spinning={isLoading.value} />
    )
  }
})
