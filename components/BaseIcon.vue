<script setup lang="ts">
import UiBaseIcon from './ui/BaseIcon.vue'

defineProps<{
  name: string
  size?: number
}>()
</script>

<template>
  <UiBaseIcon :name="name" :size="size" />
</template>
