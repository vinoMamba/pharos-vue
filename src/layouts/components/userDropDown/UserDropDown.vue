<script setup lang="ts">
import {Avatar, Dropdown} from "ant-design-vue"
import {useUserInfoStore} from "/@/stores/modules/useUserStore";

const userStore = useUserInfoStore();
const userInfo = userStore.getUserInfo();
</script>
<template>
  <Dropdown>
    <span class="flex items-center">
      <Avatar :size="32" />
      <span class="text-red">{{ userInfo.name }}</span>
    </span>
    <template #overlay>
      <span>菜单1</span>
    </template>
  </Dropdown>
</template>
