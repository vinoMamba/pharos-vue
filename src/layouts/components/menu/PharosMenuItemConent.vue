<script setup lang="ts">
import type {PropType} from 'vue';
import type {MenuItem} from '/@/router/types';

defineProps({
  item: {
    type: Object as PropType<MenuItem>,
    default: () => ({})
  }

})
</script>
<template>
  <div flex items-center justify-start>
    <div :class="item.icon"></div>
    <span ml-8>{{ item.name }}</span>
  </div>
</template>
