<script setup lang="ts">
import {Menu} from "ant-design-vue"
import type {MenuItem} from "/@/router/types";
import type {PropType} from "vue";

defineProps({
  item: {
    type: Object as PropType<MenuItem>,
    default: () => ({})
  }

})

</script>
<template>
  <Menu.Item :key="item.path">
    <template #icon>
      <div :class="item.icon"></div>
    </template>
    <span>{{ item.name }}</span>
  </Menu.Item>
</template>
