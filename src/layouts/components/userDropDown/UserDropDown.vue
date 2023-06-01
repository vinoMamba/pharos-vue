<script setup lang="ts">
import {Avatar, Dropdown} from "ant-design-vue"
import {useUserInfoStore} from "/@/stores/modules/useUserStore";

const userStore = useUserInfoStore();
const userInfo = userStore.getUserInfo();
</script>
<template>
  <Dropdown placement="bottomLeft">
    <div h-full px-10 flex items-center cursor-pointer hover="bg-#f6f6f6">
      <Avatar :size="32" :src="userInfo.avatar || ''" />
      <span ml-8>{{ userInfo.name }}</span>
    </div>
    <!-- TODO: 下拉菜单 -->
  </Dropdown>
</template>
