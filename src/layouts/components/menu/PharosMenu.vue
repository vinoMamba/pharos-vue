<script setup lang="ts">
import {Menu} from "ant-design-vue"
import PharosSubMenu from "./PharosSubMenu.vue";
import {getAsyncMenus} from "/@/router/menu";
import type {MenuInfo} from "ant-design-vue/lib/menu/src/interface";

const menuList = getAsyncMenus();

const handleMenuClick = (menuInfo: MenuInfo) => {
  console.log(menuInfo.key);
}

</script>
<template>
  <Menu theme="dark" mode="inline" @click="handleMenuClick">
    <template v-for="item in menuList" :key="item.path">
      <PharosSubMenu :item="item" />
    </template>
  </Menu>
</template>
