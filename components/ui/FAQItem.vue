<script setup lang="ts">defineProps<{ question: string; answer: string }>(); const open = ref(false)</script>
<template><article :class="['faq-item', { open }]"><button @click="open = !open"><span>{{ question }}</span><i>{{ open ? '−' : '+' }}</i></button><div class="faq-answer"><p>{{ answer }}</p></div></article></template>
