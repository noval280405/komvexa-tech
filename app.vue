<script setup lang="ts">
useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ComputerStore'],
      name: 'KOMVEXA TECH',
      url: 'https://komvexatech.com',
      image: 'https://komvexatech.com/images/technician-repairing-laptop.png',
      telephone: '+62-812-3456-7890',
      email: 'halo@komvexatech.com',
      description: 'Jasa service laptop dan komputer, upgrade SSD dan RAM, instalasi Windows, cleaning, recovery data, dan rakit PC di Tangerang.',
      address: { '@type': 'PostalAddress', addressLocality: 'Tangerang', addressRegion: 'Banten', addressCountry: 'ID' },
      areaServed: ['Kota Tangerang', 'Tangerang Selatan', 'Karawaci', 'Cikokol', 'Cipondoh', 'Ciledug'],
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '19:00' }],
      priceRange: 'Rp50.000–Rp500.000',
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
