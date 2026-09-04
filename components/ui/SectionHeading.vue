<script setup lang="ts">defineProps<{ eyebrow?: string; title: string; text?: string; center?: boolean }>()</script>
<template><div :class="['section-heading', { center }]"><span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span><h2>{{ title }}</h2><p v-if="text">{{ text }}</p></div></template>
