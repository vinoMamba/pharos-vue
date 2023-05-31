<script setup lang="ts">
import {Layout} from "ant-design-vue"
import PharosHeader from "./PharosHeader.vue";
import PharosSider from "./PharosSider.vue";
import PharosContent from "./PharosContent.vue";

</script>
<template>
  <Layout class="pharos-layout">
    <PharosSider />
    <Layout>
      <PharosHeader />
      <PharosContent />
    </Layout>
  </Layout>
</template>

<style scoped lang="less">
.pharos-layout {
  min-height: 100vh;
}
</style>
