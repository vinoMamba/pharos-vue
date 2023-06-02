<script setup lang="ts">
import {Menu} from "ant-design-vue"
import type {PropType} from "vue";
import type {MenuItem} from "/@/router/types";
import PharosMenuItem from "./PharosMenuItem.vue";
import PharosMenuItemConent from "./PharosMenuItemConent.vue";

defineProps({
  item: {
    type: Object as PropType<MenuItem>,
    default: () => ({})
  }
})

const itemHasChildren = (item: MenuItem): boolean => {
  return Reflect.has(item, "children")
}

</script>
<template>
  <PharosMenuItem v-if="!itemHasChildren(item)" :item="item" :key="item.path" />
  <template v-else>
    <Menu.SubMenu :key="item.path">
      <template #title>
        <PharosMenuItemConent :item="item" />
      </template>
      <template v-for="childrenItem in item.children || []" :key="childrenItem.path">
        <PharosSubMenu :item="childrenItem" />
      </template>
    </Menu.SubMenu>
  </template>
</template>
