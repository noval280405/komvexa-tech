<script setup lang="ts">
import { services, whatsapp } from '~/data/site'

usePageSeo({ title: 'Pembuatan Website & Layanan IT Support | KOMVEXA TECH', description: 'Jasa pembuatan website portofolio, sistem admin, e-commerce, serta service laptop, komputer, upgrade dan IT support.', path: '/layanan', image: '/images/laptop-cleaning-detail.png' })

const filter = ref('Semua')
const cats = ['Semua', 'Website', 'Software', 'Maintenance', 'Upgrade', 'Hardware', 'Recovery', 'PC', 'Home Service']
const filtered = computed(() => filter.value === 'Semua' ? services : services.filter(s => s.category === filter.value))
const categoryCount = (category: string) => category === 'Semua' ? services.length : services.filter(s => s.category === category).length
const steps = [
  { title: 'Ceritakan kendalanya', text: 'Sampaikan gejala dan kebutuhan perangkat Anda.', icon: 'chat' },
  { title: 'Periksa & sepakati', text: 'Diagnosa dan estimasi biaya sebelum pengerjaan.', icon: 'tool' },
  { title: 'Servis & uji kembali', text: 'Perangkat ditangani, lalu diperiksa hasilnya.', icon: 'check' },
]
</script>

<template>
  <div class="services-page">
    <UiPageHero eyebrow="Layanan" title="Website, sistem bisnis, dan IT support." text="Kami membangun solusi digital sesuai kebutuhan bisnis serta membantu service dan dukungan perangkat dengan proses yang jelas." />

    <section class="service-directory" aria-labelledby="directory-title">
      <div class="container">
        <div class="directory-heading">
          <div>
            <span class="eyebrow">Perangkat lebih optimal</span>
            <h2 id="directory-title">Solusi untuk bisnis dan perangkat Anda.</h2>
            <p>Pilih layanan digital atau dukungan IT. Kita bahas kebutuhan dan ruang lingkupnya bersama.</p>
          </div>
          <NuxtLink to="/harga" class="directory-price">Lihat daftar harga <BaseIcon name="arrow" :size="18" /></NuxtLink>
        </div>

        <div class="category-filters" role="group" aria-label="Filter kategori layanan">
          <button v-for="category in cats" :key="category" type="button" :class="{ selected: filter === category }" :aria-pressed="filter === category" aria-controls="service-results" @click="filter = category">
            {{ category }} <span>{{ categoryCount(category) }}</span>
          </button>
        </div>
        <div class="directory-caption">
          <p role="status" aria-live="polite">Menampilkan <strong>{{ filtered.length }} layanan</strong>{{ filter === 'Semua' ? ' untuk perangkat Anda' : ` kategori ${filter}` }}</p>
          <span><BaseIcon name="shield" :size="16" /> Pengerjaan setelah persetujuan</span>
        </div>
        <div id="service-results" class="services-grid">
          <UiServiceCard v-for="service in filtered" :key="service.title" :item="service" />
        </div>

        <div class="consultation-note">
          <span class="consultation-icon"><BaseIcon name="chat" :size="24" /></span>
          <div><h3>Belum tahu layanan yang tepat?</h3><p>Ceritakan ide website atau kebutuhan IT Anda. Kami bantu arahkan langkah selanjutnya.</p></div>
          <a :href="whatsapp" class="btn">Konsultasi via WhatsApp <BaseIcon name="arrow" :size="18" /></a>
        </div>
      </div>
    </section>

    <section class="service-process" aria-labelledby="process-title">
      <div class="container">
        <div class="process-heading"><span class="eyebrow">Mudah dari awal</span><h2 id="process-title">Tiga langkah, lebih tenang.</h2><p>Anda tahu apa yang dikerjakan di setiap tahapnya.</p></div>
        <div class="care-steps">
          <article v-for="(step, index) in steps" :key="step.title">
            <div class="step-top"><span class="step-icon"><BaseIcon :name="step.icon" :size="23" /></span><span class="step-number">0{{ index + 1 }}</span></div>
            <h3>{{ step.title }}</h3><p>{{ step.text }}</p>
          </article>
        </div>
        <div class="office-care">
          <span class="office-icon"><BaseIcon name="pc" :size="28" /></span>
          <div><span class="eyebrow">Untuk bisnis & kantor</span><h3>Perangkat tim juga perlu perhatian.</h3><p>Cleaning, update, pemeriksaan, dan troubleshooting berkala untuk komputer kantor.</p></div>
          <a :href="whatsapp">Diskusikan kebutuhan <BaseIcon name="arrow" :size="18" /></a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.service-directory { padding: 72px 0; background: #f7f9fc; }
.directory-heading { display: flex; justify-content: space-between; align-items: center; gap: 32px; margin-bottom: 32px; }
.directory-heading h2, .process-heading h2 { color: #152033; font-size: clamp(28px, 3vw, 38px); line-height: 1.2; letter-spacing: -1.2px; margin-bottom: 14px; }
.directory-heading p, .process-heading p { color: #64748b; max-width: 580px; margin: 0; }
.directory-price { display: inline-flex; align-items: center; gap: 10px; flex-shrink: 0; color: #2563eb; font-size: 14px; font-weight: 700; }
.category-filters { display: flex; flex-wrap: wrap; gap: 9px; padding-bottom: 24px; border-bottom: 1px solid #dfe6f0; }
.category-filters button { display: inline-flex; align-items: center; gap: 10px; padding: 10px 14px; border: 1px solid #dfe6f0; border-radius: 50px; background: #fff; color: #475569; font-size: 12px; font-weight: 600; cursor: pointer; transition: background .2s, border-color .2s; }
.category-filters button span { display: grid; place-items: center; min-width: 22px; height: 22px; border-radius: 50%; background: #edf2f8; font-size: 10px; }
.category-filters button:hover { border-color: #2563eb; }
.category-filters button.selected { color: #fff; background: #2563eb; border-color: #2563eb; box-shadow: 0 4px 12px #2563eb22; }
.category-filters button.selected span { background: #ffffff26; }
.services-page :is(button, a):focus-visible { outline: 3px solid #2563eb; outline-offset: 5px; }
.directory-caption { display: flex; justify-content: space-between; gap: 16px; margin: 22px 0; color: #64748b; font-size: 12px; }
.directory-caption p { margin: 0; }
.directory-caption strong { color: #334155; }
.directory-caption > span { display: flex; align-items: center; gap: 7px; }
.services-grid { align-items: stretch; }
.consultation-note { display: flex; align-items: center; gap: 20px; margin-top: 32px; padding: 26px; border: 1px solid #d6e5fc; border-radius: 16px; background: #edf4ff; }
.consultation-icon, .step-icon, .office-icon { display: grid; place-items: center; flex-shrink: 0; width: 50px; height: 50px; border-radius: 14px; background: #fff; color: #2563eb; }
.consultation-note h3 { font-size: 17px; margin-bottom: 5px; color: #152033; }
.consultation-note p { font-size: 13px; color: #64748b; margin: 0; }
.consultation-note .btn { margin-left: auto; flex-shrink: 0; }
.service-process { padding: 72px 0; background: #fff; }
.process-heading { text-align: center; margin-bottom: 36px; }
.process-heading p { margin: 0 auto; }
.care-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.care-steps article { padding: 28px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; }
.step-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
.step-icon { background: #eaf1ff; }
.step-number { font-family: 'Space Grotesk', sans-serif; font-size: 32px; color: #b6c5d9; }
.care-steps h3 { font-size: 19px; color: #152033; margin-bottom: 9px; }
.care-steps p { font-size: 14px; color: #64748b; margin: 0; }
.office-care { display: flex; align-items: center; gap: 22px; margin-top: 40px; padding-top: 32px; border-top: 1px solid #e2e8f0; }
.office-icon { width: 60px; height: 60px; background: #eff6ff; }
.office-care .eyebrow { font-size: 10px; margin-bottom: 6px; }
.office-care h3 { color: #152033; font-size: 20px; margin-bottom: 6px; }
.office-care p { color: #64748b; font-size: 13px; margin: 0; }
.office-care a { display: inline-flex; align-items: center; gap: 10px; margin-left: auto; flex-shrink: 0; font-size: 13px; font-weight: 700; color: #2563eb; }
@media (max-width: 900px) {
  .consultation-note { flex-wrap: wrap; }
  .consultation-note .btn { margin-left: 70px; }
  .care-steps { gap: 14px; }
  .care-steps article { padding: 20px; }
  .office-care { flex-wrap: wrap; }
  .office-care a { margin-left: 82px; }
}
@media (max-width: 600px) {
  .service-directory, .service-process { padding: 44px 0; }
  .directory-heading { align-items: flex-start; flex-direction: column; gap: 18px; }
  .category-filters { gap: 8px; }
  .category-filters button { padding: 8px 12px; }
  .directory-caption { flex-direction: column; gap: 8px; }
  .services-grid, .care-steps { grid-template-columns: 1fr; }
  .consultation-note { padding: 22px; align-items: flex-start; gap: 14px; }
  .consultation-note .btn { margin-left: 0; width: 100%; }
  .office-care { align-items: flex-start; gap: 16px; }
  .office-care > div { flex: 1; min-width: 180px; }
  .office-care a { margin-left: 0; }
}
</style>
