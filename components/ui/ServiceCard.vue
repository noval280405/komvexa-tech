<script setup lang="ts">
const props = defineProps<{ item: any }>()
const serviceImage = computed(() => {
  if (['windows', 'app'].includes(props.item.icon)) return '/images/windows-installation.png'
  if (['drive', 'chip', 'recover'].includes(props.item.icon)) return '/images/ssd-upgrade.png'
  if (['pc', 'home'].includes(props.item.icon)) return '/images/pc-build.png'
  return '/images/laptop-cleaning-detail.png'
})
</script>
<template><article class="service-card service-card-photo"><div v-if="item.category === 'Website'" class="service-photo digital-service-art"><span class="digital-art-window"><i></i><i></i><i></i><b></b><em></em></span><span class="card-tag">{{ item.category }}</span></div><div v-else class="service-photo"><img :src="serviceImage" :alt="`Proses ${item.title}`" width="1536" height="1152" loading="lazy"><span class="card-tag">{{ item.category }}</span></div><div class="service-card-body"><div class="service-icon"><BaseIcon :name="item.icon" /></div><h3>{{ item.title }}</h3><p>{{ item.text }}</p><div class="service-bottom"><strong>{{ item.price }}</strong><NuxtLink to="/kontak" aria-label="Konsultasi"><BaseIcon name="arrow" :size="19" /></NuxtLink></div></div></article></template>
<style scoped>
.digital-service-art{display:grid;place-items:center;overflow:hidden;background:radial-gradient(circle at 75% 20%,#60a5fa66,transparent 34%),linear-gradient(135deg,#0b1730,#173a70)}.digital-art-window{position:relative;display:block;width:56%;height:62%;border:1px solid #bfdbfe55;border-radius:12px;background:linear-gradient(145deg,#ffffff20,#ffffff08);box-shadow:0 18px 45px #02061755;transform:perspective(500px) rotateY(-8deg) rotateX(3deg)}.digital-art-window i{position:relative;display:inline-block;width:5px;height:5px;margin:11px 0 0 9px;border-radius:50%;background:#93c5fd}.digital-art-window b,.digital-art-window em{position:absolute;left:12%;right:12%;height:8px;border-radius:5px;background:#ffffff24}.digital-art-window b{top:35%}.digital-art-window em{top:53%;right:35%;box-shadow:0 22px 0 #60a5fa99}.digital-service-art .card-tag{position:absolute;right:15px;top:15px}
</style>
