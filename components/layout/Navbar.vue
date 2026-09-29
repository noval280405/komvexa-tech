<script setup lang="ts">
import { nav, whatsapp } from '~/data/site'
const open = ref(false)
const route = useRoute()
watch(() => route.path, () => open.value = false)
</script>
<template>
  <header class="navbar"><div class="container nav-inner">
    <NuxtLink to="/" class="brand" aria-label="KOMVEXA TECH Beranda"><span class="brand-mark"><i></i><i></i></span><span>KOMVEXA <b>TECH</b><small>DIGITAL & IT SOLUTIONS</small></span></NuxtLink>
    <nav :class="['nav-links', { open }]"><span class="mobile-nav-status"><i></i> SYSTEM ONLINE</span><NuxtLink v-for="item in nav" :key="item.to" :to="item.to">{{ item.label }}</NuxtLink><a :href="whatsapp" target="_blank" rel="noopener" class="btn btn-sm">Konsultasi <BaseIcon name="arrow" :size="17" /></a></nav>
    <button class="menu-btn" :aria-expanded="open" @click="open = !open" aria-label="Buka menu"><BaseIcon :name="open ? 'close' : 'menu'" /></button>
  </div></header>
</template>
