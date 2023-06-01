<script setup lang="ts">
import {Layout} from "ant-design-vue"
import {UserDropDown} from "../components";
const {Header} = Layout;
</script>
<template>
  <Header flex items-center justify-between bg-white h[40px] p-0 px-32>
    <div pharos-header-left>left</div>
    <div h-full flex items-center justify-center>
      <UserDropDown />
    </div>
  </Header>
</template>
