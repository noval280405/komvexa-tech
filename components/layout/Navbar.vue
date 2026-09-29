<script setup lang="ts">
import { nav, whatsapp } from '~/data/site'
const open = ref(false)
const route = useRoute()
watch(() => route.path, () => open.value = false)
const closeMenu = () => { open.value = false }
watch(open, (isOpen) => {
  if (import.meta.client) document.body.style.overflow = isOpen ? 'hidden' : ''
})
const handleEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') closeMenu() }
onMounted(() => window.addEventListener('keydown', handleEscape))
onBeforeUnmount(() => {
  if (import.meta.client) document.body.style.overflow = ''
  window.removeEventListener('keydown', handleEscape)
})
</script>
<template>
  <header class="navbar"><div class="container nav-inner">
    <NuxtLink to="/" class="brand" aria-label="KOMVEXA TECH Beranda"><span class="brand-mark"><i></i><i></i></span><span>KOMVEXA <b>TECH</b><small>DIGITAL & IT SOLUTIONS</small></span></NuxtLink>
    <nav class="desktop-nav" aria-label="Navigasi utama"><NuxtLink v-for="item in nav" :key="item.to" :to="item.to">{{ item.label }}</NuxtLink></nav>
    <a :href="whatsapp" target="_blank" rel="noopener" class="btn btn-sm nav-contact nav-contact-desktop">Konsultasi <BaseIcon name="arrow" :size="17" /></a>
    <button class="menu-btn" :aria-expanded="open" @click="open = !open" :aria-label="open ? 'Tutup menu' : 'Buka menu'"><BaseIcon :name="open ? 'close' : 'menu'" /></button>
  </div></header>
  <Teleport to="body">
    <Transition name="mobile-menu">
      <div v-if="open" class="mobile-menu-overlay" @click.self="closeMenu">
        <nav class="mobile-menu-panel" aria-label="Navigasi mobile">
          <span class="mobile-nav-status"><i></i> DIGITAL & IT SOLUTIONS</span>
          <NuxtLink v-for="item in nav" :key="item.to" :to="item.to" @click="closeMenu">{{ item.label }}</NuxtLink>
          <a :href="whatsapp" target="_blank" rel="noopener" class="btn mobile-menu-cta" @click="closeMenu">Konsultasi <BaseIcon name="arrow" :size="17" /></a>
        </nav>
      </div>
    </Transition>
  </Teleport>
</template>
