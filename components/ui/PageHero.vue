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
        <div class="hero-v2-trust">
          <span><BaseIcon name="check" :size="15" /> Transparan</span>
          <span><BaseIcon name="shield" :size="15" /> Aman & teliti</span>
          <span><BaseIcon name="chat" :size="15" /> Mudah dipahami</span>
        </div>
      </div>

      <div class="hero-v2-visual" aria-hidden="true">
      <span class="floating-tech ft-drive"><BaseIcon name="drive" :size="19" /></span>
      <span class="floating-tech ft-temp"><BaseIcon name="temp" :size="19" /></span>
      <span class="floating-tech ft-shield"><BaseIcon name="shield" :size="19" /></span>
      <div class="hero-v2-card">
        <div class="hero-v2-card-top"><span><i></i> Service status</span><b>ONLINE</b></div>
        <div class="hero-v2-device">
          <span class="device-icon"><BaseIcon name="chip" :size="34" /></span>
          <div><small>DEVICE CARE</small><strong>Diagnosa presisi.<br>Solusi yang jelas.</strong></div>
        </div>
        <div class="hero-v2-progress"><div><span>System check</span><b>98%</b></div><i><em></em></i></div>
        <div class="hero-v2-stats"><span><b>500+</b><small>Perangkat</small></span><span><b>7 tahap</b><small>Quality check</small></span><span><b>100%</b><small>Persetujuan</small></span></div>
      </div></div>
    </div>
  </section>
</template>
