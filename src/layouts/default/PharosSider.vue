<script setup lang="ts">
import {Layout} from "ant-design-vue";
import {useMenuSetting} from "/@/hooks/web/useMenuSetting";
import {AppLogo, PharosMenu} from "../components";
const {Sider} = Layout;

const {collapsed} = useMenuSetting()

</script>
<template>
  <Sider :collapsed="collapsed" :trigger="null" collapsible collapsed-width="48">
    <AppLogo />
    <PharosMenu />
  </Sider>
</template>
