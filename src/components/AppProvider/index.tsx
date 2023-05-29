import {onMounted} from "vue";
import {defineComponent} from "vue";
import {useUserInfoStore} from "/@/stores/modules/useUserStore";



export const AppProvider = defineComponent({
  name: 'AppProvider',
  setup(_, {slots}) {
    const userInfoStore = useUserInfoStore()

    function getCorpIdFromUrl() {
      const hash = window.location.hash
      const paramStr = hash.split('?')[1]
      if (paramStr) {
        const params = new URLSearchParams(paramStr)
        return params.get('corpId') || ''
      } else {
        return ''
      }
    }

    onMounted(() => {
      const corpId = getCorpIdFromUrl()
      userInfoStore.setCorpId(corpId)
    })

    return () => (
      <main>
        {slots.default?.()}
      </main>
    )
  }
})
