import {computed} from "vue";
import {useAppStore} from "/@/stores/modules/useAppStore";

export function useMenuSetting() {
  const appStore = useAppStore()
  const collapsed = computed(() => appStore.getMenuSetting().collapsed)
  const toggleCollapsed = () => {
    appStore.setMenuSetting({
      collapsed: !collapsed.value,
    })
  }

  return {
    collapsed,
    toggleCollapsed,
  }
}
