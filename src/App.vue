<script setup lang="ts">
import {RouterView} from 'vue-router'
import {AppProvider} from '/@/components/AppProvider'
</script>

<template>
  <AppProvider>
    <RouterView />
  </AppProvider>
</template>

<style scoped>
</style>
