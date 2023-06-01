import {defineComponent} from "vue";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons-vue";
import {useMenuSetting} from "/@/hooks/web/useMenuSetting";

export const TriggleButton = defineComponent({
  name: 'TriggleButton',
  setup() {
    const {collapsed, toggleCollapsed} = useMenuSetting()

    return () => (
      <div onClick={toggleCollapsed}>
        {collapsed.value
          ? <MenuUnfoldOutlined />
          : <MenuFoldOutlined />
        }
      </div>
    )
  }
})
