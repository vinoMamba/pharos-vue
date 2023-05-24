import {onMounted} from "vue";
import {defineComponent} from "vue";
import {useUserInfoStore} from "/@/stores/modules/useUserStore";



export const AppProvider = defineComponent({
  name: 'AppProvider',
  setup(_, {slots}) {
    const userInfoStore = useUserInfoStore()

    function getCorpIdFromUrl() {
      const hash = window.location.hash
      const params = new URLSearchParams(hash.substring(2))
      return params.get('corpId') || ''
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
