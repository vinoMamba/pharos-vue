<script setup lang="ts">
import {Avatar, Dropdown} from "ant-design-vue"
import {useUserInfoStore} from "/@/stores/modules/useUserStore";

const userStore = useUserInfoStore();
const userInfo = userStore.getUserInfo();
</script>
<template>
  <Dropdown placement="bottomLeft">
    <span flex items-center cursor-pointer>
      <Avatar :size="32" :src="userInfo.avatar || ''" />
      <span ml-8>{{ userInfo.name }}</span>
    </span>
    <!-- TODO: 下拉菜单 -->
  </Dropdown>
</template>
