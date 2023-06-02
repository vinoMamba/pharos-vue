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
  <div>
    {{ item.name }}
  </div>
</template>
