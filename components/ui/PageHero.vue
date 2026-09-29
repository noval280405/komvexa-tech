<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; text: string }>()
</script>

<template>
  <section class="page-hero page-hero-v2">
    <div class="hero-v2-glow"></div>
    <div class="hero-v2-grid"></div>
    <div class="container hero-v2-layout">
      <div class="hero-v2-copy">
        <div class="breadcrumb">
          <NuxtLink to="/">Beranda</NuxtLink>
          <BaseIcon name="arrow" :size="12" />
          <span>{{ eyebrow }}</span>
        </div>
        <span class="hero-v2-eyebrow"><i></i>{{ eyebrow }}</span>
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
        <div class="hero-v2-actions">
          <NuxtLink to="/kontak" class="hero-v2-cta">Konsultasi kebutuhan <BaseIcon name="arrow" :size="17" /></NuxtLink>
          <span class="hero-v2-response"><i></i> Website Portofolio <b>•</b> IT Support</span>
        </div>
        <div class="hero-v2-trust">
          <span><BaseIcon name="check" :size="15" /> Ruang lingkup jelas</span>
          <span><BaseIcon name="shield" :size="15" /> Pengerjaan teliti</span>
          <span><BaseIcon name="chat" :size="15" /> Mudah dikonsultasikan</span>
        </div>
      </div>

      <div class="hero-v2-visual" aria-hidden="true">
      <span class="floating-tech ft-drive"><BaseIcon name="app" :size="19" /></span>
      <span class="floating-tech ft-temp"><BaseIcon name="chip" :size="19" /></span>
      <span class="floating-tech ft-shield"><BaseIcon name="shield" :size="19" /></span>
      <div class="hero-v2-card">
        <div class="hero-v2-card-top"><span><i></i> KOMVEXA / DIGITAL</span><b>SIAP</b></div>
        <div class="hero-v2-device">
          <span class="device-icon"><BaseIcon name="app" :size="31" /></span>
          <div><small>WEBSITE & IT SUPPORT</small><strong>Tampil profesional.<br>Didukung dengan sigap.</strong></div>
        </div>
        <div class="hero-v2-preview"><div class="hero-v2-preview-top"><span></span><span></span><span></span><small>PROFIL BISNIS</small></div><div class="hero-v2-preview-body"><i></i><div><b>Nama bisnis Anda</b><small>Profil • Layanan • Kontak</small></div><span><BaseIcon name="arrow" :size="14" /></span></div></div>
        <div class="hero-v2-capabilities"><span><BaseIcon name="app" :size="15"/><b>Website Portofolio</b></span><span><BaseIcon name="chip" :size="15"/><b>IT Support</b></span></div>
      </div></div>
    </div>
  </section>
</template>
