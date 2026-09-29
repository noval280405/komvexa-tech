<script setup lang="ts">
import { prices, whatsapp } from '~/data/site'
usePageSeo({ title:'Harga Website Portofolio & IT Support Tangerang | KOMVEXA TECH', description:'Lihat estimasi jasa IT support dan biaya website portofolio berdasarkan pilihan fitur dan ruang lingkup proyek.', path:'/harga', image:'/images/ssd-upgrade.png' })
const highlights = [
  { icon:'app', name:'Website Portofolio', detail:'Company profile dan halaman bisnis', mode:'website', type:'company' },
  { icon:'chip', name:'IT Support', detail:'Service laptop, PC, upgrade, dan maintenance', mode:'support', type:'' }
]
const estimatorServices = [{name:'Install Windows',price:100000},{name:'Cleaning Laptop',price:75000},{name:'Thermal Paste',price:100000},{name:'Upgrade SSD',price:100000},{name:'Upgrade RAM',price:75000},{name:'Recovery Data',price:200000},{name:'Rakit PC',price:250000}]
const websiteServices = [
  { id:'company', name:'Website Portofolio / Company Profile', tiers:{ basic:{label:'Basic',range:[3500000,7500000],included:['Hingga 5 halaman','Desain responsif','Form kontak & WhatsApp']}, standard:{label:'Standard',range:[7500000,12500000],included:['Hingga 10 halaman','CMS untuk edit konten','SEO on-page dasar']}, advanced:{label:'Advanced',range:[12500000,20000000],included:['Desain UI custom','Blog / berita','Integrasi tambahan'] } }, extras:[{id:'cms',name:'CMS / panel edit tambahan',range:[1000000,4000000]},{id:'blog',name:'Modul blog & kategori',range:[1000000,3000000]},{id:'multilingual',name:'Multi bahasa',range:[2000000,5000000]},{id:'booking',name:'Form booking / lead khusus',range:[1000000,4000000]}] },
] as const
type WebsiteTier = 'basic' | 'standard' | 'advanced'
const selectedService = ref(0)
const device = ref('Laptop')
const urgency = ref('Normal')
const estimateMode = ref<'support'|'website'>('support')
const websiteType = ref('company')
const websiteTier = ref<WebsiteTier>('basic')
const websiteExtras = ref<string[]>([])
const estimatorElement = ref<HTMLElement | null>(null)
const estimate = computed(() => estimatorServices[selectedService.value].price + (urgency.value === 'Prioritas' ? 50000 : 0))
const money = (value: number) => new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(value)
const formattedEstimate = computed(() => money(estimate.value))
const currentWebsite = computed(() => websiteServices.find(item => item.id === websiteType.value) || websiteServices[1])
const selectedWebsiteTier = computed(() => currentWebsite.value.tiers[websiteTier.value])
const selectedWebsiteExtras = computed(() => currentWebsite.value.extras.filter(feature => websiteExtras.value.includes(feature.id)))
const websiteEstimate = computed(() => {
  const base = selectedWebsiteTier.value.range
  const additions = selectedWebsiteExtras.value.reduce((sum, feature) => [sum[0] + feature.range[0], sum[1] + feature.range[1]], [0,0])
  return [base[0] + additions[0], base[1] + additions[1]]
})
const formattedWebsiteEstimate = computed(() => `${money(websiteEstimate.value[0])} – ${money(websiteEstimate.value[1])}`)
watch(websiteType, () => { websiteExtras.value = [] })
const estimateWhatsapp = computed(() => {
  const detail = estimateMode.value === 'support'
    ? `estimasi ${estimatorServices[selectedService.value].name} untuk ${device.value}, pengerjaan ${urgency.value}`
    : `estimasi ${currentWebsite.value.name}, paket ${selectedWebsiteTier.value.label}, fitur tambahan: ${selectedWebsiteExtras.value.map(feature => feature.name).join(', ') || 'tidak ada'}`
  return `${whatsapp.split('?')[0]}?text=${encodeURIComponent(`Halo KOMVEXA TECH, saya ingin konsultasi ${detail}.`)}`
})
const selectEstimate = (item: typeof highlights[number]) => {
  estimateMode.value = item.mode
  if (item.mode === 'website') {
    websiteType.value = item.type
    websiteTier.value = 'basic'
    websiteExtras.value = []
  }
  if (import.meta.client) estimatorElement.value?.scrollIntoView({ behavior:'smooth', block:'center' })
}
</script>

<template><div>
  <UiPageHero eyebrow="Harga" title="Estimasi jelas untuk website dan IT support." text="Biaya website dihitung sesuai ruang lingkup proyek. Harga service perangkat tersedia sebagai estimasi jasa."/>
  <section class="section price-page"><div class="container narrow">
    <div class="price-assurance"><span><BaseIcon name="shield"/><b>Harga transparan</b><small>Persetujuan sebelum pengerjaan</small></span><span><BaseIcon name="chat"/><b>Konsultasi gratis</b><small>Ceritakan gejalanya dahulu</small></span><span><BaseIcon name="check"/><b>Testing termasuk</b><small>Perangkat diuji sebelum selesai</small></span></div>
    <UiSectionHeading eyebrow="Layanan populer" title="Solusi website dan dukungan perangkat." text="Diskusikan fitur website untuk mendapat estimasi proyek. Harga service perangkat merupakan estimasi jasa." center/>
    <div class="price-highlights"><article v-for="(h,i) in highlights" :key="h.name" :class="{featured:i===0,selected:estimateMode===h.mode && (h.mode==='support' || websiteType===h.type)}" role="button" tabindex="0" :aria-pressed="estimateMode===h.mode && (h.mode==='support' || websiteType===h.type)" @click="selectEstimate(h)" @keydown.enter="selectEstimate(h)" @keydown.space.prevent="selectEstimate(h)"><span v-if="i===0" class="popular-badge">LAYANAN WEBSITE</span><div><BaseIcon :name="h.icon"/></div><h3>{{h.name}}</h3><p>{{h.detail}}</p><span class="highlight-action">Pilih kalkulator <BaseIcon name="arrow" :size="16"/></span></article></div>
    <div id="estimator" ref="estimatorElement" class="estimator-section"><div class="estimator-copy"><span class="eyebrow">{{estimateMode==='support'?'Estimator IT Support':'Estimator Website'}}</span><h2>{{estimateMode==='support'?'Dapatkan gambaran biaya dalam beberapa klik.':'Rancang website sesuai kebutuhan bisnis.'}}</h2><p v-if="estimateMode==='support'">Pilih kebutuhan perangkat Anda. Hasil ini merupakan estimasi jasa awal dan belum termasuk sparepart.</p><p v-else>Pilih jenis website, paket fitur, dan kebutuhan tambahan untuk melihat kisaran biaya proyek.</p><div class="estimator-points"><span><BaseIcon name="check" :size="16"/> Tidak mengikat</span><span><BaseIcon name="shield" :size="16"/> Dikonfirmasi tim kami</span></div></div><div class="estimator-card"><div class="estimator-head"><span><i></i> QUICK ESTIMATE</span><b>LIVE</b></div>
      <template v-if="estimateMode==='support'"><label>Jenis layanan<select v-model.number="selectedService"><option v-for="(service,i) in estimatorServices" :key="service.name" :value="i">{{service.name}}</option></select></label><div class="estimator-options"><label>Perangkat<select v-model="device"><option>Laptop</option><option>Komputer / PC</option></select></label><label>Pengerjaan<select v-model="urgency"><option>Normal</option><option>Prioritas</option></select></label></div><div class="estimate-result"><small>ESTIMASI JASA MULAI</small><strong>{{formattedEstimate}}</strong><span>*Belum termasuk sparepart dan biaya kunjungan.</span></div><a :href="estimateWhatsapp" target="_blank" rel="noopener" class="btn">Konsultasikan Estimasi <BaseIcon name="arrow" :size="17"/></a></template>
      <template v-else><div class="website-estimator-selects"><label>Jenis website<select v-model="websiteType"><option v-for="service in websiteServices" :key="service.id" :value="service.id">{{service.name}}</option></select></label><label>Paket fitur<select v-model="websiteTier"><option value="basic">Basic</option><option value="standard">Standard</option><option value="advanced">Advanced</option></select></label></div><div class="website-included"><b>Termasuk paket {{selectedWebsiteTier.label}}</b><ul><li v-for="feature in selectedWebsiteTier.included" :key="feature">{{feature}}</li></ul></div><fieldset class="website-extras"><legend>Fitur tambahan (opsional)</legend><label v-for="feature in currentWebsite.extras" :key="feature.id" class="website-feature-option"><input v-model="websiteExtras" type="checkbox" :value="feature.id"><span>{{feature.name}}</span><small>{{money(feature.range[0])}}–{{money(feature.range[1])}}</small></label></fieldset><div class="estimate-result"><small>KISARAN ESTIMASI PROYEK</small><strong>{{formattedWebsiteEstimate}}</strong><span>*Estimasi awal; domain, hosting, dan kebutuhan khusus dapat dihitung terpisah.</span></div><p class="estimate-market-note">Kisaran indikatif dari harga publik penyedia jasa Indonesia seperti <a href="https://studiosoft.id/berapa-biaya-jasa-pembuatan-website/" target="_blank" rel="noopener">StudioSoft</a> dan <a href="https://www.etzalgroup.com/id/services/pembuatan-website/harga" target="_blank" rel="noopener">Etzal Group</a>. Nilai akhir mengikuti scope, desain, integrasi, dan konten.</p><a :href="estimateWhatsapp" target="_blank" rel="noopener" class="btn">Konsultasikan Estimasi <BaseIcon name="arrow" :size="17"/></a></template>
    </div></div>
    <div class="price-table-wrap"><div class="price-table-title"><div><span>PRICE DATABASE</span><h2>Daftar estimasi layanan</h2></div><small>UPDATED // 2026</small></div><div class="price-table"><div class="table-head"><span>Layanan</span><span>Keterangan</span><span>Estimasi</span></div><div v-for="(p,i) in prices" :key="p[0]" class="table-row"><span><i>{{String(i+1).padStart(2,'0')}}</i><b>{{p[0]}}</b></span><span>{{p[1]}}</span><strong>{{p[2]}}</strong></div></div></div>
    <div class="notice"><BaseIcon name="shield"/><div><b>Catatan estimasi</b><p>Harga dapat berubah tergantung kerusakan, tipe perangkat, sparepart, lokasi, dan tingkat kesulitan. Kami selalu meminta persetujuan Anda sebelum pengerjaan.</p></div></div>
    <div class="simple-cta"><div><h3>Belum tahu layanan yang dibutuhkan?</h3><p>Ceritakan gejalanya kepada teknisi kami. Konsultasi awal gratis.</p></div><a :href="whatsapp" class="btn">Tanya Teknisi <BaseIcon name="arrow" :size="18"/></a></div>
  </div></section>
</div></template>
