<script setup lang="ts">
useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ComputerRepair'],
      name: 'KOMVEXA TECH',
      url: 'https://komvexatech.com',
      image: 'https://komvexatech.com/images/technician-repairing-laptop.png',
      telephone: '+62-858-8207-9981',
      email: 'muhammadnoval280405@gmail.com',
      description: 'Jasa pembuatan website bisnis, service laptop dan komputer, install ulang Windows, upgrade, dan penggantian sparepart sesuai ketersediaan di Kota Tangerang.',
      address: { '@type': 'PostalAddress', addressLocality: 'Kota Tangerang', addressRegion: 'Banten', addressCountry: 'ID' },
      areaServed: ['Kota Tangerang', 'Tangerang Selatan', 'Karawaci', 'Cikokol', 'Cipondoh', 'Ciledug'],
      knowsAbout: ['Jasa pembuatan website bisnis', 'Service komputer', 'Service laptop', 'Install ulang Windows', 'Upgrade dan penggantian sparepart laptop dan PC'],
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '19:00' }],
      priceRange: 'Rp50.000–Rp1.500.000',
      sameAs: ['https://www.instagram.com/komvexatech']
    })
  }]
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
