<script setup lang="ts">
import { ref } from 'vue'
import { Profile } from './types';

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
