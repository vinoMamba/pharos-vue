<script setup lang="ts">
import {useMenuSetting} from '/@/hooks/web/useMenuSetting';

const appTitle = import.meta.env.VITE_APP_TITLE
const {collapsed} = useMenuSetting()

</script>
<template>
  <div flex items-center h="48" p-8 overflow-hidden>
    <img width="32" height="32" src="../../../assets/logo.png" alt="">
    <!-- TODO: 优化动画效果 -->
    <h1 v-if="!collapsed" text-white m-0 font-700>{{ appTitle }}</h1>
  </div>
</template>
