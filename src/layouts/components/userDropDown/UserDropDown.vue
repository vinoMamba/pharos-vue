<script setup lang="ts">
import {Avatar, Dropdown} from "ant-design-vue"
import {useUserInfoStore} from "/@/stores/modules/useUserStore";

const userStore = useUserInfoStore();
const userInfo = userStore.getUserInfo();
</script>
<template>
  <Dropdown>
    <span>
      <Avatar :size="32" />
      <span>{{ userInfo.name }}</span>
    </span>
    <template #overlay>
      <span>菜单1</span>
    </template>
  </Dropdown>
</template>
