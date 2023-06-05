<script setup lang="ts">
import {Menu} from "ant-design-vue"
import {ref} from "vue";
import type {MenuItem} from "/@/router/types";
import PharosSubMenu from "./PharosSubMenu.vue";

const menuList = ref<MenuItem[]>([
  {
    name: "Dashboard",
    path: "dashboard",
    icon: "i-mdi:view-dashboard",
    children: [
      {
        name: "分析页",
        path: "analysis",
      },
      {
        name: "监控页",
        path: "monitor",
      },
      {
        name: "工作台",
        path: "workplace",
      },
    ],
  }
])

</script>
<template>
  <Menu theme="dark" mode="inline">
    <template v-for="item in menuList" :key="item.path">
      <PharosSubMenu :item="item" />
    </template>
  </Menu>
</template>
