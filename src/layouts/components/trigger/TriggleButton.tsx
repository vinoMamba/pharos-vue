import {defineComponent} from "vue";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons-vue";
import {useMenuSetting} from "/@/hooks/web/useMenuSetting";

export const TriggleButton = defineComponent({
  name: 'TriggleButton',
  setup() {
    const {collapsed, toggleCollapsed} = useMenuSetting()

    return () => (
      <div onClick={toggleCollapsed} class="px-10 h-full flex items-center">
        {collapsed.value
          ? <MenuUnfoldOutlined />
          : <MenuFoldOutlined />
        }
      </div>
    )
  }
})
