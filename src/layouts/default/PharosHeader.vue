<script setup lang="ts">
import {Layout} from "ant-design-vue"
import {UserDropDown, TriggleButton} from "../components";

const {Header} = Layout;

</script>
<template>
  <Header flex items-center justify-between bg-white h="40px" p-0 pr-32>
    <div h-full flex items-center justify-center hover="bg-#f6f6f6">
      <TriggleButton />
    </div>
    <div h-full flex items-center justify-center>
      <UserDropDown />
    </div>
  </Header>
</template>
