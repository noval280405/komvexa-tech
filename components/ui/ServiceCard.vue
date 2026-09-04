<script setup lang="ts">
const props = defineProps<{ item: any }>()
const serviceImage = computed(() => {
  if (['windows', 'app'].includes(props.item.icon)) return '/images/windows-installation.png'
  if (['drive', 'chip', 'recover'].includes(props.item.icon)) return '/images/ssd-upgrade.png'
  if (['pc', 'home'].includes(props.item.icon)) return '/images/pc-build.png'
  return '/images/laptop-cleaning-detail.png'
})
</script>
<template><article class="service-card service-card-photo"><div class="service-photo"><img :src="serviceImage" :alt="`Proses ${item.title}`" width="1536" height="1152" loading="lazy"><span class="card-tag">{{ item.category }}</span></div><div class="service-card-body"><div class="service-icon"><BaseIcon :name="item.icon" /></div><h3>{{ item.title }}</h3><p>{{ item.text }}</p><div class="service-bottom"><strong>{{ item.price }}</strong><NuxtLink to="/kontak" aria-label="Konsultasi"><BaseIcon name="arrow" :size="19" /></NuxtLink></div></div></article></template>
