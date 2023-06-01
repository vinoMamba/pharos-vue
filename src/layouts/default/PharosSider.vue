<script setup lang="ts">
import {Layout, Menu} from "ant-design-vue";
import {useMenuSetting} from "/@/hooks/web/useMenuSetting";
import {AppLogo} from "../components";
const {Sider} = Layout;

const {collapsed} = useMenuSetting()

</script>
<template>
  <Sider :collapsed="collapsed" :trigger="null" collapsible collapsed-width="48">
    <AppLogo />
    <Menu mode="inline" theme="dark">
      <Menu.Item>
        <span>Dashboard</span>
      </Menu.Item>
    </Menu>
  </Sider>
</template>
