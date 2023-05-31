<script setup lang="ts">
import {Layout} from "ant-design-vue"
import {UserDropDown} from "../components";
const {Header} = Layout;
</script>
<template>
  <Header class="pharos-header">
    <div class="pharos-header-left">left</div>
    <div class="pharos-header-right">
      <UserDropDown />
    </div>
  </Header>
</template>
<style scoped lang="less">
.pharos {
  &-header {
    padding: 0;
    height: 48px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-left {
      display: flex;
      align-items: center;
      height: 100%;
      border: 1px solid red;
    }

    &-right {
      padding-right: 40px;
      display: flex;
      align-items: center;
      height: 100%;
      border: 1px solid blue;
    }
  }
}
</style>
