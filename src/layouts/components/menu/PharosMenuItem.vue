<script setup lang="ts">
import {Menu} from "ant-design-vue"
import PharosMenuItemConent from "./PharosMenuItemConent.vue";
import type {PropType} from "vue";
import type {MenuItem} from "/@/router/types";

defineProps({
  item: {
    type: Object as PropType<MenuItem>,
    default: () => ({})
  }

})

</script>
<template>
  <Menu.Item :key="item.path">
    <PharosMenuItemConent :item="item" />
  </Menu.Item>
</template>
